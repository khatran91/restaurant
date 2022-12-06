<?php
function connectDB(){
	$dbConnection = mysqli_connect("sql107.epizy.com", "epiz_32870965", "rxERvWNVfqfN", "epiz_32870965_finalprojectDB");
	if (mysqli_connect_errno()){
		die(mysqli_connect_error());
	}
	return $dbConnection;
}
?>