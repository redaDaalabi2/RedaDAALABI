(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{293:function(t,e,n){"use strict";n.r(e);var r={props:["client"],data:function(){return{}}},c=n(9),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"\n      w-64\n      py-5\n      px-10\n      border border-ternary-light\n      dark:border-ternary-dark\n      shadow-sm\n      rounded-lg\n      mb-8\n      cursor-pointer\n      dark:bg-secondary-light\n    ",attrs:{src:t.client.img,alt:t.client.title}})])}),[],!1,null,"4f5d30d8",null);e.default=component.exports},304:function(t,e,n){"use strict";n.r(e);n(30),n(25),n(29),n(12),n(37),n(26),n(38);var r=n(15),c=n(27);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var o={data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["clientsHeading","clients"]))},d=o,f=n(9),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-10 sm:mt-20"},[n("p",{staticClass:"\n      font-general-medium\n      text-2xl text-center\n      sm:text-3xl\n      text-primary-dark\n      dark:text-primary-light\n    "},[t._v("\n    "+t._s(t.clientsHeading)+"\n  ")]),t._v(" "),n("div",{staticClass:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2"},t._l(t.clients,(function(t){return n("AboutClientSingle",{key:t.id,attrs:{client:t}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AboutClientSingle:n(293).default})}}]);