<?php
	 
	$email = $_POST[email];
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);

    if ($email) 
    {
    	  $string1 = $email . date("d") ."Optima2k17" ;											//Custom OTP generator. Change in both files
    	  $shastr = sha1($string1);
    	  preg_match_all('!\d+!', $shastr, $string1);
		  $var1 = implode('', $string1[0]);
		  $var1 = substr($var1,0,4);
		  $OTP = $var1;
    	  
    	  $string1 = substr($email,4,-2) . date("y") . "NITT";
    	  $shastr = sha1($string1);
    	  preg_match_all('!\d+!', $shastr, $string1);
		  $var1 = implode('', $string1[0]);
		  $var1 = substr($var1,0,4);
		  $OTP .= $var1;
		  
        $from = 'webmaster@optimanitt.org'; 												
        $replymail = 'optima11th@gmail.com';									
        $subject = 'Email Confirmation';
        $headers = "From: $from\r\nReply-to: $replymail";
        $message = "Hi there, enthusiastic participant!\n\nYou are just one step away from registering for Optima 2k17 :)\n";
        $message .= "To confirm your email, you just need to enter the following OTP into your registration form.\n\n";
        $message .= "OTP : $OTP (NOTE: This OTP is valid for only one hour!)";
        $message .= "\n\n\nYou are receiving this message because you chose to sign-up for an event in Optima 2k17, NITT. If you did not, this is a mistake and you can safely ignore this message.";
        $message .= "\n\n\nWith regards,\nTeam OPTIMA 2k17";       
        $sent = mail($email, $subject, $message, $headers);
        if ($sent) 
        		$result = "Email confirmation message has been successfully sent to $email! \n\nEnter the same in the registration form."; 
    	  else 
        		$result = 'Sorry, there was a problem sending the mail! We regret the inconvenience caused. Contact our support team for advice.';
    }
    else
    	$result = 'Check the email you have provided, again!';
    echo $result;
    
?>
    
