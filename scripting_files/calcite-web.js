!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.calcite=b()}(this,function(){"use strict";function a(a,b){return b={exports:{}},a(b,b.exports),b.exports}function b(a,b){var c=" "+a.className+" ";return-1!==c.indexOf(" "+b+" ")}function c(a,c){c.split(" ").forEach(function(c){b(a,c)||(a.className+=" "+c)})}function d(a,b){var c=" "+a.className+" ";b.split(" ").forEach(function(a){c=c.replace(" "+a+" "," ")}),a.className=c.trim()}function e(a,e){b(a,e)?d(a,e):c(a,e)}function f(a){a=j(a),a.forEach(function(a){d(a,"is-active")})}function g(a){a=j(a),a.forEach(function(a){c(a,"is-active")})}function h(a,b){f(a),c(b,"is-active")}function i(a,c){var d;for(d=c;d&&(1!==d.nodeType||!b(d,a));d=d.parentNode);return d}function j(a){return Array.isArray(a)?a:Array.prototype.slice.call(a)}function k(a,b){var c=b||document,d=c.querySelectorAll(a);return j(d)}function l(a,b){var c=b.filter(function(b){var c=a.toLowerCase(),d=b.innerHTML.toLowerCase();return-1!==d.indexOf(c)});return c}function m(a){a.forEach(function(a){var b=a.getAttribute("aria-hidden");"true"!==b?a.setAttribute("aria-hidden",!0):a.removeAttribute("aria-hidden")})}function n(a){a.forEach(function(a){a.setAttribute("aria-hidden",!0)})}function o(a){a.forEach(function(a){a.removeAttribute("aria-hidden")})}function p(a){var b=a.getAttribute("aria-expanded");b?a.removeAttribute("aria-expanded"):a.setAttribute("aria-expanded","true")}function q(){return"click"}function r(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function s(a,b,c){return a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c):void 0}function t(a){return a.target||a.srcElement}function u(a){return a.preventDefault?a.preventDefault():void(a.returnValue&&(a.returnValue=!1))}function v(a){return a=a||window.event,a.stopPropagation?a.stopPropagation():void(a.cancelBubble&&(a.cancelBubble=!0))}function w(a,b,c){var d,e,f,g;return g=function(){d=!1,e&&(f.apply(c,e),e=!1)},f=function(){d?e=arguments:(a.apply(c,arguments),setTimeout(g,b),d=!0)}}function x(){function a(a){a?c(a.node):g.forEach(function(a){c(a)})}function c(a){a.setAttribute("aria-live","polite"),a.setAttribute("role","tablist"),j(a.children).forEach(function(a){var c=a.querySelector(".accordion-title");c.setAttribute("role","tab"),c.setAttribute("tabindex","0"),b(a,"is-active")&&a.setAttribute("aria-expanded","true"),r(c,q(),d),r(a,"keyup",function(a){13===a.keyCode&&d(a)})})}function d(a){v(a);var b=i("accordion-section",t(a));M.emit("accordion:toggle",{node:b})}function f(a){e(a.node,"is-active"),p(a.node)}var g=k(".js-accordion");M.on("accordion:bind",a),M.on("accordion:toggle",f),M.emit("accordion:bind")}function y(){function a(b){s(document.body,q(),a),j.forEach(function(a){d(a,"is-active")})}function c(c){c&&(e(c.node,"is-active"),b(c.node,"is-active")&&r(document.body,q(),a))}function f(a){h.forEach(function(a){r(a,q(),g)})}function g(a){u(a),v(a);var b=i("js-dropdown",a.target);M.emit("dropdown:toggle",{node:b})}var h=k(".js-dropdown-toggle"),j=k(".js-dropdown");M.on("dropdown:toggle",c),M.on("dropdown:close",a),M.on("keyboard:escape",a),M.on("dropdown:bind",f),M.emit("dropdown:bind")}function z(){function a(a){M.emit("drawer:close");var b=document.querySelector('.js-drawer[data-drawer="'+a.id+'"]');b.setAttribute("tabindex",0),c(b,"is-active"),m([o,p]),r(b,q(),h),r(document,"focusin",f)}function e(a){if(a){var b=document.querySelector('.js-drawer[data-drawer="'+a.id+'"]');b.removeAttribute("tabindex"),d(b,"is-active")}else v.forEach(function(a){a.removeAttribute("tabindex"),d(a,"is-active")});n([o,p]),s(document,"focusin",f),l&&l.focus()}function f(a){i("js-drawer",a.target)||v.forEach(function(a){b(a,"is-active")&&a.focus()})}function g(a){a?r(a.node,q(),j):t.forEach(function(a){r(a,q(),j)})}function h(){M.emit("drawer:close")}function j(a){u(a);var b=a.target.getAttribute("data-drawer");M.emit("drawer:open",{id:b})}var l,o=document.querySelector(".wrapper"),p=document.querySelector(".footer"),t=k(".js-drawer-toggle"),v=k(".js-drawer");M.on("drawer:open",a),M.on("keyboard:escape",e),M.on("drawer:close",e),M.on("drawer:bind",g),M.emit("drawer:bind")}function A(){var a=k(".js-expand-toggle"),e=document.querySelectorAll(".js-expand");a.forEach(function(a){r(a,q(),function(f){u(f);var g=a.getAttribute("data-expand"),i=document.querySelector('.js-expand[data-expand="'+g+'"]'),j=b(i,"is-active"),k=b(i,"is-active");h(e,i),j&&k?d(i,"is-active"):c(i,"is-active")})})}function B(){function a(){var a=k(".js-filter-dropdown");a.forEach(function(a){var b=a.getAttribute("data-filter-dropdown"),e=a.querySelector(".filter-dropdown-input");r(e,"focus",h);for(var f=a.querySelectorAll(".js-filter-dropdown-open"),g=0;g<f.length;g++){var i=f[g];i.setAttribute("data-id",b),r(i,q(),n)}for(var k=a.querySelectorAll(".js-filter-dropdown-close"),g=0;g<k.length;g++){var o=k[g];o.setAttribute("data-id",b),r(o,q(),n)}for(var p=a.querySelectorAll(".filter-dropdown-link"),g=0;g<p.length;g++){var s=p[g];s.setAttribute("data-item-id",g),r(s,q(),m)}r(e,"keyup",function(a){var b=j(p);b.forEach(function(a){c(a,"hide")}),l(e.value,b).forEach(function(a){d(a,"hide")})})})}function g(a){var b=i("js-filter-dropdown",a.target);return{parent:b,id:b.getAttribute("data-filter-dropdown"),item:a.target}}function h(a){v(a);var b=g(a);M.emit("filterDropdown:input:focus",b)}function m(a){u(a),v(a);var b=g(a);M.emit("filterDropdown:select",b)}function n(a){a.preventDefault();var b=g(a);e(a.target,"is-active"),M.emit("filterDropdown:toggle",b)}function o(a){var c=a.parent.querySelector(".filter-dropdown-list");b(c,"is-active")?M.emit("filterDropdown:close",a):M.emit("filterDropdown:open",a)}function p(a){e(a.item,"is-active")}function s(a){var b=a.parent.querySelectorAll(".filter-dropdown-link.is-active"),c=b[a.i];d(c,"is-active");var e=a.parent.querySelectorAll(".filter-dropdown-link.is-active"),f={parent:a.parent,id:a.id,active:e};M.emit("filterDropdown:active",f)}function t(a){w();var b=a.parent.querySelector(".filter-dropdown-list");c(b,"is-active");var e=k(".js-filter-dropdown-close",a.parent),f=k(".js-filter-dropdown-open",a.parent);f.forEach(function(a){return d(a,"is-active")}),e.forEach(function(a){return c(a,"is-active")})}function w(a){var b=document.querySelectorAll(".filter-dropdown-list");f(b);var e=k(".js-filter-dropdown-open"),g=k(".js-filter-dropdown-close");e.forEach(function(a){return c(a,"is-active")}),g.forEach(function(a){return d(a,"is-active")})}function x(a){var b=a.parent.querySelectorAll(".filter-dropdown-link.is-active"),c={parent:a.parent,id:a.id,active:b};M.emit("filterDropdown:active",c)}function y(a){M.emit("filterDropdown:active:clear",a);var b=a.parent.querySelector(".js-flilter-dropdown-no-filters");a.active.length>0?c(b,"hide"):d(b,"hide");for(var e=0;e<a.active.length;e++){var f=a.active[e],g='<span class="filter-dropdown-active">'+f.innerHTML+'<a class="filter-dropdown-remove" href="#" data-item-id=\''+e+"'></a></span>";a.parent.insertAdjacentHTML("beforeend",g);var h=a.parent.querySelector('.filter-dropdown-remove[data-item-id="'+e+'"]');r(h,q(),z)}}function z(a){a.preventDefault();var b=g(a);b.i=a.target.getAttribute("data-item-id"),M.emit("filterDropdown:select:remove",b)}function A(a){for(var b=a.parent.querySelectorAll(".filter-dropdown-active"),c=0;c<b.length;c++)a.parent.removeChild(b[c])}M.on("filterDropdown:bind",a),M.on("filterDropdown:select",p),M.on("filterDropdown:select",x),M.on("filterDropdown:select:remove",s),M.on("filterDropdown:active",y),M.on("filterDropdown:active:clear",A),M.on("filterDropdown:toggle",o),M.on("filterDropdown:open",t),M.on("filterDropdown:close",w),M.on("keyboard:escape",w),M.emit("filterDropdown:bind")}function C(){function a(a){if(M.emit("modal:close"),a){var b=document.querySelector('.js-modal[data-modal="'+a+'"]');b.removeAttribute("tabindex"),r(document,"focusin",h),c(b,"is-active"),n([l,m]),b.focus()}}function e(a){if(!a)return f(t);var b=document.querySelector('.js-modal[data-modal="'+a+'"]');d(b,"is-active"),b.setAttribute("tabindex",0),s(document,"focusin",h),o([l,m])}function g(a){a?r(a,q(),j):p.forEach(function(a){r(a,q(),j)})}function h(a){i("js-modal",a.target)||t.forEach(function(a){b(a,"is-active")&&a.focus()})}function j(a){u(a);var b=a.target.dataset.modal;M.emit("modal:open",b)}var l=document.querySelector(".wrapper"),m=document.querySelector(".footer"),p=k(".js-modal-toggle"),t=k(".js-modal");M.on("modal:open",a),M.on("keyboard:escape",e),M.on("modal:close",e),M.on("modal:bind",g),M.emit("modal:bind")}function D(){function a(a){var e=i("js-site-search",a.target),f=b(e,"is-active");f?(d(e,"is-active"),a.target.value=""):c(e,"is-active")}var e=k(".js-site-search");e.forEach(function(b){r(b,"focusin",a),r(b,"focusout",a)})}function E(){function a(a){var b=O.raw();a.setAttribute("data-sticky-id",b);var e=a.parentNode,f=a.cloneNode("deep");c(f,"js-shim"),d(f,"js-sticky"),f.setAttribute("data-sticky-id",b),f.style.visibility="hidden",f.style.display="none",e.insertBefore(f,a)}function e(a){var b=a.element.getAttribute("data-sticky-id"),d=document.querySelector('.js-shim[data-sticky-id="'+b+'"]');b&&d&&(c(a.element,"is-sticky"),d.style.display="")}function f(a){var b=a.element.getAttribute("data-sticky-id"),c=document.querySelector('.js-shim[data-sticky-id="'+b+'"]');b&&c&&(d(a.element,"is-sticky"),c.style.display="none")}function g(a){i.forEach(function(c){var d=c.element;if(b(c.element,"is-sticky")){var e=c.element.getAttribute("data-sticky-id");d=document.querySelector('.js-shim[data-sticky-id="'+e+'"]')}if(d){var f=d.getAttribute("data-top")||0;c.top=d.offsetTop-parseInt(f,0)}c.top<a?M.emit("sticky:stick",c):M.emit("sticky:unstick",c)})}M.on("scrolling:at",g),M.on("sticky:stick",e),M.on("sticky:unstick",f);var h=k(".js-sticky"),i=h.map(function(b){var c=b.offsetTop,d=b.getAttribute("data-top")||0;b.style.top=d+"px";var e=b.getAttribute("data-sticky-id");return e||a(b),{top:c-parseInt(d,0),element:b}})}function F(){function a(){var a=k(".js-tab"),d=k(".js-tab-group"),e=k(".js-tab-section");d.forEach(function(a){a.setAttribute("aria-live","polite"),c(a),a.children[0].setAttribute("role","tablist");for(var b=a.querySelectorAll(".js-tab"),d=100/b.length,e=0;e<b.length;e++)b[e].style.maxWidth=d+"%"}),a.forEach(function(a){a.setAttribute("aria-expanded","false"),a.setAttribute("role","tab"),a.setAttribute("tabindex","0"),r(a,q(),f),r(a,"keyup",g)}),e.forEach(function(a){a.setAttribute("role","tabpanel");var c=b(a,"is-active");c?a.setAttribute("aria-expanded",!0):a.setAttribute("aria-expanded",!1)})}function c(a){var b=a.getAttribute("data-tab");if(b)return b;var c=O.raw();return a.setAttribute("data-tab",c),c}function d(a){var b=a.parent,c=j(b.querySelectorAll(".js-tab")),d=a.active,e=j(b.querySelectorAll(".js-tab-section")),f=c.indexOf(d),g=e[f];c.forEach(function(a){a.setAttribute("aria-expanded",!1)}),d.setAttribute("aria-expanded",!0),h(c,d),e.forEach(function(a){a.setAttribute("aria-expanded",!1)}),g.setAttribute("aria-expanded",!0),h(e,g)}function e(a){var b=a.target,d=i("js-tab-group",b),e=c(d);return{parent:d,id:e,active:b}}function f(a){a.preventDefault();var b=e(a);M.emit("tabs:active",b)}function g(a){var b=e(a);13===a.keycode&&M.emit("tabs:active",b)}M.on("tabs:bind",a),M.on("tabs:active",d),M.emit("tabs:bind")}function G(){function a(a){e.scrollLeft+=a}function b(){d(f,"is-active"),d(g,"is-active"),e.scrollLeft>0&&c(f,"is-active"),e.scrollLeft+e.clientWidth+5<e.scrollWidth&&c(g,"is-active")}var e=k(".js-nav-overflow")[0],f=k(".js-overflow-left")[0],g=k(".js-overflow-right")[0];e&&(r(f,q(),a.bind(null,-40)),r(g,q(),a.bind(null,40)),r(e,"scroll",b),r(window,"resize",b),b())}function H(a){27===a.keyCode?M.emit("keyboard:escape"):13===a.keyCode&&M.emit("keyboard:return")}function I(){M.emit("scrolling:at",window.pageYOffset)}function J(){x(),y(),z(),A(),B(),C(),D(),E(),F(),G()}var K=a(function(a){function b(){}b.prototype={on:function(a,b,c){var d=this.e||(this.e={});return(d[a]||(d[a]=[])).push({fn:b,ctx:c}),this},once:function(a,b,c){function d(){e.off(a,d),b.apply(c,arguments)}var e=this;return d._=b,this.on(a,d,c)},emit:function(a){var b=[].slice.call(arguments,1),c=((this.e||(this.e={}))[a]||[]).slice(),d=0,e=c.length;for(d;e>d;d++)c[d].fn.apply(c[d].ctx,b);return this},off:function(a,b){var c=this.e||(this.e={}),d=c[a],e=[];if(d&&b)for(var f=0,g=d.length;g>f;f++)d[f].fn!==b&&d[f].fn._!==b&&e.push(d[f]);return e.length?c[a]=e:delete c[a],this}},a.exports=b}),L=K&&"object"==typeof K&&"default"in K?K["default"]:K,M=new L,N=a(function(a){!function(){function b(a){for(var b="",c=0;a>c;c++)b+=(65536*(1+Math.random())|0).toString(16).substring(1);return b}function c(a){if(!a)throw new TypeError("Invalid argument; `value` has no value.");this.value=c.EMPTY,a&&a instanceof c?this.value=a.toString():a&&"[object String]"===Object.prototype.toString.call(a)&&c.isGuid(a)&&(this.value=a),this.equals=function(a){return c.isGuid(a)&&this.value==a},this.isEmpty=function(){return this.value===c.EMPTY},this.toString=function(){return this.value},this.toJSON=function(){return this.value}}var d=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i");c.EMPTY="00000000-0000-0000-0000-000000000000",c.isGuid=function(a){return a&&(a instanceof c||d.test(a.toString()))},c.create=function(){return new c([b(2),b(1),b(1),b(1),b(3)].join("-"))},c.raw=function(){return[b(2),b(1),b(1),b(1),b(3)].join("-")},"undefined"!=typeof a&&a.exports?a.exports=c:"undefined"!=typeof window&&(window.Guid=c)}()}),O=N&&"object"==typeof N&&"default"in N?N["default"]:N;r(document,"keyup",H),r(window,"scroll",w(I,100));var P={version:"1.0.0-beta.7",click:q,addEvent:r,removeEvent:s,eventTarget:t,preventDefault:u,stopPropagation:v,throttle:w,hasClass:b,addClass:c,removeClass:d,toggleClass:e,removeActive:f,addActive:g,toggleActive:h,toggleAriaHidden:m,toggleAriaExpanded:p,closest:i,nodeListToArray:j,findElements:k,bus:M,accordion:x,dropdown:y,drawers:z,expander:A,filterDropdown:B,modal:C,search:D,sticky:E,tabs:F,thirdNav:G,init:J};return P});