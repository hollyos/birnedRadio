window.Modernizr=function(t,e,i){function n(t){b.cssText=t}function s(t,e){return n(w.join(t+";")+(e||""))}function a(t,e){return typeof t===e}function o(t,e){return!!~(""+t).indexOf(e)}function r(t,e){for(var n in t){var s=t[n];if(!o(s,"-")&&b[s]!==i)return"pfx"==e?s:!0}return!1}function l(t,e,n){for(var s in t){var o=e[t[s]];if(o!==i)return n===!1?t[s]:a(o,"function")?o.bind(n||e):o}return!1}function c(t,e,i){var n=t.charAt(0).toUpperCase()+t.slice(1),s=(t+" "+C.join(n+" ")+n).split(" ");return a(e,"string")||a(e,"undefined")?r(s,e):(s=(t+" "+S.join(n+" ")+n).split(" "),l(s,e,i))}function d(){p.input=function(i){for(var n=0,s=i.length;s>n;n++)A[i[n]]=i[n]in y;return A.list&&(A.list=!!e.createElement("datalist")&&!!t.HTMLDataListElement),A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(t){for(var n,s,a,o=0,r=t.length;r>o;o++)y.setAttribute("type",s=t[o]),n="text"!==y.type,n&&(y.value=x,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&y.style.WebkitAppearance!==i?(m.appendChild(y),a=e.defaultView,n=a.getComputedStyle&&"textfield"!==a.getComputedStyle(y,null).WebkitAppearance&&0!==y.offsetHeight,m.removeChild(y)):/^(search|tel)$/.test(s)||(n=/^(url|email)$/.test(s)?y.checkValidity&&y.checkValidity()===!1:y.value!=x)),T[t[o]]=!!n;return T}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var h,u,f="2.8.3",p={},g=!0,m=e.documentElement,v="modernizr",_=e.createElement(v),b=_.style,y=e.createElement("input"),x=":)",w=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),k="Webkit Moz O ms",C=k.split(" "),S=k.toLowerCase().split(" "),$={},T={},A={},E=[],j=E.slice,M=function(t,i,n,s){var a,o,r,l,c=e.createElement("div"),d=e.body,h=d||e.createElement("body");if(parseInt(n,10))for(;n--;)r=e.createElement("div"),r.id=s?s[n]:v+(n+1),c.appendChild(r);return a=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),c.id=v,(d?c:h).innerHTML+=a,h.appendChild(c),d||(h.style.background="",h.style.overflow="hidden",l=m.style.overflow,m.style.overflow="hidden",m.appendChild(h)),o=i(c,t),d?c.parentNode.removeChild(c):(h.parentNode.removeChild(h),m.style.overflow=l),!!o},F=function(e){var i=t.matchMedia||t.msMatchMedia;if(i)return i(e)&&i(e).matches||!1;var n;return M("@media "+e+" { #"+v+" { position: absolute; } }",function(e){n="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),n},z=function(){function t(t,s){s=s||e.createElement(n[t]||"div"),t="on"+t;var o=t in s;return o||(s.setAttribute||(s=e.createElement("div")),s.setAttribute&&s.removeAttribute&&(s.setAttribute(t,""),o=a(s[t],"function"),a(s[t],"undefined")||(s[t]=i),s.removeAttribute(t))),s=null,o}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),q={}.hasOwnProperty;u=a(q,"undefined")||a(q.call,"undefined")?function(t,e){return e in t&&a(t.constructor.prototype[e],"undefined")}:function(t,e){return q.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var i=j.call(arguments,1),n=function(){if(this instanceof n){var s=function(){};s.prototype=e.prototype;var a=new s,o=e.apply(a,i.concat(j.call(arguments)));return Object(o)===o?o:a}return e.apply(t,i.concat(j.call(arguments)))};return n}),$.flexbox=function(){return c("flexWrap")},$.flexboxlegacy=function(){return c("boxDirection")},$.canvas=function(){var t=e.createElement("canvas");return!!t.getContext&&!!t.getContext("2d")},$.canvastext=function(){return!!p.canvas&&!!a(e.createElement("canvas").getContext("2d").fillText,"function")},$.postmessage=function(){return!!t.postMessage},$.websqldatabase=function(){return!!t.openDatabase},$.indexedDB=function(){return!!c("indexedDB",t)},$.hashchange=function(){return z("hashchange",t)&&(e.documentMode===i||e.documentMode>7)},$.history=function(){return!!t.history&&!!history.pushState},$.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},$.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},$.rgba=function(){return n("background-color:rgba(150,255,150,.5)"),o(b.backgroundColor,"rgba")},$.hsla=function(){return n("background-color:hsla(120,40%,100%,.5)"),o(b.backgroundColor,"rgba")||o(b.backgroundColor,"hsla")},$.multiplebgs=function(){return n("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},$.backgroundsize=function(){return c("backgroundSize")},$.borderimage=function(){return c("borderImage")},$.borderradius=function(){return c("borderRadius")},$.boxshadow=function(){return c("boxShadow")},$.textshadow=function(){return""===e.createElement("div").style.textShadow},$.opacity=function(){return s("opacity:.55"),/^0.55$/.test(b.opacity)},$.cssanimations=function(){return c("animationName")},$.csscolumns=function(){return c("columnCount")},$.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);";return n((t+"-webkit- ".split(" ").join(e+t)+w.join(i+t)).slice(0,-t.length)),o(b.backgroundImage,"gradient")},$.cssreflections=function(){return c("boxReflect")},$.csstransforms=function(){return!!c("transform")},$.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in m.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},$.csstransitions=function(){return c("transition")},$.generatedcontent=function(){var t;return M(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},$.video=function(){var t=e.createElement("video"),i=!1;try{(i=!!t.canPlayType)&&(i=new Boolean(i),i.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),i.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),i.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(n){}return i},$.audio=function(){var t=e.createElement("audio"),i=!1;try{(i=!!t.canPlayType)&&(i=new Boolean(i),i.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),i.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),i.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),i.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return i},$.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},$.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},$.webworkers=function(){return!!t.Worker},$.applicationcache=function(){return!!t.applicationCache};for(var D in $)u($,D)&&(h=D.toLowerCase(),p[h]=$[D](),E.push((p[h]?"":"no-")+h));return p.input||d(),p.addTest=function(t,e){if("object"==typeof t)for(var n in t)u(t,n)&&p.addTest(n,t[n]);else{if(t=t.toLowerCase(),p[t]!==i)return p;e="function"==typeof e?e():e,g!==void 0&&g&&(m.className+=" "+(e?"":"no-")+t),p[t]=e}return p},n(""),_=y=null,p._version=f,p._prefixes=w,p._domPrefixes=S,p._cssomPrefixes=C,p.mq=F,p.hasEvent=z,p.testProp=function(t){return r([t])},p.testAllProps=c,p.testStyles=M,m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+E.join(" "):""),p}(this,this.document),function(t,e){function i(t,e){var i=t.createElement("p"),n=t.getElementsByTagName("head")[0]||t.documentElement;return i.innerHTML="x<style>"+e+"</style>",n.insertBefore(i.lastChild,n.firstChild)}function n(){var t=k.elements;return"string"==typeof t?t.split(" "):t}function s(t){var e=w[t[y]];return e||(e={},x++,t[y]=x,w[x]=e),e}function a(t,i,n){if(i||(i=e),g)return i.createElement(t);n||(n=s(i));var a;return a=n.cache[t]?n.cache[t].cloneNode():b.test(t)?(n.cache[t]=n.createElem(t)).cloneNode():n.createElem(t),!a.canHaveChildren||_.test(t)||a.tagUrn?a:n.frag.appendChild(a)}function o(t,i){if(t||(t=e),g)return t.createDocumentFragment();i=i||s(t);for(var a=i.frag.cloneNode(),o=0,r=n(),l=r.length;l>o;o++)a.createElement(r[o]);return a}function r(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(i){return k.shivMethods?a(i,t,e):e.createElem(i)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(k,e.frag)}function l(t){t||(t=e);var n=s(t);return k.shivCSS&&!p&&!n.hasCSS&&(n.hasCSS=!!i(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||r(t,n),t}function c(t){for(var e,i=t.getElementsByTagName("*"),s=i.length,a=RegExp("^(?:"+n().join("|")+")$","i"),o=[];s--;)e=i[s],a.test(e.nodeName)&&o.push(e.applyElement(d(e)));return o}function d(t){for(var e,i=t.attributes,n=i.length,s=t.ownerDocument.createElement(S+":"+t.nodeName);n--;)e=i[n],e.specified&&s.setAttribute(e.nodeName,e.nodeValue);return s.style.cssText=t.style.cssText,s}function h(t){for(var e,i=t.split("{"),s=i.length,a=RegExp("(^|[\\s,>+~])("+n().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),o="$1"+S+"\\:$2";s--;)e=i[s]=i[s].split("}"),e[e.length-1]=e[e.length-1].replace(a,o),i[s]=e.join("}");return i.join("{")}function u(t){for(var e=t.length;e--;)t[e].removeNode()}function f(t){function e(){clearTimeout(o._removeSheetTimer),n&&n.removeNode(!0),n=null}var n,a,o=s(t),r=t.namespaces,l=t.parentWindow;return!$||t.printShived?t:(r[S]===void 0&&r.add(S),l.attachEvent("onbeforeprint",function(){e();for(var s,o,r,l=t.styleSheets,d=[],u=l.length,f=Array(u);u--;)f[u]=l[u];for(;r=f.pop();)if(!r.disabled&&C.test(r.media)){try{s=r.imports,o=s.length}catch(p){o=0}for(u=0;o>u;u++)f.push(s[u]);try{d.push(r.cssText)}catch(p){}}d=h(d.reverse().join("")),a=c(t),n=i(t,d)}),l.attachEvent("onafterprint",function(){u(a),clearTimeout(o._removeSheetTimer),o._removeSheetTimer=setTimeout(e,500)}),t.printShived=!0,t)}var p,g,m="3.7.0",v=t.html5||{},_=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,b=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,y="_html5shiv",x=0,w={};(function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",p="hidden"in t,g=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return t.cloneNode===void 0||t.createDocumentFragment===void 0||t.createElement===void 0}()}catch(i){p=!0,g=!0}})();var k={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:m,shivCSS:v.shivCSS!==!1,supportsUnknownElements:g,shivMethods:v.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:o};t.html5=k,l(e);var C=/^$|\b(?:all|print)\b/,S="html5shiv",$=!g&&function(){var i=e.documentElement;return e.namespaces!==void 0&&e.parentWindow!==void 0&&i.applyElement!==void 0&&i.removeNode!==void 0&&t.attachEvent!==void 0}();k.type+=" print",k.shivPrint=f,f(e)}(this,document),function(t,e,i){function n(t){return"[object Function]"==m.call(t)}function s(t){return"string"==typeof t}function a(){}function o(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function r(){var t=v.shift();_=1,t?t.t?p(function(){("c"==t.t?u.injectCss:u.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),r()):_=0}function l(t,i,n,s,a,l,c){function d(e){if(!f&&o(h.readyState)&&(b.r=f=1,!_&&r(),h.onload=h.onreadystatechange=null,e)){"img"!=t&&p(function(){x.removeChild(h)},50);for(var n in $[i])$[i].hasOwnProperty(n)&&$[i][n].onload()}}var c=c||u.errorTimeout,h=e.createElement(t),f=0,m=0,b={t:n,s:i,e:a,a:l,x:c};1===$[i]&&(m=1,$[i]=[]),"object"==t?h.data=i:(h.src=i,h.type=t),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){d.call(this,m)},v.splice(s,0,b),"img"!=t&&(m||2===$[i]?(x.insertBefore(h,y?null:g),p(d,c)):$[i].push(h))}function c(t,e,i,n,a){return _=0,e=e||"j",s(t)?l("c"==e?k:w,t,e,this.i++,i,n,a):(v.splice(this.i++,0,t),1==v.length&&r()),this}function d(){var t=u;return t.loader={load:c,i:0},t}var h,u,f=e.documentElement,p=t.setTimeout,g=e.getElementsByTagName("script")[0],m={}.toString,v=[],_=0,b="MozAppearance"in f.style,y=b&&!!e.createRange().compareNode,x=y?f:g.parentNode,f=t.opera&&"[object Opera]"==m.call(t.opera),f=!!e.attachEvent&&!f,w=b?"object":f?"script":"img",k=f?"script":w,C=Array.isArray||function(t){return"[object Array]"==m.call(t)},S=[],$={},T={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};u=function(t){function e(t){var e,i,n,t=t.split("!"),s=S.length,a=t.pop(),o=t.length,a={url:a,origUrl:a,prefixes:t};for(i=0;o>i;i++)n=t[i].split("="),(e=T[n.shift()])&&(a=e(a,n));for(i=0;s>i;i++)a=S[i](a);return a}function o(t,s,a,o,r){var l=e(t),c=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(s&&(s=n(s)?s:s[t]||s[o]||s[t.split("/").pop().split("?")[0]]),l.instead?l.instead(t,s,a,o,r):($[l.url]?l.noexec=!0:$[l.url]=1,a.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":i,l.noexec,l.attrs,l.timeout),(n(s)||n(c))&&a.load(function(){d(),s&&s(l.origUrl,r,o),c&&c(l.origUrl,r,o),$[l.url]=2})))}function r(t,e){function i(t,i){if(t){if(s(t))i||(h=function(){var t=[].slice.call(arguments);u.apply(this,t),f()}),o(t,h,e,0,c);else if(Object(t)===t)for(l in r=function(){var e,i=0;for(e in t)t.hasOwnProperty(e)&&i++;return i}(),t)t.hasOwnProperty(l)&&(!i&&!--r&&(n(h)?h=function(){var t=[].slice.call(arguments);u.apply(this,t),f()}:h[l]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),f()}}(u[l])),o(t[l],h,e,l,c))}else!i&&f()}var r,l,c=!!t.test,d=t.load||t.both,h=t.callback||a,u=h,f=t.complete||a;i(c?t.yep:t.nope,!!d),d&&i(d)}var l,c,h=this.yepnope.loader;if(s(t))o(t,0,h,0);else if(C(t))for(l=0;t.length>l;l++)c=t[l],s(c)?o(c,0,h,0):C(c)?u(c):Object(c)===c&&r(c,h);else Object(t)===t&&r(t,h)},u.addPrefix=function(t,e){T[t]=e},u.addFilter=function(t){S.push(t)},u.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",h=function(){e.removeEventListener("DOMContentLoaded",h,0),e.readyState="complete"},0)),t.yepnope=d(),t.yepnope.executeStack=r,t.yepnope.injectJs=function(t,i,n,s,l,c){var d,h,f=e.createElement("script"),s=s||u.errorTimeout;f.src=t;for(h in n)f.setAttribute(h,n[h]);i=c?r:i||a,f.onreadystatechange=f.onload=function(){!d&&o(f.readyState)&&(d=1,i(),f.onload=f.onreadystatechange=null)},p(function(){d||(d=1,i(1))},s),l?f.onload():g.parentNode.insertBefore(f,g)},t.yepnope.injectCss=function(t,i,n,s,o,l){var c,s=e.createElement("link"),i=l?r:i||a;s.href=t,s.rel="stylesheet",s.type="text/css";for(c in n)s.setAttribute(c,n[c]);o||(g.parentNode.insertBefore(s,g),p(i,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("bgpositionxy",function(){return Modernizr.testStyles("#modernizr {background-position: 3px 5px;}",function(t){var e=window.getComputedStyle?getComputedStyle(t,null):t.currentStyle,i="3px"==e.backgroundPositionX||"3px"==e["background-position-x"],n="5px"==e.backgroundPositionY||"5px"==e["background-position-y"];return i&&n})}),function(){var t=document.createElement("a"),e=t.style,i="right 10px bottom 10px";Modernizr.addTest("bgpositionshorthand",function(){return e.cssText="background-position: "+i+";",e.backgroundPosition===i})}(),function(){function t(t){return window.getComputedStyle?getComputedStyle(t,null).getPropertyValue("background"):t.currentStyle.background}Modernizr.testStyles(" #modernizr { background-repeat: round; } ",function(e){Modernizr.addTest("bgrepeatround","round"==t(e))}),Modernizr.testStyles(" #modernizr { background-repeat: space; } ",function(e){Modernizr.addTest("bgrepeatspace","space"==t(e))})}(),Modernizr.testStyles("#modernizr{background-size:cover}",function(t){var e=window.getComputedStyle?window.getComputedStyle(t,null):t.currentStyle;Modernizr.addTest("bgsizecover","cover"==e.backgroundSize)}),Modernizr.addTest("csscalc",function(){var t="width:",e="calc(10px);",i=document.createElement("div");return i.style.cssText=t+Modernizr._prefixes.join(e+t),!!i.style.length}),Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("lastchild",function(){return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(t){return t.lastChild.offsetWidth>t.firstChild.offsetWidth},2)}),Modernizr.addTest("cssfilters",function(){var t=document.createElement("div");return t.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!t.style.length&&(void 0===document.documentMode||document.documentMode>9)}),Modernizr.addTest("overflowscrolling",function(){return Modernizr.testAllProps("overflowScrolling")}),Modernizr.addTest("placeholder",function(){return"placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea"))}),function(t,e){e.formvalidationapi=!1,e.formvalidationmessage=!1,e.addTest("formvalidation",function(){var i=t.createElement("form");if("checkValidity"in i&&"addEventListener"in i){if("reportValidity"in i)return!0;var n,s=!1;return e.formvalidationapi=!0,i.addEventListener("submit",function(t){window.opera||t.preventDefault(),t.stopPropagation()},!1),i.innerHTML='<input name="modTest" required><button></button>',e.testStyles("#modernizr form{position:absolute;top:-99999em}",function(t){t.appendChild(i),n=i.getElementsByTagName("input")[0],n.addEventListener("invalid",function(t){s=!0,t.preventDefault(),t.stopPropagation()},!1),e.formvalidationmessage=!!n.validationMessage,i.getElementsByTagName("button")[0].click()}),s}return!1})}(document,window.Modernizr),Modernizr.addTest("fileinput",function(){var t=document.createElement("input");return t.type="file",!t.disabled}),Modernizr.addTest("formattribute",function(){var t,e=document.createElement("form"),i=document.createElement("input"),n=document.createElement("div"),s="formtest"+(new Date).getTime(),a=!1;return e.id=s,document.createAttribute&&(t=document.createAttribute("form"),t.nodeValue=s,i.setAttributeNode(t),n.appendChild(e),n.appendChild(i),document.documentElement.appendChild(n),a=1===e.elements.length&&i.form==e,n.parentNode.removeChild(n)),a});