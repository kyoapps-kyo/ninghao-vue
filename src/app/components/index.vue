<template>
  <div @click="onClickText">你好，午羊</div>
</template>

<script>
  export default {
    methods: {
      onClickText() {
        // this.$router.push('/about');
        this.$router.replace('/about');
      }
    }
  }
</script>