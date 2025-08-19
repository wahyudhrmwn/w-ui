import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{R as or,r as rr}from"./index-DkvSDgFW.js";import{c as i}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";const cr={xs:"w-3 h-3",sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8",xl:"w-12 h-12"},lr={primary:"text-primary-600",secondary:"text-secondary-600",white:"text-white",current:"text-current"},mr={slow:"animate-spin [animation-duration:2s]",normal:"animate-spin",fast:"animate-spin [animation-duration:0.5s]"},q=({size:r,color:n,speed:a,className:t})=>e.jsxs("svg",{className:i(r,n,a,t),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),dr=({size:r,color:n,speed:a,className:t})=>{const o=a==="slow"?"animate-pulse [animation-duration:2s]":a==="fast"?"animate-pulse [animation-duration:0.5s]":"animate-pulse";return e.jsx("div",{className:i(r,n,o,"bg-current rounded-full",t)})},pr=({size:r,color:n,speed:a,className:t})=>{const o=a==="slow"?"animate-bounce [animation-duration:2s]":a==="fast"?"animate-bounce [animation-duration:0.5s]":"animate-bounce";return e.jsx("div",{className:i(r,n,o,"bg-current rounded-full",t)})},ur=({size:r,color:n,speed:a,className:t})=>{const l={"w-3 h-3":"w-1 h-1","w-4 h-4":"w-1.5 h-1.5","w-6 h-6":"w-2 h-2","w-8 h-8":"w-2.5 h-2.5","w-12 h-12":"w-3 h-3"}[r]||"w-2 h-2",m=a==="slow"?"[animation-duration:1.6s]":a==="fast"?"[animation-duration:0.8s]":"[animation-duration:1.2s]";return e.jsxs("div",{className:i("flex space-x-1",t),children:[e.jsx("div",{className:i(l,n,"bg-current rounded-full animate-pulse",m,"[animation-delay:0ms]")}),e.jsx("div",{className:i(l,n,"bg-current rounded-full animate-pulse",m,"[animation-delay:200ms]")}),e.jsx("div",{className:i(l,n,"bg-current rounded-full animate-pulse",m,"[animation-delay:400ms]")})]})},s=or.forwardRef(({size:r="md",color:n="primary",variant:a="spin",label:t="Loading...",speed:o="normal",className:l,...m},ar)=>{const sr=cr[r],nr=lr[n],tr=mr[o],ir=()=>{const d={size:sr,color:nr,speed:tr,className:l};switch(a){case"spin":return e.jsx(q,{...d});case"pulse":return e.jsx(dr,{...d});case"bounce":return e.jsx(pr,{...d});case"dots":return e.jsx(ur,{...d});default:return e.jsx(q,{...d})}};return e.jsxs("div",{ref:ar,className:"inline-flex items-center justify-center",role:"status","aria-label":t,...m,children:[ir(),e.jsx("span",{className:"sr-only",children:t})]})});s.displayName="Spinner";const xr={light:"bg-black/20",medium:"bg-black/50",dark:"bg-black/75"},c=({show:r=!1,spinnerProps:n={},text:a="Loading...",opacity:t="medium"})=>r?e.jsx("div",{className:i("fixed inset-0 z-50 flex items-center justify-center",xr[t]),children:e.jsxs("div",{className:"flex flex-col items-center space-y-3 bg-white rounded-lg p-6 shadow-lg",children:[e.jsx(s,{color:"primary",size:"lg",...n}),a&&e.jsx("p",{className:"text-sm font-medium text-secondary-700",children:a})]})}):null;try{s.displayName="Spinner",s.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"md"},description:"Ukuran spinner",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'}]}},color:{defaultValue:{value:"primary"},description:"Warna spinner",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"current"'},{value:'"white"'}]}},variant:{defaultValue:{value:"spin"},description:"Variant spinner",name:"variant",required:!1,type:{name:"enum",value:[{value:'"pulse"'},{value:'"spin"'},{value:'"bounce"'},{value:'"dots"'}]}},label:{defaultValue:{value:"Loading..."},description:"Label untuk accessibility",name:"label",required:!1,type:{name:"string"}},speed:{defaultValue:{value:"normal"},description:"Kecepatan animasi",name:"speed",required:!1,type:{name:"enum",value:[{value:'"slow"'},{value:'"normal"'},{value:'"fast"'}]}}}}}catch{}try{c.displayName="SpinnerOverlay",c.__docgenInfo={description:"",displayName:"SpinnerOverlay",props:{show:{defaultValue:{value:"false"},description:"Apakah overlay ditampilkan",name:"show",required:!1,type:{name:"boolean"}},spinnerProps:{defaultValue:{value:"{}"},description:"Spinner props",name:"spinnerProps",required:!1,type:{name:'Omit<SpinnerProps, "className">'}},text:{defaultValue:{value:"Loading..."},description:"Text loading",name:"text",required:!1,type:{name:"string"}},opacity:{defaultValue:{value:"medium"},description:"Background overlay opacity",name:"opacity",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'},{value:'"medium"'}]}}}}}catch{}const Nr={title:"Feedback/Spinner",component:s,parameters:{layout:"centered",docs:{description:{component:"Komponen Spinner untuk menunjukkan loading state. Tersedia dalam berbagai ukuran, warna, variant animasi, dan kecepatan. Dilengkapi juga dengan SpinnerOverlay untuk full-screen loading."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Ukuran spinner"},color:{control:"select",options:["primary","secondary","white","current"],description:"Warna spinner"},variant:{control:"select",options:["spin","pulse","bounce","dots"],description:"Variant animasi spinner"},speed:{control:"select",options:["slow","normal","fast"],description:"Kecepatan animasi"},label:{control:"text",description:"Label untuk accessibility"}},args:{label:"Loading..."}},p={args:{variant:"spin",size:"md",color:"primary"}},u={args:{variant:"spin",size:"md",color:"primary"}},x={args:{variant:"pulse",size:"md",color:"primary"}},y={args:{variant:"bounce",size:"md",color:"primary"}},g={args:{variant:"dots",size:"md",color:"primary"}},v={args:{size:"xs",variant:"spin",color:"primary"}},h={args:{size:"sm",variant:"spin",color:"primary"}},N={args:{size:"md",variant:"spin",color:"primary"}},S={args:{size:"lg",variant:"spin",color:"primary"}},b={args:{size:"xl",variant:"spin",color:"primary"}},j={args:{color:"primary",variant:"spin",size:"md"}},w={args:{color:"secondary",variant:"spin",size:"md"}},f={args:{color:"white",variant:"spin",size:"md"},parameters:{backgrounds:{default:"dark"}}},z={render:r=>e.jsxs("div",{className:"text-green-600",children:[e.jsx("p",{className:"mb-2 text-sm",children:"This spinner inherits the text color (green)"}),e.jsx(s,{...r})]}),args:{color:"current",variant:"spin",size:"md"}},k={args:{speed:"slow",variant:"spin",size:"md",color:"primary"}},O={args:{speed:"normal",variant:"spin",size:"md",color:"primary"}},C={args:{speed:"fast",variant:"spin",size:"md",color:"primary"}},L={render:()=>e.jsxs("div",{className:"flex items-center space-x-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{variant:"spin",size:"lg",color:"primary"}),e.jsx("p",{className:"mt-2 text-sm text-secondary-600",children:"Spin"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{variant:"pulse",size:"lg",color:"primary"}),e.jsx("p",{className:"mt-2 text-sm text-secondary-600",children:"Pulse"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{variant:"bounce",size:"lg",color:"primary"}),e.jsx("p",{className:"mt-2 text-sm text-secondary-600",children:"Bounce"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{variant:"dots",size:"lg",color:"primary"}),e.jsx("p",{className:"mt-2 text-sm text-secondary-600",children:"Dots"})]})]}),parameters:{docs:{description:{story:"Semua variant spinner yang tersedia: spin, pulse, bounce, dan dots."}}}},V={render:()=>e.jsxs("div",{className:"flex items-center space-x-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{size:"xs",color:"primary"}),e.jsx("p",{className:"mt-2 text-xs text-secondary-600",children:"XS"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{size:"sm",color:"primary"}),e.jsx("p",{className:"mt-2 text-xs text-secondary-600",children:"SM"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{size:"md",color:"primary"}),e.jsx("p",{className:"mt-2 text-xs text-secondary-600",children:"MD"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{size:"lg",color:"primary"}),e.jsx("p",{className:"mt-2 text-xs text-secondary-600",children:"LG"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{size:"xl",color:"primary"}),e.jsx("p",{className:"mt-2 text-xs text-secondary-600",children:"XL"})]})]}),parameters:{docs:{description:{story:"Semua ukuran spinner yang tersedia dari XS hingga XL."}}}},_={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("button",{className:"inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700",children:[e.jsx(s,{size:"sm",color:"white",className:"mr-2"}),"Loading..."]}),e.jsxs("button",{className:"inline-flex items-center px-4 py-2 border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50",children:[e.jsx(s,{size:"sm",color:"current",className:"mr-2"}),"Processing..."]})]}),parameters:{docs:{description:{story:"Contoh penggunaan spinner di dalam button untuk menunjukkan loading state."}}}},D={render:()=>e.jsx("div",{className:"max-w-sm mx-auto bg-white border border-secondary-200 rounded-lg p-6",children:e.jsxs("div",{className:"text-center",children:[e.jsx(s,{size:"lg",color:"primary"}),e.jsx("h3",{className:"mt-4 text-lg font-medium text-secondary-900",children:"Loading Data"}),e.jsx("p",{className:"mt-2 text-sm text-secondary-600",children:"Please wait while we fetch your information..."})]})}),parameters:{docs:{description:{story:"Contoh penggunaan spinner di dalam card untuk menunjukkan loading content."}}}},P={render:()=>e.jsxs("div",{className:"flex items-center space-x-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{speed:"slow",size:"lg",color:"primary"}),e.jsx("p",{className:"mt-2 text-sm text-secondary-600",children:"Slow"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{speed:"normal",size:"lg",color:"primary"}),e.jsx("p",{className:"mt-2 text-sm text-secondary-600",children:"Normal"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{speed:"fast",size:"lg",color:"primary"}),e.jsx("p",{className:"mt-2 text-sm text-secondary-600",children:"Fast"})]})]}),parameters:{docs:{description:{story:"Perbandingan kecepatan animasi spinner: slow, normal, dan fast."}}}},B={render:()=>{const[r,n]=rr.useState(!1),a=()=>{n(!0),setTimeout(()=>n(!1),3e3)};return e.jsxs("div",{className:"text-center",children:[e.jsx("button",{onClick:a,className:"px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700",children:"Show Loading Overlay (3s)"}),e.jsx(c,{show:r,text:"Loading data...",opacity:"medium"})]})},parameters:{docs:{description:{story:"Contoh SpinnerOverlay untuk full-screen loading. Klik tombol untuk melihat overlay selama 3 detik."}}}},M={render:()=>{const[r,n]=rr.useState(null),a=t=>{n(t),setTimeout(()=>n(null),2e3)};return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-3 justify-center flex-wrap",children:[e.jsx("button",{onClick:()=>a("light"),className:"px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200",children:"Light Overlay"}),e.jsx("button",{onClick:()=>a("medium"),className:"px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500",children:"Medium Overlay"}),e.jsx("button",{onClick:()=>a("dark"),className:"px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-900",children:"Dark Overlay"})]}),e.jsx(c,{show:r==="light",text:"Light overlay...",opacity:"light"}),e.jsx(c,{show:r==="medium",text:"Medium overlay...",opacity:"medium"}),e.jsx(c,{show:r==="dark",text:"Dark overlay...",opacity:"dark"})]})},parameters:{docs:{description:{story:"Berbagai variant opacity untuk SpinnerOverlay: light, medium, dan dark."}}}};var E,T,X;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "spin",
    size: "md",
    color: "primary"
  }
}`,...(X=(T=p.parameters)==null?void 0:T.docs)==null?void 0:X.source}}};var A,I,F;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "spin",
    size: "md",
    color: "primary"
  }
}`,...(F=(I=u.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var K,W,R;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: "pulse",
    size: "md",
    color: "primary"
  }
}`,...(R=(W=x.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var G,U,H;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "bounce",
    size: "md",
    color: "primary"
  }
}`,...(H=(U=y.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var J,Q,Y;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: "dots",
    size: "md",
    color: "primary"
  }
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: "xs",
    variant: "spin",
    color: "primary"
  }
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,se;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: "sm",
    variant: "spin",
    color: "primary"
  }
}`,...(se=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,te,ie;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    size: "md",
    variant: "spin",
    color: "primary"
  }
}`,...(ie=(te=N.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var oe,ce,le;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    size: "lg",
    variant: "spin",
    color: "primary"
  }
}`,...(le=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,de,pe;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    size: "xl",
    variant: "spin",
    color: "primary"
  }
}`,...(pe=(de=b.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,xe,ye;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "spin",
    size: "md"
  }
}`,...(ye=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var ge,ve,he;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    color: "secondary",
    variant: "spin",
    size: "md"
  }
}`,...(he=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var Ne,Se,be;f.parameters={...f.parameters,docs:{...(Ne=f.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    color: "white",
    variant: "spin",
    size: "md"
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...(be=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var je,we,fe;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: args => <div className="text-green-600">
      <p className="mb-2 text-sm">
        This spinner inherits the text color (green)
      </p>
      <Spinner {...args} />
    </div>,
  args: {
    color: "current",
    variant: "spin",
    size: "md"
  }
}`,...(fe=(we=z.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var ze,ke,Oe;k.parameters={...k.parameters,docs:{...(ze=k.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    speed: "slow",
    variant: "spin",
    size: "md",
    color: "primary"
  }
}`,...(Oe=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source}}};var Ce,Le,Ve;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    speed: "normal",
    variant: "spin",
    size: "md",
    color: "primary"
  }
}`,...(Ve=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};var _e,De,Pe;C.parameters={...C.parameters,docs:{...(_e=C.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    speed: "fast",
    variant: "spin",
    size: "md",
    color: "primary"
  }
}`,...(Pe=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Be,Me,qe;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-8">
      <div className="text-center">
        <Spinner variant="spin" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Spin</p>
      </div>
      <div className="text-center">
        <Spinner variant="pulse" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Pulse</p>
      </div>
      <div className="text-center">
        <Spinner variant="bounce" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Bounce</p>
      </div>
      <div className="text-center">
        <Spinner variant="dots" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Dots</p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua variant spinner yang tersedia: spin, pulse, bounce, dan dots."
      }
    }
  }
}`,...(qe=(Me=L.parameters)==null?void 0:Me.docs)==null?void 0:qe.source}}};var Ee,Te,Xe;V.parameters={...V.parameters,docs:{...(Ee=V.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-6">
      <div className="text-center">
        <Spinner size="xs" color="primary" />
        <p className="mt-2 text-xs text-secondary-600">XS</p>
      </div>
      <div className="text-center">
        <Spinner size="sm" color="primary" />
        <p className="mt-2 text-xs text-secondary-600">SM</p>
      </div>
      <div className="text-center">
        <Spinner size="md" color="primary" />
        <p className="mt-2 text-xs text-secondary-600">MD</p>
      </div>
      <div className="text-center">
        <Spinner size="lg" color="primary" />
        <p className="mt-2 text-xs text-secondary-600">LG</p>
      </div>
      <div className="text-center">
        <Spinner size="xl" color="primary" />
        <p className="mt-2 text-xs text-secondary-600">XL</p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran spinner yang tersedia dari XS hingga XL."
      }
    }
  }
}`,...(Xe=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:Xe.source}}};var Ae,Ie,Fe;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
        <Spinner size="sm" color="white" className="mr-2" />
        Loading...
      </button>

      <button className="inline-flex items-center px-4 py-2 border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50">
        <Spinner size="sm" color="current" className="mr-2" />
        Processing...
      </button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan spinner di dalam button untuk menunjukkan loading state."
      }
    }
  }
}`,...(Fe=(Ie=_.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var Ke,We,Re;D.parameters={...D.parameters,docs:{...(Ke=D.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm mx-auto bg-white border border-secondary-200 rounded-lg p-6">
      <div className="text-center">
        <Spinner size="lg" color="primary" />
        <h3 className="mt-4 text-lg font-medium text-secondary-900">
          Loading Data
        </h3>
        <p className="mt-2 text-sm text-secondary-600">
          Please wait while we fetch your information...
        </p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan spinner di dalam card untuk menunjukkan loading content."
      }
    }
  }
}`,...(Re=(We=D.parameters)==null?void 0:We.docs)==null?void 0:Re.source}}};var Ge,Ue,He;P.parameters={...P.parameters,docs:{...(Ge=P.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-8">
      <div className="text-center">
        <Spinner speed="slow" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Slow</p>
      </div>
      <div className="text-center">
        <Spinner speed="normal" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Normal</p>
      </div>
      <div className="text-center">
        <Spinner speed="fast" size="lg" color="primary" />
        <p className="mt-2 text-sm text-secondary-600">Fast</p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Perbandingan kecepatan animasi spinner: slow, normal, dan fast."
      }
    }
  }
}`,...(He=(Ue=P.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};var Je,Qe,Ye;B.parameters={...B.parameters,docs:{...(Je=B.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const toggleOverlay = () => {
      setShowOverlay(true);
      setTimeout(() => setShowOverlay(false), 3000);
    };
    return <div className="text-center">
        <button onClick={toggleOverlay} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          Show Loading Overlay (3s)
        </button>

        <SpinnerOverlay show={showOverlay} text="Loading data..." opacity="medium" />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Contoh SpinnerOverlay untuk full-screen loading. Klik tombol untuk melihat overlay selama 3 detik."
      }
    }
  }
}`,...(Ye=(Qe=B.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var Ze,$e,er;M.parameters={...M.parameters,docs:{...(Ze=M.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => {
    const [currentOverlay, setCurrentOverlay] = useState<string | null>(null);
    const showOverlay = (type: string) => {
      setCurrentOverlay(type);
      setTimeout(() => setCurrentOverlay(null), 2000);
    };
    return <div className="space-y-3">
        <div className="flex gap-3 justify-center flex-wrap">
          <button onClick={() => showOverlay("light")} className="px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            Light Overlay
          </button>
          <button onClick={() => showOverlay("medium")} className="px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
            Medium Overlay
          </button>
          <button onClick={() => showOverlay("dark")} className="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
            Dark Overlay
          </button>
        </div>

        <SpinnerOverlay show={currentOverlay === "light"} text="Light overlay..." opacity="light" />

        <SpinnerOverlay show={currentOverlay === "medium"} text="Medium overlay..." opacity="medium" />

        <SpinnerOverlay show={currentOverlay === "dark"} text="Dark overlay..." opacity="dark" />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Berbagai variant opacity untuk SpinnerOverlay: light, medium, dan dark."
      }
    }
  }
}`,...(er=($e=M.parameters)==null?void 0:$e.docs)==null?void 0:er.source}}};const Sr=["Default","Spin","Pulse","Bounce","Dots","ExtraSmall","Small","Medium","Large","ExtraLarge","Primary","Secondary","White","Current","SlowSpeed","NormalSpeed","FastSpeed","AllVariants","AllSizes","InButton","InCard","SpeedComparison","OverlayExample","OverlayVariants"];export{V as AllSizes,L as AllVariants,y as Bounce,z as Current,p as Default,g as Dots,b as ExtraLarge,v as ExtraSmall,C as FastSpeed,_ as InButton,D as InCard,S as Large,N as Medium,O as NormalSpeed,B as OverlayExample,M as OverlayVariants,j as Primary,x as Pulse,w as Secondary,k as SlowSpeed,h as Small,P as SpeedComparison,u as Spin,f as White,Sr as __namedExportsOrder,Nr as default};
