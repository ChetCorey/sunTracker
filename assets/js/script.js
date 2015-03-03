$( document ).ready(function() {
	var currentDate = new Date();
	var lat = 35.9;
	var long = -236;
	var sunHorizontal = sunLocation("sunH", lat, long)
	var sunVirtual = sunLocation("sunV", lat, long)
	var shadowRight = (-16 * shadow(sunHorizontal).toFixed(3));
	var shadowBottom = (16 * shadow(sunVirtual).toFixed(3));
	var clockTop = $('.clock').position().top;

	$('.clock').html(time(currentDate));
	$('.filter').animate({opacity: 0 }, 1000);
	$('.clock').animate({
		opacity: 1,
		top: ((clockTop - shadowBottom) + "px"),
		textShadow: ("#000000 " + (shadowRight) + "px " + (shadowBottom) + "px 4px"),
		}, 1000);
	// debugger
	$('Body').css("background-image",
			"-webkit-radial-gradient(" +
				sunHorizontal + "% " +
				(100 - sunVirtual) + "%" +
				", circle contain, yellow, " +
				color(100) + " 12px," +
				color(900) + " 512px)");

	window.setInterval(function(){
		var currentDate = new Date();
		var hour = currentDate.getHours();
		var minute = currentDate.getMinutes();
		var second = currentDate.getSeconds();
		var daySeconds = (hour * 3600 + minute * 60 + second)/86400;
		var sunHeight = daySplit(daySeconds);
		var shadowRight = (-16 * shadow(sunHorizontal).toFixed(3));
		var shadowBottom = (16 * shadow(sunVirtual).toFixed(3));

		$('.clock').html(time(currentDate));
		$('.clock').css("text-shadow", (shadowRight) + "px " + (shadowBottom) + "px 4px #000000");
	}, 1000);

	window.setInterval(function(){
		var sunHorizontal = sunLocation("sunH", lat, long)
		var sunVirtual = sunLocation("sunV", lat, long)

		$('Body').css("background-image",
				"-webkit-radial-gradient(" +
					sunHorizontal + "% " +
					(100 - sunVirtual) + "%" +
					", circle contain, yellow, " +
					color(100) + " 12px," +
					color(900) + " 512px)");

	}, 60000);
});

function shadow(sunDirection) {
	if (sunDirection >= 50) {
		var shadowDirection = (2 * (sunDirection/100) - 1);
		console.log("+ shadowDirection >>>> " + shadowDirection);
		return shadowDirection;
	}
	if (sunDirection < 50) {
		var shadowDirection = (2 * (sunDirection/100) - 1);
		console.log("- shadowleft >>>> " + shadowDirection);
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
