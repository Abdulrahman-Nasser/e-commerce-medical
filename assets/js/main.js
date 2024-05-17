
$(function () {

	$('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
	$('.collapse').on('show.bs.collapse', function () {
		$(this).closest('.accordion-item').addClass('active');
	});

	$('.collapse').on('hidden.bs.collapse', function () {
		$(this).closest('.accordion-item').removeClass('active');
	});
});



// typed js
var typed = new Typed('#element', {
	strings: ['Welcome again to our stock !', 'We are happy to join us again' , 'Enjoy my Friend ..'],
	typeSpeed: 50,
	loop: true,
	loopCount: Infinity,
});


