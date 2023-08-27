$(window).load(function() {
    $(".pre-ld").fadeOut("slow");
});

$(document).ready(function(){
	
	if ($(window).width() < 1250) {
		$("*").hide();
		//window.setTimeout('window.location.href="http://www.optimanitt.org/home1.html"',10);
		window.setTimeout('window.location.href="http://neelknight.github.io/optimanitt.org/home1.html"',10);
        }

	var waitForFinalEvent = (function () {
  	var timers = {};
  	return function (callback, ms, uniqueId) {
    	if (!uniqueId) {
      	uniqueId = "Check on this";
    	}
    	if (timers[uniqueId]) {
    	  clearTimeout (timers[uniqueId]);
    	}
    	timers[uniqueId] = setTimeout(callback, ms);
  	};
	})();
	$(window).resize(function () {
		 waitForFinalEvent(function(){
		   if ($(window).width() < 1250) {
				$('*').hide();
				/*alert("Our mobile site is minimalistic. \n\nPlease visit us from a desktop browser with a minimum screen resolution of 1250 pixels to have the best user experience! (Your screen width is : " + $(window).width() + "pixels)"+"\n\nNow taking you to your mobile site. Press OK");
				document.write("Redirecting you to our mobile site.");*/
				//window.setTimeout('window.location.href="http://www.optimanitt.org/home1.html"',10);
				window.setTimeout('window.location.href="http://neelknight.github.io/optimanitt.org/home1.html"',10);
			}
		 }, 500, "Copyright - Neel_Knight");
	});																																	//Check1
	
	
	
	
	
	$('a[href*="#"]').bind('click', function(e) {
				e.preventDefault(); 												

				var target = $(this).attr("href"); 					
				$('html, body').stop().animate({					
						scrollTop: $(target).offset().top
				}, 1100, function() {
						location.hash = target; 								
				});
				return false;
		});																																//smooth jump
	
	
	
	
	
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
	}, 100);																				//end of animate text
	
	
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
			
	}, 100);				
	
	
	
	
	

	
	

	var container = $('#container1'), li = container.find('li');
	var selected;
	container.tzShutter({
		closeCallback: function(){
			selected = '#i' + selected.charAt(1);
			container.find('#i0').hide();
			container.find(selected).toggle();
			container.trigger('shutterOpen');
		},
		loadCompleteCallback:function(){
		}
	});
	$('.eventlist').find('a').click(function(e) { 
	 var audio = new Audio("js/shutter.m4a");
	 audio.play();
	 container.find('li').hide();
	 container.find('#i0').show();
    container.trigger('shutterClose');
    selected = $(e.target).attr('id');
});																													//Shutzer by Neel_Knight

	

var modal = $('#myModal');

$('.reg').click(function(e1) {
   modal.show();
});

modal.find('.close').click(function() {
	modal.fadeOut("slow");
});

$('#home').click(function(event) {
    if (event.target.id == modal.attr('id')) {
        modal.fadeOut("slow");
    }
});																													//Reg Modal


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
});


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
