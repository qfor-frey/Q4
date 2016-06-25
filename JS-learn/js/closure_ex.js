/**
 * http://usejsdoc.org/
 */

/*
 * A closure is a function having access to the parent scope, even after the
 * parent function has closed.
 * 
 *  use :
 *  
 *  --> to abstract any public-behav JS-module(s)
 *  --> to access parent-scoped data when func executing async
 * 
 */

var trainer = {
	name : 'Nag',
	doTeach : function(sub) {
		var notes;
		console.log(this.name + " teaching " + sub);
		notes = "JS-notes";
		function learn() {
			console.log('learing ' + sub + " with " + notes);
		}
		console.log("teaching end..");
		return learn;
	}
};

var learnFunc = trainer.doTeach('JS');
learnFunc();