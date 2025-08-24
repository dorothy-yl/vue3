<template>
    <h2>当前求和为：{{ sum }} ,放大10倍为: {{ bigSum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再来一只狗</button>
</template>

<script lang="ts" setup name="Person">
import useSum from '../../hooks/useSum'
import useDog from '../../hooks/useDog'

const { sum, add, bigSum } = useSum()
const { dogList, getDog } = useDog()
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