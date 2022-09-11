<!-- 详细信息 -->
<template>
   <div class="scroll-wrapper" ref="wrapper">
      <div class="scroll-conetent">
        <div v-if="!errorShow">
        <detail-swiper 
        :picDatas="detailData.pics"
        ></detail-swiper> 
      
       <detail-food  
          v-if="field==='food'"
        :name="detailData.name"
        :starNum="detailData.star"
        :score="detailData.score"
        :address="detailData.address"
        :price="detailData.default_price"
        :openDateTime = "detailData.open_datetime"
        :recom="detailData.recom"
        :commentKeyword="detailData.comment_keyword"
        ></detail-food>

        <detail-view
         v-if="field === 'view'"
        :name="detailData.name"
        :starNum="detailData.star"
        :score="detailData.score"
        :address="detailData.address"
        :price="detailData.default_price"
        :openDateTime="detailData.open_datetime"
        :tip="detailData.tip"
        :intro="detailData.intro"
        :ticketInfo="detailData.ticket_info"
        ></detail-view>

        <detail-hotel
        v-if="field === 'hotel'"
         :name="detailData.name"
        :starNum="detailData.star"
        :score="detailData.score"
        :address="detailData.address"
        :price="detailData.default_price"
        :service="detailData.service"
        ></detail-hotel>

        <detail-massage
        v-if="field === 'massage'"
        :name="detailData.name"
        :starNum="detailData.star"
        :score="detailData.score"
        :address="detailData.address"
        :price="detailData.default_price"
        :openDateTime = "detailData.open_datetime"
        :ticketInfo="detailData.ticket_info"
        :commentKeyword="detailData.comment_keyword"
        :service="detailData.service"
        ></detail-massage>

        <detail-ktv
        v-if="field === 'ktv'"
         :name="detailData.name"
        :starNum="detailData.star"
        :score="detailData.score"
        :address="detailData.address"
        :price="detailData.default_price"
        :service="detailData.service"
        ></detail-ktv>
        </div>

        <error 
         :errorShow="errorShow"
        ></error>
      </div>
   </div>

</template>

<script>
import DetailSwiper from './Sub/Swiper.vue'
import DetailFood from './Detail/Food.vue'
import DetailView from './Detail/View'
import DetailHotel from './Detail/Hotel.vue'
import DetailMassage from './Detail/Massage.vue'
import DetailKtv from './Detail/Ktv.vue'
import Error from '../ScrollWrapper/Sub/Error.vue'

import BetterScroll from 'better-scroll'
import  {DetailModel}  from '../../models/detail'
import tools from '../../utils/tools'

export default {
    name:'DetailScrollWrapper',
    components: {
        DetailSwiper,
        DetailFood,
        DetailView,
        DetailHotel,
        DetailMassage,
        DetailKtv,
        Error
    },
    
    data() {
        return {
            field:'',
            id: 0,
           errorShow: false,
            detailData: {},
          
        }
    },
     mounted() {
        this.scroll = new BetterScroll(this.$refs.wrapper);
        this.field = this.$route.params.field;
        this.id = this.$route.params.id;
        this.getDetail(this.field, this.id);
    },
    activated () {    // 生命周期函数
   //this.currentField = this.$route.query.field;
   //this.currentId = this.$route.query.id
     this.currentField = this.$route.params.field;
    this.currentId = this.$route.params.id

    if(this.currentField !== this.field || this.currentId !==this.id)
    this.field = this.currentField    // 如果不一样 那就让他们一样
    this.id = this.currentId
    this.getDetail(this.field,this.id)
    },
    methods:{
        getDetail (field,id) {
            const detailModel = new DetailModel()
            console.log(detailModel)
            detailModel.getDetail(field, id).then((res)=>{
               if (res && res.status === 0) {
            
               const data = res.data;
                this.errorShow = false 

                data.pics && (data.pics = tools.jonToArr(data.pics));
                data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword));
                data.recom && (data.recom = tools.replaceToSpace(data.recom));
                data.service && (data.service = tools.jonToArr(data.service));
                data.star && (data.star = data.star*1);
                data.default_price && (data.default_price = data.default_price*1);
                this.detailData = data;
              //  console.log(' this.detailData:::', d);
                  //this.detailData.comment_keyword = this.detailData.comment_keyword.split(',')
               }  else {
               this.errorShow = true 
              }
            })
           
        }
        
    }
}
</script>

<style scoped>

</style>