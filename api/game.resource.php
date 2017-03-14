<?php

class _game extends Resource {

	public $team, $teamgame, $s, $d;

	function __construct($resource_id, $request){

		if(is_numeric($resource_id))
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
}
