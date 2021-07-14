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

!function(a){var b=a(window);a.fn.visible=function(a,c,d){if(!(this.length<1)){var e=this.length>1?this.eq(0):this,f=e.get(0),g=b.width(),h=b.height(),d=d?d:"both",i=c!==!0||f.offsetWidth*f.offsetHeight;if("function"==typeof f.getBoundingClientRect){var j=f.getBoundingClientRect(),k=j.top>=0&&j.top<h,l=j.bottom>0&&j.bottom<=h,m=j.left>=0&&j.left<g,n=j.right>0&&j.right<=g,o=a?k||l:k&&l,p=a?m||n:m&&n;if("both"===d)return i&&o&&p;if("vertical"===d)return i&&o;if("horizontal"===d)return i&&p}else{var q=b.scrollTop(),r=q+h,s=b.scrollLeft(),t=s+g,u=e.offset(),v=u.top,w=v+e.height(),x=u.left,y=x+e.width(),z=a===!0?w:v,A=a===!0?v:w,B=a===!0?y:x,C=a===!0?x:y;if("both"===d)return!!i&&A<=r&&z>=q&&C<=t&&B>=s;if("vertical"===d)return!!i&&A<=r&&z>=q;if("horizontal"===d)return!!i&&C<=t&&B>=s}}}}(jQuery);
//# sourceMappingURL=visible.min.js.map

}
/*
     FILE ARCHIVED ON 03:42:14 Dec 10, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:10:43 Jul 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 2.517
  LoadShardBlock: 44.03 (3)
  PetaboxLoader3.datanode: 111.665 (5)
  captures_list: 73.575
  CDXLines.iter: 22.054 (3)
  exclusion.robots.policy: 0.297
  exclusion.robots: 0.318
  esindex: 0.022
  PetaboxLoader3.resolve: 91.63 (2)
  load_resource: 186.578 (2)
*/