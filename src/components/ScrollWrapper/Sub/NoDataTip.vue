<template>
  <div class="no-data-tip">
    <span class="text">{{Text}}</span>
  </div>
</template>

<script>
export default {
    name: 'NoDataTip',
    data () {
        return {
           Text: '- 没有搜索到相关结果 -'
        }
    }
}
</script>

<style scoped>
.no-data-tip {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
}
.text {
    font-size: .16rem;
    color: #999;
}
</style>