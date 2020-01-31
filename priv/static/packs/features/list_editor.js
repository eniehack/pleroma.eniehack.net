(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{746:function(e,t,n){"use strict";n.r(t);var a,c,i,o,r,s,u,d,l=n(0),b=n(7),p=n(1),f=n(3),j=n.n(f),O=n(5),h=n.n(O),v=n(18),m=n.n(v),g=n(12),C=n(19),_=n(6),y=n(30),I=n(204),R=n(107),N=n(116),w=n(51),k=Object(_.f)({remove:{id:"lists.account.remove",defaultMessage:"Remove from list"},add:{id:"lists.account.add",defaultMessage:"Add to list"}}),q=Object(g.connect)(function(){var e=Object(I.d)();return function(t,n){var a=n.accountId,c=n.added;return{account:e(t,a),added:void 0===c?t.getIn(["listEditor","accounts","items"]).includes(a):c}}},function(e,t){var n=t.accountId;return{onRemove:function(){return e(Object(y.K)(n))},onAdd:function(){return e(Object(y.B)(n))}}})(a=Object(_.g)((i=c=function(e){function t(){return e.apply(this,arguments)||this}return Object(b.a)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.account,a=t.intl,c=t.onRemove,i=t.onAdd;return e=t.added?Object(l.a)(w.a,{icon:"times",title:a.formatMessage(k.remove),onClick:c}):Object(l.a)(w.a,{icon:"plus",title:a.formatMessage(k.add),onClick:i}),Object(l.a)("div",{className:"account"},void 0,Object(l.a)("div",{className:"account__wrapper"},void 0,Object(l.a)("div",{className:"account__display-name"},void 0,Object(l.a)("div",{className:"account__avatar-wrapper"},void 0,Object(l.a)(R.a,{account:n,size:36})),Object(l.a)(N.a,{account:n})),Object(l.a)("div",{className:"account__relationship"},void 0,e)))},t}(C.a),Object(p.a)(c,"propTypes",{account:m.a.map.isRequired,intl:h.a.object.isRequired,onRemove:h.a.func.isRequired,onAdd:h.a.func.isRequired,added:h.a.bool}),Object(p.a)(c,"defaultProps",{added:!1}),a=i))||a)||a,M=n(2),S=n(10),A=n.n(S),E=n(27),x=Object(_.f)({search:{id:"lists.search",defaultMessage:"Search among people you follow"}}),z=Object(g.connect)(function(e){return{value:e.getIn(["listEditor","suggestions","value"])}},function(e){return{onSubmit:function(t){return e(Object(y.H)(t))},onClear:function(){return e(Object(y.E)())},onChange:function(t){return e(Object(y.D)(t))}}})(o=Object(_.g)(o=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,Object(p.a)(Object(M.a)(t),"handleChange",function(e){t.props.onChange(e.target.value)}),Object(p.a)(Object(M.a)(t),"handleKeyUp",function(e){13===e.keyCode&&t.props.onSubmit(t.props.value)}),Object(p.a)(Object(M.a)(t),"handleClear",function(){t.props.onClear()}),t}return Object(b.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.value,n=e.intl,a=t.length>0;return Object(l.a)("div",{className:"list-editor__search search"},void 0,Object(l.a)("label",{},void 0,Object(l.a)("span",{style:{display:"none"}},void 0,n.formatMessage(x.search)),Object(l.a)("input",{className:"search__input",type:"text",value:t,onChange:this.handleChange,onKeyUp:this.handleKeyUp,placeholder:n.formatMessage(x.search)})),Object(l.a)("div",{role:"button",tabIndex:"0",className:"search__icon",onClick:this.handleClear},void 0,Object(l.a)(E.a,{id:"search",className:A()({active:!a})}),Object(l.a)(E.a,{id:"times-circle","aria-label":n.formatMessage(x.search),className:A()({active:a})})))},t}(j.a.PureComponent))||o)||o,K=Object(_.f)({title:{id:"lists.edit.submit",defaultMessage:"Change title"}}),P=Object(g.connect)(function(e){return{value:e.getIn(["listEditor","title"]),disabled:!e.getIn(["listEditor","isChanged"])||!e.getIn(["listEditor","title"])}},function(e){return{onChange:function(t){return e(Object(y.C)(t))},onSubmit:function(){return e(Object(y.P)(!1))}}})(r=Object(_.g)(r=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,Object(p.a)(Object(M.a)(t),"handleChange",function(e){t.props.onChange(e.target.value)}),Object(p.a)(Object(M.a)(t),"handleSubmit",function(e){e.preventDefault(),t.props.onSubmit()}),Object(p.a)(Object(M.a)(t),"handleClick",function(){t.props.onSubmit()}),t}return Object(b.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.value,n=e.disabled,a=e.intl.formatMessage(K.title);return Object(l.a)("form",{className:"column-inline-form",onSubmit:this.handleSubmit},void 0,Object(l.a)("input",{className:"setting-text",value:t,onChange:this.handleChange}),Object(l.a)(w.a,{disabled:n,icon:"check",title:a,onClick:this.handleClick}))},t}(j.a.PureComponent))||r)||r,U=n(88),D=n(34),J=n.n(D);n.d(t,"default",function(){return T});var T=Object(g.connect)(function(e){return{accountIds:e.getIn(["listEditor","accounts","items"]),searchAccountIds:e.getIn(["listEditor","suggestions","items"])}},function(e){return{onInitialize:function(t){return e(Object(y.O)(t))},onClear:function(){return e(Object(y.E)())},onReset:function(){return e(Object(y.M)())}}})(s=Object(_.g)((d=u=function(e){function t(){return e.apply(this,arguments)||this}Object(b.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props;(0,e.onInitialize)(e.listId)},n.componentWillUnmount=function(){(0,this.props.onReset)()},n.render=function(){var e=this.props,t=e.accountIds,n=e.searchAccountIds,a=e.onClear,c=n.size>0;return Object(l.a)("div",{className:"modal-root__modal list-editor"},void 0,Object(l.a)(P,{}),Object(l.a)(z,{}),Object(l.a)("div",{className:"drawer__pager"},void 0,Object(l.a)("div",{className:"drawer__inner list-editor__accounts"},void 0,t.map(function(e){return Object(l.a)(q,{accountId:e,added:!0},e)})),c&&Object(l.a)("div",{role:"button",tabIndex:"-1",className:"drawer__backdrop",onClick:a}),Object(l.a)(U.a,{defaultStyle:{x:-100},style:{x:J()(c?0:-100,{stiffness:210,damping:20})}},void 0,function(e){var t=e.x;return Object(l.a)("div",{className:"drawer__inner backdrop",style:{transform:0===t?null:"translateX("+t+"%)",visibility:-100===t?"hidden":"visible"}},void 0,n.map(function(e){return Object(l.a)(q,{accountId:e},e)}))})))},t}(C.a),Object(p.a)(u,"propTypes",{listId:h.a.string.isRequired,onClose:h.a.func.isRequired,intl:h.a.object.isRequired,onInitialize:h.a.func.isRequired,onClear:h.a.func.isRequired,onReset:h.a.func.isRequired,accountIds:m.a.list.isRequired,searchAccountIds:m.a.list.isRequired}),s=d))||s)||s}}]);
//# sourceMappingURL=list_editor.js.map