<template>
  <div class="mistake-book">
    <div class="mb-header">
      <span class="mb-title">📖 错题本</span>
      <span v-if="items.length > 0" class="mb-count">共 {{ items.length }} 道错题</span>
    </div>

    <!-- 加载中 -->
    <div v-if="loading" class="mb-loading">
      <div class="mb-loading-spinner"></div>
      <span>正在加载错题…</span>
    </div>

    <!-- 加载失败 -->
    <div v-else-if="error" class="mb-empty">
      <p>⚠️ 错题加载失败，请检查网络后刷新页面。</p>
    </div>

    <!-- 无错题 -->
    <div v-else-if="items.length === 0" class="mb-empty">
      <p>🎉 暂无错题，继续保持！</p>
    </div>

    <!-- 错题列表 -->
    <div v-else class="mb-list">
      <div v-for="item in items" :key="item.question_id" class="mb-card">
        <!-- 题干 -->
        <div class="mb-question">{{ item.question }}</div>

        <!-- 选项（标出正确答案） -->
        <div class="mb-options">
          <div
            v-for="(opt, idx) in item.options"
            :key="idx"
            class="mb-option"
            :class="{ 'is-answer': idx === item.answer_index }"
          >
            <span class="mb-opt-label">{{ indexToLetter(idx) }}</span>
            <span class="mb-opt-text">{{ opt }}</span>
            <span v-if="idx === item.answer_index" class="mb-opt-badge">✓ 正确答案</span>
          </div>
        </div>

        <!-- 解析 -->
        <div v-if="item.explanation" class="mb-explanation">
          <strong>解析：</strong>{{ item.explanation }}
        </div>

        <!-- 底部：时间 + 操作 -->
        <div class="mb-footer">
          <div class="mb-time">
            <span v-if="isDueForReview(item.last_wrong_at)" class="mb-review-due">🔴 该复习了</span>
            最近答错：{{ formatTime(item.last_wrong_at) }}
          </div>
          <div class="mb-actions">
            <a
              v-if="item.page_path"
              :href="item.page_path"
              class="mb-btn mb-btn-link"
            >查看原文</a>
            <a
              v-if="item.page_path"
              :href="item.page_path"
              class="mb-btn mb-btn-retry"
            >再测一次</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLearnerId, getMistakes } from '../utils/supabase'
import questionBank from '../data/questionBank'

export default {
  name: 'MistakeBook',
  data() {
    return {
      items: [],
      loading: true,
      error: false,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loading = true
      this.error = false
      try {
        var learnerId = getLearnerId()
        var result = await getMistakes(learnerId)
        // 从 questionBank 中装配题干、选项、答案、解析
        this.items = (result || []).map(function (item) {
          var q = questionBank[item.question_id]
          if (!q) {
            return {
              question_id: item.question_id,
              question: '⚠️ 未找到题目："' + item.question_id + '"',
              options: [],
              answer_index: -1,
              explanation: '题库中缺少该题目的数据，请联系管理员补充。',
              last_wrong_at: item.last_wrong_at,
              page_path: item.page_path || null,
            }
          }
          return {
            question_id: item.question_id,
            question: q.question,
            options: q.options,
            answer_index: q.answer_index,
            explanation: q.explanation || '',
            last_wrong_at: item.last_wrong_at,
            page_path: item.page_path || q.page_path || null,
          }
        })
      } catch (e) {
        console.warn('[MistakeBook] 加载失败:', e.message)
        this.error = true
      } finally {
        this.loading = false
      }
    },

    indexToLetter(index) {
      return String.fromCharCode(65 + index)
    },

    /**
     * 超过 24 小时需要复习
     */
    isDueForReview(isoStr) {
      if (!isoStr) return false
      var now = Date.now()
      var then = new Date(isoStr).getTime()
      var diffHours = (now - then) / (1000 * 60 * 60)
      return diffHours >= 24
    },

    formatTime(isoStr) {
      if (!isoStr) return '未知'
      var d = new Date(isoStr)
      var month = String(d.getMonth() + 1).padStart(2, '0')
      var day = String(d.getDate()).padStart(2, '0')
      var hour = String(d.getHours()).padStart(2, '0')
      var min = String(d.getMinutes()).padStart(2, '0')
      return month + '/' + day + ' ' + hour + ':' + min
    },
  },
}
</script>

