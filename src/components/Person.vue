<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person234',
}
</script>

<script lang="ts" setup>
// 数据
let name = '张三'  // 注意此时的name不是响应式的，不能直接修改
let age = 18     // 注意此时的age不是响应式的，不能直接修改
let tel = '13477885640'  // tel不是响应式的


// 方法
function changeName() {
    name = 'Jason'      // 注意:这样修改name,页面时没有变化的
    console.log(name)     //name确实被修改了，但name不是响应式的
}

function changeAge() {
    age += 1   // 注意:这样修改age,页面时没有变化的
    console.log(age)  //age确实被修改了，但age不是响应式的
}

function showTel() {
    alert(tel)
    console.log(tel)
}

// 将数据、方法交出去，模板中才可以使用
return { name, age, changeName, changeAge, showTel }
    // setup的放回值也可以是一个渲染函数

</script>





<style scoped>
.person {
    background-color: aqua;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
    box-shadow: 0 0 5px;
}
</style>