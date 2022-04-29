<template>
    <h3>{{ name }}</h3>
    <input type="text" v-model="content">
    <span>-> Content {{ content }}</span>
</template>

<script>
export default {
    data() {
        return {
            name: 'Kyo Apps',
            content: '起飞了',
        }
    }     

}
</script>

<style scoped>
@import "./styles/app.css"
</style>