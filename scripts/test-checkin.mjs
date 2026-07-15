/**
 * test-checkin.mjs
 *
 * 独立测试 Supabase checkin 功能的幂等性。
 * 不依赖 supabase.js（避免 CJS/ESM 冲突），直接 fetch REST API。
 *
 * 用法：node scripts/test-checkin.mjs
 *
 * 测试内容：
 *   1. 首次打卡 ✅
 *   2. 查询打卡记录 ✅
 *   3. 同一天重复打卡 → 验证不产生重复记录 ✅
 */

const SUPABASE_URL = 'https://wzvxktmumjzzslgrhagi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_sSPD8PWY0Vx145wVVj_fhA_Si7Fan9c';

const headers = {
  'Content-Type': 'application/json',
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
};

function formatDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

async function upsertCheckin(learnerId, dateStr) {
  const url = SUPABASE_URL + '/rest/v1/checkins';
  return fetch(url, {
    method: 'POST',
    headers: Object.assign({}, headers, {
      'Prefer': 'resolution=merge-duplicates',
    }),
    body: JSON.stringify({
      learner_id: learnerId,
      checkin_date: dateStr,
    }),
  });
}

async function getCheckins(learnerId, sinceDateStr) {
  const url = SUPABASE_URL + '/rest/v1/checkins?learner_id=eq.' + encodeURIComponent(learnerId) + '&checkin_date=gte.' + sinceDateStr + '&select=checkin_date';
  const res = await fetch(url, { headers });
  const rows = await res.json();
  if (!rows || !Array.isArray(rows)) return [];
  return rows.map(function (r) { return r.checkin_date });
}

// ─── 测试逻辑 ───

const TEST_LEARNER = 'test_learner_checkin_script';
const today = formatDate(new Date());
const thirtyDaysAgo = formatDate(new Date(Date.now() - 30 * 86400000));

async function main() {
  console.log('=== Checkin 幂等性测试 ===');
  console.log('测试学习者:', TEST_LEARNER);
  console.log('今天日期:', today);
  console.log('30天前:', thirtyDaysAgo);
  console.log('');

  // ── 1. 第一次打卡 ──
  console.log('--- [1] 首次打卡 ---');
  const r1 = await upsertCheckin(TEST_LEARNER, today);
  if (r1) {
    console.log('  状态:', r1.status, r1.statusText);
    if (r1.ok) {
      console.log('  ✓ 打卡成功');
    } else {
      const body = await r1.text();
      console.log('  ✗ 失败:', body);
    }
  } else {
    console.log('  ✗ 返回 null/undefined（网络错误?）');
  }
  console.log('');

  // ── 2. 查询打卡记录 ──
  console.log('--- [2] 查询打卡记录 ---');
  const dates = await getCheckins(TEST_LEARNER, thirtyDaysAgo);
  console.log('  查到', dates.length, '条记录:', dates.length > 0 ? dates.join(', ') : '(空)');
  const found = dates.includes(today);
  console.log(found ? '  ✓ 包含今天的打卡' : '  ✗ 未找到今天记录');
  console.log('');

  // ── 3. 重复打卡（同一天） ──
  console.log('--- [3] 重复打卡（同一天）→ 验证 Upsert 幂等 ---');
  const r2 = await upsertCheckin(TEST_LEARNER, today);
  if (r2) {
    console.log('  状态:', r2.status, r2.statusText);
    if (r2.ok) {
      console.log('  ✓ 重复打卡未报错');
    } else {
      const body = await r2.text();
      console.log('  ✗ 失败:', body);
    }
  } else {
    console.log('  ✗ 返回 null/undefined（网络错误?）');
  }

  // 验证记录数
  const dates2 = await getCheckins(TEST_LEARNER, thirtyDaysAgo);
  const count = dates2.filter(d => d === today).length;
  console.log('  今天记录出现次数:', count);
  console.log(count === 1 ? '  ✓ 无重复记录 —— UNIQUE 约束有效!' : '  ✗ 出现重复记录，UNIQUE 约束缺失');
  console.log('');

  console.log('=== 测试完成 ===');
}

main().catch(function (err) {
  console.error('测试异常:', err);
  process.exit(1);
});
