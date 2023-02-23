

## swiper-video-image 视频/图片轮播



视频/图片轮播组件 ---关于兼容性我自己试了nvue、微信小程序和H5没问题。



### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。



### 基本用法

在 ``template`` 中使用组件

```html
<swiper-video-image
	:list="list"
	autoplay
	circular
	autoPlayVideo
	ref="swiperVideoImage"
	@swiperClick="swiperClick"
	@swiperChange="swiperChange"
></swiper-video-image>
```



```javascript

export default {
	data() {
		return {
			list: [
				{ type: 'video', link: 'https://cdn.uviewui.com/uview/resources/video.mp4' },
				{ type: 'img', link: 'https://cdn.uviewui.com/uview/swiper/swiper1.png' },
				{ type: 'img', link: 'https://cdn.uviewui.com/uview/swiper/swiper2.png' }
			]
        };
	},
	methods: {
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
		}
	}
};

```


## API

### Calendar Props

| 属性名     | 类型   | 默认值 | 说明                   |
| ---------- | ------ | ------ | ---------------------- |
| list       | Array  | -      | 图片/视频列表          |
| width      | String | 690rpx | 显示视频/图片的宽度    |
| height     | String | 260rpx | 显示视频/图片的高度    |
| linkName   | String | link   | url字段              |
| typeName   | String | type     | 判断视频或者图片的字段 |
| videoValue | String/Number | video     | 判断视频的值           |
| imgvalue   | String/Number | img      | 判断图片的值           |
| autoplay   | Boolean | false      | swiper是否自动切换           |
| circular   | Boolean | false      | swiper是否采用衔接滑动，即播放到末尾后重新回到开头           |
| autoPlayVideo   | Boolean | false      | swiper切换到视频是是否自动播放视频          |
| interval   | Number | 3500      | swiper自动切换时间间隔          |

### Calendar Events

| 事件名       | 说明             | 返回值 |
| ------------ | ---------------- | ------ |
| swiperClick  | 点击swiper时触   |        |
| swiperChange | swiper切换时触发 |        |



