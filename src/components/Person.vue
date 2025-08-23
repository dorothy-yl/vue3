<template>
    <div class="person">
        <h1>情况二：监视ref所定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>情况二：监视ref所定义的【对象类型】数据
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>



<script lang="ts" setup name="Person">
import { ref, watch } from 'vue'
// 数据
let person = ref({
    name: '张三',
    age: 18
})

// 方法
function changeName() {
    person.value.name += '~'
}

function changeAge() {
    person.value.age++
}

function changePerson() {
    person.value = { name: '李四', age: 90 }
}
// 监视,情况二：监视ref所定义的【对象类型】数据,监视的是对象的地址值，若想监视对象内部的属性变化，需要手动开启
watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
},{deep:true})
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

li {
    font-size: 20px;
}
</style>