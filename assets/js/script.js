var lat = 35.913200;
var long = -79.055845;
var city = "Chapel Hill";
var state = "NC";
var address = document.getElementById('address').value;

$( document ).ready(function() {
	$("#address").focus();
	var currentDate = new Date();
	var clockTop = $('.clock').position().top;
	var clockWidth = $('.clock').width();
	var sunHorizontal = sunLocation("sunH", lat, long);
	var sunVirtual = sunLocation("sunV", lat, long);
	var shadowRight = (-16 * shadow(sunHorizontal).toFixed(3));
	var shadowBottom = (16 * shadow(sunVirtual).toFixed(3));
	LoadMe();

	$('.clock').html(time(currentDate));
	$('.loadingScreen').animate({opacity: 0 }, 1000);
	$('.clock').animate({
		opacity: 1,
		top: ((clockTop - shadowBottom) + "px"),
		textShadow: ("#000000 " + (shadowRight) + "px " + (shadowBottom) + "px 4px"),
		}, 1000);

	$('.filter').css({"background":
			"-webkit-linear-gradient(bottom, " +
			// sunRiseSet(sunVirtual) +
			"rgba(178, 203, 255, 0.4), rgba(0,21,48,0.4))"
		});
	$('Body').css("background-image",
		"-webkit-radial-gradient(" +
			sunHorizontal + "% " +
			(100 - sunVirtual) + "%" +
			", circle contain, yellow, " +
			color(100, 1) + " 30px," +
			color(1200, 1) + " 512px);");
	onceASecond();
	onceAMinute();
});

function onceASecond() {
	window.setInterval(function(){
		$('.clock').html(time(new Date()));
	}, 1000);
};

function sunRiseSet(sunVirtual) {
	debugger
}






function 	onceAMinute() {
	window.setInterval(function(){
		var currentDate = new Date();
		var second = currentDate.getSeconds();
		var minute = currentDate.getMinutes();
		var hour = currentDate.getHours();
		var daySeconds = (hour * 3600 + minute * 60 + second)/86400;
		var sunHeight = daySplit(daySeconds);
		var sunHorizontal = sunLocation("sunH", lat, long)
		var sunVirtual = sunLocation("sunV", lat, long)
		console.log("sunVirtual: " + sunVirtual);
		console.log("sunHorizontal: " + sunHorizontal);

		var shadowRight = (-16 * shadow(sunHorizontal).toFixed(3));
		var shadowBottom = (16 * shadow(sunVirtual).toFixed(3));
		$('.clock').css("text-shadow", (shadowRight) + "px " + (shadowBottom) + "px 4px #000000");
		$('Body').css("background-image",
				"-webkit-radial-gradient(" +
					sunHorizontal + "% " +
					(100 - sunVirtual) + "%" +
					", circle contain, yellow, " +
					color(100,1) + " 16px," +
					color(900,1) + " 512px)");
	}, 2000);
};

function shadow(sunDirection) {
	if (sunDirection >= 50) {
		var shadowDirection = (2 * (sunDirection/100) - 1);
		return shadowDirection;
	}
	if (sunDirection < 50) {
		var shadowDirection = (2 * (sunDirection/100) - 1);
		return shadowDirection;
	}
}

function dayLight(day) {
	var lt = Math.sin(day * 2 * Math.PI)
	if (lt < 0) {return 0}
	else {return lt}
}

function daySplit(day){
	if (day > 0.5) {return ((1 - day).toFixed(3) * 2)}
	else {return (day.toFixed(3) * 2)}
}

function spacing(unit) {
	if (unit < 10) {
		return unit = "0" + unit;
	}
	else {
		return unit
	}
}

function LoadMe()
{
   function test_KeyPressed(e)
    {
       alert(e.keycode);
    }
    $('#address').bind('keypress', function(e){
       var code = e.keyCode ? e.keyCode : e.which;
       if(code == 13) // Enter key is pressed
       {
          console.log("loading address")
					codeAddress()
       }
    });
}
