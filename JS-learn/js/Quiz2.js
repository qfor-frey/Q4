/**
 * http://usejsdoc.org/
 */

function init() {

	function Trainer(name) {
		this.name = name;
		this.doTeach = function() {
			console.log(this.name + " teaching JS");
			var self = this;
			function learn() {
				console.log(this.name + ' learning JS from ' + self.name);
			}
			// learn();
			return learn;
		};
	}

	var trainer = new Trainer('Nag');
	var learnFunc = trainer.doTeach();

	var emp1 = {
		name : 'emp1'
	};
	learnFunc.call(emp1);
	var emp2 = {
		name : 'emp1'
	};
	learnFunc.call(emp2);

}

init();