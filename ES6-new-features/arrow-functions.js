/**
 * http://usejsdoc.org/
 */


// 

var arr=[1,3,5,7,9,2,4,6,8,10];

//arr.sort(function(a,b){return a-b;});
//arr.sort((a,b)=>{return a-b;});

//var users=['nag','indu','ria'];
//var newUsers=users.map(function(user, i) {
//	return user.toUpperCase();
//});
//var newUseers=users.map((user)=>{return user.toUpperCase()});


//--------------------------------



function Person(name,age){
	this.name=name;
	this.age=age;
	var self=this;
	
	//	setInterval(function() {
	//		self.age++;
	//		console.log(self.name+"-->"+self.age);
	//	},1000);
	
	setInterval(()=>{this.age++;console.log(this.age)},1000)
}

var p=new Person('Ria', 1);












