(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(4),r=c(2),i=c(3),l=c.n(i),d=c(1),o=(c(12),c(13),c(0)),j=function(e){var t=e.todos,c=e.setTodoId;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e,t){var s=e.id,a=e.title,n=e.completed;return Object(o.jsxs)("tr",{"data-cy":"todo",children:[Object(o.jsx)("td",{className:"is-vcentered",children:t+1}),Object(o.jsx)("td",{className:"is-vcentered",children:n&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:n?"has-text-success":"has-text-danger",children:a})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(s)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-eye"})})})})]},s)}))})]})},u=function(e){var t=e.searchField,c=e.setSearchField,s=e.setFilteringMethod;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return s(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",className:"input",type:"text",value:t,onChange:function(e){return c(e.target.value)},placeholder:"Search..."}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(e){return b("/users/".concat(e))},O=(c(15),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.currentTodo,c=e.isUserLoaded,s=e.setIsUserLoaded,a=e.setTodoId,i=Object(d.useState)(null),j=Object(r.a)(i,2),u=j[0],b=j[1],m=t.title,x=t.id;return Object(d.useEffect)((function(){var e=function(){var e=Object(n.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:c=e.sent,b(c),s(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(t.userId)}),[t]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),c?Object(o.jsx)(O,{}):Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",x]}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){a(0),s(!0)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:m}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===u||void 0===u?void 0:u.email),children:null===u||void 0===u?void 0:u.name})]})]})]})]})},x=function(){var e=Object(d.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(c),i=Object(r.a)(a,2),h=i[0],x=i[1],f=Object(d.useState)(!0),p=Object(r.a)(f,2),v=p[0],N=p[1],y=Object(d.useState)(!0),g=Object(r.a)(y,2),k=g[0],w=g[1],S=Object(d.useState)(0),T=Object(r.a)(S,2),C=T[0],I=T[1],L=Object(d.useState)(""),F=Object(r.a)(L,2),E=F[0],_=F[1],U=Object(d.useState)("all"),B=Object(r.a)(U,2),A=B[0],J=B[1];Object(d.useEffect)((function(){var e=function(){var e=Object(n.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/todos");case 2:t=e.sent,s(t),N(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var M;return Object(d.useEffect)((function(){switch(A){case"all":x(c.filter((function(e){return e.title.toLowerCase().includes(E.toLowerCase())})));break;case"completed":x(c.filter((function(e){return e.completed})));break;case"active":x(c.filter((function(e){return!e.completed})))}}),[A,c]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(u,{searchField:E,setSearchField:_,setFilteringMethod:J})}),Object(o.jsx)("div",{className:"block",children:v?Object(o.jsx)(O,{}):Object(o.jsx)(j,{todos:h,setTodoId:I})})]})})}),0!==C&&Object(o.jsx)(m,{currentTodo:(M=C,c.find((function(e){return e.id===M}))||c[0]),isUserLoaded:k,setIsUserLoaded:w,setTodoId:I})]})};a.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9b48e9c2.chunk.js.map