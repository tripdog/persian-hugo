// Preloader js    
$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

(function ($) {
	'use strict';


	//  Search Form Open
	$('#searchOpen').on('click', function () {
		$('.search-wrapper').addClass('open');
		setTimeout(function () {
			$('.search-box').focus();
		}, 400);
	});
	$('#searchClose').on('click', function () {
		$('.search-wrapper').removeClass('open');
	});

})(jQuery);

const handleSubmit = (e) => {
	e.preventDefault()
	let myForm = document.getElementById('contForm');
	let formData = new FormData(myForm)
	fetch('/', {
		method: 'POST',
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams(formData).toString()
	}).then(() => console.log('Form successfully submitted')).catch((error) =>
		alert(error))
}