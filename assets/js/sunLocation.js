function sunLocation(direction, lat, long) {
	var times = SunCalc.getTimes(new Date(), lat, long);
	var lightTime = (times.sunset.getTime() - times.sunrise.getTime());
  var now =  Date.now();
  var sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();

  var timeSinceSunrise = (now - times.sunrise.getTime());
  var preTimeSinceSunrise = ((timeSinceSunrise/lightTime) * 100).toFixed(1);
  // console.log("times.sunrise.getTime() " + times.sunrise.getTime());
  // console.log("now " + now);
  // console.log("lightTime " + lightTime);

	var precentLt = (lightTime/864000).toFixed(1);
	var sunrisePos = SunCalc.getPosition(times.sunrise, lat, long);
	var sunriseAzimuth = sunrisePos.azimuth * 180 / Math.PI;

	var sunH = preTimeSinceSunrise;
	var sunV = sunVertical(preTimeSinceSunrise);
  console.log("sunH " + sunH);

	if (direction == "sunH") { return sunH};
	if (direction == "sunV") { return sunV};
}

function sunVertical(sunHorizontal) {
  if (sunHorizontal < 0) {var sunHorizontal = -sunHorizontal};
  if (sunHorizontal > 100) {var sunHorizontal = 200 - (sunHorizontal % 200)};
  var precentTop = 1;
  var sunVar = Math.sqrt(Math.pow(((2 * sunHorizontal/100) - 1) * precentTop, 2));
  return sunVar.toFixed(3) * 100;
}
