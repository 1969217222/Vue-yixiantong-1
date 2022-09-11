<template>
  <div class="view-item">
<div class="hotel-item" @touchstart="toPath">
    <router-link :to="{path: '/detail', query:{field:'view',id: data.id}}">
    <div class="img">
        <img class="view-img" :src="data.img" :alt="data.name" />
    </div>
    <div class="info">
        <p class="title">{{data.name}}</p>
        <p class="stars">
            <stars :starNum="Number(data.star)"></stars>
            <span class="score">{{data.score}}分</span>
        </p>
        <p class="others">
            <span class="item">
                <span class="price">￥{{data.default_price}} 起</span>
                <span class="city">{{data.city_name}}</span>
            </span>
        </p>
     </div>
    </router-link>
   </div>
  </div>
</template>

<script>
import Stars from 'components/ScrollWrapper/Sub/Stars'

export default {
    name: 'ViewListSub',
    components:{
        Stars,
    },
    props:{
        data:Object
    },
    methods:{
    toPath(){
        this.$router.push({ name:'Detail', params: { field:'view', id: this.data.id}})
        // this.$router.push({ path: '/detail', params : { field: 'food', id: this.data.id }})
    }
   }
}
</script>

<style scoped>
.view-item{
    width: 50%;
    padding: 0.05rem;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
}
.img {
    width: 100%;
    height: 1.1rem;
    overflow: hidden;
} 
.view-img {
    width: 100%;
    min-height: 1.1rem;
}
  .title{
    font-size: .14rem;
    margin-top: 0.1rem;
    color:#000;
}
.stars {
    font-size: .16rem;
}
.score {
    font-size: 0.2em;
    color:#f5c164;
}    
.price {
    font-size: 0.14rem;
    color:#06c1ae;
}
.others {
    position: relative;
}
.city{
    position: absolute;
    right: 0;
    top: 0.1rem;
    font-size: .14rem;
}
</style> 