$( document ).ready(function() {
	var currentDate = new Date();
	var hour = currentDate.getHours();
	var minute = currentDate.getMinutes();
	var second = currentDate.getSeconds();
	var day = (hour * 3600 + minute * 60 + second)/86400
	var precent = second / 60;
	var lat = 35.888793;
	var long = -79.063376;
	$('.clock').html(time());
	$('Body').css("background-color", color(day));
	$('.filter').animate({opacity: 0 }, 1000);
	$('.clock').animate({opacity: 1 }, 1000);
	// sunrise(currentDate, lat, long)

	window.setInterval(function(){
		var currentDate = new Date();
		var hour = currentDate.getHours();
		var minute = currentDate.getMinutes();
		var second = currentDate.getSeconds();

		var daySeconds = (hour * 3600 + minute * 60 + second)/86400
		var sunHeight = daySplit(daySeconds);
		var tint = 1 - sunHeight;
		var light = dayLight(day)

		var lat = 35.88;
		var long = -79;
		var times = SunCalc.getTimes(new Date(), lat, long);
		var sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
		console.log(sunriseStr);


		$('Body').css("background-image",  "-webkit-radial-gradient(" + sunHorizontal + " " + sunVertical + ", circle contain, white 1px, yellow 10px, " + color(sunHeight) + " 30px");
		$('.filter').css("opacity", tint);
		$('.clock').html(time());
	}, 1000);
});

function sunLocation(date) {

	var sunHorizontal = 50%;
	var sunVertical = 1%;
}

// function toDegrees(angle) {
//   return angle * (180 / Math.PI);
// }
//
// function toRadians (angle) {
//   return angle * (Math.PI / 180);
// }
//
// // console.log(day, "sunrise", lat, long);
// function computeSunrise(day, sunrise, lat, long) {
//
//     /*Sunrise/Sunset Algorithm taken from
//         http://williams.best.vwh.net/sunrise_sunset_algorithm.htm
//         inputs:
//             day = day of the year
//             sunrise = true for sunrise, false for sunset
//         output:
//             time of sunrise/sunset in hours */
//
//     //lat, lon for Berlin, Germany
//     var longitude = long;
//     var latitude = lat;
//     var zenith = 90.83333333333333;
//     var D2R = Math.PI / 180;
//     var R2D = 180 / Math.PI;
//
//     // convert the longitude to hour value and calculate an approximate time
//     var lnHour = longitude / 15;
//     var t;
//     if (sunrise) {
//         t = day + ((6 - lnHour) / 24);
//     } else {
//         t = day + ((18 - lnHour) / 24);
//     };
//
//     //calculate the Sun's mean anomaly
//     M = (0.9856 * t) - 3.289;
//
//     //calculate the Sun's true longitude
//     L = M + (1.916 * Math.sin(M * D2R)) + (0.020 * Math.sin(2 * M * D2R)) + 282.634;
//     if (L > 360) {
//         L = L - 360;
//     } else if (L < 0) {
//         L = L + 360;
//     };
//
//     //calculate the Sun's right ascension
//     RA = R2D * Math.atan(0.91764 * Math.tan(L * D2R));
//     if (RA > 360) {
//         RA = RA - 360;
//     } else if (RA < 0) {
//         RA = RA + 360;
//     };
//
//     //right ascension value needs to be in the same qua
//     Lquadrant = (Math.floor(L / (90))) * 90;
//     RAquadrant = (Math.floor(RA / 90)) * 90;
//     RA = RA + (Lquadrant - RAquadrant);
//
//     //right ascension value needs to be converted into hours
//     RA = RA / 15;
//
//     //calculate the Sun's declination
//     sinDec = 0.39782 * Math.sin(L * D2R);
//     cosDec = Math.cos(Math.asin(sinDec));
//
//     //calculate the Sun's local hour angle
//     cosH = (Math.cos(zenith * D2R) - (sinDec * Math.sin(latitude * D2R))) / (cosDec * Math.cos(latitude * D2R));
//     var H;
//     if (sunrise) {
//         H = 360 - R2D * Math.acos(cosH)
//     } else {
//         H = R2D * Math.acos(cosH)
//     };
//     H = H / 15;
//
//     //calculate local mean time of rising/setting
//     T = H + RA - (0.06571 * t) - 6.622;
//
//     //adjust back to UTC
//     UT = T - lnHour;
//     if (UT > 24) {
//         UT = UT - 24;
//     } else if (UT < 0) {
//         UT = UT + 24;
//     }
//
//     //convert UT value to local time zone of latitude/longitude
//     localT = UT + 1;
//
//     //convert to Milliseconds
//     return localT * 3600 * 1000;
// }

