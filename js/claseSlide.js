class Slider {
	contenedor
	imagenes = []
	carga
	//VARIABLE QUE DETERMINA LA POSICION DE DEZPLAZAMIENTO
	pos=0
	//TEXTOS QUE VAN A IR EN CADA IMAGEN
	listo=false
	textPos=0;
	textos = []
	textBox = document.createElement('div')
		
	constructor(){
		this.contenedor = document.createElement('div')
		this.contenedor.classList.add('sliderContent')
		this.textBox.classList.add('titDesc')


	}
	cargarImagenes(arr){  

		    
		return new Promise((resolve, reject) => {


		    const promesasCarga = arr.map(src => {
		      return new Promise((resolve, reject) => {
		        const img = document.createElement('img');
		        img.src = src;
		        img.classList.add('itemS');
		        img.addEventListener('load', resolve);
		        img.addEventListener('error', reject);
		        img.style.left= '0%'
		        this.imagenes.push(img);
		      });
		    });

		    Promise.all(promesasCarga)
		      .then(() => {
		        this.imagenes.forEach(im => {
		          this.contenedor.appendChild(im);
		        });

		        let tamañoContenedor = 100 * this.imagenes.length;
		        this.contenedor.style.width = tamañoContenedor + '%';
		        this.contenedor.querySelectorAll('.itemS').forEach(i => {
		          i.style.width = (100 / this.imagenes.length) + '%';
		        });

		        resolve(); // Resolvemos la promesa una vez que todas las imágenes estén cargadas
		      })
		      .catch(error => {
		        reject(error); // Rechazamos la promesa en caso de error en la carga de las imágenes
		      });
		  });

	}
	
	cargarElementos(){
		let fondito= document.createElement('div')
		fondito.classList.add('fondito')
		this.contenedor.appendChild(fondito)
		let rot= document.createElement('div')
		rot.classList.add('caja')
		rot.classList.add('botonGhost')
		let rot2= document.createElement('div')
		rot2.classList.add('caja2')
		rot2.classList.add('botonGhost')

		//CREO LAS FLECHAS DE LOS CONTROLES 
		let flechaI = document.createElement('img');
		flechaI.classList.add('flecha')
		flechaI.setAttribute('src','./sources/izq1.png')
		rot.appendChild(flechaI)

		let flechaD=document.createElement('img')
		flechaD.classList.add('flecha')
		flechaD.setAttribute('src','./sources/der1.png')
		rot2.appendChild(flechaD)

		fondito.appendChild(rot)
		fondito.appendChild(rot2)

		//EVENTOS DEL BOTON IZQUIERDO
		rot.addEventListener('mousedown',()=>{
			rot.classList.add('cajaHover')
		})
		rot.addEventListener('mouseup',()=>{
			rot.classList.remove('cajaHover')
		})
		this.contenedor.querySelector('.caja').addEventListener('click',()=>{
			this.slideBack();
		})
		//EVENTOS DEL BOTON DERECHO
		rot2.addEventListener('mousedown',()=>{
			rot2.classList.add('caja2Hover')
		})
		rot2.addEventListener('mouseup',()=>{
			rot2.classList.remove('caja2Hover')
		})
		this.contenedor.querySelector('.caja2').addEventListener('click',()=>{
			this.slideGo();
		})
		

	}

	slideGo(){
		
		let imgs= this.contenedor.querySelectorAll('.itemS')
		let desp= 100/imgs.length
		this.pos-=desp
		if(this.pos*(-1)>=100){
			this.pos=0;
		}
		imgs.forEach(i=>{
				i.style.left= this.pos+'%'
		})
		this.textoProximo()
	}
	slideBack(){
		let imgs= this.contenedor.querySelectorAll('.itemS')
		let desp= 100/imgs.length
		this.pos+=desp
		if(this.pos*(-1)<0){
			this.pos=-100+desp;
		}
		imgs.forEach(i=>{
				i.style.left= this.pos+'%'
		})
		this.textoAnterior()
	}

	agregarTexto(titulo,descripcion){
		let tit = document.createElement('h1')
		tit.classList.add('titSlide')
		tit.textContent= titulo
		let desc= document.createElement('p')
		desc.classList.add('descSlide')
		desc.textContent= descripcion

		

		
		this.textos.push({
			title: tit.textContent,
			description: desc.textContent 
		})
		
		
		if(!this.listo){
			tit.textContent=this.textos[0].title
			desc.textContent=this.textos[0].description
			this.textBox.appendChild(tit)
			this.textBox.appendChild(desc)
			this.contenedor.appendChild(this.textBox)
			this.listo=true
		}
	}
	textoProximo(){
		//gestion de textos
		let con = this.contenedor.querySelector('.titDesc')
		
		this.textPos++
		if(this.textPos>imagenes.length || this.textPos>=this.textos.length){
			this.textPos=0
		}
		let t= con.querySelector('h1')
		let d= con.querySelector('p')

		
		t.textContent=this.textos[this.textPos].title
		
		d.textContent=this.textos[this.textPos].description

		//----------------
	}
	textoAnterior(){
		//gestion de textos
		let con = this.contenedor.querySelector('.titDesc')
		
		this.textPos--
		if(this.textPos<0){
			this.textPos=this.textos.length-1
		}
		let t= con.querySelector('h1')
		let d= con.querySelector('p')


		t.textContent=this.textos[this.textPos].title
		
		d.textContent=this.textos[this.textPos].description

		

		//----------------
	}


}
export default Slider=Slider;