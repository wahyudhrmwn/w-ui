import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{r as u}from"./index-DkvSDgFW.js";import{c as q}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";const Te=(s,n,c,o)=>{const i=document.createElement("canvas"),r=i.getContext("2d"),l=window.devicePixelRatio||1;i.width=n*l,i.height=c*l,r.scale(l,l);const h=n,m=c;r.clearRect(0,0,h,m),r.globalAlpha=o.opacity,r.fillStyle=o.fontColor,r.font=`${o.fontStyle} ${o.fontVariant} ${o.fontWeight} ${o.fontSize}px ${o.fontFamily}`,r.textAlign="center",r.textBaseline="middle";const p=h/2,d=m/2;r.save(),r.translate(p,d),r.rotate(Math.PI/180*o.rotate);const b=Array.isArray(s)?s:[s],x=o.fontSize*1.2,v=-(b.length*x)/2+x/2;return b.forEach((y,L)=>{const F=v+L*x;r.fillText(y,0,F)}),r.restore(),i.toDataURL()},Re=(s,n,c)=>{const i=document.createElement("canvas").getContext("2d");i.font=`${n}px ${c}`;const r=Array.isArray(s)?s:[s],l=n*1.2;let h=0;return r.forEach(m=>{const p=i.measureText(m);h=Math.max(h,p.width)}),{width:h+40,height:r.length*l+40}},t=({children:s,content:n,image:c,width:o,height:i,rotate:r=-20,zIndex:l=1e3,fontColor:h="rgba(0, 0, 0, 0.15)",fontSize:m=16,fontFamily:p="sans-serif",fontStyle:d="normal",fontWeight:b="normal",fontVariant:x="normal",gap:O=[100,100],offset:v=[50,50],opacity:y=1,className:L,style:F,...De})=>{const P=u.useRef(null),g=u.useMemo(()=>o&&i?{width:o,height:i}:n?Re(n,m,p):{width:120,height:120},[n,m,p,o,i]),z=u.useMemo(()=>c||(n?Te(n,g.width,g.height,{rotate:r,fontColor:h,fontSize:m,fontFamily:p,fontStyle:d,fontWeight:b,fontVariant:x,opacity:y}):""),[c,n,g,r,h,m,p,d,b,x,y]),V=u.useMemo(()=>{if(!z)return{};const[B,f]=O,[j,Me]=v;return{backgroundImage:`url("${z}")`,backgroundSize:`${g.width+B}px ${g.height+f}px`,backgroundPosition:`${j}px ${Me}px`,backgroundRepeat:"repeat"}},[z,g,O,v]);u.useEffect(()=>{if(!P.current)return;const f=P.current.querySelector("[data-watermark]");if(!f)return;const j=new MutationObserver(()=>{Object.assign(f.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:l.toString(),...V})});return j.observe(f,{attributes:!0,attributeFilter:["style","class"]}),()=>j.disconnect()},[V,l]);const we=q("relative",L),Ae={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:l,...V};return e.jsxs("div",{ref:P,className:we,style:F,...De,children:[e.jsx("div",{"data-watermark":"true",style:Ae,"aria-hidden":"true"}),e.jsx("div",{style:{position:"relative",zIndex:l+1},children:s})]})};try{t.displayName="Watermark",t.__docgenInfo={description:"",displayName:"Watermark",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string | string[]"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},rotate:{defaultValue:{value:"-20"},description:"",name:"rotate",required:!1,type:{name:"number"}},zIndex:{defaultValue:{value:"1000"},description:"",name:"zIndex",required:!1,type:{name:"number"}},fontColor:{defaultValue:{value:"rgba(0, 0, 0, 0.15)"},description:"",name:"fontColor",required:!1,type:{name:"string"}},fontSize:{defaultValue:{value:"16"},description:"",name:"fontSize",required:!1,type:{name:"number"}},fontFamily:{defaultValue:{value:"sans-serif"},description:"",name:"fontFamily",required:!1,type:{name:"string"}},fontStyle:{defaultValue:{value:"normal"},description:"",name:"fontStyle",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"italic"'},{value:'"oblique"'}]}},fontWeight:{defaultValue:{value:"normal"},description:"",name:"fontWeight",required:!1,type:{name:'number | "light" | "normal" | "weight" | "bold"'}},fontVariant:{defaultValue:{value:"normal"},description:"",name:"fontVariant",required:!1,type:{name:"string"}},gap:{defaultValue:{value:"[100, 100]"},description:"",name:"gap",required:!1,type:{name:"[number, number]"}},offset:{defaultValue:{value:"[50, 50]"},description:"",name:"offset",required:!1,type:{name:"[number, number]"}},opacity:{defaultValue:{value:"1"},description:"",name:"opacity",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Pe={title:"Layout/Watermark",component:t,parameters:{layout:"padded",docs:{description:{component:"Komponen Watermark untuk menambahkan watermark pada content sebagai background pattern. Mendukung text dan image watermark dengan berbagai kustomisasi styling, positioning, dan opacity. Berguna untuk branding, copyright protection, atau status indicators."}}},tags:["autodocs"],argTypes:{content:{control:{type:"text"},description:"Text content untuk watermark"},image:{control:{type:"text"},description:"URL gambar untuk watermark"},rotate:{control:{type:"number",min:-180,max:180},description:"Rotasi watermark (derajat)"},opacity:{control:{type:"number",min:0,max:1,step:.1},description:"Opacity watermark"},fontSize:{control:{type:"number",min:8,max:48},description:"Ukuran font text watermark"},fontColor:{control:{type:"color"},description:"Warna font text watermark"}}},a=({height:s="h-96"})=>e.jsxs("div",{className:q("bg-white p-8 rounded-lg shadow-sm",s),children:[e.jsx("h2",{className:"text-2xl font-bold text-secondary-900 mb-4",children:"Sample Document"}),e.jsxs("div",{className:"space-y-4 text-secondary-700",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded",children:[e.jsx("h3",{className:"font-semibold text-blue-900 mb-2",children:"Feature 1"}),e.jsx("p",{className:"text-blue-700 text-sm",children:"This is a sample feature description."})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded",children:[e.jsx("h3",{className:"font-semibold text-green-900 mb-2",children:"Feature 2"}),e.jsx("p",{className:"text-green-700 text-sm",children:"Another sample feature description."})]})]})]})]}),N={render:()=>e.jsx(t,{content:"CONFIDENTIAL",children:e.jsx(a,{})})},S={render:()=>e.jsx(t,{content:"My Company © 2024",children:e.jsx(a,{})})},k={render:()=>e.jsx(t,{content:["DRAFT","DO NOT DISTRIBUTE"],children:e.jsx(a,{})})},C={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Low Opacity (0.1)"}),e.jsx(t,{content:"WATERMARK",opacity:.1,children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Medium Opacity (0.3)"}),e.jsx(t,{content:"WATERMARK",opacity:.3,children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"High Opacity (0.6)"}),e.jsx(t,{content:"WATERMARK",opacity:.6,children:e.jsx(a,{height:"h-64"})})]})]})},W={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"No Rotation (0°)"}),e.jsx(t,{content:"HORIZONTAL",rotate:0,children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Default Rotation (-20°)"}),e.jsx(t,{content:"DIAGONAL",rotate:-20,children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Vertical Rotation (-90°)"}),e.jsx(t,{content:"VERTICAL",rotate:-90,children:e.jsx(a,{height:"h-64"})})]})]})},I={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Small Font (12px)"}),e.jsx(t,{content:"Small Watermark",fontSize:12,children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Medium Font (16px - Default)"}),e.jsx(t,{content:"Medium Watermark",fontSize:16,children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Large Font (24px)"}),e.jsx(t,{content:"Large Watermark",fontSize:24,children:e.jsx(a,{height:"h-64"})})]})]})},D={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Red Watermark"}),e.jsx(t,{content:"URGENT",fontColor:"rgba(239, 68, 68, 0.3)",children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Blue Watermark"}),e.jsx(t,{content:"INTERNAL USE",fontColor:"rgba(59, 130, 246, 0.25)",children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Green Watermark"}),e.jsx(t,{content:"APPROVED",fontColor:"rgba(34, 197, 94, 0.3)",children:e.jsx(a,{height:"h-64"})})]})]})},w={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Dense Pattern (small gap)"}),e.jsx(t,{content:"DENSE",gap:[60,60],children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Sparse Pattern (large gap)"}),e.jsx(t,{content:"SPARSE",gap:[200,200],children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Custom Offset"}),e.jsx(t,{content:"OFFSET",offset:[100,50],children:e.jsx(a,{height:"h-64"})})]})]})},A={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Bold Font"}),e.jsx(t,{content:"BOLD TEXT",fontWeight:"bold",children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Italic Font"}),e.jsx(t,{content:"Italic Text",fontStyle:"italic",children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Custom Font Family"}),e.jsx(t,{content:"Monospace Text",fontFamily:"monospace",children:e.jsx(a,{height:"h-64"})})]})]})},M={render:()=>e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"SVG Logo Watermark"}),e.jsx(t,{image:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMikiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjYpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgo8cGF0aCBkPSJNMTIgMkw2IDhIMTBWMTZIMTRWOEgxOEwxMiAyWiIvPgo8L3N2Zz4KPC9zdmc+",gap:[150,150],opacity:.8,children:e.jsx(a,{})})]})})},T={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Draft Document"}),e.jsx(t,{content:["DRAFT",new Date().toLocaleDateString()],fontColor:"rgba(234, 179, 8, 0.3)",rotate:-45,children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Confidential"}),e.jsx(t,{content:"CONFIDENTIAL",fontColor:"rgba(239, 68, 68, 0.4)",fontWeight:"bold",fontSize:18,children:e.jsx(a,{height:"h-64"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Sample/Preview"}),e.jsx(t,{content:["SAMPLE","NOT FOR PRODUCTION"],fontColor:"rgba(107, 114, 128, 0.3)",rotate:0,gap:[120,120],children:e.jsx(a,{height:"h-64"})})]})]})},R={render:()=>{const[s,n]=u.useState("WATERMARK"),[c,o]=u.useState(.15),[i,r]=u.useState(-20),[l,h]=u.useState(16),[m,p]=u.useState("#000000");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg border space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Watermark Controls"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Text"}),e.jsx("input",{type:"text",value:s,onChange:d=>n(d.target.value),className:"w-full px-3 py-2 border border-secondary-300 rounded-md text-sm"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-1",children:["Opacity: ",c]}),e.jsx("input",{type:"range",min:"0.05",max:"0.8",step:"0.05",value:c,onChange:d=>o(parseFloat(d.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-1",children:["Rotation: ",i,"°"]}),e.jsx("input",{type:"range",min:"-90",max:"90",step:"5",value:i,onChange:d=>r(parseInt(d.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-1",children:["Font Size: ",l,"px"]}),e.jsx("input",{type:"range",min:"12",max:"32",step:"2",value:l,onChange:d=>h(parseInt(d.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Color"}),e.jsx("input",{type:"color",value:m,onChange:d=>p(d.target.value),className:"w-full h-9 border border-secondary-300 rounded-md"})]})]})]}),e.jsx(t,{content:s,opacity:c,rotate:i,fontSize:l,fontColor:`${m}${Math.round(c*255).toString(16).padStart(2,"0")}`,children:e.jsx(a,{})})]})}},E={render:()=>e.jsx(t,{content:["CONFIDENTIAL","© 2024 My Company"],children:e.jsxs("div",{className:"space-y-8",children:[e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{}),e.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-secondary-900 mb-6",children:"Data Table"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse border border-secondary-300",children:[e.jsx("thead",{className:"bg-secondary-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"border border-secondary-300 px-4 py-2 text-left",children:"Name"}),e.jsx("th",{className:"border border-secondary-300 px-4 py-2 text-left",children:"Email"}),e.jsx("th",{className:"border border-secondary-300 px-4 py-2 text-left",children:"Role"}),e.jsx("th",{className:"border border-secondary-300 px-4 py-2 text-left",children:"Status"})]})}),e.jsx("tbody",{children:Array.from({length:8},(s,n)=>e.jsxs("tr",{className:"hover:bg-secondary-50",children:[e.jsxs("td",{className:"border border-secondary-300 px-4 py-2",children:["User ",n+1]}),e.jsxs("td",{className:"border border-secondary-300 px-4 py-2",children:["user",n+1,"@example.com"]}),e.jsx("td",{className:"border border-secondary-300 px-4 py-2",children:n%3===0?"Admin":"User"}),e.jsx("td",{className:"border border-secondary-300 px-4 py-2",children:e.jsx("span",{className:q("px-2 py-1 rounded-full text-xs font-medium",n%2===0?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"),children:n%2===0?"Active":"Pending"})})]},n))})]})})]})]})})};var Z,G,Q;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Watermark content="CONFIDENTIAL">
      <SampleContent />
    </Watermark>
}`,...(Q=(G=N.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var H,U,$;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Watermark content="My Company © 2024">
      <SampleContent />
    </Watermark>
}`,...($=(U=S.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var K,Y,_;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Watermark content={["DRAFT", "DO NOT DISTRIBUTE"]}>
      <SampleContent />
    </Watermark>
}`,...(_=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var J,X,ee;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Low Opacity (0.1)</h3>
        <Watermark content="WATERMARK" opacity={0.1}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Medium Opacity (0.3)</h3>
        <Watermark content="WATERMARK" opacity={0.3}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">High Opacity (0.6)</h3>
        <Watermark content="WATERMARK" opacity={0.6}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
}`,...(ee=(X=C.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,ae,ne;W.parameters={...W.parameters,docs:{...(te=W.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">No Rotation (0°)</h3>
        <Watermark content="HORIZONTAL" rotate={0}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Default Rotation (-20°)</h3>
        <Watermark content="DIAGONAL" rotate={-20}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Vertical Rotation (-90°)</h3>
        <Watermark content="VERTICAL" rotate={-90}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
}`,...(ne=(ae=W.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,se,oe;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Small Font (12px)</h3>
        <Watermark content="Small Watermark" fontSize={12}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Medium Font (16px - Default)
        </h3>
        <Watermark content="Medium Watermark" fontSize={16}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Large Font (24px)</h3>
        <Watermark content="Large Watermark" fontSize={24}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
}`,...(oe=(se=I.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,le,de;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Red Watermark</h3>
        <Watermark content="URGENT" fontColor="rgba(239, 68, 68, 0.3)">
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Blue Watermark</h3>
        <Watermark content="INTERNAL USE" fontColor="rgba(59, 130, 246, 0.25)">
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Green Watermark</h3>
        <Watermark content="APPROVED" fontColor="rgba(34, 197, 94, 0.3)">
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
}`,...(de=(le=D.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,me,he;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Dense Pattern (small gap)
        </h3>
        <Watermark content="DENSE" gap={[60, 60]}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Sparse Pattern (large gap)
        </h3>
        <Watermark content="SPARSE" gap={[200, 200]}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Custom Offset</h3>
        <Watermark content="OFFSET" offset={[100, 50]}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
}`,...(he=(me=w.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var pe,ue,xe;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Bold Font</h3>
        <Watermark content="BOLD TEXT" fontWeight="bold">
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Italic Font</h3>
        <Watermark content="Italic Text" fontStyle="italic">
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Custom Font Family</h3>
        <Watermark content="Monospace Text" fontFamily="monospace">
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
}`,...(xe=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:xe.source}}};var ge,be,fe;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">SVG Logo Watermark</h3>
        <Watermark image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMikiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjYpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgo8cGF0aCBkPSJNMTIgMkw2IDhIMTBWMTZIMTRWOEgxOEwxMiAyWiIvPgo8L3N2Zz4KPC9zdmc+" gap={[150, 150]} opacity={0.8}>
          <SampleContent />
        </Watermark>
      </div>
    </div>
}`,...(fe=(be=M.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ve,ye,je;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Draft Document</h3>
        <Watermark content={["DRAFT", new Date().toLocaleDateString()]} fontColor="rgba(234, 179, 8, 0.3)" rotate={-45}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Confidential</h3>
        <Watermark content="CONFIDENTIAL" fontColor="rgba(239, 68, 68, 0.4)" fontWeight="bold" fontSize={18}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Sample/Preview</h3>
        <Watermark content={["SAMPLE", "NOT FOR PRODUCTION"]} fontColor="rgba(107, 114, 128, 0.3)" rotate={0} gap={[120, 120]}>
          <SampleContent height="h-64" />
        </Watermark>
      </div>
    </div>
}`,...(je=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:je.source}}};var Ne,Se,ke;R.parameters={...R.parameters,docs:{...(Ne=R.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState("WATERMARK");
    const [opacity, setOpacity] = useState(0.15);
    const [rotation, setRotation] = useState(-20);
    const [fontSize, setFontSize] = useState(16);
    const [color, setColor] = useState("#000000");
    return <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border space-y-4">
          <h3 className="text-lg font-semibold">Watermark Controls</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Text</label>
              <input type="text" value={text} onChange={e => setText(e.target.value)} className="w-full px-3 py-2 border border-secondary-300 rounded-md text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Opacity: {opacity}
              </label>
              <input type="range" min="0.05" max="0.8" step="0.05" value={opacity} onChange={e => setOpacity(parseFloat(e.target.value))} className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Rotation: {rotation}°
              </label>
              <input type="range" min="-90" max="90" step="5" value={rotation} onChange={e => setRotation(parseInt(e.target.value))} className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Font Size: {fontSize}px
              </label>
              <input type="range" min="12" max="32" step="2" value={fontSize} onChange={e => setFontSize(parseInt(e.target.value))} className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Color</label>
              <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-full h-9 border border-secondary-300 rounded-md" />
            </div>
          </div>
        </div>

        <Watermark content={text} opacity={opacity} rotate={rotation} fontSize={fontSize} fontColor={\`\${color}\${Math.round(opacity * 255).toString(16).padStart(2, "0")}\`}>
          <SampleContent />
        </Watermark>
      </div>;
  }
}`,...(ke=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var Ce,We,Ie;E.parameters={...E.parameters,docs:{...(Ce=E.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <Watermark content={["CONFIDENTIAL", "© 2024 My Company"]}>
      <div className="space-y-8">
        <SampleContent />
        <SampleContent />
        <SampleContent />
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Data Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-secondary-300">
              <thead className="bg-secondary-50">
                <tr>
                  <th className="border border-secondary-300 px-4 py-2 text-left">
                    Name
                  </th>
                  <th className="border border-secondary-300 px-4 py-2 text-left">
                    Email
                  </th>
                  <th className="border border-secondary-300 px-4 py-2 text-left">
                    Role
                  </th>
                  <th className="border border-secondary-300 px-4 py-2 text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({
                length: 8
              }, (_, i) => <tr key={i} className="hover:bg-secondary-50">
                    <td className="border border-secondary-300 px-4 py-2">
                      User {i + 1}
                    </td>
                    <td className="border border-secondary-300 px-4 py-2">
                      user{i + 1}@example.com
                    </td>
                    <td className="border border-secondary-300 px-4 py-2">
                      {i % 3 === 0 ? "Admin" : "User"}
                    </td>
                    <td className="border border-secondary-300 px-4 py-2">
                      <span className={clsx("px-2 py-1 rounded-full text-xs font-medium", i % 2 === 0 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800")}>
                        {i % 2 === 0 ? "Active" : "Pending"}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Watermark>
}`,...(Ie=(We=E.parameters)==null?void 0:We.docs)==null?void 0:Ie.source}}};const ze=["Default","CustomText","MultilineText","DifferentOpacity","DifferentRotations","DifferentSizes","CustomColors","CustomSpacing","FontStyles","ImageWatermark","StatusWatermarks","InteractiveContent","LargeDocument"];export{D as CustomColors,w as CustomSpacing,S as CustomText,N as Default,C as DifferentOpacity,W as DifferentRotations,I as DifferentSizes,A as FontStyles,M as ImageWatermark,R as InteractiveContent,E as LargeDocument,k as MultilineText,T as StatusWatermarks,ze as __namedExportsOrder,Pe as default};
