(function(){!function($,t,i){var s,e,a;return a="slidesjs",e={width:940,height:528,start:1,navigation:{active:!0,effect:"slide"},pagination:{active:!0,effect:"slide"},play:{active:!1,effect:"slide",interval:5e3,auto:!1,swap:!0},effect:{slide:{speed:500},fade:{speed:300,crossfade:!0}},callback:{loaded:function(){},start:function(){},complete:function(){}}},s=function(){function t(t,i){this.element=t,this.options=$.extend(!0,{},e,i),this._defaults=e,this._name=a,this.init()}return t}(),s.prototype.init=function(){var i,s,e,a,n,o,d=this;return i=$(this.element),this.data=$.data(this),$.data(this,"animating",!1),$.data(this,"total",i.children().not(".slidesjs-navigation",i).length),$.data(this,"current",this.options.start-1),$.data(this,"vendorPrefix",this._getVendorPrefix()),"undefined"!=typeof TouchEvent&&($.data(this,"touch",!0),this.options.effect.slide.speed=this.options.effect.slide.speed/2),i.css({overflow:"hidden"}),i.slidesContainer=i.children().not(".slidesjs-navigation",i).wrapAll("<div class='slidesjs-container'>",i).parent().css({overflow:"hidden",position:"relative"}),$(".slidesjs-container",i).wrapInner("<div class='slidesjs-control'>",i).children(),$(".slidesjs-control",i).css({position:"relative",left:0}),$(".slidesjs-control",i).children().addClass("slidesjs-slide").css({position:"absolute",top:0,left:0,width:"100%",zIndex:0,display:"none",webkitBackfaceVisibility:"hidden"}),$.each($(".slidesjs-control",i).children(),function(t){var i;return i=$(this),i.attr("slidesjs-index",t)}),this.data.touch&&($(".slidesjs-control",i).on("touchstart",function(t){return d._touchstart(t)}),$(".slidesjs-control",i).on("touchmove",function(t){return d._touchmove(t)}),$(".slidesjs-control",i).on("touchend",function(t){return d._touchend(t)})),i.fadeIn(0),this.update(),this.data.touch&&this._setuptouch(),$(".slidesjs-control",i).children(":eq("+this.data.current+")").eq(0).fadeIn(0,function(){return $(this).css({zIndex:10})}),this.options.navigation.active&&(n=$("<a>",{"class":"slidesjs-previous slidesjs-navigation",href:"#",title:"Previous",text:"Previous"}).appendTo(i),s=$("<a>",{"class":"slidesjs-next slidesjs-navigation",href:"#",title:"Next",text:"Next"}).appendTo(i)),$(".slidesjs-next",i).click(function(t){return t.preventDefault(),d.stop(),d.next(d.options.navigation.effect)}),$(".slidesjs-previous",i).click(function(t){return t.preventDefault(),d.stop(),d.previous(d.options.navigation.effect)}),this.options.play.active&&(a=$("<a>",{"class":"slidesjs-play slidesjs-navigation",href:"#",title:"Play",text:"Play"}).appendTo(i),o=$("<a>",{"class":"slidesjs-stop slidesjs-navigation",href:"#",title:"Stop",text:"Stop"}).appendTo(i),a.click(function(t){return t.preventDefault(),d.play(!0)}),o.click(function(t){return t.preventDefault(),d.stop()}),this.options.play.swap&&o.css({display:"none"})),this.options.pagination.active&&(e=$("<ul>",{"class":"slidesjs-pagination"}).appendTo(i),$.each(new Array(this.data.total),function(t){var i,s;return i=$("<li>",{"class":"slidesjs-pagination-item"}).appendTo(e),s=$("<a>",{href:"#","data-slidesjs-item":t,html:t+1}).appendTo(i),s.click(function(t){return t.preventDefault(),d.stop(),d["goto"](1*$(t.currentTarget).attr("data-slidesjs-item")+1)})})),$(t).bind("resize",function(){return d.update()}),this._setActive(),this.options.play.auto&&this.play(),this.options.callback.loaded(this.options.start)},s.prototype._setActive=function(t){var i,s;return i=$(this.element),this.data=$.data(this),s=t>-1?t:this.data.current,$(".active",i).removeClass("active"),$("li:eq("+s+") a",i).addClass("active")},s.prototype.update=function(){var i,s,e;return i=$(this.element),this.data=$.data(this),$(".slidesjs-control",i).children(":not(:eq("+this.data.current+"))").css({display:"none",left:0,zIndex:0}),e=i.width(),winHeight=$(t).height(),this.options.width=e,$(".slidesjs-control, .slidesjs-container",i).css({width:e,height:1e3})},s.prototype.next=function(t){var i;return i=$(this.element),this.data=$.data(this),$.data(this,"direction","next"),void 0===t&&(t=this.options.navigation.effect),"fade"===t?this._fade():this._slide()},s.prototype.previous=function(t){var i;return i=$(this.element),this.data=$.data(this),$.data(this,"direction","previous"),void 0===t&&(t=this.options.navigation.effect),"fade"===t?this._fade():this._slide()},s.prototype["goto"]=function(t){var i,s;if(i=$(this.element),this.data=$.data(this),void 0===s&&(s=this.options.pagination.effect),t>this.data.total?t=this.data.total:1>t&&(t=1),"number"==typeof t)return"fade"===s?this._fade(t):this._slide(t);if("string"==typeof t){if("first"===t)return"fade"===s?this._fade(0):this._slide(0);if("last"===t)return"fade"===s?this._fade(this.data.total):this._slide(this.data.total)}},s.prototype._setuptouch=function(){var t,i,s,e;return t=$(this.element),this.data=$.data(this),e=$(".slidesjs-control",t),i=this.data.current+1,s=this.data.current-1,0>s&&(s=this.data.total-1),i>this.data.total-1&&(i=0),e.children(":eq("+i+")").css({display:"block",left:this.options.width}),e.children(":eq("+s+")").css({display:"block",left:-this.options.width})},s.prototype._touchstart=function(t){var i,s;return i=$(this.element),this.data=$.data(this),s=t.originalEvent.touches[0],this._setuptouch(),$.data(this,"touchtimer",Number(new Date)),$.data(this,"touchstartx",s.pageX),$.data(this,"touchstarty",s.pageY),t.stopPropagation()},s.prototype._touchend=function(t){var i,s,e,a,n,o,d,r=this;return i=$(this.element),this.data=$.data(this),o=t.originalEvent.touches[0],a=$(".slidesjs-control",i),a.position().left>.5*this.options.width||a.position().left>.1*this.options.width&&Number(new Date)-this.data.touchtimer<250?($.data(this,"direction","previous"),this._slide()):a.position().left<-(.5*this.options.width)||a.position().left<-(.1*this.options.width)&&Number(new Date)-this.data.touchtimer<250?($.data(this,"direction","next"),this._slide()):(e=this.data.vendorPrefix,d=e+"Transform",s=e+"TransitionDuration",n=e+"TransitionTimingFunction",a[0].style[d]="translateX(0px)",a[0].style[s]=.85*this.options.effect.slide.speed+"ms"),a.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){return e=r.data.vendorPrefix,d=e+"Transform",s=e+"TransitionDuration",n=e+"TransitionTimingFunction",a[0].style[d]="",a[0].style[s]="",a[0].style[n]=""}),t.stopPropagation()},s.prototype._touchmove=function(t){var i,s,e,a,n;return i=$(this.element),this.data=$.data(this),a=t.originalEvent.touches[0],s=this.data.vendorPrefix,e=$(".slidesjs-control",i),n=s+"Transform",$.data(this,"scrolling",Math.abs(a.pageX-this.data.touchstartx)<Math.abs(a.pageY-this.data.touchstarty)),this.data.animating||this.data.scrolling||(t.preventDefault(),this._setuptouch(),e[0].style[n]="translateX("+(a.pageX-this.data.touchstartx)+"px)"),t.stopPropagation()},s.prototype.play=function(t){var i,s,e=this;return i=$(this.element),this.data=$.data(this),!this.data.playInterval&&(t&&(s=this.data.current,this.data.direction="next","fade"===this.options.play.effect?this._fade():this._slide()),$.data(this,"playInterval",setInterval(function(){return s=e.data.current,e.data.direction="next","fade"===e.options.play.effect?e._fade():e._slide()},this.options.play.interval)),$.data(this,"playing",!0),$(".slidesjs-play",i).addClass("slidesjs-playing"),this.options.play.swap)?($(".slidesjs-play",i).hide(),$(".slidesjs-stop",i).show()):void 0},s.prototype.stop=function(){var t;return t=$(this.element),this.data=$.data(this),clearInterval(this.data.playInterval),$.data(this,"playInterval",null),$.data(this,"playing",!1),$(".slidesjs-play",t).removeClass("slidesjs-playing"),this.options.play.swap?($(".slidesjs-stop",t).hide(),$(".slidesjs-play",t).show()):void 0},s.prototype._slide=function(t){var i,s,e,a,n,o,d,r,l,h,c=this;return i=$(this.element),this.data=$.data(this),this.data.animating||t===this.data.current+1?void 0:($.data(this,"animating",!0),s=this.data.current,t>-1?(t-=1,h=t>s?1:-1,e=t>s?-this.options.width:this.options.width,n=t):(h="next"===this.data.direction?1:-1,e="next"===this.data.direction?-this.options.width:this.options.width,n=s+h),-1===n&&(n=this.data.total-1),n===this.data.total&&(n=0),this._setActive(n),d=$(".slidesjs-control",i),t>-1&&d.children(":not(:eq("+s+"))").css({display:"none",left:0,zIndex:0}),d.children(":eq("+n+")").css({display:"block",left:h*this.options.width,zIndex:10}),this.options.callback.start(s+1),this.data.vendorPrefix?(o=this.data.vendorPrefix,l=o+"Transform",a=o+"TransitionDuration",r=o+"TransitionTimingFunction",d[0].style[l]="translateX("+e+"px)",d[0].style[a]=this.options.effect.slide.speed+"ms",d.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){return d[0].style[l]="",d[0].style[a]="",d.children(":eq("+n+")").css({left:0}),d.children(":eq("+s+")").css({display:"none",left:0,zIndex:0}),$.data(c,"current",n),$.data(c,"animating",!1),d.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"),d.children(":not(:eq("+n+"))").css({display:"none",left:0,zIndex:0}),c.data.touch&&c._setuptouch(),c.options.callback.complete(n+1)})):d.stop().animate({left:e},this.options.effect.slide.speed,function(){return d.css({left:0}),d.children(":eq("+n+")").css({left:0}),d.children(":eq("+s+")").css({display:"none",left:0,zIndex:0},$.data(c,"current",n),$.data(c,"animating",!1),c.options.callback.complete(n+1))}))},s.prototype._fade=function(t){var i,s,e,a,n,o=this;return i=$(this.element),this.data=$.data(this),this.data.animating||t===this.data.current+1?void 0:($.data(this,"animating",!0),s=this.data.current,t?(t-=1,n=t>s?1:-1,e=t):(n="next"===this.data.direction?1:-1,e=s+n),-1===e&&(e=this.data.total-1),e===this.data.total&&(e=0),this._setActive(e),a=$(".slidesjs-control",i),a.children(":eq("+e+")").css({display:"block",left:0,zIndex:0}),this.options.callback.start(s+1),this.options.effect.fade.crossfade?a.children(":eq("+this.data.current+")").stop().fadeOut(this.options.effect.fade.speed,function(){return a.children(":eq("+e+")").css({zIndex:10}),$.data(o,"animating",!1),$.data(o,"current",e),o.options.callback.complete(e+1)}):(a.children(":eq("+e+")").css({display:"none"}),a.children(":eq("+s+")").stop().fadeOut(this.options.effect.fade.speed,function(){return a.children(":eq("+e+")").stop().fadeIn(this.options.effect.fade.speed).css({zIndex:10}),$.data(this,"animating",!1),$.data(this,"current",e),this.options.callback.complete(e+1)})))},s.prototype._getVendorPrefix=function(){var t,s,e,a,n;for(t=i.body||i.documentElement,e=t.style,a="transition",n=["Moz","Webkit","Khtml","O","ms"],a=a.charAt(0).toUpperCase()+a.substr(1),s=0;s<n.length;){if("string"==typeof e[n[s]+a])return n[s];s++}return!1},$.fn[a]=function(t){return this.each(function(){return $.data(this,"plugin_"+a)?void 0:$.data(this,"plugin_"+a,new s(this,t))})}}(jQuery,window,document)}).call(this);