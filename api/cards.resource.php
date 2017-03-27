<?php

class _cards extends Resource {

	public $card_type, $card_number, $card_analysis, $card_priority, $card_development, $card_testing, $card_value, $card_position, $card_description, $card_done, $currentcard, $action;

	function __construct($resource_id, $request){
		$this->id = $resource_id;
		$this->request = $request;
	}

	function POST($input, $db) {

		$input = array_keys($input);
		$input = json_decode($input[0]);

		$team = mysqli_real_escape_string($db, $input->team);
		$team = $team . "_cards";

		$card_type = mysqli_real_escape_string($db, $input->card->type);
		$card_number = mysqli_real_escape_string($db, $input->card->id);
		$card_analysis = mysqli_real_escape_string($db, $input->card->a);
		$card_development = mysqli_real_escape_string($db, $input->card->d);
		$card_testing = mysqli_real_escape_string($db, $input->card->t);
		$card_value = mysqli_real_escape_string($db, $input->card->cash);
		$card_position = mysqli_real_escape_string($db, $input->card->position);
		$card_priority = mysqli_real_escape_string($db, $input->card->priority);
		$card_description = mysqli_real_escape_string($db, $input->card->text);
		$card_done = mysqli_real_escape_string($db, $input->card->done);


		$query = "INSERT INTO `$team`
							(type, cardnumber, analysis, development, testing, value, position, priority, description, done)
						  VALUES
						  ('$card_type', '$card_number', '$card_analysis', '$card_development', '$card_testing', '$card_value', '$card_position', '$card_priority', '$card_description', '$card_done')";

		mysqli_query($db, $query);
	}

	function PUT($input, $db) {

		$input = array_keys($input);
		$input = json_decode($input[0]);

		$team = mysqli_real_escape_string($db, $input->team);
		$team = $team . "_cards";

		$card_number = mysqli_real_escape_string($db, $input->card->id);
		$card_analysis = mysqli_real_escape_string($db, $input->card->a);
		$card_development = mysqli_real_escape_string($db, $input->card->d);
		$card_testing = mysqli_real_escape_string($db, $input->card->t);
		$card_position = mysqli_real_escape_string($db, $input->card->position);
		$card_priority = mysqli_real_escape_string($db, $input->card->priority);
		$card_done = mysqli_real_escape_string($db, $input->card->done);

		$query = "UPDATE `$team`
							SET analysis='$card_analysis', development='$card_development', testing='$card_testing', position='$card_position', priority='$card_priority', done='$card_done'
							WHERE cardnumber='$card_number'";

		mysqli_query($db, $query);
	}

	function GET($input, $db) {
		$currentcard = mysqli_real_escape_string($db, $this->request[0]);
		$currentcard = intval($currentcard);

		$query = "SELECT *
							FROM `$this->id`
							WHERE cardnumber = '$currentcard'";

		$result = mysqli_query($db, $query);
		$data = [];
		while($row = mysqli_fetch_assoc($result)){
			$row = str_replace('_', ' ', $row);
			$data[] = $row;
		}
		$this->action = $data;
	}
}
