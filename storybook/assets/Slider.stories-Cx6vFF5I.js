import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as d}from"./index-B-lxVbXh.js";import{R as M,r as i}from"./index-DkvSDgFW.js";import{c as g}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const j={sm:{track:"h-1",thumb:"w-4 h-4",label:"text-sm",marks:"text-xs"},md:{track:"h-2",thumb:"w-5 h-5",label:"text-base",marks:"text-sm"},lg:{track:"h-3",thumb:"w-6 h-6",label:"text-lg",marks:"text-base"}},X={primary:{track:"bg-primary-600",thumb:"bg-primary-600 border-primary-600 hover:bg-primary-700 focus:ring-primary-500",tooltip:"bg-primary-600"},secondary:{track:"bg-secondary-600",thumb:"bg-secondary-600 border-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500",tooltip:"bg-secondary-600"},success:{track:"bg-green-600",thumb:"bg-green-600 border-green-600 hover:bg-green-700 focus:ring-green-500",tooltip:"bg-green-600"},warning:{track:"bg-yellow-500",thumb:"bg-yellow-500 border-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500",tooltip:"bg-yellow-500"},error:{track:"bg-red-600",thumb:"bg-red-600 border-red-600 hover:bg-red-700 focus:ring-red-500",tooltip:"bg-red-600"}},o=M.forwardRef(({value:a,onChange:r,min:n=0,max:s=100,step:p=1,label:f,helperText:v,error:N,size:t="md",color:S="primary",disabled:y=!1,showTooltip:Je=!1,showMarks:Y=!1,marks:K,formatValue:Q,className:Ze,orientation:c="horizontal",...ea},aa)=>{const[G,J]=M.useState(!1),[na,Z]=M.useState(null),U=M.useRef(null),k=Array.isArray(a),b=k?a:[a],V=l=>(l-n)/(s-n)*100,ee=(l,u)=>{if(!U.current)return n;const h=U.current.getBoundingClientRect();let m;c==="horizontal"?m=(l-h.left)/h.width*100:m=(h.bottom-u)/h.height*100,m=Math.max(0,Math.min(100,m));const x=n+m/100*(s-n),w=Math.round(x/p)*p;return Math.max(n,Math.min(s,w))},sa=l=>u=>{if(y)return;u.preventDefault(),J(!0),Z(l);const h=x=>{x.preventDefault();const w=ee(x.clientX,x.clientY);if(k){const C=[...b];C[l]=w,l===0&&w>b[1]?C[1]=w:l===1&&w<b[0]&&(C[0]=w),r(C)}else r(w)},m=()=>{J(!1),Z(null),document.removeEventListener("pointermove",h),document.removeEventListener("pointerup",m)};document.addEventListener("pointermove",h),document.addEventListener("pointerup",m)},ra=l=>{if(y||G)return;const u=ee(l.clientX,l.clientY);if(k){const h=b.map(w=>Math.abs(w-u)),m=h.indexOf(Math.min(...h)),x=[...b];x[m]=u,r(x)}else r(u)},ta=Y?Array.from({length:Math.floor((s-n)/p)+1},(l,u)=>({value:n+u*p})):[],la=K||ta,oa=(l,u)=>e.jsx("div",{className:g("absolute rounded-full border-2 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 z-10","transition-transform duration-300 ease-out","transform -translate-x-1/2 -translate-y-1/2",j[t].thumb,X[S].thumb,y&&"cursor-not-allowed opacity-50",G&&na===u&&"scale-110 shadow-lg transition-transform duration-150 ease-out"),style:{left:c==="horizontal"?`${V(l)}%`:"50%",bottom:c==="vertical"?`${V(l)}%`:"50%",top:c==="horizontal"?"50%":"auto"},onPointerDown:sa(u),tabIndex:y?-1:0,role:"slider","aria-valuemin":n,"aria-valuemax":s,"aria-valuenow":l,"aria-label":`Slider thumb ${u+1}`,onKeyDown:h=>{if(y)return;let m=l;switch(h.key){case"ArrowUp":case"ArrowRight":m=Math.min(s,l+p);break;case"ArrowDown":case"ArrowLeft":m=Math.max(n,l-p);break;case"Home":m=n;break;case"End":m=s;break;default:return}if(h.preventDefault(),k){const x=[...b];x[u]=m,r(x)}else r(m)},children:Je&&e.jsxs("div",{className:g("absolute bottom-full mb-2 px-2 py-1 text-xs text-white rounded whitespace-nowrap transform -translate-x-1/2 left-1/2",X[S].tooltip),children:[Q?Q(l):l,e.jsx("div",{className:g("absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent",`border-t-${S}-600`),style:{borderTopColor:`var(--color-${S}-600)`}})]})},u),ia=()=>!Y&&!K?null:e.jsx("div",{className:"absolute inset-0",children:la.map((l,u)=>e.jsxs("div",{className:"absolute",style:{left:c==="horizontal"?`${V(l.value)}%`:"50%",bottom:c==="vertical"?`${V(l.value)}%`:"0",transform:"translateX(-50%)"},children:[e.jsx("div",{className:g("w-2 h-2 rounded-full bg-secondary-400 transform",c==="horizontal"?"-translate-x-1/2":"-translate-x-1/2 -translate-y-1/2"),style:{[c==="horizontal"?"top":"left"]:"50%"}}),l.label&&e.jsx("div",{className:g("absolute whitespace-nowrap text-secondary-600 mt-4 transform -translate-x-1/2",j[t].marks),style:{top:c==="horizontal"?"100%":"50%",left:"50%"},children:l.label})]},u))}),ca=k?V(Math.max(...b))-V(Math.min(...b)):V(b[0]),da=k?V(Math.min(...b)):0;return e.jsxs("div",{ref:aa,className:g("slider w-full",Ze),...ea,children:[f&&e.jsx("label",{className:g("block font-medium text-secondary-700 mb-2",j[t].label),children:f}),e.jsx("div",{className:g("relative flex items-center py-4",c==="vertical"&&"h-48 w-8 flex-col justify-center"),children:e.jsxs("div",{ref:U,className:g("relative bg-secondary-200 rounded-full cursor-pointer",c==="horizontal"?g("w-full",j[t].track):g("h-full w-2"),y&&"cursor-not-allowed opacity-50"),onClick:ra,children:[e.jsx("div",{className:g("absolute rounded-full transition-all duration-300 ease-out",X[S].track,c==="horizontal"?j[t].track:"w-full"),style:{[c==="horizontal"?"width":"height"]:`${ca}%`,[c==="horizontal"?"left":"bottom"]:`${da}%`,top:c==="horizontal"?"50%":"auto",transform:c==="horizontal"?"translateY(-50%)":"none"}}),ia(),b.map(oa)]})}),(v||N)&&e.jsx("p",{className:g("mt-1 text-sm",N?"text-red-600":"text-secondary-600"),children:N||v})]})});o.displayName="Slider";try{o.displayName="Slider",o.__docgenInfo={description:"",displayName:"Slider",props:{value:{defaultValue:null,description:"Nilai slider",name:"value",required:!0,type:{name:"number | number[]"}},onChange:{defaultValue:null,description:"Callback ketika nilai berubah",name:"onChange",required:!0,type:{name:"(value: number | number[]) => void"}},min:{defaultValue:{value:"0"},description:"Nilai minimum",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Nilai maksimum",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"Step increment",name:"step",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"Label untuk slider",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Ukuran slider",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"primary"},description:"Warna slider",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},disabled:{defaultValue:{value:"false"},description:"Apakah disabled",name:"disabled",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:{value:"false"},description:"Apakah menampilkan tooltip value",name:"showTooltip",required:!1,type:{name:"boolean"}},showMarks:{defaultValue:{value:"false"},description:"Apakah menampilkan marks",name:"showMarks",required:!1,type:{name:"boolean"}},marks:{defaultValue:null,description:"Custom marks",name:"marks",required:!1,type:{name:"{ value: number; label?: string; }[]"}},formatValue:{defaultValue:null,description:"Format untuk tooltip/display value",name:"formatValue",required:!1,type:{name:"((value: number) => string)"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"Orientasi slider",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const ba={title:"Form Controls/Slider",component:o,parameters:{layout:"centered",docs:{description:{component:"Komponen Slider untuk input range dengan support untuk single value dan range (multiple values). Mendukung berbagai ukuran, warna, orientasi, marks, tooltip, dan keyboard navigation."}}},tags:["autodocs"],argTypes:{min:{control:{type:"number"},description:"Nilai minimum"},max:{control:{type:"number"},description:"Nilai maksimum"},step:{control:{type:"number",min:.1,step:.1},description:"Step increment"},size:{control:"select",options:["sm","md","lg"],description:"Ukuran slider"},color:{control:"select",options:["primary","secondary","success","warning","error"],description:"Warna slider"},orientation:{control:"select",options:["horizontal","vertical"],description:"Orientasi slider"},showTooltip:{control:"boolean",description:"Tampilkan tooltip value"},showMarks:{control:"boolean",description:"Tampilkan marks"},disabled:{control:"boolean",description:"Disable slider"},label:{control:"text",description:"Label slider"},helperText:{control:"text",description:"Helper text"},error:{control:"text",description:"Error message"},onChange:{action:"slider-changed"}},args:{onChange:d("slider-changed")}},z={render:a=>{const[r,n]=i.useState(50);return e.jsx("div",{className:"w-80 p-4",children:e.jsx(o,{...a,value:r,onChange:s=>{n(s),d("slider-changed")(s)}})})},args:{min:0,max:100,step:1,label:"Volume"}},R={render:a=>{const[r,n]=i.useState(75);return e.jsx("div",{className:"w-80 p-4",children:e.jsx(o,{...a,value:r,onChange:s=>{n(s),d("tooltip-slider-changed")(s)}})})},args:{min:0,max:100,label:"Brightness",showTooltip:!0,formatValue:a=>`${a}%`}},T={render:a=>{const[r,n]=i.useState(50);return e.jsx("div",{className:"w-80 p-4",children:e.jsx(o,{...a,value:r,onChange:s=>{n(s),d("marks-slider-changed")(s)}})})},args:{min:0,max:100,step:25,label:"Quality",showMarks:!0}},$={render:a=>{const[r,n]=i.useState([20,80]);return e.jsxs("div",{className:"w-80 p-4",children:[e.jsx(o,{...a,value:r,onChange:s=>{n(s),d("range-slider-changed")(s)}}),e.jsxs("div",{className:"mt-2 text-sm text-secondary-600",children:["Range: ",r[0]," - ",r[1]]})]})},args:{min:0,max:100,label:"Price Range",showTooltip:!0,formatValue:a=>`$${a}`}},L={render:a=>{const[r,n]=i.useState(30);return e.jsx("div",{className:"w-80 p-4",children:e.jsx(o,{...a,value:r,onChange:s=>{n(s),d("small-slider-changed")(s)}})})},args:{min:0,max:100,size:"sm",label:"Small Slider"}},D={render:a=>{const[r,n]=i.useState(50);return e.jsx("div",{className:"w-80 p-4",children:e.jsx(o,{...a,value:r,onChange:s=>{n(s),d("medium-slider-changed")(s)}})})},args:{min:0,max:100,size:"md",label:"Medium Slider"}},P={render:a=>{const[r,n]=i.useState(70);return e.jsx("div",{className:"w-80 p-4",children:e.jsx(o,{...a,value:r,onChange:s=>{n(s),d("large-slider-changed")(s)}})})},args:{min:0,max:100,size:"lg",label:"Large Slider"}},W={render:a=>{const[r,n]=i.useState(60);return e.jsx("div",{className:"w-80 p-4",children:e.jsx(o,{...a,value:r,onChange:s=>{n(s),d("primary-slider-changed")(s)}})})},args:{min:0,max:100,color:"primary",label:"Primary Color"}},E={render:a=>{const[r,n]=i.useState(80);return e.jsx("div",{className:"w-80 p-4",children:e.jsx(o,{...a,value:r,onChange:s=>{n(s),d("success-slider-changed")(s)}})})},args:{min:0,max:100,color:"success",label:"Success Color"}},I={render:a=>{const[r,n]=i.useState(40);return e.jsx("div",{className:"w-80 p-4",children:e.jsx(o,{...a,value:r,onChange:s=>{n(s),d("warning-slider-changed")(s)}})})},args:{min:0,max:100,color:"warning",label:"Warning Color"}},q={render:a=>{const[r,n]=i.useState(25);return e.jsx("div",{className:"w-80 p-4",children:e.jsx(o,{...a,value:r,onChange:s=>{n(s),d("error-slider-changed")(s)}})})},args:{min:0,max:100,color:"error",label:"Error Color",error:"Value is too low!"}},F={render:a=>{const[r,n]=i.useState(2),s=[{value:1,label:"Slow"},{value:2,label:"Normal"},{value:3,label:"Fast"},{value:4,label:"Very Fast"}];return e.jsx("div",{className:"w-80 p-4",children:e.jsx(o,{...a,value:r,onChange:p=>{n(p),d("custom-marks-changed")(p)},marks:s})})},args:{min:1,max:4,step:1,label:"Speed Settings",showTooltip:!0,formatValue:a=>["","Slow","Normal","Fast","Very Fast"][a]||a.toString()}},A={render:a=>{const[r,n]=i.useState(60);return e.jsx("div",{className:"flex items-center justify-center p-8",children:e.jsx(o,{...a,value:r,onChange:s=>{n(s),d("vertical-slider-changed")(s)}})})},args:{min:0,max:100,orientation:"vertical",label:"Vertical Slider",showTooltip:!0}},_={render:a=>e.jsx("div",{className:"w-80 p-4",children:e.jsx(o,{...a})}),args:{value:50,min:0,max:100,disabled:!0,label:"Disabled Slider",helperText:"This slider is disabled",onChange:d("disabled-slider-changed")}},H={render:()=>{const[a,r]=i.useState(65),[n,s]=i.useState(!1),p=n?0:a;return e.jsx("div",{className:"w-80 p-4 bg-white rounded-lg border border-secondary-200",children:e.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[e.jsx("button",{onClick:()=>s(!n),className:"p-2 text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 rounded",children:n?e.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"})]}):e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})}),e.jsx("div",{className:"flex-1",children:e.jsx(o,{value:p,onChange:f=>{r(f),n&&f>0&&s(!1),d("volume-changed")(f)},min:0,max:100,color:"primary",showTooltip:!0,formatValue:f=>`${Math.round(f)}%`})}),e.jsxs("span",{className:"text-sm text-secondary-600 w-10 text-right",children:[Math.round(p),"%"]})]})})},parameters:{docs:{description:{story:"Contoh implementasi volume control dengan tombol mute dan tooltip."}}}},B={render:()=>{const[a,r]=i.useState([250,750]);return e.jsxs("div",{className:"w-80 p-4 bg-white rounded-lg border border-secondary-200",children:[e.jsx("h4",{className:"font-medium text-secondary-900 mb-4",children:"Price Filter"}),e.jsx(o,{value:a,onChange:n=>{r(n),d("price-range-changed")(n)},min:0,max:1e3,step:10,color:"success",showTooltip:!0,formatValue:n=>`$${n}`}),e.jsxs("div",{className:"flex justify-between mt-3 text-sm text-secondary-600",children:[e.jsxs("span",{children:["Min: $",a[0]]}),e.jsxs("span",{children:["Max: $",a[1]]})]}),e.jsx("button",{className:"w-full mt-3 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm",children:"Apply Filter"})]})},parameters:{docs:{description:{story:"Contoh implementasi price range filter untuk e-commerce."}}}},O={render:()=>{const[a,r]=i.useState({size:"md",color:"primary",orientation:"horizontal",showTooltip:!0,showMarks:!1,disabled:!1,isRange:!1,min:0,max:100,step:1}),[n,s]=i.useState(50),[p,f]=i.useState([25,75]),v=(t,S)=>{r(y=>({...y,[t]:S}))},N=t=>{a.isRange?f(t):s(t),d("interactive-slider-changed")(t)};return e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Interactive Slider Demo"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-secondary-50 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Size:"}),e.jsxs("select",{value:a.size,onChange:t=>v("size",t.target.value),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:"sm",children:"Small"}),e.jsx("option",{value:"md",children:"Medium"}),e.jsx("option",{value:"lg",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Color:"}),e.jsxs("select",{value:a.color,onChange:t=>v("color",t.target.value),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:"primary",children:"Primary"}),e.jsx("option",{value:"secondary",children:"Secondary"}),e.jsx("option",{value:"success",children:"Success"}),e.jsx("option",{value:"warning",children:"Warning"}),e.jsx("option",{value:"error",children:"Error"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Orientation:"}),e.jsxs("select",{value:a.orientation,onChange:t=>v("orientation",t.target.value),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:"horizontal",children:"Horizontal"}),e.jsx("option",{value:"vertical",children:"Vertical"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Step:"}),e.jsxs("select",{value:a.step,onChange:t=>v("step",parseInt(t.target.value)),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:25,children:"25"})]})]}),e.jsxs("div",{className:"flex flex-col justify-center space-y-2",children:[e.jsxs("label",{className:"flex items-center text-sm",children:[e.jsx("input",{type:"checkbox",checked:a.showTooltip,onChange:t=>v("showTooltip",t.target.checked),className:"mr-2"}),"Show Tooltip"]}),e.jsxs("label",{className:"flex items-center text-sm",children:[e.jsx("input",{type:"checkbox",checked:a.showMarks,onChange:t=>v("showMarks",t.target.checked),className:"mr-2"}),"Show Marks"]})]}),e.jsxs("div",{className:"flex flex-col justify-center space-y-2",children:[e.jsxs("label",{className:"flex items-center text-sm",children:[e.jsx("input",{type:"checkbox",checked:a.isRange,onChange:t=>v("isRange",t.target.checked),className:"mr-2"}),"Range Mode"]}),e.jsxs("label",{className:"flex items-center text-sm",children:[e.jsx("input",{type:"checkbox",checked:a.disabled,onChange:t=>v("disabled",t.target.checked),className:"mr-2"}),"Disabled"]})]})]}),e.jsx("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:e.jsxs("p",{className:"text-blue-800 text-sm",children:[e.jsx("strong",{children:"Current Value:"})," ",a.isRange?`${p[0]} - ${p[1]}`:n," ","•",e.jsx("strong",{children:" Mode:"})," ",a.isRange?"Range":"Single"," •",e.jsx("strong",{children:" State:"})," ",a.disabled?"Disabled":"Enabled"]})}),e.jsx("div",{className:g("flex justify-center p-6 bg-white rounded-lg border border-secondary-200",a.orientation==="vertical"?"h-64":"h-auto"),children:e.jsx("div",{className:a.orientation==="vertical"?"h-full":"w-80",children:e.jsx(o,{value:a.isRange?p:n,onChange:N,min:a.min,max:a.max,step:a.step,size:a.size,color:a.color,orientation:a.orientation,showTooltip:a.showTooltip,showMarks:a.showMarks,disabled:a.disabled,label:"Interactive Slider",formatValue:t=>`${t}${a.isRange?"":"%"}`})})})]})},parameters:{docs:{description:{story:"Demo interaktif untuk mencoba semua pengaturan slider. Ubah ukuran, warna, orientasi, mode range, dan lihat hasilnya!"}}}};var ae,ne,se;z.parameters={...z.parameters,docs:{...(ae=z.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <div className="w-80 p-4">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number);
        action("slider-changed")(newValue);
      }} />
      </div>;
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    label: "Volume"
  }
}`,...(se=(ne=z.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,te,le;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(75);
    return <div className="w-80 p-4">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number);
        action("tooltip-slider-changed")(newValue);
      }} />
      </div>;
  },
  args: {
    min: 0,
    max: 100,
    label: "Brightness",
    showTooltip: true,
    formatValue: value => \`\${value}%\`
  }
}`,...(le=(te=R.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,ie,ce;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <div className="w-80 p-4">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number);
        action("marks-slider-changed")(newValue);
      }} />
      </div>;
  },
  args: {
    min: 0,
    max: 100,
    step: 25,
    label: "Quality",
    showMarks: true
  }
}`,...(ce=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,me;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState([20, 80]);
    return <div className="w-80 p-4">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number[]);
        action("range-slider-changed")(newValue);
      }} />
        <div className="mt-2 text-sm text-secondary-600">
          Range: {value[0]} - {value[1]}
        </div>
      </div>;
  },
  args: {
    min: 0,
    max: 100,
    label: "Price Range",
    showTooltip: true,
    formatValue: value => \`$\${value}\`
  }
}`,...(me=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,he;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(30);
    return <div className="w-80 p-4">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number);
        action("small-slider-changed")(newValue);
      }} />
      </div>;
  },
  args: {
    min: 0,
    max: 100,
    size: "sm",
    label: "Small Slider"
  }
}`,...(he=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,be,xe;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <div className="w-80 p-4">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number);
        action("medium-slider-changed")(newValue);
      }} />
      </div>;
  },
  args: {
    min: 0,
    max: 100,
    size: "md",
    label: "Medium Slider"
  }
}`,...(xe=(be=D.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var fe,we,ye;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(70);
    return <div className="w-80 p-4">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number);
        action("large-slider-changed")(newValue);
      }} />
      </div>;
  },
  args: {
    min: 0,
    max: 100,
    size: "lg",
    label: "Large Slider"
  }
}`,...(ye=(we=P.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var Ve,Se,ke;W.parameters={...W.parameters,docs:{...(Ve=W.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(60);
    return <div className="w-80 p-4">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number);
        action("primary-slider-changed")(newValue);
      }} />
      </div>;
  },
  args: {
    min: 0,
    max: 100,
    color: "primary",
    label: "Primary Color"
  }
}`,...(ke=(Se=W.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var Ne,je,Ce;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(80);
    return <div className="w-80 p-4">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number);
        action("success-slider-changed")(newValue);
      }} />
      </div>;
  },
  args: {
    min: 0,
    max: 100,
    color: "success",
    label: "Success Color"
  }
}`,...(Ce=(je=E.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Me,ze,Re;I.parameters={...I.parameters,docs:{...(Me=I.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(40);
    return <div className="w-80 p-4">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number);
        action("warning-slider-changed")(newValue);
      }} />
      </div>;
  },
  args: {
    min: 0,
    max: 100,
    color: "warning",
    label: "Warning Color"
  }
}`,...(Re=(ze=I.parameters)==null?void 0:ze.docs)==null?void 0:Re.source}}};var Te,$e,Le;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(25);
    return <div className="w-80 p-4">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number);
        action("error-slider-changed")(newValue);
      }} />
      </div>;
  },
  args: {
    min: 0,
    max: 100,
    color: "error",
    label: "Error Color",
    error: "Value is too low!"
  }
}`,...(Le=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:Le.source}}};var De,Pe,We;F.parameters={...F.parameters,docs:{...(De=F.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(2);
    const marks = [{
      value: 1,
      label: "Slow"
    }, {
      value: 2,
      label: "Normal"
    }, {
      value: 3,
      label: "Fast"
    }, {
      value: 4,
      label: "Very Fast"
    }];
    return <div className="w-80 p-4">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number);
        action("custom-marks-changed")(newValue);
      }} marks={marks} />
      </div>;
  },
  args: {
    min: 1,
    max: 4,
    step: 1,
    label: "Speed Settings",
    showTooltip: true,
    formatValue: value => {
      const labels = ["", "Slow", "Normal", "Fast", "Very Fast"];
      return labels[value] || value.toString();
    }
  }
}`,...(We=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:We.source}}};var Ee,Ie,qe;A.parameters={...A.parameters,docs:{...(Ee=A.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(60);
    return <div className="flex items-center justify-center p-8">
        <Slider {...args} value={value} onChange={newValue => {
        setValue(newValue as number);
        action("vertical-slider-changed")(newValue);
      }} />
      </div>;
  },
  args: {
    min: 0,
    max: 100,
    orientation: "vertical",
    label: "Vertical Slider",
    showTooltip: true
  }
}`,...(qe=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:qe.source}}};var Fe,Ae,_e;_.parameters={..._.parameters,docs:{...(Fe=_.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: args => <div className="w-80 p-4">
      <Slider {...args} />
    </div>,
  args: {
    value: 50,
    min: 0,
    max: 100,
    disabled: true,
    label: "Disabled Slider",
    helperText: "This slider is disabled",
    onChange: action("disabled-slider-changed")
  }
}`,...(_e=(Ae=_.parameters)==null?void 0:Ae.docs)==null?void 0:_e.source}}};var He,Be,Oe;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => {
    const [volume, setVolume] = useState(65);
    const [isMuted, setIsMuted] = useState(false);
    const effectiveVolume = isMuted ? 0 : volume;
    return <div className="w-80 p-4 bg-white rounded-lg border border-secondary-200">
        <div className="flex items-center space-x-3 mb-4">
          <button onClick={() => setIsMuted(!isMuted)} className="p-2 text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 rounded">
            {isMuted ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>}
          </button>
          <div className="flex-1">
            <Slider value={effectiveVolume} onChange={newValue => {
            setVolume(newValue as number);
            if (isMuted && newValue > 0) {
              setIsMuted(false);
            }
            action("volume-changed")(newValue);
          }} min={0} max={100} color="primary" showTooltip formatValue={value => \`\${Math.round(value)}%\`} />
          </div>
          <span className="text-sm text-secondary-600 w-10 text-right">
            {Math.round(effectiveVolume)}%
          </span>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Contoh implementasi volume control dengan tombol mute dan tooltip."
      }
    }
  }
}`,...(Oe=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};var Ue,Xe,Ye;B.parameters={...B.parameters,docs:{...(Ue=B.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => {
    const [priceRange, setPriceRange] = useState([250, 750]);
    return <div className="w-80 p-4 bg-white rounded-lg border border-secondary-200">
        <h4 className="font-medium text-secondary-900 mb-4">Price Filter</h4>
        <Slider value={priceRange} onChange={newValue => {
        setPriceRange(newValue as number[]);
        action("price-range-changed")(newValue);
      }} min={0} max={1000} step={10} color="success" showTooltip formatValue={value => \`$\${value}\`} />
        <div className="flex justify-between mt-3 text-sm text-secondary-600">
          <span>Min: \${priceRange[0]}</span>
          <span>Max: \${priceRange[1]}</span>
        </div>
        <button className="w-full mt-3 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm">
          Apply Filter
        </button>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Contoh implementasi price range filter untuk e-commerce."
      }
    }
  }
}`,...(Ye=(Xe=B.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ke,Qe,Ge;O.parameters={...O.parameters,docs:{...(Ke=O.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      size: "md" as const,
      color: "primary" as const,
      orientation: "horizontal" as const,
      showTooltip: true,
      showMarks: false,
      disabled: false,
      isRange: false,
      min: 0,
      max: 100,
      step: 1
    });
    const [singleValue, setSingleValue] = useState(50);
    const [rangeValue, setRangeValue] = useState([25, 75]);
    const handleSettingChange = (key: keyof typeof settings, value: any) => {
      setSettings(prev => ({
        ...prev,
        [key]: value
      }));
    };
    const handleValueChange = (newValue: number | number[]) => {
      if (settings.isRange) {
        setRangeValue(newValue as number[]);
      } else {
        setSingleValue(newValue as number);
      }
      action("interactive-slider-changed")(newValue);
    };
    return <div className="w-full max-w-4xl space-y-6">
        <h3 className="text-xl font-semibold">Interactive Slider Demo</h3>

        {/* Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-secondary-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-2">Size:</label>
            <select value={settings.size} onChange={e => handleSettingChange("size", e.target.value)} className="w-full p-2 border rounded text-sm">
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Color:</label>
            <select value={settings.color} onChange={e => handleSettingChange("color", e.target.value)} className="w-full p-2 border rounded text-sm">
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Orientation:
            </label>
            <select value={settings.orientation} onChange={e => handleSettingChange("orientation", e.target.value)} className="w-full p-2 border rounded text-sm">
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Step:</label>
            <select value={settings.step} onChange={e => handleSettingChange("step", parseInt(e.target.value))} className="w-full p-2 border rounded text-sm">
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
          </div>

          <div className="flex flex-col justify-center space-y-2">
            <label className="flex items-center text-sm">
              <input type="checkbox" checked={settings.showTooltip} onChange={e => handleSettingChange("showTooltip", e.target.checked)} className="mr-2" />
              Show Tooltip
            </label>
            <label className="flex items-center text-sm">
              <input type="checkbox" checked={settings.showMarks} onChange={e => handleSettingChange("showMarks", e.target.checked)} className="mr-2" />
              Show Marks
            </label>
          </div>

          <div className="flex flex-col justify-center space-y-2">
            <label className="flex items-center text-sm">
              <input type="checkbox" checked={settings.isRange} onChange={e => handleSettingChange("isRange", e.target.checked)} className="mr-2" />
              Range Mode
            </label>
            <label className="flex items-center text-sm">
              <input type="checkbox" checked={settings.disabled} onChange={e => handleSettingChange("disabled", e.target.checked)} className="mr-2" />
              Disabled
            </label>
          </div>
        </div>

        {/* Value display */}
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 text-sm">
            <strong>Current Value:</strong>{" "}
            {settings.isRange ? \`\${rangeValue[0]} - \${rangeValue[1]}\` : singleValue}{" "}
            •<strong> Mode:</strong> {settings.isRange ? "Range" : "Single"} •
            <strong> State:</strong>{" "}
            {settings.disabled ? "Disabled" : "Enabled"}
          </p>
        </div>

        {/* Slider */}
        <div className={clsx("flex justify-center p-6 bg-white rounded-lg border border-secondary-200", settings.orientation === "vertical" ? "h-64" : "h-auto")}>
          <div className={settings.orientation === "vertical" ? "h-full" : "w-80"}>
            <Slider value={settings.isRange ? rangeValue : singleValue} onChange={handleValueChange} min={settings.min} max={settings.max} step={settings.step} size={settings.size} color={settings.color} orientation={settings.orientation} showTooltip={settings.showTooltip} showMarks={settings.showMarks} disabled={settings.disabled} label="Interactive Slider" formatValue={value => \`\${value}\${settings.isRange ? "" : "%"}\`} />
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demo interaktif untuk mencoba semua pengaturan slider. Ubah ukuran, warna, orientasi, mode range, dan lihat hasilnya!"
      }
    }
  }
}`,...(Ge=(Qe=O.parameters)==null?void 0:Qe.docs)==null?void 0:Ge.source}}};const xa=["Default","WithTooltip","WithMarks","Range","Small","Medium","Large","Primary","Success","Warning","Error","CustomMarks","Vertical","Disabled","VolumeControl","PriceRange","InteractiveDemo"];export{F as CustomMarks,z as Default,_ as Disabled,q as Error,O as InteractiveDemo,P as Large,D as Medium,B as PriceRange,W as Primary,$ as Range,L as Small,E as Success,A as Vertical,H as VolumeControl,I as Warning,T as WithMarks,R as WithTooltip,xa as __namedExportsOrder,ba as default};
