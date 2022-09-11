<template>
  <div class="comment-bd">
    <!-- :icon="icon-haoping" -->
   <detail-title 
   title="关键评论词"
    ></detail-title>
   <div class="comment-keyword">
    <span class="keyword"
    v-for="(item, index) in commentKeyword "
    :item="item"
    :key='index'
    >{{item}}</span>
   </div>
  </div>
</template>

<script>
import DetailTitle from './Title'
export default {
    name:'DetailCommentKeyword',
    components:{
        DetailTitle,
    },
    props: {
        commentKeyword: Array,
    },
}
</script>

<style scoped>
.comment-bd{
    display: flex;
    flex-direction: column;
    margin-top: .1rem;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
}
.comment-keyword{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: .1rem .15rem;
    line-height:.18rem;
    box-sizing: border-box;
}
.keyword{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.25rem;
    padding: 0 .05rem;
    margin: 0 .05rem .05rem 0;
    border: 1px solid #06c1ae;
    border-radius: .03rem;;
    font-size: 0.14rem;
    color:#06c1ae
}
</style>