<template>
   <div class="price-bd">
    <span class="price-text">¥ {{price}} 元起</span>
   </div>
</template>

<script>
export default {
    name:'DetailPrice',
    props:{
        price:{
            type: Number,
        default () {
            return 0
        }
        }
        
    }
}
</script>

<style scoped>
.price-bd{
    display: flex;
    height: 0.44rem;
    line-height:0.39rem;
    padding: 0.03rem .15rem 0;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
}
.price-text{
    font-size: .16rem;

    color:orange
}
</style>