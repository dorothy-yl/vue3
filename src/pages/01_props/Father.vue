<template>
  <div class="father">
    <h2>父组件</h2>
		<h2>汽车：{{ car }}</h2>
		<h3 v-show="toy">子给的玩具：{{ toy }}</h3>
		<Child :car="car" :send-Toy="getToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import {ref} from 'vue'
	// 数据
	let car = ref('奔驰')
	let toy = ref('')
	// 方法
	function getToy(value:string){
		toy.value = value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>