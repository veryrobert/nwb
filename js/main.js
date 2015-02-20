console.log('hello world');

function log(event) {
	console.log(event);
}




$(window).on('scroll', function(){

var headerHeight 	= 	$(window).height() - 75,
	windowPos		=	$(window).scrollTop(),
	header 			= 	$('header'),
	arrowPos		= 	$('.down').offset().top,
	percentOfWin	=	Math.ceil($(window).height() / 15),
	currentArrowPos	=	arrowPos - windowPos;

	log(percentOfWin);

	// fades arrow in and out on scroll
	if(currentArrowPos <= (arrowPos - percentOfWin)) {
		$('.down, .inner').addClass('hide');
	} else {
		$('.down, .inner').removeClass('hide');
	}

	// fixes header to top of the page
	if($(window).scrollTop() > headerHeight) {
		header.addClass('fixed');
	} else {
		header.removeClass('fixed');

	}
$});



$(".down").click(function(){
		$("html,body").animate({scrollTop: $(window).height() - 75 },1500,'easeInOutCubic');
		$(".down, .inner").addClass('hide');
});


$(window).on('load',function(){
	fadeInElements('.inner', 200, 500);
	fadeInElements('.down', 600, 500);
});

// setTimeout(function(){ $('.inner').addClass('show'); }, 500);

function fadeInElements(container, delay, duration) {

	var elements = $(container).children();

	(function theLoop (i) {
		setTimeout(function () {
			if (i < elements.length) {
				i++
				log(i);
				theLoop(i); 
			}
			$(elements[i - 1]).addClass('show');
		}, delay);
	})(0);
}  

