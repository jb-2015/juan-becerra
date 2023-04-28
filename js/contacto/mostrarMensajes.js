let btnver = document.getElementById('btnMostrarMensajes');
let btnCerrar= document.getElementById('btnOcultar')
let visor = document.getElementById('msgConteiner');
let ventanaMsg= document.getElementById('viewerMessage')

btnver.addEventListener('click', ()=>{
	fetch('js/contacto/recuperarRegistros.php')
		.then(response => response.json())
		.then(data => {
			data.forEach(mensaje =>{
				let msg = document.createElement('div');
				msg.classList.add('itemMsg')

				let titulo = document.createElement('h2');
				let info= document.createElement('span');
				info.classList.add('tSecundario');
				titulo.textContent= `${mensaje.nombre}`
				info.textContent= `(${mensaje.correo})`
				titulo.appendChild(info)

				let parrafo = document.createElement('p');
				parrafo.textContent = mensaje.mensaje

				msg.appendChild(titulo)
				msg.appendChild(parrafo)
				visor.appendChild(msg)
				

			})
		})
		.then(mostrarVisor())
		.catch(error =>{
			let fail = document.createElement('h2')
			fail.textContent= error

			visor.appendChild(fail)
			mostrarVisor()
		})
})


function mostrarVisor(){
	ventanaMsg.style.display= 'block'

	ventanaMsg.style.opacity= 1
}
function ocultarVisor(){
	

	ventanaMsg.style.opacity= 0
	ventanaMsg.style.display= 'none'
}

btnOcultar.addEventListener('click', ()=>{
	ocultarVisor();
})