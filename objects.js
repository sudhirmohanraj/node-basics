var person = {
};

person.fistName = 'Sudhir';
person.lastName = 'Mohanraj';
delete person.fistName;
simpleFunction(person);
function simpleFunction (person) {
	console.log(person.fistName + ' ' + person.lastName)
}

console.log(person);

var animal = {
	name:'hugo',
	type:'dog'
}
function petIwat(animal){
	console.log('I want a ' + animal.type +'named ' + animal.name );
}
petIwat(animal);