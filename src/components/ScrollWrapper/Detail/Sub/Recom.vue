<template>
<div class="recommend-bd">
    <detail-title
    icon="icon-recom"
    title="推荐菜品"
    ></detail-title>
    <div class="recommend-text"> {{recom}} </div>
</div>
</template>

<script>
import DetailTitle from '../Sub/Title.vue'
export default {
    name:'DetailRecom',
   components:{
    DetailTitle,
   },
   data(){
    return {
        
    }
   },
   props:{
        recom:String,
        default () {
        return '加载中...'
    }
   }
}
</script>

<style scoped>
.recommend-text{
      border-bottom: 1px solid #ddd;
     padding: .1rem .15rem;
     font-size: .14rem;
     line-height: .18rem;
     text-indent: 2em;   
     box-sizing: border-box; 
}

</style>