<!DOCTYPE html>
	<body>
			<?php

			include "connection.php";
			
			$email = $_POST[email];
			$email = filter_var($email, FILTER_VALIDATE_EMAIL);

			if (!$email) 
			{
			 	echo '<h3>Check the email you have provided, again!</h3>';
         	echo "<br><br><input type='button' onclick=\"location.href='home.html';\" value='Go back to Home'/>";
         	exit;
			}			
			
			if(isset($_POST['g-recaptcha-response'])){
			$captcha = $_POST['g-recaptcha-response'];
			}
         
        	if(!$captcha){
         	echo '<h3>Please check the the captcha form!</h3>';
         	echo "<br><br><input type='button' onclick=\"location.href='home.html';\" value='Go back to Home'/>";
         	exit;
        	}
        	
			$ip = $_SERVER['REMOTE_ADDR'];
        	$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$key."&response=".$captcha);
			$responseKeys = json_decode($response,true);
        	if(intval($responseKeys["success"]) !== 1) {
         	 echo '<h3>You are a spammer! You have been prevented from registering!</h3>';
         	 echo	'<br><br><However, if you think this has been a mistake, try one of the following:</h3>';
         	 echo '<h3>1. Refresh your cache content or, use a VPN and try registering again after a while!</h3>';
         	 echo '<h3>2. For support, contact us using the details from our home page!</h3>';
         	 echo "<br><br><input type='button' onclick=\"location.href='home.html';\" value='Go back to Home'/>";
        		 exit;
        	}
        
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
        
        	if($OTP != $_POST[otp])
        	{
        		echo '<h3>The OTP value you have provided is incorrect, try again!</h3>';
        		echo '<h3>Be sure to check your mail for the OTP and enter it correctly in the registration form!</h3>';
        		echo '<h3>It takes a few minutes to deliver the mail. Please be patient and also, be sure to check all mails (including your spam folders)</h3>';
         	echo "<br><br><input type='button' onclick=\"location.href='home.html';\" value='Go back to Home'/>";
         	exit;	
        	}
                
			
			$query = "INSERT INTO `EventReg` VALUES ('$_POST[fname]','$_POST[lname]','$_POST[email]','$_POST[collegename]','$_POST[mobnum]','$_POST[event]','$_POST[fname1]','$_POST[lname1]','$_POST[mobnum1]','$_POST[fname2]','$_POST[lname2]','$_POST[mobnum2]','$_POST[fname3]','$_POST[lname3]','$_POST[mobnum3]','$_POST[fname4]','$_POST[lname4]','$_POST[mobnum4]', default);";
			
			if(mysqli_query($conn,$query))
			{	
				$message = "Registration successful!!!";
			}
			else
				$message = "Error encountered while registering. Contact us for support!";
			echo "<script type='text/javascript'>alert('$message');</script>";
			
			echo $message;
			?>
			<br><br><br>
			
			<input type="button" onclick="location.href='home.html';" value="Go back to Home"/>
			
			
	</body>
</html>
