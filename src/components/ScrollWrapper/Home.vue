<!-- 主页面 -->
<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-conetent">
        <category-icons></category-icons>  <!-- 插入图标 -->
        <div v-if="!errorShow">
        <home-title :title="homeTitle.viewTitle"></home-title>
        <view-list :viewDatas="homeDatas.viewDatas"></view-list><!-- 插入组件 -->
        
        <home-title :title="homeTitle.foodTitle"></home-title>
        <food-list :foodDatas="homeDatas.foodDatas"></food-list> <!-- 插入组件 -->
        
        <home-title :title="homeTitle.hotelTitle"></home-title> 
        <hotel-list :hotelDatas="homeDatas.hotelDatas"></hotel-list>  <!-- 插入组件 -->
        
        <home-title :title="homeTitle.ktvTitle"></home-title>
        <ktv-list :KtvDatas="homeDatas.ktvDatas"></ktv-list>
        
        <home-title :title="homeTitle.massageTitle"></home-title>
        <massage-list :massageDatas="this.homeDatas.massageDatas"></massage-list>  <!--插入组件-->
        </div>
       <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BetterScroll from 'better-scroll'

import CategoryIcons from  './CategoryIcons/Index.vue'
import { IndexModel } from 'models/index'
import HomeTitle from './Sub/HomeTitle.vue'
import ViewList from './viewList/Index.vue'
import FoodList from './FoodList/Index.vue'
import HotelList from './HotelList/Index.vue'
import MassageList from './MassageList/Index.vue'
import KtvList from './KtvList/Index.vue'
import Error from './Sub/Error.vue'

import tools from 'utils/tools';
export default {
    name: 'HomeScrollWrapper',
    components:{
        CategoryIcons,
        BetterScroll,
        HomeTitle,
        ViewList,
        FoodList,
        HotelList,
        MassageList,
        KtvList,
        Error,
    },
    data(){
      return {
        currentCityId: 0,
        errorShow: false,
        homeTitle: {
          foodTitle: '推荐美食',
          hotelTitle:'推荐酒店',
          ktvTitle:'推荐KTV',
          massageTitle:'推荐按摩',
          viewTitle:'推荐景点',
        },
        homeDatas: {
          foodDatas:[],
          hotelDatas:[],
          ktvDatas:[],
          massageDatas:[],
          viewDatas:[],
        }
      }
    },
    computed:{
      ...mapState(['cityId'])
    },
      mounted () {
        this.scroll = new BetterScroll(this.$refs.wrapper)
        this.currentCityId = this.cityId
        this.getHomeDatas(this.cityId)
      },
      activated() {
        if(this.currentCityId != this.cityId){
          this.currentCityId = this.cityId
          this.getHomeDatas(this.currentCityId);
        }
      },
    methods: {
      getHomeDatas(cityId){
        const indexModel = new IndexModel();
        indexModel.getHomeDatas(cityId).then((res) =>{
          if (res && res.status ===0){
            const data = res.data;
            this.errorShow = false;

            this.homeDatas.viewDatas = data.viewDatas
            this.homeDatas.foodDatas = tools.formatJSON(data.foodDatas,'keyword')
            this.homeDatas.hotelDatas = data.hotelDatas
            this.homeDatas.ktvDatas = data.ktvDatas
            this.homeDatas.massageDatas = data.massageDatas
           } else {
            console.log({
              statusCode: res.status,
              errorMsg: res.error
            })
            this.errorShow = true
          }
        })
      }
    }
}
</script>

<style scoped>

</style>