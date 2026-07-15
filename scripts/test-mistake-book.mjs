/**
 * test-mistake-book.mjs
 *
 * 独立测试错题本功能：
 *   1. 插入几道模拟 quiz_records 记录（含 page_path）
 *   2. 调用 getMistakes 逻辑查询最近一次 wrong 的题目
 *   3. 验证 page_path 能被正确返回
 *   4. 验证只返回最新一条记录（去重正确）
 *   5. 验证正确作答的题目不会出现在错题本
 *   6. 清理测试数据
 *
 * 用法：node scripts/test-mistake-book.mjs
 */

const SUPABASE_URL = 'https://wzvxktmumjzzslgrhagi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_sSPD8PWY0Vx145wVVj_fhA_Si7Fan9c';

const headers = {
  'Content-Type': 'application/json',
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
};

const TEST_LEARNER = 'test_mistake_book_' + Date.now();

// ─── 模拟 getMistakes ───
async function getMistakes(learnerId) {
  var url = SUPABASE_URL + '/rest/v1/quiz_records?learner_id=eq.' + encodeURIComponent(learnerId) + '&order=created_at.desc&select=question_id,is_correct,created_at,page_path';
  var res;
  try {
    res = await fetch(url, { headers: headers });
  } catch (e) {
    console.warn('[supabase] getMistakes 查询失败:', e.message);
    return [];
  }
  var rows = await res.json();
  if (!rows || rows.length === 0) return [];

  // 按 question_id 去重，保留最新一条记录
  var latestMap = {};
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    if (!latestMap[r.question_id]) {
      latestMap[r.question_id] = r;
    }
  }

  // 过滤出最后作答是 wrong 的题目
  var result = [];
  for (var qid in latestMap) {
    if (!latestMap[qid].is_correct) {
      result.push({
        question_id: qid,
        last_wrong_at: latestMap[qid].created_at,
        page_path: latestMap[qid].page_path || null,
      });
    }
  }
  return result;
}

// ─── 插入一条 quiz_record ───
async function insertRecord(questionId, isCorrect, pagePath) {
  var url = SUPABASE_URL + '/rest/v1/quiz_records';
  var body = {
    learner_id: TEST_LEARNER,
    question_id: questionId,
    is_correct: isCorrect,
    page_path: pagePath || null,
  };
  var res = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    var text = await res.text();
    console.error('  插入失败 [' + questionId + ']:', res.status, text);
    return null;
  }
  return res.json();
}

// ─── 清理 ───
async function cleanup() {
  var url = SUPABASE_URL + '/rest/v1/quiz_records?learner_id=eq.' + encodeURIComponent(TEST_LEARNER);
  var res = await fetch(url, { method: 'DELETE', headers: headers });
  if (res.ok) {
    console.log('  清理完成');
  } else {
    var text = await res.text();
    console.log('  清理状态:', res.status, text);
  }
}

// ─── 测试逻辑 ───

async function main() {
  console.log('=== 错题本 getMistakes 测试 ===');
  console.log('测试学习者:', TEST_LEARNER);
  console.log('');

  // ── 1. 插入测试数据 ──
  console.log('--- [1] 插入测试数据 ---');

  // 题目 A：先错后对 → 最终不算错题
  var r1 = await insertRecord('q_wrong_then_correct', false, '/page-a.html');
  console.log(r1 ? '  ✓ 插入 q_wrong_then_correct (wrong)' : '  ✗ 失败');
  var r2 = await insertRecord('q_wrong_then_correct', true, '/page-a.html');
  console.log(r2 ? '  ✓ 插入 q_wrong_then_correct (correct) — 覆盖' : '  ✗ 失败');

  // 题目 B：只错一次 → 应出现在错题本
  var r3 = await insertRecord('q_always_wrong', false, '/page-b.html');
  console.log(r3 ? '  ✓ 插入 q_always_wrong (wrong)' : '  ✗ 失败');

  // 题目 C：错两次 → 去重后只保留一条
  var r4 = await insertRecord('q_wrong_twice', false, '/page-c.html');
  console.log(r4 ? '  ✓ 插入 q_wrong_twice (wrong) 第一次' : '  ✗ 失败');
  var r5 = await insertRecord('q_wrong_twice', false, '/page-c.html');
  console.log(r5 ? '  ✓ 插入 q_wrong_twice (wrong) 第二次' : '  ✗ 失败');

  // 题目 D：一直正确 → 不应出现
  var r6 = await insertRecord('q_always_correct', true, '/page-d.html');
  console.log(r6 ? '  ✓ 插入 q_always_correct (correct)' : '  ✗ 失败');

  // 题目 E：无 page_path → 返回 null
  var r7 = await insertRecord('q_no_page_path', false, null);
  console.log(r7 ? '  ✓ 插入 q_no_page_path (wrong, 无 page_path)' : '  ✗ 失败');

  console.log('');

  // ── 2. 查询 ──
  console.log('--- [2] 查询 getMistakes ---');
  var mistakes = await getMistakes(TEST_LEARNER);
  console.log('  返回 ' + mistakes.length + ' 条错题');
  if (mistakes.length === 0) {
    console.log('  （空，无错题）');
  } else {
    mistakes.forEach(function (m) {
      console.log('    ─ ' + m.question_id);
      console.log('       last_wrong_at:', m.last_wrong_at);
      console.log('       page_path:', JSON.stringify(m.page_path));
    });
  }
  console.log('');

  // ── 3. 验证 ──
  console.log('--- [3] 验证结果 ---');

  var passed = 0;
  var failed = 0;

  function check(desc, ok) {
    if (ok) {
      console.log('  ✓ ' + desc);
      passed++;
    } else {
      console.log('  ✗ ' + desc);
      failed++;
    }
  }

  var ids = mistakes.map(function (m) { return m.question_id });

  check('q_wrong_then_correct 不在错题本（最后一次正确）', !ids.includes('q_wrong_then_correct'));
  check('q_always_wrong 在错题本', ids.includes('q_always_wrong'));
  check('q_wrong_twice 在错题本（去重后只一条）', ids.includes('q_wrong_twice'));
  check('q_always_correct 不在错题本', !ids.includes('q_always_correct'));
  check('q_no_page_path 在错题本', ids.includes('q_no_page_path'));

  // 验证 page_path 字段
  var alwaysWrong = mistakes.find(function (m) { return m.question_id === 'q_always_wrong' });
  check('q_always_wrong 的 page_path 为 "/page-b.html"', alwaysWrong && alwaysWrong.page_path === '/page-b.html');

  var noPage = mistakes.find(function (m) { return m.question_id === 'q_no_page_path' });
  check('q_no_page_path 的 page_path 为 null', noPage && noPage.page_path === null);

  // 验证 q_wrong_twice 只出现一次
  var twiceCount = mistakes.filter(function (m) { return m.question_id === 'q_wrong_twice' }).length;
  check('q_wrong_twice 去重正确（只出现 1 次）', twiceCount === 1);

  console.log('');
  console.log('--- 汇总 ---');
  console.log('  通过: ' + passed + ' / ' + (passed + failed));
  console.log('  失败: ' + failed + ' / ' + (passed + failed));
  console.log('');

  // ── 4. 清理 ──
  console.log('--- [4] 清理测试数据 ---');
  await cleanup();
  console.log('');

  if (failed > 0) {
    console.log('!!! 部分测试失败 !!!');
    process.exit(1);
  } else {
    console.log('=== 全部通过 ===');
  }
}

main().catch(function (err) {
  console.error('测试异常:', err);
  process.exit(1);
});
