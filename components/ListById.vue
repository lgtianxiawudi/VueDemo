<!--
	作者：15900846144@163.com
	时间：2016-07-25
	描述：列表页
-->
<template>
	<div class="panel panel-default">
		<div class="panel-heading">
			<h3 class="panel-title">{{$route.params.name}}</h3>
			<input type="text" value="{{$route.params.id}}" v-model="id" />
		</div>
		<div class="panel-body">
			<ul class="nav nav-pills nav-stacked list-group">
				<li class="list-group-item" v-for="myrepo in myrepos">
					<div class="row">
						<div class="col-xs-6 col-md-3">
							<a href="#" class="thumbnail">
								<img src="http://tnfs.tngou.net/image{{myrepo.img}}" alt="#">
							</a>
						</div>

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
</template>
<script>
	export default {
		data() {
				return {
					myrepos: [],
				}
			},
			asyncData: function(resolve, reject) {
				this.getMyRepos('');
			},
			methods: {
				getMyRepos(id) {
					this.$http.get('http://apis.baidu.com/tngou/cook/list?id=' + this.$route.params.id, (datas) => {
						this.myrepos = datas.tngou
					}).error((err) => console.log(err))
				}
			}
	}
</script>