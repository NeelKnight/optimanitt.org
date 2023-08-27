$(window).on("load",function(e) {
    $(".pre-loader").fadeOut("slow");
});

$(function(){
	
	//$('.scrollspy').scrollSpy();
	
	$("ul a[href^='#']").on('click', function(e) {
    $('.button-collapse').sideNav('hide');
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 400, function(){
       window.location.hash = hash;
     });
	});
	
	$(".button-collapse").sideNav();															//menu
	
	
	var str = "OPTIMA";
	var control = [0,0,0,0,0,0];
	for(let i=0;i<5;i++)
	control[i] = Math.floor(Math.random()*5000);
	var selector = document.querySelectorAll(".ltext span");
	setInterval(function() {
		var i;
		for(i=0; i<selector.length; i++) {
			if(control[i]<=2500) {
				control[i]+=Math.floor(Math.random()*300);
				selector[i].innerHTML = String.fromCharCode(Math.floor(Math.random()*26)+65);
				selector[i].style.color = "#555";
				selector[i].style.textShadow = "5px 5px 5px #3effdc";
				selector[i].style.opacity = "0.5";
			}
			else if(control[i]<=8000) {
				control[i]+=Math.floor(Math.random()*400);
				selector[i].innerHTML = str[i];
				selector[i].style.color = "white";
				selector[i].style.textShadow = "5px 5px 5px #bbb";
				selector[i].style.opacity = "1.0";
			}
			else {
				control[i]%=8000;		
			}
		
		}	
	}, 100);																					//end of animate text
	
	var str1 = "Innovate";
	var str2 = "IIndiaaa";
	var control1 = 0;
	var selector1 = document.querySelectorAll(".ltext1 span");
	setInterval(function() {
		var i;
		control1+=400;
		if(control1<1500) {
			for(i=0; i<selector1.length; i++) {
				selector1[i].innerHTML = str1[i];
				selector1[i].style.visibility = "hidden"; 
			}
			selector1[0].style.visibility = "visible";
		}
		else if(control1<6000) {
			for(i=0; i<selector1.length; i++) {
				selector1[i].style.visibility = "visible"; 
			}
		}
		else if(control1<7500) {
			for(i=0; i<selector1.length; i++) {
				selector1[i].innerHTML = str2[i];
				selector1[i].style.visibility = "hidden"; 
			}
			selector1[1].style.visibility = "visible";
		}
		else if(control1<11000) {
			for(i=1; i<6; i++) {
				selector1[i].style.visibility = "visible"; 
			}
		}	
		else
			control1 = 0;
			
	}, 100);																					//end of animate text2

	


var modal = $('#myModal');

$('.reg-button').click(function(e1) {
   modal.show();
});

$('.regmenu').click(function() {
    $('.button-collapse').sideNav('hide');
   modal.show();
});

modal.find('.close').click(function() {
	modal.fadeOut();
});

$('#home').click(function(event) {
    if (event.target.id == modal.attr('id')) {
        modal.fadeOut("slow");
    }
});		

$('#instruction').click(function() {
	$('.modal-body').hide();
	$('#modbody1').fadeIn();
});

$('#register').click(function() {
	$('.modal-body').hide();
	$('#modbody2').fadeIn();
});

$('input[value="battleofminds"]').click();

$('input[name=event]').click(function(){
	$("input").attr('required',true);	
	if($(this).attr("value")=="adbiz") {
   	$('#displayondemand1').fadeIn();
   	$('#displayondemand2').fadeIn();
   }
  	else if($(this).attr("value")=="pixethon") {
   	$('#displayondemand1').fadeOut();
   	$('#displayondemand2').fadeOut();
   	$('#displayondemand1').find("input").attr("required", false);
   	$('#displayondemand2').find("input").attr('required',false);
   }
   else {
   	$('#displayondemand1').fadeIn();
   	$('#displayondemand2').find("input").attr('required',false);
   	$('#displayondemand2').fadeOut();
   }   	
});																												//Reg Modal
	
$('#sendmail').click(function(){
	var email = $('input[name=email]').val();
	
	var params = "email="+email;
	var xhr=new XMLHttpRequest();
	xhr.open("POST","sendmail.php",true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(params);

	xhr.onreadystatechange=function()
	{
		if(xhr.readyState==4 && xhr.status==200)
		{
				{
					var response=xhr.responseText;
					alert(response);
				}
		}
	}
});
	
});
