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

/*!
 * jQuery UI Progressbar 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/progressbar/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./widget"],a):a(jQuery)}(function(a){return a.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(a){return void 0===a?this.options.value:(this.options.value=this._constrainedValue(a),void this._refreshValue())},_constrainedValue:function(a){return void 0===a&&(a=this.options.value),this.indeterminate=a===!1,"number"!=typeof a&&(a=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,a))},_setOptions:function(a){var b=a.value;delete a.value,this._super(a),this.options.value=this._constrainedValue(b),this._refreshValue()},_setOption:function(a,b){"max"===a&&(b=Math.max(this.min,b)),"disabled"===a&&this.element.toggleClass("ui-state-disabled",!!b).attr("aria-disabled",b),this._super(a,b)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var b=this.options.value,c=this._percentage();this.valueDiv.toggle(this.indeterminate||b>this.min).toggleClass("ui-corner-right",b===this.options.max).width(c.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":b}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==b&&(this.oldValue=b,this._trigger("change")),b===this.options.max&&this._trigger("complete")}})});

}
/*
     FILE ARCHIVED ON 09:32:28 Oct 29, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:10:43 Jul 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 59.013
  exclusion.robots: 0.182
  exclusion.robots.policy: 0.169
  RedisCDXSource: 2.569
  esindex: 0.013
  LoadShardBlock: 29.211 (3)
  PetaboxLoader3.datanode: 175.544 (5)
  CDXLines.iter: 22.202 (3)
  load_resource: 276.333 (2)
  PetaboxLoader3.resolve: 116.336 (2)
*/