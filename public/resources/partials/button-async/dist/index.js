!function(n){"function"==typeof define&&define.amd?define(n):n()}(function(){var n,e,t,_,o,r,l={},i=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,e){for(var t in e)n[t]=e[t];return n}function a(n){var e=n.parentNode;e&&e.removeChild(n)}function s(e,t,_){var o,r,l,i={};for(l in t)"key"==l?o=t[l]:"ref"==l?r=t[l]:i[l]=t[l];if(arguments.length>2&&(i.children=arguments.length>3?n.call(arguments,2):_),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===i[l]&&(i[l]=e.defaultProps[l]);return f(e,i,o,r,null)}function f(n,_,o,r,l){var i={type:n,props:_,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++t:l};return null!=e.vnode&&e.vnode(i),i}function p(n){return n.children}function d(n,e){this.props=n,this.context=e}function h(n,e){if(null==e)return n.__?h(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof n.type?h(n):null}function v(n){var e,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return v(n)}}function y(n){(!n.__d&&(n.__d=!0)&&_.push(n)&&!m.__r++||r!==e.debounceRendering)&&((r=e.debounceRendering)||o)(m)}function m(){for(var n;m.__r=_.length;)n=_.sort(function(n,e){return n.__v.__b-e.__v.__b}),_=[],n.some(function(n){var e,t,_,o,r,l;n.__d&&(r=(o=(e=n).__v).__e,(l=e.__P)&&(t=[],(_=c({},o)).__v=o.__v+1,H(l,o,_,e.__n,void 0!==l.ownerSVGElement,null!=o.__h?[r]:null,t,null==r?h(o):r,o.__h),P(t,o),o.__e!=r&&v(o)))})}function b(n,e,t,_,o,r,u,c,a,s){var d,v,y,m,b,x,w,C=_&&_.__k||i,E=C.length;for(t.__k=[],d=0;d<e.length;d++)if(null!=(m=t.__k[d]=null==(m=e[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?f(null,m,null,null,m):Array.isArray(m)?f(p,{children:m},null,null,null):m.__b>0?f(m.type,m.props,m.key,null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(y=C[d])||y&&m.key==y.key&&m.type===y.type)C[d]=void 0;else for(v=0;v<E;v++){if((y=C[v])&&m.key==y.key&&m.type===y.type){C[v]=void 0;break}y=null}H(n,m,y=y||l,o,r,u,c,a,s),b=m.__e,(v=m.ref)&&y.ref!=v&&(w||(w=[]),y.ref&&w.push(y.ref,null,m),w.push(v,m.__c||b,m)),null!=b?(null==x&&(x=b),"function"==typeof m.type&&null!=m.__k&&m.__k===y.__k?m.__d=a=g(m,a,n):a=k(n,m,y,C,b,a),s||"option"!==t.type?"function"==typeof t.type&&(t.__d=a):n.value=""):a&&y.__e==a&&a.parentNode!=n&&(a=h(y))}for(t.__e=x,d=E;d--;)null!=C[d]&&("function"==typeof t.type&&null!=C[d].__e&&C[d].__e==t.__d&&(t.__d=h(_,d+1)),L(C[d],C[d]));if(w)for(d=0;d<w.length;d++)S(w[d],w[++d],w[++d])}function g(n,e,t){var _,o;for(_=0;_<n.__k.length;_++)(o=n.__k[_])&&(o.__=n,e="function"==typeof o.type?g(o,e,t):k(t,o,o,n.__k,o.__e,e));return e}function k(n,e,t,_,o,r){var l,i,u;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(null==t||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),l=null;else{for(i=r,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==o)break n;n.insertBefore(o,r),l=r}return void 0!==l?l:o.nextSibling}function x(n,e,t){"-"===e[0]?n.setProperty(e,t):n[e]=null==t?"":"number"!=typeof t||u.test(e)?t:t+"px"}function w(n,e,t,_,o){var r;n:if("style"===e)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof _&&(n.style.cssText=_=""),_)for(e in _)t&&e in t||x(n.style,e,"");if(t)for(e in t)_&&t[e]===_[e]||x(n.style,e,t[e])}else if("o"===e[0]&&"n"===e[1])r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+r]=t,t?_||n.addEventListener(e,r?E:C,r):n.removeEventListener(e,r?E:C,r);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in n)try{n[e]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null!=t&&(!1!==t||"a"===e[0]&&"r"===e[1])?n.setAttribute(e,t):n.removeAttribute(e))}}function C(n){this.l[n.type+!1](e.event?e.event(n):n)}function E(n){this.l[n.type+!0](e.event?e.event(n):n)}function H(n,t,_,o,r,l,i,u,a){var s,f,h,v,y,m,g,k,x,w,C,E=t.type;if(void 0!==t.constructor)return null;null!=_.__h&&(a=_.__h,u=t.__e=_.__e,t.__h=null,l=[u]),(s=e.__b)&&s(t);try{n:if("function"==typeof E){if(k=t.props,x=(s=E.contextType)&&o[s.__c],w=s?x?x.props.value:s.__:o,_.__c?g=(f=t.__c=_.__c).__=f.__E:("prototype"in E&&E.prototype.render?t.__c=f=new E(k,w):(t.__c=f=new d(k,w),f.constructor=E,f.render=A),x&&x.sub(f),f.props=k,f.state||(f.state={}),f.context=w,f.__n=o,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=c({},f.__s)),c(f.__s,E.getDerivedStateFromProps(k,f.__s))),v=f.props,y=f.state,h)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&k!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,w)||t.__v===_.__v){f.props=k,f.state=f.__s,t.__v!==_.__v&&(f.__d=!1),f.__v=t,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(n){n&&(n.__=t)}),f.__h.length&&i.push(f);break n}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,w),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(v,y,m)})}f.context=w,f.props=k,f.state=f.__s,(s=e.__r)&&s(t),f.__d=!1,f.__v=t,f.__P=n,s=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(o=c(c({},o),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(v,y)),C=null!=s&&s.type===p&&null==s.key?s.props.children:s,b(n,Array.isArray(C)?C:[C],t,_,o,r,l,i,u,a),f.base=t.__e,t.__h=null,f.__h.length&&i.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==l&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=T(_.__e,t,_,o,r,l,i,a);(s=e.diffed)&&s(t)}catch(n){t.__v=null,(a||null!=l)&&(t.__e=u,t.__h=!!a,l[l.indexOf(u)]=null),e.__e(n,t,_)}}function P(n,t){e.__c&&e.__c(t,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(n){n.call(t)})}catch(n){e.__e(n,t.__v)}})}function T(e,t,_,o,r,i,u,c){var s,f,p,d=_.props,v=t.props,y=t.type,m=0;if("svg"===y&&(r=!0),null!=i)for(;m<i.length;m++)if((s=i[m])&&(s===e||(y?s.localName==y:3==s.nodeType))){e=s,i[m]=null;break}if(null==e){if(null===y)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,v.is&&v),i=null,c=!1}if(null===y)d===v||c&&e.data===v||(e.data=v);else{if(i=i&&n.call(e.childNodes),f=(d=_.props||l).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=i)for(d={},m=0;m<e.attributes.length;m++)d[e.attributes[m].name]=e.attributes[m].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(n,e,t,_,o){var r;for(r in t)"children"===r||"key"===r||r in e||w(n,r,null,t[r],_);for(r in e)o&&"function"!=typeof e[r]||"children"===r||"key"===r||"value"===r||"checked"===r||t[r]===e[r]||w(n,r,e[r],t[r],_)}(e,v,d,r,c),p)t.__k=[];else if(m=t.props.children,b(e,Array.isArray(m)?m:[m],t,_,o,r&&"foreignObject"!==y,i,u,i?i[0]:_.__k&&h(_,0),c),null!=i)for(m=i.length;m--;)null!=i[m]&&a(i[m]);c||("value"in v&&void 0!==(m=v.value)&&(m!==e.value||"progress"===y&&!m)&&w(e,"value",m,d.value,!1),"checked"in v&&void 0!==(m=v.checked)&&m!==e.checked&&w(e,"checked",m,d.checked,!1))}return e}function S(n,t,_){try{"function"==typeof n?n(t):n.current=t}catch(n){e.__e(n,_)}}function L(n,t,_){var o,r;if(e.unmount&&e.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||S(o,null,t)),null!=(o=n.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){e.__e(n,t)}o.base=o.__P=null}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&L(o[r],t,"function"!=typeof n.type);_||null==n.__e||a(n.__e),n.__e=n.__d=void 0}function A(n,e,t){return this.constructor(n,t)}function N(t,_,o){var r,i,u;e.__&&e.__(t,_),i=(r="function"==typeof o)?null:o&&o.__k||_.__k,u=[],H(_,t=(!r&&o||_).__k=s(p,null,[t]),i||l,l,void 0!==_.ownerSVGElement,!r&&o?[o]:i?null:_.firstChild?n.call(_.childNodes):null,u,!r&&o?o:i?i.__e:_.firstChild,r),P(u,t)}function U(n,e){N(n,e,U)}function D(e,t,_){var o,r,l,i=c({},e.props);for(l in t)"key"==l?o=t[l]:"ref"==l?r=t[l]:i[l]=t[l];return arguments.length>2&&(i.children=arguments.length>3?n.call(arguments,2):_),f(e.type,i,o||e.key,r||e.ref,null)}n=i.slice,e={__e:function(n,e){for(var t,_,o;e=e.__;)if((t=e.__c)&&!t.__)try{if((_=t.constructor)&&null!=_.getDerivedStateFromError&&(t.setState(_.getDerivedStateFromError(n)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n),o=t.__d),o)return t.__E=t}catch(e){n=e}throw n}},t=0,d.prototype.setState=function(n,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},t),this.props)),n&&c(t,n),null!=n&&this.__v&&(e&&this.__h.push(e),y(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),y(this))},d.prototype.render=p,_=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0;var O,F,M,j=0,W=[],R=e.__b,I=e.__r,q=e.diffed,B=e.__c,$=e.unmount;function G(n,t){e.__h&&e.__h(F,n,j||t),j=0;var _=F.__H||(F.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({}),_.__[n]}function V(){W.forEach(function(n){if(n.__P)try{n.__H.__h.forEach(J),n.__H.__h.forEach(K),n.__H.__h=[]}catch(t){n.__H.__h=[],e.__e(t,n.__v)}}),W=[]}e.__b=function(n){F=null,R&&R(n)},e.__r=function(n){I&&I(n),O=0;var e=(F=n.__c).__H;e&&(e.__h.forEach(J),e.__h.forEach(K),e.__h=[])},e.diffed=function(n){q&&q(n);var t=n.__c;t&&t.__H&&t.__H.__h.length&&(1!==W.push(t)&&M===e.requestAnimationFrame||((M=e.requestAnimationFrame)||function(n){var e,t=function(){clearTimeout(_),z&&cancelAnimationFrame(e),setTimeout(n)},_=setTimeout(t,100);z&&(e=requestAnimationFrame(t))})(V)),F=void 0},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(J),n.__h=n.__h.filter(function(n){return!n.__||K(n)})}catch(_){t.some(function(n){n.__h&&(n.__h=[])}),t=[],e.__e(_,n.__v)}}),B&&B(n,t)},e.unmount=function(n){$&&$(n);var t=n.__c;if(t&&t.__H)try{t.__H.__.forEach(J)}catch(n){e.__e(n,t.__v)}};var z="function"==typeof requestAnimationFrame;function J(n){var e=F;"function"==typeof n.__c&&n.__c(),F=e}function K(n){var e=F;n.__c=n.__(),F=e}function Q(n,e){return!n||n.length!==e.length||e.some(function(e,t){return e!==n[t]})}function X(n,e){return"function"==typeof e?e(n):e}function Y(){return(Y=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var _ in t)Object.prototype.hasOwnProperty.call(t,_)&&(n[_]=t[_])}return n}).apply(this,arguments)}function Z(n){this.getChildContext=function(){return n.context};var e=n.children,t=function(n,e){if(null==n)return{};var t,_,o={},r=Object.keys(n);for(_=0;_<r.length;_++)e.indexOf(t=r[_])>=0||(o[t]=n[t]);return o}(n,["context","children"]);return D(e,t)}function nn(){var n=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(n),this._vdom=s(Z,Y({},this._props,{context:n.detail.context}),function n(e,t){if(3===e.nodeType)return e.data;if(1!==e.nodeType)return null;var _=[],o={},r=0,l=e.attributes,i=e.childNodes;for(r=l.length;r--;)"slot"!==l[r].name&&(o[l[r].name]=l[r].value,o[en(l[r].name)]=l[r].value);for(r=i.length;r--;){var u=n(i[r],null),c=i[r].slot;c?o[c]=s(on,{name:c},u):_[r]=u}var a=t?s(on,null,_):_;return s(t||e.nodeName.toLowerCase(),o,a)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?U:N)(this._vdom,this._root)}function en(n){return n.replace(/-(\w)/g,function(n,e){return e?e.toUpperCase():""})}function tn(n,e,t){if(this._vdom){var _={};_[n]=t=null==t?void 0:t,_[en(n)]=t,this._vdom=D(this._vdom,_),N(this._vdom,this._root)}}function _n(){N(this._vdom=null,this._root)}function on(n,e){var t=this;return s("slot",Y({},n,{ref:function(n){n?(t.ref=n,t._listener||(t._listener=function(n){n.stopPropagation(),n.detail.context=e},n.addEventListener("_preact",t._listener))):t.ref.removeEventListener("_preact",t._listener)}}))}var rn=function(){return s("div",{className:"loader"},s("span",null),s("span",null))},ln=function(n){return s("style",null,"\n.button-link button {\n  cursor: "+n.isLoading+" ? 'progress' : 'pointer';\n  flex-direction: 'row';\n  display: 'flex';\n}\n\n.loader {\n  margin: auto;\n  width: 25px;\n  height: 25px;\n  display: inline-block;\n  padding: 0px;\n  text-align: left;\n}\n.loader span {\n  position: absolute;\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  border-radius: 100%;\n  background: #fff;\n  -webkit-animation: loader 1s linear infinite;\n  animation: loader 1s linear infinite;\n}\n.loader span:last-child {\n  animation-delay: -0.4s;\n  -webkit-animation-delay: -0.4s;\n}\n\n.loader-container > .message {\n  font-style: italic;\n  margin: 20px auto;\n}\n@keyframes loader {\n  0% {\n    transform: scale(0, 0);\n    opacity: 0.8;\n  }\n  100% {\n    transform: scale(1, 1);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes loader {\n  0% {\n    -webkit-transform: scale(0, 0);\n    opacity: 0.8;\n  }\n  100% {\n    -webkit-transform: scale(1, 1);\n    opacity: 0;\n  }\n}\n")};!function(n,e,t,_){function o(){var e=Reflect.construct(HTMLElement,[],o);return e._vdomComponent=n,e._root=e,e}(o.prototype=Object.create(HTMLElement.prototype)).constructor=o,o.prototype.connectedCallback=nn,o.prototype.attributeChangedCallback=tn,o.prototype.disconnectedCallback=_n,t=t||n.observedAttributes||Object.keys(n.propTypes||{}),o.observedAttributes=t,t.forEach(function(n){Object.defineProperty(o.prototype,n,{get:function(){return this._vdom.props[n]},set:function(e){this._vdom?this.attributeChangedCallback(n,null,e):(this._props||(this._props={}),this._props[n]=e,this.connectedCallback());var t=typeof e;null!=e&&"string"!==t&&"boolean"!==t&&"number"!==t||this.setAttribute(n,e)}})}),customElements.define("partial-button-async",o)}(function(n){var t=(j=1,function(n,e,t){var _=G(O++,2);return _.t=n,_.__c||(_.__=[X(void 0,!1),function(n){var e=_.t(_.__[0],n);_.__[0]!==e&&(_.__=[e,_.__[1]],_.__c.setState({}))}],_.__c=F),_.__}(X)),_=t[0],o=t[1],r=(j=5,function(n,e){var t=G(O++,7);return Q(t.__H,e)&&(t.__={current:null},t.__H=e,t.__h=function(){return{current:null}}),t.__}(0,[]));return function(t,_){var o=G(O++,3);!e.__s&&Q(o.__H,_)&&(o.__=function(){if(n.clean){var e=document.getElementById(n.clean);e&&e.remove()}},o.__H=_,F.__H.__h.push(o))}(0,[n.clean]),s("div",{className:"button-link",ref:r},s(ln,{isLoading:_}),s("button",{onClick:function(){_||(o(!0),fetch(n.to).then(function(n){try{n.blob().then(function(n){var e=window.URL.createObjectURL(n),t=document.createElement("a");t.href=e,t.download="immatriculation.pdf",t.click()})}catch(e){window.location.href=n.url}finally{o(!1)}}))}},s(p,null,s(rn,null),s("div",null,s("i",null,"Téléchargement en cours")))))},0,["clean","to"])});
//# sourceMappingURL=index.js.map
