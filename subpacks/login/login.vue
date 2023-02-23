<template>
	<view class="content">
		<image src="../static/logo.png" class="logo"></image>
		<input placeholder="邮箱" class="input" v-model="email"/>
		<input placeholder="密码" class="input" v-model="password"/>
		<navigator url="../registy/registy" class="registy">去注册</navigator>
		<button @click="checkLogin" class="btn">登录</button>
		<image src="../static/qq.png" class="other1"></image>
		<image src="../static/wx.png" class="other2"></image>
	</view>
</template>

<script>
	import {login} from '../api/user.js'
	import {ttt} from '../api/user.js'
	// import axios from 'axios'
	export default {
		data() {
			return {
				email:'',
				password: ''
			}
		},
		methods: {
			async loginIt(){
				const data = {
					"password": this.password,
					"email": this.email
				}
				try{
					const res = await login(data)
					this.res = res
					console.log(this.res)
					uni.setStorageSync("token", this.res)
					uni.reLaunch({
						url: '/pages/index/index'
					})
				}catch(e){
					console.log(e)
					uni.showToast({
					    title: '用户名或者密码错误',
					    icon: 'none',
					    duration: 2000
					})
					//TODO handle the exception
				}
			},
			checkLogin(){
				ttt("213123123131231")
				this.loginIt()
				// console.log(123)
			}
		}
	}
</script>

<style scoped lang="scss">
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
	.other1{
		width: 35px;
		height: 35px;
		margin-left: 25%;
		position: absolute;
		left: 10px;
		margin-top: 70px;
	}
	.other2{
		width: 35px;
		height: 35px;
		margin-right: 25%;
		position: absolute;
		right: 10px;
		margin-top: 70px;
	}
}
</style>
