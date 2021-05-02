<?php
   $name= $_POST['email'];
   $visitor_email = $_POST['email'];
   $message = $_POST['message'];

   $email_form = 'suhanathakur07@gmail.com'
   $email_subject = "New form Submission"
   $email_body = "User Name: $name.\n".
                  "User email : $visitor_email.\n".
                      "user message: $message.\n";
                

$to ="suhanathakur07@gmail.com";
mail($to,$email_subject, $email_body);
header(:Location: contactus.html)