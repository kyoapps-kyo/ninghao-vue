<template>
    <h3>{{ name }}</h3>
    <label for="subscription-annual">
        <input type="radio" v-model="subscription" value="annual" id="subscription-annual">
        一年
    </label>
    <label for="subscription-quarterly">
        <input type="radio" v-model="subscription" value="quarterly" id="subscription-quarterly">
        一个季度
    </label>
    <span>{{ subscription }}</span>
</template>

<script>
export default {
    data() {
        return {
            name: 'Kyo Apps',
            subscription: 'annual'
        }
    }     

}
</script>

<style scoped>
@import "./styles/app.css"
</style>