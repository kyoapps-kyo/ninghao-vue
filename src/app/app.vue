<template>
    <h3>{{ name }}</h3>
    <input type="text" :value="content" @input="content = $event.target.value">
    <span>{{ content }}</span>
</template>

<script>
export default {
    data() {
        return {
            name: 'Kyo Apps',
            content: '8896'
        }
    },  
    
    methods: {
        
    }

}
</script>

<style scoped>
@import "./styles/app.css"
</style>