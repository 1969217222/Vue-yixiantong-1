<template>
   <nav class="tab">
    <tab-sub
    v-for="(item, index) of citiDatas"
    :cityInfo="item"
    :key="index"
    ></tab-sub>
   </nav>
</template>

<script>
import TabSub from './Sub.vue'
import cityDatas from '../../assets/tata/cities'

export default {
    name: 'Tab',
    props: {
        TabSub,
    },
    data(){
        return {
            cityDatas
        }
    }
}
</script>

<style scoped>
.tab{
    display: flex;
    flex-direction: row;
    height: 0.44rem;
    background: #fff;
    border-bottom: 1px solid #ddd ;
}
</style>