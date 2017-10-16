var
	$links = $('[data-modal]'),
	classBlock = 'popup',
	classClose = classBlock + '__close',
	classVisible = classBlock + '_visible',
	classWrap = classBlock + '__wrap',
	classWrapVisible = classBlock + '__wrap_visible',
	$header = $('.header'),
	classInput = 'input';

if (!$links.length) return;

$links.each(function() {
	var
		$this = $(this),
		id = $this.attr('data-modal');

	if (!$(id).length) return;

	// Клик по кнопке, открывающей модалку
	$this.on('click', function() {

		if ($aside.hasClass(asideOpenedClass)) {
			toggleAside('close');
			setTimeout(function() {
				modal('open', id);
			}, delay / 2);
		} else {
			modal('open', id);
		}

		return false;
	});
	// =====

	// Клик по кнопке "закрыть"
	$(id).find('.' + classClose).on('click', function() {
		modal('close', id);
	});
	// =====

	// Клик по серому фону
	$(id).on('click', function(event) {
		if (!$(event.target).hasClass(classBlock)) return;
		modal('close', id);
	});
	// =====
});

// Закрытие модалки при нажатии ESC
var closeOnEsc = function(event) {
	if (event.keyCode != 27) return;

	$links.each(function() {
		var id = $(this).attr('data-modal');
		modal('close', id);
	});
};
// =====

function modal(action, id) {
	var
		$modal = $(id),
		$wrap = $modal.find('.' + classWrap);

	if (action == 'open') {
		$modal.addClass(classVisible);
		$header.css('padding-right', getScrollbarWidth());
		$toggle.css('padding-right', getScrollbarWidth());
		$toggleI.css('margin-left', -(getScrollbarWidth() / 2));

		toggleBodyScroll(true);
		$body.append('<div class="' + classFog + '"></div>');
		$('.' + classFog).fadeIn(delay * 2);

		$(document).on('keydown', closeOnEsc);

		setTimeout(function() {
			$wrap.addClass(classWrapVisible);
		}, 0);

		setTimeout(function() {
			$modal.find('.' + classInput).first().focus();
		}, delay * 2);
	}

	if (action == 'close') {
		$(document).off('keydown', closeOnEsc);
		$modal.find('.' + classInput).val('');
		$wrap.removeClass(classWrapVisible);
		$('.' + classFog).fadeOut(delay);

		setTimeout(function() {
			$toggle.css('padding-right', '');
			$toggleI.css('margin-left', '');
			$modal.removeClass(classVisible);
			toggleBodyScroll(false);
			$('.' + classFog).remove();
			$header.css('padding-right', '');
		}, delay);
	}
}
/* ========== */
