<template>
    <h3>{{ name }}</h3>
    <input type="text" v-model.lazy="content">
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