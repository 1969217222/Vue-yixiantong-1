<!-- 轮播图 -->
<template>
  <div class="swiper-wrap">
    <!-- <swiper class="swiper" :options="swiperOption">
    <swiper-slide
    v-for="(item, index) in picDatas" 
    :pic="item"
    :key="index"
    >
    <img  class="swiper-img" :src="item" />
    </swiper-slide> -->

    <div class="swiper-pagination" slot="pagination"></div>
  <!-- </swiper> -->
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
//   import 'swiper/css/swiper.css'

// export default { 
//   name:'DetailSwiper',
//   components:{
//       Swiper,
//       SwiperSlide
//   },
//   props:{
//     picDatas:Array,
//   },
//   data() {
//     return {
//        swiperOption:{       //轮播插件配置参数
//          pagination:{         //分页器
//             el:'.swiper-pagination',
//           clickable:true,
//         }
//       }
//     }
//   },
//    watch: { // watch 监听 props 中的值
//     picDatas (newVal, oldVal) { // newVal 为新值， oldVal 为旧值
//       this.localLevel = newVal
//     }
//   },
// }
</script>

<style scoped>
/* .swiper-wrap >>> swiper-pagination-bullet-active{
  background-color: #06c1ae;
} */

.swiper-slide {
  height: 0.2rem;
}
.swiper-img {
  width: 100%;
  height: 100%;
}
</style>