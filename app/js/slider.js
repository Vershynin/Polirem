// $(document).ready(function(){
// 	// // Инициализирует карусель
// 	// $(".start-slide").click(function(){
// 	//     $("#myCarousel2").carousel('cycle');
// 	// });
// 	// // Останавливает процесс автоматической смены слайдов карусели
// 	// $(".pause-slide").click(function(){
// 	//     $("#myCarousel2").carousel('pause');
// 	// });
// 	// // Осуществляет переход на предыдущий слайд
// 	// $(".prev-slide").click(function(){
// 	//     $("#myCarousel2").carousel('prev');
// 	// });
// 	// // Осуществляет переход на следующий слайд
// 	// $(".next-slide").click(function(){
// 	//     $("#myCarousel2").carousel('next');
// 	// });
// 	// // Осуществляет переход на 0 слайд карусели
// 	// $(".slide-one").click(function(){
// 	//     $("#myCarousel2").carousel(0);
// 	// });
// 	// // Осуществляет переход на 1 слайд карусели
// 	// $(".slide-two").click(function(){
// 	//     $("#myCarousel2").carousel(1);
// 	// });
// 	// // Осуществляет переход на 2 слайд карусели
// 	// $(".slide-three").click(function(){
// 	//     $("#myCarousel2").carousel(2);
//
// 	// });
//
//
// 	// var max_col_height = 0; // максимальная высота, первоначально 0
// 	// $('.blockslider-height').each(function(){ // цикл "для каждой из колонок"
// 	//     if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
// 	//         max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
// 	//     }
// 	// });
// 	// $('.blockslider-height').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
// });
//
//
//
// // $(".carousel").swipe({
// //
// //     swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
// //
// //         if (direction == 'left') $(this).carousel('next');
// //         if (direction == 'right') $(this).carousel('prev');
// //
// //     },
// //     allowPageScroll:"vertical"
// //
// // });
//
//
//
// //QUANTITY-SLIDER---------------------------------------------------------------------------
//
// $(document).ready(function(){
// 	jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.quantity input');
//
// 	(function( d ){
// 		var $inputs = d.querySelectorAll('.quantity');
//
// 		(function( inputs ){
// 			for (var i = 0; i < inputs.length; i++) {
// 				inputs[i] && inputs[i].addEventListener('click', function( e ){
// 					e.preventDefault();
// 					var target = e.target,
// 						input = this.getElementsByTagName('INPUT')[0],
// 						min = input.getAttribute('min'),
// 						max = input.getAttribute('max');
//
// 					if ( target.classList.contains('quantity-up') ) {
// 						var oldValue = parseInt(input.value);
// 						if (oldValue >= max) {
// 							var newVal = oldValue;
// 						} else {
// 							var newVal = oldValue + 1;
// 						}
// 						input.value = newVal;
// 					}
// 					if ( target.classList.contains('quantity-down') ) {
// 						var oldValue = parseInt(input.value);
// 						if (oldValue <= min) {
// 							var newVal = oldValue;
// 						} else {
// 							var newVal = oldValue - 1;
// 						}
// 						input.value = newVal;
// 					}
//
// 					//console.log( input.value );
// 					// input.setAttribute('value', input.value);
// 					//console.log( input.getAttribute('value') );
// 					return false;
// 				});
// 			}
// 		})($inputs);
// 	})(document)
// });
//
//
// (function (d) {
// 	var $elements = document.querySelectorAll('.product-layout, .proditem, #product, .relatedproducts');
//
// 	for (var i = 0; i < $elements.length; i++) {
// 		$elements[i] && $elements[i].addEventListener('click', function (e) {
// 			var target = e.target;
//
// 			if ( target.classList.contains('item_tocart') || target.classList.contains('oneitem_tocart') || target.classList.contains('relatedproducts_tocart') ) {
// 				e.preventDefault();
// 				var id = this.getAttribute('data-id'),
// 					quantity = this.querySelector('.quantity input:first-child').value;
//
// 				//console.log(id, quantity);
// 				$.ajax({
// 					url: 'index.php?route=checkout/cart/add',
// 					type: 'post',
// 					data: {
// 						quantity: quantity,
// 						product_id: id
// 					},
// 					dataType: 'json',
// 					/*beforeSend: function () {
// 					 $(".item_tocart").button('loading');
// 					 },
// 					 complete: function () {
// 					 $(".item_tocart").button('reset');
// 					 },*/
// 					success: function (json) {
// 						$('.alert, .text-danger').remove();
// 						$('.form-group').removeClass('has-error');
//
// 						$('#cart > .cart_header').addClass('in_cart');
//
// 						if (json['error']) {
// 							if (json['error']['option']) {
// 								for (i in json['error']['option']) {
// 									var element = $('#input-option' + i.replace('_', '-'));
//
// 									if (element.parent().hasClass('input-group')) {
// 										element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
// 									} else {
// 										element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
// 									}
// 								}
// 							}
// 							if (json['error']['recurring']) {
// 								$('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
// 							}
//
// 							// Highlight any found errors
// 							$('.text-danger').parent().addClass('has-error');
// 						}
// 						if (json['redirect']) {
// 							location = json['redirect'];
// 						}
// 						if (json['success']) {
// 							$('.special_order').before('<div class="alert alert-success">' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');
//
// 							$('#cart > .cart_header').html('<span class="on_cart">' + json['total'] + '</span>' + ' ' + json['text_cart'] );
// 						}
// 					},
// 					error: function (xhr, ajaxOptions, thrownError) {
// 						alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
// 					}
// 				});
// 				return false;
// 			}
// 		});
// 	}
//
// })(document);

