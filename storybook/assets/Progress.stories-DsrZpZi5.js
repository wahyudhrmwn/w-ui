import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as h}from"./index-B-lxVbXh.js";import{R as f,r as T}from"./index-DkvSDgFW.js";import{c as u}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const as={xs:"h-1",sm:"h-2",md:"h-3",lg:"h-4",xl:"h-6"},G={primary:"bg-primary-600",secondary:"bg-secondary-600",success:"bg-green-600",warning:"bg-yellow-500",error:"bg-red-600"},ts={xs:{size:24,fontSize:"text-xs"},sm:{size:32,fontSize:"text-sm"},md:{size:48,fontSize:"text-base"},lg:{size:64,fontSize:"text-lg"},xl:{size:96,fontSize:"text-2xl"}},ns={primary:"#2563eb",secondary:"#6b7280",success:"#059669",warning:"#eab308",error:"#dc2626"},t=f.forwardRef(({value:s,max:c=100,size:r="md",color:l="primary",variant:i="default",label:d,showPercentage:o=!1,className:g,barClassName:x,...p},m)=>{const n=Math.min(100,Math.max(0,s/c*100));return e.jsxs("div",{ref:m,className:u("w-full",g),...p,children:[(d||o)&&e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[d&&e.jsx("span",{className:"text-sm font-medium text-secondary-700",children:d}),o&&e.jsxs("span",{className:"text-sm text-secondary-500",children:[Math.round(n),"%"]})]}),e.jsx("div",{className:u("w-full bg-secondary-200 rounded-full overflow-hidden",as[r]),children:e.jsx("div",{className:u("h-full transition-all duration-300 ease-out rounded-full",G[l],i==="striped"&&"bg-stripe",i==="animated"&&"bg-stripe animate-stripe",x),style:{width:`${n}%`},role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":c})})]})});t.displayName="Progress";const a=f.forwardRef(({value:s,max:c=100,size:r="md",color:l="primary",strokeWidth:i,showPercentage:d=!1,label:o,className:g,...x},p)=>{const m=Math.min(100,Math.max(0,s/c*100)),{size:n,fontSize:b}=ts[r],y=n/2-(i||n*.1),U=2*Math.PI*y,rs=U-m/100*U,F=i||n*.1;return e.jsxs("div",{className:u("relative inline-flex items-center justify-center",g),children:[e.jsxs("svg",{ref:p,width:n,height:n,className:"transform -rotate-90",...x,children:[e.jsx("circle",{cx:n/2,cy:n/2,r:y,stroke:"#e5e7eb",strokeWidth:F,fill:"none"}),e.jsx("circle",{cx:n/2,cy:n/2,r:y,stroke:ns[l],strokeWidth:F,fill:"none",strokeLinecap:"round",strokeDasharray:U,strokeDashoffset:rs,className:"transition-all duration-300 ease-out"})]}),(d||o)&&e.jsx("div",{className:u("absolute inset-0 flex items-center justify-center",b,"font-semibold text-secondary-700"),children:o||d&&`${Math.round(m)}%`})]})});a.displayName="CircularProgress";const $={sm:{circle:"w-6 h-6 text-xs",line:"h-0.5"},md:{circle:"w-8 h-8 text-sm",line:"h-1"},lg:{circle:"w-10 h-10 text-base",line:"h-1.5"}},v=f.forwardRef(({currentStep:s,totalSteps:c,size:r="md",color:l="primary",stepLabels:i=[],className:d,...o},g)=>{const x=Array.from({length:c},(p,m)=>m+1);return e.jsx("div",{ref:g,className:u("w-full",d),...o,children:e.jsx("div",{className:"flex items-center justify-between",children:x.map((p,m)=>{const n=p<=s,b=p===s,y=m===x.length-1;return e.jsxs(f.Fragment,{children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:u("flex items-center justify-center rounded-full border-2 font-medium transition-all duration-200",$[r].circle,n?u("border-transparent",G[l],"text-white"):b?u("border-2",l==="primary"?"border-primary-600":`border-${l}-600`,"bg-white text-primary-600"):"border-secondary-300 bg-white text-secondary-400"),children:n?"✓":p}),i[m]&&e.jsx("span",{className:u("mt-2 text-xs font-medium text-center max-w-20",n||b?"text-secondary-900":"text-secondary-400"),children:i[m]})]}),!y&&e.jsx("div",{className:u("flex-1 mx-2",$[r].line,p<s?G[l]:"bg-secondary-300")})]},p)})})})});v.displayName="SteppedProgress";try{t.displayName="Progress",t.__docgenInfo={description:"",displayName:"Progress",props:{value:{defaultValue:null,description:"Nilai progress (0-100)",name:"value",required:!0,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Nilai maksimum",name:"max",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"Ukuran progress",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'}]}},color:{defaultValue:{value:"primary"},description:"Warna progress",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"primary"'},{value:'"secondary"'}]}},variant:{defaultValue:{value:"default"},description:"Variant progress",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"striped"'},{value:'"animated"'}]}},label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},showPercentage:{defaultValue:{value:"false"},description:"Apakah menampilkan persentase",name:"showPercentage",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},barClassName:{defaultValue:null,description:"Custom className untuk bar",name:"barClassName",required:!1,type:{name:"string"}}}}}catch{}try{a.displayName="CircularProgress",a.__docgenInfo={description:"",displayName:"CircularProgress",props:{value:{defaultValue:null,description:"Nilai progress (0-100)",name:"value",required:!0,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Nilai maksimum",name:"max",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"Ukuran circular progress",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'}]}},color:{defaultValue:{value:"primary"},description:"Warna progress",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"primary"'},{value:'"secondary"'}]}},strokeWidth:{defaultValue:null,description:"Ketebalan stroke",name:"strokeWidth",required:!1,type:{name:"number"}},showPercentage:{defaultValue:{value:"false"},description:"Apakah menampilkan persentase di tengah",name:"showPercentage",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Custom label di tengah",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{v.displayName="SteppedProgress",v.__docgenInfo={description:"",displayName:"SteppedProgress",props:{currentStep:{defaultValue:null,description:"Step saat ini (1-based)",name:"currentStep",required:!0,type:{name:"number"}},totalSteps:{defaultValue:null,description:"Total steps",name:"totalSteps",required:!0,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"Ukuran stepped progress",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"primary"},description:"Warna progress",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"primary"'},{value:'"secondary"'}]}},stepLabels:{defaultValue:{value:"[]"},description:"Labels untuk setiap step",name:"stepLabels",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ps={title:"Data Display/Progress",component:t,parameters:{layout:"centered",docs:{description:{component:"Komponen Progress untuk menunjukkan kemajuan loading atau proses. Tersedia dalam bentuk linear progress bar, circular progress, dan stepped progress dengan berbagai ukuran dan styling."}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Nilai progress (0-100)"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Ukuran progress"},color:{control:"select",options:["primary","secondary","success","warning","error"],description:"Warna progress"},variant:{control:"select",options:["default","striped","animated"],description:"Variant progress bar"},showPercentage:{control:"boolean",description:"Tampilkan persentase"},label:{control:"text",description:"Label text"}},args:{value:60}},N={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:60,label:"Loading..."}},S={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:75,label:"Upload Progress",showPercentage:!0}},j={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:45,size:"xs",label:"Extra Small"}},P={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:45,size:"sm",label:"Small"}},w={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:45,size:"md",label:"Medium"}},z={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:45,size:"lg",label:"Large"}},C={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:45,size:"xl",label:"Extra Large"}},k={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:60,color:"primary",label:"Primary",showPercentage:!0}},L={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:80,color:"success",label:"Success",showPercentage:!0}},R={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:40,color:"warning",label:"Warning",showPercentage:!0}},V={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:25,color:"error",label:"Error",showPercentage:!0}},_={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:70,variant:"striped",label:"Striped Progress",size:"lg"}},D={render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})}),args:{value:65,variant:"animated",label:"Animated Progress",size:"lg"}},I={render:()=>e.jsx("div",{className:"flex items-center justify-center p-8",children:e.jsx(a,{value:75,showPercentage:!0})}),parameters:{docs:{description:{story:"Circular progress dengan persentase di tengah."}}}},q={render:()=>e.jsxs("div",{className:"flex items-center justify-center gap-8 p-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:25,size:"xs",showPercentage:!0}),e.jsx("p",{className:"text-xs mt-2 text-secondary-600",children:"XS"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:50,size:"sm",showPercentage:!0}),e.jsx("p",{className:"text-xs mt-2 text-secondary-600",children:"SM"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,size:"md",showPercentage:!0}),e.jsx("p",{className:"text-xs mt-2 text-secondary-600",children:"MD"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:90,size:"lg",showPercentage:!0}),e.jsx("p",{className:"text-xs mt-2 text-secondary-600",children:"LG"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:60,size:"xl",showPercentage:!0}),e.jsx("p",{className:"text-xs mt-2 text-secondary-600",children:"XL"})]})]}),parameters:{docs:{description:{story:"Berbagai ukuran circular progress dari XS hingga XL."}}}},E={render:()=>e.jsxs("div",{className:"flex items-center justify-center gap-6 p-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:60,color:"primary",showPercentage:!0}),e.jsx("p",{className:"text-xs mt-2 text-secondary-600",children:"Primary"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:40,color:"secondary",showPercentage:!0}),e.jsx("p",{className:"text-xs mt-2 text-secondary-600",children:"Secondary"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:85,color:"success",showPercentage:!0}),e.jsx("p",{className:"text-xs mt-2 text-secondary-600",children:"Success"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:30,color:"warning",showPercentage:!0}),e.jsx("p",{className:"text-xs mt-2 text-secondary-600",children:"Warning"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:15,color:"error",showPercentage:!0}),e.jsx("p",{className:"text-xs mt-2 text-secondary-600",children:"Error"})]})]}),parameters:{docs:{description:{story:"Circular progress dengan berbagai warna."}}}},W={render:()=>e.jsxs("div",{className:"flex items-center justify-center gap-8 p-8",children:[e.jsx(a,{value:75,size:"lg",label:"3/4"}),e.jsx(a,{value:60,size:"lg",label:"12GB",color:"success"}),e.jsx(a,{value:25,size:"lg",label:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg",children:"⏰"}),e.jsx("div",{className:"text-xs",children:"Loading"})]}),color:"warning"})]}),parameters:{docs:{description:{story:"Circular progress dengan custom labels di tengah."}}}},M={render:()=>e.jsx("div",{className:"w-full max-w-2xl p-8",children:e.jsx(v,{currentStep:2,totalSteps:4,stepLabels:["Account","Profile","Preferences","Complete"]})}),parameters:{docs:{description:{story:"Stepped progress untuk wizard atau multi-step process."}}}},A={render:()=>e.jsxs("div",{className:"space-y-8 w-full max-w-2xl p-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-4",children:"Small"}),e.jsx(v,{currentStep:2,totalSteps:3,size:"sm",stepLabels:["Start","Process","Done"]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-4",children:"Medium"}),e.jsx(v,{currentStep:2,totalSteps:3,size:"md",stepLabels:["Start","Process","Done"]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-4",children:"Large"}),e.jsx(v,{currentStep:2,totalSteps:3,size:"lg",stepLabels:["Start","Process","Done"]})]})]}),parameters:{docs:{description:{story:"Berbagai ukuran stepped progress."}}}},X={render:()=>{const[s,c]=T.useState(0),[r,l]=T.useState(!1);f.useEffect(()=>{let g;return r&&(g=setInterval(()=>{c(x=>x>=100?(l(!1),100):x+1)},50)),()=>{g&&clearInterval(g)}},[r]);const i=()=>{s>=100&&c(0),l(!0),h("progress-started")()},d=()=>{l(!1),h("progress-stopped")()},o=()=>{l(!1),c(0),h("progress-reset")()};return e.jsxs("div",{className:"space-y-6 p-8 w-full max-w-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Interactive Progress Demo"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{value:s,label:"Auto Progress",showPercentage:!0,size:"lg",color:s>=100?"success":"primary"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:i,disabled:r,className:"px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50",children:s>=100?"Restart":"Start"}),e.jsx("button",{onClick:d,disabled:!r,className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50",children:"Stop"}),e.jsx("button",{onClick:o,className:"px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700",children:"Reset"})]})]}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx(a,{value:s,size:"xl",showPercentage:!0,color:s>=100?"success":"primary"})})]})},parameters:{docs:{description:{story:"Demo interaktif dengan kontrol start, stop, dan reset. Progress akan berjalan otomatis dari 0-100%."}}}},B={render:()=>{const[s,c]=T.useState(1),r=["Account Setup","Personal Info","Verification","Preferences","Complete"],l=()=>{s<r.length&&(c(o=>o+1),h("step-next")(s+1))},i=()=>{s>1&&(c(o=>o-1),h("step-prev")(s-1))},d=()=>{c(1),h("steps-reset")()};return e.jsxs("div",{className:"space-y-8 p-8 w-full max-w-3xl",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Interactive Stepped Progress"}),e.jsx(v,{currentStep:s,totalSteps:r.length,stepLabels:r,size:"lg",color:"primary"}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"p-6 bg-secondary-50 rounded-lg mb-4",children:[e.jsxs("h4",{className:"font-semibold text-lg mb-2",children:["Step ",s,": ",r[s-1]]}),e.jsxs("p",{className:"text-secondary-600",children:[s===1&&"Set up your account with basic information.",s===2&&"Fill in your personal details and contact information.",s===3&&"Verify your email address and phone number.",s===4&&"Configure your preferences and settings.",s===5&&"🎉 All done! Your setup is complete."]})]}),e.jsxs("div",{className:"flex justify-center gap-3",children:[e.jsx("button",{onClick:i,disabled:s===1,className:"px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 disabled:opacity-50",children:"Previous"}),e.jsx("button",{onClick:l,disabled:s===r.length,className:"px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50",children:s===r.length?"Completed":"Next"}),e.jsx("button",{onClick:d,className:"px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700",children:"Reset"})]})]})]})},parameters:{docs:{description:{story:"Demo interaktif stepped progress dengan navigasi next/previous dan content yang berubah sesuai step."}}}};var K,Y,J;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 60,
    label: "Loading..."
  }
}`,...(J=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var O,H,Q;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 75,
    label: "Upload Progress",
    showPercentage: true
  }
}`,...(Q=(H=S.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var Z,ee,se;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 45,
    size: "xs",
    label: "Extra Small"
  }
}`,...(se=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var re,ae,te;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 45,
    size: "sm",
    label: "Small"
  }
}`,...(te=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,le,ce;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 45,
    size: "md",
    label: "Medium"
  }
}`,...(ce=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var oe,ie,de;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 45,
    size: "lg",
    label: "Large"
  }
}`,...(de=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,pe,me;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 45,
    size: "xl",
    label: "Extra Large"
  }
}`,...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,xe,ve;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 60,
    color: "primary",
    label: "Primary",
    showPercentage: true
  }
}`,...(ve=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var he,ye,fe;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 80,
    color: "success",
    label: "Success",
    showPercentage: true
  }
}`,...(fe=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var be,Ne,Se;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 40,
    color: "warning",
    label: "Warning",
    showPercentage: true
  }
}`,...(Se=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};var je,Pe,we;V.parameters={...V.parameters,docs:{...(je=V.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 25,
    color: "error",
    label: "Error",
    showPercentage: true
  }
}`,...(we=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:we.source}}};var ze,Ce,ke;_.parameters={..._.parameters,docs:{...(ze=_.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 70,
    variant: "striped",
    label: "Striped Progress",
    size: "lg"
  }
}`,...(ke=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var Le,Re,Ve;D.parameters={...D.parameters,docs:{...(Le=D.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Progress {...args} />
    </div>,
  args: {
    value: 65,
    variant: "animated",
    label: "Animated Progress",
    size: "lg"
  }
}`,...(Ve=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:Ve.source}}};var _e,De,Ie;I.parameters={...I.parameters,docs:{...(_e=I.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center p-8">
      <CircularProgress value={75} showPercentage />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Circular progress dengan persentase di tengah."
      }
    }
  }
}`,...(Ie=(De=I.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var qe,Ee,We;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-8 p-8">
      <div className="text-center">
        <CircularProgress value={25} size="xs" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">XS</p>
      </div>
      <div className="text-center">
        <CircularProgress value={50} size="sm" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">SM</p>
      </div>
      <div className="text-center">
        <CircularProgress value={75} size="md" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">MD</p>
      </div>
      <div className="text-center">
        <CircularProgress value={90} size="lg" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">LG</p>
      </div>
      <div className="text-center">
        <CircularProgress value={60} size="xl" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">XL</p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Berbagai ukuran circular progress dari XS hingga XL."
      }
    }
  }
}`,...(We=(Ee=q.parameters)==null?void 0:Ee.docs)==null?void 0:We.source}}};var Me,Ae,Xe;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-6 p-8">
      <div className="text-center">
        <CircularProgress value={60} color="primary" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">Primary</p>
      </div>
      <div className="text-center">
        <CircularProgress value={40} color="secondary" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">Secondary</p>
      </div>
      <div className="text-center">
        <CircularProgress value={85} color="success" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">Success</p>
      </div>
      <div className="text-center">
        <CircularProgress value={30} color="warning" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">Warning</p>
      </div>
      <div className="text-center">
        <CircularProgress value={15} color="error" showPercentage />
        <p className="text-xs mt-2 text-secondary-600">Error</p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Circular progress dengan berbagai warna."
      }
    }
  }
}`,...(Xe=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Xe.source}}};var Be,Ue,Te;W.parameters={...W.parameters,docs:{...(Be=W.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-8 p-8">
      <CircularProgress value={75} size="lg" label="3/4" />
      <CircularProgress value={60} size="lg" label="12GB" color="success" />
      <CircularProgress value={25} size="lg" label={<div className="text-center">
            <div className="text-lg">⏰</div>
            <div className="text-xs">Loading</div>
          </div>} color="warning" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Circular progress dengan custom labels di tengah."
      }
    }
  }
}`,...(Te=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:Te.source}}};var Ge,Fe,$e;M.parameters={...M.parameters,docs:{...(Ge=M.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl p-8">
      <SteppedProgress currentStep={2} totalSteps={4} stepLabels={["Account", "Profile", "Preferences", "Complete"]} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Stepped progress untuk wizard atau multi-step process."
      }
    }
  }
}`,...($e=(Fe=M.parameters)==null?void 0:Fe.docs)==null?void 0:$e.source}}};var Ke,Ye,Je;A.parameters={...A.parameters,docs:{...(Ke=A.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 w-full max-w-2xl p-8">
      <div>
        <h4 className="text-sm font-medium mb-4">Small</h4>
        <SteppedProgress currentStep={2} totalSteps={3} size="sm" stepLabels={["Start", "Process", "Done"]} />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">Medium</h4>
        <SteppedProgress currentStep={2} totalSteps={3} size="md" stepLabels={["Start", "Process", "Done"]} />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">Large</h4>
        <SteppedProgress currentStep={2} totalSteps={3} size="lg" stepLabels={["Start", "Process", "Done"]} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Berbagai ukuran stepped progress."
      }
    }
  }
}`,...(Je=(Ye=A.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Oe,He,Qe;X.parameters={...X.parameters,docs:{...(Oe=X.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    React.useEffect(() => {
      let interval: NodeJS.Timeout;
      if (isRunning) {
        interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              setIsRunning(false);
              return 100;
            }
            return prev + 1;
          });
        }, 50);
      }
      return () => {
        if (interval) clearInterval(interval);
      };
    }, [isRunning]);
    const handleStart = () => {
      if (progress >= 100) {
        setProgress(0);
      }
      setIsRunning(true);
      action("progress-started")();
    };
    const handleStop = () => {
      setIsRunning(false);
      action("progress-stopped")();
    };
    const handleReset = () => {
      setIsRunning(false);
      setProgress(0);
      action("progress-reset")();
    };
    return <div className="space-y-6 p-8 w-full max-w-2xl">
        <h3 className="text-lg font-semibold">Interactive Progress Demo</h3>

        <div className="space-y-4">
          <Progress value={progress} label="Auto Progress" showPercentage size="lg" color={progress >= 100 ? "success" : "primary"} />

          <div className="flex gap-3">
            <button onClick={handleStart} disabled={isRunning} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50">
              {progress >= 100 ? "Restart" : "Start"}
            </button>
            <button onClick={handleStop} disabled={!isRunning} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50">
              Stop
            </button>
            <button onClick={handleReset} className="px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700">
              Reset
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <CircularProgress value={progress} size="xl" showPercentage color={progress >= 100 ? "success" : "primary"} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demo interaktif dengan kontrol start, stop, dan reset. Progress akan berjalan otomatis dari 0-100%."
      }
    }
  }
}`,...(Qe=(He=X.parameters)==null?void 0:He.docs)==null?void 0:Qe.source}}};var Ze,es,ss;B.parameters={...B.parameters,docs:{...(Ze=B.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = ["Account Setup", "Personal Info", "Verification", "Preferences", "Complete"];
    const handleNext = () => {
      if (currentStep < steps.length) {
        setCurrentStep(prev => prev + 1);
        action("step-next")(currentStep + 1);
      }
    };
    const handlePrev = () => {
      if (currentStep > 1) {
        setCurrentStep(prev => prev - 1);
        action("step-prev")(currentStep - 1);
      }
    };
    const handleReset = () => {
      setCurrentStep(1);
      action("steps-reset")();
    };
    return <div className="space-y-8 p-8 w-full max-w-3xl">
        <h3 className="text-lg font-semibold">Interactive Stepped Progress</h3>

        <SteppedProgress currentStep={currentStep} totalSteps={steps.length} stepLabels={steps} size="lg" color="primary" />

        <div className="text-center">
          <div className="p-6 bg-secondary-50 rounded-lg mb-4">
            <h4 className="font-semibold text-lg mb-2">
              Step {currentStep}: {steps[currentStep - 1]}
            </h4>
            <p className="text-secondary-600">
              {currentStep === 1 && "Set up your account with basic information."}
              {currentStep === 2 && "Fill in your personal details and contact information."}
              {currentStep === 3 && "Verify your email address and phone number."}
              {currentStep === 4 && "Configure your preferences and settings."}
              {currentStep === 5 && "🎉 All done! Your setup is complete."}
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <button onClick={handlePrev} disabled={currentStep === 1} className="px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 disabled:opacity-50">
              Previous
            </button>
            <button onClick={handleNext} disabled={currentStep === steps.length} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50">
              {currentStep === steps.length ? "Completed" : "Next"}
            </button>
            <button onClick={handleReset} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
              Reset
            </button>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demo interaktif stepped progress dengan navigasi next/previous dan content yang berubah sesuai step."
      }
    }
  }
}`,...(ss=(es=B.parameters)==null?void 0:es.docs)==null?void 0:ss.source}}};const ms=["Default","WithPercentage","ExtraSmall","Small","Medium","Large","ExtraLarge","Primary","Success","Warning","Error","Striped","Animated","CircularDefault","CircularSizes","CircularColors","CircularWithLabel","SteppedDefault","SteppedSizes","InteractiveProgress","InteractiveSteps"];export{D as Animated,E as CircularColors,I as CircularDefault,q as CircularSizes,W as CircularWithLabel,N as Default,V as Error,C as ExtraLarge,j as ExtraSmall,X as InteractiveProgress,B as InteractiveSteps,z as Large,w as Medium,k as Primary,P as Small,M as SteppedDefault,A as SteppedSizes,_ as Striped,L as Success,R as Warning,S as WithPercentage,ms as __namedExportsOrder,ps as default};
