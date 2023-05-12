import Slider from './claseSlide.js'

const seccion = document.getElementById('s1')


window.addEventListener('load',()=>{
	let c = new Slider()
	let pantalla = window.innerWidth;
	let arregloImg
	if(pantalla>480){
		arregloImg = ['./sources/pag1.png','./sources/pag2.png','./sources/pag3.png','./sources/pag4.png']
		
	}else if(pantalla>360){
		arregloImg = ['./sources/pagCelu4.png','./sources/pagCelu2.png','./sources/pagCelu3.png','./sources/pagCelu1.png']
	}else{
		arregloImg = ['./sources/pagCelu4.png','./sources/pagCelu2.png','./sources/pagCelu3.png','./sources/pagCelu1.png']

	}
	c.cargarImagenes(arregloImg)
	.then(()=>{
		seccion.appendChild(c.contenedor)
	})
	.then(()=>{
		let carg= document.getElementById('cargando')
		carg.style.display='none'
		c.cargarElementos()
		c.agregarTexto('Iglesia Cristo Rey','Sitio web para una iglesia, que ofrece la posibilidad de intereaccion entre el usuario y la organizacion')
		c.agregarTexto('CodeMode','CodeMode , fue un sitio creado como practico de Curso de desarrollo web')
		c.agregarTexto('INMO','Pagina presentada para la primera parte de Curso de Python')
		c.agregarTexto('Portfolio','Diseño basico de pagina principal de portfolio')
	})

	
})
