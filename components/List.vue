<!--
	作者：15900846144@163.com
	时间：2016-07-25
	描述：列表页
-->
<template>
	<div class="row container">
		<div class="col-md-3 ">
			<div class="panel panel-primary">
				<div class="panel-heading">
					<h3 class="panel-title">菜品分类</h3>
				</div>
				<div class="panel-body container-fluid box-shadow" style="background-color: gainsboro;">
					<!--<div class="container-fluid box-shadow">-->
					<ul class="nav nav-pills nav-stacked" v-for="myrepo in myrepos" v-on:click="getMyReposById(myrepo.id,myrepo.title)">
						<li role="presentation" v-on:click="getMyReposById(myrepo.id,myrepo.title)"><a>{{myrepo.title}}</a></li>
					</ul>
					<!--</div>-->
				</div>
			</div>

		</div>
		<div class="col-md-9">
			<div class="panel panel-primary" v-show="show">
				<div class="panel-heading">
					<h3 class="panel-title">{{title}}</h3>
				</div>
				<div class="panel-body">
					<ul class="list-group">
						<li class="list-group-item" v-for="myrepo in myreposById">
							<div class="row">
								<img class=" col-md-2 thumbnail" width="100px" height="100px" src="http://tnfs.tngou.net/image{{myrepo.img}}" alt="#">

								<a v-link="#">
									<h4 class="list-group-item-heading">{{myrepo.name}}</h4>
									<p class="list-group-item-text">{{myrepo.description}}</p>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					myrepos: [],
					myreposById: [],
					title: '',
					id: '',
					show: false,
				}
			},

			ready() {
				this.getMyRepos()
			},

			methods: {
				getMyRepos() {
					this.$http.get('http://apis.baidu.com/tngou/cook/classify', (datas) => {
						this.myrepos = datas.tngou
					}).error((err) => console.log(err))
				},
				getMyReposById(id, title) {
					this.title = title;
					this.$http.get('http://apis.baidu.com/tngou/cook/list?id=' + id, (datas) => {
						this.myreposById = datas.tngou
						this.show = true;
					}).error((err) => console.log(err))
				}
			}
	}
</script>