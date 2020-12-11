<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Campus Rush Sign Up</title>

</head>
<body>



<?php 
   
$fname  = $_POST['First_Name'];
$lname =  $_POST['Last_Name'];
$email =  $_POST['Email_Address'];
$password =  $_POST['Password_'];

$dbconnect = mysqli_connect("localhost", "root", "", "campus rush");

$sql = "INSERT INTO teachersignup(First_Name, Last_Name, Email_Address, Password_)
VALUES('$fname', '$lname', '$email', '$password')";

$run = mysqli_query($dbconnect, $sql);

if ($run == TRUE){
  
    header ("location: index.html");
}
else {
    echo "Error";
}
?>

<!--
if (mysqli_connect_errno($dbconnect)){
    echo "failed to connect";

} else {echo "connection successful";}
-->



<body>
</html>