(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{916:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(49),o=n(537),r=n(662),s=c.a.lazy((function(){return n.e(9).then(n.bind(null,904))})),l=c.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(15)]).then(n.bind(null,905))})),d=c.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(16)]).then(n.bind(null,906))})),m=c.a.lazy((function(){return n.e(11).then(n.bind(null,907))})),u=c.a.lazy((function(){return n.e(6).then(n.bind(null,908))})),p=c.a.lazy((function(){return n.e(7).then(n.bind(null,909))})),h=c.a.lazy((function(){return n.e(12).then(n.bind(null,910))})),b=c.a.lazy((function(){return Promise.all([n.e(1),n.e(17)]).then(n.bind(null,911))})),j=c.a.lazy((function(){return Promise.all([n.e(1),n.e(18)]).then(n.bind(null,912))})),x=c.a.lazy((function(){return n.e(10).then(n.bind(null,913))})),O=[{path:"/",exact:!0,name:"Home"},{path:"/chapter",name:"Chapter",component:s,exact:!0},{path:"/chapter/add",name:"addChapter",component:l,exact:!0},{path:"/chapter/edit/:id",name:"editChapter",component:d,exact:!0},{path:"/chapter/:id/topics",name:"Topic",component:m,exact:!0},{path:"/chapter/:id/topics/add",name:"addTopic",component:u,exact:!0},{path:"/chapter/:chapterId/topics/edit/:id",name:"editTopic",component:p,exact:!0},{path:"/chapter/:chapterId/topics/:id/unit",name:"Unit",component:h,exact:!0},{path:"/chapter/:chapterId/topics/:id/unit/add",name:"addUnit",component:b,exact:!0},{path:"/chapter/:chapterId/topics/:topicsId/unit/edit/:id",name:"editUnit",component:j,exact:!0},{path:"/user",name:"Unit",component:c.a.lazy((function(){return n.e(13).then(n.bind(null,914))})),exact:!0},{path:"/user/add",name:"addUnit",component:c.a.lazy((function(){return n.e(8).then(n.bind(null,915))})),exact:!0},{path:"/notes",name:"Notes",component:x,exact:!0}],f=n(20),v=Object(f.jsx)("div",{className:"pt-3 text-center",children:Object(f.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),N=function(){return Object(f.jsx)("main",{className:"c-main",children:Object(f.jsx)(r.k,{fluid:!0,children:Object(f.jsx)(a.Suspense,{fallback:v,children:Object(f.jsx)(o.d,{children:null!==localStorage.getItem("token")&&localStorage.getItem("isLogin")?Object(f.jsxs)(f.Fragment,{children:[O.map((function(e,t){return e.component&&Object(f.jsx)(o.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(f.jsx)(r.r,{children:Object(f.jsx)(e.component,Object(i.a)({},t))})}},t)})),Object(f.jsx)(o.a,{from:"/",to:"/chapter"})]}):Object(f.jsx)(o.a,{from:"/",to:"/login"})})})})})},g=c.a.memo(N),y=function(){return Object(f.jsxs)(r.s,{fixed:!1,children:[Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"ml-1",children:"\xa9 2021 E-Book."})}),Object(f.jsx)("div",{className:"mfs-auto"})]})},S=c.a.memo(y),C=n(167),w=n(88),k=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.sidebarShow}));return Object(f.jsxs)(r.v,{withSubheader:!0,children:[Object(f.jsx)(r.P,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var n=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:n})}}),Object(f.jsx)(r.P,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var n=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:n})}}),Object(f.jsx)(r.w,{className:"mx-auto d-lg-none",to:"/",children:Object(f.jsx)("div",{className:"h1",children:"E Book"})}),Object(f.jsx)(r.d,{className:"ml-auto btn-ghost-primary my-2 mr-2",size:"sm",onClick:function(){localStorage.removeItem("isLogin"),localStorage.removeItem("token"),w.a.push("login")},children:"Logout"})]})},I=n(666),z=[{_tag:"CSidebarNavItem",name:"Chapter",to:"/chapter",icon:Object(f.jsx)(I.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"User",to:"/user",icon:Object(f.jsx)(I.a,{name:"cil-user",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Notes",to:"/notes",icon:Object(f.jsx)(I.a,{name:"cil-file",customClasses:"c-sidebar-nav-icon"})}],P=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.sidebarShow}));return Object(f.jsxs)(r.I,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(f.jsx)(r.J,{className:"d-md-down-none",to:"/",children:Object(f.jsx)("div",{className:"h2",children:"E-book"})}),Object(f.jsx)(r.K,{children:Object(f.jsx)(r.l,{items:z,components:{CSidebarNavDivider:r.L,CSidebarNavDropdown:r.M,CSidebarNavItem:r.N,CSidebarNavTitle:r.O}})})]})},U=c.a.memo(P);t.default=function(){return Object(f.jsxs)("div",{className:"c-app c-default-layout",children:[Object(f.jsx)(U,{}),Object(f.jsxs)("div",{className:"c-wrapper",children:[Object(f.jsx)(k,{}),Object(f.jsx)("div",{className:"c-body",children:Object(f.jsx)(g,{})}),Object(f.jsx)(S,{})]})]})}}}]);
//# sourceMappingURL=19.db386dd0.chunk.js.map