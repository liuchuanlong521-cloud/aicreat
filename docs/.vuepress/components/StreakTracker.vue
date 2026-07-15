<template>
  <div class="streak-tracker">
    <div class="st-header">
      <span class="st-title">🔥 打卡热力图</span>
    </div>

    <!-- loading -->
    <div v-if="loading" class="st-loading">
      <div class="st-loading-spinner"></div>
      <span>加载打卡数据…</span>
    </div>

    <!-- 数据面板 -->
    <div v-else class="st-body">
      <div class="st-stats">
        <div class="st-stat">
          <span class="st-stat-num">{{ streak }}</span>
          <span class="st-stat-label">当前连续天数</span>
        </div>
        <div class="st-stat">
          <span class="st-stat-num">{{ bestStreak }}</span>
          <span class="st-stat-label">最长连续</span>
        </div>
        <div class="st-stat">
          <span class="st-stat-num">{{ totalDays }}</span>
          <span class="st-stat-label">累计打卡</span>
        </div>
      </div>

      <!-- 热力图 -->
      <div class="st-heatmap">
        <!-- 周行标签 -->
        <div class="st-days-label">
          <span v-for="d in dayLabels" :key="d" class="st-day-label">{{ d }}</span>
        </div>
        <!-- 格子网格，按周（列）排列 -->
        <div class="st-grid-wrap">
          <div v-for="(week, wi) in weeks" :key="wi" class="st-week-col">
            <div
              v-for="(day, di) in week"
              :key="di"
              class="st-cell"
              :class="cellClass(day)"
              :title="day.date ? day.date + (day.checked ? ' ✅' : '') : ''"
            >
              <span v-if="day.today" class="st-today-dot"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="st-legend">
        <span class="st-legend-label">少</span>
        <span class="st-legend-cell st-lv0"></span>
        <span class="st-legend-cell st-lv1"></span>
        <span class="st-legend-cell st-lv2"></span>
        <span class="st-legend-cell st-lv3"></span>
        <span class="st-legend-label">多</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getLearnerId, getCheckins, formatDate } from '../utils/supabase'

var DAY_LABELS = ['日', '一', '二', '三', '四', '五', '六']

export default {
  name: 'StreakTracker',
  data: function () {
    return {
      loading: true,
      checkinSet: {},      // { 'YYYY-MM-DD': true }
      weeks: [],           // 2D 数组 [weekIndex][dayIndex]
      streak: 0,
      bestStreak: 0,
      totalDays: 0,
    }
  },
  computed: {
    dayLabels: function () { return DAY_LABELS },
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loading = true
      try {
        var learnerId = getLearnerId()
        // 拉取过去 365 天的打卡数据
        var fromDate = new Date()
        fromDate.setDate(fromDate.getDate() - 365)
        var fromStr = formatDate(fromDate)
        var dates = await getCheckins(learnerId, fromStr)
        this.checkinSet = {}
        for (var i = 0; i < dates.length; i++) {
          this.checkinSet[dates[i]] = true
        }

        this.buildHeatmap(fromDate)
        this.calcStreaks()
      } catch (e) {
        console.warn('[StreakTracker] 加载失败:', e.message)
      } finally {
        this.loading = false
      }
    },

    // 构建热力图网格
    buildHeatmap: function (fromDate) {
      var today = new Date()
      today.setHours(0, 0, 0, 0)
      var from = new Date(fromDate)
      from.setHours(0, 0, 0, 0)

      // 确保从周日开始
      var start = new Date(from)
      start.setDate(start.getDate() - start.getDay())

      var weeks = []
      var current = new Date(start)
      var week = []

      // 填充起始空白
      for (var d = 0; d < 7; d++) {
        var dayDate = new Date(start)
        dayDate.setDate(start.getDate() + d)
        if (dayDate < from) {
          week.push(this.makeDay(null, false, false))
        }
      }

      while (current <= today || week.length > 0) {
        var dateStr = formatDate(current)
        var isToday = current.getTime() === today.getTime()
        var checked = !!this.checkinSet[dateStr]

        week.push(this.makeDay(dateStr, checked, isToday))

        if (week.length === 7) {
          weeks.push(week)
          week = []
        }

        current.setDate(current.getDate() + 1)
        // 超出 today 后就不再新增 day 对象
        if (current > today && week.length === 0) break
      }

      this.weeks = weeks
    },

    makeDay: function (dateStr, checked, today) {
      return { date: dateStr, checked: checked, today: today }
    },

    // 计算连续天数和总天数
    calcStreaks: function () {
      var today = new Date()
      today.setHours(0, 0, 0, 0)
      var dates = Object.keys(this.checkinSet).sort()
      this.totalDays = dates.length

      if (dates.length === 0) {
        this.streak = 0
        this.bestStreak = 0
        return
      }

      // 计算当前连续
      var currentStreak = 0
      var cursor = new Date(today)
      // 如果今天没打卡，从昨天开始算
      if (!this.checkinSet[formatDate(cursor)]) {
        cursor.setDate(cursor.getDate() - 1)
      }
      while (this.checkinSet[formatDate(cursor)]) {
        currentStreak++
        cursor.setDate(cursor.getDate() - 1)
      }
      this.streak = currentStreak

      // 计算最长连续
      var best = 0
      var run = 0
      var prevDate = null
      for (var i = 0; i < dates.length; i++) {
        if (prevDate === null) {
          run = 1
        } else {
          var diff = this.dayDiff(prevDate, dates[i])
          if (diff === 1) {
            run++
          } else {
            run = 1
          }
        }
        if (run > best) best = run
        prevDate = dates[i]
      }
      this.bestStreak = best
    },

    dayDiff: function (d1, d2) {
      var a = new Date(d1)
      var b = new Date(d2)
      return Math.round((b - a) / (1000 * 60 * 60 * 24))
    },

    cellClass: function (day) {
      if (!day || !day.date) return 'st-empty'
      if (!day.checked) return 'st-lv0'
      // 给不同打卡量分等级——简单按有无区分，后续可优化为按连续周天数染色
      return 'st-lv3'
    },
  },
}
</script>

