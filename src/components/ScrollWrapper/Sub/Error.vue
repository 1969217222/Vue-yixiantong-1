<template>
  <div class="error-bd" v-show="errorShow"> 
    <p class="error-text">网络错误</p>
  </div>
</template>

<script>
export default {
    name:'Error',
    props: {
        errorShow:{
        type: Boolean,
        default (){
            return false; 
        }
        }
    }
}
</script>

<style scoped>
.error-bd {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    color:#999
}
.error-text{
    font-size: .2rem;
}
</style>