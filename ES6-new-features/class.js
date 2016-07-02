/**
 * http://usejsdoc.org/
 */


class Person{
	constructor(){
		this.name=name;
		this.age=age;
	}
	sayName(){
		console.log('im '+this.name);
	}
}

class Employee extends Person{
	
	sayName(){
		super();
		console.log('hello '+this.name);
	}
	
}