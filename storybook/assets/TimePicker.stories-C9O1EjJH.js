import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as i}from"./index-B-lxVbXh.js";import{r as o}from"./index-DkvSDgFW.js";import{c as y}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const Nn={sm:{input:"px-2 py-1.5 text-xs",panel:"text-xs p-2",column:"max-h-36 min-w-[50px]",option:"px-2 py-1.5 text-xs h-7 rounded",icon:"w-3 h-3",panelWidth:"250px"},md:{input:"px-3 py-2 text-sm",panel:"text-sm p-3",column:"max-h-44 min-w-[55px]",option:"px-3 py-2 text-sm h-8 rounded",icon:"w-4 h-4",panelWidth:"280px"},lg:{input:"px-4 py-3 text-base",panel:"text-base p-4",column:"max-h-52 min-w-[60px]",option:"px-4 py-2.5 text-base h-10 rounded",icon:"w-5 h-5",panelWidth:"320px"}},le=(n,m,l,u)=>{const s=p=>p.toString().padStart(2,"0");if(u==="HH:mm")return`${s(n)}:${s(m)}`;if(u==="HH:mm:ss")return`${s(n)}:${s(m)}:${s(l)}`;if(u==="hh:mm A"){const p=n>=12,r=n===0?12:n>12?n-12:n;return`${s(r)}:${s(m)} ${p?"PM":"AM"}`}if(u==="hh:mm:ss A"){const p=n>=12,r=n===0?12:n>12?n-12:n;return`${s(r)}:${s(m)}:${s(l)} ${p?"PM":"AM"}`}return`${s(n)}:${s(m)}:${s(l)}`},he=n=>{if(!n)return{hour:0,minute:0,second:0};const m=n.replace(/\s*(AM|PM)\s*/i,""),l=/AM/i.test(n),u=/PM/i.test(n),s=m.split(":").map(g=>parseInt(g,10)||0);let[p,r=0,d=0]=s;return u&&p!==12?p+=12:l&&p===12&&(p=0),{hour:Math.max(0,Math.min(23,p)),minute:Math.max(0,Math.min(59,r)),second:Math.max(0,Math.min(59,d))}},jn=()=>{const n=new Date;return{hour:n.getHours(),minute:n.getMinutes(),second:n.getSeconds()}},b=({value:n,defaultValue:m="",onChange:l,onSelect:u,onOpenChange:s,placeholder:p="Select time",disabled:r=!1,allowClear:d=!0,autoFocus:g=!1,format:I="HH:mm:ss",size:j="md",status:M,showNow:ee=!0,use12Hours:v=!1,hourStep:ne=1,minuteStep:te=1,secondStep:se=1,hideDisabledOptions:L=!1,disabledHours:w,disabledMinutes:C,disabledSeconds:H,inputReadOnly:on=!1,suffixIcon:ln,clearIcon:cn,className:mn,popupClassName:dn,style:un,...pn})=>{const[hn,ce]=o.useState(m),[S,F]=o.useState(!1),[fn,D]=o.useState(""),ae=o.useRef(null),T=o.useRef(null),me=o.useRef(null),de=o.useRef(null),ue=o.useRef(null),q=n!==void 0?n:hn,k=Nn[j],V=I.includes("ss"),A=v?V?"hh:mm:ss A":"hh:mm A":I,t=o.useMemo(()=>he(q),[q]),re=o.useMemo(()=>{const a=[],c=[],h=[],E=v?12:23,x=v?1:0;for(let f=x;f<=E;f+=ne){const N=(w==null?void 0:w())||[];L&&N.includes(f)||a.push(f)}for(let f=0;f<60;f+=te){const N=(C==null?void 0:C(t.hour))||[];L&&N.includes(f)||c.push(f)}if(V)for(let f=0;f<60;f+=se){const N=(H==null?void 0:H(t.hour,t.minute))||[];L&&N.includes(f)||h.push(f)}return{hours:a,minutes:c,seconds:h}},[v,ne,te,se,V,L,w,C,H,t.hour,t.minute]);o.useEffect(()=>{if(q){const a=le(t.hour,t.minute,t.second,A);D(a)}else D("")},[q,t,A]);const P=o.useCallback(a=>{const c=le(a.hour,a.minute,a.second,A);n===void 0&&ce(c),l==null||l(c,a)},[n,l,A]),oe=o.useCallback((a,c)=>{let h={...t};if(a==="hour")if(v){const x=t.hour>=12;c===12?h.hour=x?12:0:h.hour=x?c+12:c}else h.hour=c;else a==="minute"?h.minute=c:a==="second"&&(h.second=c);P(h),u==null||u(le(h.hour,h.minute,h.second,A),h)},[t,v,P,u,A]),pe=o.useCallback(()=>{if(!v)return;const a=t.hour>=12?t.hour-12:t.hour+12;oe("hour",a)},[v,t.hour,oe]),xn=o.useCallback(()=>{const a=jn();P(a),F(!1)},[P]),bn=o.useCallback(()=>{r||(n===void 0&&ce(""),D(""),l==null||l("",{hour:0,minute:0,second:0}),T.current&&T.current.focus())},[r,n,l]),gn=o.useCallback(a=>{const c=a.target.value;if(D(c),c)try{const h=he(c);P(h)}catch{}},[P]),vn=o.useCallback(()=>{r||(F(!0),s==null||s(!0))},[r,s]),yn=o.useCallback(()=>{setTimeout(()=>{F(!1),s==null||s(!1)},200)},[s]);o.useEffect(()=>{const a=c=>{ae.current&&!ae.current.contains(c.target)&&(F(!1),s==null||s(!1))};if(S)return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[S,s]),o.useEffect(()=>{g&&T.current&&T.current.focus()},[g]),o.useEffect(()=>{if(!S)return;const a=(c,h,E)=>{if(!c.current)return;const x=c.current.querySelector(`[data-value="${h}"]`);x&&x.scrollIntoView({block:"center",behavior:"smooth"})};setTimeout(()=>{const c=v?t.hour===0?12:t.hour>12?t.hour-12:t.hour:t.hour;a(me,c),a(de,t.minute),V&&a(ue,t.second)},50)},[S,t,v,ne,te,se,V]);const ie=(a,c,h,E)=>e.jsx("div",{ref:E,className:y("flex-1 overflow-y-auto border-r border-secondary-100 last:border-r-0 scrollbar-thin scrollbar-thumb-secondary-300 scrollbar-track-transparent",k.column),children:c.map(x=>{const f=a==="hour"&&(w==null?void 0:w().includes(x))||a==="minute"&&(C==null?void 0:C(t.hour).includes(x))||a==="second"&&(H==null?void 0:H(t.hour,t.minute).includes(x)),N=x===h;return e.jsx("div",{"data-value":x,onClick:()=>!f&&oe(a,x),className:y("cursor-pointer transition-all duration-200 flex items-center justify-center mx-1 my-0.5",k.option,{"bg-primary-100 text-primary-700 font-semibold shadow-sm":N,"hover:bg-secondary-50 text-secondary-700":!N&&!f,"opacity-40 cursor-not-allowed":f}),children:x.toString().padStart(2,"0")},x)})}),kn=()=>e.jsxs("div",{className:y("absolute z-50 mt-2 bg-white border border-secondary-200 rounded-xl shadow-xl",k.panel,dn),style:{minWidth:k.panelWidth},children:[e.jsxs("div",{className:"flex gap-1",children:[ie("hour",re.hours,v?t.hour===0?12:t.hour>12?t.hour-12:t.hour:t.hour,me),ie("minute",re.minutes,t.minute,de),V&&ie("second",re.seconds,t.second,ue),v&&e.jsxs("div",{className:"flex flex-col w-20 px-1",children:[e.jsx("button",{onClick:pe,className:y("flex items-center justify-center border-b border-secondary-100 transition-all duration-200",k.option,{"bg-primary-100 text-primary-700 font-medium":t.hour<12,"hover:bg-secondary-50 text-secondary-600":t.hour>=12}),children:"AM"}),e.jsx("button",{onClick:pe,className:y("flex items-center justify-center transition-all duration-200",k.option,{"bg-primary-100 text-primary-700 font-medium":t.hour>=12,"hover:bg-secondary-50 text-secondary-600":t.hour<12}),children:"PM"})]})]}),ee&&e.jsx("div",{className:"border-t border-secondary-200 p-2",children:e.jsx("button",{onClick:xn,className:"w-full px-3 py-1 text-sm text-primary-600 hover:bg-primary-50 rounded transition-colors",children:"Now"})})]});return e.jsxs("div",{ref:ae,className:y("relative",mn),style:un,...pn,children:[e.jsxs("div",{className:y("flex items-center border border-secondary-300 rounded-md bg-white cursor-pointer transition-colors",k.input,{"border-primary-500 ring-2 ring-primary-500 ring-opacity-20":S&&!M,"border-red-500 ring-2 ring-red-500 ring-opacity-20":M==="error","border-yellow-500 ring-2 ring-yellow-500 ring-opacity-20":M==="warning","hover:border-secondary-400":!r&&!S&&!M,"opacity-50 cursor-not-allowed":r}),onClick:()=>{r||T.current&&T.current.focus()},children:[e.jsx("input",{ref:T,type:"text",value:fn,onChange:gn,onFocus:vn,onBlur:yn,placeholder:p,disabled:r,readOnly:on,className:"flex-1 bg-transparent outline-none"}),e.jsxs("div",{className:"flex items-center ml-2 space-x-1",children:[d&&q&&!r&&e.jsx("button",{onClick:a=>{a.stopPropagation(),bn()},className:"text-secondary-400 hover:text-secondary-600 transition-colors",children:cn||e.jsx("svg",{className:y(k.icon),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),ln||e.jsx("svg",{className:y("text-secondary-400",k.icon),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})]})]}),S&&kn()]})};try{b.displayName="TimePicker",b.__docgenInfo={description:"",displayName:"TimePicker",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((time: string, timeValue: TimePickerValue) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((time: string, timeValue: TimePickerValue) => void)"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},placeholder:{defaultValue:{value:"Select time"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},allowClear:{defaultValue:{value:"true"},description:"",name:"allowClear",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"false"},description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},format:{defaultValue:{value:"HH:mm:ss"},description:"",name:"format",required:!1,type:{name:"enum",value:[{value:'"HH:mm"'},{value:'"HH:mm:ss"'},{value:'"hh:mm A"'},{value:'"hh:mm:ss A"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'}]}},showNow:{defaultValue:{value:"true"},description:"",name:"showNow",required:!1,type:{name:"boolean"}},use12Hours:{defaultValue:{value:"false"},description:"",name:"use12Hours",required:!1,type:{name:"boolean"}},hourStep:{defaultValue:{value:"1"},description:"",name:"hourStep",required:!1,type:{name:"number"}},minuteStep:{defaultValue:{value:"1"},description:"",name:"minuteStep",required:!1,type:{name:"number"}},secondStep:{defaultValue:{value:"1"},description:"",name:"secondStep",required:!1,type:{name:"number"}},hideDisabledOptions:{defaultValue:{value:"false"},description:"",name:"hideDisabledOptions",required:!1,type:{name:"boolean"}},disabledHours:{defaultValue:null,description:"",name:"disabledHours",required:!1,type:{name:"(() => number[])"}},disabledMinutes:{defaultValue:null,description:"",name:"disabledMinutes",required:!1,type:{name:"((hour: number) => number[])"}},disabledSeconds:{defaultValue:null,description:"",name:"disabledSeconds",required:!1,type:{name:"((hour: number, minute: number) => number[])"}},inputReadOnly:{defaultValue:{value:"false"},description:"",name:"inputReadOnly",required:!1,type:{name:"boolean"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},clearIcon:{defaultValue:null,description:"",name:"clearIcon",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},popupClassName:{defaultValue:null,description:"",name:"popupClassName",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Vn={title:"Form Controls/TimePicker",component:b,parameters:{layout:"centered",docs:{description:{component:"Komponen TimePicker untuk memilih waktu dengan presisi tinggi. Mendukung format 12/24 jam, step interval yang dapat dikustomisasi, validasi waktu, dan berbagai opsi konfigurasi untuk kebutuhan input waktu yang beragam."}}},tags:["autodocs"],argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Apakah disabled"},allowClear:{control:{type:"boolean"},description:"Apakah menampilkan tombol clear"},autoFocus:{control:{type:"boolean"},description:"Apakah auto focus saat mount"},format:{control:{type:"select"},options:["HH:mm","HH:mm:ss","hh:mm A","hh:mm:ss A"],description:"Format tampilan waktu"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran time picker"},status:{control:{type:"select"},options:[void 0,"error","warning"],description:"Status validation"},showNow:{control:{type:"boolean"},description:"Apakah menampilkan tombol Now"},use12Hours:{control:{type:"boolean"},description:"Apakah menggunakan format 12 jam"},inputReadOnly:{control:{type:"boolean"},description:"Apakah input read-only"},hourStep:{control:{type:"number",min:1,max:12},description:"Step interval untuk jam"},minuteStep:{control:{type:"number",min:1,max:30},description:"Step interval untuk menit"},secondStep:{control:{type:"number",min:1,max:30},description:"Step interval untuk detik"}}},W={args:{onChange:i("time-changed"),onSelect:i("time-selected"),onOpenChange:i("open-changed")}},R={args:{defaultValue:"14:30:00",onChange:i("time-changed"),onSelect:i("time-selected")}},$={args:{use12Hours:!0,defaultValue:"02:30:45 PM",onChange:i("12h-time-changed"),onSelect:i("12h-time-selected")}},_={args:{format:"HH:mm",defaultValue:"09:15",onChange:i("hm-time-changed"),onSelect:i("hm-time-selected")}},z={args:{hourStep:2,minuteStep:15,secondStep:10,defaultValue:"10:30:20",onChange:i("step-time-changed"),onSelect:i("step-time-selected")}},O={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Small"}),e.jsx(b,{size:"sm",placeholder:"Small time picker",onChange:i("small-changed")})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Medium (Default)"}),e.jsx(b,{size:"md",placeholder:"Medium time picker",onChange:i("medium-changed")})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Large"}),e.jsx(b,{size:"lg",placeholder:"Large time picker",onChange:i("large-changed")})]})]})},B={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Normal"}),e.jsx(b,{placeholder:"Normal state",onChange:i("normal-changed")})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1 text-yellow-700",children:"Warning"}),e.jsx(b,{status:"warning",defaultValue:"23:59:59",placeholder:"Warning state",onChange:i("warning-changed")}),e.jsx("p",{className:"text-xs text-yellow-600 mt-1",children:"Late time detected"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1 text-red-700",children:"Error"}),e.jsx(b,{status:"error",placeholder:"Error state",onChange:i("error-changed")}),e.jsx("p",{className:"text-xs text-red-600 mt-1",children:"Invalid time format"})]})]})},U={render:()=>{const n=()=>[22,23,0,1,2,3,4,5,6],m=u=>u>=12&&u<=13?Array.from({length:30},(s,p)=>p*2+1):[],l=(u,s)=>u===9&&s===30?[0,10,20,30,40,50]:[];return e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Night hours (22:00-06:59) are disabled. Odd minutes disabled during lunch (12:00-13:59). Some seconds disabled at 09:30."}),e.jsx(b,{defaultValue:"09:30:15",disabledHours:n,disabledMinutes:m,disabledSeconds:l,onChange:i("disabled-time-changed")})]})}},Y={args:{inputReadOnly:!0,defaultValue:"15:45:30",placeholder:"Click to select time",onChange:i("readonly-changed")}},K={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Custom Suffix Icon"}),e.jsx(b,{suffixIcon:e.jsx("svg",{className:"w-4 h-4 text-blue-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),onChange:i("custom-icon-changed")})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Custom Clear Icon"}),e.jsx(b,{defaultValue:"10:15:30",clearIcon:e.jsx("svg",{className:"w-4 h-4 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),onChange:i("custom-clear-changed")})]})]})},G={render:()=>{const[n,m]=o.useState("09:30:45"),[l,u]=o.useState("HH:mm:ss"),[s,p]=o.useState(!1),r=d=>{u(d),p(d.includes("A"))};return e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Controlled TimePicker"}),e.jsx(b,{value:n,format:l,use12Hours:s,onChange:(d,g)=>{m(d),i("controlled-changed")({newTime:d,timeValue:g})},onSelect:(d,g)=>{m(d),i("controlled-selected")({selectedTime:d,timeValue:g})}})]}),e.jsxs("div",{className:"text-sm text-secondary-600 space-y-1",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Current Time:"})," ",n]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Format:"})," ",l]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"12 Hours:"})," ",s?"Yes":"No"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium mb-1",children:"Format Options"}),e.jsx("div",{className:"flex flex-wrap gap-1",children:["HH:mm","HH:mm:ss","hh:mm A","hh:mm:ss A"].map(d=>e.jsx("button",{onClick:()=>r(d),className:y("px-2 py-1 text-xs rounded border transition-colors",l===d?"bg-primary-100 text-primary-700 border-primary-300":"bg-secondary-100 text-secondary-700 border-secondary-300 hover:bg-secondary-200"),children:d},d))})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>m("08:00:00"),className:"px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200",children:"Morning"}),e.jsx("button",{onClick:()=>m("12:30:00"),className:"px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200",children:"Lunch"}),e.jsx("button",{onClick:()=>m("18:45:00"),className:"px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded hover:bg-orange-200",children:"Evening"}),e.jsx("button",{onClick:()=>m(""),className:"px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200",children:"Clear"})]})]})]})}},J={render:()=>{const[n,m]=o.useState("09:00"),[l,u]=o.useState("10:00"),s=()=>{if(!n)return[];const[r]=n.split(":").map(Number);return Array.from({length:r},(d,g)=>g)},p=r=>{if(!n)return[];const[d,g]=n.split(":").map(Number);return r===d?Array.from({length:g},(I,j)=>j):[]};return e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Schedule Meeting"}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Start Time"}),e.jsx(b,{value:n,format:"HH:mm",onChange:r=>{m(r),i("start-time-changed")(r)}})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"End Time"}),e.jsx(b,{value:l,format:"HH:mm",disabledHours:s,disabledMinutes:p,onChange:r=>{u(r),i("end-time-changed")(r)}}),e.jsx("p",{className:"text-xs text-secondary-500 mt-1",children:"End time must be after start time"})]}),e.jsx("div",{className:"p-3 bg-secondary-50 rounded",children:e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{children:e.jsx("span",{className:"font-medium",children:"Meeting Duration:"})}),e.jsx("div",{className:"text-secondary-600",children:n&&l&&(()=>{const[r,d]=n.split(":").map(Number),[g,I]=l.split(":").map(Number),j=g*60+I-(r*60+d),M=Math.floor(j/60),ee=j%60;return j>0?`${M}h ${ee}m`:"Invalid time range"})()})]})})]})}},Q={render:()=>{const n=()=>Array.from({length:24},(m,l)=>l).filter(m=>m<9||m>17);return e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Only business hours (09:00-17:59) are shown in this time picker."}),e.jsx(b,{hideDisabledOptions:!0,disabledHours:n,minuteStep:15,onChange:i("business-time-changed")})]})}},X={args:{disabled:!0,defaultValue:"14:30:45",placeholder:"Disabled time picker"}},Z={args:{autoFocus:!0,placeholder:"Auto focused on mount",onChange:i("autofocus-changed")}};var fe,xe,be;W.parameters={...W.parameters,docs:{...(fe=W.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    onChange: action("time-changed"),
    onSelect: action("time-selected"),
    onOpenChange: action("open-changed")
  }
}`,...(be=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ge,ve,ye;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    defaultValue: "14:30:00",
    onChange: action("time-changed"),
    onSelect: action("time-selected")
  }
}`,...(ye=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var ke,Ne,je;$.parameters={...$.parameters,docs:{...(ke=$.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    use12Hours: true,
    defaultValue: "02:30:45 PM",
    onChange: action("12h-time-changed"),
    onSelect: action("12h-time-selected")
  }
}`,...(je=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var we,Ce,He;_.parameters={..._.parameters,docs:{...(we=_.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    format: "HH:mm",
    defaultValue: "09:15",
    onChange: action("hm-time-changed"),
    onSelect: action("hm-time-selected")
  }
}`,...(He=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:He.source}}};var Se,Te,Me;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    hourStep: 2,
    minuteStep: 15,
    secondStep: 10,
    defaultValue: "10:30:20",
    onChange: action("step-time-changed"),
    onSelect: action("step-time-selected")
  }
}`,...(Me=(Te=z.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}};var Ve,Ae,Pe;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">Small</label>
        <TimePicker size="sm" placeholder="Small time picker" onChange={action("small-changed")} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Medium (Default)
        </label>
        <TimePicker size="md" placeholder="Medium time picker" onChange={action("medium-changed")} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Large</label>
        <TimePicker size="lg" placeholder="Large time picker" onChange={action("large-changed")} />
      </div>
    </div>
}`,...(Pe=(Ae=O.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var Ie,qe,Ee;B.parameters={...B.parameters,docs:{...(Ie=B.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">Normal</label>
        <TimePicker placeholder="Normal state" onChange={action("normal-changed")} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-yellow-700">
          Warning
        </label>
        <TimePicker status="warning" defaultValue="23:59:59" placeholder="Warning state" onChange={action("warning-changed")} />
        <p className="text-xs text-yellow-600 mt-1">Late time detected</p>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-red-700">
          Error
        </label>
        <TimePicker status="error" placeholder="Error state" onChange={action("error-changed")} />
        <p className="text-xs text-red-600 mt-1">Invalid time format</p>
      </div>
    </div>
}`,...(Ee=(qe=B.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source}}};var Le,Fe,De;U.parameters={...U.parameters,docs:{...(Le=U.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const disabledHours = () => {
      // Disable night hours (22-06)
      return [22, 23, 0, 1, 2, 3, 4, 5, 6];
    };
    const disabledMinutes = (hour: number) => {
      // Disable odd minutes during lunch hours
      if (hour >= 12 && hour <= 13) {
        return Array.from({
          length: 30
        }, (_, i) => i * 2 + 1);
      }
      return [];
    };
    const disabledSeconds = (hour: number, minute: number) => {
      // Disable seconds ending with 0 during specific times
      if (hour === 9 && minute === 30) {
        return [0, 10, 20, 30, 40, 50];
      }
      return [];
    };
    return <div>
        <p className="text-sm text-secondary-600 mb-4">
          Night hours (22:00-06:59) are disabled. Odd minutes disabled during
          lunch (12:00-13:59). Some seconds disabled at 09:30.
        </p>
        <TimePicker defaultValue="09:30:15" disabledHours={disabledHours} disabledMinutes={disabledMinutes} disabledSeconds={disabledSeconds} onChange={action("disabled-time-changed")} />
      </div>;
  }
}`,...(De=(Fe=U.parameters)==null?void 0:Fe.docs)==null?void 0:De.source}}};var We,Re,$e;Y.parameters={...Y.parameters,docs:{...(We=Y.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    inputReadOnly: true,
    defaultValue: "15:45:30",
    placeholder: "Click to select time",
    onChange: action("readonly-changed")
  }
}`,...($e=(Re=Y.parameters)==null?void 0:Re.docs)==null?void 0:$e.source}}};var _e,ze,Oe;K.parameters={...K.parameters,docs:{...(_e=K.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">
          Custom Suffix Icon
        </label>
        <TimePicker suffixIcon={<svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>} onChange={action("custom-icon-changed")} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Custom Clear Icon
        </label>
        <TimePicker defaultValue="10:15:30" clearIcon={<svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>} onChange={action("custom-clear-changed")} />
      </div>
    </div>
}`,...(Oe=(ze=K.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source}}};var Be,Ue,Ye;G.parameters={...G.parameters,docs:{...(Be=G.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState("09:30:45");
    const [format, setFormat] = useState<"HH:mm" | "HH:mm:ss" | "hh:mm A" | "hh:mm:ss A">("HH:mm:ss");
    const [use12Hours, setUse12Hours] = useState(false);
    const handleFormatChange = (newFormat: typeof format) => {
      setFormat(newFormat);
      setUse12Hours(newFormat.includes("A"));
    };
    return <div className="space-y-4 w-80">
        <div>
          <label className="block text-sm font-medium mb-1">
            Controlled TimePicker
          </label>
          <TimePicker value={time} format={format} use12Hours={use12Hours} onChange={(newTime, timeValue) => {
          setTime(newTime);
          action("controlled-changed")({
            newTime,
            timeValue
          });
        }} onSelect={(selectedTime, timeValue) => {
          setTime(selectedTime);
          action("controlled-selected")({
            selectedTime,
            timeValue
          });
        }} />
        </div>

        <div className="text-sm text-secondary-600 space-y-1">
          <div>
            <span className="font-medium">Current Time:</span> {time}
          </div>
          <div>
            <span className="font-medium">Format:</span> {format}
          </div>
          <div>
            <span className="font-medium">12 Hours:</span>{" "}
            {use12Hours ? "Yes" : "No"}
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <label className="block text-xs font-medium mb-1">
              Format Options
            </label>
            <div className="flex flex-wrap gap-1">
              {(["HH:mm", "HH:mm:ss", "hh:mm A", "hh:mm:ss A"] as const).map(fmt => <button key={fmt} onClick={() => handleFormatChange(fmt)} className={clsx("px-2 py-1 text-xs rounded border transition-colors", format === fmt ? "bg-primary-100 text-primary-700 border-primary-300" : "bg-secondary-100 text-secondary-700 border-secondary-300 hover:bg-secondary-200")}>
                    {fmt}
                  </button>)}
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={() => setTime("08:00:00")} className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
              Morning
            </button>
            <button onClick={() => setTime("12:30:00")} className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
              Lunch
            </button>
            <button onClick={() => setTime("18:45:00")} className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded hover:bg-orange-200">
              Evening
            </button>
            <button onClick={() => setTime("")} className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200">
              Clear
            </button>
          </div>
        </div>
      </div>;
  }
}`,...(Ye=(Ue=G.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var Ke,Ge,Je;J.parameters={...J.parameters,docs:{...(Ke=J.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    const [startTime, setStartTime] = useState("09:00");
    const [endTime, setEndTime] = useState("10:00");
    const disabledEndHours = () => {
      if (!startTime) return [];
      const [startHour] = startTime.split(":").map(Number);
      return Array.from({
        length: startHour
      }, (_, i) => i);
    };
    const disabledEndMinutes = (hour: number) => {
      if (!startTime) return [];
      const [startHour, startMinute] = startTime.split(":").map(Number);
      if (hour === startHour) {
        return Array.from({
          length: startMinute
        }, (_, i) => i);
      }
      return [];
    };
    return <div className="space-y-4 w-80">
        <h3 className="text-lg font-semibold">Schedule Meeting</h3>

        <div>
          <label className="block text-sm font-medium mb-1">Start Time</label>
          <TimePicker value={startTime} format="HH:mm" onChange={time => {
          setStartTime(time);
          action("start-time-changed")(time);
        }} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">End Time</label>
          <TimePicker value={endTime} format="HH:mm" disabledHours={disabledEndHours} disabledMinutes={disabledEndMinutes} onChange={time => {
          setEndTime(time);
          action("end-time-changed")(time);
        }} />
          <p className="text-xs text-secondary-500 mt-1">
            End time must be after start time
          </p>
        </div>

        <div className="p-3 bg-secondary-50 rounded">
          <div className="text-sm">
            <div>
              <span className="font-medium">Meeting Duration:</span>
            </div>
            <div className="text-secondary-600">
              {startTime && endTime && (() => {
              const [startH, startM] = startTime.split(":").map(Number);
              const [endH, endM] = endTime.split(":").map(Number);
              const diffMinutes = endH * 60 + endM - (startH * 60 + startM);
              const hours = Math.floor(diffMinutes / 60);
              const minutes = diffMinutes % 60;
              return diffMinutes > 0 ? \`\${hours}h \${minutes}m\` : "Invalid time range";
            })()}
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(Je=(Ge=J.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;Q.parameters={...Q.parameters,docs:{...(Qe=Q.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: () => {
    const businessHours = () => {
      // Only show business hours (9-17)
      return Array.from({
        length: 24
      }, (_, i) => i).filter(h => h < 9 || h > 17);
    };
    return <div>
        <p className="text-sm text-secondary-600 mb-4">
          Only business hours (09:00-17:59) are shown in this time picker.
        </p>
        <TimePicker hideDisabledOptions disabledHours={businessHours} minuteStep={15} onChange={action("business-time-changed")} />
      </div>;
  }
}`,...(Ze=(Xe=Q.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var en,nn,tn;X.parameters={...X.parameters,docs:{...(en=X.parameters)==null?void 0:en.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "14:30:45",
    placeholder: "Disabled time picker"
  }
}`,...(tn=(nn=X.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var sn,an,rn;Z.parameters={...Z.parameters,docs:{...(sn=Z.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  args: {
    autoFocus: true,
    placeholder: "Auto focused on mount",
    onChange: action("autofocus-changed")
  }
}`,...(rn=(an=Z.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};const An=["Default","WithDefaultValue","Format12Hours","HourMinuteOnly","WithSteps","Sizes","ValidationStates","WithDisabledTimes","ReadOnlyInput","CustomIcons","ControlledTimePicker","MeetingTimePicker","HideDisabledOptions","DisabledState","AutoFocus"];export{Z as AutoFocus,G as ControlledTimePicker,K as CustomIcons,W as Default,X as DisabledState,$ as Format12Hours,Q as HideDisabledOptions,_ as HourMinuteOnly,J as MeetingTimePicker,Y as ReadOnlyInput,O as Sizes,B as ValidationStates,R as WithDefaultValue,U as WithDisabledTimes,z as WithSteps,An as __namedExportsOrder,Vn as default};
