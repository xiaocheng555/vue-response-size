(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dbe06e5"],{"44b3":function(i,e,t){},6492:function(i,e,t){"use strict";t.r(e);var s=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("h2",[i._v("change size")]),t("div",{staticClass:"content"},[i._v(" Click the button and the size will become as below： "),t("button",{on:{click:i.changeSize}},[i._v("change size")]),i.isChange?t("span",{staticClass:"changed-text"},[i._v("changed!")]):i._e(),t("br"),i._m(0),t("p",{staticClass:"warn-tip"},[i._v("#The size will reset after leaving the page!")])]),i.$vSize.isXl?t("div",{staticClass:"box xl-box"},[i._v("xl visible: "+i._s(i.$vSize.width))]):i._e(),i.$vSize.isLg?t("div",{staticClass:"box lg-box"},[i._v("lg visible: "+i._s(i.$vSize.width))]):i._e(),i.$vSize.isMd?t("div",{staticClass:"box md-box"},[i._v("md visible: "+i._s(i.$vSize.width))]):i._e(),i.$vSize.isSm?t("div",{staticClass:"box sm-box"},[i._v("sm visible: "+i._s(i.$vSize.width))]):i._e(),i.$vSize.isXs?t("div",{staticClass:"box xs-box"},[i._v("xs visible: "+i._s(i.$vSize.width))]):i._e()])},n=[function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("table",{attrs:{border:"1",cellspacing:"0"}},[t("thead",[t("tr",[t("th",[i._v("Name")]),t("th",[i._v("Size")])])]),t("tbody",[t("tr",[t("td",[i._v("xl")]),t("td",[i._v(">=1904")])]),t("tr",[t("td",[i._v("isLg")]),t("td",[i._v(">=1264")])]),t("tr",[t("td",[i._v("isMd")]),t("td",[i._v(">=960")])]),t("tr",[t("td",[i._v("isSm")]),t("td",[i._v(">=600")])]),t("tr",[t("td",[i._v("isXs")]),t("td",[i._v("<600")])])])])}],a={name:"size",data:function(){return{isChange:!1}},methods:{changeSize:function(){this.isChange=!0,this.$vSize.changeSize({xl:{min:1904},lg:{min:1264},md:{min:960},sm:{min:600},xs:{max:600}})},reset:function(){this.$vSize.changeSize({xl:{min:1920},lg:{min:1200},md:{min:992},sm:{min:768},xs:{max:768}})}},beforeDestroy:function(){this.reset()}},v=a,l=(t("a47b"),t("2877")),c=Object(l["a"])(v,s,n,!1,null,"5d58e208",null);e["default"]=c.exports},a47b:function(i,e,t){"use strict";t("44b3")}}]);
//# sourceMappingURL=chunk-1dbe06e5.06025fa1.js.map