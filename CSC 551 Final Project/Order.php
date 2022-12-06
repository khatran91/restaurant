<?php
    include("connectToDB.inc")
?>
<DOCTYPE! html>
<html>
<head>
    <meta charset="utf-8">
      <title>Order Details</title>
      <link href="cart.css" rel="stylesheet" type="text/CSS">
      <script src="menu.js"></script>
</head>    
    
<body>

<p>Thank you! <?php print($_POST['fullname']); ?> for ordering your food from our resturant, below is your order summary and number, make sure to show the number to pick up your order!</p>
  
<p>Order Summary: </br> 
Email: <?php print($_POST['email']); ?> </br>
    Phone Number: <?php print($_POST['phone']); ?> </br>
<?php
    echo "Your Order Number is: ";
    echo(rand(10000,99999));
?>
</p>

<p> Your adress is: </br>
<?php print("Address: " . $_POST['address']); ?> </br>
<?php print("City: " . $_POST['city']); ?> </br>
<?php print("State: " . $_POST['state']); ?> </br>
<?php print("Zip code: " . $_POST['zip']); ?>
</p>

<?php

function insertToDB() {
    $database=connectDB();

    $st1 = "INSERT INTO customer(fullname, email, phone, orderId, address, city, state, zip)";
    $st2 = "VALUES('";
	$st3 = mysqli_real_escape_string($dataBase, $_POST['fullname'])."','";
	$st4 = mysqli_real_escape_string($dataBase, $_POST['email'])."','";
	$st5 = mysqli_real_escape_string($dataBase, $_POST['phone'])."','";
	$st6 = mysqli_real_escape_string($dataBase, $_POST['address'])."','";
	$st7 = mysqli_real_escape_string($dataBase, $_POST['city'])."','";
	$st8 = mysqli_real_escape_string($dataBase, $_POST['state'])."','";
	$st9 = mysqli_real_escape_string($dataBase, $_POST['zip']);
	$st10 = "');";

    $query1 = $st1.$st2.$st3.$st4.$st5.$st6.$st7.$st8.$st9.$st10;

    $result1 = mysqli_query($dataBase, $query1) or die('Query failed: ' . mysqli_error($dataBase));

    mysql_close($dataBase);
}

insertToDB();

?>
</body>    
    
</html>