!function(){var t={203:function(){var t=document.querySelector(".header__btn "),e=document.querySelector(".header__nav-list"),r=document.querySelector(".bg");t.addEventListener("click",(function(){e.classList.add("active"),r.classList.add("active")})),r.addEventListener("click",(function(){e.classList.remove("active"),r.classList.remove("active")}))},463:function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var e=function(){function e(t){var r,n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),"string"==typeof t.el?this.el=document.querySelector(t.el):t.el instanceof HTMLElement&&(this.el=t.el),this.el.style.position="fixed",this.top=null!==(r=t.top)&&void 0!==r?r:this.el.offsetTop,this.unit=t.unit,this.el.style.top=this.scroll(),window.addEventListener("scroll",(function(){return n.scroll()}))}var r,n;return r=e,(n=[{key:"scroll",value:function(){this.window=this.scrollNumber(),this.window-scrollY>0?this.el.style.top=this.window-scrollY+"px":this.el.style.top=0}},{key:"scrollNumber",value:function(){return"px"==this.unit?this.top>=0?this.top:0:200}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();document.querySelector(".header"),new e({el:".header__nav",unit:"px"})}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t+"../"}(),function(){"use strict";r(463),r(203),r.p,r.p,r.p,r.p}()}();