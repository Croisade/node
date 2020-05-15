const person = {
	name: 'Max',
	age: 29,
	greet(){
		console.log('Hi, I am ' + this.name);
	}
};

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];

//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//console.log(hobbies);
//

const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray (arg1, arg2, arg3) => {
	return [arg1, arg2, arg3];
}

const toArray = (...args) => {
	return args;
};:

