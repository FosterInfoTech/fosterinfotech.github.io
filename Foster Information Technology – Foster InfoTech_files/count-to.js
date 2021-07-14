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

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a,b){return a.toFixed(b.decimals)}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,this.dataOptions(),d),this.init()};c.DEFAULTS={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:b,onUpdate:null,onComplete:null},c.prototype.init=function(){this.value=this.options.from,this.loops=Math.ceil(this.options.speed/this.options.refreshInterval),this.loopCount=0,this.increment=(this.options.to-this.options.from)/this.loops},c.prototype.dataOptions=function(){var a={from:this.$element.data("from"),to:this.$element.data("to"),speed:this.$element.data("speed"),refreshInterval:this.$element.data("refresh-interval"),decimals:this.$element.data("decimals")},b=Object.keys(a);for(var c in b){var d=b[c];"undefined"==typeof a[d]&&delete a[d]}return a},c.prototype.update=function(){this.value+=this.increment,this.loopCount++,"function"==typeof this.options.onUpdate&&this.options.onUpdate.call(this.$element,this.value),this.loopCount>=this.loops&&(clearInterval(this.interval),this.value=this.options.to,"function"==typeof this.options.onComplete&&this.options.onComplete.call(this.$element,this.value)),this.render()},c.prototype.render=function(){var a=this.options.formatter.call(this.$element,this.value,this.options);this.$element.text(a)},c.prototype.restart=function(){this.stop(),this.init(),this.start()},c.prototype.start=function(){this.stop(),this.render(),this.interval=setInterval(this.update.bind(this),this.options.refreshInterval)},c.prototype.stop=function(){this.interval&&clearInterval(this.interval)},c.prototype.toggle=function(){this.interval?this.stop():this.start()},a.fn.countTo=function(b){return this.each(function(){var d=a(this),e=d.data("countTo"),f=!e||"object"==typeof b,g="object"==typeof b?b:{},h="string"==typeof b?b:"start";f&&(e&&e.stop(),d.data("countTo",e=new c(this,g))),e[h].call(e)})}});
//# sourceMappingURL=count-to.min.js.map

}
/*
     FILE ARCHIVED ON 09:15:34 Oct 29, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:10:43 Jul 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 99.069
  exclusion.robots: 0.103
  exclusion.robots.policy: 0.093
  RedisCDXSource: 0.534
  esindex: 0.006
  LoadShardBlock: 78.492 (3)
  PetaboxLoader3.datanode: 121.476 (5)
  CDXLines.iter: 17.717 (3)
  load_resource: 124.47 (2)
  PetaboxLoader3.resolve: 77.809 (2)
*/