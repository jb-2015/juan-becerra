import Slider from './claseSlide.js'

const seccion = document.getElementById('s1')


window.addEventListener('load',()=>{
	let c = new Slider()
	let pantalla = window.innerWidth;
	let arregloImg
	if(pantalla>480){
		arregloImg = ['./sources/pag1.png','./sources/pag2.png','./sources/pag3.png','./sources/pag4.png']
		
	}else if(pantalla>360){
		arregloImg = ['./sources/pagCelu1.png','./sources/pagCelu2.png','./sources/pagCelu3.png','./sources/pagCelu4.png']
	}else{
		arregloImg = ['./sources/pagCelu1.png','./sources/pagCelu2.png','./sources/pagCelu3.png','./sources/pagCelu4.png']

	}
	c.cargarImagenes(arregloImg)
	.then(()=>{
		seccion.appendChild(c.contenedor)
	})
	.then(()=>{
		let carg= document.getElementById('cargando')
		carg.style.display='none'
		c.cargarElementos()
	})

	
})
