(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(3),n=s.n(c),a=s(7),o=s(4),l=s(5),r=s(9),i=s(8),d=s(1),u=s.n(d),h=s(6),b=s.n(h),j=(s(14),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(r.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(o.a)(this,s);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:["Jam"]},e.isAdd=function(t){var s=Object(a.a)(e.state.selectedGoods);if(s.includes(t)){var c=s.indexOf(t);s.splice(c,1),e.setState({selectedGoods:s})}else s.push(t),e.setState({selectedGoods:s})},e.message=function(e){return e.length?1===e.length?"".concat(e.slice(-1)," is selected"):"".concat(e.slice(0,-1).join(", ")," and ").concat(e.slice(-1)," are selected"):"No goods selected"},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{className:"text-center fs-2",children:[Object(j.jsx)("h2",{children:this.message(t)}),t.length>=1&&Object(j.jsx)("button",{type:"button",className:" btn-lg btn-danger rounded ",onClick:function(){e.setState({selectedGoods:[]})},children:"Clear"})]}),Object(j.jsx)("ul",{className:"list-group",children:p.map((function(s){return Object(j.jsxs)("li",{className:b()("list-group-item",{active:t.includes(s)}),children:[Object(j.jsx)("h2",{className:"fs-5",children:s}),Object(j.jsx)("button",{type:"button",className:" btn btn-info rounded ",onClick:function(){return e.isAdd(s)},children:t.includes(s)?"Remove":"Select"})]},s)}))})]})}}]),s}(u.a.Component),g=m;n.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e5c64a03.chunk.js.map