let correo = document.getElementById('correoForm')
let nom = document.getElementById('nombreForm')
let mensaje = document.getElementById('mensajeForm')
let btn = document.getElementById('enviarForm')

let correoOk = false
let nombreOk = false
window.addEventListener('load',() =>{
	btn.disabled = true
	btn.style.backgroundColor= 'var(--color4)'
})

correo.addEventListener('focusout', c =>{
	
	let patron = new RegExp(/^[\w-\.]+[@][A-z]+[.][a-z]+([.][a-z]+)*$/);


	if(patron.test(correo.value)){
		correo.style.borderColor = "rgba(0,200,0,0.5)"
		correoOk=true
		if(correoOk && nombreOk){
			btn.disabled = false
			btn.style.backgroundColor= 'var(--color3)'
		}

	}else{
		correo.style.borderColor = "rgba(200,0,0,0.5)"
		btn.disabled = true
		correoOk=false;
		btn.style.backgroundColor= 'var(--color4)'
	}


})
nom.addEventListener('focusout', c => {
	let patron = new RegExp(/^[A-z-\s]+$/)

	if(patron.test(nom.value)){
		nom.style.borderColor = "rgba(0,200,0,0.5)"
		nom.style.color= 'black'
		nombreOk= true
		if(correoOk && nombreOk){
			btn.disabled = false
			btn.style.backgroundColor= 'var(--color3)'
		}
	}else{
		nom.style.borderColor = "rgba(200,0,0,0.5)"
		nom.style.color= 'red'
		nombreOk= false
		btn.disabled = true
		btn.style.backgroundColor= 'var(--color4)'
	}

})