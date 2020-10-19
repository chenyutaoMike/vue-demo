<template>
	<div>
		<van-index-bar :index-list="indexList">
			<template v-for="(item,index) in contentList" >
				<van-index-anchor :index="item.id" :key="item.id">{{item.title}}</van-index-anchor>
				<template v-for="childrenItem in item.content" >
					<van-cell :title="childrenItem.text" :key="item.id + index" />
				</template>
			</template>

		</van-index-bar>
	</div>
</template>

<script>
	export default {
		name: 'cart',
		data() {
			return {
				indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				contentList: [{
						id: 1,
						title: '标题1',
						content: [{
								text: '文本1'
							},
							{
								text: '文本2'
							},
							{
								text: '文本3'
							},
							{
								text: '文本4'
							},
							{
								text: '文本5'
							},
						]
					},
					{
						id: 2,
						title: '标题2',
						content: [{
								text: '文本1'
							},
							{
								text: '文本2'
							},
							{
								text: '文本3'
							},
							{
								text: '文本4'
							},
							{
								text: '文本5'
							},
						]
					},
					{
						id: 3,
						title: '标题3',
						content: [{
								text: '文本1'
							},
							{
								text: '文本2'
							},
							{
								text: '文本3'
							},
							{
								text: '文本4'
							},
							{
								text: '文本5'
							},
						]
					},
					{
						id: 4,
						title: '标题4',
						content: [{
								text: '文本1'
							},
							{
								text: '文本2'
							},
							{
								text: '文本3'
							},
							{
								text: '文本4'
							},
							{
								text: '文本5'
							},
						]
					},
					{
						id: 5,
						title: '标题5',
						content: [{
								text: '文本1'
							},
							{
								text: '文本2'
							},
							{
								text: '文本3'
							},
							{
								text: '文本4'
							},
							{
								text: '文本5'
							},
						]
					}, {
						id: 6,
						title: '标题6',
						content: [{
								text: '文本1'
							},
							{
								text: '文本2'
							},
							{
								text: '文本3'
							},
							{
								text: '文本4'
							},
							{
								text: '文本5'
							},
						]
					},
					{
						id: 7,
						title: '标题7',
						content: [{
								text: '文本1'
							},
							{
								text: '文本2'
							},
							{
								text: '文本3'
							},
							{
								text: '文本4'
							},
							{
								text: '文本5'
							},
						]
					},
					{
						id: 8,
						title: '标题8',
						content: [{
								text: '文本1'
							},
							{
								text: '文本2'
							},
							{
								text: '文本3'
							},
							{
								text: '文本4'
							},
							{
								text: '文本5'
							},
						]
					}, {
						id: 9,
						title: '标题9',
						content: [{
								text: '文本1'
							},
							{
								text: '文本2'
							},
							{
								text: '文本3'
							},
							{
								text: '文本4'
							},
							{
								text: '文本5'
							},
						]
					},
				]
			}
		}
	}
</script>

<style>
</style>
