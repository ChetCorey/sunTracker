function color(point) {
  point = point / 1000;
	console.log("point " + point);
	var temp = 1000 + (9400 * point);

	var temp = temp / 100;
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
