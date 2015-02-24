
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

}





$(".down").click(function(){
		$("html,body").animate({scrollTop: $(window).height() - 75 },1000,'easeInOutCubic');
		$(".down, .inner").addClass('hide');
});


// On load effects
$(window).on('load',function(){
	fadeInElements('.inner', 200, 500);
	fadeInElements('.down', 600, 500);
	replaceImgWithBgImg('.slide > img');

	setTimeout(function() {
	$('.loading').addClass('hidden');
	}, 100);

	$('#banner').css({
		height: $(window).height()
	}); 

});

$(window).on('resize', function(){

	var winHeight = $(window).height();

	// $('#slides').css({
	// 	height: winHeight
	// });

	$('.slidesjs-container, #banner').css({
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
 
         // Change slide number on animation complete
          $('#slidesjs-log .slidesjs-slide-number').text(number);
          $('h2').fadeIn();
      }
    }
  });
});


function replaceImgWithBgImg(elementSelector) {
  

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

// var throttled = _.throttle(log('hello'), 500);

// $(window).scroll(throttled);

var a = _.throttle(function(){console.log('called')}, 500);
// while(true) {
//   a();
// }

$(window).scroll(function(){
	a();


	changeMenuPos();

});




