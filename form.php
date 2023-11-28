<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailheader - "From:".$name."<".$email.">\r\n";

$recipient = "andy.g.guim@gmail.com";

mail($recipient, "contact", $message, $mailheader)
or die("Error!");

echo"message sent";

?>