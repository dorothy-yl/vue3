<template>
    <Person :list="persons" />
</template>


<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { reactive } from 'vue'
import { type Persons } from '@/types'

let persons: Persons = reactive<Persons>([
    { id: 'asyud7asfd01', name: '张三', age: 18 },
    { id: 'asyud7asfd02', name: '李四', age: 28 },
    { id: 'asyud7asfd03', name: '王五', age: 38 }
])
console.log(persons)
</script>
