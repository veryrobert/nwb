function log(event) {
	console.log(event);
}


function changeMenuPos() {

	var headerHeight 	= 	jQuery(window).height() - 75,
	windowPos		=	jQuery(window).scrollTop(),
	header 			= 	jQuery('header'),
	arrowPos		= 	jQuery('.down').offset().top,
	percentOfWin	=	Math.ceil(jQuery(window).height() / 15),
	currentArrowPos	=	arrowPos - windowPos;

	// fades arrow in and out on scroll
	if(currentArrowPos <= (arrowPos - percentOfWin)) {
		jQuery('.down, .centered').addClass('hide');
	} else {
		jQuery('.down, .centered').removeClass('hide');
	}

	// fixes header to top of the page
	if(jQuery(window).scrollTop() > headerHeight) {
		header.addClass('fixed');
	} else {
		header.removeClass('fixed');
	}
}



jQuery(".down").click(function(){
		jQuery("html,body").animate({scrollTop: jQuery(window).height() - 75 },1000,'easeInOutCubic');
		jQuery(".down, .inner").addClass('hide');
});


// On load effects
jQuery(window).on('load',function(){
	// fadeInElements('.inner', 200, 500);
	fadeInElements('.down', 600, 500);
	replaceImgWithBgImg('.bg-image');

	setTimeout(function() {
	jQuery('.loading').addClass('hidden');
	}, 100);

	setTimeout(function() {
		fadeInElements('.centered', 200, 500);
	}, 500);

	jQuery('#banner').css({
		height: jQuery(window).height()
	}); 

});

jQuery(window).on('resize', function(){
	var winHeight = jQuery(window).height();
	jQuery('.slidesjs-container, #banner, .outer, .sliderBg').css({
		height: winHeight
	});
});

// Fade in children of inner
function fadeInElements(container, delay, duration) {
	var elements = jQuery(container).children();
	(function theLoop (i) {
		setTimeout(function () {
			if (i < elements.length) {
				i++
				// log(i);
				theLoop(i); 
			}
			jQuery(elements[i - 1]).addClass('show');
		}, delay);
	})(0);
}  



function replaceImgWithBgImg(elementSelector) {
  
  var winHeight = jQuery(window).height();

  jQuery(elementSelector).each(function(i, elem) {

    var img = jQuery(elem);
    div = jQuery("<div />").css({
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


jQuery(window).scroll(function(){
	a();

	changeMenuPos();

});


jQuery(document).ready(function(){
	//log(slidesArray);
});


jQuery(window).load(function(){
	var slidesArray = jQuery('.swipe-wrap').children();
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	  startSlide: 0,
	  speed: 1200,
	  auto: 9000,
	  continuous: true,
	  disableScroll: false,
	  stopPropagation: false,
	  callback: function(index, elem) {
	  	  	
	  	if (index == 0) { 
	  		var prev = index + 1; 
	  	} else {
	  		var prev = index - 1;
	  	}
	  	// log(index + "  " + prev);
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


var numbers = [4,7,3,5,9];
    
numbers.sort(function(a, b)
{
    return a - b;	
});
    
log(numbers);    //produces [9,5,4,3]


var letters = ["Robert","Orla","Frank","Liam","Andrew"];

letters.sort();
log(letters + "      " + letters.length);


$(letters).each(function(){

	var singleLetter = new RegExp('\\b' + singleLetter + '\\w*\\b','i');

	if (letters[i].match(singleLetter)) {
        letterIndex = i;
        log(letters[i]);
    }

	console.log(singleLetter)

});


$.each(keywords, function(i) {
    if (keywords[i].substring(0, 1) == searchTerm) {
        keywordIndex = i;
        alert(keywords[i]);
    }
});




