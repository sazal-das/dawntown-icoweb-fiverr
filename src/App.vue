<template>
	<div id="app">
		<nav class="bg-secondary p-3">
			<router-link class="mx-2 text-white" to="/">Home</router-link>
			<router-link class="mx-2 text-white" to="/modals">Modals</router-link>
			<router-link class="mx-2 text-white" to="/profile">Profile</router-link>
		</nav>
		<router-view class="p-3"></router-view>
	</div>
</template>

<script>

export default {
	name: 'App',
}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
