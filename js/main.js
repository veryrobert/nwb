console.log('hello world');

function log(event) {
	console.log(event);
}


$(window).on('scroll', function(){
var headerHeight = $(window).height() - 75,
	header = $('header');
	if($(window).scrollTop() > headerHeight) {
		log('true');
		$(header).addClass('fixed');
	} else {
		$(header).removeClass('fixed');
	}
$});






$(window).on('load',function(){
	fadeInElements('.inner', 200, 500);
	fadeInElements('.down', 600, 500);
	
});


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

