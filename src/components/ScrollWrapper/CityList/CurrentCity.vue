
<!-- 定位组件 -->
<template>
<div class="current-city">
    <span>当前城市:</span>
    <!-- <div @touchstart="toPath"> -->
    <router-link :to="{name: path}"> 
        <span class="city">{{this.cityName}}</span>
       </router-link> 
    <!-- </div> -->
</div>

</template>

<script>
 import { mapState } from 'vuex';

export default {
    name: 'CurrentCity',
    data () {
        return {
        path: 'Index'
        }
    },
     computed: {
     ...mapState(['cityName'])   // 取到cityName 
 },
//  methods: {
//     toPath(){
//       $router.push({ path: 'Index'})
//     }
//  },
}
</script>

<style scoped>
 .current-city{
    height: .5rem;
    padding-left: .15rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    font-size: .15rem;
    flex-wrap: nowrap;
 }
</style>