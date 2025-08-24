<template>
    <div class="person">
        <h1>情况五：监视上述的多个数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }},{{ person.car.c2 }}</h2>
        <h2>汽车：</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改c1</button>
        <button @click="changeC2">修改c2</button>
        <button @click="changeCar">修改汽车</button>
    </div>
</template>



<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue'
// 数据
let person = reactive({
    name: '张三',
    age: 18,
    car: {
        c1: '奔驰',
        c2: '宝马'
    }
})



// 方法
function changeName() {
    person.name += '~'
}
function changeAge() {
    person.age++
}
function changeC1() {
    person.car.c1 = '奥迪'
}
function changeC2() {
    person.car.c2 = '大众'
}
function changeCar() {
    person.car = { c1: '雅迪', c2: '艾玛' }
}



watch([() => person.name, person.car], (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
}, { deep: true })
// 情况五：监视上述的多个数据
// 情况六：监视响应式对象中的某个属性，且该属性时基本类型的，要写成函数式
// 情况七：监视响应式对象中的某个属性，且该属性时对象类型的，可以直接写，也能写函数，更推荐写函数

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