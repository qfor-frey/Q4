/**
 * http://usejsdoc.org/
 */


var trainer={
		name:'Nag',
		doTeach:function(){
			console.dir(this);
			console.log(this.name +" teaching JS");
		}
};


//-----------------

document.querySelector('.btn-primary')
//.addEventListener('click',function(){
//	trainer.doTeach();
//});
.addEventListener('click',trainer.doTeach.bind(trainer));
