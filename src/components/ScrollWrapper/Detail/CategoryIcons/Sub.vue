<template>
  <div class="item">
    <div class="icon"  @touchstart="toPath" :style="{backgroundColor: bgColor}">
     <span class="iconfont" :class="icon"></span>
    </div>
    <p class="icon-text">{{iconText}}</p>
  </div>
   
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'CategoryIconsSub',
    props: {
        bgColor : String,
        icon: String,
        field: String,
        iconText: {
            type: String,
            default (){
                return '分类'
            }
        }
    },
    methods: {
        ...mapMutations(['selectField']),
        toPath () {

            this.$router.push('/list')
        }
    }
}
</script>

<style scoped>
.item {
    position: relative;
    height: .65rem;
    width: 20%;
    padding: .1rem 0;
}
.icon {
   position: absolute;
   right: .18rem;
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
}
.icon-text {
    position: absolute;
    right: .22rem;
    top: .6rem;
    font-size: .16rem;
    text-align: center;

    
}
</style>