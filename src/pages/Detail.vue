<template>
	<div class="container">
		<common-header :title="title"></common-header>
		<detail-scroll-wrapper></detail-scroll-wrapper>
	</div>
</template>

<script>
  import CommonHeader from '../components/Header/Common.vue';
  import DetailScrollWrapper from '../components/ScrollWrapper/Detail.vue';

	export default {
		name: 'Detail',
		components: {
			CommonHeader,
			DetailScrollWrapper
		},
		data () {
			return {
				title: '详细信息'
			}
		}
	}
</script>

<style scoped>
	.container {
		font-size: .25rem;
		line-height: .5rem;
	}
</style>