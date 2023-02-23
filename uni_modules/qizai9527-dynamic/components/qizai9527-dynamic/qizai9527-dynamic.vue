<template>
	<view>
		<view  class="dynamic"  @click="clickDynamic()">
			<view class="user__container" :style="'display: '+userDisplay+';'">
				<view class="user__header-warp">
					<!-- 头像组 -->
					<view class="user__header" @click.stop="clickUser()">
						<image class="user__header-image" :src="avatar" mode="aspectFill"></image>
					</view>
				</view>
				<view class="user__content">
					<view class="user__content-main">
						<text class="user__content-title uni-ellipsis" @click.stop="clickUser()">{{ name }}</text>
						<text class="user__content-note uni-ellipsis">{{ timestampFormat(publishTime) }}</text>
					</view>
					<view class="user__content-extra">
						<slot>
							<text :class="isFocusOn?'user__focus-on':'user__focus-off'"  @click.stop="clickFocus()">{{isFocusOn?'关注':'已关注' }}</text>
						</slot>
					</view>
				</view>
			</view>
			
			<view class="text">{{content}}</view>
			<view class="allImage">
				<view class="imgList">
					<view class="images" v-for="(item,index) in imgList" :key="index">
						<image @click.stop="previewImg()" class="oneimg" :src="item" mode="aspectFill" :style="{width:imgWidth+'px','max-height':imgHeight+'px'}"></image>
					</view>
				</view>
			</view>
			
			
			<view class="operate"  :style="'display: '+operateDisplay+';'">
				<view class="operate-wap">
					<image class="operate-icon" :src="isLike?thumbUpImg:thumbImg" mode="aspectFill"></image>
					<view  class="operate-text"  :style="'padding-left:30upx;color:'+ (isLike?operateUpColor:operateColor)">{{likeNumber?likeNumber:'点赞'}}</view>
				</view>
				<view class="operate-wap">
					<image class="operate-icon" :src="isGiveReward?rewordUpImg:rewordImg" mode="aspectFill"></image>
					<view  class="operate-text" :style="'color:'+ (isGiveReward?operateUpColor:operateColor)">{{giveRewardNumber?giveRewardNumber:'赏金'}}</view>
				</view>
				<view class="operate-wap">
					<image class="operate-icon" :src="commentsImg" mode="aspectFill"></image>
					<view  class="operate-text" :style="'color:'+ operateColor">{{chatNumber?chatNumber:'评论'}}</view>
				</view>
			</view>
		</view>
		<view class="bottom-line"></view>
	</view>
</template>

<script>
	export default {
		props: {
			avatar: {
				type: String
			},
			name: {
				type: String
			},
			publishTime: {
				type: Number
			},
			isFocusOn: {
				type: Boolean
			},
			content: {
				type: String
			},
			imgList: {
				type: Array
			},
			isLike: {
				type: Boolean
			},
			isGiveReward: {
				type: Boolean
			},
			likeNumber: {
				type: Number
			},
			giveRewardNumber: {
				type: Number
			},
			chatNumber: {
				type: Number
			},
			userNoShow: {
				type: Boolean
			},
			operateNoShow: {
				type: Boolean
			},
			sourceShow: {
				type: Boolean
			},
			sourceImg: {
				type: String
			},
			sourceTitle: {
				type: String
			},
			sourceAuthor: {
				type: String
			}
		},
		data() {
			return {
				windowWidth:0,	//屏幕可用宽度
				windowHeight:0,	//屏幕可用高度
				imgWidth: 0,	//图片宽度
				imgHeight: 0,	//图片高度
				userDisplay: 'flex',
				operateDisplay: 'block',
				sourceDisplay: 'none',
				operateColor: 'gray',
				operateUpColor: '#e85142',
				thumbImg: '/static/cards/unlike.png',
				thumbUpImg:'/static/cards/like.png',
				rewordImg:'/static/cards/medal.png',
				rewordUpImg:'/static/cards/medal-hover.png',
				commentsImg:'/static/cards/comments.png',
			}
		},
		mounted() {
			const res = uni.getSystemInfoSync();
			this.windowHeight = res.windowHeight;
			this.windowWidth = res.windowWidth;
			
			if(this.userNoShow){
				this.userDisplay = 'none';
			}
			if(this.operateNoShow){
				this.operateDisplay = 'none';
			}
			if(this.sourceShow){
				this.sourceDisplay = 'flex';
			}
			this.judgeImg();
		},
		methods: {
			// 预览图片
			previewImg() {
				uni.previewImage({
					urls: this.imgList,
					longPressActions: {
						itemList: ['保存图片'],

					}
				})
			},
			// 自适应判断
			judgeImg() {
				if (this.imgList.length == 1) {
					this.imgWidth = this.windowWidth*2/3;
					this.imgHeight = this.windowHeight*3/5;
				}else if (this.imgList.length == 4) {
					this.imgWidth = this.windowWidth/3.3;
					this.imgHeight = this.imgWidth;
				}else{
					this.imgWidth = this.windowWidth/3.4;
					this.imgHeight = this.imgWidth;
				}
			},
			timestampFormat( timestamp ) {
				if(!timestamp) return '';
			    function zeroize( num ) {
			        return (String(num).length == 1 ? '0' : '') + num;
			    }
			
			    var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
			    var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数
			
			    var curDate = new Date( curTimestamp * 1000 ); // 当前时间日期对象
			    var tmDate = new Date( timestamp * 1000 );  // 参数时间戳转换成的日期对象
			
			    var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
			    var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();
			
			    if ( timestampDiff < 60 ) { // 一分钟以内
			        return "刚刚";
			    } else if( timestampDiff < 3600 ) { // 一小时前之内
			        return Math.floor( timestampDiff / 60 ) + "分钟前";
			    } else if ( curDate.getFullYear() == Y && curDate.getMonth()+1 == m && curDate.getDate() == d ) {
			        return '今天' + zeroize(H) + ':' + zeroize(i);
			    } else {
			        var newDate = new Date( (curTimestamp - 86400) * 1000 ); // 参数中的时间戳加一天转换成的日期对象
			        if ( newDate.getFullYear() == Y && newDate.getMonth()+1 == m && newDate.getDate() == d ) {
			            return '昨天' + zeroize(H) + ':' + zeroize(i);
			        } else if ( curDate.getFullYear() == Y ) {
			            return  zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
			        } else {
			            return  Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
			        }
			    }
			},
			
			/** 触发父级事件 */
			// 点击动态
			clickDynamic(){
				this.$emit('clickDynamic');
			},
			// 点击用户信息
			clickUser(){
				this.$emit('clickUser');
			},
			// 点击关注
			clickFocus(){
				this.$emit('clickFocus');
			},
			// 点赞
			clickThumbsup(){
				this.$emit('clickThumbsup');
			},
			// 点击打赏
			clickGiveReward(){
				this.$emit('clickGiveReward');
			},
			// 点击聊天
			clickChat(){
				this.$emit('clickChat');
			},
			// 点击原链接
			clickSource(){
				this.$emit('clickSource');
			}
		}
	}
