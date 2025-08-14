function gw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ni=Symbol.for("react.element"),yw=Symbol.for("react.portal"),bw=Symbol.for("react.fragment"),vw=Symbol.for("react.strict_mode"),ww=Symbol.for("react.profiler"),Sw=Symbol.for("react.provider"),xw=Symbol.for("react.context"),Cw=Symbol.for("react.forward_ref"),kw=Symbol.for("react.suspense"),Tw=Symbol.for("react.memo"),_w=Symbol.for("react.lazy"),Wp=Symbol.iterator;function Fw(e){return e===null||typeof e!="object"?null:(e=Wp&&e[Wp]||e["@@iterator"],typeof e=="function"?e:null)}var ch={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dh=Object.assign,fh={};function _o(e,t,n){this.props=e,this.context=t,this.refs=fh,this.updater=n||ch}_o.prototype.isReactComponent={};_o.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ph(){}ph.prototype=_o.prototype;function Md(e,t,n){this.props=e,this.context=t,this.refs=fh,this.updater=n||ch}var jd=Md.prototype=new ph;jd.constructor=Md;dh(jd,_o.prototype);jd.isPureReactComponent=!0;var Hp=Array.isArray,mh=Object.prototype.hasOwnProperty,Ld={current:null},gh={key:!0,ref:!0,__self:!0,__source:!0};function hh(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)mh.call(t,r)&&!gh.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ni,type:e,key:a,ref:i,props:o,_owner:Ld.current}}function Aw(e,t){return{$$typeof:ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ni}function Pw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Up=/\/+/g;function du(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pw(""+e.key):t.toString(36)}function Qi(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ni:case yw:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+du(i,0):r,Hp(o)?(n="",e!=null&&(n=e.replace(Up,"$&/")+"/"),Qi(o,t,n,"",function(u){return u})):o!=null&&(Bd(o)&&(o=Aw(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Up,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Hp(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+du(a,s);i+=Qi(a,t,n,l,o)}else if(l=Fw(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+du(a,s++),i+=Qi(a,t,n,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ci(e,t,n){if(e==null)return e;var r=[],o=0;return Qi(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Ew(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},Ji={transition:null},qw={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Ji,ReactCurrentOwner:Ld};$.Children={map:Ci,forEach:function(e,t,n){Ci(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ci(e,function(){t++}),t},toArray:function(e){return Ci(e,function(t){return t})||[]},only:function(e){if(!Bd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=_o;$.Fragment=bw;$.Profiler=ww;$.PureComponent=Md;$.StrictMode=vw;$.Suspense=kw;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qw;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dh({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Ld.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)mh.call(t,l)&&!gh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ni,type:e.type,key:o,ref:a,props:r,_owner:i}};$.createContext=function(e){return e={$$typeof:xw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sw,_context:e},e.Consumer=e};$.createElement=hh;$.createFactory=function(e){var t=hh.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Cw,render:e}};$.isValidElement=Bd;$.lazy=function(e){return{$$typeof:_w,_payload:{_status:-1,_result:e},_init:Ew}};$.memo=function(e,t){return{$$typeof:Tw,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Ji.transition;Ji.transition={};try{e()}finally{Ji.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Ye.current.useCallback(e,t)};$.useContext=function(e){return Ye.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ye.current.useEffect(e,t)};$.useId=function(){return Ye.current.useId()};$.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ye.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};$.useRef=function(e){return Ye.current.useRef(e)};$.useState=function(e){return Ye.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ye.current.useTransition()};$.version="18.2.0";(function(e){e.exports=$})(k);const B=hw(k.exports),Gp=gw({__proto__:null,default:B},[k.exports]);var vs=Boolean(globalThis==null?void 0:globalThis.document)?k.exports.useLayoutEffect:k.exports.useEffect,ll={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw=k.exports,zw=Symbol.for("react.element"),Rw=Symbol.for("react.fragment"),Vw=Object.prototype.hasOwnProperty,Mw=Iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jw={key:!0,ref:!0,__self:!0,__source:!0};function yh(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Vw.call(t,r)&&!jw.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:zw,type:e,key:a,ref:i,props:o,_owner:Mw.current}}ul.Fragment=Rw;ul.jsx=yh;ul.jsxs=yh;(function(e){e.exports=ul})(ll);const dc=ll.exports.Fragment,q=ll.exports.jsx,Qn=ll.exports.jsxs;var Nd=k.exports.createContext({});Nd.displayName="ColorModeContext";function Od(){const e=k.exports.useContext(Nd);if(e===void 0)throw new Error("useColorMode must be used within a ColorModeProvider");return e}var ki={light:"chakra-ui-light",dark:"chakra-ui-dark"};function Lw(e={}){const{preventTransition:t=!0}=e,n={setDataset:r=>{const o=t?n.preventTransition():void 0;document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,o==null||o()},setClassName(r){document.body.classList.add(r?ki.dark:ki.light),document.body.classList.remove(r?ki.light:ki.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(r){var a;return((a=n.query().matches)!=null?a:r==="dark")?"dark":"light"},addListener(r){const o=n.query(),a=i=>{r(i.matches?"dark":"light")};return typeof o.addListener=="function"?o.addListener(a):o.addEventListener("change",a),()=>{typeof o.removeListener=="function"?o.removeListener(a):o.removeEventListener("change",a)}},preventTransition(){const r=document.createElement("style");return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(r)})})}}};return n}var Bw="chakra-ui-color-mode";function Nw(e){return{ssr:!1,type:"localStorage",get(t){if(!(globalThis!=null&&globalThis.document))return t;let n;try{n=localStorage.getItem(e)||t}catch{}return n||t},set(t){try{localStorage.setItem(e,t)}catch{}}}}var Ow=Nw(Bw),Kp=()=>{};function Yp(e,t){return e.type==="cookie"&&e.ssr?e.get(t):t}function bh(e){const{value:t,children:n,options:{useSystemColorMode:r,initialColorMode:o,disableTransitionOnChange:a}={},colorModeManager:i=Ow}=e,s=o==="dark"?"dark":"light",[l,u]=k.exports.useState(()=>Yp(i,s)),[c,d]=k.exports.useState(()=>Yp(i)),{getSystemTheme:f,setClassName:m,setDataset:b,addListener:v}=k.exports.useMemo(()=>Lw({preventTransition:a}),[a]),C=o==="system"&&!l?c:l,h=k.exports.useCallback(x=>{const _=x==="system"?f():x;u(_),m(_==="dark"),b(_),i.set(_)},[i,f,m,b]);vs(()=>{o==="system"&&d(f())},[]),k.exports.useEffect(()=>{const x=i.get();if(x){h(x);return}if(o==="system"){h("system");return}h(s)},[i,s,o,h]);const p=k.exports.useCallback(()=>{h(C==="dark"?"light":"dark")},[C,h]);k.exports.useEffect(()=>{if(!!r)return v(h)},[r,v,h]);const g=k.exports.useMemo(()=>({colorMode:t!=null?t:C,toggleColorMode:t?Kp:p,setColorMode:t?Kp:h,forced:t!==void 0}),[C,p,h,t]);return q(Nd.Provider,{value:g,children:n})}bh.displayName="ColorModeProvider";var fc={exports:{}};(function(e,t){var n=200,r="__lodash_hash_undefined__",o=800,a=16,i=9007199254740991,s="[object Arguments]",l="[object Array]",u="[object AsyncFunction]",c="[object Boolean]",d="[object Date]",f="[object Error]",m="[object Function]",b="[object GeneratorFunction]",v="[object Map]",C="[object Number]",h="[object Null]",p="[object Object]",g="[object Proxy]",x="[object RegExp]",_="[object Set]",A="[object String]",F="[object Undefined]",E="[object WeakMap]",L="[object ArrayBuffer]",V="[object DataView]",xe="[object Float32Array]",ze="[object Float64Array]",bt="[object Int8Array]",Dt="[object Int16Array]",$t="[object Int32Array]",we="[object Uint8Array]",Pt="[object Uint8ClampedArray]",I="[object Uint16Array]",N="[object Uint32Array]",O=/[\\^$.*+?()[\]{}|]/g,me=/^\[object .+?Constructor\]$/,Ce=/^(?:0|[1-9]\d*)$/,Q={};Q[xe]=Q[ze]=Q[bt]=Q[Dt]=Q[$t]=Q[we]=Q[Pt]=Q[I]=Q[N]=!0,Q[s]=Q[l]=Q[L]=Q[c]=Q[V]=Q[d]=Q[f]=Q[m]=Q[v]=Q[C]=Q[p]=Q[x]=Q[_]=Q[A]=Q[E]=!1;var Wt=typeof xi=="object"&&xi&&xi.Object===Object&&xi,zo=typeof self=="object"&&self&&self.Object===Object&&self,at=Wt||zo||Function("return this")(),nr=t&&!t.nodeType&&t,Ro=nr&&!0&&e&&!e.nodeType&&e,xp=Ro&&Ro.exports===nr,Jl=xp&&Wt.process,Cp=function(){try{var y=Ro&&Ro.require&&Ro.require("util").types;return y||Jl&&Jl.binding&&Jl.binding("util")}catch{}}(),kp=Cp&&Cp.isTypedArray;function n2(y,w,T){switch(T.length){case 0:return y.call(w);case 1:return y.call(w,T[0]);case 2:return y.call(w,T[0],T[1]);case 3:return y.call(w,T[0],T[1],T[2])}return y.apply(w,T)}function r2(y,w){for(var T=-1,z=Array(y);++T<y;)z[T]=w(T);return z}function o2(y){return function(w){return y(w)}}function a2(y,w){return y==null?void 0:y[w]}function i2(y,w){return function(T){return y(w(T))}}var s2=Array.prototype,l2=Function.prototype,mi=Object.prototype,eu=at["__core-js_shared__"],gi=l2.toString,ln=mi.hasOwnProperty,Tp=function(){var y=/[^.]+$/.exec(eu&&eu.keys&&eu.keys.IE_PROTO||"");return y?"Symbol(src)_1."+y:""}(),_p=mi.toString,u2=gi.call(Object),c2=RegExp("^"+gi.call(ln).replace(O,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),hi=xp?at.Buffer:void 0,Fp=at.Symbol,Ap=at.Uint8Array,Pp=hi?hi.allocUnsafe:void 0,Ep=i2(Object.getPrototypeOf,Object),qp=Object.create,d2=mi.propertyIsEnumerable,f2=s2.splice,rr=Fp?Fp.toStringTag:void 0,yi=function(){try{var y=ru(Object,"defineProperty");return y({},"",{}),y}catch{}}(),p2=hi?hi.isBuffer:void 0,Ip=Math.max,m2=Date.now,zp=ru(at,"Map"),Vo=ru(Object,"create"),g2=function(){function y(){}return function(w){if(!ar(w))return{};if(qp)return qp(w);y.prototype=w;var T=new y;return y.prototype=void 0,T}}();function or(y){var w=-1,T=y==null?0:y.length;for(this.clear();++w<T;){var z=y[w];this.set(z[0],z[1])}}function h2(){this.__data__=Vo?Vo(null):{},this.size=0}function y2(y){var w=this.has(y)&&delete this.__data__[y];return this.size-=w?1:0,w}function b2(y){var w=this.__data__;if(Vo){var T=w[y];return T===r?void 0:T}return ln.call(w,y)?w[y]:void 0}function v2(y){var w=this.__data__;return Vo?w[y]!==void 0:ln.call(w,y)}function w2(y,w){var T=this.__data__;return this.size+=this.has(y)?0:1,T[y]=Vo&&w===void 0?r:w,this}or.prototype.clear=h2,or.prototype.delete=y2,or.prototype.get=b2,or.prototype.has=v2,or.prototype.set=w2;function un(y){var w=-1,T=y==null?0:y.length;for(this.clear();++w<T;){var z=y[w];this.set(z[0],z[1])}}function S2(){this.__data__=[],this.size=0}function x2(y){var w=this.__data__,T=bi(w,y);if(T<0)return!1;var z=w.length-1;return T==z?w.pop():f2.call(w,T,1),--this.size,!0}function C2(y){var w=this.__data__,T=bi(w,y);return T<0?void 0:w[T][1]}function k2(y){return bi(this.__data__,y)>-1}function T2(y,w){var T=this.__data__,z=bi(T,y);return z<0?(++this.size,T.push([y,w])):T[z][1]=w,this}un.prototype.clear=S2,un.prototype.delete=x2,un.prototype.get=C2,un.prototype.has=k2,un.prototype.set=T2;function zr(y){var w=-1,T=y==null?0:y.length;for(this.clear();++w<T;){var z=y[w];this.set(z[0],z[1])}}function _2(){this.size=0,this.__data__={hash:new or,map:new(zp||un),string:new or}}function F2(y){var w=wi(this,y).delete(y);return this.size-=w?1:0,w}function A2(y){return wi(this,y).get(y)}function P2(y){return wi(this,y).has(y)}function E2(y,w){var T=wi(this,y),z=T.size;return T.set(y,w),this.size+=T.size==z?0:1,this}zr.prototype.clear=_2,zr.prototype.delete=F2,zr.prototype.get=A2,zr.prototype.has=P2,zr.prototype.set=E2;function Rr(y){var w=this.__data__=new un(y);this.size=w.size}function q2(){this.__data__=new un,this.size=0}function I2(y){var w=this.__data__,T=w.delete(y);return this.size=w.size,T}function z2(y){return this.__data__.get(y)}function R2(y){return this.__data__.has(y)}function V2(y,w){var T=this.__data__;if(T instanceof un){var z=T.__data__;if(!zp||z.length<n-1)return z.push([y,w]),this.size=++T.size,this;T=this.__data__=new zr(z)}return T.set(y,w),this.size=T.size,this}Rr.prototype.clear=q2,Rr.prototype.delete=I2,Rr.prototype.get=z2,Rr.prototype.has=R2,Rr.prototype.set=V2;function M2(y,w){var T=iu(y),z=!T&&au(y),U=!T&&!z&&Lp(y),oe=!T&&!z&&!U&&Np(y),de=T||z||U||oe,W=de?r2(y.length,String):[],fe=W.length;for(var vt in y)(w||ln.call(y,vt))&&!(de&&(vt=="length"||U&&(vt=="offset"||vt=="parent")||oe&&(vt=="buffer"||vt=="byteLength"||vt=="byteOffset")||Mp(vt,fe)))&&W.push(vt);return W}function tu(y,w,T){(T!==void 0&&!Si(y[w],T)||T===void 0&&!(w in y))&&nu(y,w,T)}function j2(y,w,T){var z=y[w];(!(ln.call(y,w)&&Si(z,T))||T===void 0&&!(w in y))&&nu(y,w,T)}function bi(y,w){for(var T=y.length;T--;)if(Si(y[T][0],w))return T;return-1}function nu(y,w,T){w=="__proto__"&&yi?yi(y,w,{configurable:!0,enumerable:!0,value:T,writable:!0}):y[w]=T}var L2=X2();function vi(y){return y==null?y===void 0?F:h:rr&&rr in Object(y)?Q2(y):ow(y)}function Rp(y){return Mo(y)&&vi(y)==s}function B2(y){if(!ar(y)||nw(y))return!1;var w=lu(y)?c2:me;return w.test(lw(y))}function N2(y){return Mo(y)&&Bp(y.length)&&!!Q[vi(y)]}function O2(y){if(!ar(y))return rw(y);var w=jp(y),T=[];for(var z in y)z=="constructor"&&(w||!ln.call(y,z))||T.push(z);return T}function Vp(y,w,T,z,U){y!==w&&L2(w,function(oe,de){if(U||(U=new Rr),ar(oe))D2(y,w,de,T,Vp,z,U);else{var W=z?z(ou(y,de),oe,de+"",y,w,U):void 0;W===void 0&&(W=oe),tu(y,de,W)}},Op)}function D2(y,w,T,z,U,oe,de){var W=ou(y,T),fe=ou(w,T),vt=de.get(fe);if(vt){tu(y,T,vt);return}var it=oe?oe(W,fe,T+"",y,w,de):void 0,jo=it===void 0;if(jo){var uu=iu(fe),cu=!uu&&Lp(fe),$p=!uu&&!cu&&Np(fe);it=fe,uu||cu||$p?iu(W)?it=W:uw(W)?it=K2(W):cu?(jo=!1,it=H2(fe,!0)):$p?(jo=!1,it=G2(fe,!0)):it=[]:cw(fe)||au(fe)?(it=W,au(W)?it=dw(W):(!ar(W)||lu(W))&&(it=J2(fe))):jo=!1}jo&&(de.set(fe,it),U(it,fe,z,oe,de),de.delete(fe)),tu(y,T,it)}function $2(y,w){return iw(aw(y,w,Dp),y+"")}var W2=yi?function(y,w){return yi(y,"toString",{configurable:!0,enumerable:!1,value:pw(w),writable:!0})}:Dp;function H2(y,w){if(w)return y.slice();var T=y.length,z=Pp?Pp(T):new y.constructor(T);return y.copy(z),z}function U2(y){var w=new y.constructor(y.byteLength);return new Ap(w).set(new Ap(y)),w}function G2(y,w){var T=w?U2(y.buffer):y.buffer;return new y.constructor(T,y.byteOffset,y.length)}function K2(y,w){var T=-1,z=y.length;for(w||(w=Array(z));++T<z;)w[T]=y[T];return w}function Y2(y,w,T,z){var U=!T;T||(T={});for(var oe=-1,de=w.length;++oe<de;){var W=w[oe],fe=z?z(T[W],y[W],W,T,y):void 0;fe===void 0&&(fe=y[W]),U?nu(T,W,fe):j2(T,W,fe)}return T}function Z2(y){return $2(function(w,T){var z=-1,U=T.length,oe=U>1?T[U-1]:void 0,de=U>2?T[2]:void 0;for(oe=y.length>3&&typeof oe=="function"?(U--,oe):void 0,de&&ew(T[0],T[1],de)&&(oe=U<3?void 0:oe,U=1),w=Object(w);++z<U;){var W=T[z];W&&y(w,W,z,oe)}return w})}function X2(y){return function(w,T,z){for(var U=-1,oe=Object(w),de=z(w),W=de.length;W--;){var fe=de[y?W:++U];if(T(oe[fe],fe,oe)===!1)break}return w}}function wi(y,w){var T=y.__data__;return tw(w)?T[typeof w=="string"?"string":"hash"]:T.map}function ru(y,w){var T=a2(y,w);return B2(T)?T:void 0}function Q2(y){var w=ln.call(y,rr),T=y[rr];try{y[rr]=void 0;var z=!0}catch{}var U=_p.call(y);return z&&(w?y[rr]=T:delete y[rr]),U}function J2(y){return typeof y.constructor=="function"&&!jp(y)?g2(Ep(y)):{}}function Mp(y,w){var T=typeof y;return w=w==null?i:w,!!w&&(T=="number"||T!="symbol"&&Ce.test(y))&&y>-1&&y%1==0&&y<w}function ew(y,w,T){if(!ar(T))return!1;var z=typeof w;return(z=="number"?su(T)&&Mp(w,T.length):z=="string"&&w in T)?Si(T[w],y):!1}function tw(y){var w=typeof y;return w=="string"||w=="number"||w=="symbol"||w=="boolean"?y!=="__proto__":y===null}function nw(y){return!!Tp&&Tp in y}function jp(y){var w=y&&y.constructor,T=typeof w=="function"&&w.prototype||mi;return y===T}function rw(y){var w=[];if(y!=null)for(var T in Object(y))w.push(T);return w}function ow(y){return _p.call(y)}function aw(y,w,T){return w=Ip(w===void 0?y.length-1:w,0),function(){for(var z=arguments,U=-1,oe=Ip(z.length-w,0),de=Array(oe);++U<oe;)de[U]=z[w+U];U=-1;for(var W=Array(w+1);++U<w;)W[U]=z[U];return W[w]=T(de),n2(y,this,W)}}function ou(y,w){if(!(w==="constructor"&&typeof y[w]=="function")&&w!="__proto__")return y[w]}var iw=sw(W2);function sw(y){var w=0,T=0;return function(){var z=m2(),U=a-(z-T);if(T=z,U>0){if(++w>=o)return arguments[0]}else w=0;return y.apply(void 0,arguments)}}function lw(y){if(y!=null){try{return gi.call(y)}catch{}try{return y+""}catch{}}return""}function Si(y,w){return y===w||y!==y&&w!==w}var au=Rp(function(){return arguments}())?Rp:function(y){return Mo(y)&&ln.call(y,"callee")&&!d2.call(y,"callee")},iu=Array.isArray;function su(y){return y!=null&&Bp(y.length)&&!lu(y)}function uw(y){return Mo(y)&&su(y)}var Lp=p2||mw;function lu(y){if(!ar(y))return!1;var w=vi(y);return w==m||w==b||w==u||w==g}function Bp(y){return typeof y=="number"&&y>-1&&y%1==0&&y<=i}function ar(y){var w=typeof y;return y!=null&&(w=="object"||w=="function")}function Mo(y){return y!=null&&typeof y=="object"}function cw(y){if(!Mo(y)||vi(y)!=p)return!1;var w=Ep(y);if(w===null)return!0;var T=ln.call(w,"constructor")&&w.constructor;return typeof T=="function"&&T instanceof T&&gi.call(T)==u2}var Np=kp?o2(kp):N2;function dw(y){return Y2(y,Op(y))}function Op(y){return su(y)?M2(y,!0):O2(y)}var fw=Z2(function(y,w,T,z){Vp(y,w,T,z)});function pw(y){return function(){return y}}function Dp(y){return y}function mw(){return!1}e.exports=fw})(fc,fc.exports);const Jt=fc.exports;function Lt(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function pr(e,...t){return Dw(e)?e(...t):e}var Dw=e=>typeof e=="function",$w=e=>/!(important)?$/.test(e),Zp=e=>typeof e=="string"?e.replace(/!(important)?$/,"").trim():e,pc=(e,t)=>n=>{const r=String(t),o=$w(r),a=Zp(r),i=e?`${e}.${a}`:a;let s=Lt(n.__cssMap)&&i in n.__cssMap?n.__cssMap[i].varRef:t;return s=Zp(s),o?`${s} !important`:s};function _a(e){const{scale:t,transform:n,compose:r}=e;return(a,i)=>{var u;const s=pc(t,a)(i);let l=(u=n==null?void 0:n(s,i))!=null?u:s;return r&&(l=r(l,i)),l}}var Ti=(...e)=>t=>e.reduce((n,r)=>r(n),t);function Et(e,t){return n=>{const r={property:n,scale:e};return r.transform=_a({scale:e,transform:t}),r}}var Ww=({rtl:e,ltr:t})=>n=>n.direction==="rtl"?e:t;function Hw(e){const{property:t,scale:n,transform:r}=e;return{scale:n,property:Ww(t),transform:n?_a({scale:n,compose:r}):r}}var vh=["rotate(var(--chakra-rotate, 0))","scaleX(var(--chakra-scale-x, 1))","scaleY(var(--chakra-scale-y, 1))","skewX(var(--chakra-skew-x, 0))","skewY(var(--chakra-skew-y, 0))"];function Uw(){return["translateX(var(--chakra-translate-x, 0))","translateY(var(--chakra-translate-y, 0))",...vh].join(" ")}function Gw(){return["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",...vh].join(" ")}var Kw={"--chakra-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-sepia":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-drop-shadow":"var(--chakra-empty,/*!*/ /*!*/)",filter:["var(--chakra-blur)","var(--chakra-brightness)","var(--chakra-contrast)","var(--chakra-grayscale)","var(--chakra-hue-rotate)","var(--chakra-invert)","var(--chakra-saturate)","var(--chakra-sepia)","var(--chakra-drop-shadow)"].join(" ")},Yw={backdropFilter:["var(--chakra-backdrop-blur)","var(--chakra-backdrop-brightness)","var(--chakra-backdrop-contrast)","var(--chakra-backdrop-grayscale)","var(--chakra-backdrop-hue-rotate)","var(--chakra-backdrop-invert)","var(--chakra-backdrop-opacity)","var(--chakra-backdrop-saturate)","var(--chakra-backdrop-sepia)"].join(" "),"--chakra-backdrop-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-opacity":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-sepia":"var(--chakra-empty,/*!*/ /*!*/)"};function Zw(e){return{"--chakra-ring-offset-shadow":"var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)","--chakra-ring-shadow":"var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)","--chakra-ring-width":e,boxShadow:["var(--chakra-ring-offset-shadow)","var(--chakra-ring-shadow)","var(--chakra-shadow, 0 0 #0000)"].join(", ")}}var Xw={"row-reverse":{space:"--chakra-space-x-reverse",divide:"--chakra-divide-x-reverse"},"column-reverse":{space:"--chakra-space-y-reverse",divide:"--chakra-divide-y-reverse"}},wh="& > :not(style) ~ :not(style)",Qw={[wh]:{marginInlineStart:"calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",marginInlineEnd:"calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"}},Jw={[wh]:{marginTop:"calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",marginBottom:"calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"}},mc={"to-t":"to top","to-tr":"to top right","to-r":"to right","to-br":"to bottom right","to-b":"to bottom","to-bl":"to bottom left","to-l":"to left","to-tl":"to top left"},e3=new Set(Object.values(mc)),Sh=new Set(["none","-moz-initial","inherit","initial","revert","unset"]),t3=e=>e.trim();function n3(e,t){var d;var n;if(e==null||Sh.has(e))return e;const r=/(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g,{type:o,values:a}=(d=(n=r.exec(e))==null?void 0:n.groups)!=null?d:{};if(!o||!a)return e;const i=o.includes("-gradient")?o:`${o}-gradient`,[s,...l]=a.split(",").map(t3).filter(Boolean);if((l==null?void 0:l.length)===0)return e;const u=s in mc?mc[s]:s;l.unshift(u);const c=l.map(f=>{if(e3.has(f))return f;const m=f.indexOf(" "),[b,v]=m!==-1?[f.substr(0,m),f.substr(m+1)]:[f],C=xh(v)?v:v&&v.split(" "),h=`colors.${b}`,p=h in t.__cssMap?t.__cssMap[h].varRef:b;return C?[p,...Array.isArray(C)?C:[C]].join(" "):p});return`${i}(${c.join(", ")})`}var xh=e=>typeof e=="string"&&e.includes("(")&&e.includes(")"),r3=(e,t)=>n3(e,t!=null?t:{});function o3(e){return/^var\(--.+\)$/.test(e)}var a3=e=>{const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}},Ht=e=>t=>`${e}(${t})`,G={filter(e){return e!=="auto"?e:Kw},backdropFilter(e){return e!=="auto"?e:Yw},ring(e){return Zw(G.px(e))},bgClip(e){return e==="text"?{color:"transparent",backgroundClip:"text"}:{backgroundClip:e}},transform(e){return e==="auto"?Uw():e==="auto-gpu"?Gw():e},vh(e){return e==="$100vh"?"var(--chakra-vh)":e},px(e){if(e==null)return e;const{unitless:t}=a3(e);return t||typeof e=="number"?`${e}px`:e},fraction(e){return typeof e!="number"||e>1?e:`${e*100}%`},float(e,t){const n={left:"right",right:"left"};return t.direction==="rtl"?n[e]:e},degree(e){if(o3(e)||e==null)return e;const t=typeof e=="string"&&!e.endsWith("deg");return typeof e=="number"||t?`${e}deg`:e},gradient:r3,blur:Ht("blur"),opacity:Ht("opacity"),brightness:Ht("brightness"),contrast:Ht("contrast"),dropShadow:Ht("drop-shadow"),grayscale:Ht("grayscale"),hueRotate:Ht("hue-rotate"),invert:Ht("invert"),saturate:Ht("saturate"),sepia:Ht("sepia"),bgImage(e){return e==null||xh(e)||Sh.has(e)?e:`url(${e})`},outline(e){const t=String(e)==="0"||String(e)==="none";return e!==null&&t?{outline:"2px solid transparent",outlineOffset:"2px"}:{outline:e}},flexDirection(e){var o;const{space:t,divide:n}=(o=Xw[e])!=null?o:{},r={flexDirection:e};return t&&(r[t]=1),n&&(r[n]=1),r}},S={borderWidths:Et("borderWidths"),borderStyles:Et("borderStyles"),colors:Et("colors"),borders:Et("borders"),radii:Et("radii",G.px),space:Et("space",Ti(G.vh,G.px)),spaceT:Et("space",Ti(G.vh,G.px)),degreeT(e){return{property:e,transform:G.degree}},prop(e,t,n){return{property:e,scale:t,...t&&{transform:_a({scale:t,transform:n})}}},propT(e,t){return{property:e,transform:t}},sizes:Et("sizes",Ti(G.vh,G.px)),sizesT:Et("sizes",Ti(G.vh,G.fraction)),shadows:Et("shadows"),logical:Hw,blur:Et("blur",G.blur)},es={background:S.colors("background"),backgroundColor:S.colors("backgroundColor"),backgroundImage:S.propT("backgroundImage",G.bgImage),backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundAttachment:!0,backgroundClip:{transform:G.bgClip},bgSize:S.prop("backgroundSize"),bgPosition:S.prop("backgroundPosition"),bg:S.colors("background"),bgColor:S.colors("backgroundColor"),bgPos:S.prop("backgroundPosition"),bgRepeat:S.prop("backgroundRepeat"),bgAttachment:S.prop("backgroundAttachment"),bgGradient:S.propT("backgroundImage",G.gradient),bgClip:{transform:G.bgClip}};Object.assign(es,{bgImage:es.backgroundImage,bgImg:es.backgroundImage});var Y={border:S.borders("border"),borderWidth:S.borderWidths("borderWidth"),borderStyle:S.borderStyles("borderStyle"),borderColor:S.colors("borderColor"),borderRadius:S.radii("borderRadius"),borderTop:S.borders("borderTop"),borderBlockStart:S.borders("borderBlockStart"),borderTopLeftRadius:S.radii("borderTopLeftRadius"),borderStartStartRadius:S.logical({scale:"radii",property:{ltr:"borderTopLeftRadius",rtl:"borderTopRightRadius"}}),borderEndStartRadius:S.logical({scale:"radii",property:{ltr:"borderBottomLeftRadius",rtl:"borderBottomRightRadius"}}),borderTopRightRadius:S.radii("borderTopRightRadius"),borderStartEndRadius:S.logical({scale:"radii",property:{ltr:"borderTopRightRadius",rtl:"borderTopLeftRadius"}}),borderEndEndRadius:S.logical({scale:"radii",property:{ltr:"borderBottomRightRadius",rtl:"borderBottomLeftRadius"}}),borderRight:S.borders("borderRight"),borderInlineEnd:S.borders("borderInlineEnd"),borderBottom:S.borders("borderBottom"),borderBlockEnd:S.borders("borderBlockEnd"),borderBottomLeftRadius:S.radii("borderBottomLeftRadius"),borderBottomRightRadius:S.radii("borderBottomRightRadius"),borderLeft:S.borders("borderLeft"),borderInlineStart:{property:"borderInlineStart",scale:"borders"},borderInlineStartRadius:S.logical({scale:"radii",property:{ltr:["borderTopLeftRadius","borderBottomLeftRadius"],rtl:["borderTopRightRadius","borderBottomRightRadius"]}}),borderInlineEndRadius:S.logical({scale:"radii",property:{ltr:["borderTopRightRadius","borderBottomRightRadius"],rtl:["borderTopLeftRadius","borderBottomLeftRadius"]}}),borderX:S.borders(["borderLeft","borderRight"]),borderInline:S.borders("borderInline"),borderY:S.borders(["borderTop","borderBottom"]),borderBlock:S.borders("borderBlock"),borderTopWidth:S.borderWidths("borderTopWidth"),borderBlockStartWidth:S.borderWidths("borderBlockStartWidth"),borderTopColor:S.colors("borderTopColor"),borderBlockStartColor:S.colors("borderBlockStartColor"),borderTopStyle:S.borderStyles("borderTopStyle"),borderBlockStartStyle:S.borderStyles("borderBlockStartStyle"),borderBottomWidth:S.borderWidths("borderBottomWidth"),borderBlockEndWidth:S.borderWidths("borderBlockEndWidth"),borderBottomColor:S.colors("borderBottomColor"),borderBlockEndColor:S.colors("borderBlockEndColor"),borderBottomStyle:S.borderStyles("borderBottomStyle"),borderBlockEndStyle:S.borderStyles("borderBlockEndStyle"),borderLeftWidth:S.borderWidths("borderLeftWidth"),borderInlineStartWidth:S.borderWidths("borderInlineStartWidth"),borderLeftColor:S.colors("borderLeftColor"),borderInlineStartColor:S.colors("borderInlineStartColor"),borderLeftStyle:S.borderStyles("borderLeftStyle"),borderInlineStartStyle:S.borderStyles("borderInlineStartStyle"),borderRightWidth:S.borderWidths("borderRightWidth"),borderInlineEndWidth:S.borderWidths("borderInlineEndWidth"),borderRightColor:S.colors("borderRightColor"),borderInlineEndColor:S.colors("borderInlineEndColor"),borderRightStyle:S.borderStyles("borderRightStyle"),borderInlineEndStyle:S.borderStyles("borderInlineEndStyle"),borderTopRadius:S.radii(["borderTopLeftRadius","borderTopRightRadius"]),borderBottomRadius:S.radii(["borderBottomLeftRadius","borderBottomRightRadius"]),borderLeftRadius:S.radii(["borderTopLeftRadius","borderBottomLeftRadius"]),borderRightRadius:S.radii(["borderTopRightRadius","borderBottomRightRadius"])};Object.assign(Y,{rounded:Y.borderRadius,roundedTop:Y.borderTopRadius,roundedTopLeft:Y.borderTopLeftRadius,roundedTopRight:Y.borderTopRightRadius,roundedTopStart:Y.borderStartStartRadius,roundedTopEnd:Y.borderStartEndRadius,roundedBottom:Y.borderBottomRadius,roundedBottomLeft:Y.borderBottomLeftRadius,roundedBottomRight:Y.borderBottomRightRadius,roundedBottomStart:Y.borderEndStartRadius,roundedBottomEnd:Y.borderEndEndRadius,roundedLeft:Y.borderLeftRadius,roundedRight:Y.borderRightRadius,roundedStart:Y.borderInlineStartRadius,roundedEnd:Y.borderInlineEndRadius,borderStart:Y.borderInlineStart,borderEnd:Y.borderInlineEnd,borderTopStartRadius:Y.borderStartStartRadius,borderTopEndRadius:Y.borderStartEndRadius,borderBottomStartRadius:Y.borderEndStartRadius,borderBottomEndRadius:Y.borderEndEndRadius,borderStartRadius:Y.borderInlineStartRadius,borderEndRadius:Y.borderInlineEndRadius,borderStartWidth:Y.borderInlineStartWidth,borderEndWidth:Y.borderInlineEndWidth,borderStartColor:Y.borderInlineStartColor,borderEndColor:Y.borderInlineEndColor,borderStartStyle:Y.borderInlineStartStyle,borderEndStyle:Y.borderInlineEndStyle});var i3={color:S.colors("color"),textColor:S.colors("color"),fill:S.colors("fill"),stroke:S.colors("stroke")},gc={boxShadow:S.shadows("boxShadow"),mixBlendMode:!0,blendMode:S.prop("mixBlendMode"),backgroundBlendMode:!0,bgBlendMode:S.prop("backgroundBlendMode"),opacity:!0};Object.assign(gc,{shadow:gc.boxShadow});var s3={filter:{transform:G.filter},blur:S.blur("--chakra-blur"),brightness:S.propT("--chakra-brightness",G.brightness),contrast:S.propT("--chakra-contrast",G.contrast),hueRotate:S.degreeT("--chakra-hue-rotate"),invert:S.propT("--chakra-invert",G.invert),saturate:S.propT("--chakra-saturate",G.saturate),dropShadow:S.propT("--chakra-drop-shadow",G.dropShadow),backdropFilter:{transform:G.backdropFilter},backdropBlur:S.blur("--chakra-backdrop-blur"),backdropBrightness:S.propT("--chakra-backdrop-brightness",G.brightness),backdropContrast:S.propT("--chakra-backdrop-contrast",G.contrast),backdropHueRotate:S.degreeT("--chakra-backdrop-hue-rotate"),backdropInvert:S.propT("--chakra-backdrop-invert",G.invert),backdropSaturate:S.propT("--chakra-backdrop-saturate",G.saturate)},ws={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:{transform:G.flexDirection},experimental_spaceX:{static:Qw,transform:_a({scale:"space",transform:e=>e!==null?{"--chakra-space-x":e}:null})},experimental_spaceY:{static:Jw,transform:_a({scale:"space",transform:e=>e!=null?{"--chakra-space-y":e}:null})},flex:!0,flexFlow:!0,flexGrow:!0,flexShrink:!0,flexBasis:S.sizes("flexBasis"),justifySelf:!0,alignSelf:!0,order:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:S.space("gap"),rowGap:S.space("rowGap"),columnGap:S.space("columnGap")};Object.assign(ws,{flexDir:ws.flexDirection});var Ch={gridGap:S.space("gridGap"),gridColumnGap:S.space("gridColumnGap"),gridRowGap:S.space("gridRowGap"),gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridColumnStart:!0,gridColumnEnd:!0,gridRowStart:!0,gridRowEnd:!0,gridAutoRows:!0,gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},l3={appearance:!0,cursor:!0,resize:!0,userSelect:!0,pointerEvents:!0,outline:{transform:G.outline},outlineOffset:!0,outlineColor:S.colors("outlineColor")},wt={width:S.sizesT("width"),inlineSize:S.sizesT("inlineSize"),height:S.sizes("height"),blockSize:S.sizes("blockSize"),boxSize:S.sizes(["width","height"]),minWidth:S.sizes("minWidth"),minInlineSize:S.sizes("minInlineSize"),minHeight:S.sizes("minHeight"),minBlockSize:S.sizes("minBlockSize"),maxWidth:S.sizes("maxWidth"),maxInlineSize:S.sizes("maxInlineSize"),maxHeight:S.sizes("maxHeight"),maxBlockSize:S.sizes("maxBlockSize"),overflow:!0,overflowX:!0,overflowY:!0,overscrollBehavior:!0,overscrollBehaviorX:!0,overscrollBehaviorY:!0,display:!0,verticalAlign:!0,boxSizing:!0,boxDecorationBreak:!0,float:S.propT("float",G.float),objectFit:!0,objectPosition:!0,visibility:!0,isolation:!0};Object.assign(wt,{w:wt.width,h:wt.height,minW:wt.minWidth,maxW:wt.maxWidth,minH:wt.minHeight,maxH:wt.maxHeight,overscroll:wt.overscrollBehavior,overscrollX:wt.overscrollBehaviorX,overscrollY:wt.overscrollBehaviorY});var u3={listStyleType:!0,listStylePosition:!0,listStylePos:S.prop("listStylePosition"),listStyleImage:!0,listStyleImg:S.prop("listStyleImage")};function c3(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}var d3=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},f3=d3(c3),p3={border:"0px",clip:"rect(0, 0, 0, 0)",width:"1px",height:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},m3={position:"static",width:"auto",height:"auto",clip:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal"},fu=(e,t,n)=>{const r={},o=f3(e,t,{});for(const a in o)a in n&&n[a]!=null||(r[a]=o[a]);return r},g3={srOnly:{transform(e){return e===!0?p3:e==="focusable"?m3:{}}},layerStyle:{processResult:!0,transform:(e,t,n)=>fu(t,`layerStyles.${e}`,n)},textStyle:{processResult:!0,transform:(e,t,n)=>fu(t,`textStyles.${e}`,n)},apply:{processResult:!0,transform:(e,t,n)=>fu(t,e,n)}},oa={position:!0,pos:S.prop("position"),zIndex:S.prop("zIndex","zIndices"),inset:S.spaceT("inset"),insetX:S.spaceT(["left","right"]),insetInline:S.spaceT("insetInline"),insetY:S.spaceT(["top","bottom"]),insetBlock:S.spaceT("insetBlock"),top:S.spaceT("top"),insetBlockStart:S.spaceT("insetBlockStart"),bottom:S.spaceT("bottom"),insetBlockEnd:S.spaceT("insetBlockEnd"),left:S.spaceT("left"),insetInlineStart:S.logical({scale:"space",property:{ltr:"left",rtl:"right"}}),right:S.spaceT("right"),insetInlineEnd:S.logical({scale:"space",property:{ltr:"right",rtl:"left"}})};Object.assign(oa,{insetStart:oa.insetInlineStart,insetEnd:oa.insetInlineEnd});var h3={ring:{transform:G.ring},ringColor:S.colors("--chakra-ring-color"),ringOffset:S.prop("--chakra-ring-offset-width"),ringOffsetColor:S.colors("--chakra-ring-offset-color"),ringInset:S.prop("--chakra-ring-inset")},le={margin:S.spaceT("margin"),marginTop:S.spaceT("marginTop"),marginBlockStart:S.spaceT("marginBlockStart"),marginRight:S.spaceT("marginRight"),marginInlineEnd:S.spaceT("marginInlineEnd"),marginBottom:S.spaceT("marginBottom"),marginBlockEnd:S.spaceT("marginBlockEnd"),marginLeft:S.spaceT("marginLeft"),marginInlineStart:S.spaceT("marginInlineStart"),marginX:S.spaceT(["marginInlineStart","marginInlineEnd"]),marginInline:S.spaceT("marginInline"),marginY:S.spaceT(["marginTop","marginBottom"]),marginBlock:S.spaceT("marginBlock"),padding:S.space("padding"),paddingTop:S.space("paddingTop"),paddingBlockStart:S.space("paddingBlockStart"),paddingRight:S.space("paddingRight"),paddingBottom:S.space("paddingBottom"),paddingBlockEnd:S.space("paddingBlockEnd"),paddingLeft:S.space("paddingLeft"),paddingInlineStart:S.space("paddingInlineStart"),paddingInlineEnd:S.space("paddingInlineEnd"),paddingX:S.space(["paddingInlineStart","paddingInlineEnd"]),paddingInline:S.space("paddingInline"),paddingY:S.space(["paddingTop","paddingBottom"]),paddingBlock:S.space("paddingBlock")};Object.assign(le,{m:le.margin,mt:le.marginTop,mr:le.marginRight,me:le.marginInlineEnd,marginEnd:le.marginInlineEnd,mb:le.marginBottom,ml:le.marginLeft,ms:le.marginInlineStart,marginStart:le.marginInlineStart,mx:le.marginX,my:le.marginY,p:le.padding,pt:le.paddingTop,py:le.paddingY,px:le.paddingX,pb:le.paddingBottom,pl:le.paddingLeft,ps:le.paddingInlineStart,paddingStart:le.paddingInlineStart,pr:le.paddingRight,pe:le.paddingInlineEnd,paddingEnd:le.paddingInlineEnd});var y3={textDecorationColor:S.colors("textDecorationColor"),textDecoration:!0,textDecor:{property:"textDecoration"},textDecorationLine:!0,textDecorationStyle:!0,textDecorationThickness:!0,textUnderlineOffset:!0,textShadow:S.shadows("textShadow")},b3={clipPath:!0,transform:S.propT("transform",G.transform),transformOrigin:!0,translateX:S.spaceT("--chakra-translate-x"),translateY:S.spaceT("--chakra-translate-y"),skewX:S.degreeT("--chakra-skew-x"),skewY:S.degreeT("--chakra-skew-y"),scaleX:S.prop("--chakra-scale-x"),scaleY:S.prop("--chakra-scale-y"),scale:S.prop(["--chakra-scale-x","--chakra-scale-y"]),rotate:S.degreeT("--chakra-rotate")},v3={transition:!0,transitionDelay:!0,animation:!0,willChange:!0,transitionDuration:S.prop("transitionDuration","transition.duration"),transitionProperty:S.prop("transitionProperty","transition.property"),transitionTimingFunction:S.prop("transitionTimingFunction","transition.easing")},w3={fontFamily:S.prop("fontFamily","fonts"),fontSize:S.prop("fontSize","fontSizes",G.px),fontWeight:S.prop("fontWeight","fontWeights"),lineHeight:S.prop("lineHeight","lineHeights"),letterSpacing:S.prop("letterSpacing","letterSpacings"),textAlign:!0,fontStyle:!0,textIndent:!0,wordBreak:!0,overflowWrap:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0,noOfLines:{static:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"var(--chakra-line-clamp)"},property:"--chakra-line-clamp"}},S3={scrollBehavior:!0,scrollSnapAlign:!0,scrollSnapStop:!0,scrollSnapType:!0,scrollMargin:S.spaceT("scrollMargin"),scrollMarginTop:S.spaceT("scrollMarginTop"),scrollMarginBottom:S.spaceT("scrollMarginBottom"),scrollMarginLeft:S.spaceT("scrollMarginLeft"),scrollMarginRight:S.spaceT("scrollMarginRight"),scrollMarginX:S.spaceT(["scrollMarginLeft","scrollMarginRight"]),scrollMarginY:S.spaceT(["scrollMarginTop","scrollMarginBottom"]),scrollPadding:S.spaceT("scrollPadding"),scrollPaddingTop:S.spaceT("scrollPaddingTop"),scrollPaddingBottom:S.spaceT("scrollPaddingBottom"),scrollPaddingLeft:S.spaceT("scrollPaddingLeft"),scrollPaddingRight:S.spaceT("scrollPaddingRight"),scrollPaddingX:S.spaceT(["scrollPaddingLeft","scrollPaddingRight"]),scrollPaddingY:S.spaceT(["scrollPaddingTop","scrollPaddingBottom"])};function kh(e){return Lt(e)&&e.reference?e.reference:String(e)}var cl=(e,...t)=>t.map(kh).join(` ${e} `).replace(/calc/g,""),Xp=(...e)=>`calc(${cl("+",...e)})`,Qp=(...e)=>`calc(${cl("-",...e)})`,hc=(...e)=>`calc(${cl("*",...e)})`,Jp=(...e)=>`calc(${cl("/",...e)})`,em=e=>{const t=kh(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:hc(t,-1)},dr=Object.assign(e=>({add:(...t)=>dr(Xp(e,...t)),subtract:(...t)=>dr(Qp(e,...t)),multiply:(...t)=>dr(hc(e,...t)),divide:(...t)=>dr(Jp(e,...t)),negate:()=>dr(em(e)),toString:()=>e.toString()}),{add:Xp,subtract:Qp,multiply:hc,divide:Jp,negate:em});function x3(e,t="-"){return e.replace(/\s+/g,t)}function C3(e){const t=x3(e.toString());return T3(k3(t))}function k3(e){return e.includes("\\.")?e:!Number.isInteger(parseFloat(e.toString()))?e.replace(".","\\."):e}function T3(e){return e.replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function _3(e,t=""){return[t,e].filter(Boolean).join("-")}function F3(e,t){return`var(${e}${t?`, ${t}`:""})`}function A3(e,t=""){return C3(`--${_3(e,t)}`)}function re(e,t,n){const r=A3(e,n);return{variable:r,reference:F3(r,t)}}function P3(e){const t=e==null?0:e.length;return t?e[t-1]:void 0}function E3(e){const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}}function yc(e){if(e==null)return e;const{unitless:t}=E3(e);return t||typeof e=="number"?`${e}px`:e}var Th=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,Dd=e=>Object.fromEntries(Object.entries(e).sort(Th));function tm(e){const t=Dd(e);return Object.assign(Object.values(t),t)}function q3(e){const t=Object.keys(Dd(e));return new Set(t)}function nm(e){var n;if(!e)return e;e=(n=yc(e))!=null?n:e;const t=e.endsWith("px")?-1:-.0625;return typeof e=="number"?`${e+t}`:e.replace(/(\d+\.?\d*)/u,r=>`${parseFloat(r)+t}`)}function Xo(e,t){const n=["@media screen"];return e&&n.push("and",`(min-width: ${yc(e)})`),t&&n.push("and",`(max-width: ${yc(t)})`),n.join(" ")}function I3(e){var a;if(!e)return null;e.base=(a=e.base)!=null?a:"0px";const t=tm(e),n=Object.entries(e).sort(Th).map(([i,s],l,u)=>{var d;let[,c]=(d=u[l+1])!=null?d:[];return c=parseFloat(c)>0?nm(c):void 0,{_minW:nm(s),breakpoint:i,minW:s,maxW:c,maxWQuery:Xo(null,c),minWQuery:Xo(s),minMaxQuery:Xo(s,c)}}),r=q3(e),o=Array.from(r.values());return{keys:r,normalized:t,isResponsive(i){const s=Object.keys(i);return s.length>0&&s.every(l=>r.has(l))},asObject:Dd(e),asArray:tm(e),details:n,media:[null,...t.map(i=>Xo(i)).slice(1)],toArrayValue(i){if(!Lt(i))throw new Error("toArrayValue: value must be an object");const s=o.map(l=>{var u;return(u=i[l])!=null?u:null});for(;P3(s)===null;)s.pop();return s},toObjectValue(i){if(!Array.isArray(i))throw new Error("toObjectValue: value must be an array");return i.reduce((s,l,u)=>{const c=o[u];return c!=null&&l!=null&&(s[c]=l),s},{})}}}var Re={hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,indeterminate:(e,t)=>`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,readOnly:(e,t)=>`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,expanded:(e,t)=>`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`},_n=e=>_h(t=>e(t,"&"),"[role=group]","[data-group]",".group"),cn=e=>_h(t=>e(t,"~ &"),"[data-peer]",".peer"),_h=(e,...t)=>t.map(e).join(", "),dl={_hover:"&:hover, &[data-hover]",_active:"&:active, &[data-active]",_focus:"&:focus, &[data-focus]",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within",_focusVisible:"&:focus-visible, &[data-focus-visible]",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly]",_before:"&::before",_after:"&::after",_empty:"&:empty",_expanded:"&[aria-expanded=true], &[data-expanded]",_checked:"&[aria-checked=true], &[data-checked]",_grabbed:"&[aria-grabbed=true], &[data-grabbed]",_pressed:"&[aria-pressed=true], &[data-pressed]",_invalid:"&[aria-invalid=true], &[data-invalid]",_valid:"&[data-valid], &[data-state=valid]",_loading:"&[data-loading], &[aria-busy=true]",_selected:"&[aria-selected=true], &[data-selected]",_hidden:"&[hidden], &[data-hidden]",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",_groupHover:_n(Re.hover),_peerHover:cn(Re.hover),_groupFocus:_n(Re.focus),_peerFocus:cn(Re.focus),_groupFocusVisible:_n(Re.focusVisible),_peerFocusVisible:cn(Re.focusVisible),_groupActive:_n(Re.active),_peerActive:cn(Re.active),_groupDisabled:_n(Re.disabled),_peerDisabled:cn(Re.disabled),_groupInvalid:_n(Re.invalid),_peerInvalid:cn(Re.invalid),_groupChecked:_n(Re.checked),_peerChecked:cn(Re.checked),_groupFocusWithin:_n(Re.focusWithin),_peerFocusWithin:cn(Re.focusWithin),_peerPlaceholderShown:cn(Re.placeholderShown),_placeholder:"&::placeholder",_placeholderShown:"&:placeholder-shown",_fullScreen:"&:fullscreen",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_mediaDark:"@media (prefers-color-scheme: dark)",_mediaReduceMotion:"@media (prefers-reduced-motion: reduce)",_dark:".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",_light:".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"},z3=Object.keys(dl);function rm(e,t){return re(String(e).replace(/\./g,"-"),void 0,t)}function R3(e,t){let n={};const r={};for(const[o,a]of Object.entries(e)){const{isSemantic:i,value:s}=a,{variable:l,reference:u}=rm(o,t==null?void 0:t.cssVarPrefix);if(!i){if(o.startsWith("space")){const f=o.split("."),[m,...b]=f,v=`${m}.-${b.join(".")}`,C=dr.negate(s),h=dr.negate(u);r[v]={value:C,var:l,varRef:h}}n[l]=s,r[o]={value:s,var:l,varRef:u};continue}const c=f=>{const b=[String(o).split(".")[0],f].join(".");if(!e[b])return f;const{reference:C}=rm(b,t==null?void 0:t.cssVarPrefix);return C},d=Lt(s)?s:{default:s};n=Jt(n,Object.entries(d).reduce((f,[m,b])=>{var p;var v;const C=c(b);if(m==="default")return f[l]=C,f;const h=(p=(v=dl)==null?void 0:v[m])!=null?p:m;return f[h]={[l]:C},f},{})),r[o]={value:u,var:l,varRef:u}}return{cssVars:n,cssMap:r}}function V3(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function M3(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}var j3=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur"];function L3(e){return M3(e,j3)}function B3(e){return e.semanticTokens}function N3(e){const{__cssMap:t,__cssVars:n,__breakpoints:r,...o}=e;return o}function O3({tokens:e,semanticTokens:t}){var o,a;const n=Object.entries((o=bc(e))!=null?o:{}).map(([i,s])=>[i,{isSemantic:!1,value:s}]),r=Object.entries((a=bc(t,1))!=null?a:{}).map(([i,s])=>[i,{isSemantic:!0,value:s}]);return Object.fromEntries([...n,...r])}function bc(e,t=1/0){return!Lt(e)&&!Array.isArray(e)||!t?e:Object.entries(e).reduce((n,[r,o])=>(Lt(o)||Array.isArray(o)?Object.entries(bc(o,t-1)).forEach(([a,i])=>{n[`${r}.${a}`]=i}):n[r]=o,n),{})}function D3(e){var t;const n=N3(e),r=L3(n),o=B3(n),a=O3({tokens:r,semanticTokens:o}),i=(t=n.config)==null?void 0:t.cssVarPrefix,{cssMap:s,cssVars:l}=R3(a,{cssVarPrefix:i});return Object.assign(n,{__cssVars:{...{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"},...l},__cssMap:s,__breakpoints:I3(n.breakpoints)}),n}var $d=Jt({},es,Y,i3,ws,wt,s3,h3,l3,Ch,g3,oa,gc,le,S3,w3,y3,b3,u3,v3);Object.assign({},le,wt,ws,Ch,oa);var $3=[...Object.keys($d),...z3],W3={...$d,...dl},H3=e=>e in W3,U3=e=>t=>{if(!t.__breakpoints)return e;const{isResponsive:n,toArrayValue:r,media:o}=t.__breakpoints,a={};for(const i in e){let s=pr(e[i],t);if(s==null)continue;if(s=Lt(s)&&n(s)?r(s):s,!Array.isArray(s)){a[i]=s;continue}const l=s.slice(0,o.length).length;for(let u=0;u<l;u+=1){const c=o==null?void 0:o[u];if(!c){a[i]=s[u];continue}a[c]=a[c]||{},s[u]!=null&&(a[c][i]=s[u])}}return a};function G3(e){const t=[];let n="",r=!1;for(let o=0;o<e.length;o++){const a=e[o];a==="("?(r=!0,n+=a):a===")"?(r=!1,n+=a):a===","&&!r?(t.push(n),n=""):n+=a}return n=n.trim(),n&&t.push(n),t}function K3(e){return/^var\(--.+\)$/.test(e)}var Y3=(e,t)=>e.startsWith("--")&&typeof t=="string"&&!K3(t),Z3=(e,t)=>{var i,s;if(t==null)return t;const n=l=>{var u,c;return(c=(u=e.__cssMap)==null?void 0:u[l])==null?void 0:c.varRef},r=l=>{var u;return(u=n(l))!=null?u:l},[o,a]=G3(t);return t=(s=(i=n(o))!=null?i:r(a))!=null?s:r(t),t};function X3(e){const{configs:t={},pseudos:n={},theme:r}=e,o=(a,i=!1)=>{var d,f;var s;const l=pr(a,r),u=U3(l)(r);let c={};for(let m in u){const b=u[m];let v=pr(b,r);m in n&&(m=n[m]),Y3(m,v)&&(v=Z3(r,v));let C=t[m];if(C===!0&&(C={property:m}),Lt(v)){c[m]=(d=c[m])!=null?d:{},c[m]=Jt({},c[m],o(v,!0));continue}let h=(f=(s=C==null?void 0:C.transform)==null?void 0:s.call(C,v,r,l))!=null?f:v;h=C!=null&&C.processResult?o(h,!0):h;const p=pr(C==null?void 0:C.property,r);if(!i&&(C==null?void 0:C.static)){const g=pr(C.static,r);c=Jt({},c,g)}if(p&&Array.isArray(p)){for(const g of p)c[g]=h;continue}if(p){p==="&"&&Lt(h)?c=Jt({},c,h):c[p]=h;continue}if(Lt(h)){c=Jt({},c,h);continue}c[m]=h}return c};return o}var Fh=e=>t=>X3({theme:t,pseudos:dl,configs:$d})(e);function ce(e){return{definePartsStyle(t){return t},defineMultiStyleConfig(t){return{parts:e,...t}}}}function Q3(e,t){if(Array.isArray(e))return e;if(Lt(e))return t(e);if(e!=null)return[e]}function J3(e,t){for(let n=t+1;n<e.length;n++)if(e[n]!=null)return n;return-1}function e5(e){const t=e.__breakpoints;return function(r,o,a,i){var s,l;if(!t)return;const u={},c=Q3(a,t.toArrayValue);if(!c)return u;const d=c.length,f=d===1,m=!!r.parts;for(let b=0;b<d;b++){const v=t.details[b],C=t.details[J3(c,b)],h=Xo(v.minW,C==null?void 0:C._minW),p=pr((s=r[o])==null?void 0:s[c[b]],i);if(!!p){if(m){(l=r.parts)==null||l.forEach(g=>{Jt(u,{[g]:f?p[g]:{[h]:p[g]}})});continue}if(!m){f?Jt(u,p):u[h]=p;continue}u[h]=p}}return u}}function t5(e){return t=>{var i;const{variant:n,size:r,theme:o}=t,a=e5(o);return Jt({},pr((i=e.baseStyle)!=null?i:{},t),a(e,"sizes",r,t),a(e,"variants",n,t))}}function mt(e){return V3(e,["styleConfig","size","variant","colorScheme"])}function n5(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function r5(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var o5=function(){function e(n){var r=this;this._insertTag=function(o){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,a),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(r5(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var a=n5(o);try{a.insertRule(r,a.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Oe="-ms-",Ss="-moz-",Z="-webkit-",Ah="comm",Wd="rule",Hd="decl",a5="@import",Ph="@keyframes",i5=Math.abs,fl=String.fromCharCode,s5=Object.assign;function l5(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function Eh(e){return e.trim()}function u5(e,t){return(e=t.exec(e))?e[0]:e}function J(e,t,n){return e.replace(t,n)}function vc(e,t){return e.indexOf(t)}function Me(e,t){return e.charCodeAt(t)|0}function Fa(e,t,n){return e.slice(t,n)}function Zt(e){return e.length}function Ud(e){return e.length}function _i(e,t){return t.push(e),e}function c5(e,t){return e.map(t).join("")}var pl=1,ho=1,qh=0,ot=0,ke=0,Fo="";function ml(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:pl,column:ho,length:i,return:""}}function Lo(e,t){return s5(ml("",null,null,"",null,null,0),e,{length:-e.length},t)}function d5(){return ke}function f5(){return ke=ot>0?Me(Fo,--ot):0,ho--,ke===10&&(ho=1,pl--),ke}function ut(){return ke=ot<qh?Me(Fo,ot++):0,ho++,ke===10&&(ho=1,pl++),ke}function tn(){return Me(Fo,ot)}function ts(){return ot}function ri(e,t){return Fa(Fo,e,t)}function Aa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ih(e){return pl=ho=1,qh=Zt(Fo=e),ot=0,[]}function zh(e){return Fo="",e}function ns(e){return Eh(ri(ot-1,wc(e===91?e+2:e===40?e+1:e)))}function p5(e){for(;(ke=tn())&&ke<33;)ut();return Aa(e)>2||Aa(ke)>3?"":" "}function m5(e,t){for(;--t&&ut()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return ri(e,ts()+(t<6&&tn()==32&&ut()==32))}function wc(e){for(;ut();)switch(ke){case e:return ot;case 34:case 39:e!==34&&e!==39&&wc(ke);break;case 40:e===41&&wc(e);break;case 92:ut();break}return ot}function g5(e,t){for(;ut()&&e+ke!==47+10;)if(e+ke===42+42&&tn()===47)break;return"/*"+ri(t,ot-1)+"*"+fl(e===47?e:ut())}function h5(e){for(;!Aa(tn());)ut();return ri(e,ot)}function y5(e){return zh(rs("",null,null,null,[""],e=Ih(e),0,[0],e))}function rs(e,t,n,r,o,a,i,s,l){for(var u=0,c=0,d=i,f=0,m=0,b=0,v=1,C=1,h=1,p=0,g="",x=o,_=a,A=r,F=g;C;)switch(b=p,p=ut()){case 40:if(b!=108&&Me(F,d-1)==58){vc(F+=J(ns(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:F+=ns(p);break;case 9:case 10:case 13:case 32:F+=p5(b);break;case 92:F+=m5(ts()-1,7);continue;case 47:switch(tn()){case 42:case 47:_i(b5(g5(ut(),ts()),t,n),l);break;default:F+="/"}break;case 123*v:s[u++]=Zt(F)*h;case 125*v:case 59:case 0:switch(p){case 0:case 125:C=0;case 59+c:m>0&&Zt(F)-d&&_i(m>32?am(F+";",r,n,d-1):am(J(F," ","")+";",r,n,d-2),l);break;case 59:F+=";";default:if(_i(A=om(F,t,n,u,c,o,s,g,x=[],_=[],d),a),p===123)if(c===0)rs(F,t,A,A,x,a,d,s,_);else switch(f===99&&Me(F,3)===110?100:f){case 100:case 109:case 115:rs(e,A,A,r&&_i(om(e,A,A,0,0,o,s,g,o,x=[],d),_),o,_,d,s,r?x:_);break;default:rs(F,A,A,A,[""],_,0,s,_)}}u=c=m=0,v=h=1,g=F="",d=i;break;case 58:d=1+Zt(F),m=b;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&f5()==125)continue}switch(F+=fl(p),p*v){case 38:h=c>0?1:(F+="\f",-1);break;case 44:s[u++]=(Zt(F)-1)*h,h=1;break;case 64:tn()===45&&(F+=ns(ut())),f=tn(),c=d=Zt(g=F+=h5(ts())),p++;break;case 45:b===45&&Zt(F)==2&&(v=0)}}return a}function om(e,t,n,r,o,a,i,s,l,u,c){for(var d=o-1,f=o===0?a:[""],m=Ud(f),b=0,v=0,C=0;b<r;++b)for(var h=0,p=Fa(e,d+1,d=i5(v=i[b])),g=e;h<m;++h)(g=Eh(v>0?f[h]+" "+p:J(p,/&\f/g,f[h])))&&(l[C++]=g);return ml(e,t,n,o===0?Wd:s,l,u,c)}function b5(e,t,n){return ml(e,t,n,Ah,fl(d5()),Fa(e,2,-2),0)}function am(e,t,n,r){return ml(e,t,n,Hd,Fa(e,0,r),Fa(e,r+1,-1),r)}function eo(e,t){for(var n="",r=Ud(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function v5(e,t,n,r){switch(e.type){case a5:case Hd:return e.return=e.return||e.value;case Ah:return"";case Ph:return e.return=e.value+"{"+eo(e.children,r)+"}";case Wd:e.value=e.props.join(",")}return Zt(n=eo(e.children,r))?e.return=e.value+"{"+n+"}":""}function w5(e){var t=Ud(e);return function(n,r,o,a){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,a)||"";return i}}function S5(e){return function(t){t.root||(t=t.return)&&e(t)}}var im=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}};function Rh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var x5=function(t,n,r){for(var o=0,a=0;o=a,a=tn(),o===38&&a===12&&(n[r]=1),!Aa(a);)ut();return ri(t,ot)},C5=function(t,n){var r=-1,o=44;do switch(Aa(o)){case 0:o===38&&tn()===12&&(n[r]=1),t[r]+=x5(ot-1,n,r);break;case 2:t[r]+=ns(o);break;case 4:if(o===44){t[++r]=tn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=fl(o)}while(o=ut());return t},k5=function(t,n){return zh(C5(Ih(t),n))},sm=new WeakMap,T5=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!sm.get(r))&&!o){sm.set(t,!0);for(var a=[],i=k5(n,a),s=r.props,l=0,u=0;l<i.length;l++)for(var c=0;c<s.length;c++,u++)t.props[u]=a[l]?i[l].replace(/&\f/g,s[c]):s[c]+" "+i[l]}}},_5=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Vh(e,t){switch(l5(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+Ss+e+Oe+e+e;case 6828:case 4268:return Z+e+Oe+e+e;case 6165:return Z+e+Oe+"flex-"+e+e;case 5187:return Z+e+J(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+Oe+"flex-$1$2")+e;case 5443:return Z+e+Oe+"flex-item-"+J(e,/flex-|-self/,"")+e;case 4675:return Z+e+Oe+"flex-line-pack"+J(e,/align-content|flex-|-self/,"")+e;case 5548:return Z+e+Oe+J(e,"shrink","negative")+e;case 5292:return Z+e+Oe+J(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+J(e,"-grow","")+Z+e+Oe+J(e,"grow","positive")+e;case 4554:return Z+J(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return J(J(J(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return J(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return J(J(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4095:case 3583:case 4068:case 2532:return J(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zt(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return J(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+Ss+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vc(e,"stretch")?Vh(J(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Me(e,t+1)!==115)break;case 6444:switch(Me(e,Zt(e)-3-(~vc(e,"!important")&&10))){case 107:return J(e,":",":"+Z)+e;case 101:return J(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Z+(Me(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+Oe+"$2box$3")+e}break;case 5936:switch(Me(e,t+11)){case 114:return Z+e+Oe+J(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+Oe+J(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+Oe+J(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Z+e+Oe+e+e}return e}var F5=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Hd:t.return=Vh(t.value,t.length);break;case Ph:return eo([Lo(t,{value:J(t.value,"@","@"+Z)})],o);case Wd:if(t.length)return c5(t.props,function(a){switch(u5(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return eo([Lo(t,{props:[J(a,/:(read-\w+)/,":"+Ss+"$1")]})],o);case"::placeholder":return eo([Lo(t,{props:[J(a,/:(plac\w+)/,":"+Z+"input-$1")]}),Lo(t,{props:[J(a,/:(plac\w+)/,":"+Ss+"$1")]}),Lo(t,{props:[J(a,/:(plac\w+)/,Oe+"input-$1")]})],o)}return""})}},A5=[F5],P5=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var C=v.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||A5,a={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var C=v.getAttribute("data-emotion").split(" "),h=1;h<C.length;h++)a[C[h]]=!0;s.push(v)});var l,u=[T5,_5];{var c,d=[v5,S5(function(v){c.insert(v)})],f=w5(u.concat(o,d)),m=function(C){return eo(y5(C),f)};l=function(C,h,p,g){c=p,m(C?C+"{"+h.styles+"}":h.styles),g&&(b.inserted[h.name]=!0)}}var b={key:n,sheet:new o5({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return b.sheet.hydrate(s),b};function xs(){return xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xs.apply(this,arguments)}var Mh={exports:{}},ne={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,Gd=Ie?Symbol.for("react.element"):60103,Kd=Ie?Symbol.for("react.portal"):60106,gl=Ie?Symbol.for("react.fragment"):60107,hl=Ie?Symbol.for("react.strict_mode"):60108,yl=Ie?Symbol.for("react.profiler"):60114,bl=Ie?Symbol.for("react.provider"):60109,vl=Ie?Symbol.for("react.context"):60110,Yd=Ie?Symbol.for("react.async_mode"):60111,wl=Ie?Symbol.for("react.concurrent_mode"):60111,Sl=Ie?Symbol.for("react.forward_ref"):60112,xl=Ie?Symbol.for("react.suspense"):60113,E5=Ie?Symbol.for("react.suspense_list"):60120,Cl=Ie?Symbol.for("react.memo"):60115,kl=Ie?Symbol.for("react.lazy"):60116,q5=Ie?Symbol.for("react.block"):60121,I5=Ie?Symbol.for("react.fundamental"):60117,z5=Ie?Symbol.for("react.responder"):60118,R5=Ie?Symbol.for("react.scope"):60119;function gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gd:switch(e=e.type,e){case Yd:case wl:case gl:case yl:case hl:case xl:return e;default:switch(e=e&&e.$$typeof,e){case vl:case Sl:case kl:case Cl:case bl:return e;default:return t}}case Kd:return t}}}function jh(e){return gt(e)===wl}ne.AsyncMode=Yd;ne.ConcurrentMode=wl;ne.ContextConsumer=vl;ne.ContextProvider=bl;ne.Element=Gd;ne.ForwardRef=Sl;ne.Fragment=gl;ne.Lazy=kl;ne.Memo=Cl;ne.Portal=Kd;ne.Profiler=yl;ne.StrictMode=hl;ne.Suspense=xl;ne.isAsyncMode=function(e){return jh(e)||gt(e)===Yd};ne.isConcurrentMode=jh;ne.isContextConsumer=function(e){return gt(e)===vl};ne.isContextProvider=function(e){return gt(e)===bl};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gd};ne.isForwardRef=function(e){return gt(e)===Sl};ne.isFragment=function(e){return gt(e)===gl};ne.isLazy=function(e){return gt(e)===kl};ne.isMemo=function(e){return gt(e)===Cl};ne.isPortal=function(e){return gt(e)===Kd};ne.isProfiler=function(e){return gt(e)===yl};ne.isStrictMode=function(e){return gt(e)===hl};ne.isSuspense=function(e){return gt(e)===xl};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===gl||e===wl||e===yl||e===hl||e===xl||e===E5||typeof e=="object"&&e!==null&&(e.$$typeof===kl||e.$$typeof===Cl||e.$$typeof===bl||e.$$typeof===vl||e.$$typeof===Sl||e.$$typeof===I5||e.$$typeof===z5||e.$$typeof===R5||e.$$typeof===q5)};ne.typeOf=gt;(function(e){e.exports=ne})(Mh);var Lh=Mh.exports,V5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},M5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bh={};Bh[Lh.ForwardRef]=V5;Bh[Lh.Memo]=M5;var j5=!0;function L5(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Nh=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||j5===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Oh=function(t,n,r){Nh(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+o:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function B5(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var N5={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},O5=/[A-Z]|^ms/g,D5=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Dh=function(t){return t.charCodeAt(1)===45},lm=function(t){return t!=null&&typeof t!="boolean"},pu=Rh(function(e){return Dh(e)?e:e.replace(O5,"-$&").toLowerCase()}),um=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(D5,function(r,o,a){return Xt={name:o,styles:a,next:Xt},o})}return N5[t]!==1&&!Dh(t)&&typeof n=="number"&&n!==0?n+"px":n};function Pa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Xt={name:n.name,styles:n.styles,next:Xt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Xt={name:r.name,styles:r.styles,next:Xt},r=r.next;var o=n.styles+";";return o}return $5(e,t,n)}case"function":{if(e!==void 0){var a=Xt,i=n(e);return Xt=a,Pa(e,t,i)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function $5(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Pa(e,t,n[o])+";";else for(var a in n){var i=n[a];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=a+"{"+t[i]+"}":lm(i)&&(r+=pu(a)+":"+um(a,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var s=0;s<i.length;s++)lm(i[s])&&(r+=pu(a)+":"+um(a,i[s])+";");else{var l=Pa(e,t,i);switch(a){case"animation":case"animationName":{r+=pu(a)+":"+l+";";break}default:r+=a+"{"+l+"}"}}}return r}var cm=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Xt,Zd=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,a="";Xt=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,a+=Pa(r,n,i)):a+=i[0];for(var s=1;s<t.length;s++)a+=Pa(r,n,t[s]),o&&(a+=i[s]);cm.lastIndex=0;for(var l="",u;(u=cm.exec(a))!==null;)l+="-"+u[1];var c=B5(a)+l;return{name:c,styles:a,next:Xt}},W5=function(t){return t()},$h=Gp["useInsertionEffect"]?Gp["useInsertionEffect"]:!1,H5=$h||W5,dm=$h||k.exports.useLayoutEffect,Wh=k.exports.createContext(typeof HTMLElement<"u"?P5({key:"css"}):null);Wh.Provider;var Hh=function(t){return k.exports.forwardRef(function(n,r){var o=k.exports.useContext(Wh);return t(n,o,r)})},Ea=k.exports.createContext({}),U5=function(t,n){if(typeof n=="function"){var r=n(t);return r}return xs({},t,n)},G5=im(function(e){return im(function(t){return U5(e,t)})}),K5=function(t){var n=k.exports.useContext(Ea);return t.theme!==n&&(n=G5(n)(t.theme)),k.exports.createElement(Ea.Provider,{value:n},t.children)},Tl=Hh(function(e,t){var n=e.styles,r=Zd([n],void 0,k.exports.useContext(Ea)),o=k.exports.useRef();return dm(function(){var a=t.key+"-global",i=new t.sheet.constructor({key:a,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+a+" "+r.name+'"]');return t.sheet.tags.length&&(i.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",a),i.hydrate([l])),o.current=[i,s],function(){i.flush()}},[t]),dm(function(){var a=o.current,i=a[0],s=a[1];if(s){a[1]=!1;return}if(r.next!==void 0&&Oh(t,r.next,!0),i.tags.length){var l=i.tags[i.tags.length-1].nextElementSibling;i.before=l,i.flush()}t.insert("",r,i,!1)},[t,r.name]),null});function Y5(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Zd(t)}var Z5=function(){var t=Y5.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function X5(e){return typeof e=="function"}function Q5(e,t){const n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}function J5(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}var e9=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},Uh=e9(J5);function Gh(e,t){const n={};return Object.keys(e).forEach(r=>{const o=e[r];t(o,r,e)&&(n[r]=o)}),n}var Kh=e=>Gh(e,t=>t!=null);function Yh(e,...t){return X5(e)?e(...t):e}Object.freeze(["base","sm","md","lg","xl","2xl"]);function t9(e={}){const{strict:t=!0,errorMessage:n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:r}=e,o=k.exports.createContext(void 0);o.displayName=r;function a(){var i;const s=k.exports.useContext(o);if(!s&&t){const l=new Error(n);throw l.name="ContextError",(i=Error.captureStackTrace)==null||i.call(Error,l,a),l}return s}return[o.Provider,a,o]}var n9=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,r9=Rh(function(e){return n9.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),o9=r9,a9=function(t){return t!=="theme"},fm=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?o9:a9},pm=function(t,n,r){var o;if(n){var a=n.shouldForwardProp;o=t.__emotion_forwardProp&&a?function(i){return t.__emotion_forwardProp(i)&&a(i)}:a}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},i9=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Nh(n,r,o),H5(function(){return Oh(n,r,o)}),null},s9=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,a,i;n!==void 0&&(a=n.label,i=n.target);var s=pm(t,n,r),l=s||fm(o),u=!l("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push("label:"+a+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,m=1;m<f;m++)d.push(c[m],c[0][m])}var b=Hh(function(v,C,h){var p=u&&v.as||o,g="",x=[],_=v;if(v.theme==null){_={};for(var A in v)_[A]=v[A];_.theme=k.exports.useContext(Ea)}typeof v.className=="string"?g=L5(C.registered,x,v.className):v.className!=null&&(g=v.className+" ");var F=Zd(d.concat(x),C.registered,_);g+=C.key+"-"+F.name,i!==void 0&&(g+=" "+i);var E=u&&s===void 0?fm(p):l,L={};for(var V in v)u&&V==="as"||E(V)&&(L[V]=v[V]);return L.className=g,L.ref=h,k.exports.createElement(k.exports.Fragment,null,k.exports.createElement(i9,{cache:C,serialized:F,isStringTag:typeof p=="string"}),k.exports.createElement(p,L))});return b.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=o,b.__emotion_styles=d,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return"."+i}}),b.withComponent=function(v,C){return e(v,xs({},n,C,{shouldForwardProp:pm(b,C,!0)})).apply(void 0,d)},b}},l9=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Sc=s9.bind();l9.forEach(function(e){Sc[e]=Sc(e)});function ee(e,t={}){let n=!1;function r(){if(!n){n=!0;return}throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")}function o(...c){r();for(const d of c)t[d]=l(d);return ee(e,t)}function a(...c){for(const d of c)d in t||(t[d]=l(d));return ee(e,t)}function i(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.selector]))}function s(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.className]))}function l(c){const m=`chakra-${(["container","root"].includes(c!=null?c:"")?[e]:[e,c]).filter(Boolean).join("__")}`;return{className:m,selector:`.${m}`,toString:()=>c}}return{parts:o,toPart:l,extend:a,selectors:i,classnames:s,get keys(){return Object.keys(t)},__type:{}}}var u9=ee("accordion").parts("root","container","button","panel").extend("icon"),c9=ee("alert").parts("title","description","container").extend("icon","spinner"),d9=ee("avatar").parts("label","badge","container").extend("excessLabel","group"),f9=ee("breadcrumb").parts("link","item","container").extend("separator");ee("button").parts();var p9=ee("checkbox").parts("control","icon","container").extend("label");ee("progress").parts("track","filledTrack").extend("label");var m9=ee("drawer").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),g9=ee("editable").parts("preview","input","textarea"),h9=ee("form").parts("container","requiredIndicator","helperText"),y9=ee("formError").parts("text","icon"),b9=ee("input").parts("addon","field","element"),v9=ee("list").parts("container","item","icon"),w9=ee("menu").parts("button","list","item").extend("groupTitle","command","divider"),S9=ee("modal").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),x9=ee("numberinput").parts("root","field","stepperGroup","stepper");ee("pininput").parts("field");var C9=ee("popover").parts("content","header","body","footer").extend("popper","arrow","closeButton"),k9=ee("progress").parts("label","filledTrack","track"),T9=ee("radio").parts("container","control","label"),_9=ee("select").parts("field","icon"),F9=ee("slider").parts("container","track","thumb","filledTrack","mark"),A9=ee("stat").parts("container","label","helpText","number","icon"),P9=ee("switch").parts("container","track","thumb"),E9=ee("table").parts("table","thead","tbody","tr","th","td","tfoot","caption"),q9=ee("tabs").parts("root","tab","tablist","tabpanel","tabpanels","indicator"),I9=ee("tag").parts("container","label","closeButton"),z9=ee("card").parts("container","header","body","footer");function mr(e,t,n){return Math.min(Math.max(e,n),t)}class R9 extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var Qo=R9;function Xd(e){if(typeof e!="string")throw new Qo(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=D9.test(e)?j9(e):e;const n=L9.exec(t);if(n){const i=Array.from(n).slice(1);return[...i.slice(0,3).map(s=>parseInt(qa(s,2),16)),parseInt(qa(i[3]||"f",2),16)/255]}const r=B9.exec(t);if(r){const i=Array.from(r).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,16)),parseInt(i[3]||"ff",16)/255]}const o=N9.exec(t);if(o){const i=Array.from(o).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,10)),parseFloat(i[3]||"1")]}const a=O9.exec(t);if(a){const[i,s,l,u]=Array.from(a).slice(1).map(parseFloat);if(mr(0,100,s)!==s)throw new Qo(e);if(mr(0,100,l)!==l)throw new Qo(e);return[...$9(i,s,l),u||1]}throw new Qo(e)}function V9(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const mm=e=>parseInt(e.replace(/_/g,""),36),M9="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=mm(t.substring(0,3)),r=mm(t.substring(3)).toString(16);let o="";for(let a=0;a<6-r.length;a++)o+="0";return e[n]=`${o}${r}`,e},{});function j9(e){const t=e.toLowerCase().trim(),n=M9[V9(t)];if(!n)throw new Qo(e);return`#${n}`}const qa=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),L9=new RegExp(`^#${qa("([a-f0-9])",3)}([a-f0-9])?$`,"i"),B9=new RegExp(`^#${qa("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),N9=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${qa(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),O9=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,D9=/^[a-z]+$/i,gm=e=>Math.round(e*255),$9=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(gm);const o=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),i=a*(1-Math.abs(o%2-1));let s=0,l=0,u=0;o>=0&&o<1?(s=a,l=i):o>=1&&o<2?(s=i,l=a):o>=2&&o<3?(l=a,u=i):o>=3&&o<4?(l=i,u=a):o>=4&&o<5?(s=i,u=a):o>=5&&o<6&&(s=a,u=i);const c=r-a/2,d=s+c,f=l+c,m=u+c;return[d,f,m].map(gm)};function W9(e,t,n,r){return`rgba(${mr(0,255,e).toFixed()}, ${mr(0,255,t).toFixed()}, ${mr(0,255,n).toFixed()}, ${parseFloat(mr(0,1,r).toFixed(3))})`}function H9(e,t){const[n,r,o,a]=Xd(e);return W9(n,r,o,a-t)}function U9(e){const[t,n,r,o]=Xd(e);let a=i=>{const s=mr(0,255,i).toString(16);return s.length===1?`0${s}`:s};return`#${a(t)}${a(n)}${a(r)}${o<1?a(Math.round(o*255)):""}`}function G9(e,t,n,r,o){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e}var K9=e=>Object.keys(e).length===0,Ue=(e,t,n)=>{const r=G9(e,`colors.${t}`,t);try{return U9(r),r}catch{return n!=null?n:"#000000"}},Y9=e=>{const[t,n,r]=Xd(e);return(t*299+n*587+r*114)/1e3},Z9=e=>t=>{const n=Ue(t,e);return Y9(n)<128?"dark":"light"},X9=e=>t=>Z9(e)(t)==="dark",yo=(e,t)=>n=>{const r=Ue(n,e);return H9(r,1-t)};function hm(e="1rem",t="rgba(255, 255, 255, 0.15)"){return{backgroundImage:`linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,backgroundSize:`${e} ${e}`}}var Q9=()=>`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`;function J9(e){const t=Q9();return!e||K9(e)?t:e.string&&e.colors?t6(e.string,e.colors):e.string&&!e.colors?e6(e.string):e.colors&&!e.string?n6(e.colors):t}function e6(e){let t=0;if(e.length===0)return t.toString();for(let r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t),t=t&t;let n="#";for(let r=0;r<3;r+=1)n+=`00${(t>>r*8&255).toString(16)}`.substr(-2);return n}function t6(e,t){let n=0;if(e.length===0)return t[0];for(let r=0;r<e.length;r+=1)n=e.charCodeAt(r)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]}function n6(e){return e[Math.floor(Math.random()*e.length)]}function M(e,t){return n=>n.colorMode==="dark"?t:e}function Qd(e){const{orientation:t,vertical:n,horizontal:r}=e;return t?t==="vertical"?n:r:{}}function r6(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function Zh(e){return r6(e)&&e.reference?e.reference:String(e)}var _l=(e,...t)=>t.map(Zh).join(` ${e} `).replace(/calc/g,""),ym=(...e)=>`calc(${_l("+",...e)})`,bm=(...e)=>`calc(${_l("-",...e)})`,xc=(...e)=>`calc(${_l("*",...e)})`,vm=(...e)=>`calc(${_l("/",...e)})`,wm=e=>{const t=Zh(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:xc(t,-1)},mn=Object.assign(e=>({add:(...t)=>mn(ym(e,...t)),subtract:(...t)=>mn(bm(e,...t)),multiply:(...t)=>mn(xc(e,...t)),divide:(...t)=>mn(vm(e,...t)),negate:()=>mn(wm(e)),toString:()=>e.toString()}),{add:ym,subtract:bm,multiply:xc,divide:vm,negate:wm});function o6(e){return!Number.isInteger(parseFloat(e.toString()))}function a6(e,t="-"){return e.replace(/\s+/g,t)}function Xh(e){const t=a6(e.toString());return t.includes("\\.")?e:o6(e)?t.replace(".","\\."):e}function i6(e,t=""){return[t,Xh(e)].filter(Boolean).join("-")}function s6(e,t){return`var(${Xh(e)}${t?`, ${t}`:""})`}function l6(e,t=""){return`--${i6(e,t)}`}function Pe(e,t){const n=l6(e,t==null?void 0:t.prefix);return{variable:n,reference:s6(n,u6(t==null?void 0:t.fallback))}}function u6(e){return typeof e=="string"?e:e==null?void 0:e.reference}var{definePartsStyle:c6,defineMultiStyleConfig:d6}=ce(u9.keys),f6={borderTopWidth:"1px",borderColor:"inherit",_last:{borderBottomWidth:"1px"}},p6={transitionProperty:"common",transitionDuration:"normal",fontSize:"md",_focusVisible:{boxShadow:"outline"},_hover:{bg:"blackAlpha.50"},_disabled:{opacity:.4,cursor:"not-allowed"},px:"4",py:"2"},m6={pt:"2",px:"4",pb:"5"},g6={fontSize:"1.25em"},h6=c6({container:f6,button:p6,panel:m6,icon:g6}),y6=d6({baseStyle:h6}),{definePartsStyle:oi,defineMultiStyleConfig:b6}=ce(c9.keys),ct=re("alert-fg"),vn=re("alert-bg"),v6=oi({container:{bg:vn.reference,px:"4",py:"3"},title:{fontWeight:"bold",lineHeight:"6",marginEnd:"2"},description:{lineHeight:"6"},icon:{color:ct.reference,flexShrink:0,marginEnd:"3",w:"5",h:"6"},spinner:{color:ct.reference,flexShrink:0,marginEnd:"3",w:"5",h:"5"}});function Jd(e){const{theme:t,colorScheme:n}=e,r=yo(`${n}.200`,.16)(t);return{light:`colors.${n}.100`,dark:r}}var w6=oi(e=>{const{colorScheme:t}=e,n=Jd(e);return{container:{[ct.variable]:`colors.${t}.500`,[vn.variable]:n.light,_dark:{[ct.variable]:`colors.${t}.200`,[vn.variable]:n.dark}}}}),S6=oi(e=>{const{colorScheme:t}=e,n=Jd(e);return{container:{[ct.variable]:`colors.${t}.500`,[vn.variable]:n.light,_dark:{[ct.variable]:`colors.${t}.200`,[vn.variable]:n.dark},paddingStart:"3",borderStartWidth:"4px",borderStartColor:ct.reference}}}),x6=oi(e=>{const{colorScheme:t}=e,n=Jd(e);return{container:{[ct.variable]:`colors.${t}.500`,[vn.variable]:n.light,_dark:{[ct.variable]:`colors.${t}.200`,[vn.variable]:n.dark},pt:"2",borderTopWidth:"4px",borderTopColor:ct.reference}}}),C6=oi(e=>{const{colorScheme:t}=e;return{container:{[ct.variable]:"colors.white",[vn.variable]:`colors.${t}.500`,_dark:{[ct.variable]:"colors.gray.900",[vn.variable]:`colors.${t}.200`},color:ct.reference}}}),k6={subtle:w6,"left-accent":S6,"top-accent":x6,solid:C6},T6=b6({baseStyle:v6,variants:k6,defaultProps:{variant:"subtle",colorScheme:"blue"}}),Qh={px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},_6={max:"max-content",min:"min-content",full:"100%","3xs":"14rem","2xs":"16rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem",prose:"60ch"},F6={sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},A6={...Qh,..._6,container:F6},Jh=A6,P6=e=>typeof e=="function";function Ge(e,...t){return P6(e)?e(...t):e}var{definePartsStyle:ey,defineMultiStyleConfig:E6}=ce(d9.keys),to=re("avatar-border-color"),mu=re("avatar-bg"),q6={borderRadius:"full",border:"0.2em solid",[to.variable]:"white",_dark:{[to.variable]:"colors.gray.800"},borderColor:to.reference},I6={[mu.variable]:"colors.gray.200",_dark:{[mu.variable]:"colors.whiteAlpha.400"},bgColor:mu.reference},Sm=re("avatar-background"),z6=e=>{const{name:t,theme:n}=e,r=t?J9({string:t}):"colors.gray.400",o=X9(r)(n);let a="white";return o||(a="gray.800"),{bg:Sm.reference,"&:not([data-loaded])":{[Sm.variable]:r},color:a,[to.variable]:"colors.white",_dark:{[to.variable]:"colors.gray.800"},borderColor:to.reference,verticalAlign:"top"}},R6=ey(e=>({badge:Ge(q6,e),excessLabel:Ge(I6,e),container:Ge(z6,e)}));function Fn(e){const t=e!=="100%"?Jh[e]:void 0;return ey({container:{width:e,height:e,fontSize:`calc(${t!=null?t:e} / 2.5)`},excessLabel:{width:e,height:e},label:{fontSize:`calc(${t!=null?t:e} / 2.5)`,lineHeight:e!=="100%"?t!=null?t:e:void 0}})}var V6={"2xs":Fn(4),xs:Fn(6),sm:Fn(8),md:Fn(12),lg:Fn(16),xl:Fn(24),"2xl":Fn(32),full:Fn("100%")},M6=E6({baseStyle:R6,sizes:V6,defaultProps:{size:"md"}}),j6={px:1,textTransform:"uppercase",fontSize:"xs",borderRadius:"sm",fontWeight:"bold"},no=re("badge-bg"),en=re("badge-color"),L6=e=>{const{colorScheme:t,theme:n}=e,r=yo(`${t}.500`,.6)(n);return{[no.variable]:`colors.${t}.500`,[en.variable]:"colors.white",_dark:{[no.variable]:r,[en.variable]:"colors.whiteAlpha.800"},bg:no.reference,color:en.reference}},B6=e=>{const{colorScheme:t,theme:n}=e,r=yo(`${t}.200`,.16)(n);return{[no.variable]:`colors.${t}.100`,[en.variable]:`colors.${t}.800`,_dark:{[no.variable]:r,[en.variable]:`colors.${t}.200`},bg:no.reference,color:en.reference}},N6=e=>{const{colorScheme:t,theme:n}=e,r=yo(`${t}.200`,.8)(n);return{[en.variable]:`colors.${t}.500`,_dark:{[en.variable]:r},color:en.reference,boxShadow:`inset 0 0 0px 1px ${en.reference}`}},O6={solid:L6,subtle:B6,outline:N6},aa={baseStyle:j6,variants:O6,defaultProps:{variant:"subtle",colorScheme:"gray"}},{defineMultiStyleConfig:D6,definePartsStyle:$6}=ce(f9.keys),W6={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},H6=$6({link:W6}),U6=D6({baseStyle:H6}),G6={lineHeight:"1.2",borderRadius:"md",fontWeight:"semibold",transitionProperty:"common",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{_disabled:{bg:"initial"}}},ty=e=>{const{colorScheme:t,theme:n}=e;if(t==="gray")return{color:M("inherit","whiteAlpha.900")(e),_hover:{bg:M("gray.100","whiteAlpha.200")(e)},_active:{bg:M("gray.200","whiteAlpha.300")(e)}};const r=yo(`${t}.200`,.12)(n),o=yo(`${t}.200`,.24)(n);return{color:M(`${t}.600`,`${t}.200`)(e),bg:"transparent",_hover:{bg:M(`${t}.50`,r)(e)},_active:{bg:M(`${t}.100`,o)(e)}}},K6=e=>{const{colorScheme:t}=e,n=M("gray.200","whiteAlpha.300")(e);return{border:"1px solid",borderColor:t==="gray"?n:"currentColor",".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":{marginEnd:"-1px"},".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":{marginBottom:"-1px"},...Ge(ty,e)}},Y6={yellow:{bg:"yellow.400",color:"black",hoverBg:"yellow.500",activeBg:"yellow.600"},cyan:{bg:"cyan.400",color:"black",hoverBg:"cyan.500",activeBg:"cyan.600"}},Z6=e=>{var s;const{colorScheme:t}=e;if(t==="gray"){const l=M("gray.100","whiteAlpha.200")(e);return{bg:l,_hover:{bg:M("gray.200","whiteAlpha.300")(e),_disabled:{bg:l}},_active:{bg:M("gray.300","whiteAlpha.400")(e)}}}const{bg:n=`${t}.500`,color:r="white",hoverBg:o=`${t}.600`,activeBg:a=`${t}.700`}=(s=Y6[t])!=null?s:{},i=M(n,`${t}.200`)(e);return{bg:i,color:M(r,"gray.800")(e),_hover:{bg:M(o,`${t}.300`)(e),_disabled:{bg:i}},_active:{bg:M(a,`${t}.400`)(e)}}},X6=e=>{const{colorScheme:t}=e;return{padding:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",color:M(`${t}.500`,`${t}.200`)(e),_hover:{textDecoration:"underline",_disabled:{textDecoration:"none"}},_active:{color:M(`${t}.700`,`${t}.500`)(e)}}},Q6={bg:"none",color:"inherit",display:"inline",lineHeight:"inherit",m:"0",p:"0"},J6={ghost:ty,outline:K6,solid:Z6,link:X6,unstyled:Q6},e4={lg:{h:"12",minW:"12",fontSize:"lg",px:"6"},md:{h:"10",minW:"10",fontSize:"md",px:"4"},sm:{h:"8",minW:"8",fontSize:"sm",px:"3"},xs:{h:"6",minW:"6",fontSize:"xs",px:"2"}},t4={baseStyle:G6,variants:J6,sizes:e4,defaultProps:{variant:"solid",size:"md",colorScheme:"gray"}},{definePartsStyle:vr,defineMultiStyleConfig:n4}=ce(z9.keys),Cs=re("card-bg"),ro=re("card-padding"),r4=vr({container:{[Cs.variable]:"chakra-body-bg",backgroundColor:Cs.reference,color:"chakra-body-text"},body:{padding:ro.reference,flex:"1 1 0%"},header:{padding:ro.reference},footer:{padding:ro.reference}}),o4={sm:vr({container:{borderRadius:"base",[ro.variable]:"space.3"}}),md:vr({container:{borderRadius:"md",[ro.variable]:"space.5"}}),lg:vr({container:{borderRadius:"xl",[ro.variable]:"space.7"}})},a4={elevated:vr({container:{boxShadow:"base",_dark:{[Cs.variable]:"colors.gray.700"}}}),outline:vr({container:{borderWidth:"1px",borderColor:"chakra-border-color"}}),filled:vr({container:{[Cs.variable]:"colors.chakra-subtle-bg"}}),unstyled:{body:{padding:0},header:{padding:0},footer:{padding:0}}},i4=n4({baseStyle:r4,variants:a4,sizes:o4,defaultProps:{variant:"elevated",size:"md"}}),{definePartsStyle:os,defineMultiStyleConfig:s4}=ce(p9.keys),ia=re("checkbox-size"),l4=e=>{const{colorScheme:t}=e;return{w:ia.reference,h:ia.reference,transitionProperty:"box-shadow",transitionDuration:"normal",border:"2px solid",borderRadius:"sm",borderColor:"inherit",color:"white",_checked:{bg:M(`${t}.500`,`${t}.200`)(e),borderColor:M(`${t}.500`,`${t}.200`)(e),color:M("white","gray.900")(e),_hover:{bg:M(`${t}.600`,`${t}.300`)(e),borderColor:M(`${t}.600`,`${t}.300`)(e)},_disabled:{borderColor:M("gray.200","transparent")(e),bg:M("gray.200","whiteAlpha.300")(e),color:M("gray.500","whiteAlpha.500")(e)}},_indeterminate:{bg:M(`${t}.500`,`${t}.200`)(e),borderColor:M(`${t}.500`,`${t}.200`)(e),color:M("white","gray.900")(e)},_disabled:{bg:M("gray.100","whiteAlpha.100")(e),borderColor:M("gray.100","transparent")(e)},_focusVisible:{boxShadow:"outline"},_invalid:{borderColor:M("red.500","red.300")(e)}}},u4={_disabled:{cursor:"not-allowed"}},c4={userSelect:"none",_disabled:{opacity:.4}},d4={transitionProperty:"transform",transitionDuration:"normal"},f4=os(e=>({icon:d4,container:u4,control:Ge(l4,e),label:c4})),p4={sm:os({control:{[ia.variable]:"sizes.3"},label:{fontSize:"sm"},icon:{fontSize:"3xs"}}),md:os({control:{[ia.variable]:"sizes.4"},label:{fontSize:"md"},icon:{fontSize:"2xs"}}),lg:os({control:{[ia.variable]:"sizes.5"},label:{fontSize:"lg"},icon:{fontSize:"2xs"}})},ks=s4({baseStyle:f4,sizes:p4,defaultProps:{size:"md",colorScheme:"blue"}}),sa=Pe("close-button-size"),Bo=Pe("close-button-bg"),m4={w:[sa.reference],h:[sa.reference],borderRadius:"md",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{[Bo.variable]:"colors.blackAlpha.100",_dark:{[Bo.variable]:"colors.whiteAlpha.100"}},_active:{[Bo.variable]:"colors.blackAlpha.200",_dark:{[Bo.variable]:"colors.whiteAlpha.200"}},_focusVisible:{boxShadow:"outline"},bg:Bo.reference},g4={lg:{[sa.variable]:"sizes.10",fontSize:"md"},md:{[sa.variable]:"sizes.8",fontSize:"xs"},sm:{[sa.variable]:"sizes.6",fontSize:"2xs"}},h4={baseStyle:m4,sizes:g4,defaultProps:{size:"md"}},{variants:y4,defaultProps:b4}=aa,v4={fontFamily:"mono",fontSize:"sm",px:"0.2em",borderRadius:"sm"},w4={baseStyle:v4,variants:y4,defaultProps:b4},S4={w:"100%",mx:"auto",maxW:"prose",px:"4"},x4={baseStyle:S4},C4={opacity:.6,borderColor:"inherit"},k4={borderStyle:"solid"},T4={borderStyle:"dashed"},_4={solid:k4,dashed:T4},F4={baseStyle:C4,variants:_4,defaultProps:{variant:"solid"}},{definePartsStyle:Cc,defineMultiStyleConfig:A4}=ce(m9.keys),gu=re("drawer-bg"),hu=re("drawer-box-shadow");function Vr(e){return Cc(e==="full"?{dialog:{maxW:"100vw",h:"100vh"}}:{dialog:{maxW:e}})}var P4={bg:"blackAlpha.600",zIndex:"overlay"},E4={display:"flex",zIndex:"modal",justifyContent:"center"},q4=e=>{const{isFullHeight:t}=e;return{...t&&{height:"100vh"},zIndex:"modal",maxH:"100vh",color:"inherit",[gu.variable]:"colors.white",[hu.variable]:"shadows.lg",_dark:{[gu.variable]:"colors.gray.700",[hu.variable]:"shadows.dark-lg"},bg:gu.reference,boxShadow:hu.reference}},I4={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},z4={position:"absolute",top:"2",insetEnd:"3"},R4={px:"6",py:"2",flex:"1",overflow:"auto"},V4={px:"6",py:"4"},M4=Cc(e=>({overlay:P4,dialogContainer:E4,dialog:Ge(q4,e),header:I4,closeButton:z4,body:R4,footer:V4})),j4={xs:Vr("xs"),sm:Vr("md"),md:Vr("lg"),lg:Vr("2xl"),xl:Vr("4xl"),full:Vr("full")},L4=A4({baseStyle:M4,sizes:j4,defaultProps:{size:"xs"}}),{definePartsStyle:B4,defineMultiStyleConfig:N4}=ce(g9.keys),O4={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal"},D4={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},$4={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},W4=B4({preview:O4,input:D4,textarea:$4}),H4=N4({baseStyle:W4}),{definePartsStyle:U4,defineMultiStyleConfig:G4}=ce(h9.keys),oo=re("form-control-color"),K4={marginStart:"1",[oo.variable]:"colors.red.500",_dark:{[oo.variable]:"colors.red.300"},color:oo.reference},Y4={mt:"2",[oo.variable]:"colors.gray.600",_dark:{[oo.variable]:"colors.whiteAlpha.600"},color:oo.reference,lineHeight:"normal",fontSize:"sm"},Z4=U4({container:{width:"100%",position:"relative"},requiredIndicator:K4,helperText:Y4}),X4=G4({baseStyle:Z4}),{definePartsStyle:Q4,defineMultiStyleConfig:J4}=ce(y9.keys),ao=re("form-error-color"),eS={[ao.variable]:"colors.red.500",_dark:{[ao.variable]:"colors.red.300"},color:ao.reference,mt:"2",fontSize:"sm",lineHeight:"normal"},tS={marginEnd:"0.5em",[ao.variable]:"colors.red.500",_dark:{[ao.variable]:"colors.red.300"},color:ao.reference},nS=Q4({text:eS,icon:tS}),rS=J4({baseStyle:nS}),oS={fontSize:"md",marginEnd:"3",mb:"2",fontWeight:"medium",transitionProperty:"common",transitionDuration:"normal",opacity:1,_disabled:{opacity:.4}},aS={baseStyle:oS},iS={fontFamily:"heading",fontWeight:"bold"},sS={"4xl":{fontSize:["6xl",null,"7xl"],lineHeight:1},"3xl":{fontSize:["5xl",null,"6xl"],lineHeight:1},"2xl":{fontSize:["4xl",null,"5xl"],lineHeight:[1.2,null,1]},xl:{fontSize:["3xl",null,"4xl"],lineHeight:[1.33,null,1.2]},lg:{fontSize:["2xl",null,"3xl"],lineHeight:[1.33,null,1.2]},md:{fontSize:"xl",lineHeight:1.2},sm:{fontSize:"md",lineHeight:1.2},xs:{fontSize:"sm",lineHeight:1.2}},lS={baseStyle:iS,sizes:sS,defaultProps:{size:"xl"}},{definePartsStyle:gn,defineMultiStyleConfig:uS}=ce(b9.keys),cS=gn({field:{width:"100%",minWidth:0,outline:0,position:"relative",appearance:"none",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed"}}}),An={lg:{fontSize:"lg",px:"4",h:"12",borderRadius:"md"},md:{fontSize:"md",px:"4",h:"10",borderRadius:"md"},sm:{fontSize:"sm",px:"3",h:"8",borderRadius:"sm"},xs:{fontSize:"xs",px:"2",h:"6",borderRadius:"sm"}},dS={lg:gn({field:An.lg,addon:An.lg}),md:gn({field:An.md,addon:An.md}),sm:gn({field:An.sm,addon:An.sm}),xs:gn({field:An.xs,addon:An.xs})};function ef(e){const{focusBorderColor:t,errorBorderColor:n}=e;return{focusBorderColor:t||M("blue.500","blue.300")(e),errorBorderColor:n||M("red.500","red.300")(e)}}var fS=gn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=ef(e);return{field:{border:"1px solid",borderColor:"inherit",bg:"inherit",_hover:{borderColor:M("gray.300","whiteAlpha.400")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ue(t,r),boxShadow:`0 0 0 1px ${Ue(t,r)}`},_focusVisible:{zIndex:1,borderColor:Ue(t,n),boxShadow:`0 0 0 1px ${Ue(t,n)}`}},addon:{border:"1px solid",borderColor:M("inherit","whiteAlpha.50")(e),bg:M("gray.100","whiteAlpha.300")(e)}}}),pS=gn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=ef(e);return{field:{border:"2px solid",borderColor:"transparent",bg:M("gray.100","whiteAlpha.50")(e),_hover:{bg:M("gray.200","whiteAlpha.100")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ue(t,r)},_focusVisible:{bg:"transparent",borderColor:Ue(t,n)}},addon:{border:"2px solid",borderColor:"transparent",bg:M("gray.100","whiteAlpha.50")(e)}}}),mS=gn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=ef(e);return{field:{borderBottom:"1px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent",_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ue(t,r),boxShadow:`0px 1px 0px 0px ${Ue(t,r)}`},_focusVisible:{borderColor:Ue(t,n),boxShadow:`0px 1px 0px 0px ${Ue(t,n)}`}},addon:{borderBottom:"2px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent"}}}),gS=gn({field:{bg:"transparent",px:"0",height:"auto"},addon:{bg:"transparent",px:"0",height:"auto"}}),hS={outline:fS,filled:pS,flushed:mS,unstyled:gS},X=uS({baseStyle:cS,sizes:dS,variants:hS,defaultProps:{size:"md",variant:"outline"}}),yu=re("kbd-bg"),yS={[yu.variable]:"colors.gray.100",_dark:{[yu.variable]:"colors.whiteAlpha.100"},bg:yu.reference,borderRadius:"md",borderWidth:"1px",borderBottomWidth:"3px",fontSize:"0.8em",fontWeight:"bold",lineHeight:"normal",px:"0.4em",whiteSpace:"nowrap"},bS={baseStyle:yS},vS={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},wS={baseStyle:vS},{defineMultiStyleConfig:SS,definePartsStyle:xS}=ce(v9.keys),CS={marginEnd:"2",display:"inline",verticalAlign:"text-bottom"},kS=xS({icon:CS}),TS=SS({baseStyle:kS}),{defineMultiStyleConfig:_S,definePartsStyle:FS}=ce(w9.keys),Yt=re("menu-bg"),bu=re("menu-shadow"),AS={[Yt.variable]:"#fff",[bu.variable]:"shadows.sm",_dark:{[Yt.variable]:"colors.gray.700",[bu.variable]:"shadows.dark-lg"},color:"inherit",minW:"3xs",py:"2",zIndex:1,borderRadius:"md",borderWidth:"1px",bg:Yt.reference,boxShadow:bu.reference},PS={py:"1.5",px:"3",transitionProperty:"background",transitionDuration:"ultra-fast",transitionTimingFunction:"ease-in",_focus:{[Yt.variable]:"colors.gray.100",_dark:{[Yt.variable]:"colors.whiteAlpha.100"}},_active:{[Yt.variable]:"colors.gray.200",_dark:{[Yt.variable]:"colors.whiteAlpha.200"}},_expanded:{[Yt.variable]:"colors.gray.100",_dark:{[Yt.variable]:"colors.whiteAlpha.100"}},_disabled:{opacity:.4,cursor:"not-allowed"},bg:Yt.reference},ES={mx:4,my:2,fontWeight:"semibold",fontSize:"sm"},qS={opacity:.6},IS={border:0,borderBottom:"1px solid",borderColor:"inherit",my:"2",opacity:.6},zS={transitionProperty:"common",transitionDuration:"normal"},RS=FS({button:zS,list:AS,item:PS,groupTitle:ES,command:qS,divider:IS}),VS=_S({baseStyle:RS}),{defineMultiStyleConfig:MS,definePartsStyle:kc}=ce(S9.keys),jS={bg:"blackAlpha.600",zIndex:"modal"},LS=e=>{const{isCentered:t,scrollBehavior:n}=e;return{display:"flex",zIndex:"modal",justifyContent:"center",alignItems:t?"center":"flex-start",overflow:n==="inside"?"hidden":"auto",overscrollBehaviorY:"none"}},BS=e=>{const{scrollBehavior:t}=e;return{borderRadius:"md",bg:M("white","gray.700")(e),color:"inherit",my:"16",zIndex:"modal",maxH:t==="inside"?"calc(100% - 7.5rem)":void 0,boxShadow:M("lg","dark-lg")(e)}},NS={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},OS={position:"absolute",top:"2",insetEnd:"3"},DS=e=>{const{scrollBehavior:t}=e;return{px:"6",py:"2",flex:"1",overflow:t==="inside"?"auto":void 0}},$S={px:"6",py:"4"},WS=kc(e=>({overlay:jS,dialogContainer:Ge(LS,e),dialog:Ge(BS,e),header:NS,closeButton:OS,body:Ge(DS,e),footer:$S}));function qt(e){return kc(e==="full"?{dialog:{maxW:"100vw",minH:"$100vh",my:"0",borderRadius:"0"}}:{dialog:{maxW:e}})}var HS={xs:qt("xs"),sm:qt("sm"),md:qt("md"),lg:qt("lg"),xl:qt("xl"),"2xl":qt("2xl"),"3xl":qt("3xl"),"4xl":qt("4xl"),"5xl":qt("5xl"),"6xl":qt("6xl"),full:qt("full")},US=MS({baseStyle:WS,sizes:HS,defaultProps:{size:"md"}}),GS={letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeights:{normal:"normal",none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},fonts:{heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'},fontSizes:{"3xs":"0.45rem","2xs":"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"}},ny=GS,{defineMultiStyleConfig:KS,definePartsStyle:ry}=ce(x9.keys),tf=Pe("number-input-stepper-width"),oy=Pe("number-input-input-padding"),YS=mn(tf).add("0.5rem").toString(),vu=Pe("number-input-bg"),wu=Pe("number-input-color"),Su=Pe("number-input-border-color"),ZS={[tf.variable]:"sizes.6",[oy.variable]:YS},XS=e=>{var n;var t;return(n=(t=Ge(X.baseStyle,e))==null?void 0:t.field)!=null?n:{}},QS={width:tf.reference},JS={borderStart:"1px solid",borderStartColor:Su.reference,color:wu.reference,bg:vu.reference,[wu.variable]:"colors.chakra-body-text",[Su.variable]:"colors.chakra-border-color",_dark:{[wu.variable]:"colors.whiteAlpha.800",[Su.variable]:"colors.whiteAlpha.300"},_active:{[vu.variable]:"colors.gray.200",_dark:{[vu.variable]:"colors.whiteAlpha.300"}},_disabled:{opacity:.4,cursor:"not-allowed"}},ex=ry(e=>{var t;return{root:ZS,field:(t=Ge(XS,e))!=null?t:{},stepperGroup:QS,stepper:JS}});function Fi(e){var s;var t,n;const r=(t=X.sizes)==null?void 0:t[e],o={lg:"md",md:"md",sm:"sm",xs:"sm"},a=(s=(n=r.field)==null?void 0:n.fontSize)!=null?s:"md",i=ny.fontSizes[a];return ry({field:{...r.field,paddingInlineEnd:oy.reference,verticalAlign:"top"},stepper:{fontSize:mn(i).multiply(.75).toString(),_first:{borderTopEndRadius:o[e]},_last:{borderBottomEndRadius:o[e],mt:"-1px",borderTopWidth:1}}})}var tx={xs:Fi("xs"),sm:Fi("sm"),md:Fi("md"),lg:Fi("lg")},nx=KS({baseStyle:ex,sizes:tx,variants:X.variants,defaultProps:X.defaultProps}),xm,rx={...(xm=X.baseStyle)==null?void 0:xm.field,textAlign:"center"},ox={lg:{fontSize:"lg",w:12,h:12,borderRadius:"md"},md:{fontSize:"md",w:10,h:10,borderRadius:"md"},sm:{fontSize:"sm",w:8,h:8,borderRadius:"sm"},xs:{fontSize:"xs",w:6,h:6,borderRadius:"sm"}},Cm,oh,ax={outline:e=>{var r;var t,n;return(r=(n=Ge((t=X.variants)==null?void 0:t.outline,e))==null?void 0:n.field)!=null?r:{}},flushed:e=>{var r;var t,n;return(r=(n=Ge((t=X.variants)==null?void 0:t.flushed,e))==null?void 0:n.field)!=null?r:{}},filled:e=>{var r;var t,n;return(r=(n=Ge((t=X.variants)==null?void 0:t.filled,e))==null?void 0:n.field)!=null?r:{}},unstyled:(oh=(Cm=X.variants)==null?void 0:Cm.unstyled.field)!=null?oh:{}},ix={baseStyle:rx,sizes:ox,variants:ax,defaultProps:X.defaultProps},{defineMultiStyleConfig:sx,definePartsStyle:lx}=ce(C9.keys),Ai=Pe("popper-bg"),ux=Pe("popper-arrow-bg"),km=Pe("popper-arrow-shadow-color"),cx={zIndex:10},dx={[Ai.variable]:"colors.white",bg:Ai.reference,[ux.variable]:Ai.reference,[km.variable]:"colors.gray.200",_dark:{[Ai.variable]:"colors.gray.700",[km.variable]:"colors.whiteAlpha.300"},width:"xs",border:"1px solid",borderColor:"inherit",borderRadius:"md",boxShadow:"sm",zIndex:"inherit",_focusVisible:{outline:0,boxShadow:"outline"}},fx={px:3,py:2,borderBottomWidth:"1px"},px={px:3,py:2},mx={px:3,py:2,borderTopWidth:"1px"},gx={position:"absolute",borderRadius:"md",top:1,insetEnd:2,padding:2},hx=lx({popper:cx,content:dx,header:fx,body:px,footer:mx,closeButton:gx}),yx=sx({baseStyle:hx}),{defineMultiStyleConfig:bx,definePartsStyle:Jo}=ce(k9.keys),vx=e=>{const{colorScheme:t,theme:n,isIndeterminate:r,hasStripe:o}=e,a=M(hm(),hm("1rem","rgba(0,0,0,0.1)"))(e),i=M(`${t}.500`,`${t}.200`)(e),s=`linear-gradient(
    to right,
    transparent 0%,
    ${Ue(n,i)} 50%,
    transparent 100%
  )`;return{...!r&&o&&a,...r?{bgImage:s}:{bgColor:i}}},wx={lineHeight:"1",fontSize:"0.25em",fontWeight:"bold",color:"white"},Sx=e=>({bg:M("gray.100","whiteAlpha.300")(e)}),xx=e=>({transitionProperty:"common",transitionDuration:"slow",...vx(e)}),Cx=Jo(e=>({label:wx,filledTrack:xx(e),track:Sx(e)})),kx={xs:Jo({track:{h:"1"}}),sm:Jo({track:{h:"2"}}),md:Jo({track:{h:"3"}}),lg:Jo({track:{h:"4"}})},Tx=bx({sizes:kx,baseStyle:Cx,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:_x,definePartsStyle:as}=ce(T9.keys),Fx=e=>{var t;const n=(t=Ge(ks.baseStyle,e))==null?void 0:t.control;return{...n,borderRadius:"full",_checked:{...n==null?void 0:n._checked,_before:{content:'""',display:"inline-block",pos:"relative",w:"50%",h:"50%",borderRadius:"50%",bg:"currentColor"}}}},Ax=as(e=>{var t,n,r,o;return{label:(n=(t=ks).baseStyle)==null?void 0:n.call(t,e).label,container:(o=(r=ks).baseStyle)==null?void 0:o.call(r,e).container,control:Fx(e)}}),Px={md:as({control:{w:"4",h:"4"},label:{fontSize:"md"}}),lg:as({control:{w:"5",h:"5"},label:{fontSize:"lg"}}),sm:as({control:{width:"3",height:"3"},label:{fontSize:"sm"}})},Ex=_x({baseStyle:Ax,sizes:Px,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:qx,definePartsStyle:Ix}=ce(_9.keys),Pi=re("select-bg"),Tm,zx={...(Tm=X.baseStyle)==null?void 0:Tm.field,appearance:"none",paddingBottom:"1px",lineHeight:"normal",bg:Pi.reference,[Pi.variable]:"colors.white",_dark:{[Pi.variable]:"colors.gray.700"},"> option, > optgroup":{bg:Pi.reference}},Rx={width:"6",height:"100%",insetEnd:"2",position:"relative",color:"currentColor",fontSize:"xl",_disabled:{opacity:.5}},Vx=Ix({field:zx,icon:Rx}),Ei={paddingInlineEnd:"8"},_m,Fm,Am,Pm,Em,qm,Im,zm,Mx={lg:{...(_m=X.sizes)==null?void 0:_m.lg,field:{...(Fm=X.sizes)==null?void 0:Fm.lg.field,...Ei}},md:{...(Am=X.sizes)==null?void 0:Am.md,field:{...(Pm=X.sizes)==null?void 0:Pm.md.field,...Ei}},sm:{...(Em=X.sizes)==null?void 0:Em.sm,field:{...(qm=X.sizes)==null?void 0:qm.sm.field,...Ei}},xs:{...(Im=X.sizes)==null?void 0:Im.xs,field:{...(zm=X.sizes)==null?void 0:zm.xs.field,...Ei},icon:{insetEnd:"1"}}},jx=qx({baseStyle:Vx,sizes:Mx,variants:X.variants,defaultProps:X.defaultProps}),xu=re("skeleton-start-color"),Cu=re("skeleton-end-color"),Lx={[xu.variable]:"colors.gray.100",[Cu.variable]:"colors.gray.400",_dark:{[xu.variable]:"colors.gray.800",[Cu.variable]:"colors.gray.600"},background:xu.reference,borderColor:Cu.reference,opacity:.7,borderRadius:"sm"},Bx={baseStyle:Lx},ku=re("skip-link-bg"),Nx={borderRadius:"md",fontWeight:"semibold",_focusVisible:{boxShadow:"outline",padding:"4",position:"fixed",top:"6",insetStart:"6",[ku.variable]:"colors.white",_dark:{[ku.variable]:"colors.gray.700"},bg:ku.reference}},Ox={baseStyle:Nx},{defineMultiStyleConfig:Dx,definePartsStyle:Fl}=ce(F9.keys),Ia=re("slider-thumb-size"),za=re("slider-track-size"),Rn=re("slider-bg"),$x=e=>{const{orientation:t}=e;return{display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"},...Qd({orientation:t,vertical:{h:"100%"},horizontal:{w:"100%"}})}},Wx=e=>({...Qd({orientation:e.orientation,horizontal:{h:za.reference},vertical:{w:za.reference}}),overflow:"hidden",borderRadius:"sm",[Rn.variable]:"colors.gray.200",_dark:{[Rn.variable]:"colors.whiteAlpha.200"},_disabled:{[Rn.variable]:"colors.gray.300",_dark:{[Rn.variable]:"colors.whiteAlpha.300"}},bg:Rn.reference}),Hx=e=>{const{orientation:t}=e;return{...Qd({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",_active:{transform:"translateX(-50%) scale(1.15)"}},horizontal:{top:"50%",transform:"translateY(-50%)",_active:{transform:"translateY(-50%) scale(1.15)"}}}),w:Ia.reference,h:Ia.reference,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",outline:0,zIndex:1,borderRadius:"full",bg:"white",boxShadow:"base",border:"1px solid",borderColor:"transparent",transitionProperty:"transform",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{bg:"gray.300"}}},Ux=e=>{const{colorScheme:t}=e;return{width:"inherit",height:"inherit",[Rn.variable]:`colors.${t}.500`,_dark:{[Rn.variable]:`colors.${t}.200`},bg:Rn.reference}},Gx=Fl(e=>({container:$x(e),track:Wx(e),thumb:Hx(e),filledTrack:Ux(e)})),Kx=Fl({container:{[Ia.variable]:"sizes.4",[za.variable]:"sizes.1"}}),Yx=Fl({container:{[Ia.variable]:"sizes.3.5",[za.variable]:"sizes.1"}}),Zx=Fl({container:{[Ia.variable]:"sizes.2.5",[za.variable]:"sizes.0.5"}}),Xx={lg:Kx,md:Yx,sm:Zx},Qx=Dx({baseStyle:Gx,sizes:Xx,defaultProps:{size:"md",colorScheme:"blue"}}),fr=Pe("spinner-size"),Jx={width:[fr.reference],height:[fr.reference]},e8={xs:{[fr.variable]:"sizes.3"},sm:{[fr.variable]:"sizes.4"},md:{[fr.variable]:"sizes.6"},lg:{[fr.variable]:"sizes.8"},xl:{[fr.variable]:"sizes.12"}},t8={baseStyle:Jx,sizes:e8,defaultProps:{size:"md"}},{defineMultiStyleConfig:n8,definePartsStyle:ay}=ce(A9.keys),r8={fontWeight:"medium"},o8={opacity:.8,marginBottom:"2"},a8={verticalAlign:"baseline",fontWeight:"semibold"},i8={marginEnd:1,w:"3.5",h:"3.5",verticalAlign:"middle"},s8=ay({container:{},label:r8,helpText:o8,number:a8,icon:i8}),l8={md:ay({label:{fontSize:"sm"},helpText:{fontSize:"sm"},number:{fontSize:"2xl"}})},u8=n8({baseStyle:s8,sizes:l8,defaultProps:{size:"md"}}),{defineMultiStyleConfig:c8,definePartsStyle:is}=ce(P9.keys),la=Pe("switch-track-width"),wr=Pe("switch-track-height"),Tu=Pe("switch-track-diff"),d8=mn.subtract(la,wr),Tc=Pe("switch-thumb-x"),No=Pe("switch-bg"),f8=e=>{const{colorScheme:t}=e;return{borderRadius:"full",p:"0.5",width:[la.reference],height:[wr.reference],transitionProperty:"common",transitionDuration:"fast",[No.variable]:"colors.gray.300",_dark:{[No.variable]:"colors.whiteAlpha.400"},_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed"},_checked:{[No.variable]:`colors.${t}.500`,_dark:{[No.variable]:`colors.${t}.200`}},bg:No.reference}},p8={bg:"white",transitionProperty:"transform",transitionDuration:"normal",borderRadius:"inherit",width:[wr.reference],height:[wr.reference],_checked:{transform:`translateX(${Tc.reference})`}},m8=is(e=>({container:{[Tu.variable]:d8,[Tc.variable]:Tu.reference,_rtl:{[Tc.variable]:mn(Tu).negate().toString()}},track:f8(e),thumb:p8})),g8={sm:is({container:{[la.variable]:"1.375rem",[wr.variable]:"sizes.3"}}),md:is({container:{[la.variable]:"1.875rem",[wr.variable]:"sizes.4"}}),lg:is({container:{[la.variable]:"2.875rem",[wr.variable]:"sizes.6"}})},h8=c8({baseStyle:m8,sizes:g8,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:y8,definePartsStyle:io}=ce(E9.keys),b8=io({table:{fontVariantNumeric:"lining-nums tabular-nums",borderCollapse:"collapse",width:"full"},th:{fontFamily:"heading",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"wider",textAlign:"start"},td:{textAlign:"start"},caption:{mt:4,fontFamily:"heading",textAlign:"center",fontWeight:"medium"}}),Ts={"&[data-is-numeric=true]":{textAlign:"end"}},v8=io(e=>{const{colorScheme:t}=e;return{th:{color:M("gray.600","gray.400")(e),borderBottom:"1px",borderColor:M(`${t}.100`,`${t}.700`)(e),...Ts},td:{borderBottom:"1px",borderColor:M(`${t}.100`,`${t}.700`)(e),...Ts},caption:{color:M("gray.600","gray.100")(e)},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),w8=io(e=>{const{colorScheme:t}=e;return{th:{color:M("gray.600","gray.400")(e),borderBottom:"1px",borderColor:M(`${t}.100`,`${t}.700`)(e),...Ts},td:{borderBottom:"1px",borderColor:M(`${t}.100`,`${t}.700`)(e),...Ts},caption:{color:M("gray.600","gray.100")(e)},tbody:{tr:{"&:nth-of-type(odd)":{"th, td":{borderBottomWidth:"1px",borderColor:M(`${t}.100`,`${t}.700`)(e)},td:{background:M(`${t}.100`,`${t}.700`)(e)}}}},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),S8={simple:v8,striped:w8,unstyled:{}},x8={sm:io({th:{px:"4",py:"1",lineHeight:"4",fontSize:"xs"},td:{px:"4",py:"2",fontSize:"sm",lineHeight:"4"},caption:{px:"4",py:"2",fontSize:"xs"}}),md:io({th:{px:"6",py:"3",lineHeight:"4",fontSize:"xs"},td:{px:"6",py:"4",lineHeight:"5"},caption:{px:"6",py:"2",fontSize:"sm"}}),lg:io({th:{px:"8",py:"4",lineHeight:"5",fontSize:"sm"},td:{px:"8",py:"5",lineHeight:"6"},caption:{px:"6",py:"2",fontSize:"md"}})},C8=y8({baseStyle:b8,variants:S8,sizes:x8,defaultProps:{variant:"simple",size:"md",colorScheme:"gray"}}),Je=re("tabs-color"),jt=re("tabs-bg"),qi=re("tabs-border-color"),{defineMultiStyleConfig:k8,definePartsStyle:nn}=ce(q9.keys),T8=e=>{const{orientation:t}=e;return{display:t==="vertical"?"flex":"block"}},_8=e=>{const{isFitted:t}=e;return{flex:t?1:void 0,transitionProperty:"common",transitionDuration:"normal",_focusVisible:{zIndex:1,boxShadow:"outline"},_disabled:{cursor:"not-allowed",opacity:.4}}},F8=e=>{const{align:t="start",orientation:n}=e;return{justifyContent:{end:"flex-end",center:"center",start:"flex-start"}[t],flexDirection:n==="vertical"?"column":"row"}},A8={p:4},P8=nn(e=>({root:T8(e),tab:_8(e),tablist:F8(e),tabpanel:A8})),E8={sm:nn({tab:{py:1,px:4,fontSize:"sm"}}),md:nn({tab:{fontSize:"md",py:2,px:4}}),lg:nn({tab:{fontSize:"lg",py:3,px:4}})},q8=nn(e=>{const{colorScheme:t,orientation:n}=e,r=n==="vertical",o=n==="vertical"?"borderStart":"borderBottom",a=r?"marginStart":"marginBottom";return{tablist:{[o]:"2px solid",borderColor:"inherit"},tab:{[o]:"2px solid",borderColor:"transparent",[a]:"-2px",_selected:{[Je.variable]:`colors.${t}.600`,_dark:{[Je.variable]:`colors.${t}.300`},borderColor:"currentColor"},_active:{[jt.variable]:"colors.gray.200",_dark:{[jt.variable]:"colors.whiteAlpha.300"}},_disabled:{_active:{bg:"none"}},color:Je.reference,bg:jt.reference}}}),I8=nn(e=>{const{colorScheme:t}=e;return{tab:{borderTopRadius:"md",border:"1px solid",borderColor:"transparent",mb:"-1px",[qi.variable]:"transparent",_selected:{[Je.variable]:`colors.${t}.600`,[qi.variable]:"colors.white",_dark:{[Je.variable]:`colors.${t}.300`,[qi.variable]:"colors.gray.800"},borderColor:"inherit",borderBottomColor:qi.reference},color:Je.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),z8=nn(e=>{const{colorScheme:t}=e;return{tab:{border:"1px solid",borderColor:"inherit",[jt.variable]:"colors.gray.50",_dark:{[jt.variable]:"colors.whiteAlpha.50"},mb:"-1px",_notLast:{marginEnd:"-1px"},_selected:{[jt.variable]:"colors.white",[Je.variable]:`colors.${t}.600`,_dark:{[jt.variable]:"colors.gray.800",[Je.variable]:`colors.${t}.300`},borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"},color:Je.reference,bg:jt.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),R8=nn(e=>{const{colorScheme:t,theme:n}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:Ue(n,`${t}.700`),bg:Ue(n,`${t}.100`)}}}}),V8=nn(e=>{const{colorScheme:t}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",[Je.variable]:"colors.gray.600",_dark:{[Je.variable]:"inherit"},_selected:{[Je.variable]:"colors.white",[jt.variable]:`colors.${t}.600`,_dark:{[Je.variable]:"colors.gray.800",[jt.variable]:`colors.${t}.300`}},color:Je.reference,bg:jt.reference}}}),M8=nn({}),j8={line:q8,enclosed:I8,"enclosed-colored":z8,"soft-rounded":R8,"solid-rounded":V8,unstyled:M8},L8=k8({baseStyle:P8,sizes:E8,variants:j8,defaultProps:{size:"md",variant:"line",colorScheme:"blue"}}),{defineMultiStyleConfig:B8,definePartsStyle:Sr}=ce(I9.keys),N8={fontWeight:"medium",lineHeight:1.2,outline:0,borderRadius:"md",_focusVisible:{boxShadow:"outline"}},O8={lineHeight:1.2,overflow:"visible"},D8={fontSize:"lg",w:"5",h:"5",transitionProperty:"common",transitionDuration:"normal",borderRadius:"full",marginStart:"1.5",marginEnd:"-1",opacity:.5,_disabled:{opacity:.4},_focusVisible:{boxShadow:"outline",bg:"rgba(0, 0, 0, 0.14)"},_hover:{opacity:.8},_active:{opacity:1}},$8=Sr({container:N8,label:O8,closeButton:D8}),W8={sm:Sr({container:{minH:"5",minW:"5",fontSize:"xs",px:"2"},closeButton:{marginEnd:"-2px",marginStart:"0.35rem"}}),md:Sr({container:{minH:"6",minW:"6",fontSize:"sm",px:"2"}}),lg:Sr({container:{minH:"8",minW:"8",fontSize:"md",px:"3"}})},H8={subtle:Sr(e=>{var t;return{container:(t=aa.variants)==null?void 0:t.subtle(e)}}),solid:Sr(e=>{var t;return{container:(t=aa.variants)==null?void 0:t.solid(e)}}),outline:Sr(e=>{var t;return{container:(t=aa.variants)==null?void 0:t.outline(e)}})},U8=B8({variants:H8,baseStyle:$8,sizes:W8,defaultProps:{size:"md",variant:"subtle",colorScheme:"gray"}}),Rm,G8={...(Rm=X.baseStyle)==null?void 0:Rm.field,paddingY:"2",minHeight:"20",lineHeight:"short",verticalAlign:"top"},Vm,ah,K8={outline:e=>{var n;var t;return(n=(t=X.variants)==null?void 0:t.outline(e).field)!=null?n:{}},flushed:e=>{var n;var t;return(n=(t=X.variants)==null?void 0:t.flushed(e).field)!=null?n:{}},filled:e=>{var n;var t;return(n=(t=X.variants)==null?void 0:t.filled(e).field)!=null?n:{}},unstyled:(ah=(Vm=X.variants)==null?void 0:Vm.unstyled.field)!=null?ah:{}},Mm,jm,Lm,Bm,ih,sh,lh,uh,Y8={xs:(ih=(Mm=X.sizes)==null?void 0:Mm.xs.field)!=null?ih:{},sm:(sh=(jm=X.sizes)==null?void 0:jm.sm.field)!=null?sh:{},md:(lh=(Lm=X.sizes)==null?void 0:Lm.md.field)!=null?lh:{},lg:(uh=(Bm=X.sizes)==null?void 0:Bm.lg.field)!=null?uh:{}},Z8={baseStyle:G8,sizes:Y8,variants:K8,defaultProps:{size:"md",variant:"outline"}},Ii=Pe("tooltip-bg"),_u=Pe("tooltip-fg"),X8=Pe("popper-arrow-bg"),Q8={bg:Ii.reference,color:_u.reference,[Ii.variable]:"colors.gray.700",[_u.variable]:"colors.whiteAlpha.900",_dark:{[Ii.variable]:"colors.gray.300",[_u.variable]:"colors.gray.900"},[X8.variable]:Ii.reference,px:"2",py:"0.5",borderRadius:"sm",fontWeight:"medium",fontSize:"sm",boxShadow:"md",maxW:"xs",zIndex:"tooltip"},J8={baseStyle:Q8},e7={Accordion:y6,Alert:T6,Avatar:M6,Badge:aa,Breadcrumb:U6,Button:t4,Checkbox:ks,CloseButton:h4,Code:w4,Container:x4,Divider:F4,Drawer:L4,Editable:H4,Form:X4,FormError:rS,FormLabel:aS,Heading:lS,Input:X,Kbd:bS,Link:wS,List:TS,Menu:VS,Modal:US,NumberInput:nx,PinInput:ix,Popover:yx,Progress:Tx,Radio:Ex,Select:jx,Skeleton:Bx,SkipLink:Ox,Slider:Qx,Spinner:t8,Stat:u8,Switch:h8,Table:C8,Tabs:L8,Tag:U8,Textarea:Z8,Tooltip:J8,Card:i4},t7={none:0,"1px":"1px solid","2px":"2px solid","4px":"4px solid","8px":"8px solid"},n7=t7,r7={base:"0em",sm:"30em",md:"48em",lg:"62em",xl:"80em","2xl":"96em"},o7=r7,a7={transparent:"transparent",current:"currentColor",black:"#000000",white:"#FFFFFF",whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},gray:{50:"#F7FAFC",100:"#EDF2F7",200:"#E2E8F0",300:"#CBD5E0",400:"#A0AEC0",500:"#718096",600:"#4A5568",700:"#2D3748",800:"#1A202C",900:"#171923"},red:{50:"#FFF5F5",100:"#FED7D7",200:"#FEB2B2",300:"#FC8181",400:"#F56565",500:"#E53E3E",600:"#C53030",700:"#9B2C2C",800:"#822727",900:"#63171B"},orange:{50:"#FFFAF0",100:"#FEEBC8",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},yellow:{50:"#FFFFF0",100:"#FEFCBF",200:"#FAF089",300:"#F6E05E",400:"#ECC94B",500:"#D69E2E",600:"#B7791F",700:"#975A16",800:"#744210",900:"#5F370E"},green:{50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#2F855A",700:"#276749",800:"#22543D",900:"#1C4532"},teal:{50:"#E6FFFA",100:"#B2F5EA",200:"#81E6D9",300:"#4FD1C5",400:"#38B2AC",500:"#319795",600:"#2C7A7B",700:"#285E61",800:"#234E52",900:"#1D4044"},blue:{50:"#ebf8ff",100:"#bee3f8",200:"#90cdf4",300:"#63b3ed",400:"#4299e1",500:"#3182ce",600:"#2b6cb0",700:"#2c5282",800:"#2a4365",900:"#1A365D"},cyan:{50:"#EDFDFD",100:"#C4F1F9",200:"#9DECF9",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},purple:{50:"#FAF5FF",100:"#E9D8FD",200:"#D6BCFA",300:"#B794F4",400:"#9F7AEA",500:"#805AD5",600:"#6B46C1",700:"#553C9A",800:"#44337A",900:"#322659"},pink:{50:"#FFF5F7",100:"#FED7E2",200:"#FBB6CE",300:"#F687B3",400:"#ED64A6",500:"#D53F8C",600:"#B83280",700:"#97266D",800:"#702459",900:"#521B41"},linkedin:{50:"#E8F4F9",100:"#CFEDFB",200:"#9BDAF3",300:"#68C7EC",400:"#34B3E4",500:"#00A0DC",600:"#008CC9",700:"#0077B5",800:"#005E93",900:"#004471"},facebook:{50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"},messenger:{50:"#D0E6FF",100:"#B9DAFF",200:"#A2CDFF",300:"#7AB8FF",400:"#2E90FF",500:"#0078FF",600:"#0063D1",700:"#0052AC",800:"#003C7E",900:"#002C5C"},whatsapp:{50:"#dffeec",100:"#b9f5d0",200:"#90edb3",300:"#65e495",400:"#3cdd78",500:"#22c35e",600:"#179848",700:"#0c6c33",800:"#01421c",900:"#001803"},twitter:{50:"#E5F4FD",100:"#C8E9FB",200:"#A8DCFA",300:"#83CDF7",400:"#57BBF5",500:"#1DA1F2",600:"#1A94DA",700:"#1681BF",800:"#136B9E",900:"#0D4D71"},telegram:{50:"#E3F2F9",100:"#C5E4F3",200:"#A2D4EC",300:"#7AC1E4",400:"#47A9DA",500:"#0088CC",600:"#007AB8",700:"#006BA1",800:"#005885",900:"#003F5E"}},i7=a7,s7={none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},l7=s7,u7={xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",outline:"0 0 0 3px rgba(66, 153, 225, 0.6)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none","dark-lg":"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"},c7=u7,d7={common:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",dimensions:"width, height",position:"left, right, top, bottom",background:"background-color, background-image, background-position"},f7={"ease-in":"cubic-bezier(0.4, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.2, 1)","ease-in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},p7={"ultra-fast":"50ms",faster:"100ms",fast:"150ms",normal:"200ms",slow:"300ms",slower:"400ms","ultra-slow":"500ms"},m7={property:d7,easing:f7,duration:p7},g7=m7,h7={hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},y7=h7,b7={none:0,sm:"4px",base:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},v7=b7,w7={breakpoints:o7,zIndices:y7,radii:l7,blur:v7,colors:i7,...ny,sizes:Jh,shadows:c7,space:Qh,borders:n7,transition:g7},S7={colors:{"chakra-body-text":{_light:"gray.800",_dark:"whiteAlpha.900"},"chakra-body-bg":{_light:"white",_dark:"gray.800"},"chakra-border-color":{_light:"gray.200",_dark:"whiteAlpha.300"},"chakra-subtle-bg":{_light:"gray.100",_dark:"gray.700"},"chakra-placeholder-color":{_light:"gray.500",_dark:"whiteAlpha.400"}}},x7={global:{body:{fontFamily:"body",color:"chakra-body-text",bg:"chakra-body-bg",transitionProperty:"background-color",transitionDuration:"normal",lineHeight:"base"},"*::placeholder":{color:"chakra-placeholder-color"},"*, *::before, &::after":{borderColor:"chakra-border-color",wordWrap:"break-word"}}},C7="ltr",k7={useSystemColorMode:!1,initialColorMode:"light",cssVarPrefix:"chakra"},T7={semanticTokens:S7,direction:C7,...w7,components:e7,styles:x7,config:k7},_7=typeof Element<"u",F7=typeof Map=="function",A7=typeof Set=="function",P7=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ss(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ss(e[r],t[r]))return!1;return!0}var a;if(F7&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!ss(r.value[1],t.get(r.value[0])))return!1;return!0}if(A7&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(P7&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(_7&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!ss(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var E7=function(t,n){try{return ss(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};function iy(){const e=k.exports.useContext(Ea);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}function q7(){const e=Od(),t=iy();return{...e,theme:t}}function I7(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__breakpoints)==null?void 0:s.asArray)==null?void 0:l[i]};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function z7(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__cssMap)==null?void 0:s[i])==null?void 0:l.value};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function R7(e,t,n){const r=Array.isArray(t)?t:[t],o=Array.isArray(n)?n:[n];return a=>{const i=o.filter(Boolean),s=r.map((l,u)=>{var d,f;if(e==="breakpoints")return I7(a,l,(d=i[u])!=null?d:l);const c=`${e}.${l}`;return z7(a,c,(f=i[u])!=null?f:l)});return Array.isArray(t)?s:s[0]}}function V7(e){const{cssVarsRoot:t,theme:n,children:r}=e,o=k.exports.useMemo(()=>D3(n),[n]);return Qn(K5,{theme:o,children:[q(M7,{root:t}),r]})}function M7({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return q(Tl,{styles:n=>({[t]:n.__cssVars})})}t9({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function j7(){const{colorMode:e}=Od();return q(Tl,{styles:t=>{const n=Uh(t,"styles.global"),r=Yh(n,{theme:t,colorMode:e});return r?Fh(r)(t):void 0}})}var L7=new Set([...$3,"textStyle","layerStyle","apply","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),B7=new Set(["htmlWidth","htmlHeight","htmlSize"]);function N7(e){return B7.has(e)||!L7.has(e)}var O7=({baseStyle:e})=>t=>{const{theme:n,css:r,__css:o,sx:a,...i}=t,s=Gh(i,(d,f)=>H3(f)),l=Yh(e,t),u=Object.assign({},o,l,Kh(s),a),c=Fh(u)(t.theme);return r?[c,r]:c};function Fu(e,t){const{baseStyle:n,...r}=t!=null?t:{};r.shouldForwardProp||(r.shouldForwardProp=N7);const o=O7({baseStyle:n}),a=Sc(e,r)(o);return B.forwardRef(function(l,u){const{colorMode:c,forced:d}=Od();return B.createElement(a,{ref:u,"data-theme":d?c:void 0,...l})})}function H(e){return k.exports.forwardRef(e)}function sy(e,t={}){var c;const{styleConfig:n,...r}=t,{theme:o,colorMode:a}=q7(),i=e?Uh(o,`components.${e}`):void 0,s=n||i,l=Jt({theme:o,colorMode:a},(c=s==null?void 0:s.defaultProps)!=null?c:{},Kh(Q5(r,["children"]))),u=k.exports.useRef({});if(s){const f=t5(s)(l);E7(u.current,f)||(u.current=f)}return u.current}function At(e,t={}){return sy(e,t)}function ly(e,t={}){return sy(e,t)}function D7(){const e=new Map;return new Proxy(Fu,{apply(t,n,r){return Fu(...r)},get(t,n){return e.has(n)||e.set(n,Fu(n)),e.get(n)}})}var D=D7();function $7(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function ai(e={}){const{name:t,strict:n=!0,hookName:r="useContext",providerName:o="Provider",errorMessage:a}=e,i=k.exports.createContext(void 0);i.displayName=t;function s(){var l;const u=k.exports.useContext(i);if(!u&&n){const c=new Error(a!=null?a:$7(r,o));throw c.name="ContextError",(l=Error.captureStackTrace)==null||l.call(Error,c,s),c}return u}return[i.Provider,s,i]}var Ze=(...e)=>e.filter(Boolean).join(" "),Nm={path:Qn("g",{stroke:"currentColor",strokeWidth:"1.5",children:[q("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),q("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),q("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},Ao=H((e,t)=>{const{as:n,viewBox:r,color:o="currentColor",focusable:a=!1,children:i,className:s,__css:l,...u}=e,c=Ze("chakra-icon",s),d=At("Icon",e),f={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o,...l,...d},m={ref:t,focusable:a,className:c,__css:f},b=r!=null?r:Nm.viewBox;if(n&&typeof n!="string")return B.createElement(D.svg,{as:n,...m,...u});const v=i!=null?i:Nm.path;return B.createElement(D.svg,{verticalAlign:"middle",viewBox:b,...m,...u},v)});Ao.displayName="Icon";function W7(e,t=[]){const n=k.exports.useRef(e);return k.exports.useEffect(()=>{n.current=e}),k.exports.useCallback((...r)=>{var o;return(o=n.current)==null?void 0:o.call(n,...r)},t)}const nf=k.exports.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Al=k.exports.createContext({});function H7(){return k.exports.useContext(Al).visualElement}const Po=k.exports.createContext(null),Pr=typeof document<"u",_s=Pr?k.exports.useLayoutEffect:k.exports.useEffect,uy=k.exports.createContext({strict:!1});function U7(e,t,n,r){const o=H7(),a=k.exports.useContext(uy),i=k.exports.useContext(Po),s=k.exports.useContext(nf).reducedMotion,l=k.exports.useRef();r=r||a.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceId:i?i.id:void 0,blockInitialAnimation:i?i.initial===!1:!1,reducedMotionConfig:s}));const u=l.current;return _s(()=>{u&&u.render()}),k.exports.useEffect(()=>{u&&u.animationState&&u.animationState.animateChanges()}),_s(()=>()=>u&&u.notify("Unmount"),[]),u}function Br(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function G7(e,t,n){return k.exports.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Br(n)&&(n.current=r))},[t])}function Ra(e){return typeof e=="string"||Array.isArray(e)}function Pl(e){return typeof e=="object"&&typeof e.start=="function"}const K7=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function El(e){return Pl(e.animate)||K7.some(t=>Ra(e[t]))}function cy(e){return Boolean(El(e)||e.variants)}function Y7(e,t){if(El(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ra(n)?n:void 0,animate:Ra(r)?r:void 0}}return e.inherit!==!1?t:{}}function Z7(e){const{initial:t,animate:n}=Y7(e,k.exports.useContext(Al));return k.exports.useMemo(()=>({initial:t,animate:n}),[Om(t),Om(n)])}function Om(e){return Array.isArray(e)?e.join(" "):e}const dn=e=>({isEnabled:t=>e.some(n=>!!t[n])}),Va={measureLayout:dn(["layout","layoutId","drag"]),animation:dn(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:dn(["exit"]),drag:dn(["drag","dragControls"]),focus:dn(["whileFocus"]),hover:dn(["whileHover","onHoverStart","onHoverEnd"]),tap:dn(["whileTap","onTap","onTapStart","onTapCancel"]),pan:dn(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:dn(["whileInView","onViewportEnter","onViewportLeave"])};function X7(e){for(const t in e)t==="projectionNodeConstructor"?Va.projectionNodeConstructor=e[t]:Va[t].Component=e[t]}function ql(e){const t=k.exports.useRef(null);return t.current===null&&(t.current=e()),t.current}const ua={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let Q7=1;function J7(){return ql(()=>{if(ua.hasEverUpdated)return Q7++})}const rf=k.exports.createContext({});class eC extends B.Component{getSnapshotBeforeUpdate(){const{visualElement:t,props:n}=this.props;return t&&t.setProps(n),null}componentDidUpdate(){}render(){return this.props.children}}const dy=k.exports.createContext({}),tC=Symbol.for("motionComponentSymbol");function nC({preloadedFeatures:e,createVisualElement:t,projectionNodeConstructor:n,useRender:r,useVisualState:o,Component:a}){e&&X7(e);function i(l,u){const c={...k.exports.useContext(nf),...l,layoutId:rC(l)},{isStatic:d}=c;let f=null;const m=Z7(l),b=d?void 0:J7(),v=o(l,d);if(!d&&Pr){m.visualElement=U7(a,v,c,t);const C=k.exports.useContext(uy).strict,h=k.exports.useContext(dy);m.visualElement&&(f=m.visualElement.loadFeatures(c,C,e,b,n||Va.projectionNodeConstructor,h))}return Qn(eC,{visualElement:m.visualElement,props:c,children:[f,q(Al.Provider,{value:m,children:r(a,l,b,G7(v,m.visualElement,u),v,d,m.visualElement)})]})}const s=k.exports.forwardRef(i);return s[tC]=a,s}function rC({layoutId:e}){const t=k.exports.useContext(rf).id;return t&&e!==void 0?t+"-"+e:e}function oC(e){function t(r,o={}){return nC(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const aC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","text","tspan","use","view"];function of(e){return typeof e!="string"||e.includes("-")?!1:!!(aC.indexOf(e)>-1||/[A-Z]/.test(e))}const Fs={};function iC(e){Object.assign(Fs,e)}const As=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Eo=new Set(As);function fy(e,{layout:t,layoutId:n}){return Eo.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Fs[e]||e==="opacity")}const sn=e=>!!(e!=null&&e.getVelocity),sC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lC=(e,t)=>As.indexOf(e)-As.indexOf(t);function uC({transform:e,transformKeys:t},{enableHardwareAcceleration:n=!0,allowTransformNone:r=!0},o,a){let i="";t.sort(lC);for(const s of t)i+=`${sC[s]||s}(${e[s]}) `;return n&&!e.z&&(i+="translateZ(0)"),i=i.trim(),a?i=a(e,o?"":i):r&&o&&(i="none"),i}function py(e){return e.startsWith("--")}const cC=(e,t)=>t&&typeof e=="number"?t.transform(e):e,my=(e,t)=>n=>Math.max(Math.min(n,t),e),ca=e=>e%1?Number(e.toFixed(5)):e,Ma=/(-)?([\d]*\.?[\d])+/g,_c=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,dC=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ii(e){return typeof e=="string"}const Er={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},da=Object.assign(Object.assign({},Er),{transform:my(0,1)}),zi=Object.assign(Object.assign({},Er),{default:1}),si=e=>({test:t=>ii(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),En=si("deg"),rn=si("%"),j=si("px"),fC=si("vh"),pC=si("vw"),Dm=Object.assign(Object.assign({},rn),{parse:e=>rn.parse(e)/100,transform:e=>rn.transform(e*100)}),af=(e,t)=>n=>Boolean(ii(n)&&dC.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),gy=(e,t,n)=>r=>{if(!ii(r))return r;const[o,a,i,s]=r.match(Ma);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(i),alpha:s!==void 0?parseFloat(s):1}},Nr={test:af("hsl","hue"),parse:gy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+rn.transform(ca(t))+", "+rn.transform(ca(n))+", "+ca(da.transform(r))+")"},mC=my(0,255),Au=Object.assign(Object.assign({},Er),{transform:e=>Math.round(mC(e))}),gr={test:af("rgb","red"),parse:gy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Au.transform(e)+", "+Au.transform(t)+", "+Au.transform(n)+", "+ca(da.transform(r))+")"};function gC(e){let t="",n="",r="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Fc={test:af("#"),parse:gC,transform:gr.transform},We={test:e=>gr.test(e)||Fc.test(e)||Nr.test(e),parse:e=>gr.test(e)?gr.parse(e):Nr.test(e)?Nr.parse(e):Fc.parse(e),transform:e=>ii(e)?e:e.hasOwnProperty("red")?gr.transform(e):Nr.transform(e)},hy="${c}",yy="${n}";function hC(e){var t,n,r,o;return isNaN(e)&&ii(e)&&((n=(t=e.match(Ma))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(r=e.match(_c))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function by(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(_c);r&&(n=r.length,e=e.replace(_c,hy),t.push(...r.map(We.parse)));const o=e.match(Ma);return o&&(e=e.replace(Ma,yy),t.push(...o.map(Er.parse))),{values:t,numColors:n,tokenised:e}}function vy(e){return by(e).values}function wy(e){const{values:t,numColors:n,tokenised:r}=by(e),o=t.length;return a=>{let i=r;for(let s=0;s<o;s++)i=i.replace(s<n?hy:yy,s<n?We.transform(a[s]):ca(a[s]));return i}}const yC=e=>typeof e=="number"?0:e;function bC(e){const t=vy(e);return wy(e)(t.map(yC))}const wn={test:hC,parse:vy,createTransformer:wy,getAnimatableNone:bC},vC=new Set(["brightness","contrast","saturate","opacity"]);function wC(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ma)||[];if(!r)return e;const o=n.replace(r,"");let a=vC.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+o+")"}const SC=/([a-z-]*)\(.*?\)/g,Ac=Object.assign(Object.assign({},wn),{getAnimatableNone:e=>{const t=e.match(SC);return t?t.map(wC).join(" "):e}}),$m={...Er,transform:Math.round},Sy={borderWidth:j,borderTopWidth:j,borderRightWidth:j,borderBottomWidth:j,borderLeftWidth:j,borderRadius:j,radius:j,borderTopLeftRadius:j,borderTopRightRadius:j,borderBottomRightRadius:j,borderBottomLeftRadius:j,width:j,maxWidth:j,height:j,maxHeight:j,size:j,top:j,right:j,bottom:j,left:j,padding:j,paddingTop:j,paddingRight:j,paddingBottom:j,paddingLeft:j,margin:j,marginTop:j,marginRight:j,marginBottom:j,marginLeft:j,rotate:En,rotateX:En,rotateY:En,rotateZ:En,scale:zi,scaleX:zi,scaleY:zi,scaleZ:zi,skew:En,skewX:En,skewY:En,distance:j,translateX:j,translateY:j,translateZ:j,x:j,y:j,z:j,perspective:j,transformPerspective:j,opacity:da,originX:Dm,originY:Dm,originZ:j,zIndex:$m,fillOpacity:da,strokeOpacity:da,numOctaves:$m};function sf(e,t,n,r){const{style:o,vars:a,transform:i,transformKeys:s,transformOrigin:l}=e;s.length=0;let u=!1,c=!1,d=!0;for(const f in t){const m=t[f];if(py(f)){a[f]=m;continue}const b=Sy[f],v=cC(m,b);if(Eo.has(f)){if(u=!0,i[f]=v,s.push(f),!d)continue;m!==(b.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,l[f]=v):o[f]=v}if(t.transform||(u||r?o.transform=uC(e,n,d,r):o.transform&&(o.transform="none")),c){const{originX:f="50%",originY:m="50%",originZ:b=0}=l;o.transformOrigin=`${f} ${m} ${b}`}}const lf=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function xy(e,t,n){for(const r in t)!sn(t[r])&&!fy(r,n)&&(e[r]=t[r])}function xC({transformTemplate:e},t,n){return k.exports.useMemo(()=>{const r=lf();return sf(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function CC(e,t,n){const r=e.style||{},o={};return xy(o,r,e),Object.assign(o,xC(e,t,n)),e.transformValues?e.transformValues(o):o}function kC(e,t,n){const r={},o=CC(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),r.style=o,r}const TC=["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"],_C=["whileTap","onTap","onTapStart","onTapCancel"],FC=["onPan","onPanStart","onPanSessionStart","onPanEnd"],AC=["whileInView","onViewportEnter","onViewportLeave","viewport"],PC=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll",...AC,..._C,...TC,...FC]);function Ps(e){return PC.has(e)}let Cy=e=>!Ps(e);function EC(e){!e||(Cy=t=>t.startsWith("on")?!Ps(t):e(t))}try{EC(require("@emotion/is-prop-valid").default)}catch{}function qC(e,t,n){const r={};for(const o in e)(Cy(o)||n===!0&&Ps(o)||!t&&!Ps(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function Wm(e,t,n){return typeof e=="string"?e:j.transform(t+n*e)}function IC(e,t,n){const r=Wm(t,e.x,e.width),o=Wm(n,e.y,e.height);return`${r} ${o}`}const zC={offset:"stroke-dashoffset",array:"stroke-dasharray"},RC={offset:"strokeDashoffset",array:"strokeDasharray"};function VC(e,t,n=1,r=0,o=!0){e.pathLength=1;const a=o?zC:RC;e[a.offset]=j.transform(-r);const i=j.transform(t),s=j.transform(n);e[a.array]=`${i} ${s}`}function uf(e,{attrX:t,attrY:n,originX:r,originY:o,pathLength:a,pathSpacing:i=1,pathOffset:s=0,...l},u,c){sf(e,l,u,c),e.attrs=e.style,e.style={};const{attrs:d,style:f,dimensions:m}=e;d.transform&&(m&&(f.transform=d.transform),delete d.transform),m&&(r!==void 0||o!==void 0||f.transform)&&(f.transformOrigin=IC(m,r!==void 0?r:.5,o!==void 0?o:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),a!==void 0&&VC(d,a,i,s,!1)}const ky=()=>({...lf(),attrs:{}});function MC(e,t){const n=k.exports.useMemo(()=>{const r=ky();return uf(r,t,{enableHardwareAcceleration:!1},e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){const r={};xy(r,e.style,e),n.style={...r,...n.style}}return n}function jC(e=!1){return(n,r,o,a,{latestValues:i},s)=>{const u=(of(n)?MC:kC)(r,i,s),d={...qC(r,typeof n=="string",e),...u,ref:a};return o&&(d["data-projection-id"]=o),k.exports.createElement(n,d)}}const Ty=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function _y(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const Fy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function Ay(e,t,n,r){_y(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(Fy.has(o)?o:Ty(o),t.attrs[o])}function cf(e){const{style:t}=e,n={};for(const r in t)(sn(t[r])||fy(r,e))&&(n[r]=t[r]);return n}function Py(e){const t=cf(e);for(const n in e)if(sn(e[n])){const r=n==="x"||n==="y"?"attr"+n.toUpperCase():n;t[r]=e[n]}return t}function df(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}const ja=e=>Array.isArray(e),LC=e=>Boolean(e&&typeof e=="object"&&e.mix&&e.toValue),Ey=e=>ja(e)?e[e.length-1]||0:e;function ls(e){const t=sn(e)?e.get():e;return LC(t)?t.toValue():t}function BC({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,a){const i={latestValues:NC(r,o,a,e),renderState:t()};return n&&(i.mount=s=>n(r,s,i)),i}const qy=e=>(t,n)=>{const r=k.exports.useContext(Al),o=k.exports.useContext(Po),a=()=>BC(e,t,r,o);return n?a():ql(a)};function NC(e,t,n,r){const o={},a=r(e);for(const f in a)o[f]=ls(a[f]);let{initial:i,animate:s}=e;const l=El(e),u=cy(e);t&&u&&!l&&e.inherit!==!1&&(i===void 0&&(i=t.initial),s===void 0&&(s=t.animate));let c=n?n.initial===!1:!1;c=c||i===!1;const d=c?s:i;return d&&typeof d!="boolean"&&!Pl(d)&&(Array.isArray(d)?d:[d]).forEach(m=>{const b=df(e,m);if(!b)return;const{transitionEnd:v,transition:C,...h}=b;for(const p in h){let g=h[p];if(Array.isArray(g)){const x=c?g.length-1:0;g=g[x]}g!==null&&(o[p]=g)}for(const p in v)o[p]=v[p]}),o}const OC={useVisualState:qy({scrapeMotionValuesFromProps:Py,createRenderState:ky,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}uf(n,r,{enableHardwareAcceleration:!1},e.transformTemplate),Ay(t,n)}})},DC={useVisualState:qy({scrapeMotionValuesFromProps:cf,createRenderState:lf})};function $C(e,{forwardMotionProps:t=!1},n,r,o){return{...of(e)?OC:DC,preloadedFeatures:n,useRender:jC(t),createVisualElement:r,projectionNodeConstructor:o,Component:e}}var ae;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(ae||(ae={}));function Il(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Pc(e,t,n,r){k.exports.useEffect(()=>{const o=e.current;if(n&&o)return Il(o,t,n,r)},[e,t,n,r])}function WC({whileFocus:e,visualElement:t}){const{animationState:n}=t,r=()=>{n&&n.setActive(ae.Focus,!0)},o=()=>{n&&n.setActive(ae.Focus,!1)};Pc(t,"focus",e?r:void 0),Pc(t,"blur",e?o:void 0)}function Iy(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function zy(e){return!!e.touches}function HC(e){return t=>{const n=t instanceof MouseEvent;(!n||n&&t.button===0)&&e(t)}}const UC={pageX:0,pageY:0};function GC(e,t="page"){const r=e.touches[0]||e.changedTouches[0]||UC;return{x:r[t+"X"],y:r[t+"Y"]}}function KC(e,t="page"){return{x:e[t+"X"],y:e[t+"Y"]}}function ff(e,t="page"){return{point:zy(e)?GC(e,t):KC(e,t)}}const Ry=(e,t=!1)=>{const n=r=>e(r,ff(r));return t?HC(n):n},YC=()=>Pr&&window.onpointerdown===null,ZC=()=>Pr&&window.ontouchstart===null,XC=()=>Pr&&window.onmousedown===null,QC={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},JC={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function Vy(e){return YC()?e:ZC()?JC[e]:XC()?QC[e]:e}function so(e,t,n,r){return Il(e,Vy(t),Ry(n,t==="pointerdown"),r)}function Es(e,t,n,r){return Pc(e,Vy(t),n&&Ry(n,t==="pointerdown"),r)}function My(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Hm=My("dragHorizontal"),Um=My("dragVertical");function jy(e){let t=!1;if(e==="y")t=Um();else if(e==="x")t=Hm();else{const n=Hm(),r=Um();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Ly(){const e=jy(!0);return e?(e(),!1):!0}function Gm(e,t,n){return(r,o)=>{!Iy(r)||Ly()||(e.animationState&&e.animationState.setActive(ae.Hover,t),n&&n(r,o))}}function ek({onHoverStart:e,onHoverEnd:t,whileHover:n,visualElement:r}){Es(r,"pointerenter",e||n?Gm(r,!0,e):void 0,{passive:!e}),Es(r,"pointerleave",t||n?Gm(r,!1,t):void 0,{passive:!t})}const By=(e,t)=>t?e===t?!0:By(e,t.parentElement):!1;function pf(e){return k.exports.useEffect(()=>()=>e(),[])}const tk=(e,t)=>n=>t(e(n)),zl=(...e)=>e.reduce(tk);function nk({onTap:e,onTapStart:t,onTapCancel:n,whileTap:r,visualElement:o}){const a=e||t||n||r,i=k.exports.useRef(!1),s=k.exports.useRef(null),l={passive:!(t||e||n||m)};function u(){s.current&&s.current(),s.current=null}function c(){return u(),i.current=!1,o.animationState&&o.animationState.setActive(ae.Tap,!1),!Ly()}function d(b,v){!c()||(By(o.current,b.target)?e&&e(b,v):n&&n(b,v))}function f(b,v){!c()||n&&n(b,v)}function m(b,v){u(),!i.current&&(i.current=!0,s.current=zl(so(window,"pointerup",d,l),so(window,"pointercancel",f,l)),o.animationState&&o.animationState.setActive(ae.Tap,!0),t&&t(b,v))}Es(o,"pointerdown",a?m:void 0,l),pf(u)}const rk="production",Ny=typeof process>"u"||process.env===void 0?rk:"production",Km=new Set;function Oy(e,t,n){e||Km.has(t)||(console.warn(t),n&&console.warn(n),Km.add(t))}const Ec=new WeakMap,Pu=new WeakMap,ok=e=>{const t=Ec.get(e.target);t&&t(e)},ak=e=>{e.forEach(ok)};function ik({root:e,...t}){const n=e||document;Pu.has(n)||Pu.set(n,{});const r=Pu.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(ak,{root:e,...t})),r[o]}function sk(e,t,n){const r=ik(t);return Ec.set(e,n),r.observe(e),()=>{Ec.delete(e),r.unobserve(e)}}function lk({visualElement:e,whileInView:t,onViewportEnter:n,onViewportLeave:r,viewport:o={}}){const a=k.exports.useRef({hasEnteredView:!1,isInView:!1});let i=Boolean(t||n||r);o.once&&a.current.hasEnteredView&&(i=!1),(typeof IntersectionObserver>"u"?dk:ck)(i,a.current,e,o)}const uk={some:0,all:1};function ck(e,t,n,{root:r,margin:o,amount:a="some",once:i}){k.exports.useEffect(()=>{if(!e||!n.current)return;const s={root:r==null?void 0:r.current,rootMargin:o,threshold:typeof a=="number"?a:uk[a]},l=u=>{const{isIntersecting:c}=u;if(t.isInView===c||(t.isInView=c,i&&!c&&t.hasEnteredView))return;c&&(t.hasEnteredView=!0),n.animationState&&n.animationState.setActive(ae.InView,c);const d=n.getProps(),f=c?d.onViewportEnter:d.onViewportLeave;f&&f(u)};return sk(n.current,s,l)},[e,r,o,a])}function dk(e,t,n,{fallback:r=!0}){k.exports.useEffect(()=>{!e||!r||(Ny!=="production"&&Oy(!1,"IntersectionObserver not available on this device. whileInView animations will trigger on mount."),requestAnimationFrame(()=>{t.hasEnteredView=!0;const{onViewportEnter:o}=n.getProps();o&&o(null),n.animationState&&n.animationState.setActive(ae.InView,!0)}))},[e])}const jn=e=>t=>(e(t),null),fk={inView:jn(lk),tap:jn(nk),focus:jn(WC),hover:jn(ek)};function Dy(){const e=k.exports.useContext(Po);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=k.exports.useId();return k.exports.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}function pk(){return mk(k.exports.useContext(Po))}function mk(e){return e===null?!0:e.isPresent}function $y(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const qs=e=>e*1e3;var gk=function(){},Is=function(){};const mf=e=>e,Wy=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,hk=1e-7,yk=12;function bk(e,t,n,r,o){let a,i,s=0;do i=t+(n-t)/2,a=Wy(i,r,o)-e,a>0?n=i:t=i;while(Math.abs(a)>hk&&++s<yk);return i}function vk(e,t,n,r){if(e===t&&n===r)return mf;const o=a=>bk(a,0,1,e,n);return a=>a===0||a===1?a:Wy(o(a),t,r)}const gf=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,hf=e=>t=>1-e(1-t),yf=e=>e*e,wk=hf(yf),Hy=gf(yf),Uy=e=>1-Math.sin(Math.acos(e)),bf=hf(Uy),Sk=gf(bf),Gy=(e=1.525)=>t=>t*t*((e+1)*t-e),vf=Gy(),xk=hf(vf),Ck=gf(vf),kk=e=>{const t=Gy(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Tk=kk(),_k={linear:mf,easeIn:yf,easeInOut:Hy,easeOut:wk,circIn:Uy,circInOut:Sk,circOut:bf,backIn:vf,backInOut:Ck,backOut:xk,anticipate:Tk},Ym=e=>{if(Array.isArray(e)){Is(e.length===4);const[t,n,r,o]=e;return vk(t,n,r,o)}else if(typeof e=="string")return _k[e];return e},Fk=e=>Array.isArray(e)&&typeof e[0]!="number",Zm=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&wn.test(t)&&!t.startsWith("url(")),ir=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),Ri=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Eu=()=>({type:"keyframes",ease:"linear",duration:.3}),Ak=e=>({type:"keyframes",duration:.8,values:e}),Xm={x:ir,y:ir,z:ir,rotate:ir,rotateX:ir,rotateY:ir,rotateZ:ir,scaleX:Ri,scaleY:Ri,scale:Ri,opacity:Eu,backgroundColor:Eu,color:Eu,default:Ri},Pk=(e,t)=>{let n;return ja(t)?n=Ak:n=Xm[e]||Xm.default,{to:t,...n(t)}},Ek={...Sy,color:We,backgroundColor:We,outlineColor:We,fill:We,stroke:We,borderColor:We,borderTopColor:We,borderRightColor:We,borderBottomColor:We,borderLeftColor:We,filter:Ac,WebkitFilter:Ac},wf=e=>Ek[e];function Sf(e,t){var n;let r=wf(e);return r!==Ac&&(r=wn),(n=r.getAnimatableNone)===null||n===void 0?void 0:n.call(r,t)}const qk={current:!1},Ky=1/60*1e3,Ik=typeof performance<"u"?()=>performance.now():()=>Date.now(),Yy=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Ik()),Ky);function zk(e){let t=[],n=[],r=0,o=!1,a=!1;const i=new WeakSet,s={schedule:(l,u=!1,c=!1)=>{const d=c&&o,f=d?t:n;return u&&i.add(l),f.indexOf(l)===-1&&(f.push(l),d&&o&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),i.delete(l)},process:l=>{if(o){a=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),i.has(c)&&(s.schedule(c),e())}o=!1,a&&(a=!1,s.process(l))}};return s}const Rk=40;let qc=!0,La=!1,Ic=!1;const lo={delta:0,timestamp:0},li=["read","update","preRender","render","postRender"],Rl=li.reduce((e,t)=>(e[t]=zk(()=>La=!0),e),{}),kt=li.reduce((e,t)=>{const n=Rl[t];return e[t]=(r,o=!1,a=!1)=>(La||Mk(),n.schedule(r,o,a)),e},{}),Kn=li.reduce((e,t)=>(e[t]=Rl[t].cancel,e),{}),qu=li.reduce((e,t)=>(e[t]=()=>Rl[t].process(lo),e),{}),Vk=e=>Rl[e].process(lo),Zy=e=>{La=!1,lo.delta=qc?Ky:Math.max(Math.min(e-lo.timestamp,Rk),1),lo.timestamp=e,Ic=!0,li.forEach(Vk),Ic=!1,La&&(qc=!1,Yy(Zy))},Mk=()=>{La=!0,qc=!0,Ic||Yy(Zy)},zs=()=>lo;function Xy(e,t){const n=performance.now(),r=({timestamp:o})=>{const a=o-n;a>=t&&(Kn.read(r),e(a-t))};return kt.read(r,!0),()=>Kn.read(r)}const Rs=(e,t,n)=>Math.min(Math.max(n,e),t),ve=(e,t,n)=>-n*e+n*t+e;function Iu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function jk({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,i=0;if(!t)o=a=i=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;o=Iu(l,s,e+1/3),a=Iu(l,s,e),i=Iu(l,s,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(i*255),alpha:r}}const zu=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},Lk=[Fc,gr,Nr],Bk=e=>Lk.find(t=>t.test(e));function Qm(e){const t=Bk(e);let n=t.parse(e);return t===Nr&&(n=jk(n)),n}const Qy=(e,t)=>{const n=Qm(e),r=Qm(t),o={...n};return a=>(o.red=zu(n.red,r.red,a),o.green=zu(n.green,r.green,a),o.blue=zu(n.blue,r.blue,a),o.alpha=ve(n.alpha,r.alpha,a),gr.transform(o))};function Jy(e,t){return typeof e=="number"?n=>ve(e,t,n):We.test(e)?Qy(e,t):t1(e,t)}const e1=(e,t)=>{const n=[...e],r=n.length,o=e.map((a,i)=>Jy(a,t[i]));return a=>{for(let i=0;i<r;i++)n[i]=o[i](a);return n}},Nk=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Jy(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}};function Jm(e){const t=wn.parse(e),n=t.length;let r=0,o=0;for(let a=0;a<n;a++)r||typeof t[a]=="number"?r++:o++;return{parsed:t,numNumbers:r,numColors:o}}const t1=(e,t)=>{const n=wn.createTransformer(t),r=Jm(e),o=Jm(t);return r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?zl(e1(r.parsed,o.parsed),n):i=>`${i>0?t:e}`},Vs=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},e0=(e,t)=>n=>ve(e,t,n);function Ok(e){return typeof e=="number"?e0:typeof e=="string"?We.test(e)?Qy:t1:Array.isArray(e)?e1:typeof e=="object"?Nk:e0}function Dk(e,t,n){const r=[],o=n||Ok(e[0]),a=e.length-1;for(let i=0;i<a;i++){let s=o(e[i],e[i+1]);if(t){const l=Array.isArray(t)?t[i]:t;s=zl(l,s)}r.push(s)}return r}function n1(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;Is(a===t.length),Is(!r||!Array.isArray(r)||r.length===a-1),e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const i=Dk(t,r,o),s=i.length,l=u=>{let c=0;if(s>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Vs(e[c],e[c+1],u);return i[c](d)};return n?u=>l(Rs(e[0],e[a-1],u)):l}function $k(e,t){return e.map(()=>t||Hy).splice(0,e.length-1)}function Wk(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function Hk(e,t){return e.map(n=>n*t)}function Uk({from:e=0,to:t=1,ease:n,offset:r,duration:o=300}){const a={done:!1,value:e},i=Array.isArray(t)?t:[e,t],s=Hk(r&&r.length===i.length?r:Wk(i),o);function l(){return n1(s,i,{ease:Array.isArray(n)?n:$k(i,n)})}let u=l();return{next:c=>(a.value=u(c),a.done=c>=o,a),flipTarget:()=>{i.reverse(),u=l()}}}const Ru=.001,Gk=.01,t0=10,Kk=.05,Yk=1;function Zk({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a;gk(e<=t0*1e3);let i=1-t;i=Rs(Kk,Yk,i),e=Rs(Gk,t0,e/1e3),i<1?(o=u=>{const c=u*i,d=c*e,f=c-n,m=zc(u,i),b=Math.exp(-d);return Ru-f/m*b},a=u=>{const d=u*i*e,f=d*n+n,m=Math.pow(i,2)*Math.pow(u,2)*e,b=Math.exp(-d),v=zc(Math.pow(u,2),i);return(-o(u)+Ru>0?-1:1)*((f-m)*b)/v}):(o=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Ru+c*d},a=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const s=5/e,l=Qk(o,a,s);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:i*2*Math.sqrt(r*u),duration:e}}}const Xk=12;function Qk(e,t,n){let r=n;for(let o=1;o<Xk;o++)r=r-e(r)/t(r);return r}function zc(e,t){return e*Math.sqrt(1-t*t)}const Jk=["duration","bounce"],eT=["stiffness","damping","mass"];function n0(e,t){return t.some(n=>e[n]!==void 0)}function tT(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!n0(e,eT)&&n0(e,Jk)){const n=Zk(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function r1({from:e=0,to:t=1,restSpeed:n=2,restDelta:r=.01,...o}){const a={done:!1,value:e};let{stiffness:i,damping:s,mass:l,velocity:u,duration:c,isResolvedFromDuration:d}=tT(o),f=r0,m=r0;function b(){const v=u?-(u/1e3):0,C=t-e,h=s/(2*Math.sqrt(i*l)),p=Math.sqrt(i/l)/1e3;if(r===void 0&&(r=Math.min(Math.abs(t-e)/100,.4)),h<1){const g=zc(p,h);f=x=>{const _=Math.exp(-h*p*x);return t-_*((v+h*p*C)/g*Math.sin(g*x)+C*Math.cos(g*x))},m=x=>{const _=Math.exp(-h*p*x);return h*p*_*(Math.sin(g*x)*(v+h*p*C)/g+C*Math.cos(g*x))-_*(Math.cos(g*x)*(v+h*p*C)-g*C*Math.sin(g*x))}}else if(h===1)f=g=>t-Math.exp(-p*g)*(C+(v+p*C)*g);else{const g=p*Math.sqrt(h*h-1);f=x=>{const _=Math.exp(-h*p*x),A=Math.min(g*x,300);return t-_*((v+h*p*C)*Math.sinh(A)+g*C*Math.cosh(A))/g}}}return b(),{next:v=>{const C=f(v);if(d)a.done=v>=c;else{const h=m(v)*1e3,p=Math.abs(h)<=n,g=Math.abs(t-C)<=r;a.done=p&&g}return a.value=a.done?t:C,a},flipTarget:()=>{u=-u,[e,t]=[t,e],b()}}}r1.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const r0=e=>0;function nT({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:a}){const i={done:!1,value:t};let s=n*e;const l=t+s,u=a===void 0?l:a(l);return u!==l&&(s=u-t),{next:c=>{const d=-s*Math.exp(-c/r);return i.done=!(d>o||d<-o),i.value=i.done?u:u+d,i},flipTarget:()=>{}}}const rT={decay:nT,keyframes:Uk,spring:r1};function o1(e,t,n=0){return e-t-n}function oT(e,t=0,n=0,r=!0){return r?o1(t+-e,t,n):t-(e-t)+n}function aT(e,t,n,r){return r?e>=t+n:e<=-n}const iT=e=>{const t=({delta:n})=>e(n);return{start:()=>kt.update(t,!0),stop:()=>Kn.update(t)}};function a1({from:e,autoplay:t=!0,driver:n=iT,elapsed:r=0,repeat:o=0,repeatType:a="loop",repeatDelay:i=0,onPlay:s,onStop:l,onComplete:u,onRepeat:c,onUpdate:d,type:f="keyframes",...m}){var b,v;let{to:C}=m,h,p=0,g=m.duration,x,_=!1,A=!0,F;const E=rT[Array.isArray(C)?"keyframes":f];!((v=(b=E).needsInterpolation)===null||v===void 0)&&v.call(b,e,C)&&(F=n1([0,100],[e,C],{clamp:!1}),e=0,C=100);const L=E({...m,from:e,to:C});function V(){p++,a==="reverse"?(A=p%2===0,r=oT(r,g,i,A)):(r=o1(r,g,i),a==="mirror"&&L.flipTarget()),_=!1,c&&c()}function xe(){h.stop(),u&&u()}function ze(Dt){if(A||(Dt=-Dt),r+=Dt,!_){const $t=L.next(Math.max(0,r));x=$t.value,F&&(x=F(x)),_=A?$t.done:r<=0}d==null||d(x),_&&(p===0&&(g!=null||(g=r)),p<o?aT(r,g,i,A)&&V():xe())}function bt(){s==null||s(),h=n(ze),h.start()}return t&&bt(),{stop:()=>{l==null||l(),h.stop()}}}function i1(e,t){return t?e*(1e3/t):0}function sT({from:e=0,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:a=750,bounceStiffness:i=500,bounceDamping:s=10,restDelta:l=1,modifyTarget:u,driver:c,onUpdate:d,onComplete:f,onStop:m}){let b;function v(g){return n!==void 0&&g<n||r!==void 0&&g>r}function C(g){return n===void 0?r:r===void 0||Math.abs(n-g)<Math.abs(r-g)?n:r}function h(g){b==null||b.stop(),b=a1({...g,driver:c,onUpdate:x=>{var _;d==null||d(x),(_=g.onUpdate)===null||_===void 0||_.call(g,x)},onComplete:f,onStop:m})}function p(g){h({type:"spring",stiffness:i,damping:s,restDelta:l,...g})}if(v(e))p({from:e,velocity:t,to:C(e)});else{let g=o*t+e;typeof u<"u"&&(g=u(g));const x=C(g),_=x===n?-1:1;let A,F;const E=L=>{A=F,F=L,t=i1(L-A,zs().delta),(_===1&&L>x||_===-1&&L<x)&&p({from:L,to:x,velocity:t})};h({type:"decay",from:e,velocity:t,timeConstant:a,power:o,restDelta:l,modifyTarget:u,onUpdate:v(g)?E:void 0})}return{stop:()=>b==null?void 0:b.stop()}}function lT({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:i,repeatDelay:s,from:l,...u}){return!!Object.keys(u).length}function uT({ease:e,times:t,yoyo:n,flip:r,loop:o,...a}){const i={...a};return t&&(i.offset=t),a.duration&&(i.duration=qs(a.duration)),a.repeatDelay&&(i.repeatDelay=qs(a.repeatDelay)),e&&(i.ease=Fk(e)?e.map(Ym):Ym(e)),a.type==="tween"&&(i.type="keyframes"),(n||o||r)&&(n?i.repeatType="reverse":o?i.repeatType="loop":r&&(i.repeatType="mirror"),i.repeat=o||n||r||a.repeat),a.type!=="spring"&&(i.type="keyframes"),i}function cT(e,t){var n,r;return(r=(n=(xf(e,t)||{}).delay)!==null&&n!==void 0?n:e.delay)!==null&&r!==void 0?r:0}function dT(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function fT(e,t,n){return Array.isArray(t.to)&&e.duration===void 0&&(e.duration=.8),dT(t),lT(e)||(e={...e,...Pk(n,t.to)}),{...t,...uT(e)}}function pT(e,t,n,r,o){const a=xf(r,e)||{};let i=a.from!==void 0?a.from:t.get();const s=Zm(e,n);i==="none"&&s&&typeof n=="string"?i=Sf(e,n):o0(i)&&typeof n=="string"?i=a0(n):!Array.isArray(n)&&o0(n)&&typeof i=="string"&&(n=a0(i));const l=Zm(e,i);function u(){const d={from:i,to:n,velocity:t.getVelocity(),onComplete:o,onUpdate:f=>t.set(f)};return a.type==="inertia"||a.type==="decay"?sT({...d,...a}):a1({...fT(a,d,e),onUpdate:f=>{d.onUpdate(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{d.onComplete(),a.onComplete&&a.onComplete()}})}function c(){const d=Ey(n);return t.set(d),o(),a.onUpdate&&a.onUpdate(d),a.onComplete&&a.onComplete(),{stop:()=>{}}}return!l||!s||a.type===!1?c:u}function o0(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function a0(e){return typeof e=="number"?0:Sf("",e)}function xf(e,t){return e[t]||e.default||e}function Cf(e,t,n,r={}){return qk.current&&(r={type:!1}),t.start(o=>{let a;const i=pT(e,t,n,r,o),s=cT(r,e),l=()=>a=i();let u;return s?u=Xy(l,qs(s)):l(),()=>{u&&u(),a&&a.stop()}})}const mT=e=>/^\-?\d*\.?\d+$/.test(e),gT=e=>/^0[^.\s]+$/.test(e);function kf(e,t){e.indexOf(t)===-1&&e.push(t)}function Tf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class fa{constructor(){this.subscriptions=[]}add(t){return kf(this.subscriptions,t),()=>Tf(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(!!o)if(o===1)this.subscriptions[0](t,n,r);else for(let a=0;a<o;a++){const i=this.subscriptions[a];i&&i(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const hT=e=>!isNaN(parseFloat(e));class yT{constructor(t){this.version="7.6.18",this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new fa,this.velocityUpdateSubscribers=new fa,this.renderSubscribers=new fa,this.canTrackVelocity=!1,this.updateAndNotify=(n,r=!0)=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:a}=zs();this.lastUpdated!==a&&(this.timeDelta=o,this.lastUpdated=a,kt.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.updateSubscribers.notify(this.current),this.velocityUpdateSubscribers.getSize()&&this.velocityUpdateSubscribers.notify(this.getVelocity()),r&&this.renderSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>kt.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.velocityUpdateSubscribers.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=hT(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}onRenderRequest(t){return t(this.get()),this.renderSubscribers.add(t)}attach(t){this.passiveEffect=t}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?i1(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.stopAnimation=t(n)}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()}}function bo(e){return new yT(e)}const s1=e=>t=>t.test(e),bT={test:e=>e==="auto",parse:e=>e},l1=[Er,j,rn,En,pC,fC,bT],Oo=e=>l1.find(s1(e)),vT=[...l1,We,wn],wT=e=>vT.find(s1(e));function ST(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function xT(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Vl(e,t,n){const r=e.getProps();return df(r,t,n!==void 0?n:r.custom,ST(e),xT(e))}function CT(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,bo(n))}function kT(e,t){const n=Vl(e,t);let{transitionEnd:r={},transition:o={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const i in a){const s=Ey(a[i]);CT(e,i,s)}}function TT(e,t,n){var r,o;const a=Object.keys(t).filter(s=>!e.hasValue(s)),i=a.length;if(!!i)for(let s=0;s<i;s++){const l=a[s],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),c!=null&&(typeof c=="string"&&(mT(c)||gT(c))?c=parseFloat(c):!wT(c)&&wn.test(u)&&(c=Sf(l,u)),e.addValue(l,bo(c)),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function _T(e,t){return t?(t[e]||t.default||t).from:void 0}function FT(e,t,n){var r;const o={};for(const a in e){const i=_T(a,t);o[a]=i!==void 0?i:(r=n.getValue(a))===null||r===void 0?void 0:r.get()}return o}function Ms(e){return Boolean(sn(e)&&e.add)}function AT(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(a=>Rc(e,a,n));r=Promise.all(o)}else if(typeof t=="string")r=Rc(e,t,n);else{const o=typeof t=="function"?Vl(e,t,n.custom):t;r=u1(e,o,n)}return r.then(()=>e.notify("AnimationComplete",t))}function Rc(e,t,n={}){var r;const o=Vl(e,t,n.custom);let{transition:a=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(a=n.transitionOverride);const i=o?()=>u1(e,o,n):()=>Promise.resolve(),s=!((r=e.variantChildren)===null||r===void 0)&&r.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=a;return PT(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[u,c]=l==="beforeChildren"?[i,s]:[s,i];return u().then(c)}else return Promise.all([i(),s(n.delay)])}function u1(e,t,{delay:n=0,transitionOverride:r,type:o}={}){var a;let{transition:i=e.getDefaultTransition(),transitionEnd:s,...l}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");r&&(i=r);const c=[],d=o&&((a=e.animationState)===null||a===void 0?void 0:a.getState()[o]);for(const f in l){const m=e.getValue(f),b=l[f];if(!m||b===void 0||d&&qT(d,f))continue;let v={delay:n,...i};e.shouldReduceMotion&&Eo.has(f)&&(v={...v,type:!1,delay:0});let C=Cf(f,m,b,v);Ms(u)&&(u.add(f),C=C.then(()=>u.remove(f))),c.push(C)}return Promise.all(c).then(()=>{s&&kT(e,s)})}function PT(e,t,n=0,r=0,o=1,a){const i=[],s=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(ET).forEach((u,c)=>{i.push(Rc(u,t,{...a,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(i)}function ET(e,t){return e.sortNodePosition(t)}function qT({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}const _f=[ae.Animate,ae.InView,ae.Focus,ae.Hover,ae.Tap,ae.Drag,ae.Exit],IT=[..._f].reverse(),zT=_f.length;function RT(e){return t=>Promise.all(t.map(({animation:n,options:r})=>AT(e,n,r)))}function VT(e){let t=RT(e);const n=jT();let r=!0;const o=(l,u)=>{const c=Vl(e,u);if(c){const{transition:d,transitionEnd:f,...m}=c;l={...l,...m,...f}}return l};function a(l){t=l(e)}function i(l,u){var c;const d=e.getProps(),f=e.getVariantContext(!0)||{},m=[],b=new Set;let v={},C=1/0;for(let p=0;p<zT;p++){const g=IT[p],x=n[g],_=(c=d[g])!==null&&c!==void 0?c:f[g],A=Ra(_),F=g===u?x.isActive:null;F===!1&&(C=p);let E=_===f[g]&&_!==d[g]&&A;if(E&&r&&e.manuallyAnimateOnMount&&(E=!1),x.protectedKeys={...v},!x.isActive&&F===null||!_&&!x.prevProp||Pl(_)||typeof _=="boolean")continue;const L=MT(x.prevProp,_);let V=L||g===u&&x.isActive&&!E&&A||p>C&&A;const xe=Array.isArray(_)?_:[_];let ze=xe.reduce(o,{});F===!1&&(ze={});const{prevResolvedValues:bt={}}=x,Dt={...bt,...ze},$t=we=>{V=!0,b.delete(we),x.needsAnimating[we]=!0};for(const we in Dt){const Pt=ze[we],I=bt[we];v.hasOwnProperty(we)||(Pt!==I?ja(Pt)&&ja(I)?!$y(Pt,I)||L?$t(we):x.protectedKeys[we]=!0:Pt!==void 0?$t(we):b.add(we):Pt!==void 0&&b.has(we)?$t(we):x.protectedKeys[we]=!0)}x.prevProp=_,x.prevResolvedValues=ze,x.isActive&&(v={...v,...ze}),r&&e.blockInitialAnimation&&(V=!1),V&&!E&&m.push(...xe.map(we=>({animation:we,options:{type:g,...l}})))}if(b.size){const p={};b.forEach(g=>{const x=e.getBaseTarget(g);x!==void 0&&(p[g]=x)}),m.push({animation:p})}let h=Boolean(m.length);return r&&d.initial===!1&&!e.manuallyAnimateOnMount&&(h=!1),r=!1,h?t(m):Promise.resolve()}function s(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(m=>{var b;return(b=m.animationState)===null||b===void 0?void 0:b.setActive(l,u)}),n[l].isActive=u;const f=i(c,l);for(const m in n)n[m].protectedKeys={};return f}return{animateChanges:i,setActive:s,setAnimateFunction:a,getState:()=>n}}function MT(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!$y(t,e):!1}function sr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function jT(){return{[ae.Animate]:sr(!0),[ae.InView]:sr(),[ae.Hover]:sr(),[ae.Tap]:sr(),[ae.Drag]:sr(),[ae.Focus]:sr(),[ae.Exit]:sr()}}const LT={animation:jn(({visualElement:e,animate:t})=>{e.animationState||(e.animationState=VT(e)),Pl(t)&&k.exports.useEffect(()=>t.subscribe(e),[t])}),exit:jn(e=>{const{custom:t,visualElement:n}=e,[r,o]=Dy(),a=k.exports.useContext(Po);k.exports.useEffect(()=>{n.isPresent=r;const i=n.animationState&&n.animationState.setActive(ae.Exit,!r,{custom:a&&a.custom||t});i&&!r&&i.then(o)},[r])})},i0=(e,t)=>Math.abs(e-t);function BT(e,t){const n=i0(e.x,t.x),r=i0(e.y,t.y);return Math.sqrt(n**2+r**2)}class c1{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=Mu(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,d=BT(u.offset,{x:0,y:0})>=3;if(!c&&!d)return;const{point:f}=u,{timestamp:m}=zs();this.history.push({...f,timestamp:m});const{onStart:b,onMove:v}=this.handlers;c||(b&&b(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{if(this.lastMoveEvent=u,this.lastMoveEventInfo=Vu(c,this.transformPagePoint),Iy(u)&&u.buttons===0){this.handlePointerUp(u,c);return}kt.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{this.end();const{onEnd:d,onSessionEnd:f}=this.handlers,m=Mu(Vu(c,this.transformPagePoint),this.history);this.startEvent&&d&&d(u,m),f&&f(u,m)},zy(t)&&t.touches.length>1)return;this.handlers=n,this.transformPagePoint=r;const o=ff(t),a=Vu(o,this.transformPagePoint),{point:i}=a,{timestamp:s}=zs();this.history=[{...i,timestamp:s}];const{onSessionStart:l}=n;l&&l(t,Mu(a,this.history)),this.removeListeners=zl(so(window,"pointermove",this.handlePointerMove),so(window,"pointerup",this.handlePointerUp),so(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Kn.update(this.updatePoint)}}function Vu(e,t){return t?{point:t(e.point)}:e}function s0(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Mu({point:e},t){return{point:e,delta:s0(e,d1(t)),offset:s0(e,NT(t)),velocity:OT(t,.1)}}function NT(e){return e[0]}function d1(e){return e[e.length-1]}function OT(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=d1(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>qs(t)));)n--;if(!r)return{x:0,y:0};const a=(o.timestamp-r.timestamp)/1e3;if(a===0)return{x:0,y:0};const i={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}function ft(e){return e.max-e.min}function Vc(e,t=0,n=.01){return Math.abs(e-t)<=n}function l0(e,t,n,r=.5){e.origin=r,e.originPoint=ve(t.min,t.max,e.origin),e.scale=ft(n)/ft(t),(Vc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ve(n.min,n.max,e.origin)-e.originPoint,(Vc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function pa(e,t,n,r){l0(e.x,t.x,n.x,r==null?void 0:r.originX),l0(e.y,t.y,n.y,r==null?void 0:r.originY)}function u0(e,t,n){e.min=n.min+t.min,e.max=e.min+ft(t)}function DT(e,t,n){u0(e.x,t.x,n.x),u0(e.y,t.y,n.y)}function c0(e,t,n){e.min=t.min-n.min,e.max=e.min+ft(t)}function ma(e,t,n){c0(e.x,t.x,n.x),c0(e.y,t.y,n.y)}function $T(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ve(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ve(n,e,r.max):Math.min(e,n)),e}function d0(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function WT(e,{top:t,left:n,bottom:r,right:o}){return{x:d0(e.x,n,o),y:d0(e.y,t,r)}}function f0(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function HT(e,t){return{x:f0(e.x,t.x),y:f0(e.y,t.y)}}function UT(e,t){let n=.5;const r=ft(e),o=ft(t);return o>r?n=Vs(t.min,t.max-r,e.min):r>o&&(n=Vs(e.min,e.max-o,t.min)),Rs(0,1,n)}function GT(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Mc=.35;function KT(e=Mc){return e===!1?e=0:e===!0&&(e=Mc),{x:p0(e,"left","right"),y:p0(e,"top","bottom")}}function p0(e,t,n){return{min:m0(e,t),max:m0(e,n)}}function m0(e,t){var n;return typeof e=="number"?e:(n=e[t])!==null&&n!==void 0?n:0}const g0=()=>({translate:0,scale:1,origin:0,originPoint:0}),ga=()=>({x:g0(),y:g0()}),h0=()=>({min:0,max:0}),_e=()=>({x:h0(),y:h0()});function Gt(e){return[e("x"),e("y")]}function f1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function YT({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function ZT(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ju(e){return e===void 0||e===1}function jc({scale:e,scaleX:t,scaleY:n}){return!ju(e)||!ju(t)||!ju(n)}function lr(e){return jc(e)||p1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function p1(e){return y0(e.x)||y0(e.y)}function y0(e){return e&&e!=="0%"}function js(e,t,n){const r=e-n,o=t*r;return n+o}function b0(e,t,n,r,o){return o!==void 0&&(e=js(e,o,r)),js(e,n,r)+t}function Lc(e,t=0,n=1,r,o){e.min=b0(e.min,t,n,r,o),e.max=b0(e.max,t,n,r,o)}function m1(e,{x:t,y:n}){Lc(e.x,t.translate,t.scale,t.originPoint),Lc(e.y,n.translate,n.scale,n.originPoint)}function XT(e,t,n,r=!1){var o,a;const i=n.length;if(!i)return;t.x=t.y=1;let s,l;for(let u=0;u<i;u++)s=n[u],l=s.projectionDelta,((a=(o=s.instance)===null||o===void 0?void 0:o.style)===null||a===void 0?void 0:a.display)!=="contents"&&(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Or(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,m1(e,l)),r&&lr(s.latestValues)&&Or(e,s.latestValues));t.x=v0(t.x),t.y=v0(t.y)}function v0(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function qn(e,t){e.min=e.min+t,e.max=e.max+t}function w0(e,t,[n,r,o]){const a=t[o]!==void 0?t[o]:.5,i=ve(e.min,e.max,a);Lc(e,t[n],t[r],i,t.scale)}const QT=["x","scaleX","originX"],JT=["y","scaleY","originY"];function Or(e,t){w0(e.x,t,QT),w0(e.y,t,JT)}function g1(e,t){return f1(ZT(e.getBoundingClientRect(),t))}function e_(e,t,n){const r=g1(e,n),{scroll:o}=t;return o&&(qn(r.x,o.offset.x),qn(r.y,o.offset.y)),r}const t_=new WeakMap;class n_{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=_e(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){if(this.visualElement.isPresent===!1)return;const r=s=>{this.stopAnimation(),n&&this.snapToCursor(ff(s,"page").point)},o=(s,l)=>{var u;const{drag:c,dragPropagation:d,onDragStart:f}=this.getProps();c&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=jy(c),!this.openGlobalLock)||(this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gt(m=>{var b,v;let C=this.getAxisMotionValue(m).get()||0;if(rn.test(C)){const h=(v=(b=this.visualElement.projection)===null||b===void 0?void 0:b.layout)===null||v===void 0?void 0:v.layoutBox[m];h&&(C=ft(h)*(parseFloat(C)/100))}this.originPoint[m]=C}),f==null||f(s,l),(u=this.visualElement.animationState)===null||u===void 0||u.setActive(ae.Drag,!0))},a=(s,l)=>{const{dragPropagation:u,dragDirectionLock:c,onDirectionLock:d,onDrag:f}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:m}=l;if(c&&this.currentDirection===null){this.currentDirection=r_(m),this.currentDirection!==null&&(d==null||d(this.currentDirection));return}this.updateAxis("x",l.point,m),this.updateAxis("y",l.point,m),this.visualElement.render(),f==null||f(s,l)},i=(s,l)=>this.stop(s,l);this.panSession=new c1(t,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:i},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a==null||a(t,n)}cancel(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(t=this.panSession)===null||t===void 0||t.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(n=this.visualElement.animationState)===null||n===void 0||n.setActive(ae.Drag,!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!Vi(t,o,this.currentDirection))return;const a=this.getAxisMotionValue(t);let i=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(i=$T(i,this.constraints[t],this.elastic[t])),a.set(i)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},o=this.constraints;t&&Br(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=WT(r.layoutBox,t):this.constraints=!1,this.elastic=KT(n),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Gt(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=GT(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Br(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=e_(r,o.root,this.visualElement.getTransformPagePoint());let i=HT(o.layout.layoutBox,a);if(n){const s=n(YT(i));this.hasMutatedConstraints=!!s,s&&(i=f1(s))}return i}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:i,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=Gt(c=>{var d;if(!Vi(c,n,this.currentDirection))return;let f=(d=l==null?void 0:l[c])!==null&&d!==void 0?d:{};i&&(f={min:0,max:0});const m=o?200:1e6,b=o?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:m,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Cf(t,r,0,n)}stopAnimation(){Gt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){var n,r;const o="_drag"+t.toUpperCase(),a=this.visualElement.getProps()[o];return a||this.visualElement.getValue(t,(r=(n=this.visualElement.getProps().initial)===null||n===void 0?void 0:n[t])!==null&&r!==void 0?r:0)}snapToCursor(t){Gt(n=>{const{drag:r}=this.getProps();if(!Vi(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(n);if(o&&o.layout){const{min:i,max:s}=o.layout.layoutBox[n];a.set(t[n]-ve(i,s,.5))}})}scalePositionWithinConstraints(){var t;if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!Br(r)||!o||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};Gt(s=>{const l=this.getAxisMotionValue(s);if(l){const u=l.get();a[s]=UT({min:u,max:u},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",(t=o.root)===null||t===void 0||t.updateScroll(),o.updateLayout(),this.resolveConstraints(),Gt(s=>{if(!Vi(s,n,null))return;const l=this.getAxisMotionValue(s),{min:u,max:c}=this.constraints[s];l.set(ve(u,c,a[s]))})}addListeners(){var t;if(!this.visualElement.current)return;t_.set(this.visualElement,this);const n=this.visualElement.current,r=so(n,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),o=()=>{const{dragConstraints:u}=this.getProps();Br(u)&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,i=a.addEventListener("measure",o);a&&!a.layout&&((t=a.root)===null||t===void 0||t.updateScroll(),a.updateLayout()),o();const s=Il(window,"resize",()=>this.scalePositionWithinConstraints()),l=a.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(Gt(d=>{const f=this.getAxisMotionValue(d);!f||(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{s(),r(),i(),l==null||l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:i=Mc,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:i,dragMomentum:s}}}function Vi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function r_(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}function o_(e){const{dragControls:t,visualElement:n}=e,r=ql(()=>new n_(n));k.exports.useEffect(()=>t&&t.subscribe(r),[r,t]),k.exports.useEffect(()=>r.addListeners(),[r])}function a_({onPan:e,onPanStart:t,onPanEnd:n,onPanSessionStart:r,visualElement:o}){const a=e||t||n||r,i=k.exports.useRef(null),{transformPagePoint:s}=k.exports.useContext(nf),l={onSessionStart:r,onStart:t,onMove:e,onEnd:(c,d)=>{i.current=null,n&&n(c,d)}};k.exports.useEffect(()=>{i.current!==null&&i.current.updateHandlers(l)});function u(c){i.current=new c1(c,l,{transformPagePoint:s})}Es(o,"pointerdown",a&&u),pf(()=>i.current&&i.current.end())}const i_={pan:jn(a_),drag:jn(o_)};function Bc(e){return typeof e=="string"&&e.startsWith("var(--")}const h1=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function s_(e){const t=h1.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Nc(e,t,n=1){const[r,o]=s_(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);return a?a.trim():Bc(o)?Nc(o,t,n+1):o}function l_(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const a=o.get();if(!Bc(a))return;const i=Nc(a,r);i&&o.set(i)});for(const o in t){const a=t[o];if(!Bc(a))continue;const i=Nc(a,r);!i||(t[o]=i,n&&n[o]===void 0&&(n[o]=a))}return{target:t,transitionEnd:n}}const u_=new Set(["width","height","top","left","right","bottom","x","y"]),y1=e=>u_.has(e),c_=e=>Object.keys(e).some(y1),b1=(e,t)=>{e.set(t,!1),e.set(t)},S0=e=>e===Er||e===j;var x0;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(x0||(x0={}));const C0=(e,t)=>parseFloat(e.split(", ")[t]),k0=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return C0(o[1],t);{const a=r.match(/^matrix\((.+)\)$/);return a?C0(a[1],e):0}},d_=new Set(["x","y","z"]),f_=As.filter(e=>!d_.has(e));function p_(e){const t=[];return f_.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const T0={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:k0(4,13),y:k0(5,14)},m_=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,a=getComputedStyle(o),{display:i}=a,s={};i==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{s[u]=T0[u](r,a)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);b1(c,s[u]),e[u]=T0[u](l,a)}),e},g_=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(y1);let a=[],i=!1;const s=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=Oo(c);const f=t[l];let m;if(ja(f)){const b=f.length,v=f[0]===null?1:0;c=f[v],d=Oo(c);for(let C=v;C<b;C++)m?Is(Oo(f[C])===m):m=Oo(f[C])}else m=Oo(f);if(d!==m)if(S0(d)&&S0(m)){const b=u.get();typeof b=="string"&&u.set(parseFloat(b)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&m===j&&(t[l]=f.map(parseFloat))}else(d==null?void 0:d.transform)&&(m==null?void 0:m.transform)&&(c===0||f===0)?c===0?u.set(m.transform(c)):t[l]=d.transform(f):(i||(a=p_(e),i=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],b1(u,f))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,u=m_(t,e,s);return a.length&&a.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),Pr&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function h_(e,t,n,r){return c_(t)?g_(e,t,n,r):{target:t,transitionEnd:r}}const y_=(e,t,n,r)=>{const o=l_(e,t,r);return t=o.target,r=o.transitionEnd,h_(e,t,n,r)},Oc={current:null},v1={current:!1};function b_(){if(v1.current=!0,!!Pr)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Oc.current=e.matches;e.addListener(t),t()}else Oc.current=!1}function v_(e,t,n){const{willChange:r}=t;for(const o in t){const a=t[o],i=n[o];if(sn(a))e.addValue(o,a),Ms(r)&&r.add(o);else if(sn(i))e.addValue(o,bo(a)),Ms(r)&&r.remove(o);else if(i!==a)if(e.hasValue(o)){const s=e.getValue(o);!s.hasAnimated&&s.set(a)}else{const s=e.getStaticValue(o);e.addValue(o,bo(s!==void 0?s:a))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const w1=Object.keys(Va),w_=w1.length,_0=["AnimationStart","AnimationComplete","Update","Unmount","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class S_{constructor({parent:t,props:n,reducedMotionConfig:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.isPresent=!0,this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{!this.current||(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>kt.render(this.render,!1,!0);const{latestValues:i,renderState:s}=o;this.latestValues=i,this.baseTarget={...i},this.initialValues=n.initial?{...i}:{},this.renderState=s,this.parent=t,this.props=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.isControllingVariants=El(n),this.isVariantNode=cy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:l,...u}=this.scrapeMotionValuesFromProps(n);for(const c in u){const d=u[c];i[c]!==void 0&&sn(d)&&(d.set(i[c],!1),Ms(l)&&l.add(c))}}scrapeMotionValuesFromProps(t){return{}}mount(t){var n;this.current=t,this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=(n=this.parent)===null||n===void 0?void 0:n.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),v1.current||b_(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Oc.current,this.parent&&this.parent.children.add(this),this.setProps(this.props)}unmount(){var t,n,r;(t=this.projection)===null||t===void 0||t.unmount(),Kn.update(this.notifyUpdate),Kn.render(this.render),this.valueSubscriptions.forEach(o=>o()),(n=this.removeFromVariantTree)===null||n===void 0||n.call(this),(r=this.parent)===null||r===void 0||r.children.delete(this);for(const o in this.events)this.events[o].clear();this.current=null}bindToMotionValue(t,n){const r=Eo.has(t),o=n.onChange(i=>{this.latestValues[t]=i,this.props.onUpdate&&kt.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.onRenderRequest(this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures(t,n,r,o,a,i){const s=[];for(let l=0;l<w_;l++){const u=w1[l],{isEnabled:c,Component:d}=Va[u];c(t)&&d&&s.push(k.exports.createElement(d,{key:u,...t,visualElement:this}))}if(!this.projection&&a){this.projection=new a(o,this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f}=t;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:Boolean(c)||d&&Br(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:f})}return s}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):_e()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}setProps(t){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.props=t;for(let n=0;n<_0.length;n++){const r=_0[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o=t["on"+r];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=v_(this,this.scrapeMotionValuesFromProps(t),this.prevMotionValues)}getProps(){return this.props}getVariant(t){var n;return(n=this.props.variants)===null||n===void 0?void 0:n[t]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){var t;return this.isVariantNode?this:(t=this.parent)===null||t===void 0?void 0:t.getClosestVariantNode()}getVariantContext(t=!1){var n,r;if(t)return(n=this.parent)===null||n===void 0?void 0:n.getVariantContext();if(!this.isControllingVariants){const a=((r=this.parent)===null||r===void 0?void 0:r.getVariantContext())||{};return this.props.initial!==void 0&&(a.initial=this.props.initial),a}const o={};for(let a=0;a<x_;a++){const i=S1[a],s=this.props[i];(Ra(s)||s===!1)&&(o[i]=s)}return o}addVariantChild(t){var n;const r=this.getClosestVariantNode();if(r)return(n=r.variantChildren)===null||n===void 0||n.add(t),()=>r.variantChildren.delete(t)}addValue(t,n){this.hasValue(t)&&this.removeValue(t),this.values.set(t,n),this.latestValues[t]=n.get(),this.bindToMotionValue(t,n)}removeValue(t){var n;this.values.delete(t),(n=this.valueSubscriptions.get(t))===null||n===void 0||n(),this.valueSubscriptions.delete(t),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=bo(n),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=df(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!sn(a)?a:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new fa),this.events[t].add(n)}notify(t,...n){var r;(r=this.events[t])===null||r===void 0||r.notify(...n)}}const S1=["initial",..._f],x_=S1.length;class x1 extends S_{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){var r;return(r=t.style)===null||r===void 0?void 0:r[n]}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},a){let i=FT(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),i&&(i=o(i))),a){TT(this,r,i);const s=y_(this,r,i,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function C_(e){return window.getComputedStyle(e)}class k_ extends x1{readValueFromInstance(t,n){if(Eo.has(n)){const r=wf(n);return r&&r.default||0}else{const r=C_(t),o=(py(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return g1(t,n)}build(t,n,r,o){sf(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t){return cf(t)}renderInstance(t,n,r,o){_y(t,n,r,o)}}class T_ extends x1{getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){var r;return Eo.has(n)?((r=wf(n))===null||r===void 0?void 0:r.default)||0:(n=Fy.has(n)?n:Ty(n),t.getAttribute(n))}measureInstanceViewportBox(){return _e()}scrapeMotionValuesFromProps(t){return Py(t)}build(t,n,r,o){uf(t,n,r,o.transformTemplate)}renderInstance(t,n,r,o){Ay(t,n,r,o)}}const __=(e,t)=>of(e)?new T_(t,{enableHardwareAcceleration:!1}):new k_(t,{enableHardwareAcceleration:!0});function F0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Do={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(j.test(e))e=parseFloat(e);else return e;const n=F0(e,t.target.x),r=F0(e,t.target.y);return`${n}% ${r}%`}},A0="_$css",F_={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=e.includes("var("),a=[];o&&(e=e.replace(h1,m=>(a.push(m),A0)));const i=wn.parse(e);if(i.length>5)return r;const s=wn.createTransformer(e),l=typeof i[0]!="number"?1:0,u=n.x.scale*t.x,c=n.y.scale*t.y;i[0+l]/=u,i[1+l]/=c;const d=ve(u,c,.5);typeof i[2+l]=="number"&&(i[2+l]/=d),typeof i[3+l]=="number"&&(i[3+l]/=d);let f=s(i);if(o){let m=0;f=f.replace(A0,()=>{const b=a[m];return m++,b})}return f}};class A_ extends B.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=t;iC(E_),a&&(n.group&&n.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),ua.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:a}=this.props,i=r.projection;return i&&(i.isPresent=a,o||t.layoutDependency!==n||n===void 0?i.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?i.promote():i.relegate()||kt.postRender(()=>{var s;!((s=i.getStack())===null||s===void 0)&&s.members.length||this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n!=null&&n.group&&n.group.remove(o),r!=null&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t==null||t()}render(){return null}}function P_(e){const[t,n]=Dy(),r=k.exports.useContext(rf);return q(A_,{...e,layoutGroup:r,switchLayoutGroup:k.exports.useContext(dy),isPresent:t,safeToRemove:n})}const E_={borderRadius:{...Do,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Do,borderTopRightRadius:Do,borderBottomLeftRadius:Do,borderBottomRightRadius:Do,boxShadow:F_},q_={measureLayout:P_};function I_(e,t,n={}){const r=sn(e)?e:bo(e);return Cf("",r,t,n),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}const C1=["TopLeft","TopRight","BottomLeft","BottomRight"],z_=C1.length,P0=e=>typeof e=="string"?parseFloat(e):e,E0=e=>typeof e=="number"||j.test(e);function R_(e,t,n,r,o,a){var i,s,l,u;o?(e.opacity=ve(0,(i=n.opacity)!==null&&i!==void 0?i:1,V_(r)),e.opacityExit=ve((s=t.opacity)!==null&&s!==void 0?s:1,0,M_(r))):a&&(e.opacity=ve((l=t.opacity)!==null&&l!==void 0?l:1,(u=n.opacity)!==null&&u!==void 0?u:1,r));for(let c=0;c<z_;c++){const d=`border${C1[c]}Radius`;let f=q0(t,d),m=q0(n,d);if(f===void 0&&m===void 0)continue;f||(f=0),m||(m=0),f===0||m===0||E0(f)===E0(m)?(e[d]=Math.max(ve(P0(f),P0(m),r),0),(rn.test(m)||rn.test(f))&&(e[d]+="%")):e[d]=m}(t.rotate||n.rotate)&&(e.rotate=ve(t.rotate||0,n.rotate||0,r))}function q0(e,t){var n;return(n=e[t])!==null&&n!==void 0?n:e.borderRadius}const V_=k1(0,.5,bf),M_=k1(.5,.95,mf);function k1(e,t,n){return r=>r<e?0:r>t?1:n(Vs(e,t,r))}function I0(e,t){e.min=t.min,e.max=t.max}function It(e,t){I0(e.x,t.x),I0(e.y,t.y)}function z0(e,t,n,r,o){return e-=t,e=js(e,1/n,r),o!==void 0&&(e=js(e,1/o,r)),e}function j_(e,t=0,n=1,r=.5,o,a=e,i=e){if(rn.test(t)&&(t=parseFloat(t),t=ve(i.min,i.max,t/100)-i.min),typeof t!="number")return;let s=ve(a.min,a.max,r);e===a&&(s-=t),e.min=z0(e.min,t,n,s,o),e.max=z0(e.max,t,n,s,o)}function R0(e,t,[n,r,o],a,i){j_(e,t[n],t[r],t[o],t.scale,a,i)}const L_=["x","scaleX","originX"],B_=["y","scaleY","originY"];function V0(e,t,n,r){R0(e.x,t,L_,n==null?void 0:n.x,r==null?void 0:r.x),R0(e.y,t,B_,n==null?void 0:n.y,r==null?void 0:r.y)}function M0(e){return e.translate===0&&e.scale===1}function T1(e){return M0(e.x)&&M0(e.y)}function _1(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function j0(e){return ft(e.x)/ft(e.y)}class N_{constructor(){this.members=[]}add(t){kf(this.members,t),t.scheduleRender()}remove(t){if(Tf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){var r;const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,n&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),!((r=t.root)===null||r===void 0)&&r.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:a}=t.options;a===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,o,a,i;(r=(n=t.options).onExitComplete)===null||r===void 0||r.call(n),(i=(o=t.resumingFrom)===null||o===void 0?void 0:(a=o.options).onExitComplete)===null||i===void 0||i.call(a)})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function L0(e,t,n){let r="";const o=e.x.translate/t.x,a=e.y.translate/t.y;if((o||a)&&(r=`translate3d(${o}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const i=e.x.scale*t.x,s=e.y.scale*t.y;return(i!==1||s!==1)&&(r+=`scale(${i}, ${s})`),r||"none"}const O_=(e,t)=>e.depth-t.depth;class D_{constructor(){this.children=[],this.isDirty=!1}add(t){kf(this.children,t),this.isDirty=!0}remove(t){Tf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(O_),this.isDirty=!1,this.children.forEach(t)}}const B0=["","X","Y","Z"],N0=1e3;let $_=0;function F1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(i,s={},l=t==null?void 0:t()){this.id=$_++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isTransformDirty=!1,this.isProjectionDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach(U_),this.nodes.forEach(Y_),this.nodes.forEach(Z_)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=i,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,i&&this.root.registerPotentialNode(i,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new D_)}addEventListener(i,s){return this.eventHandlers.has(i)||this.eventHandlers.set(i,new fa),this.eventHandlers.get(i).add(s)}notifyListeners(i,...s){const l=this.eventHandlers.get(i);l==null||l.notify(...s)}hasListeners(i){return this.eventHandlers.has(i)}registerPotentialNode(i,s){this.potentialNodes.set(i,s)}mount(i,s=!1){var l;if(this.instance)return;this.isSVG=i instanceof SVGElement&&i.tagName!=="svg",this.instance=i;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(i),this.root.nodes.add(this),(l=this.parent)===null||l===void 0||l.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),s&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const m=()=>this.root.updateBlockedByResize=!1;e(i,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Xy(m,250),ua.hasAnimatedSinceResize&&(ua.hasAnimatedSinceResize=!1,this.nodes.forEach(D0))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:m,hasRelativeTargetChanged:b,layout:v})=>{var C,h,p,g,x;if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=(h=(C=this.options.transition)!==null&&C!==void 0?C:d.getDefaultTransition())!==null&&h!==void 0?h:tF,{onLayoutAnimationStart:A,onLayoutAnimationComplete:F}=d.getProps(),E=!this.targetLayout||!_1(this.targetLayout,v)||b,L=!m&&b;if(((p=this.resumeFrom)===null||p===void 0?void 0:p.instance)||L||m&&(E||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,L);const V={...xf(_,"layout"),onPlay:A,onComplete:F};d.shouldReduceMotion&&(V.delay=0,V.type=!1),this.startAnimation(V)}else!m&&this.animationProgress===0&&D0(this),this.isLead()&&((x=(g=this.options).onExitComplete)===null||x===void 0||x.call(g));this.targetLayout=v})}unmount(){var i,s;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(i=this.getStack())===null||i===void 0||i.remove(this),(s=this.parent)===null||s===void 0||s.children.delete(this),this.instance=void 0,Kn.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){var i;return this.isAnimationBlocked||((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimationBlocked())||!1}startUpdate(){var i;this.isUpdateBlocked()||(this.isUpdating=!0,(i=this.nodes)===null||i===void 0||i.forEach(X_),this.animationId++)}willUpdate(i=!0){var s,l,u;if(this.root.isUpdateBlocked()){(l=(s=this.options).onExitComplete)===null||l===void 0||l.call(s);return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const b=this.path[m];b.shouldResetTransform=!0,b.updateScroll("snapshot")}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const f=(u=this.options.visualElement)===null||u===void 0?void 0:u.getProps().transformTemplate;this.prevTransformTemplateValue=f==null?void 0:f(this.latestValues,""),this.updateSnapshot(),i&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(O0);return}!this.isUpdating||(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(nF),this.potentialNodes.clear()),this.nodes.forEach(K_),this.nodes.forEach(W_),this.nodes.forEach(H_),this.clearAllSnapshots(),qu.update(),qu.preRender(),qu.render())}clearAllSnapshots(){this.nodes.forEach(G_),this.sharedNodes.forEach(Q_)}scheduleUpdateProjection(){kt.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){kt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){var i;if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=_e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox),(i=this.options.visualElement)===null||i===void 0||i.notify("LayoutMeasure",this.layout.layoutBox,s==null?void 0:s.layoutBox)}updateScroll(i="measure"){let s=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===i&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:i,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){var i;if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!T1(this.projectionDelta),u=(i=this.options.visualElement)===null||i===void 0?void 0:i.getProps().transformTemplate,c=u==null?void 0:u(this.latestValues,""),d=c!==this.prevTransformTemplateValue;s&&(l||lr(this.latestValues)||d)&&(o(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(i=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return i&&(l=this.removeTransform(l)),rF(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:i}=this.options;if(!i)return _e();const s=i.measureViewportBox(),{scroll:l}=this.root;return l&&(qn(s.x,l.offset.x),qn(s.y,l.offset.y)),s}removeElementScroll(i){const s=_e();It(s,i);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){It(s,i);const{scroll:f}=this.root;f&&(qn(s.x,-f.offset.x),qn(s.y,-f.offset.y))}qn(s.x,c.offset.x),qn(s.y,c.offset.y)}}return s}applyTransform(i,s=!1){const l=_e();It(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];!s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Or(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),lr(c.latestValues)&&Or(l,c.latestValues)}return lr(this.latestValues)&&Or(l,this.latestValues),l}removeTransform(i){var s;const l=_e();It(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!lr(c.latestValues))continue;jc(c.latestValues)&&c.updateSnapshot();const d=_e(),f=c.measurePageBox();It(d,f),V0(l,c.latestValues,(s=c.snapshot)===null||s===void 0?void 0:s.layoutBox,d)}return lr(this.latestValues)&&V0(l,this.latestValues),l}setTargetDelta(i){this.targetDelta=i,this.isProjectionDirty=!0,this.root.scheduleUpdateProjection()}setOptions(i){this.options={...this.options,...i,crossfade:i.crossfade!==void 0?i.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){var i;const s=this.getLead();if(this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),!this.isProjectionDirty&&!this.attemptToResolveRelativeTarget)return;const{layout:l,layoutId:u}=this.options;if(!(!this.layout||!(l||u))){if(!this.targetDelta&&!this.relativeTarget){const c=this.getClosestProjectingParent();c&&c.layout?(this.relativeParent=c,this.relativeTarget=_e(),this.relativeTargetOrigin=_e(),ma(this.relativeTargetOrigin,this.layout.layoutBox,c.layout.layoutBox),It(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=_e(),this.targetWithTransforms=_e()),this.relativeTarget&&this.relativeTargetOrigin&&((i=this.relativeParent)===null||i===void 0?void 0:i.target)?DT(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):It(this.target,this.layout.layoutBox),m1(this.target,this.targetDelta)):It(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const c=this.getClosestProjectingParent();c&&Boolean(c.resumingFrom)===Boolean(this.resumingFrom)&&!c.options.layoutScroll&&c.target?(this.relativeParent=c,this.relativeTarget=_e(),this.relativeTargetOrigin=_e(),ma(this.relativeTargetOrigin,this.target,c.target),It(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||jc(this.parent.latestValues)||p1(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){var i;const{isProjectionDirty:s,isTransformDirty:l}=this;this.isProjectionDirty=this.isTransformDirty=!1;const u=this.getLead(),c=Boolean(this.resumingFrom)||this!==u;let d=!0;if(s&&(d=!1),c&&l&&(d=!1),d)return;const{layout:f,layoutId:m}=this.options;if(this.isTreeAnimating=Boolean(((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimating)||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||m))return;It(this.layoutCorrected,this.layout.layoutBox),XT(this.layoutCorrected,this.treeScale,this.path,c);const{target:b}=u;if(!b)return;this.projectionDelta||(this.projectionDelta=ga(),this.projectionDeltaWithTransform=ga());const v=this.treeScale.x,C=this.treeScale.y,h=this.projectionTransform;pa(this.projectionDelta,this.layoutCorrected,b,this.latestValues),this.projectionTransform=L0(this.projectionDelta,this.treeScale),(this.projectionTransform!==h||this.treeScale.x!==v||this.treeScale.y!==C)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(i=!0){var s,l,u;(l=(s=this.options).scheduleRender)===null||l===void 0||l.call(s),i&&((u=this.getStack())===null||u===void 0||u.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(i,s=!1){var l,u;const c=this.snapshot,d=(c==null?void 0:c.latestValues)||{},f={...this.latestValues},m=ga();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!s;const b=_e(),v=(c==null?void 0:c.source)!==((l=this.layout)===null||l===void 0?void 0:l.source),C=(((u=this.getStack())===null||u===void 0?void 0:u.members.length)||0)<=1,h=Boolean(v&&!C&&this.options.crossfade===!0&&!this.path.some(eF));this.animationProgress=0,this.mixTargetDelta=p=>{var g;const x=p/1e3;$0(m.x,i.x,x),$0(m.y,i.y,x),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&((g=this.relativeParent)===null||g===void 0?void 0:g.layout)&&(ma(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox),J_(this.relativeTarget,this.relativeTargetOrigin,b,x)),v&&(this.animationValues=f,R_(f,d,this.latestValues,x,h,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(0)}startAnimation(i){var s,l;this.notifyListeners("animationStart"),(s=this.currentAnimation)===null||s===void 0||s.stop(),this.resumingFrom&&((l=this.resumingFrom.currentAnimation)===null||l===void 0||l.stop()),this.pendingAnimation&&(Kn.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=kt.update(()=>{ua.hasAnimatedSinceResize=!0,this.currentAnimation=I_(0,N0,{...i,onUpdate:u=>{var c;this.mixTargetDelta(u),(c=i.onUpdate)===null||c===void 0||c.call(i,u)},onComplete:()=>{var u;(u=i.onComplete)===null||u===void 0||u.call(i),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){var i;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(i=this.getStack())===null||i===void 0||i.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){var i;this.currentAnimation&&((i=this.mixTargetDelta)===null||i===void 0||i.call(this,N0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const i=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:c}=i;if(!(!s||!l||!u)){if(this!==i&&this.layout&&u&&A1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||_e();const d=ft(this.layout.layoutBox.x);l.x.min=i.target.x.min,l.x.max=l.x.min+d;const f=ft(this.layout.layoutBox.y);l.y.min=i.target.y.min,l.y.max=l.y.min+f}It(s,l),Or(s,c),pa(this.projectionDeltaWithTransform,this.layoutCorrected,s,c)}}registerSharedNode(i,s){var l,u,c;this.sharedNodes.has(i)||this.sharedNodes.set(i,new N_),this.sharedNodes.get(i).add(s),s.promote({transition:(l=s.options.initialPromotionConfig)===null||l===void 0?void 0:l.transition,preserveFollowOpacity:(c=(u=s.options.initialPromotionConfig)===null||u===void 0?void 0:u.shouldPreserveFollowOpacity)===null||c===void 0?void 0:c.call(u,s)})}isLead(){const i=this.getStack();return i?i.lead===this:!0}getLead(){var i;const{layoutId:s}=this.options;return s?((i=this.getStack())===null||i===void 0?void 0:i.lead)||this:this}getPrevLead(){var i;const{layoutId:s}=this.options;return s?(i=this.getStack())===null||i===void 0?void 0:i.prevLead:void 0}getStack(){const{layoutId:i}=this.options;if(i)return this.root.sharedNodes.get(i)}promote({needsReset:i,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),i&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const i=this.getStack();return i?i.relegate(this):!1}resetRotation(){const{visualElement:i}=this.options;if(!i)return;let s=!1;const{latestValues:l}=i;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const u={};for(let c=0;c<B0.length;c++){const d="rotate"+B0[c];l[d]&&(u[d]=l[d],i.setStaticValue(d,0))}i==null||i.render();for(const c in u)i.setStaticValue(c,u[c]);i.scheduleRender()}getProjectionStyles(i={}){var s,l,u;const c={};if(!this.instance||this.isSVG)return c;if(this.isVisible)c.visibility="";else return{visibility:"hidden"};const d=(s=this.options.visualElement)===null||s===void 0?void 0:s.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=ls(i.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const C={};return this.options.layoutId&&(C.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,C.pointerEvents=ls(i.pointerEvents)||""),this.hasProjected&&!lr(this.latestValues)&&(C.transform=d?d({},""):"none",this.hasProjected=!1),C}const m=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=L0(this.projectionDeltaWithTransform,this.treeScale,m),d&&(c.transform=d(m,c.transform));const{x:b,y:v}=this.projectionDelta;c.transformOrigin=`${b.origin*100}% ${v.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(l=m.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:c.opacity=f===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const C in Fs){if(m[C]===void 0)continue;const{correct:h,applyTo:p}=Fs[C],g=h(m[C],f);if(p){const x=p.length;for(let _=0;_<x;_++)c[p[_]]=g}else c[C]=g}return this.options.layoutId&&(c.pointerEvents=f===this?ls(i.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(i=>{var s;return(s=i.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(O0),this.root.sharedNodes.clear()}}}function W_(e){e.updateLayout()}function H_(e){var t,n,r;const o=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&o&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:i}=e.layout,{animationType:s}=e.options,l=o.source!==e.layout.source;s==="size"?Gt(m=>{const b=l?o.measuredBox[m]:o.layoutBox[m],v=ft(b);b.min=a[m].min,b.max=b.min+v}):A1(s,o.layoutBox,a)&&Gt(m=>{const b=l?o.measuredBox[m]:o.layoutBox[m],v=ft(a[m]);b.max=b.min+v});const u=ga();pa(u,a,o.layoutBox);const c=ga();l?pa(c,e.applyTransform(i,!0),o.measuredBox):pa(c,a,o.layoutBox);const d=!T1(u);let f=!1;if(!e.resumeFrom){const m=e.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:b,layout:v}=m;if(b&&v){const C=_e();ma(C,o.layoutBox,b.layoutBox);const h=_e();ma(h,a,v.layoutBox),_1(C,h)||(f=!0)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:c,layoutDelta:u,hasLayoutChanged:d,hasRelativeTargetChanged:f})}else e.isLead()&&((r=(n=e.options).onExitComplete)===null||r===void 0||r.call(n));e.options.transition=void 0}function U_(e){e.isProjectionDirty||(e.isProjectionDirty=Boolean(e.parent&&e.parent.isProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=Boolean(e.parent&&e.parent.isTransformDirty))}function G_(e){e.clearSnapshot()}function O0(e){e.clearMeasurements()}function K_(e){const{visualElement:t}=e.options;t!=null&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function D0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function Y_(e){e.resolveTargetDelta()}function Z_(e){e.calcProjection()}function X_(e){e.resetRotation()}function Q_(e){e.removeLeadSnapshot()}function $0(e,t,n){e.translate=ve(t.translate,0,n),e.scale=ve(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function W0(e,t,n,r){e.min=ve(t.min,n.min,r),e.max=ve(t.max,n.max,r)}function J_(e,t,n,r){W0(e.x,t.x,n.x,r),W0(e.y,t.y,n.y,r)}function eF(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const tF={duration:.45,ease:[.4,0,.1,1]};function nF(e,t){let n=e.root;for(let a=e.path.length-1;a>=0;a--)if(Boolean(e.path[a].instance)){n=e.path[a];break}const o=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);o&&e.mount(o,!0)}function H0(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function rF(e){H0(e.x),H0(e.y)}function A1(e,t,n){return e==="position"||e==="preserve-aspect"&&!Vc(j0(t),j0(n),.2)}const oF=F1({attachResizeListener:(e,t)=>Il(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Lu={current:void 0},aF=F1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Lu.current){const e=new oF(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Lu.current=e}return Lu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>Boolean(window.getComputedStyle(e).position==="fixed")}),iF={...LT,...fk,...i_,...q_},sF=oC((e,t)=>$C(e,t,iF,__,aF));function P1(){const e=k.exports.useRef(!1);return _s(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function lF(){const e=P1(),[t,n]=k.exports.useState(0),r=k.exports.useCallback(()=>{e.current&&n(t+1)},[t]);return[k.exports.useCallback(()=>kt.postRender(r),[r]),t]}class uF extends k.exports.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function cF({children:e,isPresent:t}){const n=k.exports.useId(),r=k.exports.useRef(null),o=k.exports.useRef({width:0,height:0,top:0,left:0});return k.exports.useInsertionEffect(()=>{const{width:a,height:i,top:s,left:l}=o.current;if(t||!r.current||!a||!i)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),q(uF,{isPresent:t,childRef:r,sizeRef:o,children:k.exports.cloneElement(e,{ref:r})})}const Bu=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:i})=>{const s=ql(dF),l=k.exports.useId(),u=k.exports.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:c=>{s.set(c,!0);for(const d of s.values())if(!d)return;r&&r()},register:c=>(s.set(c,!1),()=>s.delete(c))}),a?void 0:[n]);return k.exports.useMemo(()=>{s.forEach((c,d)=>s.set(d,!1))},[n]),k.exports.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),i==="popLayout"&&(e=q(cF,{isPresent:n,children:e})),q(Po.Provider,{value:u,children:e})};function dF(){return new Map}const Lr=e=>e.key||"";function fF(e,t){e.forEach(n=>{const r=Lr(n);t.set(r,n)})}function pF(e){const t=[];return k.exports.Children.forEach(e,n=>{k.exports.isValidElement(n)&&t.push(n)}),t}const mF=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:i="sync"})=>{o&&(i="wait",Oy(!1,"Replace exitBeforeEnter with mode='wait'"));let[s]=lF();const l=k.exports.useContext(rf).forceRender;l&&(s=l);const u=P1(),c=pF(e);let d=c;const f=new Set,m=k.exports.useRef(d),b=k.exports.useRef(new Map).current,v=k.exports.useRef(!0);if(_s(()=>{v.current=!1,fF(c,b),m.current=d}),pf(()=>{v.current=!0,b.clear(),f.clear()}),v.current)return q(dc,{children:d.map(g=>q(Bu,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:i,children:g},Lr(g)))});d=[...d];const C=m.current.map(Lr),h=c.map(Lr),p=C.length;for(let g=0;g<p;g++){const x=C[g];h.indexOf(x)===-1&&f.add(x)}return i==="wait"&&f.size&&(d=[]),f.forEach(g=>{if(h.indexOf(g)!==-1)return;const x=b.get(g);if(!x)return;const _=C.indexOf(g),A=()=>{b.delete(g),f.delete(g);const F=m.current.findIndex(E=>E.key===g);if(m.current.splice(F,1),!f.size){if(m.current=c,u.current===!1)return;s(),r&&r()}};d.splice(_,0,q(Bu,{isPresent:!1,onExitComplete:A,custom:t,presenceAffectsLayout:a,mode:i,children:x},Lr(x)))}),d=d.map(g=>{const x=g.key;return f.has(x)?g:q(Bu,{isPresent:!0,presenceAffectsLayout:a,mode:i,children:g},Lr(g))}),Ny!=="production"&&i==="wait"&&d.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),q(dc,{children:f.size?d:d.map(g=>k.exports.cloneElement(g))})};var gF=(...e)=>e.filter(Boolean).join(" "),hF=Z5({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),E1=H((e,t)=>{const n=At("Spinner",e),{label:r="Loading...",thickness:o="2px",speed:a="0.45s",emptyColor:i="transparent",className:s,...l}=mt(e),u=gF("chakra-spinner",s),c={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:o,borderBottomColor:i,borderLeftColor:i,animation:`${hF} ${a} linear infinite`,...n};return B.createElement(D.div,{ref:t,__css:c,className:u,...l},r&&B.createElement(D.span,{srOnly:!0},r))});E1.displayName="Spinner";var Ml=(...e)=>e.filter(Boolean).join(" ");function yF(e){return q(Ao,{viewBox:"0 0 24 24",...e,children:q("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})}function bF(e){return q(Ao,{viewBox:"0 0 24 24",...e,children:q("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})}function U0(e){return q(Ao,{viewBox:"0 0 24 24",...e,children:q("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}var[vF,wF]=ai({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[SF,Ff]=ai({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),q1={info:{icon:bF,colorScheme:"blue"},warning:{icon:U0,colorScheme:"orange"},success:{icon:yF,colorScheme:"green"},error:{icon:U0,colorScheme:"red"},loading:{icon:E1,colorScheme:"blue"}};function xF(e){return q1[e].colorScheme}function CF(e){return q1[e].icon}var I1=H(function(t,n){var u;const{status:r="info",addRole:o=!0,...a}=mt(t),i=(u=t.colorScheme)!=null?u:xF(r),s=ly("Alert",{...t,colorScheme:i}),l={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...s.container};return B.createElement(vF,{value:{status:r}},B.createElement(SF,{value:s},B.createElement(D.div,{role:o?"alert":void 0,ref:n,...a,className:Ml("chakra-alert",t.className),__css:l})))});I1.displayName="Alert";var z1=H(function(t,n){const r=Ff(),o={display:"inline",...r.description};return B.createElement(D.div,{ref:n,...t,className:Ml("chakra-alert__desc",t.className),__css:o})});z1.displayName="AlertDescription";function R1(e){const{status:t}=wF(),n=CF(t),r=Ff(),o=t==="loading"?r.spinner:r.icon;return B.createElement(D.span,{display:"inherit",...e,className:Ml("chakra-alert__icon",e.className),__css:o},e.children||q(n,{h:"100%",w:"100%"}))}R1.displayName="AlertIcon";var V1=H(function(t,n){const r=Ff();return B.createElement(D.div,{ref:n,...t,className:Ml("chakra-alert__title",t.className),__css:r.title})});V1.displayName="AlertTitle";function M1(e){return k.exports.Children.toArray(e).filter(t=>k.exports.isValidElement(t))}function G0(e,t){const n=k.exports.useRef(!1),r=k.exports.useRef(!1);k.exports.useEffect(()=>{if(n.current&&r.current)return e();r.current=!0},t),k.exports.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[])}function kF(e){return q(Ao,{focusable:"false","aria-hidden":!0,...e,children:q("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}var j1=H(function(t,n){const r=At("CloseButton",t),{children:o,isDisabled:a,__css:i,...s}=mt(t),l={outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0};return B.createElement(D.button,{type:"button","aria-label":"Close",ref:n,disabled:a,__css:{...l,...r,...i},...s},o||q(kF,{width:"1em",height:"1em"}))});j1.displayName="CloseButton";var L1=`
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`,TF=()=>q(Tl,{styles:L1}),_F=()=>q(Tl,{styles:`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${L1}
    `});function B1(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function FF(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}Object.freeze(["base","sm","md","lg","xl","2xl"]);function Yn(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):FF(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}var AF=H(function(e,t){const{ratio:n=4/3,children:r,className:o,...a}=e,i=k.exports.Children.only(r),s=Ze("chakra-aspect-ratio",o);return B.createElement(D.div,{ref:t,position:"relative",className:s,_before:{height:0,content:'""',display:"block",paddingBottom:Yn(n,l=>`${1/l*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...a},i)});AF.displayName="AspectRatio";var PF=H(function(t,n){const r=At("Badge",t),{className:o,...a}=mt(t);return B.createElement(D.span,{ref:n,className:Ze("chakra-badge",t.className),...a,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});PF.displayName="Badge";var Af=D("div");Af.displayName="Box";var N1=H(function(t,n){const{size:r,centerContent:o=!0,...a}=t;return q(Af,{ref:n,boxSize:r,__css:{...o?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});N1.displayName="Square";var EF=H(function(t,n){const{size:r,...o}=t;return q(N1,{size:r,ref:n,borderRadius:"9999px",...o})});EF.displayName="Circle";var O1=D("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});O1.displayName="Center";var qF={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};H(function(t,n){const{axis:r="both",...o}=t;return B.createElement(D.div,{ref:n,__css:qF[r],...o,position:"absolute"})});var IF=H(function(t,n){const r=At("Code",t),{className:o,...a}=mt(t);return B.createElement(D.code,{ref:n,className:Ze("chakra-code",t.className),...a,__css:{display:"inline-block",...r}})});IF.displayName="Code";var zF=H(function(t,n){const{className:r,centerContent:o,...a}=mt(t),i=At("Container",t);return B.createElement(D.div,{ref:n,className:Ze("chakra-container",r),...a,__css:{...i,...o&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});zF.displayName="Container";var RF=H(function(t,n){const{borderLeftWidth:r,borderBottomWidth:o,borderTopWidth:a,borderRightWidth:i,borderWidth:s,borderStyle:l,borderColor:u,...c}=At("Divider",t),{className:d,orientation:f="horizontal",__css:m,...b}=mt(t),v={vertical:{borderLeftWidth:r||i||s||"1px",height:"100%"},horizontal:{borderBottomWidth:o||a||s||"1px",width:"100%"}};return B.createElement(D.hr,{ref:n,"aria-orientation":f,...b,__css:{...c,border:"0",borderColor:u,borderStyle:l,...v[f],...m},className:Ze("chakra-divider",d)})});RF.displayName="Divider";var VF=H(function(t,n){const{direction:r,align:o,justify:a,wrap:i,basis:s,grow:l,shrink:u,...c}=t,d={display:"flex",flexDirection:r,alignItems:o,justifyContent:a,flexWrap:i,flexBasis:s,flexGrow:l,flexShrink:u};return B.createElement(D.div,{ref:n,__css:d,...c})});VF.displayName="Flex";var D1=H(function(t,n){const{templateAreas:r,gap:o,rowGap:a,columnGap:i,column:s,row:l,autoFlow:u,autoRows:c,templateRows:d,autoColumns:f,templateColumns:m,...b}=t,v={display:"grid",gridTemplateAreas:r,gridGap:o,gridRowGap:a,gridColumnGap:i,gridAutoColumns:f,gridColumn:s,gridRow:l,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:d,gridTemplateColumns:m};return B.createElement(D.div,{ref:n,__css:v,...b})});D1.displayName="Grid";function K0(e){return Yn(e,t=>t==="auto"?"auto":`span ${t}/span ${t}`)}var MF=H(function(t,n){const{area:r,colSpan:o,colStart:a,colEnd:i,rowEnd:s,rowSpan:l,rowStart:u,...c}=t,d=B1({gridArea:r,gridColumn:K0(o),gridRow:K0(l),gridColumnStart:a,gridColumnEnd:i,gridRowStart:u,gridRowEnd:s});return B.createElement(D.div,{ref:n,__css:d,...c})});MF.displayName="GridItem";var $1=H(function(t,n){const r=At("Heading",t),{className:o,...a}=mt(t);return B.createElement(D.h2,{ref:n,className:Ze("chakra-heading",t.className),...a,__css:r})});$1.displayName="Heading";H(function(t,n){const r=At("Mark",t),o=mt(t);return q(Af,{ref:n,...o,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})});var jF=H(function(t,n){const r=At("Kbd",t),{className:o,...a}=mt(t);return B.createElement(D.kbd,{ref:n,className:Ze("chakra-kbd",o),...a,__css:{fontFamily:"mono",...r}})});jF.displayName="Kbd";var LF=H(function(t,n){const r=At("Link",t),{className:o,isExternal:a,...i}=mt(t);return B.createElement(D.a,{target:a?"_blank":void 0,rel:a?"noopener":void 0,ref:n,className:Ze("chakra-link",o),...i,__css:r})});LF.displayName="Link";H(function(t,n){const{isExternal:r,target:o,rel:a,className:i,...s}=t;return B.createElement(D.a,{...s,ref:n,className:Ze("chakra-linkbox__overlay",i),rel:r?"noopener noreferrer":a,target:r?"_blank":o,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})});H(function(t,n){const{className:r,...o}=t;return B.createElement(D.div,{ref:n,position:"relative",...o,className:Ze("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})});var[BF,W1]=ai({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),Pf=H(function(t,n){const r=ly("List",t),{children:o,styleType:a="none",stylePosition:i,spacing:s,...l}=mt(t),u=M1(o),d=s?{["& > *:not(style) ~ *:not(style)"]:{mt:s}}:{};return B.createElement(BF,{value:r},B.createElement(D.ul,{ref:n,listStyleType:a,listStylePosition:i,role:"list",__css:{...r.container,...d},...l},u))});Pf.displayName="List";var NF=H((e,t)=>{const{as:n,...r}=e;return q(Pf,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})});NF.displayName="OrderedList";var OF=H(function(t,n){const{as:r,...o}=t;return q(Pf,{ref:n,as:"ul",styleType:"initial",marginStart:"1em",...o})});OF.displayName="UnorderedList";var DF=H(function(t,n){const r=W1();return B.createElement(D.li,{ref:n,...t,__css:r.item})});DF.displayName="ListItem";var $F=H(function(t,n){const r=W1();return q(Ao,{ref:n,role:"presentation",...t,__css:r.icon})});$F.displayName="ListIcon";var WF=H(function(t,n){const{columns:r,spacingX:o,spacingY:a,spacing:i,minChildWidth:s,...l}=t,u=iy(),c=s?UF(s,u):GF(r);return q(D1,{ref:n,gap:i,columnGap:o,rowGap:a,templateColumns:c,...l})});WF.displayName="SimpleGrid";function HF(e){return typeof e=="number"?`${e}px`:e}function UF(e,t){return Yn(e,n=>{const r=R7("sizes",n,HF(n))(t);return n===null?null:`repeat(auto-fit, minmax(${r}, 1fr))`})}function GF(e){return Yn(e,t=>t===null?null:`repeat(${t}, minmax(0, 1fr))`)}var KF=D("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});KF.displayName="Spacer";var Dc="& > *:not(style) ~ *:not(style)";function YF(e){const{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[Dc]:Yn(n,o=>r[o])}}function ZF(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Yn(n,o=>r[o])}}var H1=e=>B.createElement(D.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});H1.displayName="StackItem";var Ef=H((e,t)=>{const{isInline:n,direction:r,align:o,justify:a,spacing:i="0.5rem",wrap:s,children:l,divider:u,className:c,shouldWrapChildren:d,...f}=e,m=n?"row":r!=null?r:"column",b=k.exports.useMemo(()=>YF({direction:m,spacing:i}),[m,i]),v=k.exports.useMemo(()=>ZF({spacing:i,direction:m}),[i,m]),C=!!u,h=!d&&!C,p=k.exports.useMemo(()=>{const x=M1(l);return h?x:x.map((_,A)=>{const F=typeof _.key<"u"?_.key:A,E=A+1===x.length,V=d?q(H1,{children:_},F):_;if(!C)return V;const xe=k.exports.cloneElement(u,{__css:v}),ze=E?null:xe;return Qn(k.exports.Fragment,{children:[V,ze]},F)})},[u,v,C,h,d,l]),g=Ze("chakra-stack",c);return B.createElement(D.div,{ref:t,display:"flex",alignItems:o,justifyContent:a,flexDirection:b.flexDirection,flexWrap:s,className:g,__css:C?{}:{[Dc]:b[Dc]},...f},p)});Ef.displayName="Stack";var XF=H((e,t)=>q(Ef,{align:"center",...e,direction:"row",ref:t}));XF.displayName="HStack";var QF=H((e,t)=>q(Ef,{align:"center",...e,direction:"column",ref:t}));QF.displayName="VStack";var JF=H(function(t,n){const r=At("Text",t),{className:o,align:a,decoration:i,casing:s,...l}=mt(t),u=B1({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return B.createElement(D.p,{ref:n,className:Ze("chakra-text",t.className),...u,...l,__css:r})});JF.displayName="Text";function Y0(e){return typeof e=="number"?`${e}px`:e}var eA=H(function(t,n){const{spacing:r="0.5rem",spacingX:o,spacingY:a,children:i,justify:s,direction:l,align:u,className:c,shouldWrapChildren:d,...f}=t,m=k.exports.useMemo(()=>{const{spacingX:v=r,spacingY:C=r}={spacingX:o,spacingY:a};return{"--chakra-wrap-x-spacing":h=>Yn(v,p=>Y0(pc("space",p)(h))),"--chakra-wrap-y-spacing":h=>Yn(C,p=>Y0(pc("space",p)(h))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:s,alignItems:u,flexDirection:l,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[r,o,a,s,u,l]),b=k.exports.useMemo(()=>d?k.exports.Children.map(i,(v,C)=>q(U1,{children:v},C)):i,[i,d]);return B.createElement(D.div,{ref:n,className:Ze("chakra-wrap",c),overflow:"hidden",...f},B.createElement(D.ul,{className:"chakra-wrap__list",__css:m},b))});eA.displayName="Wrap";var U1=H(function(t,n){const{className:r,...o}=t;return B.createElement(D.li,{ref:n,__css:{display:"flex",alignItems:"flex-start"},className:Ze("chakra-wrap__listitem",r),...o})});U1.displayName="WrapItem";var tA={body:{classList:{add(){},remove(){}}},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}}},G1=tA,Mr=()=>{},nA={document:G1,navigator:{userAgent:""},CustomEvent:function(){return this},addEventListener:Mr,removeEventListener:Mr,getComputedStyle(){return{getPropertyValue(){return""}}},matchMedia(){return{matches:!1,addListener:Mr,removeListener:Mr}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)},setTimeout:()=>0,clearTimeout:Mr,setInterval:()=>0,clearInterval:Mr},rA=nA,oA={window:rA,document:G1},K1=typeof window<"u"?{window,document}:oA,Y1=k.exports.createContext(K1);Y1.displayName="EnvironmentContext";function Z1(e){const{children:t,environment:n}=e,[r,o]=k.exports.useState(null),[a,i]=k.exports.useState(!1);k.exports.useEffect(()=>i(!0),[]);const s=k.exports.useMemo(()=>{if(n)return n;const l=r==null?void 0:r.ownerDocument,u=r==null?void 0:r.ownerDocument.defaultView;return l?{document:l,window:u}:K1},[r,n]);return Qn(Y1.Provider,{value:s,children:[t,!n&&a&&q("span",{id:"__chakra_env",hidden:!0,ref:l=>{k.exports.startTransition(()=>{l&&o(l)})}})]})}Z1.displayName="EnvironmentProvider";var jl={exports:{}},ht={},X1={exports:{}},Q1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,N){var O=I.length;I.push(N);e:for(;0<O;){var me=O-1>>>1,Ce=I[me];if(0<o(Ce,N))I[me]=N,I[O]=Ce,O=me;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var N=I[0],O=I.pop();if(O!==N){I[0]=O;e:for(var me=0,Ce=I.length,Q=Ce>>>1;me<Q;){var Wt=2*(me+1)-1,zo=I[Wt],at=Wt+1,nr=I[at];if(0>o(zo,O))at<Ce&&0>o(nr,zo)?(I[me]=nr,I[at]=O,me=at):(I[me]=zo,I[Wt]=O,me=Wt);else if(at<Ce&&0>o(nr,O))I[me]=nr,I[at]=O,me=at;else break e}}return N}function o(I,N){var O=I.sortIndex-N.sortIndex;return O!==0?O:I.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],c=1,d=null,f=3,m=!1,b=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=I)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function x(I){if(v=!1,g(I),!b)if(n(l)!==null)b=!0,we(_);else{var N=n(u);N!==null&&Pt(x,N.startTime-I)}}function _(I,N){b=!1,v&&(v=!1,h(E),E=-1),m=!0;var O=f;try{for(g(N),d=n(l);d!==null&&(!(d.expirationTime>N)||I&&!xe());){var me=d.callback;if(typeof me=="function"){d.callback=null,f=d.priorityLevel;var Ce=me(d.expirationTime<=N);N=e.unstable_now(),typeof Ce=="function"?d.callback=Ce:d===n(l)&&r(l),g(N)}else r(l);d=n(l)}if(d!==null)var Q=!0;else{var Wt=n(u);Wt!==null&&Pt(x,Wt.startTime-N),Q=!1}return Q}finally{d=null,f=O,m=!1}}var A=!1,F=null,E=-1,L=5,V=-1;function xe(){return!(e.unstable_now()-V<L)}function ze(){if(F!==null){var I=e.unstable_now();V=I;var N=!0;try{N=F(!0,I)}finally{N?bt():(A=!1,F=null)}}else A=!1}var bt;if(typeof p=="function")bt=function(){p(ze)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,$t=Dt.port2;Dt.port1.onmessage=ze,bt=function(){$t.postMessage(null)}}else bt=function(){C(ze,0)};function we(I){F=I,A||(A=!0,bt())}function Pt(I,N){E=C(function(){I(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){b||m||(b=!0,we(_))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var O=f;f=N;try{return I()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,N){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var O=f;f=I;try{return N()}finally{f=O}},e.unstable_scheduleCallback=function(I,N,O){var me=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?me+O:me):O=me,I){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=O+Ce,I={id:c++,callback:N,priorityLevel:I,startTime:O,expirationTime:Ce,sortIndex:-1},O>me?(I.sortIndex=O,t(u,I),n(l)===null&&I===n(u)&&(v?(h(E),E=-1):v=!0,Pt(x,O-me))):(I.sortIndex=Ce,t(l,I),b||m||(b=!0,we(_))),I},e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(I){var N=f;return function(){var O=f;f=N;try{return I.apply(this,arguments)}finally{f=O}}}})(Q1);(function(e){e.exports=Q1})(X1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1=k.exports,pt=X1.exports;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eb=new Set,Ba={};function qr(e,t){vo(e,t),vo(e+"Capture",t)}function vo(e,t){for(Ba[e]=t,e=0;e<t.length;e++)eb.add(t[e])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=Object.prototype.hasOwnProperty,aA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Z0={},X0={};function iA(e){return $c.call(X0,e)?!0:$c.call(Z0,e)?!1:aA.test(e)?X0[e]=!0:(Z0[e]=!0,!1)}function sA(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lA(e,t,n,r){if(t===null||typeof t>"u"||sA(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var qf=/[\-:]([a-z])/g;function If(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qf,If);Le[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qf,If);Le[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qf,If);Le[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function zf(e,t,n,r){var o=Le.hasOwnProperty(t)?Le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lA(t,n,o,r)&&(n=null),r||o===null?iA(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tn=J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mi=Symbol.for("react.element"),Dr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),tb=Symbol.for("react.provider"),nb=Symbol.for("react.context"),Vf=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Uc=Symbol.for("react.suspense_list"),Mf=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),rb=Symbol.for("react.offscreen"),Q0=Symbol.iterator;function $o(e){return e===null||typeof e!="object"?null:(e=Q0&&e[Q0]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,Nu;function ea(e){if(Nu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nu=t&&t[1]||""}return`
`+Nu+e}var Ou=!1;function Du(e,t){if(!e||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ea(e):""}function uA(e){switch(e.tag){case 5:return ea(e.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return e=Du(e.type,!1),e;case 11:return e=Du(e.type.render,!1),e;case 1:return e=Du(e.type,!0),e;default:return""}}function Gc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $r:return"Fragment";case Dr:return"Portal";case Wc:return"Profiler";case Rf:return"StrictMode";case Hc:return"Suspense";case Uc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nb:return(e.displayName||"Context")+".Consumer";case tb:return(e._context.displayName||"Context")+".Provider";case Vf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mf:return t=e.displayName||null,t!==null?t:Gc(e.type)||"Memo";case In:t=e._payload,e=e._init;try{return Gc(e(t))}catch{}}return null}function cA(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gc(t);case 8:return t===Rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ob(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dA(e){var t=ob(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ji(e){e._valueTracker||(e._valueTracker=dA(e))}function ab(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ob(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kc(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function J0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ib(e,t){t=t.checked,t!=null&&zf(e,"checked",t,!1)}function Yc(e,t){ib(e,t);var n=Zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zc(e,t.type,Zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zc(e,t,n){(t!=="number"||Ls(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ta=Array.isArray;function uo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(ta(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zn(n)}}function sb(e,t){var n=Zn(t.value),r=Zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ng(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lb(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,ub=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fA=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(e){fA.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ha[t]=ha[e]})});function cb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ha.hasOwnProperty(e)&&ha[e]?(""+t).trim():t+"px"}function db(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=cb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var pA=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jc(e,t){if(t){if(pA[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function ed(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var td=null;function jf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nd=null,co=null,fo=null;function rg(e){if(e=di(e)){if(typeof nd!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Dl(t),nd(e.stateNode,e.type,t))}}function fb(e){co?fo?fo.push(e):fo=[e]:co=e}function pb(){if(co){var e=co,t=fo;if(fo=co=null,rg(e),t)for(e=0;e<t.length;e++)rg(t[e])}}function mb(e,t){return e(t)}function gb(){}var $u=!1;function hb(e,t,n){if($u)return e(t,n);$u=!0;try{return mb(e,t,n)}finally{$u=!1,(co!==null||fo!==null)&&(gb(),pb())}}function Oa(e,t){var n=e.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var rd=!1;if(Sn)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){rd=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{rd=!1}function mA(e,t,n,r,o,a,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ya=!1,Bs=null,Ns=!1,od=null,gA={onError:function(e){ya=!0,Bs=e}};function hA(e,t,n,r,o,a,i,s,l){ya=!1,Bs=null,mA.apply(gA,arguments)}function yA(e,t,n,r,o,a,i,s,l){if(hA.apply(this,arguments),ya){if(ya){var u=Bs;ya=!1,Bs=null}else throw Error(P(198));Ns||(Ns=!0,od=u)}}function Ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function og(e){if(Ir(e)!==e)throw Error(P(188))}function bA(e){var t=e.alternate;if(!t){if(t=Ir(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return og(o),e;if(a===r)return og(o),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function bb(e){return e=bA(e),e!==null?vb(e):null}function vb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vb(e);if(t!==null)return t;e=e.sibling}return null}var wb=pt.unstable_scheduleCallback,ag=pt.unstable_cancelCallback,vA=pt.unstable_shouldYield,wA=pt.unstable_requestPaint,Se=pt.unstable_now,SA=pt.unstable_getCurrentPriorityLevel,Lf=pt.unstable_ImmediatePriority,Sb=pt.unstable_UserBlockingPriority,Os=pt.unstable_NormalPriority,xA=pt.unstable_LowPriority,xb=pt.unstable_IdlePriority,Ll=null,on=null;function CA(e){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Ll,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:_A,kA=Math.log,TA=Math.LN2;function _A(e){return e>>>=0,e===0?32:31-(kA(e)/TA|0)|0}var Bi=64,Ni=4194304;function na(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ds(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=na(s):(a&=i,a!==0&&(r=na(a)))}else i=n&~o,i!==0?r=na(i):a!==0&&(r=na(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Bt(t),o=1<<n,r|=e[n],t&=~o;return r}function FA(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AA(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Bt(a),s=1<<i,l=o[i];l===-1?((s&n)===0||(s&r)!==0)&&(o[i]=FA(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function ad(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cb(){var e=Bi;return Bi<<=1,(Bi&4194240)===0&&(Bi=64),e}function Wu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ui(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=n}function PA(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Bt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Bf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function kb(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Tb,Nf,_b,Fb,Ab,id=!1,Oi=[],Nn=null,On=null,Dn=null,Da=new Map,$a=new Map,Vn=[],EA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ig(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Da.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(t.pointerId)}}function Ho(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=di(t),t!==null&&Nf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function qA(e,t,n,r,o){switch(t){case"focusin":return Nn=Ho(Nn,e,t,n,r,o),!0;case"dragenter":return On=Ho(On,e,t,n,r,o),!0;case"mouseover":return Dn=Ho(Dn,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Da.set(a,Ho(Da.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,$a.set(a,Ho($a.get(a)||null,e,t,n,r,o)),!0}return!1}function Pb(e){var t=hr(e.target);if(t!==null){var n=Ir(t);if(n!==null){if(t=n.tag,t===13){if(t=yb(n),t!==null){e.blockedOn=t,Ab(e.priority,function(){_b(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);td=r,n.target.dispatchEvent(r),td=null}else return t=di(n),t!==null&&Nf(t),e.blockedOn=n,!1;t.shift()}return!0}function sg(e,t,n){us(e)&&n.delete(t)}function IA(){id=!1,Nn!==null&&us(Nn)&&(Nn=null),On!==null&&us(On)&&(On=null),Dn!==null&&us(Dn)&&(Dn=null),Da.forEach(sg),$a.forEach(sg)}function Uo(e,t){e.blockedOn===t&&(e.blockedOn=null,id||(id=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,IA)))}function Wa(e){function t(o){return Uo(o,e)}if(0<Oi.length){Uo(Oi[0],e);for(var n=1;n<Oi.length;n++){var r=Oi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nn!==null&&Uo(Nn,e),On!==null&&Uo(On,e),Dn!==null&&Uo(Dn,e),Da.forEach(t),$a.forEach(t),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)Pb(n),n.blockedOn===null&&Vn.shift()}var po=Tn.ReactCurrentBatchConfig,$s=!0;function zA(e,t,n,r){var o=te,a=po.transition;po.transition=null;try{te=1,Of(e,t,n,r)}finally{te=o,po.transition=a}}function RA(e,t,n,r){var o=te,a=po.transition;po.transition=null;try{te=4,Of(e,t,n,r)}finally{te=o,po.transition=a}}function Of(e,t,n,r){if($s){var o=sd(e,t,n,r);if(o===null)ec(e,t,r,Ws,n),ig(e,r);else if(qA(o,e,t,n,r))r.stopPropagation();else if(ig(e,r),t&4&&-1<EA.indexOf(e)){for(;o!==null;){var a=di(o);if(a!==null&&Tb(a),a=sd(e,t,n,r),a===null&&ec(e,t,r,Ws,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else ec(e,t,r,null,n)}}var Ws=null;function sd(e,t,n,r){if(Ws=null,e=jf(r),e=hr(e),e!==null)if(t=Ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ws=e,null}function Eb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SA()){case Lf:return 1;case Sb:return 4;case Os:case xA:return 16;case xb:return 536870912;default:return 16}default:return 16}}var Ln=null,Df=null,cs=null;function qb(){if(cs)return cs;var e,t=Df,n=t.length,r,o="value"in Ln?Ln.value:Ln.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return cs=o.slice(e,1<r?1-r:void 0)}function ds(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function lg(){return!1}function yt(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Di:lg,this.isPropagationStopped=lg,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=yt(qo),ci=ye({},qo,{view:0,detail:0}),VA=yt(ci),Hu,Uu,Go,Bl=ye({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Go&&(Go&&e.type==="mousemove"?(Hu=e.screenX-Go.screenX,Uu=e.screenY-Go.screenY):Uu=Hu=0,Go=e),Hu)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),ug=yt(Bl),MA=ye({},Bl,{dataTransfer:0}),jA=yt(MA),LA=ye({},ci,{relatedTarget:0}),Gu=yt(LA),BA=ye({},qo,{animationName:0,elapsedTime:0,pseudoElement:0}),NA=yt(BA),OA=ye({},qo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),DA=yt(OA),$A=ye({},qo,{data:0}),cg=yt($A),WA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=UA[e])?!!t[e]:!1}function Wf(){return GA}var KA=ye({},ci,{key:function(e){if(e.key){var t=WA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ds(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?HA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wf,charCode:function(e){return e.type==="keypress"?ds(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ds(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),YA=yt(KA),ZA=ye({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dg=yt(ZA),XA=ye({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wf}),QA=yt(XA),JA=ye({},qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),eP=yt(JA),tP=ye({},Bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nP=yt(tP),rP=[9,13,27,32],Hf=Sn&&"CompositionEvent"in window,ba=null;Sn&&"documentMode"in document&&(ba=document.documentMode);var oP=Sn&&"TextEvent"in window&&!ba,Ib=Sn&&(!Hf||ba&&8<ba&&11>=ba),fg=String.fromCharCode(32),pg=!1;function zb(e,t){switch(e){case"keyup":return rP.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function aP(e,t){switch(e){case"compositionend":return Rb(t);case"keypress":return t.which!==32?null:(pg=!0,fg);case"textInput":return e=t.data,e===fg&&pg?null:e;default:return null}}function iP(e,t){if(Wr)return e==="compositionend"||!Hf&&zb(e,t)?(e=qb(),cs=Df=Ln=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ib&&t.locale!=="ko"?null:t.data;default:return null}}var sP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sP[e.type]:t==="textarea"}function Vb(e,t,n,r){fb(r),t=Hs(t,"onChange"),0<t.length&&(n=new $f("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var va=null,Ha=null;function lP(e){Ub(e,0)}function Nl(e){var t=Gr(e);if(ab(t))return e}function uP(e,t){if(e==="change")return t}var Mb=!1;if(Sn){var Ku;if(Sn){var Yu="oninput"in document;if(!Yu){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),Yu=typeof gg.oninput=="function"}Ku=Yu}else Ku=!1;Mb=Ku&&(!document.documentMode||9<document.documentMode)}function hg(){va&&(va.detachEvent("onpropertychange",jb),Ha=va=null)}function jb(e){if(e.propertyName==="value"&&Nl(Ha)){var t=[];Vb(t,Ha,e,jf(e)),hb(lP,t)}}function cP(e,t,n){e==="focusin"?(hg(),va=t,Ha=n,va.attachEvent("onpropertychange",jb)):e==="focusout"&&hg()}function dP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(Ha)}function fP(e,t){if(e==="click")return Nl(t)}function pP(e,t){if(e==="input"||e==="change")return Nl(t)}function mP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:mP;function Ua(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!$c.call(t,o)||!Ot(e[o],t[o]))return!1}return!0}function yg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bg(e,t){var n=yg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yg(n)}}function Lb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bb(){for(var e=window,t=Ls();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ls(e.document)}return t}function Uf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gP(e){var t=Bb(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lb(n.ownerDocument.documentElement,n)){if(r!==null&&Uf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=bg(n,a);var i=bg(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hP=Sn&&"documentMode"in document&&11>=document.documentMode,Hr=null,ld=null,wa=null,ud=!1;function vg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ud||Hr==null||Hr!==Ls(r)||(r=Hr,"selectionStart"in r&&Uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wa&&Ua(wa,r)||(wa=r,r=Hs(ld,"onSelect"),0<r.length&&(t=new $f("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hr)))}function $i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ur={animationend:$i("Animation","AnimationEnd"),animationiteration:$i("Animation","AnimationIteration"),animationstart:$i("Animation","AnimationStart"),transitionend:$i("Transition","TransitionEnd")},Zu={},Nb={};Sn&&(Nb=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Ol(e){if(Zu[e])return Zu[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nb)return Zu[e]=t[n];return e}var Ob=Ol("animationend"),Db=Ol("animationiteration"),$b=Ol("animationstart"),Wb=Ol("transitionend"),Hb=new Map,wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,t){Hb.set(e,t),qr(t,[e])}for(var Xu=0;Xu<wg.length;Xu++){var Qu=wg[Xu],yP=Qu.toLowerCase(),bP=Qu[0].toUpperCase()+Qu.slice(1);Jn(yP,"on"+bP)}Jn(Ob,"onAnimationEnd");Jn(Db,"onAnimationIteration");Jn($b,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(Wb,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vP=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Sg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yA(r,t,void 0,e),e.currentTarget=null}function Ub(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&o.isPropagationStopped())break e;Sg(o,s,u),a=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&o.isPropagationStopped())break e;Sg(o,s,u),a=l}}}if(Ns)throw e=od,Ns=!1,od=null,e}function se(e,t){var n=t[md];n===void 0&&(n=t[md]=new Set);var r=e+"__bubble";n.has(r)||(Gb(t,e,2,!1),n.add(r))}function Ju(e,t,n){var r=0;t&&(r|=4),Gb(n,e,r,t)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function Ga(e){if(!e[Wi]){e[Wi]=!0,eb.forEach(function(n){n!=="selectionchange"&&(vP.has(n)||Ju(n,!1,e),Ju(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wi]||(t[Wi]=!0,Ju("selectionchange",!1,t))}}function Gb(e,t,n,r){switch(Eb(t)){case 1:var o=zA;break;case 4:o=RA;break;default:o=Of}n=o.bind(null,t,n,e),o=void 0,!rd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ec(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;s!==null;){if(i=hr(s),i===null)return;if(l=i.tag,l===5||l===6){r=a=i;continue e}s=s.parentNode}}r=r.return}hb(function(){var u=a,c=jf(n),d=[];e:{var f=Hb.get(e);if(f!==void 0){var m=$f,b=e;switch(e){case"keypress":if(ds(n)===0)break e;case"keydown":case"keyup":m=YA;break;case"focusin":b="focus",m=Gu;break;case"focusout":b="blur",m=Gu;break;case"beforeblur":case"afterblur":m=Gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=jA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=QA;break;case Ob:case Db:case $b:m=NA;break;case Wb:m=eP;break;case"scroll":m=VA;break;case"wheel":m=nP;break;case"copy":case"cut":case"paste":m=DA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=dg}var v=(t&4)!==0,C=!v&&e==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var p=u,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=Oa(p,h),x!=null&&v.push(Ka(p,x,g)))),C)break;p=p.return}0<v.length&&(f=new m(f,b,null,n,c),d.push({event:f,listeners:v}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==td&&(b=n.relatedTarget||n.fromElement)&&(hr(b)||b[xn]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(b=n.relatedTarget||n.toElement,m=u,b=b?hr(b):null,b!==null&&(C=Ir(b),b!==C||b.tag!==5&&b.tag!==6)&&(b=null)):(m=null,b=u),m!==b)){if(v=ug,x="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=dg,x="onPointerLeave",h="onPointerEnter",p="pointer"),C=m==null?f:Gr(m),g=b==null?f:Gr(b),f=new v(x,p+"leave",m,n,c),f.target=C,f.relatedTarget=g,x=null,hr(c)===u&&(v=new v(h,p+"enter",b,n,c),v.target=g,v.relatedTarget=C,x=v),C=x,m&&b)t:{for(v=m,h=b,p=0,g=v;g;g=jr(g))p++;for(g=0,x=h;x;x=jr(x))g++;for(;0<p-g;)v=jr(v),p--;for(;0<g-p;)h=jr(h),g--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=jr(v),h=jr(h)}v=null}else v=null;m!==null&&xg(d,f,m,v,!1),b!==null&&C!==null&&xg(d,C,b,v,!0)}}e:{if(f=u?Gr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var _=uP;else if(mg(f))if(Mb)_=pP;else{_=dP;var A=cP}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=fP);if(_&&(_=_(e,u))){Vb(d,_,n,c);break e}A&&A(e,f,u),e==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Zc(f,"number",f.value)}switch(A=u?Gr(u):window,e){case"focusin":(mg(A)||A.contentEditable==="true")&&(Hr=A,ld=u,wa=null);break;case"focusout":wa=ld=Hr=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,vg(d,n,c);break;case"selectionchange":if(hP)break;case"keydown":case"keyup":vg(d,n,c)}var F;if(Hf)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Wr?zb(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ib&&n.locale!=="ko"&&(Wr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Wr&&(F=qb()):(Ln=c,Df="value"in Ln?Ln.value:Ln.textContent,Wr=!0)),A=Hs(u,E),0<A.length&&(E=new cg(E,e,null,n,c),d.push({event:E,listeners:A}),F?E.data=F:(F=Rb(n),F!==null&&(E.data=F)))),(F=oP?aP(e,n):iP(e,n))&&(u=Hs(u,"onBeforeInput"),0<u.length&&(c=new cg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=F))}Ub(d,t)})}function Ka(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hs(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Oa(e,n),a!=null&&r.unshift(Ka(e,a,o)),a=Oa(e,t),a!=null&&r.push(Ka(e,a,o))),e=e.return}return r}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xg(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Oa(n,a),l!=null&&i.unshift(Ka(n,l,s))):o||(l=Oa(n,a),l!=null&&i.push(Ka(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var wP=/\r\n?/g,SP=/\u0000|\uFFFD/g;function Cg(e){return(typeof e=="string"?e:""+e).replace(wP,`
`).replace(SP,"")}function Hi(e,t,n){if(t=Cg(t),Cg(e)!==t&&n)throw Error(P(425))}function Us(){}var cd=null,dd=null;function fd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pd=typeof setTimeout=="function"?setTimeout:void 0,xP=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,CP=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(e){return kg.resolve(null).then(e).catch(kP)}:pd;function kP(e){setTimeout(function(){throw e})}function tc(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Wa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Wa(t)}function $n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Io=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Io,Ya="__reactProps$"+Io,xn="__reactContainer$"+Io,md="__reactEvents$"+Io,TP="__reactListeners$"+Io,_P="__reactHandles$"+Io;function hr(e){var t=e[Qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xn]||n[Qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tg(e);e!==null;){if(n=e[Qt])return n;e=Tg(e)}return t}e=n,n=e.parentNode}return null}function di(e){return e=e[Qt]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Dl(e){return e[Ya]||null}var gd=[],Kr=-1;function er(e){return{current:e}}function ue(e){0>Kr||(e.current=gd[Kr],gd[Kr]=null,Kr--)}function ie(e,t){Kr++,gd[Kr]=e.current,e.current=t}var Xn={},$e=er(Xn),tt=er(!1),kr=Xn;function wo(e,t){var n=e.type.contextTypes;if(!n)return Xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function nt(e){return e=e.childContextTypes,e!=null}function Gs(){ue(tt),ue($e)}function _g(e,t,n){if($e.current!==Xn)throw Error(P(168));ie($e,t),ie(tt,n)}function Kb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,cA(e)||"Unknown",o));return ye({},n,r)}function Ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xn,kr=$e.current,ie($e,e),ie(tt,tt.current),!0}function Fg(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Kb(e,t,kr),r.__reactInternalMemoizedMergedChildContext=e,ue(tt),ue($e),ie($e,e)):ue(tt),ie(tt,n)}var pn=null,$l=!1,nc=!1;function Yb(e){pn===null?pn=[e]:pn.push(e)}function FP(e){$l=!0,Yb(e)}function tr(){if(!nc&&pn!==null){nc=!0;var e=0,t=te;try{var n=pn;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pn=null,$l=!1}catch(o){throw pn!==null&&(pn=pn.slice(e+1)),wb(Lf,tr),o}finally{te=t,nc=!1}}return null}var Yr=[],Zr=0,Ys=null,Zs=0,St=[],xt=0,Tr=null,hn=1,yn="";function ur(e,t){Yr[Zr++]=Zs,Yr[Zr++]=Ys,Ys=e,Zs=t}function Zb(e,t,n){St[xt++]=hn,St[xt++]=yn,St[xt++]=Tr,Tr=e;var r=hn;e=yn;var o=32-Bt(r)-1;r&=~(1<<o),n+=1;var a=32-Bt(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,hn=1<<32-Bt(t)+o|n<<o|r,yn=a+e}else hn=1<<a|n<<o|r,yn=e}function Gf(e){e.return!==null&&(ur(e,1),Zb(e,1,0))}function Kf(e){for(;e===Ys;)Ys=Yr[--Zr],Yr[Zr]=null,Zs=Yr[--Zr],Yr[Zr]=null;for(;e===Tr;)Tr=St[--xt],St[xt]=null,yn=St[--xt],St[xt]=null,hn=St[--xt],St[xt]=null}var dt=null,lt=null,pe=!1,Mt=null;function Xb(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ag(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,lt=$n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tr!==null?{id:hn,overflow:yn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,lt=null,!0):!1;default:return!1}}function hd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yd(e){if(pe){var t=lt;if(t){var n=t;if(!Ag(e,t)){if(hd(e))throw Error(P(418));t=$n(n.nextSibling);var r=dt;t&&Ag(e,t)?Xb(r,n):(e.flags=e.flags&-4097|2,pe=!1,dt=e)}}else{if(hd(e))throw Error(P(418));e.flags=e.flags&-4097|2,pe=!1,dt=e}}}function Pg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Ui(e){if(e!==dt)return!1;if(!pe)return Pg(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fd(e.type,e.memoizedProps)),t&&(t=lt)){if(hd(e))throw Qb(),Error(P(418));for(;t;)Xb(e,t),t=$n(t.nextSibling)}if(Pg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=$n(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=dt?$n(e.stateNode.nextSibling):null;return!0}function Qb(){for(var e=lt;e;)e=$n(e.nextSibling)}function So(){lt=dt=null,pe=!1}function Yf(e){Mt===null?Mt=[e]:Mt.push(e)}var AP=Tn.ReactCurrentBatchConfig;function Rt(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Xs=er(null),Qs=null,Xr=null,Zf=null;function Xf(){Zf=Xr=Qs=null}function Qf(e){var t=Xs.current;ue(Xs),e._currentValue=t}function bd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mo(e,t){Qs=e,Zf=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(et=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(Zf!==e)if(e={context:e,memoizedValue:t,next:null},Xr===null){if(Qs===null)throw Error(P(308));Xr=e,Qs.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return t}var yr=null;function Jf(e){yr===null?yr=[e]:yr.push(e)}function Jb(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Jf(t)):(n.next=o.next,o.next=n),t.interleaved=n,Cn(e,r)}function Cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zn=!1;function ep(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ev(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Cn(e,n)}return o=r.interleaved,o===null?(t.next=t,Jf(r)):(t.next=o.next,o.next=t),r.interleaved=t,Cn(e,n)}function fs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bf(e,n)}}function Eg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Js(e,t,n,r){var o=e.updateQueue;zn=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?a=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=o.baseState;i=0,c=u=l=null,s=a;do{var f=s.lane,m=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,v=s;switch(f=t,m=n,v.tag){case 1:if(b=v.payload,typeof b=="function"){d=b.call(m,d,f);break e}d=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=v.payload,f=typeof b=="function"?b.call(m,d,f):b,f==null)break e;d=ye({},d,f);break e;case 2:zn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else m={eventTime:m,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,i|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Fr|=i,e.lanes=i,e.memoizedState=d}}function qg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var tv=new J1.Component().refs;function vd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wl={isMounted:function(e){return(e=e._reactInternals)?Ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),o=Un(e),a=bn(r,o);a.payload=t,n!=null&&(a.callback=n),t=Wn(e,a,o),t!==null&&(Nt(t,e,o,r),fs(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),o=Un(e),a=bn(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Wn(e,a,o),t!==null&&(Nt(t,e,o,r),fs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=Un(e),o=bn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wn(e,o,r),t!==null&&(Nt(t,e,r,n),fs(t,e,r))}};function Ig(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!Ua(n,r)||!Ua(o,a):!0}function nv(e,t,n){var r=!1,o=Xn,a=t.contextType;return typeof a=="object"&&a!==null?a=_t(a):(o=nt(t)?kr:$e.current,r=t.contextTypes,a=(r=r!=null)?wo(e,o):Xn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function zg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wl.enqueueReplaceState(t,t.state,null)}function wd(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=tv,ep(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=_t(a):(a=nt(t)?kr:$e.current,o.context=wo(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(vd(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Wl.enqueueReplaceState(o,o.state,null),Js(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ko(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;s===tv&&(s=o.refs={}),i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Gi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rg(e){var t=e._init;return t(e._payload)}function rv(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=Gn(h,p),h.index=0,h.sibling=null,h}function a(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,g,x){return p===null||p.tag!==6?(p=uc(g,h.mode,x),p.return=h,p):(p=o(p,g),p.return=h,p)}function l(h,p,g,x){var _=g.type;return _===$r?c(h,p,g.props.children,x,g.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===In&&Rg(_)===p.type)?(x=o(p,g.props),x.ref=Ko(h,p,g),x.return=h,x):(x=bs(g.type,g.key,g.props,null,h.mode,x),x.ref=Ko(h,p,g),x.return=h,x)}function u(h,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=cc(g,h.mode,x),p.return=h,p):(p=o(p,g.children||[]),p.return=h,p)}function c(h,p,g,x,_){return p===null||p.tag!==7?(p=Cr(g,h.mode,x,_),p.return=h,p):(p=o(p,g),p.return=h,p)}function d(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=uc(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Mi:return g=bs(p.type,p.key,p.props,null,h.mode,g),g.ref=Ko(h,null,p),g.return=h,g;case Dr:return p=cc(p,h.mode,g),p.return=h,p;case In:var x=p._init;return d(h,x(p._payload),g)}if(ta(p)||$o(p))return p=Cr(p,h.mode,g,null),p.return=h,p;Gi(h,p)}return null}function f(h,p,g,x){var _=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:s(h,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mi:return g.key===_?l(h,p,g,x):null;case Dr:return g.key===_?u(h,p,g,x):null;case In:return _=g._init,f(h,p,_(g._payload),x)}if(ta(g)||$o(g))return _!==null?null:c(h,p,g,x,null);Gi(h,g)}return null}function m(h,p,g,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,s(p,h,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Mi:return h=h.get(x.key===null?g:x.key)||null,l(p,h,x,_);case Dr:return h=h.get(x.key===null?g:x.key)||null,u(p,h,x,_);case In:var A=x._init;return m(h,p,g,A(x._payload),_)}if(ta(x)||$o(x))return h=h.get(g)||null,c(p,h,x,_,null);Gi(p,x)}return null}function b(h,p,g,x){for(var _=null,A=null,F=p,E=p=0,L=null;F!==null&&E<g.length;E++){F.index>E?(L=F,F=null):L=F.sibling;var V=f(h,F,g[E],x);if(V===null){F===null&&(F=L);break}e&&F&&V.alternate===null&&t(h,F),p=a(V,p,E),A===null?_=V:A.sibling=V,A=V,F=L}if(E===g.length)return n(h,F),pe&&ur(h,E),_;if(F===null){for(;E<g.length;E++)F=d(h,g[E],x),F!==null&&(p=a(F,p,E),A===null?_=F:A.sibling=F,A=F);return pe&&ur(h,E),_}for(F=r(h,F);E<g.length;E++)L=m(F,h,E,g[E],x),L!==null&&(e&&L.alternate!==null&&F.delete(L.key===null?E:L.key),p=a(L,p,E),A===null?_=L:A.sibling=L,A=L);return e&&F.forEach(function(xe){return t(h,xe)}),pe&&ur(h,E),_}function v(h,p,g,x){var _=$o(g);if(typeof _!="function")throw Error(P(150));if(g=_.call(g),g==null)throw Error(P(151));for(var A=_=null,F=p,E=p=0,L=null,V=g.next();F!==null&&!V.done;E++,V=g.next()){F.index>E?(L=F,F=null):L=F.sibling;var xe=f(h,F,V.value,x);if(xe===null){F===null&&(F=L);break}e&&F&&xe.alternate===null&&t(h,F),p=a(xe,p,E),A===null?_=xe:A.sibling=xe,A=xe,F=L}if(V.done)return n(h,F),pe&&ur(h,E),_;if(F===null){for(;!V.done;E++,V=g.next())V=d(h,V.value,x),V!==null&&(p=a(V,p,E),A===null?_=V:A.sibling=V,A=V);return pe&&ur(h,E),_}for(F=r(h,F);!V.done;E++,V=g.next())V=m(F,h,E,V.value,x),V!==null&&(e&&V.alternate!==null&&F.delete(V.key===null?E:V.key),p=a(V,p,E),A===null?_=V:A.sibling=V,A=V);return e&&F.forEach(function(ze){return t(h,ze)}),pe&&ur(h,E),_}function C(h,p,g,x){if(typeof g=="object"&&g!==null&&g.type===$r&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mi:e:{for(var _=g.key,A=p;A!==null;){if(A.key===_){if(_=g.type,_===$r){if(A.tag===7){n(h,A.sibling),p=o(A,g.props.children),p.return=h,h=p;break e}}else if(A.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===In&&Rg(_)===A.type){n(h,A.sibling),p=o(A,g.props),p.ref=Ko(h,A,g),p.return=h,h=p;break e}n(h,A);break}else t(h,A);A=A.sibling}g.type===$r?(p=Cr(g.props.children,h.mode,x,g.key),p.return=h,h=p):(x=bs(g.type,g.key,g.props,null,h.mode,x),x.ref=Ko(h,p,g),x.return=h,h=x)}return i(h);case Dr:e:{for(A=g.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=o(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=cc(g,h.mode,x),p.return=h,h=p}return i(h);case In:return A=g._init,C(h,p,A(g._payload),x)}if(ta(g))return b(h,p,g,x);if($o(g))return v(h,p,g,x);Gi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,g),p.return=h,h=p):(n(h,p),p=uc(g,h.mode,x),p.return=h,h=p),i(h)):n(h,p)}return C}var xo=rv(!0),ov=rv(!1),fi={},an=er(fi),Za=er(fi),Xa=er(fi);function br(e){if(e===fi)throw Error(P(174));return e}function tp(e,t){switch(ie(Xa,t),ie(Za,e),ie(an,fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qc(t,e)}ue(an),ie(an,t)}function Co(){ue(an),ue(Za),ue(Xa)}function av(e){br(Xa.current);var t=br(an.current),n=Qc(t,e.type);t!==n&&(ie(Za,e),ie(an,n))}function np(e){Za.current===e&&(ue(an),ue(Za))}var ge=er(0);function el(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rc=[];function rp(){for(var e=0;e<rc.length;e++)rc[e]._workInProgressVersionPrimary=null;rc.length=0}var ps=Tn.ReactCurrentDispatcher,oc=Tn.ReactCurrentBatchConfig,_r=0,he=null,Fe=null,Ee=null,tl=!1,Sa=!1,Qa=0,PP=0;function Be(){throw Error(P(321))}function op(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function ap(e,t,n,r,o,a){if(_r=a,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ps.current=e===null||e.memoizedState===null?zP:RP,e=n(r,o),Sa){a=0;do{if(Sa=!1,Qa=0,25<=a)throw Error(P(301));a+=1,Ee=Fe=null,t.updateQueue=null,ps.current=VP,e=n(r,o)}while(Sa)}if(ps.current=nl,t=Fe!==null&&Fe.next!==null,_r=0,Ee=Fe=he=null,tl=!1,t)throw Error(P(300));return e}function ip(){var e=Qa!==0;return Qa=0,e}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?he.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function Ft(){if(Fe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Ee===null?he.memoizedState:Ee.next;if(t!==null)Ee=t,Fe=e;else{if(e===null)throw Error(P(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ee===null?he.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Ja(e,t){return typeof t=="function"?t(e):t}function ac(e){var t=Ft(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Fe,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=i=null,l=null,u=a;do{var c=u.lane;if((_r&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,i=r):l=l.next=d,he.lanes|=c,Fr|=c}u=u.next}while(u!==null&&u!==a);l===null?i=r:l.next=s,Ot(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,he.lanes|=a,Fr|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ic(e){var t=Ft(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Ot(a,t.memoizedState)||(et=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function iv(){}function sv(e,t){var n=he,r=Ft(),o=t(),a=!Ot(r.memoizedState,o);if(a&&(r.memoizedState=o,et=!0),r=r.queue,sp(cv.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,ei(9,uv.bind(null,n,r,o,t),void 0,null),qe===null)throw Error(P(349));(_r&30)!==0||lv(n,t,o)}return o}function lv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uv(e,t,n,r){t.value=n,t.getSnapshot=r,dv(t)&&fv(e)}function cv(e,t,n){return n(function(){dv(t)&&fv(e)})}function dv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function fv(e){var t=Cn(e,1);t!==null&&Nt(t,e,1,-1)}function Vg(e){var t=Kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:e},t.queue=e,e=e.dispatch=IP.bind(null,he,e),[t.memoizedState,e]}function ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pv(){return Ft().memoizedState}function ms(e,t,n,r){var o=Kt();he.flags|=e,o.memoizedState=ei(1|t,n,void 0,r===void 0?null:r)}function Hl(e,t,n,r){var o=Ft();r=r===void 0?null:r;var a=void 0;if(Fe!==null){var i=Fe.memoizedState;if(a=i.destroy,r!==null&&op(r,i.deps)){o.memoizedState=ei(t,n,a,r);return}}he.flags|=e,o.memoizedState=ei(1|t,n,a,r)}function Mg(e,t){return ms(8390656,8,e,t)}function sp(e,t){return Hl(2048,8,e,t)}function mv(e,t){return Hl(4,2,e,t)}function gv(e,t){return Hl(4,4,e,t)}function hv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yv(e,t,n){return n=n!=null?n.concat([e]):null,Hl(4,4,hv.bind(null,t,e),n)}function lp(){}function bv(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&op(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vv(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&op(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wv(e,t,n){return(_r&21)===0?(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n):(Ot(n,t)||(n=Cb(),he.lanes|=n,Fr|=n,e.baseState=!0),t)}function EP(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=oc.transition;oc.transition={};try{e(!1),t()}finally{te=n,oc.transition=r}}function Sv(){return Ft().memoizedState}function qP(e,t,n){var r=Un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xv(e))Cv(t,n);else if(n=Jb(e,t,n,r),n!==null){var o=Ke();Nt(n,e,r,o),kv(n,t,r)}}function IP(e,t,n){var r=Un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xv(e))Cv(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(o.hasEagerState=!0,o.eagerState=s,Ot(s,i)){var l=t.interleaved;l===null?(o.next=o,Jf(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Jb(e,t,o,r),n!==null&&(o=Ke(),Nt(n,e,r,o),kv(n,t,r))}}function xv(e){var t=e.alternate;return e===he||t!==null&&t===he}function Cv(e,t){Sa=tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kv(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bf(e,n)}}var nl={readContext:_t,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},zP={readContext:_t,useCallback:function(e,t){return Kt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Mg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ms(4194308,4,hv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return ms(4,2,e,t)},useMemo:function(e,t){var n=Kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qP.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Kt();return e={current:e},t.memoizedState=e},useState:Vg,useDebugValue:lp,useDeferredValue:function(e){return Kt().memoizedState=e},useTransition:function(){var e=Vg(!1),t=e[0];return e=EP.bind(null,e[1]),Kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,o=Kt();if(pe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),qe===null)throw Error(P(349));(_r&30)!==0||lv(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Mg(cv.bind(null,r,a,e),[e]),r.flags|=2048,ei(9,uv.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Kt(),t=qe.identifierPrefix;if(pe){var n=yn,r=hn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=PP++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},RP={readContext:_t,useCallback:bv,useContext:_t,useEffect:sp,useImperativeHandle:yv,useInsertionEffect:mv,useLayoutEffect:gv,useMemo:vv,useReducer:ac,useRef:pv,useState:function(){return ac(Ja)},useDebugValue:lp,useDeferredValue:function(e){var t=Ft();return wv(t,Fe.memoizedState,e)},useTransition:function(){var e=ac(Ja)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:iv,useSyncExternalStore:sv,useId:Sv,unstable_isNewReconciler:!1},VP={readContext:_t,useCallback:bv,useContext:_t,useEffect:sp,useImperativeHandle:yv,useInsertionEffect:mv,useLayoutEffect:gv,useMemo:vv,useReducer:ic,useRef:pv,useState:function(){return ic(Ja)},useDebugValue:lp,useDeferredValue:function(e){var t=Ft();return Fe===null?t.memoizedState=e:wv(t,Fe.memoizedState,e)},useTransition:function(){var e=ic(Ja)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:iv,useSyncExternalStore:sv,useId:Sv,unstable_isNewReconciler:!1};function ko(e,t){try{var n="",r=t;do n+=uA(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function sc(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Sd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var MP=typeof WeakMap=="function"?WeakMap:Map;function Tv(e,t,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ol||(ol=!0,qd=r),Sd(e,t)},n}function _v(e,t,n){n=bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Sd(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Sd(e,t),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function jg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new MP;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ZP.bind(null,e,t,n),t.then(e,e))}function Lg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bg(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bn(-1,1),t.tag=2,Wn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var jP=Tn.ReactCurrentOwner,et=!1;function He(e,t,n,r){t.child=e===null?ov(t,null,n,r):xo(t,e.child,n,r)}function Ng(e,t,n,r,o){n=n.render;var a=t.ref;return mo(t,o),r=ap(e,t,n,r,a,o),n=ip(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kn(e,t,o)):(pe&&n&&Gf(t),t.flags|=1,He(e,t,r,o),t.child)}function Og(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!hp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Fv(e,t,a,r,o)):(e=bs(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(i,r)&&e.ref===t.ref)return kn(e,t,o)}return t.flags|=1,e=Gn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Fv(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Ua(a,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,kn(e,t,o)}return xd(e,t,n,r,o)}function Av(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Jr,st),st|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(Jr,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ie(Jr,st),st|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ie(Jr,st),st|=r;return He(e,t,o,n),t.child}function Pv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xd(e,t,n,r,o){var a=nt(n)?kr:$e.current;return a=wo(t,a),mo(t,o),n=ap(e,t,n,r,a,o),r=ip(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kn(e,t,o)):(pe&&r&&Gf(t),t.flags|=1,He(e,t,n,o),t.child)}function Dg(e,t,n,r,o){if(nt(n)){var a=!0;Ks(t)}else a=!1;if(mo(t,o),t.stateNode===null)gs(e,t),nv(t,n,r),wd(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=nt(n)?kr:$e.current,u=wo(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&zg(t,i,r,u),zn=!1;var f=t.memoizedState;i.state=f,Js(t,r,i,o),l=t.memoizedState,s!==r||f!==l||tt.current||zn?(typeof c=="function"&&(vd(t,n,c,r),l=t.memoizedState),(s=zn||Ig(t,n,s,r,f,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ev(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Rt(t.type,s),i.props=u,d=t.pendingProps,f=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=_t(l):(l=nt(n)?kr:$e.current,l=wo(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||f!==l)&&zg(t,i,r,l),zn=!1,f=t.memoizedState,i.state=f,Js(t,r,i,o);var b=t.memoizedState;s!==d||f!==b||tt.current||zn?(typeof m=="function"&&(vd(t,n,m,r),b=t.memoizedState),(u=zn||Ig(t,n,u,r,f,b,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,b,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,b,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),i.props=r,i.state=b,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Cd(e,t,n,r,a,o)}function Cd(e,t,n,r,o,a){Pv(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Fg(t,n,!1),kn(e,t,a);r=t.stateNode,jP.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=xo(t,e.child,null,a),t.child=xo(t,null,s,a)):He(e,t,s,a),t.memoizedState=r.state,o&&Fg(t,n,!0),t.child}function Ev(e){var t=e.stateNode;t.pendingContext?_g(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_g(e,t.context,!1),tp(e,t.containerInfo)}function $g(e,t,n,r,o){return So(),Yf(o),t.flags|=256,He(e,t,n,r),t.child}var kd={dehydrated:null,treeContext:null,retryLane:0};function Td(e){return{baseLanes:e,cachePool:null,transitions:null}}function qv(e,t,n){var r=t.pendingProps,o=ge.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(ge,o&1),e===null)return yd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Kl(i,r,0,null),e=Cr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Td(n),t.memoizedState=kd,e):up(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return LP(e,t,i,r,s,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Gn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=Gn(s,a):(a=Cr(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Td(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=kd,r}return a=e.child,e=a.sibling,r=Gn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function up(e,t){return t=Kl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ki(e,t,n,r){return r!==null&&Yf(r),xo(t,e.child,null,n),e=up(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function LP(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=sc(Error(P(422))),Ki(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Kl({mode:"visible",children:r.children},o,0,null),a=Cr(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&xo(t,e.child,null,i),t.child.memoizedState=Td(i),t.memoizedState=kd,a);if((t.mode&1)===0)return Ki(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(P(419)),r=sc(a,r,void 0),Ki(e,t,i,r)}if(s=(i&e.childLanes)!==0,et||s){if(r=qe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Cn(e,o),Nt(r,e,o,-1))}return gp(),r=sc(Error(P(421))),Ki(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=XP.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,lt=$n(o.nextSibling),dt=t,pe=!0,Mt=null,e!==null&&(St[xt++]=hn,St[xt++]=yn,St[xt++]=Tr,hn=e.id,yn=e.overflow,Tr=t),t=up(t,r.children),t.flags|=4096,t)}function Wg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bd(e.return,t,n)}function lc(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Iv(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(He(e,t,r.children,n),r=ge.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wg(e,n,t);else if(e.tag===19)Wg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ge,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&el(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),lc(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&el(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}lc(t,!0,n,null,a);break;case"together":lc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function BP(e,t,n){switch(t.tag){case 3:Ev(t),So();break;case 5:av(t);break;case 1:nt(t.type)&&Ks(t);break;case 4:tp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ie(Xs,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ge,ge.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?qv(e,t,n):(ie(ge,ge.current&1),e=kn(e,t,n),e!==null?e.sibling:null);ie(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Iv(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,Av(e,t,n)}return kn(e,t,n)}var zv,_d,Rv,Vv;zv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};Rv=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,br(an.current);var a=null;switch(n){case"input":o=Kc(e,o),r=Kc(e,r),a=[];break;case"select":o=ye({},o,{value:void 0}),r=ye({},r,{value:void 0}),a=[];break;case"textarea":o=Xc(e,o),r=Xc(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Us)}Jc(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ba.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ba.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Vv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Yo(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function NP(e,t,n){var r=t.pendingProps;switch(Kf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return nt(t.type)&&Gs(),Ne(t),null;case 3:return r=t.stateNode,Co(),ue(tt),ue($e),rp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mt!==null&&(Rd(Mt),Mt=null))),_d(e,t),Ne(t),null;case 5:np(t);var o=br(Xa.current);if(n=t.type,e!==null&&t.stateNode!=null)Rv(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ne(t),null}if(e=br(an.current),Ui(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Qt]=t,r[Ya]=a,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(o=0;o<ra.length;o++)se(ra[o],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":J0(r,a),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},se("invalid",r);break;case"textarea":tg(r,a),se("invalid",r)}Jc(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Hi(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Hi(r.textContent,s,e),o=["children",""+s]):Ba.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&se("scroll",r)}switch(n){case"input":ji(r),eg(r,a,!0);break;case"textarea":ji(r),ng(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Us)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Qt]=t,e[Ya]=r,zv(e,t,!1,!1),t.stateNode=e;e:{switch(i=ed(n,r),n){case"dialog":se("cancel",e),se("close",e),o=r;break;case"iframe":case"object":case"embed":se("load",e),o=r;break;case"video":case"audio":for(o=0;o<ra.length;o++)se(ra[o],e);o=r;break;case"source":se("error",e),o=r;break;case"img":case"image":case"link":se("error",e),se("load",e),o=r;break;case"details":se("toggle",e),o=r;break;case"input":J0(e,r),o=Kc(e,r),se("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ye({},r,{value:void 0}),se("invalid",e);break;case"textarea":tg(e,r),o=Xc(e,r),se("invalid",e);break;default:o=r}Jc(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?db(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ub(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Na(e,l):typeof l=="number"&&Na(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ba.hasOwnProperty(a)?l!=null&&a==="onScroll"&&se("scroll",e):l!=null&&zf(e,a,l,i))}switch(n){case"input":ji(e),eg(e,r,!1);break;case"textarea":ji(e),ng(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?uo(e,!!r.multiple,a,!1):r.defaultValue!=null&&uo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Us)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)Vv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=br(Xa.current),br(an.current),Ui(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qt]=t,(a=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:Hi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hi(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=t,t.stateNode=r}return Ne(t),null;case 13:if(ue(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Qb(),So(),t.flags|=98560,a=!1;else if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[Qt]=t}else So(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),a=!1}else Mt!==null&&(Rd(Mt),Mt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ge.current&1)!==0?Ae===0&&(Ae=3):gp())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Co(),_d(e,t),e===null&&Ga(t.stateNode.containerInfo),Ne(t),null;case 10:return Qf(t.type._context),Ne(t),null;case 17:return nt(t.type)&&Gs(),Ne(t),null;case 19:if(ue(ge),a=t.memoizedState,a===null)return Ne(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Yo(a,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=el(e),i!==null){for(t.flags|=128,Yo(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ge,ge.current&1|2),t.child}e=e.sibling}a.tail!==null&&Se()>To&&(t.flags|=128,r=!0,Yo(a,!1),t.lanes=4194304)}else{if(!r)if(e=el(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!pe)return Ne(t),null}else 2*Se()-a.renderingStartTime>To&&n!==1073741824&&(t.flags|=128,r=!0,Yo(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Se(),t.sibling=null,n=ge.current,ie(ge,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return mp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(st&1073741824)!==0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function OP(e,t){switch(Kf(t),t.tag){case 1:return nt(t.type)&&Gs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Co(),ue(tt),ue($e),rp(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return np(t),null;case 13:if(ue(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));So()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(ge),null;case 4:return Co(),null;case 10:return Qf(t.type._context),null;case 22:case 23:return mp(),null;case 24:return null;default:return null}}var Yi=!1,De=!1,DP=typeof WeakSet=="function"?WeakSet:Set,R=null;function Qr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(e,t,r)}else n.current=null}function Fd(e,t,n){try{n()}catch(r){be(e,t,r)}}var Hg=!1;function $P(e,t){if(cd=$s,e=Bb(),Uf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var m;d!==n||o!==0&&d.nodeType!==3||(s=i+o),d!==a||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++u===o&&(s=i),f===a&&++c===r&&(l=i),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dd={focusedElem:e,selectionRange:n},$s=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var v=b.memoizedProps,C=b.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Rt(t.type,v),C);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){be(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return b=Hg,Hg=!1,b}function xa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Fd(t,n,a)}o=o.next}while(o!==r)}}function Ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ad(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mv(e){var t=e.alternate;t!==null&&(e.alternate=null,Mv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qt],delete t[Ya],delete t[md],delete t[TP],delete t[_P])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jv(e){return e.tag===5||e.tag===3||e.tag===4}function Ug(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Us));else if(r!==4&&(e=e.child,e!==null))for(Pd(e,t,n),e=e.sibling;e!==null;)Pd(e,t,n),e=e.sibling}function Ed(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ed(e,t,n),e=e.sibling;e!==null;)Ed(e,t,n),e=e.sibling}var Ve=null,Vt=!1;function Pn(e,t,n){for(n=n.child;n!==null;)Lv(e,t,n),n=n.sibling}function Lv(e,t,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:De||Qr(n,t);case 6:var r=Ve,o=Vt;Ve=null,Pn(e,t,n),Ve=r,Vt=o,Ve!==null&&(Vt?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Vt?(e=Ve,n=n.stateNode,e.nodeType===8?tc(e.parentNode,n):e.nodeType===1&&tc(e,n),Wa(e)):tc(Ve,n.stateNode));break;case 4:r=Ve,o=Vt,Ve=n.stateNode.containerInfo,Vt=!0,Pn(e,t,n),Ve=r,Vt=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Fd(n,t,i),o=o.next}while(o!==r)}Pn(e,t,n);break;case 1:if(!De&&(Qr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){be(n,t,s)}Pn(e,t,n);break;case 21:Pn(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Pn(e,t,n),De=r):Pn(e,t,n);break;default:Pn(e,t,n)}}function Gg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new DP),t.forEach(function(r){var o=QP.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ve=s.stateNode,Vt=!1;break e;case 3:Ve=s.stateNode.containerInfo,Vt=!0;break e;case 4:Ve=s.stateNode.containerInfo,Vt=!0;break e}s=s.return}if(Ve===null)throw Error(P(160));Lv(a,i,o),Ve=null,Vt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){be(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bv(t,e),t=t.sibling}function Bv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Ut(e),r&4){try{xa(3,e,e.return),Ul(3,e)}catch(v){be(e,e.return,v)}try{xa(5,e,e.return)}catch(v){be(e,e.return,v)}}break;case 1:zt(t,e),Ut(e),r&512&&n!==null&&Qr(n,n.return);break;case 5:if(zt(t,e),Ut(e),r&512&&n!==null&&Qr(n,n.return),e.flags&32){var o=e.stateNode;try{Na(o,"")}catch(v){be(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&ib(o,a),ed(s,i);var u=ed(s,a);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?db(o,d):c==="dangerouslySetInnerHTML"?ub(o,d):c==="children"?Na(o,d):zf(o,c,d,u)}switch(s){case"input":Yc(o,a);break;case"textarea":sb(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?uo(o,!!a.multiple,m,!1):f!==!!a.multiple&&(a.defaultValue!=null?uo(o,!!a.multiple,a.defaultValue,!0):uo(o,!!a.multiple,a.multiple?[]:"",!1))}o[Ya]=a}catch(v){be(e,e.return,v)}}break;case 6:if(zt(t,e),Ut(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(v){be(e,e.return,v)}}break;case 3:if(zt(t,e),Ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(t.containerInfo)}catch(v){be(e,e.return,v)}break;case 4:zt(t,e),Ut(e);break;case 13:zt(t,e),Ut(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(fp=Se())),r&4&&Gg(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||c,zt(t,e),De=u):zt(t,e),Ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(R=e,c=e.child;c!==null;){for(d=R=c;R!==null;){switch(f=R,m=f.child,f.tag){case 0:case 11:case 14:case 15:xa(4,f,f.return);break;case 1:Qr(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(v){be(r,n,v)}}break;case 5:Qr(f,f.return);break;case 22:if(f.memoizedState!==null){Yg(d);continue}}m!==null?(m.return=f,R=m):Yg(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=cb("display",i))}catch(v){be(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){be(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zt(t,e),Ut(e),r&4&&Gg(e);break;case 21:break;default:zt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jv(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Na(o,""),r.flags&=-33);var a=Ug(e);Ed(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Ug(e);Pd(e,s,i);break;default:throw Error(P(161))}}catch(l){be(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function WP(e,t,n){R=e,Nv(e)}function Nv(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Yi;if(!i){var s=o.alternate,l=s!==null&&s.memoizedState!==null||De;s=Yi;var u=De;if(Yi=i,(De=l)&&!u)for(R=o;R!==null;)i=R,l=i.child,i.tag===22&&i.memoizedState!==null?Zg(o):l!==null?(l.return=i,R=l):Zg(o);for(;a!==null;)R=a,Nv(a),a=a.sibling;R=o,Yi=s,De=u}Kg(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,R=a):Kg(e)}}function Kg(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:De||Ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&qg(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qg(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Wa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}De||t.flags&512&&Ad(t)}catch(f){be(t,t.return,f)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Yg(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Zg(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ul(4,t)}catch(l){be(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){be(t,o,l)}}var a=t.return;try{Ad(t)}catch(l){be(t,a,l)}break;case 5:var i=t.return;try{Ad(t)}catch(l){be(t,i,l)}}}catch(l){be(t,t.return,l)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var HP=Math.ceil,rl=Tn.ReactCurrentDispatcher,cp=Tn.ReactCurrentOwner,Tt=Tn.ReactCurrentBatchConfig,K=0,qe=null,Te=null,je=0,st=0,Jr=er(0),Ae=0,ti=null,Fr=0,Gl=0,dp=0,Ca=null,Qe=null,fp=0,To=1/0,fn=null,ol=!1,qd=null,Hn=null,Zi=!1,Bn=null,al=0,ka=0,Id=null,hs=-1,ys=0;function Ke(){return(K&6)!==0?Se():hs!==-1?hs:hs=Se()}function Un(e){return(e.mode&1)===0?1:(K&2)!==0&&je!==0?je&-je:AP.transition!==null?(ys===0&&(ys=Cb()),ys):(e=te,e!==0||(e=window.event,e=e===void 0?16:Eb(e.type)),e)}function Nt(e,t,n,r){if(50<ka)throw ka=0,Id=null,Error(P(185));ui(e,n,r),((K&2)===0||e!==qe)&&(e===qe&&((K&2)===0&&(Gl|=n),Ae===4&&Mn(e,je)),rt(e,r),n===1&&K===0&&(t.mode&1)===0&&(To=Se()+500,$l&&tr()))}function rt(e,t){var n=e.callbackNode;AA(e,t);var r=Ds(e,e===qe?je:0);if(r===0)n!==null&&ag(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ag(n),t===1)e.tag===0?FP(Xg.bind(null,e)):Yb(Xg.bind(null,e)),CP(function(){(K&6)===0&&tr()}),n=null;else{switch(kb(r)){case 1:n=Lf;break;case 4:n=Sb;break;case 16:n=Os;break;case 536870912:n=xb;break;default:n=Os}n=Kv(n,Ov.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ov(e,t){if(hs=-1,ys=0,(K&6)!==0)throw Error(P(327));var n=e.callbackNode;if(go()&&e.callbackNode!==n)return null;var r=Ds(e,e===qe?je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=il(e,r);else{t=r;var o=K;K|=2;var a=$v();(qe!==e||je!==t)&&(fn=null,To=Se()+500,xr(e,t));do try{KP();break}catch(s){Dv(e,s)}while(1);Xf(),rl.current=a,K=o,Te!==null?t=0:(qe=null,je=0,t=Ae)}if(t!==0){if(t===2&&(o=ad(e),o!==0&&(r=o,t=zd(e,o))),t===1)throw n=ti,xr(e,0),Mn(e,r),rt(e,Se()),n;if(t===6)Mn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!UP(o)&&(t=il(e,r),t===2&&(a=ad(e),a!==0&&(r=a,t=zd(e,a))),t===1))throw n=ti,xr(e,0),Mn(e,r),rt(e,Se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:cr(e,Qe,fn);break;case 3:if(Mn(e,r),(r&130023424)===r&&(t=fp+500-Se(),10<t)){if(Ds(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=pd(cr.bind(null,e,Qe,fn),t);break}cr(e,Qe,fn);break;case 4:if(Mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Bt(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HP(r/1960))-r,10<r){e.timeoutHandle=pd(cr.bind(null,e,Qe,fn),r);break}cr(e,Qe,fn);break;case 5:cr(e,Qe,fn);break;default:throw Error(P(329))}}}return rt(e,Se()),e.callbackNode===n?Ov.bind(null,e):null}function zd(e,t){var n=Ca;return e.current.memoizedState.isDehydrated&&(xr(e,t).flags|=256),e=il(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Rd(t)),e}function Rd(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function UP(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Ot(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mn(e,t){for(t&=~dp,t&=~Gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bt(t),r=1<<n;e[n]=-1,t&=~r}}function Xg(e){if((K&6)!==0)throw Error(P(327));go();var t=Ds(e,0);if((t&1)===0)return rt(e,Se()),null;var n=il(e,t);if(e.tag!==0&&n===2){var r=ad(e);r!==0&&(t=r,n=zd(e,r))}if(n===1)throw n=ti,xr(e,0),Mn(e,t),rt(e,Se()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cr(e,Qe,fn),rt(e,Se()),null}function pp(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(To=Se()+500,$l&&tr())}}function Ar(e){Bn!==null&&Bn.tag===0&&(K&6)===0&&go();var t=K;K|=1;var n=Tt.transition,r=te;try{if(Tt.transition=null,te=1,e)return e()}finally{te=r,Tt.transition=n,K=t,(K&6)===0&&tr()}}function mp(){st=Jr.current,ue(Jr)}function xr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xP(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(Kf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gs();break;case 3:Co(),ue(tt),ue($e),rp();break;case 5:np(r);break;case 4:Co();break;case 13:ue(ge);break;case 19:ue(ge);break;case 10:Qf(r.type._context);break;case 22:case 23:mp()}n=n.return}if(qe=e,Te=e=Gn(e.current,null),je=st=t,Ae=0,ti=null,dp=Gl=Fr=0,Qe=Ca=null,yr!==null){for(t=0;t<yr.length;t++)if(n=yr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}yr=null}return e}function Dv(e,t){do{var n=Te;try{if(Xf(),ps.current=nl,tl){for(var r=he.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}tl=!1}if(_r=0,Ee=Fe=he=null,Sa=!1,Qa=0,cp.current=null,n===null||n.return===null){Ae=1,ti=t,Te=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=je,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Lg(i);if(m!==null){m.flags&=-257,Bg(m,i,s,a,t),m.mode&1&&jg(a,u,t),t=m,l=u;var b=t.updateQueue;if(b===null){var v=new Set;v.add(l),t.updateQueue=v}else b.add(l);break e}else{if((t&1)===0){jg(a,u,t),gp();break e}l=Error(P(426))}}else if(pe&&s.mode&1){var C=Lg(i);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),Bg(C,i,s,a,t),Yf(ko(l,s));break e}}a=l=ko(l,s),Ae!==4&&(Ae=2),Ca===null?Ca=[a]:Ca.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Tv(a,l,t);Eg(a,h);break e;case 1:s=l;var p=a.type,g=a.stateNode;if((a.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Hn===null||!Hn.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=_v(a,s,t);Eg(a,x);break e}}a=a.return}while(a!==null)}Hv(n)}catch(_){t=_,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(1)}function $v(){var e=rl.current;return rl.current=nl,e===null?nl:e}function gp(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),qe===null||(Fr&268435455)===0&&(Gl&268435455)===0||Mn(qe,je)}function il(e,t){var n=K;K|=2;var r=$v();(qe!==e||je!==t)&&(fn=null,xr(e,t));do try{GP();break}catch(o){Dv(e,o)}while(1);if(Xf(),K=n,rl.current=r,Te!==null)throw Error(P(261));return qe=null,je=0,Ae}function GP(){for(;Te!==null;)Wv(Te)}function KP(){for(;Te!==null&&!vA();)Wv(Te)}function Wv(e){var t=Gv(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?Hv(e):Te=t,cp.current=null}function Hv(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=NP(n,t,st),n!==null){Te=n;return}}else{if(n=OP(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Te=null;return}}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ae===0&&(Ae=5)}function cr(e,t,n){var r=te,o=Tt.transition;try{Tt.transition=null,te=1,YP(e,t,n,r)}finally{Tt.transition=o,te=r}return null}function YP(e,t,n,r){do go();while(Bn!==null);if((K&6)!==0)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(PA(e,a),e===qe&&(Te=qe=null,je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Zi||(Zi=!0,Kv(Os,function(){return go(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=Tt.transition,Tt.transition=null;var i=te;te=1;var s=K;K|=4,cp.current=null,$P(e,n),Bv(n,e),gP(dd),$s=!!cd,dd=cd=null,e.current=n,WP(n),wA(),K=s,te=i,Tt.transition=a}else e.current=n;if(Zi&&(Zi=!1,Bn=e,al=o),a=e.pendingLanes,a===0&&(Hn=null),CA(n.stateNode),rt(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ol)throw ol=!1,e=qd,qd=null,e;return(al&1)!==0&&e.tag!==0&&go(),a=e.pendingLanes,(a&1)!==0?e===Id?ka++:(ka=0,Id=e):ka=0,tr(),null}function go(){if(Bn!==null){var e=kb(al),t=Tt.transition,n=te;try{if(Tt.transition=null,te=16>e?16:e,Bn===null)var r=!1;else{if(e=Bn,Bn=null,al=0,(K&6)!==0)throw Error(P(331));var o=K;for(K|=4,R=e.current;R!==null;){var a=R,i=a.child;if((R.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:xa(8,c,a)}var d=c.child;if(d!==null)d.return=c,R=d;else for(;R!==null;){c=R;var f=c.sibling,m=c.return;if(Mv(c),c===u){R=null;break}if(f!==null){f.return=m,R=f;break}R=m}}}var b=a.alternate;if(b!==null){var v=b.child;if(v!==null){b.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}R=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,R=i;else e:for(;R!==null;){if(a=R,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:xa(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,R=h;break e}R=a.return}}var p=e.current;for(R=p;R!==null;){i=R;var g=i.child;if((i.subtreeFlags&2064)!==0&&g!==null)g.return=i,R=g;else e:for(i=p;R!==null;){if(s=R,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Ul(9,s)}}catch(_){be(s,s.return,_)}if(s===i){R=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,R=x;break e}R=s.return}}if(K=o,tr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Ll,e)}catch{}r=!0}return r}finally{te=n,Tt.transition=t}}return!1}function Qg(e,t,n){t=ko(n,t),t=Tv(e,t,1),e=Wn(e,t,1),t=Ke(),e!==null&&(ui(e,1,t),rt(e,t))}function be(e,t,n){if(e.tag===3)Qg(e,e,n);else for(;t!==null;){if(t.tag===3){Qg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){e=ko(n,e),e=_v(t,e,1),t=Wn(t,e,1),e=Ke(),t!==null&&(ui(t,1,e),rt(t,e));break}}t=t.return}}function ZP(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(je&n)===n&&(Ae===4||Ae===3&&(je&130023424)===je&&500>Se()-fp?xr(e,0):dp|=n),rt(e,t)}function Uv(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ni,Ni<<=1,(Ni&130023424)===0&&(Ni=4194304)));var n=Ke();e=Cn(e,t),e!==null&&(ui(e,t,n),rt(e,n))}function XP(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uv(e,n)}function QP(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Uv(e,n)}var Gv;Gv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return et=!1,BP(e,t,n);et=(e.flags&131072)!==0}else et=!1,pe&&(t.flags&1048576)!==0&&Zb(t,Zs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gs(e,t),e=t.pendingProps;var o=wo(t,$e.current);mo(t,n),o=ap(null,t,r,e,o,n);var a=ip();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(r)?(a=!0,Ks(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ep(t),o.updater=Wl,t.stateNode=o,o._reactInternals=t,wd(t,r,e,n),t=Cd(null,t,r,!0,a,n)):(t.tag=0,pe&&a&&Gf(t),He(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gs(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=eE(r),e=Rt(r,e),o){case 0:t=xd(null,t,r,e,n);break e;case 1:t=Dg(null,t,r,e,n);break e;case 11:t=Ng(null,t,r,e,n);break e;case 14:t=Og(null,t,r,Rt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rt(r,o),xd(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rt(r,o),Dg(e,t,r,o,n);case 3:e:{if(Ev(t),e===null)throw Error(P(387));r=t.pendingProps,a=t.memoizedState,o=a.element,ev(e,t),Js(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=ko(Error(P(423)),t),t=$g(e,t,r,n,o);break e}else if(r!==o){o=ko(Error(P(424)),t),t=$g(e,t,r,n,o);break e}else for(lt=$n(t.stateNode.containerInfo.firstChild),dt=t,pe=!0,Mt=null,n=ov(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(So(),r===o){t=kn(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return av(t),e===null&&yd(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,fd(r,o)?i=null:a!==null&&fd(r,a)&&(t.flags|=32),Pv(e,t),He(e,t,i,n),t.child;case 6:return e===null&&yd(t),null;case 13:return qv(e,t,n);case 4:return tp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xo(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rt(r,o),Ng(e,t,r,o,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,ie(Xs,r._currentValue),r._currentValue=i,a!==null)if(Ot(a.value,i)){if(a.children===o.children&&!tt.current){t=kn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=bn(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),bd(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(P(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),bd(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}He(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,mo(t,n),o=_t(o),r=r(o),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,o=Rt(r,t.pendingProps),o=Rt(r.type,o),Og(e,t,r,o,n);case 15:return Fv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rt(r,o),gs(e,t),t.tag=1,nt(r)?(e=!0,Ks(t)):e=!1,mo(t,n),nv(t,r,o),wd(t,r,o,n),Cd(null,t,r,!0,e,n);case 19:return Iv(e,t,n);case 22:return Av(e,t,n)}throw Error(P(156,t.tag))};function Kv(e,t){return wb(e,t)}function JP(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new JP(e,t,n,r)}function hp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eE(e){if(typeof e=="function")return hp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vf)return 11;if(e===Mf)return 14}return 2}function Gn(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")hp(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case $r:return Cr(n.children,o,a,t);case Rf:i=8,o|=8;break;case Wc:return e=Ct(12,n,t,o|2),e.elementType=Wc,e.lanes=a,e;case Hc:return e=Ct(13,n,t,o),e.elementType=Hc,e.lanes=a,e;case Uc:return e=Ct(19,n,t,o),e.elementType=Uc,e.lanes=a,e;case rb:return Kl(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tb:i=10;break e;case nb:i=9;break e;case Vf:i=11;break e;case Mf:i=14;break e;case In:i=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ct(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Cr(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function Kl(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=rb,e.lanes=n,e.stateNode={isHidden:!1},e}function uc(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function cc(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tE(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wu(0),this.expirationTimes=Wu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wu(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function yp(e,t,n,r,o,a,i,s,l){return e=new tE(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ct(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ep(a),e}function nE(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yv(e){if(!e)return Xn;e=e._reactInternals;e:{if(Ir(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(nt(n))return Kb(e,n,t)}return t}function Zv(e,t,n,r,o,a,i,s,l){return e=yp(n,r,!0,e,o,a,i,s,l),e.context=Yv(null),n=e.current,r=Ke(),o=Un(n),a=bn(r,o),a.callback=t!=null?t:null,Wn(n,a,o),e.current.lanes=o,ui(e,o,r),rt(e,r),e}function Yl(e,t,n,r){var o=t.current,a=Ke(),i=Un(o);return n=Yv(n),t.context===null?t.context=n:t.pendingContext=n,t=bn(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wn(o,t,i),e!==null&&(Nt(e,o,i,a),fs(e,o,i)),i}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bp(e,t){Jg(e,t),(e=e.alternate)&&Jg(e,t)}function rE(){return null}var Xv=typeof reportError=="function"?reportError:function(e){console.error(e)};function vp(e){this._internalRoot=e}Zl.prototype.render=vp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Yl(e,t,null,null)};Zl.prototype.unmount=vp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ar(function(){Yl(null,e,null,null)}),t[xn]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vn.length&&t!==0&&t<Vn[n].priority;n++);Vn.splice(n,0,e),n===0&&Pb(e)}};function wp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eh(){}function oE(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=sl(i);a.call(u)}}var i=Zv(t,r,e,0,null,!1,!1,"",eh);return e._reactRootContainer=i,e[xn]=i.current,Ga(e.nodeType===8?e.parentNode:e),Ar(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=sl(l);s.call(u)}}var l=yp(e,0,!1,null,null,!1,!1,"",eh);return e._reactRootContainer=l,e[xn]=l.current,Ga(e.nodeType===8?e.parentNode:e),Ar(function(){Yl(t,l,n,r)}),l}function Ql(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var l=sl(i);s.call(l)}}Yl(t,i,e,o)}else i=oE(n,t,e,o,r);return sl(i)}Tb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=na(t.pendingLanes);n!==0&&(Bf(t,n|1),rt(t,Se()),(K&6)===0&&(To=Se()+500,tr()))}break;case 13:Ar(function(){var r=Cn(e,1);if(r!==null){var o=Ke();Nt(r,e,1,o)}}),bp(e,1)}};Nf=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var n=Ke();Nt(t,e,134217728,n)}bp(e,134217728)}};_b=function(e){if(e.tag===13){var t=Un(e),n=Cn(e,t);if(n!==null){var r=Ke();Nt(n,e,t,r)}bp(e,t)}};Fb=function(){return te};Ab=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};nd=function(e,t,n){switch(t){case"input":if(Yc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Dl(r);if(!o)throw Error(P(90));ab(r),Yc(r,o)}}}break;case"textarea":sb(e,n);break;case"select":t=n.value,t!=null&&uo(e,!!n.multiple,t,!1)}};mb=pp;gb=Ar;var aE={usingClientEntryPoint:!1,Events:[di,Gr,Dl,fb,pb,pp]},Zo={findFiberByHostInstance:hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iE={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bb(e),e===null?null:e.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||rE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{Ll=Xi.inject(iE),on=Xi}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aE;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wp(t))throw Error(P(200));return nE(e,t,null,n)};ht.createRoot=function(e,t){if(!wp(e))throw Error(P(299));var n=!1,r="",o=Xv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=yp(e,1,!1,null,null,n,!1,r,o),e[xn]=t.current,Ga(e.nodeType===8?e.parentNode:e),new vp(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=bb(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return Ar(e)};ht.hydrate=function(e,t,n){if(!Xl(t))throw Error(P(200));return Ql(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!wp(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=Xv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Zv(t,null,e,1,n!=null?n:null,o,!1,a,i),e[xn]=t.current,Ga(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Zl(t)};ht.render=function(e,t,n){if(!Xl(t))throw Error(P(200));return Ql(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!Xl(e))throw Error(P(40));return e._reactRootContainer?(Ar(function(){Ql(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};ht.unstable_batchedUpdates=pp;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ql(e,t,n,!1,r)};ht.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ht})(jl);var[sE,lE]=ai({strict:!1,name:"PortalManagerContext"});function Qv(e){const{children:t,zIndex:n}=e;return q(sE,{value:{zIndex:n},children:t})}Qv.displayName="PortalManager";var[Jv,uE]=ai({strict:!1,name:"PortalContext"}),Sp="chakra-portal",cE=".chakra-portal",dE=e=>q("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0},children:e.children}),fE=e=>{const{appendToParentPortal:t,children:n}=e,[r,o]=k.exports.useState(null),a=k.exports.useRef(null),[,i]=k.exports.useState({});k.exports.useEffect(()=>i({}),[]);const s=uE(),l=lE();vs(()=>{if(!r)return;const c=r.ownerDocument,d=t&&s!=null?s:c.body;if(!d)return;a.current=c.createElement("div"),a.current.className=Sp,d.appendChild(a.current),i({});const f=a.current;return()=>{d.contains(f)&&d.removeChild(f)}},[r]);const u=l!=null&&l.zIndex?q(dE,{zIndex:l==null?void 0:l.zIndex,children:n}):n;return a.current?jl.exports.createPortal(q(Jv,{value:a.current,children:u}),a.current):q("span",{ref:c=>{c&&o(c)}})},pE=e=>{const{children:t,containerRef:n,appendToParentPortal:r}=e,o=n.current,a=o!=null?o:typeof window<"u"?document.body:void 0,i=k.exports.useMemo(()=>{const l=o==null?void 0:o.ownerDocument.createElement("div");return l&&(l.className=Sp),l},[o]),[,s]=k.exports.useState({});return vs(()=>s({}),[]),vs(()=>{if(!(!i||!a))return a.appendChild(i),()=>{a.removeChild(i)}},[i,a]),a&&i?jl.exports.createPortal(q(Jv,{value:r?i:null,children:t}),i):null};function pi(e){const{containerRef:t,...n}=e;return t?q(pE,{containerRef:t,...n}):q(fE,{...n})}pi.defaultProps={appendToParentPortal:!0};pi.className=Sp;pi.selector=cE;pi.displayName="Portal";function mE(e,t){const n=W7(e);k.exports.useEffect(()=>{if(t==null)return;let r=null;return r=window.setTimeout(()=>{n()},t),()=>{r&&window.clearTimeout(r)}},[t,n])}function gE(e,...t){return hE(e)?e(...t):e}var hE=e=>typeof e=="function",yE=(e,t)=>e.find(n=>n.id===t);function th(e,t){const n=e2(e,t),r=n?e[n].findIndex(o=>o.id===t):-1;return{position:n,index:r}}function e2(e,t){for(const[n,r]of Object.entries(e))if(yE(r,t))return n}function bE(e){const t=e.includes("right"),n=e.includes("left");let r="center";return t&&(r="flex-end"),n&&(r="flex-start"),{display:"flex",flexDirection:"column",alignItems:r}}function vE(e){const n=e==="top"||e==="bottom"?"0 auto":void 0,r=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,o=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,a=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",i=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:5500,pointerEvents:"none",display:"flex",flexDirection:"column",margin:n,top:r,bottom:o,right:a,left:i}}var wE={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},Ta=SE(wE);function SE(e){let t=e;const n=new Set,r=o=>{t=o(t),n.forEach(a=>a())};return{getState:()=>t,subscribe:o=>(n.add(o),()=>{r(()=>e),n.delete(o)}),removeToast:(o,a)=>{r(i=>({...i,[a]:i[a].filter(s=>s.id!=o)}))},notify:(o,a)=>{const i=xE(o,a),{position:s,id:l}=i;return r(u=>{var f,m;const d=s.includes("top")?[i,...(f=u[s])!=null?f:[]]:[...(m=u[s])!=null?m:[],i];return{...u,[s]:d}}),l},update:(o,a)=>{!o||r(i=>{const s={...i},{position:l,index:u}=th(s,o);return l&&u!==-1&&(s[l][u]={...s[l][u],...a,message:kE(a)}),s})},closeAll:({positions:o}={})=>{r(a=>{const i=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(o!=null?o:i).reduce((l,u)=>(l[u]=a[u].map(c=>({...c,requestClose:!0})),l),{...a})})},close:o=>{r(a=>{const i=e2(a,o);return i?{...a,[i]:a[i].map(s=>s.id==o?{...s,requestClose:!0}:s)}:a})},isActive:o=>Boolean(th(Ta.getState(),o).position)}}var nh=0;function xE(e,t={}){var o,a;nh+=1;const n=(o=t.id)!=null?o:nh,r=(a=t.position)!=null?a:"bottom";return{id:n,message:e,position:r,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>Ta.removeToast(String(n),r),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}var CE=e=>{const{status:t,variant:n="solid",id:r,title:o,isClosable:a,onClose:i,description:s,icon:l}=e,u=r?{root:`toast-${r}`,title:`toast-${r}-title`,description:`toast-${r}-description`}:void 0;return B.createElement(I1,{addRole:!1,status:t,variant:n,id:u==null?void 0:u.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto"},q(R1,{children:l}),B.createElement(D.div,{flex:"1",maxWidth:"100%"},o&&q(V1,{id:u==null?void 0:u.title,children:o}),s&&q(z1,{id:u==null?void 0:u.description,display:"block",children:s})),a&&q(j1,{size:"sm",onClick:i,position:"absolute",insetEnd:1,top:1}))};function kE(e={}){const{render:t,toastComponent:n=CE}=e;return o=>typeof t=="function"?t({...o,...e}):q(n,{...o,...e})}var TE={initial:e=>{const{position:t}=e,n=["top","bottom"].includes(t)?"y":"x";let r=["top-right","bottom-right"].includes(t)?1:-1;return t==="bottom"&&(r=1),{opacity:0,[n]:r*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},t2=k.exports.memo(e=>{const{id:t,message:n,onCloseComplete:r,onRequestRemove:o,requestClose:a=!1,position:i="bottom",duration:s=5e3,containerStyle:l,motionVariants:u=TE,toastSpacing:c="0.5rem"}=e,[d,f]=k.exports.useState(s),m=pk();G0(()=>{m||r==null||r()},[m]),G0(()=>{f(s)},[s]);const b=()=>f(null),v=()=>f(s),C=()=>{m&&o()};k.exports.useEffect(()=>{m&&a&&o()},[m,a,o]),mE(C,d);const h=k.exports.useMemo(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:c,...l}),[l,c]),p=k.exports.useMemo(()=>bE(i),[i]);return B.createElement(sF.li,{layout:!0,className:"chakra-toast",variants:u,initial:"initial",animate:"animate",exit:"exit",onHoverStart:b,onHoverEnd:v,custom:{position:i},style:p},B.createElement(D.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:h},gE(n,{id:t,onClose:C})))});t2.displayName="ToastComponent";var _E=e=>{const t=k.exports.useSyncExternalStore(Ta.subscribe,Ta.getState,Ta.getState),{children:n,motionVariants:r,component:o=t2,portalProps:a}=e,s=Object.keys(t).map(l=>{const u=t[l];return q("ul",{role:"region","aria-live":"polite",id:`chakra-toast-manager-${l}`,style:vE(l),children:q(mF,{initial:!1,children:u.map(c=>q(o,{motionVariants:r,...c},c.id))})},l)});return Qn(dc,{children:[n,q(pi,{...a,children:s})]})},FE=e=>{const{children:t,colorModeManager:n,portalZIndex:r,resetCSS:o=!0,theme:a={},environment:i,cssVarsRoot:s}=e,l=q(Z1,{environment:i,children:t});return q(V7,{theme:a,cssVarsRoot:s,children:Qn(bh,{colorModeManager:n,options:a.config,children:[o?q(_F,{}):q(TF,{}),q(j7,{}),r?q(Qv,{zIndex:r,children:l}):l]})})},AE=e=>function({children:n,theme:r=e,toastOptions:o,...a}){return Qn(FE,{theme:r,...a,children:[n,q(_E,{...o})]})},PE=AE(T7),Vd={},rh=jl.exports;Vd.createRoot=rh.createRoot,Vd.hydrateRoot=rh.hydrateRoot;const EE=JSON.parse(`{
  "from": 1,
  "to": 20,
  "count": 10000,
  "_links": {},
  "hits": [
    {
      "recipe": {
        "label": "Paleo Chocolate Covered Caramels",
        "image": "https://media.wincacademy.nl/react/images/final-project/chocolate-caramel.jpeg",
        "url": "http://ourfineday.com/happy-birthday-travis-and-a-recipe-for-chocolate-covered-chocolates/",
        "yield": 12,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Gluten-Free",
          "Wheat-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Tree-Nuts",
          "Sulfites"
        ],
        "ingredientLines": [
          "1/2 cup honey",
          "1 1/2 Tbsp almond butter",
          "3 tsp butter or coconut butter for dairy free",
          "1 tsp water",
          "1/2 tsp vanilla",
          "1 cup chocolate chips",
          "1/2 tsp coconut oil"
        ],
        "ingredients": [
          {
            "text": "1/2 cup honey",
            "quantity": 0.5,
            "measure": "cup",
            "food": "honey",
            "weight": 169.5,
            "foodCategory": null,
            "foodId": "food_bn6aoj9atkqx8fbkli859bbbxx62",
            "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
          },
          {
            "text": "1 1/2 Tbsp almond butter",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "almond butter",
            "weight": 24,
            "foodCategory": "plant-based protein",
            "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
            "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
          },
          {
            "text": "3 tsp butter or coconut butter for dairy free",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "coconut butter",
            "weight": 14.000000000710095,
            "foodCategory": null,
            "foodId": "food_bkx1ggcaouz8qob002t72ay33jbo",
            "image": "https://www.edamam.com/food-img/0d0/0d0a27d667f0b7930bdda17da8ea7dc7.jpg"
          },
          {
            "text": "1 tsp water",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "water",
            "weight": 4.928921594,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "1/2 tsp vanilla",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "1 cup chocolate chips",
            "quantity": 1,
            "measure": "cup",
            "food": "chocolate chips",
            "weight": 224,
            "foodCategory": "chocolate",
            "foodId": "food_b0camz2asgzienbko2epvbzzv6qj",
            "image": "https://www.edamam.com/food-img/36c/36ce336d10d51259f365ec2dbc1e28c4.jpg"
          },
          {
            "text": "1/2 tsp coconut oil",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "coconut oil",
            "weight": 2.25,
            "foodCategory": "Oils",
            "foodId": "food_b40ubq8a0enoidbcr1tmfbwgs6aw",
            "image": "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg"
          }
        ],
        "calories": 1912.5630000050721,
        "totalWeight": 440.7789215947101,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1912.5630000050721,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 76.8976600004565,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 35.34678,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4121600000000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.917509999999998,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.307704,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 301.1664500001775,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 290.8074500001014,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 10.359000000076083,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 280.61185,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 279.283,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 17.247360000050723,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 33.6,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 168.71615686414296,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 353.66886764782004,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 70.65128921593998,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 270.768,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.668120000018259,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 1.1653028921594002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 128.826,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.1915,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.010071,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.291765,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.97122,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.065946,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.812424999999999,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.01125,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 38.766272672406004,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Grilled Pork Chops with Chipotle Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/Grilled-Pork-Chop-with-Chipotle-Sauce.jpeg",
        "url": "https://grumpyshoneybunch.com/2009/07/grilled-pork-chops-chipotle-sauce.html",
        "yield": 8,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "* 8 pork chops",
          "* 1/2 cup sugar free ketchup",
          "* 1/3 cup Seasoned Rice Vinegar, original",
          "* 1/3 cup Swerve Brown Sweetener",
          "* 1 Tablespoon ground cumin",
          "* 1 teaspoons chipotle chili powder"
        ],
        "ingredients": [
          {
            "text": "* 8 pork chops",
            "quantity": 8,
            "measure": "<unit>",
            "food": "pork chops",
            "weight": 1592,
            "foodCategory": "meats",
            "foodId": "food_a6yuw2wan806yxaem8uqza91rjmb",
            "image": "https://www.edamam.com/food-img/499/49977aabc381bd3889ad9100978e1bb6.jpg"
          },
          {
            "text": "* 1/2 cup sugar free ketchup",
            "quantity": 0.5,
            "measure": "cup",
            "food": "ketchup",
            "weight": 120,
            "foodCategory": "condiments and sauces",
            "foodId": "food_au7jthtab0n3era9uue8pauakroe",
            "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
          },
          {
            "text": "* 1/3 cup Seasoned Rice Vinegar, original",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Seasoned Rice Vinegar",
            "weight": 79.66666666666666,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bhk02bwbp4x7kkbeajj2pbnj15cp",
            "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
          },
          {
            "text": "* 1/3 cup Swerve Brown Sweetener",
            "quantity": 0.3333333333333333,
            "measure": "<unit>",
            "food": "Sweetener",
            "weight": 0.3333333333333333,
            "foodCategory": "sugars",
            "foodId": "food_b3755atafogvz2ac74adra225skl",
            "image": "https://www.edamam.com/food-img/0e3/0e3edc39fe123b516c4c758f4f09e99f.jpg"
          },
          {
            "text": "* 1 Tablespoon ground cumin",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cumin",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "* 1 teaspoons chipotle chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          }
        ],
        "calories": 2875.644,
        "totalWeight": 1800.7,
        "totalTime": 0,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2875.644,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 145.59936,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 47.823934,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.46464,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 57.431257,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 19.406902,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 37.914233333333335,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 35.984633333333335,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 1.9296,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 26.455763333333334,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.28396666666666665,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 332.3863533333334,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1098.48,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2056.899,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 390.8266666666667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 443.5663333333334,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6015.86,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.057766666666668,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 28.8184,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3402.8933333333334,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 106.92099999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 5.400899999999999,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 7.77883,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.25308,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 107.68321999999998,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 11.368478,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 8.4376,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 7.96,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.89198,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 6.7779,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1267.3743166666668,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Slow Cooker Turkey Dip Sandwiches recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/turkey-sandwich.jpeg",
        "url": "http://www.bobbiskozykitchen.com/2015/03/slow-cooker-turkey-dip-sandwiches.html",
        "yield": 4,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "7 tablespoons room temperature unsalted butter, divided",
          "3 tablespoons fresh thyme leaves, chopped",
          "4 cloves garlic, minced",
          "1 lemon, zested",
          "kosher salt",
          "cracked black pepper",
          "1 large onion, chopped",
          "1/2 cup chicken stock",
          "3 tablespoons Worcestershire sauce",
          "1 (4-pound) bone-in turkey breast",
          "4 demi French baguettes, sliced in half",
          "12 slices Swiss Cheese"
        ],
        "ingredients": [
          {
            "text": "7 tablespoons room temperature unsalted butter, divided",
            "quantity": 7,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 99.39999999999999,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "3 tablespoons fresh thyme leaves, chopped",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "fresh thyme",
            "weight": 7.19999999951308,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
            "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
          },
          {
            "text": "4 cloves garlic, minced",
            "quantity": 4,
            "measure": "clove",
            "food": "garlic",
            "weight": 12,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lemon, zested",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lemon",
            "weight": 58,
            "foodCategory": "fruit",
            "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
            "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
          },
          {
            "text": "kosher salt",
            "quantity": 0,
            "measure": null,
            "food": "kosher salt",
            "weight": 23.087816879997078,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "cracked black pepper",
            "quantity": 0,
            "measure": null,
            "food": "black pepper",
            "weight": 11.543908439998539,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 large onion, chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 150,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup chicken stock",
            "quantity": 0.5,
            "measure": "cup",
            "food": "chicken stock",
            "weight": 120,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "3 tablespoons Worcestershire sauce",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "Worcestershire sauce",
            "weight": 51,
            "foodCategory": "canned soup",
            "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
            "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
          },
          {
            "text": "1 (4-pound) bone-in turkey breast",
            "quantity": 4,
            "measure": "pound",
            "food": "turkey breast",
            "weight": 1814.36948,
            "foodCategory": "Poultry",
            "foodId": "food_aijy334arptsr3b4zwpdrajqapl8",
            "image": "https://www.edamam.com/food-img/3d8/3d80f3f4fcb0efcf54d094c857d74926.jpg"
          },
          {
            "text": "4 demi French baguettes, sliced in half",
            "quantity": 4,
            "measure": "<unit>",
            "food": "baguettes",
            "weight": 1200,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_bz1n7y8bupmgp0anvyqmda9dwufz",
            "image": "https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg"
          },
          {
            "text": "12 slices Swiss Cheese",
            "quantity": 12,
            "measure": "slice",
            "food": "Swiss Cheese",
            "weight": 336,
            "foodCategory": "Cheese",
            "foodId": "food_am9c0zybyfhgn9brc0imabzslets",
            "image": "https://www.edamam.com/food-img/419/419f6ce36db411c072d0dbf6c8510897.jpg"
          }
        ],
        "calories": 8031.129285423905,
        "totalWeight": 3859.513388439512,
        "totalTime": 375,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "sandwiches"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 8031.129285423905,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 320.02449516153575,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 149.01005856668252,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.318332,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.9322608345712,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.1734542374286,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 687.3825694472602,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 652.6279606120087,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 34.75460883525146,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 74.95002101401599,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 585.4535633416888,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1587.8361458,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 9117.120975567957,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 3727.6667435472214,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 970.9018911116184,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7255.567006164616,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 73.40638389343889,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 53.81769326282717,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 6386.241884854681,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1476.3375059176406,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 63.98119999922044,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.893574289674964,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 8.318519446989704,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 145.90443453746033,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 9.910386927158704,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 2227.9697416745803,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 859.9697416745806,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 804,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 18.2496966344,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.171,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.426336647775984,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 44.209378116277605,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2031.4894896573069,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Blueberry Basil Margarita Cocktail recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/blueberry-margarita.jpeg",
        "url": "http://drinkwire.liquor.com/post/blueberry-basil-margarita-cocktail-recipe/",
        "yield": 4,
        "dietLabels": [
          "Low-Fat",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher",
          "Alcohol-Cocktail"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "2.0 oz. Tres Agaves Blanco Tequila",
          "1.0 oz. agave nectar",
          "12-15 blueberries",
          "1 lime squeezed",
          "A couple sprigs of basil"
        ],
        "ingredients": [
          {
            "text": "2.0 oz. Tres Agaves Blanco Tequila",
            "quantity": 2,
            "measure": "ounce",
            "food": "Tequila",
            "weight": 56.69904625,
            "foodCategory": "liquors and cocktails",
            "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
            "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
          },
          {
            "text": "1.0 oz. agave nectar",
            "quantity": 1,
            "measure": "ounce",
            "food": "agave nectar",
            "weight": 28.349523125,
            "foodCategory": "sugar syrups",
            "foodId": "food_bj8pkd1bgey1rlbp58zagbjhpfi0",
            "image": "https://www.edamam.com/food-img/3b5/3b5425ed8e35a486b4138cc8720ae9e4.jpg"
          },
          {
            "text": "12-15 blueberries",
            "quantity": 13.5,
            "measure": "<unit>",
            "food": "blueberries",
            "weight": 18.360000000000003,
            "foodCategory": "fruit",
            "foodId": "food_bgkl0cuasoeomtbolalmcauhha54",
            "image": "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png"
          },
          {
            "text": "1 lime squeezed",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "A couple sprigs of basil",
            "quantity": 2,
            "measure": "sprig",
            "food": "basil",
            "weight": 4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          }
        ],
        "calories": 243.539632975,
        "totalWeight": 174.408569375,
        "totalTime": 15,
        "cuisineType": [
          "world"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "alcohol cocktail"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 243.539632975,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 0.22018800000000005,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.0215208,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 0.0248792,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.07921560000000001,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 31.37380157500001,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 27.57568541875001,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 3.7981161562500003,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 23.101117418750007,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 20.128161418750004,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 0.7308640000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2.2505904625000004,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 30.291600000000003,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 7.681600000000001,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 95.41118092500001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 0.6028876185,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.1581556185,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 18.771161850000006,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12.450800000000001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 21.997920000000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.031655142775000006,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.026235561850000005,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.25419567601250004,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.0451241904625,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.28405199999999997,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 20.537480000000002,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 116.03912080250001,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Potato Gratin",
        "image": "https://media.wincacademy.nl/react/images/final-project/potatoes-gratin.webp",
        "url": "http://www.cookstr.com/recipes/potato-gratin-2",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 cup milk",
          "1 cup heavy cream",
          "2 cups finely sliced leeks, white part only",
          "1 tablespoon roasted garlic pur\xE9e (see note)",
          "1 tablespoon chopped rosemary leaves",
          "Pinch freshly ground nutmeg",
          "Coarse salt and freshly ground white pepper to taste",
          "5 tablespoons unsalted butter, at room temperature",
          "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices"
        ],
        "ingredients": [
          {
            "text": "1 cup milk",
            "quantity": 1,
            "measure": "cup",
            "food": "milk",
            "weight": 244,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "1 cup heavy cream",
            "quantity": 1,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 238,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "2 cups finely sliced leeks, white part only",
            "quantity": 2,
            "measure": "cup",
            "food": "leeks",
            "weight": 178,
            "foodCategory": "vegetables",
            "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
            "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
          },
          {
            "text": "1 tablespoon roasted garlic pur\xE9e (see note)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "garlic",
            "weight": 8.499999999856291,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 tablespoon chopped rosemary leaves",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "rosemary",
            "weight": 1.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
            "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
          },
          {
            "text": "Pinch freshly ground nutmeg",
            "quantity": 1,
            "measure": "pinch",
            "food": "ground nutmeg",
            "weight": 0.14583333352071937,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
            "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "Coarse salt",
            "weight": 13.304075000000262,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "white pepper",
            "weight": 0,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a443px0bncpqa5avv80p3anrp26k",
            "image": "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg"
          },
          {
            "text": "5 tablespoons unsalted butter, at room temperature",
            "quantity": 5,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 71,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices",
            "quantity": 4,
            "measure": "<unit>",
            "food": "Yukon Gold potatoes",
            "weight": 1476,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          }
        ],
        "calories": 2739.76762500077,
        "totalWeight": 2229.800431236176,
        "totalTime": 120,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2739.76762500077,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 155.63557208340066,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 96.38664016671514,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 2.32738,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 42.400860833339344,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 6.873602416666964,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 304.67288125004484,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 268.54834791667554,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 36.12453333336929,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 37.54896041667083,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.259086666668466,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 503.11,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5156.393388500102,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 753.6314368300897,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 435.86342097933505,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7098.92778449897,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.712683506415825,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.138100014571826,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1287.6176250001793,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1726.289291666676,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 316.5869749999608,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.4738665833336944,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.2360371249999487,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 16.685738375001428,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.0317103333318585,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.6471,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 5.9030000000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.132799999999884,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 125.16649999999754,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1690.0881846123998,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Seafood Casserole",
        "image": "https://media.wincacademy.nl/react/images/final-project/seafood-casserol.jpeg",
        "url": "http://www.bigoven.com/recipe/Seafood-Casserole/296427",
        "yield": 6,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "6 oz pasta or noodles",
          "1/2 cup mayonnaise or salad dressing",
          "1/2 cup white wine",
          "1 can condensed cream of mushroom soup",
          "1 cup cheddar cheese",
          "1/2 tsp dry mustard",
          "8 oz, can tuna, shrimp or crab",
          "1 cup breadcrumbs"
        ],
        "ingredients": [
          {
            "text": "6 oz pasta or noodles",
            "quantity": 6,
            "measure": "ounce",
            "food": "pasta",
            "weight": 170.09713875,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/2 cup mayonnaise or salad dressing",
            "quantity": 0.5,
            "measure": "cup",
            "food": "salad dressing",
            "weight": 125,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a67f1v3boelh4wasob4qib34t5bv",
            "image": "https://www.edamam.com/food-img/241/24178db68d42001caf980f8f209534cb.jpg"
          },
          {
            "text": "1/2 cup white wine",
            "quantity": 0.5,
            "measure": "cup",
            "food": "white wine",
            "weight": 117.6,
            "foodCategory": "wines",
            "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
            "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
          },
          {
            "text": "1 can condensed cream of mushroom soup",
            "quantity": 1,
            "measure": "can",
            "food": "condensed cream of mushroom soup",
            "weight": 303,
            "foodCategory": "canned soup",
            "foodId": "food_b628l7bbpw7rnqa1ri8egb0xetpn",
            "image": "https://www.edamam.com/food-img/545/545d0db4311588977bed0aabfa530c58.jpg"
          },
          {
            "text": "1 cup cheddar cheese",
            "quantity": 1,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 132,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "1/2 tsp dry mustard",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dry mustard",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b0xqxo3a93nsz8a6ppdilau4ujwt",
            "image": "https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg"
          },
          {
            "text": "8 oz, can tuna, shrimp or crab",
            "quantity": 8,
            "measure": "ounce",
            "food": "can tuna",
            "weight": 226.796185,
            "foodCategory": "canned seafood",
            "foodId": "food_a0jj77zb6yprvtasct45abh6qkxp",
            "image": "https://www.edamam.com/food-img/b53/b53adeb03d265a094fb598dd89f33450.jpg"
          },
          {
            "text": "1 cup breadcrumbs",
            "quantity": 1,
            "measure": "cup",
            "food": "breadcrumbs",
            "weight": 108,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_ata1dxza443wfda7jb4e5b3zwt9p",
            "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
          }
        ],
        "calories": 2690.7571038625,
        "totalWeight": 1183.49332375,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2690.7571038625,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 134.158510171125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 42.130519024687494,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.6305059237000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 35.1820880252125,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.719843295,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 233.57303350462502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 221.026925064625,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 12.546108440000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.141053604625,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 116.85426525700001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 216.28662660000003,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4312.022405275,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1212.5197505875,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 248.9446060875,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1392.0777905625002,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.290660619250001,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.592083332875001,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1541.4582893875,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 391.79535145,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.071,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.351416280375,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.3694170786500002,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 34.31560067035,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.2685977671750002,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 259.985332375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 109.86533237500001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 88.56,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 7.322902717500002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.11955422,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.379734263125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 194.99208950874998,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 668.15201569525,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Green coconut curry with salmon",
        "image": "https://media.wincacademy.nl/react/images/final-project/coconut-curry-salmon.jpeg",
        "url": "http://www.aliceincookingland.com/recipe/green-coconut-curry-salmon/",
        "yield": 18,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Dairy-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Tree-Nuts",
          "Shellfish",
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "1 1/2 lb salmon",
          "1 zuchinni finely chopped",
          "2 green peppers",
          "2 cloves garlic diced",
          "1 lb mushrooms sliced",
          "2 heads baby bok choy cut into fourths",
          "3 tsp ginger finely grated",
          "4 tbsp grapeseed oil",
          "2 14-oz cans coconut milk",
          "4 tbsp green curry paste",
          "2 tbsp fish sauce",
          "1 lime juiced",
          "1/2 cup fresh basil chopped",
          "2 green onions sliced",
          "1 tsp salt",
          "1 tsp pepper",
          "1 package Aisian noodles we used Soba"
        ],
        "ingredients": [
          {
            "text": "1 1/2 lb salmon",
            "quantity": 1.5,
            "measure": "pound",
            "food": "salmon",
            "weight": 680.388555,
            "foodCategory": "seafood",
            "foodId": "food_bhncugnadgibupafbeeapbislbom",
            "image": "https://www.edamam.com/food-img/9a0/9a0f38422e9f21dcedbc2dca0d8209ac.jpg"
          },
          {
            "text": "1 zuchinni finely chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "zuchinni",
            "weight": 196,
            "foodCategory": "vegetables",
            "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
            "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
          },
          {
            "text": "2 green peppers",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green peppers",
            "weight": 232.57777777777778,
            "foodCategory": "vegetables",
            "foodId": "food_bz8rcwobbzm7zhb3wh2n7aznivou",
            "image": "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg"
          },
          {
            "text": "2 cloves garlic diced",
            "quantity": 2,
            "measure": "clove",
            "food": "garlic",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lb mushrooms sliced",
            "quantity": 1,
            "measure": "pound",
            "food": "mushrooms",
            "weight": 453.59237,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "2 heads baby bok choy cut into fourths",
            "quantity": 2,
            "measure": "head",
            "food": "bok choy",
            "weight": 151.99999999999983,
            "foodCategory": "vegetables",
            "foodId": "food_bq7w3usaxapk30b8utp6lasy79lv",
            "image": "https://www.edamam.com/food-img/c76/c7698a4dc6baecd186476820b6b91cdc.jpg"
          },
          {
            "text": "3 tsp ginger finely grated",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "ginger",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
            "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
          },
          {
            "text": "4 tbsp grapeseed oil",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "grapeseed oil",
            "weight": 54.4,
            "foodCategory": "Oils",
            "foodId": "food_br8vwihb5tm7wybd4ppzjaox5089",
            "image": "https://www.edamam.com/food-img/88b/88bb3399c7bf214d2bce6bd86780eaf2.jpg"
          },
          {
            "text": "2 14-oz cans coconut milk",
            "quantity": 28,
            "measure": "ounce",
            "food": "coconut milk",
            "weight": 793.7866475000001,
            "foodCategory": "non-dairy beverages",
            "foodId": "food_by1k6v2adj7drhbq9w1rpbpen9ms",
            "image": "https://www.edamam.com/food-img/671/671f7528eadb1b01efb53243d0ef0f80.JPG"
          },
          {
            "text": "4 tbsp green curry paste",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "curry paste",
            "weight": 64,
            "foodCategory": "condiments and sauces",
            "foodId": "food_aojdol2are6zg7af2nincbe87jot",
            "image": "https://www.edamam.com/food-img/b6a/b6a9ebae5850f42eca0253827603ef9c.jpg"
          },
          {
            "text": "2 tbsp fish sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "fish sauce",
            "weight": 36,
            "foodCategory": "canned soup",
            "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
            "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
          },
          {
            "text": "1 lime juiced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "1/2 cup fresh basil chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "fresh basil",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          },
          {
            "text": "2 green onions sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green onions",
            "weight": 30,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 tsp pepper",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 2.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 package Aisian noodles we used Soba",
            "quantity": 1,
            "measure": "package",
            "food": "noodles",
            "weight": 340,
            "foodCategory": "grains",
            "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
            "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
          }
        ],
        "calories": 5112.068417170556,
        "totalWeight": 3132.645350277778,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5112.068417170556,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 336.96978048289225,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 181.28297571055614,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.2074,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.68709068526722,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 73.26260006699724,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 328.1063749712389,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 297.98885939653667,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 30.11751557470222,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 32.25989848546667,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 230.65632545302884,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 665.70150452552,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 6120.048996514333,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 673.4619165553777,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 988.5084524161775,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 8413.89930292511,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 51.18356467470444,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 18.335398636711112,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3885.2424455315554,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 246.90042395519998,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 345.5847355913334,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 6.220408624813333,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.799611279027777,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 114.07125079756834,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.403383890282219,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 1891.6150528181777,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 732.2150528181777,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 683.4000000000001,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 23.33407684378,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.9271847400000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 44.03291935599778,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 218.48374043807544,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2193.2876144164557,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Vegan Herb Crackers recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/herb-crackers.jpeg",        
        "url": "https://elanaspantry.com/herb-crackers/",
        "yield": 15,
        "dietLabels": [
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "FODMAP-Free",
          "Kosher"
        ],
        "cautions": [
          "FODMAP"
        ],
        "ingredientLines": [
          "2 cups blanched almond flour (not almond meal)",
          "\xBE teaspoon celtic sea salt",
          "2 tablespoons herbes de provence",
          "1 tablespoon olive oil",
          "2 tablespoons water"
        ],
        "ingredients": [
          {
            "text": "2 cups blanched almond flour (not almond meal)",
            "quantity": 2,
            "measure": "cup",
            "food": "blanched almond flour",
            "weight": 224,
            "foodCategory": "grains",
            "foodId": "food_aquymekalw81cfbcaho71btv3lnt",
            "image": "https://www.edamam.com/food-img/4ce/4ce26863cf14ffeb473cc6f9edcc60f0.jpg"
          },
          {
            "text": "\xBE teaspoon celtic sea salt",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "sea salt",
            "weight": 3.6406250001846567,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons herbes de provence",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "herbes de provence",
            "weight": 5.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "2 tablespoons water",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "water",
            "weight": 29.573529562,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 1445.316,
        "totalWeight": 274.08661383452016,
        "totalTime": 30,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "starter"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1445.316,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 125.81162,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 9.739500000000001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 9.875115000000001,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 1.484865,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 46.10236,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 20.920359999999995,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 25.182000000000002,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 7.8203400000000025,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 50.60074000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 633.6317435258399,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 260.2693461122648,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 12.191866138345203,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1675.5672467418017,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.174523178099317,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.33829043722872015,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1074.4284000000002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 10.260000000000002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.7,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.027702000000000004,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.021546000000000003,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.26676000000000005,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.029700000000000008,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.34117,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 100.71000000000001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 29.967842200983043,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Baked Chicken Parm",
        "image": "https://media.wincacademy.nl/react/images/final-project/baked-chicken-parm.jpeg",
        "url": "https://food52.com/recipes/17016-baked-chicken-parm",
        "yield": 4,
        "dietLabels": [
          "High-Fiber",
          "Low-Fat"
        ],
        "healthLabels": [
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon oil",
          "1 1/2 cup panko",
          "1/2 cup grated parmesan cheese",
          "1/4 teaspoon salt",
          "1/4 teaspoon ground black pepper",
          "1/8 teaspoon garlic powder",
          "1 teaspoon dried italian seasoning",
          "2 large eggs",
          "2 large boneless, skinless chicken breast halves",
          "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
          "2 cups purchased marinara sauce",
          "4 servings angel hair pasta, prepared according to package instructions"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "1 1/2 cup panko",
            "quantity": 1.5,
            "measure": "cup",
            "food": "panko",
            "weight": 90,
            "foodCategory": "grains",
            "foodId": "food_a9tnk2lbj0xkckbytqnx1ajhpqbp",
            "image": null
          },
          {
            "text": "1/2 cup grated parmesan cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 74.353125,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/4 teaspoon ground black pepper",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "black pepper",
            "weight": 0.575,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1/8 teaspoon garlic powder",
            "quantity": 0.125,
            "measure": "teaspoon",
            "food": "garlic powder",
            "weight": 0.3875,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1 teaspoon dried italian seasoning",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "italian seasoning",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "2 large eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 100,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 large boneless, skinless chicken breast halves",
            "quantity": 2,
            "measure": "half",
            "food": "boneless, skinless chicken breast",
            "weight": 217.5,
            "foodCategory": "Poultry",
            "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
            "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
          },
          {
            "text": "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 66,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "2 cups purchased marinara sauce",
            "quantity": 2,
            "measure": "cup",
            "food": "marinara sauce",
            "weight": 528,
            "foodCategory": "canned soup",
            "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
            "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
          },
          {
            "text": "4 servings angel hair pasta, prepared according to package instructions",
            "quantity": 4,
            "measure": "serving",
            "food": "angel hair pasta",
            "weight": 1200,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
        ],
        "calories": 6118.390125,
        "totalWeight": 2293.315625,
        "totalTime": 116,
        "cuisineType": [
          "mediterranean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 6118.390125,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 99.64538593750002,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 34.6237216875,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.913065,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 29.21728721875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 17.610497531249997,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 1004.0793118749999,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 952.744961875,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 51.33435000000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 65.13982125000001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 276.6349159375,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 659.2151250000001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4683.3015000000005,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1981.3793750000002,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 857.972,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5363.8595000000005,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 25.297121875000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 25.1352396875,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3941.5084375,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 679.0112187500001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 11.06465,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.5054243437500001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.42291875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 62.323053718749996,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.66494884375,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.8197875000000003,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.767765625,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 19.466153125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 106.57482812500001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 863.4466100000002,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Parmesan grissini",
        "image": "https://media.wincacademy.nl/react/images/final-project/parmesan-grissini.jpeg",
        "url": "https://www.goodfood.com.au/recipes/parmesan-grissini-20121001-33zi8",
        "yield": 6,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon (3 g) instant dried yeast",
          "a pinch of caster (superfine) sugar",
          "1 tablespoon extra virgin olive oil",
          "250 g (9 oz/2 cups) white strong flour",
          "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon (3 g) instant dried yeast",
            "quantity": 3,
            "measure": "gram",
            "food": "yeast",
            "weight": 3,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "a pinch of caster (superfine) sugar",
            "quantity": 1,
            "measure": "pinch",
            "food": "sugar",
            "weight": 0.2604166669968817,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 tablespoon extra virgin olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "extra virgin olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "250 g (9 oz/2 cups) white strong flour",
            "quantity": 250,
            "measure": "gram",
            "food": "flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese",
            "quantity": 60,
            "measure": "gram",
            "food": "parmesan cheese",
            "weight": 60,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 1275.297812501278,
        "totalWeight": 326.7604166669969,
        "totalTime": 90,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "biscuits and cookies"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1275.297812501278,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 31.676299999999998,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.12761,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 14.705504999999999,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.7950150000000002,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 194.2039645836635,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 186.64696458366348,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 7.557,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 1.414895833662888,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.25989583366288793,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 48.48819999999999,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 40.8,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 832.40260416667,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 748.93760416667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 83.02,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 351.4902083333399,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 3.557830208333498,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.6382260416667,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 705.51,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 124.19999999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.009,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6530999999999999,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.4192494791667294,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 4.4936,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.20959999999999995,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.7221,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.3,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.21925,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 9.909,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 47.4484520833334,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Easy Chili Almonds recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/easy-chili-almonds.jpeg",
        "url": "http://www.pumpkinnspice.com/2017/02/05/easy-chili-almonds/",
        "yield": 2,
        "dietLabels": [
          "High-Fiber",
          "Low-Carb"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 cups California Almonds",
          "1 tablespoon olive oil",
          "1 1/2 teaspoons chili powder",
          "1 tablespoon kosher salt",
          "2 tablespoons fresh cilantro, chopped"
        ],
        "ingredients": [
          {
            "text": "2 cups California Almonds",
            "quantity": 2,
            "measure": "cup",
            "food": "Almonds",
            "weight": 286,
            "foodCategory": "plant-based protein",
            "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
            "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons chili powder",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 4.050000000000001,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "1 tablespoon kosher salt",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "kosher salt",
            "weight": 14.562499999753793,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons fresh cilantro, chopped",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "cilantro",
            "weight": 1.999999999966186,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          }
        ],
        "calories": 1787.160999999992,
        "totalWeight": 307.0732646524249,
        "totalTime": 10,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1787.160999999992,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 156.88853999999984,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.837790999999994,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.042899999999999994,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 100.22114049999989,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 37.00658799999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 63.71924999999876,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 26.50384999999971,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 37.21539999999905,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.749594999999704,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 61.07672999999927,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 710.5504139999216,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 784.5455835165673,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 778.7697326465158,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2186.0318611720204,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.427276773352515,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.108873264652289,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1388.7699999999836,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 66.80149999988606,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.5683499999908702,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.5977649999999773,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.2959899999999447,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 10.839559999999622,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.47960699999994966,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 76.83371999999916,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 18.60784999989518,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 14.895221529273739,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Korean Seasoned Potatoes (\uAC10\uC790 \uC870&",
        "image": "https://media.wincacademy.nl/react/images/final-project/korean-potatoes.webp",
        "url": "http://www.food.com/recipe/korean-seasoned-potatoes-44048-51088-51312-390718",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 medium potatoes",
          "2 tablespoons soy sauce",
          "2 teaspoons sugar (or sweetener of your choice)",
          "1 teaspoon garlic, minced",
          "2 teaspoons sesame seeds",
          "1 -2 teaspoon sesame seed oil",
          "4 tablespoons scallions, minced"
        ],
        "ingredients": [
          {
            "text": "2 medium potatoes",
            "quantity": 2,
            "measure": "<unit>",
            "food": "potatoes",
            "weight": 426,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          },
          {
            "text": "2 tablespoons soy sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "soy sauce",
            "weight": 32,
            "foodCategory": "plant-based protein",
            "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
            "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
          },
          {
            "text": "2 teaspoons sugar (or sweetener of your choice)",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sugar",
            "weight": 8.4,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 teaspoon garlic, minced",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "garlic",
            "weight": 2.8,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "2 teaspoons sesame seeds",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sesame seeds",
            "weight": 6.000000000304327,
            "foodCategory": "plant-based protein",
            "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
            "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
          },
          {
            "text": "1 -2 teaspoon sesame seed oil",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "oil",
            "weight": 6.75,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "4 tablespoons scallions, minced",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "scallions",
            "weight": 24,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          }
        ],
        "calories": 483.3900000017438,
        "totalWeight": 505.9500000003043,
        "totalTime": 20,
        "cuisineType": [
          "south east asian",
          "korean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 483.3900000017438,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 10.35560000015116,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.058849500021172,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.026662500000000002,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 5.440138000057089,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.498037000066261,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 88.49240000007136,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 77.47360000003545,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.018800000035911,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.439200000000914,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 8.3832,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 12.891080000053957,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1788.3800000000335,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 142.6120000029672,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 148.2200000010682,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2038.376000001424,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.06680000004428,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.105720000023585,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 346.8440000019142,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 89.3076,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.41762000000240723,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.22781600000075167,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 5.60926000001374,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.4006800000024042,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.3703900000007612,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 62.63435,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 384.2389200000143,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Oven Baked Mexican Rice recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/mexican-rice.webp",
        "url": "http://keciasflavorbreakthrough.com/oven-baked-mexican-rice/",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 cup whole grain rice",
          "2 cup chicken or vegetable broth",
          "1 cup tomato sauce",
          "6 scallions chopped, divided",
          "1 jalapeno pepper, seeds, veins removed and diced",
          "\xBD bell pepper diced",
          "1 clove garlic minced",
          "\xBD cup frozen sweet corn kernels, thawed",
          "1 tsp cilantro",
          "2 tsp cumin",
          "1 tsp chili powder",
          "2 tsp salt",
          "1/2 cup shredded cheddar or Mexican blend cheese"
        ],
        "ingredients": [
          {
            "text": "1 cup whole grain rice",
            "quantity": 1,
            "measure": "cup",
            "food": "whole grain rice",
            "weight": 190,
            "foodCategory": "grains",
            "foodId": "food_aro09r9avsklizbsberuoaegj0uh",
            "image": "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg"
          },
          {
            "text": "2 cup chicken or vegetable broth",
            "quantity": 2,
            "measure": "cup",
            "food": "vegetable broth",
            "weight": 454,
            "foodCategory": "Vegan products",
            "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
            "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
          },
          {
            "text": "1 cup tomato sauce",
            "quantity": 1,
            "measure": "cup",
            "food": "tomato sauce",
            "weight": 245,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 scallions chopped, divided",
            "quantity": 6,
            "measure": "<unit>",
            "food": "scallions",
            "weight": 90,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 jalapeno pepper, seeds, veins removed and diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "jalapeno pepper",
            "weight": 14,
            "foodCategory": "vegetables",
            "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
            "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
          },
          {
            "text": "\xBD bell pepper diced",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "bell pepper",
            "weight": 59.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1 clove garlic minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "\xBD cup frozen sweet corn kernels, thawed",
            "quantity": 0.5,
            "measure": "cup",
            "food": "corn kernels",
            "weight": 70.5,
            "foodCategory": "vegetables",
            "foodId": "food_bljsxw8akb9zr5aj5dahpay2gxsb",
            "image": "https://www.edamam.com/food-img/34c/34c09c7af85efb3a2025167cc38af8d1.jpg"
          },
          {
            "text": "1 tsp cilantro",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "cilantro",
            "weight": 0.33333333335024,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          },
          {
            "text": "2 tsp cumin",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "cumin",
            "weight": 4.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "1 tsp chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 cup shredded cheddar or Mexican blend cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mexican blend cheese",
            "weight": 56,
            "foodCategory": "Cheese",
            "foodId": "food_ari4tsrahqllsdap5f2rkb5g60ng",
            "image": "https://www.edamam.com/food-img/8ee/8ee24c655103a961f2c48054b672a9db.jpg"
          }
        ],
        "calories": 1123.0241452052305,
        "totalWeight": 1192.4077378998313,
        "totalTime": 50,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1123.0241452052305,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 24.70364773767342,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 10.97607104170667,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.384159168186714,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.43750068367334,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 192.94110791691398,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 175.34687236822018,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 17.594235548693803,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.516731647060148,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 36.73504390126037,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 53.2,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2765.5383320000396,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 612.3098797637601,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 393.489078675556,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2051.7486483513735,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.424348741549686,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.386391343193232,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 969.6826463092882,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 365.3858809112703,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 129.28132405812454,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0456329733333447,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.6373697849600275,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 13.972286409053524,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.7363836725666917,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 160.10624152709713,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 186.89624152709712,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.6890773940000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.28166164000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.9083901328137545,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 211.47728196646577,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 922.7590471832152,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Swedish Pancakes",
        "image": "https://media.wincacademy.nl/react/images/final-project/swedish-pancakes.webp",
        "url": "http://scratchthiswithsandy.com/2014/01/19/swedish-pancakes/",
        "yield": 6,
        "dietLabels": [
          "Balanced",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "* 4 egg",
          "* 2 cup milk",
          "* 3/4 cup flour",
          "* 1 tbl sugar",
          "* pinch of salt",
          "* 2 tbl melted butter"
        ],
        "ingredients": [
          {
            "text": "* 4 egg",
            "quantity": 4,
            "measure": "<unit>",
            "food": "egg",
            "weight": 172,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "* 2 cup milk",
            "quantity": 2,
            "measure": "cup",
            "food": "milk",
            "weight": 488,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "* 3/4 cup flour",
            "quantity": 0.75,
            "measure": "cup",
            "food": "flour",
            "weight": 93.75,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "* 1 tbl sugar",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "sugar",
            "weight": 12.4999999997887,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "* pinch of salt",
            "quantity": 1,
            "measure": "pinch",
            "food": "salt",
            "weight": 0.380208333815447,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "* 2 tbl melted butter",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 28.4,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          }
        ],
        "calories": 1136.8929999991822,
        "totalWeight": 795.030208333604,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "pancake"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1136.8929999991822,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 56.171189999999996,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 29.211744500000002,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.9963119999999999,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 16.3058465,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.489919499999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 108.71756499978872,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 106.18631499978872,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 2.53125,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 38.02556499978912,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 12.474999999789123,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.900975,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 749.6999999999999,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 606.5651460201889,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 668.8547500001135,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 90.63680208333815,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 988.9289166667011,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.266459687501484,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 4.707840208333794,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 858.546,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 693.9359999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.40719999999999995,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.66029099999996,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1.747123,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.5101819999999999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3.77508,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 10.21,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.86273,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.24925,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 577.3256204166676,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Pizza with taleggio, prosciutto and pear",
        "image": "https://media.wincacademy.nl/react/images/final-project/pizza-pear.jpeg",
        "url": "https://www.goodfood.com.au/recipes/pizza-with-taleggio-prosciutto-and-pear-20111018-29wks",
        "yield": 12,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "500g flour",
          "1 tbsp instant yeast",
          "1 tsp salt",
          "300ml warm water",
          "2 tbsp olive oil",
          "For the topping",
          "1-2 tbsp olive oil",
          "300g taleggio",
          "8 slices prosciutto",
          "2 pears, finely sliced",
          "handful fresh rocket"
        ],
        "ingredients": [
          {
            "text": "500g flour",
            "quantity": 500,
            "measure": "gram",
            "food": "flour",
            "weight": 500,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "1 tbsp instant yeast",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "yeast",
            "weight": 12,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "300ml warm water",
            "quantity": 300,
            "measure": "milliliter",
            "food": "water",
            "weight": 300,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 tbsp olive oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1-2 tbsp olive oil",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 20.25,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "300g taleggio",
            "quantity": 300,
            "measure": "gram",
            "food": "taleggio",
            "weight": 300,
            "foodCategory": "Cheese",
            "foodId": "food_b6s9dpea421339bjgiudnaoxh7nl",
            "image": "https://www.edamam.com/food-img/419/419fc950e8f2a589a11d63efb28b8bef.jpg"
          },
          {
            "text": "8 slices prosciutto",
            "quantity": 8,
            "measure": "slice",
            "food": "prosciutto",
            "weight": 120,
            "foodCategory": "cured meats",
            "foodId": "food_au1dzjfa990c8yap79k4nawq65y9",
            "image": "https://www.edamam.com/food-img/802/8029e7b80cce92694182b85a1ebd1822.jpg"
          },
          {
            "text": "2 pears, finely sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "pears",
            "weight": 372.8888888888889,
            "foodCategory": "fruit",
            "foodId": "food_bq6stkiaxkwhxia9q4v7wanjnew0",
            "image": "https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg"
          },
          {
            "text": "handful fresh rocket",
            "quantity": 1,
            "measure": "handful",
            "food": "rocket",
            "weight": 2.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8z1kzrawhksuzav2g1irb6zf4zc",
            "image": "https://www.edamam.com/food-img/fa7/fa761a311efc0ec361a5eba4ed71870e.jpeg"
          }
        ],
        "calories": 3623.8616666666667,
        "totalWeight": 1654.638888888889,
        "totalTime": 120,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3623.8616666666667,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 136.36574444444446,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 56.61658555555556,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 61.39480416666666,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 10.733648055555555,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 445.1186277777778,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 416.7910722222223,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 28.327555555555556,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 39.137916666666676,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 150.66970000000003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 300,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5793.4688888888895,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1301.6325,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 236.75722222222225,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2264.848611111111,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.404700000000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 15.379438888888888,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2085.086666666667,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 729.7038888888889,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 16.445222222222224,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.729046666666667,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.533501111111111,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.229176111111112,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.6949627777777776,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.9644,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.2800000000000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.504591666666666,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 55.11461111111112,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 897.795861111111,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Strawberry Cheesecake recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/strawberry-cheesecake.webp",
        "url": "http://allrecipes.com/recipe/222588/strawberry-cheesecake/",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Gluten",
          "Wheat",
          "Sulfites"
        ],
        "ingredientLines": [
          "1 1/4 cups graham cracker crumbs",
          "1/4 cup white sugar",
          "2 teaspoons ground cinnamon",
          "1/3 cup butter, melted",
          "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
          "1 tablespoon cornstarch",
          "3 (8 ounce) packages cream cheese, softened",
          "1 (14 ounce) can sweetened condensed milk",
          "1/4 cup lemon juice",
          "1/2 teaspoon vanilla extract",
          "3 eggs",
          "1 tablespoon water (optional)"
        ],
        "ingredients": [
          {
            "text": "1 1/4 cups graham cracker crumbs",
            "quantity": 1.25,
            "measure": "cup",
            "food": "cracker crumbs",
            "weight": 65,
            "foodCategory": "crackers",
            "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
            "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
          },
          {
            "text": "1/4 cup white sugar",
            "quantity": 0.25,
            "measure": "cup",
            "food": "white sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "2 teaspoons ground cinnamon",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "ground cinnamon",
            "weight": 5.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_atjxtznauw5zabaixm24xa787onz",
            "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
          },
          {
            "text": "1/3 cup butter, melted",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "butter",
            "weight": 75.66666666666666,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
            "quantity": 20,
            "measure": "ounce",
            "food": "strawberries",
            "weight": 566.9904625,
            "foodCategory": "fruit",
            "foodId": "food_b4s2ibkbrrucmbabbaxhfau8ay42",
            "image": "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg"
          },
          {
            "text": "1 tablespoon cornstarch",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cornstarch",
            "weight": 7.999999999864745,
            "foodCategory": null,
            "foodId": "food_bevnfkfbvjm45pbbgj9nsb3ypntm",
            "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
          },
          {
            "text": "3 (8 ounce) packages cream cheese, softened",
            "quantity": 24,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 680.388555,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1 (14 ounce) can sweetened condensed milk",
            "quantity": 14,
            "measure": "ounce",
            "food": "sweetened condensed milk",
            "weight": 396.89332375000004,
            "foodCategory": "Milk",
            "foodId": "food_a89byenbz1jssabxmx7i6aa77jz1",
            "image": "https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg"
          },
          {
            "text": "1/4 cup lemon juice",
            "quantity": 0.25,
            "measure": "cup",
            "food": "lemon juice",
            "weight": 61,
            "foodCategory": "100% juice",
            "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
            "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
          },
          {
            "text": "1/2 teaspoon vanilla extract",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla extract",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "3 eggs",
            "quantity": 3,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 129,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "1 tablespoon water (optional)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "water",
            "weight": 14.786764781,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 5097.185375336985,
        "totalWeight": 2055.0257726975315,
        "totalTime": 645,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5097.185375336985,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 360.2325051190833,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 199.67873967423336,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.2287733333333333,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.42800230728746,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 25.31875591992914,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 393.92277982837663,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 378.0717705783778,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 15.851009249998782,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 323.13166435175,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 97.1447459855413,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1525.9344739083335,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3659.6764554620613,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 2110.1749002934275,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 274.24919523113937,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3641.375844637496,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.102928053707698,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.184514197728019,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2305.5836883874827,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 3514.3330755000006,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 367.5142183675,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.9711577467083332,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.5607334889666666,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 7.099651569875,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.0063791067374999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 427.49071766249995,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 335.1907176625,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 54.599999999999994,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.724035345333334,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 8.5911179775,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.544035135416665,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 86.93748487916668,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1181.137699732458,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Mushroom and Spinach Ravioli",
        "image": "https://media.wincacademy.nl/react/images/final-project/spinach-ravioli.jpeg",
        "url": "http://ourlifetastesgood.blogspot.com/2012/07/mushroom-and-spinach-ravioli-with-chive.html",
        "yield": 2,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon olive oil",
          "1 1/2 teaspoons water (or more as needed)",
          "2 eggs",
          "2 cups all-purpose flour (or more as needed)",
          "1/4 teaspoon salt",
          "1 teaspoon olive oil",
          "1 clove garlic, minced",
          "1/2 chopped onion",
          "1 (8 ounce) package fresh mushrooms, chopped",
          "4 ounces cream cheese softened",
          "1/3 cup grated Parmesan Cheese",
          "1/2 cup Mozzarella Cheese",
          "1/2 cup frozen spinach, thawed and drained",
          "1 tablespoon chopped fresh chives",
          "1 tablespoon fresh parsley",
          "1/2 teaspoon ground cayenne pepper",
          "salt",
          "pepper",
          "1 egg white beaten",
          "3 tablespoons unsalted butter",
          "1 1/2 teaspoons chopped fresh chives"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons water (or more as needed)",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "water",
            "weight": 7.393382391,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 86,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 cups all-purpose flour (or more as needed)",
            "quantity": 2,
            "measure": "cup",
            "food": "all-purpose flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
            "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 clove garlic, minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1/2 chopped onion",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "onion",
            "weight": 62.5,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1 (8 ounce) package fresh mushrooms, chopped",
            "quantity": 8,
            "measure": "ounce",
            "food": "mushrooms",
            "weight": 226.796185,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "4 ounces cream cheese softened",
            "quantity": 4,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 113.3980925,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1/3 cup grated Parmesan Cheese",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Parmesan Cheese",
            "weight": 49.56875,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/2 cup Mozzarella Cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mozzarella Cheese",
            "weight": 129.9375,
            "foodCategory": "Cheese",
            "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
            "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
          },
          {
            "text": "1/2 cup frozen spinach, thawed and drained",
            "quantity": 0.5,
            "measure": "cup",
            "food": "spinach",
            "weight": 15,
            "foodCategory": "vegetables",
            "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
            "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
          },
          {
            "text": "1 tablespoon chopped fresh chives",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "chives",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          },
          {
            "text": "1 tablespoon fresh parsley",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "parsley",
            "weight": 3.8,
            "foodCategory": "vegetables",
            "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
            "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
          },
          {
            "text": "1/2 teaspoon ground cayenne pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "cayenne pepper",
            "weight": 0.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8iooz3aris8gba605l07brngnrx",
            "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
          },
          {
            "text": "salt",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 6.193763459345999,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 3.0968817296729996,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 egg white beaten",
            "quantity": 1,
            "measure": "<unit>",
            "food": "egg white",
            "weight": 26.4,
            "foodCategory": "Eggs",
            "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
            "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
          },
          {
            "text": "3 tablespoons unsalted butter",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 42.599999999999994,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "1 1/2 teaspoons chopped fresh chives",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chives",
            "weight": 1.5,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          }
        ],
        "calories": 2523.210560191479,
        "totalWeight": 1034.356009510093,
        "totalTime": 75,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2523.210560191479,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 139.10042037038735,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 76.66771694127705,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.4291079999999998,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 41.58860721698228,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.370521302387136,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 218.72712386187592,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 206.98745093426865,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.739672927607268,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.017192025319906,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 101.38330313846303,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 685.5990267500001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2404.2923580980423,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1609.214281027642,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 178.172863735545,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1740.9563865685082,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 16.68506486148633,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.56972100746163,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1691.469395282883,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1318.3283641170117,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 22.894819885000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.306116973118047,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.3985371664384116,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 23.86636554774516,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.8420161031083486,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 888.1944240190444,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 233.19442401904442,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 385,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.77916245525,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.3905121750000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.1493016567386,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 167.2074463239747,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 561.1935454974051,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Cajun Pork Pinwheels",
        "image": "https://media.wincacademy.nl/react/images/final-project/cayun-pork-pinwheel.jpeg",
        "url": "https://www.bigoven.com/recipe/cajun-pork-pinwheels/158806",
        "yield": 6,
        "dietLabels": [
          "High-Protein",
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 pork tenderloins ; about 1 pound each",
          "1 tablespoon Vegetable oil",
          "1 cup red bell pepper ; finely chopped",
          "1/2 cup Onion ; finely chopped",
          "1/2 cup celery ; finely chopped",
          "1 teaspoon dried thyme leaves ; crushed",
          "1/4 teaspoon Garlic salt",
          "1/2 teaspoon Ground red pepper",
          "1/2 teaspoon Paprika",
          "1 tablespoon fennel seed ; crushed",
          "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)"
        ],
        "ingredients": [
          {
            "text": "2 pork tenderloins ; about 1 pound each",
            "quantity": 2,
            "measure": "pound",
            "food": "pork tenderloins",
            "weight": 907.18474,
            "foodCategory": "meats",
            "foodId": "food_bgd2x5qbzpcbz0apfim52a8wr97x",
            "image": "https://www.edamam.com/food-img/4df/4dfc18749ffa490e3d4daf9dd2ea4d34.jpg"
          },
          {
            "text": "1 tablespoon Vegetable oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "Vegetable oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
            "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
          },
          {
            "text": "1 cup red bell pepper ; finely chopped",
            "quantity": 1,
            "measure": "cup",
            "food": "red bell pepper",
            "weight": 149,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 cup Onion ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Onion",
            "weight": 80,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup celery ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "celery",
            "weight": 50.5,
            "foodCategory": "vegetables",
            "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
            "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
          },
          {
            "text": "1 teaspoon dried thyme leaves ; crushed",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried thyme",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1/4 teaspoon Garlic salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "Garlic salt",
            "weight": 0.775,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1/2 teaspoon Ground red pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "red pepper",
            "weight": 1.5520833334120565,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 teaspoon Paprika",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "Paprika",
            "weight": 1.15,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
            "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
          },
          {
            "text": "1 tablespoon fennel seed ; crushed",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "fennel seed",
            "weight": 5.8,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a7gzoswb5qrepsa8xcla8bxm5wla",
            "image": "https://www.edamam.com/food-img/a40/a4059150e503052ae5a390af6e666873.jpg"
          },
          {
            "text": "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "seasoning",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
            "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
          }
        ],
        "calories": 1277.8849994333577,
        "totalWeight": 1212.4618233334124,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1277.8849994333577,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 46.243549005900235,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.316188002930023,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.41763718108000003,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.405505878150002,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 7.625709285193389,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 23.89075312500475,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 15.242159375003098,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.648593750001652,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 10.573730000003305,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 182.1281044945008,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 560.18657695,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 505.07734489333643,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 207.30192601333886,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 294.8478858100095,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 4104.8568726235,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.403798837433673,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 17.090634614433537,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2208.340013956687,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 280.087270833457,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 201.65816041676715,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 8.631749814460042,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.1252729659434006,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 59.261679644134105,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.2544416604502295,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.481492615600001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.585476509,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 7.9135315232679115,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 52.6461020833372,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 905.3225831408392,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Fire Roasted Tomato Soup recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/tomato-soup.jpeg",
        "url": "http://therecipecritic.com/2013/02/fire-roasted-tomato-soup/",
        "yield": 8,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Mediterranean",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 medium onion, diced",
          "3 cloves garlic, minced",
          "1 T olive oil",
          "8 oz can tomato sauce",
          "6 oz can tomato paste",
          "28 oz can whole tomatoes",
          "2 14 oz cans fire roasted diced tomatoes",
          "2 cups water",
          "2 cups chicken broth",
          "2 tsp salt",
          "1/2 tsp pepper",
          "1 1/2 cups heavy cream",
          "1/4 cup parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 medium onion, diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 110,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "3 cloves garlic, minced",
            "quantity": 3,
            "measure": "clove",
            "food": "garlic",
            "weight": 9,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 T olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "8 oz can tomato sauce",
            "quantity": 8,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 226.796185,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 oz can tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "28 oz can whole tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "whole tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 14 oz cans fire roasted diced tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "diced tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 cups water",
            "quantity": 2,
            "measure": "cup",
            "food": "water",
            "weight": 474,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 cups chicken broth",
            "quantity": 2,
            "measure": "cup",
            "food": "chicken broth",
            "weight": 480,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 tsp pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 1.45,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 1/2 cups heavy cream",
            "quantity": 1.5,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 357,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "1/4 cup parmesan cheese",
            "quantity": 0.25,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 37.1765625,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 2098.9340903750003,
        "totalWeight": 3463.8814151342513,
        "totalTime": 55,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "soup"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2098.9340903750003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 157.603754438375,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 91.36432640115001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.8967418560875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.816557503037501,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 141.57510001012503,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 98.60943194137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 42.96566806875,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 91.87988720825001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 57.249755738250016,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 528.7700625,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 8040.563791133251,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1367.2937993322207,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 345.2976253638426,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6453.095646035741,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 18.285999876568027,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.353450237759252,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1129.2093990125002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 2046.1006295250002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 267.21124150624996,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.616240673275,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.2471676422875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 26.833612026075002,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 3.018696610325001,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.0887187500000002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.6848828125,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 24.64674290825,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 85.70992423,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 3072.464483754519,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Homemade Sweet Spaghetti Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/sweet-spaghetti-sauce.jpeg",
        "url": "https://www.recipezazz.com/recipe/homemade-sweet-spaghetti-sauce-4752",
        "yield": 8,
        "dietLabels": [],
        "healthLabels": [
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon olive oil (or coconut oil)",
          "1 to 2 garlic cloves, minced",
          "1 pound ground turkey (or 1 pound lean ground beef, optional)",
          "1 can (32 ounce) tomato sauce (no-salt-added)",
          "8 ounces red wine",
          "24 ounces water (or use all water and no wine)",
          "3 cans (6 ounce) tomato paste",
          "3 to 4 tablespoons instant minced onion",
          "1/4 cup granulated sugar (more less to your taste)",
          "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
          "1 teaspoon dried basil (see note)",
          "1/2 teaspoon dried oregano",
          "1 teaspoon onion powder"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon olive oil (or coconut oil)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 to 2 garlic cloves, minced",
            "quantity": 1.5,
            "measure": "clove",
            "food": "garlic",
            "weight": 4.5,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 pound ground turkey (or 1 pound lean ground beef, optional)",
            "quantity": 1,
            "measure": "pound",
            "food": "ground turkey",
            "weight": 453.59237,
            "foodCategory": "Poultry",
            "foodId": "food_av7gav4bs6txmfb85t0ruapws8if",
            "image": "https://www.edamam.com/food-img/c1a/c1a1663042ef7f4d6d50f1f6418aaac6.jpg"
          },
          {
            "text": "1 can (32 ounce) tomato sauce (no-salt-added)",
            "quantity": 32,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 907.18474,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "8 ounces red wine",
            "quantity": 8,
            "measure": "ounce",
            "food": "red wine",
            "weight": 226.796185,
            "foodCategory": "wines",
            "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
            "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
          },
          {
            "text": "24 ounces water (or use all water and no wine)",
            "quantity": 24,
            "measure": "ounce",
            "food": "water",
            "weight": 680.388555,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "3 cans (6 ounce) tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "3 to 4 tablespoons instant minced onion",
            "quantity": 3.5,
            "measure": "tablespoon",
            "food": "onion",
            "weight": 35,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/4 cup granulated sugar (more less to your taste)",
            "quantity": 0.25,
            "measure": "cup",
            "food": "granulated sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 4.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon dried basil (see note)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried basil",
            "weight": 0.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_abrithza96sev8ae5za0paqf42o0",
            "image": "https://www.edamam.com/food-img/49a/49a878702f9b654e1a965f2f2618a341.jpg"
          },
          {
            "text": "1/2 teaspoon dried oregano",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dried oregano",
            "weight": 0.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
            "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
          },
          {
            "text": "1 teaspoon onion powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "onion powder",
            "weight": 2.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bmv8z27b1o25vcbu41ooyawd2zj4",
            "image": "https://www.edamam.com/food-img/1e7/1e73e6f5dd96bb233abc0fcc05fb0ec8.jpg"
          }
        ],
        "calories": 1565.9824562250003,
        "totalWeight": 2544.6589887499995,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack",
          "lunch/dinner"
        ],
        "dishType": [
          "condiments and sauces"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1565.9824562250003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 51.898536314125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.633647450949999,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4672001411,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.346231165462502,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 12.825390744512502,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 143.58068906012502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 121.46823527137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 22.112453788749995,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 106.04028459075,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 108.69633054550003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 312.97873530000004,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5948.538027925,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 362.68973530000005,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 359.52818212500006,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5900.798736575001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 20.922087522749997,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 14.389442611625002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1372.8893675125003,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 420.25694225000007,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 105.32690518625,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6680063943000001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.6646896178375001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 45.40809048785001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.07339265715,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.535923700000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.8143694800000003,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 22.906400355250003,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 69.2513312775,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2191.2693134367505,
            "unit": "g"
          }
        }
      }
    }
  ]
}`),qE=()=>(console.log(EE.hits[0].recipe.label),q(O1,{h:"100vh",flexDir:"column",children:q($1,{children:"Your Recipe App"})})),IE=()=>q(qE,{});Vd.createRoot(document.getElementById("root")).render(q(B.StrictMode,{children:q(PE,{children:q(IE,{})})}));
