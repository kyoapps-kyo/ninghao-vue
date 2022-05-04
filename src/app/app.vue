<template>
  <h3 @click="changeName">{{ name }}</h3>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const name = ref('wu yang');

    const changeName = () => {
      name.value = 'キョウ';
    };
    return {
      name,
      changeName,
    };
  },
};
</script>

<style scoped>
@import './styles/app.css';
</style>
