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

</body>    
    
</html>