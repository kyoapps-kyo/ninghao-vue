<template>
  <div class="page">
    <div class="card">
      <div class="card__header">
        <h3 class="card-title">{{ name }}</h3>
        <div class="cord-subtitle">Transition & Animation</div>
      </div>
      <div class="card__content">
        <div class="emoji">
          {{ animateNumber }}
        </div>
      </div>
      <div class="card__action">
        <button @click="setNumber" :class="{ active: isActive }">
          请按这里
        </button>
      </div>
    </div>
    <div class="status">
      <small>isActive: {{ isActive }}</small>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import gsap from 'gsap';

export default {
  data() {
    return {
      name: 'kyo-apps',
      isActive: true,
      emojiList: ['🐶', '🎄', '🌍'],
      number: 0,
      tweenedNumber: 0,
    };
  },

  computed: {
    animateNumber() {
      return this.tweenedNumber.toFixed(0);
    },
  },

  created() {
    this.setNumber();
  },

  watch: {
    number(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    },
  },

  methods: {
    shuffle() {
      this.emojiList = _.shuffle(this.emojiList);
    },

    pop() {
      this.emojiList.pop();
    },

    setNumber() {
      setTimeout(() => (this.number = this.number + 1000), 2000);
    },
  },
};
</script>

<style scoped>
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animate.css';
</style>
