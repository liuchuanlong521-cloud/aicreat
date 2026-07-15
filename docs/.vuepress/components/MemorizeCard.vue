<template>
  <div class="memorize-card" :class="{ flipped: isFlipped }" @click="toggleFlip">
    <div class="card-inner">
      <div class="card-front">
        <div class="card-title">{{ title }}</div>
        <div class="flip-hint">点击翻转</div>
      </div>
      <div class="card-back">
        <div class="back-label">💡 大白话解析</div>
        <div class="card-translation">{{ translation }}</div>
        <div class="flip-hint back">点击翻回</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemorizeCard',
  props: {
    title: { type: String, required: true },
    translation: { type: String, required: true }
  },
  data() {
    return {
      isFlipped: false
    }
  },
  methods: {
    toggleFlip() {
      this.isFlipped = !this.isFlipped
    }
  }
}
</script>

<style scoped>
.memorize-card {
  width: 100%;
  height: 220px;
  perspective: 1200px;
  cursor: pointer;
  margin: 24px 0;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}

.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px;
  box-sizing: border-box;
}

.card-front {
  background: linear-gradient(145deg, #2C4A3E, #1e352b);
  border: 2px solid #1a3028;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  color: #F5F0E6;
  text-align: center;
  margin-bottom: 18px;
  letter-spacing: 0.5px;
}

.flip-hint {
  font-size: 13px;
  color: rgba(245, 240, 230, 0.5);
  transition: opacity 0.3s;
}

.memorize-card:hover .flip-hint {
  opacity: 0.8;
}

.flip-hint.back {
  color: rgba(44, 74, 62, 0.5);
}

.card-back {
  background: #F5F0E6;
  border: 2px solid #2C4A3E;
  transform: rotateY(180deg);
}

.back-label {
  font-size: 12px;
  font-weight: bold;
  color: #2C4A3E;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  opacity: 0.6;
}

.card-translation {
  font-size: 18px;
  color: #2C4A3E;
  line-height: 1.7;
  text-align: center;
  max-width: 90%;
}

/* ---- responsive ---- */
@media (max-width: 600px) {
  .memorize-card {
    height: 200px;
  }
  .card-title {
    font-size: 20px;
  }
  .card-translation {
    font-size: 16px;
  }
  .card-front,
  .card-back {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .memorize-card {
    height: 170px;
    margin: 16px 0;
  }
  .card-title {
    font-size: 17px;
    margin-bottom: 12px;
  }
  .card-translation {
    font-size: 14px;
  }
  .card-front,
  .card-back {
    padding: 14px;
  }
  .flip-hint {
    font-size: 11px;
  }
}
</style>
