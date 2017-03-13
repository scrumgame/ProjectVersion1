<?php

class _admin extends Resource {

	public $id, $username, $password, $admin;

	function __construct($resource_id, $request){

		if(is_numeric($resource_id))
			$this->id = $resource_id;

		$this->request = $request;
	}

	function GET($input, $db){
		if($this->id){ // Om vår URL innehåller ett ID på resursen hämtas bara den usern
			$query = "
				SELECT *
				FROM admin
				WHERE id = $this->id
			";
			$result = mysqli_query($db, $query);
			$user = mysqli_fetch_assoc($result);
			$this->username = mysqli_real_escape_string($admin['username']);
			$this->password = mysqli_real_escape_string($admin['password']);
		}else{ // om vår URL inte innehåller ett ID hämtas alla users
			$query = "
				SELECT *
				FROM admin
			";
			$result = mysqli_query($db, $query);
			$data = [];
			while($row = mysqli_fetch_assoc($result)){
				$data[] = $row;
			}
			$this->admin = $data;
		}

	}
	# Den här funktionen är privat och kan bara köras inom objektet, inte utanf

}
