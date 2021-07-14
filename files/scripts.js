var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function(a){function b(){a.browser.device=/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()),1==a.browser.device&&(a("#counter").css("background-attachment","scroll"),a("#testimonials").css("background-attachment","scroll"))}function c(){a('a[href*="#"]:not([href="#"])').on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=a(this.hash);if(b=b.length?b:a("[name="+this.hash.slice(1)+"]"),b.length)return a("html,body").animate({scrollTop:b.offset().top},1e3),!1}})}function d(){a(".open-responsive-menu").click(function(){a(".responsive-menu").toggle("slow",function(){a(this).toggleClass("active")})})}function e(){var b=a("#projects .project"),c=a(b).width();a(b).css("height",c)}function f(){a("#services .section-content .service").length&&a("#services .section-content .service").each(function(){var b=a(this),c=a(b).children(".service-icon"),d=a(b).children(".service-title"),e=a(b).data("service-color");a(c).css("color",e),a(d).css("color",e)})}function g(){a("#team .section-content .person").length&&a("#team .section-content .person").each(function(){var b=a(this),c=a(b).data("person-color"),d=a(b).children(".person-content").children("h5"),e=a(b).children(".person-content").children(".person-content-social.clearfix").children("li").children("a");a(d).css("color",c),a(e).css("background-color",c)})}function h(){a("#header .top-header .header-navigation ul li.menu-item-has-children").hover(function(){a(this).children("ul").css("visibility","visible").fadeIn()},function(){a(this).children("ul").css("visibility","hidden").fadeOut()})}function i(){if(a("#header .top-header .header-navigation ul li.menu-item-has-children").length){var b=a("#header .top-header .header-navigation ul li.menu-item-has-children ul");a(b).each(function(){k-a(this).offset().left<250&&a(this).css("left","-250px")})}}function j(){var b=a("li.description_tab"),c=a("li.description_tab a"),d=a("li.reviews_tab"),e=a("li.reviews_tab a"),f=a(".panel#tab-description"),g=a(".panel#tab-reviews");a(c).click(function(){a(this).parent().addClass("active"),a(d).removeClass("active"),a(f).show(),a(g).hide()}),a(e).click(function(){a(this).parent().addClass("active"),a(b).removeClass("active"),a(g).show(),a(f).hide()})}var k=a(window).width();a(window).height(),a(document).width(),a(document).height();a(function(){b(),c(),d(),e(),f(),g(),h(),i(),j()}),a(window).resize(function(){a(function(){e()})})});
//# sourceMappingURL=scripts.min.js.map

}
/*
     FILE ARCHIVED ON 10:53:29 Oct 29, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:10:44 Jul 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 74.084
  exclusion.robots: 0.222
  exclusion.robots.policy: 0.205
  RedisCDXSource: 2.246
  esindex: 0.009
  LoadShardBlock: 47.907 (3)
  PetaboxLoader3.datanode: 64.579 (5)
  CDXLines.iter: 20.682 (3)
  load_resource: 121.515 (2)
  PetaboxLoader3.resolve: 84.923 (2)
*/