$( document ).ready(function() {
	var currentDate = new Date();
	var hour = currentDate.getHours();
	var minute = currentDate.getMinutes();
	var second = currentDate.getSeconds();
	var day = (hour * 3600 + minute * 60 + second)/86400
	var precent = second / 60;
	var lat = 35.888793;
	var long = -99.063376;
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
				color(200) + " 256px," +
				color(800) + " 512px)");

	window.setInterval(function(){
		var currentDate = new Date();
		var hour = currentDate.getHours();
		var minute = currentDate.getMinutes();
		var second = currentDate.getSeconds();
		var sunHorizontal = sunLocation("sunH", lat, long)
		var sunVirtual = sunLocation("sunV", lat, long)


		var daySeconds = (hour * 3600 + minute * 60 + second)/86400
		var sunHeight = daySplit(daySeconds);
		var tint = 1 - sunHeight;
		// var light = dayLight(day)
		// console.log("color(1800) " + color(1800));

		$('Body').css("background-image",
				"-webkit-radial-gradient(" +
					sunHorizontal + "% " +
					(100 - sunVirtual) + "%" +
					", circle contain," +
					"yellow, " +
					color(80) + " 20px, " +
					color(100) + " 48px," +
					color(200) + " 256px," +
					color(800) + " 512px)");
		$('.clock').html(time(currentDate));
		console.log("sunVirtual " + sunVirtual);
		$('.clock').css("text-shadow", "3px 3px 0 #000000");

	}, 1000);
});

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
