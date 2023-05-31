let correo = document.getElementById('correoForm')
let nom = document.getElementById('nombreForm')
let mensaje = document.getElementById('mensajeContacto')
let error = false;
let btn = document.getElementById('enviarForm')
let patronCorreo = new RegExp(/^[\w-\.]+[@][A-z]+[.][a-z]+([.][a-z]+)*$/);
let frm = document.getElementById('contacto')
const listaErr= document.getElementById('errorList')
const msgContent= document.getElementById('mensajes')


frm.addEventListener('submit', e=>{
	error=false;
	e.preventDefault()
	let arr = Array.from(frm.children)
	listaErr.innerHTML="";
	arr.forEach(i=>{
		i.classList.remove('error')
	})
	if(correo.value=="" || !patronCorreo.test(correo.value)){
		correo.parentElement.classList.add('error')
		let e = document.createElement('li')
		e.textContent= "Algo anda mal en tu correo"
		listaErr.appendChild(e)
		error=true
	}
	if(nom.value==""){
		nom.parentElement.classList.add('error')
		let e = document.createElement('li')
		e.textContent= "Debes ingresar un nombre"
		listaErr.appendChild(e)
		error= true
	}
	if(mensaje.value==""){
		mensaje.parentElement.classList.add('error')
		let e = document.createElement('li')
		e.textContent= "El campo de mensaje es obligatorio"
		listaErr.appendChild(e)
		error= true
	}

	if(!error){
		let msg= document.createElement('div')
		msg.classList.add('msg')

		let autor = document.createElement('h3')
		autor.classList.add('msgAutor')
		autor.textContent= nom.value

		let contacto = document.createElement('h5')
		contacto.classList.add('msgCorreo')
		contacto.textContent= correo.value

		let message= document.createElement('p')
		message.classList.add('msgMensaje')
		let format = mensaje.value.replace(/\n/g, "<br>")
		message.innerHTML= format		

		let headMsg = document.createElement('div')
		headMsg.classList.add('headMsg')
		headMsg.appendChild(autor)
		headMsg.appendChild(contacto)

		msg.appendChild(headMsg)
		msg.appendChild(message)

		msgContent.appendChild(msg)

		frm.reset();

	}

})