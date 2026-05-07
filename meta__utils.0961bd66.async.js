"use strict";(self.webpackChunkrinokit=self.webpackChunkrinokit||[]).push([[232],{21238:function(C,o,n){var u;n.r(o),n.d(o,{demos:function(){return l}});var m=n(90228),_=n.n(m),g=n(48305),x=n.n(g),P=n(87999),c=n.n(P),f=n(75271),D=n(8395),l={"src-utils-copy-demo-0":{component:f.memo(f.lazy(c()(_()().mark(function E(){var d,p,s,b;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return d=e.sent,p=d.useState,e.next=6,Promise.resolve().then(n.bind(n,8395));case 6:return s=e.sent,b=s.copyToClipboard,e.abrupt("return",{default:function(){var a=p("rinokit - \u9AD8\u6548\u5B9E\u7528\u7684\u5DE5\u5177\u5E93"),i=x()(a,2),v=i[0],I=i[1],O=p(""),h=x()(O,2),T=h[0],y=h[1],M=function(){var R=c()(_()().mark(function U(){var k;return _()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,b(v);case 2:k=S.sent,k?(y("\u590D\u5236\u6210\u529F"),setTimeout(function(){return y("")},2e3)):(y("\u590D\u5236\u5931\u8D25"),setTimeout(function(){return y("")},2e3));case 4:case"end":return S.stop()}},U)}));return function(){return R.apply(this,arguments)}}();return f.createElement("div",{style:{padding:20,borderRadius:8,backgroundColor:"#f5f7fa",lineHeight:1.6}},f.createElement("div",{style:{marginBottom:16}},f.createElement("input",{type:"text",value:v,onChange:function(U){return I(U.target.value)},style:{padding:"8px 12px",width:"300px",border:"1px solid #e5e7eb",borderRadius:6,marginRight:12,fontSize:14}}),f.createElement("button",{onClick:M,style:{padding:"8px 16px",border:"none",borderRadius:6,backgroundColor:"#4096ff",color:"#fff",cursor:"pointer",transition:"background 0.2s",fontSize:14}},"\u590D\u5236\u6587\u672C")),T&&f.createElement("p",{style:{color:T.includes("\u6210\u529F")?"#52c41a":"#fa541c",fontWeight:500}},T))}});case 9:case"end":return e.stop()}},E)})))),asset:{type:"BLOCK",id:"src-utils-copy-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { copyToClipboard } from 'rinokit';

export default () => {
  const [copyText, setCopyText] = useState('rinokit - \u9AD8\u6548\u5B9E\u7528\u7684\u5DE5\u5177\u5E93');
  const [copyStatus, setCopyStatus] = useState('');

  // \u6267\u884C\u590D\u5236\u64CD\u4F5C
  const handleCopy = async () => {
    const success = await copyToClipboard(copyText);
    if (success) {
      setCopyStatus('\u590D\u5236\u6210\u529F');
      setTimeout(() => setCopyStatus(''), 2000);
    } else {
      setCopyStatus('\u590D\u5236\u5931\u8D25');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#f5f7fa',
        lineHeight: 1.6,
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={copyText}
          onChange={(e) => setCopyText(e.target.value)}
          style={{
            padding: '8px 12px',
            width: '300px',
            border: '1px solid #e5e7eb',
            borderRadius: 6,
            marginRight: 12,
            fontSize: 14,
          }}
        />
        <button
          onClick={handleCopy}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: 6,
            backgroundColor: '#4096ff',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background 0.2s',
            fontSize: 14,
          }}
        >
          \u590D\u5236\u6587\u672C
        </button>
      </div>

      {copyStatus && (
        <p
          style={{
            color: copyStatus.includes('\u6210\u529F') ? '#52c41a' : '#fa541c',
            fontWeight: 500,
          }}
        >
          {copyStatus}
        </p>
      )}
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},rinokit:{type:"NPM",value:"1.0.4"}},entry:"index.jsx"},context:{react:u||(u=n.t(f,2)),rinokit:D},renderOpts:{compile:function(){var E=c()(_()().mark(function p(){var s,b=arguments;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(657).then(n.bind(n,17657));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,b));case 3:case"end":return e.stop()}},p)}));function d(){return E.apply(this,arguments)}return d}()}}}},20972:function(C,o,n){n.r(o),n.d(o,{demos:function(){return D}});var u=n(90228),m=n.n(u),_=n(26068),g=n.n(_),x=n(87999),P=n.n(x),c=n(75271),f=n(8395),D={"src-utils-event-demo-0":{component:c.memo(c.lazy(P()(m()().mark(function l(){var E,d;return m()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(n.bind(n,8395));case 2:return E=s.sent,d=E.Event,s.abrupt("return",{default:function(){var r=function(I){console.log("\u4E8B\u4EF6\u89E6\u53D1\uFF0C\u63A5\u6536\u53C2\u6570\uFF1A",I)},e=function(){d.on("custom-event",r),console.log("\u4E8B\u4EF6\u76D1\u542C\u5DF2\u6CE8\u518C")},t=function(){d.emit("custom-event",{name:"Event",type:"global"})},a=function(){d.off("custom-event",r),console.log("\u4E8B\u4EF6\u76D1\u542C\u5DF2\u79FB\u9664")},i={padding:"8px 16px",border:"none",borderRadius:6,color:"#fff",cursor:"pointer",transition:"background 0.2s",fontSize:14};return c.createElement("div",{style:{display:"flex",gap:12,padding:20,borderRadius:8,backgroundColor:"#f5f7fa"}},c.createElement("button",{onClick:e,style:g()(g()({},i),{},{background:"#4096ff"})},"\u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C"),c.createElement("button",{onClick:t,style:g()(g()({},i),{},{background:"#52c41a"})},"\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6"),c.createElement("button",{onClick:a,style:g()(g()({},i),{},{background:"#faad14"})},"\u79FB\u9664\u4E8B\u4EF6\u76D1\u542C"))}});case 5:case"end":return s.stop()}},l)})))),asset:{type:"BLOCK",id:"src-utils-event-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Event } from 'rinokit';

export default () => {
  // \u4E8B\u4EF6\u56DE\u8C03
  const handleEvent = (data) => {
    console.log('\u4E8B\u4EF6\u89E6\u53D1\uFF0C\u63A5\u6536\u53C2\u6570\uFF1A', data);
  };

  // \u6CE8\u518C\u76D1\u542C
  const registerEvent = () => {
    Event.on('custom-event', handleEvent);
    console.log('\u4E8B\u4EF6\u76D1\u542C\u5DF2\u6CE8\u518C');
  };

  // \u89E6\u53D1\u4E8B\u4EF6
  const triggerEvent = () => {
    Event.emit('custom-event', { name: 'Event', type: 'global' });
  };

  // \u79FB\u9664\u76D1\u542C
  const removeEvent = () => {
    Event.off('custom-event', handleEvent);
    console.log('\u4E8B\u4EF6\u76D1\u542C\u5DF2\u79FB\u9664');
  };

  // \u516C\u5171\u6309\u94AE\u6837\u5F0F
  const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: 6,
    color: '#fff',
    cursor: 'pointer',
    transition: 'background 0.2s',
    fontSize: 14,
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#f5f7fa',
      }}
    >
      <button
        onClick={registerEvent}
        style={{
          ...buttonStyle,
          background: '#4096ff',
        }}
      >
        \u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C
      </button>

      <button
        onClick={triggerEvent}
        style={{
          ...buttonStyle,
          background: '#52c41a',
        }}
      >
        \u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6
      </button>

      <button
        onClick={removeEvent}
        style={{
          ...buttonStyle,
          background: '#faad14',
        }}
      >
        \u79FB\u9664\u4E8B\u4EF6\u76D1\u542C
      </button>
    </div>
  );
};`},rinokit:{type:"NPM",value:"1.0.4"}},entry:"index.jsx"},context:{rinokit:f},renderOpts:{compile:function(){var l=P()(m()().mark(function d(){var p,s=arguments;return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(657).then(n.bind(n,17657));case 2:return r.abrupt("return",(p=r.sent).default.apply(p,s));case 3:case"end":return r.stop()}},d)}));function E(){return l.apply(this,arguments)}return E}()}}}},25706:function(C,o,n){n.r(o),n.d(o,{demos:function(){return m}});var u=n(75271),m={}},8395:function(C,o,n){n.r(o),n.d(o,{Event:function(){return s},Foo:function(){return g},copyToClipboard:function(){return D},createClassPrefix:function(){return b},useEvent:function(){return x},useStorage:function(){return f}});var u=n(75271),m=n(52676),_=function(e){return(0,m.jsx)("h4",{children:e.title})},g=_,x=function(e,t,a){(0,u.useEffect)(function(){return s.on(e,t),function(){s.off(e,t)}},a)},P=n(48305),c=n.n(P),f=function(e,t,a){var i=(0,u.useState)(function(){try{var h=a.getItem(e);return h?JSON.parse(h):t}catch(T){return console.error("Error reading from localStorage: ".concat(T)),t}}),v=c()(i,2),I=v[0],O=v[1];return(0,u.useEffect)(function(){try{a.setItem(e,JSON.stringify(I))}catch(h){console.error("Error writing to localStorage: ".concat(h))}},[I,e,a]),(0,u.useEffect)(function(){var h=function(y){if(y.key===e)try{var M=y.newValue?JSON.parse(y.newValue):null;M!==null&&O(M)}catch(R){console.error("Error parsing localStorage change: ".concat(R))}};return window.addEventListener("storage",h),function(){window.removeEventListener("storage",h)}},[e]),[I,O]},D=function(e){return new Promise(function(t){var a;(a=navigator.clipboard)!==null&&a!==void 0&&a.writeText?navigator.clipboard.writeText(e).then(function(){return t(!0)}).catch(function(){return t(!1)}):t(!1)})},l=new Map,E=function(e,t){l.has(e)||l.set(e,[]),l.get(e).push(t)},d=function(e,t){if(l.has(e)){var a=l.get(e).filter(function(i){return i!==t});a.length===0?l.delete(e):l.set(e,a)}},p=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),i=1;i<t;i++)a[i-1]=arguments[i];l.has(e)&&l.get(e).forEach(function(v){return v.apply(void 0,a)})},s={on:E,off:d,emit:p},b=function(e){if(!e)throw new Error("Prefix cannot be empty");return function(t){return t?"".concat(e,"__").concat(t):e}}},80433:function(C,o,n){n.r(o),n.d(o,{texts:function(){return u}});const u=[{value:"\u6D4F\u89C8\u5668\u526A\u8D34\u677F\u590D\u5236\u5DE5\u5177\u51FD\u6570\uFF0C\u7528\u4E8E\u5C06\u6307\u5B9A\u6587\u672C\u590D\u5236\u5230\u7CFB\u7EDF\u526A\u8D34\u677F\uFF0C\u652F\u6301\u5F02\u6B65\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u590D\u5236\u7ED3\u679C\u72B6\u6001\uFF0C\u517C\u5BB9\u73B0\u4EE3\u6D4F\u89C8\u5668\u526A\u8D34\u677F API\u3002",paraId:0,tocIndex:0},{value:`copyToClipboard(text: string): Promise<boolean>
`,paraId:1,tocIndex:2},{value:"\u5F02\u6B65\u590D\u5236\u6307\u5B9A\u6587\u672C\u5230\u7CFB\u7EDF\u526A\u8D34\u677F\uFF0C\u901A\u8FC7 Promise \u8FD4\u56DE\u590D\u5236\u7ED3\u679C\uFF0C\u6210\u529F\u8FD4\u56DE true\uFF0C\u5931\u8D25\u8FD4\u56DE false\uFF0C\u65E0\u62A5\u9519\u629B\u51FA\u3002",paraId:2,tocIndex:2},{value:"text: string",paraId:3,tocIndex:2},{value:" - \u5FC5\u9009\uFF0C\u9700\u8981\u590D\u5236\u5230\u526A\u8D34\u677F\u7684\u6587\u672C\u5185\u5BB9\uFF0C\u82E5\u4F20\u5165\u975E\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u4F1A\u81EA\u52A8\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF08\u7A7A\u5B57\u7B26\u4E32\u4E5F\u53EF\u6B63\u5E38\u590D\u5236\uFF09\u3002",paraId:3,tocIndex:2},{value:"\u8FD4\u56DE\u503C\uFF1APromise&lt;boolean&gt;\uFF0CPromise \u6210\u529F\u72B6\u6001\u4E0B\uFF0Cresolve \u7ED3\u679C\u4E3A true \u8868\u793A\u590D\u5236\u6210\u529F\uFF0Cfalse \u8868\u793A\u590D\u5236\u5931\u8D25\uFF08\u5982\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u3001\u65E0\u526A\u8D34\u677F\u6743\u9650\u7B49\uFF09\u3002",paraId:4,tocIndex:2},{value:`type CopyToClipboard = (text: string) => Promise<boolean>;
`,paraId:5,tocIndex:3},{value:"\u63A5\u6536\u5B57\u7B26\u4E32\u7C7B\u578B\u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u6700\u7EC8 resolve \u5E03\u5C14\u503C\u8868\u793A\u590D\u5236\u7ED3\u679C\u3002",paraId:6,tocIndex:3},{value:"\u8BE5\u51FD\u6570\u4F9D\u8D56\u6D4F\u89C8\u5668 ",paraId:7,tocIndex:4},{value:"navigator.clipboard.writeText",paraId:7,tocIndex:4},{value:" API\uFF0C\u4EC5\u652F\u6301\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08Chrome 66+\u3001Firefox 63+\u3001Edge 79+ \u7B49\uFF09\uFF0C\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u4F1A\u76F4\u63A5\u8FD4\u56DE false\u3002",paraId:7,tocIndex:4},{value:"\u526A\u8D34\u677F\u64CD\u4F5C\u53D7\u6D4F\u89C8\u5668\u5B89\u5168\u7B56\u7565\u9650\u5236\uFF0Chttp \u534F\u8BAE\uFF08\u975E https\uFF09\u73AF\u5883\u4E0B\uFF0C\u90E8\u5206\u6D4F\u89C8\u5668\u4F1A\u7981\u6B62\u526A\u8D34\u677F\u64CD\u4F5C\uFF0C\u5BFC\u81F4\u590D\u5236\u5931\u8D25\u3002",paraId:8,tocIndex:4},{value:"\u51FD\u6570\u4E3A\u5F02\u6B65\u64CD\u4F5C\uFF0C\u9700\u4F7F\u7528 await \u6216 .then() \u63A5\u6536\u590D\u5236\u7ED3\u679C\uFF0C\u76F4\u63A5\u8C03\u7528\u65E0\u6CD5\u83B7\u53D6\u8FD4\u56DE\u503C\u3002",paraId:9,tocIndex:4},{value:"\u82E5\u4F20\u5165\u975E\u5B57\u7B26\u4E32\u7C7B\u578B\uFF08\u5982\u6570\u5B57\u3001\u5BF9\u8C61\u7B49\uFF09\uFF0C\u4F1A\u81EA\u52A8\u901A\u8FC7 toString() \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u540E\u590D\u5236\uFF0C\u53EF\u80FD\u5BFC\u81F4\u9884\u671F\u5916\u7684\u6587\u672C\u7ED3\u679C\u3002",paraId:10,tocIndex:4},{value:"\u590D\u5236\u5931\u8D25\u65F6\uFF08\u5982\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u3001\u6743\u9650\u4E0D\u8DB3\uFF09\uFF0C\u51FD\u6570\u4E0D\u4F1A\u629B\u51FA\u9519\u8BEF\uFF0C\u4EC5\u8FD4\u56DE false\uFF0C\u53EF\u6839\u636E\u8FD4\u56DE\u7ED3\u679C\u63D0\u793A\u7528\u6237\u624B\u52A8\u590D\u5236\u3002",paraId:11,tocIndex:4}]},23491:function(C,o,n){n.r(o),n.d(o,{texts:function(){return u}});const u=[{value:"\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\u5DE5\u5177\uFF0C\u7528\u4E8E\u7EC4\u4EF6\u3001\u6A21\u5757\u95F4\u7684\u8DE8\u5C42\u7EA7\u4E8B\u4EF6\u901A\u4FE1\uFF0C\u652F\u6301\u4E8B\u4EF6\u76D1\u542C\u3001\u89E6\u53D1\u4E0E\u79FB\u9664\u3002",paraId:0,tocIndex:0},{value:`Event.on(eventName: string, callback: EventCallback): void
`,paraId:1,tocIndex:2},{value:"\u6CE8\u518C\u6307\u5B9A\u540D\u79F0\u7684\u4E8B\u4EF6\u76D1\u542C\uFF0C\u540C\u4E00\u4E8B\u4EF6\u53EF\u6CE8\u518C\u591A\u4E2A\u56DE\u8C03\u51FD\u6570\u3002",paraId:2,tocIndex:2},{value:`Event.off(eventName: string, callback: EventCallback): void
`,paraId:3,tocIndex:2},{value:"\u79FB\u9664\u6307\u5B9A\u4E8B\u4EF6\u7684\u6307\u5B9A\u56DE\u8C03\u51FD\u6570\uFF1B\u82E5\u8BE5\u4E8B\u4EF6\u65E0\u5269\u4F59\u56DE\u8C03\uFF0C\u4F1A\u81EA\u52A8\u6E05\u7406\u4E8B\u4EF6\u7F13\u5B58\u3002",paraId:4,tocIndex:2},{value:`Event.emit(eventName: string, ...args: unknown[]): void
`,paraId:5,tocIndex:2},{value:"\u89E6\u53D1\u6307\u5B9A\u540D\u79F0\u7684\u4E8B\u4EF6\uFF0C\u5E76\u5C06\u540E\u7EED\u53C2\u6570\u4F20\u9012\u7ED9\u6240\u6709\u6CE8\u518C\u7684\u56DE\u8C03\u51FD\u6570\u3002",paraId:6,tocIndex:2},{value:`type EventCallback = (...args: unknown[]) => void;
`,paraId:7,tocIndex:3},{value:"\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u7C7B\u578B\uFF0C\u652F\u6301\u63A5\u6536\u4EFB\u610F\u53C2\u6570\uFF0C\u65E0\u8FD4\u56DE\u503C\u3002",paraId:8,tocIndex:3},{value:"\u8BE5\u5DE5\u5177\u4E3A\u5168\u5C40\u5355\u4F8B\u6A21\u5F0F\uFF0C\u6240\u6709\u5F15\u7528\u5904\u5171\u4EAB\u540C\u4E00\u4E8B\u4EF6\u6C60\uFF0C\u907F\u514D\u4E0D\u540C\u4E1A\u52A1\u4E8B\u4EF6\u540D\u79F0\u51B2\u7A81\u3002",paraId:9,tocIndex:4},{value:"\u7EC4\u4EF6\u9500\u6BC1\u524D\u5EFA\u8BAE\u8C03\u7528 off \u65B9\u6CD5\u79FB\u9664\u76D1\u542C\uFF0C\u9632\u6B62\u56DE\u8C03\u5185\u5B58\u6CC4\u6F0F\u3002",paraId:10,tocIndex:4},{value:"\u79FB\u9664\u76D1\u542C\u65F6\uFF0C\u9700\u4F20\u5165\u4E0E\u6CE8\u518C\u65F6\u76F8\u540C\u7684\u56DE\u8C03\u51FD\u6570\u5F15\u7528\uFF08\u533F\u540D\u51FD\u6570\u65E0\u6CD5\u88AB\u6B63\u5E38\u79FB\u9664\uFF09\u3002",paraId:11,tocIndex:4},{value:"\u89E6\u53D1\u4E8B\u4EF6\u65F6\uFF0C\u82E5\u4E8B\u4EF6\u672A\u6CE8\u518C\u76D1\u542C\uFF0C\u4E0D\u4F1A\u629B\u51FA\u9519\u8BEF\uFF0C\u9759\u9ED8\u5931\u8D25\u3002",paraId:12,tocIndex:4}]},11905:function(C,o,n){n.r(o),n.d(o,{texts:function(){return u}});const u=[]}}]);
