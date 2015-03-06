function time(current) {
	var hour = current.getHours();
	var hour12 = (hour % 12);
		if (hour12 == 0) {hour12 = 12};
	var minute = current.getMinutes();
		minute = spacing(minute);
	var second = current.getSeconds();
		second = spacing(second);
	var t = second;

	var time = "<p>" + (hour12) + ":" + minute + ":" + second + " " + ampm(hour) + "</p>";
	return time;
};

function ampm(hour) {if (hour > 12) {return "PM"}	else {return "AM"}};
