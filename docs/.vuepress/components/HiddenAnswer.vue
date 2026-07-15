<template>
  <div class="hidden-answer" :class="{ open: isOpen }">
    <div class="ha-question" @click="toggle">
      <span class="ha-question-text">{{ question }}</span>
      <span class="ha-toggle-icon">{{ isOpen ? '▲' : '▼' }}</span>
    </div>
    <transition name="ha-slide">
      <div v-if="isOpen" class="ha-answer">
        <div class="ha-answer-label">💡 答案</div>
        <div class="ha-answer-text">{{ answer }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HiddenAnswer',
  props: {
    question: { type: String, required: true },
    answer: { type: String, required: true }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.hidden-answer {
  background: #F5F0E6;
  border: 2px solid #2C4A3E;
  border-radius: 10px;
  margin: 16px 0;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.hidden-answer.open {
  box-shadow: 0 4px 16px rgba(44, 74, 62, 0.15);
}

.ha-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  cursor: pointer;
  user-select: none;
  transition: background 0.2s;
}

.ha-question:hover {
  background: rgba(255, 255, 255, 0.5);
}

.ha-question-text {
  font-size: 16px;
  color: #2C4A3E;
  font-weight: 500;
  line-height: 1.5;
  flex: 1;
  margin-right: 12px;
}

.ha-toggle-icon {
  font-size: 14px;
  color: #2C4A3E;
  opacity: 0.6;
  transition: transform 0.2s;
  flex-shrink: 0;
}

.ha-answer {
  padding: 0 20px 16px;
}

.ha-answer-label {
  font-size: 12px;
  font-weight: bold;
  color: #2C4A3E;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  opacity: 0.6;
  margin-bottom: 8px;
}

.ha-answer-text {
  font-size: 16px;
  color: #444;
  line-height: 1.7;
  background: rgba(255, 255, 255, 0.7);
  padding: 14px 18px;
  border-radius: 8px;
  border-left: 4px solid #639922;
}

/* 展开折叠动画 */
.ha-slide-enter-active {
  animation: haSlideIn 0.25s ease-out;
}

.ha-slide-leave-active {
  animation: haSlideIn 0.2s ease-in reverse;
}

@keyframes haSlideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* ---- responsive ---- */
@media (max-width: 600px) {
  .ha-question {
    font-size: 15px;
    padding: 12px 16px;
  }
  .ha-answer {
    font-size: 15px;
    padding: 14px;
  }
}

@media (max-width: 480px) {
  .ha-question {
    font-size: 14px;
    padding: 10px 12px;
  }
  .ha-answer {
    font-size: 14px;
    padding: 12px;
  }
}
</style>