//------------------------------------------------------------------------------------------



//SELECT-TOP---------------------------------------------------------------------------------

// $(document).ready(function () {
//     $(".btn-select").each(function (e) {
//         var value = $(this).find("ul li.selected").html();
//         if (value != undefined) {
//             $(this).find(".btn-select-input").val(value);
//             $(this).find(".btn-select-value").html(value);
//         }
//     });
// });

// $(document).on('click', '.btn-select', function (e) {
//     e.preventDefault();
//     var ul = $(this).find("ul");
//     if ($(this).hasClass("active")) {
//         if (ul.find("li").is(e.target)) {
//             var target = $(e.target);
//             target.addClass("selected").siblings().removeClass("selected");
//             var value = target.html();
//             $(this).find(".btn-select-input").val(value);
//             $(this).find(".btn-select-value").html(value);
//         }
//         ul.hide();
//         $(this).removeClass("active");
//     }
//     else {
//         $('.btn-select').not(this).each(function () {
//             $(this).removeClass("active").find("ul").hide();
//         });
//         ul.slideDown(300);
//         $(this).addClass("active");
//     }
// });

// $(document).on('click', function (e) {
//     var target = $(e.target).closest(".btn-select");
//     if (!target.length) {
//         $(".btn-select").removeClass("active").find("ul").hide();
//     }
// });


//--->/SELECT-TOP---------------------------------------------------------------------------------

$(document).ready(function () {



//TOP-SLIDER-INIT
	var swiper = new Swiper('.main-slider', {
		pagination: '.topslide-swiper-pagination',
		paginationClickable: true,
		nextButton: '.specialorder_blockslider-next',
		prevButton: '.specialorder_blockslider-prev',
		autoplay: 4650,
		loopedSlides: 0,
		slidesPerView: 1,
		loop: true
	});

	//$('.activeSlide').html(tabsSwiper_Lazer.activeLoopIndex+1); //+1 because this start in 0
	//$('.sizeSlides').html(tabsSwiper_Lazer.slides.length-3); //-2 because loop mode add 2 more slides



	//var realIndex = swiper.slides.eq(swiper.activeIndex).attr('data-swiper-slide-index');

	//console.log(realIndex);



});


// $(document).ready(function(){
//
//
// 	(function( d ){
// 		var $inputs = d.querySelectorAll('.quantity');
//
//
// 	})(document)
// });


