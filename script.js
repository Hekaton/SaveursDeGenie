$(function(){


	// Fade the top bar to black when scrolling beyond 30% of the first screen by adding .dark
	$(window).on('scroll', function(e){
		var top = $("body").scrollTop();
		var isDark = top > $('#cover').first().height() * 0.3;
		$('nav').toggleClass('dark', isDark);

		$('#cover').css({"background-position-y": -top/2 + "px"})
	}).trigger('scroll');

})