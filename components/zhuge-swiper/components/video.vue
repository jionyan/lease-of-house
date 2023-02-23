<template>
	<video id='myVideo' :initial-time="initialTime" :muted="muted" :src="src" :poster="poster" :enable-play-gesture="enablePlayGesture"
		@play="handlePlay" @pause="handlePause" @ended="handleEnd" @controlstoggle='handlecontrolstoggle' ref='videoRef'
		class="uni-video-video" x5-video-player-type="h5" x-webkit-airplay="allow"></video>
</template>

<script>
	export default {
		onShow: function() {

		},
		props: {
			src: {
				type: String,
				default: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/3c1782e0-60ab-11eb-8ff1-d5dcf8779628.m4v',
				required: true,
			},
			poster: {
				type: String,
				default: 'https://img.tupianzj.com/uploads/allimg/151208/9-15120R10056.jpg',
				required: false,
			},
			videoAutoplay: {
				type: Boolean,
				default: true,
			},
			initialTime: {
				type: Number,
				default: 0,
			},
			muted: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				enablePlayGesture: true,
			}
		},
		watch: {
			videoAutoplay(val) {
				if (!val) {
					//视频暂停
					uni.createVideoContext('myVideo').pause()
				}
			}
		},
		components: {},
		methods: {
			handlePlay() {
				this.$emit('play', {});
				this.$nextTick(function() {
					this.autoplay = false
				})

			},
			handlePause() {
				this.$emit('pause');
			},
			handleEnd() {
				this.$emit('ended');
			},
			handlecontrolstoggle() {
				this.autoplay = false
			}
		},
		mounted() {

		}
	}
</script>

<style>
	.uni-video-video {
		width: 100%;
		height: 100%;
	}
</style>
