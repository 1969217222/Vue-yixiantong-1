<!-- 图标列表组件 -->
<template>
  <div class="icons-wrapper">
    <category-icons-sub
     v-for="item of itemList"
    :bgColor='item.bgColor'
    :icon="item.icon"
    :field="item.field"
    :iconText="item.iconText"
    :key="item.id"
    ></category-icons-sub>

  </div>
</template>

<script>
import CategoryIconsSub from './Sub.vue'
import fieldDatas from 'data/fields'


export default {
    name: 'CategoryIcons',
    components:{
        CategoryIconsSub,
    },
    data() {
        return {
            itemList: fieldDatas
        }
    }
}
</script>

<style scoped>
 .icons-wrapper {
     display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #ddd;
 }
</style>