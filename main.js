var root = new Vue({
	el: '#root',
	data: {
		name: '',
		city: '',
		teachers: ['Michele', 'Fabio', 'Roberto'],
		newTeacher: '',
		students: [
			{name: 'Nicola', lastname: 'Solzi' },
			{ name: 'Michele', lastname: 'Raggi' },
			{ name: 'Frank', lastname: 'Volta' },
		],
	},
	methods: {
		addTeacher() {
			this.teachers.push(this.newTeacher);
			this.newTeacher = '';
		},
	},
	mounted() {
		// alert('mounted, analogo al document ready, viene chiamato prima che il vue.js venga caricato')
		//per esempio nel mounted fai le chiamate ajax
	}
})

