(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~1f5fcd99"],{"0479":function(t,i,n){var e=n("a08d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("499e").default;a("b20a5a98",e,!0,{sourceMap:!1,shadowMode:!1})},"0874":function(t,i,n){"use strict";n("6b54");var e=n("75fc"),a=(n("ac6a"),n("a481"),n("bd86")),r=(n("7f7f"),n("c5f6"),{}),o={name:"fa-icon",props:{name:{type:String,validator:function(t){return!t||t in r||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'.concat(t,'".')+"\nPlease make sure you have imported this icon before using it."),!1)}},title:String,scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String,tabindex:[Number,String]},data:function(){return{id:c(),x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t="undefined"===typeof t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return Object(a["a"])({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?r[this.name]:null},box:function(){return this.icon?"0 0 ".concat(this.icon.width," ").concat(this.icon.height):"0 0 ".concat(this.width," ").concat(this.height)},ratio:function(){if(!this.icon)return 1;var t=this.icon,i=t.width,n=t.height;return Math.max(i,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,i={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(function(t,n,e){var a=c();return i[e]=a,' id="'.concat(a,'"')})),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(function(t,n,e,a){var r=n||a;return r&&i[r]?"#".concat(i[r]):t})),t},focusable:function(){var t=this.tabindex;if(null==t)return"false";var i="string"===typeof t?parseInt(t,10):t;return i>=0?null:"false"}},mounted:function(){this.updateStack()},updated:function(){this.updateStack()},methods:{updateStack:function(){var t=this;if(this.name||null===this.name||0!==this.$children.length){if(!this.icon){var i=0,n=0;this.$children.forEach((function(e){e.outerScale=t.normalizedScale,i=Math.max(i,e.width),n=Math.max(n,e.height)})),this.childrenWidth=i,this.childrenHeight=n,this.$children.forEach((function(t){t.x=(i-t.width)/2,t.y=(n-t.height)/2}))}}else console.warn('Invalid prop: prop "name" is required.')}},render:function(t){if(null===this.name)return t();var i={class:this.klass,style:this.style,attrs:{role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":String(!(this.label||this.title)),tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}},n="vat-".concat(this.id);if(this.title&&(i.attrs["aria-labelledby"]=n),this.raw){var a=this.raw;this.title&&(a='<title id="'.concat(n,'">').concat(f(this.title),"</title>").concat(a)),i.domProps={innerHTML:a}}var r=this.title?[t("title",{attrs:{id:n}},this.title)]:[];return t("svg",i,this.raw?null:r.concat(this.$slots.default||[].concat(Object(e["a"])(this.icon.paths.map((function(i,n){return t("path",{attrs:i,key:"path-".concat(n)})}))),Object(e["a"])(this.icon.polygons.map((function(i,n){return t("polygon",{attrs:i,key:"polygon-".concat(n)})}))))))},register:function(t){for(var i in t){var n=t[i],e=n.paths,a=void 0===e?[]:e,o=n.d,l=n.polygons,c=void 0===l?[]:l,h=n.points;o&&a.push({d:o}),h&&c.push({points:h}),r[i]=s({},n,{paths:a,polygons:c})}},icons:r};function s(t){for(var i=arguments.length,n=new Array(i>1?i-1:0),e=1;e<i;e++)n[e-1]=arguments[e];return n.forEach((function(i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])})),t}var l=870711;function c(){return"va-".concat((l++).toString(16))}var h={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};function f(t){return t.replace(/[<>"&]/g,(function(t){return h[t]||t}))}var u,d,p=o,m=(n("df9a"),n("2877")),v=Object(m["a"])(p,u,d,!1,null,null,null);i["a"]=v.exports},a08d:function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".fa-icon{display:inline-block;fill:currentColor}.fa-flip-horizontal{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-spin{-webkit-animation:fa-spin 1s linear 0s infinite;animation:fa-spin 1s linear 0s infinite}.fa-inverse{color:#fff}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},df9a:function(t,i,n){"use strict";var e=n("0479"),a=n.n(e);a.a}}]);
//# sourceMappingURL=chunk-vendors~1f5fcd99.8113c857.js.map