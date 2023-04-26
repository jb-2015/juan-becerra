const formulario= document.getElementById('contacto');

const arrayObject = [];

formulario.addEventListener('submit', function(e){
	e.preventDefault();
	const existentes= recuperarDatos();
	
	const datos = {};

	const correo = formulario.elements.correo.value;
	const nombre = formulario.elements.nombre.value;
	const mensaje = formulario.elements.mensaje.value;

	const xhttp = new XMLHttpRequest();
	xhttp.open("POST", "guardarContacto.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    console.log(this.responseText);
	  }
	};

	datos.nombre= nombre;
	datos.correo=correo;
	datos.mensaje=mensaje;

	arrayObject.push(datos);
	const datosJSON= JSON.stringify(datos);

	xhttp.send("data="+datosJSON);
});

function recuperarDatos(){
	fetch('recuperarRegistros.php')
		.then(response => response.json())
		.then(data => {
			const existente = {
				nombre: data.nombre,
				correo: data.correo,
				mensaje: data.mensaje
			}
			arrayObject.push(existente);
			
		})
		.catch(error =>{
			console.error("no se pudo realizar la peticion JSON ", error);
			
		})
}