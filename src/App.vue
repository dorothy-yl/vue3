<template>
  <div class="app">
    <Header></Header>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink replace to="/home" active-class="active">首页</RouterLink>
      <RouterLink replace to="/news" active-class="active">新闻</RouterLink>
      <RouterLink replace :to="{ path: '/about' }" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router'
import Header from './components/Header.vue'

</script>

<style>
/* App */
.title {
  text-align: center;
  word-spacing: 5px;
  margin: 30px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg, gray, white);
  border-radius: 10px;
  box-shadow: 0 0 2px;
  font-size: 30px;
}


.navigate a.active{
  background-color: #64967E !important;
  color: #ffc268 !important;
  font-weight: 900 !important;
  text-shadow: 0 0 1px black !important;
  font-family: 微软雅黑 !important;
}


.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}

.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
  transition: all 0.3s ease;
}

.navigate a:hover {
  background-color: #555;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}



.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>