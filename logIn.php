<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Campus Rush Sign Up</title>

</head>
<body>

<script src="scripts.js"></script>

<?php

// Get values from the form for email and password
$email = $_POST['Email_Address'];
$password = $_POST['Password_'];

// connect to the server and select the database
$sql = mysqli_connect("localhost", "root", "", "campus rush");

// search the database for the email

$result = mysqli_query($sql, "SELECT * FROM teachersignup WHERE Email_Address = '$email' AND Password_ = '$password'") or die("Failed to search database");

//"INSERT INTO teachersignup(First_Name, Last_Name, Email_Address, Password_)
//VALUES('$fname', '$lname', '$email', '$password')";

$row = mysqli_fetch_array($result);
$id = "";

if ($row['Email_Address'] == $email && $row['Password_'] == $password) {
   // echo "Welcome ".$row['Email_Address'];
    header("location: index.html");

$id = $row['ID'];



} else {
    echo "Failed to log in";
}
?>

<script src="scripts.js">person.user($id); person.call($id);</script>


</body>