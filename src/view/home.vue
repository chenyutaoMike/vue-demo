<template>
	<div>
		<van-swipe :show-indicators="true" :indicator-color="'#1989fa'" class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(item,index) in imgList" :key="item.id + index" @click="changeSwipe(item.id)">
				<img :src="item.imgUrl" alt="">
			</van-swipe-item>
		</van-swipe>
		<van-grid :column-num="3">
		  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
		</van-grid>
		<van-skeleton title avatar :row="3" :loading="loading">
		  <div>实际内容</div>
		</van-skeleton>
	</div>
</template>

<script>
	const imgList = [{
			id: 1,
			imgUrl: 'https://img.yzcdn.cn/vant/apple-1.jpg'
		},
		{
			id: 2,
			imgUrl: 'https://img.yzcdn.cn/vant/apple-2.jpg'
		},
		{
			id: 3,
			imgUrl: 'https://img.yzcdn.cn/vant/apple-3.jpg'
		},
		{
			id: 4,
			imgUrl: 'https://img.yzcdn.cn/vant/apple-4.jpg'
		},
	]
	export default {
		name: 'home',
		data() {
			return {
				imgList: imgList,
				loading:true
			}
		},
		mounted() {
			setTimeout(()=>{
				this.loading = false
			},3000)
		},
		beforeRouteEnter(to, from, next){
			next((vm)=>{
				vm.getData()
			})
		},
		methods:{
			changeSwipe(i){
				console.log(i)
			},
			getData(){
				console.log('changeVm')
			}
		}
	}
</script>

<style scoped lang="less">
	.my-swipe .van-swipe-item {
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		height: 30vh;
		img{
			width: 100%;
			height: 100%;
		}
	}
</style>
