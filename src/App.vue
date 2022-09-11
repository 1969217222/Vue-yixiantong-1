<template>
  <div id="app">
    <!-- 内置组件  keep alive  是一个内置组件 -->
    <keep-alive include="Index,Detail">      
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 html,
 body,
 #app,
 .container{
  height: 100%;
 }
</style>
