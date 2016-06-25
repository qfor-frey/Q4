/**
 * http://usejsdoc.org/
 */

// ES-5

//function Person(name, age) {
//	this.name = name;
//	this.age = age;
//	this.sayName = function() {
//		console.log('im ' + this.name);
//	};
//}


// ES-6

class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	sayName(){
		console.log('im ' + this.name);
	}
}

var p=new Person('Abc',100);