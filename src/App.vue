<template>
    <Person />
   
</template>
m

<script lang="ts">
// JS或TS代码
import Person from './components/Person.vue'

export default {
    // 组件名
    name: 'App',
    // 注册组件
    components: { Person }
}
</script>

<style scoped>
/* 样式 */
.app {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>