<template>
    <h3>{{ name }}</h3>
    <input type="text" v-model.trim="content">
    <span>Length : {{ content.length }}</span>
</template>

<script>
export default {
    data() {
        return {
            name: 'Kyo Apps',
            content: '1234'
        }
    },  
    
    methods: {
        
    }

}
</script>

<style scoped>
@import "./styles/app.css"
</style>