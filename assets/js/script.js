$( document ).ready(function() {
	var currentDate = new Date();
	var lat = 35.9;
	var long = (-180);
	var sunHorizontal = sunLocation("sunH", lat, long)
	var sunVirtual = sunLocation("sunV", lat, long)

	$('.clock').html(time(currentDate));
	$('.filter').animate({opacity: 0 }, 1000);
	$('.clock').animate({opacity: 1 }, 1000);
	$('Body').css("background-image",
			"-webkit-radial-gradient(" +
				sunHorizontal + "% " +
				(100 - sunVirtual) + "%" +
				", circle contain," +
				"yellow, " +
				color(80) + " 20px, " +
				color(100) + " 48px," +
				color(400) + " 256px," +
				color(1000) + " 512px)");

	window.setInterval(function(){
		var currentDate = new Date();
		var hour = currentDate.getHours();
		var minute = currentDate.getMinutes();
		var second = currentDate.getSeconds();
		var sunHorizontal = sunLocation("sunH", lat, long)
			sunHorizontal = 90;
////////////////////////////////////////////////////////////////////////////////
		var sunVirtual = sunLocation("sunV", lat, long)
		var daySeconds = (hour * 3600 + minute * 60 + second)/86400
		var sunHeight = daySplit(daySeconds);
		var tint = 1 - sunHeight;
		var shadowRight = (16 * shadowH(sunHorizontal).toFixed(3));
		console.log("sunHorizontal " + sunHorizontal);
		console.log("shadow hello Right " + shadowRight);
		var shadowBottom = 2;
		// var light = dayLight(day)
		console.log("sunHorizontal " + sunHorizontal);

		$('Body').css("background-image",
				"-webkit-radial-gradient(" +
					sunHorizontal + "% " +
					(100 - sunVirtual) + "%" +
					", circle contain," +
					"yellow, " +
					color(80) + " 20px, " +
					color(100) + " 48px," +
					color(400) + " 256px," +
					color(1000) + " 512px)");
		$('.clock').html(time(currentDate));

		$('.clock').css("text-shadow", " " + (-shadowRight) + "px " + " " + (10 * shadowBottom) + "px 0 #000000");
	}, 1000);
});

function shadowH(sunHorizontal) {
	if (sunHorizontal >= 50) {
		var shadowRight = (2 * (sunHorizontal/100) - 1);
		console.log("shadowRight >>>> " + shadowRight);
		return shadowRight;
	}
	if (sunHorizontal < 50) {
		var shadowRight = (-2 * (sunHorizontal/100));
		console.log("shadowleft >>>> " + -shadowRight);
		return shadowRight;
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
