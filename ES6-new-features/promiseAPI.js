/**
 * http://usejsdoc.org/
 */

// hotel
var hotel = {
	getFood : function() {

		var promise = new Promise(function(resolve, reject) {

			setTimeout(function() {
				//resolve('Biryani....');
				reject("SORRY>>>>>");
			}, 5000);
			
		});
		
		return promise;
	}
};

// trainer
var trainer = {
	doTeach : function() {
		console.log('im teaching....');
		console.log('hungry...req fodd..');
		var promise=hotel.getFood();
		console.log('got promise...defering actions...');
		promise.then(function(food) {
			console.log('yummy with '+food);
		}, function(reason) {
			console.log('huh , shud go out..');
		});
		console.log('finishing firther teaching....end');
	}
};

trainer.doTeach();






