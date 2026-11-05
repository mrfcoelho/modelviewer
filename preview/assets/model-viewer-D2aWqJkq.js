import{t as e}from"./index-D5oMJ8qT.js";import{$ as t,$n as n,$t as r,A as i,An as a,At as o,B as s,Bn as c,Bt as l,C as u,Cn as d,Cr as f,Ct as p,D as m,Dn as h,Dt as g,E as _,En as v,Er as y,Et as b,F as x,Fn as S,Ft as C,G as w,Gn as T,Gt as E,H as D,Hn as O,Ht as k,I as A,In as ee,It as j,J as M,Jn as te,K as ne,Kn as re,Kt as ie,L as ae,Ln as N,Lt as oe,M as P,Mn as se,Mt as ce,N as F,Nn as le,Nt as ue,O as de,On as fe,Ot as pe,P as me,Pn as he,Pt as ge,Q as _e,Qn as ve,Rn as ye,Rt as be,S as xe,Sn as Se,Sr as Ce,St as we,T as I,Tn as Te,Tr as Ee,Tt as L,U as De,Un as R,Ut as Oe,V as z,Vn as B,Vt as ke,W as Ae,Wn as je,Wt as Me,X as Ne,Xn as Pe,Y as Fe,Yn as Ie,Z as Le,Zn as Re,_ as ze,_n as Be,_r as Ve,_t as He,a as Ue,ar as We,at as Ge,b as Ke,bn as qe,br as Je,bt as Ye,c as Xe,cn as Ze,cr as Qe,ct as $e,d as et,dn as tt,dr as nt,dt as rt,er as V,et as it,f as at,fr as ot,ft as st,g as ct,gn as lt,gr as ut,gt as H,h as dt,hr as ft,ht as pt,i as mt,ir as ht,it as gt,j as _t,jn as vt,jt as yt,k as bt,kn as xt,kt as St,l as Ct,ln as wt,lr as U,lt as Tt,m as W,mn as Et,mr as Dt,mt as Ot,nr as kt,nt as At,o as jt,or as Mt,ot as Nt,p as Pt,pn as Ft,pr as It,pt as Lt,q as Rt,qn as zt,r as Bt,rn as Vt,rr as Ht,rt as Ut,s as Wt,sn as Gt,sr as Kt,st as qt,t as Jt,tr as Yt,tt as Xt,u as Zt,un as Qt,ur as $t,ut as en,v as tn,vn as nn,vr as rn,vt as an,w as on,wn as sn,wr as cn,wt as ln,x as un,xn as dn,xr as fn,xt as pn,y as mn,yr as hn,yt as gn,z as _n,zn as vn,zt as yn}from"./GLTFExporter-BWxX0_lY.js";var bn=globalThis,xn=bn.ShadowRoot&&(bn.ShadyCSS===void 0||bn.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Sn=Symbol(),Cn=new WeakMap,wn=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Sn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(xn&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Cn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Cn.set(t,e))}return e}toString(){return this.cssText}},Tn=e=>new wn(typeof e==`string`?e:e+``,void 0,Sn),En=(e,t)=>{if(xn)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=bn.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Dn=xn?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Tn(t)})(e):e,{is:On,defineProperty:kn,getOwnPropertyDescriptor:An,getOwnPropertyNames:jn,getOwnPropertySymbols:Mn,getPrototypeOf:Nn}=Object,Pn=globalThis,Fn=Pn.trustedTypes,In=Fn?Fn.emptyScript:``,Ln=Pn.reactiveElementPolyfillSupport,Rn=(e,t)=>e,zn={toAttribute(e,t){switch(t){case Boolean:e=e?In:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Bn=(e,t)=>!On(e,t),Vn={attribute:!0,type:String,converter:zn,reflect:!1,useDefault:!1,hasChanged:Bn};Symbol.metadata??=Symbol(`metadata`),Pn.litPropertyMetadata??=new WeakMap;var Hn=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Vn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&kn(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=An(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Vn}static _$Ei(){if(this.hasOwnProperty(Rn(`elementProperties`)))return;let e=Nn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Rn(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Rn(`properties`))){let e=this.properties,t=[...jn(e),...Mn(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Dn(e))}else e!==void 0&&t.push(Dn(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return En(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?zn:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?zn:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Bn)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Hn.elementStyles=[],Hn.shadowRootOptions={mode:`open`},Hn[Rn(`elementProperties`)]=new Map,Hn[Rn(`finalized`)]=new Map,Ln?.({ReactiveElement:Hn}),(Pn.reactiveElementVersions??=[]).push(`2.1.2`);var Un=globalThis,Wn=e=>e,Gn=Un.trustedTypes,Kn=Gn?Gn.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,qn=`$lit$`,Jn=`lit$${Math.random().toFixed(9).slice(2)}$`,Yn=`?`+Jn,Xn=`<${Yn}>`,Zn=document,Qn=()=>Zn.createComment(``),$n=e=>e===null||typeof e!=`object`&&typeof e!=`function`,er=Array.isArray,tr=e=>er(e)||typeof e?.[Symbol.iterator]==`function`,nr=`[ 	
\f\r]`,rr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ir=/-->/g,ar=/>/g,or=RegExp(`>|${nr}(?:([^\\s"'>=/]+)(${nr}*=${nr}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),sr=/'/g,cr=/"/g,lr=/^(?:script|style|textarea|title)$/i,ur=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),dr=Symbol.for(`lit-noChange`),fr=Symbol.for(`lit-nothing`),pr=new WeakMap,mr=Zn.createTreeWalker(Zn,129);function hr(e,t){if(!er(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Kn===void 0?t:Kn.createHTML(t)}var gr=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=rr;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===rr?c[1]===`!--`?o=ir:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=or):(lr.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=or):o=ar:o===or?c[0]===`>`?(o=i??rr,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?or:c[3]===`"`?cr:sr):o===cr||o===sr?o=or:o===ir||o===ar?o=rr:(o=or,i=void 0);let d=o===or&&e[t+1].startsWith(`/>`)?` `:``;a+=o===rr?n+Xn:l>=0?(r.push(s),n.slice(0,l)+qn+n.slice(l)+Jn+d):n+Jn+(l===-2?t:d)}return[hr(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},_r=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=gr(t,n);if(this.el=e.createElement(l,r),mr.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=mr.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(qn)){let t=u[o++],n=i.getAttribute(e).split(Jn),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Sr:r[1]===`?`?Cr:r[1]===`@`?wr:xr}),i.removeAttribute(e)}else e.startsWith(Jn)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(lr.test(i.tagName)){let e=i.textContent.split(Jn),t=e.length-1;if(t>0){i.textContent=Gn?Gn.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Qn()),mr.nextNode(),c.push({type:2,index:++a});i.append(e[t],Qn())}}}else if(i.nodeType===8){if(i.data===Yn)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Jn,e+1))!==-1;)c.push({type:7,index:a}),e+=Jn.length-1}}a++}}static createElement(e,t){let n=Zn.createElement(`template`);return n.innerHTML=e,n}};function vr(e,t,n=e,r){if(t===dr)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=$n(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=vr(e,i._$AS(e,t.values),i,r)),t}var yr=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Zn).importNode(t,!0);mr.currentNode=r;let i=mr.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new br(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Tr(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=mr.nextNode(),a++)}return mr.currentNode=Zn,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},br=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=fr,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=vr(this,e,t),$n(e)?e===fr||e==null||e===``?(this._$AH!==fr&&this._$AR(),this._$AH=fr):e!==this._$AH&&e!==dr&&this._(e):e._$litType$===void 0?e.nodeType===void 0?tr(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==fr&&$n(this._$AH)?this._$AA.nextSibling.data=e:this.T(Zn.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=_r.createElement(hr(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new yr(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=pr.get(e.strings);return t===void 0&&pr.set(e.strings,t=new _r(e)),t}k(t){er(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Qn()),this.O(Qn()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Wn(e).nextSibling;Wn(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},xr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=fr,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=fr}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=vr(this,e,t,0),a=!$n(e)||e!==this._$AH&&e!==dr,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=vr(this,r[n+o],t,o),s===dr&&(s=this._$AH[o]),a||=!$n(s)||s!==this._$AH[o],s===fr?e=fr:e!==fr&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===fr?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Sr=class extends xr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===fr?void 0:e}},Cr=class extends xr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==fr)}},wr=class extends xr{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=vr(this,e,t,0)??fr)===dr)return;let n=this._$AH,r=e===fr&&n!==fr||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==fr&&(n===fr||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Tr=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){vr(this,e)}},Er=Un.litHtmlPolyfillSupport;Er?.(_r,br),(Un.litHtmlVersions??=[]).push(`3.3.3`);var Dr=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new br(t.insertBefore(Qn(),e),e,void 0,n??{})}return i._$AI(e),i},Or=globalThis,kr=class extends Hn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Dr(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return dr}};kr._$litElement$=!0,kr.finalized=!0,Or.litElementHydrateSupport?.({LitElement:kr});var Ar=Or.litElementPolyfillSupport;Ar?.({LitElement:kr}),(Or.litElementVersions??=[]).push(`4.2.2`);var jr={attribute:!0,type:String,converter:zn,reflect:!1,hasChanged:Bn},Mr=(e=jr,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function G(e){return(t,n)=>typeof n==`object`?Mr(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var Nr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Pr=class extends Hn{constructor(){super(...arguments),this.src=null,this.offset=null,this.orientation=null,this.scale=null,this.background=!1}static get is(){return`extra-model`}updated(e){if(super.updated(e),e.has(`src`)||e.has(`offset`)||e.has(`orientation`)||e.has(`scale`)||e.has(`background`)){let t=e.has(`src`);this.dispatchEvent(new CustomEvent(`extra-model-changed`,{bubbles:!0,composed:!0,detail:{srcChanged:t,src:this.src,offset:this.offset,orientation:this.orientation,scale:this.scale,background:this.background}}))}}};Nr([G({type:String})],Pr.prototype,`src`,void 0),Nr([G({type:String})],Pr.prototype,`offset`,void 0),Nr([G({type:String})],Pr.prototype,`orientation`,void 0),Nr([G({type:String})],Pr.prototype,`scale`,void 0),Nr([G({type:Boolean})],Pr.prototype,`background`,void 0),customElements.define(`extra-model`,Pr);function Fr(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ir(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Lr={basic:{uniforms:f([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:f([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:f([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:f([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:f([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new W(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:f([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:f([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:f([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:f([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:f([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:f([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:f([q.common,q.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:f([q.lights,q.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};Lr.physical={uniforms:f([Lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var Rr={r:0,b:0,g:0},zr=new _t,Br=new He;function Vr(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new an(new Xe(1,1,1),new N({name:`BackgroundCubeMaterial`,uniforms:ut(Lr.backgroundCube.uniforms),vertexShader:Lr.backgroundCube.vertexShader,fragmentShader:Lr.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),zr.copy(n.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,i.isCubeTexture&&i.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),l.material.uniforms.envMap.value=i,l.material.uniforms.flipEnvMap.value=i.isCubeTexture&&i.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Br.makeRotationFromEuler(zr)),l.material.toneMapped=dt.getTransfer(i.colorSpace)!==S,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new an(new ue(2,2),new N({name:`BackgroundMaterial`,uniforms:ut(Lr.background.uniforms),vertexShader:Lr.background.vertexShader,fragmentShader:Lr.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=dt.getTransfer(i.colorSpace)!==S,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Rr,fn(e)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Hr(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ur(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Wr(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Ee(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Gr(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ce,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Kr=4,qr=[.125,.215,.35,.446,.526,.582],Jr=20,Yr=256,Xr=new o,Zr=new W,Qr=null,$r=0,ei=0,ti=!1,ni=new U,ri=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ni}=i;Qr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),ei=this._renderer.getActiveMipmapLevel(),ti=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ui(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=li(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qr,$r,ei),this._renderer.xr.enabled=ti,e.scissorTest=!1,oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),ei=this._renderer.getActiveMipmapLevel(),ti=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:s,format:E,colorSpace:Nt,depthBuffer:!1},r=ai(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ai(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ii(r)),this._blurMaterial=ci(r,e,t),this._ggxMaterial=si(r,e,t)}return r}_compileMaterial(e){let t=new an(new Zt,e);this._renderer.compile(t,Xr)}_sceneToCubeUV(e,t,n,r,i){let a=new yt(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Zr),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new an(new Xe,new gn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Zr),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;oi(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ui()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=li());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;oi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Xr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Kr?n-d+Kr:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,oi(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Xr),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,oi(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Xr)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&hn(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Jr;m>Jr&&Ee(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jr}`);let h=[],g=0;for(let e=0;e<Jr;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];oi(t,3*v*(r>_-Kr?r-_+Kr:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Xr)}};function ii(e){let t=[],n=[],r=[],i=e,a=e-Kr+1+qr.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Kr?s=qr[o-e+Kr-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Zt;h.setAttribute(`position`,new Ct(f,3)),h.setAttribute(`uv`,new Ct(p,2)),h.setAttribute(`faceIndex`,new Ct(m,1)),r.push(new an(h,null)),i>Kr&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function ai(e,t,n){let r=new Dt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function oi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function si(e,t,n){return new N({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:di(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ci(e,t,n){let r=new Float32Array(Jr),i=new U(0,1,0);return new N({name:`SphericalGaussianBlur`,defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:di(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function li(){return new N({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:di(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ui(){return new N({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:di(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function di(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var fi=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new un(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xe(5,5,5),i=new N({name:`CubemapFromEquirect`,uniforms:ut(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new an(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=At),new mn(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function pi(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new fi(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ri(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ri(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function mi(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&y(`WebGLRenderer: `+e+` extension not supported.`),t}}}function hi(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Re:Pe)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function gi(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function _i(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:hn(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function vi(e,t,n){let r=new WeakMap,i=new $t;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l===void 0?0:l.length,f=r.get(o);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),a===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*d),_=new u(g,m,h,d);_.type=A,_.needsUpdate=!0;let v=p*4;for(let t=0;t<d;t++){let r=s[t],o=c[t],u=l[t],d=m*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}f={count:d,texture:_,size:new Qe(m,h)},r.set(o,f);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,f.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,f.size)}return{update:a}}function yi(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var bi={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function xi(e,t,n,r,i){let a=new Dt(t,n,{type:e,depthBuffer:r,stencilBuffer:i}),c=new Dt(t,n,{type:s,depthBuffer:!1,stencilBuffer:!1}),l=new Zt;l.setAttribute(`position`,new x([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new x([0,2,0,0,2,0],2));let u=new sn({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new an(l,u),f=new o(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){a.setSize(e,t),c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(a),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=a,r=c;for(let i=0;i<v.length;i++){let a=v[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},dt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=bi[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){a.dispose(),c.dispose(),l.dispose(),u.dispose()}}var Si=new zt,Ci=new bt(1,1),wi=new u,Ti=new xe,Ei=new un,Di=[],Oi=[],ki=new Float32Array(16),Ai=new Float32Array(9),ji=new Float32Array(4);function Mi(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Di[i];if(a===void 0&&(a=new Float32Array(i),Di[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ni(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Pi(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Fi(e,t){let n=Oi[t];n===void 0&&(n=new Int32Array(t),Oi[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ii(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Li(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ni(n,t))return;e.uniform2fv(this.addr,t),Pi(n,t)}}function Ri(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ni(n,t))return;e.uniform3fv(this.addr,t),Pi(n,t)}}function zi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ni(n,t))return;e.uniform4fv(this.addr,t),Pi(n,t)}}function Bi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ni(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Pi(n,t)}else{if(Ni(n,r))return;ji.set(r),e.uniformMatrix2fv(this.addr,!1,ji),Pi(n,r)}}function Vi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ni(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Pi(n,t)}else{if(Ni(n,r))return;Ai.set(r),e.uniformMatrix3fv(this.addr,!1,Ai),Pi(n,r)}}function Hi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ni(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Pi(n,t)}else{if(Ni(n,r))return;ki.set(r),e.uniformMatrix4fv(this.addr,!1,ki),Pi(n,r)}}function Ui(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Wi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ni(n,t))return;e.uniform2iv(this.addr,t),Pi(n,t)}}function Gi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ni(n,t))return;e.uniform3iv(this.addr,t),Pi(n,t)}}function Ki(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ni(n,t))return;e.uniform4iv(this.addr,t),Pi(n,t)}}function qi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ji(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ni(n,t))return;e.uniform2uiv(this.addr,t),Pi(n,t)}}function Yi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ni(n,t))return;e.uniform3uiv(this.addr,t),Pi(n,t)}}function Xi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ni(n,t))return;e.uniform4uiv(this.addr,t),Pi(n,t)}}function Zi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ci.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ci):a=Si,n.setTexture2D(t||a,i)}function Qi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ti,i)}function $i(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ei,i)}function ea(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||wi,i)}function ta(e){switch(e){case 5126:return Ii;case 35664:return Li;case 35665:return Ri;case 35666:return zi;case 35674:return Bi;case 35675:return Vi;case 35676:return Hi;case 5124:case 35670:return Ui;case 35667:case 35671:return Wi;case 35668:case 35672:return Gi;case 35669:case 35673:return Ki;case 5125:return qi;case 36294:return Ji;case 36295:return Yi;case 36296:return Xi;case 35678:case 36198:case 36298:case 36306:case 35682:return Zi;case 35679:case 36299:case 36307:return Qi;case 35680:case 36300:case 36308:case 36293:return $i;case 36289:case 36303:case 36311:case 36292:return ea}}function na(e,t){e.uniform1fv(this.addr,t)}function ra(e,t){let n=Mi(t,this.size,2);e.uniform2fv(this.addr,n)}function ia(e,t){let n=Mi(t,this.size,3);e.uniform3fv(this.addr,n)}function aa(e,t){let n=Mi(t,this.size,4);e.uniform4fv(this.addr,n)}function oa(e,t){let n=Mi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function sa(e,t){let n=Mi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ca(e,t){let n=Mi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function la(e,t){e.uniform1iv(this.addr,t)}function ua(e,t){e.uniform2iv(this.addr,t)}function da(e,t){e.uniform3iv(this.addr,t)}function fa(e,t){e.uniform4iv(this.addr,t)}function pa(e,t){e.uniform1uiv(this.addr,t)}function ma(e,t){e.uniform2uiv(this.addr,t)}function ha(e,t){e.uniform3uiv(this.addr,t)}function ga(e,t){e.uniform4uiv(this.addr,t)}function _a(e,t,n){let r=this.cache,i=t.length,a=Fi(n,i);Ni(r,a)||(e.uniform1iv(this.addr,a),Pi(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ci:Si;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function va(e,t,n){let r=this.cache,i=t.length,a=Fi(n,i);Ni(r,a)||(e.uniform1iv(this.addr,a),Pi(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ti,a[e])}function ya(e,t,n){let r=this.cache,i=t.length,a=Fi(n,i);Ni(r,a)||(e.uniform1iv(this.addr,a),Pi(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ei,a[e])}function ba(e,t,n){let r=this.cache,i=t.length,a=Fi(n,i);Ni(r,a)||(e.uniform1iv(this.addr,a),Pi(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||wi,a[e])}function xa(e){switch(e){case 5126:return na;case 35664:return ra;case 35665:return ia;case 35666:return aa;case 35674:return oa;case 35675:return sa;case 35676:return ca;case 5124:case 35670:return la;case 35667:case 35671:return ua;case 35668:case 35672:return da;case 35669:case 35673:return fa;case 5125:return pa;case 36294:return ma;case 36295:return ha;case 36296:return ga;case 35678:case 36198:case 36298:case 36306:case 35682:return _a;case 35679:case 36299:case 36307:return va;case 35680:case 36300:case 36308:case 36293:return ya;case 36289:case 36303:case 36311:case 36292:return ba}}var Sa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ta(t.type)}},Ca=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xa(t.type)}},wa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ta=/(\w+)(\])?(\[|\.)?/g;function Ea(e,t){e.seq.push(t),e.map[t.id]=t}function Da(e,t,n){let r=e.name,i=r.length;for(Ta.lastIndex=0;;){let a=Ta.exec(r),o=Ta.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ea(n,l===void 0?new Sa(s,e,t):new Ca(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new wa(s),Ea(n,e)),n=e}}}var Oa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Da(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ka(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Aa=37297,ja=0;function Ma(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Na=new H;function Pa(e){dt._getMatrix(Na,dt.workingColorSpace,e);let t=`mat3( ${Na.elements.map(e=>e.toFixed(4))} )`;switch(dt.getTransfer(e)){case qt:return[t,`LinearTransferOETF`];case S:return[t,`sRGBTransferOETF`];default:return Ee(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Fa(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ma(e.getShaderSource(t),r)}return i}function Ia(e,t){let n=Pa(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var La={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ra(e,t){let n=La[t];return n===void 0?(Ee(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var za=new U;function Ba(){return dt.getLuminanceCoefficients(za),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${za.x.toFixed(4)}, ${za.y.toFixed(4)}, ${za.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Va(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Wa).join(`
`)}function Ha(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ua(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Wa(e){return e!==``}function Ga(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ka(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qa=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(e){return e.replace(qa,Xa)}var Ya=new Map;function Xa(e,t){let n=K[t];if(n===void 0){let e=Ya.get(t);if(e!==void 0)n=K[e],Ee(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Ja(n)}var Za=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qa(e){return e.replace(Za,$a)}function $a(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function eo(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var to={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function no(e){return to[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ro={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function io(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ro[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ao={302:`ENVMAP_MODE_REFRACTION`};function oo(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ao[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var so={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function co(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:so[e.combine]||`ENVMAP_BLENDING_NONE`}function lo(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function uo(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=no(n),l=io(n),u=oo(n),d=co(n),f=lo(n),p=Va(n),m=Ha(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Wa).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Wa).join(`
`),_.length>0&&(_+=`
`)):(g=[eo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Wa).join(`
`),_=[eo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:Ra(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,Ia(`linearToOutputTexel`,n.outputColorSpace),Ba(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Wa).join(`
`)),o=Ja(o),o=Ga(o,n),o=Ka(o,n),s=Ja(s),s=Ga(s,n),s=Ka(s,n),o=Qa(o),s=Qa(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ka(i,i.VERTEX_SHADER,y),S=ka(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Fa(i,x,`vertex`),n=Fa(i,S,`fragment`);hn(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Ee(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Oa(i,h),T=Ua(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Aa)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ja++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var fo=0,po=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mo(e),t.set(e,n)),n}},mo=class{constructor(e){this.id=fo++,this.code=e,this.usedTimes=0}};function ho(e,t,r,i,a,o){let s=new Ne,c=new po,l=new Set,u=[],d=new Map,f=i.logarithmicDepthBuffer,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(n,a,s,u,d){let g=u.fog,_=d.geometry,v=n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial?u.environment:null,y=n.isMeshStandardMaterial||n.isMeshLambertMaterial&&!n.envMap||n.isMeshPhongMaterial&&!n.envMap,b=t.get(n.envMap||v,y),x=b&&b.mapping===306?b.image.height:null,S=m[n.type];n.precision!==null&&(p=i.getMaxPrecision(n.precision),p!==n.precision&&Ee(`WebGLProgram.getParameters:`,n.precision,`not supported, using`,p,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(S){let e=Lr[S];E=e.vertexShader,D=e.fragmentShader}else E=n.vertexShader,D=n.fragmentShader,c.update(n),O=c.getVertexShaderID(n),k=c.getFragmentShaderID(n);let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),j=d.isInstancedMesh===!0,M=d.isBatchedMesh===!0,te=!!n.map,ne=!!n.matcap,re=!!b,ie=!!n.aoMap,ae=!!n.lightMap,N=!!n.bumpMap,oe=!!n.normalMap,P=!!n.displacementMap,se=!!n.emissiveMap,ce=!!n.metalnessMap,F=!!n.roughnessMap,le=n.anisotropy>0,ue=n.clearcoat>0,de=n.dispersion>0,fe=n.iridescence>0,pe=n.sheen>0,me=n.transmission>0,he=le&&!!n.anisotropyMap,ge=ue&&!!n.clearcoatMap,_e=ue&&!!n.clearcoatNormalMap,ve=ue&&!!n.clearcoatRoughnessMap,ye=fe&&!!n.iridescenceMap,be=fe&&!!n.iridescenceThicknessMap,xe=pe&&!!n.sheenColorMap,Se=pe&&!!n.sheenRoughnessMap,Ce=!!n.specularMap,we=!!n.specularColorMap,I=!!n.specularIntensityMap,Te=me&&!!n.transmissionMap,L=me&&!!n.thicknessMap,De=!!n.gradientMap,R=!!n.alphaMap,Oe=n.alphaTest>0,z=!!n.alphaHash,B=!!n.extensions,ke=0;n.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae={shaderID:S,shaderType:n.type,shaderName:n.name,vertexShader:E,fragmentShader:D,defines:n.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:n.isRawShaderMaterial===!0,glslVersion:n.glslVersion,precision:p,batching:M,batchingColor:M&&d._colorsTexture!==null,instancing:j,instancingColor:j&&d.instanceColor!==null,instancingMorph:j&&d.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nt,alphaToCoverage:!!n.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&b.mapping,envMapCubeUVHeight:x,aoMap:ie,lightMap:ae,bumpMap:N,normalMap:oe,displacementMap:P,emissiveMap:se,normalMapObjectSpace:oe&&n.normalMapType===1,normalMapTangentSpace:oe&&n.normalMapType===0,metalnessMap:ce,roughnessMap:F,anisotropy:le,anisotropyMap:he,clearcoat:ue,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:de,iridescence:fe,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:pe,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:we,specularIntensityMap:I,transmission:me,transmissionMap:Te,thicknessMap:L,gradientMap:De,opaque:n.transparent===!1&&n.blending===1&&n.alphaToCoverage===!1,alphaMap:R,alphaTest:Oe,alphaHash:z,combine:n.combine,mapUv:te&&h(n.map.channel),aoMapUv:ie&&h(n.aoMap.channel),lightMapUv:ae&&h(n.lightMap.channel),bumpMapUv:N&&h(n.bumpMap.channel),normalMapUv:oe&&h(n.normalMap.channel),displacementMapUv:P&&h(n.displacementMap.channel),emissiveMapUv:se&&h(n.emissiveMap.channel),metalnessMapUv:ce&&h(n.metalnessMap.channel),roughnessMapUv:F&&h(n.roughnessMap.channel),anisotropyMapUv:he&&h(n.anisotropyMap.channel),clearcoatMapUv:ge&&h(n.clearcoatMap.channel),clearcoatNormalMapUv:_e&&h(n.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&h(n.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&h(n.iridescenceMap.channel),iridescenceThicknessMapUv:be&&h(n.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&h(n.sheenColorMap.channel),sheenRoughnessMapUv:Se&&h(n.sheenRoughnessMap.channel),specularMapUv:Ce&&h(n.specularMap.channel),specularColorMapUv:we&&h(n.specularColorMap.channel),specularIntensityMapUv:I&&h(n.specularIntensityMap.channel),transmissionMapUv:Te&&h(n.transmissionMap.channel),thicknessMapUv:L&&h(n.thicknessMap.channel),alphaMapUv:R&&h(n.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(oe||le),vertexColors:n.vertexColors,vertexAlphas:n.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!_.attributes.uv&&(te||R),fog:!!g,useFog:n.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:n.wireframe===!1&&(n.flatShading===!0||_.attributes.normal===void 0&&oe===!1&&(n.isMeshLambertMaterial||n.isMeshPhongMaterial||n.isMeshStandardMaterial||n.isMeshPhysicalMaterial)),sizeAttenuation:n.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ee,skinning:d.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numDirLights:a.directional.length,numPointLights:a.point.length,numSpotLights:a.spot.length,numSpotLightMaps:a.spotLightMap.length,numRectAreaLights:a.rectArea.length,numHemiLights:a.hemi.length,numDirLightShadows:a.directionalShadowMap.length,numPointLightShadows:a.pointShadowMap.length,numSpotLightShadows:a.spotShadowMap.length,numSpotLightShadowsWithMaps:a.numSpotLightShadowsWithMaps,numLightProbes:a.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:n.dithering,shadowMapEnabled:e.shadowMap.enabled&&s.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:te&&n.map.isVideoTexture===!0&&dt.getTransfer(n.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&n.emissiveMap.isVideoTexture===!0&&dt.getTransfer(n.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:n.premultipliedAlpha,doubleSided:n.side===2,flipSided:n.side===1,useDepthPacking:n.depthPacking>=0,depthPacking:n.depthPacking||0,index0AttributeName:n.index0AttributeName,extensionClipCullDistance:B&&n.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(B&&n.extensions.multiDraw===!0||M)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:n.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],r;if(t){let e=Lr[t];r=n.clone(e.uniforms)}else r=e.uniforms;return r}function x(t,n){let r=d.get(n);return r===void 0?(r=new uo(e,n,t,a),u.push(r),d.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function go(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function _o(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function vo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function yo(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||_o),r.length>1&&r.sort(t||vo),i.length>1&&i.sort(t||vo)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function bo(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new yo,e.set(t,[i])):n>=r.length?(i=new yo,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function xo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new U,color:new W};break;case`SpotLight`:n={position:new U,direction:new U,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function So(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Co=0;function wo(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function To(e){let t=new xo,n=So(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new He,o=new He;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(wo);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Co++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Eo(e){let t=new To(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function Do(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Eo(e),t.set(n,[a])):r>=i.length?(a=new Eo(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Oo=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ko=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ao=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],jo=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Mo=new He,No=new U,Po=new U;function Fo(e,t,n){let r=new ae,i=new Qe,a=new Qe,o=new $t,c=new Ye,l=new pn,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new N({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Oo,fragmentShader:ko}),h=p.clone();h.defines.HORIZONTAL_PASS=1;let g=new Zt;g.setAttribute(`position`,new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new an(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,c){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(Ee(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let h=y!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){Ee(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();i.multiply(g),a.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/g.x),i.x=a.x*g.x,f.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/g.y),i.y=a.y*g.y,f.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=_,f.map===null||h===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(u.isPointLight){Ee(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new Dt(i.x,i.y,{format:Se,type:s,minFilter:At,magFilter:At,generateMipmaps:!1}),f.map.texture.name=u.name+`.shadowMap`,f.map.depthTexture=new bt(i.x,i.y,A),f.map.depthTexture.name=u.name+`.shadowMapDepth`,f.map.depthTexture.format=m,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=L,f.map.depthTexture.magFilter=L}else u.isPointLight?(f.map=new fi(i.x),f.map.depthTexture=new Ke(i.x,ht)):(f.map=new Dt(i.x,i.y),f.map.depthTexture=new bt(i.x,i.y,ht)),f.map.depthTexture.name=u.name+`.shadowMap`,f.map.depthTexture.format=m,this.type===1?(f.map.depthTexture.compareFunction=_?518:515,f.map.depthTexture.minFilter=At,f.map.depthTexture.magFilter=At):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=L,f.map.depthTexture.magFilter=L);f.camera.updateProjectionMatrix()}let v=f.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<v;t++){if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}if(u.isPointLight){let e=f.camera,n=f.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),No.setFromMatrixPosition(u.matrixWorld),e.position.copy(No),Po.copy(e.position),Po.add(Ao[t]),e.up.copy(jo[t]),e.lookAt(Po),e.updateMatrixWorld(),n.makeTranslation(-No.x,-No.y,-No.z),Mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(Mo,e.coordinateSystem,e.reversedDepth)}else f.updateMatrices(u);r=f.getFrustum(),S(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&b(f,c),f.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(l,u,f)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Dt(i.x,i.y,{format:Se,type:s})),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Io(e,t){function n(){let t=!1,n=new $t,r=null,i=new $t(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):F(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=xt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):F(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new W(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(te)[1]),j=M>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),N=new $t().fromArray(ie),oe=new $t().fromArray(ae);function P(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=P(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=P(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=P(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=P(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),ce(e.CULL_FACE),me(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function F(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return m!==t&&(e.useProgram(t),m=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)h===!0&&(F(e.BLEND),h=!1);else if(h===!1&&(ce(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:hn(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:hn(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:hn(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:hn(`WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}}else a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(fe[n],fe[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function he(t,n){t.side===2?F(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):F(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function _e(t){t===0?F(e.CULL_FACE):(ce(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function ve(t){t!==O&&(j&&e.lineWidth(t),O=t)}function ye(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):F(e.POLYGON_OFFSET_FILL)}function be(t){t?ce(e.SCISSOR_TEST):F(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+ee-1),ne!==t&&(e.activeTexture(t),ne=t)}function Se(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+ee-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Ce(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){hn(`WebGLState:`,e)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(e){hn(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){hn(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){hn(`WebGLState:`,e)}}function L(){try{e.compressedTexSubImage2D(...arguments)}catch(e){hn(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){hn(`WebGLState:`,e)}}function R(){try{e.texStorage2D(...arguments)}catch(e){hn(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){hn(`WebGLState:`,e)}}function z(){try{e.texImage2D(...arguments)}catch(e){hn(`WebGLState:`,e)}}function B(){try{e.texImage3D(...arguments)}catch(e){hn(`WebGLState:`,e)}}function ke(t){N.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),N.copy(t))}function Ae(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function je(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Me(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},ne=null,re={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new W(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,N.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:F,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:I,texImage2D:z,texImage3D:B,updateUBOMapping:je,uniformBlockBinding:Me,texStorage2D:R,texStorage3D:Oe,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:L,compressedTexSubImage3D:De,scissor:ke,viewport:Ae,reset:Ne}}function Lo(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):rn(`canvas`)}function h(e,t,n){let r=1,i=Te(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Ee(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Ee(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];Ee(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?qt:dt.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function S(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Ee(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function C(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),E(t),t.isVideoTexture&&u.delete(t)}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),O(t)}function E(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&D(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function D(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function O(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let k=0;function A(){k=0}function ee(){let e=k;return e>=i.maxTextures&&Ee(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),k+=1,e}function j(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&we(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Ee(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Ee(`WebGLRenderer: Texture marked for update but image is incomplete`);else{F(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?F(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ne(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?F(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?le(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ie={[fe]:e.REPEAT,[Pt]:e.CLAMP_TO_EDGE,[ln]:e.MIRRORED_REPEAT},ae={[L]:e.NEAREST,[g]:e.NEAREST_MIPMAP_NEAREST,[b]:e.NEAREST_MIPMAP_LINEAR,[At]:e.LINEAR,[Ge]:e.LINEAR_MIPMAP_NEAREST,[gt]:e.LINEAR_MIPMAP_LINEAR},N={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function oe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&Ee(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ie[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ie[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ie[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ae[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ae[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,N[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function P(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,w));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=j(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&D(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ce(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=se(n.start,r.width,4),c=se(t.start,r.width,4);n.start<=i+1&&a===c&&se(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function F(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=P(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=dt.getPrimaries(dt.workingColorSpace),r=o.colorSpace===``?null:dt.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=I(o,p);let m=a.convert(o.format,o.colorSpace),g=a.convert(o.type),y=x(o.internalFormat,m,g,o.colorSpace,o.isVideoTexture);oe(c,o);let b,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=C(o,p);if(o.isDepthTexture)y=S(o.format===de,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,y,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,y,p.width,p.height,0,m,g,null));else if(o.isDataTexture){if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,y,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)b=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,b.width,b.height,m,g,b.data):n.texImage2D(e.TEXTURE_2D,t,y,b.width,b.height,0,m,g,b.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,y,p.width,p.height),D&&ce(o,p,m,g)):n.texImage2D(e.TEXTURE_2D,0,y,p.width,p.height,0,m,g,p.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,y,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(b=w[t],o.format!==1023){if(m!==null){if(T){if(D){if(o.layerUpdates.size>0){let r=Je(b.width,b.height,o.format,o.type);for(let i of o.layerUpdates){let a=b.data.subarray(i*r/b.data.BYTES_PER_ELEMENT,(i+1)*r/b.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,b.width,b.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,b.width,b.height,p.depth,m,b.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,y,b.width,b.height,p.depth,0,b.data,0,0)}else Ee(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,b.width,b.height,p.depth,m,g,b.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,y,b.width,b.height,p.depth,0,m,g,b.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,y,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)b=w[t],o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,b.width,b.height,m,g,b.data):n.texImage2D(e.TEXTURE_2D,t,y,b.width,b.height,0,m,g,b.data):m===null?Ee(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,b.width,b.height,m,b.data):n.compressedTexImage2D(e.TEXTURE_2D,t,y,b.width,b.height,0,b.data)}}else if(o.isDataArrayTexture){if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,y,p.width,p.height,p.depth),D){if(o.layerUpdates.size>0){let t=Je(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,g,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,g,p.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,y,p.width,p.height,p.depth,0,m,g,p.data)}else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,y,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,g,p.data)):n.texImage3D(e.TEXTURE_3D,0,y,p.width,p.height,p.depth,0,m,g,p.data);else if(o.isFramebufferTexture){if(E){if(T)n.texStorage2D(e.TEXTURE_2D,O,y,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,y,t,r,0,m,g,null),t>>=1,r>>=1}}}else if(w.length>0){if(T&&E){let t=Te(w[0]);n.texStorage2D(e.TEXTURE_2D,O,y,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)b=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,g,b):n.texImage2D(e.TEXTURE_2D,t,y,m,g,b);o.generateMipmaps=!1}else if(T){if(E){let t=Te(p);n.texStorage2D(e.TEXTURE_2D,O,y,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,g,p)}else n.texImage2D(e.TEXTURE_2D,0,y,m,g,p);_(o)&&v(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,o,s){if(o.image.length!==6)return;let c=P(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=dt.getPrimaries(dt.workingColorSpace),r=o.colorSpace===``?null:dt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=I(o,m[e]);let g=m[0],y=a.convert(o.format,o.colorSpace),b=a.convert(o.type),S=x(o.internalFormat,y,b,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=C(o,g);oe(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,g.width,g.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,y,b,i.data):y===null?Ee(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Te(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,b,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,m[t].width,m[t].height,0,y,b,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,i.width,i.height,0,y,b,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,b,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,y,b,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,b,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,y,b,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ue(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=x(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ce(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Se(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=S(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ce(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=x(o.internalFormat,c,l,o.colorSpace);Ce(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function me(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,w)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),oe(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else M(i.depthTexture,0);let u=l.__webglTexture,d=Se(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ce(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ce(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`Unknown depthTexture format`)}function he(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)me(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?me(i.__webglFramebuffer[0],t,0):me(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),pe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),pe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,i){let a=r.get(t);n!==void 0&&ue(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&he(t)}function _e(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,T);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ce(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=x(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=Se(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),pe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),oe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ue(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ue(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),oe(c,a),ue(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),oe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ue(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ue(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&he(t)}function ve(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ye=[],be=[];function xe(t){if(t.samples>0){if(Ce(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ye.length=0,be.length=0,ye.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(ye.push(l),be.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Se(e){return Math.min(i.maxSamples,e.samples)}function Ce(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function we(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function I(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(dt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Ee(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):hn(`WebGLTextures: Unsupported texture color space:`,n)),t}function Te(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=A,this.setTexture2D=M,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=ge,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ro(e,t){function n(n,r=``){let i,a=dt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var zo=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bo=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new F(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new N({vertexShader:zo,fragmentShader:Bo,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ho=class extends P{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,h=typeof XRWebGLBinding<`u`,g=new Vo,_={},v=t.getContextAttributes(),y=null,b=null,x=[],S=[],C=new Qe,w=null,T=new yt;T.viewport=new $t;let D=new yt;D.viewport=new $t;let O=[T,D],k=new Ue,A=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new ft,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new ft,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new ft,x[e]=t),t.getHandSpace()};function j(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}A=null,ee=null,g.reset();for(let e in _)delete _[e];e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Ee(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Ee(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,te),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?de:m,a=v.stencil?kt:ht);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Dt(d.textureWidth,d.textureHeight,{format:E,type:V,depthTexture:new bt(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Dt(f.framebufferWidth,f.framebufferHeight,{format:E,type:V,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ne=new U,re=new U;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),k.near=D.near=T.near=t,k.far=D.far=T.far=n,(A!==k.near||ee!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,ee=k.far),k.layers.mask=e.layers.mask|6,T.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;ae(k,i);for(let e=0;e<a.length;e++)ae(a[e],i);a.length===2?ie(k,T,D):k.projectionMatrix.copy(T.projectionMatrix),N(e,k,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ke*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(e){return _[e]};let oe=null;function P(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=O[n];o===void 0&&(o=new yt,o.layers.enable(n),o.viewport=new $t,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new F,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let se=new Fr;se.setAnimationLoop(P),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},Uo=new _t,Wo=new He;function Go(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,fn(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Uo.copy(o),Uo.x*=-1,Uo.y*=-1,Uo.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Uo.y*=-1,Uo.z*=-1),e.envMapRotation.value.setFromMatrix4(Wo.makeRotationFromEuler(Uo)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ko(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return hn(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Ee(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):Ee(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var qo=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jo=null;function Yo(){return Jo===null&&(Jo=new on(qo,16,16,Se,s),Jo.name=`DFG_LUT`,Jo.minFilter=At,Jo.magFilter=At,Jo.wrapS=Pt,Jo.wrapT=Pt,Jo.generateMipmaps=!1,Jo.needsUpdate=!0),Jo}var Xo=class{constructor(e={}){let{canvas:t=Ve(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:m=V}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=n.getContextAttributes().alpha}else g=a;let _=m,v=new Set([ie,d,h]),b=new Set([V,ht,Kt,kt,We,Mt]),x=new Uint32Array(4),S=new Int32Array(4),C=null,w=null,T=[],E=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,k=!1;this._outputColorSpace=he;let A=0,ee=0,j=null,M=-1,te=null,ne=new $t,re=new $t,N=null,oe=new W(0),P=0,se=t.width,ce=t.height,F=1,le=null,ue=null,de=new $t(0,0,se,ce),fe=new $t(0,0,se,ce),pe=!1,me=new ae,ge=!1,_e=!1,ve=new He,ye=new U,be=new $t,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function we(){return j===null?F:1}let I=n;function Te(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r183`),t.addEventListener(`webglcontextlost`,Ze,!1),t.addEventListener(`webglcontextrestored`,Qe,!1),t.addEventListener(`webglcontextcreationerror`,$e,!1),I===null){let t=`webgl2`;if(I=Te(t,e),I===null)throw Te(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw hn(`WebGLRenderer: `+e.message),e}let L,De,R,Oe,z,B,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ue,Ge,Ke,qe,Je;function Ye(){L=new mi(I),L.init(),Ke=new Ro(I,L),De=new Wr(I,L,e,Ke),R=new Io(I,L),De.reversedDepthBuffer&&p&&R.buffers.depth.setReversed(!0),Oe=new _i(I),z=new go,B=new Lo(I,L,R,z,De,Ke,Oe),ke=new pi(O),Ae=new Ir(I),qe=new Hr(I,Ae),je=new hi(I,Ae,Oe,qe),Me=new yi(I,je,Ae,qe,Oe),Be=new vi(I,De,B),Le=new Gr(z),Ne=new ho(O,ke,L,De,qe,Le),Pe=new Go(O,z),Fe=new bo,Ie=new Do(L),ze=new Vr(O,ke,R,Me,g,c),Re=new Fo(O,Me,De),Je=new Ko(I,Oe,De,R),Ue=new Ur(I,L,Oe),Ge=new gi(I,L,Oe),Oe.programs=Ne.programs,O.capabilities=De,O.extensions=L,O.properties=z,O.renderLists=Fe,O.shadowMap=Re,O.state=R,O.info=Oe}Ye(),_!==1009&&(D=new xi(_,t.width,t.height,r,i));let Xe=new Ho(O,I);this.xr=Xe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=L.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=L.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(e){e!==void 0&&(F=e,this.setSize(se,ce,!1))},this.getSize=function(e){return e.set(se,ce)},this.setSize=function(e,n,r=!0){Xe.isPresenting?Ee(`WebGLRenderer: Can't change size while VR device is presenting.`):(se=e,ce=n,t.width=Math.floor(e*F),t.height=Math.floor(n*F),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(se*F,ce*F).floor()},this.setDrawingBufferSize=function(e,n,r){se=e,ce=n,F=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(_===1009)console.error(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){console.warn(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}D.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ne)},this.getViewport=function(e){return e.copy(de)},this.setViewport=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),R.viewport(ne.copy(de).multiplyScalar(F).round())},this.getScissor=function(e){return e.copy(fe)},this.setScissor=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),R.scissor(re.copy(fe).multiplyScalar(F).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(e){R.setScissorTest(pe=e)},this.setOpaqueSort=function(e){le=e},this.setTransparentSort=function(e){ue=e},this.getClearColor=function(e){return e.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=v.has(t)}if(e){let e=j.texture.type,t=b.has(e),n=ze.getClearColor(),r=ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(x[0]=i,x[1]=a,x[2]=o,x[3]=r,I.clearBufferuiv(I.COLOR,0,x)):(S[0]=i,S[1]=a,S[2]=o,S[3]=r,I.clearBufferiv(I.COLOR,0,S))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ze,!1),t.removeEventListener(`webglcontextrestored`,Qe,!1),t.removeEventListener(`webglcontextcreationerror`,$e,!1),ze.dispose(),Fe.dispose(),Ie.dispose(),z.dispose(),ke.dispose(),Me.dispose(),qe.dispose(),Je.dispose(),Ne.dispose(),Xe.dispose(),Xe.removeEventListener(`sessionstart`,ot),Xe.removeEventListener(`sessionend`,st),ct.stop()};function Ze(e){e.preventDefault(),Ce(`WebGLRenderer: Context Lost.`),k=!0}function Qe(){Ce(`WebGLRenderer: Context Restored.`),k=!1;let e=Oe.autoReset,t=Re.enabled,n=Re.autoUpdate,r=Re.needsUpdate,i=Re.type;Ye(),Oe.autoReset=e,Re.enabled=t,Re.autoUpdate=n,Re.needsUpdate=r,Re.type=i}function $e(e){hn(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function et(e){let t=e.target;t.removeEventListener(`dispose`,et),tt(t)}function tt(e){nt(e),z.remove(e)}function nt(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){Ne.releaseProgram(e)}),e.isShaderMaterial&&Ne.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=xe);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=yt(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=je.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;qe.setup(i,r,s,n,c);let h,g=Ue;if(c!==null&&(h=Ae.get(c),g=Ge,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*we()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*we()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)y(`WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(L.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ae.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function rt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,mt(e,t,n),e.side=0,e.needsUpdate=!0,mt(e,t,n),e.side=2):mt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),w=Ie.get(n),w.init(t),E.push(w),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),w.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];rt(a,n,e),r.add(a)}else rt(t,n,e),r.add(t)}}),w=E.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){z.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}L.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let it=null;function at(e){it&&it(e)}function ot(){ct.stop()}function st(){ct.start()}let ct=new Fr;ct.setAnimationLoop(at),typeof self<`u`&&ct.setContext(self),this.setAnimationLoop=function(e){it=e,Xe.setAnimationLoop(e),e===null?ct.stop():ct.start()},Xe.addEventListener(`sessionstart`,ot),Xe.addEventListener(`sessionend`,st),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){hn(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(k===!0)return;let n=Xe.enabled===!0&&Xe.isPresenting===!0,r=D!==null&&(j===null||n)&&D.begin(O,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(t),t=Xe.getCamera()),e.isScene===!0&&e.onBeforeRender(O,e,t,j),w=Ie.get(e,E.length),w.init(t),E.push(w),ve.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),me.setFromProjectionMatrix(ve,It,t.reversedDepth),_e=this.localClippingEnabled,ge=Le.init(this.clippingPlanes,_e),C=Fe.get(e,T.length),C.init(),T.push(C),Xe.enabled===!0&&Xe.isPresenting===!0){let e=O.xr.getDepthSensingMesh();e!==null&&lt(e,t,-1/0,O.sortObjects)}lt(e,t,0,O.sortObjects),C.finish(),O.sortObjects===!0&&C.sort(le,ue),Se=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Se&&ze.addToRenderList(C,e),this.info.render.frame++,ge===!0&&Le.beginShadows();let i=w.state.shadowsArray;if(Re.render(i,e,t),ge===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&D.hasRenderPass())===!1){let n=C.opaque,r=C.transmissive;if(w.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];H(n,r,e,a)}Se&&ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ut(C,e,n,n.viewport)}}else r.length>0&&H(n,r,e,t),Se&&ze.render(e),ut(C,e,t)}j!==null&&ee===0&&(B.updateMultisampleRenderTarget(j),B.updateRenderTargetMipmap(j)),r&&D.end(O),e.isScene===!0&&e.onAfterRender(O,e,t),qe.resetDefaultState(),M=-1,te=null,E.pop(),E.length>0?(w=E[E.length-1],ge===!0&&Le.setGlobalState(O.clippingPlanes,w.state.camera)):w=null,T.pop(),C=T.length>0?T[T.length-1]:null};function lt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)w.pushLight(e),e.castShadow&&w.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||me.intersectsSprite(e)){r&&be.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ve);let t=Me.update(e),i=e.material;i.visible&&C.push(e,t,i,n,be.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||me.intersectsObject(e))){let t=Me.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),be.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),be.copy(e.boundingSphere.center)),be.applyMatrix4(e.matrixWorld).applyMatrix4(ve)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&C.push(e,t,s,n,be.z,o)}}else i.visible&&C.push(e,t,i,n,be.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)lt(i[e],t,n,r)}function ut(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;w.setupLightsView(n),ge===!0&&Le.setGlobalState(O.clippingPlanes,n),r&&R.viewport(ne.copy(r)),i.length>0&&ft(i,t,n),a.length>0&&ft(a,t,n),o.length>0&&ft(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function H(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[r.id]===void 0){let e=L.has(`EXT_color_buffer_half_float`)||L.has(`EXT_color_buffer_float`);w.state.transmissionRenderTarget[r.id]=new Dt(1,1,{generateMipmaps:!0,type:e?s:V,minFilter:gt,samples:Math.max(4,De.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let a=w.state.transmissionRenderTarget[r.id],o=r.viewport||ne;a.setSize(o.z*O.transmissionResolutionScale,o.w*O.transmissionResolutionScale);let c=O.getRenderTarget(),l=O.getActiveCubeFace(),u=O.getActiveMipmapLevel();O.setRenderTarget(a),O.getClearColor(oe),P=O.getClearAlpha(),P<1&&O.setClearColor(16777215,.5),O.clear(),Se&&ze.render(n);let d=O.toneMapping;O.toneMapping=0;let f=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),w.setupLightsView(r),ge===!0&&Le.setGlobalState(O.clippingPlanes,r),ft(e,n,r),B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a),L.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,pt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a))}O.setRenderTarget(c,l,u),O.setClearColor(oe,P),f!==void 0&&(r.viewport=f),O.toneMapping=d}function ft(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&pt(o,t,n,s,l,c)}}function pt(e,t,n,r,i,a){e.onBeforeRender(O,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(O,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=2):O.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(O,t,n,r,i,a)}function mt(e,t,n){t.isScene!==!0&&(t=xe);let r=z.get(e),i=w.state.lights,a=w.state.shadowsArray,o=i.state.version,s=Ne.getParameters(e,i.state,a,t,n),c=Ne.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ke.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,et),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return vt(e,s),d}else s.uniforms=Ne.getUniforms(e),e.onBeforeCompile(s,O),d=Ne.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Le.uniform),vt(e,s),r.needsLights=xt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=d,r.uniformsList=null,d}function _t(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Oa.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function vt(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function yt(e,t,n,r,i){t.isScene!==!0&&(t=xe),B.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?O.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Nt,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ke.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=O.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=w.state.lights;if(ge===!0&&(_e===!0||e!==te)){let t=e===te&&r.id===M;Le.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Le.numPlanes||v.numIntersection!==Le.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h?v.morphTargetsCount!==_&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=mt(r,t,i));let S=!1,C=!1,T=!1,E=x.getUniforms(),D=v.uniforms;if(R.useProgram(x.program)&&(S=!0,C=!0,T=!0),r.id!==M&&(M=r.id,C=!0),S||te!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(I,`projectionMatrix`,e.projectionMatrix),E.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(I,ye.setFromMatrixPosition(e.matrixWorld)),De.logarithmicDepthBuffer&&E.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,C=!0,T=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&E.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,B),y.state.spotShadowMap.length>0&&E.setValue(I,`spotShadowMap`,y.state.spotShadowMap,B),y.state.pointShadowMap.length>0&&E.setValue(I,`pointShadowMap`,y.state.pointShadowMap,B)),i.isSkinnedMesh){E.setOptional(I,i,`bindMatrix`),E.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(I,`boneTexture`,e.boneTexture,B))}i.isBatchedMesh&&(E.setOptional(I,i,`batchingTexture`),E.setValue(I,`batchingTexture`,i._matricesTexture,B),E.setOptional(I,i,`batchingIdTexture`),E.setValue(I,`batchingIdTexture`,i._indirectTexture,B),E.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(I,`batchingColorTexture`,i._colorsTexture,B));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Be.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Yo()),C&&(E.setValue(I,`toneMappingExposure`,O.toneMappingExposure),v.needsLights&&bt(D,T),a&&r.fog===!0&&Pe.refreshFogUniforms(D,a),Pe.refreshMaterialUniforms(D,r,F,ce,w.state.transmissionRenderTarget[e.id]),Oa.upload(I,_t(v),D,B)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Oa.upload(I,_t(v),D,B),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(I,`center`,i.center),E.setValue(I,`modelViewMatrix`,i.modelViewMatrix),E.setValue(I,`normalMatrix`,i.normalMatrix),E.setValue(I,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Je.update(n,x),Je.bind(n,x)}}return x}function bt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function xt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let St=I.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){j=e,A=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),ne.copy(e.viewport),re.copy(e.scissor),N=e.scissorTest,R.viewport(ne),R.scissor(re),R.setScissorTest(N),M=-1;return}if(o.__webglFramebuffer===void 0)B.setupRenderTarget(e);else if(o.__hasExternalTextures)B.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);B.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&B.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ne.copy(e.viewport),re.copy(e.scissor),N=e.scissorTest}else ne.copy(de).multiplyScalar(F).floor(),re.copy(fe).multiplyScalar(F).floor(),N=pe;if(n!==0&&(r=St),R.bindFramebuffer(I.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(ne),R.scissor(re),R.setScissorTest(N),i){let r=z.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}M=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){hn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){R.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s),!De.textureFormatReadable(c)){hn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!De.textureTypeReadable(l)){hn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,Ke.convert(c),Ke.convert(l),a)}finally{let e=j===null?null:z.get(j).__webglFramebuffer;R.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s),!De.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!De.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,d),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,Ke.convert(l),Ke.convert(u),0);let f=j===null?null:z.get(j).__webglFramebuffer;R.bindFramebuffer(I.FRAMEBUFFER,f);let p=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await cn(I,p,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,d),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.deleteBuffer(d),I.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;B.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()};let Ct=I.createFramebuffer(),wt=I.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ke.convert(t.format),_=Ke.convert(t.type),v;t.isData3DTexture?(B.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(B.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(B.setTexture2D(t,0),v=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(I.UNPACK_ROW_LENGTH),b=I.getParameter(I.UNPACK_IMAGE_HEIGHT),x=I.getParameter(I.UNPACK_SKIP_PIXELS),S=I.getParameter(I.UNPACK_SKIP_ROWS),C=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,l),I.pixelStorei(I.UNPACK_SKIP_ROWS,u),I.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);R.bindFramebuffer(I.READ_FRAMEBUFFER,null),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(I.READ_FRAMEBUFFER,Ct),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,wt);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);R.bindFramebuffer(I.READ_FRAMEBUFFER,null),R.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(I.UNPACK_ROW_LENGTH,y),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S),I.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&B.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?B.setTextureCube(e,0):e.isData3DTexture?B.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?B.setTexture2DArray(e,0):B.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){A=0,ee=0,j=null,R.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return It}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}},Zo=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,Qo=Zo&&self.XRSession.prototype.requestHitTestSource!=null,$o=self.ResizeObserver!=null,es=self.IntersectionObserver!=null,ts=Qo;(()=>{let e=navigator.userAgent||navigator.vendor||self.opera,t=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t})(),/\bCrOS\b/.test(navigator.userAgent);var ns=/android/i.test(navigator.userAgent),rs=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;/Safari\//.test(navigator.userAgent);var is=/firefox/i.test(navigator.userAgent),as=/OculusBrowser/.test(navigator.userAgent);rs&&/CriOS\//.test(navigator.userAgent);var os=rs&&/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent),ss=rs&&/GSA\//.test(navigator.userAgent),cs=ns&&!is&&!as;window.webkit&&window.webkit.messageHandlers;var ls=(()=>{if(rs){if(os)return!0;let e=document.createElement(`a`);return!!(e.relList&&e.relList.supports&&e.relList.supports(`ar`))}return!1})(),us=e=>e&&e!==`null`?fs(e):null,ds=()=>{if(ts)return;let e=[];throw Zo||e.push(`WebXR Device API`),Qo||e.push(`WebXR Hit Test API`),Error(`The following APIs are required for AR, but are missing in this browser: ${e.join(`, `)}`)},fs=e=>new URL(e,window.location.toString()).toString(),ps=(e,t)=>{let n=null,r=(...r)=>{n??=(e(...r),self.setTimeout(()=>n=null,t))};return r.flush=()=>{n!=null&&(self.clearTimeout(n),n=null)},r},ms=(e,t)=>{let n=null;return(...r)=>{n!=null&&self.clearTimeout(n),n=self.setTimeout(()=>{n=null,e(...r)},t)}},hs=(e,t,n)=>Math.max(t,Math.min(n,e)),gs=(()=>{let e=RegExp(`[?&]model-viewer-debug-mode(&|$)`);return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(e)})(),_s=(e=0)=>new Promise(t=>setTimeout(t,e)),vs=(e,t,n=null)=>new Promise(r=>{function i(a){(!n||n(a))&&(r(a),e.removeEventListener(t,i))}e.addEventListener(t,i)}),ys=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bs=.5,xs=0,Ss=1,Cs=1,ws=Symbol(`currentEnvironmentMap`),Ts=Symbol(`currentBackground`),Es=Symbol(`updateEnvironment`),Ds=Symbol(`cancelEnvironmentUpdate`),Os=e=>{var t,n,r;class i extends e{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=xs,this.shadowSoftness=Ss,this.exposure=Cs,this.toneMapping=`auto`,this.skyboxHeight=`0`,this[t]=null,this[n]=null,this[r]=null}updated(e){if(super.updated(e),e.has(`shadowIntensity`)&&(this[Q].setShadowIntensity(this.shadowIntensity*bs),this[__]()),e.has(`shadowSoftness`)&&(this[Q].setShadowSoftness(this.shadowSoftness),this[__]()),e.has(`exposure`)&&(this[Q].exposure=this.exposure,this[__]()),e.has(`toneMapping`)){let e=new Map([[`aces`,4],[`agx`,6],[`reinhard`,2],[`cineon`,3],[`linear`,1],[`none`,0]]);this[Q].toneMapping=e.get(this.toneMapping)??7,this[__]()}(e.has(`environmentImage`)||e.has(`skyboxImage`))&&this[w_]()&&this[Es](),e.has(`skyboxHeight`)&&(this[Q].setGroundedSkybox(),this[__]())}hasBakedShadow(){return this[Q].bakedShadows.size>0}async[(t=ws,n=Ts,r=Ds,Es)](){let{skyboxImage:e,environmentImage:t}=this;this[Ds]!=null&&(this[Ds](),this[Ds]=null);let{textureUtils:n}=this[$];if(n==null)return;let r=this[x_].beginActivity(`environment-update`);try{let{environmentMap:i,skybox:a}=await n.generateEnvironmentMapAndSkybox(us(e),t,e=>r(hs(e,0,1)),this.withCredentials);this[ws]!==i&&(this[ws]=i,this.dispatchEvent(new CustomEvent(`environment-change`))),this[Ts]=a==null?null:a.name===i.name?i:a,this[Q].setEnvironmentAndSkybox(this[ws],this[Ts])}catch(e){if(e instanceof Error)throw this[Q].setEnvironmentAndSkybox(null,null),e}finally{r(1)}}}return ys([G({type:String,attribute:`environment-image`})],i.prototype,`environmentImage`,void 0),ys([G({type:String,attribute:`skybox-image`})],i.prototype,`skyboxImage`,void 0),ys([G({type:Number,attribute:`shadow-intensity`})],i.prototype,`shadowIntensity`,void 0),ys([G({type:Number,attribute:`shadow-softness`})],i.prototype,`shadowSoftness`,void 0),ys([G({type:Number})],i.prototype,`exposure`,void 0),ys([G({type:String,attribute:`tone-mapping`})],i.prototype,`toneMapping`,void 0),ys([G({type:String,attribute:`skybox-height`})],i.prototype,`skyboxHeight`,void 0),i},ks=ur`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`,As=ur`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`,js=ur`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
  outline-offset: -1px;
  outline-width: 1px;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide:not(:focus-within) ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button > slot,
.slot.exit-webxr-ar-button ::slotted(*) {
  pointer-events: auto;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          role="button"
          href="javascript:void(0);"
          aria-label="View in your space">
        ${ur`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${As}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${ks}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,Ms=e=>{Dr(js,e)},Ns=(function(){var e=`b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuec:W:Odkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;lZkdbk;jYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbhodnawTmbaxa8Acd4fRbbhokaocFeGh5cbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q1jjbfcj1jjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bbarcwf9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfag9c8F1:NghcKtc8F91aicdfa8J9c8N1:Nfg8KRbbG86bbarcVfcba8KahcjeGcr4fghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fag9c8F1:NgicKtc8F91aha8J9c8N1:NfghRbbG86bbarc96fcbahaicjeGcr4fgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbb83bbarcwfaicwf8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbcbaocl49Rh8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E93aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:XseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk::ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxabaiarcefciGfcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGfgkcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkabaiarcufciGfcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkabakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K1jjbgeabcifc98GfgbBd:K1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk81dbcjwk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:Kwkl8WNbb`,t=`b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuec:q:6dkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:Ctklbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:183lYud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxavaialfgmar9Rgoad;8qbbcj;abad9Uc;WFbGcjdadca0EhPdndndnadTmbaoadfhscbhzinaeaz9nmdamax9RaD6miabazad2fhHaxaDfhOaPaeaz9RazaPfae6EgAcsfgocl4cifcd4hCavcj;cbfaoc9WGgXcetfhQavcj;cbfaXci2fhLavcj;cbfaXfhKcbhYaoc;ab6h8AincbhodnawTmbaxaYcd4fRbbhokaocFeGhEcbh3avcj;cbfh5indndndndnaEa3cet4ciGgoc9:fPdebdkamaO9RaX6mwavcj;cbfa3aX2faOaX;8qbbaOaAfhOxdkavcj;cbfa3aX2fcbaX;8kbxekamaO9RaC6moaoclVcbawEhraOaCfhocbhidna8Ambamao9Rc;Gb6mbcbhlina5alfhidndndndndndnaOalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiczfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaicafaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaoclffaqc:q:yjjbfRbbfhoxikaic8Wfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaocwffaqc:q:yjjbfRbbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitc:q1jjbfpbibaic:q:yjjbfRbbgipsaoRbegqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqc:q:yjjbfRbbfhokalc;abfhialcjefaX0meaihlamao9Rc;Fb0mbkkdnaiaX9pmbaici4hlinamao9RcK6mwa5aifhqdndndndndndnaOaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaoclffahc:q:yjjbfRbbfhoxikaqaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaocwffahc:q:yjjbfRbbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpkbbaaaocdffahc:q:yjjbfRbbfhokalcdfhlaiczfgiaX6mbkkaohOaoTmoka5aXfh5a3cefg3cl9hmbkdndndndnawTmbasaYcd4fRbbglciGPlbedwbkaXTmdavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep9Ta8Epxeeeeeeeeeeeeeeeeg8Fp9op9Hp9rg8Eagp9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Ug8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9AbbbaladfhlaoczfgoaX6mbxikkaXTmeavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep:nea8Epxebebebebebebebebg8Fp9op:bep9rg8Eagp:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeg8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9AbbbaladfhlaoczfgoaX6mbxdkkaXTmbcbhocbalcl4gl9Rc8FGhiavcjdfaYfhravaYfpbdbh8Finaravcj;cbfaofpblbggaKaofpblbg8JpmbzeHdOiAlCvXoQrLg8KaQaofpblbg8LaLaofpblbg8MpmbzeHdOiAlCvXoQrLg8NpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ea8Fp9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Fa8Ka8NpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwKDYq8AkEx3m5P8Es8Fgga8La8MpmwKDYq8AkEx3m5P8Es8Fg8JpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9AbbbaradfhraoczfgoaX6mbkkaYclfgYad6mbkaHavcjdfaAad2;8qbbavavcjdfaAcufad2fad;8qbbaAazfhzc9:hoaOhxaOmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdaPaeao9RaoaPfae6Eaofgoae6mbkaial9Rhxkcbc99amax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbk:TseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:2Pliur97eue978Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskaipxFubbFubbFubbFubbgxpklbdnalTmbcbhvabhdinadczfgmampbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblbaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgopklbaiaopklbaiabalcitfgdaeciGglcitgv;8qbbaiaxpkladnalTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblaaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkadaiav;8qbbkk:Iwllue97euo978Jjjjjbca9Rhidnaec98GglTmbcbhvabhoinaocKfpx:ji:1S:ji:1S:ji:1S:ji:1SaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qgxp;6ep;Negmaxaxp:1ep;7egxaxp;KearaDpmbediwDqkzHOAKY8AEgxczp:Reczp:Sep;6egrarp;Meaxczp:Sep;6egDaDp;Meaqczp:Reczp:Sep;6egqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gxp;KepxFFbbFFbbFFbbFFbbgPp9oamaDp;Meaxp;Keczp:Rep9qgDamarp;Meaxp;KeaPp9oamaqp;Meaxp;Keczp:Rep9qgxpmwDKYqk8AExm35Ps8E8Fgrp5eakclp:RegmpEi:T:j83ibawarp5bampEd:T:j83ibaocwfaDaxpmbezHdiOAlvCXorQLgxp5eampEe:T:j83ibaoaxp5bampEb:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiczfpxbbbbbbbbbbbbbbbbgmpklbaiampklbaiabalcitfgoaeciGgvcitgw;8qbbdnavTmbaipx:ji:1S:ji:1S:ji:1S:ji:1SaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qgxp;6ep;Negmaxaxp:1ep;7egxaxp;KearaDpmbediwDqkzHOAKY8AEgxczp:Reczp:Sep;6egrarp;Meaxczp:Sep;6egDaDp;Meaqczp:Reczp:Sep;6egqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gxp;KepxFFbbFFbbFFbbFFbbgPp9oamaDp;Meaxp;Keczp:Rep9qgDamarp;Meaxp;KeaPp9oamaqp;Meaxp;Keczp:Rep9qgxpmwDKYqk8AExm35Ps8E8Fgrp5eakclp:RegmpEi:T:j83iKaiarp5bampEd:T:j83izaiaDaxpmbezHdiOAlvCXorQLgxp5eampEe:T:j83iwaiaxp5bampEb:T:j83ibkaoaiaw;8qbbkk;uddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaic8WfpxbbbbbbbbbbbbbbbbgopklbaicafaopklbaiczfaopklbaiaopklbaiabavcdtfgdalciGgecdtgv;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkadaiav;8qbbkk:CPvdue97euw97eu8Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadpbbbhradpxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpkbbadczfhdaoclfgoal6mbkkalaeSmeaiavpklaaicafabalcdtfgdaeciGglcdtgo;8qbbaiavpklbdnalTmbaipblahraipxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpklakadaicafao;8qbbskaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadczfgspxbFu9hbFu9hbFu9hbFu9hadpbbbgDaspbbbgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblbp9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpkbbadaxarpmbezHdiOAlvCXorQLpkbbadcafhdaoclfgoal6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgrpklbaiarpklbaiabalcitfgdaeciGglcitgo;8qbbaiavpkladnalTmbaipxbFu9hbFu9hbFu9hbFu9haipblbgDaipblzgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblap9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpklzaiaxarpmbezHdiOAlvCXorQLpklbkadaiao;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb`,n=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),r=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!=`object`)return{supported:!1};var i=WebAssembly.validate(n)?s(t):s(e),a,o=WebAssembly.instantiate(i,{}).then(function(e){a=e.instance,a.exports.__wasm_call_ctors()});function s(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;++n){var i=e.charCodeAt(n);t[n]=i>96?i-97:i>64?i-39:i+4}for(var a=0,n=0;n<e.length;++n)t[a++]=t[n]<60?r[t[n]]:(t[n]-60)*64+t[++n];return t.buffer.slice(0,a)}function c(e,t,n,r,i,a,o){var s=e.exports.sbrk,c=r+3&-4,l=s(c*i),u=s(a.length),d=new Uint8Array(e.exports.memory.buffer);d.set(a,u);var f=t(l,r,i,u,a.length);if(f==0&&o&&o(l,c,i),n.set(d.subarray(l,l+r*i)),s(l-s(0)),f!=0)throw Error(`Malformed buffer data: `+f)}var l={NONE:``,OCTAHEDRAL:`meshopt_decodeFilterOct`,QUATERNION:`meshopt_decodeFilterQuat`,EXPONENTIAL:`meshopt_decodeFilterExp`,COLOR:`meshopt_decodeFilterColor`},u={ATTRIBUTES:`meshopt_decodeVertexBuffer`,TRIANGLES:`meshopt_decodeIndexBuffer`,INDICES:`meshopt_decodeIndexSequence`},d=[],f=0;function p(e){var t={object:new Worker(e),pending:0,requests:{}};return t.object.onmessage=function(e){var n=e.data;t.pending-=n.count,t.requests[n.id][n.action](n.value),delete t.requests[n.id]},t}function m(e){for(var t=`self.ready = WebAssembly.instantiate(new Uint8Array([`+new Uint8Array(i)+`]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = `+g.name+`;`+c.toString()+g.toString(),n=new Blob([t],{type:`text/javascript`}),r=URL.createObjectURL(n),a=d.length;a<e;++a)d[a]=p(r);for(var a=e;a<d.length;++a)d[a].object.postMessage({});d.length=e,URL.revokeObjectURL(r)}function h(e,t,n,r,i){for(var a=d[0],o=1;o<d.length;++o)d[o].pending<a.pending&&(a=d[o]);return new Promise(function(o,s){var c=new Uint8Array(n),l=++f;a.pending+=e,a.requests[l]={resolve:o,reject:s},a.object.postMessage({id:l,count:e,size:t,source:c,mode:r,filter:i},[c.buffer])})}function g(e){var t=e.data;if(!t.id)return self.close();self.ready.then(function(e){try{var n=new Uint8Array(t.count*t.size);c(e,e.exports[t.mode],n,t.count,t.size,t.source,e.exports[t.filter]),self.postMessage({id:t.id,count:t.count,action:`resolve`,value:n},[n.buffer])}catch(e){self.postMessage({id:t.id,count:t.count,action:`reject`,value:e})}})}return{ready:o,supported:!0,useWorkers:function(e){m(e)},decodeVertexBuffer:function(e,t,n,r,i){c(a,a.exports.meshopt_decodeVertexBuffer,e,t,n,r,a.exports[l[i]])},decodeIndexBuffer:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexBuffer,e,t,n,r)},decodeIndexSequence:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexSequence,e,t,n,r)},decodeGltfBuffer:function(e,t,n,r,i,o){c(a,a.exports[u[i]],e,t,n,r,a.exports[l[o]])},decodeGltfBufferAsync:function(e,t,n,r,i){return d.length>0?h(e,t,n,u[r],l[i]):o.then(function(){var o=new Uint8Array(e*t);return c(a,a.exports[u[r]],o,e,t,n,a.exports[l[i]]),o})}}})(),Ps=new WeakMap,Fs=class extends $e{constructor(e){super(e),this.decoderPath=``,this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL=``,this.defaultAttributeIDs={position:`POSITION`,normal:`NORMAL`,color:`COLOR`,uv:`TEX_COORD`},this.defaultAttributeTypes={position:`Float32Array`,normal:`Float32Array`,color:`Float32Array`,uv:`Float32Array`}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,r){let i=new me(this.manager);i.setPath(this.path),i.setResponseType(`arraybuffer`),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,e=>{this.parse(e,t,r)},n,r)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,he,n).catch(n)}decodeDracoFile(e,t,n,r,i=Nt,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:i};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Ps.has(e)){let t=Ps.get(e);if(t.key===n)return t.promise;if(e.byteLength===0)throw Error(`THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.`)}let r,i=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(i,a).then(n=>(r=n,new Promise((n,a)=>{r._callbacks[i]={resolve:n,reject:a},r.postMessage({type:`decode`,id:i,taskConfig:t,buffer:e},[e])}))).then(e=>this._createGeometry(e.geometry));return o.catch(()=>!0).then(()=>{r&&i&&this._releaseTask(r,i)}),Ps.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new Zt;e.index&&t.setIndex(new Ct(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:r,array:i,itemSize:a,stride:o,vertexColorSpace:s}=e.attributes[n],c;if(a===o)c=new Ct(i,a);else{let e=new w(i,o);c=new ne(e,a,0)}r===`color`&&(this._assignVertexColorSpace(c,s),c.normalized=!(i instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==`srgb`)return;let n=new W;for(let t=0,r=e.count;t<r;t++)n.fromBufferAttribute(e,t),dt.colorSpaceToWorking(n,he),e.setXYZ(t,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new me(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((t,r)=>{n.load(e,t,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!=`object`||this.decoderConfig.type===`js`,t=[];return e?t.push(this._loadLibrary(`draco_decoder.js`,`text`)):(t.push(this._loadLibrary(`draco_wasm_wrapper.js`,`text`)),t.push(this._loadLibrary(`draco_decoder.wasm`,`arraybuffer`))),this.decoderPending=Promise.all(t).then(t=>{let n=t[0];e||(this.decoderConfig.wasmBinary=t[1]);let r=Is.toString(),i=[`/* draco decoder */`,n,``,`/* worker */`,r.substring(r.indexOf(`{`)+1,r.lastIndexOf(`}`))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([i]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let e=new Worker(this.workerSourceURL);e._callbacks={},e._taskCosts={},e._taskLoad=0,e.postMessage({type:`init`,decoderConfig:this.decoderConfig}),e.onmessage=function(t){let n=t.data;switch(n.type){case`decode`:e._callbacks[n.id].resolve(n);break;case`error`:e._callbacks[n.id].reject(n);break;default:console.error(`THREE.DRACOLoader: Unexpected message, "`+n.type+`"`)}},this.workerPool.push(e)}else this.workerPool.sort(function(e,t){return e._taskLoad>t._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log(`Task load: `,this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==``&&URL.revokeObjectURL(this.workerSourceURL),this}};function Is(){let e,t;onmessage=function(r){let i=r.data;switch(i.type){case`init`:e=i.decoderConfig,t=new Promise(function(t){e.onModuleLoaded=function(e){t({draco:e})},DracoDecoderModule(e)});break;case`decode`:let r=i.buffer,a=i.taskConfig;t.then(e=>{let t=e.draco,o=new t.Decoder;try{let e=n(t,o,new Int8Array(r),a),s=e.attributes.map(e=>e.array.buffer);e.index&&s.push(e.index.array.buffer),self.postMessage({type:`decode`,id:i.id,geometry:e},s)}catch(e){console.error(e),self.postMessage({type:`error`,id:i.id,error:e.message})}finally{t.destroy(o)}})}};function n(e,t,n,a){let o=a.attributeIDs,s=a.attributeTypes,c,l,u=t.GetEncodedGeometryType(n);if(u===e.TRIANGULAR_MESH)c=new e.Mesh,l=t.DecodeArrayToMesh(n,n.byteLength,c);else if(u===e.POINT_CLOUD)c=new e.PointCloud,l=t.DecodeArrayToPointCloud(n,n.byteLength,c);else throw Error(`THREE.DRACOLoader: Unexpected geometry type.`);if(!l.ok()||c.ptr===0)throw Error(`THREE.DRACOLoader: Decoding failed: `+l.error_msg());let d={index:null,attributes:[]};for(let n in o){let r=self[s[n]],l,u;if(a.useUniqueIDs)u=o[n],l=t.GetAttributeByUniqueId(c,u);else{if(u=t.GetAttributeId(c,e[o[n]]),u===-1)continue;l=t.GetAttribute(c,u)}let f=i(e,t,c,n,r,l);n===`color`&&(f.vertexColorSpace=a.vertexColorSpace),d.attributes.push(f)}return u===e.TRIANGULAR_MESH&&(d.index=r(e,t,c)),e.destroy(c),d}function r(e,t,n){let r=n.num_faces()*3,i=r*4,a=e._malloc(i);t.GetTrianglesUInt32Array(n,i,a);let o=new Uint32Array(e.HEAPF32.buffer,a,r).slice();return e._free(a),{array:o,itemSize:1}}function i(e,t,n,r,i,o){let s=n.num_points(),c=o.num_components(),l=a(e,i),u=c*i.BYTES_PER_ELEMENT,d=Math.ceil(u/4)*4,f=d/i.BYTES_PER_ELEMENT,p=s*u,m=s*d,h=e._malloc(p);t.GetAttributeDataArrayForAllPoints(n,o,l,p,h);let g=new i(e.HEAPF32.buffer,h,p/i.BYTES_PER_ELEMENT),_;if(u===d)_=g.slice();else{_=new i(m/i.BYTES_PER_ELEMENT);let e=0;for(let t=0,n=g.length;t<n;t++){for(let n=0;n<c;n++)_[e+n]=g[t*c+n];e+=f}}return e._free(h),{name:r,count:s,itemSize:c,array:_,stride:f}}function a(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}}function Ls(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function Rs(e){let t=new Map,n=new Map,r=e.clone();return zs(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function zs(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)zs(e.children[r],t.children[r],n)}var Bs=class extends $e{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Ks(e)}),this.register(function(e){return new qs(e)}),this.register(function(e){return new nc(e)}),this.register(function(e){return new rc(e)}),this.register(function(e){return new ic(e)}),this.register(function(e){return new Ys(e)}),this.register(function(e){return new Xs(e)}),this.register(function(e){return new Zs(e)}),this.register(function(e){return new Qs(e)}),this.register(function(e){return new Gs(e)}),this.register(function(e){return new $s(e)}),this.register(function(e){return new Js(e)}),this.register(function(e){return new tc(e)}),this.register(function(e){return new ec(e)}),this.register(function(e){return new Us(e)}),this.register(function(e){return new ac(e,J.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new ac(e,J.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new oc(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Tt.extractUrlBase(e);a=Tt.resolveURL(t,this.path)}else a=Tt.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new me(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===sc){try{a[J.KHR_BINARY_GLTF]=new uc(e)}catch(e){r&&r(e);return}i=JSON.parse(a[J.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new Ic(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case J.KHR_MATERIALS_UNLIT:a[t]=new Ws;break;case J.KHR_DRACO_MESH_COMPRESSION:a[t]=new dc(i,this.dracoLoader);break;case J.KHR_TEXTURE_TRANSFORM:a[t]=new fc;break;case J.KHR_MESH_QUANTIZATION:a[t]=new pc;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function Vs(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function Hs(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var J={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Us=class{constructor(e){this.parser=e,this.name=J.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let a=t.json,o=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],s,c=new W(16777215);o.color!==void 0&&c.setRGB(o.color[0],o.color[1],o.color[2],Nt);let l=o.range===void 0?0:o.range;switch(o.type){case`directional`:s=new i(c),s.target.position.set(0,0,-1),s.add(s.target);break;case`point`:s=new ge(c),s.distance=l;break;case`spot`:s=new re(c),s.distance=l,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle===void 0?0:o.spot.innerConeAngle,o.spot.outerConeAngle=o.spot.outerConeAngle===void 0?Math.PI/4:o.spot.outerConeAngle,s.angle=o.spot.outerConeAngle,s.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+o.type)}return s.position.set(0,0,0),Oc(s,o),o.intensity!==void 0&&(s.intensity=o.intensity),s.name=t.createUniqueName(o.name||`light_`+e),r=Promise.resolve(s),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Ws=class{constructor(){this.name=J.KHR_MATERIALS_UNLIT}getMaterialType(){return gn}extendParams(e,t,n){let r=[];e.color=new W(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Nt),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,he))}return Promise.all(r)}},Gs=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Hs(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ks=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Hs(this.parser,e,this.name)===null?null:we}extendMaterialParams(e,t){let n=Hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qe(e,e)}return Promise.all(r)}},qs=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Hs(this.parser,e,this.name)===null?null:we}extendMaterialParams(e,t){let n=Hs(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},Js=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Hs(this.parser,e,this.name)===null?null:we}extendMaterialParams(e,t){let n=Hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Ys=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_SHEEN}getMaterialType(e){return Hs(this.parser,e,this.name)===null?null:we}extendMaterialParams(e,t){let n=Hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new W(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Nt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,he)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Xs=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Hs(this.parser,e,this.name)===null?null:we}extendMaterialParams(e,t){let n=Hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Zs=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_VOLUME}getMaterialType(e){return Hs(this.parser,e,this.name)===null?null:we}extendMaterialParams(e,t){let n=Hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new W().setRGB(i[0],i[1],i[2],Nt),Promise.all(r)}},Qs=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_IOR}getMaterialType(e){return Hs(this.parser,e,this.name)===null?null:we}extendMaterialParams(e,t){let n=Hs(this.parser,e,this.name);return n===null||(t.ior=n.ior===void 0?1.5:n.ior),Promise.resolve()}},$s=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Hs(this.parser,e,this.name)===null?null:we}extendMaterialParams(e,t){let n=Hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new W().setRGB(i[0],i[1],i[2],Nt),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,he)),Promise.all(r)}},ec=class{constructor(e){this.parser=e,this.name=J.EXT_MATERIALS_BUMP}getMaterialType(e){return Hs(this.parser,e,this.name)===null?null:we}extendMaterialParams(e,t){let n=Hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},tc=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Hs(this.parser,e,this.name)===null?null:we}extendMaterialParams(e,t){let n=Hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},nc=class{constructor(e){this.parser=e,this.name=J.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},rc=class{constructor(e){this.parser=e,this.name=J.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},ic=class{constructor(e){this.parser=e,this.name=J.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},ac=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},oc=class{constructor(e){this.name=J.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==_c.TRIANGLES&&e.mode!==_c.TRIANGLE_STRIP&&e.mode!==_c.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new He,n=new U,a=new be,s=new U(1,1,1),c=new De(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new D(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);St.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},sc=`glTF`,cc=12,lc={JSON:1313821514,BIN:5130562},uc=class{constructor(e){this.name=J.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,cc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sc)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-cc,i=new DataView(e,cc),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===lc.JSON){let r=new Uint8Array(e,cc+a,t);this.content=n.decode(r)}else if(r===lc.BIN){let n=cc+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},dc=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=J.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=Sc[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=Sc[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=vc[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Nt,n)})})}},fc=class{constructor(){this.name=J.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},pc=class{constructor(){this.name=J.KHR_MESH_QUANTIZATION}},mc=class extends Rt{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},hc=new be,gc=class extends mc{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return hc.fromArray(i).normalize().toArray(i),i}},_c={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vc={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yc={9728:L,9729:At,9984:g,9985:Ge,9986:b,9987:gt},bc={33071:Pt,33648:ln,10497:fe},xc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sc={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Cc={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},wc={CUBICSPLINE:void 0,LINEAR:Fe,STEP:M},Tc={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Ec(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new p({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function Dc(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function Oc(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function kc(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function Ac(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function jc(e){let t,n=e.extensions&&e.extensions[J.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+Mc(n.attributes):e.indices+`:`+Mc(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+Mc(e.targets[n]);return t}function Mc(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function Nc(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Pc(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var Fc=new He,Ic=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vs,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new te(this.options.manager):new z(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new me(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return Dc(i,a,r),Oc(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[J.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Tt.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=xc[r.type],t=vc[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new Ct(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=xc[r.type],o=vc[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new w(f,u/s),t.cache.add(n,c)),p=new ne(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new Ct(f,a,d);if(r.sparse!==void 0){let t=xc.SCALAR,n=vc[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new Ct(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=yc[n.magFilter]||1006,t.minFilter=yc[n.minFilter]||1008,t.wrapS=bc[n.wrapS]||1e3,t.wrapT=bc[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new zt(e);t.needsUpdate=!0,n(t)}),t.load(Tt.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),Oc(e,a),e.userData.mimeType=a.mimeType||Pc(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[J.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[J.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[J.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let n=e.geometry,r=e.material,i=n.attributes.tangent===void 0,a=n.attributes.color!==void 0,o=n.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+r.uuid,t=this.cache.get(e);t||(t=new j,Ot.prototype.copy.call(t,r),t.color.copy(r.color),t.map=r.map,t.sizeAttenuation=!1,this.cache.add(e,t)),r=t}else if(e.isLine){let e=`LineBasicMaterial:`+r.uuid,n=this.cache.get(e);n||(n=new t,Ot.prototype.copy.call(n,r),n.color.copy(r.color),n.map=r.map,this.cache.add(e,n)),r=n}if(i||a||o){let e=`ClonedMaterial:`+r.uuid+`:`;i&&(e+=`derivative-tangents:`),a&&(e+=`vertex-colors:`),o&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=r.clone(),a&&(t.vertexColors=!0),o&&(t.flatShading=!0),i&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(r))),r=t}e.material=r}getMaterialType(){return p}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[J.KHR_MATERIALS_UNLIT]){let e=r[J.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new W(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Nt),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,he)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||Tc.OPAQUE;if(l===Tc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Tc.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==gn&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new Qe(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==gn&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==gn){let e=i.emissiveFactor;o.emissive=new W().setRGB(e[0],e[1],e[2],Nt)}return i.emissiveTexture!==void 0&&a!==gn&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,he)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),Oc(n,i),t.associations.set(n,{materials:e}),i.extensions&&Dc(r,n,i),n})}createUniqueName(e){let t=oe.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[J.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Rc(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=jc(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[J.KHR_DRACO_MESH_COMPRESSION]?i(o):Rc(new Zt,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Ec(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===_c.TRIANGLES||u.mode===_c.TRIANGLE_STRIP||u.mode===_c.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new O(l,f):new an(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===_c.TRIANGLE_STRIP?d.geometry=Ls(d.geometry,1):u.mode===_c.TRIANGLE_FAN&&(d.geometry=Ls(d.geometry,2));else if(u.mode===_c.LINES)d=new Xt(l,f);else if(u.mode===_c.LINE_STRIP)d=new _e(l,f);else if(u.mode===_c.LINE_LOOP)d=new it(l,f);else if(u.mode===_c.POINTS)d=new C(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&Ac(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),Oc(d,i),u.extensions&&Dc(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&Dc(r,c[0],i),c[0];let l=new _n;i.extensions&&Dc(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new yt(pt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new o(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oc(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new He;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new B(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new Bt(i,void 0,l);return Oc(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,Fc)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new U().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new jt:t.length>1?new _n:t.length===1?t[0]:new St,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),Oc(o,i),i.extensions&&Dc(n,o,i),i.matrix!==void 0){let e=new He;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new _n;n.name&&(i.name=r.createUniqueName(n.name)),Oc(i,n),n.extensions&&Dc(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(Rs(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Ot||e instanceof zt)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];Cc[i.path]===Cc.weights?e.traverse(function(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}):s.push(o);let c;switch(Cc[i.path]){case Cc.weights:c=pe;break;case Cc.rotation:c=yn;break;case Cc.translation:case Cc.scale:c=nt;break;default:switch(n.itemSize){case 1:c=pe;break;default:c=nt}}let l=r.interpolation===void 0?Fe:wc[r.interpolation],u=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new c(s[e]+`.`+Cc[i.path],t.array,u,l);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=Nc(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof yn?gc:mc)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Lc(e,t,n){let r=t.attributes,i=new Wt;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new U(t[0],t[1],t[2]),new U(a[0],a[1],a[2])),e.normalized){let t=Nc(vc[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new U,t=new U;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=Nc(vc[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new R;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Rc(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=Sc[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return dt.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),Oc(e,t),Lc(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:kc(e,t.targets,n)})}var zc=class{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){let t=this.workerCreator();t.addEventListener(`message`,this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){let n=this.workersResolve[e];if(n&&n(t),this.queue.length){let{resolve:t,msg:n,transfer:r}=this.queue.shift();this.workersResolve[e]=t,this.workers[e].postMessage(n,r)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{let r=this._getIdleWorker();r===-1?this.queue.push({resolve:n,msg:e,transfer:t}):(this._initWorker(r),this.workerStatus|=1<<r,this.workersResolve[r]=n,this.workers[r].postMessage(e,t))})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}},Bc=1000054e3,Vc=1000054001,Hc=1000054004,Uc=1000054005,Wc=1000066e3,Gc=1000066004,Kc=class{constructor(e,t,n,r){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=r,this._offset=0}_nextUint8(){let e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){let e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){let e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){let e=this._dataView.getUint32(this._offset,this._littleEndian)+2**32*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){let e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){let t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){let n=this._offset,r=0;for(;this._dataView.getUint8(this._offset)!==t&&r<e;)r++,this._offset++;return r<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,r)}};new Uint8Array([0]);var qc=[171,75,84,88,32,50,48,187,13,10,26,10];function Jc(e){return new TextDecoder().decode(e)}function Yc(e){let t=new Uint8Array(e.buffer,e.byteOffset,qc.length);if(t[0]!==qc[0]||t[1]!==qc[1]||t[2]!==qc[2]||t[3]!==qc[3]||t[4]!==qc[4]||t[5]!==qc[5]||t[6]!==qc[6]||t[7]!==qc[7]||t[8]!==qc[8]||t[9]!==qc[9]||t[10]!==qc[10]||t[11]!==qc[11])throw Error(`Missing KTX 2.0 identifier.`);let n={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},r=17*Uint32Array.BYTES_PER_ELEMENT,i=new Kc(e,qc.length,r,!0);n.vkFormat=i._nextUint32(),n.typeSize=i._nextUint32(),n.pixelWidth=i._nextUint32(),n.pixelHeight=i._nextUint32(),n.pixelDepth=i._nextUint32(),n.layerCount=i._nextUint32(),n.faceCount=i._nextUint32(),n.levelCount=i._nextUint32(),n.supercompressionScheme=i._nextUint32();let a=i._nextUint32(),o=i._nextUint32(),s=i._nextUint32(),c=i._nextUint32(),l=i._nextUint64(),u=i._nextUint64(),d=3*Math.max(n.levelCount,1)*8,f=new Kc(e,qc.length+r,d,!0);for(let t=0,r=Math.max(n.levelCount,1);t<r;t++)n.levels.push({levelData:new Uint8Array(e.buffer,e.byteOffset+f._nextUint64(),f._nextUint64()),uncompressedByteLength:f._nextUint64()});let p=new Kc(e,a,o,!0);p._skip(4);let m=p._nextUint16(),h=p._nextUint16(),g=p._nextUint16(),_=p._nextUint16(),v={vendorId:m,descriptorType:h,versionNumber:g,colorModel:p._nextUint8(),colorPrimaries:p._nextUint8(),transferFunction:p._nextUint8(),flags:p._nextUint8(),texelBlockDimension:[p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8()],bytesPlane:[p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8()],samples:[]},y=(_/4-6)/4;for(let e=0;e<y;e++){let t={bitOffset:p._nextUint16(),bitLength:p._nextUint8(),channelType:p._nextUint8(),samplePosition:[p._nextUint8(),p._nextUint8(),p._nextUint8(),p._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&t.channelType?(t.sampleLower=p._nextInt32(),t.sampleUpper=p._nextInt32()):(t.sampleLower=p._nextUint32(),t.sampleUpper=p._nextUint32()),v.samples[e]=t}n.dataFormatDescriptor.length=0,n.dataFormatDescriptor.push(v);let b=new Kc(e,s,c,!0);for(;b._offset<c;){let e=b._nextUint32(),t=b._scan(e),r=Jc(t);if(n.keyValue[r]=b._nextUint8Array(e-t.byteLength-1),r.match(/^ktx/i)){let e=Jc(n.keyValue[r]);n.keyValue[r]=e.substring(0,e.lastIndexOf(`\0`))}b._skip(e%4?4-e%4:0)}if(u<=0)return n;let x=new Kc(e,l,u,!0),S=x._nextUint16(),C=x._nextUint16(),w=x._nextUint32(),T=x._nextUint32(),E=x._nextUint32(),D=x._nextUint32(),O=[];for(let e=0,t=Math.max(n.levelCount,1);e<t;e++)O.push({imageFlags:x._nextUint32(),rgbSliceByteOffset:x._nextUint32(),rgbSliceByteLength:x._nextUint32(),alphaSliceByteOffset:x._nextUint32(),alphaSliceByteLength:x._nextUint32()});let k=l+x._offset,A=k+w,ee=A+T,j=ee+E;return n.globalData={endpointCount:S,selectorCount:C,imageDescs:O,endpointsData:new Uint8Array(e.buffer,e.byteOffset+k,w),selectorsData:new Uint8Array(e.buffer,e.byteOffset+A,T),tablesData:new Uint8Array(e.buffer,e.byteOffset+ee,E),extendedData:new Uint8Array(e.buffer,e.byteOffset+j,D)},n}var Xc,Zc,Qc,$c={env:{emscripten_notify_memory_growth:function(e){Qc=new Uint8Array(Zc.exports.memory.buffer)}}},el=class{init(){return Xc||(Xc=typeof fetch<`u`?fetch(`data:application/wasm;base64,`+tl).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,$c)).then(this._init):WebAssembly.instantiate(Buffer.from(tl,`base64`),$c).then(this._init),Xc)}_init(e){Zc=e.instance,$c.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Zc)throw Error(`ZSTDDecoder: Await .init() before decoding.`);let n=e.byteLength,r=Zc.exports.malloc(n);Qc.set(e,r),t||=Number(Zc.exports.ZSTD_findDecompressedSize(r,n));let i=Zc.exports.malloc(t),a=Zc.exports.ZSTD_decompress(i,t,r,n),o=Qc.slice(i,i+a);return Zc.exports.free(r),Zc.exports.free(i),o}},tl=`AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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`,nl=`display-p3`,rl=`display-p3-linear`;({...dt.spaces[he]});var il=new WeakMap,al=0,ol,sl=class e extends $e{constructor(e){super(e),this.transcoderPath=``,this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new zc,this.workerSourceURL=``,this.workerConfig=null,typeof MSC_TRANSCODER<`u`&&console.warn(`THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.`)}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return console.warn(`KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.`),await e.init(),this.detectSupport(e)}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature(`texture-compression-astc`),astcHDRSupported:!1,etc1Supported:e.hasFeature(`texture-compression-etc1`),etc2Supported:e.hasFeature(`texture-compression-etc2`),dxtSupported:e.hasFeature(`texture-compression-s3tc`),bptcSupported:e.hasFeature(`texture-compression-bc`),pvrtcSupported:e.hasFeature(`texture-compression-pvrtc`)}:(this.workerConfig={astcSupported:e.extensions.has(`WEBGL_compressed_texture_astc`),astcHDRSupported:e.extensions.has(`WEBGL_compressed_texture_astc`)&&e.extensions.get(`WEBGL_compressed_texture_astc`).getSupportedProfiles().includes(`hdr`),etc1Supported:e.extensions.has(`WEBGL_compressed_texture_etc1`),etc2Supported:e.extensions.has(`WEBGL_compressed_texture_etc`),dxtSupported:e.extensions.has(`WEBGL_compressed_texture_s3tc`),bptcSupported:e.extensions.has(`EXT_texture_compression_bptc`),pvrtcSupported:e.extensions.has(`WEBGL_compressed_texture_pvrtc`)||e.extensions.has(`WEBKIT_WEBGL_compressed_texture_pvrtc`)},typeof navigator<`u`&&navigator.platform!==void 0&&navigator.userAgent!==void 0&&navigator.platform.indexOf(`Linux`)>=0&&navigator.userAgent.indexOf(`Firefox`)>=0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){let t=new me(this.manager);t.setPath(this.transcoderPath),t.setWithCredentials(this.withCredentials);let n=t.loadAsync(`basis_transcoder.js`),r=new me(this.manager);r.setPath(this.transcoderPath),r.setResponseType(`arraybuffer`),r.setWithCredentials(this.withCredentials);let i=r.loadAsync(`basis_transcoder.wasm`);this.transcoderPending=Promise.all([n,i]).then(([t,n])=>{let r=e.BasisWorker.toString(),i=[`/* constants */`,`let _EngineFormat = `+JSON.stringify(e.EngineFormat),`let _EngineType = `+JSON.stringify(e.EngineType),`let _TranscoderFormat = `+JSON.stringify(e.TranscoderFormat),`let _BasisFormat = `+JSON.stringify(e.BasisFormat),`/* basis_transcoder.js */`,t,`/* worker */`,r.substring(r.indexOf(`{`)+1,r.lastIndexOf(`}`))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([i])),this.transcoderBinary=n,this.workerPool.setWorkerCreator(()=>{let e=new Worker(this.workerSourceURL),t=this.transcoderBinary.slice(0);return e.postMessage({type:`init`,config:this.workerConfig,transcoderBinary:t},[t]),e})}),al>0&&console.warn(`THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances.`),al++}return this.transcoderPending}load(e,t,n,r){if(this.workerConfig===null)throw Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");let i=new me(this.manager);i.setPath(this.path),i.setCrossOrigin(this.crossOrigin),i.setWithCredentials(this.withCredentials),i.setRequestHeader(this.requestHeader),i.setResponseType(`arraybuffer`),i.load(e,e=>{this.parse(e,t,r)},n,r)}parse(e,t,n){if(this.workerConfig===null)throw Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(il.has(e))return il.get(e).promise.then(t).catch(n);this._createTexture(e).then(e=>t?t(e):null).catch(n)}_createTextureFrom(e,t){let{type:n,error:r,data:{faces:i,width:a,height:o,format:s,type:c,dfdFlags:l}}=e;if(n===`error`)return Promise.reject(r);let u;if(t.faceCount===6)u=new ze(i,s,c);else{let e=i[0].mipmaps;u=t.layerCount>1?new ct(e,a,o,t.layerCount,s,c):new tn(e,a,o,s,c)}return u.minFilter=i[0].mipmaps.length===1?At:gt,u.magFilter=At,u.generateMipmaps=!1,u.needsUpdate=!0,u.colorSpace=fl(t),u.premultiplyAlpha=!!(l&1),u}async _createTexture(e,t={}){let n=Yc(new Uint8Array(e)),r=n.vkFormat===1000066e3&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===0||r&&!this.workerConfig.astcHDRSupported))return dl(n);let i=t,a=this.init().then(()=>this.workerPool.postMessage({type:`transcode`,buffer:e,taskConfig:i},[e])).then(e=>this._createTextureFrom(e.data,n));return il.set(e,{promise:a}),a}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),al--}};sl.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2},sl.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25},sl.EngineFormat={RGBAFormat:E,RGBA_ASTC_4x4_Format:r,RGB_BPTC_UNSIGNED_Format:lt,RGBA_BPTC_Format:Gt,RGBA_ETC2_EAC_Format:Ze,RGBA_PVRTC_4BPPV1_Format:Qt,RGBA_S3TC_DXT5_Format:Ft,RGB_ETC1_Format:Be,RGB_ETC2_Format:nn,RGB_PVRTC_4BPPV1_Format:qe,RGBA_S3TC_DXT1_Format:tt},sl.EngineType={UnsignedByteType:V,HalfFloatType:s,FloatType:A},sl.BasisWorker=function(){let e,t,n,r=_EngineFormat,i=_EngineType,a=_TranscoderFormat,o=_BasisFormat;self.addEventListener(`message`,function(n){let r=n.data;switch(r.type){case`init`:e=r.config,s(r.transcoderBinary);break;case`transcode`:t.then(()=>{try{let{faces:e,buffers:t,width:n,height:i,hasAlpha:a,format:o,type:s,dfdFlags:l}=c(r.buffer);self.postMessage({type:`transcode`,id:r.id,data:{faces:e,width:n,height:i,hasAlpha:a,format:o,type:s,dfdFlags:l}},t)}catch(e){console.error(e),self.postMessage({type:`error`,id:r.id,error:e.message})}})}});function s(e){t=new Promise(t=>{n={wasmBinary:e,onRuntimeInitialized:t},BASIS(n)}).then(()=>{n.initializeBasis(),n.KTX2File===void 0&&console.warn(`THREE.KTX2Loader: Please update Basis Universal transcoder.`)})}function c(e){let t=new n.KTX2File(new Uint8Array(e));function r(){t.close(),t.delete()}if(!t.isValid())throw r(),Error(`THREE.KTX2Loader:	Invalid or unsupported .ktx2 file`);let a;if(t.isUASTC())a=o.UASTC;else if(t.isETC1S())a=o.ETC1S;else if(t.isHDR())a=o.UASTC_HDR;else throw Error(`THREE.KTX2Loader: Unknown Basis encoding`);let s=t.getWidth(),c=t.getHeight(),l=t.getLayers()||1,u=t.getLevels(),f=t.getFaces(),m=t.getHasAlpha(),h=t.getDFDFlags(),{transcoderFormat:g,engineFormat:_,engineType:v}=d(a,s,c,m);if(!s||!c||!u)throw r(),Error(`THREE.KTX2Loader:	Invalid texture`);if(!t.startTranscoding())throw r(),Error(`THREE.KTX2Loader: .startTranscoding failed`);let y=[],b=[];for(let e=0;e<f;e++){let n=[];for(let a=0;a<u;a++){let o=[],s,c;for(let n=0;n<l;n++){let l=t.getImageLevelInfo(a,n,e);e===0&&a===0&&n===0&&(l.origWidth%4!=0||l.origHeight%4!=0)&&console.warn(`THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions.`),u>1?(s=l.origWidth,c=l.origHeight):(s=l.width,c=l.height);let d=new Uint8Array(t.getImageTranscodedSizeInBytes(a,n,0,g)),f=t.transcodeImage(d,a,n,e,g,0,-1,-1);if(v===i.HalfFloatType&&(d=new Uint16Array(d.buffer,d.byteOffset,d.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!f)throw r(),Error(`THREE.KTX2Loader: .transcodeImage failed.`);o.push(d)}let d=p(o);n.push({data:d,width:s,height:c}),b.push(d.buffer)}y.push({mipmaps:n,width:s,height:c,format:_,type:v})}return r(),{faces:y,buffers:b,width:s,height:c,hasAlpha:m,dfdFlags:h,format:_,type:v}}let l=[{if:`astcSupported`,basisFormat:[o.UASTC],transcoderFormat:[a.ASTC_4x4,a.ASTC_4x4],engineFormat:[r.RGBA_ASTC_4x4_Format,r.RGBA_ASTC_4x4_Format],engineType:[i.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:`bptcSupported`,basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[a.BC7_M5,a.BC7_M5],engineFormat:[r.RGBA_BPTC_Format,r.RGBA_BPTC_Format],engineType:[i.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:`dxtSupported`,basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[a.BC1,a.BC3],engineFormat:[r.RGBA_S3TC_DXT1_Format,r.RGBA_S3TC_DXT5_Format],engineType:[i.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:`etc2Supported`,basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[a.ETC1,a.ETC2],engineFormat:[r.RGB_ETC2_Format,r.RGBA_ETC2_EAC_Format],engineType:[i.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:`etc1Supported`,basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[a.ETC1],engineFormat:[r.RGB_ETC1_Format],engineType:[i.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:`pvrtcSupported`,basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[a.PVRTC1_4_RGB,a.PVRTC1_4_RGBA],engineFormat:[r.RGB_PVRTC_4BPPV1_Format,r.RGBA_PVRTC_4BPPV1_Format],engineType:[i.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:`bptcSupported`,basisFormat:[o.UASTC_HDR],transcoderFormat:[a.BC6H],engineFormat:[r.RGB_BPTC_UNSIGNED_Format],engineType:[i.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[a.RGBA32,a.RGBA32],engineFormat:[r.RGBAFormat,r.RGBAFormat],engineType:[i.UnsignedByteType,i.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[o.UASTC_HDR],transcoderFormat:[a.RGBA_HALF],engineFormat:[r.RGBAFormat],engineType:[i.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],u={[o.ETC1S]:l.filter(e=>e.basisFormat.includes(o.ETC1S)).sort((e,t)=>e.priorityETC1S-t.priorityETC1S),[o.UASTC]:l.filter(e=>e.basisFormat.includes(o.UASTC)).sort((e,t)=>e.priorityUASTC-t.priorityUASTC),[o.UASTC_HDR]:l.filter(e=>e.basisFormat.includes(o.UASTC_HDR)).sort((e,t)=>e.priorityHDR-t.priorityHDR)};function d(t,n,r,i){let a=u[t];for(let o=0;o<a.length;o++){let s=a[o];if((!s.if||e[s.if])&&s.basisFormat.includes(t)&&!(i&&s.transcoderFormat.length<2)&&(!s.needsPowerOfTwo||f(n)&&f(r)))return{transcoderFormat:s.transcoderFormat[+!!i],engineFormat:s.engineFormat[+!!i],engineType:s.engineType[0]}}throw Error(`THREE.KTX2Loader: Failed to identify transcoding target.`)}function f(e){return e<=2||!(e&e-1)&&e!==0}function p(e){if(e.length===1)return e[0];let t=0;for(let n=0;n<e.length;n++){let r=e[n];t+=r.byteLength}let n=new Uint8Array(t),r=0;for(let t=0;t<e.length;t++){let i=e[t];n.set(i,r),r+=i.byteLength}return n}};var cl=new Set([E,Et,Se,v]),ll={109:E,103:Se,100:v,97:E,83:Se,76:v,43:E,37:E,22:Se,16:Se,15:v,9:v,123:Et,122:Et,152:Ze,148:nn,153:l,154:a,155:Me,156:le,[Wc]:r,158:r,157:r,[Gc]:Vt,166:Vt,165:Vt,134:tt,133:tt,132:dn,131:dn,138:Ft,137:Ft,140:se,139:Oe,142:vt,141:k,146:Gt,145:Gt,[Uc]:Qt,[Vc]:Qt,[Hc]:wt,[Bc]:wt},ul={109:A,103:A,100:A,97:s,83:s,76:s,43:V,37:V,22:V,16:V,15:V,9:V,123:Ht,122:Yt,152:V,148:V,153:V,154:V,155:V,156:V,[Wc]:s,158:V,157:V,[Gc]:s,166:V,165:V,134:V,133:V,132:V,131:V,138:V,137:V,140:V,139:V,142:V,141:V,146:V,145:V,[Uc]:V,[Vc]:V,[Hc]:V,[Bc]:V};async function dl(e){let{vkFormat:t}=e;if(ll[t]===void 0)throw Error(`THREE.KTX2Loader: Unsupported vkFormat: `+t);ul[t]===void 0&&console.warn(`THREE.KTX2Loader: Missing ".type" for vkFormat: `+t);let n;e.supercompressionScheme===2&&(ol||=new Promise(async e=>{let t=new el;await t.init(),e(t)}),n=await ol);let r=[];for(let i=0;i<e.levels.length;i++){let a=Math.max(1,e.pixelWidth>>i),o=Math.max(1,e.pixelHeight>>i),s=e.pixelDepth?Math.max(1,e.pixelDepth>>i):0,c=e.levels[i],l;if(e.supercompressionScheme===0)l=c.levelData;else if(e.supercompressionScheme===2)l=n.decode(c.levelData,c.uncompressedByteLength);else throw Error(`THREE.KTX2Loader: Unsupported supercompressionScheme.`);let u;u=ul[t]===1015?new Float32Array(l.buffer,l.byteOffset,l.byteLength/Float32Array.BYTES_PER_ELEMENT):ul[t]===1016?new Uint16Array(l.buffer,l.byteOffset,l.byteLength/Uint16Array.BYTES_PER_ELEMENT):ul[t]===35902||ul[t]===35899?new Uint32Array(l.buffer,l.byteOffset,l.byteLength/Uint32Array.BYTES_PER_ELEMENT):l,r.push({data:u,width:a,height:o,depth:s})}let i=e.levelCount===0||r.length>1,a;if(cl.has(ll[t]))a=e.pixelDepth===0?new on(r[0].data,e.pixelWidth,e.pixelHeight):new xe(r[0].data,e.pixelWidth,e.pixelHeight,e.pixelDepth),a.minFilter=i?g:L,a.magFilter=L,a.generateMipmaps=e.levelCount===0;else{if(e.pixelDepth>0)throw Error(`THREE.KTX2Loader: Unsupported pixelDepth.`);a=new tn(r,e.pixelWidth,e.pixelHeight),a.minFilter=i?gt:At,a.magFilter=At}return a.mipmaps=r,a.type=ul[t],a.format=ll[t],a.colorSpace=fl(e),a.needsUpdate=!0,Promise.resolve(a)}function fl(e){let t=e.dataFormatDescriptor[0];return t.colorPrimaries===1?t.transferFunction===2?he:Nt:t.colorPrimaries===10?t.transferFunction===2?nl:rl:(t.colorPrimaries===0||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`),``)}var pl,ml,hl=Symbol(`retainerCount`),gl=Symbol(`recentlyUsed`),_l=Symbol(`evict`),vl=Symbol(`evictionThreshold`),yl=Symbol(`cache`),bl=class{constructor(e,t=5){this[pl]=new Map,this[ml]=[],this[yl]=e,this[vl]=t}set evictionThreshold(e){this[vl]=e,this[_l]()}get evictionThreshold(){return this[vl]}get cache(){return this[yl]}retainerCount(e){return this[hl].get(e)||0}reset(){this[hl].clear(),this[gl]=[]}retain(e){this[hl].has(e)||this[hl].set(e,0),this[hl].set(e,this[hl].get(e)+1);let t=this[gl].indexOf(e);t!==-1&&this[gl].splice(t,1),this[gl].unshift(e),this[_l]()}release(e){this[hl].has(e)&&this[hl].set(e,Math.max(this[hl].get(e)-1,0)),this[_l]()}[(pl=hl,ml=gl,_l)](){if(!(this[gl].length<this[vl]))for(let e=this[gl].length-1;e>=this[vl];--e){let t=this[gl][e];this[hl].get(t)===0&&(this[yl].delete(t),this[gl].splice(e,1))}}},xl=e=>{let t=[],n=new Set;for(let r of e){let e=r,i=0;for(;n.has(e);)e=r+`.`+ ++i;n.add(e),t.push(e)}return t},Sl=e=>{let t=new Map;for(let n of e.mappings)for(let e of n.variants)t.set(e,{material:null,gltfMaterialIndex:n.material});return t},Cl=class{constructor(e){this.parser=e,this.name=`KHR_materials_variants`}afterRoot(e){let t=this.parser,n=t.json;if(n.extensions===void 0||n.extensions[this.name]===void 0)return null;let r=xl((n.extensions[this.name].variants||[]).map(e=>e.name));for(let r of e.scenes)r.traverse(e=>{let r=e;if(!r.material)return;let i=t.associations.get(r);if(i==null||i.meshes==null||i.primitives==null)return;let a=n.meshes[i.meshes].primitives[i.primitives].extensions;a&&a[this.name]&&(r.userData.variantMaterials=Sl(a[this.name]))});return e.userData.variants=r,Promise.resolve()}},wl,Tl;zt.DEFAULT_ANISOTROPY=4;var El=(e,t,n=()=>{})=>{let r=e=>{let t=e.loaded/e.total;n(Math.max(0,Math.min(1,isFinite(t)?t:1)))};return new Promise((n,i)=>{t.load(e,n,r,i)})},Dl=e=>new Promise((t,n)=>{let r=document.createElement(`script`);document.body.appendChild(r),r.onload=t,r.onerror=n,r.async=!0,r.src=e}),Ol=new Map,kl=new Map,Al,jl=new Fs,Ml,Nl=new sl,Pl,Fl,Il=Symbol(`loader`),Ll=Symbol(`evictionPolicy`),Rl=Symbol(`GLTFInstance`),zl=class extends P{static setDRACODecoderLocation(e){Al=e,jl.setDecoderPath(e)}static getDRACODecoderLocation(){return Al}static setKTX2TranscoderLocation(e){Ml=e,Nl.setTranscoderPath(e)}static getKTX2TranscoderLocation(){return Ml}static setMeshoptDecoderLocation(e){Pl!==e&&(Pl=e,Fl=Dl(e).then(()=>Ns.ready).then(()=>Ns))}static getMeshoptDecoderLocation(){return Pl}static initializeKTX2Loader(e){Nl.detectSupport(e)}static get cache(){return Ol}static clearCache(){Ol.forEach((e,t)=>{this.delete(t)}),this[Ll].reset()}static has(e){return Ol.has(e)}static async delete(e){if(!this.has(e))return;let t=Ol.get(e);kl.delete(e),Ol.delete(e),(await t).dispose()}static hasFinishedLoading(e){return!!kl.get(e)}constructor(e){super(),this[Tl]=new Bs().register(e=>new Cl(e)),this[Rl]=e,this[Il].setDRACOLoader(jl),this[Il].setKTX2Loader(Nl)}get[(wl=Ll,Tl=Il,Ll)](){return this.constructor[Ll]}async preload(e,t,n=()=>{}){if(this[Il].setWithCredentials(t.withCredentials),this.dispatchEvent({type:`preload`,element:t,src:e}),!Ol.has(e)){Fl!=null&&this[Il].setMeshoptDecoder(await Fl);let t=El(e,this[Il],e=>{n(e*.8)}),r=this[Rl],i=t.then(e=>r.prepare(e)).then(e=>(n(.9),new r(e))).catch((e=>(console.error(e),new r)));Ol.set(e,i)}await Ol.get(e),kl.set(e,!0),n&&n(1)}async load(e,t,n=()=>{}){await this.preload(e,t,n);let r=await(await Ol.get(e)).clone();return this[Ll].retain(e),r.dispose=()=>{this[Ll].release(e)},r}};zl[wl]=new bl(zl);var Bl=class extends St{constructor(e=document.createElement(`div`)){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position=`absolute`,this.element.style.userSelect=`none`,this.element.setAttribute(`draggable`,!1),this.center=new Qe(.5,.5),this.addEventListener(`removed`,function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}},Vl=new U,Hl=new He,Ul=new He,Wl=new U,Gl=new U,Kl=class{constructor(e={}){let t=this,n,r,i,a,o={objects:new WeakMap},s=e.element===void 0?document.createElement(`div`):e.element;s.style.overflow=`hidden`,this.domElement=s,this.sortObjects=!0,this.getSize=function(){return{width:n,height:r}},this.render=function(e,t){e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Hl.copy(t.matrixWorldInverse),Ul.multiplyMatrices(t.projectionMatrix,Hl),l(e,e,t),this.sortObjects&&f(e)},this.setSize=function(e,t){n=e,r=t,i=n/2,a=r/2,s.style.width=e+`px`,s.style.height=t+`px`};function c(e){e.isCSS2DObject&&(e.element.style.display=`none`);for(let t=0,n=e.children.length;t<n;t++)c(e.children[t])}function l(e,n,r){if(e.visible===!1)c(e);else{if(e.isCSS2DObject){Vl.setFromMatrixPosition(e.matrixWorld),Vl.applyMatrix4(Ul);let c=Vl.z>=-1&&Vl.z<=1&&e.layers.test(r.layers)===!0,l=e.element;l.style.display=c===!0?``:`none`,c===!0&&(e.onBeforeRender(t,n,r),l.style.transform=`translate(`+-100*e.center.x+`%,`+-100*e.center.y+`%)translate(`+(Vl.x*i+i)+`px,`+(-Vl.y*a+a)+`px)`,l.parentNode!==s&&s.appendChild(l),e.onAfterRender(t,n,r));let d={distanceToCameraSquared:u(r,e)};o.objects.set(e,d)}for(let t=0,i=e.children.length;t<i;t++)l(e.children[t],n,r)}}function u(e,t){return Wl.setFromMatrixPosition(e.matrixWorld),Gl.setFromMatrixPosition(t.matrixWorld),Wl.distanceToSquared(Gl)}function d(e){let t=[];return e.traverseVisible(function(e){e.isCSS2DObject&&t.push(e)}),t}function f(e){let t=d(e).sort(function(e,t){return e.renderOrder===t.renderOrder?o.objects.get(e).distanceToCameraSquared-o.objects.get(t).distanceToCameraSquared:t.renderOrder-e.renderOrder}),n=t.length;for(let e=0,r=t.length;e<r;e++)t[e].element.style.zIndex=n-e}}};function ql(e,t,n){let r=n,i=new U;return e.updateWorldMatrix(!0,!0),e.traverseVisible(e=>{let{geometry:n}=e;if(n!==void 0){let{position:a}=n.attributes;if(a!==void 0)for(let n=0,o=a.count;n<o;n++)e.isMesh?e.getVertexPosition(n,i):i.fromBufferAttribute(a,n),e.isSkinnedMesh||i.applyMatrix4(e.matrixWorld),r=t(r,i)}}),r}var Jl,Yl,Xl,Zl;function Ql(e,t=1/0,n=null){Yl||=new ue(2,2,1,1),Xl||=new N({uniforms:{blitTexture:new ve(e)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = sRGBTransferOETF( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`}),Xl.uniforms.blitTexture.value=e,Xl.defines.IS_SRGB=e.colorSpace==he,Xl.needsUpdate=!0,Zl||(Zl=new an(Yl,Xl),Zl.frustumCulled=!1);let r=new yt,i=new ee;i.add(Zl),n===null&&(n=Jl=new Xo({antialias:!1}));let a=Math.min(e.image.width,t),o=Math.min(e.image.height,t);n.setSize(a,o),n.clear(),n.render(i,r);let s=document.createElement(`canvas`),c=s.getContext(`2d`);s.width=a,s.height=o,c.drawImage(n.domElement,0,0,a,o);let l=new at(s);return l.minFilter=e.minFilter,l.magFilter=e.magFilter,l.wrapS=e.wrapS,l.wrapT=e.wrapT,l.colorSpace=e.colorSpace,l.name=e.name,Jl&&=(Jl.forceContextLoss(),Jl.dispose(),null),l}var $l=e=>e.material!==void 0&&e.userData&&e.userData.variantMaterials&&!!Array.from(e.userData.variantMaterials.values()).filter(e=>eu(e.material)),eu=e=>!!(e&&e.isMaterial&&!Array.isArray(e)),tu=class{constructor(e){this.writer=e,this.name=`KHR_materials_variants`,this.variantNames=[]}beforeParse(e){let t=new Set,n=e=>{if(!$l(e))return;let n=e.userData.variantMaterials,r=e.userData.variantData;for(let[e,i]of r){let r=n.get(i.index);r&&eu(r.material)&&t.add(e)}};if(Array.isArray(e))for(let t of e)t.traverse(n);else e.traverse(n);t.forEach(e=>this.variantNames.push(e))}async writeMesh(e,t){if(!$l(e))return;let n=e.userData,r=n.variantMaterials,i=n.variantData,a=new Map,o=new Map,s=Array.from(i.values()).sort((e,t)=>e.index-t.index);for(let[e,t]of s.entries())o.set(t.index,e);for(let e of i.values()){let t=r.get(e.index);if(!t||!eu(t.material))continue;let n=await this.writer.processMaterialAsync(t.material);a.has(n)||a.set(n,{material:n,variants:[]}),a.get(n).variants.push(o.get(e.index))}let c=Array.from(a.values()).map((e=>e.variants.sort((e,t)=>e-t)&&e)).sort((e,t)=>e.material-t.material);if(c.length===0)return;let l=eu(n.originalMaterial)?await this.writer.processMaterialAsync(n.originalMaterial):-1;for(let e of t.primitives)l>=0&&(e.material=l),e.extensions=e.extensions||{},e.extensions[this.name]={mappings:c}}afterParse(){if(this.variantNames.length===0)return;let e=this.writer.json;e.extensions=e.extensions||{};let t=this.variantNames.map(e=>({name:e}));e.extensions[this.name]={variants:t},this.writer.extensionsUsed[this.name]=!0}},nu=class{constructor(e,t,n,r,i){this.xrLight=e,this.renderer=t,this.lightProbe=n,this.xrWebGLBinding=null,this.estimationStartCallback=i,this.frameCallback=this.onXRFrame.bind(this);let a=t.xr.getSession();if(r&&`XRWebGLBinding`in window){e.environment=new fi(16).texture;let n=t.getContext();switch(a.preferredReflectionFormat){case`srgba8`:n.getExtension(`EXT_sRGB`);break;case`rgba16f`:n.getExtension(`OES_texture_half_float`)}this.xrWebGLBinding=new XRWebGLBinding(a,n),this.lightProbe.addEventListener(`reflectionchange`,()=>{this.updateReflection()})}a.requestAnimationFrame(this.frameCallback)}updateReflection(){let e=this.renderer.properties.get(this.xrLight.environment);if(e){let t=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);t&&(e.__webglTexture=t,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(e,t){if(!this.xrLight)return;t.session.requestAnimationFrame(this.frameCallback);let n=t.getLightEstimate(this.lightProbe);if(n){this.xrLight.lightProbe.sh.fromArray(n.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;let e=Math.max(1,Math.max(n.primaryLightIntensity.x,Math.max(n.primaryLightIntensity.y,n.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(n.primaryLightIntensity.x/e,n.primaryLightIntensity.y/e,n.primaryLightIntensity.z/e),this.xrLight.directionalLight.intensity=e,this.xrLight.directionalLight.position.copy(n.primaryLightDirection),this.estimationStartCallback&&=(this.estimationStartCallback(),null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}},ru=class extends _n{constructor(e,t=!0){super(),this.lightProbe=new Le,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new i,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let n=null,r=!1;e.xr.addEventListener(`sessionstart`,()=>{let i=e.xr.getSession();`requestLightProbe`in i&&i.requestLightProbe({reflectionFormat:i.preferredReflectionFormat}).then(i=>{n=new nu(this,e,i,t,()=>{r=!0,this.dispatchEvent({type:`estimationstart`})})})}),e.xr.addEventListener(`sessionend`,()=>{n&&=(n.dispose(),null),r&&this.dispatchEvent({type:`estimationend`})}),this.dispose=()=>{n&&=(n.dispose(),null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}},iu=1e4,au=.001,ou=class{constructor(e=50){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(e)}setDecayTime(e){this.naturalFrequency=1/Math.max(au,e)}update(e,t,n,r){let i=2e-4*this.naturalFrequency;if(e==null||r===0||e===t&&this.velocity===0)return t;if(n<0)return e;let a=e-t,o=this.velocity+this.naturalFrequency*a,s=a+n*o,c=Math.exp(-this.naturalFrequency*n),l=(o-this.naturalFrequency*s)*c,u=-this.naturalFrequency*(l+o*c);return Math.abs(l)<i*Math.abs(r)&&u*a>=0?(this.velocity=0,t):(this.velocity=l,t+s*c)}},su={MIN_TOUCH_AREA:.05,BASE_RADIUS:.15,LINE_WIDTH:.02,SEGMENTS:16,DELTA_PHI:Math.PI/32,COLORS:{EDGE_FALLOFF:new W(.98,.98,.98),EDGE_CUTOFF:new W(.8,.8,.8),FILL_FALLOFF:new W(.4,.4,.4),FILL_CUTOFF:new W(.4,.4,.4),ACTIVE_EDGE:new W(1,1,1),ACTIVE_FILL:new W(.6,.6,.6)},MAX_OPACITY:.75,ACTIVE_OPACITY:.9,FILL_OPACITY_MULTIPLIER:.5,INTERACTIVE_OPACITY_MULTIPLIER:1.2,MIN_DISTANCE:.5,MAX_DISTANCE:10,BASE_SCALE:1,DISTANCE_SCALE_FACTOR:.3,FADE_IN_DURATION:.12,FADE_OUT_DURATION:.12,SIZE_UPDATE_DURATION:.05,COLOR_LERP_FACTOR:.15,SCREEN_SPACE_SCALE:1.2,SIZE_UPDATE_THRESHOLD:.001,GEOMETRY_UPDATE_DEBOUNCE:100},cu=new Qe,lu=(e,t,n,r,i)=>{let a=t>0?n>0?0:-Math.PI/2:n>0?Math.PI/2:Math.PI;for(let o=0;o<=su.SEGMENTS;++o)e.push(t+(r-i)*Math.cos(a),n+(r-i)*Math.sin(a),0,t+r*Math.cos(a),n+r*Math.sin(a),0),a+=su.DELTA_PHI},uu=class extends an{constructor(e,t){let n=new Zt;super(n),this.shadowHeight=0,this.isActive=!1,this.isHovered=!1,this.lastGeometryUpdateTime=0,this.needsGeometryUpdate=!1,this.scene=e,this.side=t,this.currentSize=new U,this.goalSize=new U,this.sizeDamper=new ou,this.updateSizeFromScene(),this.edgeMaterial=new gn({color:su.COLORS.EDGE_FALLOFF,transparent:!0,opacity:0,side:2,depthWrite:!1,blending:2}),this.fillMaterial=new gn({color:su.COLORS.FILL_FALLOFF,transparent:!0,opacity:0,side:2,depthWrite:!1,blending:1}),this.material=this.edgeMaterial,this.goalOpacity=0,this.opacityDamper=new ou,this.createHitMeshes(),this.updatePositionFromScene(),e.target.add(this),e.target.add(this.hitBox),this.offsetHeight=0}updateSizeFromScene(){let{size:e}=this.scene;this.goalSize.copy(e);let t=Math.sqrt(e.x*e.x+e.z*e.z),n=Math.max(su.MIN_TOUCH_AREA,t*.4);this.goalSize.x<n&&(this.goalSize.x=n),this.goalSize.z<n&&(this.goalSize.z=n),this.updateGeometry()}updateGeometry(){let e=this.geometry,t=[],n=[],r=this.goalSize.x/2,i=(this.side===`back`?this.goalSize.y:this.goalSize.z)/2,a=Math.min(r,i),o=Math.max(su.BASE_RADIUS*.7,a*.2),s=Math.max(su.LINE_WIDTH*.7,a*.025);lu(n,r,i,o,s),lu(n,-r,i,o,s),lu(n,-r,-i,o,s),lu(n,r,-i,o,s);let c=n.length/3;for(let e=0;e<c-2;e+=2)t.push(e,e+1,e+3,e,e+3,e+2);let l=c-2;t.push(l,l+1,1,l,1,0),e.setAttribute(`position`,new x(n,3)),e.setIndex(t),e.computeBoundingSphere()}createHitMeshes(){let e=this.goalSize.x/2,t=(this.side===`back`?this.goalSize.y:this.goalSize.z)/2,n=Math.min(e,t),r=Math.max(su.BASE_RADIUS*.7,n*.2);this.hitPlane=new an(new ue(2*(e+r),2*(t+r))),this.hitPlane.visible=!1,this.hitPlane.material.side=2,this.add(this.hitPlane),this.hitBox=new an(new Xe(this.goalSize.x+2*r,this.goalSize.y+r,this.goalSize.z+2*r)),this.hitBox.visible=!1,this.hitBox.material.side=2,this.add(this.hitBox)}updatePositionFromScene(){let{boundingBox:e}=this.scene;switch(e.getCenter(this.position),this.rotation.set(0,0,0),this.side){case`bottom`:this.rotateX(-Math.PI/2),this.shadowHeight=e.min.y,this.position.y=this.shadowHeight;break;case`back`:this.shadowHeight=e.min.z,this.position.z=this.shadowHeight}if(this.hitBox){let t=(this.side,(this.goalSize.y+su.BASE_RADIUS)/2);this.hitBox.position.y=t+e.min.y}}updateFromModelChanges(){this.updateSizeFromScene(),this.updatePositionFromScene(),this.updateGeometry(),this.updateHitMeshes(),this.ensureProperOrientation(),this.needsGeometryUpdate=!1,this.lastGeometryUpdateTime=performance.now()}ensureProperOrientation(){this.side===`bottom`?(this.rotation.x=-Math.PI/2,this.rotation.y=0,this.rotation.z=0):this.side===`back`&&(this.rotation.x=0,this.rotation.y=0,this.rotation.z=0)}setScreenSpaceMode(e){e?this.scale.set(su.SCREEN_SPACE_SCALE,su.SCREEN_SPACE_SCALE,su.SCREEN_SPACE_SCALE):this.scale.set(1,1,1)}updateHitMeshes(){if(this.hitPlane&&this.hitBox){let e=this.goalSize.x/2,t=(this.side===`back`?this.goalSize.y:this.goalSize.z)/2,n=Math.min(e,t),r=Math.max(su.BASE_RADIUS*.7,n*.2),i=new ue(2*(e+r),2*(t+r));this.hitPlane.geometry.dispose(),this.hitPlane.geometry=i;let a=new Xe(this.goalSize.x+2*r,this.goalSize.y+r,this.goalSize.z+2*r);this.hitBox.geometry.dispose(),this.hitBox.geometry=a}}setInteractionState(e,t=!1){this.isActive=e,this.isHovered=t,this.updateVisualState()}updateVisualState(){let e,t;this.isActive?(e=su.COLORS.ACTIVE_EDGE,t=su.COLORS.ACTIVE_FILL):this.isHovered?(e=su.COLORS.EDGE_FALLOFF,t=su.COLORS.FILL_FALLOFF):(e=su.COLORS.EDGE_CUTOFF,t=su.COLORS.FILL_CUTOFF),this.edgeMaterial.color.lerp(e,su.COLOR_LERP_FACTOR),this.fillMaterial.color.lerp(t,su.COLOR_LERP_FACTOR)}applyDistanceScaling(e){let t=e.distanceTo(this.position),n=Math.max(su.MIN_DISTANCE,Math.min(su.MAX_DISTANCE,t)),r=su.BASE_SCALE+(n-su.MIN_DISTANCE)*su.DISTANCE_SCALE_FACTOR;this.scale.set(r,r,r)}getHit(e,t,n){cu.set(t,-n),this.hitPlane.visible=!0;let r=e.positionAndNormalFromPoint(cu,this.hitPlane);return this.hitPlane.visible=!1,r==null?null:r.position}getExpandedHit(e,t,n){this.hitPlane.scale.set(1e3,1e3,1e3),this.hitPlane.updateMatrixWorld();let r=this.getHit(e,t,n);return this.hitPlane.scale.set(1,1,1),r}controllerIntersection(e,t){this.hitBox.visible=!0;let n=e.hitFromController(t,this.hitBox);return this.hitBox.visible=!1,n}set offsetHeight(e){e-=.001,this.side===`back`?this.position.z=this.shadowHeight+e:this.position.y=this.shadowHeight+e}get offsetHeight(){return this.side===`back`?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(e){this.goalOpacity=e?su.MAX_OPACITY:0}updateOpacity(e){let t=this.material,n=this.opacityDamper.update(t.opacity,this.goalOpacity,e,1);this.edgeMaterial.opacity=n,this.fillMaterial.opacity=n*su.FILL_OPACITY_MULTIPLIER,(this.isActive||this.isHovered)&&(this.edgeMaterial.opacity=n*su.INTERACTIVE_OPACITY_MULTIPLIER),this.visible=n>0}update(e,t){if(this.updateOpacity(e),!this.currentSize.equals(this.goalSize)){let t=new U;t.x=this.sizeDamper.update(this.currentSize.x,this.goalSize.x,e,1),t.y=this.sizeDamper.update(this.currentSize.y,this.goalSize.y,e,1),t.z=this.sizeDamper.update(this.currentSize.z,this.goalSize.z,e,1),t.distanceTo(this.currentSize)>su.SIZE_UPDATE_THRESHOLD&&(this.currentSize.copy(t),this.needsGeometryUpdate=!0)}let n=performance.now();this.needsGeometryUpdate&&n-this.lastGeometryUpdateTime>su.GEOMETRY_UPDATE_DEBOUNCE&&(this.updateGeometry(),this.updateHitMeshes(),this.needsGeometryUpdate=!1,this.lastGeometryUpdateTime=n),t&&this.applyDistanceScaling(t),this.updateVisualState()}getSize(){return this.goalSize.clone()}dispose(){let{geometry:e,material:t}=this.hitPlane;e.dispose(),t.dispose(),this.hitBox.geometry.dispose(),this.hitBox.material.dispose(),this.geometry.dispose(),this.edgeMaterial.dispose(),this.fillMaterial.dispose(),this.hitBox.removeFromParent(),this.removeFromParent()}},du=(e,t)=>({type:`number`,number:e,unit:t}),fu=(()=>{let e={};return t=>{let n=t;if(n in e)return e[n];let r=[],i=0;for(;t;){if(++i>1e3){t=``;break}let e=pu(t),n=e.nodes[0];if(n==null||n.terms.length===0)break;r.push(n),t=e.remainingInput}return e[n]=r}})(),pu=(()=>{let e=/^(\-\-|[a-z\u0240-\uffff])/i,t=/^([\*\+\/]|[\-]\s)/i,n=/^[\),]/;return r=>{let i=[];for(;r.length&&(r=r.trim(),!n.test(r));)if(r[0]===`(`){let{nodes:e,remainingInput:t}=_u(r);r=t,i.push({type:`function`,name:{type:`ident`,value:`calc`},arguments:e})}else if(e.test(r)){let e=mu(r),t=e.nodes[0];if(r=e.remainingInput,r[0]===`(`){let{nodes:e,remainingInput:n}=_u(r);i.push({type:`function`,name:t,arguments:e}),r=n}else i.push(t)}else if(t.test(r))i.push({type:`operator`,value:r[0]}),r=r.slice(1);else{let{nodes:e,remainingInput:t}=r[0]===`#`?gu(r):hu(r);if(e.length===0)break;i.push(e[0]),r=t}return{nodes:[{type:`expression`,terms:i}],remainingInput:r}}})(),mu=(()=>{let e=/[^a-z0-9_\-\u0240-\uffff]/i;return t=>{let n=t.match(e),r=n==null?t:t.substr(0,n.index),i=n==null?``:t.substr(n.index);return{nodes:[{type:`ident`,value:r}],remainingInput:i}}})(),hu=(()=>{let e=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,t=/^[a-z%]+/i,n=/^(m|mm|cm|rad|deg|[%])$/;return r=>{let i=r.match(e),a=i==null?`0`:i[0];r=a==null?r:r.slice(a.length);let o=r.match(t),s=o!=null&&o[0]!==``?o[0]:null,c=o==null?r:r.slice(s.length);return s!=null&&!n.test(s)&&(s=null),{nodes:[{type:`number`,number:parseFloat(a)||0,unit:s}],remainingInput:c}}})(),gu=(()=>{let e=/^([a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{4}|[a-f0-9]{3})(?![a-f0-9])/i;return t=>{t=t.slice(1).trim();let n=t.match(e);return{nodes:n==null?[]:[{type:`hex`,value:n[0]}],remainingInput:n==null?t:t.slice(n[0].length)}}})(),_u=e=>{let t=[];for(e=e.slice(1).trim();e.length;){let n=pu(e);if(t.push(n.nodes[0]),e=n.remainingInput.trim(),e[0]===`,`)e=e.slice(1).trim();else if(e[0]===`)`){e=e.slice(1);break}}return{nodes:t,remainingInput:e}},vu=Symbol(`visitedTypes`),yu=class{constructor(e){this[vu]=e}walk(e,t){let n=e.slice();for(;n.length;){let e=n.shift();switch(this[vu].indexOf(e.type)>-1&&t(e),e.type){case`expression`:n.unshift(...e.terms);break;case`function`:n.unshift(e.name,...e.arguments)}}}},bu=Object.freeze({type:`number`,number:0,unit:null}),xu=(e,t=0)=>{let{number:n,unit:r}=e;return isFinite(n)?e.unit===`rad`||e.unit==null?e:{type:`number`,number:(r===`deg`&&n!=null?n:0)*Math.PI/180,unit:`rad`}:{type:`number`,number:t,unit:`rad`}},Su=(e,t=0)=>{let{number:n,unit:r}=e;if(!isFinite(n))n=t,r=`m`;else if(e.unit===`m`)return e;let i;switch(r){default:i=1;break;case`cm`:i=1/100;break;case`mm`:i=1/1e3}return{type:`number`,number:i*n,unit:`m`}},Cu=(()=>{let e=e=>e,t={rad:e,deg:xu,m:e,mm:Su,cm:Su};return(e,n=bu)=>{isFinite(e.number)||(e.number=n.number,e.unit=n.unit);let{unit:r}=e;if(r==null)return e;let i=t[r];return i==null?n:i(e)}})(),wu,Tu,Eu,Du=Symbol(`evaluate`),Ou=Symbol(`lastValue`),ku=class e{constructor(){this[wu]=null}static evaluatableFor(t,n=bu){if(t instanceof e)return t;if(t.type===`number`)return t.unit===`%`?new Mu(t,n):t;switch(t.name.value){case`calc`:return new Lu(t,n);case`env`:return new Pu(t)}return bu}static evaluate(t){return t instanceof e?t.evaluate():t}static isConstant(t){return t instanceof e?t.isConstant:!0}static applyIntrinsics(e,t){let{basis:n,keywords:r}=t,{auto:i}=r;return n.map((t,n)=>{let a=i[n]==null?t:i[n],o=e[n]?e[n]:a;if(o.type===`ident`){let e=o.value;e in r&&(o=r[e][n])}return(o==null||o.type===`ident`)&&(o=a),o.unit===`%`?du(o.number/100*t.number,t.unit):(o=Cu(o,t),o.unit===t.unit?o:t)})}get isConstant(){return!1}evaluate(){return(!this.isConstant||this[Ou]==null)&&(this[Ou]=this[Du]()),this[Ou]}};wu=Ou;var Au=Symbol(`percentage`),ju=Symbol(`basis`),Mu=class extends ku{constructor(e,t){super(),this[Au]=e,this[ju]=t}get isConstant(){return!0}[Du](){return du(this[Au].number/100*this[ju].number,this[ju].unit)}},Nu=Symbol(`identNode`),Pu=class extends ku{constructor(e){super(),this[Tu]=null;let t=e.arguments.length?e.arguments[0].terms[0]:null;t!=null&&t.type===`ident`&&(this[Nu]=t)}get isConstant(){return!1}[(Tu=Nu,Du)](){if(this[Nu]!=null)switch(this[Nu].value){case`window-scroll-y`:return{type:`number`,number:window.pageYOffset/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight)||0,unit:null}}return bu}},Fu=/[\*\/]/,Iu=Symbol(`evaluator`),Lu=class extends ku{constructor(e,t=bu){if(super(),this[Eu]=null,e.arguments.length!==1)return;let n=e.arguments[0].terms.slice(),r=[];for(;n.length;){let e=n.shift();if(r.length>0){let n=r[r.length-1];if(n.type===`operator`&&Fu.test(n.value)){let n=r.pop(),i=r.pop();if(i==null)return;r.push(new Vu(n,ku.evaluatableFor(i,t),ku.evaluatableFor(e,t)));continue}}r.push(e.type===`operator`?e:ku.evaluatableFor(e,t))}for(;r.length>2;){let[e,n,i]=r.splice(0,3);if(n.type!==`operator`)return;r.unshift(new Vu(n,ku.evaluatableFor(e,t),ku.evaluatableFor(i,t)))}r.length===1&&(this[Iu]=r[0])}get isConstant(){return this[Iu]==null||ku.isConstant(this[Iu])}[(Eu=Iu,Du)](){return this[Iu]==null?bu:ku.evaluate(this[Iu])}},Ru=Symbol(`operator`),zu=Symbol(`left`),Bu=Symbol(`right`),Vu=class extends ku{constructor(e,t,n){super(),this[Ru]=e,this[zu]=t,this[Bu]=n}get isConstant(){return ku.isConstant(this[zu])&&ku.isConstant(this[Bu])}[Du](){let e=Cu(ku.evaluate(this[zu])),t=Cu(ku.evaluate(this[Bu])),{number:n,unit:r}=e,{number:i,unit:a}=t;if(a!=null&&r!=null&&a!=r)return bu;let o=r||a,s;switch(this[Ru].value){case`+`:s=n+i;break;case`-`:s=n-i;break;case`/`:s=n/i;break;case`*`:s=n*i;break;default:return bu}return{type:`number`,number:s,unit:o}}},Hu=Symbol(`evaluatables`),Uu=Symbol(`intrinsics`),Wu=class extends ku{constructor(e,t){super(),this[Uu]=t;let n=e[0],r=n==null?[]:n.terms;this[Hu]=t.basis.map((e,t)=>{let n=r[t];return n==null?{type:`ident`,value:`auto`}:n.type===`ident`?n:ku.evaluatableFor(n,e)})}get isConstant(){for(let e of this[Hu])if(!ku.isConstant(e))return!1;return!0}[Du](){let e=this[Hu].map(e=>ku.evaluate(e));return ku.applyIntrinsics(e,this[Uu]).map(e=>e.number)}},Gu,Ku,qu,Ju,Yu=Symbol(`instances`),Xu=Symbol(`activateListener`),Zu=Symbol(`deactivateListener`),Qu=Symbol(`notifyInstances`),$u=Symbol(`notify`),ed=Symbol(`callback`),td=class e{static[Qu](){for(let t of e[Yu])t[$u]()}static[(Gu=Yu,Xu)](){window.addEventListener(`scroll`,this[Qu],{passive:!0})}static[Zu](){window.removeEventListener(`scroll`,this[Qu])}constructor(e){this[ed]=e}observe(){e[Yu].size===0&&e[Xu](),e[Yu].add(this)}disconnect(){e[Yu].delete(this),e[Yu].size===0&&e[Zu]()}[$u](){this[ed]()}};td[Gu]=new Set;var nd=Symbol(`computeStyleCallback`),rd=Symbol(`astWalker`),id=Symbol(`dependencies`),ad=Symbol(`onScroll`),od=class{constructor(e){this[Ku]={},this[qu]=new yu([`function`]),this[Ju]=()=>{this[nd]({relatedState:`window-scroll`})},this[nd]=e}observeEffectsFor(e){let t={},n=this[id];this[rd].walk(e,e=>{let{name:r}=e,i=e.arguments[0].terms[0];if(r.value===`env`&&i!=null&&i.type===`ident`&&i.value===`window-scroll-y`&&t[`window-scroll`]==null){let e=`window-scroll`in n?n[`window-scroll`]:new td(this[ad]);e.observe(),delete n[`window-scroll`],t[`window-scroll`]=e}});for(let e in n)n[e].disconnect();this[id]=t}dispose(){for(let e in this[id])this[id][e].disconnect()}};Ku=id,qu=rd,Ju=ad;var sd=e=>{let t=e.observeEffects||!1,n=e.intrinsics instanceof Function?e.intrinsics:(()=>e.intrinsics);return(r,i)=>{let a=r.updated,o=r.connectedCallback,s=r.disconnectedCallback,c=Symbol(`${i}StyleEffector`),l=Symbol(`${i}StyleEvaluator`),u=Symbol(`${i}UpdateEvaluator`),d=Symbol(`${i}EvaluateAndSync`);Object.defineProperties(r,{[c]:{value:null,writable:!0},[l]:{value:null,writable:!0},[u]:{value:function(){let e=fu(this[i]);this[l]=new Wu(e,n(this)),this[c]==null&&t&&(this[c]=new od(()=>this[d]())),this[c]!=null&&this[c].observeEffectsFor(e)}},[d]:{value:function(){if(this[l]==null)return;let t=this[l].evaluate();this[e.updateHandler](t)}},updated:{value:function(e){e.has(i)&&(this[u](),this[d]()),a.call(this,e)}},connectedCallback:{value:function(){o.call(this),this.requestUpdate(i,this[i])}},disconnectedCallback:{value:function(){s.call(this),this[c]!=null&&(this[c].dispose(),this[c]=null)}}})}},cd=e=>e<.5?2*e*e:-1+(4-2*e)*e,ld=(e,t,n=cd)=>r=>e+(t-e)*n(r),ud=(e,t)=>{let n=t.map((e=>t=>e+=t)(0));return t=>{t=hs(t,0,1),t*=n[n.length-1];let r=n.findIndex(e=>e>=t),i=r<1?0:n[r-1],a=n[r];return e[r]((t-i)/(a-i))}},dd=e=>{let t=[],n=[],r=e.initialValue;for(let i=0;i<e.keyframes.length;++i){let a=e.keyframes[i],{value:o,frames:s}=a,c=a.ease||cd,l=ld(r,o,c);t.push(l),n.push(s),r=o}return ud(t,n)},fd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},pd=5e3,md=dd({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),hd=dd({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),gd=`0deg 75deg 105%`,_d=`auto auto auto`,vd=`auto`,yd=2.2,bd=[`front`,`right`,`back`,`left`],xd=[`upper-`,``,`lower-`],Sd=3e3,Cd=`. Use mouse, touch or arrow keys to move.`,wd={AUTO:`auto`,NONE:`none`},Td={BASIC:`basic`,WIGGLE:`wiggle`},Ed={PAN_Y:`pan-y`,PAN_X:`pan-x`,NONE:`none`},Dd=()=>({basis:[xu(du(30,`deg`))],keywords:{auto:[null]}}),Od=()=>({basis:[xu(du(12,`deg`))],keywords:{auto:[null]}}),kd=(()=>{let e=fu(gd)[0].terms,t=Cu(e[0]),n=Cu(e[1]);return e=>{let r=e[Q].idealCameraDistance();return{basis:[t,n,du(r,`m`)],keywords:{auto:[null,null,du(105,`%`)]}}}})(),Ad=e=>{let t=yd*e[Q].boundingSphere.radius;return{basis:[du(-1/0,`rad`),du(0,`rad`),du(t,`m`)],keywords:{auto:[null,null,null]}}},jd=e=>{let t=new Wu([],kd(e)).evaluate()[2];return{basis:[du(1/0,`rad`),du(Math.PI,`rad`),du(t,`m`)],keywords:{auto:[null,null,null]}}},Md=e=>{e[Q].updateBoundingBoxAndShadowIfDirty();let t=e[Q].boundingBox.getCenter(new U);return{basis:[du(t.x,`m`),du(t.y,`m`),du(t.z,`m`)],keywords:{auto:[null,null,null]}}},Nd=Math.PI/2,Pd=Math.PI/3,Fd=Nd/2,Id=2*Math.PI,Ld=Symbol(`controls`),Rd=Symbol(`panElement`),zd=Symbol(`promptElement`),Bd=Symbol(`promptAnimatedContainer`),Vd=Symbol(`fingerAnimatedContainers`),Hd=Symbol(`deferInteractionPrompt`),Ud=Symbol(`updateAria`),Wd=Symbol(`a11y`),Gd=Symbol(`updateA11y`),Kd=Symbol(`updateCameraForRadius`),qd=Symbol(`cancelPrompts`),Jd=Symbol(`onChange`),Yd=Symbol(`onPointerChange`),Xd=Symbol(`waitingToPromptUser`),Zd=Symbol(`userHasInteracted`),Qd=Symbol(`promptElementVisibleTime`),$d=Symbol(`lastPromptOffset`),ef=Symbol(`cancellationSource`),tf=Symbol(`lastSpherical`),nf=Symbol(`jumpCamera`),rf=Symbol(`initialized`),af=Symbol(`maintainThetaPhi`),of=Symbol(`syncCameraOrbit`),sf=Symbol(`syncFieldOfView`),cf=Symbol(`syncCameraTarget`),lf=Symbol(`syncMinCameraOrbit`),uf=Symbol(`syncMaxCameraOrbit`),df=Symbol(`syncMinFieldOfView`),ff=Symbol(`syncMaxFieldOfView`),pf=e=>{var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v;class y extends e{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=gd,this.cameraTarget=_d,this.fieldOfView=vd,this.minCameraOrbit=`auto`,this.maxCameraOrbit=`auto`,this.minFieldOfView=`auto`,this.maxFieldOfView=`auto`,this.interactionPromptThreshold=Sd,this.interactionPrompt=wd.AUTO,this.interactionPromptStyle=Td.WIGGLE,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.touchAction=Ed.NONE,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=50,this.a11y=null,this[t]=this.shadowRoot.querySelector(`.interaction-prompt`),this[n]=this.shadowRoot.querySelector(`#prompt`),this[r]=[this.shadowRoot.querySelector(`#finger0`),this.shadowRoot.querySelector(`#finger1`)],this[i]=this.shadowRoot.querySelector(`.pan-target`),this[a]=0,this[o]=1/0,this[s]=!1,this[c]=!1,this[l]=Cf.AUTOMATIC,this[u]=new wf(this[Q].camera,this[h_],this[Q]),this[d]=new T,this[f]=!1,this[p]=!1,this[m]=!1,this[h]={},this[g]=()=>{let e=this[Ld].changeSource;this[ef]=e,e===Cf.USER_INTERACTION&&(this[Zd]=!0,this[Hd]())},this[_]=()=>{this[Ud](),this[__]();let e=this[Ld].changeSource;this.dispatchEvent(new CustomEvent(`camera-change`,{detail:{source:e}}))},this[v]=e=>{this[m_].classList.toggle(`pointer-tumbling`,e.type===`pointer-change-start`)}}get inputSensitivity(){return this[Ld].inputSensitivity}set inputSensitivity(e){this[Ld].inputSensitivity=e}getCameraOrbit(){let{theta:e,phi:t,radius:n}=this[tf];return{theta:e,phi:t,radius:n,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return T_(this[$].isPresenting?this[$].arRenderer.target:this[Q].getDynamicTarget())}getFieldOfView(){return this[Ld].getFieldOfView()}getMinimumFieldOfView(){return this[Ld].options.minimumFieldOfView}getMaximumFieldOfView(){return this[Ld].options.maximumFieldOfView}getIdealAspect(){return this[Q].idealAspect}jumpCameraToGoal(){this[nf]=!0,this.requestUpdate(nf,!1)}resetInteractionPrompt(){this[$d]=0,this[Qd]=1/0,this[Zd]=!1,this[Xd]=this.interactionPrompt===wd.AUTO&&this.cameraControls}zoom(e){let t=new WheelEvent(`wheel`,{deltaY:-30*e});this[h_].dispatchEvent(t)}connectedCallback(){super.connectedCallback(),this[Ld].addEventListener(`user-interaction`,this[qd]),this[Ld].addEventListener(`pointer-change-start`,this[Yd]),this[Ld].addEventListener(`pointer-change-end`,this[Yd])}disconnectedCallback(){super.disconnectedCallback(),this[Ld].removeEventListener(`user-interaction`,this[qd]),this[Ld].removeEventListener(`pointer-change-start`,this[Yd]),this[Ld].removeEventListener(`pointer-change-end`,this[Yd])}updated(e){super.updated(e);let t=this[Ld],n=this[Q];if(e.has(`cameraControls`)&&(this.cameraControls?(t.enableInteraction(),this.interactionPrompt===wd.AUTO&&(this[Xd]=!0)):(t.disableInteraction(),this[Hd]()),this[h_].setAttribute(`aria-label`,this[s_])),e.has(`disableZoom`)&&(t.disableZoom=this.disableZoom),e.has(`disablePan`)&&(t.enablePan=!this.disablePan),e.has(`disableTap`)&&(t.enableTap=!this.disableTap),(e.has(`interactionPrompt`)||e.has(`cameraControls`)||e.has(`src`))&&(this.interactionPrompt===wd.AUTO&&this.cameraControls&&!this[Zd]?this[Xd]=!0:this[Hd]()),e.has(`interactionPromptStyle`)&&(this[Bd].style.opacity=this.interactionPromptStyle==Td.BASIC?`1`:`0`),e.has(`touchAction`)){let e=this.touchAction;t.applyOptions({touchAction:e}),t.updateTouchActionStyle()}e.has(`orbitSensitivity`)&&(t.orbitSensitivity=this.orbitSensitivity),e.has(`zoomSensitivity`)&&(t.zoomSensitivity=this.zoomSensitivity),e.has(`panSensitivity`)&&(t.panSensitivity=this.panSensitivity),e.has(`interpolationDecay`)&&(t.setDamperDecayTime(this.interpolationDecay),n.setTargetDamperDecayTime(this.interpolationDecay)),e.has(`a11y`)&&this[Gd](),this[nf]===!0&&Promise.resolve().then(()=>{t.jumpToGoal(),n.jumpToGoal(),this[Jd](),this[nf]=!1})}async updateFraming(){let e=this[Q],t=e.adjustedFoV(e.framedFoVDeg);await e.updateFraming();let n=e.adjustedFoV(e.framedFoVDeg),r=this[Ld].getFieldOfView()/t;this[Ld].setFieldOfView(n*r),this[af]=!0,this.requestUpdate(`maxFieldOfView`),this.requestUpdate(`fieldOfView`),this.requestUpdate(`minCameraOrbit`),this.requestUpdate(`maxCameraOrbit`),this.requestUpdate(`cameraOrbit`),await this.updateComplete}interact(e,t,n){let r=this[h_],i=this[Vd];if(i[0].style.opacity===`1`){console.warn(`interact() failed because an existing interaction is running.`);return}let a=[];a.push({x:dd(t.x),y:dd(t.y)});let o=[{x:a[0].x(0),y:a[0].y(0)}];n!=null&&(a.push({x:dd(n.x),y:dd(n.y)}),o.push({x:a[1].x(0),y:a[1].y(0)}));let s=performance.now(),{width:c,height:l}=this[Q],u=this.getBoundingClientRect(),d=e=>{for(let[t,n]of o.entries()){let{style:a}=i[t];a.transform=`translateX(${c*n.x}px) translateY(${l*n.y}px)`,e===`pointerdown`?a.opacity=`1`:e===`pointerup`&&(a.opacity=`0`);let o={pointerId:t-5678,pointerType:`touch`,target:r,clientX:c*n.x+u.x,clientY:l*n.y+u.y,altKey:!0};r.dispatchEvent(new PointerEvent(e,o))}},f=()=>{let t=this[ef];if(t!==Cf.AUTOMATIC||!r.isConnected){for(let e of this[Vd])e.style.opacity=`0`;d(`pointercancel`),this.dispatchEvent(new CustomEvent(`interact-stopped`,{detail:{source:t}})),document.removeEventListener(`visibilitychange`,p);return}let n=Math.min(1,(performance.now()-s)/e);for(let[e,t]of o.entries())t.x=a[e].x(n),t.y=a[e].y(n);d(`pointermove`),n<1?requestAnimationFrame(f):(d(`pointerup`),this.dispatchEvent(new CustomEvent(`interact-stopped`,{detail:{source:Cf.AUTOMATIC}})),document.removeEventListener(`visibilitychange`,p))},p=()=>{let e=0;document.visibilityState===`hidden`?e=performance.now()-s:s=performance.now()-e};document.addEventListener(`visibilitychange`,p),d(`pointerdown`),this[ef]=Cf.AUTOMATIC,requestAnimationFrame(f)}[(t=zd,n=Bd,r=Vd,i=Rd,a=$d,o=Qd,s=Zd,c=Xd,l=ef,u=Ld,d=tf,f=nf,p=rf,m=af,h=Wd,sf)](e){let t=this[Ld],n=this[Q];n.framedFoVDeg=e[0]*180/Math.PI,t.changeSource=Cf.NONE,t.setFieldOfView(n.adjustedFoV(n.framedFoVDeg)),this[qd]()}[of](e){let t=this[Ld];if(this[af]){let{theta:t,phi:n}=this.getCameraOrbit();e[0]=t,e[1]=n,this[af]=!1}t.changeSource=Cf.NONE,t.setOrbit(e[0],e[1],e[2]),this[qd]()}[lf](e){this[Ld].applyOptions({minimumAzimuthalAngle:e[0],minimumPolarAngle:e[1],minimumRadius:e[2]}),this.jumpCameraToGoal()}[uf](e){this[Ld].applyOptions({maximumAzimuthalAngle:e[0],maximumPolarAngle:e[1],maximumRadius:e[2]}),this[Kd](e[2]),this.jumpCameraToGoal()}[df](e){this[Ld].applyOptions({minimumFieldOfView:e[0]*180/Math.PI}),this.jumpCameraToGoal()}[ff](e){let t=this[Q].adjustedFoV(e[0]*180/Math.PI);this[Ld].applyOptions({maximumFieldOfView:t}),this.jumpCameraToGoal()}[cf](e){var t;let[n,r,i]=e;this[$].isPresenting||this[Q].setTarget(n,r,i),this[Ld].changeSource=Cf.NONE,(t=this[$].arRenderer)==null||t.updateTarget(),this[qd]()}[v_](e,t){if(super[v_](e,t),this[$].isPresenting||!this[C_]())return;let n=this[Ld],r=this[Q],i=performance.now();if(this[Xd]&&this.loaded&&i>this[d_]+this.interactionPromptThreshold&&(this[Xd]=!1,this[Qd]=i,this[zd].classList.add(`visible`)),isFinite(this[Qd])&&this.interactionPromptStyle===Td.WIGGLE){let e=(i-this[Qd])/pd%1,t=md(e),a=hd(e);if(this[Bd].style.opacity=`${a}`,t!==this[$d]){let e=t*r.width*.05,i=(t-this[$d])*Math.PI/16;this[Bd].style.transform=`translateX(${e}px)`,n.changeSource=Cf.AUTOMATIC,n.adjustOrbit(i,0,0),this[$d]=t}}let a=n.update(e,t),o=r.updateTarget(t);(a||o)&&this[Jd]()}[Hd](){this[Xd]=!1,this[zd].classList.remove(`visible`),this[Qd]=1/0}[Kd](e){let t=Math.max(this[Q].farRadius(),e),n=Math.abs(2*t);this[Ld].updateNearFar(0,n)}[Ud](){let{theta:e,phi:t}=this[Ld].getCameraSpherical(this[tf]),n=(4+Math.floor((e%Id+Fd)/Nd))%4,r=Math.floor(t/Pd),i=bd[n],a=`${xd[r]}${i}`,o=a;o in this[Wd]?this[u_](this[Wd][o]):this[u_](`View from stage ${a}`)}get[s_](){let e=Cd;return`interaction-prompt`in this[Wd]&&(e=`. ${this[Wd][`interaction-prompt`]}`),super[s_].replace(/\.$/,``)+(this.cameraControls?e:``)}async[b_](e){let t=this[Ld],n=this[Q],r=n.adjustedFoV(n.framedFoVDeg);super[b_](e);let i=n.adjustedFoV(n.framedFoVDeg)/r,a=t.getFieldOfView()*(isFinite(i)?i:1);t.updateAspect(this[Q].aspect),this.requestUpdate(`maxFieldOfView`,this.maxFieldOfView),await this.updateComplete,this[Ld].setFieldOfView(a),this.jumpCameraToGoal()}[y_](){super[y_](),this[rf]?this[af]=!0:this[rf]=!0,this.requestUpdate(`maxFieldOfView`,this.maxFieldOfView),this.requestUpdate(`fieldOfView`,this.fieldOfView),this.requestUpdate(`minCameraOrbit`,this.minCameraOrbit),this.requestUpdate(`maxCameraOrbit`,this.maxCameraOrbit),this.requestUpdate(`cameraOrbit`,this.cameraOrbit),this.requestUpdate(`cameraTarget`,this.cameraTarget),this.jumpCameraToGoal()}[(g=qd,_=Jd,v=Yd,Gd)](){if(typeof this.a11y==`string`){if(this.a11y.startsWith(`{`))try{this[Wd]=JSON.parse(this.a11y)}catch(e){console.warn(`Error parsing a11y JSON:`,e)}else this.a11y.length>0?console.warn(`Error not supported format, should be a JSON string:`,this.a11y):this[Wd]={}}else this[Wd]=typeof this.a11y==`object`&&this.a11y!=null?Object.assign({},this.a11y):{};this[h_].setAttribute(`aria-label`,this[s_])}}return fd([G({type:Boolean,attribute:`camera-controls`})],y.prototype,`cameraControls`,void 0),fd([sd({intrinsics:kd,observeEffects:!0,updateHandler:of}),G({type:String,attribute:`camera-orbit`,hasChanged:()=>!0})],y.prototype,`cameraOrbit`,void 0),fd([sd({intrinsics:Md,observeEffects:!0,updateHandler:cf}),G({type:String,attribute:`camera-target`,hasChanged:()=>!0})],y.prototype,`cameraTarget`,void 0),fd([sd({intrinsics:Dd,observeEffects:!0,updateHandler:sf}),G({type:String,attribute:`field-of-view`,hasChanged:()=>!0})],y.prototype,`fieldOfView`,void 0),fd([sd({intrinsics:Ad,updateHandler:lf}),G({type:String,attribute:`min-camera-orbit`,hasChanged:()=>!0})],y.prototype,`minCameraOrbit`,void 0),fd([sd({intrinsics:jd,updateHandler:uf}),G({type:String,attribute:`max-camera-orbit`,hasChanged:()=>!0})],y.prototype,`maxCameraOrbit`,void 0),fd([sd({intrinsics:Od,updateHandler:df}),G({type:String,attribute:`min-field-of-view`,hasChanged:()=>!0})],y.prototype,`minFieldOfView`,void 0),fd([sd({intrinsics:Dd,updateHandler:ff}),G({type:String,attribute:`max-field-of-view`,hasChanged:()=>!0})],y.prototype,`maxFieldOfView`,void 0),fd([G({type:Number,attribute:`interaction-prompt-threshold`})],y.prototype,`interactionPromptThreshold`,void 0),fd([G({type:String,attribute:`interaction-prompt`})],y.prototype,`interactionPrompt`,void 0),fd([G({type:String,attribute:`interaction-prompt-style`})],y.prototype,`interactionPromptStyle`,void 0),fd([G({type:Number,attribute:`orbit-sensitivity`})],y.prototype,`orbitSensitivity`,void 0),fd([G({type:Number,attribute:`zoom-sensitivity`})],y.prototype,`zoomSensitivity`,void 0),fd([G({type:Number,attribute:`pan-sensitivity`})],y.prototype,`panSensitivity`,void 0),fd([G({type:String,attribute:`touch-action`})],y.prototype,`touchAction`,void 0),fd([G({type:Boolean,attribute:`disable-zoom`})],y.prototype,`disableZoom`,void 0),fd([G({type:Boolean,attribute:`disable-pan`})],y.prototype,`disablePan`,void 0),fd([G({type:Boolean,attribute:`disable-tap`})],y.prototype,`disableTap`,void 0),fd([G({type:Number,attribute:`interpolation-decay`})],y.prototype,`interpolationDecay`,void 0),fd([G()],y.prototype,`a11y`,void 0),y},mf=.018,hf=2,gf=300,_f=new Qe,vf=new U,yf=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:0,maximumPolarAngle:Math.PI,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,touchAction:`none`}),bf=Math.PI/8,xf=.04,Sf=10,Cf={USER_INTERACTION:`user-interaction`,NONE:`none`,AUTOMATIC:`automatic`},wf=class extends P{constructor(e,t,n){super(),this.camera=e,this.element=t,this.scene=n,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.inputSensitivity=1,this.changeSource=Cf.NONE,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserPointing=!1,this.enablePan=!0,this.enableTap=!0,this.panProjection=new H,this.panPerPixel=0,this.spherical=new T,this.goalSpherical=new T,this.thetaDamper=new ou,this.phiDamper=new ou,this.radiusDamper=new ou,this.logFov=Math.log(yf.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new ou,this.touchMode=null,this.pointers=[],this.startTime=0,this.startPointerPosition={clientX:0,clientY:0},this.lastSeparation=0,this.touchDecided=!1,this.onContext=e=>{if(this.enablePan)e.preventDefault();else for(let e of this.pointers)this.onPointerUp(new PointerEvent(`pointercancel`,Object.assign(Object.assign({},this.startPointerPosition),{pointerId:e.id})))},this.touchModeZoom=(e,t)=>{if(!this._disableZoom){let e=this.twoTouchDistance(this.pointers[0],this.pointers[1]),t=xf*this.zoomSensitivity*(this.lastSeparation-e)*50/this.scene.height;this.lastSeparation=e,this.userAdjustOrbit(0,0,t)}this.panPerPixel>0&&this.movePan(e,t)},this.disableScroll=e=>{e.preventDefault()},this.touchModeRotate=(e,t)=>{let{touchAction:n}=this._options;if(!this.touchDecided&&n!==`none`){this.touchDecided=!0;let r=Math.abs(e),i=Math.abs(t);if(this.changeSource===Cf.USER_INTERACTION&&(n===`pan-y`&&i>r||n===`pan-x`&&r>i)){this.touchMode=null;return}this.element.addEventListener(`touchmove`,this.disableScroll,{passive:!1})}this.handleSinglePointerMove(e,t)},this.onPointerDown=e=>{if(this.pointers.length>2)return;let{element:t}=this;this.pointers.length===0&&(t.addEventListener(`pointermove`,this.onPointerMove),t.addEventListener(`pointerup`,this.onPointerUp),this.touchMode=null,this.touchDecided=!1,this.startPointerPosition.clientX=e.clientX,this.startPointerPosition.clientY=e.clientY,this.startTime=performance.now());try{t.setPointerCapture(e.pointerId)}catch{}this.pointers.push({clientX:e.clientX,clientY:e.clientY,id:e.pointerId}),this.isUserPointing=!1,e.pointerType===`touch`?(this.changeSource=e.altKey?Cf.AUTOMATIC:Cf.USER_INTERACTION,this.onTouchChange(e)):(this.changeSource=Cf.USER_INTERACTION,this.onMouseDown(e)),this.changeSource===Cf.USER_INTERACTION&&this.dispatchEvent({type:`user-interaction`})},this.onPointerMove=e=>{let t=this.pointers.find(t=>t.id===e.pointerId);if(t==null)return;if(e.pointerType===`mouse`&&e.buttons===0){this.onPointerUp(e);return}let n=this.pointers.length,r=(e.clientX-t.clientX)/n,i=(e.clientY-t.clientY)/n;(r!==0||i!==0)&&(t.clientX=e.clientX,t.clientY=e.clientY,e.pointerType===`touch`?(this.changeSource=e.altKey?Cf.AUTOMATIC:Cf.USER_INTERACTION,this.touchMode!==null&&this.touchMode(r,i)):(this.changeSource=Cf.USER_INTERACTION,this.panPerPixel>0?this.movePan(r,i):this.handleSinglePointerMove(r,i)))},this.onPointerUp=e=>{let{element:t}=this,n=this.pointers.findIndex(t=>t.id===e.pointerId);n!==-1&&this.pointers.splice(n,1),this.panPerPixel>0&&!e.altKey&&this.resetRadius(),this.pointers.length===0?(t.removeEventListener(`pointermove`,this.onPointerMove),t.removeEventListener(`pointerup`,this.onPointerUp),t.removeEventListener(`touchmove`,this.disableScroll),this.enablePan&&this.enableTap&&this.recenter(e)):this.touchMode!==null&&this.onTouchChange(e),this.scene.element[Rd].style.opacity=0,t.style.cursor=`grab`,this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:`pointer-change-end`})},this.onWheel=e=>{this.changeSource=Cf.USER_INTERACTION;let t=e.deltaY*(e.deltaMode==1?18:1)*xf*this.zoomSensitivity/30;this.userAdjustOrbit(0,0,t),e.preventDefault(),this.dispatchEvent({type:`user-interaction`})},this.onKeyDown=e=>{let{changeSource:t}=this;this.changeSource=Cf.USER_INTERACTION,(e.shiftKey&&this.enablePan?this.panKeyCodeHandler(e):this.orbitZoomKeyCodeHandler(e))?(e.preventDefault(),this.dispatchEvent({type:`user-interaction`})):this.changeSource=t},this._options=Object.assign({},yf),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(this._interactionEnabled===!1){let{element:e}=this;e.addEventListener(`pointerdown`,this.onPointerDown),e.addEventListener(`pointercancel`,this.onPointerUp),this._disableZoom||e.addEventListener(`wheel`,this.onWheel),e.addEventListener(`keydown`,this.onKeyDown),e.addEventListener(`touchmove`,()=>{},{passive:!1}),e.addEventListener(`contextmenu`,this.onContext),this.element.style.cursor=`grab`,this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(this._interactionEnabled===!0){let{element:e}=this;e.removeEventListener(`pointerdown`,this.onPointerDown),e.removeEventListener(`pointermove`,this.onPointerMove),e.removeEventListener(`pointerup`,this.onPointerUp),e.removeEventListener(`pointercancel`,this.onPointerUp),e.removeEventListener(`wheel`,this.onWheel),e.removeEventListener(`keydown`,this.onKeyDown),e.removeEventListener(`contextmenu`,this.onContext),e.style.cursor=``,this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(e){this._disableZoom!=e&&(this._disableZoom=e,e===!0?this.element.removeEventListener(`wheel`,this.onWheel):this.element.addEventListener(`wheel`,this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(e=new T){return e.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(e){Object.assign(this._options,e),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(e,t){this.camera.far=t===0?2:t,this.camera.near=Math.max(e,this.camera.far/1e3),this.camera.updateProjectionMatrix()}updateAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setOrbit(e=this.goalSpherical.theta,t=this.goalSpherical.phi,n=this.goalSpherical.radius){let{minimumAzimuthalAngle:r,maximumAzimuthalAngle:i,minimumPolarAngle:a,maximumPolarAngle:o,minimumRadius:s,maximumRadius:c}=this._options,{theta:l,phi:u,radius:d}=this.goalSpherical,f=hs(e,r,i);!isFinite(r)&&!isFinite(i)&&(this.spherical.theta=this.wrapAngle(this.spherical.theta-f)+f);let p=hs(t,a,o),m=hs(n,s,c);return f===l&&p===u&&m===d||!isFinite(f)||!isFinite(p)||!isFinite(m)?!1:(this.goalSpherical.theta=f,this.goalSpherical.phi=p,this.goalSpherical.radius=m,this.goalSpherical.makeSafe(),!0)}setRadius(e){this.goalSpherical.radius=e,this.setOrbit()}setFieldOfView(e){let{minimumFieldOfView:t,maximumFieldOfView:n}=this._options;e=hs(e,t,n),this.goalLogFov=Math.log(e)}setDamperDecayTime(e){this.thetaDamper.setDecayTime(e),this.phiDamper.setDecayTime(e),this.radiusDamper.setDecayTime(e),this.fovDamper.setDecayTime(e)}adjustOrbit(e,t,n){let{theta:r,phi:i,radius:a}=this.goalSpherical,{minimumRadius:o,maximumRadius:s,minimumFieldOfView:c,maximumFieldOfView:l}=this._options,u=this.spherical.theta-r,d=Math.PI-.001,f=r-hs(e,-d-u,d-u),p=i-t,m=n===0?0:((n>0?s:o)-a)/(Math.log(n>0?l:c)-this.goalLogFov),h=a+n*(isFinite(m)?m:(s-o)*2);if(this.setOrbit(f,p,h),n!==0){let e=this.goalLogFov+n;this.setFieldOfView(Math.exp(e))}}jumpToGoal(){this.update(0,iu)}update(e,t){if(this.isStationary())return!1;let{maximumPolarAngle:n,maximumRadius:r}=this._options,i=this.spherical.theta-this.goalSpherical.theta;return Math.abs(i)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=Math.sign(i)*2*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,t,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,t,n),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,t,r),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,t,1),this.moveCamera(),!0}updateTouchActionStyle(){let{style:e}=this.element;if(this._interactionEnabled){let{touchAction:t}=this._options;e.touchAction=this._disableZoom&&t!==`none`?`manipulation`:t}else e.touchAction=``}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new _t(this.spherical.phi-Math.PI/2,this.spherical.theta,0,`YXZ`)),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix())}userAdjustOrbit(e,t,n){this.adjustOrbit(e*this.orbitSensitivity*this.inputSensitivity,t*this.orbitSensitivity*this.inputSensitivity,n*this.inputSensitivity)}wrapAngle(e){let t=(e+Math.PI)/(2*Math.PI);return(t-Math.floor(t))*2*Math.PI-Math.PI}pixelLengthToSphericalAngle(e){return 2*Math.PI*e/this.scene.height}twoTouchDistance(e,t){let{clientX:n,clientY:r}=e,{clientX:i,clientY:a}=t,o=i-n,s=a-r;return Math.sqrt(o*o+s*s)}handleSinglePointerMove(e,t){let n=this.pixelLengthToSphericalAngle(e),r=this.pixelLengthToSphericalAngle(t);this.isUserPointing===!1&&(this.isUserPointing=!0,this.dispatchEvent({type:`pointer-change-start`})),this.userAdjustOrbit(n,r,0)}initializePan(){let{theta:e,phi:t}=this.spherical,n=e-this.scene.yaw;this.panPerPixel=mf*this.panSensitivity/this.scene.height,this.panProjection.set(-Math.cos(n),-Math.cos(t)*Math.sin(n),0,0,Math.sin(t),0,Math.sin(n),-Math.cos(t)*Math.cos(n),0)}movePan(e,t){let{scene:n}=this,r=vf.set(e,t,0).multiplyScalar(this.inputSensitivity),i=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;r.multiplyScalar(i);let a=n.getTarget();a.add(r.applyMatrix3(this.panProjection)),n.boundingSphere.clampPoint(a,a),n.setTarget(a.x,a.y,a.z)}recenter(e){if(performance.now()>this.startTime+gf||Math.abs(e.clientX-this.startPointerPosition.clientX)>hf||Math.abs(e.clientY-this.startPointerPosition.clientY)>hf)return;let{scene:t}=this,n=t.positionAndNormalFromPoint(t.getNDC(e.clientX,e.clientY));if(n==null){let{cameraTarget:e}=t.element;t.element.cameraTarget=``,t.element.cameraTarget=e,this.userAdjustOrbit(0,0,1)}else t.target.worldToLocal(n.position),t.setTarget(n.position.x,n.position.y,n.position.z)}resetRadius(){let{scene:e}=this,t=e.positionAndNormalFromPoint(_f.set(0,0));if(t==null)return;e.target.worldToLocal(t.position);let n=e.getTarget(),{theta:r,phi:i}=this.spherical,a=r-e.yaw,o=vf.set(Math.sin(i)*Math.sin(a),Math.cos(i),Math.sin(i)*Math.cos(a)),s=o.dot(t.position.sub(n));n.add(o.multiplyScalar(s)),e.setTarget(n.x,n.y,n.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-s)}onTouchChange(e){if(this.pointers.length===1)this.touchMode=this.touchModeRotate;else{if(this._disableZoom){this.touchMode=null,this.element.removeEventListener(`touchmove`,this.disableScroll);return}this.touchMode=this.touchDecided&&this.touchMode===null?null:this.touchModeZoom,this.touchDecided=!0,this.element.addEventListener(`touchmove`,this.disableScroll,{passive:!1}),this.lastSeparation=this.twoTouchDistance(this.pointers[0],this.pointers[1]),this.enablePan&&this.touchMode!=null&&(this.initializePan(),e.altKey||(this.scene.element[Rd].style.opacity=1))}}onMouseDown(e){this.panPerPixel=0,this.enablePan&&(e.button===2||e.ctrlKey||e.metaKey||e.shiftKey)&&(this.initializePan(),this.scene.element[Rd].style.opacity=1),this.element.style.cursor=`grabbing`}orbitZoomKeyCodeHandler(e){let t=!0;switch(e.key){case`PageUp`:this.userAdjustOrbit(0,0,xf*this.zoomSensitivity);break;case`PageDown`:this.userAdjustOrbit(0,0,-1*xf*this.zoomSensitivity);break;case`ArrowUp`:this.userAdjustOrbit(0,-bf,0);break;case`ArrowDown`:this.userAdjustOrbit(0,bf,0);break;case`ArrowLeft`:this.userAdjustOrbit(-bf,0,0);break;case`ArrowRight`:this.userAdjustOrbit(bf,0,0);break;default:t=!1}return t}panKeyCodeHandler(e){this.initializePan();let t=!0;switch(e.key){case`ArrowUp`:this.movePan(0,-10);break;case`ArrowDown`:this.movePan(0,Sf);break;case`ArrowLeft`:this.movePan(-10,0);break;case`ArrowRight`:this.movePan(Sf,0);break;default:t=!1}return t}},Tf=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#e8eaed">
   <path d="M6.4,19L5,17.6L10.6,12L5,6.4L6.4,5L12,10.6L17.6,5L19,6.4L13.4,12L19,17.6L17.6,19L12,13.4L6.4,19Z"/>
</svg>`,Ef=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#e8eaed">
   <path d="M7,17V9H5V7H9V17H7ZM11,17V15H13V17H11ZM16,17V9H14V7H18V17H16ZM11,13V11H13V13H11Z"/>
</svg>`,Df=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#E1E2E8">
   <defs>
       <clipPath id="clip0">
           <path d="M0,0h24v24h-24z"/>
       </clipPath>
   </defs>
   <g clip-path="url(#clip0)">
       <path d="M12,22C10.75,22 9.575,21.767 8.475,21.3C7.392,20.817 6.442,20.175 5.625,19.375C4.825,18.558 4.183,17.608 3.7,16.525C3.233,15.425 3,14.25 3,13H5C5,14.95 5.675,16.608 7.025,17.975C8.392,19.325 10.05,20 12,20C13.95,20 15.6,19.325 16.95,17.975C18.317,16.608 19,14.95 19,13C19,11.05 18.317,9.4 16.95,8.05C15.6,6.683 13.95,6 12,6H11.85L13.4,7.55L12,9L8,5L12,1L13.4,2.45L11.85,4H12C13.25,4 14.417,4.242 15.5,4.725C16.6,5.192 17.55,5.833 18.35,6.65C19.167,7.45 19.808,8.4 20.275,9.5C20.758,10.583 21,11.75 21,13C21,14.25 20.758,15.425 20.275,16.525C19.808,17.608 19.167,18.558 18.35,19.375C17.55,20.175 16.6,20.817 15.5,21.3C14.417,21.767 13.25,22 12,22Z"/>
   </g>
</svg>`,Of={width:.16,height:.07,cornerRadius:.03,opacity:1,color:0,minDistance:.5,maxDistance:10,baseScale:1,distanceScaleFactor:.3},kf={size:.05,zOffset:.01,spacing:.07},Af={canvasSize:128,filter:At},jf=class e extends St{constructor(){super(),this.isActualSize=!1,this.preRenderIcons(),this.createPanel(),this.createButtons(),this.opacityDamper=new ou,this.goalOpacity=Of.opacity}createPanel(){let e=this.createPanelShape(),t=new vn(e),n=new gn({color:Of.color,opacity:Of.opacity,transparent:!0});this.panelMesh=new an(t,n),this.panelMesh.name=`MenuPanel`,this.add(this.panelMesh)}createButtons(){this.exitButton=this.createButton(`close`),this.exitButton.name=`ExitButton`,this.exitButton.position.set(kf.spacing/2,0,kf.zOffset),this.add(this.exitButton),this.toggleButton=this.createButton(`view-real-size`),this.toggleButton.name=`ToggleButton`,this.toggleButton.position.set(-kf.spacing/2,0,kf.zOffset),this.add(this.toggleButton)}createPanelShape(){let e=new ye,{width:t,height:n,cornerRadius:r}=Of;return e.moveTo(-t/2+r,-n/2),e.lineTo(t/2-r,-n/2),e.quadraticCurveTo(t/2,-n/2,t/2,-n/2+r),e.lineTo(t/2,n/2-r),e.quadraticCurveTo(t/2,n/2,t/2-r,n/2),e.lineTo(-t/2+r,n/2),e.quadraticCurveTo(-t/2,n/2,-t/2,n/2-r),e.lineTo(-t/2,-n/2+r),e.quadraticCurveTo(-t/2,-n/2,-t/2+r,-n/2),e}preRenderIcons(){[{key:`close`,svg:Tf},{key:`view-real-size`,svg:Ef},{key:`replay`,svg:Df}].forEach(({key:t,svg:n})=>{e.iconTextures.has(t)||this.createTextureFromSvg(n,t)})}createTextureFromSvg(t,n){let r=document.createElement(`canvas`);r.width=Af.canvasSize,r.height=Af.canvasSize;let i=r.getContext(`2d`),a=new Image,o=new Blob([t],{type:`image/svg+xml`}),s=URL.createObjectURL(o);a.onload=()=>{i.drawImage(a,0,0,Af.canvasSize,Af.canvasSize);let t=new at(r);t.needsUpdate=!0,t.minFilter=Af.filter,e.iconTextures.set(n,t),URL.revokeObjectURL(s)},a.src=s}createButton(t){let n=new gn({transparent:!0}),r=new ue(kf.size,kf.size),i=new an(r,n),a=e.iconTextures.get(t);if(a)i.material.map=a,i.material.needsUpdate=!0;else{this.createTextureFromSvg(t===`close`?Tf:t===`view-real-size`?Ef:Df,t);let n=()=>{let r=e.iconTextures.get(t);r?(i.material.map=r,i.material.needsUpdate=!0):setTimeout(n,10)};n()}return i}exitButtonControllerIntersection(e,t){return e.hitFromController(t,this.exitButton)}scaleModeButtonControllerIntersection(e,t){return e.hitFromController(t,this.toggleButton)}handleScaleToggle(e,t,n,r){if(!e)return null;this.isActualSize=!this.isActualSize;let i=this.isActualSize?`replay`:`view-real-size`;this.updateScaleModeButtonLabel(i);let a=this.isActualSize?1:t;return Math.max(n,Math.min(r,a))}updateScaleModeButtonLabel(t){let n=e.iconTextures.get(t);n&&(this.toggleButton.material.map=n,this.toggleButton.material.needsUpdate=!0)}updatePosition(e,t){if(!t)return;let n=new U;t.getWorldPosition(n);let r=t.getSize(),i=Math.min(r.x,r.z),a=Math.max(.5,Math.min(2,i/1)),o=-.2*a,s=.9*a,c=new U().copy(e.position).sub(n);c.y=0,c.normalize();let l=new U().copy(n).add(new U(0,o,0)).add(c.multiplyScalar(s));this.position.copy(l);let u=e.position.distanceTo(l),d=Math.max(Of.minDistance,Math.min(Of.maxDistance,u)),f=Of.baseScale+(d-Of.minDistance)*Of.distanceScaleFactor;this.scale.set(f,f,f),this.lookAt(e.position)}set show(e){this.goalOpacity=e?Of.opacity:0}updateOpacity(e){let t=this.panelMesh.material.opacity,n=this.opacityDamper.update(t,this.goalOpacity,e,1);this.traverse(e=>{if(e instanceof an){let t=e.material;t.transparent&&(t.opacity=n)}}),this.visible=n>0}dispose(){var e;this.children.forEach(e=>{e instanceof an&&(e.geometry&&e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{e&&(`map`in e&&e.map instanceof at&&e.map.dispose(),e.dispose())}))}),(e=this.parent)==null||e.remove(this)}};jf.iconTextures=new Map;var Mf=30,Nf=.8,Pf=1.5,Ff=20,If=.2,Lf=.25,Rf=10,zf=150,Bf=5,Vf=new U(0,1,0),Hf=.3,Uf=15,Wf=.3,Gf=.01,Kf=.15,qf=70,Jf=.001,Yf=.2,Xf={NOT_PRESENTING:`not-presenting`,SESSION_STARTED:`session-started`,OBJECT_PLACED:`object-placed`,FAILED:`failed`},Zf={TRACKING:`tracking`,NOT_TRACKING:`not-tracking`},Qf=new U,$f=new be,ep=new He,tp=new U,np=new yt(45,1,.1,100),rp=new Zt().setFromPoints([new U(0,0,0),new U(0,0,-1)]),ip={SCREEN_SPACE:`screen-space`,WORLD_SPACE:`world-space`},ap=class extends P{isWorldSpaceReady(){return this.xrMode===ip.WORLD_SPACE&&this.worldSpaceInitialPlacementDone}constructor(e){super(),this.renderer=e,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.menuPanel=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.xrMode=null,this.xrController1=null,this.xrController2=null,this.selectedXRController=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new U,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoHandInteraction=!1,this.lastDragPosition=new U,this.deltaRotation=new be,this.scaleLine=new _e(rp),this.firstRatio=0,this.lastAngle=0,this.goalPosition=new U,this.goalYaw=0,this.goalScale=1,this.xDamper=new ou,this.yDamper=new ou,this.zDamper=new ou,this.yawDamper=new ou,this.pitchDamper=new ou,this.rollDamper=new ou,this.scaleDamper=new ou,this.wasTwoFingering=!1,this.worldSpaceInitialPlacementDone=!1,this.initialModelScale=1,this.minScale=1,this.maxScale=1,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onControllerSelectStart=e=>{var t;let n=this.presentedScene,r=e.target,i=this.menuPanel;if(this.menuPanel.exitButtonControllerIntersection(n,r)!=null){(t=this.menuPanel)==null||t.dispose(),this.stopPresenting();return}if(this.menuPanel.scaleModeButtonControllerIntersection(n,r)!=null){let e=this.menuPanel.handleScaleToggle(this.worldSpaceInitialPlacementDone,this.initialModelScale,this.minScale,this.maxScale);e!==null&&(this.goalScale=e);return}i&&(i.show=!1);let a=this.placementBox.controllerIntersection(n,r);if(a!=null){let e=new Wt().setFromObject(n.scenePivot).min.y+Yf;if(a.point.y<=e)this.selectedXRController==null?r.attach(n.scenePivot):(this.selectedXRController.userData.line.visible=!1,n.canScale&&this.isWorldSpaceReady()&&(this.isTwoHandInteraction=!0,this.firstRatio=this.controllerSeparation()/n.scenePivot.scale.x,this.scaleLine.visible=!0)),this.selectedXRController=r,n.setShadowIntensity(.01);else if(r==this.xrController1?this.xrController1.userData.isSelected=!0:r==this.xrController2&&(this.xrController2.userData.isSelected=!0),this.xrController1?.userData.isSelected&&this.xrController2?.userData.isSelected)n.canScale&&this.isWorldSpaceReady()&&(this.isTwoHandInteraction=!0,this.firstRatio=this.controllerSeparation()/n.scenePivot.scale.x,this.scaleLine.visible=!0);else{let e=r===this.xrController1?this.xrController2:this.xrController1;r.userData.initialX=r.position.x,e.userData.turning=!1,r.userData.turning=!0,r.userData.line.visible=!1}}},this.onControllerSelectEnd=e=>{let t=e.target;if(t.userData.turning=!1,t.userData.line.visible=!0,this.isTwoHandInteraction=!1,this.scaleLine.visible=!1,t==this.xrController1?this.xrController1.userData.isSelected=!1:t==this.xrController2&&(this.xrController2.userData.isSelected=!1),this.selectedXRController!=null&&this.selectedXRController!=t)return;let n=this.presentedScene;n.attach(n.scenePivot),this.selectedXRController=null,this.goalYaw=Math.atan2(n.scenePivot.matrix.elements[8],n.scenePivot.matrix.elements[10]),this.goalPosition.x=n.scenePivot.position.x,this.goalPosition.z=n.scenePivot.position.z,this.isWorldSpaceReady()&&(this.goalPosition.y=n.scenePivot.position.y);let r=this.menuPanel;r.show=!0},this.onUpdateScene=()=>{this.placementBox!=null&&this.isPresenting&&(this.placementBox.updateFromModelChanges(),this.placementBox.setScreenSpaceMode(this.xrMode===ip.SCREEN_SPACE)),this.xrMode!==ip.SCREEN_SPACE&&(this.menuPanel&&=(this.menuPanel.dispose(),null),this.menuPanel=new jf,this.presentedScene.add(this.menuPanel),this.menuPanel.updatePosition(this.presentedScene.getCamera(),this.placementBox))},this.onSelectStart=e=>{let t=this.transientHitTestSource;if(t==null)return;let n=this.frame.getHitTestResultsForTransientInput(t),r=this.presentedScene,i=this.placementBox;if(n.length===1){this.inputSource=e.inputSource;let{axes:t}=this.inputSource.gamepad,n=i.getHit(this.presentedScene,t[0],t[1]);i.show=!0,n==null?this.placeOnWall===!1&&(this.isRotating=!0,this.lastAngle=t[0]*Pf):(this.isTranslating=!0,this.lastDragPosition.copy(n))}else if(n.length===2){i.show=!0,this.isTwoHandInteraction=!0;let{separation:e,angle:t}=this.fingerPolar(n);this.lastAngle=t,this.firstRatio===0&&(this.firstRatio=e/r.scenePivot.scale.x),r.canScale&&this.setScale(e);return}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoHandInteraction=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.onBeforeXRSelect=e=>{let t=e.composedPath();for(let n of t)if(n instanceof HTMLElement){let t=n.tagName.toLowerCase();if(t===`input`||t===`button`||t===`select`||t===`textarea`||t===`a`||n.hasAttribute(`data-pointer-coalesce`)||n.classList.contains(`interactive`)){e.preventDefault();break}}},this.threeRenderer=e.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){ds();let e=await navigator.xr.requestSession(`immersive-ar`,{requiredFeatures:[],optionalFeatures:[`hit-test`,`dom-overlay`,`light-estimation`],domOverlay:this.overlay?{root:this.overlay}:void 0});return this.threeRenderer.xr.setReferenceSpaceType(`local`),await this.threeRenderer.xr.setSession(e),this.threeRenderer.xr.cameraAutoUpdate=!1,e}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return ds(),await navigator.xr.isSessionSupported(`immersive-ar`)}catch(e){return console.warn(`Request to present in WebXR denied:`),console.warn(e),console.warn(`Falling back to next ar-mode`),!1}}async present(e,t=!1){this.isPresenting&&console.warn(`Cannot present while a model is already presenting`);let n=new Promise((e,t)=>{requestAnimationFrame(()=>e())});e.setHotspotsVisibility(!1),e.queueRender(),await n,this._presentedScene=e,this.overlay=e.element.shadowRoot.querySelector(`div.default`),this.overlay!=null&&this.overlay.addEventListener(`beforexrselect`,this.onBeforeXRSelect),t===!0&&(this.xrLight=new ru(this.threeRenderer),this.xrLight.addEventListener(`estimationstart`,()=>{if(!this.isPresenting||this.xrLight==null)return;let e=this.presentedScene;e.add(this.xrLight),e.environment=this.xrLight.environment}));let r=await this.resolveARSession();r.addEventListener(`end`,()=>{this.postSessionCleanup()},{once:!0});let i=e.element.shadowRoot.querySelector(`.slot.exit-webxr-ar-button`);i.classList.add(`enabled`),i.addEventListener(`click`,this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=i;let a=await r.requestReferenceSpace(`viewer`);this.xrMode=r.interactionMode,this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=e.yaw,this.goalYaw=e.yaw,this.goalScale=1,e.setBackground(null),this.oldShadowIntensity=e.shadowIntensity,e.setShadowIntensity(.01),this.oldTarget.copy(e.getTarget()),e.element.addEventListener(`load`,this.onUpdateScene);let o=Ff*Math.PI/180,s=this.placeOnWall===!0?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(o),z:-Math.cos(o)});r.requestHitTestSource({space:a,offsetRay:s}).then(e=>{this.initialHitSource=e}),this.xrMode!==ip.SCREEN_SPACE&&(this.setupXRControllers(),this.xDamper.setDecayTime(zf),this.yDamper.setDecayTime(zf),this.zDamper.setDecayTime(zf),this.yawDamper.setDecayTime(zf),this.pitchDamper.setDecayTime(zf),this.rollDamper.setDecayTime(zf),this.scaleDamper.setDecayTime(zf)),this.currentSession=r,this.placementBox=new uu(e,this.placeOnWall?`back`:`bottom`),this.placementBox&&this.placementBox.setScreenSpaceMode(this.xrMode===ip.SCREEN_SPACE),this.placementComplete=!1,this.xrMode!==ip.SCREEN_SPACE&&(this.menuPanel=new jf,e.add(this.menuPanel),this.menuPanel.updatePosition(e.getCamera(),this.placementBox)),this.lastTick=performance.now(),this.dispatchEvent({type:`status`,status:Xf.SESSION_STARTED})}setupXRControllerLine(e){if(!e.userData.line){let t=new _e(rp);t.name=`line`,t.scale.z=Bf,e.userData.turning=!1,e.userData.line=t,e.add(t)}}setupController(e){this.setupXRControllerLine(e),e.addEventListener(`selectstart`,this.onControllerSelectStart),e.addEventListener(`selectend`,this.onControllerSelectEnd)}setupXRControllers(){this.xrController1=this.threeRenderer.xr.getController(0),this.xrController2=this.threeRenderer.xr.getController(1),this.setupController(this.xrController1),this.setupController(this.xrController2),this.scaleLine.name=`scale line`,this.scaleLine.visible=!1,this.xrController1.add(this.scaleLine);let e=this.presentedScene;e.add(this.xrController1),e.add(this.xrController2)}hover(e){if(this.xrMode===ip.SCREEN_SPACE||this.selectedXRController==e)return!1;let t=this.presentedScene,n=this.placementBox.controllerIntersection(t,e);return e.userData.line.scale.z=n==null?Bf:n.distance,n!=null}controllerSeparation(){return this.xrController1.position.distanceTo(this.xrController2.position)}async stopPresenting(){if(!this.isPresenting)return;let e=new Promise(e=>{this.resolveCleanup=e});try{await this.currentSession.end(),await e}catch(e){console.warn(`Error while trying to end WebXR AR session`),console.warn(e),this.postSessionCleanup()}}get isPresenting(){return this.presentedScene!=null}get target(){return this.oldTarget}updateTarget(){let e=this.presentedScene;if(e!=null){let t=e.getTarget();this.oldTarget.copy(t),this.placeOnWall?t.z=e.boundingBox.min.z:t.y=e.boundingBox.min.y,e.setTarget(t.x,t.y,t.z)}}cleanupXRController(e){e.userData.turning=!1,e.userData.line.visible=!0,e.removeEventListener(`selectstart`,this.onControllerSelectStart),e.removeEventListener(`selectend`,this.onControllerSelectEnd),e.removeFromParent()}postSessionCleanup(){let e=this.currentSession;e!=null&&(e.removeEventListener(`selectstart`,this.onSelectStart),e.removeEventListener(`selectend`,this.onSelectEnd),this.currentSession=null);let t=this.presentedScene;if(this._presentedScene=null,t!=null){let{element:e}=t;this.xrLight!=null&&(t.remove(this.xrLight),this.xrLight.dispose(),this.xrLight=null),this.menuPanel!=null&&(this.menuPanel.dispose(),this.menuPanel=null),t.add(t.scenePivot),t.scenePivot.quaternion.set(0,0,0,1),t.scenePivot.position.set(0,0,0),t.scenePivot.scale.set(1,1,1),t.setShadowOffset(0);let n=this.turntableRotation;n!=null&&(t.yaw=n);let r=this.oldShadowIntensity;r!=null&&t.setShadowIntensity(r),t.setEnvironmentAndSkybox(e[ws],e[Ts]);let i=this.oldTarget;t.setTarget(i.x,i.y,i.z),t.xrCamera=null,t.element.removeEventListener(`load`,this.onUpdateScene),t.orientHotspots(0);let{width:a,height:o}=e.getBoundingClientRect();t.setSize(a,o),requestAnimationFrame(()=>{t.element.dispatchEvent(new CustomEvent(`camera-change`,{detail:{source:Cf.NONE}}))})}this.renderer.height=0;let n=this.exitWebXRButtonContainer;n!=null&&(n.classList.remove(`enabled`),n.removeEventListener(`click`,this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);let r=this.transientHitTestSource;r!=null&&(r.cancel(),this.transientHitTestSource=null);let i=this.initialHitSource;i!=null&&(i.cancel(),this.initialHitSource=null),this.placementBox!=null&&(this.placementBox.dispose(),this.placementBox=null),this.xrMode!==ip.SCREEN_SPACE&&(this.xrController1!=null&&(this.cleanupXRController(this.xrController1),this.xrController1=null),this.xrController2!=null&&(this.cleanupXRController(this.xrController2),this.xrController2=null),this.selectedXRController=null,this.scaleLine.visible=!1),this.isTranslating=!1,this.isRotating=!1,this.isTwoHandInteraction=!1,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.inputSource=null,this.overlay!=null&&(this.overlay.removeEventListener(`beforexrselect`,this.onBeforeXRSelect),this.overlay=null),this.worldSpaceInitialPlacementDone=!1,this.resolveCleanup!=null&&this.resolveCleanup(),this.dispatchEvent({type:`status`,status:Xf.NOT_PRESENTING})}updateView(e){let t=this.presentedScene,n=this.threeRenderer.xr;n.updateCamera(np),t.xrCamera=n.getCamera();let{elements:r}=t.getCamera().matrixWorld;if(t.orientHotspots(Math.atan2(r[1],r[5])),this.initialized||=(this.placeInitially(),!0),e.requestViewportScale&&e.recommendedViewportScale){let t=e.recommendedViewportScale;e.requestViewportScale(Math.max(t,Lf))}let i=n.getBaseLayer();if(i!=null){let t=i instanceof XRWebGLLayer?i.getViewport(e):n.getBinding().getViewSubImage(i,e).viewport;this.threeRenderer.setViewport(t.x,t.y,t.width,t.height)}}placeInitially(){let e=this.presentedScene,{scenePivot:t,element:n}=e,{position:r}=t,i=e.getCamera(),{width:a,height:o}=this.overlay.getBoundingClientRect();e.setSize(a,o),i.projectionMatrixInverse.copy(i.projectionMatrix).invert();let{theta:s}=n.getCameraOrbit(),c=i.getWorldDirection(Qf);if(e.yaw=Math.atan2(-c.x,-c.z)-s,this.goalYaw=e.yaw,this.xrMode===ip.WORLD_SPACE&&!this.worldSpaceInitialPlacementDone){let{position:n,scale:a}=this.calculateWorldSpaceOptimalPlacement(e,i);this.goalPosition.copy(n),this.goalScale=a,this.initialModelScale=a,r.copy(n),t.scale.set(a,a,a),this.worldSpaceInitialPlacementDone=!0,this.calculateWorldSpaceScaleLimits(e),this.enableWorldSpaceUserInteraction()}else if(this.xrMode===ip.SCREEN_SPACE){let t=Math.max(1,2*e.boundingSphere.radius);r.copy(i.position).add(c.multiplyScalar(t)),this.updateTarget();let n=e.getTarget();r.add(n).sub(this.oldTarget),this.goalPosition.copy(r)}if(e.setHotspotsVisibility(!0),this.xrMode===ip.SCREEN_SPACE){let{session:e}=this.frame;e.addEventListener(`selectstart`,this.onSelectStart),e.addEventListener(`selectend`,this.onSelectEnd),e.requestHitTestSourceForTransientInput({profile:`generic-touchscreen`}).then(e=>{this.transientHitTestSource=e})}}getTouchLocation(){let{axes:e}=this.inputSource.gamepad,t=this.placementBox.getExpandedHit(this.presentedScene,e[0],e[1]);return t!=null&&(Qf.copy(t).sub(this.presentedScene.getCamera().position),Qf.length()>Rf)?null:t}getHitPoint(e){let t=this.threeRenderer.xr.getReferenceSpace(),n=e.getPose(t);if(n==null)return null;let r=ep.fromArray(n.transform.matrix);return this.placeOnWall===!0&&(this.goalYaw=Math.atan2(r.elements[4],r.elements[6])),r.elements[5]>.75===this.placeOnWall?null:tp.setFromMatrixPosition(r)}moveToFloor(e){if(this.xrMode===ip.WORLD_SPACE&&!this.worldSpaceInitialPlacementDone){this.placementBox.show=!1,this.dispatchEvent({type:`status`,status:Xf.OBJECT_PLACED});return}let t=this.initialHitSource;if(t==null)return;let n=e.getHitTestResults(t);if(n.length==0)return;let r=n[0],i=this.getHitPoint(r);i!=null&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(i):this.goalPosition.y=i.y),t.cancel(),this.initialHitSource=null,this.dispatchEvent({type:`status`,status:Xf.OBJECT_PLACED}))}fingerPolar(e){let t=e[0].inputSource.gamepad.axes,n=e[1].inputSource.gamepad.axes,r=n[0]-t[0],i=n[1]-t[1],a=Math.atan2(i,r),o=this.lastAngle-a;return o>Math.PI?o-=2*Math.PI:o<-Math.PI&&(o+=2*Math.PI),{separation:Math.sqrt(r*r+i*i),deltaYaw:o,angle:a}}setScale(e){let t=e/this.firstRatio;t=Math.abs(t-1)<If?1:t,this.isWorldSpaceReady()&&(t=Math.max(this.minScale,Math.min(this.maxScale,t))),this.goalScale=t}processInput(e){let t=this.transientHitTestSource;if(t==null)return;let n=e.getHitTestResultsForTransientInput(t),r=this.presentedScene,i=r.scenePivot.scale.x;if(n.length===2){if(!this.wasTwoFingering){let{separation:e,angle:t}=this.fingerPolar(n);this.firstRatio=e/i,this.lastAngle=t,this.wasTwoFingering=!0,this.isTwoHandInteraction=!0;return}let{separation:e,deltaYaw:t,angle:a}=this.fingerPolar(n);this.goalYaw+=t,this.lastAngle=a,r.canScale&&this.setScale(e),this.isTwoHandInteraction=!0}else if(this.wasTwoFingering&&(this.wasTwoFingering=!1,this.isTwoHandInteraction=!1,this.firstRatio=0),this.isTranslating||this.isTwoHandInteraction||this.isRotating){if(this.isRotating){let e=this.inputSource.gamepad.axes[0]*Pf;this.goalYaw+=e-this.lastAngle,this.lastAngle=e}else this.isTranslating&&n.forEach(e=>{if(e.inputSource!==this.inputSource)return;let t=null;if(e.results.length>0&&(t=this.getHitPoint(e.results[0])),t??=this.getTouchLocation(),t!=null){if(this.goalPosition.sub(this.lastDragPosition),this.isWorldSpaceReady())this.goalPosition.add(t);else if(this.placeOnWall===!1){let e=t.y-this.lastDragPosition.y;if(e<0){this.placementBox.offsetHeight=e/i,this.presentedScene.setShadowOffset(e);let n=Qf.copy(r.getCamera().position),a=-e/(n.y-t.y);n.multiplyScalar(a),t.multiplyScalar(1-a).add(n)}this.goalPosition.add(t)}else this.goalPosition.add(t);this.lastDragPosition.copy(t)}})}}applyXRControllerRotation(e,t){if(!e.userData.turning)return;let n=(e.position.x-e.userData.initialX)*Hf;this.deltaRotation.setFromAxisAngle(Vf,n),t.quaternion.multiplyQuaternions(this.deltaRotation,t.quaternion)}handleScalingInXR(e,t){if(this.xrMode===ip.WORLD_SPACE&&!this.worldSpaceInitialPlacementDone)return;if(this.xrController1&&this.xrController2&&this.isTwoHandInteraction){let e=this.controllerSeparation();this.setScale(e),this.scaleLine.scale.z=-e,this.scaleLine.lookAt(this.xrController2.position)}let n=e.scenePivot.scale.x;if(this.goalScale!==n){let r=this.scaleDamper.update(n,this.goalScale,t,1);e.scenePivot.scale.set(r,r,r)}}updatePivotPosition(e,t){let{scenePivot:n}=e,r=this.placementBox,i=e.boundingSphere.radius,a=this.goalPosition,o=n.position,s=Cf.NONE;if(!a.equals(o)){s=Cf.USER_INTERACTION;let{x:n,y:c,z:l}=o;if(n=this.xDamper.update(n,a.x,t,i),c=this.yDamper.update(c,a.y,t,i),l=this.zDamper.update(l,a.z,t,i),o.set(n,c,l),this.xrMode===ip.SCREEN_SPACE&&!this.isTranslating){let t=a.y-c;this.placementComplete&&this.placeOnWall===!1?(r.offsetHeight=t/e.scenePivot.scale.x,e.setShadowOffset(t)):t===0&&(this.placementComplete=!0,r.show=!1,e.setShadowIntensity(Nf))}this.xrMode!==ip.SCREEN_SPACE&&a.equals(o)&&e.setShadowIntensity(Nf),this.isWorldSpaceReady()&&e.setShadowIntensity(Nf)}if(this.xrMode===ip.WORLD_SPACE&&!this.worldSpaceInitialPlacementDone&&this.goalScale!==n.scale.x){let e=this.scaleDamper.update(n.scale.x,this.goalScale,t,1);n.scale.set(e,e,e)}return e.updateTarget(t),s}updateYaw(e,t){$f.setFromAxisAngle(Qf.set(0,1,0),this.goalYaw);let n=e.scenePivot.quaternion.angleTo($f),r=n-this.yawDamper.update(n,0,t,Math.PI);e.scenePivot.quaternion.rotateTowards($f,r)}updateMenuPanel(e,t,n){this.menuPanel&&(this.menuPanel.updateOpacity(n),this.menuPanel.updatePosition(e.getCamera(),t))}applyXRInputToScene(e){let t=this.presentedScene,n=t.scenePivot,r=this.placementBox;if(this.updatePlacementBoxOpacity(r,e),this.updateTwoHandInteractionState(),this.applyXRControllerRotations(n),this.handleScalingInXR(t,e),n.parent!==t){this.updateMenuPanel(t,r,e);return}let i=this.updatePivotPosition(t,e);this.updateYaw(t,e),this.dispatchCameraChangeEvent(t,i),this.updateMenuPanel(t,r,e)}updatePlacementBoxOpacity(e,t){let n=this.presentedScene.getCamera();e.update(t,n.position);let r=this.hover(this.xrController1),i=this.hover(this.xrController2),a=(r||i)&&!this.isTwoHandInteraction;e.setInteractionState(this.isTranslating||this.isRotating,a)}updateTwoHandInteractionState(){let e=this.xrController1?.userData.isSelected&&this.xrController2?.userData.isSelected;this.isTwoHandInteraction=!!e}applyXRControllerRotations(e){this.isTwoHandInteraction||(this.xrController1&&this.applyXRControllerRotation(this.xrController1,e),this.xrController2&&this.applyXRControllerRotation(this.xrController2,e))}dispatchCameraChangeEvent(e,t){e.element.dispatchEvent(new CustomEvent(`camera-change`,{detail:{source:t}}))}updateXRControllerHover(){let e=this.hover(this.xrController1),t=this.hover(this.xrController2),n=(e||t)&&!this.isTwoHandInteraction;this.placementBox&&(this.placementBox.setInteractionState(this.isTranslating||this.isRotating,n),this.placementBox.show=n)}enableWorldSpaceUserInteraction(){this.placementBox&&(this.placementBox.show=!0),this.presentedScene&&this.presentedScene.setShadowIntensity(Nf)}handleFirstView(e,t){(this.xrMode!==ip.WORLD_SPACE||!this.worldSpaceInitialPlacementDone)&&this.moveToFloor(e),this.processInput(e);let n=t-this.lastTick;this.applyXRInputToScene(n),this.renderer.preRender(this.presentedScene,t,n),this.lastTick=t,this.presentedScene.renderShadow(this.threeRenderer)}onWebXRFrame(e,t){this.xrMode!==ip.SCREEN_SPACE&&this.updateXRControllerHover(),this.frame=t,++this.frames;let n=this.threeRenderer.xr.getReferenceSpace(),r=t.getViewerPose(n);r==null&&this.tracking===!0&&this.frames>Mf&&(this.tracking=!1,this.dispatchEvent({type:`tracking`,status:Zf.NOT_TRACKING}));let i=this.presentedScene;if(r==null||i==null||!i.element.loaded){this.threeRenderer.clear();return}this.tracking===!1&&(this.tracking=!0,this.dispatchEvent({type:`tracking`,status:Zf.TRACKING}));let a=!0;for(let n of r.views)this.updateView(n),a&&=(this.handleFirstView(t,e),!1),this.threeRenderer.render(i,i.getCamera())}calculateWorldSpaceOptimalPlacement(e,t){let n=e.boundingBox,r={x:(n.max.x-n.min.x)/2,y:(n.max.y-n.min.y)/2,z:(n.max.z-n.min.z)/2},i=Kf,a=Math.max(1.65,2*Math.max(r.x,r.z)+i),o=Uf*Math.PI/180,s=new U(0,-a*Math.sin(o),-a*Math.cos(o)),c=t.matrixWorld,l=s.clone().applyMatrix4(c),u=Math.max(r.x,r.z)+i,d=r.y,f=a*Wf,p=a*Wf/Math.max(d,Gf),m=f/Math.max(u,Gf),h=Math.min(p,m);return{position:l.clone().sub(new U(0,h*r.y,0)),scale:h}}calculateWorldSpaceScaleLimits(e){let t=e.size,n=Math.max(t.x,t.y,t.z),r=Math.max(Math.min(t.x,t.y,t.z),Jf),i=Gf/Math.max(n,Jf),a=qf/Math.max(r,Jf);this.minScale=Math.min(i,a,this.goalScale),this.maxScale=Math.max(i,a,this.goalScale)}},op=Symbol(`prepared`),sp=Symbol(`prepare`),cp=Symbol(`preparedGLTF`),lp=Symbol(`clone`),up=class{static prepare(e){if(e.scene==null)throw Error(`Model does not have a scene`);if(e[op])return e;let t=this[sp](e);return t[op]=!0,t}static[sp](e){let{scene:t}=e,n=[t];return Object.assign(Object.assign({},e),{scene:t,scenes:n})}get parser(){return this[cp].parser}get animations(){return this[cp].animations}get scene(){return this[cp].scene}get scenes(){return this[cp].scenes}get cameras(){return this[cp].cameras}get asset(){return this[cp].asset}get userData(){return this[cp].userData}constructor(e){this[cp]=e}clone(){let e=this.constructor;return new e(this[lp]())}dispose(){this.scenes.forEach(e=>{e.traverse(e=>{let t=e;t.material&&((Array.isArray(t.material)?t.material:[t.material]).forEach(e=>{for(let t in e){let n=e[t];if(n instanceof zt){let e=n.source.data;e.close!=null&&e.close(),n.dispose()}}e.dispose()}),t.geometry.dispose())})})}[lp](){let e=this[cp],t=Rs(this.scene);dp(t,this.scene);let n=[t],r=e.userData?Object.assign({},e.userData):{};return Object.assign(Object.assign({},e),{scene:t,scenes:n,userData:r})}},dp=(e,t)=>{fp(e,t,(e,t)=>{t.userData.variantMaterials!==void 0&&(e.userData.variantMaterials=new Map(t.userData.variantMaterials)),t.userData.variantData!==void 0&&(e.userData.variantData=t.userData.variantData),t.userData.originalMaterial!==void 0&&(e.userData.originalMaterial=t.userData.originalMaterial)})},fp=(e,t,n)=>{n(e,t);for(let r=0;r<e.children.length;r++)fp(e.children[r],t.children[r],n)},pp=Symbol(`threeGLTF`),mp=Symbol(`gltf`),hp=Symbol(`gltfElementMap`),gp=Symbol(`threeObjectMap`),_p=Symbol(`parallelTraverseThreeScene`),vp=Symbol(`correlateOriginalThreeGLTF`),yp=Symbol(`correlateCloneThreeGLTF`),bp=class e{static from(e,t){return t==null?this[vp](e):this[yp](e,t)}static[vp](t){let n=t.parser.json,r=t.parser.associations,i=new Map,a={name:`Default`},o={type:`materials`,index:-1};for(let e of r.keys())e instanceof Ot&&r.get(e)==null&&(o.index<0&&(n.materials??=[],o.index=n.materials.length,n.materials.push(a)),e.name=a.name,r.set(e,{materials:o.index}));for(let[e,t]of r){t&&(e.userData=e.userData||{},e.userData.associations=t);for(let r in t)if(r!=null&&r!==`primitives`){let a=r,o=(n[a]||[])[t[a]];if(o==null)continue;let s=i.get(o);s??(s=new Set,i.set(o,s)),s.add(e)}}return new e(t,n,r,i)}static[yp](t,n){let r=n.threeGLTF,i=n.gltf,a=JSON.parse(JSON.stringify(i)),o=new Map,s=new Map;for(let e=0;e<r.scenes.length;e++)this[_p](r.scenes[e],t.scenes[e],(e,t)=>{let r=n.threeObjectMap.get(e);if(r!=null){for(let e in r)if(e!=null&&e!==`primitives`){let n=e,i=r[n],c=a[n][i],l=o.get(t)||{};l[n]=i,o.set(t,l);let u=s.get(c)||new Set;u.add(t),s.set(c,u)}}});return new e(t,a,o,s)}static[_p](e,t,n){let r=(e,t)=>{if(n(e,t),e.isObject3D){let i=e,a=t;if(i.material){if(Array.isArray(i.material))for(let e=0;e<i.material.length;++e)n(i.material[e],a.material[e]);else n(i.material,a.material)}for(let n=0;n<e.children.length;++n)r(e.children[n],t.children[n])}};r(e,t)}get threeGLTF(){return this[pp]}get gltf(){return this[mp]}get gltfElementMap(){return this[hp]}get threeObjectMap(){return this[gp]}constructor(e,t,n,r){this[pp]=e,this[mp]=t,this[hp]=r,this[gp]=n}},xp=Symbol(`correlatedSceneGraph`),Sp=class extends up{static[sp](e){let t=super[sp](e);t[xp]??(t[xp]=bp.from(t));let{scene:n}=t,r=new R(void 0,1/0);return n.traverse(e=>{e.renderOrder=1e3,e.frustumCulled=!1,e.name||=e.uuid;let n=e;if(n.material){let{geometry:e}=n;n.castShadow=!0,n.isSkinnedMesh&&(e.boundingSphere=r,e.boundingBox=null);let i=n.material;if(i.isMeshBasicMaterial===!0&&(i.toneMapped=!1),i.shadowSide=0,i.aoMap){let{gltf:n,threeObjectMap:r}=t[xp],a=r.get(i);if(n.materials!=null&&a!=null&&a.materials!=null){let t=n.materials[a.materials];t.occlusionTexture&&t.occlusionTexture.texCoord===0&&e.attributes.uv!=null&&e.setAttribute(`uv2`,e.attributes.uv)}}}}),t}get correlatedSceneGraph(){return this[cp][xp]}[lp](){let e=super[lp](),t=new Map;return e.scene.traverse(e=>{let n=e;if(n.material){let e=n.material;if(e!=null){if(t.has(e.uuid)){n.material=t.get(e.uuid);return}n.material=e.clone(),t.set(e.uuid,n.material)}}let r=e;r.target!==void 0&&r.add(r.target)}),e[xp]=bp.from(e,this.correlatedSceneGraph),e}},Cp=(e,t,n)=>{let r;switch(e){case V:r=new Uint8ClampedArray(t*n*4);break;case s:r=new Uint16Array(t*n*4);break;case ht:r=new Uint32Array(t*n*4);break;case et:r=new Int8Array(t*n*4);break;case c:r=new Int16Array(t*n*4);break;case Ae:r=new Int32Array(t*n*4);break;case A:r=new Float32Array(t*n*4);break;default:throw Error(`Unsupported data type`)}return r},wp,Tp=(e,t,n,r)=>{if(wp!==void 0)return wp;let i=new Dt(1,1,r);t.setRenderTarget(i);let a=new an(new ue,new gn({color:16777215}));t.render(a,n),t.setRenderTarget(null);let o=Cp(e,i.width,i.height);return t.readRenderTargetPixels(i,0,0,i.width,i.height,o),i.dispose(),a.geometry.dispose(),a.material.dispose(),wp=o[0]!==0,wp},Ep=class e{_renderer;_rendererIsDisposable=!1;_material;_scene;_camera;_quad;_renderTarget;_width;_height;_type;_colorSpace;_supportsReadPixels=!0;constructor(t){this._width=t.width,this._height=t.height,this._type=t.type,this._colorSpace=t.colorSpace;let n={format:E,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:t.renderTargetOptions?.anisotropy===void 0?1:t.renderTargetOptions?.anisotropy,generateMipmaps:t.renderTargetOptions?.generateMipmaps!==void 0&&t.renderTargetOptions?.generateMipmaps,magFilter:t.renderTargetOptions?.magFilter===void 0?At:t.renderTargetOptions?.magFilter,minFilter:t.renderTargetOptions?.minFilter===void 0?At:t.renderTargetOptions?.minFilter,samples:t.renderTargetOptions?.samples===void 0?void 0:t.renderTargetOptions?.samples,wrapS:t.renderTargetOptions?.wrapS===void 0?Pt:t.renderTargetOptions?.wrapS,wrapT:t.renderTargetOptions?.wrapT===void 0?Pt:t.renderTargetOptions?.wrapT};if(this._material=t.material,t.renderer?this._renderer=t.renderer:(this._renderer=e.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new ee,this._camera=new o,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!Tp(this._type,this._renderer,this._camera,n)){let e;switch(this._type){case s:e=this._renderer.extensions.has(`EXT_color_buffer_float`)?A:void 0}e===void 0?(this._supportsReadPixels=!1,console.warn(`This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown`)):(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${A}`),this._type=e)}this._quad=new an(new ue,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new Dt(this.width,this.height,n),this._renderTarget.texture.mapping=t.renderTargetOptions?.mapping===void 0?300:t.renderTargetOptions?.mapping}static instantiateRenderer(){let e=new Xo;return e.setSize(128,128),e}render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(e){throw this._renderer.setRenderTarget(null),e}this._renderer.setRenderTarget(null)};toArray(){if(!this._supportsReadPixels)throw Error(`Can't read pixels in this browser`);let e=Cp(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,e),e}toDataTexture(e){let t=new on(this.toArray(),this.width,this.height,E,this._type,e?.mapping||300,e?.wrapS||1001,e?.wrapT||1001,e?.magFilter||1006,e?.minFilter||1006,e?.anisotropy||1,Nt);return t.generateMipmaps=e?.generateMipmaps!==void 0&&e?.generateMipmaps,t}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(e){this.disposeOnDemandRenderer(),e&&this.renderTarget.dispose(),this.material instanceof N&&Object.values(this.material.uniforms).forEach(e=>{e.value instanceof zt&&e.value.dispose()}),Object.values(this.material).forEach(e=>{e instanceof zt&&e.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(e){this._width=e,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(e){this._height=e,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(e){this._renderTarget=e,this._width=e.width,this._height=e.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}},Dp=`urn:iso:std:iso:ts:21496:-1\0`,Op=128,kp=8,Ap=4,jp=e=>{let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=0,r=()=>{let e=t.getUint16(n);return n+=2,e},i=()=>{let e=t.getUint32(n);return n+=4,e},a=()=>{let e=t.getInt32(n);return n+=4,e},o=r();if(o!==0)throw Error(`Unsupported ISO 21496-1 minimum_version ${o}`);r();let s=t.getUint8(n++);if(s&Ap)throw Error(`ISO 21496-1 metadata with HDR base image is not supported`);let c=s&Op?3:1,l=s&kp?i():void 0,u=e=>{let t=e?a():i(),n=l??i();if(n===0)throw Error(`Invalid ISO 21496-1 fraction with zero denominator`);return t/n},d=u(!1),f=u(!1);if(d>f)throw Error(`ISO 21496-1 metadata with HDR base image is not supported`);let p=[],m=[],h=[],g=[],_=[];for(let e=0;e<c;e++)p.push(u(!0)),m.push(u(!0)),h.push(u(!1)),g.push(u(!0)),_.push(u(!0));let v=e=>c===3?e:[e[0],e[0],e[0]];return{gainMapMin:v(p),gainMapMax:v(m),gamma:v(h),offsetSdr:v(g),offsetHdr:v(_),hdrCapacityMin:d,hdrCapacityMax:f}},Mp=class extends Error{},Np=class extends Error{},Pp=Array.from(Dp,e=>e.charCodeAt(0)),Fp=e=>{let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=4+Pp.length;for(let r=0;r+n<e.length;r++){if(e[r]!==255||e[r+1]!==226||!Pp.every((t,n)=>e[r+4+n]===t))continue;let i=Math.min(e.length,r+2+t.getUint16(r+2));if(!(i-(r+n)<=4))try{return jp(e.subarray(r+n,i))}catch{return}}},Ip=(e,t,n)=>{let r=RegExp(`${t}="([^"]*)"`,`i`).exec(e);if(r)return r[1];let i=RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`,`i`).exec(e);if(i){let e=i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);return e&&e.length===3?e.map(e=>e.replace(/<\/?rdf:li>/g,``)):i[1].trim()}if(n!==void 0)return n;throw Error(`Can't find ${t} in gainmap metadata`)},Lp=e=>{let t;t=typeof TextDecoder<`u`?new TextDecoder().decode(e):e.toString();let n=t.indexOf(`<x:xmpmeta`);for(;n!==-1;){let e=t.indexOf(`x:xmpmeta>`,n),r=t.slice(n,e+10);try{let e=Ip(r,`hdrgm:GainMapMin`,`0`),t=Ip(r,`hdrgm:GainMapMax`),n=Ip(r,`hdrgm:Gamma`,`1`),i=Ip(r,`hdrgm:OffsetSDR`,`0.015625`),a=Ip(r,`hdrgm:OffsetHDR`,`0.015625`),o=/hdrgm:HDRCapacityMin="([^"]*)"/.exec(r),s=o?o[1]:`0`,c=/hdrgm:HDRCapacityMax="([^"]*)"/.exec(r);if(!c)throw Error(`Incomplete gainmap metadata`);let l=c[1];return{gainMapMin:Array.isArray(e)?e.map(e=>parseFloat(e)):[parseFloat(e),parseFloat(e),parseFloat(e)],gainMapMax:Array.isArray(t)?t.map(e=>parseFloat(e)):[parseFloat(t),parseFloat(t),parseFloat(t)],gamma:Array.isArray(n)?n.map(e=>parseFloat(e)):[parseFloat(n),parseFloat(n),parseFloat(n)],offsetSdr:Array.isArray(i)?i.map(e=>parseFloat(e)):[parseFloat(i),parseFloat(i),parseFloat(i)],offsetHdr:Array.isArray(a)?a.map(e=>parseFloat(e)):[parseFloat(a),parseFloat(a),parseFloat(a)],hdrCapacityMin:parseFloat(s),hdrCapacityMax:parseFloat(l)}}catch{}n=t.indexOf(`<x:xmpmeta`,e)}},Rp=class{options;constructor(e){this.options={debug:e&&e.debug!==void 0?e.debug:!1,extractFII:e&&e.extractFII!==void 0?e.extractFII:!0,extractNonFII:e&&e.extractNonFII!==void 0?e.extractNonFII:!0}}extract(e){return new Promise((t,n)=>{let r=this.options.debug,i=new DataView(e.buffer);if(i.getUint16(0)!==65496){n(Error(`Not a valid jpeg`));return}let a=i.byteLength,o=2,s=0,c;for(;o<a;){if(++s>250){n(Error(`Found no marker after ${s} loops 😵`));return}if(i.getUint8(o)!==255){n(Error(`Not a valid marker at offset 0x${o.toString(16)}, found: 0x${i.getUint8(o).toString(16)}`));return}if(c=i.getUint8(o+1),r&&console.log(`Marker: ${c.toString(16)}`),c===226){r&&console.log(`Found APP2 marker (0xffe2)`);let e=o+4;if(i.getUint32(e)===1297106432){let r=e+4,a;if(i.getUint16(r)===18761)a=!1;else if(i.getUint16(r)===19789)a=!0;else{n(Error(`No valid endianness marker found in TIFF header`));return}if(i.getUint16(r+2,!a)!==42){n(Error(`Not valid TIFF data! (no 0x002A marker)`));return}let o=i.getUint32(r+4,!a);if(o<8){n(Error(`Not valid TIFF data! (First offset less than 8)`));return}let s=r+o,c=i.getUint16(s,!a),l=s+2,u=0;for(let e=l;e<l+12*c;e+=12)i.getUint16(e,!a)===45057&&(u=i.getUint32(e+8,!a));let d=s+2+c*12+4,f=[];for(let e=d;e<d+u*16;e+=16){let t={MPType:i.getUint32(e,!a),size:i.getUint32(e+4,!a),dataOffset:i.getUint32(e+8,!a),dependantImages:i.getUint32(e+12,!a),start:-1,end:-1,isFII:!1};t.dataOffset?(t.start=r+t.dataOffset,t.isFII=!1):(t.start=0,t.isFII=!0),t.end=t.start+t.size,f.push(t)}if(this.options.extractNonFII&&f.length){let e=new Blob([i]),n=[];for(let t of f){if(t.isFII&&!this.options.extractFII)continue;let r=e.slice(t.start,t.end+1,`image/jpeg`);n.push(r)}t(n)}}}o+=2+i.getUint16(o+2)}})}},zp=async e=>{let t=Fp(e)??Lp(e);if(!t)throw new Np(`Gain map XMP metadata not found`);let n=await new Rp({extractFII:!0,extractNonFII:!0}).extract(e);if(n.length!==2)throw new Mp(`Gain map recovery image not found`);return{sdr:new Uint8Array(await n[0].arrayBuffer()),gainMap:new Uint8Array(await n[1].arrayBuffer()),metadata:t}},Bp=e=>new Promise((t,n)=>{let r=document.createElement(`img`);r.onload=()=>{t(r)},r.onerror=e=>{n(e)},r.src=URL.createObjectURL(e)}),Vp=async(e,t,n)=>{let r=t?new Blob([t],{type:`image/jpeg`}):void 0,i=new Blob([e],{type:`image/jpeg`}),a,o,s=!1;if(typeof createImageBitmap>`u`){let e=await Promise.all([r?Bp(r):Promise.resolve(void 0),Bp(i)]);o=e[0],a=e[1],s=n===`flipY`}else{let e=await Promise.all([r?createImageBitmap(r,{imageOrientation:n||`flipY`}):Promise.resolve(void 0),createImageBitmap(i,{imageOrientation:n||`flipY`})]);o=e[0],a=e[1]}return{sdrImage:a,gainMapImage:o,needsFlip:s}},Hp=(e,t,n)=>{let r=new zt(t||new ImageData(2,2),300,Pt,Pt,At,Ut,E,V,1,Nt);r.flipY=n,r.needsUpdate=!0;let i=new zt(e,300,Pt,Pt,At,Ut,E,V,1,he);return i.flipY=n,i.needsUpdate=!0,{gainMap:r,sdr:i}},Up=class extends $e{_renderer;_renderTargetOptions;_internalLoadingManager;_config;constructor(e,t){super(t),this._config=e,e.renderer&&(this._renderer=e.renderer),this._internalLoadingManager=new en}setRenderer(e){return this._renderer=e,this}setRenderTargetOptions(e){return this._renderTargetOptions=e,this}prepareQuadRenderer(){this._renderer||console.warn(`WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.`);let e=this._config.createMaterial({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new zt,sdr:new zt});return this._config.createQuadRenderer({width:16,height:16,type:s,colorSpace:Nt,material:e,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}processImages(e,t,n){return Vp(e,t,n)}createTextures(e,t,n){return Hp(e,t,n)}updateQuadRenderer(e,t,n,r,i){e.width=t.width,e.height=t.height,e.material.gainMap=n,e.material.sdr=r,e.material.gainMapMin=i.gainMapMin,e.material.gainMapMax=i.gainMapMax,e.material.offsetHdr=i.offsetHdr,e.material.offsetSdr=i.offsetSdr,e.material.gamma=i.gamma,e.material.hdrCapacityMin=i.hdrCapacityMin,e.material.hdrCapacityMax=i.hdrCapacityMax,e.material.maxDisplayBoost=2**i.hdrCapacityMax,e.material.needsUpdate=!0}},Wp=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Gp=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`,Kp=class extends N{_maxDisplayBoost;_hdrCapacityMin;_hdrCapacityMax;constructor({gamma:e,offsetHdr:t,offsetSdr:n,gainMapMin:r,gainMapMax:i,maxDisplayBoost:a,hdrCapacityMin:o,hdrCapacityMax:s,sdr:c,gainMap:l}){super({name:`GainMapDecoderMaterial`,vertexShader:Wp,fragmentShader:Gp,uniforms:{sdr:{value:c},gainMap:{value:l},gamma:{value:new U(1/e[0],1/e[1],1/e[2])},offsetHdr:{value:new U().fromArray(t)},offsetSdr:{value:new U().fromArray(n)},gainMapMin:{value:new U().fromArray(r)},gainMapMax:{value:new U().fromArray(i)},weightFactor:{value:(Math.log2(a)-o)/(s-o)}},blending:0,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=a,this._hdrCapacityMin=o,this._hdrCapacityMax=s,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(e){this.uniforms.sdr.value=e}get gainMap(){return this.uniforms.gainMap.value}set gainMap(e){this.uniforms.gainMap.value=e}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(e){this.uniforms.offsetHdr.value.fromArray(e)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(e){this.uniforms.offsetSdr.value.fromArray(e)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(e){this.uniforms.gainMapMin.value.fromArray(e)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(e){this.uniforms.gainMapMax.value.fromArray(e)}get gamma(){let e=this.uniforms.gamma.value;return[1/e.x,1/e.y,1/e.z]}set gamma(e){let t=this.uniforms.gamma.value;t.x=1/e[0],t.y=1/e[1],t.z=1/e[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(e){this._hdrCapacityMin=e,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(e){this._hdrCapacityMax=e,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(e){this._maxDisplayBoost=Math.max(1,Math.min(65504,e)),this.calculateWeight()}calculateWeight(){let e=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,e))}},qp=class extends Up{constructor(e,t){super({renderer:e,createMaterial:e=>new Kp(e),createQuadRenderer:e=>new Ep(e)},t)}async render(e,t,n,r){let{sdrImage:i,gainMapImage:a,needsFlip:o}=await this.processImages(n,r,`flipY`),{gainMap:s,sdr:c}=this.createTextures(i,a,o);this.updateQuadRenderer(e,i,s,c,t),e.render()}},Jp=class extends qp{load(e,t,n,r){let i=this.prepareQuadRenderer(),a=new me(this._internalLoadingManager);return a.setResponseType(`arraybuffer`),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),this.manager.itemStart(e),a.load(e,async n=>{if(typeof n==`string`)throw Error(`Invalid buffer, received [string], was expecting [ArrayBuffer]`);let a=new Uint8Array(n),o,s,c;try{let e=await zp(a);o=e.sdr,s=e.gainMap,c=e.metadata}catch(t){if(t instanceof Np||t instanceof Mp)console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),c={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},o=a;else throw t}try{await this.render(i,c,o.buffer,s?.buffer)}catch(t){this.manager.itemError(e),typeof r==`function`&&r(t),i.disposeOnDemandRenderer();return}typeof t==`function`&&t(i),this.manager.itemEnd(e),i.disposeOnDemandRenderer()},n,t=>{this.manager.itemError(e),typeof r==`function`&&r(t)}),i}},Yp=class extends I{constructor(e){super(e),this.type=s}parse(e){let t=function(e,t){switch(e){case 1:throw Error(`THREE.HDRLoader: Read Error: `+(t||``));case 2:throw Error(`THREE.HDRLoader: Write Error: `+(t||``));case 3:throw Error(`THREE.HDRLoader: Bad File Format: `+(t||``));default:case 4:throw Error(`THREE.HDRLoader: Memory Error: `+(t||``))}},n=function(e,t,n){t||=1024;let r=e.pos,i=-1,a=0,o=``,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=s.indexOf(`
`))&&a<t&&r<e.byteLength;)o+=s,a+=s.length,r+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i&&(!1!==n&&(e.pos+=a+i+1),o+s.slice(0,i))},r=function(e){let r=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:``,comments:``,programtype:`RGBE`,format:``,gamma:1,exposure:1,width:0,height:0},l,u;for((e.pos>=e.byteLength||!(l=n(e)))&&t(1,`no header found`),(u=l.match(r))||t(3,`bad initial token`),c.valid|=1,c.programtype=u[1],c.string+=l+`
`;l=n(e),!1!==l;)if(c.string+=l+`
`,l.charAt(0)===`#`)c.comments+=l+`
`;else if((u=l.match(i))&&(c.gamma=parseFloat(u[1])),(u=l.match(a))&&(c.exposure=parseFloat(u[1])),(u=l.match(o))&&(c.valid|=2,c.format=u[1]),(u=l.match(s))&&(c.valid|=4,c.height=parseInt(u[1],10),c.width=parseInt(u[2],10)),c.valid&2&&c.valid&4)break;return c.valid&2||t(3,`missing format specifier`),c.valid&4||t(3,`missing image size specifier`),c},i=function(e,n,r){let i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);i!==(e[2]<<8|e[3])&&t(3,`wrong scanline width`);let a=new Uint8Array(4*n*r);a.length||t(4,`unable to allocate buffer space`);let o=0,s=0,c=4*i,l=new Uint8Array(4),u=new Uint8Array(c),d=r;for(;d>0&&s<e.byteLength;){s+4>e.byteLength&&t(1),l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],(l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=i)&&t(3,`bad rgbe scanline format`);let n=0,r;for(;n<c&&s<e.byteLength;){r=e[s++];let i=r>128;if(i&&(r-=128),(r===0||n+r>c)&&t(3,`bad scanline data`),i){let t=e[s++];for(let e=0;e<r;e++)u[n++]=t}else u.set(e.subarray(s,s+r),n),n+=r,s+=r}let f=i;for(let e=0;e<f;e++){let t=0;a[o]=u[e+t],t+=i,a[o+1]=u[e+t],t+=i,a[o+2]=u[e+t],t+=i,a[o+3]=u[e+t],o+=4}d--}return a},a=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},o=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=_.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=_.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=_.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=_.toHalfFloat(1)},c=new Uint8Array(e);c.pos=0;let l=r(c),u=l.width,d=l.height,f=i(c.subarray(c.pos),u,d),p,m,h;switch(this.type){case A:h=f.length/4;let e=new Float32Array(h*4);for(let t=0;t<h;t++)a(f,t*4,e,t*4);p=e,m=A;break;case s:h=f.length/4;let t=new Uint16Array(h*4);for(let e=0;e<h;e++)o(f,e*4,t,e*4);p=t,m=s;break;default:throw Error(`THREE.HDRLoader: Unsupported type: `+this.type)}return{width:u,height:d,data:p,header:l.string,gamma:l.gamma,exposure:l.exposure,type:m}}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(e,n){switch(e.type){case A:case s:e.colorSpace=Nt,e.minFilter=At,e.magFilter=At,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,n)}return super.load(e,i,n,r)}},Xp=class extends Yp{constructor(e){console.warn(`RGBELoader has been deprecated. Please use HDRLoader instead.`),super(e)}},Zp={topLight:{intensity:500,position:[.418,16.199,.3]},room:{position:[-.757,13.219,.717],scale:[31.713,28.305,28.591]},boxes:[{position:[-10.906,2.009,1.846],rotation:-.195,scale:[2.328,7.905,4.651]},{position:[-5.607,-.754,-.758],rotation:.994,scale:[1.97,1.534,3.955]},{position:[6.167,.857,7.803],rotation:.561,scale:[3.927,6.285,3.687]},{position:[-2.017,.018,6.124],rotation:.333,scale:[2.002,4.566,2.064]},{position:[2.291,-.756,-2.621],rotation:-.286,scale:[1.546,1.552,1.496]},{position:[-2.193,-.369,-5.547],rotation:.516,scale:[3.875,3.487,2.986]}],lights:[{intensity:50,position:[-16.116,14.37,8.208],scale:[.1,2.428,2.739]},{intensity:50,position:[-16.109,18.021,-8.207],scale:[.1,2.425,2.751]},{intensity:17,position:[14.904,12.198,-1.832],scale:[.15,4.265,6.331]},{intensity:43,position:[-.462,8.89,14.52],scale:[4.38,5.441,.088]},{intensity:20,position:[3.235,11.486,-12.541],scale:[2.5,2,.1]},{intensity:100,position:[0,20,0],scale:[1,.1,1]}]},Qp={topLight:{intensity:400,position:[.5,14,.5]},room:{position:[0,13.2,0],scale:[31.5,28.5,31.5]},boxes:[{position:[-10.906,-1,1.846],rotation:-.195,scale:[2.328,7.905,4.651]},{position:[-5.607,-.754,-.758],rotation:.994,scale:[1.97,1.534,3.955]},{position:[6.167,-.16,7.803],rotation:.561,scale:[3.927,6.285,3.687]},{position:[-2.017,.018,6.124],rotation:.333,scale:[2.002,4.566,2.064]},{position:[2.291,-.756,-2.621],rotation:-.286,scale:[1.546,1.552,1.496]},{position:[-2.193,-.369,-5.547],rotation:.516,scale:[3.875,3.487,2.986]}],lights:[{intensity:80,position:[-14,10,8],scale:[.1,2.5,2.5]},{intensity:80,position:[-14,14,-4],scale:[.1,2.5,2.5]},{intensity:23,position:[14,12,0],scale:[.1,5,5]},{intensity:16,position:[0,9,14],scale:[5,5,.1]},{intensity:80,position:[7,8,-14],scale:[2.5,2.5,.1]},{intensity:80,position:[-7,16,-14],scale:[2.5,2.5,.1]},{intensity:1,position:[0,20,0],scale:[.1,.1,.1]}]},$p=class extends ee{constructor(e){super(),this.position.y=-3.5;let t=new Xe;t.deleteAttribute(`uv`);let n=new p({metalness:0,side:1}),r=new p({metalness:0}),i=e==`legacy`?Zp:Qp,a=new ge(16777215,i.topLight.intensity,28,2);a.position.set(...i.topLight.position),this.add(a);let o=new an(t,n);o.position.set(...i.room.position),o.scale.set(...i.room.scale),this.add(o);for(let e of i.boxes){let n=new an(t,r);n.position.set(...e.position),n.rotation.set(0,e.rotation,0),n.scale.set(...e.scale),this.add(n)}for(let e of i.lights){let n=new an(t,this.createAreaLightMaterial(e.intensity));n.position.set(...e.position),n.scale.set(...e.scale),this.add(n)}}createAreaLightMaterial(e){let t=new gn;return t.color.setScalar(e),t}},em=.04,tm=20,nm=/\.hdr(\.js)?$/,rm=/\.ktx2(\?|#|$)/,im=class{constructor(e){this.threeRenderer=e,this.lottieLoaderUrl=``,this._ldrLoader=null,this._imageLoader=null,this._hdrLoader=null,this._lottieLoader=null,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}ldrLoader(e){return this._ldrLoader??=new te,this._ldrLoader.setWithCredentials(e),this._ldrLoader}imageLoader(e){return this._imageLoader??=new Jp(this.threeRenderer),this._imageLoader.setWithCredentials(e),this._imageLoader}hdrLoader(e){return this._hdrLoader??(this._hdrLoader=new Xp,this._hdrLoader.setDataType(s)),this._hdrLoader.setWithCredentials(e),this._hdrLoader}async getLottieLoader(t){if(this._lottieLoader==null){let{LottieLoader:t}=await e(async()=>{let{LottieLoader:e}=await import(this.lottieLoaderUrl);return{LottieLoader:e}},[]);this._lottieLoader=new t}return this._lottieLoader.setWithCredentials(t),this._lottieLoader}async loadImage(e,t,n){if(n===`image/ktx2`||rm.test(e))return this.loadKTX2(e,t);let r=await new Promise((n,r)=>this.ldrLoader(t).load(e,n,()=>{},r));return r.name=e,r.flipY=!1,r}async loadKTX2(e,t){Nl.setWithCredentials(t);let n=await new Promise((t,n)=>Nl.load(e,t,()=>{},n));return n.name=e,n.flipY=!1,n}async loadLottie(e,t,n){let r=await this.getLottieLoader(n);r.setQuality(t);let i=await new Promise((t,n)=>r.load(e,t,()=>{},n));return i.name=e,i}async loadEquirect(e,t=!1,n=()=>{}){try{let r=nm.test(e),i=r?this.hdrLoader(t):this.imageLoader(t),a=await new Promise((t,r)=>i.load(e,e=>{let{renderTarget:n}=e;if(n!=null){let r;try{let t=e.toDataTexture();t.needsUpdate=!0;let i=t.image.data,a=!1,o=i.length;for(let e=0;e<o;e++)if(i[e]!==0){a=!0;break}a?(r=t,e.dispose(!0)):(console.warn(`Decoded DataTexture is completely black, falling back to render target texture.`),r=n.texture,e.dispose(!1))}catch(t){console.warn(`Failed to convert gainmap to DataTexture, falling back to render target texture:`,t),r=n.texture,e.dispose(!1)}t(r)}else t(e)},e=>{n(e.loaded/e.total*.9)},r));return n(1),a.name=e,a.mapping=303,!r&&a.type!==1016&&(a.colorSpace=he),a}finally{n&&n(1)}}async generateEnvironmentMapAndSkybox(e=null,t=null,n=()=>{},r=!1){let i=t!==`legacy`;(t===`legacy`||t===`neutral`)&&(t=null),t=us(t);let a=Promise.resolve(null),o;e&&(a=this.loadEquirectFromUrl(e,r,n)),o=t?this.loadEquirectFromUrl(t,r,n):e?this.loadEquirectFromUrl(e,r,n):i?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();let[s,c]=await Promise.all([o,a]);if(s==null)throw Error(`Failed to load environment map.`);return{environmentMap:s,skybox:c}}async loadEquirectFromUrl(e,t,n){if(!this.skyboxCache.has(e)){let r=this.loadEquirect(e,t,n);this.skyboxCache.set(e,r),r.catch(()=>{this.skyboxCache.get(e)===r&&this.skyboxCache.delete(e)})}return this.skyboxCache.get(e)}async GenerateEnvironmentMap(e,t){await _s();let n=this.threeRenderer,r=new fi(256,{generateMipmaps:!1,type:s,format:E,colorSpace:Nt,depthBuffer:!0}),i=new mn(.1,100,r),a=i.renderTarget.texture;a.name=t;let o=n.outputColorSpace,c=n.toneMapping;return n.toneMapping=0,n.outputColorSpace=Nt,i.update(n,e),this.blurCubemap(r,em),n.toneMapping=c,n.outputColorSpace=o,a}async loadGeneratedEnvironmentMap(){return this.generatedEnvironmentMap??=this.GenerateEnvironmentMap(new $p(`legacy`),`legacy`),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return this.generatedEnvironmentMapAlt??=this.GenerateEnvironmentMap(new $p(`neutral`),`neutral`),this.generatedEnvironmentMapAlt}blurCubemap(e,t){if(this.blurMaterial==null){this.blurMaterial=this.getBlurShader(tm);let e=new Xe,t=new an(e,this.blurMaterial);this.blurScene=new ee,this.blurScene.add(t)}let n=e.clone();this.halfblur(e,n,t,`latitudinal`),this.halfblur(n,e,t,`longitudinal`)}halfblur(e,t,n,r){let i=e.width,a=isFinite(n)?Math.PI/(2*i):2*Math.PI/39,o=n/a,s=isFinite(n)?1+Math.floor(3*o):tm;s>tm&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${s} samples when the maximum is set to ${tm}`);let c=[],l=0;for(let e=0;e<tm;++e){let t=e/o,n=Math.exp(-t*t/2);c.push(n),e==0?l+=n:e<s&&(l+=2*n)}for(let e=0;e<c.length;e++)c[e]=c[e]/l;let u=this.blurMaterial.uniforms;u.envMap.value=e.texture,u.samples.value=s,u.weights.value=c,u.latitudinal.value=r===`latitudinal`,u.dTheta.value=a,new mn(.1,100,t).update(this.threeRenderer,this.blurScene)}getBlurShader(e){let t=new Float32Array(e),n=new U(0,1,0);return new N({name:`SphericalGaussianBlur`,defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:n}},vertexShader:`
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,fragmentShader:`
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
        }
  
        void main() {
  
          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );
  
          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {
  
            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );
  
          }
  
          axis = normalize( axis );
  
          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );
  
          for ( int i = 1; i < n; i++ ) {
  
            if ( i >= samples ) {
  
              break;
  
            }
  
            float theta = dTheta * float( i );
            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );
  
          }
        }
      `,blending:0,depthTest:!1,depthWrite:!1,side:1})}async dispose(){for(let[,e]of this.skyboxCache)(await e).dispose();this.generatedEnvironmentMap!=null&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),this.generatedEnvironmentMapAlt!=null&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),this.blurMaterial!=null&&this.blurMaterial.dispose()}},am=.2,om=40,sm=60,cm=5,lm=[1,.79,.62,.5,.4,.31,.25],um=3,dm=1.3,fm=class e extends P{static get singleton(){return this._singleton||=new e({powerPreference:(self.ModelViewerElement||{}).powerPreference||`high-performance`,debug:gs()}),this._singleton}static resetSingleton(){let t=this._singleton.dispose();for(let e of t)e.disconnectedCallback();this._singleton=new e({powerPreference:(self.ModelViewerElement||{}).powerPreference||`high-performance`,debug:gs()});for(let e of t)e.connectedCallback()}get canRender(){return this.threeRenderer!=null}get scaleFactor(){return lm[this.scaleStep]}set minScale(e){let t=1;for(;t<lm.length&&!(lm[t]<e);)++t;this.lastStep=t-1}constructor(e){super(),this.loader=new zl(Sp),this.width=0,this.height=0,this.dpr=1,this.scenes=new Set,this.multipleScenesVisible=!1,this.lastTick=performance.now(),this.renderedLastFrame=!1,this.scaleStep=0,this.lastStep=um,this.avgFrameDuration=50,this.onWebGLContextLost=e=>{this.dispatchEvent({type:`contextlost`,sourceEvent:e})},this.onWebGLContextRestored=()=>{var e;(e=this.textureUtils)==null||e.dispose(),this.textureUtils=this.canRender?new im(this.threeRenderer):null;for(let e of this.scenes)e.element[Es]()},this.dpr=window.devicePixelRatio,this.canvas3D=document.createElement(`canvas`),this.canvas3D.id=`webgl-canvas`,this.canvas3D.classList.add(`show`);try{this.threeRenderer=new Xo({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:e.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.setPixelRatio(1),this.threeRenderer.debug={checkShaderErrors:!!e.debug,onShaderError:null},this.threeRenderer.toneMapping=7}catch(e){console.warn(e)}this.arRenderer=this.canRender?new ap(this):null,this.textureUtils=this.canRender?new im(this.threeRenderer):null,this.canRender&&zl.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener(`webglcontextlost`,this.onWebGLContextLost),this.canvas3D.addEventListener(`webglcontextrestored`,this.onWebGLContextRestored),this.updateRendererSize()}registerScene(e){if(this.scenes.add(e),e.forceRescale(),this.canRender){let t=new Qe;this.threeRenderer.getSize(t),e.canvas.width=t.x,e.canvas.height=t.y,this.scenes.size>0&&this.threeRenderer.setAnimationLoop((e,t)=>this.render(e,t))}}unregisterScene(e){this.scenes.delete(e),this.canvas3D.parentElement===e.canvas.parentElement&&e.canvas.parentElement.removeChild(this.canvas3D),this.canRender&&this.scenes.size===0&&this.threeRenderer.setAnimationLoop(null)}displayCanvas(e){return e.element.modelIsVisible&&!this.multipleScenesVisible?this.canvas3D:e.element[g_]}countVisibleScenes(){let{canvas3D:e}=this,t=0,n=null;for(let r of this.scenes){let{element:i}=r;i.modelIsVisible&&r.externalRenderer==null&&++t,e.parentElement===r.canvas.parentElement&&(n=r)}let r=t>1;if(n!=null){let t=r&&!this.multipleScenesVisible,i=!n.element.modelIsVisible;if(t||i){let{width:t,height:r}=this.sceneSize(n);this.copyPixels(n,t,r),e.parentElement.removeChild(e)}}this.multipleScenesVisible=r}updateRendererSize(){var e;let t=window.devicePixelRatio;if(t!==this.dpr)for(let e of this.scenes){let{element:t}=e;t[r_](t.getBoundingClientRect())}let n=0,r=0;for(let e of this.scenes)n=Math.max(n,e.width),r=Math.max(r,e.height);if(n!==this.width||r!==this.height||t!==this.dpr){this.width=n,this.height=r,this.dpr=t,n=Math.ceil(n*t),r=Math.ceil(r*t),this.canRender&&this.threeRenderer.setSize(n,r,!1);for(let t of this.scenes){let{canvas:i}=t;i.width=n,i.height=r,t.forceRescale(),(e=t.effectRenderer)==null||e.setSize(n,r)}}}updateRendererScale(e){let t=this.scaleStep;this.avgFrameDuration+=hs(am*(e-this.avgFrameDuration),-5,cm),this.avgFrameDuration>sm?++this.scaleStep:this.avgFrameDuration<om&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),t!==this.scaleStep&&(this.avgFrameDuration=50)}shouldRender(e){if(e.shouldRender())e.scaleStep!=this.scaleStep&&(e.scaleStep=this.scaleStep,this.rescaleCanvas(e));else if(e.scaleStep!=0)e.scaleStep=0,this.rescaleCanvas(e);else return!1;return!0}rescaleCanvas(e){let t=lm[e.scaleStep],n=Math.ceil(this.width/t),r=Math.ceil(this.height/t),{style:i}=e.canvas;i.width=`${n}px`,i.height=`${r}px`,this.canvas3D.style.width=`${n}px`,this.canvas3D.style.height=`${r}px`;let a=this.dpr*t,o=t<1?`GPU throttling`:this.dpr===window.devicePixelRatio?``:`No meta viewport tag`;e.element.dispatchEvent(new CustomEvent(`render-scale`,{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:a,minimumDpr:this.dpr*lm[this.lastStep],pixelWidth:Math.ceil(e.width*a),pixelHeight:Math.ceil(e.height*a),reason:o}}))}sceneSize(e){let{dpr:t}=this,n=lm[e.scaleStep];return{width:Math.min(Math.ceil(e.width*n*t),this.canvas3D.width),height:Math.min(Math.ceil(e.height*n*t),this.canvas3D.height)}}copyPixels(e,t,n){let r=e.context;r==null?console.log(`could not acquire 2d context`):(r.clearRect(0,0,t,n),r.drawImage(this.canvas3D,0,0,t,n,0,0,t,n),e.canvas.classList.add(`show`))}orderedScenes(){let e=[];for(let t of[!1,!0])for(let n of this.scenes)n.element.modelIsVisible===t&&e.push(n);return e}get isPresenting(){return this.arRenderer?.isPresenting===!0}preRender(e,t,n){let{element:r,exposure:i,toneMapping:a}=e;r[v_](t,n);let o=typeof i==`number`&&!Number.isNaN(i),s=r.environmentImage,c=r.skyboxImage,l=a===7&&(s===`neutral`||s===`legacy`||!s&&!c);this.threeRenderer.toneMappingExposure=(o?i:1)*(l?dm:1)}render(e,t){if(t!=null){this.arRenderer!=null&&this.arRenderer.onWebXRFrame(e,t);return}let n=e-this.lastTick;if(this.lastTick=e,!this.canRender||this.isPresenting)return;this.countVisibleScenes(),this.updateRendererSize(),this.renderedLastFrame&&=(this.updateRendererScale(n),!1);let{canvas3D:r}=this;for(let t of this.orderedScenes()){let{element:i}=t;if(!i.loaded||!i.modelIsVisible&&t.renderCount>0||(this.preRender(t,e,n),!this.shouldRender(t)))continue;if(t.externalRenderer!=null){let e=t.getCamera();e.updateMatrix();let{matrix:n,projectionMatrix:r}=e,i=n.elements.slice(),a=t.getTarget();i[12]+=a.x,i[13]+=a.y,i[14]+=a.z,t.externalRenderer.render({viewMatrix:i,projectionMatrix:r.elements});continue}if(!i.modelIsVisible&&!this.multipleScenesVisible)for(let e of this.scenes)e.element.modelIsVisible&&e.queueRender();let{width:a,height:o}=this.sceneSize(t);t.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.ceil(this.height*this.dpr)-o,a,o),t.effectRenderer==null?(this.threeRenderer.autoClear=!0,this.threeRenderer.toneMapping=t.toneMapping,this.threeRenderer.render(t,t.camera)):t.effectRenderer.render(n),this.multipleScenesVisible||!t.element.modelIsVisible&&t.renderCount===0?this.copyPixels(t,a,o):r.parentElement!==t.canvas.parentElement&&(t.canvas.parentElement.appendChild(r),t.canvas.classList.remove(`show`)),t.hasRendered(),++t.renderCount,this.renderedLastFrame=!0}}dispose(){this.textureUtils!=null&&this.textureUtils.dispose(),this.threeRenderer!=null&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;let e=[];for(let t of this.scenes)e.push(t.element);return this.canvas3D.removeEventListener(`webglcontextlost`,this.onWebGLContextLost),this.canvas3D.removeEventListener(`webglcontextrestored`,this.onWebGLContextRestored),e}},Y=Symbol(`correlatedObjects`),pm=Symbol(`onUpdate`),mm=class{constructor(e,t){this[pm]=e,this[Y]=t}},hm=new gn,gm=new ue(2,2),_m=0,vm=Symbol(`threeTexture`),ym=Symbol(`threeTextures`),bm=class extends mm{get[vm](){return this[Y]?.values().next().value}get[ym](){return this[Y]}constructor(e,t){super(e,new Set(t?[t]:[]));let n=this[vm].image;n.src||=t.name?t.name:`adhoc_image`+_m++,n.name||=t&&n&&n.src?n.src.split(`/`).pop():`adhoc_image`}get name(){return this[vm].image.name||``}get uri(){return this[vm].image.src}get bufferView(){return this[vm].image.bufferView}get element(){let e=this[vm];if(e&&(e.isCanvasTexture||e.isVideoTexture))return e.image}get animation(){let e=this[vm];if(e&&e.isCanvasTexture&&e.animation)return e.animation}get type(){return this.uri==null?`embedded`:`external`}set name(e){for(let t of this[ym])t.image.name=e}update(){let e=this[vm];e&&e.isCanvasTexture&&!e.animation&&(this[vm].needsUpdate=!0,this[pm]())}async createThumbnail(e,t){let n=new ee;hm.map=this[vm];let r=new an(gm,hm);n.add(r);let i=new o(-1,1,1,-1,0,1),{threeRenderer:a}=fm.singleton,s=new Dt(e,t);a.setRenderTarget(s),a.render(n,i),a.setRenderTarget(null);let c=new Uint8Array(e*t*4);a.readRenderTargetPixels(s,0,0,e,t,c),Gg.width=e,Gg.height=t;let l=Gg.getContext(`2d`),u=l.createImageData(e,t);return u.data.set(c),l.putImageData(u,0,0),new Promise(async(e,t)=>{Gg.toBlob(n=>{if(!n)return t(`Failed to capture thumbnail.`);e(URL.createObjectURL(n))},`image/png`)})}},xm;(function(e){e[e.Nearest=9728]=`Nearest`,e[e.Linear=9729]=`Linear`,e[e.NearestMipmapNearest=9984]=`NearestMipmapNearest`,e[e.LinearMipmapNearest=9985]=`LinearMipmapNearest`,e[e.NearestMipmapLinear=9986]=`NearestMipmapLinear`,e[e.LinearMipmapLinear=9987]=`LinearMipmapLinear`})(xm||={});var Sm;(function(e){e[e.ClampToEdge=33071]=`ClampToEdge`,e[e.MirroredRepeat=33648]=`MirroredRepeat`,e[e.Repeat=10497]=`Repeat`})(Sm||={});var Cm=new Map([[Sm.Repeat,fe],[Sm.ClampToEdge,Pt],[Sm.MirroredRepeat,ln]]),wm=new Map([[fe,Sm.Repeat],[Pt,Sm.ClampToEdge],[ln,Sm.MirroredRepeat]]),Tm=new Map([[xm.Nearest,L],[xm.Linear,At],[xm.NearestMipmapNearest,g],[xm.LinearMipmapNearest,Ge],[xm.NearestMipmapLinear,b],[xm.LinearMipmapLinear,gt]]),Em=new Map([[L,xm.Nearest],[At,xm.Linear],[g,xm.NearestMipmapNearest],[Ge,xm.LinearMipmapNearest],[b,xm.NearestMipmapLinear],[gt,xm.LinearMipmapLinear]]),Dm=new Map([[xm.Nearest,L],[xm.Linear,At]]),Om=new Map([[L,xm.Nearest],[At,xm.Linear]]),km=e=>Em.has(e),Am=e=>Om.has(e),jm=e=>wm.has(e),Mm=(e,t)=>{switch(e){case`minFilter`:return km(t);case`magFilter`:return Am(t);case`wrapS`:case`wrapT`:return jm(t);case`rotation`:case`repeat`:case`offset`:return!0;default:throw Error(`Cannot configure property "${e}" on Sampler`)}},Nm=Symbol(`threeTexture`),Pm=Symbol(`threeTextures`),Fm=Symbol(`setProperty`),Im=class extends mm{get[Nm](){return this[Y]?.values().next().value}get[Pm](){return this[Y]}constructor(e,t){super(e,new Set(t?[t]:[]))}get name(){return this[Nm].name||``}get minFilter(){return Em.get(this[Nm].minFilter)}get magFilter(){return Om.get(this[Nm].magFilter)}get wrapS(){return wm.get(this[Nm].wrapS)}get wrapT(){return wm.get(this[Nm].wrapT)}get rotation(){return this[Nm].rotation}get scale(){return E_(this[Nm].repeat)}get offset(){return E_(this[Nm].offset)}setMinFilter(e){this[Fm](`minFilter`,Tm.get(e))}setMagFilter(e){this[Fm](`magFilter`,Dm.get(e))}setWrapS(e){this[Fm](`wrapS`,Cm.get(e))}setWrapT(e){this[Fm](`wrapT`,Cm.get(e))}setRotation(e){e??=0,this[Fm](`rotation`,e)}setScale(e){e??={u:1,v:1},this[Fm](`repeat`,new Qe(e.u,e.v))}setOffset(e){e??={u:0,v:0},this[Fm](`offset`,new Qe(e.u,e.v))}[Fm](e,t){if(Mm(e,t))for(let n of this[Pm])n[e]=t,n.needsUpdate=!0;this[pm]()}},Lm=Symbol(`image`),Rm=Symbol(`sampler`),zm=Symbol(`threeTexture`),Bm=class extends mm{get[zm](){return this[Y]?.values().next().value}constructor(e,t){super(e,new Set(t?[t]:[])),this[Rm]=new Im(e,t),this[Lm]=new bm(e,t)}get name(){return this[zm].name||``}set name(e){for(let t of this[Y])t.name=e}get sampler(){return this[Rm]}get source(){return this[Lm]}},Vm,Hm,Um,Wm=Symbol(`texture`),Gm=Symbol(`transform`),Km=Symbol(`materials`),qm=Symbol(`usage`),Jm=Symbol(`onUpdate`),Ym=Symbol(`activeVideo`),X;(function(e){e[e.Base=0]=`Base`,e[e.MetallicRoughness=1]=`MetallicRoughness`,e[e.Normal=2]=`Normal`,e[e.Occlusion=3]=`Occlusion`,e[e.Emissive=4]=`Emissive`,e[e.Clearcoat=5]=`Clearcoat`,e[e.ClearcoatRoughness=6]=`ClearcoatRoughness`,e[e.ClearcoatNormal=7]=`ClearcoatNormal`,e[e.SheenColor=8]=`SheenColor`,e[e.SheenRoughness=9]=`SheenRoughness`,e[e.Transmission=10]=`Transmission`,e[e.Thickness=11]=`Thickness`,e[e.Specular=12]=`Specular`,e[e.SpecularColor=13]=`SpecularColor`,e[e.Iridescence=14]=`Iridescence`,e[e.IridescenceThickness=15]=`IridescenceThickness`,e[e.Anisotropy=16]=`Anisotropy`})(X||={});var Xm=class{constructor(e,t,n,r){this[Vm]=null,this[Hm]={rotation:0,scale:new Qe(1,1),offset:new Qe(0,0)},this[Um]=!1,n&&(this[Gm].rotation=n.rotation,this[Gm].scale.copy(n.repeat),this[Gm].offset.copy(n.offset),this[Wm]=new Bm(e,n)),this[Jm]=e,this[Km]=r,this[qm]=t}get texture(){return this[Wm]}setTexture(e){let t=e==null?null:e.source[vm],n=this[Wm]?.source[vm];if(n!=null&&n.isVideoTexture?this[Ym]=!1:this[Wm]?.source.animation&&this[Wm].source.animation.removeEventListener(`enterFrame`,this[Jm]),this[Wm]=e,t!=null&&t.isVideoTexture){let e=t.image;if(this[Ym]=!0,e.requestVideoFrameCallback!=null){let t=()=>{this[Ym]&&(this[Jm](),e.requestVideoFrameCallback(t))};e.requestVideoFrameCallback(t)}else{let e=()=>{this[Ym]&&(this[Jm](),requestAnimationFrame(e))};requestAnimationFrame(e)}}else e?.source.animation!=null&&e.source.animation.addEventListener(`enterFrame`,this[Jm]);let r=he;if(this[Km])for(let e of this[Km]){switch(this[qm]){case X.Base:e.map=t;break;case X.MetallicRoughness:r=Nt,e.metalnessMap=t,e.roughnessMap=t;break;case X.Normal:r=Nt,e.normalMap=t;break;case X.Occlusion:r=Nt,e.aoMap=t;break;case X.Emissive:e.emissiveMap=t;break;case X.Clearcoat:e.clearcoatMap=t;break;case X.ClearcoatRoughness:e.clearcoatRoughnessMap=t;break;case X.ClearcoatNormal:e.clearcoatNormalMap=t;break;case X.SheenColor:e.sheenColorMap=t;break;case X.SheenRoughness:e.sheenRoughnessMap=t;break;case X.Transmission:e.transmissionMap=t;break;case X.Thickness:e.thicknessMap=t;break;case X.Specular:e.specularIntensityMap=t;break;case X.SpecularColor:e.specularColorMap=t;break;case X.Iridescence:e.iridescenceMap=t;break;case X.IridescenceThickness:e.iridescenceThicknessMap=t;break;case X.Anisotropy:e.anisotropyMap=t}e.needsUpdate=!0}t&&(t.colorSpace=r,t.rotation=this[Gm].rotation,t.repeat=this[Gm].scale,t.offset=this[Gm].offset),this[Jm]()}};Vm=Wm,Hm=Gm,Um=Ym;var Zm=Symbol(`threeMaterial`),Qm=Symbol(`threeMaterials`),$m=Symbol(`baseColorTexture`),eh=Symbol(`metallicRoughnessTexture`),th=class extends mm{get[Qm](){return this[Y]}get[Zm](){return this[Y]?.values().next().value}constructor(e,t){super(e,t);let{map:n,metalnessMap:r}=t.values().next().value;this[$m]=new Xm(e,X.Base,n,t),this[eh]=new Xm(e,X.MetallicRoughness,r,t)}get baseColorFactor(){let e=[0,0,0,this[Zm].opacity];return this[Zm].color.toArray(e),e}get metallicFactor(){return this[Zm].metalness}get roughnessFactor(){return this[Zm].roughness}get baseColorTexture(){return this[$m]}get metallicRoughnessTexture(){return this[eh]}setBaseColorFactor(e){let t=new W;e instanceof Array?t.fromArray(e):t.set(e);for(let n of this[Qm])n.color.set(t),e instanceof Array&&e.length>3?n.opacity=e[3]:(e=[0,0,0,n.opacity],t.toArray(e));this[pm]()}setMetallicFactor(e){for(let t of this[Qm])t.metalness=e;this[pm]()}setRoughnessFactor(e){for(let t of this[Qm])t.roughness=e;this[pm]()}},nh,rh,ih=Symbol(`pbrMetallicRoughness`),ah=Symbol(`normalTexture`),oh=Symbol(`occlusionTexture`),sh=Symbol(`emissiveTexture`),ch=Symbol(`backingThreeMaterial`),lh=Symbol(`applyAlphaCutoff`),uh=Symbol(`getAlphaMode`),dh=Symbol(`lazyLoadGLTFInfo`),fh=Symbol(`initialize`),ph=Symbol(`getLoadedMaterial`),Z=Symbol(`ensureMaterialIsLoaded`),mh=Symbol(`gltfIndex`),hh=Symbol(`setActive`),gh=Symbol(`variantIndices`),_h=Symbol(`isActive`),vh=Symbol(`modelVariants`),yh=Symbol(`name`),bh=Symbol(`pbrTextures`),xh=class extends mm{get[(nh=gh,rh=bh,ch)](){return this[Y].values().next().value}constructor(e,t,n,r,i,a,o=void 0){super(e,i),this[nh]=new Set,this[rh]=new Map,this[mh]=t,this[_h]=n,this[vh]=r,this[yh]=a,o==null?this[fh]():this[dh]=o}[fh](){let e=this[pm],t=this[Y];this[ih]=new th(e,t);let{normalMap:n,aoMap:r,emissiveMap:i}=t.values().next().value;this[ah]=new Xm(e,X.Normal,n,t),this[oh]=new Xm(e,X.Occlusion,r,t),this[sh]=new Xm(e,X.Emissive,i,t);let a=n=>{this[bh].set(n,new Xm(e,n,null,t))};a(X.Clearcoat),a(X.ClearcoatRoughness),a(X.ClearcoatNormal),a(X.SheenColor),a(X.SheenRoughness),a(X.Transmission),a(X.Thickness),a(X.Specular),a(X.SpecularColor),a(X.Iridescence),a(X.IridescenceThickness),a(X.Anisotropy)}async[ph](){if(this[dh]!=null){let e=await this[dh].doLazyLoad();return this[fh](),this[dh]=void 0,this.ensureLoaded=async()=>{},e}return null}colorFromRgb(e){let t=new W;return e instanceof Array?t.fromArray(e):t.set(e),t}[Z](){if(this[dh]!=null)throw Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[ph]()}get isLoaded(){return this[dh]==null}get isActive(){return this[_h]}[hh](e){this[_h]=e}get name(){return this[yh]||``}set name(e){if(this[yh]=e,this[Y]!=null)for(let t of this[Y])t.name=e}get pbrMetallicRoughness(){return this[Z](),this[ih]}get normalTexture(){return this[Z](),this[ah]}get occlusionTexture(){return this[Z](),this[oh]}get emissiveTexture(){return this[Z](),this[sh]}get emissiveFactor(){return this[Z](),this[ch].emissive.toArray()}get index(){return this[mh]}hasVariant(e){let t=this[vh].get(e);return t!=null&&this[gh].has(t.index)}setEmissiveFactor(e){this[Z]();let t=this.colorFromRgb(e);for(let e of this[Y])e.emissive.set(t);this[pm]()}[uh](){return this[ch].transparent?`BLEND`:this[ch].alphaTest>0?`MASK`:`OPAQUE`}[lh](){this[Z]();for(let e of this[Y])this[uh]()===`MASK`?e.alphaTest??=.5:e.alphaTest=void 0,e.needsUpdate=!0}setAlphaCutoff(e){this[Z]();for(let t of this[Y])t.alphaTest=e,t.needsUpdate=!0;this[lh](),this[pm]()}getAlphaCutoff(){return this[Z](),this[ch].alphaTest}setDoubleSided(e){this[Z]();for(let t of this[Y])t.side=e?2:0,t.needsUpdate=!0;this[pm]()}getDoubleSided(){return this[Z](),this[ch].side==2}setAlphaMode(e){this[Z]();let t=(e,t)=>{e.transparent=t,e.depthWrite=!t};for(let n of this[Y])t(n,e===`BLEND`),n.alphaTest=e===`MASK`?.5:void 0,n.needsUpdate=!0;this[pm]()}getAlphaMode(){return this[Z](),this[uh]()}get emissiveStrength(){return this[Z](),this[ch].emissiveIntensity}setEmissiveStrength(e){this[Z]();for(let t of this[Y])t.emissiveIntensity=e;this[pm]()}get clearcoatFactor(){return this[Z](),this[ch].clearcoat}get clearcoatRoughnessFactor(){return this[Z](),this[ch].clearcoatRoughness}get clearcoatTexture(){return this[Z](),this[bh].get(X.Clearcoat)}get clearcoatRoughnessTexture(){return this[Z](),this[bh].get(X.ClearcoatRoughness)}get clearcoatNormalTexture(){return this[Z](),this[bh].get(X.ClearcoatNormal)}get clearcoatNormalScale(){return this[Z](),this[ch].clearcoatNormalScale.x}setClearcoatFactor(e){this[Z]();for(let t of this[Y])t.clearcoat=e;this[pm]()}setClearcoatRoughnessFactor(e){this[Z]();for(let t of this[Y])t.clearcoatRoughness=e;this[pm]()}setClearcoatNormalScale(e){this[Z]();for(let t of this[Y])t.clearcoatNormalScale=new Qe(e,e);this[pm]()}get ior(){return this[Z](),this[ch].ior}setIor(e){this[Z]();for(let t of this[Y])t.ior=e;this[pm]()}get sheenColorFactor(){return this[Z](),this[ch].sheenColor.toArray()}get sheenColorTexture(){return this[Z](),this[bh].get(X.SheenColor)}get sheenRoughnessFactor(){return this[Z](),this[ch].sheenRoughness}get sheenRoughnessTexture(){return this[Z](),this[bh].get(X.SheenRoughness)}setSheenColorFactor(e){this[Z]();let t=this.colorFromRgb(e);for(let e of this[Y])e.sheenColor.set(t),e.sheen=1;this[pm]()}setSheenRoughnessFactor(e){this[Z]();for(let t of this[Y])t.sheenRoughness=e,t.sheen=1;this[pm]()}get transmissionFactor(){return this[Z](),this[ch].transmission}get transmissionTexture(){return this[Z](),this[bh].get(X.Transmission)}setTransmissionFactor(e){this[Z]();for(let t of this[Y])t.transmission=e;this[pm]()}get thicknessFactor(){return this[Z](),this[ch].thickness}get thicknessTexture(){return this[Z](),this[bh].get(X.Thickness)}get attenuationDistance(){return this[Z](),this[ch].attenuationDistance}get attenuationColor(){return this[Z](),this[ch].attenuationColor.toArray()}setThicknessFactor(e){this[Z]();for(let t of this[Y])t.thickness=e;this[pm]()}setAttenuationDistance(e){this[Z]();for(let t of this[Y])t.attenuationDistance=e;this[pm]()}setAttenuationColor(e){this[Z]();let t=this.colorFromRgb(e);for(let e of this[Y])e.attenuationColor.set(t);this[pm]()}get specularFactor(){return this[Z](),this[ch].specularIntensity}get specularTexture(){return this[Z](),this[bh].get(X.Specular)}get specularColorFactor(){return this[Z](),this[ch].specularColor.toArray()}get specularColorTexture(){return this[Z](),this[bh].get(X.SheenColor)}setSpecularFactor(e){this[Z]();for(let t of this[Y])t.specularIntensity=e;this[pm]()}setSpecularColorFactor(e){this[Z]();let t=this.colorFromRgb(e);for(let e of this[Y])e.specularColor.set(t);this[pm]()}get iridescenceFactor(){return this[Z](),this[ch].iridescence}get iridescenceTexture(){return this[Z](),this[bh].get(X.Iridescence)}get iridescenceIor(){return this[Z](),this[ch].iridescenceIOR}get iridescenceThicknessMinimum(){return this[Z](),this[ch].iridescenceThicknessRange[0]}get iridescenceThicknessMaximum(){return this[Z](),this[ch].iridescenceThicknessRange[1]}get iridescenceThicknessTexture(){return this[Z](),this[bh].get(X.IridescenceThickness)}setIridescenceFactor(e){this[Z]();for(let t of this[Y])t.iridescence=e;this[pm]()}setIridescenceIor(e){this[Z]();for(let t of this[Y])t.iridescenceIOR=e;this[pm]()}setIridescenceThicknessMinimum(e){this[Z]();for(let t of this[Y])t.iridescenceThicknessRange[0]=e;this[pm]()}setIridescenceThicknessMaximum(e){this[Z]();for(let t of this[Y])t.iridescenceThicknessRange[1]=e;this[pm]()}get anisotropyStrength(){return this[Z](),this[ch].anisotropy}get anisotropyRotation(){return this[Z](),this[ch].anisotropyRotation}get anisotropyTexture(){return this[Z](),this[bh].get(X.Anisotropy)}setAnisotropyStrength(e){this[Z]();for(let t of this[Y])t.anisotropy=e;this[pm]()}setAnisotropyRotation(e){this[Z]();for(let t of this[Y])t.anisotropyRotation=e;this[pm]()}},Sh=class{constructor(e){this.name=``,this.children=[],this.name=e}},Ch=class extends Sh{constructor(e,t,n,r){super(e.name),this.materials=new Map,this.variantToMaterialMap=new Map,this.initialMaterialIdx=0,this.activeMaterialIdx=0,this.mesh=e;let{gltf:i,threeGLTF:a,threeObjectMap:o}=r;this.parser=a.parser,this.modelVariants=n,this.mesh.userData.variantData=n;let s=o.get(e.material);s.materials==null?console.error(`Primitive (${e.name}) missing initial material reference.`):this.initialMaterialIdx=this.activeMaterialIdx=s.materials;let c=e.userData.associations||{};if(c.meshes==null){console.error(`Mesh is missing primitive index association`);return}let l=((i.meshes||[])[c.meshes].primitives||[])[c.primitives];if(l==null)console.error(`Mesh primitive definition is missing.`);else{if(l.material!=null)this.materials.set(l.material,t[l.material]);else{let e=t.findIndex(e=>e.name===`Default`);e>=0?this.materials.set(e,t[e]):console.warn(`gltfPrimitive has no material!`)}if(l.extensions&&l.extensions.KHR_materials_variants){let e=l.extensions.KHR_materials_variants,r=a.parser.json.extensions.KHR_materials_variants.variants;for(let i of e.mappings){let e=t[i.material];this.materials.set(i.material,e);for(let t of i.variants){let{name:i}=r[t];this.variantToMaterialMap.set(t,e),e[gh].add(t),n.has(i)||n.set(i,{name:i,index:t})}}}}}async setActiveMaterial(e){let t=this.materials.get(e);if(e!==this.activeMaterialIdx){let n=t[Y],r=await t[ph]();r==null?this.mesh.material=n.values().next().value:this.mesh.material=r,this.parser.assignFinalMaterial(this.mesh),n.add(this.mesh.material),this.activeMaterialIdx=e}return this.mesh.material}getActiveMaterial(){return this.materials.get(this.activeMaterialIdx)}getMaterial(e){return this.materials.get(e)}async enableVariant(e){if(e==null)return this.setActiveMaterial(this.initialMaterialIdx);if(this.variantToMaterialMap!=null&&this.modelVariants.has(e)){let t=this.modelVariants.get(e);return this.enableVariantHelper(t.index)}return null}async enableVariantHelper(e){if(this.variantToMaterialMap!=null&&e!=null){let t=this.variantToMaterialMap.get(e);if(t!=null)return this.setActiveMaterial(t.index)}return null}async instantiateVariants(){if(this.variantToMaterialMap!=null)for(let e of this.variantToMaterialMap.keys()){let t=this.mesh.userData.variantMaterials.get(e);if(t.material!=null)continue;let n=await this.enableVariantHelper(e);n!=null&&(t.material=n)}}get variantInfo(){return this.variantToMaterialMap}addVariant(e,t){if(!this.ensureVariantIsUnused(t))return!1;this.modelVariants.has(t)||this.modelVariants.set(t,{name:t,index:this.modelVariants.size});let n=this.modelVariants.get(t).index;return e[gh].add(n),this.variantToMaterialMap.set(n,e),this.materials.set(e.index,e),this.updateVariantUserData(n,e),!0}deleteVariant(e){this.variantInfo.has(e)&&(this.variantInfo.delete(e),this.mesh.userData.variantMaterials?.delete(e))}updateVariantUserData(e,t){t[gh].add(e),this.mesh.userData.variantData=this.modelVariants,this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(e,{material:t[Y].values().next().value,gltfMaterialIndex:t.index})}ensureVariantIsUnused(e){let t=this.modelVariants.get(e);return t!=null&&this.variantInfo.has(t.index)?(console.warn(`Primitive cannot add variant '${e}' for this material, it already exists.`),!1):!0}},wh,Th,Eh,Dh,Oh,kh,Ah=Symbol(`materials`),jh=Symbol(`hierarchy`),Mh=Symbol(`roots`),Nh=Symbol(`primitives`),Ph=Symbol(`prepareVariantsForExport`),Fh=Symbol(`switchVariant`),Ih=Symbol(`materialFromPoint`),Lh=Symbol(`nodeFromPoint`),Rh=Symbol(`nodeFromIndex`),zh=Symbol(`variantData`),Bh=Symbol(`availableVariants`),Vh=Symbol(`modelOnUpdate`),Hh=Symbol(`cloneMaterial`),Uh=class{constructor(e,t,n,r){this.gltf=e,this.gltfElementMap=t,this.mapKey=n,this.doLazyLoad=r}},Wh=class{constructor(e,t=()=>{}){this[wh]=[],this[Th]=[],this[Eh]=[],this[Dh]=[],this[Oh]=()=>{},this[kh]=new Map,this[Vh]=t;let{gltf:n,threeGLTF:r,gltfElementMap:i}=e;for(let[e,a]of n.materials.entries()){let o=i.get(a);if(o!=null)this[Ah].push(new xh(t,e,!0,this[zh],o,a.name));else{let o=(n.materials||[])[e],s=new Set;i.set(o,s),this[Ah].push(new xh(t,e,!1,this[zh],s,a.name,new Uh(n,i,o,async()=>{let t=await r.parser.getDependency(`material`,e);return s.add(t),t})))}}let a=new Map,o=[];for(let e of r.scene.children)o.push(e);for(;o.length>0;){let t=o.pop(),n=null;t instanceof an?(n=new Ch(t,this.materials,this[zh],e),this[Nh].push(n)):n=new Sh(t.name);let r=a.get(t);r==null?this[Mh].push(n):r.children.push(n),this[jh].push(n);for(let e of t.children)o.push(e),a.set(t,n)}}get materials(){return this[Ah]}[(wh=Ah,Th=jh,Eh=Mh,Dh=Nh,Oh=Vh,kh=zh,Bh)](){let e=Array.from(this[zh].values());return e.sort((e,t)=>e.index-t.index),e.map(e=>e.name)}getMaterialByName(e){let t=this[Ah].filter(t=>t.name===e);return t.length>0?t[0]:null}[Rh](e,t){return this[jh].find(n=>{if(n instanceof Ch){let{meshes:r,primitives:i}=n.mesh.userData.associations;if(r==e&&i==t)return!0}return!1})??null}[Lh](e){return this[jh].find(t=>t instanceof Ch&&t.mesh===e.object)||null}[Ih](e){let t=this[Lh](e);return t?t.getActiveMaterial():null}async[Fh](e){for(let t of this[Nh])await t.enableVariant(e);for(let e of this.materials)e[hh](!1);for(let e of this[Nh])this.materials[e.getActiveMaterial().index][hh](!0)}async[Ph](){let e=[];for(let t of this[Nh])e.push(t.instantiateVariants());await Promise.all(e)}[Hh](e,t){let n=this.materials[e];n.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);let r=n[Y],i=new Set;for(let[e,n]of r.entries()){let a=n.clone();a.name=t+(r.size>1?`_inst`+e:``),i.add(a)}let a=new xh(this[Vh],this[Ah].length,!1,this[zh],i,t);return this[Ah].push(a),a}createMaterialInstanceForVariant(e,t,n,r=!0){let i=null;for(let r of this[Nh]){let a=this[zh].get(n);a!=null&&r.variantInfo.has(a.index)||r.getMaterial(e)!=null&&(this.hasVariant(n)||this.createVariant(n),i??=this[Hh](e,t),r.addVariant(i,n))}if(r&&i!=null){i[hh](!0),this.materials[e][hh](!1);for(let e of this[Nh])e.enableVariant(n)}return i}createVariant(e){this[zh].has(e)?console.warn(`Variant '${e}'' already exists`):this[zh].set(e,{name:e,index:this[zh].size})}hasVariant(e){return this[zh].has(e)}setMaterialToVariant(e,t){if(this[Bh]().find(e=>e===t)==null)console.warn(`Can't add material to '${t}', the variant does not exist.'`);else if(e<0||e>=this.materials.length)console.error(`setMaterialToVariant(): materialIndex is out of bounds.`);else for(let n of this[Nh]){let r=n.getMaterial(e);r!=null&&n.addVariant(r,t)}}updateVariantName(e,t){let n=this[zh].get(e);n!=null&&(n.name=t,this[zh].set(t,n),this[zh].delete(e))}deleteVariant(e){let t=this[zh].get(e);if(t!=null){for(let n of this.materials)n.hasVariant(e)&&n[gh].delete(t.index);for(let e of this[Nh])e.deleteVariant(t.index);this[zh].delete(e)}}},Gh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Kh=Symbol(`currentGLTF`),qh=Symbol(`originalGltfJson`),Jh=Symbol(`model`),Yh=Symbol(`extraModels`),Xh=Symbol(`getOnUpdateMethod`),Zh=Symbol(`buildTexture`),Qh=e=>{var t,n,r,i;class a extends e{constructor(){super(...arguments),this[t]=void 0,this[n]=[],this[r]=null,this[i]=null,this.variantName=null,this.orientation=`0 0 0`,this.scale=`1 1 1`}get model(){return this[Jh]}get extraModels(){return this[Yh]}get availableVariants(){return this.model?this.model[Bh]():[]}get originalGltfJson(){return this[qh]}[(t=Jh,n=Yh,r=Kh,i=qh,Xh)](){return()=>{this[__]()}}[Zh](e){return e.colorSpace=he,e.wrapS=fe,e.wrapT=fe,new Bm(this[Xh](),e)}async createTexture(e,t=`image/png`){let{textureUtils:n}=this[$],r=await n.loadImage(e,this.withCredentials,t),i=t===`image/ktx2`?`image/png`:t;return r.userData.mimeType=i,this[Zh](r)}async createLottieTexture(e,t=1){let{textureUtils:n}=this[$],r=await n.loadLottie(e,t,this.withCredentials);return this[Zh](r)}createVideoTexture(e){let t=document.createElement(`video`);t.crossOrigin=this.withCredentials?`use-credentials`:`anonymous`,t.src=e,t.muted=!0,t.playsInline=!0,t.loop=!0,t.play();let n=new ot(t);return this[Zh](n)}createCanvasTexture(){let e=document.createElement(`canvas`),t=new at(e);return this[Zh](t)}async updated(e){if(super.updated(e),e.has(`variantName`)){let e=this[x_].beginActivity(`variant-update`);e(.1);let t=this[Jh],{variantName:n}=this;t!=null&&(await t[Fh](n),this[__](),this.dispatchEvent(new CustomEvent(`variant-applied`))),e(1)}if(e.has(`orientation`)||e.has(`scale`)){if(!this.loaded)return;let e=this[Q];e.applyTransform(),e.updateBoundingBox(),e.updateShadow(),this[$].arRenderer.onUpdateScene(),this[__]()}}[y_](){super[y_]();let{currentGLTFs:e}=this[Q],t=e.length>0?e[0]:null;if(t!=null){let{correlatedSceneGraph:e}=t;e!=null&&t!==this[Kh]&&(this[Jh]=new Wh(e,this[Xh]()),this[qh]=JSON.parse(JSON.stringify(e.gltf))),`variants`in t.userData&&this.requestUpdate(`variantName`)}this[Yh]=[];let n=Array.from(this.querySelectorAll(`extra-model`));for(let t=1;t<e.length;t++){let r=e[t];if(r!=null&&r.correlatedSceneGraph!=null){let e=new Wh(r.correlatedSceneGraph,this[Xh]());this[Yh].push(e),n[t-1]&&(n[t-1].model=e)}}this[Kh]=t}async exportScene(e){let t=this[Q];return new Promise(async(n,r)=>{let i={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(i,e),i.animations=t.animations,i.truncateDrawRange=!0;let a=t.shadow,o=!1;a!=null&&(o=a.visible,a.visible=!1),await this[Jh][Ph]();let s=new Jt().register(e=>new tu(e));s.setTextureUtils({decompress:(e,t)=>Ql(e,t??1/0,void 0)});let c;if(t.models.length>1){c=new St;for(let e of t.models)c.add(e)}else c=t.models[0];s.parse(c,e=>{if(t.models.length>1)for(let e of t.models)t.target.add(e);else t.target.add(t.models[0]);return n(new Blob([i.binary?e:JSON.stringify(e)],{type:i.binary?`application/octet-stream`:`application/json`}))},()=>r(`glTF export failed`),i),a!=null&&(a.visible=o)})}materialFromPoint(e,t){let n=this[Q],r=n.getNDC(e,t),i=n.hitFromPoint(r);if(i==null||i.face==null)return null;let a=this[Jh];if(a!=null){let e=a[Ih](i);if(e!=null)return e}for(let e of this[Yh]){let t=e[Ih](i);if(t!=null)return t}return null}}return Gh([G({type:String,attribute:`variant-name`})],a.prototype,`variantName`,void 0),Gh([G({type:String,attribute:`orientation`})],a.prototype,`orientation`,void 0),Gh([G({type:String,attribute:`scale`})],a.prototype,`scale`,void 0),a},$h=class extends an{constructor(){super(void 0,new gn({depthWrite:!1})),this.height=0,this.radius=0,this.resolution=0,this.userData.noHit=!0}get map(){return this.material.map}set map(e){this.material.map=e}isUsable(){return this.height>0&&this.radius>0&&this.geometry!=null&&this.map!=null}updateGeometry(e=this.height,t=this.radius,n=128){(e!=this.height||t!=this.radius||n!=this.resolution)&&(this.height=e,this.radius=t,this.resolution=n,e>0&&t>0&&(this.geometry.dispose(),this.geometry=eg(e,t,n)))}};function eg(e,t,n){let r=new je(t,2*n,n);r.scale(1,1,-1);let i=r.getAttribute(`position`),a=new U;for(let t=0;t<i.count;++t)if(a.fromBufferAttribute(i,t),a.y<0){let n=-e*3/2,r=a.y<n?-e/a.y:1-a.y*a.y/(3*n*n);a.multiplyScalar(r),a.toArray(i.array,3*t)}return i.needsUpdate=!0,r}var tg=new U,ng=new U,rg=new U,ig=new H,ag=new Ie,og=new be,sg=class extends Bl{constructor(e){super(document.createElement(`div`)),this.normal=new U(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivotEl=document.createElement(`div`),this.slot=document.createElement(`slot`),this.element.classList.add(`annotation-wrapper`),this.slot.name=e.name,this.element.appendChild(this.pivotEl),this.pivotEl.appendChild(this.slot),this.updatePosition(e.position),this.updateNormal(e.normal),this.surface=e.surface,e.modelIndex!=null&&(this.modelIndex=e.modelIndex)}get facingCamera(){return!this.element.classList.contains(`hide`)}show(){(!this.facingCamera||!this.initialized)&&this.updateVisibility(!0)}hide(){(this.facingCamera||!this.initialized)&&this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,this.referenceCount===0}updatePosition(e){if(e==null)return;let t=fu(e)[0].terms;for(let e=0;e<3;++e)this.position.setComponent(e,Cu(t[e]).number);this.updateMatrixWorld()}updateNormal(e){if(e==null)return;let t=fu(e)[0].terms;for(let e=0;e<3;++e)this.normal.setComponent(e,t[e].number)}updateSurface(){let{mesh:e,tri:t,bary:n}=this;if(e==null||t==null||n==null)return;e.getVertexPosition(t.x,tg),e.getVertexPosition(t.y,ng),e.getVertexPosition(t.z,rg),tg.toArray(ig.elements,0),ng.toArray(ig.elements,3),rg.toArray(ig.elements,6),this.position.copy(n).applyMatrix3(ig);let r=this.parent;r.worldToLocal(e.localToWorld(this.position)),ag.set(tg,ng,rg),ag.getNormal(this.normal).transformDirection(e.matrixWorld);let i=r.parent;og.setFromAxisAngle(tg.set(0,1,0),-i.rotation.y),this.normal.applyQuaternion(og)}orient(e){this.pivotEl.style.transform=`rotate(${e}rad)`}updateVisibility(e){this.element.classList.toggle(`hide`,!e),this.slot.assignedNodes().forEach(t=>{if(t.nodeType!==Node.ELEMENT_NODE)return;let n=t,r=n.dataset.visibilityAttribute;if(r!=null){let t=`data-${r}`;n.toggleAttribute(t,e)}n.dispatchEvent(new CustomEvent(`hotspot-visibility`,{detail:{visible:e}}))}),this.initialized=!0}},cg={name:`HorizontalBlurShader`,uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},lg={name:`VerticalBlurShader`,uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};function ug(e,t,n){return(1-n)*e+n*t}var dg=9,fg=2,pg=.3,mg=class extends St{constructor(e,t,n){super(),this.camera=new o,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new Ye,this.horizontalBlurMaterial=new N(cg),this.verticalBlurMaterial=new N(lg),this.intensity=0,this.softness=1,this.boundingBox=new Wt,this.size=new U,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;let{camera:r}=this;r.rotation.x=Math.PI/2,r.left=-.5,r.right=.5,r.bottom=-.5,r.top=.5,this.add(r);let i=new ue,a=new gn({opacity:1,transparent:!0,side:1});this.floor=new an(i,a),this.floor.userData.noHit=!0,r.add(this.floor),this.blurPlane=new an(i),this.blurPlane.visible=!1,r.add(this.blurPlane),e.target.add(this),this.depthMaterial.onBeforeCompile=function(e){e.fragmentShader=e.fragmentShader.replace(/gl_FragColor\s*=\s*vec4\(\s*vec3\(\s*1\.0\s*-\s*fragCoordZ\s*\),\s*opacity\s*\);/,`gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );`)},this.depthMaterial.side=2,this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(e,t,n)}setScene(e,t,n){let{boundingBox:r,size:i,rotation:a,position:o}=this;if(this.isAnimated=e.animationNames.length>0,this.boundingBox.copy(e.boundingBox),this.size.copy(e.size),this.maxDimension=Math.max(i.x,i.y,i.z)*(this.isAnimated?fg:1),this.boundingBox.getCenter(o),n===`back`){let{min:e,max:t}=r;[e.y,e.z]=[e.z,e.y],[t.y,t.z]=[t.z,t.y],[i.y,i.z]=[i.z,i.y],a.x=Math.PI/2,a.y=Math.PI}else a.x=0,a.y=0;if(this.isAnimated){let e=r.min.y,t=r.max.y;i.y=this.maxDimension,r.expandByVector(i.subScalar(this.maxDimension).multiplyScalar(-.5)),r.min.y=e,r.max.y=t,i.set(this.maxDimension,t-e,this.maxDimension)}n===`bottom`?o.y=r.min.y:o.z=r.min.y,this.setSoftness(t)}setSoftness(e){this.softness=e;let{size:t,camera:n}=this,r=this.isAnimated?fg:1,i=r*2**(dg-e*3);this.setMapSize(i);let a=t.y/2,o=t.y*r;n.near=0,n.far=ug(o,a,e),this.depthMaterial.opacity=1/e,n.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(e){let{size:t}=this;this.isAnimated&&(e*=fg);let n=Math.floor(t.x>t.z?e:e*t.x/t.z),r=Math.floor(t.x>t.z?e*t.z/t.x:e),i=10+n,a=10+r;if(this.renderTarget!=null&&(this.renderTarget.width!==i||this.renderTarget.height!==a)&&(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),this.renderTarget==null){let e={format:E};this.renderTarget=new Dt(i,a,e),this.renderTargetBlur=new Dt(i,a,e),this.floor.material.map=this.renderTarget.texture}let o=t.x*(1+10/n),s=t.z*(1+10/r);this.camera.left=-o/2,this.camera.right=o/2,this.camera.bottom=-s/2,this.camera.top=s/2,this.camera.scale.set(1,1,1),this.floor.scale.set(o,s,1),this.blurPlane.scale.set(o,s,1),this.needsUpdate=!0}setIntensity(e){this.intensity=e,e>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=e*ug(pg,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(e){this.floor.position.z=-e+this.gap()}gap(){return .001*this.maxDimension}render(e,t){t.overrideMaterial=this.depthMaterial,this.floor.visible=!1;let n=e.xr.enabled;e.xr.enabled=!1;let r=e.getRenderTarget();e.setRenderTarget(this.renderTarget);let i=e.getClearAlpha();e.setClearAlpha(0);let a=e.state;a!=null&&(a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0)),e.clear();let o=e.autoClear;e.autoClear=!1,e.render(t,this.camera),e.autoClear=o,t.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(e),e.xr.enabled=n,e.setRenderTarget(r),e.setClearAlpha(i)}blurShadow(e){let{camera:t,horizontalBlurMaterial:n,verticalBlurMaterial:r,renderTarget:i,renderTargetBlur:a,blurPlane:o}=this;o.visible=!0,o.material=n,n.uniforms.h.value=1/this.renderTarget.width,n.uniforms.tDiffuse.value=this.renderTarget.texture,e.setRenderTarget(a),e.render(o,t),o.material=r,r.uniforms.v.value=1/this.renderTarget.height,r.uniforms.tDiffuse.value=this.renderTargetBlur.texture,e.setRenderTarget(i),e.render(o,t),o.visible=!1}dispose(){this.renderTarget!=null&&this.renderTarget.dispose(),this.renderTargetBlur!=null&&this.renderTargetBlur.dispose(),this.depthMaterial.dispose(),this.horizontalBlurMaterial.dispose(),this.verticalBlurMaterial.dispose(),this.floor.material.dispose(),this.floor.geometry.dispose(),this.blurPlane.geometry.dispose(),this.removeFromParent()}},hg=100,gg=new U,_g=new U,vg=new U,yg=new Te,bg=new U,xg=new Qe,Sg=class extends ee{constructor({canvas:e,element:t,width:n,height:r}){super(),this.annotationRenderer=new Kl,this.effectRenderer=null,this.schemaElement=document.createElement(`script`),this.width=1,this.height=1,this.aspect=1,this.scaleStep=0,this.renderCount=0,this.externalRenderer=null,this.appendedAnimations=[],this.markedAnimations=[],this.camera=new yt(45,1,.1,100),this.xrCamera=null,this.url=null,this.extraUrls=[],this.scenePivot=new St,this.target=new St,this.animationNames=[],this.boundingBox=new Wt,this.boundingSphere=new R,this.size=new U,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=new Set,this.exposure=1,this.toneMapping=7,this.canScale=!0,this.isDirty=!1,this.goalTarget=new U,this.targetDamperX=new ou,this.targetDamperY=new ou,this.targetDamperZ=new ou,this._currentGLTFs=[],this._models=[],this.boundsAndShadowDirty=!1,this.mixers=[],this.mixerPausedStates=[],this.mixerEventSubscriptions=[],this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationActions=[],this.groundedSkybox=new $h,this.name=`ModelScene`,this.element=t,this.canvas=e,this.camera=new yt(45,1,.1,100),this.camera.name=`MainCamera`,this.add(this.scenePivot),this.scenePivot.name=`Pivot`,this.scenePivot.add(this.target),this.setSize(n,r),this.target.name=`Target`,this.mixers=[];let{domElement:i}=this.annotationRenderer,{style:a}=i;a.display=`none`,a.pointerEvents=`none`,a.position=`absolute`,a.top=`0`,this.element.shadowRoot.querySelector(`.default`).appendChild(i),this.schemaElement.setAttribute(`type`,`application/ld+json`)}get context(){return this.canvas.getContext(`2d`)}getCamera(){return this.xrCamera==null?this.camera:this.xrCamera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}forceRescale(){this.scaleStep=-1,this.queueRender()}async setObject(e){this.reset(),this._models=[e],this.target.add(e),await this.setupScene()}async setSource(e,t=[],n=()=>{}){if((!e||e===this.url)&&t.join(`,`)===this.extraUrls.join(`,`)){n(1);return}if(this.reset(),this.url=e,this.extraUrls=t,this.externalRenderer!=null){let e=await this.externalRenderer.load(n);this.boundingSphere.radius=e.framedRadius,this.idealAspect=e.fieldOfViewAspect;return}this.cancelPendingSourceChange!=null&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);let r=[];try{let i=[];e&&i.push(e),t&&i.push(...t),i.length>0&&(r=await new Promise((e,t)=>{this.cancelPendingSourceChange=()=>t(),(async()=>{try{e(await Promise.all(i.map(e=>this.element[$].loader.load(e,this.element,n))))}catch(e){t(e)}})()}))}catch(e){if(e==null)return;throw e}this.cancelPendingSourceChange=null,this.reset(),this.url=e,this.extraUrls=t,this._currentGLTFs=r;for(let e of r)e==null?(this.mixers.push(this.createMixer(this.target)),this.mixerPausedStates.push(!1),this.currentAnimationActions.push(null)):(this._models.push(e.scene),this.target.add(e.scene),this.mixers.push(this.createMixer(e.scene)),this.mixerPausedStates.push(!1),this.currentAnimationActions.push(null));let i=new Map,a=[],o=[];for(let e of r)for(let t of e.animations||[])i.set(t.name,t),a.push(t.name),o.push(t);this.animations=o,this.animationsByName=i,this.animationNames=a,await this.setupScene()}async setupScene(){this.applyTransform(),this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity),this.setGroundedSkybox()}updateModelTransforms(e,t,n,r){let i=this._models[e];if(i){if(t){let e=fu(t)[0].terms;if(e.length>=3){let t=Cu(e[0]).number,n=Cu(e[1]).number,r=Cu(e[2]).number;i.position.set(t,n,r)}}if(n){let e=fu(n)[0].terms;if(e.length>=3){let t=Cu(e[0]).number,n=Cu(e[1]).number,r=Cu(e[2]).number;i.quaternion.setFromEuler(new _t(n,r,t,`YXZ`))}}if(r){let e=r.split(` `).map(e=>e.trim()).filter(e=>e.length>0).map(Number);e.length===1&&!isNaN(e[0])?i.scale.setScalar(e[0]):e.length===3&&!e.some(isNaN)&&i.scale.set(e[0],e[1],e[2])}i.updateMatrixWorld(!0),this.boundsAndShadowDirty=!0,this.queueRender()}}updateBoundingBoxAndShadowIfDirty(){this.boundsAndShadowDirty&&(this.boundsAndShadowDirty=!1,this.updateBoundingBox(),this.updateShadow())}reset(){this.url=null,this.extraUrls=[],this.renderCount=0,this.queueRender(),this.shadow!=null&&this.shadow.setIntensity(0),this.bakedShadows.clear();let{_models:e}=this;for(let t of e)t?.removeFromParent();this._models=[];let t=this._currentGLTFs;for(let e of t)e?.dispose();this._currentGLTFs=[];for(let e of this.currentAnimationActions)e?.stop();this.currentAnimationActions=[];for(let e of this.mixers)e.stopAllAction(),e.uncacheRoot(this);this.mixers=[],this.mixerPausedStates=[]}dispose(){this.reset(),this.shadow!=null&&(this.shadow.dispose(),this.shadow=null),this.element[Kh]=null,this.element[qh]=null,this.element[Jh]=null}get currentGLTF(){return this._currentGLTFs[0]||null}get currentGLTFs(){return this._currentGLTFs}setSize(e,t){if(this.width!==e||this.height!==t){if(this.width=Math.max(e,1),this.height=Math.max(t,1),this.annotationRenderer.setSize(e,t),this.aspect=this.width/this.height,this.externalRenderer!=null){let n=window.devicePixelRatio;this.externalRenderer.resize(e*n,t*n)}this.queueRender()}}markBakedShadow(e){e.userData.noHit=!0,this.bakedShadows.add(e)}unmarkBakedShadow(e){e.userData.noHit=!1,e.visible=!0,this.bakedShadows.delete(e),this.boundingBox.expandByObject(e)}findBakedShadows(e){let t=new Wt;e.traverse(e=>{let n=e;if(!n.material||!n.material.transparent)return;t.setFromObject(n);let r=t.getSize(bg),i=Math.min(r.x,r.y,r.z);Math.max(r.x,r.y,r.z)<hg*i||this.markBakedShadow(n)})}checkBakedShadows(){let{min:e,max:t}=this.boundingBox,n=new Wt;this.boundingBox.getSize(this.size);for(let r of this.bakedShadows)n.setFromObject(r),!(n.min.y<e.y+this.size.y/hg&&n.min.x<=e.x&&n.max.x>=t.x&&n.min.z<=e.z&&n.max.z>=t.z)&&(n.min.z<e.z+this.size.z/hg&&n.min.x<=e.x&&n.max.x>=t.x&&n.min.y<=e.y&&n.max.y>=t.y||this.unmarkBakedShadow(r))}applyTransform(){let{models:e}=this;if(e.length===0)return;let t=fu(this.element.orientation)[0].terms,n=Cu(t[0]).number,r=Cu(t[1]).number,i=Cu(t[2]).number,a=fu(this.element.scale)[0].terms;for(let t of e)t.quaternion.setFromEuler(new _t(r,i,n,`YXZ`)),t.scale.set(a[0].number,a[1].number,a[2].number)}updateBoundingBox(){let{models:e}=this;if(e.length===0)return;for(let t of e)this.target.remove(t),this.findBakedShadows(t);let t=(e,t)=>e.expandByPoint(t);this.setBakedShadowVisibility(!1);let n=new Wt;for(let r of e)n=ql(r,t,n);if(this.boundingBox=n,this.boundingBox.isEmpty()){this.setBakedShadowVisibility(!0),this.bakedShadows.forEach(e=>this.unmarkBakedShadow(e)),n=new Wt;for(let r of e)n=ql(r,t,n);this.boundingBox=n}this.checkBakedShadows(),this.setBakedShadowVisibility(),this.boundingBox.getSize(this.size);for(let t of e)this.target.add(t)}async updateFraming(){let{models:e}=this;if(e.length===0)return;for(let t of e)this.target.remove(t);this.setBakedShadowVisibility(!1);let{center:t}=this.boundingSphere;this.element.requestUpdate(`cameraTarget`),await this.element.updateComplete,t.copy(this.getTarget());let n=(e,n)=>Math.max(e,t.distanceToSquared(n)),r=0;for(let t of e)r=Math.max(r,ql(t,n,0));this.boundingSphere.radius=Math.sqrt(r);let i=(e,n)=>{n.sub(t);let r=Math.sqrt(n.x*n.x+n.z*n.z);return Math.max(e,r/(this.idealCameraDistance()-Math.abs(n.y)))},a=0;for(let t of e)a=Math.max(a,ql(t,i,0));this.idealAspect=a/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility();for(let t of e)this.target.add(t)}setBakedShadowVisibility(e=this.shadowIntensity<=0){for(let t of this.bakedShadows)t.visible=e}idealCameraDistance(){let e=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(e)}adjustedFoV(e){let t=Math.tan(e/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(t)*180/Math.PI}getNDC(e,t){if(this.xrCamera!=null)xg.set(e/window.screen.width,t/window.screen.height);else{let n=this.element.getBoundingClientRect();xg.set((e-n.x)/this.width,(t-n.y)/this.height)}return xg.multiplyScalar(2).subScalar(1),xg.y*=-1,xg}getSize(){return{width:this.width,height:this.height}}setEnvironmentAndSkybox(e,t){this.element[$].arRenderer.presentedScene!==this&&(this.environment=e,this.setBackground(t),this.queueRender())}setBackground(e){this.groundedSkybox.map=e,this.groundedSkybox.isUsable()?(this.target.add(this.groundedSkybox),this.background=null):(this.target.remove(this.groundedSkybox),this.background=e)}farRadius(){return this.boundingSphere.radius*(this.groundedSkybox.parent==null?1:10)}setGroundedSkybox(){let e=fu(this.element.skyboxHeight)[0].terms[0],t=Cu(e).number,n=10*this.boundingSphere.radius;this.groundedSkybox.updateGeometry(t,n),this.groundedSkybox.position.y=t-(this.shadow?2*this.shadow.gap():0),this.setBackground(this.groundedSkybox.map)}setTarget(e,t,n){this.goalTarget.set(-e,-t,-n)}setTargetDamperDecayTime(e){this.targetDamperX.setDecayTime(e),this.targetDamperY.setDecayTime(e),this.targetDamperZ.setDecayTime(e)}getTarget(){return this.goalTarget.clone().multiplyScalar(-1)}getDynamicTarget(){return this.target.position.clone().multiplyScalar(-1)}jumpToGoal(){this.updateTarget(iu)}updateTarget(e){let t=this.goalTarget,n=this.target.position;if(t.equals(n))return!1;{let r=this.boundingSphere.radius/10,{x:i,y:a,z:o}=n;return i=this.targetDamperX.update(i,t.x,e,r),a=this.targetDamperY.update(a,t.y,e,r),o=this.targetDamperZ.update(o,t.z,e,r),this.groundedSkybox.position.x=-i,this.groundedSkybox.position.z=-o,this.target.position.set(i,a,o),this.target.updateMatrixWorld(),this.queueRender(),!0}}pointTowards(e,t){let{x:n,z:r}=this.position;this.yaw=Math.atan2(e-n,t-r)}get model(){return this._models[0]||null}get models(){return this._models}set yaw(e){this.scenePivot.rotation.y=e,this.groundedSkybox.rotation.y=-e,this.queueRender()}get yaw(){return this.scenePivot.rotation.y}set animationTime(e){for(let t of this.mixers)t.setTime(e);this.queueShadowRender()}get animationTime(){let e=0;for(let t of this.currentAnimationActions)if(t!=null){let n=t.time,r=Math.max(t._loopCount,0);t.loop===2202&&(r&1)==1&&(n=(t.getClip()?t.getClip().duration:0)-t.time),n>e&&(e=n)}return e}set animationTimeScale(e){for(let t of this.mixers)t.timeScale=e}get animationTimeScale(){return this.mixers.length>0?this.mixers[0].timeScale:1}get duration(){let e=0;for(let t of this.currentAnimationActions)if(t!=null&&t.getClip()){let n=t.getClip().duration;n>e&&(e=n)}return e}get hasActiveAnimation(){return this.currentAnimationActions.some(e=>e!=null)}playAnimation(e=null,t=0,n=Lt,r=1/0,i=null){let a=i??0,o=i==null?this._models.length:i+1;for(let i=a;i<o;i++){let a=this._currentGLTFs[i];if(a==null)continue;let o=a.animations||[];if(o.length===0)continue;let s=null;if(e!=null){for(let t=o.length-1;t>=0;t--)if(o[t].name===e){s=o[t];break}if(s==null){let t=parseInt(e);!isNaN(t)&&t>=0&&t<o.length&&(s=o[t])}}s??=o[0];try{let e=this.currentAnimationActions[i],a=this.mixers[i],o=a.clipAction(s,this._models[i]);this.currentAnimationActions[i]=o,this.element.paused?(a.stopAllAction(),this.mixerPausedStates[i]=!0):(o.paused=!1,this.mixerPausedStates[i]=!1,e!=null&&o!==e?o.crossFadeFrom(e,t,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),o.setLoop(n,r),o.enabled=!0,o.clampWhenFinished=!0,o.play()}catch(e){console.error(e)}}}appendAnimation(e=``,t=Lt,n=1/0,r=1,i=1,a=!1,o=!1,s=!0,c=null,l=!1,u=null){if(this.currentGLTF==null||e===this.element.animationName)return;let{animations:d}=this;if(d==null||d.length===0)return;let f=e?this.animationsByName.get(e):null;if(f==null)return;if(typeof n==`string`?isNaN(parseFloat(n))?(n=1/0,console.warn(`Invalid repetitionCount value: ${n}. Using default: Infinity`)):(parseInt(n)<1&&console.warn(`Invalid repetitionCount value: ${n}. Using 1 as minimum.`),n=Math.max(parseInt(n),1)):typeof n==`number`&&!isNaN(n)?n<1&&(console.warn(`Invalid repetitionCount value: ${n}. Using 1 as minimum.`),n=1):(console.warn(`Invalid repetitionCount value: ${n}. Using default: Infinity`),n=1/0),n===1&&t!==2200&&(t=rt),typeof r==`string`){let e=parseFloat(r);isNaN(e)||e<0||e>1?(r=1,console.warn(`Invalid weight value: ${r}. Using default: 1`)):r=e}if(typeof i==`string`){let e=parseFloat(i);isNaN(e)||e<0?(i=1,console.warn(`Invalid timeScale value: ${i}. Using default: 1`)):i=e}if(typeof c==`string`){let e=parseFloat(c);isNaN(e)?(c=null,console.warn(`Invalid time value: ${c}. Using default: 0 or previous time`)):c=e}let{shouldFade:p,duration:m}=this.parseFadeValue(a,!1,1.25),h=1.25,g=!1,_=0;typeof o==`boolean`?(g=o,_=o?h:0):typeof o==`number`?(g=o>0,_=Math.max(o,0),o<0&&console.warn(`Invalid warp value: ${o}. Using default: false`)):typeof o==`string`&&(o.toLowerCase().trim()===`true`?(g=!0,_=h):o.toLowerCase().trim()===`false`?g=!1:isNaN(parseFloat(o))?console.warn(`Invalid warp value: ${o}. Using default: false`):(_=Math.max(parseFloat(o),0),g=_>0,_<=0&&console.warn(`Invalid warp value: ${o}. Using default: false`)));try{l&&this.appendedAnimations.includes(e)&&(this.markedAnimations.map(e=>e.name).includes(e)||this.markedAnimations.push({name:e,loopMode:t,repetitionCount:n}));let a=u??0,o=u==null?this.mixers.length:u+1;for(let e=a;e<o;e++){let a=this.mixers[e],o=a.existingAction(f)||a.clipAction(f,this._models[e]||this),l=o.timeScale;typeof c==`number`&&(o.time=Math.min(Math.max(c,0),f.duration)),p?o.fadeIn(m):r>=0&&(o.weight=Math.min(Math.max(r,0),1)),g?o.warp(s?l:0,i,_):o.timeScale=i,o.isRunning()||(o.time==f.duration&&o.stop(),o.setLoop(t,n),o.paused=!1,o.enabled=!0,o.clampWhenFinished=!0,o.play())}this.appendedAnimations.includes(e)||this.element[Q].appendedAnimations.push(e)}catch(e){console.error(e)}}parseFadeValue(e,t=!0,n=1.5){let r=e=>e.toLowerCase().trim();if(typeof e==`boolean`)return{shouldFade:e,duration:e?n:0};if(typeof e==`number`){let t=Math.max(e,0);return{shouldFade:t>0,duration:t}}if(typeof e==`string`){let t=r(e);if(t===`true`)return{shouldFade:!0,duration:n};if(t===`false`)return{shouldFade:!1,duration:0};let i=parseFloat(t);if(!isNaN(i)){let e=Math.max(i,0);return{shouldFade:e>0,duration:e}}}return console.warn(`Invalid fade value: ${e}. Using default: ${t}`),{shouldFade:t,duration:t?n:0}}detachAnimation(e=``,t=!0,n=null){if(this.currentGLTF==null||e===this.element.animationName)return;let{animations:r}=this;if(r==null||r.length===0)return;let i=e?this.animationsByName.get(e):null;if(i==null)return;let{shouldFade:a,duration:o}=this.parseFadeValue(t,!0,1.5);try{let t=n??0,r=n==null?this.mixers.length:n+1;for(let e=t;e<r;e++){let t=this.mixers[e],n=t.existingAction(i)||t.clipAction(i,this._models[e]||this);a?n.fadeOut(o):n.stop()}this.element[Q].appendedAnimations=this.element[Q].appendedAnimations.filter(t=>t!==e)}catch(e){console.error(e)}}updateAnimationLoop(e=``,t=Lt,n=1/0,r=null){if(this.currentGLTF==null||e===this.element.animationName)return;let{animations:i}=this;if(i==null||i.length===0)return;let a=null;if(e&&(a=this.animationsByName.get(e)),a!=null)try{let e=r??0,i=r==null?this.mixers.length:r+1;for(let r=e;r<i;r++){let e=this.mixers[r],i=e.existingAction(a)||e.clipAction(a,this._models[r]||this);i.stop(),i.setLoop(t,n),i.play()}}catch(e){console.error(e)}}stopAnimation(){this.currentAnimationActions.fill(null);for(let e of this.mixers)e.stopAllAction();this.mixerPausedStates.fill(!0)}isAllAnimationsPaused(){return this.mixerPausedStates.every(e=>e)}pauseAnimation(e=null){let t=e??0,n=e==null?this.mixers.length:e+1;for(let e=t;e<n;e++)this.mixerPausedStates[e]=!0}unpauseAnimation(e=null){let t=e??0,n=e==null?this.mixers.length:e+1;for(let e=t;e<n;e++)this.mixerPausedStates[e]=!1}updateAnimation(e){for(let t=0;t<this.mixers.length;t++)this.mixerPausedStates[t]||this.mixers[t].update(e);this.queueShadowRender()}subscribeMixerEvent(e,t){this.mixerEventSubscriptions.push({event:e,callback:t});for(let n of this.mixers)n.addEventListener(e,t)}createMixer(e){let t=new mt(e);for(let{event:e,callback:n}of this.mixerEventSubscriptions)t.addEventListener(e,n);return t}updateShadow(){let e=this.shadow;if(e!=null){let t=this.element.arPlacement===`wall`?`back`:`bottom`;e.setScene(this,this.shadowSoftness,t),e.needsUpdate=!0}}renderShadow(e){this.updateBoundingBoxAndShadowIfDirty();let t=this.shadow;t!=null&&t.needsUpdate==1&&(t.render(e,this),t.needsUpdate=!1)}queueShadowRender(){this.shadow!=null&&(this.shadow.needsUpdate=!0)}setShadowIntensity(e){if(this.shadowIntensity=e,this.currentGLTF!=null&&(this.setBakedShadowVisibility(),!(e<=0&&this.shadow==null))){if(this.shadow==null){let e=this.element.arPlacement===`wall`?`back`:`bottom`;this.shadow=new mg(this,this.shadowSoftness,e)}this.shadow.setIntensity(e)}}setShadowSoftness(e){this.shadowSoftness=e,this.shadow?.setSoftness(e)}setShadowOffset(e){this.shadow?.setOffset(e)}getHit(e=this){return yg.intersectObject(e,!0).find(e=>e.object.visible&&!e.object.userData.noHit)}hitFromController(e,t=this){return yg.setFromXRController(e),this.getHit(t)}hitFromPoint(e,t=this){return yg.setFromCamera(e,this.getCamera()),this.getHit(t)}getModelIndexFromHit(e){let t=e.object;for(;t!=null;){let e=this.models.indexOf(t);if(e!==-1)return e;t=t.parent}return 0}positionAndNormalFromPoint(e,t=this){let n=this.hitFromPoint(e,t);if(n==null)return null;let r=n.point,i=n.face==null?yg.ray.direction.clone().multiplyScalar(-1):n.face.normal.clone().applyNormalMatrix(new H().getNormalMatrix(n.object.matrixWorld)),a=n.uv??null,o=this.getModelIndexFromHit(n),s=this.models[o]||this.target;return{position:r,normal:i,uv:a,modelIndex:o,worldToModel:new He().copy(s.matrixWorld).invert()}}surfaceFromPoint(e,t=this){let n=this.hitFromPoint(e,t);if(n==null||n.face==null)return null;let r=this.getModelIndexFromHit(n),i=r===0?this.element.model:this.element.extraModels?.[r-1];if(i==null)return null;let a=i[Lh](n);if(a==null)return null;let{meshes:o,primitives:s}=a.mesh.userData.associations,c=new U,l=new U,u=new U,{a:d,b:f,c:p}=n.face,m=n.object;m.getVertexPosition(d,c),m.getVertexPosition(f,l),m.getVertexPosition(p,u);let h=new Ie(c,l,u),g=new U;h.getBarycoord(m.worldToLocal(n.point),g),h.getBarycoord(m.worldToLocal(n.point),g);let _=`${o} ${s} ${d} ${f} ${p} ${g.x.toFixed(3)} ${g.y.toFixed(3)} ${g.z.toFixed(3)}`;return r===0?_:`${r} ${_}`}updateHotspotAttachment(e){let t=e.modelIndex!=null&&e.modelIndex>0&&this._models[e.modelIndex]?this._models[e.modelIndex]:this.target;e.parent!==t&&(t.add(e),e.updatePosition(e.position.toArray().join(` `)+`m`),e.updateMatrixWorld(!0))}addHotspot(e){this.updateHotspotAttachment(e),this.annotationRenderer.domElement.appendChild(e.element),this.updateSurfaceHotspot(e)}removeHotspot(e){e.parent&&e.parent.remove(e)}forHotspots(e){let t=[...this.target.children];for(let n=0,r=t.length;n<r;n++){let r=t[n];r instanceof sg&&e(r)}for(let t of this._models)if(t&&t!==this.target){let n=[...t.children];for(let t=0,r=n.length;t<r;t++){let r=n[t];r instanceof sg&&e(r)}}}updateSurfaceHotspot(e){if(e.surface==null)return;let t=fu(e.surface)[0].terms;if(t.length!==8&&t.length!==9){console.warn(e.surface+` does not have exactly 8 or 9 numbers. Did you use an outdated string?`);return}let n=t.length===8,r=n?0:t[0].number,i=+!n,a=e.modelIndex??r;e.modelIndex=a,this.updateHotspotAttachment(e);let o=a===0?this.element.model:this.element.extraModels?.[a-1];if(o==null)return;let s=o[Rh](t[0+i].number,t[1+i].number);if(s==null){console.warn(e.surface+` does not match a node/primitive in this glTF! Skipping this hotspot.`);return}let c=s.mesh.geometry.attributes.position.count,l=new U(t[2+i].number,t[3+i].number,t[4+i].number);if(l.x>=c||l.y>=c||l.z>=c){console.warn(e.surface+` vertex indices out of range in this glTF! Skipping this hotspot.`);return}let u=new U(t[5+i].number,t[6+i].number,t[7+i].number);e.mesh=s.mesh,e.tri=l,e.bary=u,e.updateSurface()}animateSurfaceHotspots(){this.element.paused||this.forHotspots(e=>{e.updateSurface()})}updateHotspotsVisibility(e){this.forHotspots(t=>{gg.copy(e),_g.setFromMatrixPosition(t.matrixWorld),gg.sub(_g),vg.copy(t.normal).transformDirection(this.target.matrixWorld),gg.dot(vg)<0?t.hide():t.show()})}orientHotspots(e){this.forHotspots(t=>{t.orient(e)})}setHotspotsVisibility(e){this.forHotspots(t=>{t.visible=e})}updateSchema(e){let{schemaElement:t,element:n}=this,{alt:r,poster:i,iosSrc:a}=n;if(e!=null){let n=[{"@type":`MediaObject`,contentUrl:e,encodingFormat:e.split(`.`).pop()?.toLowerCase()===`gltf`?`model/gltf+json`:`model/gltf-binary`}];a&&n.push({"@type":`MediaObject`,contentUrl:a,encodingFormat:`model/vnd.usdz+zip`}),t.textContent=JSON.stringify({"@context":`http://schema.org/`,"@type":`3DModel`,image:i??void 0,name:r??void 0,encoding:n}),document.head.appendChild(t)}else t.parentElement!=null&&t.parentElement.removeChild(t)}},Cg=class extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(e){let t={progress:0,completed:!1};return this.ongoingActivities.add(t),this.ongoingActivityCount===1&&this.announceTotalProgress(t,0,e),n=>{let r;return r=Math.max(hs(n,0,1),t.progress),r!==t.progress&&this.announceTotalProgress(t,r,e),t.progress}}announceTotalProgress(e,t,n){let r=0,i=0;t==1&&(e.completed=!0);for(let e of this.ongoingActivities){let{progress:t}=e;r+=1-t,e.completed&&i++}let a=e.progress;e.progress=t,this.totalProgress+=(t-a)*(1-this.totalProgress)/r;let o=i===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent(`progress`,{detail:{totalProgress:o,reason:n}})),i===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}},wg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Tg,Eg,Dg,Og,kg,Ag,jg,Mg,Ng,Pg,Fg,Ig,Lg,Rg,zg,Bg=10,Vg=50,Hg=0,Ug=300,Wg=150,Gg=document.createElement(`canvas`),Kg=Symbol(`fallbackResizeHandler`),qg=Symbol(`defaultAriaLabel`),Jg=Symbol(`resizeObserver`),Yg=Symbol(`clearModelTimeout`),Xg=Symbol(`onContextLost`),Zg=Symbol(`loaded`),Qg=Symbol(`status`),$g=Symbol(`onFocus`),e_=Symbol(`onBlur`),t_=Symbol(`onSlotChange`),n_=Symbol(`onExtraModelChanged`),r_=Symbol(`updateSize`),i_=Symbol(`intersectionObserver`),a_=Symbol(`isElementInViewport`),o_=Symbol(`announceModelVisibility`),s_=Symbol(`ariaLabel`),c_=Symbol(`altDefaulted`),l_=Symbol(`statusElement`),u_=Symbol(`updateStatus`),d_=Symbol(`loadedTime`),f_=Symbol(`updateSource`),p_=Symbol(`markLoaded`),m_=Symbol(`container`),h_=Symbol(`input`),g_=Symbol(`canvas`),Q=Symbol(`scene`),__=Symbol(`needsRender`),v_=Symbol(`tick`),y_=Symbol(`onModelLoad`),b_=Symbol(`onResize`),$=Symbol(`renderer`),x_=Symbol(`progressTracker`),S_=Symbol(`getLoaded`),C_=Symbol(`getModelIsVisible`),w_=Symbol(`shouldAttemptPreload`),T_=e=>({x:e.x,y:e.y,z:e.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),E_=e=>({u:e.x,v:e.y,toString(){return`${this.u} ${this.v}`}}),D_=class extends Hn{static get is(){return`model-viewer`}static set modelCacheSize(e){zl[Ll].evictionThreshold=e}static get modelCacheSize(){return zl[Ll].evictionThreshold}static set minimumRenderScale(e){e>1&&console.warn(`<model-viewer> minimumRenderScale has been clamped to a maximum value of 1.`),e<=0&&console.warn(`<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25.`),fm.singleton.minScale=e}static get minimumRenderScale(){return fm.singleton.minScale}get loaded(){return this[S_]()}get[(Tg=a_,Eg=Zg,Dg=d_,Og=Qg,kg=Yg,Ag=t_,jg=n_,Mg=Kg,Ng=o_,Pg=Jg,Fg=i_,Ig=x_,$)](){return fm.singleton}get modelIsVisible(){return this[C_]()}constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[Tg]=!1,this[Eg]=!1,this[Dg]=0,this[Og]=``,this[kg]=null,this[Ag]=()=>{if(!this[Q])return;let e=Array.from(this.querySelectorAll(`extra-model`)),t=e.map(e=>e.src).filter(e=>e!=null),n=this[Q].extraUrls||[];(t.join(`,`)!==n.join(`,`)||e.length!==n.length)&&(this.src==null&&e.length===0?(this[Zg]=!1,this[d_]=0,this[Q].reset()):(this[Zg]=!1,this[d_]=0,this[f_]()))},this[jg]=e=>{let t=e,n=t.target,r=Array.from(this.querySelectorAll(`extra-model`)).indexOf(n);if(r===-1)return;let i=this.src?r+1:r;t.detail.srcChanged?(this[Zg]=!1,this[d_]=0,this[f_]()):this[Q]&&this[Q].updateModelTransforms(i,t.detail.offset,t.detail.orientation,t.detail.scale)},this[Mg]=ms(()=>{let e=this.getBoundingClientRect();this[r_](e)},Vg),this[Ng]=ms(e=>{let t=this.modelIsVisible;t!==e&&this.dispatchEvent(new CustomEvent(`model-visibility`,{detail:{visible:t}}))},Hg),this[Pg]=null,this[Fg]=null,this[Ig]=new Cg,this[Lg]=()=>{this[l_].textContent=this[Qg]},this[Rg]=()=>{this[l_].textContent=``},this[zg]=e=>{this.dispatchEvent(new CustomEvent(`error`,{detail:{type:`webglcontextlost`,sourceError:e.sourceEvent}}))},this.attachShadow({mode:`open`});let e=this.shadowRoot;Ms(e),this[m_]=e.querySelector(`.container`),this[h_]=e.querySelector(`.userInput`),this[g_]=e.querySelector(`canvas`),this[l_]=e.querySelector(`#status`),this[qg]=this[h_].getAttribute(`aria-label`);let t,n;if(this.isConnected){let e=this.getBoundingClientRect();t=e.width,n=e.height}else t=Ug,n=Wg;this[Q]=new Sg({canvas:this[g_],element:this,width:t,height:n}),Promise.resolve().then(()=>{this[r_](this.getBoundingClientRect())}),$o&&(this[Jg]=new ResizeObserver(e=>{if(!this[$].isPresenting)for(let t of e)t.target===this&&this[r_](t.contentRect)})),es?this[i_]=new IntersectionObserver(e=>{for(let t of e)if(t.target===this){let e=this.modelIsVisible;this[a_]=t.isIntersecting,this[o_](e),this[a_]&&!this.loaded&&this[f_]()}},{root:null,rootMargin:`0px`,threshold:1e-5}):this[a_]=!0}connectedCallback(){super.connectedCallback&&super.connectedCallback(),$o?this[Jg].observe(this):self.addEventListener(`resize`,this[Kg]),es&&this[i_].observe(this),this.addEventListener(`focus`,this[$g]),this.addEventListener(`blur`,this[e_]),this.addEventListener(`extra-model-changed`,this[n_]);let e=this.shadowRoot.querySelector(`.slot.default slot`);e&&e.addEventListener(`slotchange`,this[t_]);let t=this[$];t.addEventListener(`contextlost`,this[Xg]),t.registerScene(this[Q]),this[Yg]!=null&&(self.clearTimeout(this[Yg]),this[Yg]=null,this.requestUpdate(`src`,null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),$o?this[Jg].unobserve(this):self.removeEventListener(`resize`,this[Kg]),es&&this[i_].unobserve(this),this.removeEventListener(`focus`,this[$g]),this.removeEventListener(`blur`,this[e_]),this.removeEventListener(`extra-model-changed`,this[n_]);let e=this.shadowRoot.querySelector(`.slot.default slot`);e&&e.removeEventListener(`slotchange`,this[t_]);let t=this[$];t.removeEventListener(`contextlost`,this[Xg]),t.unregisterScene(this[Q]),this[Yg]=self.setTimeout(()=>{this[Q].dispose(),this[Yg]=null},Bg)}updated(e){if(super.updated(e),e.has(`src`)){let e=Array.from(this.querySelectorAll(`extra-model`)),t=e.map(e=>e.src).filter(e=>e!=null).join(`,`)===(this[Q].extraUrls||[]).join(`,`);this.src==null&&e.length===0?(this[Zg]=!1,this[d_]=0,this[Q].reset()):(this.src!==this[Q].url||!t)&&(this[Zg]=!1,this[d_]=0,this[f_]())}if(e.has(`alt`)&&this[h_].setAttribute(`aria-label`,this[s_]),e.has(`generateSchema`)){if(this.generateSchema){let e=Array.from(this.querySelectorAll(`extra-model`)).map(e=>e.src).filter(e=>e!=null),t=this.src||e[0]||null;this[Q].updateSchema(t)}else this[Q].updateSchema(null)}}toDataURL(e,t){return this[$].displayCanvas(this[Q]).toDataURL(e,t)}async toBlob(e){let t=e?e.mimeType:void 0,n=e?e.qualityArgument:void 0,r=e?e.idealAspect:void 0,{width:i,height:a,idealAspect:o,aspect:s}=this[Q],{dpr:c,scaleFactor:l}=this[$],u=i*l*c,d=a*l*c,f=0,p=0;if(r===!0){if(o>s){let e=d;d=Math.round(u/o),p=(e-d)/2}else{let e=u;u=Math.round(d*o),f=(e-u)/2}}Gg.width=u,Gg.height=d;try{return new Promise(async(e,r)=>{Gg.getContext(`2d`).drawImage(this[$].displayCanvas(this[Q]),f,p,u,d,0,0,u,d),Gg.toBlob(t=>{if(!t)return r(Error(`Unable to retrieve canvas blob`));e(t)},t,n)})}finally{this[r_]({width:i,height:a})}}registerEffectComposer(e){e.setRenderer(this[$].threeRenderer),e.setMainCamera(this[Q].getCamera()),e.setMainScene(this[Q]),this[Q].effectRenderer=e}unregisterEffectComposer(){this[Q].effectRenderer=null}registerRenderer(e){this[Q].externalRenderer=e}unregisterRenderer(){this[Q].externalRenderer=null}get[s_](){return this[c_]}get[c_](){return this.alt==null||this.alt===`null`?this[qg]:this.alt}[S_](){return this[Zg]}[C_](){return this.loaded&&this[a_]}[w_](){let e=Array.from(this.querySelectorAll(`extra-model`));return!!(this.src||e.length>0)&&this[a_]}[r_]({width:e,height:t}){e!==0&&t!==0&&(this[m_].style.width=`${e}px`,this[m_].style.height=`${t}px`,this[b_]({width:e,height:t}))}[v_](e,t){var n;(n=this[Q].effectRenderer)==null||n.beforeRender(e,t)}[p_](){this[Zg]||(this[Zg]=!0,this[d_]=performance.now())}[__](){this[Q].queueRender()}[y_](){}[u_](e){this[Qg]=e;let t=this.getRootNode();t!=null&&t.activeElement===this&&this[l_].textContent!=e&&(this[l_].textContent=e)}[(Lg=$g,Rg=e_,b_)](e){this[Q].setSize(e.width,e.height)}async[(zg=Xg,f_)](){let e=this[Q],t=Array.from(this.querySelectorAll(`extra-model`)).map(e=>e.src).filter(e=>e!=null),n=t.join(`,`)===(e.extraUrls||[]).join(`,`);if(this.loaded||!this[w_]()||this.src===e.url&&n)return;let r=this.src,i=r||t[0]||null;this.generateSchema&&e.updateSchema(i),this[u_](`Loading`),e.stopAnimation();let a=this[x_].beginActivity(`model-load`);try{let n=e.setSource(r,t,e=>a(hs(e,0,1)*.95)),o=this[Es]();await Promise.all([n,o]),Array.from(this.querySelectorAll(`extra-model`)).forEach((e,t)=>{let n=this.src?t+1:t;this[Q].updateModelTransforms(n,e.offset,e.orientation,e.scale)}),this[p_](),this[y_](),this.updateComplete.then(()=>{this.dispatchEvent(new CustomEvent(`before-render`))}),await new Promise(e=>{let t=setTimeout(()=>{console.warn(`rAF timed out in updateSource`),e()},500);requestAnimationFrame(()=>{requestAnimationFrame(()=>{clearTimeout(t),e()})})}),this.dispatchEvent(new CustomEvent(`load`,{detail:{url:i}}))}catch(e){this.dispatchEvent(new CustomEvent(`error`,{detail:{type:`loadfailure`,sourceError:e}}))}finally{a(1)}}};wg([G({type:String})],D_.prototype,`alt`,void 0),wg([G({type:String})],D_.prototype,`src`,void 0),wg([G({type:Boolean,attribute:`with-credentials`})],D_.prototype,`withCredentials`,void 0),wg([G({type:Boolean,attribute:`generate-schema`})],D_.prototype,`generateSchema`,void 0);var O_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},k_=1e3,A_=Symbol(`changeAnimation`),j_=Symbol(`appendAnimation`),M_=Symbol(`detachAnimation`),N_=Symbol(`paused`),P_=Symbol(`currentAnimationOptions`),F_={repetitions:1/0,pingpong:!1},I_={pingpong:!1,repetitions:null,weight:1,timeScale:1,fade:!1,warp:!1,relativeWarp:!0,time:null},L_={fade:!0},R_=e=>{var t,n;class r extends e{constructor(...e){super(e),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[t]=!0,this[n]=F_,this[Q].subscribeMixerEvent(`loop`,e=>{let t=e.action._loopCount,n=e.action._clip.name,r=e.action._clip.uuid,i=this[Q].markedAnimations.find(e=>e.name===n);if(i){this[Q].updateAnimationLoop(i.name,i.loopMode,i.repetitionCount);let e=this[Q].markedAnimations.filter(e=>e.name!==n);this[Q].markedAnimations=e}this.dispatchEvent(new CustomEvent(`loop`,{detail:{count:t,name:n,uuid:r}}))}),this[Q].subscribeMixerEvent(`finished`,e=>{if(!this[Q].appendedAnimations.includes(e.action._clip.name))this[N_]=!0;else{let t=this[Q].appendedAnimations.filter(t=>t!==e.action._clip.name);this[Q].appendedAnimations=t}this.dispatchEvent(new CustomEvent(`finished`))})}get availableAnimations(){return this.loaded?this[Q].animationNames:[]}get duration(){return this[Q].duration}get paused(){return this[Q].isAllAnimationsPaused()}get currentTime(){return this[Q].animationTime}get appendedAnimations(){return this[Q].appendedAnimations}set currentTime(e){this[Q].animationTime=e,this[__]()}get timeScale(){return this[Q].animationTimeScale}set timeScale(e){this[Q].animationTimeScale=e}pause(e){if(e?.modelIndex==null&&this.paused)return;let t=e?.modelIndex??null;this[Q].pauseAnimation(t),this.dispatchEvent(new CustomEvent(`pause`))}play(e){if(this.availableAnimations.length>0){let t=e?.modelIndex??null;this[Q].unpauseAnimation(t),this[P_]=Object.assign(Object.assign({},F_),e),this[A_](this[P_]),this.dispatchEvent(new CustomEvent(`play`))}}appendAnimation(e,t){this.availableAnimations.length>0&&(this[N_]=!1,this[Q].unpauseAnimation(t?.modelIndex??null),this[j_](e,t),this.dispatchEvent(new CustomEvent(`append-animation`)))}detachAnimation(e,t){this.availableAnimations.length>0&&(this[N_]=!1,this[Q].unpauseAnimation(t?.modelIndex??null),this[M_](e,t),this.dispatchEvent(new CustomEvent(`detach-animation`)))}[(t=N_,n=P_,y_)](){super[y_](),this[Q].pauseAnimation(),this.animationName!=null&&this[A_](),this.autoplay&&this.play()}[v_](e,t){super[v_](e,t),!(this.paused||!this[C_]()&&!this[$].isPresenting)&&(this[Q].updateAnimation(t/k_),this[__]())}updated(e){super.updated(e),e.has(`autoplay`)&&this.autoplay&&this.play(),e.has(`animationName`)&&this[A_]()}[A_](e){let t=e??this[P_],n=t.repetitions??1/0,r=t.pingpong?st:n===1?rt:Lt;this[Q].playAnimation(this.animationName,this.animationCrossfadeDuration/k_,r,n,t.modelIndex),this[N_]&&(this[Q].updateAnimation(0),this[__]())}[j_](e=``,t={}){let n=Object.assign(Object.assign({},I_),t),r=n.repetitions??1/0,i=n.pingpong?st:r===1?rt:Lt,a=!!t.repetitions||`pingpong`in t;this[Q].appendAnimation(e||this.animationName,i,r,n.weight,n.timeScale,n.fade,n.warp,n.relativeWarp,n.time,a,n.modelIndex),this[N_]&&(this[Q].updateAnimation(0),this[__]())}[M_](e=``,t={}){let n=Object.assign(Object.assign({},L_),t);this[Q].detachAnimation(e||this.animationName,n.fade,n.modelIndex),this[N_]&&(this[Q].updateAnimation(0),this[__]())}}return O_([G({type:Boolean})],r.prototype,`autoplay`,void 0),O_([G({type:String,attribute:`animation-name`})],r.prototype,`animationName`,void 0),O_([G({type:Number,attribute:`animation-crossfade-duration`})],r.prototype,`animationCrossfadeDuration`,void 0),r},z_=Symbol(`hotspotMap`),B_=Symbol(`mutationCallback`),V_=Symbol(`observer`),H_=Symbol(`addHotspot`),U_=Symbol(`removeHotspot`),W_=e=>{var t,n,r;class i extends e{constructor(){super(...arguments),this[t]=new Map,this[n]=e=>{e.forEach(e=>{(!(e instanceof MutationRecord)||e.type===`childList`)&&(e.addedNodes.forEach(e=>{this[H_](e)}),e.removedNodes.forEach(e=>{this[U_](e)}),this[__]())})},this[r]=new MutationObserver(this[B_])}connectedCallback(){super.connectedCallback();for(let e=0;e<this.children.length;++e)this[H_](this.children[e]);let{ShadyDOM:e}=self;e==null?this[V_].observe(this,{childList:!0}):this[V_]=e.observeChildren(this,this[B_])}disconnectedCallback(){super.disconnectedCallback();let{ShadyDOM:e}=self;e==null?this[V_].disconnect():e.unobserveChildren(this[V_])}[(t=z_,n=B_,r=V_,y_)](){super[y_]();let e=this[Q];e.forHotspots(t=>{e.updateHotspotAttachment(t),e.updateSurfaceHotspot(t)})}[v_](e,t){super[v_](e,t);let n=this[Q],{annotationRenderer:r}=n,i=n.getCamera();n.shouldRender()&&(n.animateSurfaceHotspots(),n.updateHotspotsVisibility(i.position),r.domElement.style.display=``,r.render(n,i))}updateHotspot(e){let t=this[z_].get(e.name);t!=null&&(t.updatePosition(e.position),t.updateNormal(e.normal),t.surface=e.surface,e.modelIndex!==void 0&&e.modelIndex!==null&&(t.modelIndex=e.modelIndex),this[Q].updateSurfaceHotspot(t),this[__]())}queryHotspot(e){let t=this[z_].get(e);if(t==null)return null;let n=T_(t.position),r=T_(t.normal),i=t.facingCamera,a=this[Q],o=a.getCamera(),s=new U;s.setFromMatrixPosition(t.matrixWorld),s.project(o);let c=a.width/2,l=a.height/2;s.x=s.x*c+c,s.y=-(s.y*l)+l;let u=T_(new U(s.x,s.y,s.z));return!Number.isFinite(u.x)||!Number.isFinite(u.y)?null:{position:n,normal:r,canvasPosition:u,facingCamera:i}}positionAndNormalFromPoint(e,t){let n=this[Q],r=n.getNDC(e,t),i=n.positionAndNormalFromPoint(r);if(i==null)return null;let a=i.worldToModel,o=T_(i.position.applyMatrix4(a)),s=T_(i.normal.transformDirection(a)),c=null;return i.uv!=null&&(c=E_(i.uv)),{position:o,normal:s,uv:c,modelIndex:i.modelIndex}}surfaceFromPoint(e,t){let n=this[Q],r=n.getNDC(e,t);return n.surfaceFromPoint(r)}[H_](e){if(!(e instanceof HTMLElement&&e.slot.indexOf(`hotspot`)===0))return;let t=this[z_].get(e.slot);if(t!=null){t.increment();let n=e.dataset.visibilityAttribute;if(n!=null){let r=`data-${n}`;e.toggleAttribute(r,t.facingCamera)}e.dispatchEvent(new CustomEvent(`hotspot-visibility`,{detail:{visible:t.facingCamera}}))}else t=new sg({name:e.slot,position:e.dataset.position,normal:e.dataset.normal,surface:e.dataset.surface,modelIndex:e.dataset.modelIndex==null?null:parseInt(e.dataset.modelIndex)}),this[z_].set(e.slot,t),this[Q].addHotspot(t);this[Q].queueRender()}[U_](e){if(!(e instanceof HTMLElement))return;let t=this[z_].get(e.slot);t&&(t.decrement()&&(this[Q].removeHotspot(t),this[z_].delete(e.slot)),this[Q].queueRender())}}return i},G_=Uint8Array,K_=Uint16Array,q_=Int32Array,J_=new G_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Y_=new G_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),X_=new G_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Z_=function(e,t){for(var n=new K_(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new q_(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},Q_=Z_(J_,2),$_=Q_.b,ev=Q_.r;$_[28]=258,ev[258]=28;var tv=Z_(Y_,0);tv.b;for(var nv=tv.r,rv=new K_(32768),iv=0;iv<32768;++iv){var av=(iv&43690)>>1|(iv&21845)<<1;av=(av&52428)>>2|(av&13107)<<2,av=(av&61680)>>4|(av&3855)<<4,rv[iv]=((av&65280)>>8|(av&255)<<8)>>1}for(var ov=(function(e,t,n){for(var r=e.length,i=0,a=new K_(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new K_(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new K_(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[rv[d]>>c]=l}else for(s=new K_(r),i=0;i<r;++i)e[i]&&(s[i]=rv[o[e[i]-1]++]>>15-e[i]);return s}),sv=new G_(288),iv=0;iv<144;++iv)sv[iv]=8;for(var iv=144;iv<256;++iv)sv[iv]=9;for(var iv=256;iv<280;++iv)sv[iv]=7;for(var iv=280;iv<288;++iv)sv[iv]=8;for(var cv=new G_(32),iv=0;iv<32;++iv)cv[iv]=5;var lv=ov(sv,9,0),uv=ov(cv,5,0),dv=function(e){return(e+7)/8|0},fv=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new G_(e.subarray(t,n))},pv=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],mv=function(e,t,n){var r=Error(t||pv[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,mv),!n)throw r;return r},hv=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},gv=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},_v=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:wv,l:0};if(i==1){var o=new G_(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new K_(f+1),m=vv(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new G_(p),l:m}},vv=function(e,t,n){return e.s==-1?Math.max(vv(e.l,t,n+1),vv(e.r,t,n+1)):t[e.s]=n},yv=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new K_(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},bv=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},xv=function(e,t,n){var r=n.length,i=dv(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},Sv=function(e,t,n,r,i,a,o,s,c,l,u){hv(t,u++,n),++i[256];for(var d=_v(i,15),f=d.t,p=d.l,m=_v(a,15),h=m.t,g=m.l,_=yv(f),v=_.c,y=_.n,b=yv(h),x=b.c,S=b.n,C=new K_(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=_v(C,7),E=T.t,D=T.l,O=19;O>4&&!E[X_[O-1]];--O);var k=l+5<<3,A=bv(i,sv)+bv(a,cv)+o,ee=bv(i,f)+bv(a,h)+o+14+3*O+bv(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&k<=A&&k<=ee)return xv(t,u,e.subarray(c,c+l));var j,M,te,ne;if(hv(t,u,1+(ee<A)),u+=2,ee<A){j=ov(f,p,0),M=f,te=ov(h,g,0),ne=h;var re=ov(E,D,0);hv(t,u,y-257),hv(t,u+5,S-1),hv(t,u+10,O-4),u+=14;for(var w=0;w<O;++w)hv(t,u+3*w,E[X_[w]]);u+=3*O;for(var ie=[v,x],ae=0;ae<2;++ae)for(var N=ie[ae],w=0;w<N.length;++w){var oe=N[w]&31;hv(t,u,re[oe]),u+=E[oe],oe>15&&(hv(t,u,N[w]>>5&127),u+=N[w]>>12)}}else j=lv,M=sv,te=uv,ne=cv;for(var w=0;w<s;++w){var P=r[w];if(P>255){var oe=P>>18&31;gv(t,u,j[oe+257]),u+=M[oe+257],oe>7&&(hv(t,u,P>>23&31),u+=J_[oe]);var se=P&31;gv(t,u,te[se]),u+=ne[se],se>3&&(gv(t,u,P>>5&8191),u+=Y_[se])}else gv(t,u,j[P]),u+=M[P]}return gv(t,u,j[256]),u+M[256]},Cv=new q_([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),wv=new G_(0),Tv=function(e,t,n,r,i,a){var o=a.z||e.length,s=new G_(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=Cv[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new K_(32768),g=a.h||new K_(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new q_(25e3),x=new K_(288),S=new K_(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,O=0;T+2<o;++T){var k=y(T),A=T&32767,ee=g[k];if(h[A]=ee,g[k]=A,D<=T){var j=o-T;if((C>7e3||E>24576)&&(j>423||!l)){u=Sv(e,c,0,b,x,S,w,E,O,T-O,u),E=C=w=0,O=T;for(var M=0;M<286;++M)x[M]=0;for(var M=0;M<30;++M)S[M]=0}var te=2,ne=0,re=p,ie=A-ee&32767;if(j>2&&k==y(T-ie))for(var ae=Math.min(f,j)-1,N=Math.min(32767,T),oe=Math.min(258,j);ie<=N&&--re&&A!=ee;){if(e[T+te]==e[T+te-ie]){for(var P=0;P<oe&&e[T+P]==e[T+P-ie];++P);if(P>te){if(te=P,ne=ie,P>ae)break;for(var se=Math.min(ie,P-2),ce=0,M=0;M<se;++M){var F=T-ie+M&32767,le=F-h[F]&32767;le>ce&&(ce=le,ee=F)}}}A=ee,ee=h[A],ie+=A-ee&32767}if(ne){b[E++]=268435456|ev[te]<<18|nv[ne];var ue=ev[te]&31,de=nv[ne]&31;w+=J_[ue]+Y_[de],++x[257+ue],++S[de],D=T+te,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=Sv(e,c,l,b,x,S,w,E,O,T-O,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var fe=T+65535;fe>=o&&(c[u/8|0]=l,fe=o),u=xv(c,u+1,e.subarray(T,fe))}a.i=o}return fv(s,0,r+dv(u)+i)},Ev=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),Dv=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=Ev[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},Ov=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new G_(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return Tv(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},kv=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},Av=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8};function jv(e,t){return Ov(e,t||{},0,0)}var Mv=function(e,t,n,r){for(var i in e){var a=e[i],o=t+i,s=r;Array.isArray(a)&&(s=kv(r,a[1]),a=a[0]),a instanceof G_?n[o]=[a,s]:(n[o+=`/`]=[new G_(0),s],Mv(a,o,n,r))}},Nv=typeof TextEncoder<`u`&&new TextEncoder,Pv=typeof TextDecoder<`u`&&new TextDecoder;try{Pv.decode(wv,{stream:!0})}catch{}function Fv(e,t){if(t){for(var n=new G_(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(Nv)return Nv.encode(e);for(var i=e.length,a=new G_(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new G_(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return fv(a,0,o)}var Iv=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&mv(9),t+=r+4}return t},Lv=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=Iv(l);Av(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&mv(10),Av(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(Av(e,t,n.crc),Av(e,t+4,a<0?-a-2:a),Av(e,t+8,n.size)),Av(e,t+12,c),Av(e,t+14,d),t+=16,o!=null&&(Av(e,t,u),Av(e,t+6,n.attrs),Av(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;Av(e,t,+m),Av(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},Rv=function(e,t,n,r,i){Av(e,t,101010256),Av(e,t+8,n),Av(e,t+10,n),Av(e,t+12,r),Av(e,t+16,i)};function zv(e,t){t||={};var n={},r=[];Mv(e,``,n,t);var i=0,a=0;for(var o in n){var s=n[o],c=s[0],l=s[1],u=l.level==0?0:8,d=Fv(o),f=d.length,p=l.comment,m=p&&Fv(p),h=m&&m.length,g=Iv(l.extra);f>65535&&mv(11);var _=u?jv(c,l):c,v=_.length,y=Dv();y.p(c),r.push(kv(l,{size:c.length,crc:y.d(),c:_,f:d,m,u:f!=o.length||m&&p.length!=h,o:i,compression:u})),i+=30+f+g+v,a+=76+2*(f+g)+(h||0)+v}for(var b=new G_(a+22),x=i,S=a-i,C=0;C<r.length;++C){var d=r[C];Lv(b,d.o,d,d.f,d.u,d.c.length);var w=30+d.f.length+Iv(d.extra);b.set(d.c,d.o+w),Lv(b,i,d,d.f,d.u,d.c.length,d.o,d.m),i+=16+w+(d.m?d.m.length:0)}return Rv(b,i,r.length,S,x),b}var Bv=class{constructor(e,t=``,n=[],r=[]){this.name=e,this.type=t,this.metadata=n,this.properties=r,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t=`	`.repeat(e),n=this.metadata.map(e=>{let n=e.key,r=e.value;if(Array.isArray(r)){let e=[];return e.push(`${n} = {`),r.forEach(n=>{e.push(`${t}\t\t${n}`)}),e.push(`${t}\t}`),e.join(`
`)}return`${n} = ${r}`}),r=n.length?` (\n${n.map(e=>`${t}\t${e}`).join(`
`)}\n${t})`:``,i=this.properties.map(e=>{let n=e.property,r=e.metadata.length?` (\n${e.metadata.map(e=>`${t}\t\t${e}`).join(`
`)}\n${t}\t)`:``;return`${t}\t${n}${r}`}),a=this.children.map(t=>t.toString(e+1)),o=[];if(i.length>0&&o.push(...i),a.length>0){i.length>0&&o.push(``);for(let e=0;e<a.length;e++)o.push(a[e]),e<a.length-1&&o.push(``)}let s=o.join(`
`);return`${t}def ${this.type?this.type+` `:``}"${this.name}"${r}\n${t}{\n${s}\n${t}}`}},Vv=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,n,r){this.parseAsync(e,r).then(t).catch(n)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:`plane`},planeAnchoring:{alignment:`horizontal`}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024},t);let n=new Set,r={},i=`model.usda`;r[i]=null;let a=new Bv(`Root`,`Xform`),o=new Bv(`Scenes`,`Scope`);o.addMetadata(`kind`,`"sceneLibrary"`),a.addChild(o);let s=`Scene`,c=new Bv(s,`Xform`);c.addMetadata(`customData`,[`bool preliminary_collidesWithEnvironment = 0`,`string sceneName = "${s}"`]),c.addMetadata(`sceneName`,`"${s}"`),t.includeAnchoringProperties&&(c.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),c.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),o.addChild(c);let l,u={},d={};Kv(e,c,u,n,r,t);let f=ry(u,d,t.quickLookCompatible);l=Gv()+`
`+a.toString()+`

`+f.toString(),r[i]=Fv(l),l=null;for(let e in d){let n=d[e];if(n.isCompressedTexture===!0){if(this.textureUtils===null)throw Error(`THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.`);n=await this.textureUtils.decompress(n)}let i=Uv(n.image,n.flipY,t.maxTextureSize),a=await new Promise(e=>i.toBlob(e,`image/png`,1));r[`textures/Texture_${e}.png`]=new Uint8Array(await a.arrayBuffer())}let p=0;for(let e in r){let t=r[e],n=34+e.length;p+=n;let i=p&63;if(i!==4){let n=64-i;r[e]=[t,{extra:{12345:new Uint8Array(n)}}]}p=t.length}return zv(r,{level:0})}};function Hv(e,t){let n=e.name;return n=n.replace(/[^A-Za-z0-9_]/g,``),/^[0-9]/.test(n)&&(n=`_`+n),n===``&&(n=e.isCamera?`Camera`:`Object`),t.has(n)&&(n=n+`_`+e.id),t.add(n),n}function Uv(e,t,n){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let r=n/Math.max(e.width,e.height),i=document.createElement(`canvas`);i.width=e.width*Math.min(1,r),i.height=e.height*Math.min(1,r);let a=i.getContext(`2d`);return t===!0&&(a.translate(0,i.height),a.scale(1,-1)),a.drawImage(e,0,0,i.width,i.height),i}throw Error(`THREE.USDZExporter: No valid image data found. Unable to process texture.`)}var Wv=7;function Gv(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)
`}function Kv(e,t,n,r,i,a){for(let o=0,s=e.children.length;o<s;o++){let s=e.children[o];if(s.visible===!1&&a.onlyVisible===!0)continue;let c;if(s.isMesh){let e=s.geometry,t=s.material;if(t.isMeshStandardMaterial){let a=`geometries/Geometry_`+e.id+`.usda`;if(!(a in i)){let t=Zv(e);i[a]=Fv(Gv()+`
`+t.toString())}t.uuid in n||(n[t.uuid]=t),c=Jv(s,e,n[t.uuid],r)}else console.warn(`THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)`,s)}else c=s.isCamera?cy(s,r):qv(s,r);c&&(t.addChild(c),Kv(s,c,n,r,i,a))}}function qv(e,t){let n=Hv(e,t);e.matrix.determinant()<0&&console.warn(`THREE.USDZExporter: USDZ does not support negative scales`,e);let r=new Bv(n,`Xform`);if(e.pivot!==null){let t=e.position,n=e.quaternion,i=e.scale,a=e.pivot;r.addProperty(`float3 xformOp:translate = (${t.x.toPrecision(Wv)}, ${t.y.toPrecision(Wv)}, ${t.z.toPrecision(Wv)})`),r.addProperty(`float3 xformOp:translate:pivot = (${a.x.toPrecision(Wv)}, ${a.y.toPrecision(Wv)}, ${a.z.toPrecision(Wv)})`),r.addProperty(`quatf xformOp:orient = (${n.w.toPrecision(Wv)}, ${n.x.toPrecision(Wv)}, ${n.y.toPrecision(Wv)}, ${n.z.toPrecision(Wv)})`),r.addProperty(`float3 xformOp:scale = (${i.x.toPrecision(Wv)}, ${i.y.toPrecision(Wv)}, ${i.z.toPrecision(Wv)})`),r.addProperty(`uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]`)}else{let t=Yv(e.matrix);r.addProperty(`matrix4d xformOp:transform = ${t}`),r.addProperty(`uniform token[] xformOpOrder = ["xformOp:transform"]`)}return r}function Jv(e,t,n,r){let i=qv(e,r);return i.addMetadata(`prepend references`,`@./geometries/Geometry_${t.id}.usda@</Geometry>`),i.addMetadata(`prepend apiSchemas`,`["MaterialBindingAPI"]`),i.addProperty(`rel material:binding = </Materials/Material_${n.id}>`),i}function Yv(e){let t=e.elements;return`( ${Xv(t,0)}, ${Xv(t,4)}, ${Xv(t,8)}, ${Xv(t,12)} )`}function Xv(e,t){return`(${e[t+0]}, ${e[t+1]}, ${e[t+2]}, ${e[t+3]})`}function Zv(e){let t=new Bv(`Geometry`),n=Qv(e);return t.addChild(n),t}function Qv(e){let t=e.attributes,n=t.position.count,r=new Bv(`Geometry`,`Mesh`);r.addProperty(`int[] faceVertexCounts = [${$v(e)}]`),r.addProperty(`int[] faceVertexIndices = [${ey(e)}]`),r.addProperty(`normal3f[] normals = [${ty(t.normal,n)}]`,[`interpolation = "vertex"`]),r.addProperty(`point3f[] points = [${ty(t.position,n)}]`);for(let e=0;e<4;e++){let n=e>0?e:``,i=t[`uv`+n];i!==void 0&&r.addProperty(`texCoord2f[] primvars:st${n} = [${ny(i)}]`,[`interpolation = "vertex"`])}let i=t.color;return i!==void 0&&r.addProperty(`color3f[] primvars:displayColor = [${ty(i,n)}]`,[`interpolation = "vertex"`]),r.addProperty(`uniform token subdivisionScheme = "none"`),r}function $v(e){let t=e.index===null?e.attributes.position.count:e.index.count;return Array(t/3).fill(3).join(`, `)}function ey(e){let t=e.index,n=[];if(t!==null)for(let e=0;e<t.count;e++)n.push(t.getX(e));else{let t=e.attributes.position.count;for(let e=0;e<t;e++)n.push(e)}return n.join(`, `)}function ty(e,t){if(e===void 0)return console.warn(`USDZExporter: Normals missing.`),Array(t).fill(`(0, 0, 0)`).join(`, `);let n=[];for(let t=0;t<e.count;t++){let r=e.getX(t),i=e.getY(t),a=e.getZ(t);n.push(`(${r.toPrecision(Wv)}, ${i.toPrecision(Wv)}, ${a.toPrecision(Wv)})`)}return n.join(`, `)}function ny(e){let t=[];for(let n=0;n<e.count;n++){let r=e.getX(n),i=e.getY(n);t.push(`(${r.toPrecision(Wv)}, ${1-i.toPrecision(Wv)})`)}return t.join(`, `)}function ry(e,t,n=!1){let r=new Bv(`Materials`);for(let i in e){let a=e[i];r.addChild(iy(a,t,n))}return r}function iy(e,t,n=!1){let r=new Bv(`Material_${e.id}`,`Material`);function i(r,i,a){let o=r.source.id+`_`+r.flipY;t[o]=r;let s=r.channel>0?`st`+r.channel:`st`,c={1e3:`repeat`,1001:`clamp`,1002:`mirror`},l=r.repeat.clone(),u=r.offset.clone(),d=r.rotation,f=Math.sin(d),p=Math.cos(d);u.y=1-u.y-l.y,n?(u.x/=l.x,u.y/=l.y,u.x+=f/l.x,u.y+=p-1):(u.x+=f*l.x,u.y+=(1-p)*l.y);let m=new Bv(`PrimvarReader_${i}`,`Shader`);m.addProperty(`uniform token info:id = "UsdPrimvarReader_float2"`),m.addProperty(`float2 inputs:fallback = (0.0, 0.0)`),m.addProperty(`string inputs:varname = "${s}"`),m.addProperty(`float2 outputs:result`);let h=new Bv(`Transform2d_${i}`,`Shader`);h.addProperty(`uniform token info:id = "UsdTransform2d"`),h.addProperty(`float2 inputs:in.connect = </Materials/Material_${e.id}/PrimvarReader_${i}.outputs:result>`),h.addProperty(`float inputs:rotation = ${(180/Math.PI*d).toFixed(Wv)}`),h.addProperty(`float2 inputs:scale = ${sy(l)}`),h.addProperty(`float2 inputs:translation = ${sy(u)}`),h.addProperty(`float2 outputs:result`);let g=new Bv(`Texture_${r.id}_${i}`,`Shader`);return g.addProperty(`uniform token info:id = "UsdUVTexture"`),g.addProperty(`asset inputs:file = @textures/Texture_${o}.png@`),g.addProperty(`float2 inputs:st.connect = </Materials/Material_${e.id}/Transform2d_${i}.outputs:result>`),a!==void 0&&g.addProperty(`float4 inputs:scale = ${oy(a)}`),i===`normal`&&(g.addProperty(`float4 inputs:scale = (2, 2, 2, 1)`),g.addProperty(`float4 inputs:bias = (-1, -1, -1, 0)`)),g.addProperty(`token inputs:sourceColorSpace = "${r.colorSpace===``?`raw`:`sRGB`}"`),g.addProperty(`token inputs:wrapS = "${c[r.wrapS]}"`),g.addProperty(`token inputs:wrapT = "${c[r.wrapT]}"`),g.addProperty(`float outputs:r`),g.addProperty(`float outputs:g`),g.addProperty(`float outputs:b`),g.addProperty(`float3 outputs:rgb`),(e.transparent||e.alphaTest>0)&&g.addProperty(`float outputs:a`),[m,h,g]}e.side===2&&console.warn(`THREE.USDZExporter: USDZ does not support double sided materials`,e);let a=new Bv(`PreviewSurface`,`Shader`);if(a.addProperty(`uniform token info:id = "UsdPreviewSurface"`),e.map===null?a.addProperty(`color3f inputs:diffuseColor = ${ay(e.color)}`):(a.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${e.id}/Texture_${e.map.id}_diffuse.outputs:rgb>`),e.transparent?a.addProperty(`float inputs:opacity.connect = </Materials/Material_${e.id}/Texture_${e.map.id}_diffuse.outputs:a>`):e.alphaTest>0&&(a.addProperty(`float inputs:opacity.connect = </Materials/Material_${e.id}/Texture_${e.map.id}_diffuse.outputs:a>`),a.addProperty(`float inputs:opacityThreshold = ${e.alphaTest}`)),i(e.map,`diffuse`,e.color).forEach(e=>r.addChild(e))),e.emissiveMap!==null){a.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${e.id}/Texture_${e.emissiveMap.id}_emissive.outputs:rgb>`);let t=new W(e.emissive.r*e.emissiveIntensity,e.emissive.g*e.emissiveIntensity,e.emissive.b*e.emissiveIntensity);i(e.emissiveMap,`emissive`,t).forEach(e=>r.addChild(e))}else e.emissive.getHex()>0&&a.addProperty(`color3f inputs:emissiveColor = ${ay(e.emissive)}`);if(e.normalMap!==null&&(a.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${e.id}/Texture_${e.normalMap.id}_normal.outputs:rgb>`),i(e.normalMap,`normal`).forEach(e=>r.addChild(e))),e.aoMap!==null){a.addProperty(`float inputs:occlusion.connect = </Materials/Material_${e.id}/Texture_${e.aoMap.id}_occlusion.outputs:r>`);let t=new W(e.aoMapIntensity,e.aoMapIntensity,e.aoMapIntensity);i(e.aoMap,`occlusion`,t).forEach(e=>r.addChild(e))}if(e.roughnessMap!==null){a.addProperty(`float inputs:roughness.connect = </Materials/Material_${e.id}/Texture_${e.roughnessMap.id}_roughness.outputs:g>`);let t=new W(e.roughness,e.roughness,e.roughness);i(e.roughnessMap,`roughness`,t).forEach(e=>r.addChild(e))}else a.addProperty(`float inputs:roughness = ${e.roughness}`);if(e.metalnessMap!==null){a.addProperty(`float inputs:metallic.connect = </Materials/Material_${e.id}/Texture_${e.metalnessMap.id}_metallic.outputs:b>`);let t=new W(e.metalness,e.metalness,e.metalness);i(e.metalnessMap,`metallic`,t).forEach(e=>r.addChild(e))}else a.addProperty(`float inputs:metallic = ${e.metalness}`);if(e.alphaMap===null?a.addProperty(`float inputs:opacity = ${e.opacity}`):(a.addProperty(`float inputs:opacity.connect = </Materials/Material_${e.id}/Texture_${e.alphaMap.id}_opacity.outputs:r>`),a.addProperty(`float inputs:opacityThreshold = 0.0001`),i(e.alphaMap,`opacity`).forEach(e=>r.addChild(e))),e.isMeshPhysicalMaterial){if(e.clearcoatMap!==null){a.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${e.id}/Texture_${e.clearcoatMap.id}_clearcoat.outputs:r>`);let t=new W(e.clearcoat,e.clearcoat,e.clearcoat);i(e.clearcoatMap,`clearcoat`,t).forEach(e=>r.addChild(e))}else a.addProperty(`float inputs:clearcoat = ${e.clearcoat}`);if(e.clearcoatRoughnessMap!==null){a.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${e.id}/Texture_${e.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let t=new W(e.clearcoatRoughness,e.clearcoatRoughness,e.clearcoatRoughness);i(e.clearcoatRoughnessMap,`clearcoatRoughness`,t).forEach(e=>r.addChild(e))}else a.addProperty(`float inputs:clearcoatRoughness = ${e.clearcoatRoughness}`);a.addProperty(`float inputs:ior = ${e.ior}`)}return a.addProperty(`int inputs:useSpecularWorkflow = 0`),a.addProperty(`token outputs:surface`),r.addChild(a),r.addProperty(`token outputs:surface.connect = </Materials/Material_${e.id}/PreviewSurface.outputs:surface>`),r}function ay(e){return`(${e.r}, ${e.g}, ${e.b})`}function oy(e){return`(${e.r}, ${e.g}, ${e.b}, 1.0)`}function sy(e){return`(${e.x}, ${e.y})`}function cy(e,t){let n=Hv(e,t),r=Yv(e.matrix);e.matrix.determinant()<0&&console.warn(`THREE.USDZExporter: USDZ does not support negative scales`,e);let i=new Bv(n,`Camera`);i.addProperty(`matrix4d xformOp:transform = ${r}`),i.addProperty(`uniform token[] xformOpOrder = ["xformOp:transform"]`);let a=e.isOrthographicCamera?`orthographic`:`perspective`;i.addProperty(`token projection = "${a}"`);let o=`(${e.near.toPrecision(Wv)}, ${e.far.toPrecision(Wv)})`;i.addProperty(`float2 clippingRange = ${o}`);let s;s=e.isOrthographicCamera?((Math.abs(e.left)+Math.abs(e.right))*10).toPrecision(Wv):e.getFilmWidth().toPrecision(Wv),i.addProperty(`float horizontalAperture = ${s}`);let c;if(c=e.isOrthographicCamera?((Math.abs(e.top)+Math.abs(e.bottom))*10).toPrecision(Wv):e.getFilmHeight().toPrecision(Wv),i.addProperty(`float verticalAperture = ${c}`),e.isPerspectiveCamera){let t=e.getFocalLength().toPrecision(Wv);i.addProperty(`float focalLength = ${t}`);let n=e.focus.toPrecision(Wv);i.addProperty(`float focusDistance = ${n}`)}return i}var ly=e=>t=>{try{let n=fu(t),r=(n.length?n[0].terms:[]).filter(e=>e&&e.type===`ident`).map(e=>e.value).filter(t=>e.indexOf(t)>-1);return new Set(r)}catch{}return new Set},uy=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},dy=!1,fy=!1,py=`#model-viewer-no-ar-fallback`,my=ly([`quick-look`,`scene-viewer`,`webxr`,`none`]),hy=`webxr scene-viewer quick-look`,gy={QUICK_LOOK:`quick-look`,SCENE_VIEWER:`scene-viewer`,WEBXR:`webxr`,NONE:`none`},_y=Symbol(`arButtonContainer`),vy=Symbol(`enterARWithWebXR`),yy=Symbol(`openSceneViewer`),by=Symbol(`openIOSARQuickLook`),xy=Symbol(`canActivateAR`),Sy=Symbol(`arMode`),Cy=Symbol(`arModes`),wy=Symbol(`arAnchor`),Ty=Symbol(`preload`),Ey=Symbol(`onARButtonContainerClick`),Dy=Symbol(`onARStatus`),Oy=Symbol(`onARTracking`),ky=Symbol(`onARTap`),Ay=Symbol(`selectARMode`),jy=Symbol(`triggerLoad`),My=e=>{var t,n,r,i,a,o,s,c,l,u;class d extends e{constructor(){super(...arguments),this.ar=!1,this.arScale=`auto`,this.arUsdzMaxTextureSize=`auto`,this.arPlacement=`floor`,this.arModes=hy,this.iosSrc=null,this.xrEnvironment=!1,this[t]=!1,this[n]=this.shadowRoot.querySelector(`.ar-button`),this[r]=document.createElement(`a`),this[i]=new Set,this[a]=gy.NONE,this[o]=!1,this[s]=e=>{e.preventDefault(),this.activateAR()},this[c]=({status:e})=>{(e===Xf.NOT_PRESENTING||this[$].arRenderer.presentedScene===this[Q])&&(this.setAttribute(`ar-status`,e),this.dispatchEvent(new CustomEvent(`ar-status`,{detail:{status:e}})),e===Xf.NOT_PRESENTING?this.removeAttribute(`ar-tracking`):e===Xf.SESSION_STARTED&&this.setAttribute(`ar-tracking`,Zf.TRACKING))},this[l]=({status:e})=>{this.setAttribute(`ar-tracking`,e),this.dispatchEvent(new CustomEvent(`ar-tracking`,{detail:{status:e}}))},this[u]=e=>{e.data==`_apple_ar_quicklook_button_tapped`&&this.dispatchEvent(new CustomEvent(`quick-look-button-tapped`))}}get canActivateAR(){return this[Sy]!==gy.NONE}connectedCallback(){super.connectedCallback(),this[$].arRenderer!=null&&(this[$].arRenderer.addEventListener(`status`,this[Dy]),this.setAttribute(`ar-status`,Xf.NOT_PRESENTING),this[$].arRenderer.addEventListener(`tracking`,this[Oy])),this[wy].addEventListener(`message`,this[ky])}disconnectedCallback(){super.disconnectedCallback(),this[$].arRenderer!=null&&(this[$].arRenderer.removeEventListener(`status`,this[Dy]),this[$].arRenderer.removeEventListener(`tracking`,this[Oy])),this[wy].removeEventListener(`message`,this[ky])}update(e){super.update(e),e.has(`arScale`)&&(this[Q].canScale=this.arScale!==`fixed`),e.has(`arPlacement`)&&(this[Q].updateShadow(),this[__]()),e.has(`arModes`)&&(this[Cy]=my(this.arModes)),(e.has(`ar`)||e.has(`arModes`)||e.has(`src`)||e.has(`iosSrc`)||e.has(`arUsdzMaxTextureSize`))&&this[Ay]()}async activateAR(){switch(this[Sy]){case gy.QUICK_LOOK:await this[by]();break;case gy.WEBXR:await this[vy]();break;case gy.SCENE_VIEWER:await this[yy]();break;default:console.warn(`No AR Mode can be activated. This is probably due to missing configuration or device capabilities`)}}async[(t=xy,n=_y,r=wy,i=Cy,a=Sy,o=Ty,s=Ey,c=Dy,l=Oy,u=ky,Ay)](){let e=gy.NONE;if(this.ar){if(this.src!=null)for(let t of this[Cy]){if(t===`webxr`&&ts&&!dy&&await this[$].arRenderer.supportsPresentation()){e=gy.WEBXR;break}if(t===`scene-viewer`&&!fy&&(cs||navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&(await navigator.userAgentData.getHighEntropyValues([`formFactor`])).formFactor?.includes(`XR`))){e=gy.SCENE_VIEWER;break}if(t===`quick-look`&&ls&&!ss){e=gy.QUICK_LOOK;break}}e===gy.NONE&&this.iosSrc!=null&&ls&&!ss&&(e=gy.QUICK_LOOK)}if(e!==gy.NONE)this[_y].classList.add(`enabled`),this[_y].addEventListener(`click`,this[Ey]);else if(this[_y].classList.contains(`enabled`)){this[_y].removeEventListener(`click`,this[Ey]),this[_y].classList.remove(`enabled`);let e=Xf.FAILED;this.setAttribute(`ar-status`,e),this.dispatchEvent(new CustomEvent(`ar-status`,{detail:{status:e}}))}this[Sy]=e}async[vy](){await this[jy]();try{this[_y].removeEventListener(`click`,this[Ey]);let{arRenderer:e}=this[$];e.placeOnWall=this.arPlacement===`wall`,await e.present(this[Q],this.xrEnvironment)}catch(e){console.warn(`Error while trying to present in AR with WebXR`),console.error(e),await this[$].arRenderer.stopPresenting(),dy=!0,console.warn(`Falling back to next ar-mode`),await this[Ay](),this.activateAR()}finally{this[Ay]()}}async[jy](){this.loaded||(this[Ty]=!0,this[f_](),await vs(this,`load`),this[Ty]=!1)}[w_](){return super[w_]()||this[Ty]}async[yy](){let e=self.location.toString(),t=new URL(e),n=Array.from(this.querySelectorAll(`extra-model`)).map(e=>e.src).filter(e=>e!=null),r=this.src||n[0]||null;if(!r){console.warn(`No src or extra-model provided for Scene Viewer fallback.`);return}let i=new URL(r,e);i.hash&&=``;let a=new URLSearchParams(i.search);if(t.hash=py,a.set(`mode`,`ar_preferred`),a.has(`disable_occlusion`)||a.set(`disable_occlusion`,`true`),this.arScale===`fixed`&&a.set(`resizable`,`false`),this.arPlacement===`wall`&&a.set(`enable_vertical_placement`,`true`),a.has(`sound`)){let t=new URL(a.get(`sound`),e);a.set(`sound`,t.toString())}if(a.has(`link`)){let t=new URL(a.get(`link`),e);a.set(`link`,t.toString())}let o=`intent://arvr.google.com/scene-viewer/1.2?${a.toString()+`&file=`+encodeURIComponent(i.toString())}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(t.toString())};end;`;self.addEventListener(`hashchange`,()=>{self.location.hash===py&&(fy=!0,self.history.back(),console.warn(`Error while trying to present in AR with Scene Viewer`),console.warn(`Falling back to next ar-mode`),this[Ay]())},{once:!0}),this[wy].setAttribute(`href`,o),this[wy].click()}async[by](){let e=!this.iosSrc;this[_y].classList.remove(`enabled`);let t;try{t=e?await this.prepareUSDZ():this.iosSrc}catch(e){throw this[_y].classList.add(`enabled`),e}let n=new URL(t,self.location.toString());if(e){let e=self.location.toString(),t=new URL(e),r=Array.from(this.querySelectorAll(`extra-model`)).map(e=>e.src).filter(e=>e!=null),i=this.src||r[0]||null;if(i){let e=new URL(i,t);e.hash&&(n.hash=e.hash)}}this.arScale===`fixed`&&(n.hash&&(n.hash+=`&`),n.hash+=`allowsContentScaling=0`);let r=this[wy];r.setAttribute(`rel`,`ar`);let i=document.createElement(`img`);r.appendChild(i),r.setAttribute(`href`,n.toString()),e&&r.setAttribute(`download`,`model.usdz`),r.style.display=`none`,r.isConnected||this.shadowRoot.appendChild(r),r.click(),r.removeChild(i),e&&URL.revokeObjectURL(t),this[_y].classList.add(`enabled`)}async prepareUSDZ(){let e=this[x_].beginActivity(`usdz-conversion`);await this[jy]();let{models:t,shadow:n,target:r}=this[Q];if(t.length===0||t[0]==null)return``;let i=!1;n!=null&&(i=n.visible,n.visible=!1),e(.2);let a=this.arPlacement===`wall`?{includeAnchoringProperties:!1}:{},o=new Vv,s=new St;s.position.copy(r.position);for(let e of t)r.remove(e),s.add(e);s.updateWorldMatrix(!1,!0);let c;try{c=await o.parseAsync(s,Object.assign(Object.assign({},a),{maxTextureSize:isNaN(this.arUsdzMaxTextureSize)?1/0:Math.max(parseInt(this.arUsdzMaxTextureSize),16)}))}finally{for(let e of t)s.remove(e),r.add(e);n!=null&&(n.visible=i),e(1)}let l=new Blob([c],{type:`model/vnd.usdz+zip`});return URL.createObjectURL(l)}}return uy([G({type:Boolean,attribute:`ar`})],d.prototype,`ar`,void 0),uy([G({type:String,attribute:`ar-scale`})],d.prototype,`arScale`,void 0),uy([G({type:String,attribute:`ar-usdz-max-texture-size`})],d.prototype,`arUsdzMaxTextureSize`,void 0),uy([G({type:String,attribute:`ar-placement`})],d.prototype,`arPlacement`,void 0),uy([G({type:String,attribute:`ar-modes`})],d.prototype,`arModes`,void 0),uy([G({type:String,attribute:`ios-src`})],d.prototype,`iosSrc`,void 0),uy([G({type:Boolean,attribute:`xr-environment`})],d.prototype,`xrEnvironment`,void 0),d},Ny=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Py=`https://www.gstatic.com/draco/versioned/decoders/1.5.6/`,Fy=`https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/`,Iy=`https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js`,Ly={AUTO:`auto`,MANUAL:`manual`},Ry={AUTO:`auto`,LAZY:`lazy`,EAGER:`eager`},zy=Symbol(`defaultProgressBarElement`),By=Symbol(`posterContainerElement`),Vy=Symbol(`defaultPosterElement`),Hy=Symbol(`shouldDismissPoster`),Uy=Symbol(`hidePoster`),Wy=Symbol(`modelIsRevealed`),Gy=Symbol(`updateProgressBar`),Ky=Symbol(`ariaLabelCallToAction`),qy=Symbol(`onProgress`),Jy=e=>{var t,n,r,i,a,o,s,c;class l extends e{static set dracoDecoderLocation(e){zl.setDRACODecoderLocation(e)}static get dracoDecoderLocation(){return zl.getDRACODecoderLocation()}static set ktx2TranscoderLocation(e){zl.setKTX2TranscoderLocation(e)}static get ktx2TranscoderLocation(){return zl.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(e){zl.setMeshoptDecoderLocation(e)}static get meshoptDecoderLocation(){return zl.getMeshoptDecoderLocation()}static set lottieLoaderLocation(e){fm.singleton.textureUtils.lottieLoaderUrl=e}static get lottieLoaderLocation(){return fm.singleton.textureUtils.lottieLoaderUrl}static mapURLs(e){fm.singleton.loader[Il].manager.setURLModifier(e)}dismissPoster(){this.loaded?this[Uy]():(this[Hy]=!0,this[f_]())}showPoster(){let e=this[By];if(e.classList.contains(`show`))return;e.classList.add(`show`),this[h_].classList.remove(`show`);let t=this[Vy];t.removeAttribute(`tabindex`),t.removeAttribute(`aria-hidden`);let n=this.modelIsVisible;this[Wy]=!1,this[o_](n)}getDimensions(){return this[Q].updateBoundingBoxAndShadowIfDirty(),T_(this[Q].size)}getBoundingBoxCenter(){return this[Q].updateBoundingBoxAndShadowIfDirty(),T_(this[Q].boundingBox.getCenter(new U))}constructor(...e){super(...e),this.poster=null,this.reveal=Ly.AUTO,this.loading=Ry.AUTO,this[t]=!1,this[n]=!1,this[r]=this.shadowRoot.querySelector(`.slot.poster`),this[i]=this.shadowRoot.querySelector(`#default-poster`),this[a]=this.shadowRoot.querySelector(`#default-progress-bar > .bar`),this[o]=this[Vy].getAttribute(`aria-label`),this[s]=ps(e=>{let t=this[zy].parentNode;requestAnimationFrame(()=>{this[zy].style.transform=`scaleX(${e})`,e===0&&(t.removeChild(this[zy]),t.appendChild(this[zy])),this[zy].classList.toggle(`hide`,e===1)})},100),this[c]=e=>{let t=e.detail.totalProgress,n=e.detail.reason;t===1&&(this[Gy].flush(),this.loaded&&(this[Hy]||this.reveal===Ly.AUTO)&&this[Uy]()),this[Gy](t),this.dispatchEvent(new CustomEvent(`progress`,{detail:{totalProgress:t,reason:n}}))};let l=self.ModelViewerElement||{},u=l.dracoDecoderLocation||Py;zl.setDRACODecoderLocation(u);let d=l.ktx2TranscoderLocation||Fy;zl.setKTX2TranscoderLocation(d),l.meshoptDecoderLocation&&zl.setMeshoptDecoderLocation(l.meshoptDecoderLocation);let f=l.lottieLoaderLocation||Iy;fm.singleton.textureUtils!=null&&(fm.singleton.textureUtils.lottieLoaderUrl=f)}connectedCallback(){super.connectedCallback(),this.loaded||this.showPoster(),this[x_].addEventListener(`progress`,this[qy])}disconnectedCallback(){super.disconnectedCallback(),this[x_].removeEventListener(`progress`,this[qy])}async updated(e){super.updated(e),e.has(`poster`)&&this.poster!=null&&(this[Vy].style.backgroundImage=`url(${this.poster})`),e.has(`alt`)&&this[Vy].setAttribute(`aria-label`,this[c_]),(e.has(`reveal`)||e.has(`loading`))&&this[f_]()}[(t=Wy,n=Hy,r=By,i=Vy,a=zy,o=Ky,s=Gy,c=qy,w_)](){let e=Array.from(this.querySelectorAll(`extra-model`));return!!(this.src||e.length>0)&&(this[Hy]||this.loading===Ry.EAGER||this.reveal===Ly.AUTO&&this[a_])}[Uy](){this[Hy]=!1;let e=this[By];if(!e.classList.contains(`show`))return;e.classList.remove(`show`),this[h_].classList.add(`show`);let t=this.modelIsVisible;this[Wy]=!0,this[o_](t);let n=this.getRootNode();n&&n.activeElement===this&&this[h_].focus();let r=this[Vy];r.setAttribute(`aria-hidden`,`true`),r.tabIndex=-1,this.dispatchEvent(new CustomEvent(`poster-dismissed`))}[C_](){return super[C_]()&&this[Wy]}}return Ny([G({type:String})],l.prototype,`poster`,void 0),Ny([G({type:String})],l.prototype,`reveal`,void 0),Ny([G({type:String})],l.prototype,`loading`,void 0),l},Yy=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xy=Math.PI/32,Zy=3e3,Qy={basis:[xu(du(Xy,`rad`))],keywords:{auto:[null]}},$y=Symbol(`autoRotateStartTime`),eb=Symbol(`radiansPerSecond`),tb=Symbol(`syncRotationRate`),nb=Symbol(`onCameraChange`),rb=W_(Qh((e=>{var t,n,r;class i extends e{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=Zy,this.rotationPerSecond=`auto`,this[t]=performance.now(),this[n]=0,this[r]=e=>{this.autoRotate&&e.detail.source===`user-interaction`&&(this[$y]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener(`camera-change`,this[nb]),this[$y]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`camera-change`,this[nb]),this[$y]=performance.now()}updated(e){super.updated(e),e.has(`autoRotate`)&&(this[$y]=performance.now())}[(t=$y,n=eb,tb)](e){this[eb]=e[0]}[v_](e,t){if(super[v_](e,t),!this.autoRotate||!this[C_]()||this[$].isPresenting)return;let n=Math.min(t,e-this[$y]-this.autoRotateDelay);n>0&&(this[Q].yaw=this.turntableRotation+this[eb]*n*.001)}get turntableRotation(){return this[Q].yaw}resetTurntableRotation(e=0){this[Q].yaw=e}}return r=nb,Yy([G({type:Boolean,attribute:`auto-rotate`})],i.prototype,`autoRotate`,void 0),Yy([G({type:Number,attribute:`auto-rotate-delay`})],i.prototype,`autoRotateDelay`,void 0),Yy([sd({intrinsics:Qy,updateHandler:tb}),G({type:String,attribute:`rotation-per-second`})],i.prototype,`rotationPerSecond`,void 0),i})(Os(pf(My(Jy(R_(D_))))))));customElements.define(`model-viewer`,rb);export{at as CanvasTexture,me as FileLoader,$e as Loader,rb as ModelViewerElement,L as NearestFilter};