/**
 * http://usejsdoc.org/
 */

var trainer = {
	doTeach : function() {

		console.log('teaching.....');
		var name = "Nag";

		setTimeout(function() {
			try {
				console.log('after one week...');
				// throw new Error('oops');
				console.log(name + " will back day-2 session");
			} catch (e) {
				console.log('i caught ' + e.message);
			}

		}, 1000);

		console.log('teaching end...');
	}

};

trainer.doTeach();