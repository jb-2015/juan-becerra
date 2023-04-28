<?php

	$file = '../../datos/prospectos.json';
	$data = $_POST['data'];	

    // Guardar la cadena JSON en el archivo JSON
    
    file_put_contents($file, $data);

    // Imprimir la cadena JSON resultante
    
	

?>