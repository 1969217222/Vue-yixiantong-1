<template>
   <div class="title-bd">
     <span class="name-text">{{title}}</span>
   </div>
</template>

<script>
export default {
    name:'DetailTitle',
    props:{
        title:{
        type: String,
        default(){
            return ''
        }
       
        }
    }
}
</script>

<style scoped>
.title-bd{
    display: flex;
    border-bottom: 1px solid #ddd;
}
.name-text{
    font-size: .2rem;
    margin-left: .1rem;
    color:#06c1ae;
    line-height: 0.5rem;
    }
</style>