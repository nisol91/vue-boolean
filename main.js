var root = new Vue({
	el: '#root',
	data: {
		name: '',
		city: '',
		teachers: ['Michele', 'Fabio', 'Roberto'],
		newTeacher: '',
	},
	methods: {
		addTeacher() {
			this.teachers.push(this.newTeacher);
			this.newTeacher = '';
		},
	}
})

