<!-- 滚动区域 -->

<template>
  <div class="scroll-wrapper" ref="wrapper">
    <!-- 滚动部分内容 -->
    <div class="scroll-conetent"> 
      <current-city></current-city>  
      <city-list></city-list> 
    </div>
  </div>
</template>

<script>

 import BetterScroll from 'better-scroll'
 import CurrentCity from './CityList/CurrentCity.vue'
 import CityList from './CityList/Index.vue'

export default {
    name:'CityScrollWrapper',
     components: {
         CurrentCity,
         CityList
    },
    
    mounted (){
        this.scroll = new BetterScroll(this.$refs.wrapper);
    }

}
</script>

<style>

</style>