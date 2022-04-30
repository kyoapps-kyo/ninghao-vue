<template>
  <h3>Kyo Apps</h3>
  <UserProfile />

</template>

<script>
  import UserProfile from './components/user-profile';
  export default {
    data() {
      return {

      }
    },
    components: {
      UserProfile,
    },
    methods: {
      onTapAppButton(text) {
        console.log('on top app button', text);
      },
      onInitAppButton() {
        console.log('on init app button');
      }
    }
  }
</script>

<style scoped>
  @import './styles/app.css';
</style>