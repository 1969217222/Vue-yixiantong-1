<template>
  <div class="name-bd">
    <span class="iconfont icon-name"></span>
    <span class="name-text">{{name}}</span>
  </div>
</template>

<script>
export default {
    name:'DetailName',
    props: {
        name:{
            type: String,
            default () {
            return '加载中...'
        }
        }
    }
}
</script>

<style scoped>
.name-bd {
    display: flex;
    height: 0.44rem;
    padding: 0.03rem .15rem 0;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
}
.icon-name {
    font-size: .18rem;
    color:#000;
}
.name-text{
    font-size: .18rem;
    margin-left: .1rem;
    line-height: .4rem;
}
</style>