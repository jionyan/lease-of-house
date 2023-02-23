<template>
	<view style="width: 100%;">
		<swiper-video-image :list="list" autoplay circular  ref="swiperVideoImage"
			@swiperClick="swiperClick" @swiperChange="swiperChange" style="width: 100%;" width="100%" height="280px"></swiper-video-image>
		<!-- 引入 -->
		<view style="width: 100%;margin-top: 10px;">
			<lgd-tab v-model="tabIndex" :tabValue="tabValue" @changeIndex="change"/>
		</view>
	</view>
</template>

<script>
	import ZgSwiper from '@/components/zhuge-swiper/zhuge-swiper';
	export default {
		data() {
			return {
				tabValue: ['概况', '描述', '设施', '地图'],
				tabIndex: 0,
				currentImg: 0, //默认展示
				list: [{
						type: 'video',
						link: 'https://cdn.uviewui.com/uview/resources/video.mp4'
					},
					{
						type: 'img',
						link: 'https://cdn.uviewui.com/uview/swiper/swiper1.png'
					},
					{
						type: 'img',
						link: 'https://cdn.uviewui.com/uview/swiper/swiper2.png'
					}
				]
			};
		},
		components: {
			ZgSwiper,
		},
		methods: {
			onChange(item, index) {
				console.log(item)
				console.log(index)
				console.log(this.tabIndex)
			},
			// swiper切换时触发的回调
			swiperChange(index) {
				console.log(index)
			},
			// 点击当前视频或图片的回调
			swiperClick(e, index) {
				console.log(e, index)
			},
			// 暂停当前视频播放
			pause() {
				this.$refs.swiperVideoImage.pause()
			},
			// 播放当前视频
			play() {
				this.$refs.swiperVideoImage.play()
			},
			change(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">

</style>
