(this.webpackJsonpreisefradragskalkulator=this.webpackJsonpreisefradragskalkulator||[]).push([[0],{10:function(e,t,r){e.exports={App:"App_App__39lVC",App_header:"App_App_header__2wYIu","App-link":"App_App-link__LT79h"}},19:function(e,t,r){},2:function(e,t,r){e.exports={info_section:"Travels_info_section__2OeFf",subform_title:"Travels_subform_title__35JIy",input_container:"Travels_input_container__1Zt3t",input_container_li:"Travels_input_container_li__1uf8P",travel_form:"Travels_travel_form__1IPmi",travel_list:"Travels_travel_list__1sC5E",errorMessage:"Travels_errorMessage__1SlVV",errorMessage_li:"Travels_errorMessage_li__1fPee",errorMessage_utgift:"Travels_errorMessage_utgift__FTvKh",resultDisplay:"Travels_resultDisplay__1v4sh"}},22:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),c=r(13),i=r.n(c),s=(r(19),r(10)),l=r.n(s),u=r(12),o=r(5),j=r(4),b=r(6),f=r(1),d=r(2),O=r.n(d),g=r(11),m=r.n(g),p=r(14);function h(){return(h=Object(p.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag",e.next=3,fetch("https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return v(e)&&e>0}function _(e){return v(e)&&e>0}function v(e){return!isNaN(e)}function k(e){return e+"_"+(new Date).getTime()}var y=r(0);function C(e){var t=e.calculation,r=e.setCalculation,a=e.travelElement,c=e.name,i=e.title,s=Object(n.useState)({km:!1,antall:!1}),l=Object(o.a)(s,2),u=l[0],d=l[1],g=function(e){var n=t[c].map((function(t){return t.key===a.key?Object(f.a)(Object(f.a)({},t),{},{isEditing:e}):t}));r((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(j.a)({},c,Object(b.a)(n)))}))};return Object(y.jsxs)("li",{children:[a.isEditing?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:O.a.input_container_li,children:[Object(y.jsxs)("label",{children:["km:",Object(y.jsx)("input",{name:"km",type:"text",value:a.km,onChange:function(e){if(x(e.target.value)){var n=t[c].map((function(t){return t.key===a.key?Object(f.a)(Object(f.a)({},t),{},{km:Number(e.target.value)}):t}));r((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(j.a)({},c,Object(b.a)(n)))}))}else d((function(e){return Object(f.a)(Object(f.a)({},e),{},{km:!0})}))}})]}),u.km&&Object(y.jsx)("p",{className:O.a.errorMessage_li,children:"M\xe5 v\xe6re et tall st\xf8rre enn null"})]}),Object(y.jsxs)("div",{className:O.a.input_container_li,children:[Object(y.jsxs)("label",{children:["Antall:",Object(y.jsx)("input",{name:"antall",type:"text",value:a.antall,onChange:function(e){if(_(e.target.value)){var n=t[c].map((function(t){return t.key===a.key?Object(f.a)(Object(f.a)({},t),{},{antall:Number(e.target.value)}):t}));r((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(j.a)({},c,Object(b.a)(n)))}))}else d((function(e){return Object(f.a)(Object(f.a)({},e),{},{antall:!0})}))}})]}),u.antall&&Object(y.jsx)("p",{className:O.a.errorMessage_li,children:"M\xe5 v\xe6re et tall st\xf8rre enn null"})]}),Object(y.jsx)("button",{onClick:function(){return g(!1)},children:"Lagre"})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("p",{children:["km: ",a.km]}),Object(y.jsxs)("p",{children:["Antall: ",a.antall]}),Object(y.jsxs)("button",{onClick:function(){return g(!0)},children:["Endre ",i.toLowerCase().slice(0,-1)]})]}),Object(y.jsx)("button",{onClick:function(){var e=t[c].filter((function(e){return e.key!==a.key}));r((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(j.a)({},c,Object(b.a)(e)))}))},children:"Slett"})]},k("".concat(a.key,"_li")))}function N(e){var t,r=e.calculation,a=e.setCalculation,c=e.name,i=e.title,s=Object(n.useState)(!1),l=Object(o.a)(s,2),u=l[0],d=l[1];return Object(y.jsxs)("section",{children:[Object(y.jsx)("h3",{className:O.a.subform_title,children:i}),Object(y.jsxs)("form",{autoComplete:"off",className:O.a.travel_form,onSubmit:function(e){var t,r;e.preventDefault();var n=null===(t=e.currentTarget)||void 0===t?void 0:t.elements.km.value,i=null===(r=e.currentTarget)||void 0===r?void 0:r.elements.antall.value;if(function(e,t){return x(e)&&_(t)}(n,i)){!0===u&&d(!1);var s={km:Number(n),antall:Number(i),key:k(c),isEditing:!1};a((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(j.a)({},c,[].concat(Object(b.a)(e[c]),[s])))})),e.currentTarget.elements.km.value="",e.currentTarget.elements.antall.value=""}else d(!0)},children:[Object(y.jsx)("div",{className:O.a.input_container,children:Object(y.jsxs)("label",{children:["Lengde i km:",Object(y.jsx)("input",{name:"km",type:"text"})]})}),Object(y.jsx)("div",{className:O.a.input_container,children:Object(y.jsxs)("label",{children:["Antall forekomster av denne reisen:",Object(y.jsx)("input",{name:"antall",type:"text"})]})}),u&&Object(y.jsx)("p",{className:O.a.errorMessage,children:"Ugyldige verdier"}),Object(y.jsx)("button",{children:"Legg til"})]}),Object(y.jsx)("ul",{className:O.a.travel_list,children:(null===(t=r[c])||void 0===t?void 0:t.length)>0&&r[c].map((function(e){return Object(y.jsx)(C,{calculation:r,setCalculation:a,travelElement:e,name:c,title:i},k("TravelListElement_".concat(e.key)))}))}),Object(y.jsxs)("button",{onClick:function(){a((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(j.a)({},c,[]))}))},children:["T\xf8m listen over ",i.toLowerCase()]})]})}function T(e){var t=e.calculation,r=e.setCalculation,a=Object(n.useState)(!1),c=Object(o.a)(a,2),i=c[0],s=c[1];return Object(y.jsxs)("section",{children:[Object(y.jsx)("h3",{className:O.a.subform_title,children:"Utgifter"}),Object(y.jsx)("div",{className:O.a.input_container,children:Object(y.jsxs)("label",{children:["Sum av utgifter for bom, ferge, etc...",Object(y.jsx)("input",{autoComplete:"off",name:"utgifter",type:"text",value:t.utgifterBomFergeEtc,onChange:function(e){var t,n=e.target.value;v(t=n)||""===t?(!0===i&&s(!1),r((function(e){return Object(f.a)(Object(f.a)({},e),{},{utgifterBomFergeEtc:Number(n)})}))):s(!0)}}),i&&Object(y.jsx)("p",{className:O.a.errorMessage_utgift,children:"M\xe5 v\xe6re et tall"})]})})]})}function E(e){return 0===e.calculationResult?Object(y.jsxs)("section",{children:[Object(y.jsx)("h3",{children:"Resultat"}),Object(y.jsx)("p",{children:"Du f\xe5r ingen reisefradrag for gjeldende reiser og utgifter."})]}):Object(y.jsxs)("section",{children:[Object(y.jsx)("h3",{children:"Resultat"}),Object(y.jsx)("p",{children:"Din reisefradragsberegning ble beregnet til:"}),Object(y.jsx)("p",{className:O.a.resultDisplay,children:"".concat(e.calculationResult,",-")})]})}function F(){var e={arbeidsreiser:[],besoeksreiser:[],utgifterBomFergeEtc:""},t=Object(n.useState)(e),r=Object(o.a)(t,2),a=r[0],c=r[1],i=Object(n.useState)(-1),s=Object(o.a)(i,2),l=s[0],j=s[1];return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)(N,{calculation:a,setCalculation:c,name:"arbeidsreiser",title:"Arbeidsreiser"}),Object(y.jsx)(N,{calculation:a,setCalculation:c,name:"besoeksreiser",title:"Bes\xf8ksreiser"}),Object(y.jsx)(T,{calculation:a,setCalculation:c}),Object(y.jsxs)("section",{children:[Object(y.jsx)("button",{onClick:function(){var e={arbeidsreiser:[],besoeksreiser:[],utgifterBomFergeEtc:0};e.arbeidsreiser=a.arbeidsreiser.map((function(e){e.key,e.isEditing;return Object(u.a)(e,["key","isEditing"])})),e.besoeksreiser=a.besoeksreiser.map((function(e){e.key,e.isEditing;return Object(u.a)(e,["key","isEditing"])})),""===a.utgifterBomFergeEtc?e.utgifterBomFergeEtc=0:e.utgifterBomFergeEtc=a.utgifterBomFergeEtc,function(e){return h.apply(this,arguments)}(e).then((function(e){j(e.reisefradrag),window.scrollBy(0,400)})).catch((function(e){alert("Her har det skjedd en feil!"),console.log(e)}))},children:"Kalkuler"}),Object(y.jsx)("button",{onClick:function(){c(e),j(-1)},children:"Start med blanke ark"})]}),l>=0&&Object(y.jsx)(E,{calculationResult:l})]},"keykey")})}function A(){return Object(y.jsxs)("section",{className:O.a.info_section,children:[Object(y.jsx)("h3",{children:"Reisefradraget beregnes som f\xf8lger"}),Object(y.jsx)("p",{children:"Totalt antall kilometer beregnes for alle arbeids- og bes\xf8ksreiser. \xd8vre grense er 75 000 kilometer"}),Object(y.jsx)("p",{children:"Det gis kr 1,50/km i fradrag for reiser opp til 50 000 km, deretter 0,70 kr opp til 75 000 km"}),Object(y.jsx)("p",{children:"Hvis utgifter til bom, ferge etc. overstiger kr 3 400 s\xe5 gis hele bel\xf8pet i fradrag, ellers gis ingenting"}),Object(y.jsx)("p",{children:"Fra summen av kilometerfradraget og utgifter til bom, ferge etc. trekkes fra en egenandel p\xe5 kr 22 000."}),Object(y.jsx)("p",{children:"Resten er reisefradraget."})]})}var M=function(){return Object(y.jsxs)("div",{className:l.a.App,children:[Object(y.jsx)("header",{className:l.a.App_header,children:Object(y.jsx)("h1",{children:"Reisefradragsberegning \ud83d\udcb8"})}),Object(y.jsxs)("main",{children:[Object(y.jsx)(A,{}),Object(y.jsx)(F,{})]})]})},S=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,23)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root")),S()}},[[22,1,2]]]);
//# sourceMappingURL=main.b1de0b44.chunk.js.map