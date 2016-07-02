/**
 * http://usejsdoc.org/
 */

document.addEventListener('DOMContentLoaded', function() {

	var box = document.querySelector('.jumbotron');
	var showBtn = document.querySelector('.btn-primary');
	var hideBtn = document.querySelector('.btn-danger');

	showBtn.addEventListener('click', function(e) {
		box.style.display = '';
	});

	hideBtn.addEventListener('click', function(e) {
		box.style.display = 'none';
	});

	// -------------------------------------------

	console.time('q4');
			
	var box2 = document.querySelector('#box2');

	for (var int = 0; int < 5; int++) {
		var spanEle = document.createElement('span');
		spanEle.className = 'badge';
		spanEle.innerHTML = "Item-" + int;
		box2.appendChild(spanEle);
	}
	
	console.timeEnd('q4');

});

window.onload = function() {

};