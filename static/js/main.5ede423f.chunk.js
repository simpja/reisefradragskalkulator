(this.webpackJsonpreisefradragskalkulator=this.webpackJsonpreisefradragskalkulator||[]).push([[0],{15:function(e,t,r){e.exports={info:"CalculatorInfo_info__1vJny"}},2:function(e,t,r){e.exports={subform_title:"Arbeidsreiser_subform_title__p_dr1",input_container:"Arbeidsreiser_input_container__2EmFD",arbeidsreiser_form:"Arbeidsreiser_arbeidsreiser_form__2nbf2",arbeidsreiser_list:"Arbeidsreiser_arbeidsreiser_list__2oxwN"}},20:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var n=r(4),i=r.n(n),a=r(13),s=r.n(a),c=(r(20),r(8)),l=r.n(c),o=r(12),b=r(11),u=r(9),j=r.n(u),d=r(3),m=r(1),O=r(2),f=r.n(O);function k(e){return e+"_"+(new Date).getTime()}var p=r(0);function g(e){var t=e.calculation,r=e.setCalculation,n=e.arbeidsreiseElement,i=function(e){var i=t.arbeidsreiser.map((function(t){return t.key===n.key?Object(m.a)(Object(m.a)({},t),{},{isEditing:e}):t}));r((function(e){return Object(m.a)(Object(m.a)({},e),{},{arbeidsreiser:Object(d.a)(i)})}))};return Object(p.jsxs)("li",{children:[n.isEditing?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:f.a.input_container,children:Object(p.jsxs)("label",{children:["Lengde i km:",Object(p.jsx)("input",{name:"km",type:"text",value:n.km,onChange:function(e){var i=t.arbeidsreiser.map((function(t){return t.key===n.key?Object(m.a)(Object(m.a)({},t),{},{km:Number(e.target.value)}):t}));r((function(e){return Object(m.a)(Object(m.a)({},e),{},{arbeidsreiser:Object(d.a)(i)})}))}})]})}),Object(p.jsx)("div",{className:f.a.input_container,children:Object(p.jsxs)("label",{children:["Antall forekomster av denne reisen:",Object(p.jsx)("input",{name:"antall",type:"text",value:n.antall,onChange:function(e){var i=t.arbeidsreiser.map((function(t){return t.key===n.key?Object(m.a)(Object(m.a)({},t),{},{antall:Number(e.target.value)}):t}));r((function(e){return Object(m.a)(Object(m.a)({},e),{},{arbeidsreiser:Object(d.a)(i)})}))}})]})}),Object(p.jsx)("button",{onClick:function(){return i(!1)},children:"Lagre"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{children:["km: ",n.km]}),Object(p.jsxs)("p",{children:["Antall: ",n.antall]}),Object(p.jsx)("button",{onClick:function(){return i(!0)},children:"Endre arbeidsreise"})]}),Object(p.jsx)("button",{onClick:function(){var e=t.arbeidsreiser.filter((function(e){return e.key!==n.key}));r((function(t){return Object(m.a)(Object(m.a)({},t),{},{arbeidsreiser:Object(d.a)(e)})}))},children:"Slett"})]},k("".concat(n.key,"_li")))}function h(e){var t,r=e.calculation,n=e.setCalculation;return Object(p.jsxs)("section",{className:f.a.arbeidsreiser,children:[Object(p.jsx)("h3",{className:f.a.subform_title,children:"Arbeidsreiser"}),Object(p.jsxs)("form",{autoComplete:"off",className:f.a.arbeidsreiser_form,onSubmit:function(e){var t,r;e.preventDefault();var i={km:Number(null===(t=e.currentTarget)||void 0===t?void 0:t.elements.km.value),antall:Number(null===(r=e.currentTarget)||void 0===r?void 0:r.elements.antall.value),key:k("arbeidsreise"),isEditing:!1};n((function(e){return Object(m.a)(Object(m.a)({},e),{},{arbeidsreiser:[].concat(Object(d.a)(e.arbeidsreiser),[i])})})),e.currentTarget.elements.km.value="",e.currentTarget.elements.antall.value=""},children:[Object(p.jsx)("div",{className:f.a.input_container,children:Object(p.jsxs)("label",{children:["Lengde i km:",Object(p.jsx)("input",{name:"km",type:"text"})]})}),Object(p.jsx)("div",{className:f.a.input_container,children:Object(p.jsxs)("label",{children:["Antall forekomster av denne reisen:",Object(p.jsx)("input",{name:"antall",type:"text"})]})}),Object(p.jsx)("button",{children:"Add"})]}),Object(p.jsx)("ul",{className:f.a.arbeidsreiser_list,children:(null===(t=r.arbeidsreiser)||void 0===t?void 0:t.length)>0&&r.arbeidsreiser.map((function(e){return Object(p.jsx)(g,{arbeidsreiseElement:e,calculation:r,setCalculation:n},k("".concat(e.key,"_arbeidsreiseElement")))}))}),Object(p.jsx)("button",{onClick:function(){n((function(e){return Object(m.a)(Object(m.a)({},e),{},{arbeidsreiser:[]})}))},children:"T\xf8m listen over arbeidsreiser"})]})}function x(e){var t=e.calculation,r=e.setCalculation,n=e.besoeksreiseElement,i=function(e){var i=t.besoeksreiser.map((function(t){return t.key===n.key?Object(m.a)(Object(m.a)({},t),{},{isEditing:e}):t}));r((function(e){return Object(m.a)(Object(m.a)({},e),{},{besoeksreiser:Object(d.a)(i)})}))};return Object(p.jsxs)("li",{children:[n.isEditing?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:f.a.input_container,children:Object(p.jsxs)("label",{children:["Lengde i km:",Object(p.jsx)("input",{name:"km",type:"text",value:n.km,onChange:function(e){var i=t.besoeksreiser.map((function(t){return t.key===n.key?Object(m.a)(Object(m.a)({},t),{},{km:Number(e.target.value)}):t}));r((function(e){return Object(m.a)(Object(m.a)({},e),{},{besoeksreiser:Object(d.a)(i)})}))}})]})}),Object(p.jsx)("div",{className:f.a.input_container,children:Object(p.jsxs)("label",{children:["Antall forekomster av denne reisen:",Object(p.jsx)("input",{name:"antall",type:"text",value:n.antall,onChange:function(e){var i=t.besoeksreiser.map((function(t){return t.key===n.key?Object(m.a)(Object(m.a)({},t),{},{antall:Number(e.target.value)}):t}));r((function(e){return Object(m.a)(Object(m.a)({},e),{},{besoeksreiser:Object(d.a)(i)})}))}})]})}),Object(p.jsx)("button",{onClick:function(){return i(!1)},children:"Lagre"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{children:["km: ",n.km]}),Object(p.jsxs)("p",{children:["Antall: ",n.antall]}),Object(p.jsx)("button",{onClick:function(){return i(!0)},children:"Endre besoeksreise"})]}),Object(p.jsx)("button",{onClick:function(){var e=t.besoeksreiser.filter((function(e){return e.key!==n.key}));r((function(t){return Object(m.a)(Object(m.a)({},t),{},{besoeksreiser:Object(d.a)(e)})}))},children:"Slett"})]},k("".concat(n.key,"_li")))}function v(e){var t,r=e.calculation,n=e.setCalculation;return Object(p.jsxs)("section",{className:f.a.arbeidsreiser,children:[Object(p.jsx)("h3",{className:f.a.subform_title,children:"Bes\xf8ksreiser"}),Object(p.jsxs)("form",{autoComplete:"off",className:f.a.arbeidsreiser_form,onSubmit:function(e){var t;e.preventDefault();var r={km:Number(null===(t=e.currentTarget)||void 0===t?void 0:t.elements.km.value),antall:Number(e.currentTarget.elements.antall.value),key:k("besoeksreise"),isEditing:!1};n((function(e){return Object(m.a)(Object(m.a)({},e),{},{besoeksreiser:[].concat(Object(d.a)(e.besoeksreiser),[r])})})),e.currentTarget.elements.km.value="",e.currentTarget.elements.antall.value=""},children:[Object(p.jsx)("div",{className:f.a.input_container,children:Object(p.jsxs)("label",{children:["Lengde i km:",Object(p.jsx)("input",{name:"km",type:"text"})]})}),Object(p.jsx)("div",{className:f.a.input_container,children:Object(p.jsxs)("label",{children:["Antall forekomster av denne reisen:",Object(p.jsx)("input",{name:"antall",type:"text"})]})}),Object(p.jsx)("button",{children:"Add"})]}),Object(p.jsx)("ul",{className:f.a.arbeidsreiser_list,children:(null===(t=r.besoeksreiser)||void 0===t?void 0:t.length)>0&&r.besoeksreiser.map((function(e){return Object(p.jsx)(x,{calculation:r,setCalculation:n,besoeksreiseElement:e},k("BesoeksreiseElement_".concat(e.key)))}))}),Object(p.jsx)("button",{onClick:function(){n((function(e){return Object(m.a)(Object(m.a)({},e),{},{besoeksreiser:[]})}))},children:"T\xf8m listen over bes\xf8ksreiser"})]})}function _(e){var t=e.calculation,r=e.setCalculation;return Object(p.jsxs)("section",{className:f.a.arbeidsreiser,children:[Object(p.jsx)("h3",{className:f.a.subform_title,children:"Utgifter"}),Object(p.jsx)("div",{className:f.a.input_container,children:Object(p.jsxs)("label",{children:["Sum av utgifter for bom, ferge, Etc...",Object(p.jsx)("input",{autoComplete:"off",name:"utgifter",type:"text",value:t.utgifterBomFergeEtc,onChange:function(e){r((function(t){return Object(m.a)(Object(m.a)({},t),{},{utgifterBomFergeEtc:Number(e.target.value)})}))}})]})})]})}var y=r(10),N=r.n(y),C=r(14);function E(){return(E=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag",e.next=3,fetch("https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){var e={arbeidsreiser:[],besoeksreiser:[],utgifterBomFergeEtc:""},t=Object(n.useState)(e),r=Object(b.a)(t,2),i=r[0],a=r[1],s=Object(n.useState)(0),c=Object(b.a)(s,2),l=c[0],u=c[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:j.a.TravelCalculator,children:[Object(p.jsx)(h,{calculation:i,setCalculation:a}),Object(p.jsx)(v,{calculation:i,setCalculation:a}),Object(p.jsx)(_,{calculation:i,setCalculation:a}),Object(p.jsxs)("section",{className:j.a.horizontal_button_group,children:[Object(p.jsx)("button",{onClick:function(){var e={arbeidsreiser:[],besoeksreiser:[],utgifterBomFergeEtc:0};e.arbeidsreiser=i.arbeidsreiser.map((function(e){e.key,e.isEditing;return Object(o.a)(e,["key","isEditing"])})),e.besoeksreiser=i.besoeksreiser.map((function(e){e.key,e.isEditing;return Object(o.a)(e,["key","isEditing"])})),""===i.utgifterBomFergeEtc?e.utgifterBomFergeEtc=0:e.utgifterBomFergeEtc=i.utgifterBomFergeEtc,function(e){return E.apply(this,arguments)}(e).then((function(e){console.log("Got response!"),u(e.reisefradrag)})).catch((function(e){alert("Her har det skjedd en feil!"),console.log(e)}))},children:"Kalkuler"}),Object(p.jsx)("button",{onClick:function(){a(e),u(0)},children:"Start med blanke ark"})]}),0!==l&&Object(p.jsxs)("section",{children:[Object(p.jsx)("h3",{children:"Resultat"}),Object(p.jsxs)("p",{children:["Reisefradragsberegningen din ble NOK: ",l]})]})]},"keykey")})}var F=r(15),T=r.n(F);function B(){return Object(p.jsxs)("section",{className:T.a.info,children:[Object(p.jsx)("h3",{children:"Reisefradraget beregnes som f\xf8lger"}),Object(p.jsx)("p",{children:"Totalt antall kilometer beregnes for alle arbeids- og bes\xf8ksreiser. \xd8vre grense er 75 000 kilometer"}),Object(p.jsx)("p",{children:"Det gis kr 1,50/km i fradrag for reiser opp til 50 000 km, deretter 0,70 kr opp til 75 000 km"}),Object(p.jsx)("p",{children:"Hvis utgifter til bom, ferge etc. overstiger kr 3 400 s\xe5 gis hele bel\xf8pet i fradrag, ellers gis ingenting"}),Object(p.jsx)("p",{children:"Fra summen av kilometerfradraget og utgifter til bom, ferge etc. trekkes fra en egenandel p\xe5 kr 22 000."}),Object(p.jsx)("p",{children:"Resten er reisefradraget."})]})}var S=function(){return Object(p.jsxs)("div",{className:l.a.App,children:[Object(p.jsx)("header",{className:l.a.App_header,children:Object(p.jsx)("h1",{children:"Reisefradragsberegning \ud83d\udcb8"})}),Object(p.jsxs)("main",{children:[Object(p.jsx)(B,{}),Object(p.jsx)(A,{})]})]})},w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,24)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),w()},8:function(e,t,r){e.exports={App:"App_App__39lVC",App_header:"App_App_header__2wYIu","App-link":"App_App-link__LT79h"}},9:function(e,t,r){}},[[23,1,2]]]);
//# sourceMappingURL=main.5ede423f.chunk.js.map