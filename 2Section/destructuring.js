const person = {
	name: 'Max',
	age: 29,
	greet(){
		console.log('Hi, I am ' + this.name);
	}
};

const printName = (somebody) => {
	console.log(somebody.name);
}

printName(person);
console.log(person.name);
//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//console.log(hobbies);
//

