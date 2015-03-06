// this is a sky color generator
// the tempature range is from 0 to 2200

function color(point) {
	var temp = point;

	// Calculate Red:
	if (temp <= 66) {
		var red = 255
	}
	else {
		var red = Math.floor(330 * (Math.pow(temp, -0.133)));
		if (red < 0) {red = 0};
		if (red > 255) {red = 255};

    var dimRed = Math.floor((330 * (Math.pow(temp, -0.133))) - (-100 * Math.cos(temp/1000) + 100));
    if (dimRed < 0) {dimRed = 0};
		if (dimRed > 255) {dimRed = 255};
    if (temp > 2000) {dimRed = 0};
	}

	// Calculate Green:
	if (temp <= 66) {
		var green = temp;
		green = 99.5 * Math.log(green) - 161;
		green = Math.floor(green);
		if (green < 0) { green = 0};
		if (green > 255) { green = 255};
	}
	else {
    var green = Math.floor((288 * (Math.pow(temp, -0.075))));
		if (green < 0) { green = 0};
		if (green > 255) { green = 255};

    var dimGreen = Math.floor((288 * (Math.pow(temp, -0.075))) - (-100 * Math.cos(temp/1000) + 100));
    if (dimGreen < 0) { dimGreen = 0};
		if (dimGreen > 255) { dimGreen = 255};
    if (temp > 2000) {dimGreen = 0};
	}

  // Calculate Blue:
	if (temp <= 19) {
		var blue = 0;
	}
	else {
		var blue = Math.floor(138.5 * Math.log(temp) - 305);
		if (blue < 0) {blue = 0};
		if (blue > 255) {blue = 255};

    var dimBlue = Math.floor((139 * Math.log(temp)) - (-500 * Math.cos(temp/1000) + 800));
    if (dimBlue < 0) {dimBlue = 0};
		if (dimBlue > 255) {dimBlue = 255};
    if (temp > 2200) {dimBlue = 0};
	}

var colorTemp = "rgb(" + dimRed + "," + dimGreen + "," + dimBlue + ")";
return colorTemp;
}
