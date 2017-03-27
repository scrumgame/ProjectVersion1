<?php

class _admin extends Resource {

	public $id, $username, $password, $admin;

	function __construct($resource_id, $request){

		if(is_numeric($resource_id))
			$this->id = $resource_id;

		$this->request = $request;
	}

	function GET($input, $db) {

		$username = mysqli_real_escape_string($db, $this->request[0]);
		$password = mysqli_real_escape_string($db, $this->request[1]);

			$query = "SELECT username, password
								FROM admin
								WHERE username='$username'
								AND password='$password'";

			$result = mysqli_query($db, $query);

			$data = [];
			while($row = mysqli_fetch_assoc($result)){
				$data[] = $row;
				$this->admin = $data;
			}
	}
}
