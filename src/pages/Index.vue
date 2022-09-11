<!-- 主页面  -->

<template>
<div class="container">
    <home-header></home-header>
    <home-scroll-wrapper></home-scroll-wrapper>
</div>
</template>

<script>
  import HomeHeader from 'components/Header/Home';
  import HomeScrollWrapper from 'components/ScrollWrapper/Home';
   

  export default{
    name: 'Index',  // 设置文件名 方便查找
    components:{
        HomeHeader,
        HomeScrollWrapper,
    }
  }
</script>

<style>

</style>