(this["webpackJsonplista-de-tareas"]=this["webpackJsonplista-de-tareas"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(4),s=n.n(a),r=(n(13),n(7)),l=n(3);var d=n(0),i=c.a.createContext();function j(e){var t=function(e,t){var n=c.a.useState(!1),o=Object(l.a)(n,2),a=o[0],s=o[1],r=c.a.useState(!0),d=Object(l.a)(r,2),i=d[0],j=d[1],u=c.a.useState(t),b=Object(l.a)(u,2),x=b[0],m=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),m(n),j(!1)}catch(a){s(a)}}),1e3)})),{item:x,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),m(t)}catch(a){s(a)}},loading:i,error:a}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,s=t.error,j=c.a.useState(""),u=Object(l.a)(j,2),b=u[0],x=u[1],m=c.a.useState(!1),O=Object(l.a)(m,2),h=O[0],f=O[1],p=n.filter((function(e){return!!e.completed})).length,g=n.length,v=[];v=!b.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(d.jsx)(i.Provider,{value:{loading:a,error:s,totalTodos:g,completedTodos:p,serchValue:b,setSearchValue:x,searchedTodos:v,addTodo:function(e){var t=Object(r.a)(n);t.push({completed:!1,text:e}),o(t)},toggleCompleteTodos:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(r.a)(n);c[t].completed=!c[t].completed,o(c)},deleteTodos:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(r.a)(n);c.splice(t,1),o(c)},openModal:h,setOpenModal:f},children:e.children})}n(15);function u(){var e=c.a.useContext(i),t=e.totalTodos,n=e.completedTodos;return Object(d.jsxs)("h2",{className:"TodoCounter",children:["You have completed ",n," of ",t," TASK"]})}n(16);function b(){var e=c.a.useContext(i),t=e.serchValue,n=e.setSearchValue;return Object(d.jsx)("div",{className:"TodoSearch",children:Object(d.jsx)("input",{className:"TodoSearch-input",type:"text",placeholder:"Search Task",value:t,onChange:function(e){n(e.target.value)}})})}var x=n(2);n(17);function m(e){var t=e.completed,n=e.text,o=e.onDelete,c=e.onComplete;return Object(d.jsxs)("li",{className:"TodoItem",children:[Object(d.jsx)("span",{className:"Icon-check ".concat(t?"Icon-check--active":""),onClick:c,children:Object(d.jsx)(x.a,{})}),Object(d.jsx)("p",{className:t?"TodoItem-p--complete":"",children:n}),Object(d.jsx)("span",{className:"icon-deleted",onClick:o,children:Object(d.jsx)(x.d,{})})]})}n(18);function O(e){return Object(d.jsx)("section",{className:"TodoList",children:Object(d.jsx)("ul",{children:e.children})})}n(19);function h(){var e=c.a.useContext(i),t=e.openModal,n=e.setOpenModal;return Object(d.jsx)("button",{className:"CreateTodoButton",onClick:function(){n(!t)},children:Object(d.jsx)("span",{className:"CreateTodoButton-span",children:"+"})})}n(20);function f(e){var t=e.children;return s.a.createPortal(Object(d.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(21);function p(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(i),s=a.addTodo,r=a.setOpenModal,j=function(e){e.preventDefault(),""===n?console.log("actualizar estado de todo lleno o no"):(s(n),r(!1))};return Object(d.jsxs)("form",{action:"",onSubmit:j,className:"",children:[Object(d.jsx)("label",{children:"Write your new TASK"}),Object(d.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Buy balls for the game"}),Object(d.jsxs)("div",{className:"bottonContainer",children:[Object(d.jsx)("button",{type:"button",onClick:function(){r(!1)},className:"bottonForm bottonContainer-cancel",children:"Cancel"}),Object(d.jsx)("button",{type:"submit",onClick:j,className:"bottonForm bottonContainer-add",children:"Add"})]})]})}function g(){return Object(d.jsxs)("li",{className:"TodoError",children:[Object(d.jsx)("p",{className:"TodoError-text",children:"OOPS! something went wrong"}),Object(d.jsx)("div",{className:"TodoError",children:Object(d.jsx)(x.c,{})})]})}n(22);function v(){return Object(d.jsxs)("li",{className:"loadingTodo",children:[Object(d.jsx)("span",{className:"loadingTodo-checkIcon",children:Object(d.jsx)(x.a,{})}),Object(d.jsxs)("div",{className:"loadingTodo-text",children:[Object(d.jsx)("p",{children:"LOADING "}),Object(d.jsxs)("div",{className:"loadingTodo__loadingIcon",children:[Object(d.jsx)("div",{className:"loadingTodo__loadingIcon-1"}),Object(d.jsx)("div",{className:"loadingTodo__loadingIcon-2"}),Object(d.jsx)("div",{className:"loadingTodo__loadingIcon-3"})]})]}),Object(d.jsx)("span",{className:"loadingTodo-deleteIcon",children:Object(d.jsx)(x.d,{})})]})}n(23);function T(){return Object(d.jsxs)("li",{className:"EmtyTodosContainer",children:[Object(d.jsx)("p",{className:"EmtyTodosContainer__text",children:"Create your first TASK"}),Object(d.jsx)("div",{className:"EmtyTodosContainer__buttonIcon",children:Object(d.jsx)(x.b,{})})]})}function N(){var e=c.a.useContext(i),t=e.error,n=e.loading,o=e.searchedTodos,a=e.toggleCompleteTodos,s=e.deleteTodos,r=e.openModal,l=e.setOpenModal;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(b,{}),Object(d.jsxs)(O,{children:[t&&Object(d.jsx)(g,{error:t}),n&&new Array(4).fill().map((function(e,t){return Object(d.jsx)(v,{},t)})),!n&&!o.length&&Object(d.jsx)(T,{}),o.map((function(e){return Object(d.jsx)(m,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return s(e.text)}},e.text)}))]}),!!r&&Object(d.jsx)(f,{children:Object(d.jsx)(p,{})}),Object(d.jsx)(h,{setOpenModal:l,modal:r})]})}var C=function(){return Object(d.jsx)(j,{children:Object(d.jsx)(N,{})})};s.a.render(Object(d.jsx)(C,{}),document.getElementById("root")),document.getElementById("modal")}],[[24,1,2]]]);
//# sourceMappingURL=main.dfc9307e.chunk.js.map