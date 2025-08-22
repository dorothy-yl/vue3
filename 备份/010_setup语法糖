<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址：{{ address }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from 'vue'
// 数据
let name = ref('张三')  // 使用 ref 创建响应式数据
let age = ref(18)     // 使用 ref 创建响应式数据
let tel = '13477885640'  // tel不是响应式的
let address = '广东广州天河区时尚天河广场'

console.log(1,name)
console.log(2,age)
console.log(3,tel)
console.log(4,address)

// 方法
function changeName() {
    name.value = 'Jason'      // 正确修改响应式数据：使用 .value
    console.log(name.value)     // 访问响应式数据的值
}

function changeAge() {
    age.value += 1   // 正确修改响应式数据：使用 .value
    console.log(age.value)  // 访问响应式数据的值
}

function showTel() {
    alert(tel)
    console.log(tel)
}
// 在 <script setup> 中，所有顶层的变量和函数会自动暴露给模板
// 不需要手动 return
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