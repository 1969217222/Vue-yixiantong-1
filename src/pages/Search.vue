<template>
<div class="container">
    <common-header :title="title"></common-header>
    <search-input @onSearch="onSearch"></search-input>
    <search-scroll-wrapper :data="data"></search-scroll-wrapper>
</div>
</template>

<script>
import CommonHeader from 'components/Header/Common'
import SearchInput from '../components/ScrollWrapper/SearchInput/index.vue'
import SearchScrollWrapper from'../components/ScrollWrapper/Search.vue'

import tools from '../utils/tools'

export default{
    name: 'Search',
    components:{
        CommonHeader,
        SearchInput,
        SearchScrollWrapper,
    },
    data(){
        return{
            title:'商家搜索',
            data: {}
        }
    },
    methods: {
        onSearch (res) {   // 拿到输入框里的值
           if (res && res.status === 0) {
            const data = res.data
            data.foodDatas = tools.formatJSON(data.foodDatas,'keyword')
            this.data = data
            console.log(data);
           } else {
            this.data = res
           }
        }
    }
}
</script>

<style>

</style>


<!-- 组件抽离的原则

   1. 可复用的一定要抽离成组件
   2. 可配置的项 在组件内部一定要抽离属性出来
   3. 只要有独立化的功能性,一定要抽离组件
 
    组件集合一定要有结构
    组件结构化的同时 要考虑公用性


 -->