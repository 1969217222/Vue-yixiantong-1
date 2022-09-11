<!-- 按摩组件 -->
<template>
  <div class="massage-item">
    <div class="hotel-item" @touchstart="toPath">
    <div class="img">
        <img class="massage-img" :src="data.img" :alt="data.name" />
    </div>
    <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="stars">
            <star :starNum="Number(data.star)"></star>
            <span class="score">{{data.score}}分</span>
        </p>
        <p class="others">
            <span class="price">¥{{data.default_price}}人</span>
            <span class="item">{{data.city_name}}</span>
        </p>
    </div>
    </div>
  </div>
</template>

<script>
import Stars from 'components/ScrollWrapper/Sub/Stars'
export default {
    name:'MassageListSub',
    components:{
        Stars,
    },
    props:{
        data:Object
    },
     methods:{
        toPath(){
             this.$router.push({ name: 'Detail', params : { field: 'massage', id: this.data.id }})
           // this.$router.push({ path: '/detail', params : { field: 'massage', id: this.data.id }})
        }
    }
      
}
</script>

<style scoped>
.massage-item{
    position: relative;
    display: flex;
    align-items: center;
    font-size: .16rem;
    border-bottom: 1px solid #ddd;
    
}
.img {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;
}
.massage-img{
    height: 100%;
    width: 100%;
}
.info {
    position: absolute;
    top: 0;
    left:110px;
    width: 100%;
    padding: 0.1rem 0.1rem .1rem .12rem;
    box-sizing: border-box;
}
.title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    font-size: .18rem;
    line-height: .2rem;
}
.stars {
    font-size: .16rem;
    line-height: .5rem;
    color: #ccc;
}
.score {
    color:#f5c164
}
.others {
    display: flex;
    justify-content: space-between;
    font-size: .14rem;
    line-height: .35rem;
}
.price {
    color:#f60;
    font-size: .15rem;
}
</style>