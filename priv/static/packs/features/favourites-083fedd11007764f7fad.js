webpackJsonp([22],{150:function(n,t,e){"use strict";e.d(t,"a",function(){return f});var o=e(2),a=e.n(o),i=e(1),r=e.n(i),c=e(3),l=e.n(c),u=e(4),s=e.n(u),d=e(0),p=e.n(d),f=function(n){function t(){var e,o,a;r()(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=o=l()(this,n.call.apply(n,[this].concat(c))),o.handleClick=function(){o.props.onClick()},a=e,l()(o,a)}return s()(t,n),t.prototype.render=function(){var n=this.props,t=n.type,e=n.active,o=n.columnHeaderId,i="";return this.props.icon&&(i=a()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),a()("div",{role:"heading",tabIndex:"0",className:"column-header "+(e?"active":""),onClick:this.handleClick,id:o||null},void 0,i,t)},t}(p.a.PureComponent)},259:function(n,t,e){"use strict";e.d(t,"a",function(){return b});var o=e(2),a=e.n(o),i=e(1),r=e.n(i),c=e(3),l=e.n(c),u=e(4),s=e.n(u),d=e(42),p=e.n(d),f=e(0),h=e.n(f),m=e(150),g=e(91),v=e(33),b=function(n){function t(){var e,o,a;r()(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=o=l()(this,n.call.apply(n,[this].concat(c))),o.handleHeaderClick=function(){var n=o.node.querySelector(".scrollable");n&&(o._interruptScrollAnimation=Object(g.b)(n))},o.handleScroll=p()(function(){void 0!==o._interruptScrollAnimation&&o._interruptScrollAnimation()},200),o.setRef=function(n){o.node=n},a=e,l()(o,a)}return s()(t,n),t.prototype.scrollTop=function(){var n=this.node.querySelector(".scrollable");n&&(this._interruptScrollAnimation=Object(g.b)(n))},t.prototype.render=function(){var n=this.props,t=n.heading,e=n.icon,o=n.children,i=n.active,r=n.hideHeadingOnMobile,c=t&&(!r||r&&!Object(v.b)(window.innerWidth)),l=c&&t.replace(/ /g,"-"),u=c&&a()(m.a,{icon:e,active:i,type:t,onClick:this.handleHeaderClick,columnHeaderId:l});return h.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":l,className:"column",onScroll:this.handleScroll},u,o)},t}(h.a.PureComponent)},766:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"default",function(){return A});var o,a,i,r,c=e(2),l=e.n(c),u=e(1),s=e.n(u),d=e(3),p=e.n(d),f=e(4),h=e.n(f),m=e(0),g=(e.n(m),e(9)),v=e(5),b=e.n(v),y=e(12),w=e.n(y),k=e(271),j=e(43),O=e(152),_=e(777),I=e(259),M=e(779),C=e(11),q=e.n(C),N=function(n,t){return{accountIds:n.getIn(["user_lists","favourited_by",t.params.statusId])}},A=(o=Object(g.connect)(N))((r=i=function(n){function t(){return s()(this,t),p()(this,n.apply(this,arguments))}return h()(t,n),t.prototype.componentWillMount=function(){this.props.dispatch(Object(j.n)(this.props.params.statusId))},t.prototype.componentWillReceiveProps=function(n){n.params.statusId!==this.props.params.statusId&&n.params.statusId&&this.props.dispatch(Object(j.n)(n.params.statusId))},t.prototype.render=function(){var n=this.props.accountIds;return n?l()(I.a,{},void 0,l()(M.a,{}),l()(O.a,{scrollKey:"favourites"},void 0,l()("div",{className:"scrollable"},void 0,n.map(function(n){return l()(_.a,{id:n,withNote:!1},n)})))):l()(I.a,{},void 0,l()(k.a,{}))},t}(q.a),i.propTypes={params:b.a.object.isRequired,dispatch:b.a.func.isRequired,accountIds:w.a.list},a=r))||a},777:function(n,t,e){"use strict";var o=e(2),a=e.n(o),i=e(0),r=(e.n(i),e(9)),c=e(6),l=e(69),u=e(778),s=e(22),d=e(31),p=e(18),f=Object(c.f)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"}}),h=function(){var n=Object(l.c)();return function(t,e){return{account:n(t,e.id)}}},m=function(n,t){var e=t.intl;return{onFollow:function(t){n(t.getIn(["relationship","following"])||t.getIn(["relationship","requested"])?p.g?Object(d.d)("CONFIRM",{message:a()(c.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:a()("strong",{},void 0,"@",t.get("acct"))}}),confirm:e.formatMessage(f.unfollowConfirm),onConfirm:function(){return n(Object(s.E)(t.get("id")))}}):Object(s.E)(t.get("id")):Object(s.A)(t.get("id")))},onBlock:function(t){n(t.getIn(["relationship","blocking"])?Object(s.D)(t.get("id")):Object(s.r)(t.get("id")))},onMute:function(t){n(t.getIn(["relationship","muting"])?Object(s.F)(t.get("id")):Object(s.B)(t.get("id")))}}};t.a=Object(c.g)(Object(r.connect)(h,m)(u.a))},778:function(n,t,e){"use strict";e.d(t,"a",function(){return q});var o,a,i,r=e(2),c=e.n(r),l=e(1),u=e.n(l),s=e(3),d=e.n(s),p=e(4),f=e.n(p),h=e(0),m=(e.n(h),e(12)),g=e.n(m),v=e(5),b=e.n(v),y=e(55),w=e(56),k=e(270),j=e(19),O=e(6),_=e(11),I=e.n(_),M=e(18),C=Object(O.f)({follow:{id:"account.follow",defaultMessage:"Follow"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"}}),q=Object(O.g)((i=a=function(n){function t(){var e,o,a;u()(this,t);for(var i=arguments.length,r=Array(i),c=0;c<i;c++)r[c]=arguments[c];return e=o=d()(this,n.call.apply(n,[this].concat(r))),o.handleFollow=function(){o.props.onFollow(o.props.account)},o.handleBlock=function(){o.props.onBlock(o.props.account)},o.handleMute=function(){o.props.onMute(o.props.account)},a=e,d()(o,a)}return f()(t,n),t.prototype.render=function(){var n=this.props,t=n.account,e=n.intl,o=n.hidden;if(!t)return c()("div",{});if(o)return c()("div",{},void 0,t.get("display_name"),t.get("username"));var a=void 0;if(t.get("id")!==M.e&&null!==t.get("relationship",null)){var i=t.getIn(["relationship","following"]),r=t.getIn(["relationship","requested"]),l=t.getIn(["relationship","blocking"]),u=t.getIn(["relationship","muting"]);a=r?c()(j.a,{disabled:!0,icon:"hourglass",title:e.formatMessage(C.requested)}):l?c()(j.a,{active:!0,icon:"unlock-alt",title:e.formatMessage(C.unblock,{name:t.get("username")}),onClick:this.handleBlock}):u?c()(j.a,{active:!0,icon:"volume-up",title:e.formatMessage(C.unmute,{name:t.get("username")}),onClick:this.handleMute}):c()(j.a,{icon:i?"user-times":"user-plus",title:e.formatMessage(i?C.unfollow:C.follow),onClick:this.handleFollow,active:i})}return c()("div",{className:"account"},void 0,c()("div",{className:"account__wrapper"},void 0,c()(k.a,{className:"account__display-name",href:t.get("url"),to:"/accounts/"+t.get("id")},t.get("id"),c()("div",{className:"account__avatar-wrapper"},void 0,c()(y.a,{account:t,size:36})),c()(w.a,{account:t})),c()("div",{className:"account__relationship"},void 0,a)))},t}(I.a),a.propTypes={account:g.a.map.isRequired,onFollow:b.a.func.isRequired,onBlock:b.a.func.isRequired,onMute:b.a.func.isRequired,intl:b.a.object.isRequired,hidden:b.a.bool},o=i))||o},779:function(n,t,e){"use strict";e.d(t,"a",function(){return b});var o,a,i=e(2),r=e.n(i),c=e(1),l=e.n(c),u=e(3),s=e.n(u),d=e(4),p=e.n(d),f=e(0),h=e.n(f),m=e(6),g=e(5),v=e.n(g),b=(a=o=function(n){function t(){var e,o,a;l()(this,t);for(var i=arguments.length,r=Array(i),c=0;c<i;c++)r[c]=arguments[c];return e=o=s()(this,n.call.apply(n,[this].concat(r))),o.handleClick=function(){window.history&&1===window.history.length?o.context.router.history.push("/"):o.context.router.history.goBack()},a=e,s()(o,a)}return p()(t,n),t.prototype.render=function(){return r()("button",{onClick:this.handleClick,className:"column-back-button"},void 0,r()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),r()(m.b,{id:"column_back_button.label",defaultMessage:"Back"}))},t}(h.a.PureComponent),o.contextTypes={router:v.a.object},a)}});
//# sourceMappingURL=favourites-083fedd11007764f7fad.js.map