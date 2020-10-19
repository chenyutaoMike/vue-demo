<template>
	<div>
		<div id="home">
			<router-view></router-view>
		</div>
		<van-tabbar route v-model="active" v-if="$route.name !== 'login' ">
			<van-tabbar-item name="/home" icon="home-o" to="/home">
				首页
			</van-tabbar-item>
			<van-tabbar-item name="/cart" icon="shopping-cart-o" to="/cart">
				购物车
			</van-tabbar-item>
			<van-tabbar-item name="/user" icon="friends-o" to="/user">
				我的
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {},
		data() {
			return {
				active:''
			}
		},
		created() {
			// console.log(this.$route.path)
		},
	}
</script>

<style>
	@import url("assets/css/reset.css");

	#home {
		margin-bottom: 50px;
	}
</style>
