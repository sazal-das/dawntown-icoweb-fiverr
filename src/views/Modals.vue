<template>
    <div class='modals'>
        <b-card>
			<b-button class="mx-2" @click="reverse('sendEthereumModal')">Send Ethereum</b-button>
			<b-button class="mx-2" @click="reverse('receiveEthereumModal')">Receive Ethereum</b-button>
		</b-card>

		<DTModalWrapper>
			<SendEthereum v-model="sendEthereumModal" />
			<ReceiveEthereum v-model="receiveEthereumModal" />
		</DTModalWrapper>
    </div>
</template>

<script>
import DTModalWrapper from '@/components/ModalWrapper'
import SendEthereum from '@/components/modals/SendEthereum'
import ReceiveEthereum from '@/components/modals/ReceiveEthereum'
export default {
    name:'Modals',
    components: {
		[DTModalWrapper.name]: DTModalWrapper,
		[SendEthereum.name]: SendEthereum,
		[ReceiveEthereum.name]: ReceiveEthereum,
	},
	data: () => ({
		sendEthereumModal: false,
		receiveEthereumModal: false
	}),
	methods: {
		reverse(name) {
			this[name] = !this[name]
		}
	}
}
</script>

<style lang='scss' scoped>
    .modals{
        
    }
</style>