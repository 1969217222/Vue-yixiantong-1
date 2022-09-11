  <!-- // 其他通用页面 -->
  <template>
    <div class="header">
      <back-ward></back-ward> 
      <div class="text">
          {{title}}
      </div>
    </div>
  </template>
  
  
  <script>
 
import BackWard from './Sub/BackWard.vue'

  export default {
    name:'CommonHeader',
    components: {
        BackWard,
      },

  props:  {
      title: {
        type: String,
        default () {
          return '一线生活通'
        }
      }
    }
  }
  </script>

<style scoped>

  .header {
    position: relative; 
    display:flex; 
    justify-content: center;
    background-color: #ffc300;

  }
  </style>
