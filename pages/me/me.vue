<template>
	<view class="bg">
		<view class="unlogin" v-if="!islogin">
			<view class="up">
				<view class="left">
					<view class="top">
						您好
					</view>
					<view class="down">
						未登录用户
					</view>
				</view>
				<view class="right">
					<view class="top">
						当前身份
					</view>
					<view class="down">
						访客
					</view>
				</view>
			</view>
			<view class="lown" @click="islogin=!islogin">
				<icon class="iconfont icon-login" style="margin-right: 10px;"></icon>
				点我登录
			</view>
		</view>
		<view class="login" v-else>
			<view class="total">
				<image src="../../static/test.jpg" style="width: 100%;"></image>
			</view>
			<view class="content">
				<view class="one" style="display: flex;position: relative;">
					<image src="../../static/test.jpg" class="oneimg"></image>
					<view class="oneimg" style="line-height: 55px;">昵称 </view>
					<icon class="iconfont icon-shezhi" style="position: absolute;width: 30px;height: 30px;right: 19px;top: -12px;font-size: 20px;color: #EB8772;"></icon>
				</view>
				<view class="two">
					<view class="item">
						<image src="../../static/others/fangyuan.png" style="width: 30px;height: 30px;"></image>
						我的房源
					</view>
					<view class="item">
						<image src="../../static/others/xuqiu.png" style="width: 30px;height: 30px;"></image>
						我的需求
					</view>
					<view class="item">
						<image src="../../static/others/shoucang.png" style="width: 30px;height: 30px;"></image>
						我的收藏
					</view>
				</view>
				<view class="card">

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				islogin: false
			};
		}
	}
</script>

<style lang="scss" scoped>
	.bg {
		text-align: center;

		.unlogin {
			width: 95%;
			border-radius: 10px;
			height: 150px;
			margin: auto;
			background-color: #2DB6B4;

		}

		.up {
			display: flex;
			width: 100%;
			height: 100px;
			color: white;

			.left {
				margin-top: 15px;
				width: 50%;
				font-size: 20px;
				height: 80px;

				.top {
					width: 100%;
					text-indent: 2rem;
					text-align: left;
				}

				.down {
					width: 100%;
					text-indent: 2rem;
					text-align: left;
				}
			}

			.right {
				width: 50%;
				font-size: 17px;
				height: 80px;
				margin-top: 15px;

				.top {
					width: 100%;
					text-indent: 2rem;
					text-align: left;
				}

				.down {
					width: 100%;
					text-indent: 2rem;
					text-align: left;
				}
			}
		}

		.lown {
			width: 100%;
			height: 50px;
			border: initial;
			background-color: #2DB6B4;
			color: white;
			border-top: 1px solid white;
			line-height: 50px;
			border-bottom-right-radius: 10px;
			font-size: 14px;
		}

		.login {
			width: 96%;
			z-index: 77;
			height: 650px;
			margin: auto;
			text-shadow: 1px 1px 1px 1px grey;

		}

		.total {
			width: 100%;
			height: 100px;
			position: fixed;
			background-color: #2DB6B4;
			z-index: 88;
			overflow: hidden;
			margin: auto;
		}

		.content {
			z-index: 99;
			position: absolute;
			top: 50px;
			left: 5%;
			background-color: white;
			width: 90%;
			height: 600px;
			border: 1px solid grey;
			border-radius: 10px;
			box-shadow: indianred;

			.one {
				width: 100%;
				text-align: left;
				height: 100px;
				line-height: 100px;
				position: relative;
				border-bottom: 1px solid #DADCE0;
				.oneimg {
					margin-top: 25px;
					margin-left: 20px;
					width: 60px;
					height: 60px;
					border-radius: 5px;
				}
			}
			.two{
				width: 100%;
				height: 100px;
				display: flex;
				height: 60px;
				.item{
					width: 33%;
					height: 100%;
					font-size: 12px;
					display: flex;
					flex-wrap: wrap;
					text-align: center;
					align-items: center;
					flex-direction: column;
					justify-content: center;
					border-radius: 0;
				}
			}
		}


	}
</style>
