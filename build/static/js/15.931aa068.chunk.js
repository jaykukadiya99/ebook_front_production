(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{732:function(t,e,n){var a={"./ckb.js":681,"./da.js":682,"./de.js":683,"./en.js":677,"./es.js":684,"./fr.js":685,"./he.js":686,"./index.js":733,"./it.js":687,"./ja.js":688,"./ko.js":689,"./lv.js":690,"./nl.js":691,"./pl.js":692,"./pt_br.js":693,"./ro.js":694,"./ru.js":695,"./se.js":696,"./ua.js":697,"./zh_cn.js":698};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id=732},914:function(t,e,n){"use strict";n.r(e);var a=n(662),i=n.n(a),s=n(663),c=n(168),r=n(669),o=n(670),d=n(666),l=n(675),u=n(674),h=n(1),j=n(660),p=n(112),b=n(731),m=n.n(b),f=(n(736),n(167)),O=n(21),x=[["align","fontColor","fontSize"],["bold","underline","italic","strike","subscript","superscript"],["undo","redo"],["outdent","indent"]],v=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).resetButton=function(){a.setState((function(t){return{title:"",content:""}}))},a.state={_id:a.props.match.params.id,title:"",content:"",topicId:"",isLoading:!1},a.handleInputChange=a.handleInputChange.bind(Object(d.a)(a)),a.submitButton=a.submitButton.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"handleInputChange",value:function(t){var e=t.target,n="checkbox"===e.type?e.checked:e.value,a=e.name;this.setState(Object(c.a)({},a,n))}},{key:"handleEditorChange",value:function(t){this.setState({content:t})}},{key:"submitButton",value:function(){var t=Object(s.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={title:this.state.title,content:this.state.content,topicId:this.state.topicId},t.next=3,p.a.put("/unit/"+this.props.match.params.id,e).then((function(t){console.log(t.code)})).catch((function(t){alert("Try Again")}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getData",value:function(){var t=Object(s.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.setState({isLoading:!0}),t.next=4,p.a.get("/unit/"+this.props.match.params.id);case 4:e=t.sent,this.setState({_id:e.data.data._id,title:e.data.data.title,content:e.data.data.content,topicId:e.data.data.topicId,isLoading:!1}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert("Try Again");case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,n=e.title,a=e.content,i=e.isLoading,s=e.topicId;return i?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:"Loading..."})}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(j.l,{xs:"12",children:Object(O.jsxs)(j.g,{children:[Object(O.jsxs)(j.k,{children:[Object(O.jsx)("span",{className:"h4",children:"Edit Unit"}),Object(O.jsx)(f.b,{to:{pathname:"/unit/".concat(s)},className:"btn btn-outline-info float-right mx-2",children:"Back"})]}),Object(O.jsx)(j.h,{children:Object(O.jsxs)(j.v,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",children:[Object(O.jsxs)(j.w,{row:!0,children:[Object(O.jsx)(j.l,{md:"3",children:Object(O.jsx)(j.G,{htmlFor:"title",children:"Title"})}),Object(O.jsx)(j.l,{xs:"12",md:"6",children:Object(O.jsx)(j.A,{onChange:this.handleInputChange,id:"title",name:"title",value:n,placeholder:"Title"})})]}),Object(O.jsxs)(j.w,{row:!0,children:[Object(O.jsx)(j.l,{md:"3",children:Object(O.jsx)(j.G,{htmlFor:"content",children:"Content"})}),Object(O.jsx)(j.l,{xs:"12",md:"9",children:Object(O.jsx)(m.a,{defaultValue:a,setOptions:{buttonList:x},height:"70%",onChange:function(e){t.handleEditorChange(e)}})})]})]})}),Object(O.jsxs)(j.i,{children:[Object(O.jsx)(j.d,{type:"submit",className:"m-1",size:"sm",color:"primary",onClick:this.submitButton,children:"Update"}),Object(O.jsx)(j.d,{type:"reset",size:"sm",className:"m-1",color:"danger",onClick:this.resetButton,children:"Reset"})]})]})})})}}]),n}(h.Component);e.default=v}}]);
//# sourceMappingURL=15.931aa068.chunk.js.map