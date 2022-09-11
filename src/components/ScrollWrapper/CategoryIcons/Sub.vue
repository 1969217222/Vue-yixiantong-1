<template>
	<div class="icon-item">
		<div class="icon" @touchstart="toPath(field)" :style="{backgroundColor: bgColor}">
			<span class="iconfont" :class="icon"></span>
		</div>
		<p class="icon-text">{{iconText}}</p>
	</div>
</template>

<script>
  import { mapMutations } from 'vuex';

	export default {
		name: 'CategoryIconsSub',
		props: {
			bgColor: String,
			icon: String,
			field: String,
			iconText: {
				type: String,
				default () {
					return '分类'
				}
			}
		},

		methods: {
			...mapMutations(['selectField']),
			toPath (field) {
            this.selectField(field);
            this.$router.push('/list');
 
			}
		}
	}
</script>

<style scoped>
.icon-item {
	position: relative;
	width: 20%;
	height: .45rem;
	padding: .2rem 0;
}
	.icon {
		display: flex;
        justify-content: center;
        align-items: center;
		position: absolute;
		top: .1rem;
		
		right: .18rem;
		width: .4rem;
		height: .4rem;
		border-radius: 50%;
	}
	.iconfont {
		font-size: .26rem;
		color:#fff;
	}
	.icon-text {
		position: absolute;
		top: .45rem;
		right: .18rem;
		font-size: .2rem;
		text-align: center;
		margin-top: .1rem;
	}
</style>








