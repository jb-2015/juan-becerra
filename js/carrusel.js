var pos= 0;
var left= 0;
const elem = $(".itemCarrusel")[0];
var desplazamiento = elem.offsetWidth;
var imagenes = ['../sources/e-comerce1.jpg','../sources/e-comerce2.jpg','../sources/e-comerce3.jpg'];


$("#ctrlDer").click(function(){
	avanzarPosicion();
	$("#itemContentC1").css({
		marginLeft: left+'px'
	});
});
$("#ctrlIzq").click(function(){
	retrocederPosicion();
	$("#itemContentC1").css({
		marginLeft: left+'px'
	});
});

function avanzarPosicion(){
	if(pos===imagenes.length-1){
		pos=0;
		
	}else{
		pos++;

	}

	left= (desplazamiento*pos)*-1;
}
function retrocederPosicion(){
	if(pos===0){
		pos=imagenes.length-1;
		
	}else{
		pos--;

	}

	left= (desplazamiento*pos)*-1;
}

/*setInterval(function(){
	avanzarPosicion();
	$("#itemContentC1").css({
		marginLeft: left+'px'
	});
},5000);*/