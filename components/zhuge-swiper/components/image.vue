<template>
	<image class="imageBox" :src="src" :draggable="draggable" 
		@error="imageError" @load="imageLoad"></image>
</template>

<script>
	export default { 
		onShow: function() { 
	
		},
		props:{
			src:{
				type:String,
				default:'',
				required:true,
			},
		},
		data() {
			return {
				draggable:false
			}
		},
		components: {},
		methods: {
			imageError() {
			},
			imageLoad() {
			},
		},
		mounted() {
	
		}
	}
</script>

<style scoped lang="less">
	.imageBox {
		width: 100%;
		height: 100%;
	}
</style>
