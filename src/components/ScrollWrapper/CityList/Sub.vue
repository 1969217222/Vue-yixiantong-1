<template>
  <div class="city-item">
    <span class="city" @click="onCityClick(cityInfo)">{{cityInfo.cityName}}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'CityListSub',
    props: {
        cityInfo: Object  // 把传进cityInfo 传进来
    },
  
    methods: {
      ...mapMutations(['selectCity']), 
        onCityClick (cityInfo) {
        this.selectCity(cityInfo);
        this.$router.push('/');
         console.log(this.cityInfo);
      },
     
      
    }
}
</script>

<style scoped>
.city-item {
  height: .43rem;
  padding-left: .15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  font-size: .14rem;
  line-height: .43rem;
}
</style >

