<?php
	$file= '../../datos/prospectos.json';

	$datosJson=file_get_contents($file);

	$data = json_decode($datosJson,true);
	
	echo $datosJson;
?>