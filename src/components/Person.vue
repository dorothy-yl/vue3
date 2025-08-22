<template>
    <div class="person">
        <h2>姓名：{{ Person.name }}</h2>
        <h2>年龄：{{ Person.age }},{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>


<script lang="ts" setup name="Person">
import { reactive, toRefs,toRef } from 'vue'


// 数据
let Person = reactive({
    name: '张三',
    age: 18
})

let { name,age} = toRefs(Person)
let nl = toRef(Person,'age')
console.log(nl.value)
// 方法
function changeName() {
    name.value += '~'
   console.log(name,Person.name)
}
function changeAge() {
    age.value += 1
}
</script>











// 方法
<script>
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