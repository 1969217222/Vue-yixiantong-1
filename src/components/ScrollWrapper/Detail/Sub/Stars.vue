<!--  五星组件 -->
<template>
<div class="stars-bd">
    <span class="iconfont icon-smile"></span>
    <stars :starNum="Number(starNum)"></stars>
    <span class="score">{{score}}分</span>
</div> 
</template>

<script>
import Stars from '../../../ScrollWrapper/Sub/Stars.vue'
export default {
    name:'DetailStars',
    components: {
        Stars
    },
    props: {
        starNum: {
        type: Number,
        default () {
            return  0;
        }
    },
    score : {
        type: String,
        default () {
            return '0.0';
        }
        }
        
    }
}
</script>

<style scoped>
.stars-bd {
    height: 0.44rem;
    padding: .03rem .15rem 0;
    border-bottom: 1px solid #ddd;
    line-height: .35rem;
    box-sizing: border-box;
}
.icon-smile {
    font-size: .18rem;
    margin: 0.08rem .1rem 0 0;
    color:#999
}
.score {
    
    font-size: .16rem;
    color:darkorange
}
</style>