</script>

<style>
	.dynamic{
		width: 96%;
		font-size: 30upx;
		background-color: white;
		padding: 2%;
	}
	.allImage {
		display: flex;
		margin-top: 10upx;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	.imgList{
		margin: 0 3%;
	}
	.images:not(:nth-child(3n)) {
		/* margin-right: 10rpx; */
	}
	.text{
		margin: 1% 3% 2%;
	}
	.images {
		margin-right: 10upx;
		display: inline-block;
	}
	
	/** 源路径样式 */
	.source{
		margin:1% 3%;
		display: flex;
		padding: 14upx;
		background-color: #e8e8e869;
	}
	.source image{
		width: 80upx;
		height: 80upx;
	}
	.source-text{
		margin-left: 16upx;
	}
	.source-text-desc{
		overflow:hidden;
		text-overflow:ellipsis;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
	}
	.source-text-author{
		font-size: 26upx;
		color: gray;
		overflow:hidden;
		text-overflow:ellipsis;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
	}
	
	.operate{
		width: 100%;
		font-size: 24upx;
	}
	.operate-wap{
		display: inline-block;
		width: 26%;
		padding: 2%;
		padding-bottom: 0;
		font-size: 28upx;
		position: relative;
	}
	.operate-icon{
		width: 34upx;
		height: 34upx;
	}
	.operate-text{
		display: inline-block;
		position: absolute;
		margin-left: 8upx;
	}
	
	
	.chat-custom-right {
	    flex: 1;
	    /* #ifndef APP-NVUE */
	    display: flex;
	    /* #endif */
	    flex-direction: column;
	    justify-content: space-between;
	    align-items: flex-end;
	}
	
	.chat-custom-text {
	    font-size: 24upx;
	    color: #999;
	}
	.bottom-line{
		margin-bottom: 20upx;
	}
	
	.user__container{
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		/* -webkit-flex-direction: row; */
		flex-direction: row;
		-webkit-box-flex: 1;
		/* -webkit-flex: 1; */
		flex: 1;
		padding: 14upx 18upx;
		position: relative;
		overflow: hidden;
	}
	.user__header{
		display: flex;
		width: 80upx;
		height: 80upx;
		-webkit-border-radius: 80upx;
		border-color: #eee;
		border-width: 1upx;
		border-style: solid;
		overflow: hidden;
		border-radius: 80upx;
	}
	.user__header-image{
		display: flex;
		align-content: center;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		flex-direction: row;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		flex-wrap: wrap-reverse;
		width: 80upx;
		height: 80upx;
		border-radius: 80upx;
		border-color: #eee;
		border-width: 1upx;
		border-style: solid;
		overflow: hidden;
	}
	.user__content{
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		flex-direction: row;
		-webkit-box-flex: 1;
		flex: 1;
		overflow: hidden;
		padding: 4upx 0;
	}
	.user__content-main{
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		padding-left: 14upx;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		overflow: hidden;
	}
	.user__content-note{
		margin-top: 3px;
		color: #999;
		font-size: 24upx;
		font-weight: normal;
		overflow: hidden;
	}
	.user__focus-on{
		padding: 3px 10px;
		border: 1px solid #fb5f5f;
		color: #fb5f5f;
		display: flex;
		font-size: 24px;
		border-radius: 6upx;
	}
	.user__focus-off{
		padding: 3px;
		color: gray;
		font-size: 24upx;
	}
	
	
	
</style>
