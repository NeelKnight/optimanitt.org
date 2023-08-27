<?php  
       $servername = "localhost";  
       $username = "db_optima";  
       $password = "FILLERTEXT";
       $dbname = "optima";
       $key = "FILLERTEXT";
       $conn = new mysqli($servername, $username, $password, $dbname);
		 if ($conn->connect_error) {
   		die("Connection failed: " . $conn->connect_error);
		 }
?>
