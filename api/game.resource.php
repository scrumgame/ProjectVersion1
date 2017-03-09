<?php

class _game extends Resource {

	function __construct($resource_id, $request){

		if(is_numeric($resource_id))
			$this->id = $resource_id;

		$this->request = $request;
	}
}
