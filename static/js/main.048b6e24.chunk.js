(this["webpackJsonpmetric-form"]=this["webpackJsonpmetric-form"]||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(7),c=a.n(l),i=a(2);function s(){return n.a.createElement("div",{className:"text-center my-64"},n.a.createElement("h1",{className:"text-4xl"},"Thank yooou!",n.a.createElement("span",{role:"img","aria-label":"party"},"\ud83e\udd73"),n.a.createElement("span",{role:"img","aria-label":"confetti"},"\ud83c\udf89")),n.a.createElement("h3",{className:"text-xl"},"Apreciamos mucho que tomaste unos mins de tu tiempo!"))}var o=a(8);function m(){return n.a.createElement("div",{className:"text-center"},n.a.createElement("h2",{className:"text-4xl mb-3"},"Organizational Climate Form"),n.a.createElement("h4",{className:"text-xl mb-6"},"Ayudanos a conocer tu opinion sobre el clima organizacional en Intellisys"," ",n.a.createElement("span",{role:"img","aria-label":"wink"},"\ud83d\ude09")))}function u(){return n.a.createElement("div",{className:"flex justify-between bg-gray-200 w-10/12 md:w-6/12"},n.a.createElement("div",{className:"w-6/12 bg-white"}),n.a.createElement("div",null,n.a.createElement("span",{role:"img","aria-label":"excellent"},"\ud83d\ude0d")),n.a.createElement("div",null,n.a.createElement("span",{role:"img","aria-label":"good"},"\ud83d\ude03")),n.a.createElement("div",null,n.a.createElement("span",{role:"img","aria-label":"ok"},"\ud83d\udc4c\ud83c\udffd")),n.a.createElement("div",null,n.a.createElement("span",{role:"img","aria-label":"bad"},"\ud83d\ude24")," "),n.a.createElement("div",null,n.a.createElement("span",{role:"img","aria-label":"terrible"},"\ud83d\udca9")))}var p={container:{display:"flex",justifyContent:"space-between"},errors:{color:"red",fontSize:"12px"}};function d(e){var t=e.source,a=e.register,r=e.errors,l=t.question,c=t.name;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"flex justify-between bg-gray-200 w-10/12 md:w-6/12 mb-3 p-3"},n.a.createElement("label",{className:"w-6/12"},l),n.a.createElement("input",{className:"cursor-pointer",type:"radio",name:c,value:"1",ref:a({required:"required \ud83d\ude4f\ud83c\udffd"})}),n.a.createElement("input",{className:"cursor-pointer",type:"radio",name:c,value:"2",ref:a({required:"required \ud83d\ude4f\ud83c\udffd"})}),n.a.createElement("input",{className:"cursor-pointer",type:"radio",name:c,value:"3",ref:a({required:"required \ud83d\ude4f\ud83c\udffd"})}),n.a.createElement("input",{className:"cursor-pointer",type:"radio",name:c,value:"4",ref:a({required:"required \ud83d\ude4f\ud83c\udffd"})}),n.a.createElement("input",{className:"cursor-pointer",type:"radio",name:c,value:"5",ref:a({required:"required \ud83d\ude4f\ud83c\udffd"})})),r[c]?n.a.createElement("span",{style:p.errors},r[c].message):null)}function b(e){var t=e.questions,a=e.setSubmitted,r=Object(o.a)(),l=r.register,c=r.handleSubmit,i=r.errors;return n.a.createElement("form",{onSubmit:c((function(e){console.log(e),a(!0)})),className:"flex flex-col justify-between items-center py-8"},n.a.createElement(m,null),n.a.createElement(u,null),t.map((function(e,t){return n.a.createElement(d,{source:e,key:t,register:l,errors:i})})),n.a.createElement("button",{className:"bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-5 rounded-full"},"Send"))}var f=a(1),E=a.n(f),v=a(3);function x(e){var t=e.setQuestions,a=function(){var e=Object(v.a)(E.a.mark((function e(a){var r,n,l,c,i,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r=a.target.files[0],e.prev=2,"text/csv"===r.type){e.next=5;break}return e.abrupt("return",alert("File type must be csv"));case 5:return e.next=7,r.text();case 7:for(i in n=e.sent,l=(l=n.replace(/\n/g,",").split(",")).filter((function(e){return Boolean(e)})),c=[],l)s={},i>1&&i%2===0&&(s[l[0]]=l[+i],s[l[1]]=l[+i+1],c.push(s));t(c),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"text-center p-4  m-auto"},n.a.createElement("h1",{className:"text-4xl mt-4"},"Metrics Circle Form Builder"),n.a.createElement("div",{className:"text-center my-32 p-4 border-solid border-4 border-gray-600 rounded-lg md:w-6/12 m-auto"},n.a.createElement("p",{className:"text-2xl"},"Please upload a csv file to generate your form"),n.a.createElement("input",{type:"file",id:"fileUpload",onChange:a})))}var g=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(!1),o=Object(i.a)(c,2),m=o[0],u=o[1];return a?n.a.createElement(s,null):m?n.a.createElement(b,{questions:m,setSubmitted:l}):n.a.createElement(x,{setQuestions:u})};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.048b6e24.chunk.js.map