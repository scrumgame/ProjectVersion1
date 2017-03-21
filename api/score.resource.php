<?php

class _score extends Resource {

	public $team, $sprint, $cash, $teamname, $teamcards, $teamgame, $money, $sprintnumber, $totalscore, $totalCurrentTeam, $totalTopTen;

	function __construct($resource_id, $request){

		$this->id = $resource_id;

		$this->request = $request;
	}

	function POST($input, $db) {

		$input = array_keys($input);
		$input = json_decode($input[0]);
		$teamname = mysqli_real_escape_string($db, $input->team);
		$team = mysqli_real_escape_string($db, $input->team);
		$teamcards = $team . "_cards";
		$teamgame = $team . "_game";

		$query = "INSERT INTO score
							(teamname)
							VALUES
						  ('$teamname')";

		mysqli_query($db, $query);

		$query = "CREATE TABLE `$teamcards` (
							`ID` int(11) NOT NULL,
							`type` varchar(10) COLLATE utf8_bin NOT NULL,
							`cardnumber` int(11) NOT NULL,
							`analysis` int(11) NOT NULL,
							`development` int(11) NOT NULL,
							`testing` int(11) NOT NULL,
							`value` int(11) NOT NULL,
							`position` int(11) NOT NULL,
							`priority` int(11) NOT NULL,
							`description` text COLLATE utf8_bin NOT NULL,
							`done` varchar(10) COLLATE utf8_bin NOT NULL,
							KEY `ID` (`ID`)
							) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;";

		mysqli_query($db, $query);
	}

	function PUT($input, $db) {

		$input = array_keys($input);
		$input = json_decode($input[0]);
		$cash = mysqli_real_escape_string($db, $input->cash);
		$sprint = mysqli_real_escape_string($db, $input->sprint);
		$teamname = mysqli_real_escape_string($db, $input->team);
		$totalscore = mysqli_real_escape_string($db, $input->totalscore);

		if ($sprint != NULL) {
			$query = "UPDATE score
								SET sprint_$sprint=$cash
								WHERE teamname='$teamname'";

			mysqli_query($db, $query);

		} else {
			$query = "UPDATE score
								SET total=$totalscore
								WHERE teamname='$teamname'";

			mysqli_query($db, $query);
		}
	}

	function GET($input, $db) {


		if (isset($this->request[0])) {
			$sprintnumber = $this->request[0];

			$query = "SELECT sprint_$sprintnumber FROM score WHERE teamname = '$this->id'";

			$result = mysqli_query($db, $query);
			$data = [];
			while($row = mysqli_fetch_assoc($result)){
				$int = intval($row["sprint_$sprintnumber"]);
				$data[] = $int;
			}
			$this->money = $data;
		}

		$query = "SELECT teamname, total FROM score WHERE teamname = '$this->id'";

		$result = mysqli_query($db, $query);
		$data = [];
		while($row = mysqli_fetch_assoc($result)){
			$data[] = $row;
		}
		$this->totalCurrentTeam = $data;

		$query = "SELECT teamname, total FROM score ORDER BY total DESC LIMIT 10";

		$result = mysqli_query($db, $query);
		$data = [];
		while($row = mysqli_fetch_assoc($result)){
			$data[] = $row;
		}
		$this->totalTopTen = $data;
	}



}
