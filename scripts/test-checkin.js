/**
 * test-checkin.js
 *
 * 独立测试脚本，不依赖浏览器，直接调用 docs/.vuepress/utils/supabase.js 里的打卡函数。
 * 用法：node scripts/test-checkin.js
 */

import { upsertCheckin, getCheckins, formatDate } from '../docs/.vuepress/utils/supabase.js'

const TEST_LEARNER = 'test_learner_checkin_script'
const today = formatDate(new Date())
const thirtyDaysAgo = formatDate(new Date(Date.now() - 30 * 86400000))

async function main() {
  console.log('=== Checkin 测试 ===')
  console.log('测试学习者:', TEST_LEARNER)
  console.log('今天日期:', today)
  console.log('30天前:', thirtyDaysAgo)
  console.log('')

  // ── 1. 第一次打卡 ──
  console.log('--- 1. 首次打卡 ---')
  const r1 = await upsertCheckin(TEST_LEARNER, today)
  if (r1) {
    console.log('状态:', r1.status, r1.statusText)
    if (r1.ok) {
      console.log('✓ 打卡成功')
    } else {
      const body = await r1.text()
      console.log('✗ 失败:', body)
    }
  } else {
    console.log('✗ 返回 undefined（catch 捕获了错误）')
  }
  console.log('')

  // ── 2. 查询最近30天 ──
  console.log('--- 2. 查询打卡记录 ---')
  const dates = await getCheckins(TEST_LEARNER, thirtyDaysAgo)
  console.log('查到', dates.length, '条记录:', dates.length > 0 ? dates.join(', ') : '(空)')
  const found = dates.includes(today)
  console.log(found ? '✓ 包含今天的打卡' : '✗ 未找到今天记录')
  console.log('')

  // ── 3. 重复打卡（同一天） ──
  console.log('--- 3. 重复打卡（同一天） ---')
  const r2 = await upsertCheckin(TEST_LEARNER, today)
  if (r2) {
    console.log('状态:', r2.status, r2.statusText)
    if (r2.ok) {
      console.log('✓ 重复打卡未报错（upsert 幂等）')
    } else {
      const body = await r2.text()
      console.log('✗ 失败:', body)
    }
  } else {
    console.log('✗ 返回 undefined（catch 捕获了错误）')
  }
  // 验证没有多出重复记录
  const dates2 = await getCheckins(TEST_LEARNER, thirtyDaysAgo)
  const count = dates2.filter(d => d === today).length
  console.log('今天记录出现次数:', count)
  console.log(count === 1 ? '✓ 无重复记录，unique 约束生效' : '✗ 出现重复记录')
  console.log('')

  console.log('=== 测试完成 ===')
}

main().catch(function (err) {
  console.error('测试异常:', err)
  process.exit(1)
})
