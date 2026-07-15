<template>
  <div class="pop-quiz">
    <div class="quiz-header">📝 随堂测验</div>
    <div class="quiz-question">{{ question }}</div>
    <div class="quiz-options">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="quiz-option"
        :class="optionClass(index)"
        @click="handleSelect(index)"
      >
        <span class="option-label">{{ indexToLetter(index) }}</span>
        <span class="option-text">{{ option }}</span>
        <span v-if="hasAnswered && index === answerIndex" class="option-icon correct-icon">✓</span>
        <span v-if="hasAnswered && selectedIndex === index && index !== answerIndex" class="option-icon wrong-icon">✗</span>
      </div>
    </div>
    <div v-if="hasAnswered" class="quiz-explanation">
      <div class="explanation-header">
        {{ isCorrect ? '🎉 回答正确！' : '🤔 再想想～' }}
      </div>
      <div class="explanation-text">{{ explanation }}</div>
      <div v-if="accuracy !== null" class="quiz-global-accuracy">
        全站正确率：<strong>{{ accuracy }}%</strong>（共 {{ totalCount }} 人作答）
      </div>
      <div v-else-if="accuracy === null && accuracyLoaded" class="quiz-global-accuracy no-data">
        暂无全站统计数据
      </div>
    </div>
  </div>
</template>

<script>
import { insertAnswerRecord, getGlobalAccuracy, getLearnerId, upsertCheckin, formatDate } from '../utils/supabase'

// 每个页面的独立计数器
var slugCounters = {}

export default {
  name: 'PopQuiz',
  props: {
    question: { type: String, required: true },
    options: { type: Array, required: true },
    answerIndex: { type: Number, required: true },
    explanation: { type: String, required: true }
  },
  data() {
    return {
      selectedIndex: null,
      hasAnswered: false,
      questionId: '',
      accuracy: null,
      totalCount: 0,
      accuracyLoaded: false,
      pagePath: ''
    }
  },
  computed: {
    isCorrect() {
      return this.selectedIndex === this.answerIndex
    }
  },
  created() {
    // 从 $page.path 提取 slug，构建唯一 question_id
    var path = (this.$page && this.$page.path) || ''
    this.pagePath = path
    var slug = path.replace(/\/+$/, '').split('/').filter(Boolean).pop() || 'unknown'
    if (!slugCounters[slug]) slugCounters[slug] = 0
    slugCounters[slug] += 1
    this.questionId = slug + '-' + slugCounters[slug]
  },
  methods: {
    async handleSelect(index) {
      if (this.hasAnswered) return
      this.selectedIndex = index
      this.hasAnswered = true
      const isCorrect = index === this.answerIndex

      this.$emit('answer', {
        questionId: this.questionId,
        isCorrect
      })

      // 写入 Supabase 并拉取全站统计，全部静默降级
      await Promise.all([
        this.saveRecord(isCorrect),
        this.fetchGlobalAccuracy()
      ])
    },

    async saveRecord(isCorrect) {
      try {
        await insertAnswerRecord({
          question_id: this.questionId,
          learner_id: getLearnerId(),
          is_correct: isCorrect,
        })
        // 答对时自动打卡
        if (isCorrect) {
          upsertCheckin(getLearnerId(), formatDate(new Date()))
        }
      } catch (e) {
        // 网络异常静默降级
        console.warn('[PopQuiz] 保存记录失败（已静默）:', e.message)
      }
    },

    async fetchGlobalAccuracy() {
      try {
        var result = await getGlobalAccuracy(this.questionId)
        if (result === null) {
          this.accuracyLoaded = true
          return
        }
        this.totalCount = result.total
        this.accuracy = result.rate
        this.accuracyLoaded = true
      } catch (e) {
        console.warn('[PopQuiz] 获取全站统计失败（已静默）:', e.message)
        this.accuracyLoaded = true
      }
    },

    optionClass(index) {
      if (!this.hasAnswered) return ''
      if (index === this.answerIndex) return 'correct'
      if (index === this.selectedIndex) return 'wrong'
      return 'dimmed'
    },
    indexToLetter(index) {
      return String.fromCharCode(65 + index)
    }
  }
}
</script>

<style scoped>
.pop-quiz {
  background: #F5F0E6;
  border: 2px solid #2C4A3E;
  border-radius: 12px;
  padding: 24px;
  margin: 20px 0;
  font-family: 'Georgia', 'Times New Roman', serif;
  box-shadow: 0 4px 12px rgba(44, 74, 62, 0.1);
}

.quiz-header {
  font-size: 13px;
  font-weight: bold;
  color: #2C4A3E;
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 0.8;
}

.quiz-question {
  font-size: 18px;
  color: #2C4A3E;
  margin-bottom: 20px;
  line-height: 1.7;
  font-weight: 500;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.quiz-option {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: #fff;
  border: 2px solid #d4cdbf;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
}

.quiz-option:hover:not(.correct):not(.wrong):not(.dimmed) {
  border-color: #2C4A3E;
  transform: translateX(6px);
  box-shadow: 0 2px 8px rgba(44, 74, 62, 0.12);
}

.quiz-option.correct {
  border-color: #639922 !important;
  background: #edf7e0;
  cursor: default;
}

.quiz-option.wrong {
  border-color: #C0392B !important;
  background: #fbeaea;
  cursor: default;
}

.quiz-option.dimmed {
  opacity: 0.45;
  cursor: default;
}

.option-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #2C4A3E;
  color: #F5F0E6;
  font-weight: bold;
  font-size: 14px;
  margin-right: 14px;
  flex-shrink: 0;
}

.correct .option-label {
  background: #639922;
}

.wrong .option-label {
  background: #C0392B;
}

.option-text {
  flex: 1;
  font-size: 16px;
  color: #333;
  line-height: 1.5;
}

.option-icon {
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
}

.correct-icon {
  color: #639922;
}

.wrong-icon {
  color: #C0392B;
}

.quiz-explanation {
  margin-top: 20px;
  padding: 16px 20px;
  border-radius: 8px;
  border-left: 5px solid #2C4A3E;
  background: rgba(255, 255, 255, 0.7);
}

.quiz-explanation.correct-bg {
  border-left-color: #639922;
  background: #f3f9ea;
}

.quiz-explanation.wrong-bg {
  border-left-color: #C0392B;
  background: #fdf0ef;
}

.explanation-header {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
  color: #2C4A3E;
}

.explanation-text {
  font-size: 15px;
  line-height: 1.7;
  color: #444;
}

.quiz-global-accuracy {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px dashed #d4cdbf;
  font-size: 14px;
  color: #555;
}

.quiz-global-accuracy strong {
  color: #2C4A3E;
}

.quiz-global-accuracy.no-data {
  color: #999;
  font-style: italic;
}

/* ---- responsive ---- */
@media (max-width: 600px) {
  .quiz-question {
    font-size: 16px;
    padding: 16px;
  }
  .quiz-option {
    font-size: 14px;
    padding: 10px 12px;
  }
  .explanation-text {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .quiz-question {
    font-size: 15px;
    padding: 12px;
  }
  .quiz-option {
    font-size: 13px;
    padding: 8px 10px;
  }
  .option-label {
    width: 22px;
    height: 22px;
    font-size: 11px;
    margin-right: 8px;
  }
  .explanation-text {
    font-size: 13px;
  }
}
</style>
