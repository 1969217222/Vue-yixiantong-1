<template>
   <div class="service-bd">
    <detail-title
     title="商家服务"
    ></detail-title>
    <div class="service-content">
      <p>停车场: {{service && service.parking ? '有' : '无'}}</p>
      <p>WIFI: {{service && service.wifi ? '有' : '无'}}</p>
    </div>
   </div>
</template>

<script>
import DetailTitle from './Title.vue';

export default {
   name:'DetailService',
   components:{
      DetailTitle 
   },
   props:{
      service: Object   // 因为开始格式化过 数据为true 还是false
   }

}
</script>

<style scoped>
.service-bd{
   height: 0.44rem;
    padding: .03rem .15rem 0 ;
    line-height: .35rem;
    box-sizing: border-box;
}
.service-content {
    font-size: .18rem;
    margin: 0.08rem .1rem 0 0;
}
</style>