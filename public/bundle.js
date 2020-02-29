!function(e){function t(t){for(var n,r,i=t[0],a=t[1],l=t[2],d=0,c=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(T,r)&&T[r]&&c.push(T[r][0]),T[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(D&&D(t);c.length;)c.shift()();return j.push.apply(j,l||[]),o()}function o(){for(var e,t=0;t<j.length;t++){for(var o=j[t],n=!0,r=1;r<o.length;r++){var i=o[r];0!==T[i]&&(n=!1)}n&&(j.splice(t--,1),e=M(M.s=o[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!x[e]||!w[e])return;for(var o in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,o)&&(v[o]=t[o]);0==--g&&0===b&&A()}(e,t),n&&n(e,t)};var r,i=!0,a="9f1b6379c637cd58d3b5",l={},d=[],c=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,o){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=o||function(){};else t._acceptedDependencies[e]=o||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._declinedDependencies[e[o]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var o=t._disposeHandlers.indexOf(e);o>=0&&t._disposeHandlers.splice(o,1)},check:k,apply:O,status:function(e){if(!e)return p;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var t=s.indexOf(e);t>=0&&s.splice(t,1)},data:l[e]};return r=void 0,t}var s=[],p="idle";function f(e){p=e;for(var t=0;t<s.length;t++)s[t].call(null,e)}var m,v,h,g=0,b=0,y={},w={},x={};function E(e){return+e+""===e?+e:e}function k(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,o){if("undefined"==typeof XMLHttpRequest)return o(new Error("No browser support"));try{var n=new XMLHttpRequest,r=M.p+""+a+".hot-update.json";n.open("GET",r,!0),n.timeout=t,n.send(null)}catch(e){return o(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)o(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)o(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void o(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;w={},y={},x=e.c,h=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var o in v={},T)_(o);return"prepare"===p&&0===b&&0===g&&A(),t}));var t}function _(e){x[e]?(w[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=M.p+""+e+"."+a+".hot-update.js",document.head.appendChild(t)}(e)):y[e]=!0}function A(){f("ready");var e=m;if(m=null,e)if(i)Promise.resolve().then((function(){return O(i)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var o in v)Object.prototype.hasOwnProperty.call(v,o)&&t.push(E(o));e.resolve(t)}}function O(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var o,n,r,i,c;function u(e){for(var t=[e],o={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var r=n.pop(),a=r.id,l=r.chain;if((i=S[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:l,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:l,moduleId:a};for(var d=0;d<i.parents.length;d++){var c=i.parents[d],u=S[c];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:l.concat([c]),moduleId:a,parentId:c};-1===t.indexOf(c)&&(u.hot._acceptedDependencies[a]?(o[c]||(o[c]=[]),s(o[c],[a])):(delete o[c],t.push(c),n.push({chain:l.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:o}}function s(e,t){for(var o=0;o<t.length;o++){var n=t[o];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var m={},g=[],b={},y=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var k;c=E(w);var _=!1,A=!1,O=!1,j="";switch((k=v[w]?u(c):{type:"disposed",moduleId:w}).chain&&(j="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+k.moduleId+j));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+j));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(_=new Error("Aborted because "+c+" is not accepted"+j));break;case"accepted":t.onAccepted&&t.onAccepted(k),A=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),O=!0;break;default:throw new Error("Unexception type "+k.type)}if(_)return f("abort"),Promise.reject(_);if(A)for(c in b[c]=v[c],s(g,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,c)&&(m[c]||(m[c]=[]),s(m[c],k.outdatedDependencies[c]));O&&(s(g,[k.moduleId]),b[c]=y)}var P,C=[];for(n=0;n<g.length;n++)c=g[n],S[c]&&S[c].hot._selfAccepted&&b[c]!==y&&C.push({module:c,errorHandler:S[c].hot._selfAccepted});f("dispose"),Object.keys(x).forEach((function(e){!1===x[e]&&function(e){delete T[e]}(e)}));for(var I,D,L=g.slice();L.length>0;)if(c=L.pop(),i=S[c]){var N={},B=i.hot._disposeHandlers;for(r=0;r<B.length;r++)(o=B[r])(N);for(l[c]=N,i.hot.active=!1,delete S[c],delete m[c],r=0;r<i.children.length;r++){var H=S[i.children[r]];H&&((P=H.parents.indexOf(c))>=0&&H.parents.splice(P,1))}}for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(i=S[c]))for(D=m[c],r=0;r<D.length;r++)I=D[r],(P=i.children.indexOf(I))>=0&&i.children.splice(P,1);for(c in f("apply"),a=h,b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);var R=null;for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(i=S[c])){D=m[c];var z=[];for(n=0;n<D.length;n++)if(I=D[n],o=i.hot._acceptedDependencies[I]){if(-1!==z.indexOf(o))continue;z.push(o)}for(n=0;n<z.length;n++){o=z[n];try{o(D)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:D[n],error:e}),t.ignoreErrored||R||(R=e)}}}for(n=0;n<C.length;n++){var U=C[n];c=U.module,d=[c];try{M(c)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(o){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:o,originalError:e}),t.ignoreErrored||R||(R=o),R||(R=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||R||(R=e)}}return R?(f("fail"),Promise.reject(R)):(f("idle"),new Promise((function(e){e(g)})))}var S={},T={7:0},j=[];function M(t){if(S[t])return S[t].exports;var o=S[t]={i:t,l:!1,exports:{},hot:u(t),parents:(c=d,d=[],c),children:[]};return e[t].call(o.exports,o,o.exports,function(e){var t=S[e];if(!t)return M;var o=function(o){return t.hot.active?(S[o]?-1===S[o].parents.indexOf(e)&&S[o].parents.push(e):(d=[e],r=o),-1===t.children.indexOf(o)&&t.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+e),d=[]),M(o)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(t){M[e]=t}}};for(var i in M)Object.prototype.hasOwnProperty.call(M,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(o,i,n(i));return o.e=function(e){return"ready"===p&&f("prepare"),b++,M.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===p&&(y[e]||_(e),0===b&&0===g&&A())}},o.t=function(e,t){return 1&t&&(e=o(e)),M.t(e,-2&t)},o}(t)),o.l=!0,o.exports}M.e=function(e){var t=[],o=T[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=T[e]=[t,n]}));t.push(o[2]=n);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,M.nc&&i.setAttribute("nonce",M.nc),i.src=function(e){return M.p+""+({0:"common",2:"About",3:"Home",4:"PageNotFound",5:"Pojects",6:"Post"}[e]||e)+".js"}(e);var a=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(l);var o=T[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",a.name="ChunkLoadError",a.type=n,a.request=r,o[1](a)}T[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},M.m=e,M.c=S,M.d=function(e,t,o){M.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},M.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,t){if(1&t&&(e=M(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(M.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)M.d(o,n,function(t){return e[t]}.bind(null,n));return o},M.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(t,"a",t),t},M.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},M.p="/",M.oe=function(e){throw console.error(e),e},M.h=function(){return a};var P=window.webpackJsonp=window.webpackJsonp||[],C=P.push.bind(P);P.push=t,P=P.slice();for(var I=0;I<P.length;I++)t(P[I]);var D=C;j.push([138,1]),o()}({138:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),i=o(42),a=o.n(i),l=o(11),d=o(9),c=(o(49),o(6)),u=(o(50),function(){return r.a.createElement(c.a.Consumer,null,(function(e){var t,o,n,i,a,l,d,c,u,s,p,f,m,v,h,g,b=null===(i=null===(n=null===(o=null===(t=e)||void 0===t?void 0:t.state)||void 0===o?void 0:o.AppState)||void 0===n?void 0:n.mainLoader)||void 0===i?void 0:i.enabled,y={backgroundColor:null===(c=null===(d=null===(l=null===(a=e)||void 0===a?void 0:a.state)||void 0===l?void 0:l.AppTheme)||void 0===d?void 0:d.MainLoader)||void 0===c?void 0:c.loaderAreaBackgroundColor,display:b?"block":"none"},w={backgroundColor:null===(f=null===(p=null===(s=null===(u=e)||void 0===u?void 0:u.state)||void 0===s?void 0:s.AppTheme)||void 0===p?void 0:p.MainLoader)||void 0===f?void 0:f.loaderBarBackgroundColor,boxShadow:null===(g=null===(h=null===(v=null===(m=e)||void 0===m?void 0:m.state)||void 0===v?void 0:v.AppTheme)||void 0===h?void 0:h.MainLoader)||void 0===g?void 0:g.loaderBarBoxShadow};return r.a.createElement("div",{className:"mainloader-wrapper",style:y},r.a.createElement("div",{className:"mainloader-loader",style:w}))}))}),s=o(2),p=(o(51),o.p+"images/close-button.svg"),f=r.a.memo((function(e){var t,o;return(null===(t=e)||void 0===t?void 0:t.menuItems)instanceof Array?r.a.createElement(r.a.Fragment,null,null===(o=e)||void 0===o?void 0:o.menuItems.map((function(t){var o,n,i,a,d;return r.a.createElement("div",{className:"mobile-menu-item",style:{borderBottom:null===(o=e)||void 0===o?void 0:o.borderBottom},key:null===(n=t)||void 0===n?void 0:n.id},r.a.createElement(l.b,{to:null===(i=t)||void 0===i?void 0:i.link,style:{color:null===(a=e)||void 0===a?void 0:a.color},onClick:e.onLinkClick},null===(d=t)||void 0===d?void 0:d.text))}))):r.a.createElement(r.a.Fragment,null)})),m=function(){return r.a.createElement(c.a.Consumer,null,(function(e){var t,o,n,i,a,l,d,c,u,m,v,h,g,b,y,w,x,E=null===(n=null===(o=null===(t=e)||void 0===t?void 0:t.state)||void 0===o?void 0:o.AppTheme)||void 0===n?void 0:n.MobileMenu;return r.a.createElement("div",{className:"mobile-menu-wrapper",style:{display:(null===(i=E)||void 0===i?void 0:i.open)?"flex":"none",backgroundColor:null===(d=null===(l=null===(a=E)||void 0===a?void 0:a.menuStyles)||void 0===l?void 0:l.wrapper)||void 0===d?void 0:d.backgroundColor}},r.a.createElement("div",{className:"mobile-menu-close-button",onClick:function(){var t;return null===(t=e)||void 0===t?void 0:t.dispatch({type:s.a})},style:{color:null===(m=null===(u=null===(c=E)||void 0===c?void 0:c.menuStyles)||void 0===u?void 0:u.closeButton)||void 0===m?void 0:m.color}},r.a.createElement("img",{src:p,alt:"Close Button"})),r.a.createElement("div",{className:"mobile-menu-item-container"},r.a.createElement(f,{menuItems:null===(v=E)||void 0===v?void 0:v.menuItems,color:null===(b=null===(g=null===(h=E)||void 0===h?void 0:h.menuStyles)||void 0===g?void 0:g.item)||void 0===b?void 0:b.color,borderBottom:null===(x=null===(w=null===(y=E)||void 0===y?void 0:y.menuStyles)||void 0===w?void 0:w.item)||void 0===x?void 0:x.borderBottom,onLinkClick:function(){var t;null===(t=e)||void 0===t||t.dispatch({type:s.a})}})))}))},v=o(32),h=o.p+"images/small-image.jpeg",g=(o(58),function(){return r.a.createElement(c.a.Consumer,null,(function(e){var t,o,n,i,a,d,c,u,p,f,m=null===(i=null===(n=null===(o=null===(t=e)||void 0===t?void 0:t.state)||void 0===o?void 0:o.AppTheme)||void 0===n?void 0:n.MainHeader)||void 0===i?void 0:i.headerStyles,g={backgroundColor:null===(a=m)||void 0===a?void 0:a.backgroundColor},b={backgroundColor:null===(d=m)||void 0===d?void 0:d.color},y=null===(f=null===(p=null===(u=null===(c=e)||void 0===c?void 0:c.state)||void 0===u?void 0:u.AppTheme)||void 0===p?void 0:p.MainHeader)||void 0===f?void 0:f.menuItems.map((function(e,t){var o,n,i;return r.a.createElement(l.b,{className:"menu-nav-item",to:null===(o=e)||void 0===o?void 0:o.link,style:{color:null===(n=m)||void 0===n?void 0:n.color,textDecoration:"none"},key:t},null===(i=e)||void 0===i?void 0:i.text)}));return r.a.createElement("div",{className:"main-header-wrapper"},r.a.createElement("div",{className:"main-header-left-content"},r.a.createElement("div",{className:"main-header-left-content-image-area"},r.a.createElement(v.a,{borderRadius:"100%",height:"100%",marginBottom:"0"},r.a.createElement("img",{src:h,alt:"Sayantan Ghosh Small Image",width:"100%",height:"100%",className:"main-header-left-content-image"}))),r.a.createElement("div",{className:"main-header-left-content-text"},"Sayantan Ghosh")),r.a.createElement("div",{className:"menu-button-wrapper",onClick:function(){var t;return null===(t=e)||void 0===t?void 0:t.dispatch({type:s.g})},style:g},r.a.createElement("div",{className:"menu-button-dot",style:b}),r.a.createElement("div",{className:"menu-button-dot",style:b}),r.a.createElement("div",{className:"menu-button-dot",style:b})),r.a.createElement("div",{className:"menu-nav-wrapper"},y))}))}),b=function(){return(b=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},y=function(e){return e},w=function(e,t){var o,n,r,i,a,l;switch(null===(o=t)||void 0===o?void 0:o.type){case s.g:return b(b({},e),{AppTheme:b(b({},e.AppTheme),{MobileMenu:b(b({},e.AppTheme.MobileMenu),{open:!0})})});case s.a:return b(b({},e),{AppTheme:b(b({},e.AppTheme),{MobileMenu:b(b({},e.AppTheme.MobileMenu),{open:!1})})});case s.c:return b(b({},e),{AppTheme:b({},e.AppTheme),AppState:b(b({},e.AppState),{mainLoader:b(b({},e.AppState.mainLoader),{enabled:!0})})});case s.b:return b(b({},e),{AppTheme:b({},e.AppTheme),AppState:b(b({},e.AppState),{mainLoader:b(b({},e.AppState.mainLoader),{enabled:!1})})});case s.i:return b(b({},e),{ProjectsData:b(b({},null===(n=e)||void 0===n?void 0:n.ProjectsData),{data:null===(r=t)||void 0===r?void 0:r.payload})});case s.j:return b(b({},e),{TimeLineData:b(b({},null===(i=e)||void 0===i?void 0:i.TimeLineData),{data:null===(a=t)||void 0===a?void 0:a.payload})});case s.h:return b(b({},e),{PostData:null===(l=t)||void 0===l?void 0:l.payload});default:return e}};var x=function(e,t){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var n,r,i=o.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}return a},E=r.a.lazy((function(){return Promise.all([o.e(0),o.e(3)]).then(o.bind(null,165))})),k=r.a.lazy((function(){return Promise.all([o.e(0),o.e(2)]).then(o.bind(null,163))})),_=r.a.lazy((function(){return Promise.all([o.e(0),o.e(5)]).then(o.bind(null,161))})),A=r.a.lazy((function(){return Promise.all([o.e(1),o.e(0),o.e(6)]).then(o.bind(null,164))})),O=r.a.lazy((function(){return Promise.all([o.e(0),o.e(4)]).then(o.bind(null,162))})),S=function(e){var t=x(r.a.useReducer(w,{AppTheme:{MainLoader:{loaderAreaBackgroundColor:"#efefef",loaderBarBackgroundColor:"darkcyan",loaderBarBoxShadow:"0 0 1px 1px #777888"},ContentLoadingIndicator:{width:"100%",height:"18px",backgroundColor:"rgba(205, 205, 205, 0.42)",borderRadius:"0",marginBottom:"10px"},MobileMenu:{menuItems:[{id:1,text:"Home",link:""},{id:2,text:"About",link:"/about"},{id:3,text:"Projects",link:"/projects"}],open:!1,menuStyles:{wrapper:{backgroundColor:"#589dd0"},item:{color:"#fff",borderBottom:"1px solid #fff"},closeButton:{color:"#fff"}}},MainHeader:{headerStyles:{backgroundColor:"#fff",color:"#589dd0"},menuItems:[{id:1,text:"Home",link:""},{id:2,text:"About",link:"/about"},{id:3,text:"Projects",link:"/projects"}]},Home:{homeStyles:{pageTitle:{color:"rgb(0, 83, 144)",fontSize:"2rem"}}},Post:{postStyles:{pageTitle:{color:"rgb(0, 83, 144)",fontSize:"2rem"}}},About:{aboutStyles:{pageTitle:{color:"rgb(0, 83, 144)",fontSize:"2rem"}}},Projects:{projectsStyles:{pageTitle:{color:"rgb(0, 83, 144)",fontSize:"2rem"}}}},AppState:{mainLoader:{enabled:!1}},ProjectsData:{data:[]},TimeLineData:{data:[]},PostData:{header:"",date:"",content:""}},y),2),o=t[0],n=t[1];return r.a.createElement(l.a,null,r.a.createElement(c.a.Provider,{value:{state:o,dispatch:n}},r.a.createElement(g,null),r.a.createElement(u,null),r.a.createElement(m,null),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("h3",null,"Loading...")},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:E}),r.a.createElement(d.b,{path:"/about",component:k}),r.a.createElement(d.b,{path:"/projects",component:_}),r.a.createElement(d.b,{exact:!0,path:"/posts/:postID",component:A}),r.a.createElement(d.b,{exact:!0,path:"/404",component:O}),r.a.createElement(d.a,{to:"/404"})))))};a.a.render(r.a.createElement(S,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then((function(e){return console.log("service worker registered")})).catch((function(e){return console.log("service worker could not be registered")}))},19:function(e,t,o){(t=o(15)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Sigmar+One&display=swap);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Crimson+Text:400&display=swap);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap);"]),t.push([e.i,"html,body{margin:0}\n",""]),e.exports=t},2:function(e,t,o){"use strict";o.d(t,"e",(function(){return n})),o.d(t,"f",(function(){return r})),o.d(t,"d",(function(){return i})),o.d(t,"g",(function(){return a})),o.d(t,"a",(function(){return l})),o.d(t,"c",(function(){return d})),o.d(t,"b",(function(){return c})),o.d(t,"i",(function(){return u})),o.d(t,"j",(function(){return s})),o.d(t,"h",(function(){return p}));var n="https://sayantan-ghosh.herokuapp.com/api/projects/getAll",r="https://sayantan-ghosh.herokuapp.com/api/getTimeLineItems",i="https://sayantan-ghosh.herokuapp.com/api/posts/get",a="OPEN_MOBILE_MENU",l="CLOSE_MOBILE_MENU",d="ENABLE_MAIN_LOADER_ACTION",c="DISABLE_MAIN_LOADER_ACTION",u="SET_PROJECTS_DATA_ACTION",s="SET_TIME_LINE_DATA_ACTION",p="SET_POST_DATA_ACTION"},20:function(e,t,o){(t=o(15)(!1)).push([e.i,".mainloader-wrapper{position:fixed;top:0;left:0;width:100%;overflow:hidden;height:2px;background-color:#efefef;z-index:3}.mainloader-loader{position:relative;width:45%;height:100%;margin-left:0;background-color:darkcyan;box-shadow:0 0 1px 1px #d68e30;-webkit-animation:2.5s ease-in-out 0s move-loader infinite;animation:2.5s ease-in-out 0s move-loader infinite}@-webkit-keyframes move-loader{0%{margin-left:0}50%{margin-left:55%}100%{margin-left:0}}@keyframes move-loader{0%{margin-left:0}50%{margin-left:55%}100%{margin-left:0}}\n",""]),e.exports=t},21:function(e,t,o){(t=o(15)(!1)).push([e.i,".mobile-menu-wrapper{position:fixed;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;flex-wrap:wrap;background-color:#589dd0;z-index:2}.mobile-menu-close-button{position:absolute;top:15px;right:calc(5% - 6px);width:20px;height:20px;color:#fff;cursor:pointer}.mobile-menu-close-button img{width:100%;height:100%}.mobile-menu-item{text-align:center;margin-bottom:20px;padding-bottom:6px;cursor:pointer;border-bottom:1px solid #fff}.mobile-menu-item a{text-decoration:none;color:#fff;font-size:2rem;font-family:'Sigmar One', cursive}\n",""]),e.exports=t},23:function(e,t,o){(t=o(15)(!1)).push([e.i,".content-loading-indicator-wrapper{height:18px;margin-bottom:10px;background-color:rgba(205,205,205,0.42)}\n",""]),e.exports=t},24:function(e,t,o){(t=o(15)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);"]),t.push([e.i,".main-header-wrapper{position:fixed;top:0;left:0;width:100%;height:50px;background:#fff;z-index:2}.main-header-left-content{position:absolute;left:5%;top:12px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.main-header-left-content-image-area{width:26px;height:26px;margin-right:10px}.main-header-left-content-image{width:100%;height:100%;border-radius:inherit}.main-header-left-content-text{font-family:'Roboto', sans-serif}.menu-button-wrapper{position:absolute;top:15px;right:5%;width:5px;height:20px;cursor:pointer}.menu-button-dot{background-color:#589dd0;width:100%;height:5px;border-radius:100%;margin-bottom:3px}.menu-button-dot:last-child{margin-bottom:0}.menu-nav-wrapper{position:absolute;top:15px;right:5%;display:none}.menu-nav-item{font-family:'Roboto', sans-serif;margin:0 5px}.menu-nav-item:first-child{margin:0 5px 0 0}.menu-nav-item:last-child{margin:0 0 0 5px}@media screen and (min-width: 600px){.menu-button-wrapper{display:none}.menu-nav-wrapper{display:-webkit-box;display:flex}}\n",""]),e.exports=t},32:function(e,t,o){"use strict";var n=o(0),r=o.n(n),i=o(6);o(57);t.a=function(e){return r.a.createElement(i.a.Consumer,null,(function(t){var o,n,i,a,l,d,c,u,s,p,f,m,v,h,g,b,y,w,x,E,k,_,A,O,S,T,j={width:(null===(o=e)||void 0===o?void 0:o.width)||(null===(l=null===(a=null===(i=null===(n=t)||void 0===n?void 0:n.state)||void 0===i?void 0:i.AppTheme)||void 0===a?void 0:a.ContentLoadingIndicator)||void 0===l?void 0:l.width),height:(null===(d=e)||void 0===d?void 0:d.height)||(null===(p=null===(s=null===(u=null===(c=t)||void 0===c?void 0:c.state)||void 0===u?void 0:u.AppTheme)||void 0===s?void 0:s.ContentLoadingIndicator)||void 0===p?void 0:p.height),backgroundColor:(null===(f=e)||void 0===f?void 0:f.backgroundColor)||(null===(g=null===(h=null===(v=null===(m=t)||void 0===m?void 0:m.state)||void 0===v?void 0:v.AppTheme)||void 0===h?void 0:h.ContentLoadingIndicator)||void 0===g?void 0:g.backgroundColor),borderRadius:(null===(b=e)||void 0===b?void 0:b.borderRadius)||(null===(E=null===(x=null===(w=null===(y=t)||void 0===y?void 0:y.state)||void 0===w?void 0:w.AppTheme)||void 0===x?void 0:x.ContentLoadingIndicator)||void 0===E?void 0:E.borderRadius),marginBottom:(null===(k=e)||void 0===k?void 0:k.marginBottom)||(null===(S=null===(O=null===(A=null===(_=t)||void 0===_?void 0:_.state)||void 0===A?void 0:A.AppTheme)||void 0===O?void 0:O.ContentLoadingIndicator)||void 0===S?void 0:S.marginBottom)};return r.a.createElement("div",{className:"content-loading-indicator-wrapper",style:j},null===(T=e)||void 0===T?void 0:T.children)}))}},49:function(e,t,o){var n=o(14),r=o(19);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=n(r,i),l=r.locals?r.locals:{};r.locals||e.hot.accept(19,(function(){var t=o(19);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),a(t)})),e.hot.dispose((function(){a()})),e.exports=l},50:function(e,t,o){var n=o(14),r=o(20);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=n(r,i),l=r.locals?r.locals:{};r.locals||e.hot.accept(20,(function(){var t=o(20);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),a(t)})),e.hot.dispose((function(){a()})),e.exports=l},51:function(e,t,o){var n=o(14),r=o(21);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=n(r,i),l=r.locals?r.locals:{};r.locals||e.hot.accept(21,(function(){var t=o(21);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),a(t)})),e.hot.dispose((function(){a()})),e.exports=l},57:function(e,t,o){var n=o(14),r=o(23);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=n(r,i),l=r.locals?r.locals:{};r.locals||e.hot.accept(23,(function(){var t=o(23);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),a(t)})),e.hot.dispose((function(){a()})),e.exports=l},58:function(e,t,o){var n=o(14),r=o(24);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=n(r,i),l=r.locals?r.locals:{};r.locals||e.hot.accept(24,(function(){var t=o(24);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),a(t)})),e.hot.dispose((function(){a()})),e.exports=l},6:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o(0),r=o.n(n).a.createContext({})}});
//# sourceMappingURL=bundle.js.map