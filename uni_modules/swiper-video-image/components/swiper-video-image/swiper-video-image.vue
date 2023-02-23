<template>
	<view class="content">
		<view class="screen-swiper-box">
			<swiper :current="index" @change="swiperChange" class="screen-swiper" indicator-dots="true" :circular="circular"
				:autoplay="autoplay" :interval="interval" duration="500" :style="[whStyle]">
				<swiper-item v-for="(item, i) in list" :key="i" :id="i">
					<video v-if="item[typeName] == videoValue" :id="'myVideo-'+i" class="myVideo" :src="item[linkName]"
						controls objectFit="cover" enable-progress-gesture="false" show-loading="true"
						play-btn-position="center" show-fullscreen-btn="true" :style="[whStyle]"
						@click="swiperClick(item,i)"></video>
					<image v-if="item[typeName] == imgvalue" class="swiperImage" :src="item[linkName]" mode="scaleToFill"
						:style="[whStyle]" @click="swiperClick(item,i)">
					</image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
/**
	 * @property {Array} list 图片/视频列表
	 * @property {String | Number} width 显示视频/图片的宽度
	 * @property {String | Number} height 显示视频/图片的高度
	 * @property {String} linkName url字段字段
	 * @property {String} typeName 判断视频或者图片的字段
	 * @property {String} videoValue 判断视频的值
	 * @property {String} imgvalue 判断图片的值
	 * @property {Boolean} autoplay swiper是否自动切换
	 * @property {Boolean} circular swiper是否采用衔接滑动，即播放到末尾后重新回到开头
	 * @property {Boolean} autoPlayVideo swiper切换到视频是是否自动播放视频
	 * @property {Boolean} interval swiper自动切换时间间隔
	 * @event {Function} swiperClick 点击swiper时触发
	 * @event {Function} swiperChange swiper切换时触发
	 */
export default {
	props: {
		// 图片/视频列表
		list: {
			type: Array,
			required: true,
			default: () => {
				return []
			}
		},
		// 用于显示视频/图片的宽度
		width: {
			type: String,
			default: '690rpx'
		},
		// 用于显示视频/图片的高度
		height: {
			type: String,
			default: '260rpx'
		},
		// 用与判断视频或者图片的字段
		typeName: {
			type: String,
			default: 'type'
		},
		// 用于判断视频的值
		videoValue: {
			type: [String, Number],
			default: 'video'
		},
		// 用于判断图片的值
		imgvalue: {
			type: [String, Number],
			default: 'img'
		},
		// url字段
		linkName: {
			type: String,
			default: 'link'
		},
		// swiper是否自动切换
		autoplay: {
			type: Boolean,
			default: false
		},
		// swiper是否采用衔接滑动，即播放到末尾后重新回到开头
		circular: {
			type: Boolean,
			default: false
		},
		// swiper切换到视频是是否自动播放视频
		autoPlayVideo: {
			type: Boolean,
			default: false
		},
		// swiper自动切换时间间隔
		interval: {
			type: Number,
			default: 3500
		}

	},
	data() {
		return {
			index: 0, // 当前页
			videoCtx: ''
		}
	},
	mounted() {
		// 如果为true且第一个是视频的话就自动播放
		if (this.autoPlayVideo) {
			this.videoCtx = uni.createVideoContext('myVideo-' + 0, this)
			this.videoCtx.play()
		}
	},
	methods: {
		swiperChange(e) {
			// 获取上一个
			let obj = this.list[this.index]
			if (obj[this.typeName] == this.videoValue) {
				// console.log('暂停', this.index)
				this.videoCtx = uni.createVideoContext('myVideo-' + this.index, this)
				this.videoCtx.pause()
			}

			// 获取当前
			this.index = e.detail.current // 更新当前index
			obj = this.list[this.index]
			if (obj[this.typeName] == this.videoValue && this.autoPlayVideo) {
				// console.log('播放', this.index)
				this.videoCtx = uni.createVideoContext('myVideo-' + this.index, this)
				this.videoCtx.play()
			}
			this.$emit('swiperChange', this.index)
		},
		// 暂停播放
		pause() {
			let obj = this.list[this.index]
			if (obj[this.typeName] == this.videoValue) {
				this.videoCtx = uni.createVideoContext('myVideo-' + this.index, this)
				this.videoCtx.pause()
			}
		},
		// 播放
		play() {
			let obj = this.list[this.index]
			if (obj[this.typeName] == this.videoValue) {
				this.videoCtx = uni.createVideoContext('myVideo-' + this.index, this)
				this.videoCtx.play()
			}
		},
		// 点击当前视频或图片的回调
		swiperClick(item, i) {
			this.$emit('swiperClick', item, i)
		}
	},
	computed: {
		// 设置width和height属性
		whStyle() {
			let style = {}
			style.width = this.width
			style.height = this.height
			return style
		}
	}

}
</script>
<style lang="scss" scoped>
	.content {
		width: 100%;
		.screen-swiper-box {

			.screen-swiper {

				.swiperImage {}

				.myVideo {}
			}
		}
	}
</style>
