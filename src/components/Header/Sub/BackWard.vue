<!-- // 左侧返回按钮 -->
<template>
  <div class="back-ward" @click="onRouteBack">
    <span class="f-h">返回</span>
  </div>
</template>

<script>
export default {
 name: 'BackWard',
 methods: {
    onRouteBack(){
        this.$router.go(-1) // 往回走一步
    }
 }
}
</script>

<style scoped>
.f-h {
    position: absolute;
    left: 0;
    top: 0;
    font-size: .2rem;
    font-weight: bold;
    line-height: .5rem;
    margin-left: 8px;
}
</style>