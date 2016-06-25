/**
 * http://usejsdoc.org/
 */

//function init() {
//
//	var count = 0;  // private
//
//	// public behav -> closures
//	var mod = {
//		doCount : function() {
//			count++;
//		},
//		getCount : function() {
//			return count;
//		}
//	};
//
//	return mod;
//
//}
//
//var counter=init();


//----------------------------------

//pattern :  IIFE or self executable func

var counter=(function(){
	
	var count = 0;  // private

	// public behav -> closures
	var mod = {
		doCount : function() {
			count++;
		},
		getCount : function() {
			return count;
		}
	};

	return mod;

	
})();

//----------------------------------










