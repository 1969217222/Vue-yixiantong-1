
<template>
 <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
        <div 
         v-if="!errorShow" 
        >
         <view-list
         v-if="field === 'view'"
         :viewDatas="listDatas"
        ></view-list>

          <food-list
         v-if="field === 'food'"
         :foodDatas="listDatas[cityId]"
        ></food-list>

          <hotel-list
         v-if="field === 'hotel'"
         :hotelDatas="listDatas[cityId]"
        ></hotel-list>

          <massage-list
         v-if="field === 'massage'"
         :massageDatas="listDatasp[cityId]"
        ></massage-list>

          <ktv-list
         v-if="field === 'ktv'"
         :ktvDatas="listDatas[cityId]"
        ></ktv-list>
        
        <loading
         :loadingShow="loadingShow"
        ></loading>
        </div>
        
        <errorShow
          :errorShow="errorShow"
        ></errorShow>
    </div>
 </div>
</template>

<script>
import BetterScroll from 'better-scroll'    // 依赖
import { mapState } from 'vuex'

import ViewList from './viewList/Index.vue'
import FoodList from './FoodList/Index.vue'
import HotelList from './HotelList/Index.vue'
import MassageList from './MassageList/Index.vue'
import KtvList from './KtvList/Index.vue'
import Loading from './Sub/Loading.vue'
import Error from './Sub/Error.vue'

import { ListModel } from 'models/list'
import tools from '../../utils/tools'

export default {
    name:'ListScrollWrapper',
    components: {
        ViewList,
        FoodList,
        HotelList,
        MassageList,
        KtvList,
        Loading,
        Error
    },
    data () {
        return {
          errorShow: false,
          loadingShow: true,
          listDatas: {}
        }
    },
    computed: {
        ...mapState(['cityId','field'])  // 
    },
    mounted () {
        this.scroll = new BetterScroll(this.$refs.wrapper)// ??? 看不懂 BetterScroll是谁
        this.getListDatas(this.cityId, this.field)
    },
    methods: {  // 方法
        getListDatas (cityId, field){ //传入list.js里的
        if(!this.listDatas[cityId]) {
            const listModel = new ListModel() // 实例化ListModel取到值

        this.loadingShow = true 

// 使用listModel下面的getListDates传入id和field  // then ?? res应该是接收的数据
        listModel.getListDatas(cityId, field).then((res)=>{
            if (res && res.status === 0) {
                const data = tools.formatJSON(res.data, 'keyword')
                
                this.errorShow = false
                setTimeout(()=>{
                    this.listDatas[cityId] = data
                    this.loadingShow = false;
                },500)
            } else {
                this.loadingShow = true
            }
            console.log(this.listDatas)
        })
        }
        }
        
    },
    watch: {
        cityId () {
            this.getListDatas(this.cityId, this.field)
        }
    }
}
</script>

<style scoped>

</style>