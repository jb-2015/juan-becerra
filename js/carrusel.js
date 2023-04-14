const items  = document.querySelectorAll('.itemCarrusel');
let textPos= document.getElementById('numImg');
let pos = 0;

const btnDer = document.getElementById('ctrlDer');
const btnIzq = document.getElementById('ctrlIzq');
let imagenes = ["sources/img1.jpg","sources/img2.jpg","sources/e-comerce2.jpg"];
let imageIndex = 1;
btnDer.addEventListener('click',function(){
	pos++;
	if(pos>3){
		pos=0;
	}

	let prim;
	let sec;
	let ter;
	let cuar;

	if(pos-1<0){
		prim=3;
	}else{
		prim=pos-1;
	}
	sec=pos;

	if(sec+1>3){
		ter=0;
	}else{
		ter=sec+1;
	}
	if(ter+1>3){
		cuar=0;
	}else{
		cuar=ter+1;
	}
	items[prim].style.left = -72+'%' ;
	items[prim].style.height = 80+'%' ;
	items[prim].style.marginTop = 4+'%' ;
	items[prim].style.zIndex = 1;
	items[prim].style.opacity= 0.3;


	items[sec].style.left = 0+'%' ;
	items[sec].style.height = 100+'%' ;
	items[sec].style.marginTop = 0+'%' ;
	items[sec].style.zIndex = 1;
	items[sec].style.opacity = 1;

	items[ter].style.left = 72+'%' ;
	items[ter].style.height = 80+'%' ;
	items[ter].style.marginTop = 4+'%' ;
	items[ter].style.zIndex = 1;
	items[ter].style.opacity= 0.3;


	items[cuar].style.left = 0+'%' ;
	items[cuar].style.height = 80+'%' ;
	items[cuar].style.marginTop = 4+'%' ;
	items[cuar].style.zIndex = -1;
	items[cuar].style.opacity= 0.3;

	imageIndex++;
	if(imageIndex>=imagenes.length){
		imageIndex=0;
	}

	items[cuar].style.backgroundImage = `url(${imagenes[imageIndex]})`;
	textPos.textContent= imageIndex+1;


});

btnIzq.addEventListener('click',function(){
	pos--;
	if(pos<0){
		pos=3;
	}

	let prim;
	let sec;
	let ter;
	let cuar;

	if(pos-1<0){
		prim=3;
	}else{
		prim=pos-1;
	}
	sec=pos;

	if(sec+1>3){
		ter=0;
	}else{
		ter=sec+1;
	}
	if(ter+1>3){
		cuar=0;
	}else{
		cuar=ter+1;
	}
	items[prim].style.left = -72+'%' ;
	items[prim].style.height = 80+'%' ;
	items[prim].style.marginTop = 4+'%' ;
	items[prim].style.zIndex = 1;
	items[prim].style.opacity= 0.3;


	items[sec].style.left = 0+'%' ;
	items[sec].style.height = 100+'%' ;
	items[sec].style.marginTop = 0+'%' ;
	items[sec].style.zIndex = 1;
	items[sec].style.opacity=1;

	items[ter].style.left = 72+'%' ;
	items[ter].style.height = 80+'%' ;
	items[ter].style.marginTop = 4+'%' ;
	items[ter].style.zIndex = 1;
	items[ter].style.opacity= 0.3;


	items[cuar].style.left = 0+'%' ;
	items[cuar].style.height = 80+'%' ;
	items[cuar].style.marginTop = 4+'%' ;
	items[cuar].style.zIndex = -1;
	items[cuar].style.opacity= 0.3;

	imageIndex--;
	if(imageIndex<0){
		imageIndex=imagenes.length-1;
	}
	items[cuar].style.backgroundImage = `url(${imagenes[imageIndex]})`;
	textPos.textContent= imageIndex+1;
});
