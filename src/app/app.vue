<template>
    <h3 @click="onClickName">
        {{ name }}
        <span v-if="loading">loading...</span>
    </h3>
    {{ currentUser }}
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {};
    },

    computed: {
        ...mapGetters({
            name: 'name',
            currentUser: 'user/currentUser',
        }),
        ...mapState(['loading', 'user']),
    },

    created() {
        this.getName();
        this.getCurrentUser();
    },

    methods: {
        ...mapMutations(['setName']),
        ...mapActions({
            getName: 'getName',
            getCurrentUser: 'user/getCurrentUser',
        }),
        onClickName() {
            if (this.name === 'kyoapps') {
                this.setName('Wu yang');
            } else {
                this.setName('午羊');
            }
        },
    },
};
</script>

<style scoped>
@import './styles/app.css';
</style>
