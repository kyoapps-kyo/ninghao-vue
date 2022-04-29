<template>
    <h3>{{ name }}</h3>
    <label for="tag-1">
        <input id="tag-1" type="checkbox" value="xxx" v-model="tags">
        xxx
    </label>
    <label for="tag-2">
        <input id="tag-2" type="checkbox" value="yyy" v-model="tags">
        yyy
    </label>
    <label for="tag-3">
        <input id="tag-3" type="checkbox" value="zzz" v-model="tags">
        zzz
    </label>
    <span> Tags: {{ tags }}</span>
</template>

<script>
export default {
    data() {
        return {
            name: 'Kyo Apps',
            tags: []
        }
    }     

}
</script>

<style scoped>
@import "./styles/app.css"
</style>