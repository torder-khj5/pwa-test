import{n as x,c as Ae,b as p,r as E,j as F,a as Qe,m as Pe,F as re,e as Ye,f as Ze,g as et,h as tt,i as nt,k as Ne,l as rt,o as st,p as ot,q as it,s as at,t as ct,w as lt}from"./index-b62d48e4.js";import{a as k,t as v,C as se}from"./index-12368cf8.js";const ut=x.div`
  width: 460px;
`,ft=x.div`
  width: 460px;
  height: 60px;
  margin-bottom: 20px;
  background-color: #f0f2f6;
`,dt=x.button`
  width: 221px;
  height: 48px;
  margin: 6px 0 6px 6px;
  background-color: #f0f2f6;

  ${({active:e})=>e&&ht};
`,ht=Ae`
  flex-shrink: 0;

  width: 221px;
  height: 48px;

  font-weight: bold;
  background: #fff;

  border-radius: 6px;
  box-shadow: 3px 3px 10px 0 rgb(48 54 68 / 15%);
`,pt=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: max-content;

  ${({active:e})=>e&&Ae`
      visibility: visible;
    `};
`;function mt({tabs:e,activeTab:t}){var r;const n=(r=e.find(({id:s})=>s===t))==null?void 0:r.contents;return p(pt,{role:"tabpanel",children:n})}function bt({tabs:e,activeTab:t,onTabChange:n}){return p(ft,{role:"tablist",children:e.map(({id:r,label:s})=>p(dt,{onClick:()=>n(r),role:"tab",active:t===r,children:s},"tab-Btn-"+r))})}function yt({tabs:e,tabChangeHandler:t}){const[n,r]=E.useState(e[0].id);return F(ut,{children:[p(bt,{tabs:e,activeTab:n,onTabChange:o=>{r(o),t==null||t()}}),p(mt,{tabs:e,activeTab:n})]})}const wt=x.div`
  position: relative;
  top: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  margin: 0 auto;

  background-color: ${Qe.white_100};
  border-radius: 25px;

  box-shadow: 0 0 15px 0 rgb(48 54 68 / 20%);
  transform: translateY(-50%);
`,Et=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  margin: ${({margin:e})=>e};
  overflow: auto;
`,gt=x.div`
  margin-bottom: 33px;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  color: #000;
  text-align: center;
  letter-spacing: -1.1px;
`,St=x.div`
  margin-bottom: 21px;
  ${Pe}
`,xt=x.div`
  display: flex;
  align-items: center;
  height: ${({height:e})=>e};
  margin-bottom: 32px;

  ${Pe}
`,Rt=x.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .btn-lg {
    width: 320px;
    height: 60px;
  }

  .btn-md {
    width: 240px;
    height: 44px;
  }

  .btn-lg-confirm {
    width: 156px;
    height: 60px;
  }

  .btn-lg-confirm:first-of-type {
    margin-right: 8px;
  }

  .btn-md-confirm {
    width: 116px;
    height: 44px;
  }

  .btn-md-confirm:first-of-type {
    margin-right: 8px;
  }
