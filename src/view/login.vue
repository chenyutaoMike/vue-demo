<template>
	<div class="login">
		<img src="../assets/logo.png" alt="">
		<van-form @submit="onSubmit">
			<van-field v-model="username" name="user" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
			<van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">
					提交
				</van-button>
			</div>
		</van-form>

	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';
	export default {
		name: 'login',
		data() {
			return {
				username: '',
				password: '',
			};
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
				if (values.user === '123' && values.password === '123') {
					Toast('登陆成功')
					localStorage.setItem('login','admin')
					this.$router.replace('/home')
				}
			},
		},
	}
</script>

<style scoped lang="less">
	.login {
		text-align: center;
	}
</style>
