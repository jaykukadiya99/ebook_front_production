(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{732:function(t,e,n){var a={"./ckb.js":678,"./da.js":679,"./de.js":680,"./en.js":672,"./es.js":681,"./fr.js":682,"./he.js":683,"./index.js":733,"./it.js":684,"./ja.js":685,"./ko.js":686,"./lv.js":687,"./nl.js":688,"./pl.js":689,"./pt_br.js":690,"./ro.js":691,"./ru.js":692,"./se.js":693,"./ua.js":694,"./zh_cn.js":695};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id=732},914:function(t,e,n){"use strict";n.r(e);var a=n(662),i=n.n(a),s=n(663),c=n(168),r=n(674),o=n(675),d=n(668),l=n(699),u=n(698),h=n(1),j=n(660),p=n(112),b=n(731),m=n.n(b),f=(n(736),n(21)),O=[["align","fontColor","fontSize"],["bold","underline","italic","strike","subscript","superscript"],["undo","redo"],["outdent","indent"]],x=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).resetButton=function(){a.setState((function(t){return{title:"",content:""}}))},a.state={_id:a.props.match.params.id,title:"",content:"",topicId:"",isLoading:!1},a.handleInputChange=a.handleInputChange.bind(Object(d.a)(a)),a.submitButton=a.submitButton.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"handleInputChange",value:function(t){var e=t.target,n="checkbox"===e.type?e.checked:e.value,a=e.name;this.setState(Object(c.a)({},a,n))}},{key:"handleEditorChange",value:function(t){this.setState({content:t})}},{key:"submitButton",value:function(){var t=Object(s.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={title:this.state.title,content:this.state.content,topicId:this.state.topicId},t.next=3,p.a.put("/unit/"+this.props.match.params.id,e).then((function(t){console.log(t.code)})).catch((function(t){alert("Try Again")}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getData",value:function(){var t=Object(s.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.setState({isLoading:!0}),t.next=4,p.a.get("/unit/"+this.props.match.params.id);case 4:e=t.sent,this.setState({_id:e.data.data._id,title:e.data.data.title,content:e.data.data.content,topicId:e.data.data.topicId,isLoading:!1}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert("Try Again");case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,n=e.title,a=e.content;return e.isLoading?Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{children:"Loading..."})}):Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(j.l,{xs:"12",children:Object(f.jsxs)(j.g,{children:[Object(f.jsx)(j.k,{children:Object(f.jsx)("span",{className:"h4",children:"Edit Unit"})}),Object(f.jsx)(j.h,{children:Object(f.jsxs)(j.v,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",children:[Object(f.jsxs)(j.w,{row:!0,children:[Object(f.jsx)(j.l,{md:"3",children:Object(f.jsx)(j.G,{htmlFor:"title",children:"Title"})}),Object(f.jsx)(j.l,{xs:"12",md:"6",children:Object(f.jsx)(j.A,{onChange:this.handleInputChange,id:"title",name:"title",value:n,placeholder:"Title"})})]}),Object(f.jsxs)(j.w,{row:!0,children:[Object(f.jsx)(j.l,{md:"3",children:Object(f.jsx)(j.G,{htmlFor:"subTitle",children:"Content"})}),Object(f.jsx)(j.l,{xs:"12",md:"9",children:Object(f.jsx)(m.a,{defaultValue:a,setOptions:{buttonList:O},height:"70%",onChange:function(e){t.handleEditorChange(e)}})})]})]})}),Object(f.jsxs)(j.i,{children:[Object(f.jsx)(j.d,{type:"submit",className:"m-1",size:"sm",color:"primary",onClick:this.submitButton,children:"Update"}),Object(f.jsx)(j.d,{type:"reset",size:"sm",className:"m-1",color:"danger",onClick:this.resetButton,children:"Reset"})]})]})})})}}]),n}(h.Component);e.default=x}}]);
//# sourceMappingURL=13.64bd75eb.chunk.js.map