$(function() {
	@@include('global/global.js')

	(function() {
		@@include('blocks/toggle/toggle.js')
		@@include('blocks/aside/aside.js')
		@@include('blocks/popup/popup.js')
	}());

	(function() { @@include('blocks/input/input.js') }());
});

(function() { @@include('blocks/preloader/preloader.js') }());
(function() { @@include('blocks/wow.js') }());

@@include('global/functions.js')