function sunLocation(direction, lat, long) {
  var now =  Date.now();

	var times = SunCalc.getTimes(new Date(), lat, long);
	var sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
	var lightTime = (times.sunset.getTime() - times.sunrise.getTime());

  var timeSinceSunrise = (now - times.sunrise.getTime());
  var preTimeSinceSunrise = ((timeSinceSunrise/lightTime) * 100).toFixed(1);

	var precentLt = (lightTime/864000).toFixed(1);
	var sunrisePos = SunCalc.getPosition(times.sunrise, lat, long);
	var sunriseAzimuth = sunrisePos.azimuth * 180 / Math.PI;

	var sunH = preTimeSinceSunrise;
	var sunV = sunVertical(preTimeSinceSunrise);
	if (direction == "sunH") { return sunH};
	if (direction == "sunV") { return sunV};
}

function sunVertical(sunHorizontal) {
  var precentTop = 1.2;
  var sunVar = Math.sqrt(1 - Math.pow(((2 * sunHorizontal/100) - 1) * precentTop, 2));
  return (sunVar * 100);
}
