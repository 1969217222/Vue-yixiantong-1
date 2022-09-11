<template>
  <div class="ktv-item">
    <div class="hotel-item" @touchstart="toPath">
    <div class="img">
        <img class="ktv-img" :src="data.img" :alt="data.name" />
    </div>
    <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="stars">
            <stars :starNum="Number(data.star)"></stars>
            <span class="score">{{data.score}}</span>
        </p>
     
        <div class="others">
            <span class="j-g">
                ¥<span class="price">{{data.default_price}}</span>
             元起
            </span>
            <span class="item">{{data.area}}</span>
        </div>
    </div>

    </div>
  </div>
</template>

<script>
import Stars from 'components/ScrollWrapper/Sub/Stars'
export default {
    name:'KtvListSub',
    components:{
        Stars
    },
    props:{
        data:Object
    },
    methods:{
        toPath(){
            this.$router.push({ name: 'Detail', params : { field: 'ktv', id: this.data.id }})
           // this.$router.push({ path: '/detail', params : { field: 'ktv', id: this.data.id }})
        },
    }
}
</script>

<style scoped>
.ktv-item{
    position: relative;

    border-bottom: 1px solid #ddd;
    font-size: .18rem;
    background-color: #fff;
}
.img{
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;
}
.ktv-img{
    width: 100%;
    height: 100%;
}
.info{
    position: absolute;
    top: 0;
    left: 0;
    padding:.1rem .1rem 0 1.2rem;
}
.stars{
    font-size: .14rem;
}
.score {
    color: rgb(190 158 77);
    line-height: .45rem;
}
.others {
    display: flex;
    justify-content: space-between;
    font-size: .14rem;

}
.j-g{
    color:#06c1a1;
}
</style>