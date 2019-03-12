Vue.component('print-message', {
	props: ['message'],
	data() {
		return {
			myMsg: 'Vengo dai data, e sono statico',
		}
	},
	//i data nell app principale sono oggetti, qui nei componenti sono funzioni che ritornano oggetti

	//data() {} coincide con data: function () {}

	template: `
		<div>

			{{message}}//
			{{myMsg}}

		</div>
	`,
})

Vue.component('bulma-message', {
	props: ['messagetitle', 'messagedescription'],
	data() {
		return {
			isVisible: true,
		}
	},
	methods: {
		closeMsg() {
			this.isVisible = false;
		}
	},
	template: `
		<article v-if="isVisible" class="message">
			<div class="message-header">
				<p>{{messagetitle}}</p>
				<button class="delete" aria-label="delete" @click="closeMsg"></button>
			</div>
			<div class="message-body">
				{{messagedescription}}
			</div>
		</article>
	`,
})

new Vue({
	el: '#root',
	data: {
		saluta: 'Ciao classe 3',
		classes: ['classe1', 'classe2'],

	},
	methods: {
		control() {
			alert('ok');
		},
		changeClasses() {
			this.classes = ['altraclasse33', 'altraclasse39832']
		}
	}
})