// function sunrise(date, lat, long) {
// 	var day = date.getDay() + 1;
// 	var month = date.getMonth() + 1;
// 	var year = date.getFullYear();
//
// 	// day of the year
// 	var n1 = Math.floor((275 * month) / 9);
// 	var n2 = Math.floor((month + 9) / 12);
// 	var n3 = (1 + Math.floor((year - 4 * Math.floor(year / 4) + 2) / 3));
// 	var daysIntoYear = n1 - (n2 * n3) + day - 30;
//
// 	// convert the longitude to hour value and calculate an approximate time
// 	function approxSunTime(riseOrSet) {
// 		var lngHour = long / 15;
// 		if (riseOrSet == 'rise') {return (daysIntoYear + ((6 - lngHour) / 24))};
// 		if (riseOrSet == 'set') {return (t = daysIntoYear + ((18 - lngHour) / 24))};
// 	}
// 	var sunrise = approxSunTime('rise');
// 	var sunset = approxSunTime('set');
//
// 	// calculate the Sun's mean anomaly
// 	var sunMean = (0.9856 * sunrise) - 3.289;
//
// 	// calculate the Sun's true longitude
// 	function sunLng() {
// 		var snLng = sunMean + (1.916 * Math.sin(toDegrees(sunMean))) + (0.020 * Math.sin(toDegrees(2 * sunMean))) + 282.634;
// 		if (snLng > 180) {return (snLng - 360)}
// 		else {return snLong}
// 	}
// 	var sunLong = sunLng();
//
// 	// 5a. calculate the Sun's right ascension
// 	var rtAscension = Math.atan(toDegrees(0.91764 * Math.tan(toDegrees(sunLong))));
//
// 	// 5b. right ascension value needs to be in the same quadrant as L
// 	var leftQuad = (Math.floor(sunLong/90) * 90);
// 	var rightQuad = (Math.floor(rtAscension/90) * 90);
// 	rtAscension = rtAscension + (leftQuad - rightQuad);
//
// 	// 5c. right ascension value needs to be converted into hours
// 	rtAscension = rtAscension / 15;
//
// 	// 6. calculate the Sun's declination
// 	var sunLongRad = toRadians(sunLong);
// 	var	sinDec = 0.39782 * Math.sin((sunLongRad));
// 	var cosDec = Math.cos(Math.asin((sinDec)));
// 	console.log("cosDec " + cosDec);
//
// 	// 7a. calculate the Sun's local hour angle
// 	var	cosH = (Math.cos(zenith) - (sinDec * Math.sin(toDegrees(lat)))) / (cosDec * Math.cos(toDegrees(lat)))
//
// 		if (cosH >  1)
// 		  the sun never rises on this location (on the specified date)
// 		if (cosH < -1)
// 		  the sun never sets on this location (on the specified date)

// 7b. finish calculating H and convert into hours
//
// 	if if rising time is desired:
// 	  H = 360 - acos(cosH)
// 	if setting time is desired:
// 	  H = acos(cosH)
//
// 	H = H / 15
//
// 8. calculate local mean time of rising/setting
//
// 	T = H + RA - (0.06571 * t) - 6.622
//
// 9. adjust back to UTC
//
// 	UT = T - lngHour
// 	NOTE: UT potentially needs to be adjusted into the range [0,24) by adding/subtracting 24
//
// 10. convert UT value to local time zone of latitude/longitude
//
// 	localT = UT + localOffset
// }

function dayLight(day) {
	var lt = Math.sin(day * 2 * Math.PI)
	if (lt < 0) {return 0}
	else {return lt}
}

function daySplit(day){
	if (day > 0.5) {return ((1 - day).toFixed(3) * 2)}
	else {return (day.toFixed(3) * 2)}
}

function time() {
	var currentDate = new Date();
	var hour = currentDate.getHours();
	var hour12 = (hour % 12);
		if (hour12 == 0) {hour12 = 12};
	var minute = currentDate.getMinutes();
		minute = spacing(minute);
	var second = currentDate.getSeconds();
		second = spacing(second);
	var t = second;

	var time = "<p>" + (hour12) + ":" + minute + ":" + second + " " + ampm(hour) + "</p>";
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
