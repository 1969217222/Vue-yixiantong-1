<!-- // 输入框 -->
<template>
  <div class="false-input">
    <router-link to="Search">
        <div class="input">
            <p class="placeholder">
                <span class="placeholder-text">{{ placeholderText}}</span>
            </p>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
    name : 'FalseInput',
    data(){
        return {
            placeholderText: '美食 / 景点 / 酒店 /按摩 /KTV'
        }
    }
}
</script>

<style scoped>
.false-input{
    flex: 1;
    padding: .06rem .08rem .06rem 0;
    box-sizing: border-box;

}
.input{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: .05rem;
}
.placeholder {
    font-size: .14rem;
    color:#999;
    line-height: .4rem;
}
</style>