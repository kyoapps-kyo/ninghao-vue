<template>
    <h3>{{ name }}</h3>
    <textarea v-model="content" placeholder="写点东西"></textarea>
    <span>{{ content }}</span>
</template>

<script>
export default {
    data() {
        return {
            name: 'Kyo Apps',
            content: '',
        }
    }     

}
</script>

<style scoped>
@import "./styles/app.css"
</style>