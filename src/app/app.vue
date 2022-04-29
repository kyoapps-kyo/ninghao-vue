<template>
    <h3>{{ name }}</h3>
    <input type="text" @change="onChangeContent">
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
        onChangeContent(event) {
            this.data = event.target.value;
        }
    }

}
</script>

<style scoped>
@import "./styles/app.css"
</style>