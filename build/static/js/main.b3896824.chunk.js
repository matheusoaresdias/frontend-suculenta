(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(28),r=n.n(s),i=(n(36),n(10)),u=n(2),l=n(5),o=n.p+"static/media/logo.bae3f700.png",d=n(0);function j(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)("header",{children:[Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("img",{src:o,alt:"Suculenta"})}),Object(d.jsxs)("div",{className:"right-side",children:[Object(d.jsx)("div",{className:"search",children:Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{type:"text",placeholder:"Pesquisar suculenta...",value:n,onChange:function(e){return c(e.target.value)}}),Object(d.jsx)(i.b,{to:"/".concat(n),children:Object(d.jsx)("button",{type:"submit",children:Object(d.jsx)("i",{className:"fas fa-search"})})})]})}),Object(d.jsx)("div",{className:"add",children:Object(d.jsx)(i.b,{to:"/suculenta/_add",children:Object(d.jsx)("button",{children:"Adicionar"})})})]})]})})}var b=n(4),p=n.n(b),h=n(11),f=n(30),O=n(31),m=n(13),x=n.n(m),v="https://192.168.0.104:8080/suculenta",g=new(function(){function e(){Object(f.a)(this,e)}return Object(O.a)(e,[{key:"createSuculenta",value:function(e){return x.a.post(v+"/create",e,{headers:{"Content-type":"multipart/form-data"}})}},{key:"listSuculenta",value:function(e){return x.a.get(v+"/list/"+e)}},{key:"listSuculentas",value:function(){return x.a.get(v+"/dashboard")}},{key:"updateSuculentas",value:function(e,t){return x.a.put(v+"/update/"+e,t)}},{key:"deleteSuculenta",value:function(e){return x.a.delete(v+"/delete/"+e)}},{key:"searchSuculenta",value:function(e){return x.a.get(v+"/search/"+e)}}]),e}());function k(e){var t=e.history,n=Object(a.useState)([]),c=Object(l.a)(n,2),s=c[0],r=c[1],o=Object(u.g)().name,j=Object(u.f)();function b(){return(b=Object(h.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.deleteSuculenta(n).then((function(e){t.push("/")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){if("/"===j.pathname){function e(){return(e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.listSuculentas();case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}else{function t(){return(t=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.searchSuculenta(o);case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}}),[s,o,j]),Object(d.jsx)("section",{id:"dashboard",children:s.map((function(e){return Object(d.jsxs)("article",{children:[Object(d.jsx)(i.b,{to:"/details/".concat(e.id),children:Object(d.jsx)("img",{src:"https://192.168.0.104:8080/assets/uploads/".concat(e.id,"-1.png"),loading:"lazy",alt:""})}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("strong",{children:e.name}),Object(d.jsxs)("p",{className:"price",children:["R$ ",e.price]}),Object(d.jsxs)("p",{className:"stock",children:["Quantidade: ",e.stock]}),Object(d.jsxs)("div",{className:"btns",children:[Object(d.jsx)("button",{className:"btn edit",onClick:function(){return n=e.id,void t.push("/suculenta/".concat(n));var n},children:"Editar"}),Object(d.jsx)("button",{className:"btn delete",onClick:function(){return function(e){return b.apply(this,arguments)}(e.id)},children:"Apagar"})]})]})]},e.id)}))})}var y=n.p+"static/media/camera.34fe2c6b.svg";function N(e){var t=e.history,n=Object(u.g)().id,c=Object(a.useState)(null),s=Object(l.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)(""),j=Object(l.a)(o,2),b=j[0],f=j[1],O=Object(a.useState)(""),m=Object(l.a)(O,2),x=m[0],v=m[1],k=Object(a.useState)(""),N=Object(l.a)(k,2),S=N[0],w=N[1],C=Object(a.useState)(0),E=Object(l.a)(C,2),F=E[0],q=E[1],J=Object(a.useMemo)((function(){return r?URL.createObjectURL(r[F]):null}),[r,F]);function R(){return(R=Object(h.a)(p.a.mark((function e(a){var c,s,i,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),"_add"!==n){e.next=20;break}if(c={name:b,price:x,stock:S},s=new FormData,null!=r[0]&&null!=r[1]&&null!=r[2]){e.next=8;break}alert("N\xe3o foram selecionadas 3 fotos!"),e.next=18;break;case 8:if(s.append("photos",r[0]),s.append("photos",r[1]),s.append("photos",r[2]),s.append("suculenta",JSON.stringify(c)),null==r||""===b||""===x||""===S){e.next=17;break}return e.next=15,g.createSuculenta(s).then((function(e){t.push("/")}));case 15:e.next=18;break;case 17:alert("Insira os dados corretamente! :)");case 18:e.next=37;break;case 20:if(i={id:n,name:b,price:x,stock:S},null!=r){e.next=26;break}return e.next=24,g.updateSuculentas(n,i).then((function(e){t.push("/")}));case 24:e.next=37;break;case 26:if(null!=r[1]&&null!=r[2]){e.next=30;break}alert("Selecione 3 imagens"),e.next=37;break;case 30:return(u=new FormData).append("photos",r[0]),u.append("photos",r[1]),u.append("photos",r[2]),u.append("suculenta",JSON.stringify(i)),e.next=37,g.createSuculenta(u).then((function(e){t.push("/")}));case 37:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.listSuculenta(n);case 2:t=e.sent,f(t.data.name),v(t.data.price),w(t.data.stock);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}"_add"!==n&&function(){e.apply(this,arguments)}()}),[n,F]),Object(d.jsxs)("form",{id:"addUpdate",onSubmit:function(e){return R.apply(this,arguments)},encType:"multipart/form-data",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsxs)("label",{id:"photos",style:{backgroundImage:"url(".concat(J,")")},className:r?"has-photos":"",children:[Object(d.jsx)("input",{type:"file",id:"photos",multiple:!0,onChange:function(e){return i(e.target.files)}}),Object(d.jsx)("img",{src:y,alt:"Suculentas"}),Object(d.jsxs)("div",{className:r?"switch-div":"",children:[Object(d.jsx)("button",{type:"button",className:r?"switch-img-has":"switch-img",onClick:function(){0===F?alert("Esta \xe9 a primeira imagem!"):null==r[F-1]?alert("N\xe3o tem imagens antes dessa!"):q(F-1)},children:Object(d.jsx)("i",{className:"fas fa-chevron-left"})}),Object(d.jsx)("button",{type:"button",className:r?"switch-img-has":"switch-img",onClick:function(){2===F?alert("Esta \xe9 a \xfaltima imagem!"):null==r[F+1]?alert("N\xe3o tem imagens depois dessa, selecione mais imagens!"):q(F+1)},children:Object(d.jsx)("i",{className:"fas fa-chevron-right"})})]})]})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"input-design",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Nome"}),Object(d.jsx)("input",{type:"text",placeholder:"Flor de jade",id:"name",value:b,onChange:function(e){return f(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{className:"input-design",children:[Object(d.jsx)("label",{htmlFor:"price",children:"Pre\xe7o"}),Object(d.jsx)("input",{type:"text",placeholder:"5,50",id:"price",value:x,onChange:function(e){return v(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{className:"input-design",children:[Object(d.jsx)("label",{htmlFor:"stock",children:"Estoque"}),Object(d.jsx)("input",{type:"text",placeholder:"10",id:"stock",value:S,onChange:function(e){return w(e.target.value)},required:!0})]}),Object(d.jsx)("button",{type:"submit",children:"Salvar"})]})]})}function S(e){var t=e.history,n=Object(a.useState)(),c=Object(l.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(),o=Object(l.a)(i,2),j=o[0],b=o[1],f=Object(a.useState)(),O=Object(l.a)(f,2),m=O[0],x=O[1],v=Object(a.useState)(1),k=Object(l.a)(v,2),y=k[0],N=k[1],S=Object(u.g)().id;function w(){return(w=Object(h.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.deleteSuculenta(n).then((function(e){t.push("/")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.listSuculenta(S);case 2:t=e.sent,r(t.data.name),b(t.data.price),x(t.data.stock);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[S]),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("img",{src:"https://192.168.0.104:8080/assets/uploads/".concat(S,"-").concat(y,".png"),alt:""}),Object(d.jsxs)("div",{className:"btns-imgs",children:[Object(d.jsx)("button",{type:"button",onClick:function(){1===y?alert("Esta \xe9 a primeira imagem!"):N(y-1)},children:Object(d.jsx)("i",{className:"fas fa-chevron-left"})}),Object(d.jsx)("button",{type:"button",onClick:function(){3===y?alert("Esta \xe9 a \xfaltima imagem!"):N(y+1)},children:Object(d.jsx)("i",{className:"fas fa-chevron-right"})})]})]}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("strong",{children:s}),Object(d.jsxs)("p",{className:"price",children:["R$ ",j]}),Object(d.jsxs)("p",{className:"stock",children:["Quantidade: ",m]}),Object(d.jsxs)("div",{className:"btns",children:[Object(d.jsx)("button",{className:"btn edit",onClick:function(){return function(e){t.push("/suculenta/".concat(e))}(S)},children:"Editar"}),Object(d.jsx)("button",{className:"btn delete",onClick:function(){return function(e){return w.apply(this,arguments)}(S)},children:"Apagar"})]})]})]})}function w(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/",exact:!0,component:k}),Object(d.jsx)(u.a,{path:"/suculenta/:id",component:N}),Object(d.jsx)(u.a,{path:"/details/:id",component:S}),Object(d.jsx)(u.a,{path:"/:name",component:k})]})]})}r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.b3896824.chunk.js.map