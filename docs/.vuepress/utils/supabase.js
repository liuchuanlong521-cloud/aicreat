/**
 * Supabase 工具模块
 *
 * 不使用 @supabase/supabase-js 包（VuePress 1.x / webpack 4 不兼容其 .mjs 依赖），
 * 直接通过 fetch 调用 Supabase REST API。
 */

const SUPABASE_URL = 'https://wzvxktmumjzzslgrhagi.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_sSPD8PWY0Vx145wVVj_fhA_Si7Fan9c'

const headers = {
  'Content-Type': 'application/json',
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
}

/**
 * 获取匿名学习者 ID
 * 首次访问时用 Date.now() + 随机数生成，存入 localStorage
 */
export function getLearnerId() {
  var key = 'learner_id'
  var id = localStorage.getItem(key)
  if (!id) {
    id = 'learner_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8)
    localStorage.setItem(key, id)
  }
  return id
}

/**
 * 插入一条答题记录
 */
export function insertAnswerRecord(record) {
  var url = SUPABASE_URL + '/rest/v1/quiz_records'
  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      learner_id: record.learner_id,
      question_id: record.question_id,
      is_correct: record.is_correct,
    }),
  })
}

/**
 * 获取指定题目的全站正确率（正确数 / 总数）
 */
export function getGlobalAccuracy(questionId) {
  var url = SUPABASE_URL + '/rest/v1/quiz_records?question_id=eq.' + questionId + '&select=is_correct'
  return fetch(url, { headers: headers })
    .then(function (res) { return res.json() })
    .then(function (rows) {
      if (!rows || rows.length === 0) return null
      var total = rows.length
      var correct = rows.filter(function (r) { return r.is_correct }).length
      return { correct: correct, total: total, rate: Math.round((correct / total) * 100) }
    })
}

/**
 * 获取学习者的全部错题（最近一次作答为 wrong 的题目）
 * 只返回 { question_id, last_wrong_at }，题目内容由本地 questionBank 填充
 */
export async function getMistakes(learnerId) {
  var url = SUPABASE_URL + '/rest/v1/quiz_records?learner_id=eq.' + encodeURIComponent(learnerId) + '&order=created_at.desc&select=question_id,is_correct,created_at,page_path'
  var res
  try {
    res = await fetch(url, { headers: headers })
  } catch (e) {
    console.warn('[supabase] getMistakes 查询失败:', e.message)
    return []
  }
  var rows = await res.json()
  if (!rows || rows.length === 0) return []

  // 按 question_id 去重，保留最新一条记录
  var latestMap = {}
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i]
    if (!latestMap[r.question_id]) {
      latestMap[r.question_id] = r
    }
  }

  // 过滤出最后作答是 wrong 的题目
  var result = []
  for (var qid in latestMap) {
    if (!latestMap[qid].is_correct) {
      result.push({
        question_id: qid,
        last_wrong_at: latestMap[qid].created_at,
        page_path: latestMap[qid].page_path || null,
      })
    }
  }
  return result
}

// ============================================================
//  打卡 / Streak
// ============================================================

/**
 * 将 Date 对象转为 YYYY-MM-DD（本地时区）
 */
export function formatDate(d) {
  var y = d.getFullYear()
  var m = String(d.getMonth() + 1).padStart(2, '0')
  var day = String(d.getDate()).padStart(2, '0')
  return y + '-' + m + '-' + day
}

/**
 * 打卡 upsert，按 (learner_id, checkin_date) 去重
 * 要求表 checkins 有 unique 约束或 on_conflict 支持
 */
export function upsertCheckin(learnerId, dateStr) {
  var url = SUPABASE_URL + '/rest/v1/checkins'
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
      'Prefer': 'resolution=merge-duplicates',
    },
    body: JSON.stringify({
      learner_id: learnerId,
      checkin_date: dateStr,
    }),
  }).catch(function (e) {
    console.warn('[supabase] upsertCheckin 失败（已静默）:', e.message)
  })
}

/**
 * 获取某日期之后的所有打卡日期
 * 返回日期字符串数组，如 ['2026-06-15', '2026-06-16', …]
 */
export function getCheckins(learnerId, sinceDateStr) {
  var url = SUPABASE_URL + '/rest/v1/checkins?learner_id=eq.' + encodeURIComponent(learnerId) + '&checkin_date=gte.' + sinceDateStr + '&select=checkin_date'
  return fetch(url, { headers: headers })
    .then(function (res) { return res.json() })
    .then(function (rows) {
      if (!rows || !Array.isArray(rows)) return []
      return rows.map(function (r) { return r.checkin_date })
    })
    .catch(function (e) {
      console.warn('[supabase] getCheckins 失败（已静默）:', e.message)
      return []
    })
}
