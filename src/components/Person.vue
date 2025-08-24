<template>
    <div class="person">
        <ul>
            <li v-for="p in list" :key="p.id">
                {{p.name}}--{{p.age}}
            </li>
        </ul>
    </div>
</template>


<script lang="ts" setup name="Person">
import { defineProps } from 'vue'
import { type Persons } from '@/types'
// // 接受a
// defineProps(['a','list'])

// // 接受a,同时将props保存起来
// let x = defineProps(['a','b'])
// console.log(x.a)

// 接收+限制类型+指定默认值+限制必要性
let props = withDefaults(defineProps<{list?:Persons}>(),{
    list:()=>[{id:'asdasg01',name:'小猪佩奇',age:18}]
})
console.log(props)
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