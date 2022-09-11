<template>
  <div class="intro-bd">
    <detail-title
     icon="icon-intro"
     title='详细介绍'
    ></detail-title>
    <div class="intro-content">{{intro}}</div>
  </div>
</template>

<script>
import DetailTitle from './Title'
export default {
    name:'DetailIntro',
    components: {
        DetailTitle,
    },
    props:{
       intro:{
            type: String,
            default () {
                return '加载中...'
            }
        }
    }
}
</script>

<style scoped>
.intro-content{
      border-bottom: 1px solid #ddd;
     padding: .1rem .15rem;
     font-size: .14rem;
     line-height: .18rem;
     text-indent: 2em;   
     box-sizing: border-box; 
}
</style>