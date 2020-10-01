<template>
	<b-modal
		centered
		title="Receive Ethereum"
		class="receive-thereum"
		v-model="modal"
	>
		<template v-slot:modal-title="{ title }">
			<h5>{{title}}</h5>
		</template>
	</b-modal>
</template>

<script>
export default {
	name: 'ReceiveEthereum',
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
	.receive-thereum {
	}
</style>