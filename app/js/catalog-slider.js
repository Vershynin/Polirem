

$(document).ready(function () {



//TOP-SLIDER-INIT
// 	var swiper = new Swiper('.main-slider', {
// 		pagination: '.topslide-swiper-pagination',
// 		paginationClickable: true,
// 		nextButton: '.specialorder_blockslider-next',
// 		prevButton: '.specialorder_blockslider-prev',
// 		autoplay: 4650,
// 		loopedSlides: 0,
// 		slidesPerView: 1,
// 		loop: true
// 	});



	var catSlider =  {
		// when window width is <= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window width is <= 480px
		480: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		// when window width is <= 640px
		640: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		870: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		981: {
			slidesPerView: 2,
			spaceBetween: 30
		},

		1100: {
			slidesPerView: 3,
			spaceBetween: 30,
		},

		1200: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	};


	var blockSlider= new Swiper('.catalog-slider', {
		pagination: '.specialorder_swiper-pagination',
		loop: true,
		autoplay: 3650,
		loopedSlides: 0,

		spaceBetween: 0,
		slidesPerView: 4,
		nextButton: '.catalog_slider-next',
		prevButton: '.catalog_slider-prev',
		breakpoints: catSlider
		// autoHeight: true
	});


	console.log(catSlider);



});



