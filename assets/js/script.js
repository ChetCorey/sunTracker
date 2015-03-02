$( document ).ready(function() {
	var currentDate = new Date();
	var hour = currentDate.getHours();
	var minute = currentDate.getMinutes();
	var second = currentDate.getSeconds();
	var day = (hour * 3600 + minute * 60 + second)/86400
	var precent = second / 60;
	var lat = 35.888793;
	var long = -79.063376;
	var now = new Date();

	console.log("now " + now);
	$('.clock').html(time(now));
	$('.filter').animate({opacity: 0 }, 1000);
	$('.clock').animate({opacity: 1 }, 1000);

console.log("sunLocation(sunV) " + sunLocation("sunV", lat, long))
	$('Body').css("background-image",
			"-webkit-radial-gradient(" +
				sunLocation("sunH", lat, long) + " " +
				sunLocation("sunV", lat, long) +
				", circle contain," +
				"yellow, " +
				color(90) + " 10px, " +
				color(200) + " 48px," +
				color(1000) + " 256%," +
				color(1700) + " 512px");

	window.setInterval(function(){
		var currentDate = new Date();
		var hour = currentDate.getHours();
		var minute = currentDate.getMinutes();
		var second = currentDate.getSeconds();

		var daySeconds = (hour * 3600 + minute * 60 + second)/86400
		var sunHeight = daySplit(daySeconds);
		var tint = 1 - sunHeight;
		// var light = dayLight(day)
		// console.log("color(2000) " + color(2000));

		$('Body').css("background-image",
				"-webkit-radial-gradient(" +
				sunLocation("sunH", lat, long) + " " +
				sunLocation("sunV", lat, long) +
					", circle contain," +
					"yellow, " +
					color(90) + " 10px, " +
					color(200) + " 48px," +
					color(1000) + " 256%," +
					color(1700) + " 512px");
		// $('.filter').css("opacity", tint);
		$('.clock').html(time(now));
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
