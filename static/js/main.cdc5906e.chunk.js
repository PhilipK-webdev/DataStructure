(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),i=c.n(r),j=c(19),s=c.n(j),a=(c(26),c(27),c(7)),u=c(2),l=(c(28),function(){return Object(n.jsx)("div",{children:Object(n.jsx)("header",{children:Object(n.jsxs)("nav",{children:[Object(n.jsx)("div",{className:"home",children:Object(n.jsx)(a.b,{to:"/",id:"link",children:"Home"})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{to:"/stack",children:"Stack"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{to:"/linkedList",children:"Linked List"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{to:"/array",children:"Array"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.b,{to:"/queue",children:"Queue"})})]})]})})})}),d=(c(34),function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{children:"Welcome"}),Object(n.jsxs)("div",{className:"intro",children:[Object(n.jsx)("h3",{children:"Introduction"}),Object(n.jsxs)("p",{children:[" Abstrat Data Structure more info you can find here ",Object(n.jsx)("a",{href:"https://computersciencewiki.org/index.php/Abstract_data_structures",children:"Link"}),Object(n.jsx)("br",{}),"When you click on one of the data structure ",Object(n.jsx)("br",{}),"Then you can learn and play with the functionality of each data structure you choose. Enjoy!"]})]})]})}),b=c(13),h=c(9),o=(c(35),function(e){var t=Object(r.useState)(!1),c=Object(h.a)(t,2),i=(c[0],c[1]),j=Object(r.useState)(),s=Object(h.a)(j,2),a=s[0],u=s[1];return e.arr.sort((function(e,t){return t-e})),Object(n.jsxs)("div",{children:[e.arr.map((function(e,t){return Object(n.jsx)("h1",{className:"rectangle",id:t,children:e},t)})),Object(n.jsxs)("ul",{children:[Object(n.jsx)("button",{type:"submit",id:"pop",onClick:function(t){t.preventDefault(),e.arr.pop(),i(!1)},children:"pop"}),Object(n.jsx)("button",{type:"submit",id:"seek",onClick:function(e){e.preventDefault(),i(!0)},children:"seek"}),Object(n.jsx)("button",{type:"submit",id:"push",onClick:function(t){t.preventDefault(),e.arr.push(a),e.setArr(Object(b.a)(e.arr)),i(!1)},children:"push"}),Object(n.jsx)("input",{type:"text",id:"inputPush",name:"add",placeholder:"add...",onChange:function(e){u(e.target.value)}})]})]})}),O=(c(36),function(){var e=Object(r.useState)(),t=Object(h.a)(e,2),c=t[0],i=t[1],j=Object(r.useState)([]),s=Object(h.a)(j,2),a=s[0],u=s[1],l=Object(r.useState)(!1),d=Object(h.a)(l,2),O=d[0],x=d[1];return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("label",{children:"Add to stack : "}),Object(n.jsx)("input",{type:"text",id:"inputPush",name:"add",placeholder:"add...",onChange:function(e){i(e.target.value)}}),Object(n.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),a.push(c),u(Object(b.a)(a)),x(!0)},children:"Click"}),Object(n.jsx)("div",{className:"stack",children:O?Object(n.jsx)(o,{arr:a,setArr:u}):Object(n.jsx)("div",{children:" Processing..."})})]})}),x=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Hello from Queue"})})},p=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Helloo from LinkedList"})})},f=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Hello from ArrayStructure"})})};var v=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(a.a,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",children:Object(n.jsx)(d,{})}),Object(n.jsx)(u.a,{exact:!0,path:"/DataStructure",children:Object(n.jsx)(d,{})}),Object(n.jsx)(u.a,{exact:!0,path:"/stack",children:Object(n.jsx)(O,{})}),Object(n.jsx)(u.a,{exact:!0,path:"/linkedList",children:Object(n.jsx)(p,{})}),Object(n.jsx)(u.a,{exact:!0,path:"/array",children:Object(n.jsx)(f,{})}),Object(n.jsx)(u.a,{exact:!0,path:"/queue",children:Object(n.jsx)(x,{})})]})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,j=t.getTTFB;c(e),n(e),r(e),i(e),j(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),m()}},[[37,1,2]]]);
//# sourceMappingURL=main.cdc5906e.chunk.js.map