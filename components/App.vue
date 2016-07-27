<template>
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container-fluid box-shadow">
			<ul class="nav nav-pills navbar-right">
				<li role="presentation"><a v-link="{ name: 'home'}">首页</a></li>
				<li role="presentation"><a v-link="{ name: 'list'}">List</a></li>
				<li role="presentation"><a v-link="{ name: 'about'}">关于</a></li>
			</ul>
		</div>
	</nav>
	<div class="container" style="margin-top: 70px;">
		<router-view></router-view>
	</div>
</template>