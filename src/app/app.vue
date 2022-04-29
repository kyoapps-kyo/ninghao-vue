<template>
    <h3>{{ name }}</h3>
    <input type="text" @keyup.enter="onKeyupContent">
    <span>{{ data }}</span>
</template>

<script>
export default {
    data() {
        return {
            name: 'Kyo Apps',
            data: ''
        }
    },  
    
    methods: {
        onKeyupContent(event) {
            console.log('回车!');
        }
    }

}
</script>

<style scoped>
@import "./styles/app.css"
</style>