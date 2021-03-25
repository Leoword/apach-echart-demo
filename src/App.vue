<template>
  <div>
    <div style="text-align: left">
      <router-link to="/">圆</router-link>
      <router-link to="/2">圆环</router-link>
      <router-link to="/3">圆环2</router-link>
      <router-link to="/4">圆环3</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  margin-right: 10px;
}
</style>
