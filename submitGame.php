<?php
    header('Content-Type: application/json');

    $str_json = file_get_contents('php://input'); 
    $body = json_decode($str_json, true); 
	$correctCount = $body["Score"];
	$gameData = $body["gameData"];

    //Connect To Database
	$hostname="localhost";
	$username="u2mwygbluzrts";
	$password="5yph01uukcga";
	$dbname="dbnri5bk2gmuc1";
	$conn = mysqli_connect($hostname,$username, $password,$dbname) or die ("<html><script language='JavaScript'>alert('Unable to connect to database! Please try again later.'),history.go(-1)</script></html>");

	$sql = "INSERT INTO GameAttempts(DatePlayed,IsCompleted,Score) VALUES(Now(),true,$correctCount)";
	if (mysqli_query($conn, $sql)) {
		echo "New record created successfully";
	  } else {
		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	  }
	$id = mysqli_insert_id($conn);

	foreach ($gameData as $item) {

		$sql = "INSERT INTO GameDetails(GameId,IsCorrect,ItemId)";
        $sql .= "SELECT ". $id.",". json_encode($item["isCorrect"]).",gi.ItemId
                 FROM GameItems gi 
                 WHERE gi.ItemName = '".$item["item"]."'";
		if (mysqli_query($conn, $sql)) {
			echo "New records created successfully";
		  } else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		  }
    }
	
	$conn->close();
?>