<template>
  <div class="search-input">
    <div class="input-wrapper"> 
        <input type="text" class="input" v-model="keyword" :placeholder="placeholder" @input="onSearch">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SearchModel } from '../../../models/search';
import tools from '../../../utils/tools';

export default {
    name:'SearchInput',
    data () {
        return{
            keyword: '',
            placeholder: '美食 / 景点 / 酒店 / 按摩 / KTV'
        }
    },

    computed: {
        ...mapState(['cityId'])
    },

    methods: {
        onSearch: tools.throttle(function () {
            const keyword = tools.trimSpace(this.keyword);

            if (keyword.length <= 0) {  // 判断输入框的值
            this.$emit('onSearch', {})   // 自定义事件
                return;
            }
           const searchModel = new SearchModel()
           
           searchModel.searchAction(keyword, this.cityId).then((res) =>{
             this.$emit('onSearch', res)
           })
          }, 1000) 
    }
}
</script>

<style scoped>
.search-input{
    height: 0.44rem;
    padding: .06rem .15rem;
    box-sizing: border-box;
}
.input {
    height: 100%;
    width: 100%;
    font-size: .16rem;
    border: 1px solid #ddd;
    border-radius: .03rem;
    box-sizing: border-box;
    text-indent: .32rem;
}
</style>