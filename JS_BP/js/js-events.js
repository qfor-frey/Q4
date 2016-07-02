/**
 * http://usejsdoc.org/
 */


//var btn1=document.getElementById('btn1');
//
//btn1.addEventListener('click',function(e){
//	console.dir(e);
//},false);
//btn1.removeEventListener

//----------

//$(function(){
	
	//	$('#btn1').one('click dblclick',function(e){
	//		console.log(e);
	//	});
	
//});

//----------------------------------------------

// Event Propagation

/*
 * 
 *  --> bubbling phase
 *  --> capturing phase
 * 
 */








document.addEventListener('click', function(e) {
	console.log('click-handler on #document');
},false);

document.getElementById('box3')
.addEventListener('click', function(e) {
	console.log('click-handler-1 on #box3');
	
	console.log(e.currentTarget);
	console.log(e.target.id);
	
	e.stopPropagation();
	e.stopImmediatePropagation();
},false);
//
//document.getElementById('box3')
//.addEventListener('click', function(e) {
//	console.log('click-handler-2 on #box3');
//	//e.stopPropagation();
//},false);




//document.getElementById('btn1')
//.addEventListener('click', function(e) {
//	console.log('click-handler on #btn1');
//},false);
//
//document.getElementById('btn2')
//.addEventListener('click', function(e) {
//	console.log('click-handler on #btn2');
//},false);
//
//document.getElementById('btn3')
//.addEventListener('click', function(e) {
//	console.log('click-handler on #btn3');
//},false);
//
//document.getElementById('btn4')
//.addEventListener('click', function(e) {
//	console.log('click-handler on #btn4');
//},false);



//
//
//$('a').click(function(e) {
//	console.log('u clicked..');
//	e.preventDefault();
//});
//











