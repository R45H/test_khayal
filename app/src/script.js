$(function() {
	@@include('global/global.js')

	(function() {
		@@include('blocks/toggle/toggle.js')
		@@include('blocks/aside/aside.js')
		@@include('blocks/popup/popup.js')
	}());

	(function() { @@include('blocks/input/input.js') }());
});

@@include('global/functions.js')