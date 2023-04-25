<?php

	$file = 'datos.json';
	$data = $_POST['data'];

	file_put_contents($file, $data);
	

?>