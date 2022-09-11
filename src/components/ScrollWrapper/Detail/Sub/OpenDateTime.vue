<template>
  <div class="datetime-bd">
    <span class="datetime-text">{{openDateTime}}</span>
  </div> 
</template>

<script>
export default {
    name:'DetailOpenDateTime',
    props:{
      openDateTime:{
        type: String,
        default(){
            return '加载中...'
      }
        },
        
    }
}
</script>

<style scoped>
.datetime-bd{
  display: flex;
  align-items: center;
  min-height: .44rem;
  padding: 0rem .1rem;
 border-bottom: 1px solid #ddd;
 box-sizing: border-box;
}
.datetime-text{
  font-size: .14rem;
  line-height: .18rem  ;
}
</style>