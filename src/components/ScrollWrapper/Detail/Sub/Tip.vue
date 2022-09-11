<template>
  <div class="tip-bd">
    <span class="iconfont icon-tip"></span>
    <span class="tip">{{tip}}</span>
  </div>
</template>

<script>

export default {
    name:'DetailTip',
    props: {
      tip: {
        type: String,
        default (){
        return '加载中...'
        }
        }
    }
}
</script>

<style scoped>
.tip-bd{
    display: flex;
    align-items: center;
    min-height: .44rem;
    padding: 0.1rem .15rem;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
}
.tip{
    font-size: .14rem;
    line-height: .18rem;
}
</style>