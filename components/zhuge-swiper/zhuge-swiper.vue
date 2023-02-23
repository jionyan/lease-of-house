<template>
	<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="swiperAutoplay" :interval="interval"
		:duration="duration" @change='swiperChange'>
		<swiper-item v-for="(item,index) in list" :key="index + item.src" >
			<video-item v-if="item.type === 'video'" 
			:videoAutoplay="videoAutoPlay"
			:poster="item.poster"
			:src="item.src" @play="handleVideoPlay" @pause="handleVideoPause"
				@ended="handleVideoEnd"></video-item>
			<image-item v-if="item.type === 'image'" :src="item.src"></image-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import VideoItem from './components/video.vue';
	import ImageItem from './components/image.vue'
	export default {
		onShow: function() {

		},
		props: {
			list: {
				type: Array, 
				default: () => {
					return [] //[{type:'video',src:''},{type:'image',src:''}]
				},
				required: true
			}
		},
		data() {
			return {
				//这里控制swiper
				indicatorDots: true,
				swiperAutoplay: true,
				interval: 4000,
				duration: 500,
				//以下是控制viedo的
				videoAutoPlay:false,
			}
		},
		components: {
			VideoItem,
			ImageItem
		},
		methods: {
			swiperChange(detail) {
				//切换时要把视频暂停
				this.videoAutoPlay = false;
			},
			handleVideoPlay() {
				this.swiperAutoplay = false
				this.videoAutoPlay = true;
			},
			handleVideoPause() {
				this.swiperAutoplay = true
			},
			handleVideoEnd() {
				this.swiperAutoplay = true;
			}
		},
		mounted() {

		}
	}
</script>

<style lang="less">

</style>
