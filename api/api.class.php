<?php

class API{

	private	$method,
					$input,
					$resource,
					$resource_id,
					$request;

	function __get($k){
		return $this->$k;
	}

	function __construct(){

		$this->method = $_SERVER['REQUEST_METHOD'];

		$input = [];
		parse_str(file_get_contents("php://input"), $input);
		$this->input = $input;

		$path = array_keys($_GET)[0];
		$request = explode('/',$path);
		$request = array_filter($request, function($v){ return $v !== '';});
		$request = array_values($request);


		if(count($request) > 0)
			$this->resource = array_shift($request);

		if(count($request) > 0)
			$this->resource_id = array_shift($request);

		$this->request = $request;
	}


}
