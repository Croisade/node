const person = {
	name: 'Max',
	age: 29,
	greet(){
		console.log('Hi, I am ' + this.name);
	}
};

const hobbies = ['Sports', 'Cooking'];

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

