<template>
   <div class="loading" v-show="loadingShow">
   <img class="loading-img" src="../../../../src/assets/images/loading.gif" alt="" />
   </div>
</template>

<script>
export default {
    name: 'Loading',
    props: {
        loadingShow: {
            type: Boolean,
            default () {
                return true;
            }
        }
    }
}
</script>

<style scoped>
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
}
.loading-img {
    width: 0.8rem;
    height: 0.8rem;
}
</style>