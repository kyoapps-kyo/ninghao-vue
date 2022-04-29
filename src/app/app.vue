<template>
    <h3>{{ name }}</h3>
    {{ processStatus }}
    <button @click="restName">重置</button>
    <button @click="setName">设置</button>
    <div v-for="(post, index) in postList" :key="post.id">
        {{ index + 1 }} {{ post.content }} - <small>{{ post.author }}</small>
    </div>
    <div v-if="visible">隐藏的内容！</div>
    <button @click="visible = !visible">{{visible ? '隐藏':'显示'}}</button>
    <div class="menu">
        <div 
            :class="['menu-item', {active: currentItem === index}]"
            @click=" currentItem = index"
            v-for="(item, index) in menuItems" :key="index">
            {{ item }}
        </div>
    </div>


</template>

<script>
export default {
    data() {
        return {
            name: 'Wu yang',
            postList: [
                {
                    id: 1,
                    content: '可以通过赋值数组，然后对const常量使用push方法添加新型的元素',
                    author: 'x',
                },
                {
                    id: 2,
                    content: '一开始可以赋值，之后不能在进行赋值',
                    author: 'y',
                },
                {
                    id: 3,
                    content: '可以用{}限定变量的可用范围',
                    author: 'z',
                },
            ],
            visible: false,
            menuItems: ['Home', 'Hot', 'Push'],
            currentItem: 0
        };
    },

    created(){
        console.log('App 已创建');
        this.setName();
    },

    methods: {
        setName(){
            setTimeout(()=>{
                this.name = 'KYOAPPS';
            }, 3000);
        },

        restName() {
            this.name = 'Wu yang';
        },
    },

    computed: {
        processStatus(){
            return this.name === 'Wu yang' ? '初始化...' : '成功设置了数据！';
        }
    },

    watch: {
        name(newName, oldName){
            console.log(`name 发生了变化： ${oldName} -> ${newName}`);
        }
    }

}
</script>

<style scoped>
@import "./styles/app.css"
</style>