<template>
    <div class="person">
        <h2>汽车信息：一辆{{ car.beand }}车,价值{{ car.price }}万</h2>
        <button @click="changePricep">修改汽车的价格</button>
        <button @click="changeBrand">修改汽车的品牌</button>
        <button @click="changeCar">修改汽车</button>
        <hr>
        <h2>当前求和为:{{ sum }}</h2>
        <button @click="changeSum">点我sum加1</button>
    </div>
</template>


<script lang="ts" setup name="Person">
import { ref, reactive } from 'vue'


// 数据
let car = reactive({ beand: '奔驰', price: 100 })
let sum = ref(0)




// 方法
function changeBrand() {
    car.beand = '宝马'
}
function changePricep() {
    car.price += 10
    console.log(car.price)
}


function changeCar() {
    // car.beand = '奥迪'
    // car.price = 120
    car = { beand: '奥迪', price: 1200 }

}

function changeSum() {
    sum.value += 1
}



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