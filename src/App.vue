<template>
	<div class="app">
		<h2>求和为：{{ sum }}</h2>
		<h2>名字：{{ person.name }}</h2>
		<h2>年龄为：{{ person.age }}</h2>
		<h2>汽车信息：{{ car.brand }}</h2>
		<h2>汽车信息：{{ car.options.color }}</h2>
		<h2>汽车信息：{{ car.options.engine }}</h2>
		<button @click="changeSum">sum+1</button>
		<span>|</span>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年龄</button>
		<button @click="changePerson">修改整个人</button>
		<button @click="changeBrand">修改品牌</button>
		<button @click="changeColor">修改颜色</button>
		<button @click="changeEngine">修改发动机</button>

	</div>
</template>

<script setup lang="ts" name="App">
import { ref, reactive, shallowRef, shallowReactive } from 'vue'
let sum = shallowRef(0)
let person = shallowRef({
	name: "张三",
	age: 18
})
let car = shallowReactive({
	brand: '奔驰',
	options: {
		color: 'red',
		engine: 'V8'
	}
})
function changeSum() {
	sum.value++
}
function changeName() {
	person.value.name = '李亦非'
}
function changeAge() {
	person.value.age = 80
}
function changePerson() {
	person.value = { name: 'Lucy', age: 27 }
}

function changeBrand() {
	car.brand = '宝马'
}

function changeColor() {
	car.options.color = 'blue'
}
function changeEngine() {
	car.options.engine = 'V12'
}

</script>




<style>
.app {
	background-color: #ddd;
	padding: 10px;
	border-radius: 10px;
	box-shadow: 0 0 10px
}

button {
	margin: 0 5px;
}
</style>