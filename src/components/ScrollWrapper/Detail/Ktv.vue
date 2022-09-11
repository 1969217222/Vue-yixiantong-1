<template>
   <div class="ktv-wrapper">
    <detail-name 
    :name="name"
    ></detail-name>
    
    <detail-stars 
    :starNum="starNum"
    :score="score"
    :address="address"
    ></detail-stars>
    
    <detail-address 
    :address="address">
    </detail-address>
    
    <detail-price 
    :price="price"
    ></detail-price>
  
   <detail-service 
    :service="service"
   ></detail-service>
  </div>
</template>

<script>
import DetailName from './Sub/Name.vue'
import DetailStars from './Sub/Stars.vue'
import DetailAddress from './Sub/Address.vue'
import DetailPrice from './Sub/Price.vue'
import DetailService from './Sub/Service.vue'

export default {
  name:'DetailKtv',
  components:{
     DetailName,
     DetailStars,
     DetailAddress,
     DetailPrice,
     DetailService,

  },
  props:{
     name: String,
     star: Number,
     score: String,
     starNum:Number,
     address:String,
     price: Number,
     service: Object
  }
}
</script>

<style>

</style>