`,Tt=({isConfirm:e,onBtnClick:t,sizeType:n="lg"})=>{const r=`btn-${n}${e?"-confirm":""}`;return p(re,{children:p(Rt,{children:e?F(re,{children:[p(k,{onButtonClick:t,label:"취소",className:r}),p(k,{onButtonClick:t,label:"확인",className:r})]}):p(k,{onButtonClick:t,label:"확인",className:r})})})};function Ot({initialOpen:e=!1,open:t,onOpenChange:n,onClose:r}){const[s,o]=E.useState(e),[i,c]=E.useState(),[d,l]=E.useState(),u=t??s,h=n??o,w=Ye({open:u,onOpenChange:h}),y=w.context,f=Ze(y,{enabled:t==null}),m=et(y,{outsidePressEvent:"mousedown"}),T=tt(y),S=nt([f,m,T]),A=E.useCallback(()=>{h(!1),r&&r()},[r,h]);return E.useMemo(()=>({open:u,setOpen:h,handleClose:A,...S,...w,labelId:i,descriptionId:d,setLabelId:c,setDescriptionId:l}),[u,h,A,S,w,i,d])}const Fe=E.createContext(null),ue=()=>{const e=E.useContext(Fe);if(e==null)throw new Error("CustomModal components must be wrapped in <CustomModal />");return e},Ct=({onClose:e,title:t,label:n,contents:r,sizeType:s="lg",isConfirm:o=!1})=>{const i=()=>{e==null||e(),c.handleClose()},c=ue();return p(wt,{tabIndex:0,width:v.modal.size[s].width,height:v.modal.size[s].height,children:F(Et,{margin:v.modal.size[s].margin,children:[s==="lg"&&F(re,{children:[t&&p(gt,{children:t}),n&&p(St,{children:n})]}),p(xt,{height:v.modal.contents[s].height,children:r}),p(Tt,{isConfirm:o,sizeType:s,onBtnClick:i})]})})},At=E.forwardRef(function({children:t,asChild:n=!1,...r},s){const o=ue(),i=t.ref,c=Ne([o.refs.setReference,s,i]);return n&&E.isValidElement(t)?E.cloneElement(t,o.getReferenceProps({ref:c,...r,...t.props,"data-state":o.open?"open":"closed"})):p("button",{ref:c,"data-state":o.open?"open":"closed",...o.getReferenceProps(r),children:t})});const Pt=E.forwardRef(function(t,n){const{context:r,...s}=ue(),o=Ne([s.refs.setFloating,n]);return r.open?p(ot,{children:p(rt,{className:"modal-overlay",lockScroll:!0,children:p(st,{context:r,children:p("div",{ref:o,"aria-labelledby":s.labelId,"aria-describedby":s.descriptionId,...s.getFloatingProps(t),children:t.children})})})}):null});function _({children:e,...t}){const n=Ot(t);return p(Fe.Provider,{value:n,children:e})}_.Trigger=At;_.Content=Pt;function Nt({children:e,initialOpen:t}){return F(_,{initialOpen:t,children:[p(_.Trigger,{asChild:!0,children:e}),p(_.Content,{children:p(Ct,{onClose:()=>console.log("close event"),title:"text",contents:"texttexttext"})})]})}const Ft=()=>({authType:"email",email:"",phone:""}),q=it(at(ct(Ft,{name:"certificationStore"}),{name:"certification"})),Bt=()=>({setAuthType:e=>{q.setState(()=>({authType:e}))},setPhone:e=>q.setState({phone:e}),setEmail:e=>q.setState({email:e})}),Lt=lt(q),Dt=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`,kt=x.div`
  margin: 100px 0 50px;
  font-size: 20px;
  font-weight: bold;
`,oe=x.div`
  position: relative;
  display: flex;

  flex-direction: column;
  width: 100%;
  margin: 50px 0;
`;x.button`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 20px;
  font-size: 10px;

  cursor: pointer;

  border: 1px solid lightgray;
`;function _t(){const{phone:e}=Lt(["phone"]),{setPhone:t}=Bt();return p(oe,{children:p(se,{textLabel:"휴대폰번호",inputChangeEvent:n=>t(n.target.value),inputValue:e,placeholder:'휴대폰 번호("-")없이 입력'})})}const Ut=({initTime:e})=>{const[t,n]=E.useState(e),[r,s]=E.useState(!1),o=E.useRef(null);E.useEffect(()=>(r?o.current=setInterval(()=>{n(w=>w-1)},1e3):o.current&&clearInterval(o.current),()=>{o.current&&clearInterval(o.current)}),[r]),E.useEffect(()=>{t===0&&(alert("타이머 종료!"),s(!1))},[t]);const i=()=>{s(!0)},c=()=>{s(!1),n(e)},d=()=>{c(),i()},l=()=>{s(!1)},u=w=>{const y=Math.floor(w/60),f=w%60;return`${y.toString().padStart(2,"0")}:${f.toString().padStart(2,"0")}`};return{remainTime:E.useMemo(()=>u(t),[t]),startTimer:i,resetTimer:c,reStartTimer:d,stopTimer:l}};function Be(e,t){return function(){return e.apply(t,arguments)}}const{toString:Mt}=Object.prototype,{getPrototypeOf:fe}=Object,W=(e=>t=>{const n=Mt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>W(t)===e),K=e=>t=>typeof t===e,{isArray:L}=Array,U=K("undefined");function jt(e){return e!==null&&!U(e)&&e.constructor!==null&&!U(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Le=C("ArrayBuffer");function It(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Le(e.buffer),t}const vt=K("string"),R=K("function"),De=K("number"),G=e=>e!==null&&typeof e=="object",qt=e=>e===!0||e===!1,H=e=>{if(W(e)!=="object")return!1;const t=fe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ht=C("Date"),$t=C("File"),zt=C("Blob"),Jt=C("FileList"),Vt=e=>G(e)&&R(e.pipe),Wt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=W(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Kt=C("URLSearchParams"),Gt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function ke(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const _e=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ue=e=>!U(e)&&e!==_e;function ie(){const{caseless:e}=Ue(this)&&this||{},t={},n=(r,s)=>{const o=e&&ke(t,s)||s;H(t[o])&&H(r)?t[o]=ie(t[o],r):H(r)?t[o]=ie({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&M(arguments[r],n);return t}const Xt=(e,t,n,{allOwnKeys:r}={})=>(M(t,(s,o)=>{n&&R(s)?e[o]=Be(s,n):e[o]=s},{allOwnKeys:r}),e),Qt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Yt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Zt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&fe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},en=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},tn=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!De(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},nn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fe(Uint8Array)),rn=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},sn=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},on=C("HTMLFormElement"),an=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),cn=C("RegExp"),Me=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},ln=e=>{Me(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},un=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},fn=()=>{},dn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Z="abcdefghijklmnopqrstuvwxyz",ye="0123456789",je={DIGIT:ye,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+ye},hn=(e=16,t=je.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function pn(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const mn=e=>{const t=new Array(10),n=(r,s)=>{if(G(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return M(r,(i,c)=>{const d=n(i,s+1);!U(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},bn=C("AsyncFunction"),yn=e=>e&&(G(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:L,isArrayBuffer:Le,isBuffer:jt,isFormData:Wt,isArrayBufferView:It,isString:vt,isNumber:De,isBoolean:qt,isObject:G,isPlainObject:H,isUndefined:U,isDate:Ht,isFile:$t,isBlob:zt,isRegExp:cn,isFunction:R,isStream:Vt,isURLSearchParams:Kt,isTypedArray:nn,isFileList:Jt,forEach:M,merge:ie,extend:Xt,trim:Gt,stripBOM:Qt,inherits:Yt,toFlatObject:Zt,kindOf:W,kindOfTest:C,endsWith:en,toArray:tn,forEachEntry:rn,matchAll:sn,isHTMLForm:on,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:Me,freezeMethods:ln,toObjectSet:un,toCamelCase:an,noop:fn,toFiniteNumber:dn,findKey:ke,global:_e,isContextDefined:Ue,ALPHABET:je,generateString:hn,isSpecCompliantForm:pn,toJSONObject:mn,isAsyncFn:bn,isThenable:yn};function b(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(b,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ie=b.prototype,ve={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ve[e]={value:e}});Object.defineProperties(b,ve);Object.defineProperty(Ie,"isAxiosError",{value:!0});b.from=(e,t,n,r,s,o)=>{const i=Object.create(Ie);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),b.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const wn=null;function ae(e){return a.isPlainObject(e)||a.isArray(e)}function qe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,o){return s=qe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function En(e){return a.isArray(e)&&!e.some(ae)}const gn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function X(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,T){return!a.isUndefined(T[m])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new b("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,m,T){let S=f;if(f&&!T&&typeof f=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&En(f)||(a.isFileList(f)||a.endsWith(m,"[]"))&&(S=a.toArray(f)))return m=qe(m),S.forEach(function(I,Xe){!(a.isUndefined(I)||I===null)&&t.append(i===!0?we([m],Xe,o):i===null?m:m+"[]",l(I))}),!1}return ae(f)?!0:(t.append(we(T,m,o),l(f)),!1)}const h=[],w=Object.assign(gn,{defaultVisitor:u,convertValue:l,isVisitable:ae});function y(f,m){if(!a.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(f),a.forEach(f,function(S,A){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(A)?A.trim():A,m,w))===!0&&y(S,m?m.concat(A):[A])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&X(e,this,t)}const He=de.prototype;He.append=function(t,n){this._pairs.push([t,n])};He.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Sn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $e(e,t,n){if(!t)return e;const r=n&&n.encode||Sn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class xn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ge=xn,ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Rn=typeof URLSearchParams<"u"?URLSearchParams:de,Tn=typeof FormData<"u"?FormData:null,On=typeof Blob<"u"?Blob:null,Cn=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),An=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:Rn,FormData:Tn,Blob:On},isStandardBrowserEnv:Cn,isStandardBrowserWebWorkerEnv:An,protocols:["http","https","file","blob","url","data"]};function Pn(e,t){return X(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Nn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Fn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Je(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Fn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Nn(r),s,n,0)}),n}return null}const Bn={"Content-Type":void 0};function Ln(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Q={transitional:ze,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Je(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Pn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return X(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Ln(t)):t}],transformResponse:[function(t){const n=this.transitional||Q.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?b.from(c,b.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){Q.headers[t]={}});a.forEach(["post","put","patch"],function(t){Q.headers[t]=a.merge(Bn)});const he=Q,Dn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Dn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Se=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function $(e){return e===!1||e==null?e:a.isArray(e)?e.map($):String(e)}function _n(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Un=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ee(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Mn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function jn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Y{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,l){const u=D(d);if(!u)throw new Error("header name must be a non-empty string");const h=a.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||d]=$(c))}const i=(c,d)=>a.forEach(c,(l,u)=>o(l,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Un(t)?i(kn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return _n(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ee(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=D(i),i){const c=a.findKey(r,i);c&&(!n||ee(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ee(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=$(s),delete n[o];return}const c=t?Mn(o):String(o).trim();c!==o&&delete n[o],n[c]=$(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Se]=this[Se]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=D(i);r[c]||(jn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Y.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(Y.prototype);a.freezeMethods(Y);const P=Y;function te(e,t){const n=this||he,r=t||n,s=P.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ve(e){return!!(e&&e.__CANCEL__)}function j(e,t,n){b.call(this,e??"canceled",b.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(j,b,{__CANCEL__:!0});function In(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new b("Request failed with status code "+n.status,[b.ERR_BAD_REQUEST,b.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const vn=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function qn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Hn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function We(e,t){return e&&!qn(t)?Hn(e,t):t}const $n=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function zn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Jn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[o];i||(i=l),n[s]=d,r[s]=l;let h=o,w=0;for(;h!==s;)w+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const y=u&&l-u;return y?Math.round(w*1e3/y):void 0}}function xe(e,t){let n=0;const r=Jn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,d=r(c),l=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:d||void 0,estimated:d&&i&&l?(i-o)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Vn=typeof XMLHttpRequest<"u",Wn=Vn&&function(e){return new Promise(function(n,r){let s=e.data;const o=P.from(e.headers).normalize(),i=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+f))}const u=We(e.baseURL,e.url);l.open(e.method.toUpperCase(),$e(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function h(){if(!l)return;const y=P.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),m={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:y,config:e,request:l};In(function(S){n(S),d()},function(S){r(S),d()},m),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){l&&(r(new b("Request aborted",b.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new b("Network Error",b.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||ze;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new b(f,m.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,l)),l=null},O.isStandardBrowserEnv){const y=(e.withCredentials||$n(u))&&e.xsrfCookieName&&vn.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(f,m){l.setRequestHeader(m,f)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",xe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",xe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{l&&(r(!y||y.type?new j(null,e,l):y),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const w=zn(u);if(w&&O.protocols.indexOf(w)===-1){r(new b("Unsupported protocol "+w+":",b.ERR_BAD_REQUEST,e));return}l.send(s||null)})},z={http:wn,xhr:Wn};a.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Kn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new b(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new j(null,e)}function Re(e){return ne(e),e.headers=P.from(e.headers),e.data=te.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Kn.getAdapter(e.adapter||he.adapter)(e).then(function(r){return ne(e),r.data=te.call(e,e.transformResponse,r),r.headers=P.from(r.headers),r},function(r){return Ve(r)||(ne(e),r&&r.response&&(r.response.data=te.call(e,e.transformResponse,r.response),r.response.headers=P.from(r.response.headers))),Promise.reject(r)})}const Te=e=>e instanceof P?e.toJSON():e;function B(e,t){t=t||{};const n={};function r(l,u,h){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:h},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,h){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,h)}else return r(l,u,h)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,h){if(h in t)return r(l,u);if(h in e)return r(void 0,l)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>s(Te(l),Te(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const h=d[u]||s,w=h(e[u],t[u],u);a.isUndefined(w)&&h!==c||(n[u]=w)}),n}const Ke="1.4.0",pe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Oe={};pe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ke+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new b(s(i," has been removed"+(n?" in "+n:"")),b.ERR_DEPRECATED);return n&&!Oe[i]&&(Oe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Gn(e,t,n){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new b("option "+o+" must be "+d,b.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new b("Unknown option "+o,b.ERR_BAD_OPTION)}}const ce={assertOptions:Gn,validators:pe},N=ce.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new ge,response:new ge}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ce.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ce.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=P.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,h=0,w;if(!d){const f=[Re.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,l),w=f.length,u=Promise.resolve(n);h<w;)u=u.then(f[h++],f[h++]);return u}w=c.length;let y=n;for(h=0;h<w;){const f=c[h++],m=c[h++];try{y=f(y)}catch(T){m.call(this,T);break}}try{u=Re.call(this,y)}catch(f){return Promise.reject(f)}for(h=0,w=l.length;h<w;)u=u.then(l[h++],l[h++]);return u}getUri(t){t=B(this.defaults,t);const n=We(t.baseURL,t.url);return $e(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(B(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});const J=V;class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new j(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new me(function(s){t=s}),cancel:t}}}const Xn=me;function Qn(e){return function(n){return e.apply(null,n)}}function Yn(e){return a.isObject(e)&&e.isAxiosError===!0}const le={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(le).forEach(([e,t])=>{le[t]=e});const Zn=le;function Ge(e){const t=new J(e),n=Be(J.prototype.request,t);return a.extend(n,J.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ge(B(e,s))},n}const g=Ge(he);g.Axios=J;g.CanceledError=j;g.CancelToken=Xn;g.isCancel=Ve;g.VERSION=Ke;g.toFormData=X;g.AxiosError=b;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=Qn;g.isAxiosError=Yn;g.mergeConfig=B;g.AxiosHeaders=P;g.formToJSON=e=>Je(a.isHTMLForm(e)?new FormData(e):e);g.HttpStatusCode=Zn;g.default=g;const er=g,Ce=async e=>await er.post("/cert",{email:e});function tr(){const{remainTime:e,startTimer:t,reStartTimer:n,resetTimer:r}=Ut({initTime:300}),[s,o]=E.useState({isSend:!1,reSendCount:0,certCode:"",modalMessage:"",email:""}),i=E.useCallback(async()=>{o(u=>({...u,isSend:!0}));try{await Ce(s.email),t()}catch(u){console.error("Error: ",u),r()}},[s.email,o,t,r]),c=E.useCallback(async()=>{try{await Ce(s.email),o(u=>({...u,modalMessage:"인증 메일이 재전송 되었습니다.",reSendCount:u.reSendCount+1})),n()}catch(u){console.error("Error: ",u)}},[s.email,o,n]),d=E.useCallback(u=>{o(h=>({...h,certCode:u.target.value}))},[o]),l=s.isSend?"인증 재요청":"인증요청";return F(oe,{children:[p(se,{textLabel:"이메일",inputChangeEvent:u=>o(h=>({...h,email:u.target.value})),inputValue:s.email,placeholder:"이메일",innerComponent:p(k,{onButtonClick:s.isSend?c:i,label:l,btnSize:"xs",btnType:"line",priority:"secondary"})}),s.isSend&&p(oe,{children:p(se,{textLabel:"인증번호",inputChangeEvent:d,inputValue:s.certCode,placeholder:"인증번호",innerComponent:p("div",{style:{color:"red"},children:e})})}),p(k,{onButtonClick:()=>console.log("next"),label:"다음",btnSize:"lg",btnType:"line",priority:"secondary",isDisabled:!0})]})}const nr=[{id:"email",label:"이메일 인증",contents:p(tr,{})},{id:"phone",label:"휴대폰 인증",contents:p(_t,{})}];function rr(){return F(Dt,{children:[F(kt,{children:["이메일 인증 또는 휴대폰 인증을 선택하여",p("br",{})," 본인확인을 진행해 주세요."]}),p(yt,{tabs:nr}),p(Nt,{children:p("button",{children:"modal open"})})]})}function ir(){const[e,t]=E.useState("본인인증");return p("main",{children:e==="본인인증"&&p(rr,{})})}export{ir as default};
