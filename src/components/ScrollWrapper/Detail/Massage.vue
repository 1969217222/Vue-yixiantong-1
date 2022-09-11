<template>
  <div class="massage-wrapper">
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

     <detail-open-date-time 
      :openDateTime="openDateTime"
     ></detail-open-date-time>

     <detail-comment-keyword 
     :commentKeyword="commentKeyword"
     ></detail-comment-keyword>

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
import DetailOpenDateTime from './Sub/OpenDateTime.vue'
import DetailCommentKeyword from './Sub/CommentKeyword.vue'
import DetailService from './Sub/Service.vue'

export default {
    name:'DetailMassage',
    components:{
        DetailName,
        DetailStars,
        DetailAddress,
        DetailPrice,
        DetailOpenDateTime,
        DetailCommentKeyword,
        DetailService,
    },
    props:{
        name: String,
        star: Number,
        score: String,
        starNum:Number,
        address:String,
        price: Number,
        openDateTime: String,
        commentKeyword: Array,
        service: Object
    }
}
</script>

<style scoped>

</style>