function portfolioheight() {
	var rh = $('.slider .information').height();
	var height = $('.slider .container > div > div .picture img:visible').height()+80;
	if ( height > rh ) {
		$('.slider, .slider .container').css({'min-height': height+'px'});
	}
	else {
		$('.slider, .slider .container').css({'min-height': rh+'px'});
	}
}
$(document).ready(function() {
	var tabs = $('.wrapper');
	tabs.hide().filter(':first').show();
	$('a.page').click(function () {
		tabs.show().addClass('animate').fadeOut(250);
		tabs.filter(this.hash).removeClass('animate').fadeIn(1000);
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
			portfolioheight();
        }
	});
	portfolioheight();
	$('.bubble > div').append('<span class="arrow"></span>');
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
	$('.development .request .information').append('<span></span>');
	$('.greatsuccess .description ul li > div').append('<span></span>');
	$('.greatsuccess .about .gallery').each(function() {
		var size = $(this).find('div img').size();
		$(this).append('<ul></ul>');
		for ( var i = 1; i < size+1; i++ ) {
			$(this).find('ul').append('<li><a href="#"></a></li>');
		}
		$(this).find('div img:first').fadeIn(0);
		$(this).find('ul li:first').addClass('active');
	});
	$('.greatsuccess .about .gallery ul li a').bind('click', function() {
		var current = $(this).parent().index()+1;
		$(this).parents('.gallery').find('div img').hide();
		$(this).parents('.gallery').find('div img:nth-child('+current+')').show();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		return false;
	});
	$('.soldiers > div').slides({
		generatePagination: true,
		generateNextPrev: false,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuint',
		play: 0
	});
	$('.greatsuccess > div').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuint',
		play: 0
	});
	$('.advantages2 ul li .front > p').each(function() {
		if ( $(this).height() == 60 ) {
			$(this).css({'margin-top': '-9px'});
		}
	});
	$('.soldiers > div > div > div').append('<span></span>');
	$('.greatsuccess > div .next').text('Следующая история');
	var gt = $('.greatsuccess').position().top-22;
	$('.greatsuccess > div .next').click(function() {
		$('.wrapper').animate({scrollTop:gt}, 500);
		return false;
	});
	$('.greatsuccess').each(function() {
		$(this).children().children().filter(':first').show();
	});
	$('.greatsuccess .about .options p.next a').bind('click', function() {
		if ( $(this).parents('.greatsuccess').children().children().filter(':visible').next().length > 0 ) {
			$(this).parents('.greatsuccess').children().children().filter(':visible').hide().next().show();
		}
		else {
			$(this).parents('.greatsuccess').children().children().filter(':visible').hide();
			$(this).parents('.greatsuccess').children().children().filter(':first').show();
		}
		return false;
	});
	$('.modal').append('<span class="close"></span>');
	$('.modal').each(function() {
		var mh = ($(this).height()+39)/2;
		$(this).css({'margin-top': -mh+'px'});
	})
	
	$('.panel .order a').click(function() {
		$('.modal, .fade').fadeIn(250);
		return false;
	});
	$('.modal .close').click(function() {
		$(this).parent().fadeOut(250);
		$('.fade').fadeOut(250);
		return false;
	});
	$('.fade').click(function() {
		$('.fade, .modal').fadeOut(250);
		return false;
	});
	$(this).keydown(function(eventObject){
		if (eventObject.which == 27) {
			$('.fade, .modal').fadeOut(250);
		}
	});
});