(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{837:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a(2),i=a(7),c=a(1),s=a(3),r=a.n(s),l=a(13),d=a(14),p=a.n(d),u=a(5),h=a.n(u),b=a(25),m=a(33),O=a(300),g=a(731),f=a(738),j=a(18),v=a(206),y=a(211),_=a(12),I=a.n(_),M=a(26),L=a(20),w=a(116),x=function(e){function t(){for(var t,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o))||this,Object(c.a)(Object(n.a)(t),"state",{visible:"hide_all"!==L.g&&!t.props.attachment.getIn(["status","sensitive"])||"show_all"===L.g,loaded:!1}),Object(c.a)(Object(n.a)(t),"setCanvasRef",(function(e){t.canvas=e})),Object(c.a)(Object(n.a)(t),"handleImageLoad",(function(){t.setState({loaded:!0})})),Object(c.a)(Object(n.a)(t),"handleMouseEnter",(function(e){t.hoverToPlay()&&e.target.play()})),Object(c.a)(Object(n.a)(t),"handleMouseLeave",(function(e){t.hoverToPlay()&&(e.target.pause(),e.target.currentTime=0)})),Object(c.a)(Object(n.a)(t),"handleClick",(function(e){0!==e.button||e.ctrlKey||e.metaKey||(e.preventDefault(),t.state.visible?t.props.onOpenMedia(t.props.attachment):t.setState({visible:!0}))})),t}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.attachment.get("blurhash")&&this._decode()},a.componentDidUpdate=function(e){e.attachment.get("blurhash")!==this.props.attachment.get("blurhash")&&this.props.attachment.get("blurhash")&&this._decode()},a._decode=function(){var e=this.props.attachment.get("blurhash"),t=Object(y.decode)(e,32,32);if(t){var a=this.canvas.getContext("2d"),o=new ImageData(t,32,32);a.putImageData(o,0,0)}},a.hoverToPlay=function(){return!L.a&&-1!==["gifv","video"].indexOf(this.props.attachment.get("type"))},a.render=function(){var e,t=this.props,a=t.attachment,n=t.displayWidth,i=this.state,c=i.visible,s=i.loaded,l=Math.floor((n-4)/3)-4+"px",d=l,p=a.get("status"),u=p.get("spoiler_text")||a.get("description"),h="";if("unknown"===a.get("type"));else if("audio"===a.get("type"))h=Object(o.a)("span",{className:"account-gallery__item__icons"},void 0,Object(o.a)(M.a,{id:"music"}));else if("image"===a.get("type")){var b=100*((a.getIn(["meta","focus","x"])||0)/2+.5),m=100*((a.getIn(["meta","focus","y"])||0)/-2+.5);h=Object(o.a)("img",{src:a.get("preview_url"),alt:a.get("description"),title:a.get("description"),style:{objectPosition:b+"% "+m+"%"},onLoad:this.handleImageLoad})}else if(-1!==["gifv","video"].indexOf(a.get("type"))){var O=!Object(w.a)()&&L.a,g="video"===a.get("type")?Object(o.a)(M.a,{id:"play"}):"GIF";h=Object(o.a)("div",{className:I()("media-gallery__gifv",{autoplay:O})},void 0,Object(o.a)("video",{className:"media-gallery__item-gifv-thumbnail","aria-label":a.get("description"),title:a.get("description"),role:"application",src:a.get("url"),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,autoPlay:O,loop:!0,muted:!0}),Object(o.a)("span",{className:"media-gallery__gifv__label"},void 0,g))}return c||(e=Object(o.a)("span",{className:"account-gallery__item__icons"},void 0,Object(o.a)(M.a,{id:"eye-slash"}))),Object(o.a)("div",{className:"account-gallery__item",style:{width:l,height:d}},void 0,Object(o.a)("a",{className:"media-gallery__item-thumbnail",href:p.get("url"),onClick:this.handleClick,title:u,target:"_blank",rel:"noopener noreferrer"},void 0,r.a.createElement("canvas",{width:32,height:32,ref:this.setCanvasRef,className:I()("media-gallery__preview",{"media-gallery__preview--hidden":c&&s})}),c&&h,!c&&e))},t}(j.a);Object(c.a)(x,"propTypes",{attachment:p.a.map.isRequired,displayWidth:h.a.number.isRequired,onOpenMedia:h.a.func.isRequired});var R,S,C,N=a(1057),T=a(467),A=a(1054),D=a(1030),k=a(47);a.d(t,"default",(function(){return E}));var q=function(e){function t(){for(var t,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o))||this,Object(c.a)(Object(n.a)(t),"handleLoadMore",(function(){t.props.onLoadMore(t.props.maxId)})),t}return Object(i.a)(t,e),t.prototype.render=function(){return Object(o.a)(A.a,{disabled:this.props.disabled,onClick:this.handleLoadMore})},t}(j.a);Object(c.a)(q,"propTypes",{shouldUpdateScroll:h.a.func,maxId:h.a.string,onLoadMore:h.a.func.isRequired});var E=Object(l.connect)((function(e,t){return{isAccount:!!e.getIn(["accounts",t.params.accountId]),attachments:Object(v.a)(e,t.params.accountId),isLoading:e.getIn(["timelines","account:"+t.params.accountId+":media","isLoading"]),hasMore:e.getIn(["timelines","account:"+t.params.accountId+":media","hasMore"])}}))((C=S=function(e){function t(){for(var t,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o))||this,Object(c.a)(Object(n.a)(t),"state",{width:323}),Object(c.a)(Object(n.a)(t),"handleScrollToBottom",(function(){t.props.hasMore&&t.handleLoadMore(t.props.attachments.size>0?t.props.attachments.last().getIn(["status","id"]):void 0)})),Object(c.a)(Object(n.a)(t),"handleScroll",(function(e){var a=e.target,o=a.scrollTop;150>a.scrollHeight-o-a.clientHeight&&!t.props.isLoading&&t.handleScrollToBottom()})),Object(c.a)(Object(n.a)(t),"handleLoadMore",(function(e){t.props.dispatch(Object(m.p)(t.props.params.accountId,{maxId:e}))})),Object(c.a)(Object(n.a)(t),"handleLoadOlder",(function(e){e.preventDefault(),t.handleScrollToBottom()})),Object(c.a)(Object(n.a)(t),"handleOpenMedia",(function(e){if("video"===e.get("type"))t.props.dispatch(Object(k.d)("VIDEO",{media:e,status:e.get("status")}));else if("audio"===e.get("type"))t.props.dispatch(Object(k.d)("AUDIO",{media:e,status:e.get("status")}));else{var a=e.getIn(["status","media_attachments"]),o=a.findIndex((function(t){return t.get("id")===e.get("id")}));t.props.dispatch(Object(k.d)("MEDIA",{media:a,index:o,status:e.get("status")}))}})),Object(c.a)(Object(n.a)(t),"handleRef",(function(e){e&&t.setState({width:e.offsetWidth})})),t}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.dispatch(Object(b.A)(this.props.params.accountId)),this.props.dispatch(Object(m.p)(this.props.params.accountId))},a.componentWillReceiveProps=function(e){e.params.accountId!==this.props.params.accountId&&e.params.accountId&&(this.props.dispatch(Object(b.A)(e.params.accountId)),this.props.dispatch(Object(m.p)(this.props.params.accountId)))},a.render=function(){var e=this,t=this.props,a=t.attachments,n=t.shouldUpdateScroll,i=t.isLoading,c=t.hasMore,s=t.isAccount,l=t.multiColumn,d=this.state.width;if(!s)return Object(o.a)(g.a,{},void 0,Object(o.a)(D.a,{}));if(!a&&i)return Object(o.a)(g.a,{},void 0,Object(o.a)(O.a,{}));var p=null;return!c||i&&0===a.size||(p=Object(o.a)(A.a,{visible:!i,onClick:this.handleLoadOlder})),Object(o.a)(g.a,{},void 0,Object(o.a)(f.a,{multiColumn:l}),Object(o.a)(T.a,{scrollKey:"account_gallery",shouldUpdateScroll:n},void 0,Object(o.a)("div",{className:"scrollable scrollable--flex",onScroll:this.handleScroll},void 0,Object(o.a)(N.a,{accountId:this.props.params.accountId}),r.a.createElement("div",{role:"feed",className:"account-gallery__container",ref:this.handleRef},a.map((function(t,n){return null===t?Object(o.a)(q,{maxId:n>0?a.getIn(n-1,"id"):null,onLoadMore:e.handleLoadMore},"more:"+a.getIn(n+1,"id")):Object(o.a)(x,{attachment:t,displayWidth:d,onOpenMedia:e.handleOpenMedia},t.get("id"))})),p),i&&0===a.size&&Object(o.a)("div",{className:"scrollable__append"},void 0,Object(o.a)(O.a,{})))))},t}(j.a),Object(c.a)(S,"propTypes",{params:h.a.object.isRequired,dispatch:h.a.func.isRequired,attachments:p.a.list.isRequired,isLoading:h.a.bool,hasMore:h.a.bool,isAccount:h.a.bool,multiColumn:h.a.bool}),R=C))||R}}]);
//# sourceMappingURL=account_gallery.js.map