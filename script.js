$(function(){
	// Fade the top bar to black when scrolling beyond 30% of the first screen by adding .dark
	var limit =  $('nav').height();
	$(window).on('scroll', function(e){
		var top = window.scrollY;

		var isDark = $('#cover article').offset().top - top < limit;
		$('nav').toggleClass('dark', isDark);

		$('#cover').css("background-position", "0 " + (-top/2) + "px");
	}).trigger('scroll');

})