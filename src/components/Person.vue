<template>
    <div class="person">
        <h1>情况三：监视reactive所定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
        <hr>
        <h2>测试：{{ obj.a.b.c }}</h2>
        <button @click="test">修改obj.a.b.c</button>
    </div>
</template>



<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue'
// 数据
let person = reactive({
    name: '张三',
    age: 18
})

let obj = {
    a:{
        b:{
            c:888
        }
    }
}

// 方法
function changeName() {
    person.name += '~'
}

function changeAge() {
    person.age++
}

function changePerson() {
   Object.assign(person,{name:'李四',age:80})
}

function test(){
    obj.a.b.c = 888
}

// 监视，监视reactive所定义的【对象类型】数据,且默认开启深度监视的，且默认开启立即监视
watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
})

watch(obj,(newValue,oldValue)=>{
    console.log('obj变化了',newValue,oldValue)
})
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