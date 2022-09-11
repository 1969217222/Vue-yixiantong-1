<template>
  <div class="list-wrapper">
    <hotel-list-sub v-for="(item, index) in hotelDatas" :data="item" :key="index" />
  </div>
</template>

<script>
import HotelListSub from './Sub.vue'
export default {
    name:'HotelList',
    components:{
        HotelListSub,
    },
    props:{
        hotelDatas: Array
    }
}
</script>

<style scoped>
 /* .list-wrapper{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid ;
 } */
</style>