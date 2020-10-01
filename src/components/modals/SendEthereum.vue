<template>
	<b-modal centered  class="send-thereum" v-model="modal">
		<b-card>
			<b-card-title>Send Ethereum Modal</b-card-title>
		</b-card>
	</b-modal>
</template>

<script>
export default {
	name: 'SendEthereum',
	props: {
		value: Boolean
	},
	computed: {
		modal: {
			get() {
				return this.value
			},
			set(v) {
				this.$emit('input', v || !this.value)
			}
		}
	}
}
</script>

<style lang='scss' scoped>
	.send-thereum {
	}
</style>