(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(e,t,o){(t=o(9)(!1)).push([e.i,".projects-wrapper{position:absolute;top:10px;left:5%;width:90%;margin-bottom:10px;margin-bottom:30px}.projects-items-wrapper{margin-top:10px;display:-webkit-box;display:flex;-webkit-box-pack:space-evenly;justify-content:space-evenly;flex-wrap:wrap}.projects-item{box-sizing:border-box;width:100%;background-color:#fff;border-radius:3px;border:1px solid #cecece;margin:10px 0;padding:10px}.projects-item-title{width:100%;margin-bottom:20px}.projects-item-title a{text-decoration:none;font-size:22px;color:#005390;font-family:'Roboto', sans-serif}.projects-item-description{width:100%;font-size:14px;color:#444555;font-family:'Crimson Text', sans-serif;line-height:1}\n",""]),e.exports=t},165:function(e,t,o){var a=o(8),n=o(158);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1},l=a(n,i),r=n.locals?n.locals:{};n.locals||e.hot.accept(158,(function(){var t=o(158);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),l(t)})),e.hot.dispose((function(){l()})),e.exports=r},168:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),i=o(3),l=(o(165),o(37)),r=o(153),c=o(39),d=o(38),s=o(2),p=function(){return n.a.createElement("div",{style:{marginTop:"10px",width:"100%",height:"150px"}},n.a.createElement(c.a,null),n.a.createElement(c.a,null),n.a.createElement(c.a,null))},u=n.a.memo((function(e){var t,o;return(null===(t=e)||void 0===t?void 0:t.data)instanceof Array?n.a.createElement(n.a.Fragment,null,null===(o=e)||void 0===o?void 0:o.data.map((function(e){var t,o,a,i;return n.a.createElement("div",{className:"projects-item",key:null===(t=e)||void 0===t?void 0:t.id},n.a.createElement("div",{className:"projects-item-title"},n.a.createElement("a",{href:null===(o=e)||void 0===o?void 0:o.html_url,target:"_blank"},null===(a=e)||void 0===a?void 0:a.name)),n.a.createElement("div",{className:"projects-item-description"},null===(i=e)||void 0===i?void 0:i.description))}))):n.a.createElement(n.a.Fragment,null)}));t.default=function(e){var t=n.a.useContext(i.a),o=(t.state,t.dispatch);return n.a.useEffect((function(){o({type:s.c}),fetch(s.e).then((function(e){return e.json()})).then((function(e){o({type:s.k,payload:e}),o({type:s.b})})).catch((function(e){console.log(e),o({type:s.b})}))}),[]),n.a.createElement(i.a.Consumer,null,(function(e){var t,o,a,i,c,s,m,v,f,x,g,h,b,E,w,y=null===(i=null===(a=null===(o=null===(t=e)||void 0===t?void 0:t.state)||void 0===o?void 0:o.AppState)||void 0===a?void 0:a.mainLoader)||void 0===i?void 0:i.enabled,j=null===(v=null===(m=null===(s=null===(c=e)||void 0===c?void 0:c.state)||void 0===s?void 0:s.AppTheme)||void 0===m?void 0:m.Projects)||void 0===v?void 0:v.projectsStyles,k=null===(g=null===(x=null===(f=e)||void 0===f?void 0:f.state)||void 0===x?void 0:x.ProjectsData)||void 0===g?void 0:g.data,_=y?n.a.createElement(p,null):n.a.createElement(u,{data:k});return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"projects-wrapper"},n.a.createElement(r.a,{text:"Projects",textColor:null===(b=null===(h=j)||void 0===h?void 0:h.pageTitle)||void 0===b?void 0:b.color,fontSize:null===(w=null===(E=j)||void 0===E?void 0:E.pageTitle)||void 0===w?void 0:w.fontSize}),n.a.createElement("div",{className:"projects-items-wrapper"},_)))),n.a.createElement(d.a,null))}))}}}]);