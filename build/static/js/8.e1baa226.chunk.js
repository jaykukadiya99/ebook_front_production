(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{666:function(t,e,n){t.exports=n(395)},667:function(t,e,n){"use strict";function r(t,e,n,r,c,a,i){try{var s=t[a](i),o=s.value}catch(u){return void n(u)}s.done?e(o):Promise.resolve(o).then(r,c)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(c,a){var i=t.apply(e,n);function s(t){r(i,c,a,s,o,"next",t)}function o(t){r(i,c,a,s,o,"throw",t)}s(void 0)}))}}n.d(e,"a",(function(){return c}))},731:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(o){c=!0,a=o}finally{try{r||null==s.return||s.return()}finally{if(c)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return c}))},910:function(t,e,n){"use strict";n.r(e);var r=n(666),c=n.n(r),a=n(667),i=n(731),s=n(1),o=n(660),u=n(20),l=n(167),d=n(113),f=n(21);e.default=function(){var t=Object(u.h)().id,e=Object(s.useState)([{}]),n=Object(i.a)(e,2),r=n[0],b=n[1],p=Object(s.useState)(!1),j=Object(i.a)(p,2),h=j[0],v=j[1];function m(){return(m=Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,d.a.get("/topics/list?chapterId="+t);case 4:n=e.sent,b(n.data.data),v(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("asd");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}Object(s.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]);var x=function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),t.next=4,d.a.delete("/topics/"+e);case 4:201===t.sent.status&&(n=r.filter((function(t){return t._id!==e})),b(n)),v(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert("api error");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)(o.J,{className:"p-2 ml-auto"}),Object(f.jsx)(o.J,{children:Object(f.jsx)(o.l,{xs:"12",children:Object(f.jsxs)(o.g,{children:[Object(f.jsxs)(o.k,{children:[Object(f.jsx)("span",{className:"h4",children:"Topics List"}),Object(f.jsx)(l.b,{to:"/addtopics",className:"btn btn-primary float-right",children:"add"})]}),Object(f.jsx)(o.h,{children:h?Object(f.jsx)("div",{children:"Loading..."}):Object(f.jsx)(o.o,{items:r,fields:["preFix","title","badge","view","delete"],itemsPerPage:2,loading:h,pagination:!0,scopedSlots:{view:function(t){return Object(f.jsx)("td",{children:Object(f.jsx)("div",{className:"btn btn-success",children:"View"})})},delete:function(t){return Object(f.jsx)("td",{children:Object(f.jsx)(o.d,{className:"btn btn-danger",onClick:function(e){x(t._id)},children:"Delete"})})}}})})]})})})]})})}}}]);
//# sourceMappingURL=8.e1baa226.chunk.js.map