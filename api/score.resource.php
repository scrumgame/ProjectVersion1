<?php

class _score extends Resource {

	public $team;

	function __construct($resource_id, $request){

		if(is_numeric($resource_id))
			$this->id = $resource_id;

		$this->request = $request;
	}

	function POST($input, $db){

			$input = array_keys($input);
			$input = json_decode($input[0]);
			$teamname = mysqli_real_escape_string($db, $input->team);

		$query = "
			INSERT INTO score
			(teamname)
			VALUES ('$teamname')";

		mysqli_query($db, $query);
	}

}
