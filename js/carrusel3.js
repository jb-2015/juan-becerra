

import Carrusel from './classCarrusel3.js'
let sec= document.getElementById('carr')
window.addEventListener('load',()=>{
	let c
	 new Promise((res, rej)=>{
	 	 c = new Carrusel('c3',['sources/s1.jpg','sources/s2.jpg',"sources/s3.jpg","sources/s4.jpg","sources/s5.jpg"]);
	 	 res('Hecho')
	 })	 
	 .then(res=>{
	 	console.log('Agregar a contenedor')
		sec.appendChild(c.contents)
		
		console.log(res)
	 })
	 .then(res=>{
	 	console.log("dimensionar")
	 	c.dimensionar()

	 })
	 .then(()=>{
	 	sec.appendChild(c.getMando())
	 })
	 .then(()=>{
	 	c.cargarImagenes()


	 })
	 .then(()=>{
	 	let carga= document.getElementById('cargaCarrusel')
	 	carga.style.display='none';
	 })

	
})