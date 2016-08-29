$(function(){
	"use strict";
	// Fade the top bar to black when scrolling beyond 30% of the first screen by adding .dark
	var limit =  $('nav').height();
	var sections = [];

	$('nav a').each(function(i, o){
		var href = $(o).attr("href");
		if(href[0] === '#')
			sections.push({
				tag: href,
				section: $(href),
				link: $(o),
			});
	});

	$(window).on('scroll', function(e){
		var top = window.scrollY;

		var isDark = $('#cover article').offset().top - top < limit;
		$('nav').toggleClass('dark', isDark);

		$('#cover').css("background-position", "center " + (-top/2) + "px");

		var section = null
		for(var s of sections){
			if((!s.section.length && top < window.innerHeight / 2)
			|| (s.section.length && s.section.offset().top > top - window.innerHeight/2)){
				// if we haven't scrolled more than half a page or there's a section that's beyond half a page, stop at it
				console.log(s.tag);
				$('.active').removeClass('active');
				s.link.addClass('active');
				break;
			}
		}

	}).trigger('scroll');

	$('body').on('click', 'nav a', function(e){
		var href = $(e.currentTarget).attr('href');

		if(href[0] != '#') return;

		e.preventDefault();
		var section = $(href);
		var offsetTop = section.offset()?section.offset().top:0;
		$('body').animate({
			scrollTop:offsetTop
		}, 300);
		//window.scrollTo(0, section.offset().top);
		//console.log(section.offset().top);
	});
});