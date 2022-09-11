<template>
  <div class="ticket-bd">
    <detail-title
     icon="icon-intro"
     title="购票信息"
    ></detail-title>
    <div class="ticket-content">{{ticketInfo}}</div>
  </div>
</template>

<script>
import DetailTitle from './Title'
export default {
    name:'DetailTicketInfo',
    components: {
        DetailTitle,
    },
    props:{
        ticketInfo:{
            type: String,
            default () {
                return '加载中...'
            }
        }
    }
}
</script>

<style scoped>

.ticket-content{
     border-bottom: 1px solid #ddd;
     padding: .1rem .15rem;
     font-size: .14rem;
     line-height: .18rem;
     text-indent: 2em;   
     box-sizing: border-box; 
}
</style>