<template>
  <div class="home-title">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name:'HomeTitle',
  props:{
    title:{
        type: String,
        default (){
            return '一线生活通'
        }
    }
  }
}
</script>

<style scoped>
.home-title{
    display: flex;
    align-items: center;
    height: .5rem;
    padding-left: 0.15rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    line-height: .4rem;
}
p {
    
    font-size: .17rem;
    font-weight:bold;
    color: #000;
}
</style>