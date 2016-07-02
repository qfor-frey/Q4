/**
 * http://usejsdoc.org/
 */

"use strict";

function f() {
	// {
	// let v = 123;
	// }
	// console.log(v);

	function foo() {
		return 1;
	}

	{
		function foo() {
			return 2;
		}

		console.log(foo());
	}
	
	console.log(foo());
	

}
f();
