<?php

class _game extends Resource {

	public $team, $teamgame, $s, $d, $sprint, $day, $retrospective, $retro;

	function __construct($resource_id, $request){
		$this->id = $resource_id;

		$this->request = $request;
	}

	function POST($input, $db) {
		$input = array_keys($input);
		$input = json_decode($input[0]);

		$team = mysqli_real_escape_string($db, $input->team);
		$teamgame = $team . "_game";
		$s = 1;
		$d = 1;

		$query = "CREATE TABLE `$teamgame` (
							`ID` int(11) NOT NULL,
							`sprint` int(11) NOT NULL,
							`day` int(11) NOT NULL,
							`done` int(11) NOT NULL,
							`action_card` int(11) NOT NULL,
							`multiple_choice_card` int(11) NOT NULL,
							`retrospective` text COLLATE utf8_bin NOT NULL,
							KEY `ID` (`ID`)
							) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;";

		mysqli_query($db, $query);

		while ($s < 9) {
			$query = "INSERT INTO `$teamgame`
								(sprint, day)
								VALUES
								('$s', '$d')";

			mysqli_query($db, $query);
			$d++;
			if ($d == 6) {
				$s++;
				$d = 1;
			}
		}
	}

	function PUT($input, $db) {
		$input = array_keys($input);
		$input = json_decode($input[0]);

		$team = mysqli_real_escape_string($db, $input->team);

		$teamgame = $team . "_game";
		$day = mysqli_real_escape_string($db, $input->releaseplan->day);
		$day = $day;
		$sprint = mysqli_real_escape_string($db, $input->releaseplan->sprint);
		$sprint = $sprint;
		$retrospective = mysqli_real_escape_string($db, $input->retrospective);

		$query = "UPDATE `$teamgame`
		SET retrospective = '$retrospective'
		WHERE sprint = '$sprint' AND day = '$day'
		";

		mysqli_query($db, $query);
	}

	function GET($input, $db) {

		$currentsprint = $this->request[0];

		$query = "SELECT retrospective FROM `$this->id` WHERE sprint = '$currentsprint' AND day = 5";

		$result = mysqli_query($db, $query);
		$data = [];
		while($row = mysqli_fetch_assoc($result)){
			$row = str_replace('_', ' ', $row);
			$data[] = $row;
		}
		$this->retro = $data;
	}
}
