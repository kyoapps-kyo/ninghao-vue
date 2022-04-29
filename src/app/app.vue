<template>
    <h3>{{ name }}</h3>
    <input id="checked" type="checkbox" v-model="checked">
    <label for="checked">{{checked}}</label>
</template>

<script>
export default {
    data() {
        return {
            name: 'Kyo Apps',
            checked: true,
        }
    }     

}
</script>

<style scoped>
@import "./styles/app.css"
</style>