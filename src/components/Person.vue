<template>
    <div class="person">
        <h2>汽车信息：一辆{{ car.beand }}车,价值{{ car.price }}万</h2>
        <button @click="changePricep">修改汽车的价格</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{game.name}}</li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏名字</button>
    </div>
</template>


<script lang="ts" setup name="Person">
import { ref ,reactive} from 'vue'


// 数据
let car = ref({ beand: '奔驰', price: 100 })
let games = ref( [
{id:'aysdiedhbei01',name:'和平精英',},
{id:'aysdiedhbei02',name:'王者荣耀',},
{id:'aysdiedhbei03',name:'英雄联盟',},
])





// 方法
function changePricep() {
    car.value.price += 10
    console.log(car.value.price)
}

function changeFirstGame(){
    games.value[0].name = '绝地求生'
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
li{
    font-size: 20px;
}
</style>