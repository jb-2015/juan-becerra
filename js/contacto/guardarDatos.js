const formulario= document.getElementById('contacto');

let arrayObject = [];

formulario.addEventListener('submit', function(e){
	
	e.preventDefault();
	arrayObject= [];
	//RECUPERAR DATOS
	
	recuperarDatos()
	//------------------------------
	
	
	
	
});

function guardarDatos(){
	const datos = {};

	const correo = formulario.elements.correo.value;
	const nombre = formulario.elements.nombre.value;
	const mensaje = formulario.elements.mensaje.value;

	const xhttp = new XMLHttpRequest();
	xhttp.open("POST", "js/contacto/guardarContacto.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.onreadystatechange = function() {
	  if (this.status == 200) {
	  	console.log("Respuesta de peticion")
	    console.log(this.responseText);
	    restaurarForm();
	  }else{
	  	alert("Algo Salio mal !")
	  }
	};

	datos.nombre= nombre;
	datos.correo=correo;
	datos.mensaje=mensaje;
	console.log("Agrega dato nuevo al arreglo")
	arrayObject.push(datos);
	const datosJSON= JSON.stringify(arrayObject);

	xhttp.send("data="+datosJSON);
}

function recuperarDatos(){
	//arrayObject=[]
	console.log("Entra en recuperar Datos")
	fetch('js/contacto/recuperarRegistros.php')
		.then(response => response.json())
		.then(data => {
			
			data.forEach(object => {
				console.log(object)
				let existente = {}
				existente.nombre= object.nombre
				existente.correo= object.correo
				existente.mensaje= object.mensaje
				arrayObject.push(existente);
			})
			
			
			
		})
		.then(()=>{
			guardarDatos();
		})
		.catch(error =>{
			guardarDatos();
			console.error("no se pudo realizar la peticion JSON ", error);
			
		})
	
}

function restaurarForm(){
	formulario.reset();
	formulario.elements.correo.focus();
	formulario.elements.nombre.style.borderColor = "var(--color3)";
}

function esCorrecto(){
	
}