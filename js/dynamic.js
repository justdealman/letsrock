$(document).ready(function() {
	var tabs = $('.wrapper');
	tabs.hide().filter(':first').show();
	$('a.page').click(function () {
		tabs.show().addClass('animate').fadeOut(250);
		tabs.filter(this.hash).removeClass('animate').fadeIn(1000);
	});
	$('.popup').append('<span class="close"></span>');
	var popupheight = $('.popup').height()/2;
	$('.popup').css({'top': -popupheight+'px', 'margin-top':  -popupheight+'px'});
	$('.panel .order a').click(function() {
		$('.fade').fadeIn(500);
		$('.popup').animate({'top': '50%'}, 500, 'easeOutCirc');
		return false;
	});
	$('.popup .close').click(function() {
		$('.fade').stop(true, true).fadeOut(500);
		$('.popup').stop(true, true).animate({'top': -popupheight+'px'}, 500, 'easeInCirc');
		return false;
	});
	$(this).keydown(function(eventObject){
		if (eventObject.which == 27)
		$('.fade').stop(true, true).fadeOut(500);
		$('.popup').stop(true, true).animate({'top': -popupheight+'px'}, 500, 'easeInCirc');
	});
	$('.slider').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuint',
		autoHeight: true,
		autoHeightSpeed: 0,
		play: 0,
		animationComplete: function() {
			var height = $('.slider .container > div > div .picture img:visible').height()+80;
			$('.slider, .slider .container').css({'min-height': height+'px'});
        }
	});
	$('.slider .container > div > div').each(function() {
		var height = $(this).height();
		$(this).parents('.slider, .container').height(height);
		var tabs = $(this).find('.picture img');
		$(this).find('.information ul li a').click(function () {
			tabs.hide();
			tabs.filter(this.hash).stop(true, true).fadeIn(0);
			$(this).parents('.information').find('ul li').removeClass('active');
			$(this).parent().addClass('active');
			var height = $(this).parents('.information').parent().height();
			$(this).parents('.slider, .container').height(height);
			return false;
		}).filter(':first').click();
	});
	$('.list ul li').prepend('<span></span>');
	$('.wrapper').each(function () {
		$(this).find('.panel .city strong.barnaul').css({'display':'block'});
		$(this).find('.panel .city span#barnaul').addClass('active');
		$(this).find('.panel .city span').click(function () {
			var city = $(this).attr('id');
			$(this).parents('.wrapper').find('.panel .city strong').hide();
			$(this).parents('.wrapper').find('.panel .city').find('strong.' + city).css({'display':'block'});
			$(this).parents('.wrapper').find('.panel .city span').removeClass('active');
			$(this).addClass('active');
		});
	});	
	$('.list ul li').hover(
		function () {
			$(this).find('p').stop(true, true).fadeIn(300);
		},
		function () {
			$(this).find('p').fadeOut(300);
		}
	);
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
});