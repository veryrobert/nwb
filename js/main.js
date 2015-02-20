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


// On load effects
$(window).on('load',function(){
	fadeInElements('.inner', 200, 500);
	fadeInElements('.down', 600, 500);
	replaceImgWithBgImg('.slide > img'); 

});

$(window).on('resize', function(){

	log('working');

	var winHeight = $(window).height();

	// $('#slides').css({
	// 	height: winHeight
	// });

	$('.slidesjs-container').css({
		height: winHeight
		
	});

	// $('.sliderBg').css({
	// 	height: winHeight
	// });

});

// Fade in children of inner
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



// Slide Show function
$(function() {
  $('#slides').slidesjs({
     navigation: {
          effect: "fade"
        },
        pagination: {
          effect: "fade"
        },
        effect: {
          fade: {
            speed: 500
          }
        },
         callback: {
          start: function(number) {
              $('h2').fadeOut();
          },
          complete: function(number) {
          // Use your browser console to view log
          console.log('SlidesJS: Animation Complete. Current slide is #' + number);
          // Change slide number on animation complete
          $('#slidesjs-log .slidesjs-slide-number').text(number);
          $('h2').fadeIn();
      }
    }
  });
});


function replaceImgWithBgImg(elementSelector) {
  
  log('sound');

  var winHeight = $(window).height();

  $(elementSelector).each(function(i, elem) {

    var img = $(elem);
    div = $("<div />").css({
    "background-image": "url(" + img.attr("src") + ")",
    "background-repate": "no-repeat",
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