<style scoped>
.mistake-book {
  font-family: 'Georgia', 'Times New Roman', serif;
  max-width: 740px;
  margin: 0 auto;
}

.mb-header {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 28px;
  padding-bottom: 14px;
  border-bottom: 2px solid #2C4A3E;
}

.mb-title {
  font-size: 24px;
  font-weight: bold;
  color: #2C4A3E;
}

.mb-count {
  font-size: 14px;
  color: #666;
}

/* ---- loading ---- */
.mb-loading {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  padding: 60px 0;
  color: #666;
  font-size: 16px;
}

.mb-loading-spinner {
  width: 22px;
  height: 22px;
  border: 3px solid #d4cdbf;
  border-top-color: #2C4A3E;
  border-radius: 50%;
  animation: mb-spin 0.7s linear infinite;
}

@keyframes mb-spin {
  to { transform: rotate(360deg); }
}

/* ---- empty ---- */
.mb-empty {
  text-align: center;
  padding: 60px 0;
  color: #666;
  font-size: 18px;
}

/* ---- card ---- */
.mb-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mb-card {
  background: #F5F0E6;
  border: 2px solid #2C4A3E;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(44, 74, 62, 0.1);
}

.mb-question {
  font-size: 18px;
  color: #2C4A3E;
  font-weight: 500;
  line-height: 1.7;
  margin-bottom: 18px;
}

/* ---- options ---- */
.mb-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.mb-option {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  background: #fff;
  border: 2px solid #d4cdbf;
  border-radius: 8px;
  transition: all 0.2s;
}

.mb-option.is-answer {
  border-color: #639922;
  background: #edf7e0;
}

.mb-opt-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #2C4A3E;
  color: #F5F0E6;
  font-weight: bold;
  font-size: 13px;
  margin-right: 12px;
  flex-shrink: 0;
}

.is-answer .mb-opt-label {
  background: #639922;
}

.mb-opt-text {
  flex: 1;
  font-size: 15px;
  color: #333;
  line-height: 1.5;
}

.mb-opt-badge {
  margin-left: 10px;
  font-size: 12px;
  font-weight: bold;
  color: #639922;
  white-space: nowrap;
}

/* ---- explanation ---- */
.mb-explanation {
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  border-left: 4px solid #2C4A3E;
  font-size: 14px;
  line-height: 1.7;
  color: #444;
  margin-bottom: 16px;
}

/* ---- footer ---- */
.mb-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 14px;
  border-top: 1px solid #d4cdbf;
}

.mb-time {
  font-size: 13px;
  color: #777;
  display: flex;
  align-items: center;
  gap: 8px;
}

.mb-review-due {
  font-size: 12px;
  font-weight: bold;
  color: #C0392B;
  background: #fbeaea;
  padding: 2px 10px;
  border-radius: 12px;
  white-space: nowrap;
}

.mb-actions {
  display: flex;
  gap: 10px;
}

.mb-btn {
  display: inline-block;
  padding: 7px 18px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}

.mb-btn-link {
  background: #fff;
  color: #2C4A3E;
  border: 2px solid #2C4A3E;
}

.mb-btn-link:hover {
  background: #2C4A3E;
  color: #F5F0E6;
}

.mb-btn-retry {
  background: #2C4A3E;
  color: #F5F0E6;
  border: 2px solid #2C4A3E;
}

.mb-btn-retry:hover {
  background: #1d352b;
  border-color: #1d352b;
}

/* ---- responsive ---- */
@media (max-width: 600px) {
  .mb-footer {
    flex-direction: column;
    align-items: flex-start;
  }
  .mb-actions {
    width: 100%;
  }
  .mb-btn {
    flex: 1;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .mb-card {
    padding: 16px;
  }
  .mb-question {
    font-size: 15px;
    margin-bottom: 14px;
  }
  .mb-option {
    padding: 8px 10px;
  }
  .mb-opt-text {
    font-size: 13px;
  }
  .mb-opt-label {
    width: 24px;
    height: 24px;
    font-size: 11px;
    margin-right: 8px;
  }
  .mb-opt-badge {
    font-size: 10px;
    margin-left: 6px;
  }
  .mb-explanation {
    font-size: 13px;
    padding: 10px 12px;
  }
  .mb-time {
    font-size: 12px;
  }
  .mb-btn {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>
