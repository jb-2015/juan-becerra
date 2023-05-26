class Carrusel{
	contents
	items = []
	noVisible=2
	step = 90
	puntero = -2
	rotacion
	cantidad
	imgW
	imgH
	mando

	constructor(id,arr){
		this.rotacion= 180
		this.contents = document.createElement('div')
		this.contents.setAttribute('id',id)		
		arr.forEach(i=>{
			this.items.push(i);
		})


		//CONTROLEs
		let controls = document.createElement('div')
		controls.classList.add('controladores')
		let fi= document.createElement('img')
		fi.classList.add('ctrl')
		fi.classList.add('flechaIzq')

		fi.setAttribute('src','sources/flecha-curva-2.png')
		let fd = document.createElement('img')
		fd.classList.add('ctrl')
		fd.classList.add('flechaDer')
		fd.setAttribute('src','sources/flecha-curva.png')

		controls.appendChild(fi)
		controls.appendChild(fd)
		this.mando=controls

		fd.addEventListener('click',this.avanzar.bind(this))
		fi.addEventListener('click',this.retroceder.bind(this))

		



	}
	dimensionar(){
		//this.contents.style.width= '400px'
		//this.contents.style.height= '400px'
		let cant = this.items.length
		let radio = this.contents.offsetWidth/2
		this.cantidad=cant
		console.log("Cantidad: "+cant+" - Radio: "+radio)

		//dimension de imagenes
		let cat = this.contents.offsetWidth/2
		this.imgW= Math.sqrt((cat*cat)*2).toFixed(2)
		this.imgH= this.imgW;


	}
	cargarImagenes(){
		
		for(let i = 0;i<4;i++){
			let img = document.createElement('img')
			img.setAttribute('src',this.items[i])
			img.style.width= this.imgW+'px'
			img.style.height= this.imgH+'px'
			img.classList.add('imgC')
			this.contents.appendChild(img);
			this.puntero++;
		}
	}
	getMando(){
		return this.mando
	}
	avanzar(){
		let imgs= document.querySelectorAll('.imgC')
		let elemento = document.getElementById('c3');
		this.rotacion+=90
		this.puntero++;
		this.noVisible++;
		if(this.noVisible>=imgs.length){
			this.noVisible=0
		}
		if(this.puntero>=this.cantidad){
			this.puntero=0
		}
		elemento.style.transform= `rotateX(90deg) rotateZ(${this.rotacion}deg)`;
		imgs[this.noVisible].setAttribute('src',this.items[this.puntero])

	}
	retroceder(){
		let imgs= document.querySelectorAll('.imgC')
		let elemento = document.getElementById('c3');
		this.rotacion-=90
		this.puntero--
		this.noVisible--
		if(this.noVisible<0){
			this.noVisible= imgs.length-1
		}
		if(this.puntero<0){
			this.puntero=this.cantidad-1;
		}
		elemento.style.transform= `rotateX(90deg) rotateZ(${this.rotacion}deg)`;
		imgs[this.noVisible].setAttribute('src',this.items[this.puntero])
	}

}
export default Carrusel= Carrusel