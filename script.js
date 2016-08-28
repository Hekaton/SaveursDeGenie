$(function(){


	// Fade the top bar to black when scrolling beyond 30% of the first screen by adding .dark
	$(window).on('scroll', function(e){
		var isDark = $("body").scrollTop() > $('section').first().height() * 0.3;
		$('nav').toggleClass('dark', isDark);
	}).trigger('scroll');

})