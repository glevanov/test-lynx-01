(function(t){function n(n){for(var r,a,i=n[0],l=n[1],s=n[2],f=0,p=[];f<i.length;f++)a=i[f],u[a]&&p.push(u[a][0]),u[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(n);while(p.length)p.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,i=1;i<e.length;i++){var l=e[i];0!==u[l]&&(r=!1)}r&&(o.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},u={app:0},o=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/test-lynx-01/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var c=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0104":function(t,n,e){},"10ac":function(t,n,e){"use strict";var r=e("ce85"),u=e.n(r);u.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Form")],1)},o=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{staticClass:"form"},[e("h2",{staticClass:"form__heading"},[t._v("Форма ввода")]),e("Input",{staticClass:"form__input",attrs:{title:"Первое число"},model:{value:t.firstValue,callback:function(n){t.firstValue=n},expression:"firstValue"}}),e("Input",{staticClass:"form__input",attrs:{title:"Второе число"},model:{value:t.secondValue,callback:function(n){t.secondValue=n},expression:"secondValue"}}),e("button",{staticClass:"form__button",attrs:{type:"button"},on:{click:this.alert}},[t._v("\n    Сложить\n  ")])],1)},i=[],l=(e("6b54"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("label",{staticClass:"input"},[t._v("\n  "+t._s(t.title)+":\n  "),e("input",{ref:"input",staticClass:"input__field",attrs:{type:"number",step:"0.1"},domProps:{value:t.value},on:{input:t.updateValue}})])}),s=[],c={name:"Input",props:{title:String,value:String},methods:{updateValue:function(){this.$emit("input",this.$refs.input.value)}}},f=c,p=(e("10ac"),e("2877")),d=Object(p["a"])(f,l,s,!1,null,"403d2332",null),m=d.exports,v={name:"Form",components:{Input:m},data:function(){return{firstValue:"0.1",secondValue:"0.2"}},methods:{alert:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(){var t=parseFloat(this.firstValue)+parseFloat(this.secondValue);alert(t.toLocaleString("ru-RU",{minimumFractionDigits:0,maximumFractionDigits:1}))})}},b=v,h=(e("f26b"),Object(p["a"])(b,a,i,!1,null,"4564dc88",null)),_=h.exports,g={name:"app",components:{Form:_}},y=g,x=Object(p["a"])(y,u,o,!1,null,null,null),O=x.exports;e("f5df"),e("0104");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(O)}}).$mount("#app")},ce85:function(t,n,e){},f26b:function(t,n,e){"use strict";var r=e("fc58"),u=e.n(r);u.a},fc58:function(t,n,e){}});
//# sourceMappingURL=app.50eebcec.js.map