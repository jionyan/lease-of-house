<template>
	<view class="bg">
		<image src="../../static/logo.png" style="height: 150px;width: 100%;"></image>
		<button @click="open" class="btn">
			<icon class="iconfont icon-sousuo" style="margin-right: 10px;"></icon>
			搜索房源
		</button>
		<view style="display: flex;width: 100%;margin-top: 5px;height: 30px;position: sticky;z-index: 99;top: 0;background-color: white;">
			<button class="xiala" @click="chooseAddress">
				位置
				<icon class="iconfont icon--xiala" style="margin-left: 10px;"></icon>
			</button>
			<button class="xiala">
				类型
				<icon class="iconfont icon--xiala" style="margin-left: 10px;"></icon>
			</button>
			<button class="xiala">
				价格
				<icon class="iconfont icon--xiala" style="margin-left: 10px;"></icon>
			</button>
		</view>
		<picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange"
			class="picker-view">
			<picker-view-column>
				<view class="item">滁州市</view>
			</picker-view-column>
			<picker-view-column>
				<view class="item" v-for="(item,index) in areas" :key="index">{{item}}</view>
			</picker-view-column>
			<picker-view-column>
				<view class="item" v-for="(item,index) in streets" :key="index">{{item}}</view>
			</picker-view-column>
		</picker-view>
		<view>
			<qizai9527-dynamic v-for="(item,index) in list" :key="item.id" :imgList="item.imgList" :avatar="item.avatar"
				:name="item.name" :publishTime="item.publishTime" :content="item.content" :isLike="item.isLike"
				:isGiveReward="item.isGiveReward" :likeNumber="item.likeNumber"
				:giveRewardNumber="item.giveRewardNumber" :chatNumber="item.chatNumber" :sourceShow="true"
				:sourceTitle="sourceTitle" :sourceImg="sourceImg" :sourceAuthor="sourceAuthor"
				@clickDynamic="clickDynamic(index)" @clickUser="clickUser(item.id)" @clickFocus="clickFocus(index)"
				@clickThumbsup="clickThumbsup(item.id)" @clickGiveReward="clickGiveReward(item.id)"
				@clickChat="clickChat(item.id)" @clickSource="clickSource(id)"
				@click="commodity"></qizai9527-dynamic>
		</view>
	</view>

</template>

<script>
	import data from '../../static/js/addressData.js'
	import streets from '../../static/js/streets.js'
	export default {
		data() {
			return {
				visible: false,
				areas: ["琅琊区",
					"南谯区",
					"天长市",
					"明光市",
					"来安县",
					"全焦",
					"琅琊区",
				],
				index: 0,
				streets: [],
				list: [{
						id: 1,
						avatar: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1950846641,3729028697&fm=26&gp=0.jpg',
						name: '小新',
						publishTime: 1617086756,
						content: '中国外交官这样讽加拿大总理，算不算骂？该不该骂？',
						imgList: [
							'https://cdnsfb.soufunimg.com/viewimage/open/0/2022_6/26/M13/45/b6de7aa7-4ede-45b3-b258-b10feea39ecb/1000x637c.jpg',
							'https://cdnsfb.soufunimg.com/viewimage/open/0/2022_6/26/M13/45/1ab98678-0989-44b2-a8c1-13daa65e269c/1000x637c.jpg',
						],
						isLike: false,
						isGiveReward: false,
						likeNumber: 2,
						giveRewardNumber: 2,
						chatNumber: 2,
						isFocusOn: true,

						sourceShow: true,
						sourceTitle: '中国外交官这样讽加拿大总理，算不算骂？该不该骂？',
						sourceAuthor: '哇妈妈',
						sourceImg: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1976832114,2993359804&fm=26&gp=0.jpg',

					},

					{
						id: 2,
						avatar: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2291332875,175289127&fm=26&gp=0.jpg',
						name: '小白',
						publishTime: 1617036656,
						content: '  足不出户享国内核医学领域顶级专家云诊断，“中山-联影”分子影像远程互联融合创新中心揭牌 ',
						imgList: [
							'https://cdnsfb.soufunimg.com/viewimage/sfb/houseverfiy/2022_8/26/M9/25/e2c5e65e-bca2-45cd-9f49-05f9bae28d85/1000x637c.jpg',
							'https://cdnsfb.soufunimg.com/viewimage/sfb/houseverfiy/2022_8/26/M9/25/6fba8021-736f-4792-9ada-8a0c851fbf2c/1000x637c.jpg',
						],
						isLike: false,
						isGiveReward: false,
						likeNumber: 0,
						giveRewardNumber: 0,
						chatNumber: 2,
						isFocusOn: false,
					},
					{
						id: 3,
						avatar: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2291332875,175289127&fm=26&gp=0.jpg',
						name: '小白',
						publishTime: 1617036656,
						content: '  足不出户享国内核医学领域顶级专家云诊断，“中山-联影”分子影像远程互联融合创新中心揭牌 ',
						imgList: [
							'https://cdnsfb.soufunimg.com/viewimage/sfb/houseverfiy/2022_8/26/M9/25/e2c5e65e-bca2-45cd-9f49-05f9bae28d85/1000x637c.jpg',
							'https://cdnsfb.soufunimg.com/viewimage/sfb/houseverfiy/2022_8/26/M9/25/6fba8021-736f-4792-9ada-8a0c851fbf2c/1000x637c.jpg',
						],
						isLike: false,
						isGiveReward: false,
						likeNumber: 0,
						giveRewardNumber: 0,
						chatNumber: 2,
						isFocusOn: false,
					}
				]
			}
		},
		onLoad() {
			this.streets = streets[1]
		},
		methods: {
			open() {
				uni.showToast({
					title: "当前只支持滁州市地区租房信息",
					icon: 'loading'

				})
			},
			chooseAddress() {
				this.visible = !this.visible
			},
			bindChange(e) {
				console.log("--------------")
				this.streets = streets[e.detail.value[1]]
				console.log("--------------")
			},
			clickDynamic(e) {
				console.log('childDynamic');
				console.log(e)
				uni.navigateTo({
					url:'/pages/commodity/commodity'
				})
			},
			// 点击用户信息
			clickUser(e) {
				console.log(e);
				console.log('childUser');
			},
			// 点击关注
			clickFocus(e) {
				this.list[e].isFocusOn = this.list[e].isFocusOn ? false : true;
				console.log(e);
				console.log('childUser');
			},
			// 点赞
			clickThumbsup(e) {
				console.log(e);
				console.log('childThumbsup');
			},
			// 点击打赏
			clickGiveReward(e) {
				console.log(e);
				console.log('clickGiveReward');
			},
			// 点击聊天
			clickChat(e) {
			 console.log(e);
				console.log('clickChat');
			},
			// 点击原连接
			clickSource(e) {
			 console.log(e);
			 console.log(123123)
			}
		}
	}
</script>

<style scoped>
	.page {
		background-color: #8A8A8A;
	}

	.bg {
		height: 100%;
	}

	.btn {
		text-align: center;
		width: 90%;
		height: 40px;
		font-size: 16px;
		background-color: #7F7F7F;
		color: white;
		border-radius: 15px;
		margin-top: -30px;
		opacity: 50%;
	}

	.btn-content {
		height: 40px;
		line-height: 20px;
	}

	.xiala {
		font-size: 15px;
		height: 30px;
		line-height: 30px;
		background-color: white;
	}

	.xiala::after {
		border: initial;
	}

	.picker-view {
		width: 750rpx;
		height: 650rpx;
		position: sticky;
		top: 30px;
		background-color: white;
		z-index: 999;
	}

	.item {
		height: 50px;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>
