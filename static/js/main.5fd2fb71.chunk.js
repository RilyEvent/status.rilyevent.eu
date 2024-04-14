(this["webpackJsonpstatus-rilyevent-eu"]=this["webpackJsonpstatus-rilyevent-eu"]||[]).push([[0],{206:function(e,n,t){"use strict";t.r(n);var a,o,r,i,s,c,l,u,d,b,m,p,g,j,h,f,x,O,v,S,w,k,y,_,M,N,L,D=t(0),I=t.n(D),F=t(79),E=t.n(F),C=(t(92),t(4)),J=t(2),Y=t(87),z=t(5),T=t(3),A=(t(93),T.a.div(a||(a=Object(J.a)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 3px;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"])))),P=t(83),R=t.n(P),U=t(84),W=new R.a(U),B={operational:{name:"Operational",locName:W.components.operational,backgroundColour:"rgba(61, 167, 81, 0.1)"},performanceIssues:{name:"Performance Issues",locName:W.components.performanceIssues,backgroundColour:"rgba(73, 144, 226, 0.1)"},partialOutage:{name:"Partial Outage",locName:W.components.partialOutage,backgroundColour:"rgba(192, 138, 45, 0.1)"},majorOutage:{name:"Major Outage",locName:W.components.majorOutage,backgroundColour:"rgba(217, 68, 48, 0.1)"},maintenance:{name:"Maintenance",locName:W.components.maintenance,backgroundColour:"rgba(96, 96, 96, 0.1)"},unknown:{name:"Unknown",locName:W.components.unknown,backgroundColour:"rgba(177, 177, 177, 0.1)"}},H=function(e){var n=Object(D.useState)(),t=Object(C.a)(n,2),a=t[0],o=t[1];return Object(D.useEffect)((function(){o(Object.values(B).find((function(n){return e.find((function(e){return e.name===n.name.toLowerCase()}))})))}),[e]),a||o(B.unknown),[a]},K=t(1),G=T.a.div(o||(o=Object(J.a)(["\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(e){return e.backgroundColour})),Z=function(e){var n=e.labels,t=H(n),a=Object(C.a)(t,1)[0];return Object(K.jsx)(G,{className:"component-status ".concat(null===a||void 0===a?void 0:a.name.toLowerCase().replace(" ","")),backgroundColour:null===a||void 0===a?void 0:a.backgroundColour,children:null===a||void 0===a?void 0:a.locName})},$=t(85),q=t.n($),Q=function(e,n){var t=Object(D.useState)(),a=Object(C.a)(t,2),o=a[0],r=a[1];return Object(D.useEffect)((function(){var t=e.title;r(n.filter((function(e){var n=e.title.split(":");return e.labels.find((function(e){return"subcomponent"===e.name}))&&n.length>0&&n[0]===t})))}),[e,n]),o},V=T.a.div(r||(r=Object(J.a)(["\n  padding: 8px 16px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),X=function(e){var n=e.component,t=e.components,a=Object(D.useState)(!1),o=Object(C.a)(a,2),r=o[0],i=o[1],s=Q(n,t);if(n.labels.find((function(e){return"subcomponent"===e.name})))return null;if((null===s||void 0===s?void 0:s.length)>0&&!n.labels.find((function(e){return"maintenance"===e.name}))){var c=null===s||void 0===s?void 0:s.map((function(e){return Object(K.jsxs)(V,{className:"component collapsed",children:[Object(K.jsxs)("div",{children:[e.title.split(":")[1],e.body?Object(K.jsx)("span",{className:"component-body",children:e.body}):null]}),Object(K.jsx)(Z,{labels:e.labels})]},e.id)}));return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(V,{onClick:function(){return i(!r)},className:"component children",children:[Object(K.jsxs)("div",{children:[n.title,Object(K.jsx)("span",{className:"component-dropdown",children:r?"\u25ba":"\u25bc"}),n.body?Object(K.jsx)("span",{className:"component-body",children:n.body}):null]}),Object(K.jsx)(Z,{labels:n.labels})]}),Object(K.jsx)(q.a,{theme:{collapse:"collapse-component",content:"collapse-content"},isOpened:r,children:c})]})}return Object(K.jsxs)(V,{className:"component",children:[Object(K.jsxs)("div",{children:[n.title,n.body?Object(K.jsx)("span",{className:"component-body",children:n.body}):null]}),Object(K.jsx)(Z,{labels:n.labels})]})},ee=function(){var e=Object(D.useState)(),n=Object(C.a)(e,2),t=n[0],a=n[1];return Object(D.useEffect)((function(){a(!0)}),[]),[t]},ne=function(e){var n=e.loading,t=e.components,a=ee(),o=Object(C.a)(a,1)[0];return!n||o?(null===t||void 0===t?void 0:t.length)>0?null===t||void 0===t?void 0:t.sort((function(e,n){return e.title.localeCompare(n.title)})).map((function(e){return Object(K.jsx)(X,{component:e,components:t},e.id)})):Object(K.jsx)("p",{children:W.error.nocomponents}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(A,{}),Object(K.jsx)(A,{}),Object(K.jsx)(A,{})]})},te=T.a.div(i||(i=Object(J.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n"]))),ae=T.a.a(s||(s=Object(J.a)(["\n  font-size: 13px;\n  display: ",";\n"])),(function(e){return e.visible?"block":"none"})),oe=function(){return Object(K.jsxs)(te,{children:[Object(K.jsx)(ae,{visible:!0,href:"https://rilyevent.eu/terms",rel:"noopener",target:"_blank",children:W.general.imprint}),Object(K.jsx)(ae,{visible:!0,href:"https://github.com/tadhglewis/issue-status",rel:"noopener",target:"_blank",children:W.general.branding})]})},re=(T.a.h1(c||(c=Object(J.a)(["\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),T.a.img(l||(l=Object(J.a)([""])))),ie=T.a.div(u||(u=Object(J.a)(["\n  text-align: center;\n  margin-bottom: 16px;\n"]))),se=function(){return Object(K.jsx)(ie,{className:"app-header",children:Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(re,{className:"light-logo",src:"/logo.png",alt:"RilyEvent Server"}),Object(K.jsx)(re,{className:"dark-logo",src:"/logo_dark.png",alt:"RilyEvent Server"})]})})},ce=t(14),le=t.n(ce),ue=t(86),de=t.n(ue),be=T.a.div(d||(d=Object(J.a)(["\n  transition: 0.3s;\n  border-left: 16px solid\n    ",";\n  border-radius: 3px;\n  padding: 16px;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  margin-top: 8px;\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n"])),(function(e){return e.active?"rgba(177, 177, 177,0.2)":"rgba(213, 119, 51, 0.25)"})),me=T.a.div(b||(b=Object(J.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3px;\n"]))),pe=T.a.h3(m||(m=Object(J.a)(["\n  margin-right: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  margin-top: 0;\n"]))),ge=T.a.div(p||(p=Object(J.a)(["\n  white-space: break-spaces;\n"]))),je=T.a.div(g||(g=Object(J.a)(["\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(e){return e.active?"rgba(96, 96, 96, 0.1)":"rgba(73, 144, 226, 0.1)"})),he=T.a.div(j||(j=Object(J.a)(["\n  font-size: 13px;\n  color: #6e6b6b;\n  font-weight: bold;\n"]))),fe=function(e){var n=e.incident;return Object(K.jsxs)(be,{className:"incident-container",active:n.closed_at,children:[Object(K.jsxs)(me,{children:[Object(K.jsx)(he,{children:le()(n.created_at).format("LLL").toUpperCase()}),Object(K.jsx)(je,{className:n.closed_at?"incident-status":"activeIncident incident-status",active:n.closed_at,children:n.closed_at?W.incidents.closed:W.incidents.active})]}),Object(K.jsx)(pe,{children:n.title}),Object(K.jsx)(ge,{children:Object(K.jsx)(de.a,{className:"incident",children:n.body})})]})},xe=T.a.div(h||(h=Object(J.a)(["\n  width: 100%;\n  height: 84px;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),Oe=T.a.div(f||(f=Object(J.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n"]))),ve=T.a.div(x||(x=Object(J.a)(["\n  padding: 0 16px;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]))),Se=T.a.div(O||(O=Object(J.a)(["\n  margin: 0 8px;\n"]))),we=function(e){var n=e.loading,t=e.incidents,a=ee(),o=Object(C.a)(a,1)[0];return Object(K.jsxs)(Oe,{children:[Object(K.jsx)(ve,{children:W.incidents.title}),!n||o?(null===t||void 0===t?void 0:t.length)>0?null===t||void 0===t?void 0:t.map((function(e){return Object(K.jsx)(fe,{incident:e},e.id)})):Object(K.jsx)(Se,{children:W.error.noincidents}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(xe,{className:"incident-skeleton"}),Object(K.jsx)(xe,{className:"incident-skeleton"}),Object(K.jsx)(xe,{className:"incident-skeleton"})]})]})},ke={operational:{message:W.status.operational,name:"operational"},issues:{message:W.status.issues,name:"issues"},outage:{message:W.status.outage,name:"outage"}},ye=function(e,n){return 100*e.filter((function(e){return e.labels.find((function(e){return e.name===n}))})).length/e.length},_e=function(e){var n=Object(D.useState)(),t=Object(C.a)(n,2),a=t[0],o=t[1];return Object(D.useEffect)((function(){var n=!1;ye(e,"operational")<100&&(o(ke.issues),n=!0),ye(e.filter((function(e){return!e.labels.find((function(e){return"subcomponent"===e.name}))})),"major outage")>0&&(o(ke.outage),n=!0),n||o(ke.operational)}),[e]),[a]},Me=function(e,n){var t=Object(D.useState)(le()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow()),a=Object(C.a)(t,2),o=a[0],r=a[1];return Object(D.useEffect)((function(){var n=setInterval((function(){new Date(localStorage.getItem("issueStatusLastFetchcomponent"))<new Date-24e4?e((function(){r(le()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())})):r(le()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),1e3);return function(){clearInterval(n)}}),[e]),Object(D.useEffect)((function(){r(le()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),[n]),[o]},Ne=T.a.div(v||(v=Object(J.a)(["\n  background-color: ",";\n  color: white;\n  padding: 16px;\n  border-radius: 3px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: 0.3s;\n"])),(function(e){return e.backgroundColour?e.backgroundColour:"#b1b1b1"})),Le=T.a.h2(S||(S=Object(J.a)(["\n  font-size: 20px;\n  margin: 0;\n  font-weight: normal;\n"]))),De=T.a.span(w||(w=Object(J.a)(["\n  background-color: transparent;\n  text-align: right;\n  padding: 0;\n  font-size: 13px;\n"]))),Ie=T.a.button(k||(k=Object(J.a)(["\n  background-color: transparent;\n  color: white;\n  text-decoration: underline;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n"]))),Fe=T.a.code(y||(y=Object(J.a)(["\n  white-space: pre-wrap;\n  display: block;\n"]))),Ee=function(e){var n=e.loading,t=e.error,a=e.components,o=e.refetch,r=_e(a),i=Object(C.a)(r,1)[0],s=Me(o,n),c=Object(C.a)(s,1)[0];return Object(K.jsxs)(K.Fragment,{children:[t.hasError&&Object(K.jsxs)(Fe,{children:[Object(K.jsx)("div",{children:W.error.message.title}),Object(K.jsx)("div",{children:W.error.message.body}),JSON.stringify(t.errors,null,3)]}),Object(K.jsxs)(Ne,{className:"status-bar ".concat(null===i||void 0===i?void 0:i.name),backgroundColour:null===i||void 0===i?void 0:i.backgroundColour,children:[Object(K.jsx)(Le,{children:null===i||void 0===i?void 0:i.message}),Object(K.jsxs)(De,{children:[W.general.refresh,Object(K.jsx)(Ie,{onClick:o,children:n?W.general.refreshing:c})]})]})]})},Ce=function(e,n,t,a){e(!0),fetch("https://api.github.com/repos/".concat("RilyEvent/status.rilyevent.eu","/issues?state=all&labels=issue status,").concat(a)).then((function(e){return e.json()})).then((function(o){n(),localStorage.setItem("issueStatusLastFetch".concat(a),new Date),localStorage.setItem("issueStatus".concat(a),JSON.stringify(o)),t(o),e(!1)})).catch((function(o){n(o.toString()),localStorage.setItem("issueStatusLastFetch".concat(a),new Date),t(JSON.parse(localStorage.getItem("issueStatus".concat(a)))),e(!1)}))},Je=function(e){var n=Object(D.useState)([]),t=Object(C.a)(n,2),a=t[0],o=t[1],r=Object(D.useState)(),i=Object(C.a)(r,2),s=i[0],c=i[1],l=Object(D.useState)(!0),u=Object(C.a)(l,2),d=u[0],b=u[1];return Object(D.useEffect)((function(){new Date(localStorage.getItem("issueStatusLastFetch".concat(e)))<new Date-24e4?Ce(b,c,o,e):(o(JSON.parse(localStorage.getItem("issueStatus".concat(e)))),b(!1),c())}),[e]),[d,s,a||[],function(){return Ce(b,c,o,e)}]},Ye=T.a.div(_||(_=Object(J.a)(["\n  max-width: 1008px;\n  padding: 16px;\n  margin: 16px auto;\n"]))),ze=T.a.div(M||(M=Object(J.a)(["\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  padding: 16px;\n"]))),Te=T.a.div(N||(N=Object(J.a)(["\n  text-align: center;\n  margin: 75px 0;\n"]))),Ae=T.a.h1(L||(L=Object(J.a)(["\n  font-size: 42pt;\n  margin: 0;\n"]))),Pe=function(){document.getElementsByTagName("html")[0].setAttribute("lang",W.getLanguage());var e=Je("component"),n=Object(C.a)(e,4),t=n[0],a=n[1],o=n[2],r=n[3],i=Je("incident"),s=Object(C.a)(i,4),c=s[0],l=s[1],u=s[2],d=s[3];return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(ze,{className:"components-container",children:[Object(K.jsx)(Ee,{loading:t||c,error:{hasError:a||l,errors:{componentsError:a,incidentsError:l}},components:o,refetch:function(){r(),d()}}),Object(K.jsx)(ne,{loading:t,components:o})]}),Object(K.jsx)(we,{loading:c,incidents:u})]})},Re=function(){return Object(K.jsxs)(Te,{children:[Object(K.jsx)(Ae,{children:W.error.notfound.title}),Object(K.jsx)("p",{children:W.error.notfound.description}),Object(K.jsx)("p",{children:Object(K.jsx)("a",{href:"/",children:W.error.notfound.link})})]})},Ue=function(){return Object(K.jsxs)(Ye,{children:[Object(K.jsx)(se,{}),Object(K.jsx)(Y.a,{children:Object(K.jsxs)(z.c,{children:[Object(K.jsx)(z.a,{path:"/",exact:!0,component:Pe}),Object(K.jsx)(z.a,{path:"**",component:Re})]})}),Object(K.jsx)(oe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function We(e,n,t,a){var o={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return n?o[t][0]:o[t][1]}le.a.locale("de",{months:"Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm [Uhr]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT",sameElse:"L",nextDay:"[Morgen um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gestern um] LT",lastWeek:"[letzten] dddd [um] LT"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:We,mm:"%d Minuten",h:We,hh:"%d Stunden",d:We,dd:We,M:We,MM:We,y:We,yy:We},ordinal:"%d.",week:{dow:1,doy:4}}),le.a.locale(W.getLanguage()),E.a.render(Object(K.jsx)(I.a.StrictMode,{children:Object(K.jsx)(Ue,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e){e.exports=JSON.parse('{"en":{"error":{"noincidents":"No incidents found","nocomponents":"No components found","message":{"title":"An error occurred","body":"You may have exceeded the rate limit. Please try again in one hour."},"notfound":{"title":"404","description":"Seems like this page does not exist.","link":"Return"}},"general":{"refresh":"Last refresh: ","refreshing":"refreshing...","imprint":"Imprint & Privacy Policy","branding":"Powered by Issue Status"},"incidents":{"title":"Incidents","closed":"Resolved","active":"Active"},"components":{"operational":"Operational","performanceIssues":"Performance Issues","partialOutage":"Restricted","majorOutage":"Major Outage","maintenance":"Maintenance","unknown":"Unknown"},"status":{"operational":"All Systems Operational","issues":"Some systems are experiencing issues","outage":"Some systems are experiencing an outage"}},"de":{"error":{"noincidents":"Keine Meldungen gefunden","nocomponents":"Keine Komponenten gefunden","message":{"title":"Ein Fehler ist aufgetreten","body":"Du hast eventuell das Anfragenlimit \xfcberschritten. Bitte versuche es in einer Stunde erneut."},"notfound":{"title":"404","description":"Scheint so, als h\xe4ttest du dich verlaufen.","link":"Zur\xfcck zur Startseite"}},"general":{"refresh":"Zuletzt aktualisiert: ","refreshing":"laden ...","imprint":"Impressum & Datenschutzerkl\xe4rung","branding":"Powered by Issue Status"},"incidents":{"title":"Meldungen","closed":"Gel\xf6st","active":"Aktiv"},"components":{"operational":"Funktionsf\xe4hig","performanceIssues":"Leistungsprobleme","partialOutage":"Eingeschr\xe4nkt","majorOutage":"Ausfall","maintenance":"Wartungen","unknown":"Unbekannt"},"status":{"operational":"Alle Systeme funktionsf\xe4hig","issues":"Einige Systeme haben Probleme","outage":"Einige Systeme melden einen Ausfall"}}}')},92:function(e,n,t){},93:function(e,n,t){}},[[206,1,2]]]);
//# sourceMappingURL=main.5fd2fb71.chunk.js.map