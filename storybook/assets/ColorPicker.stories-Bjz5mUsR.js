import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as m}from"./index-B-lxVbXh.js";import{R as g,r as f}from"./index-DkvSDgFW.js";import{c as v}from"./clsx-B-dksMZM.js";import{B as _}from"./Button-igjKbdfR.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const O={sm:{trigger:"w-8 h-8",input:"text-xs px-2 py-1",picker:"w-64"},md:{trigger:"w-10 h-10",input:"text-sm px-3 py-2",picker:"w-80"},lg:{trigger:"w-12 h-12",input:"text-base px-4 py-3",picker:"w-96"}},He=["#FF0000","#FF8000","#FFFF00","#80FF00","#00FF00","#00FF80","#00FFFF","#0080FF","#0000FF","#8000FF","#FF00FF","#FF0080","#000000","#404040","#808080","#C0C0C0","#FFFFFF","#800000","#808000","#008000","#008080","#000080","#800080","#8B4513"],Pe=o=>{const s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);return s?{r:parseInt(s[1],16),g:parseInt(s[2],16),b:parseInt(s[3],16)}:{r:0,g:0,b:0}},Se=(o,s,a)=>"#"+[o,s,a].map(r=>{const n=Math.round(r).toString(16);return n.length===1?"0"+n:n}).join(""),F=(o,s,a)=>{o/=255,s/=255,a/=255;const r=Math.max(o,s,a),n=Math.min(o,s,a),d=r-n;let t=0,u=r===0?0:d/r,p=r;return d!==0&&(r===o?t=(s-a)/d%6:r===s?t=(a-o)/d+2:t=(o-s)/d+4),t=Math.round(t*60),t<0&&(t+=360),u=Math.round(u*100),p=Math.round(p*100),{h:t,s:u,v:p}},qe=(o,s,a)=>{o/=60,s/=100,a/=100;const r=a*s,n=r*(1-Math.abs(o%2-1)),d=a-r;let t=0,u=0,p=0;return o>=0&&o<1?(t=r,u=n,p=0):o>=1&&o<2?(t=n,u=r,p=0):o>=2&&o<3?(t=0,u=r,p=n):o>=3&&o<4?(t=0,u=n,p=r):o>=4&&o<5?(t=n,u=0,p=r):o>=5&&o<6&&(t=r,u=0,p=n),{r:Math.round((t+d)*255),g:Math.round((u+d)*255),b:Math.round((p+d)*255)}},Oe=(o,s)=>{switch(s){case"rgb":return`rgb(${o.r}, ${o.g}, ${o.b})`;case"hsl":const a=F(o.r,o.g,o.b),r=a.v*(2-a.s/100)/2,n=r===0||r===100?0:(a.v-r)/Math.min(r,100-r)*100;return`hsl(${a.h}, ${Math.round(n)}%, ${Math.round(r)}%)`;case"hex":default:return Se(o.r,o.g,o.b)}},E=o=>{if(o.startsWith("#"))return Pe(o);if(o.startsWith("rgb")){const s=o.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);if(s)return{r:parseInt(s[1]),g:parseInt(s[2]),b:parseInt(s[3])}}return{r:0,g:0,b:0}},_e=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2m8-10h2a2 2 0 012 2v2a2 2 0 01-2 2h-2m0 0h-2v-2a2 2 0 012-2z"})}),i=g.forwardRef(({value:o,defaultValue:s="#3B82F6",onChange:a,format:r="hex",disabled:n=!1,size:d="md",className:t,showInput:u=!0,showEyeDropper:p=!0,presets:W=He,showAlpha:We=!1,pickerClassName:Ae,...Ve},Ge)=>{const[Ie,Me]=g.useState(s),[N,L]=g.useState(!1),[x,k]=g.useState(()=>{const l=E(s);return F(l.r,l.g,l.b)}),H=g.useRef(null),G=o!==void 0,C=G?o:Ie,b=E(C),w=l=>{const c=Oe(l,r);G||Me(c),a==null||a(c)},U=l=>{k(l);const c=qe(l.h,l.s,l.v);w(c)};g.useEffect(()=>{const l=c=>{H.current&&!H.current.contains(c.target)&&L(!1)};if(N)return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[N]);const ze=async()=>{if("EyeDropper"in window)try{const c=await new EyeDropper().open(),h=Pe(c.sRGBHex);w(h),k(F(h.r,h.g,h.b))}catch(l){console.warn("EyeDropper failed:",l)}},Re=l=>{const c=E(l);w(c),k(F(c.r,c.g,c.b)),L(!1)},Te=l=>{const c=l.currentTarget.getBoundingClientRect(),h=j=>{const q=Math.max(0,Math.min(1,(j.clientX-c.left)/c.width)),Le=Math.max(0,Math.min(1,(j.clientY-c.top)/c.height));U({...x,s:q*100,v:(1-Le)*100})},y=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",y),h(l.nativeEvent)},$e=l=>{const c=l.currentTarget.getBoundingClientRect(),h=j=>{const q=Math.max(0,Math.min(1,(j.clientX-c.left)/c.width));U({...x,h:q*360})},y=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",y),h(l.nativeEvent)};return e.jsxs("div",{ref:H,className:v("relative inline-block",t),...Ve,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>!n&&L(!N),disabled:n,className:v("border-2 border-secondary-300 rounded-md overflow-hidden transition-all duration-200","hover:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500",O[d].trigger,n&&"opacity-50 cursor-not-allowed"),style:{backgroundColor:C},children:e.jsx("div",{className:"w-full h-full",style:{backgroundColor:C}})}),u&&e.jsx("input",{type:"text",value:C,onChange:l=>{const c=E(l.target.value);w(c),k(F(c.r,c.g,c.b))},disabled:n,className:v("border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",O[d].input,n&&"opacity-50 cursor-not-allowed bg-secondary-100")}),p&&"EyeDropper"in window&&e.jsx("button",{onClick:ze,disabled:n,className:v("p-2 text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100 rounded-md transition-colors",n&&"opacity-50 cursor-not-allowed"),title:"Pick color from screen",children:e.jsx(_e,{})})]}),N&&e.jsx("div",{className:v("absolute top-full left-0 mt-2 bg-white border border-secondary-300 rounded-lg shadow-lg z-50","animate-in fade-in-0 zoom-in-95 duration-200",O[d].picker,Ae),children:e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{className:"relative w-full h-48 cursor-crosshair",style:{backgroundColor:`hsl(${x.h}, 100%, 50%)`},onMouseDown:Te,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-white to-transparent"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),e.jsx("div",{className:"absolute w-3 h-3 border-2 border-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 pointer-events-none",style:{left:`${x.s}%`,top:`${100-x.v}%`}})]}),e.jsx("div",{className:"relative w-full h-4 cursor-pointer rounded",style:{background:"linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)"},onMouseDown:$e,children:e.jsx("div",{className:"absolute w-4 h-4 bg-white border-2 border-secondary-300 rounded-full shadow-lg transform -translate-x-1/2 pointer-events-none",style:{left:`${x.h/360*100}%`,top:"0"}})}),W.length>0&&e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Presets"}),e.jsx("div",{className:"grid grid-cols-8 gap-1",children:W.map((l,c)=>e.jsx("button",{onClick:()=>Re(l),className:v("w-6 h-6 rounded border hover:scale-110 transition-transform",C.toLowerCase()===l.toLowerCase()?"border-secondary-900 border-2":"border-secondary-300"),style:{backgroundColor:l}},c))})]}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-secondary-600",children:"HEX:"}),e.jsx("span",{className:"font-mono text-secondary-900",children:Se(b.r,b.g,b.b).toUpperCase()})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-secondary-600",children:"RGB:"}),e.jsxs("span",{className:"font-mono text-secondary-900",children:[b.r,", ",b.g,", ",b.b]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-secondary-600",children:"HSV:"}),e.jsxs("span",{className:"font-mono text-secondary-900",children:[Math.round(x.h),"°, ",Math.round(x.s),"%,"," ",Math.round(x.v),"%"]})]})]})]})})]})});i.displayName="ColorPicker";try{i.displayName="ColorPicker",i.__docgenInfo={description:"",displayName:"ColorPicker",props:{value:{defaultValue:null,description:"Nilai warna saat ini",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:"#3B82F6"},description:"Nilai default warna",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback ketika warna berubah",name:"onChange",required:!1,type:{name:"((color: string) => void)"}},format:{defaultValue:{value:"hex"},description:"Format output warna",name:"format",required:!1,type:{name:"enum",value:[{value:'"hex"'},{value:'"rgb"'},{value:'"hsl"'}]}},disabled:{defaultValue:{value:"false"},description:"Apakah disabled",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Ukuran color picker",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},showInput:{defaultValue:{value:"true"},description:"Apakah menampilkan input text",name:"showInput",required:!1,type:{name:"boolean"}},showEyeDropper:{defaultValue:{value:"true"},description:"Apakah menampilkan eyedropper (jika supported)",name:"showEyeDropper",required:!1,type:{name:"boolean"}},presets:{defaultValue:{value:`[
  "#FF0000",
  "#FF8000",
  "#FFFF00",
  "#80FF00",
  "#00FF00",
  "#00FF80",
  "#00FFFF",
  "#0080FF",
  "#0000FF",
  "#8000FF",
  "#FF00FF",
  "#FF0080",
  "#000000",
  "#404040",
  "#808080",
  "#C0C0C0",
  "#FFFFFF",
  "#800000",
  "#808000",
  "#008000",
  "#008080",
  "#000080",
  "#800080",
  "#8B4513",
]`},description:"Preset colors",name:"presets",required:!1,type:{name:"string[]"}},showAlpha:{defaultValue:{value:"false"},description:"Apakah menampilkan alpha/transparency",name:"showAlpha",required:!1,type:{name:"boolean"}},pickerClassName:{defaultValue:null,description:"Custom className untuk picker popup",name:"pickerClassName",required:!1,type:{name:"string"}}}}}catch{}const eo={title:"Form Controls/ColorPicker",component:i,parameters:{layout:"centered",docs:{description:{component:"Komponen ColorPicker untuk memilih warna dengan berbagai format output (hex, rgb, hsl). Dilengkapi dengan saturation/value picker, hue slider, preset colors, dan dukungan EyeDropper API untuk mengambil warna dari layar."}}},tags:["autodocs"],argTypes:{value:{control:{type:"color"},description:"Nilai warna saat ini (controlled)"},defaultValue:{control:{type:"color"},description:"Nilai default warna (uncontrolled)"},format:{control:{type:"select"},options:["hex","rgb","hsl"],description:"Format output warna"},disabled:{control:{type:"boolean"},description:"Apakah disabled"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran color picker"},showInput:{control:{type:"boolean"},description:"Apakah menampilkan input text"},showEyeDropper:{control:{type:"boolean"},description:"Apakah menampilkan eyedropper button"},showAlpha:{control:{type:"boolean"},description:"Apakah menampilkan alpha/transparency"}}},D={args:{defaultValue:"#3B82F6",format:"hex",size:"md",showInput:!0,showEyeDropper:!0,onChange:m("color-changed")}},B={render:()=>e.jsxs("div",{className:"flex items-center space-x-6",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("div",{className:"text-sm text-secondary-700",children:"Small"}),e.jsx(i,{size:"sm",defaultValue:"#EF4444",onChange:m("small-color-changed")})]}),e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("div",{className:"text-sm text-secondary-700",children:"Medium (Default)"}),e.jsx(i,{size:"md",defaultValue:"#10B981",onChange:m("medium-color-changed")})]}),e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("div",{className:"text-sm text-secondary-700",children:"Large"}),e.jsx(i,{size:"lg",defaultValue:"#8B5CF6",onChange:m("large-color-changed")})]})]})},P={render:()=>{const[o,s]=f.useState("#3B82F6"),[a,r]=f.useState("rgb(59, 130, 246)"),[n,d]=f.useState("hsl(217, 91%, 60%)");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700",children:"HEX Format"}),e.jsx(i,{value:o,onChange:t=>{s(t),m("hex-color-changed")(t)},format:"hex",showInput:!0}),e.jsxs("div",{className:"text-xs text-secondary-500",children:["Output: ",o]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700",children:"RGB Format"}),e.jsx(i,{value:a,onChange:t=>{r(t),m("rgb-color-changed")(t)},format:"rgb",showInput:!0}),e.jsxs("div",{className:"text-xs text-secondary-500",children:["Output: ",a]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700",children:"HSL Format"}),e.jsx(i,{value:n,onChange:t=>{d(t),m("hsl-color-changed")(t)},format:"hsl",showInput:!0}),e.jsxs("div",{className:"text-xs text-secondary-500",children:["Output: ",n]})]})]})}},S={args:{defaultValue:"#F59E0B",showInput:!1,onChange:m("color-without-input-changed")}},A={args:{defaultValue:"#EC4899",showEyeDropper:!1,onChange:m("color-without-eyedropper-changed")}},V={render:()=>{const o=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#98D8C8","#F7DC6F","#BB8FCE","#85C1E9","#F8C471","#82E0AA"];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Custom Color Palette"}),e.jsx(i,{defaultValue:"#FF6B6B",presets:o,onChange:m("custom-preset-changed")})]}),e.jsx("div",{className:"text-sm text-secondary-500",children:"This ColorPicker uses a custom set of preset colors instead of the default palette."})]})}},I={render:()=>{const[o,s]=f.useState("#10B981"),a=[{name:"Red",value:"#EF4444"},{name:"Green",value:"#10B981"},{name:"Blue",value:"#3B82F6"},{name:"Purple",value:"#8B5CF6"},{name:"Yellow",value:"#F59E0B"}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Controlled Color Picker"}),e.jsx(i,{value:o,onChange:r=>{s(r),m("controlled-color-changed")(r)},format:"hex"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Quick Colors:"}),e.jsx("div",{className:"flex space-x-2",children:a.map(r=>e.jsx("button",{onClick:()=>s(r.value),className:v("px-3 py-1 text-sm rounded border transition-colors",o===r.value?"bg-primary-600 text-white border-primary-600":"bg-white text-secondary-700 border-secondary-300 hover:border-secondary-400"),children:r.name},r.value))})]}),e.jsxs("div",{className:"p-4 bg-secondary-50 rounded-lg",children:[e.jsxs("div",{className:"text-sm text-secondary-700",children:[e.jsx("strong",{children:"Selected Color:"})," ",o]}),e.jsx("div",{className:"w-full h-8 mt-2 rounded border border-secondary-300",style:{backgroundColor:o}})]})]})}},M={args:{disabled:!0,defaultValue:"#6B7280",onChange:m("disabled-color-changed")}},z={render:()=>{const[o,s]=f.useState({backgroundColor:"#FFFFFF",textColor:"#000000",accentColor:"#3B82F6",borderColor:"#E5E7EB"}),a=r=>{r.preventDefault(),m("form-submitted")(o)};return e.jsx("div",{className:"max-w-md",children:e.jsxs("form",{onSubmit:a,className:"bg-white border border-secondary-200 rounded-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Theme Customization"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Background Color"}),e.jsx(i,{value:o.backgroundColor,onChange:r=>s({...o,backgroundColor:r}),format:"hex",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Text Color"}),e.jsx(i,{value:o.textColor,onChange:r=>s({...o,textColor:r}),format:"hex",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Accent Color"}),e.jsx(i,{value:o.accentColor,onChange:r=>s({...o,accentColor:r}),format:"hex",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Border Color"}),e.jsx(i,{value:o.borderColor,onChange:r=>s({...o,borderColor:r}),format:"hex",size:"sm"})]})]}),e.jsxs("div",{className:"mt-6 p-4 rounded-lg border",style:{backgroundColor:o.backgroundColor,color:o.textColor,borderColor:o.borderColor},children:[e.jsx("div",{className:"text-sm font-medium",style:{color:o.accentColor},children:"Theme Preview"}),e.jsx("div",{className:"text-sm mt-1",children:"This is how your theme will look with the selected colors."})]}),e.jsxs("div",{className:"mt-6 flex justify-end space-x-3",children:[e.jsx(_,{variant:"outline",type:"button",children:"Reset"}),e.jsx(_,{variant:"primary",type:"submit",children:"Apply Theme"})]})]})})}},R={render:()=>{const[o,s]=f.useState("#3B82F6"),a="EyeDropper"in window;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Color Picker with EyeDropper"}),e.jsx(i,{value:o,onChange:r=>{s(r),m("eyedropper-color-changed")(r)},showEyeDropper:a})]}),e.jsx("div",{className:"text-sm text-secondary-500",children:a?e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{children:"✅"}),e.jsx("span",{children:"EyeDropper API is supported. Click the eyedropper icon to pick colors from your screen."})]}):e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:"EyeDropper API is not supported in this browser."})]})}),e.jsxs("div",{className:"p-4 bg-secondary-50 rounded-lg",children:[e.jsxs("div",{className:"text-sm text-secondary-700 mb-2",children:[e.jsx("strong",{children:"Picked Color:"})," ",o]}),e.jsx("div",{className:"w-full h-12 rounded border border-secondary-300",style:{backgroundColor:o}})]})]})}},T={render:()=>{const[o,s]=f.useState(["#EF4444","#F97316","#F59E0B","#EAB308","#84CC16","#22C55E","#10B981","#14B8A6","#06B6D4","#0EA5E9","#3B82F6","#6366F1","#8B5CF6","#A855F7","#D946EF","#EC4899"]),a=(n,d)=>{const t=[...o];t[n]=d,s(t),m("palette-updated")(t)},r=()=>{var d;const n=o.map((t,u)=>`--color-${u+1}: ${t};`).join(`
`);m("palette-exported")(n),(d=navigator.clipboard)==null||d.writeText(n)};return e.jsxs("div",{className:"max-w-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900",children:"Color Palette Builder"}),e.jsx(_,{onClick:r,variant:"outline",size:"sm",children:"Export CSS"})]}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:o.map((n,d)=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-full h-16 rounded-lg border border-secondary-300",style:{backgroundColor:n}}),e.jsx(i,{value:n,onChange:t=>a(d,t),size:"sm",showInput:!1}),e.jsx("div",{className:"text-xs text-secondary-500 font-mono text-center",children:n})]},d))}),e.jsxs("div",{className:"mt-6 p-4 bg-secondary-50 rounded-lg",children:[e.jsx("div",{className:"text-sm font-medium text-secondary-700 mb-2",children:"CSS Variables:"}),e.jsx("code",{className:"text-xs text-secondary-600 whitespace-pre-wrap",children:o.map((n,d)=>`--color-${d+1}: ${n};`).join(`
`)})]})]})}},$={args:{defaultValue:"#3B82F6",format:"hex",disabled:!1,size:"md",showInput:!0,showEyeDropper:!0,showAlpha:!1,onChange:m("playground-color-changed")}};var X,Y,Q;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    defaultValue: "#3B82F6",
    format: "hex",
    size: "md",
    showInput: true,
    showEyeDropper: true,
    onChange: action("color-changed")
  }
}`,...(Q=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var K,J,Z;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-6">
      <div className="text-center space-y-2">
        <div className="text-sm text-secondary-700">Small</div>
        <ColorPicker size="sm" defaultValue="#EF4444" onChange={action("small-color-changed")} />
      </div>

      <div className="text-center space-y-2">
        <div className="text-sm text-secondary-700">Medium (Default)</div>
        <ColorPicker size="md" defaultValue="#10B981" onChange={action("medium-color-changed")} />
      </div>

      <div className="text-center space-y-2">
        <div className="text-sm text-secondary-700">Large</div>
        <ColorPicker size="lg" defaultValue="#8B5CF6" onChange={action("large-color-changed")} />
      </div>
    </div>
}`,...(Z=(J=B.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var ee,oe,re;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [hexColor, setHexColor] = useState("#3B82F6");
    const [rgbColor, setRgbColor] = useState("rgb(59, 130, 246)");
    const [hslColor, setHslColor] = useState("hsl(217, 91%, 60%)");
    return <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-secondary-700">
            HEX Format
          </label>
          <ColorPicker value={hexColor} onChange={color => {
          setHexColor(color);
          action("hex-color-changed")(color);
        }} format="hex" showInput />
          <div className="text-xs text-secondary-500">Output: {hexColor}</div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-secondary-700">
            RGB Format
          </label>
          <ColorPicker value={rgbColor} onChange={color => {
          setRgbColor(color);
          action("rgb-color-changed")(color);
        }} format="rgb" showInput />
          <div className="text-xs text-secondary-500">Output: {rgbColor}</div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-secondary-700">
            HSL Format
          </label>
          <ColorPicker value={hslColor} onChange={color => {
          setHslColor(color);
          action("hsl-color-changed")(color);
        }} format="hsl" showInput />
          <div className="text-xs text-secondary-500">Output: {hslColor}</div>
        </div>
      </div>;
  }
}`,...(re=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ne,te;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    defaultValue: "#F59E0B",
    showInput: false,
    onChange: action("color-without-input-changed")
  }
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,le,ce;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    defaultValue: "#EC4899",
    showEyeDropper: false,
    onChange: action("color-without-eyedropper-changed")
  }
}`,...(ce=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ie,me;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const customPresets = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E9", "#F8C471", "#82E0AA"];
    return <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Custom Color Palette
          </label>
          <ColorPicker defaultValue="#FF6B6B" presets={customPresets} onChange={action("custom-preset-changed")} />
        </div>

        <div className="text-sm text-secondary-500">
          This ColorPicker uses a custom set of preset colors instead of the
          default palette.
        </div>
      </div>;
  }
}`,...(me=(ie=V.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var ue,pe,he;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [selectedColor, setSelectedColor] = useState("#10B981");
    const predefinedColors = [{
      name: "Red",
      value: "#EF4444"
    }, {
      name: "Green",
      value: "#10B981"
    }, {
      name: "Blue",
      value: "#3B82F6"
    }, {
      name: "Purple",
      value: "#8B5CF6"
    }, {
      name: "Yellow",
      value: "#F59E0B"
    }];
    return <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Controlled Color Picker
          </label>
          <ColorPicker value={selectedColor} onChange={color => {
          setSelectedColor(color);
          action("controlled-color-changed")(color);
        }} format="hex" />
        </div>

        <div>
          <div className="text-sm font-medium text-secondary-700 mb-2">
            Quick Colors:
          </div>
          <div className="flex space-x-2">
            {predefinedColors.map(color => <button key={color.value} onClick={() => setSelectedColor(color.value)} className={clsx("px-3 py-1 text-sm rounded border transition-colors", selectedColor === color.value ? "bg-primary-600 text-white border-primary-600" : "bg-white text-secondary-700 border-secondary-300 hover:border-secondary-400")}>
                {color.name}
              </button>)}
          </div>
        </div>

        <div className="p-4 bg-secondary-50 rounded-lg">
          <div className="text-sm text-secondary-700">
            <strong>Selected Color:</strong> {selectedColor}
          </div>
          <div className="w-full h-8 mt-2 rounded border border-secondary-300" style={{
          backgroundColor: selectedColor
        }} />
        </div>
      </div>;
  }
}`,...(he=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var xe,ve,fe;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "#6B7280",
    onChange: action("disabled-color-changed")
  }
}`,...(fe=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var be,ge,Ce;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
      accentColor: "#3B82F6",
      borderColor: "#E5E7EB"
    });
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      action("form-submitted")(formData);
    };
    return <div className="max-w-md">
        <form onSubmit={handleSubmit} className="bg-white border border-secondary-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Theme Customization
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Background Color
              </label>
              <ColorPicker value={formData.backgroundColor} onChange={color => setFormData({
              ...formData,
              backgroundColor: color
            })} format="hex" size="sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Text Color
              </label>
              <ColorPicker value={formData.textColor} onChange={color => setFormData({
              ...formData,
              textColor: color
            })} format="hex" size="sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Accent Color
              </label>
              <ColorPicker value={formData.accentColor} onChange={color => setFormData({
              ...formData,
              accentColor: color
            })} format="hex" size="sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Border Color
              </label>
              <ColorPicker value={formData.borderColor} onChange={color => setFormData({
              ...formData,
              borderColor: color
            })} format="hex" size="sm" />
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg border" style={{
          backgroundColor: formData.backgroundColor,
          color: formData.textColor,
          borderColor: formData.borderColor
        }}>
            <div className="text-sm font-medium" style={{
            color: formData.accentColor
          }}>
              Theme Preview
            </div>
            <div className="text-sm mt-1">
              This is how your theme will look with the selected colors.
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <Button variant="outline" type="button">
              Reset
            </Button>
            <Button variant="primary" type="submit">
              Apply Theme
            </Button>
          </div>
        </form>
      </div>;
  }
}`,...(Ce=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};var ye,Fe,Ne;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [pickedColor, setPickedColor] = useState("#3B82F6");
    const supportsEyeDropper = "EyeDropper" in window;
    return <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Color Picker with EyeDropper
          </label>
          <ColorPicker value={pickedColor} onChange={color => {
          setPickedColor(color);
          action("eyedropper-color-changed")(color);
        }} showEyeDropper={supportsEyeDropper} />
        </div>

        <div className="text-sm text-secondary-500">
          {supportsEyeDropper ? <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>
                EyeDropper API is supported. Click the eyedropper icon to pick
                colors from your screen.
              </span>
            </div> : <div className="flex items-center space-x-2">
              <span>❌</span>
              <span>EyeDropper API is not supported in this browser.</span>
            </div>}
        </div>

        <div className="p-4 bg-secondary-50 rounded-lg">
          <div className="text-sm text-secondary-700 mb-2">
            <strong>Picked Color:</strong> {pickedColor}
          </div>
          <div className="w-full h-12 rounded border border-secondary-300" style={{
          backgroundColor: pickedColor
        }} />
        </div>
      </div>;
  }
}`,...(Ne=(Fe=R.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source}}};var ke,we,je;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const [palette, setPalette] = useState(["#EF4444", "#F97316", "#F59E0B", "#EAB308", "#84CC16", "#22C55E", "#10B981", "#14B8A6", "#06B6D4", "#0EA5E9", "#3B82F6", "#6366F1", "#8B5CF6", "#A855F7", "#D946EF", "#EC4899"]);
    const updateColor = (index: number, color: string) => {
      const newPalette = [...palette];
      newPalette[index] = color;
      setPalette(newPalette);
      action("palette-updated")(newPalette);
    };
    const exportPalette = () => {
      const css = palette.map((color, index) => \`--color-\${index + 1}: \${color};\`).join("\\n");
      action("palette-exported")(css);

      // Copy to clipboard
      navigator.clipboard?.writeText(css);
    };
    return <div className="max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-secondary-900">
            Color Palette Builder
          </h3>
          <Button onClick={exportPalette} variant="outline" size="sm">
            Export CSS
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {palette.map((color, index) => <div key={index} className="space-y-2">
              <div className="w-full h-16 rounded-lg border border-secondary-300" style={{
            backgroundColor: color
          }} />
              <ColorPicker value={color} onChange={newColor => updateColor(index, newColor)} size="sm" showInput={false} />
              <div className="text-xs text-secondary-500 font-mono text-center">
                {color}
              </div>
            </div>)}
        </div>

        <div className="mt-6 p-4 bg-secondary-50 rounded-lg">
          <div className="text-sm font-medium text-secondary-700 mb-2">
            CSS Variables:
          </div>
          <code className="text-xs text-secondary-600 whitespace-pre-wrap">
            {palette.map((color, index) => \`--color-\${index + 1}: \${color};\`).join("\\n")}
          </code>
        </div>
      </div>;
  }
}`,...(je=(we=T.parameters)==null?void 0:we.docs)==null?void 0:je.source}}};var Ee,De,Be;$.parameters={...$.parameters,docs:{...(Ee=$.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    defaultValue: "#3B82F6",
    format: "hex",
    disabled: false,
    size: "md",
    showInput: true,
    showEyeDropper: true,
    showAlpha: false,
    onChange: action("playground-color-changed")
  }
}`,...(Be=(De=$.parameters)==null?void 0:De.docs)==null?void 0:Be.source}}};const oo=["Default","Sizes","Formats","WithoutInput","WithoutEyeDropper","CustomPresets","ControlledColorPicker","DisabledState","InForm","EyeDropperDemo","ColorPalette","Playground"];export{T as ColorPalette,I as ControlledColorPicker,V as CustomPresets,D as Default,M as DisabledState,R as EyeDropperDemo,P as Formats,z as InForm,$ as Playground,B as Sizes,A as WithoutEyeDropper,S as WithoutInput,oo as __namedExportsOrder,eo as default};
