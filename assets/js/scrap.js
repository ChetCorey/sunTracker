
// function toDegrees(angle) {
//   return angle * (180 / Math.PI);
// }
//
// function toRadians (angle) {
//   return angle * (Math.PI / 180);
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
