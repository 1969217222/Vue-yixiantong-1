<!-- 景点列表页面 -->

<template>
<div class="container">
    <common-header :title="title">
    <tab></tab>
   <list-scroll-wrapper></list-scroll-wrapper>
    </common-header>
</div>
</template>

<script>
import fieldDatas from 'data/fields'
import { mapState } from 'vuex'



import CommonHeader from 'components/Header/Common'  // 导航栏
import ListScrollWrapper from '../components/ScrollWrapper/List.vue'
import Tab from '../components/Tab/Index.vue'


 export default {
    name: 'List',
    components: {
        CommonHeader,
        ListScrollWrapper,
        Tab
    },
    computed: {
        ...mapState(['field']),

        title () {
            if(this.field) {
                // 判断语句拿到它们的数据名称
             return fieldDatas.filter((item) =>item.field === this.field)[0].iconText + '列表'
             console.log(this.field[0].iconText)
           } 
             
        }
    }
 }
</script>

<style scoped>

</style>