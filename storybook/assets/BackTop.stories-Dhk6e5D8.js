import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as o}from"./index-B-lxVbXh.js";import{r}from"./index-DkvSDgFW.js";import{c as Ve}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const Ie={sm:{button:"w-10 h-10",icon:"w-4 h-4",text:"text-xs",withText:"px-3 py-2"},md:{button:"w-12 h-12",icon:"w-5 h-5",text:"text-sm",withText:"px-4 py-3"},lg:{button:"w-14 h-14",icon:"w-6 h-6",text:"text-base",withText:"px-5 py-4"}},Me=({className:n})=>e.jsx("svg",{className:n,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})}),_e=n=>n<.5?8*n*n*n*n:1-8*--n*n*n*n,t=({visibilityHeight:n=400,right:i=24,bottom:fe=24,smooth:L=!0,duration:D=450,target:C,onClick:m,size:we="md",shape:E="circle",children:Te,icon:je,text:B,showText:ye=!1,className:Ne,style:Ce,...Be})=>{const[q,qe]=r.useState(!1),[V,I]=r.useState(!1),d=r.useRef(null),p=Ie[we],l=r.useCallback(()=>{if(C){const s=C();return s===window||s===document?window:s}return window},[C]),u=r.useCallback(s=>s===window?document.documentElement.scrollTop||document.body.scrollTop:s.scrollTop,[]),M=r.useCallback(()=>{if(V)return;I(!0);const s=l(),S=u(s),De=Date.now(),H=()=>{const Ee=Date.now()-De,z=Math.min(Ee/D,1);let A=z;L&&(A=_e(z));const W=S*(1-A);s===window?window.scrollTo(0,W):s.scrollTop=W,z<1?d.current=requestAnimationFrame(H):(I(!1),d.current=null)};d.current=requestAnimationFrame(H)},[V,l,u,D,L]),_=r.useCallback(()=>{M(),m==null||m()},[M,m]),c=r.useCallback(()=>{const s=l(),S=u(s);qe(S>=n)},[l,u,n]);if(r.useEffect(()=>{const s=l();return c(),s===window?window.addEventListener("scroll",c,{passive:!0}):s.addEventListener("scroll",c,{passive:!0}),()=>{s===window?window.removeEventListener("scroll",c):s.removeEventListener("scroll",c),d.current&&cancelAnimationFrame(d.current)}},[l,c]),!q)return null;const h=ye&&B,Se=je||e.jsx(Me,{className:p.icon}),ze=Ve("fixed z-50 bg-secondary-900 text-white shadow-lg hover:bg-secondary-800 transition-all duration-200 hover:shadow-xl active:scale-95","flex items-center justify-center cursor-pointer select-none",{"rounded-full":E==="circle","rounded-lg":E==="square",[p.button]:!h,[p.withText]:h,"space-x-2":h},Ne),Le={right:`${i}px`,bottom:`${fe}px`,opacity:q?1:0,transform:`translateY(${q?0:10}px)`,...Ce};return e.jsx("div",{className:ze,style:Le,onClick:_,role:"button",tabIndex:0,"aria-label":B||"Back to top",onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),_())},...Be,children:Te||e.jsxs(e.Fragment,{children:[Se,h&&e.jsx("span",{className:p.text,children:B})]})})};try{t.displayName="BackTop",t.__docgenInfo={description:"",displayName:"BackTop",props:{visibilityHeight:{defaultValue:{value:"400"},description:"",name:"visibilityHeight",required:!1,type:{name:"number"}},right:{defaultValue:{value:"24"},description:"",name:"right",required:!1,type:{name:"number"}},bottom:{defaultValue:{value:"24"},description:"",name:"bottom",required:!1,type:{name:"number"}},smooth:{defaultValue:{value:"true"},description:"",name:"smooth",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"450"},description:"",name:"duration",required:!1,type:{name:"number"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"(() => HTMLElement | Window | Document)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},showText:{defaultValue:{value:"false"},description:"",name:"showText",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const $e={title:"Navigation/BackTop",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"Komponen BackTop untuk tombol scroll ke atas halaman dengan smooth scrolling. Muncul otomatis ketika user scroll ke bawah melewati threshold tertentu. Mendukung custom positioning, styling, dan berbagai konfigurasi behavior."}}},tags:["autodocs"],argTypes:{visibilityHeight:{control:{type:"number",min:0,max:1e3},description:"Tinggi scroll untuk menampilkan tombol (px)"},right:{control:{type:"number"},description:"Jarak dari kanan (px)"},bottom:{control:{type:"number"},description:"Jarak dari bawah (px)"},smooth:{control:{type:"boolean"},description:"Apakah menggunakan smooth scrolling"},duration:{control:{type:"number",min:100,max:2e3},description:"Durasi animasi scroll (ms)"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran tombol"},shape:{control:{type:"select"},options:["circle","square"],description:"Bentuk tombol"},showText:{control:{type:"boolean"},description:"Apakah menampilkan text"},text:{control:{type:"text"},description:"Text tombol"}}},a=()=>e.jsxs("div",{className:"space-y-8 p-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-3xl font-bold text-secondary-900 mb-4",children:"BackTop Component Demo"}),e.jsx("p",{className:"text-lg text-secondary-600 max-w-2xl mx-auto",children:"Scroll down to see the BackTop button appear. The button will show up after you scroll down 400 pixels by default."})]}),Array.from({length:20},(n,i)=>e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto",children:[e.jsxs("h2",{className:"text-xl font-semibold mb-4",children:["Section ",i+1]}),e.jsxs("div",{className:"space-y-4 text-secondary-700",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."})]})]},i)),e.jsxs("div",{className:"text-center py-12",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"End of Content"}),e.jsx("p",{className:"text-secondary-600",children:"Use the BackTop button to scroll back to the top!"})]})]}),x={render:()=>e.jsxs("div",{className:"relative",children:[e.jsx(a,{}),e.jsx(t,{onClick:o("back-to-top-clicked")})]})},g={render:()=>e.jsxs("div",{className:"relative",children:[e.jsx(a,{}),e.jsx(t,{right:24,bottom:24,size:"sm",onClick:o("bottom-right-clicked")}),e.jsx(t,{right:24,bottom:80,size:"sm",shape:"square",onClick:o("bottom-right-square-clicked")}),e.jsx(t,{right:80,bottom:24,size:"sm",text:"Top",showText:!0,onClick:o("with-text-clicked")})]})},b={render:()=>e.jsxs("div",{className:"relative",children:[e.jsx(a,{}),e.jsx(t,{size:"sm",right:24,bottom:24,onClick:o("small-clicked")}),e.jsx(t,{size:"md",right:24,bottom:80,onClick:o("medium-clicked")}),e.jsx(t,{size:"lg",right:24,bottom:150,onClick:o("large-clicked")})]})},k={render:()=>e.jsxs("div",{className:"relative",children:[e.jsx(a,{}),e.jsx(t,{shape:"circle",right:24,bottom:24,onClick:o("circle-clicked")}),e.jsx(t,{shape:"square",right:24,bottom:90,onClick:o("square-clicked")})]})},v={render:()=>e.jsxs("div",{className:"relative",children:[e.jsx(a,{}),e.jsx(t,{text:"Back to Top",showText:!0,shape:"square",right:24,bottom:24,onClick:o("text-clicked")}),e.jsx(t,{text:"↑ Top",showText:!0,shape:"square",size:"sm",right:24,bottom:90,onClick:o("arrow-text-clicked")})]})},f={render:()=>e.jsxs("div",{className:"relative",children:[e.jsx(a,{}),e.jsx(t,{icon:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),right:24,bottom:24,onClick:o("custom-icon-clicked")}),e.jsx(t,{icon:e.jsx("div",{className:"w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-bold",children:"↑"})}),right:24,bottom:90,onClick:o("gradient-icon-clicked")})]})},w={render:()=>e.jsxs("div",{className:"relative",children:[e.jsx(a,{}),e.jsx(t,{className:"bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",right:24,bottom:24,onClick:o("gradient-clicked")}),e.jsx(t,{className:"bg-green-500 hover:bg-green-600 border-2 border-white",right:24,bottom:90,size:"lg",onClick:o("green-clicked")}),e.jsx(t,{className:"bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/25",right:24,bottom:170,shape:"square",onClick:o("red-clicked")})]})},T={render:()=>e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"space-y-4 p-8",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Different Scroll Behaviors"}),e.jsx("p",{children:"Try the different BackTop buttons to see various scroll behaviors."})]}),e.jsx(a,{}),e.jsx(t,{smooth:!1,text:"Instant",showText:!0,shape:"square",size:"sm",right:24,bottom:24,onClick:o("instant-scroll")}),e.jsx(t,{smooth:!0,duration:200,text:"Fast",showText:!0,shape:"square",size:"sm",right:24,bottom:80,onClick:o("fast-scroll")}),e.jsx(t,{smooth:!0,duration:1e3,text:"Slow",showText:!0,shape:"square",size:"sm",right:24,bottom:136,onClick:o("slow-scroll")})]})},j={render:()=>e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"space-y-4 p-8",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Low Visibility Height"}),e.jsx("p",{children:"This BackTop button appears after scrolling just 100px."})]}),e.jsx(a,{}),e.jsx(t,{visibilityHeight:100,text:"Top",showText:!0,shape:"square",className:"bg-orange-500 hover:bg-orange-600",right:24,bottom:24,onClick:o("low-threshold-clicked")})]})},y={render:()=>e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"space-y-4 p-8",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Multiple BackTop Buttons"}),e.jsx("p",{children:"Multiple BackTop buttons with different styles and positions."})]}),e.jsx(a,{}),e.jsx(t,{right:24,bottom:24,onClick:o("main-clicked")}),e.jsx(t,{text:"↑ Top",showText:!0,shape:"square",size:"sm",className:"bg-indigo-500 hover:bg-indigo-600",right:24,bottom:90,onClick:o("alt-clicked")}),e.jsx(t,{right:window.innerWidth-100,bottom:24,size:"sm",className:"bg-emerald-500 hover:bg-emerald-600",onClick:o("left-clicked")})]})},N={render:()=>e.jsxs("div",{className:"p-8",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"BackTop in Scrollable Container"}),e.jsxs("div",{className:"h-96 overflow-auto bg-secondary-50 rounded-lg relative",id:"scrollable-container",children:[e.jsx("div",{className:"space-y-6 p-6",children:Array.from({length:15},(n,i)=>e.jsxs("div",{className:"bg-white rounded p-4 shadow-sm",children:[e.jsxs("h3",{className:"font-semibold mb-2",children:["Item ",i+1]}),e.jsx("p",{className:"text-secondary-600 text-sm",children:"This is content inside a scrollable container. The BackTop button will scroll this container instead of the whole page."})]},i))}),e.jsx(t,{target:()=>document.getElementById("scrollable-container"),visibilityHeight:100,right:16,bottom:16,size:"sm",onClick:o("container-scroll-clicked")})]})]})};var F,P,R;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="relative">
      <LongContent />
      <BackTop onClick={action("back-to-top-clicked")} />
    </div>
}`,...(R=(P=x.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var U,$,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="relative">
      <LongContent />

      {/* Different positions */}
      <BackTop right={24} bottom={24} size="sm" onClick={action("bottom-right-clicked")} />

      <BackTop right={24} bottom={80} size="sm" shape="square" onClick={action("bottom-right-square-clicked")} />

      <BackTop right={80} bottom={24} size="sm" text="Top" showText onClick={action("with-text-clicked")} />
    </div>
}`,...(J=($=g.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,O,Q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="relative">
      <LongContent />

      {/* Different sizes */}
      <BackTop size="sm" right={24} bottom={24} onClick={action("small-clicked")} />

      <BackTop size="md" right={24} bottom={80} onClick={action("medium-clicked")} />

      <BackTop size="lg" right={24} bottom={150} onClick={action("large-clicked")} />
    </div>
}`,...(Q=(O=b.parameters)==null?void 0:O.docs)==null?void 0:Q.source}}};var Y,G,X;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="relative">
      <LongContent />

      {/* Circle and square shapes */}
      <BackTop shape="circle" right={24} bottom={24} onClick={action("circle-clicked")} />

      <BackTop shape="square" right={24} bottom={90} onClick={action("square-clicked")} />
    </div>
}`,...(X=(G=k.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Z,ee,te;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="relative">
      <LongContent />

      {/* With different text configurations */}
      <BackTop text="Back to Top" showText shape="square" right={24} bottom={24} onClick={action("text-clicked")} />

      <BackTop text="↑ Top" showText shape="square" size="sm" right={24} bottom={90} onClick={action("arrow-text-clicked")} />
    </div>
}`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,se,ne;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="relative">
      <LongContent />

      <BackTop icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>} right={24} bottom={24} onClick={action("custom-icon-clicked")} />

      <BackTop icon={<div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">↑</span>
          </div>} right={24} bottom={90} onClick={action("gradient-icon-clicked")} />
    </div>
}`,...(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ae,re,ie;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="relative">
      <LongContent />

      {/* Custom styled buttons */}
      <BackTop className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" right={24} bottom={24} onClick={action("gradient-clicked")} />

      <BackTop className="bg-green-500 hover:bg-green-600 border-2 border-white" right={24} bottom={90} size="lg" onClick={action("green-clicked")} />

      <BackTop className="bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/25" right={24} bottom={170} shape="square" onClick={action("red-clicked")} />
    </div>
}`,...(ie=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,ce,de;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="relative">
      <div className="space-y-4 p-8">
        <h1 className="text-2xl font-bold">Different Scroll Behaviors</h1>
        <p>
          Try the different BackTop buttons to see various scroll behaviors.
        </p>
      </div>

      <LongContent />

      {/* Different behaviors */}
      <BackTop smooth={false} text="Instant" showText shape="square" size="sm" right={24} bottom={24} onClick={action("instant-scroll")} />

      <BackTop smooth={true} duration={200} text="Fast" showText shape="square" size="sm" right={24} bottom={80} onClick={action("fast-scroll")} />

      <BackTop smooth={true} duration={1000} text="Slow" showText shape="square" size="sm" right={24} bottom={136} onClick={action("slow-scroll")} />
    </div>
}`,...(de=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ue;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div className="relative">
      <div className="space-y-4 p-8">
        <h1 className="text-2xl font-bold">Low Visibility Height</h1>
        <p>This BackTop button appears after scrolling just 100px.</p>
      </div>

      <LongContent />

      <BackTop visibilityHeight={100} text="Top" showText shape="square" className="bg-orange-500 hover:bg-orange-600" right={24} bottom={24} onClick={action("low-threshold-clicked")} />
    </div>
}`,...(ue=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var he,xe,ge;y.parameters={...y.parameters,docs:{...(he=y.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="relative">
      <div className="space-y-4 p-8">
        <h1 className="text-2xl font-bold">Multiple BackTop Buttons</h1>
        <p>Multiple BackTop buttons with different styles and positions.</p>
      </div>

      <LongContent />

      {/* Main BackTop */}
      <BackTop right={24} bottom={24} onClick={action("main-clicked")} />

      {/* Alternative BackTop with text */}
      <BackTop text="↑ Top" showText shape="square" size="sm" className="bg-indigo-500 hover:bg-indigo-600" right={24} bottom={90} onClick={action("alt-clicked")} />

      {/* Left side BackTop */}
      <BackTop right={window.innerWidth - 100} // Left side
    bottom={24} size="sm" className="bg-emerald-500 hover:bg-emerald-600" onClick={action("left-clicked")} />
    </div>
}`,...(ge=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var be,ke,ve;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    return <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">
          BackTop in Scrollable Container
        </h1>
        <div className="h-96 overflow-auto bg-secondary-50 rounded-lg relative" id="scrollable-container">
          <div className="space-y-6 p-6">
            {Array.from({
            length: 15
          }, (_, i) => <div key={i} className="bg-white rounded p-4 shadow-sm">
                <h3 className="font-semibold mb-2">Item {i + 1}</h3>
                <p className="text-secondary-600 text-sm">
                  This is content inside a scrollable container. The BackTop
                  button will scroll this container instead of the whole page.
                </p>
              </div>)}
          </div>

          <BackTop target={() => document.getElementById("scrollable-container")!} visibilityHeight={100} right={16} bottom={16} size="sm" onClick={action("container-scroll-clicked")} />
        </div>
      </div>;
  }
}`,...(ve=(ke=N.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};const Je=["Default","DifferentPositions","DifferentSizes","DifferentShapes","WithText","CustomIcon","CustomStyling","DifferentBehavior","LowVisibilityHeight","MultipleBackTops","InScrollableContainer"];export{f as CustomIcon,w as CustomStyling,x as Default,T as DifferentBehavior,g as DifferentPositions,k as DifferentShapes,b as DifferentSizes,N as InScrollableContainer,j as LowVisibilityHeight,y as MultipleBackTops,v as WithText,Je as __namedExportsOrder,$e as default};
