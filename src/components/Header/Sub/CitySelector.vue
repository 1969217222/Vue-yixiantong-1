 <!-- // 子组件 全部 按钮 -->
 <<template>
 <div class="city">
    <router-link to="City">
        <span class="city-name">{{this.cityName}}</span>
        <span class="logo"> > </span>
    </router-link>
    
 </div>
 </template>
 
 <script>
 import { mapState } from 'vuex'

 export default {
    name: 'CitySelector',
    computed: {
      ...mapState(['cityName'])
    }
 }
 </script>
 
 <style scoped>
 .city {
   width: .5rem; 
    height: .5rem;
    line-height: .5rem;
    font-size: .15rem;
    margin-left: .08rem;
    font-weight: bold;
 }
 a {
    height:.5rem;
 }
 .logo {
    transform:rotate(90deg)
 }
 </style>