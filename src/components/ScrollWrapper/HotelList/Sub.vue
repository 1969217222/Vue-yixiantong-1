<!-- 酒店区域 -->
<template>
<div class="hotel-item" @touchstart="toPath">
        <div class="img">
        <img  class="hotel-img" :src="data.img" :alt="data.name">
    </div>
    <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="score">{{data.score}}分</p>
        <p class="area">{{data.area}}</p>
        <p class="others">
            <span class="item">
                <span class="price">¥{{data.default_price}}起</span>
            </span>
            <span class="item">{{data.city_name}}</span>
        </p>
    </div>
</div>
</template>

<script>
export default {
    name:'HotelListSub',
    props:{
        data: Object
    },
    methods:{
        toPath(){
            this.$router.push({ name: 'Detail', params : { field: 'hotel', id: this.data.id }})
           // this.$router.push({ path: '/detail', params : { field: 'hotel', id: this.data.id }})
        }
    }
}
</script>

<style scoped>
.hotel-item{
    position: relative;
    border-bottom : 1px solid #ddd;
    font-size: .18rem;
}
.img {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;
}
.hotel-img{
    width: 100%;
    height: 100%;
}
.info {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.1rem 0.1rem 0 1.2rem;
    box-sizing: border-box;
}
.title{
     white-space: nowrap; 
     overflow: hidden;
     text-overflow: ellipsis;
    font-size: .18rem;
    line-height: .2rem;
}
.score {
    line-height: .4rem;
    font-size: 0.18em;
    color:#f5c164;

}
.area {
    display: flex;
    font-size:.14rem;
    color:#999;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .3rem;
}
.others {
    display: flex;
    justify-content: space-between;
}
.item {
    font-size: .14rem;
}
.item:nth-child(1) {
    color:#06c1a1
}
.price {
    font-size: 0.14rem;
    margin-top: 0.05rem;
}
</style>