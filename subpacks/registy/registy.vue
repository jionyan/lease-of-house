<template>
	<view class="content">
		<image src="../static/logo.png" class="logo"></image>
		<input placeholder="用户名" class="input"/>
		<input placeholder="密码" class="input"/>
		<input placeholder="确认密码" class="input"/>
		<navigator url="../login/login" class="registy">去登录</navigator>
		<navigator url="../manual/manual" class="manual"> 注册即同意《亭好住注册协议》</navigator>
		<button @click="registy()" class="btn">立即注册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			registy(){
				console.log(123)
			}
		}
	}
</script>

<style scoped lang="scss" scoped>
.content{
	width: 100%;
	height: 100%;
	text-align: center;
	.logo{
		width: 50px;
		height: 50px;
		margin: 0 auto;
		margin-top: 30px;
		margin-bottom: 40px;
	}
	.input{
		text-align: left;
		text-indent: 1em;
		font-size: 14px;
		width: 90%;
		height: 30px;
		margin: auto;
		margin-top: 30px;
		border-bottom: 2px solid #eee;
	}
	.registy{
		font-size: 14px;
		color: #ADABB4;
		text-align: right;
		margin-top: 10px;
		margin-right: 5%;
	}
	.btn{
		width: 90%;
		margin: auto;
		height: 60rpx;
		font-size: 12px;
		line-height: 60rpx;
		color: white;
		background-color: #F44C59;
		margin-top: 20px;
	}
	.manual{
		font-size: 12px;
		color: #ADABB4;
		margin-top: 30px;
		margin-bottom: 20px;
	}
}
</style>
