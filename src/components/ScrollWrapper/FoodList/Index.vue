<template>
  <div class="list-wrapper">
    <food-list v-for="(item, index) in foodDatas" 
    :key="index" 
    :data="item" />
  </div>
</template>

<script>
import foodList from './Sub.vue'
export default {
    name:"FoodList",
    components:{
        foodList,
    },
    props: {
        foodDatas: Array,
    }
}
</script>

<style scoped>

</style>