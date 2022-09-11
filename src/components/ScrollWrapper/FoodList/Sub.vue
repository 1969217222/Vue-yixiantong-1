<!-- 美食区域 -->
<template>
  <div class="food-item">
<div class="hotel-item" @touchstart="toPath">
    <div class="img">
        <img class="food-img" :src="data.img" alt="data.name" />
    </div>
    <div class="info">
        <h1 class="title"> {{data.name}}</h1>
        <p class="stars">
            <stars :starNum="Number(data.star)"></stars>
            <span class="price">¥{{data.default_price}}/人</span>
        </p>
        <p class="keyword">
            <span class="badge" v-for="item of data.keyword" :key="item">
            {{item}}
            </span>
        </p>
        <p class="others">
            <span class="item">{{data.field}}</span>
            <span class="item"> {{data.area}}</span>
        </p>  
    </div>
    </div>
  </div>
</template>

<script>
import Stars from 'components/ScrollWrapper/Sub/Stars'

export default {
 name:'FoodListSub',
 components:{
    Stars,
 },
 props:{
    data: Object
 },
  methods:{
    toPath(){
        this.$router.push({ name:'Detail', params: { field:'food', id: this.data.id}})
        // this.$router.push({ path: '/detail', params : { field: 'food', id: this.data.id }})
    }
   }
}
</script>

<style scoped>
.food-item {
    display: flex;
    flex-direction: row;
    font-size: .16rem;
   border-bottom: 1px solid #ddd;
   
}
.img {
    float:left;
      width: 1.2rem;
    height: 1.2rem;
    padding: 0.16rem;
    box-sizing: border-box;
}
.food-img {
    width: 100%;
    height: 100%;
}
.info {
    padding: 0.1rem;
    margin-left: 1.2rem;
    box-sizing: border-box;
}
.title {
    line-height: .2rem;
}
.stars {
    font-size: .14rem;
    line-height: .3rem;
}
.keyword {
    height: 0.3rem;
    line-height: .2rem;
    overflow: hidden;
}
.badge{
    margin-left: .05rem;
    padding: 0 .05rem;
    color: rgb(190,158,77);
    background-color: rgb(251, 244, 228);
    font-size: .14rem;
    }
    .others {
        display: flex;
        justify-content: space-between;
        font-size:.14rem;
        line-height: .3rem;
    }
</style>
