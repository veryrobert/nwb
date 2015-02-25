function log(event) {
	console.log(event);
}


function changeMenuPos() {

	var headerHeight 	= 	$(window).height() - 75,
	windowPos		=	$(window).scrollTop(),
	header 			= 	$('header'),
	arrowPos		= 	$('.down').offset().top,
	percentOfWin	=	Math.ceil($(window).height() / 15),
	currentArrowPos	=	arrowPos - windowPos;

	// fades arrow in and out on scroll
	if(currentArrowPos <= (arrowPos - percentOfWin)) {
		$('.down, .centered').addClass('hide');
	} else {
		$('.down, .centered').removeClass('hide');
	}

	// fixes header to top of the page
	if($(window).scrollTop() > headerHeight) {
		header.addClass('fixed');
	} else {
		header.removeClass('fixed');
	}
}



$(".down").click(function(){
		$("html,body").animate({scrollTop: $(window).height() - 75 },1000,'easeInOutCubic');
		$(".down, .inner").addClass('hide');
});


// On load effects
$(window).on('load',function(){
	// fadeInElements('.inner', 200, 500);
	fadeInElements('.down', 600, 500);
	replaceImgWithBgImg('.bg-image');

	setTimeout(function() {
	$('.loading').addClass('hidden');
	}, 100);

	setTimeout(function() {
		fadeInElements('.centered', 200, 500);
	}, 500);

	$('#banner').css({
		height: $(window).height()
	}); 

});

$(window).on('resize', function(){
	var winHeight = $(window).height();
	$('.slidesjs-container, #banner, .outer, .sliderBg').css({
		height: winHeight
	});
});

// Fade in children of inner
function fadeInElements(container, delay, duration) {
	var elements = $(container).children();
	(function theLoop (i) {
		setTimeout(function () {
			if (i < elements.length) {
				i++
				// log(i);
				theLoop(i); 
			}
			$(elements[i - 1]).addClass('show');
		}, delay);
	})(0);
}  



function replaceImgWithBgImg(elementSelector) {
  
  var winHeight = $(window).height();

  $(elementSelector).each(function(i, elem) {

    var img = $(elem);
    div = $("<div />").css({
    "background-image": "url(" + img.attr("src") + ")",
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "height": winHeight,
    "background-position": "center",
    "width" : '100%' 
  });
      
  div.html();
  div.addClass('sliderBg');
  img.replaceWith(div);

});
  
}


var a = _.throttle(function(){/*console.log('called')*/}, 500);


$(window).scroll(function(){
	a();

	changeMenuPos();

});


$(document).ready(function(){
	//log(slidesArray);
});


$(window).load(function(){

	var slidesArray = $('.swipe-wrap').children();
		
	window.arse = new Swipe(document.getElementById('slider'), {
	  startSlide: 0,
	  speed: 1000,
	  auto: 5000,
	  continuous: true,
	  disableScroll: false,
	  stopPropagation: false,
	  callback: function(index, elem) {
	  	
	  	

	  	if (index == 0) { 
	  		var prev = index + 1; 
	  	} else {
	  		var prev = index - 1;
	  	}

	  	log(index + "  " + prev);

	  },
	  transitionEnd: function(index, elem) {
	  	if (index == 0) { 
	  		var prev = index + 1; 
	  	} else {
	  		var prev = index - 1;
	  	}
		// log(slidesArray[prev]);

	  }
	});

});



