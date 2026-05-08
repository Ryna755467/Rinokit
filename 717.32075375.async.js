!(function(){"use strict";var Zt=Object.defineProperty,Lt=Object.defineProperties;var Vt=Object.getOwnPropertyDescriptors;var Me=Object.getOwnPropertySymbols;var Xe=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var Qe=(p,x,s)=>x in p?Zt(p,x,{enumerable:!0,configurable:!0,writable:!0,value:s}):p[x]=s,u=(p,x)=>{for(var s in x||(x={}))Xe.call(x,s)&&Qe(p,s,x[s]);if(Me)for(var s of Me(x))qe.call(x,s)&&Qe(p,s,x[s]);return p},M=(p,x)=>Lt(p,Vt(x));var je=(p,x)=>{var s={};for(var d in p)Xe.call(p,d)&&x.indexOf(d)<0&&(s[d]=p[d]);if(p!=null&&Me)for(var d of Me(p))x.indexOf(d)<0&&qe.call(p,d)&&(s[d]=p[d]);return s};(self.webpackChunkrinokit=self.webpackChunkrinokit||[]).push([[717],{31717:function(p,x,s){s.r(x),s.d(x,{default:function(){return Et}});var d=s(10290),ue=s(62484),D=s(29331),h=s(22539),_=s(93336),j=s(36977),A=s(10298),Z=s(83287);const W=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"];function fe(e){return(0,Z.Kn)(e)?W.every(t=>Object.prototype.hasOwnProperty.call(e,t)):!1}var Y=s(81138);function H(e){return typeof e=="function"}function me(...e){return t=>e.reduce((o,n)=>n(o),t)}const B=e=>function(...o){let n=[...o],r=o[o.length-1];return fe(r)&&n.length>1?n=n.slice(0,n.length-1):r=e,me(...n.map(i=>l=>H(i)?i(l):Te(l,i)))(r)},K=B(j.rS),Ne=B(j.wE);function Te(...e){return Y({},...e,xe)}function xe(e,t,o,n){if((H(e)||H(t))&&Object.prototype.hasOwnProperty.call(n,o))return(...r)=>{const i=H(e)?e(...r):e,l=H(t)?t(...r):t;return Y({},i,l,xe)};if((0,Z.Kn)(e)&&(0,Z.kJ)(t)||(0,Z.kJ)(e)&&(0,Z.Kn)(t))return t}var c=s(35665),$e=s(2705),we=s(64443);const re={light:"chakra-ui-light",dark:"chakra-ui-dark"};function be(e={}){const{preventTransition:t=!0,nonce:o}=e,n={setDataset:r=>{const i=t?n.preventTransition():void 0;document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,i==null||i()},setClassName(r){document.body.classList.add(r?re.dark:re.light),document.body.classList.remove(r?re.light:re.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(r){var l;return((l=n.query().matches)!=null?l:r==="dark")?"dark":"light"},addListener(r){const i=n.query(),l=a=>{r(a.matches?"dark":"light")};return typeof i.addListener=="function"?i.addListener(l):i.addEventListener("change",l),()=>{typeof i.removeListener=="function"?i.removeListener(l):i.removeEventListener("change",l)}},preventTransition(){const r=document.createElement("style");return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),o!==void 0&&(r.nonce=o),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(r)})})}}};return n}const he="chakra-ui-color-mode";function Pe(e){return{ssr:!1,type:"localStorage",get(t){if(!(globalThis!=null&&globalThis.document))return t;let o;try{o=localStorage.getItem(e)||t}catch(n){}return o||t},set(t){try{localStorage.setItem(e,t)}catch(o){}}}}const ze=Pe(he);function pe(e,t){const o=e.match(new RegExp(`(^| )${t}=([^;]+)`));return o==null?void 0:o[2]}function Ee(e,t){return{ssr:!!t,type:"cookie",get(o){return t?pe(t,e):globalThis!=null&&globalThis.document&&pe(document.cookie,e)||o},set(o){document.cookie=`${e}=${o}; max-age=31536000; path=/`}}}const _e=Ee(he),Oe=e=>Ee(he,e),Q=()=>{},v=(0,$e.jU)()?d.useLayoutEffect:d.useEffect;function g(e,t){return e.type==="cookie"&&e.ssr?e.get(t):t}const C=function(t){const{value:o,children:n,options:{useSystemColorMode:r,initialColorMode:i,disableTransitionOnChange:l}={},colorModeManager:a=ze}=t,f=(0,we._)(),y=i==="dark"?"dark":"light",[m,R]=(0,d.useState)(()=>g(a,y)),[E,L]=(0,d.useState)(()=>g(a)),{getSystemTheme:P,setClassName:X,setDataset:J,addListener:q}=(0,d.useMemo)(()=>be({preventTransition:l,nonce:f==null?void 0:f.nonce}),[l,f==null?void 0:f.nonce]),G=i==="system"&&!m?E:m,z=(0,d.useCallback)(F=>{const V=F==="system"?P():F;R(V),X(V==="dark"),J(V),a.set(V)},[a,P,X,J]);v(()=>{i==="system"&&L(P())},[]),(0,d.useEffect)(()=>{const F=a.get();if(F){z(F);return}if(i==="system"){z("system");return}z(y)},[a,y,i,z]);const ce=(0,d.useCallback)(()=>{z(G==="dark"?"light":"dark")},[G,z]);(0,d.useEffect)(()=>{if(r)return q(z)},[r,q,z]);const ke=(0,d.useMemo)(()=>({colorMode:o!=null?o:G,toggleColorMode:o?Q:ce,setColorMode:o?Q:z,forced:o!==void 0}),[G,ce,z,o]);return(0,c.jsx)(A.kc.Provider,{value:ke,children:n})};C.displayName="ColorModeProvider";function S(e){const t=(0,d.useMemo)(()=>({colorMode:"dark",toggleColorMode:Q,setColorMode:Q,forced:!0}),[]);return(0,c.jsx)(A.kc.Provider,u({value:t},e))}S.displayName="DarkMode";function k(e){const t=(0,d.useMemo)(()=>({colorMode:"light",toggleColorMode:Q,setColorMode:Q,forced:!0}),[]);return(0,c.jsx)(A.kc.Provider,u({value:t},e))}k.displayName="LightMode";var b=s(45745);const T=String.raw,$=T`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,U=()=>(0,c.jsx)(b.xB,{styles:$}),ee=({scope:e=""})=>(0,c.jsx)(b.xB,{styles:T`
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
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
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
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${$}
    `});var w=s(24029),I=s(62161),N=s(8120);const se=e=>{const{children:t,colorModeManager:o,portalZIndex:n,resetScope:r,resetCSS:i=!0,theme:l={},environment:a,cssVarsRoot:f,disableEnvironment:y,disableGlobalStyle:m}=e,R=(0,c.jsx)(N.u,{environment:a,disabled:y,children:t});return(0,c.jsx)(w.f6,{theme:l,cssVarsRoot:f,children:(0,c.jsxs)(C,{colorModeManager:o,options:l.config,children:[i?(0,c.jsx)(ee,{scope:r}):(0,c.jsx)(U,{}),!m&&(0,c.jsx)(w.ZL,{}),n?(0,c.jsx)(I.h,{zIndex:n,children:R}):R]})})};var O=s(65457),te=s(27205),ne=s(74714),ie=s(77587);function ve(e,t){const o=(0,ie.W)(e);(0,d.useEffect)(()=>{if(t==null)return;let n=null;return n=window.setTimeout(()=>{o()},t),()=>{n&&window.clearTimeout(n)}},[t,o])}var ae=s(747),Se=s(62325),et=s(83734);const tt=(e,t)=>e.find(o=>o.id===t);function Re(e,t){const o=Ae(e,t),n=o?e[o].findIndex(r=>r.id===t):-1;return{position:o,index:n}}function Ae(e,t){for(const[o,n]of Object.entries(e))if(tt(n,t))return o}const It=(e,t)=>!!Ae(e,t);function nt(e){const t=e.includes("right"),o=e.includes("left");let n="center";return t&&(n="flex-end"),o&&(n="flex-start"),{display:"flex",flexDirection:"column",alignItems:n}}function ot(e){const o=e==="top"||e==="bottom"?"0 auto":void 0,n=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,r=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,i=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",l=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:o,top:n,bottom:r,right:i,left:l}}var le=s(26123);const rt={initial:e=>{const{position:t}=e,o=["top","bottom"].includes(t)?"y":"x";let n=["top-right","bottom-right"].includes(t)?1:-1;return t==="bottom"&&(n=1),{opacity:0,[o]:n*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},De=(0,d.memo)(e=>{const{id:t,message:o,onCloseComplete:n,onRequestRemove:r,requestClose:i=!1,position:l="bottom",duration:a=5e3,containerStyle:f,motionVariants:y=rt,toastSpacing:m="0.5rem"}=e,[R,E]=(0,d.useState)(a),L=(0,Se.hO)();(0,ne.r)(()=>{L||n==null||n()},[L]),(0,ne.r)(()=>{E(a)},[a]);const P=()=>E(null),X=()=>E(a),J=()=>{L&&r()};(0,d.useEffect)(()=>{L&&i&&r()},[L,i,r]),ve(J,R);const q=(0,d.useMemo)(()=>u({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:m},f),[f,m]),G=(0,d.useMemo)(()=>nt(l),[l]);return(0,c.jsx)(et.E.div,{layout:!0,className:"chakra-toast",variants:y,initial:"initial",animate:"animate",exit:"exit",onHoverStart:P,onHoverEnd:X,custom:{position:l},style:G,children:(0,c.jsx)(le.m.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:q,children:(0,ae.P)(o,{id:t,onClose:J})})})});De.displayName="ToastComponent";var st=s(11004),We=s(76312),Ce=s(2574),Ze=s(51766);function it(e){return(0,c.jsx)(Ze.J,M(u({viewBox:"0 0 24 24"},e),{children:(0,c.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})}))}function at(e){return(0,c.jsx)(Ze.J,M(u({viewBox:"0 0 24 24"},e),{children:(0,c.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})}))}function Be(e){return(0,c.jsx)(Ze.J,M(u({viewBox:"0 0 24 24"},e),{children:(0,c.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))}var lt=s(38161);const[ct,Le]=(0,O.k)({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[dt,Ve]=(0,O.k)({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),Ke={info:{icon:at,colorScheme:"blue"},warning:{icon:Be,colorScheme:"orange"},success:{icon:it,colorScheme:"green"},error:{icon:Be,colorScheme:"red"},loading:{icon:lt.$,colorScheme:"blue"}};function ut(e){return Ke[e].colorScheme}function ft(e){return Ke[e].icon}var mt=s(57810),Ie=s(71051);const Ge=(0,Ie.G)(function(t,o){var m;const y=(0,st.L)(t),{status:n="info",addRole:r=!0}=y,i=je(y,["status","addRole"]),l=(m=t.colorScheme)!=null?m:ut(n),a=(0,mt.j)("Alert",M(u({},t),{colorScheme:l})),f=(0,We.k0)(u({width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"},a.container));return(0,c.jsx)(ct,{value:{status:n},children:(0,c.jsx)(dt,{value:a,children:(0,c.jsx)(le.m.div,M(u({"data-status":n,role:r?"alert":void 0,ref:o},i),{className:(0,Ce.cx)("chakra-alert",t.className),__css:f}))})})});Ge.displayName="Alert";function He(e){const{status:t}=Le(),o=ft(t),n=Ve(),r=t==="loading"?n.spinner:n.icon;return(0,c.jsx)(le.m.span,M(u({display:"inherit","data-status":t},e),{className:(0,Ce.cx)("chakra-alert__icon",e.className),__css:r,children:e.children||(0,c.jsx)(o,{h:"100%",w:"100%"})}))}He.displayName="AlertIcon";const Ue=(0,Ie.G)(function(t,o){const n=Ve(),{status:r}=Le();return(0,c.jsx)(le.m.div,M(u({ref:o,"data-status":r},t),{className:(0,Ce.cx)("chakra-alert__title",t.className),__css:n.title}))});Ue.displayName="AlertTitle";const Je=(0,Ie.G)(function(t,o){const{status:n}=Le(),r=Ve(),i=(0,We.k0)(u({display:"inline"},r.description));return(0,c.jsx)(le.m.div,M(u({ref:o,"data-status":n},t),{className:(0,Ce.cx)("chakra-alert__desc",t.className),__css:i}))});Je.displayName="AlertDescription";var ht=s(23253);const vt=e=>{const{status:t,variant:o="solid",id:n,title:r,isClosable:i,onClose:l,description:a,colorScheme:f,icon:y}=e,m=n?{root:`toast-${n}`,title:`toast-${n}-title`,description:`toast-${n}-description`}:void 0;return(0,c.jsxs)(Ge,{addRole:!1,status:t,variant:o,id:m==null?void 0:m.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:f,children:[(0,c.jsx)(He,{children:y}),(0,c.jsxs)(le.m.div,{flex:"1",maxWidth:"100%",children:[r&&(0,c.jsx)(Ue,{id:m==null?void 0:m.title,children:r}),a&&(0,c.jsx)(Je,{id:m==null?void 0:m.description,display:"block",children:a})]}),i&&(0,c.jsx)(ht.P,{size:"sm",onClick:l,position:"absolute",insetEnd:1,top:1})]})};function gt(e={}){const{render:t,toastComponent:o=vt}=e;return r=>typeof t=="function"?t(u(u({},r),e)):(0,c.jsx)(o,u(u({},r),e))}const ge=yt({top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]});function yt(e){let t=e;const o=new Set,n=r=>{t=r(t),o.forEach(i=>i())};return{getState:()=>t,subscribe:r=>(o.add(r),()=>{n(()=>e),o.delete(r)}),removeToast:(r,i)=>{n(l=>M(u({},l),{[i]:l[i].filter(a=>a.id!=r)}))},notify:(r,i)=>{const l=xt(r,i),{position:a,id:f}=l;return n(y=>{var E,L;const R=a.includes("top")?[l,...(E=y[a])!=null?E:[]]:[...(L=y[a])!=null?L:[],l];return M(u({},y),{[a]:R})}),f},update:(r,i)=>{r&&n(l=>{const a=u({},l),{position:f,index:y}=Re(a,r);return f&&y!==-1&&(a[f][y]=M(u(u({},a[f][y]),i),{message:gt(i)})),a})},closeAll:({positions:r}={})=>{n(i=>{const l=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(r!=null?r:l).reduce((f,y)=>(f[y]=i[y].map(m=>M(u({},m),{requestClose:!0})),f),u({},i))})},close:r=>{n(i=>{const l=Ae(i,r);return l?M(u({},i),{[l]:i[l].map(a=>a.id==r?M(u({},a),{requestClose:!0}):a)}):i})},isActive:r=>!!Re(ge.getState(),r).position}}let Fe=0;function xt(e,t={}){var r,i;Fe+=1;const o=(r=t.id)!=null?r:Fe,n=(i=t.position)!=null?i:"bottom";return{id:o,message:e,position:n,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>ge.removeToast(String(o),n),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}var bt=s(11619);const[pt,Ot]=(0,O.k)({name:"ToastOptionsContext",strict:!1}),St=e=>{const t=(0,d.useSyncExternalStore)(ge.subscribe,ge.getState,ge.getState),{motionVariants:o,component:n=De,portalProps:r,animatePresenceProps:i}=e,a=Object.keys(t).map(f=>{const y=t[f];return(0,c.jsx)("div",{role:"region","aria-live":"polite","aria-label":`Notifications-${f}`,id:`chakra-toast-manager-${f}`,style:ot(f),children:(0,c.jsx)(te.M,M(u({},i),{initial:!1,children:y.map(m=>(0,c.jsx)(n,u({motionVariants:o},m),m.id))}))},f)});return(0,c.jsx)(bt.h,M(u({},r),{children:a}))},Ct=(e=>function(l){var a=l,{children:o,theme:n=e,toastOptions:r}=a,i=je(a,["children","theme","toastOptions"]);return(0,c.jsxs)(se,M(u({theme:n},i),{children:[(0,c.jsx)(pt,{value:r==null?void 0:r.defaultOptions,children:o}),(0,c.jsx)(St,u({},r))]}))})(j.rS);var kt=s(82909),Mt=s(13100);function ye(e,t){return o=>o.colorMode==="dark"?t:e}function Dt(e){const{orientation:t,vertical:o,horizontal:n}=e;return t?t==="vertical"?o:n:{}}var jt=function(t){return{".markdown":{a:{color:ye("brand.500","brand.300")(t)},img:{maxWidth:"full"},"*:not(pre) code":{px:.5,py:1.5,bgColor:ye("gray.50","gray.800")(t),color:ye("brand.500","brand.300")(t),fontSize:"md"},pre:{fontSize:"sm",px:6,bgColor:"gray.50"},table:{th:{color:ye("gray.600","gray.400")(t)},"th, td":{borderColor:ye("gray.100","gray.700")(t)}},ul:{li:{lineHeight:"tall"}},"h1, h2, h3, h4, h5, h6":{cursor:"pointer","> a[aria-hidden]:first-of-type":{float:"left",width:5,paddingInlineEnd:1,marginInlineStart:-6,fontSize:0,textAlign:"left",lineHeight:"inhert","&:hover":{border:0},"> .icon-link":{transitionProperty:"visibility",transitionDuration:".3s","&::before":{content:'"#"',fontSize:"xl"}}},"&:not(:hover) > a[aria-hidden]:first-of-type > .icon-link":{visibility:"hidden"}}}}},Tt=jt,$t=function(t){var o=t.children,n=t.config,r=t.brand,i=r===void 0?j.rS.colors.purple:r,l=(0,A.If)(),a=l.colorMode,f=(0,d.useState)(i),y=(0,_.Z)(f,2),m=y[0],R=y[1],E=(0,d.useMemo)(function(){var P,X,J,q,G,z,ce;return K((0,h.Z)((0,h.Z)({initialColorMode:a!=null?a:"system",useSystemColorMode:!1,styles:(0,h.Z)((0,h.Z)((0,h.Z)({},j.rS.styles),(P=n==null?void 0:n.styles)!==null&&P!==void 0?P:{}),{},{global:function(F){var V,oe,de;return(0,h.Z)((0,h.Z)((0,h.Z)({},(V=j.rS.styles.global)!==null&&V!==void 0?V:{}),(oe=n==null||(de=n.styles)===null||de===void 0?void 0:de.global)!==null&&oe!==void 0?oe:{}),{},{body:{p:0}},Tt(F))}})},n!=null?n:{}),{},{fonts:Object.entries(j.rS.fonts).reduce(function(ke,F){var V,oe,de=(0,_.Z)(F,2),Ye=de[0],At=de[1];return(0,h.Z)((0,h.Z)({},ke),{},(0,D.Z)({},Ye,"Inter Variable, "+((V=n==null||(oe=n.fonts)===null||oe===void 0?void 0:oe[Ye])!==null&&V!==void 0?V:At)))},j.rS.fonts),colors:(0,h.Z)({brand:m},(X=n==null?void 0:n.colors)!==null&&X!==void 0?X:{}),space:(0,h.Z)((0,h.Z)((0,h.Z)({},j.rS.space),(J=n==null?void 0:n.space)!==null&&J!==void 0?J:{}),{},{18:"4.5rem"}),sizes:(0,h.Z)((0,h.Z)((0,h.Z)({},j.rS.sizes),(q=n==null?void 0:n.sizes)!==null&&q!==void 0?q:{}),{},{18:"4.5rem",screenW:"100vw",screenH:"100vh",container:(0,h.Z)((0,h.Z)((0,h.Z)({},j.rS.sizes.container),(G=n==null||(z=n.sizes)===null||z===void 0?void 0:z.container)!==null&&G!==void 0?G:{}),{},{xxl:"1392px"})}),breakpoints:(0,h.Z)((0,h.Z)((0,h.Z)({},j.rS.breakpoints),(ce=n==null?void 0:n.breakpoints)!==null&&ce!==void 0?ce:{}),{},{xxl:"1392px"})}))},[n,a,m]),L=(0,d.useCallback)(function(P){(0,Mt.Kn)(P)&&R(P),typeof P=="string"&&P in E.colors&&R(E.colors[P])},[n]);return d.createElement(Ct,{theme:E},d.createElement(kt.f,{value:{brand:m,changeBrand:L,config:E}},o))},wt=$t,Pt=s(26844),zt=function(){var t,o=(0,ue.pC)(),n=(t=(0,Pt.Z)())!==null&&t!==void 0?t:{},r=n.brand,i=n.config;return o&&d.createElement(wt,{brand:r,config:i},o)},Et=zt},8120:function(p,x,s){s.d(x,{O:function(){return _},u:function(){return j}});var d=s(35665),ue=s(1364),D=s(10290);const h=(0,D.createContext)({getDocument(){return document},getWindow(){return window}});h.displayName="EnvironmentContext";function _({defer:A}={}){const[,Z]=(0,D.useReducer)(W=>W+1,0);return(0,ue.G)(()=>{A&&Z()},[A]),(0,D.useContext)(h)}function j(A){const{children:Z,environment:W,disabled:fe}=A,Y=(0,D.useRef)(null),H=(0,D.useMemo)(()=>W||{getDocument:()=>{var B,K;return(K=(B=Y.current)==null?void 0:B.ownerDocument)!=null?K:document},getWindow:()=>{var B,K;return(K=(B=Y.current)==null?void 0:B.ownerDocument.defaultView)!=null?K:window}},[W]),me=!fe||!W;return(0,d.jsxs)(h.Provider,{value:H,children:[Z,me&&(0,d.jsx)("span",{id:"__chakra_env",hidden:!0,ref:Y})]})}j.displayName="EnvironmentProvider"},24029:function(p,x,s){s.d(x,{ZL:function(){return Q},f6:function(){return ze},eC:function(){return Oe}});var d=s(35665),ue=s(31115),D=s(83287),h=s(81138),_=s(12358),j=s(78272);function A(v,g,C={}){const{stop:S,getKey:k}=C;function b(T,$=[]){var U;if((0,D.Kn)(T)||Array.isArray(T)){const ee={};for(const[w,I]of Object.entries(T)){const N=(U=k==null?void 0:k(w))!=null?U:w,se=[...$,N];if(S!=null&&S(T,se))return g(T,$);ee[N]=b(I,se)}return ee}return g(T,$)}return b(v)}var Z=s(4883),W=s(97279);const fe=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","gradients","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur","breakpoints"];function Y(v){const g=fe;return(0,W.e)(v,g)}function H(v){return v.semanticTokens}function me(v){const b=v,{__cssMap:g,__cssVars:C,__breakpoints:S}=b;return je(b,["__cssMap","__cssVars","__breakpoints"])}function B(v){const g=Y(v),C=H(v),S=b=>Z._.includes(b)||b==="default",k={};return A(g,(b,T)=>{b!=null&&(k[T.join(".")]={isSemantic:!1,value:b})}),A(C,(b,T)=>{b!=null&&(k[T.join(".")]={isSemantic:!0,value:b})},{stop:b=>Object.keys(b).every(S)}),k}function K(v,g){return(0,j.gJ)(String(v).replace(/\./g,"-"),void 0,g)}function Ne(v){var T;const g=B(v),C=(T=v.config)==null?void 0:T.cssVarPrefix;let S={};const k={};function b($,U){const w=[String($).split(".")[0],U].join(".");if(!g[w])return U;const{reference:N}=K(w,C);return N}for(const[$,U]of Object.entries(g)){const{isSemantic:ee,value:w}=U,{variable:I,reference:N}=K($,C);if(!ee){if($.startsWith("space")){const O=$.split("."),[te,...ne]=O,ie=`${te}.-${ne.join(".")}`,ve=_.y.negate(w),ae=_.y.negate(N);k[ie]={value:ve,var:I,varRef:ae}}S[I]=w,k[$]={value:w,var:I,varRef:N};continue}const se=(0,D.Kn)(w)?w:{default:w};S=h(S,Object.entries(se).reduce((O,[te,ne])=>{var ae,Se;if(!ne)return O;const ie=b($,`${ne}`);if(te==="default")return O[I]=ie,O;const ve=(Se=(ae=Z.v)==null?void 0:ae[te])!=null?Se:te;return O[ve]={[I]:ie},O},{})),k[$]={value:N,var:I,varRef:N}}return{cssVars:S,cssMap:k}}function Te(v){const g=me(v),{cssMap:C,cssVars:S}=Ne(g);return Object.assign(g,{__cssVars:u(u({},{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"}),S),__cssMap:C,__breakpoints:(0,ue.y)(g.breakpoints)}),g}var xe=s(7732),c=s(65457),$e=s(82169),we=s(747),re=s(64443),be=s(45745),he=s(10290),Pe=s(10298);function ze(v){const{cssVarsRoot:g,theme:C,children:S}=v,k=(0,he.useMemo)(()=>Te(C),[C]);return(0,d.jsxs)(re.a,{theme:k,children:[(0,d.jsx)(pe,{root:g}),S]})}function pe({root:v=":host, :root"}){const g=[v,"[data-theme]"].join(",");return(0,d.jsx)(be.xB,{styles:C=>({[g]:C.__cssVars})})}const[Ee,_e]=(0,c.k)({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function Oe(v){return(0,c.k)({name:`${v}StylesContext`,errorMessage:`useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${v} />" `})}function Q(){const{colorMode:v}=(0,Pe.If)();return(0,d.jsx)(be.xB,{styles:g=>{const C=(0,$e.W)(g,"styles.global"),S=(0,we.P)(C,{theme:g,colorMode:v});return S?(0,xe.i)(S)(g):void 0}})}}}]);
}());