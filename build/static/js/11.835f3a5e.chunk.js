(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[11],{732:function(e,t,n){var i={"./ckb.js":678,"./da.js":679,"./de.js":680,"./en.js":672,"./es.js":681,"./fr.js":682,"./he.js":683,"./index.js":733,"./it.js":684,"./ja.js":685,"./ko.js":686,"./lv.js":687,"./nl.js":688,"./pl.js":689,"./pt_br.js":690,"./ro.js":691,"./ru.js":692,"./se.js":693,"./ua.js":694,"./zh_cn.js":695};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id=732},909:function(e,t,n){"use strict";n.r(t);var i=n(662),r=n.n(i),s=n(663),c=n(168),l=n(674),a=n(675),o=n(668),d=n(699),h=n(698),j=n(1),u=n(660),b=n(112),p=n(897),x=n(731),m=n.n(x),O=(n(736),n(21)),C=[["align","fontColor","fontSize"],["bold","underline","italic","strike","subscript","superscript"],["undo","redo"],["outdent","indent"]],f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).resetButton=function(){i.setState((function(e){return{title:"",preFix:"",subTitle:"",introduction:"",imageFile:"",colorCode:""}}),(function(){}))},i.state={title:"",preFix:"",subTitle:"",introduction:"",colorCode:"",imageFile:""},i.handleInputChange=i.handleInputChange.bind(Object(o.a)(i)),i.handleFileChange=i.handleFileChange.bind(Object(o.a)(i)),i.handleColorChange=i.handleColorChange.bind(Object(o.a)(i)),i.submitButton=i.submitButton.bind(Object(o.a)(i)),i}return Object(a.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,i=t.name;this.setState(Object(c.a)({},i,n))}},{key:"handleFileChange",value:function(e){this.setState({imageFile:e.target.files[0]})}},{key:"handleColorChange",value:function(e){this.setState({colorCode:e.hex})}},{key:"handleEditorChange",value:function(e){this.setState({subTitle:e})}},{key:"submitButton",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("title",this.state.title),t.append("preFix",this.state.preFix),t.append("subTitle",this.state.subTitle),t.append("introduction",this.state.introduction),t.append("colorCode",this.state.colorCode),t.append("file",this.state.imageFile),e.next=9,b.a.post("/chapter/add",t).then((function(e){console.log(e.code)})).catch((function(e){alert("Try Again")}));case 9:this.resetButton();case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.preFix,i=t.title,r=t.subTitle,s=t.introduction,c=t.colorCode;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(u.l,{xs:"12",children:Object(O.jsxs)(u.g,{children:[Object(O.jsx)(u.k,{children:Object(O.jsx)("span",{className:"h4",children:"Add Chapter"})}),Object(O.jsx)(u.h,{children:Object(O.jsxs)(u.v,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",children:[Object(O.jsxs)(u.w,{row:!0,children:[Object(O.jsx)(u.l,{md:"3",children:Object(O.jsx)(u.G,{htmlFor:"preFix",children:"Title PreFix"})}),Object(O.jsx)(u.l,{xs:"12",md:"9",children:Object(O.jsx)(u.A,{onChange:this.handleInputChange,type:"text",id:"preFix",name:"preFix",value:n,placeholder:"Enter Chapter Prefix"})})]}),Object(O.jsxs)(u.w,{row:!0,children:[Object(O.jsx)(u.l,{md:"3",children:Object(O.jsx)(u.G,{htmlFor:"title",children:"Title"})}),Object(O.jsx)(u.l,{xs:"12",md:"9",children:Object(O.jsx)(u.A,{onChange:this.handleInputChange,id:"title",name:"title",value:i,placeholder:"Title"})})]}),Object(O.jsxs)(u.w,{row:!0,children:[Object(O.jsx)(u.l,{md:"3",children:Object(O.jsx)(u.G,{htmlFor:"subTitle",children:"SubTitle"})}),Object(O.jsx)(u.l,{xs:"12",md:"9",children:Object(O.jsx)(m.a,{defaultValue:r,setOptions:{buttonList:C},height:"50%",onChange:function(t){e.handleEditorChange(t)}})})]}),Object(O.jsxs)(u.w,{row:!0,children:[Object(O.jsx)(u.l,{md:"3",children:Object(O.jsx)(u.G,{htmlFor:"intoduction",children:"Introduction"})}),Object(O.jsx)(u.l,{xs:"12",md:"9",children:Object(O.jsx)(u.A,{onChange:this.handleInputChange,type:"text",id:"introduction",name:"introduction",value:s,placeholder:"Enter Chapter Intoduction"})})]}),Object(O.jsxs)(u.w,{row:!0,children:[Object(O.jsx)(u.l,{md:"3",children:Object(O.jsx)(u.G,{htmlFor:"colorCode",children:"color"})}),Object(O.jsx)(u.l,{xs:"12",md:"9",children:Object(O.jsx)(p.a,{color:c,onChangeComplete:this.handleColorChange})})]}),Object(O.jsxs)(u.w,{row:!0,children:[Object(O.jsx)(u.G,{col:!0,md:"3",htmlFor:"file-input",children:"File input"}),Object(O.jsx)(u.l,{xs:"12",md:"9",children:Object(O.jsx)(u.B,{onChange:this.handleFileChange,id:"file-input",name:"file-input"})})]})]})}),Object(O.jsxs)(u.i,{children:[Object(O.jsx)(u.d,{type:"submit",className:"m-1",size:"sm",color:"primary",onClick:this.submitButton,children:"Submit"}),Object(O.jsx)(u.d,{type:"reset",size:"sm",className:"m-1",color:"danger",onClick:this.resetButton,children:"Reset"})]})]})})})}}]),n}(j.Component);t.default=f}}]);
//# sourceMappingURL=11.835f3a5e.chunk.js.map