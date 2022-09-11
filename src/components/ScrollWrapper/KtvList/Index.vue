<template>
  <div class="list-wrapper">
    <ktv-list-sub v-for="(item, index) of KtvDatas" 
    :data="item" 
    :key="index"
    ></ktv-list-sub>
  </div>
</template>

<script>
import KtvListSub from './Sub.vue'

export default {
    name:'KtvList',
    components:{
        KtvListSub,
    },
    props:{
        KtvDatas: Array
    }
}
</script>

<style>

</style>