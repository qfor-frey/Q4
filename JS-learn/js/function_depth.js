/**
 * http://usejsdoc.org/
 */

"use strict";

/*
 *  in JS , we create func-obj in 2 ways
 *  
 *  --> function dec
 *  --> function exp
 * 
 */


// func dec

//console.log(add(12,13));
//
//function add(n1,n2){
//	return n1+n2;
//}

// func exp

//console.log(add(12,13));
//var add=function sum(n1,n2){
//	return n1+n2;
//};


//-----------------------------


// function as values

//function sayHello(){
//	console.log('Hello..');
//}
//var sayHi=sayHello;
//sayHi();

//--------------------------------------

//function as args

//function greet(f){
//	if(f){
//		f();
//		return;
//	}
//	console.log('Hello..');
//}
//
//greet();
//greet(function(){console.log('ola');});

//--------------------------------------


// functions as return

//function teach(){
//	console.log('teaching');
//	function learn(){
//		console.log('learning..');
//	}
//	return learn;
//}
//
////console.log(teach());
//teach()();
//

//---------------------------------------


//function reflect(){
//	console.log(arguments);
//	return arguments[0];
//}
//
//console.log(reflect(12,13,14));



//function sum(){
//	
//	var len=arguments.length,
//	    i=0,
//	    result=0;
//	
//	while (i<len) {
//		result+=arguments[i];
//		i++;
//	}
//	return result;
//	
//}
//
//console.log(sum(1,2,3,4));


//-----------------------------------


//function f(){
//	"use strict";
//	i=200;
//}
//
//f();
//
//console.log(i);



//-----------------------------------













