const formulario= document.getElementById('contacto');

formulario.addEventListener('submit', function(e){
	e.preventDefault();

	const datos = {};

	const correo = formulario.elements.correo.value;
	const nombre = formulario.elements.nombre.value;
	const mensaje = formulario.elements.mensaje.value;


	datos.nombre= nombre;
	datos.correo=correo;
	datos.mensaje=mensaje;

	const datosJSON= JSON.stringify(datos);

	const blob = new Blob([datosJSON], {type: 'aplication/json'});
	saveAs(blob,'datos.json');
});