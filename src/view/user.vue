<template>
	<div id="user">

		<div class="left-menu" ref="leftWrap">
			<ul class="left-warpp">
				<li class="menu-item" @click="changeLeftMenu(index)" :class="currentIndex === index ?'active':''" v-for="(item,index) in menuList"
				 :key="item.id">{{item.text}}</li>
			</ul>
		</div>
		<div class="wrapp" ref="rightWrap">
			<div class="content" ref="rightContent">
				<div class="content-item" :style="'backgroundColor:'+colorList[index]" v-for="(item,index) in itemList">
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'user',
		data() {
			return {
				leftActive: 0, //左侧选中
				scrollTop: '', //滚动的值
				contentHeights: [],
				colorList: ['green', 'pink', 'hotpink', 'coral', 'blue', 'purple', 'skyblue', 'yellowgreen', 'saddlebrown', 'navy',
					'chocolate', 'aqua', 'firebrick'
				],
				itemList: [{
						id: 1,
						text: '第1个'
					},
					{
						id: 2,
						text: '第2个'
					},
					{
						id: 3,
						text: '第3个'
					},
					{
						id: 4,
						text: '第4个'
					},
					{
						id: 5,
						text: '第5个'
					},
					{
						id: 6,
						text: '第6个'
					},
					{
						id: 7,
						text: '第7个'
					},
					{
						id: 8,
						text: '第8个'
					},
					{
						id: 9,
						text: '第9个'
					},
					{
						id: 10,
						text: '第10个'
					},
					{
						id: 11,
						text: '第11个'
					},
					{
						id: 12,
						text: '第12个'
					},
					{
						id: 13,
						text: '第13个'
					},
				],
				menuList: [{
						id: 1,
						text: '第1个'
					},
					{
						id: 2,
						text: '第2个'
					},
					{
						id: 3,
						text: '第3个'
					},
					{
						id: 4,
						text: '第4个'
					},
					{
						id: 5,
						text: '第5个'
					},
					{
						id: 6,
						text: '第6个'
					},
					{
						id: 7,
						text: '第7个'
					},
					{
						id: 8,
						text: '第8个'
					},
					{
						id: 9,
						text: '第9个'
					},
					{
						id: 10,
						text: '第10个'
					},
					{
						id: 11,
						text: '第11个'
					},
					{
						id: 12,
						text: '第12个'
					},
					{
						id: 13,
						text: '第13个'
					},
				]
			}
		},
		mounted() {
			// console.log(this.$refs.leftWrap)
			this.leftScroll = new BScroll(this.$refs.leftWrap, {
				click: true
			})
			this.rightWrap = new BScroll(this.$refs.rightWrap, {
				probeType: 3,

			})
			this.rightWrap.on('scroll', pos => {
				this.scrollTop = Math.abs(Math.round(pos.y))
			})

			this._calculateHeight()
		},
		methods: {
			changeLeftMenu(index) {
				this.leftActive = index
				// console.log(this.els[index].offsetHeight)
				this.rightWrap.scrollToElement(this.els[index], 500)
			},

			_calculateHeight() {
				this.els = document.getElementsByClassName('content-item')
				let height = 0;
				this.contentHeights.push(height);
				for (let i = 0; i < this.els.length; i++) {
					let item = this.els[i];
					height += item.clientHeight;
					this.contentHeights.push(height);
				}
			}
		},
		computed: {
			currentIndex() {
				for (let i = 0; i < this.contentHeights.length; i++) {
					let height1 = this.contentHeights[i];
					let height2 = this.contentHeights[i + 1];
					if (!height2 || (this.scrollTop >= height1 && this.scrollTop < height2)) {
						return i;
					}
				}
				return 0;
			}
		}
	}
</script>

<style scoped lang="less">
	#user {
		height: 100vh;

		.left-menu {
			width: 20vw;
			height: 80vh;
			position: fixed;
			bottom: 0;
			overflow: hidden;
			background-color: #7C7C7C;

			.left-warpp {
				padding-bottom: 50px;
			}

			.menu-item {
				height: 60px;
				width: 100%;
				background-color: #7C7C7C;
				border-bottom: 1px solid #ccc;
				text-align: center;
				line-height: 60px;
				color: #fff;

				&.active {
					background-color: #fff;
					color: #000000;
					border: 1px solid #ccc;


				}
			}
		}

		.wrapp {
			width: 80vw;
			height: 80vh;
			position: fixed;
			overflow: hidden;
			right: 0;
			bottom: 0;

			.content {
				padding-bottom: 50px;

				.content-item {
					height: 300px;
					width: 100%;
				}
			}
		}

	}
</style>
