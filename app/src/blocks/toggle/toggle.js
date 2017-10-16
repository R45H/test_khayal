var
	$toggle = $('.toggle'),
	$toggleI = $toggle.find('.toggle__i'),
	activeClass = 'toggle_opened';

/* Анимация гамбургера при клике */
$toggle.on('click', function() {
	$(this).toggleClass(activeClass);
});
/* ===== */

/* Возврат гамбургера в исходное состояние при ресайзе */
$(window).on('resize', function() {

	if (window.innerWidth > 575) {
		$toggle.removeClass(activeClass);
	}
});
/* ===== */