function slideThumb(d) {
	var currS = $("ul").scrollLeft(); //current scroll value
	var vW = 200; //item width
	$('ul').animate({
		scrollLeft: d == 0 ? (currS - vW) : (currS + vW)
	}, 400, function () {
	});		
}
