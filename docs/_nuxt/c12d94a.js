(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{232:function(t,e,r){var content=r(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("7ffb6a74",content,!0,{sourceMap:!1})},234:function(t,e,r){"use strict";r(232)},235:function(t,e,r){(e=r(77)(!1)).push([t.i,".footer[data-v-6d409034]{position:absolute;bottom:0;background-color:#7fffd4;width:100%}",""]),t.exports=e},237:function(t,e,r){"use strict";r.r(e);r(231);var n=r(8),c=r(20),o=r(14),f=r(6),l=r(21),d=r(233);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var v=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},y=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.b),j=y=v([d.a],y),O=(r(234),r(48)),component=Object(O.a)(j,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("a",{attrs:{href:"https://mashandroom.org",target:"_blank"}},[this._v("producted by マッシュ＆ルーム")])])}],!1,null,"6d409034",null);e.default=component.exports},238:function(t,e,r){var content=r(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("3e4c30e0",content,!0,{sourceMap:!1})},241:function(t){t.exports=JSON.parse('[{"id":1,"question":"じしんがきた。さあどうする？じしんがきた。さあどうする？じしんがきた。さあどうする？じしんがきた。さあどうする？","choices":["ドアを開ける","テレビをつける"],"answer":"0"},{"id":2,"question":"かじだ！さあどうする？","choices":["じぶんでがんばってけす","おおきなこえで まわりのひとをよぶ"],"answer":"1"},{"id":3,"question":"ぼうさいの日はいつ？","choices":["9月1日","12月1日"],"answer":"0"}]')},242:function(t,e,r){"use strict";r(238)},243:function(t,e,r){(e=r(77)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}",""]),t.exports=e},260:function(t,e,r){"use strict";r.r(e);r(174),r(231);var n=r(8),c=r(22),o=r(20),f=r(14),l=r(6),d=r(21),h=r(233),v=r(241);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var j=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},O=function(t){Object(o.a)(r,t);var e=y(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).quiz=null,t.cardColor="",t}return Object(c.a)(r,[{key:"mounted",value:function(){var t=Number(this.$route.query.id);t>=v.length?console.log("invalid quiz id."):(this.quiz=v[t],this.cardColor=this.getCardColor())}},{key:"getCardColor",value:function(){return""}}]),r}(h.b),_=O=j([h.a],O),R=(r(242),r(48)),m=r(244),x=r.n(m),w=r(240),C=r(236),component=Object(R.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.quiz?r("v-card",{attrs:{color:t.cardColor,elevation:"20"}},[r("v-card-title",[t._v("問題"+t._s(t.quiz.id)+"：「"+t._s(t.quiz.question)+"」")]),t._v(" "),t._l(t.quiz.choices,(function(e,n){return r("v-card-text",{key:e},[r("div",[t._v("("+t._s(n+1)+").　"+t._s(e))])])}))],2):t._e(),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{Footer:r(237).default}),x()(component,{VCard:w.a,VCardText:C.a,VCardTitle:C.b})}}]);