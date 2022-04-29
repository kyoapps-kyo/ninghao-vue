<template>
    <h3>{{ name }}</h3>
    <input type="text" v-model.number="content">
    <span>{{ typeof(content) }}</span>
</template>

<script>
export default {
    data() {
        return {
            name: 'Kyo Apps',
            content: 0
        }
    },  
    
    methods: {
        
    }

}
</script>

<style scoped>
@import "./styles/app.css"
</style>