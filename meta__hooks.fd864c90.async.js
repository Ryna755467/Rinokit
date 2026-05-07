"use strict";(self.webpackChunkrinokit=self.webpackChunkrinokit||[]).push([[518],{31180:function(O,u,n){var i;n.r(u),n.d(u,{demos:function(){return s}});var g=n(90228),I=n.n(g),S=n(48305),T=n.n(S),C=n(87999),l=n.n(C),v=n(75271),k=n(8395),s={"src-hooks-use-event-demo-0":{component:v.memo(v.lazy(l()(I()().mark(function p(){var d,m,r,E,o;return I()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return d=t.sent,m=d.useState,t.next=6,Promise.resolve().then(n.bind(n,8395));case 6:return r=t.sent,E=r.useEvent,o=r.Event,t.abrupt("return",{default:function(){var c=m(null),_=T()(c,2),h=_[0],x=_[1],f=function(y){x(y),console.log("\u76D1\u542C\u4E8B\u4EF6\u89E6\u53D1\uFF0C\u63A5\u6536\u53C2\u6570\uFF1A",y)},D=function(){o.emit("custom-event",{name:"useEvent",type:"hook"})};return E("custom-event",f,[]),v.createElement("div",{style:{padding:20,borderRadius:8,backgroundColor:"#f5f7fa",lineHeight:1.6}},v.createElement("button",{onClick:D,style:{padding:"8px 16px",border:"none",borderRadius:6,backgroundColor:"#4096ff",color:"#fff",cursor:"pointer",transition:"background 0.2s",fontSize:14,marginBottom:16}},"\u89E6\u53D1 custom-event \u4E8B\u4EF6"),v.createElement("p",{style:{fontWeight:500}},"eventData: ",h?JSON.stringify(h):"\u6682\u65E0\u6570\u636E"))}});case 10:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"src-hooks-use-event-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { useEvent, Event } from 'rinokit';

export default () => {
  const [eventData, setEventData] = useState(null);

  // \u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570
  const handleCustomEvent = (data) => {
    setEventData(data);
    console.log('\u76D1\u542C\u4E8B\u4EF6\u89E6\u53D1\uFF0C\u63A5\u6536\u53C2\u6570\uFF1A', data);
  };

  // \u89E6\u53D1\u4E8B\u4EF6
  const triggerEvent = () => {
    Event.emit('custom-event', { name: 'useEvent', type: 'hook' });
  };

  // \u4F7F\u7528 useEvent \u81EA\u52A8\u6CE8\u518C/\u9500\u6BC1\u76D1\u542C
  useEvent('custom-event', handleCustomEvent, []);

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#f5f7fa',
        lineHeight: 1.6,
      }}
    >
      <button
        onClick={triggerEvent}
        style={{
          padding: '8px 16px',
          border: 'none',
          borderRadius: 6,
          backgroundColor: '#4096ff',
          color: '#fff',
          cursor: 'pointer',
          transition: 'background 0.2s',
          fontSize: 14,
          marginBottom: 16,
        }}
      >
        \u89E6\u53D1 custom-event \u4E8B\u4EF6
      </button>

      <p style={{ fontWeight: 500 }}>
        eventData: {eventData ? JSON.stringify(eventData) : '\u6682\u65E0\u6570\u636E'}
      </p>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},rinokit:{type:"NPM",value:"1.0.4"}},entry:"index.jsx"},context:{react:i||(i=n.t(v,2)),rinokit:k},renderOpts:{compile:function(){var p=l()(I()().mark(function m(){var r,E=arguments;return I()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(657).then(n.bind(n,17657));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,E));case 3:case"end":return e.stop()}},m)}));function d(){return p.apply(this,arguments)}return d}()}}}},61132:function(O,u,n){n.r(u),n.d(u,{demos:function(){return k}});var i=n(90228),g=n.n(i),I=n(48305),S=n.n(I),T=n(87999),C=n.n(T),l=n(75271),v=n(8395),k={"src-hooks-use-storage-demo-0":{component:l.memo(l.lazy(C()(g()().mark(function s(){var p,d;return g()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(n.bind(n,8395));case 2:return p=r.sent,d=p.useStorage,r.abrupt("return",{default:function(){var o=d("userInfo",{},localStorage),e=S()(o,2),t=e[0],a=e[1],c=d("count",0,sessionStorage),_=S()(c,2),h=_[0],x=_[1],f=function(){a({name:"rinokit",age:1,desc:"\u81EA\u5B9A\u4E49\u94A9\u5B50\u5DE5\u5177"})},D=function(){x(function(y){return y+1})};return l.createElement("div",{style:{padding:20,borderRadius:8,backgroundColor:"#f5f7fa",lineHeight:1.6}},l.createElement("div",{style:{marginBottom:20}},l.createElement("button",{onClick:f,style:{padding:"8px 16px",border:"none",borderRadius:6,backgroundColor:"#4096ff",color:"#fff",cursor:"pointer",transition:"background 0.2s",fontSize:14,marginRight:12}},"\u66F4\u65B0 localStorage \u6570\u636E"),l.createElement("p",{style:{marginTop:12,fontWeight:500}},"localStorage.userInfo:"," ",t?JSON.stringify(t):"\u6682\u65E0\u6570\u636E")),l.createElement("div",null,l.createElement("button",{onClick:D,style:{padding:"8px 16px",border:"none",borderRadius:6,backgroundColor:"#52c41a",color:"#fff",cursor:"pointer",transition:"background 0.2s",fontSize:14,marginRight:12}},"\u7D2F\u52A0 sessionStorage \u8BA1\u6570"),l.createElement("p",{style:{marginTop:12,fontWeight:500}},"sessionStorage.count: ",h)))}});case 5:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"src-hooks-use-storage-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useStorage } from 'rinokit';

export default () => {
  // \u64CD\u4F5ClocalStorage\uFF0C\u521D\u59CB\u503C\u4E3A\u7A7A\u5BF9\u8C61\uFF0Ckey\u4E3AuserInfo
  const [userInfo, setUserInfo] = useStorage('userInfo', {}, localStorage);

  // \u64CD\u4F5CsessionStorage\uFF0C\u521D\u59CB\u503C\u4E3A0\uFF0Ckey\u4E3Acount
  const [count, setCount] = useStorage('count', 0, sessionStorage);

  // \u66F4\u65B0localStorage\u6570\u636E
  const updateUserInfo = () => {
    setUserInfo({ name: 'rinokit', age: 1, desc: '\u81EA\u5B9A\u4E49\u94A9\u5B50\u5DE5\u5177' });
  };

  // \u66F4\u65B0sessionStorage\u6570\u636E
  const incrementCount = () => {
    setCount((prev) => prev + 1);
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
      <div style={{ marginBottom: 20 }}>
        <button
          onClick={updateUserInfo}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: 6,
            backgroundColor: '#4096ff',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background 0.2s',
            fontSize: 14,
            marginRight: 12,
          }}
        >
          \u66F4\u65B0 localStorage \u6570\u636E
        </button>
        <p style={{ marginTop: 12, fontWeight: 500 }}>
          localStorage.userInfo:{' '}
          {userInfo ? JSON.stringify(userInfo) : '\u6682\u65E0\u6570\u636E'}
        </p>
      </div>

      <div>
        <button
          onClick={incrementCount}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: 6,
            backgroundColor: '#52c41a',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background 0.2s',
            fontSize: 14,
            marginRight: 12,
          }}
        >
          \u7D2F\u52A0 sessionStorage \u8BA1\u6570
        </button>
        <p style={{ marginTop: 12, fontWeight: 500 }}>
          sessionStorage.count: {count}
        </p>
      </div>
    </div>
  );
};`},rinokit:{type:"NPM",value:"1.0.4"}},entry:"index.jsx"},context:{rinokit:v},renderOpts:{compile:function(){var s=C()(g()().mark(function d(){var m,r=arguments;return g()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(657).then(n.bind(n,17657));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,r));case 3:case"end":return o.stop()}},d)}));function p(){return s.apply(this,arguments)}return p}()}}}},8395:function(O,u,n){n.r(u),n.d(u,{Event:function(){return r},Foo:function(){return S},copyToClipboard:function(){return k},createClassPrefix:function(){return E},useEvent:function(){return T},useStorage:function(){return v}});var i=n(75271),g=n(52676),I=function(e){return(0,g.jsx)("h4",{children:e.title})},S=I,T=function(e,t,a){(0,i.useEffect)(function(){return r.on(e,t),function(){r.off(e,t)}},a)},C=n(48305),l=n.n(C),v=function(e,t,a){var c=(0,i.useState)(function(){try{var f=a.getItem(e);return f?JSON.parse(f):t}catch(D){return console.error("Error reading from localStorage: ".concat(D)),t}}),_=l()(c,2),h=_[0],x=_[1];return(0,i.useEffect)(function(){try{a.setItem(e,JSON.stringify(h))}catch(f){console.error("Error writing to localStorage: ".concat(f))}},[h,e,a]),(0,i.useEffect)(function(){var f=function(b){if(b.key===e)try{var y=b.newValue?JSON.parse(b.newValue):null;y!==null&&x(y)}catch(P){console.error("Error parsing localStorage change: ".concat(P))}};return window.addEventListener("storage",f),function(){window.removeEventListener("storage",f)}},[e]),[h,x]},k=function(e){return new Promise(function(t){var a;(a=navigator.clipboard)!==null&&a!==void 0&&a.writeText?navigator.clipboard.writeText(e).then(function(){return t(!0)}).catch(function(){return t(!1)}):t(!1)})},s=new Map,p=function(e,t){s.has(e)||s.set(e,[]),s.get(e).push(t)},d=function(e,t){if(s.has(e)){var a=s.get(e).filter(function(c){return c!==t});a.length===0?s.delete(e):s.set(e,a)}},m=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),c=1;c<t;c++)a[c-1]=arguments[c];s.has(e)&&s.get(e).forEach(function(_){return _.apply(void 0,a)})},r={on:p,off:d,emit:m},E=function(e){if(!e)throw new Error("Prefix cannot be empty");return function(t){return t?"".concat(e,"__").concat(t):e}}},20440:function(O,u,n){n.r(u),n.d(u,{texts:function(){return i}});const i=[{value:"React \u81EA\u5B9A\u4E49\u94A9\u5B50\uFF0C\u7528\u4E8E\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\uFF0C\u81EA\u52A8\u5B8C\u6210\u4E8B\u4EF6\u76D1\u542C\u4E0E\u5378\u8F7D\uFF0C\u907F\u514D\u5185\u5B58\u6CC4\u6F0F\u3002",paraId:0,tocIndex:0},{value:`useEvent(eventName: string, callback: EventCallback, depends: unknown[]): void
`,paraId:1,tocIndex:2},{value:"eventName: string",paraId:2,tocIndex:2},{value:" - \u5FC5\u9009\uFF0C\u9700\u8981\u76D1\u542C\u7684\u5168\u5C40\u4E8B\u4EF6\u540D\u79F0\uFF0C\u9700\u4E0E Event.emit \u89E6\u53D1\u7684\u4E8B\u4EF6\u540D\u79F0\u4FDD\u6301\u4E00\u81F4\u3002",paraId:2,tocIndex:2},{value:"callback: EventCallback",paraId:3,tocIndex:2},{value:" - \u5FC5\u9009\uFF0C\u4E8B\u4EF6\u89E6\u53D1\u65F6\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u53EF\u63A5\u6536\u4E8B\u4EF6\u4F20\u9012\u7684\u4EFB\u610F\u53C2\u6570\u3002",paraId:3,tocIndex:2},{value:"depends: unknown[]",paraId:4,tocIndex:2},{value:" - \u5FC5\u9009\uFF0CReact \u4F9D\u8D56\u9879\u6570\u7EC4\uFF0C\u4F9D\u8D56\u9879\u53D8\u5316\u65F6\uFF0C\u4F1A\u5148\u79FB\u9664\u539F\u6709\u76D1\u542C\uFF0C\u518D\u91CD\u65B0\u6CE8\u518C\u65B0\u7684\u76D1\u542C\u3002",paraId:4,tocIndex:2},{value:"\u7ED1\u5B9A\u5168\u5C40\u4E8B\u4EF6\u76D1\u542C\uFF0C\u5E76\u5728\u7EC4\u4EF6\u5378\u8F7D\u6216\u4F9D\u8D56\u9879\u53D8\u5316\u65F6\u81EA\u52A8\u79FB\u9664\u76D1\u542C\uFF0C\u7B80\u5316\u4E8B\u4EF6\u64CD\u4F5C\u6D41\u7A0B\u3002",paraId:5,tocIndex:2},{value:`type EventCallback = (...args: unknown[]) => void;
`,paraId:6,tocIndex:3},{value:"\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u7C7B\u578B\uFF08\u4E0E Event \u5DE5\u5177\u5171\u7528\uFF09",paraId:7,tocIndex:3},{value:`type UseEvent = (
  eventName: string,
  callback: EventCallback,
  depends: unknown[],
) => void;
`,paraId:8,tocIndex:3},{value:"useEvent \u94A9\u5B50\u7C7B\u578B\u5B9A\u4E49",paraId:9,tocIndex:3},{value:"\u4F9D\u8D56\u9879\u6570\u7EC4",paraId:10,tocIndex:4},{value:"depends",paraId:10,tocIndex:4},{value:"\u9700\u5408\u7406\u914D\u7F6E\uFF0C\u82E5\u4F20\u5165\u7A7A\u6570\u7EC4\uFF0C\u5219\u4EC5\u5728\u7EC4\u4EF6\u6302\u8F7D\u65F6\u6CE8\u518C\u76D1\u542C\u3001\u5378\u8F7D\u65F6\u79FB\u9664\u76D1\u542C\u3002",paraId:10,tocIndex:4},{value:"\u56DE\u8C03\u51FD\u6570\u5EFA\u8BAE\u4F7F\u7528\u7A33\u5B9A\u5F15\u7528\uFF08\u5982 useCallback \u5305\u88F9\uFF09\uFF0C\u907F\u514D\u56E0\u56DE\u8C03\u51FD\u6570\u5F15\u7528\u53D8\u5316\uFF0C\u5BFC\u81F4\u4F9D\u8D56\u9879\u66F4\u65B0\uFF0C\u9891\u7E41\u6CE8\u518C/\u79FB\u9664\u76D1\u542C\u3002",paraId:11,tocIndex:4},{value:"\u8BE5\u94A9\u5B50\u4F9D\u8D56\u5168\u5C40 Event \u5DE5\u5177\uFF0C\u4F7F\u7528\u524D\u9700\u786E\u4FDD Event \u5DE5\u5177\u5DF2\u6B63\u786E\u5F15\u5165\uFF0C\u4E14\u4E8B\u4EF6\u540D\u79F0\u4E0E\u89E6\u53D1\u65F6\u7684\u540D\u79F0\u5B8C\u5168\u4E00\u81F4\u3002",paraId:12,tocIndex:4},{value:"\u82E5\u9700\u505C\u6B62\u76D1\u542C\u7279\u5B9A\u4E8B\u4EF6\uFF0C\u65E0\u9700\u624B\u52A8\u8C03\u7528 Event.off\uFF0C\u7EC4\u4EF6\u5378\u8F7D\u6216\u4F9D\u8D56\u9879\u53D8\u5316\u65F6\u4F1A\u81EA\u52A8\u6E05\u7406\u3002",paraId:13,tocIndex:4}]},52151:function(O,u,n){n.r(u),n.d(u,{texts:function(){return i}});const i=[{value:"React \u81EA\u5B9A\u4E49\u94A9\u5B50\uFF0C\u7528\u4E8E\u4FBF\u6377\u64CD\u4F5C localStorage/sessionStorage\uFF0C\u81EA\u52A8\u540C\u6B65\u5B58\u50A8\u6570\u636E\u4E0E\u7EC4\u4EF6\u72B6\u6001\uFF0C\u652F\u6301\u8DE8\u6807\u7B7E\u9875\u6570\u636E\u540C\u6B65\uFF0C\u5305\u542B\u5F02\u5E38\u5904\u7406\uFF0C\u907F\u514D\u5B58\u50A8\u64CD\u4F5C\u62A5\u9519\u3002",paraId:0,tocIndex:0},{value:`useStorage<T>(key: string, initialValue: T, storage: Storage): [T, (value: T | ((prev: T) => T)) => void]
`,paraId:1,tocIndex:2},{value:"\u7ED1\u5B9A\u5B58\u50A8\u952E\u503C\u5BF9\uFF0C\u81EA\u52A8\u540C\u6B65\u7EC4\u4EF6\u72B6\u6001\u4E0E\u5B58\u50A8\u6570\u636E\uFF0C\u652F\u6301\u8DE8\u6807\u7B7E\u9875\u76D1\u542C\u5B58\u50A8\u53D8\u5316\uFF0C\u81EA\u52A8\u5904\u7406\u5B58\u50A8\u548C\u8BFB\u53D6\u5F02\u5E38\uFF0C\u8FD4\u56DE\u72B6\u6001\u503C\u4E0E\u66F4\u65B0\u51FD\u6570\u3002",paraId:2,tocIndex:2},{value:"key: string",paraId:3,tocIndex:2},{value:" - \u5FC5\u9009\uFF0C\u5B58\u50A8\u7684\u952E\u540D\uFF0C\u7528\u4E8E\u6807\u8BC6\u5B58\u50A8\u6570\u636E\uFF0C\u540C\u4E00\u5B58\u50A8\u5BF9\u8C61\uFF08localStorage/sessionStorage\uFF09\u4E2D\u952E\u540D\u9700\u552F\u4E00\u3002",paraId:3,tocIndex:2},{value:"initialValue: T",paraId:4,tocIndex:2},{value:" - \u5FC5\u9009\uFF0C\u521D\u59CB\u503C\uFF0C\u5F53\u5B58\u50A8\u4E2D\u65E0\u5BF9\u5E94\u952E\u540D\u6570\u636E\u65F6\uFF0C\u4F7F\u7528\u8BE5\u503C\u4F5C\u4E3A\u7EC4\u4EF6\u521D\u59CB\u72B6\u6001\uFF0C\u652F\u6301\u4EFB\u610F\u53EF\u5E8F\u5217\u5316\u7684\u6570\u636E\u7C7B\u578B\uFF08\u5BF9\u8C61\u3001\u6570\u7EC4\u3001\u57FA\u672C\u7C7B\u578B\u7B49\uFF09\u3002",paraId:4,tocIndex:2},{value:"storage: Storage",paraId:5,tocIndex:2},{value:" - \u5FC5\u9009\uFF0C\u6307\u5B9A\u5B58\u50A8\u5BF9\u8C61\uFF0C\u4EC5\u652F\u6301 ",paraId:5,tocIndex:2},{value:"localStorage",paraId:5,tocIndex:2},{value:" \u6216 ",paraId:5,tocIndex:2},{value:"sessionStorage",paraId:5,tocIndex:2},{value:"\u3002",paraId:5,tocIndex:2},{value:"\u8FD4\u56DE\u503C\uFF1A\u6570\u7EC4 [value, setValue]\uFF0Cvalue \u4E3A\u5F53\u524D\u5B58\u50A8\u7684\u72B6\u6001\u503C\uFF0CsetValue \u4E3A\u72B6\u6001\u66F4\u65B0\u51FD\u6570\uFF0C\u652F\u6301\u76F4\u63A5\u4F20\u5165\u65B0\u503C\u6216\u63A5\u6536\u524D\u503C\u8FD4\u56DE\u65B0\u503C\u7684\u51FD\u6570\u3002",paraId:6,tocIndex:2},{value:`type UseStorage = <T>(
  key: string,
  initialValue: T,
  storage: Storage,
) => [T, (value: T | ((prev: T) => T)) => void];
`,paraId:7,tocIndex:3},{value:"useStorage \u94A9\u5B50\u7C7B\u578B\u5B9A\u4E49",paraId:8,tocIndex:3},{value:"\u5B58\u50A8\u7684\u6570\u636E\u5FC5\u987B\u662F\u53EF\u5E8F\u5217\u5316\u7684\uFF08\u5982\u5BF9\u8C61\u3001\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u7B49\uFF09\uFF0C\u65E0\u6CD5\u5B58\u50A8\u51FD\u6570\u3001Symbol\u3001Date \u7B49\u4E0D\u53EF\u5E8F\u5217\u5316\u7C7B\u578B\uFF08\u4F1A\u81EA\u52A8\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u53EF\u80FD\u5BFC\u81F4\u6570\u636E\u5F02\u5E38\uFF09\u3002",paraId:9,tocIndex:4},{value:"\u6307\u5B9A\u7684 storage \u53EA\u80FD\u662F localStorage \u6216 sessionStorage\uFF0C\u4F20\u5165\u5176\u4ED6\u5BF9\u8C61\u4F1A\u5BFC\u81F4\u5B58\u50A8\u64CD\u4F5C\u5931\u8D25\uFF0C\u63A7\u5236\u53F0\u4F1A\u8F93\u51FA\u5BF9\u5E94\u9519\u8BEF\u4FE1\u606F\u3002",paraId:10,tocIndex:4},{value:"\u652F\u6301\u8DE8\u6807\u7B7E\u9875\u6570\u636E\u540C\u6B65\uFF1A\u540C\u4E00\u6D4F\u89C8\u5668\u4E0B\uFF0C\u4E00\u4E2A\u6807\u7B7E\u9875\u4FEE\u6539\u5B58\u50A8\u6570\u636E\u540E\uFF0C\u5176\u4ED6\u4F7F\u7528\u76F8\u540C key \u548C storage \u7684\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u540C\u6B65\u66F4\u65B0\u72B6\u6001\u3002",paraId:11,tocIndex:4},{value:"\u5185\u7F6E\u5F02\u5E38\u5904\u7406\uFF1A\u5F53\u5B58\u50A8\u6EE1\u3001\u6743\u9650\u4E0D\u8DB3\u7B49\u5BFC\u81F4\u5B58\u50A8/\u8BFB\u53D6\u5931\u8D25\u65F6\uFF0C\u4F1A\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u9519\u8BEF\u4FE1\u606F\uFF0C\u4E14\u7EC4\u4EF6\u72B6\u6001\u4E0D\u4F1A\u5F02\u5E38\u5D29\u6E83\uFF0C\u4ECD\u4F7F\u7528\u521D\u59CB\u503C\u6216\u5F53\u524D\u503C\u3002",paraId:12,tocIndex:4},{value:"\u66F4\u65B0\u72B6\u6001\u65F6\uFF0CsetValue \u652F\u6301\u51FD\u6570\u5F0F\u66F4\u65B0\uFF08\u5982 setCount((prev) => prev + 1)\uFF09\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u4F9D\u8D56\u524D\u72B6\u6001\u66F4\u65B0\u7684\u573A\u666F\u3002",paraId:13,tocIndex:4}]}}]);
