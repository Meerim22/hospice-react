import $ from "jquery";

$(function () {

	$('.medical-programs__inner__blocks').slick({
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
	})

});
$(function () {

	$('.blc_our-kids__inner__blocks').slick({
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
	})

});

$(document).ready(function () {
	$('.blc_spoonsors__inner__slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 900,
		responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});

