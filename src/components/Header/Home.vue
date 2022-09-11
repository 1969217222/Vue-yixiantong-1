<!-- // 首页专有页面 -->
<template>
     <header class="header">
        <city-selector></city-selector>
        <false-input></false-input>
     </header>
</template>

<script>
import CitySelector from './Sub/CitySelector';   // 
import FalseInput from './Sub/FalseInput.vue'    // 搜索框
export default {
    name: 'HomeHeader',
    components: {
        CitySelector,
        FalseInput,
    }
}
</script>

<style scoped>
.header {
    height: .5rem;
    display: flex;  
    flex-direction: row;
    background-color: #ffc300;
}
body{
    background-color: #ddd;
}
</style>