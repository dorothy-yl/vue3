<template>
  <div class="child2">
    <h3>子组件2</h3>
		<h4>电脑：{{ computer }}</h4>
		<h4>书籍：{{ book }} 本</h4>
		<button @click="moreCar($parent)">给父亲加一辆车</button>
  </div>
</template>

<script setup lang="ts" name="Child2">
		import { ref } from "vue";
		// 数据
		let computer = ref('联想')
		let book = ref(5)
		// 把数据交给外部
		defineExpose({computer,book})
		function moreCar(parent:any){
			parent.car += 1
		}
</script>

<style scoped>
	.child2{
		margin-top: 20px;
		background-color: orange;
		padding: 10px;
		border-radius: 10px;
    box-shadow: 0 0 10px black;
	}
</style>
