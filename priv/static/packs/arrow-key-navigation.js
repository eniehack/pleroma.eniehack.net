(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{722:function(e,t,n){"use strict";n.r(t),n.d(t,"register",(function(){return s})),n.d(t,"setFocusTrapTest",(function(){return d})),n.d(t,"unregister",(function(){return l}));var r="a[href], area[href], input, select, textarea, button, iframe, object, embed, [contenteditable], [tabindex], video[controls], audio[controls], summary",o=["text","search","url","password","tel"],i=["checkbox","radio"],a=void 0;function c(e){for(var t=[],n=(function(e){if(!a)return;var t=e.parentElement;for(;t;){if(a(t))return t;t=t.parentElement}}(e)||document).querySelectorAll(r),o=n.length,i=0;i<o;i++){var c=n[i];c!==e&&(c.disabled||/^-/.test(c.getAttribute("tabindex")||"")||c.hasAttribute("inert")||!(c.offsetWidth>0||c.offsetHeight>0))||t.push(c)}return t}function u(e,t){var n=document.activeElement;if(!function(e,t){var n,r,i,a=e.tagName,c="TEXTAREA"===a,u="INPUT"===a&&-1!==o.indexOf(e.getAttribute("type").toLowerCase()),f=e.hasAttribute("contenteditable");if(!c&&!u&&!f)return!1;if(f){var s=getSelection();n=s.anchorOffset,r=s.focusOffset,i=e.textContent.length}else n=e.selectionStart,r=e.selectionEnd,i=e.value.length;return("ArrowLeft"!==t||n!==r||0!==n)&&("ArrowRight"!==t||n!==r||n!==i)}(n,t)){var r=c(n);if(r.length){var i=r.indexOf(n);("ArrowLeft"===t?r[i-1]||r[0]:r[i+1]||r[r.length-1]).focus(),e.preventDefault()}}}function f(e){if(!(e.altKey||e.metaKey||e.ctrlKey)){var t=e.key;switch(t){case"ArrowLeft":case"ArrowRight":u(e,t);break;case"Enter":!function(e){var t=document.activeElement;"INPUT"===t.tagName&&-1!==i.indexOf(t.getAttribute("type").toLowerCase())&&(t.click(),e.preventDefault())}(e)}}}function s(){addEventListener("keydown",f)}function l(){removeEventListener("keydown",f)}function d(e){a=e}}}]);
//# sourceMappingURL=arrow-key-navigation.js.map