<template>
<div :class="['tab-item', {current: cityInfo.cityId === cityId}]" @click="onTabClick(cityInfo)">
{{cityId.cityName}}
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'TabSub',
    props: {
        cityInfo: Object
    },
    computed: {
        ...mapState(['cityId'])
    },
    methods: {
        ...mapMutations(['selectCity']),

        onTabClick(cityInfo) {
            this.selectCity(cityInfo)
        }
    }
}
</script>

<style scoped>
.tab-item{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    font-size: .16rem;
    box-sizing: border-box;
    border-bottom: 2px solid #06c1ae
}

</style>