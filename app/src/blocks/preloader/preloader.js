$(window).on('load', function() {
	$('.preloader')
		.find('i')
		.delay(500)
		.fadeOut(500)
		.end()
		.delay(1000)
		.fadeOut(500);
});