(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{733:function(e,t,n){var i={"./ckb.js":682,"./da.js":683,"./de.js":684,"./en.js":678,"./es.js":685,"./fr.js":686,"./he.js":687,"./index.js":734,"./it.js":688,"./ja.js":689,"./ko.js":690,"./lv.js":691,"./nl.js":692,"./pl.js":693,"./pt_br.js":694,"./ro.js":695,"./ru.js":696,"./se.js":697,"./ua.js":698,"./zh_cn.js":699};function s(e){var t=c(e);return n(t)}function c(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=c,e.exports=s,s.id=733},910:function(e,t,n){"use strict";n.r(t);var i=n(663),s=n.n(i),c=n(664),r=n(166),l=n(670),a=n(671),o=n(667),d=n(676),h=n(675),j=n(1),u=n(661),b=n(111),p=n(898),x=n(732),m=n.n(x),O=(n(737),n(165)),f=n(20),C=[["align","fontColor","fontSize"],["bold","underline","italic","strike","subscript","superscript"],["undo","redo"],["outdent","indent"]],g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).resetButton=function(){i.setState((function(e){return{title:"",preFix:"",subTitle:"",introduction:"",imageFile:"",colorCode:""}}),(function(){}))},i.state={title:"",preFix:"",subTitle:"",introduction:"",colorCode:"",imageFile:""},i.handleInputChange=i.handleInputChange.bind(Object(o.a)(i)),i.handleFileChange=i.handleFileChange.bind(Object(o.a)(i)),i.handleColorChange=i.handleColorChange.bind(Object(o.a)(i)),i.submitButton=i.submitButton.bind(Object(o.a)(i)),i}return Object(a.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,i=t.name;this.setState(Object(r.a)({},i,n))}},{key:"handleFileChange",value:function(e){this.setState({imageFile:e.target.files[0]})}},{key:"handleColorChange",value:function(e){this.setState({colorCode:e.hex})}},{key:"handleEditorChange",value:function(e){this.setState({subTitle:e})}},{key:"submitButton",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("title",this.state.title),t.append("preFix",this.state.preFix),t.append("subTitle",this.state.subTitle),t.append("introduction",this.state.introduction),t.append("colorCode",this.state.colorCode),t.append("file",this.state.imageFile),e.next=9,b.a.post("/chapter/add",t).then((function(e){console.log(e.code)})).catch((function(e){alert("Try Again")}));case 9:this.resetButton();case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.preFix,i=t.title,s=t.subTitle,c=t.introduction,r=t.colorCode;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(u.l,{xs:"12",children:Object(f.jsxs)(u.g,{children:[Object(f.jsxs)(u.k,{children:[Object(f.jsx)("span",{className:"h4",children:"Add Chapter"}),Object(f.jsx)("div",{className:"btn btn-outline-info float-right mx-2",onClick:function(){O.a.goBack()},children:"Back"})]}),Object(f.jsx)(u.h,{children:Object(f.jsxs)(u.v,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",children:[Object(f.jsxs)(u.w,{row:!0,children:[Object(f.jsx)(u.l,{md:"3",children:Object(f.jsx)(u.G,{htmlFor:"preFix",children:"Title PreFix"})}),Object(f.jsx)(u.l,{xs:"12",md:"9",children:Object(f.jsx)(u.A,{onChange:this.handleInputChange,type:"text",id:"preFix",name:"preFix",value:n,placeholder:"Enter Chapter Prefix"})})]}),Object(f.jsxs)(u.w,{row:!0,children:[Object(f.jsx)(u.l,{md:"3",children:Object(f.jsx)(u.G,{htmlFor:"title",children:"Title"})}),Object(f.jsx)(u.l,{xs:"12",md:"9",children:Object(f.jsx)(u.A,{onChange:this.handleInputChange,id:"title",name:"title",value:i,placeholder:"Title"})})]}),Object(f.jsxs)(u.w,{row:!0,children:[Object(f.jsx)(u.l,{md:"3",children:Object(f.jsx)(u.G,{htmlFor:"subTitle",children:"SubTitle"})}),Object(f.jsx)(u.l,{xs:"12",md:"9",children:Object(f.jsx)(m.a,{defaultValue:s,setOptions:{buttonList:C},height:"50%",onChange:function(t){e.handleEditorChange(t)}})})]}),Object(f.jsxs)(u.w,{row:!0,children:[Object(f.jsx)(u.l,{md:"3",children:Object(f.jsx)(u.G,{htmlFor:"intoduction",children:"Introduction"})}),Object(f.jsx)(u.l,{xs:"12",md:"9",children:Object(f.jsx)(u.A,{onChange:this.handleInputChange,type:"text",id:"introduction",name:"introduction",value:c,placeholder:"Enter Chapter Intoduction"})})]}),Object(f.jsxs)(u.w,{row:!0,children:[Object(f.jsx)(u.l,{md:"3",children:Object(f.jsx)(u.G,{htmlFor:"colorCode",children:"color"})}),Object(f.jsx)(u.l,{xs:"12",md:"9",children:Object(f.jsx)(p.a,{color:r,onChangeComplete:this.handleColorChange})})]}),Object(f.jsxs)(u.w,{row:!0,children:[Object(f.jsx)(u.G,{col:!0,md:"3",htmlFor:"file-input",children:"File input"}),Object(f.jsx)(u.l,{xs:"12",md:"9",children:Object(f.jsx)(u.B,{onChange:this.handleFileChange,id:"file-input",name:"file-input"})})]})]})}),Object(f.jsxs)(u.i,{children:[Object(f.jsx)(u.d,{type:"submit",className:"m-1",size:"sm",color:"primary",onClick:this.submitButton,children:"Submit"}),Object(f.jsx)(u.d,{type:"reset",size:"sm",className:"m-1",color:"danger",onClick:this.resetButton,children:"Reset"})]})]})})})}}]),n}(j.Component);t.default=g}}]);
//# sourceMappingURL=13.4e8dcea2.chunk.js.map