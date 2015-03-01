$( document ).ready(function() {
	var currentDate = new Date();
	var hour = currentDate.getHours();
	var minute = currentDate.getMinutes();
	var second = currentDate.getSeconds();
	var day = (hour * 3600 + minute * 60 + second)/86400
	var precent = second / 60;
	$('.clock').html(time());
	$('Body').css("background-color", color(day));
	$('.filter').animate({opacity: 0 }, 1000);
	$('.clock').animate({opacity: 1 }, 1000);

	window.setInterval(function(){
		var currentDate = new Date();
		var hour = currentDate.getHours();
		var minute = currentDate.getMinutes();
		var second = currentDate.getSeconds();

		var day = (hour * 3600 + minute * 60 + second)/86400
		console.log('day split ' + daySplit(day));
		var precent = second / 60;

		console.log('>>>>>>>>>>>>' + color(day));
		$('Body').css("background-color", color(day));
		$('.clock').html(time());

	}, 1000);
});

function daySplit(day){
		if (day > 0.5) {return ((1 - day).toFixed(3) * 2)}
		else {return (day.toFixed(3) * 2)}
}

function time() {
	var currentDate = new Date();
	var hour = currentDate.getHours();
	var minute = currentDate.getMinutes();
		minute = spacing(minute);
	var second = currentDate.getSeconds();
		second = spacing(second);
	var t = second;

	var time = "<p>" + (hour % 12) + ":" + minute + ":" + second + " " + ampm(hour) + "</p>";
	// console.log(time);
	return time;
};

function spacing(unit) {
	if (unit < 10) {
		return unit = "0" + unit;
	}
	else {
		return unit
	}
}

function ampm(hour) {if (hour > 12) {return "PM"}	else {return "AM"}};

// function backgroundColor(time, long, lat) {};

function light(precent) {
	var brightness = 1 - precent
	var tint = "rgba(0,0,0," + brightness + ")";
	return tint;
}

function color(point) {
	console.log("point " + point);
	var temp = 1000 + (9400 * point);

	var temp = temp / 100;
	console.log(temp);
	// Calculate Red:
	if (temp <= 66) {
		var red = 255
	}
	else {
		var red = temp - 60;
		red = 329.698727446 * (Math.pow(red, -0.1332047592));
		red = Math.floor(red);
		if (red < 0) {red = 0};
		if (red > 255) {red = 255};
	}

	// Calculate Green:
	if (temp <= 66) {
		var green = temp;
		green = 99.4708025861 * Math.log(green) - 161.1195681661;
		green = Math.floor(green);
		if (green < 0) { green = 0};
		if (green > 255) { green = 255};
	}
	else {
		var green = temp - 60;
		green = 288.1221695283 * (Math.pow(green, -0.0755148492));
		green = Math.floor(green);
		if (green < 0) { green = 0};
		if (green > 255) { green = 255};
	}

	// Calculate Blue:
	if (temp >= 66) {
		var blue = 255;
	}
	else {
		if (temp <= 19) {
			var blue = 0;
		}
		else {
			var blue = temp - 10;
			blue = 138.5177312231 * Math.log(blue) - 305.0447927307;
			blue = Math.floor(blue);
			if (blue < 0) {blue = 0};
			if (blue > 255) {blue = 255};
		}
	}
	var colorTemp = "rgb(" + red + "," + green + "," + blue + ")";
	return colorTemp;
}