<style scoped>
.streak-tracker {
  font-family: 'Georgia', 'Times New Roman', serif;
  max-width: 740px;
  margin: 0 auto;
}

.st-header {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 28px;
  padding-bottom: 14px;
  border-bottom: 2px solid #2C4A3E;
}

.st-title {
  font-size: 24px;
  font-weight: bold;
  color: #2C4A3E;
}

/* loading */
.st-loading {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  padding: 60px 0;
  color: #666;
  font-size: 16px;
}

.st-loading-spinner {
  width: 22px;
  height: 22px;
  border: 3px solid #d4cdbf;
  border-top-color: #2C4A3E;
  border-radius: 50%;
  animation: st-spin 0.7s linear infinite;
}

@keyframes st-spin {
  to { transform: rotate(360deg); }
}

/* stats */
.st-stats {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.st-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F5F0E6;
  border: 2px solid #2C4A3E;
  border-radius: 12px;
  padding: 18px 28px;
  min-width: 120px;
}

.st-stat-num {
  font-size: 36px;
  font-weight: bold;
  color: #2C4A3E;
  line-height: 1.2;
}

.st-stat-label {
  font-size: 13px;
  color: #777;
  margin-top: 4px;
}

/* heatmap grid */
.st-heatmap {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.st-days-label {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-top: 0;
  flex-shrink: 0;
}

.st-day-label {
  height: 14px;
  font-size: 10px;
  color: #999;
  line-height: 14px;
  width: 14px;
  text-align: center;
}

.st-grid-wrap {
  display: flex;
  gap: 3px;
}

.st-week-col {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.st-cell {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  position: relative;
  cursor: default;
}

.st-today-dot {
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #C0392B;
  border: 1px solid #fff;
}

/* cell levels */
.st-empty {
  background: transparent;
}
.st-lv0 {
  background: #ebedf0;
}
.st-lv1 {
  background: #c6e48b;
}
.st-lv2 {
  background: #7bc96f;
}
.st-lv3 {
  background: #196127;
}

/* legend */
.st-legend {
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;
  margin-top: 12px;
}

.st-legend-label {
  font-size: 11px;
  color: #999;
}

.st-legend-cell {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

/* responsive */
@media (max-width: 600px) {
  .st-stats {
    gap: 10px;
  }
  .st-stat {
    padding: 12px 16px;
    min-width: 90px;
  }
  .st-stat-num {
    font-size: 28px;
  }
  .st-cell {
    width: 11px;
    height: 11px;
  }
  .st-day-label {
    font-size: 9px;
    width: 12px;
  }
}

@media (max-width: 480px) {
  .st-header {
    gap: 10px;
  }
  .st-title {
    font-size: 18px;
  }
  .st-stats {
    gap: 6px;
  }
  .st-stat {
    padding: 8px 12px;
    min-width: 70px;
  }
  .st-stat-num {
    font-size: 22px;
  }
  .st-stat-label {
    font-size: 11px;
  }
  .st-cell {
    width: 9px;
    height: 9px;
  }
  .st-week-col {
    gap: 2px;
  }
  .st-grid-wrap {
    gap: 2px;
  }
  .st-day-label {
    font-size: 8px;
    height: 10px;
    line-height: 10px;
    width: 9px;
  }
  .st-today-dot {
    width: 3px;
    height: 3px;
    bottom: -1px;
    right: -1px;
  }
}
</style>
