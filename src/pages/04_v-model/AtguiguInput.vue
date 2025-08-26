<template>
  <input 
    type="text" 
    :value="qwe"
    @input="emit('update:qwe',(<HTMLInputElement>$event.target).value)"
  >
  <br>
  <input 
    type="text" 
    :value="asd"
    @input="emit('update:asd',(<HTMLInputElement>$event.target).value)"
  >
</template>

<script setup lang="ts" name="AtguiguInput">
  defineProps(['qwe','asd'])
  const emit = defineEmits(['update:qwe','update:asd'])
</script>

<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>