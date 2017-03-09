<?php

class Resource {

	private $id, $request;

	function __construct($resource_id, $request){

		if(is_numeric($resource_id))
			$this->id = $resource_id;

		$this->request = $request;
	}

	function output(){
		echo json_encode($this);
	}

}
