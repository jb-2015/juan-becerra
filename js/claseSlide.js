class Slider {
	contenedor
	imagenes = []
	carga
	//VARIABLE QUE DETERMINA LA POSICION DE DEZPLAZAMIENTO
	pos=0
	constructor(){
		this.contenedor = document.createElement('div')
		this.contenedor.classList.add('sliderContent')



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
		let rot2= document.createElement('div')
		rot2.classList.add('caja2')

		//CREO LAS FLECHAS DE LOS CONTROLES 
		let flechaI = document.createElement('img');
		flechaI.classList.add('flecha')
		flechaI.setAttribute('src','./sources/321-arrow-left2.png')
		rot.appendChild(flechaI)

		let flechaD=document.createElement('img')
		flechaD.classList.add('flecha')
		flechaD.setAttribute('src','./sources/317-arrow-right2.png')
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
	}


}
export default Slider=Slider;