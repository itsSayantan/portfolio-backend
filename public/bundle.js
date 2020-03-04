!function(e){function o(o){for(var n,i,r=o[0],a=o[1],l=o[2],d=0,c=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(S,i)&&S[i]&&c.push(S[i][0]),S[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(P&&P(o);c.length;)c.shift()();return N.push.apply(N,l||[]),t()}function t(){for(var e,o=0;o<N.length;o++){for(var t=N[o],n=!0,i=1;i<t.length;i++){var r=t[i];0!==S[r]&&(n=!1)}n&&(N.splice(o--,1),e=T(T.s=t[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,o){!function(e,o){if(!x[e]||!w[e])return;for(var t in w[e]=!1,o)Object.prototype.hasOwnProperty.call(o,t)&&(m[t]=o[t]);0==--g&&0===b&&A()}(e,o),n&&n(e,o)};var i,r=!0,a="400634f2263d07b77604",l={},d=[],c=[];function s(e){var o={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==e,active:!0,accept:function(e,t){if(void 0===e)o._selfAccepted=!0;else if("function"==typeof e)o._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)o._acceptedDependencies[e[n]]=t||function(){};else o._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)o._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)o._declinedDependencies[e[t]]=!0;else o._declinedDependencies[e]=!0},dispose:function(e){o._disposeHandlers.push(e)},addDisposeHandler:function(e){o._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=o._disposeHandlers.indexOf(e);t>=0&&o._disposeHandlers.splice(t,1)},check:k,apply:O,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var o=u.indexOf(e);o>=0&&u.splice(o,1)},data:l[e]};return i=void 0,o}var u=[],p="idle";function f(e){p=e;for(var o=0;o<u.length;o++)u[o].call(null,e)}var v,m,h,g=0,b=0,y={},w={},x={};function E(e){return+e+""===e?+e:e}function k(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(o=1e4,o=o||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,i=T.p+""+a+".hot-update.json";n.open("GET",i,!0),n.timeout=o,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+i+" failed."));else{try{var o=JSON.parse(n.responseText)}catch(e){return void t(e)}e(o)}}}))).then((function(e){if(!e)return f("idle"),null;w={},y={},x=e.c,h=e.h,f("prepare");var o=new Promise((function(e,o){v={resolve:e,reject:o}}));for(var t in m={},S)_(t);return"prepare"===p&&0===b&&0===g&&A(),o}));var o}function _(e){x[e]?(w[e]=!0,g++,function(e){var o=document.createElement("script");o.charset="utf-8",o.src=T.p+""+e+"."+a+".hot-update.js",document.head.appendChild(o)}(e)):y[e]=!0}function A(){f("ready");var e=v;if(v=null,e)if(r)Promise.resolve().then((function(){return O(r)})).then((function(o){e.resolve(o)}),(function(o){e.reject(o)}));else{var o=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&o.push(E(t));e.resolve(o)}}function O(o){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,n,i,r,c;function s(e){for(var o=[e],t={},n=o.map((function(e){return{chain:[e],id:e}}));n.length>0;){var i=n.pop(),a=i.id,l=i.chain;if((r=C[a])&&!r.hot._selfAccepted){if(r.hot._selfDeclined)return{type:"self-declined",chain:l,moduleId:a};if(r.hot._main)return{type:"unaccepted",chain:l,moduleId:a};for(var d=0;d<r.parents.length;d++){var c=r.parents[d],s=C[c];if(s){if(s.hot._declinedDependencies[a])return{type:"declined",chain:l.concat([c]),moduleId:a,parentId:c};-1===o.indexOf(c)&&(s.hot._acceptedDependencies[a]?(t[c]||(t[c]=[]),u(t[c],[a])):(delete t[c],o.push(c),n.push({chain:l.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:o,outdatedDependencies:t}}function u(e,o){for(var t=0;t<o.length;t++){var n=o[t];-1===e.indexOf(n)&&e.push(n)}}o=o||{};var v={},g=[],b={},y=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var w in m)if(Object.prototype.hasOwnProperty.call(m,w)){var k;c=E(w);var _=!1,A=!1,O=!1,N="";switch((k=m[w]?s(c):{type:"disposed",moduleId:w}).chain&&(N="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":o.onDeclined&&o.onDeclined(k),o.ignoreDeclined||(_=new Error("Aborted because of self decline: "+k.moduleId+N));break;case"declined":o.onDeclined&&o.onDeclined(k),o.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+N));break;case"unaccepted":o.onUnaccepted&&o.onUnaccepted(k),o.ignoreUnaccepted||(_=new Error("Aborted because "+c+" is not accepted"+N));break;case"accepted":o.onAccepted&&o.onAccepted(k),A=!0;break;case"disposed":o.onDisposed&&o.onDisposed(k),O=!0;break;default:throw new Error("Unexception type "+k.type)}if(_)return f("abort"),Promise.reject(_);if(A)for(c in b[c]=m[c],u(g,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,c)&&(v[c]||(v[c]=[]),u(v[c],k.outdatedDependencies[c]));O&&(u(g,[k.moduleId]),b[c]=y)}var M,j=[];for(n=0;n<g.length;n++)c=g[n],C[c]&&C[c].hot._selfAccepted&&b[c]!==y&&j.push({module:c,errorHandler:C[c].hot._selfAccepted});f("dispose"),Object.keys(x).forEach((function(e){!1===x[e]&&function(e){delete S[e]}(e)}));for(var I,P,D=g.slice();D.length>0;)if(c=D.pop(),r=C[c]){var B={},L=r.hot._disposeHandlers;for(i=0;i<L.length;i++)(t=L[i])(B);for(l[c]=B,r.hot.active=!1,delete C[c],delete v[c],i=0;i<r.children.length;i++){var H=C[r.children[i]];H&&((M=H.parents.indexOf(c))>=0&&H.parents.splice(M,1))}}for(c in v)if(Object.prototype.hasOwnProperty.call(v,c)&&(r=C[c]))for(P=v[c],i=0;i<P.length;i++)I=P[i],(M=r.children.indexOf(I))>=0&&r.children.splice(M,1);for(c in f("apply"),a=h,b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);var R=null;for(c in v)if(Object.prototype.hasOwnProperty.call(v,c)&&(r=C[c])){P=v[c];var z=[];for(n=0;n<P.length;n++)if(I=P[n],t=r.hot._acceptedDependencies[I]){if(-1!==z.indexOf(t))continue;z.push(t)}for(n=0;n<z.length;n++){t=z[n];try{t(P)}catch(e){o.onErrored&&o.onErrored({type:"accept-errored",moduleId:c,dependencyId:P[n],error:e}),o.ignoreErrored||R||(R=e)}}}for(n=0;n<j.length;n++){var U=j[n];c=U.module,d=[c];try{T(c)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){o.onErrored&&o.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:e}),o.ignoreErrored||R||(R=t),R||(R=e)}else o.onErrored&&o.onErrored({type:"self-accept-errored",moduleId:c,error:e}),o.ignoreErrored||R||(R=e)}}return R?(f("fail"),Promise.reject(R)):(f("idle"),new Promise((function(e){e(g)})))}var C={},S={7:0},N=[];function T(o){if(C[o])return C[o].exports;var t=C[o]={i:o,l:!1,exports:{},hot:s(o),parents:(c=d,d=[],c),children:[]};return e[o].call(t.exports,t,t.exports,function(e){var o=C[e];if(!o)return T;var t=function(t){return o.hot.active?(C[t]?-1===C[t].parents.indexOf(e)&&C[t].parents.push(e):(d=[e],i=t),-1===o.children.indexOf(t)&&o.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),T(t)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return T[e]},set:function(o){T[e]=o}}};for(var r in T)Object.prototype.hasOwnProperty.call(T,r)&&"e"!==r&&"t"!==r&&Object.defineProperty(t,r,n(r));return t.e=function(e){return"ready"===p&&f("prepare"),b++,T.e(e).then(o,(function(e){throw o(),e}));function o(){b--,"prepare"===p&&(y[e]||_(e),0===b&&0===g&&A())}},t.t=function(e,o){return 1&o&&(e=t(e)),T.t(e,-2&o)},t}(o)),t.l=!0,t.exports}T.e=function(e){var o=[],t=S[e];if(0!==t)if(t)o.push(t[2]);else{var n=new Promise((function(o,n){t=S[e]=[o,n]}));o.push(t[2]=n);var i,r=document.createElement("script");r.charset="utf-8",r.timeout=120,T.nc&&r.setAttribute("nonce",T.nc),r.src=function(e){return T.p+""+({0:"common",2:"About",3:"Home",4:"PageNotFound",5:"Post",6:"Projects"}[e]||e)+".js"}(e);var a=new Error;i=function(o){r.onerror=r.onload=null,clearTimeout(l);var t=S[e];if(0!==t){if(t){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,t[1](a)}S[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:r})}),12e4);r.onerror=r.onload=i,document.head.appendChild(r)}return Promise.all(o)},T.m=e,T.c=C,T.d=function(e,o,t){T.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},T.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.t=function(e,o){if(1&o&&(e=T(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(T.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)T.d(t,n,function(o){return e[o]}.bind(null,n));return t},T.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return T.d(o,"a",o),o},T.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},T.p="/",T.oe=function(e){throw console.error(e),e},T.h=function(){return a};var M=window.webpackJsonp=window.webpackJsonp||[],j=M.push.bind(M);M.push=o,M=M.slice();for(var I=0;I<M.length;I++)o(M[I]);var P=j;N.push([151,1]),t()}({151:function(e,o,t){"use strict";t.r(o);var n=t(0),i=t.n(n),r=t(48),a=t.n(r),l=t(13),d=t(11),c=t(49),s=t.n(c),u=(t(58),t(3)),p=(t(59),function(){return i.a.createElement(u.a.Consumer,null,(function(e){var o,t,n,r,a,l,d,c,s,u,p,f,v,m,h,g,b=null===(r=null===(n=null===(t=null===(o=e)||void 0===o?void 0:o.state)||void 0===t?void 0:t.AppState)||void 0===n?void 0:n.mainLoader)||void 0===r?void 0:r.enabled,y={backgroundColor:null===(c=null===(d=null===(l=null===(a=e)||void 0===a?void 0:a.state)||void 0===l?void 0:l.AppTheme)||void 0===d?void 0:d.MainLoader)||void 0===c?void 0:c.loaderAreaBackgroundColor,display:b?"block":"none"},w={backgroundColor:null===(f=null===(p=null===(u=null===(s=e)||void 0===s?void 0:s.state)||void 0===u?void 0:u.AppTheme)||void 0===p?void 0:p.MainLoader)||void 0===f?void 0:f.loaderBarBackgroundColor,boxShadow:null===(g=null===(h=null===(m=null===(v=e)||void 0===v?void 0:v.state)||void 0===m?void 0:m.AppTheme)||void 0===h?void 0:h.MainLoader)||void 0===g?void 0:g.loaderBarBoxShadow};return i.a.createElement("div",{className:"mainloader-wrapper",style:y},i.a.createElement("div",{className:"mainloader-loader",style:w}))}))}),f=t(2),v=(t(60),t.p+"images/close-button.svg"),m=i.a.memo((function(e){var o,t;return(null===(o=e)||void 0===o?void 0:o.menuItems)instanceof Array?i.a.createElement(i.a.Fragment,null,null===(t=e)||void 0===t?void 0:t.menuItems.map((function(o){var t,n,r,a,d;return i.a.createElement("div",{className:"mobile-menu-item",style:{borderBottom:null===(t=e)||void 0===t?void 0:t.borderBottom},key:null===(n=o)||void 0===n?void 0:n.id},i.a.createElement(l.b,{to:null===(r=o)||void 0===r?void 0:r.link,style:{color:null===(a=e)||void 0===a?void 0:a.color},onClick:e.onLinkClick},null===(d=o)||void 0===d?void 0:d.text))}))):i.a.createElement(i.a.Fragment,null)})),h=function(){return i.a.createElement(u.a.Consumer,null,(function(e){var o,t,n,r,a,l,d,c,s,u,p,h,g,b,y,w,x,E=null===(n=null===(t=null===(o=e)||void 0===o?void 0:o.state)||void 0===t?void 0:t.AppTheme)||void 0===n?void 0:n.MobileMenu;return i.a.createElement("div",{className:"mobile-menu-wrapper",style:{display:(null===(r=E)||void 0===r?void 0:r.open)?"flex":"none",backgroundColor:null===(d=null===(l=null===(a=E)||void 0===a?void 0:a.menuStyles)||void 0===l?void 0:l.wrapper)||void 0===d?void 0:d.backgroundColor}},i.a.createElement("div",{className:"mobile-menu-close-button",onClick:function(){var o;return null===(o=e)||void 0===o?void 0:o.dispatch({type:f.a})},style:{color:null===(u=null===(s=null===(c=E)||void 0===c?void 0:c.menuStyles)||void 0===s?void 0:s.closeButton)||void 0===u?void 0:u.color}},i.a.createElement("img",{src:v,alt:"Close Button"})),i.a.createElement("div",{className:"mobile-menu-item-container"},i.a.createElement(m,{menuItems:null===(p=E)||void 0===p?void 0:p.menuItems,color:null===(b=null===(g=null===(h=E)||void 0===h?void 0:h.menuStyles)||void 0===g?void 0:g.item)||void 0===b?void 0:b.color,borderBottom:null===(x=null===(w=null===(y=E)||void 0===y?void 0:y.menuStyles)||void 0===w?void 0:w.item)||void 0===x?void 0:x.borderBottom,onLinkClick:function(){var o;null===(o=e)||void 0===o||o.dispatch({type:f.a})}})))}))},g=t(39),b=t.p+"images/small-image.jpeg",y=(t(67),function(){return i.a.createElement(u.a.Consumer,null,(function(e){var o,t,n,r,a,d,c,s,u,p,v=null===(r=null===(n=null===(t=null===(o=e)||void 0===o?void 0:o.state)||void 0===t?void 0:t.AppTheme)||void 0===n?void 0:n.MainHeader)||void 0===r?void 0:r.headerStyles,m={backgroundColor:null===(a=v)||void 0===a?void 0:a.backgroundColor},h={backgroundColor:null===(d=v)||void 0===d?void 0:d.color},y=null===(p=null===(u=null===(s=null===(c=e)||void 0===c?void 0:c.state)||void 0===s?void 0:s.AppTheme)||void 0===u?void 0:u.MainHeader)||void 0===p?void 0:p.menuItems.map((function(e,o){var t,n,r;return i.a.createElement(l.b,{className:"menu-nav-item",to:null===(t=e)||void 0===t?void 0:t.link,style:{color:null===(n=v)||void 0===n?void 0:n.color,textDecoration:"none"},key:o},null===(r=e)||void 0===r?void 0:r.text)}));return i.a.createElement("div",{className:"main-header-wrapper"},i.a.createElement("div",{className:"main-header-left-content"},i.a.createElement("div",{className:"main-header-left-content-image-area"},i.a.createElement(g.a,{borderRadius:"100%",height:"100%",marginBottom:"0"},i.a.createElement("img",{src:b,alt:"Sayantan Ghosh Small Image",width:"100%",height:"100%",className:"main-header-left-content-image"}))),i.a.createElement("div",{className:"main-header-left-content-text"},"Sayantan Ghosh")),i.a.createElement("div",{className:"menu-button-wrapper",onClick:function(){var o;return null===(o=e)||void 0===o?void 0:o.dispatch({type:f.g})},style:m},i.a.createElement("div",{className:"menu-button-dot",style:h}),i.a.createElement("div",{className:"menu-button-dot",style:h}),i.a.createElement("div",{className:"menu-button-dot",style:h})),i.a.createElement("div",{className:"menu-nav-wrapper"},y))}))}),w=(t(68),i.a.memo((function(e){var o,t,n,r,a,l,d=i.a.useContext(u.a),c=(d.state,d.dispatch),s=null===(t=null===(o=e)||void 0===o?void 0:o.closeButton)||void 0===t?void 0:t.customProperties,p=null===(n=s)||void 0===n?void 0:n.styles;return i.a.createElement("div",{className:"app-notification-custom-close-button",style:{backgroundColor:null===(r=p)||void 0===r?void 0:r.backgroundColor,color:null===(a=p)||void 0===a?void 0:a.color},onClick:function(){var e,o,t,n;return t=null===(e=s)||void 0===e?void 0:e.keepOpen,n=null===(o=s)||void 0===o?void 0:o.onClick,void(t?n():(c({type:f.h}),n()))}},null===(l=s)||void 0===l?void 0:l.text)}))),x=i.a.memo((function(e){var o,t,n,r,a,l,d,c=i.a.createElement(i.a.Fragment,null),s=function(e){var o,t,n=null===(o=e)||void 0===o?void 0:o.type,i=null===(t=e)||void 0===t?void 0:t.styles;return-1===["info","warn","error","success"].indexOf(n)?{}:i[n]}(e),u=(null===(t=null===(o=e)||void 0===o?void 0:o.closeButton)||void 0===t?void 0:t.customProperties)?i.a.createElement(w,{closeButton:null===(n=e)||void 0===n?void 0:n.closeButton}):i.a.createElement("img",{src:v,alt:"Close Button",onClick:function(){var o,t,n;return null===(o=e)||void 0===o?void 0:o.onCloseAppNotification(null===(t=e)||void 0===t?void 0:t.message,null===(n=e)||void 0===n?void 0:n.type)}});return 0!==(null===(r=e)||void 0===r?void 0:r.message.trim().length)&&(c=i.a.createElement("div",{className:"app-notification-content",style:{backgroundColor:null===(a=s)||void 0===a?void 0:a.backgroundColor,color:null===(l=s)||void 0===l?void 0:l.color}},i.a.createElement("div",{className:"app-notification-message-section"},i.a.createElement("div",{className:"app-notification-message"},null===(d=e)||void 0===d?void 0:d.message)),i.a.createElement("div",{className:"app-notification-close"},u))),c})),E=function(){return i.a.createElement(u.a.Consumer,null,(function(e){var o,t,n,r,a,l,d,c=null===(n=null===(t=null===(o=e)||void 0===o?void 0:o.state)||void 0===t?void 0:t.AppState)||void 0===n?void 0:n.appNotification,s=null===(r=c)||void 0===r?void 0:r.closeButton;return i.a.createElement("div",{className:"app-notification-wrapper"},i.a.createElement(x,{styles:null===(a=c)||void 0===a?void 0:a.styles,message:null===(l=c)||void 0===l?void 0:l.message,type:null===(d=c)||void 0===d?void 0:d.type,onCloseAppNotification:function(){return function(){var o;null===(o=e)||void 0===o||o.dispatch({type:f.h})}()},closeButton:s}))}))},k=function(){return(k=Object.assign||function(e){for(var o,t=1,n=arguments.length;t<n;t++)for(var i in o=arguments[t])Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);return e}).apply(this,arguments)},_=function(e){return e},A=function(e,o){var t,n,i,r,a,l,d,c,s,u,p,v,m,h,g,b,y;switch(null===(t=o)||void 0===t?void 0:t.type){case f.g:return k(k({},e),{AppTheme:k(k({},e.AppTheme),{MobileMenu:k(k({},e.AppTheme.MobileMenu),{open:!0})})});case f.a:return k(k({},e),{AppTheme:k(k({},e.AppTheme),{MobileMenu:k(k({},e.AppTheme.MobileMenu),{open:!1})})});case f.c:return k(k({},e),{AppTheme:k({},e.AppTheme),AppState:k(k({},e.AppState),{mainLoader:k(k({},e.AppState.mainLoader),{enabled:!0})})});case f.b:return k(k({},e),{AppTheme:k({},e.AppTheme),AppState:k(k({},e.AppState),{mainLoader:k(k({},e.AppState.mainLoader),{enabled:!1})})});case f.k:return k(k({},e),{ProjectsData:k(k({},null===(n=e)||void 0===n?void 0:n.ProjectsData),{data:null===(i=o)||void 0===i?void 0:i.payload})});case f.l:return k(k({},e),{TimeLineData:k(k({},null===(r=e)||void 0===r?void 0:r.TimeLineData),{data:null===(a=o)||void 0===a?void 0:a.payload})});case f.j:return k(k({},e),{PostData:null===(l=o)||void 0===l?void 0:l.payload});case f.i:return k(k({},e),{AppState:k(k({},null===(d=e)||void 0===d?void 0:d.AppState),{appNotification:k(k({},null===(s=null===(c=e)||void 0===c?void 0:c.AppState)||void 0===s?void 0:s.appNotification),{message:null===(p=null===(u=o)||void 0===u?void 0:u.payload)||void 0===p?void 0:p.message,type:null===(m=null===(v=o)||void 0===v?void 0:v.payload)||void 0===m?void 0:m.type,closeButton:(null===(g=null===(h=o)||void 0===h?void 0:h.payload)||void 0===g?void 0:g.closeButton)||{}})})});case f.h:return k(k({},e),{AppState:k(k({},e.AppState),{appNotification:k(k({},null===(y=null===(b=e)||void 0===b?void 0:b.AppState)||void 0===y?void 0:y.appNotification),{message:"",type:"info",closeButton:{}})})});default:return e}};var O=t(37),C=t(38),S=(t(71),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.a,null,i.a.createElement("div",{className:"pwa-fallback-wrapper"},i.a.createElement("div",{className:"pwa-fallback-header"},"Oops!"),i.a.createElement("div",{className:"pwa-fallback-text"},"This page cannot be viewed in the offline mode. Please make sure you have an internet connection and refresh the page."))),i.a.createElement(C.a,null))}),N=function(e,o){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,i,r=t.call(e),a=[];try{for(;(void 0===o||o-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}return a},T=i.a.lazy((function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,172))})),M=i.a.lazy((function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,170))})),j=i.a.lazy((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,168))})),I=i.a.lazy((function(){return Promise.all([t.e(1),t.e(0),t.e(5)]).then(t.bind(null,171))})),P=i.a.lazy((function(){return t.e(4).then(t.bind(null,169))})),D=function(e){var o=N(i.a.useReducer(A,{AppTheme:{MainLoader:{loaderAreaBackgroundColor:"#efefef",loaderBarBackgroundColor:"darkcyan",loaderBarBoxShadow:"0 0 1px 1px #777888"},ContentLoadingIndicator:{width:"100%",height:"18px",backgroundColor:"rgba(205, 205, 205, 0.42)",borderRadius:"0",marginBottom:"10px"},MobileMenu:{menuItems:[{id:1,text:"Home",link:""},{id:2,text:"About",link:"/about"},{id:3,text:"Projects",link:"/projects"}],open:!1,menuStyles:{wrapper:{backgroundColor:"#589dd0"},item:{color:"#fff",borderBottom:"1px solid #fff"},closeButton:{color:"#fff"}}},MainHeader:{headerStyles:{backgroundColor:"#fff",color:"#589dd0"},menuItems:[{id:1,text:"Home",link:""},{id:2,text:"About",link:"/about"},{id:3,text:"Projects",link:"/projects"}]},Home:{homeStyles:{pageTitle:{color:"rgb(0, 83, 144)",fontSize:"2rem"}}},Post:{postStyles:{pageTitle:{color:"rgb(0, 83, 144)",fontSize:"2rem"}}},About:{aboutStyles:{pageTitle:{color:"rgb(0, 83, 144)",fontSize:"2rem"}}},Projects:{projectsStyles:{pageTitle:{color:"rgb(0, 83, 144)",fontSize:"2rem"}}}},AppState:{mainLoader:{enabled:!1},appNotification:{message:"",type:"info",styles:{info:{backgroundColor:"#589dd0",color:"#fff"},warn:{backgroundColor:"#e29e44",color:"#fff"},error:{backgroundColor:"#dc2f2f",color:"#fff"},success:{backgroundColor:"#228220",color:"#fff"}},closeButton:{}}},ProjectsData:{data:[]},TimeLineData:{data:[]},PostData:{header:"",date:"",content:""}},_),2),t=o[0],n=o[1];return i.a.createElement(l.a,null,i.a.createElement(u.a.Provider,{value:{state:t,dispatch:n}},i.a.createElement(y,null),i.a.createElement(p,null),i.a.createElement(h,null),i.a.createElement("div",{className:"app-content"},i.a.createElement("div",{className:"app-notification-section"},i.a.createElement(E,null)),i.a.createElement(i.a.Suspense,{fallback:i.a.createElement("h3",null,"Loading...")},i.a.createElement(s.a,{fallbackUI:function(){return i.a.createElement(S,null)}},i.a.createElement(d.d,null,i.a.createElement(d.b,{exact:!0,path:"/",component:T}),i.a.createElement(d.b,{path:"/about",component:M}),i.a.createElement(d.b,{path:"/projects",component:j}),i.a.createElement(d.b,{exact:!0,path:"/posts/:postID",component:I}),i.a.createElement(d.b,{exact:!0,path:"/404",component:P}),i.a.createElement(d.a,{to:"/404"})))))))};a.a.render(i.a.createElement(D,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js",{scope:"/"}).then((function(e){return console.log("service worker registered")})).catch((function(e){return console.log("service worker could not be registered")}))},2:function(e,o,t){"use strict";t.d(o,"e",(function(){return n})),t.d(o,"f",(function(){return i})),t.d(o,"d",(function(){return r})),t.d(o,"g",(function(){return a})),t.d(o,"a",(function(){return l})),t.d(o,"c",(function(){return d})),t.d(o,"b",(function(){return c})),t.d(o,"k",(function(){return s})),t.d(o,"l",(function(){return u})),t.d(o,"j",(function(){return p})),t.d(o,"i",(function(){return f})),t.d(o,"h",(function(){return v}));var n="https://sayantan-ghosh.herokuapp.com/api/projects/getAll",i="https://sayantan-ghosh.herokuapp.com/api/getTimeLineItems",r="https://sayantan-ghosh.herokuapp.com/api/posts/get",a="OPEN_MOBILE_MENU",l="CLOSE_MOBILE_MENU",d="ENABLE_MAIN_LOADER_ACTION",c="DISABLE_MAIN_LOADER_ACTION",s="SET_PROJECTS_DATA_ACTION",u="SET_TIME_LINE_DATA_ACTION",p="SET_POST_DATA_ACTION",f="SET_APP_NOTIFICATION_DATA_ACTION",v="RESET_APP_NOTIFICATION_DATA_ACTION"},20:function(e,o,t){(o=t(9)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Sigmar+One&display=swap);"]),o.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);"]),o.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Crimson+Text:400&display=swap);"]),o.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap);"]),o.push([e.i,"html,body{margin:0}.app-content{position:absolute;top:50px;left:0;width:100%}.app-notification-section{position:relative;left:0;width:100%}\n",""]),e.exports=o},21:function(e,o,t){(o=t(9)(!1)).push([e.i,".mainloader-wrapper{position:fixed;top:0;left:0;width:100%;overflow:hidden;height:2px;background-color:#efefef;z-index:3}.mainloader-loader{position:relative;width:45%;height:100%;margin-left:0;background-color:darkcyan;box-shadow:0 0 1px 1px #d68e30;-webkit-animation:2.5s ease-in-out 0s move-loader infinite;animation:2.5s ease-in-out 0s move-loader infinite}@-webkit-keyframes move-loader{0%{margin-left:0}50%{margin-left:55%}100%{margin-left:0}}@keyframes move-loader{0%{margin-left:0}50%{margin-left:55%}100%{margin-left:0}}\n",""]),e.exports=o},22:function(e,o,t){(o=t(9)(!1)).push([e.i,".mobile-menu-wrapper{position:fixed;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;flex-wrap:wrap;background-color:#589dd0;z-index:2}.mobile-menu-close-button{position:absolute;top:15px;right:calc(5% - 6px);width:20px;height:20px;color:#fff;cursor:pointer}.mobile-menu-close-button img{width:100%;height:100%}.mobile-menu-item{text-align:center;margin-bottom:20px;padding-bottom:6px;cursor:pointer;border-bottom:1px solid #fff}.mobile-menu-item a{text-decoration:none;color:#fff;font-size:2rem;font-family:'Sigmar One', cursive}\n",""]),e.exports=o},24:function(e,o,t){(o=t(9)(!1)).push([e.i,".content-loading-indicator-wrapper{height:18px;margin-bottom:10px;background-color:rgba(205,205,205,0.42)}\n",""]),e.exports=o},25:function(e,o,t){(o=t(9)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);"]),o.push([e.i,".main-header-wrapper{position:fixed;top:0;left:0;width:100%;height:50px;background:#fff;z-index:2}.main-header-left-content{position:absolute;left:5%;top:12px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.main-header-left-content-image-area{width:26px;height:26px;margin-right:10px}.main-header-left-content-image{width:100%;height:100%;border-radius:inherit}.main-header-left-content-text{font-family:'Roboto', sans-serif}.menu-button-wrapper{position:absolute;top:15px;right:5%;width:5px;height:20px;cursor:pointer}.menu-button-dot{background-color:#589dd0;width:100%;height:5px;border-radius:100%;margin-bottom:3px}.menu-button-dot:last-child{margin-bottom:0}.menu-nav-wrapper{position:absolute;top:15px;right:5%;display:none}.menu-nav-item{font-family:'Roboto', sans-serif;margin:0 5px}.menu-nav-item:first-child{margin:0 5px 0 0}.menu-nav-item:last-child{margin:0 0 0 5px}@media screen and (min-width: 600px){.menu-button-wrapper{display:none}.menu-nav-wrapper{display:-webkit-box;display:flex}}\n",""]),e.exports=o},26:function(e,o,t){(o=t(9)(!1)).push([e.i,".app-notification-wrapper{position:relative;left:0;width:100%}.app-notification-content{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;position:relative;background-color:#589dd0;left:5%;width:90%;padding:10px;box-sizing:border-box}.app-notification-message-section{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding-right:5px;word-break:break-all}.app-notification-message{font-size:0.8rem;color:#fff;font-family:'Roboto', sans-serif}.app-notification-close img{width:10px;height:10px;padding-left:5px;cursor:pointer}.app-notification-custom-close-button{padding:3px 5px;font-size:0.8rem;font-family:'Roboto', sans-serif;border-radius:3px;background-color:#2e76ad;color:#fff;cursor:pointer}@media screen and (min-width: 768px){.app-notification-wrapper{left:15%;width:70%}}@media screen and (min-width: 1024px){.app-notification-wrapper{left:25%;width:50%}}\n",""]),e.exports=o},27:function(e,o,t){(o=t(9)(!1)).push([e.i,".main-layout-wrapper{position:relative;left:0;width:100%;background-color:#fff}@media screen and (min-width: 768px){.main-layout-wrapper{left:15%;width:70%}}@media screen and (min-width: 1024px){.main-layout-wrapper{left:25%;width:50%}}\n",""]),e.exports=o},28:function(e,o,t){(o=t(9)(!1)).push([e.i,".global-footer-wrapper{position:fixed;bottom:0;left:0;width:100%;background-color:#fff;padding:5px;box-sizing:border-box;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.global-footer-copyright-text{font-size:0.8rem;font-family:'Roboto', sans-serif;color:#666777}.version-number{font-size:0.8rem;font-family:'Roboto', sans-serif;color:#666777}\n",""]),e.exports=o},29:function(e,o,t){(o=t(9)(!1)).push([e.i,".pwa-fallback-wrapper{position:absolute;top:10px;left:5%;width:90%;margin-bottom:30px}.pwa-fallback-header{font-size:3rem;font-family:'Odibee Sans', cursive;text-align:center;color:#005390;margin-bottom:20px}.pwa-fallback-text{text-align:center;font-size:1.2rem;font-family:'Roboto', sans-serif}\n",""]),e.exports=o},3:function(e,o,t){"use strict";t.d(o,"a",(function(){return i}));var n=t(0),i=t.n(n).a.createContext({})},37:function(e,o,t){"use strict";var n=t(0),i=t.n(n);t(69);o.a=function(e){return i.a.createElement("div",{className:"main-layout-wrapper"},e.children)}},38:function(e,o,t){"use strict";var n=t(0),i=t.n(n);t(70);o.a=function(){return i.a.createElement("div",{className:"global-footer-wrapper"},i.a.createElement("div",{className:"global-footer-copyright-text"},"Copyright © Sayantan Ghosh"),i.a.createElement("div",{className:"version-number"},"v1.1.0"))}},39:function(e,o,t){"use strict";var n=t(0),i=t.n(n),r=t(3);t(66);o.a=function(e){return i.a.createElement(r.a.Consumer,null,(function(o){var t,n,r,a,l,d,c,s,u,p,f,v,m,h,g,b,y,w,x,E,k,_,A,O,C,S,N={width:(null===(t=e)||void 0===t?void 0:t.width)||(null===(l=null===(a=null===(r=null===(n=o)||void 0===n?void 0:n.state)||void 0===r?void 0:r.AppTheme)||void 0===a?void 0:a.ContentLoadingIndicator)||void 0===l?void 0:l.width),height:(null===(d=e)||void 0===d?void 0:d.height)||(null===(p=null===(u=null===(s=null===(c=o)||void 0===c?void 0:c.state)||void 0===s?void 0:s.AppTheme)||void 0===u?void 0:u.ContentLoadingIndicator)||void 0===p?void 0:p.height),backgroundColor:(null===(f=e)||void 0===f?void 0:f.backgroundColor)||(null===(g=null===(h=null===(m=null===(v=o)||void 0===v?void 0:v.state)||void 0===m?void 0:m.AppTheme)||void 0===h?void 0:h.ContentLoadingIndicator)||void 0===g?void 0:g.backgroundColor),borderRadius:(null===(b=e)||void 0===b?void 0:b.borderRadius)||(null===(E=null===(x=null===(w=null===(y=o)||void 0===y?void 0:y.state)||void 0===w?void 0:w.AppTheme)||void 0===x?void 0:x.ContentLoadingIndicator)||void 0===E?void 0:E.borderRadius),marginBottom:(null===(k=e)||void 0===k?void 0:k.marginBottom)||(null===(C=null===(O=null===(A=null===(_=o)||void 0===_?void 0:_.state)||void 0===A?void 0:A.AppTheme)||void 0===O?void 0:O.ContentLoadingIndicator)||void 0===C?void 0:C.marginBottom)};return i.a.createElement("div",{className:"content-loading-indicator-wrapper",style:N},null===(S=e)||void 0===S?void 0:S.children)}))}},58:function(e,o,t){var n=t(8),i=t(20);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=n(i,r),l=i.locals?i.locals:{};i.locals||e.hot.accept(20,(function(){var o=t(20);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),a(o)})),e.hot.dispose((function(){a()})),e.exports=l},59:function(e,o,t){var n=t(8),i=t(21);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=n(i,r),l=i.locals?i.locals:{};i.locals||e.hot.accept(21,(function(){var o=t(21);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),a(o)})),e.hot.dispose((function(){a()})),e.exports=l},60:function(e,o,t){var n=t(8),i=t(22);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=n(i,r),l=i.locals?i.locals:{};i.locals||e.hot.accept(22,(function(){var o=t(22);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),a(o)})),e.hot.dispose((function(){a()})),e.exports=l},66:function(e,o,t){var n=t(8),i=t(24);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=n(i,r),l=i.locals?i.locals:{};i.locals||e.hot.accept(24,(function(){var o=t(24);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),a(o)})),e.hot.dispose((function(){a()})),e.exports=l},67:function(e,o,t){var n=t(8),i=t(25);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=n(i,r),l=i.locals?i.locals:{};i.locals||e.hot.accept(25,(function(){var o=t(25);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),a(o)})),e.hot.dispose((function(){a()})),e.exports=l},68:function(e,o,t){var n=t(8),i=t(26);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=n(i,r),l=i.locals?i.locals:{};i.locals||e.hot.accept(26,(function(){var o=t(26);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),a(o)})),e.hot.dispose((function(){a()})),e.exports=l},69:function(e,o,t){var n=t(8),i=t(27);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=n(i,r),l=i.locals?i.locals:{};i.locals||e.hot.accept(27,(function(){var o=t(27);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),a(o)})),e.hot.dispose((function(){a()})),e.exports=l},70:function(e,o,t){var n=t(8),i=t(28);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=n(i,r),l=i.locals?i.locals:{};i.locals||e.hot.accept(28,(function(){var o=t(28);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),a(o)})),e.hot.dispose((function(){a()})),e.exports=l},71:function(e,o,t){var n=t(8),i=t(29);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=n(i,r),l=i.locals?i.locals:{};i.locals||e.hot.accept(29,(function(){var o=t(29);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]),a(o)})),e.hot.dispose((function(){a()})),e.exports=l}});