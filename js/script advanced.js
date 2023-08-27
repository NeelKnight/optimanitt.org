

$(window).load(function() {
    $(".pre-ld").fadeOut("slow");
});

$(document).ready(function(){
	
	if ($(window).width() < 1250) {
		$("*").hide();
		alert("Presently, we don't support mobile browers.\n\nSorry for the inconvenience caused.\n\nPlease visit us from a desktop browser with a minimum screen width of 1250 pixels! (Your screen width is : " + $(window).width() + "pixels)");
		document.write("Redirecting you to our parent site -->> https://www.nitt.edu/");
		window.setTimeout('window.location.href="https://www.nitt.edu/"',2000);
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
				alert("Presently, we don't support mobile browers.\n\nSorry for the inconvenience caused.\n\nPlease visit us from a desktop browser with a minimum screen resolution of 1250 pixels! (Your screen width is : " + $(window).width() + "pixels)");
				document.write("Redirecting you to our parent site -->> https://www.nitt.edu/");
				window.setTimeout('window.location.href="https://www.nitt.edu/"',2000);
			}
		 }, 500, "Copyright - Neel_Knight	");
	});																																	//Check1
	
	
	
	
	
	$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); 												

				var target = $(this).attr("href"); 					
				$('html, body').stop().animate({					
						scrollTop: $(target).offset().top
				}, 1200, function() {
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
	var i, control1 = 0, control2 = 0;
	var selector1 = document.querySelectorAll(".ltext1 span");
	setInterval(function() {
		
		control1+=200;
		control2+=250;
		
		if(control1<1000) {
			for(i=1; i<selector1.length; i++) {
				selector1[i].innerHTML = str1[i];
				selector1[i].style.visibility = "hidden"; 
			}
			if(control2%1000==0)
				selector1[0].style.visibility = selector1[0].style.visibility == "visible" ? "hidden" : "visible";
			i=0;
		}
		else if(control1<6000) {
			if(i<selector1.length) {
				selector1[i++].style.visibility = "visible"; 
			}
			if(control2%1000==0)
				selector1[0].style.visibility = selector1[0].style.visibility == "visible" ? "hidden" : "visible";
		}
		else if(control1<7000) {
			for(i=2; i<selector1.length; i++) {
				selector1[i].innerHTML = str2[i];
				selector1[i].style.visibility = "hidden"; 
			}
			selector1[0].style.visibility = "hidden";
			selector1[1].innerHTML = str2[1];
			if(control2%1000==0)
				selector1[1].style.visibility = selector1[1].style.visibility == "visible" ? "hidden" : "visible";
			i=1;
		}
		else if(control1<12000) {
			if(i<6) {
				selector1[i++].style.visibility = "visible"; 
			}
			if(control2%1000==0)
				selector1[1].style.visibility = selector1[1].style.visibility == "visible" ? "hidden" : "visible";
		}	
		else {
			control1 = 0;
			control2 = 0;
		}
			
	}, 100);				
																												// end of animate text 2
	
	
	
	

	
	

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
	 container.find('li').hide();
	 container.find('#i0').show();
    container.trigger('shutterClose');
    selected = $(e.target).attr('id');
});																													//Camera Shutter callback

	

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

$('#login').click(function() {
	$('.modal-body').hide();
	$('#modbody3').fadeIn();
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


	
});
