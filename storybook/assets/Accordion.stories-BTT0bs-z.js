import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as q}from"./index-B-lxVbXh.js";import{R as u,r as E}from"./index-DkvSDgFW.js";import{c as m}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const M={sm:{header:"px-3 py-2 text-sm",content:"px-3 pb-3 text-sm",icon:"w-4 h-4"},md:{header:"px-4 py-3 text-base",content:"px-4 pb-4 text-base",icon:"w-5 h-5"},lg:{header:"px-6 py-4 text-lg",content:"px-6 pb-6 text-lg",icon:"w-6 h-6"}},V={default:{container:"bg-white",header:"bg-white hover:bg-secondary-50 border-b border-secondary-200",headerOpen:"bg-secondary-50",content:"bg-white"},bordered:{container:"border border-secondary-200 rounded-lg overflow-hidden",header:"bg-white hover:bg-secondary-50 border-b border-secondary-200 last:border-b-0",headerOpen:"bg-secondary-50 border-b border-secondary-200",content:"bg-white border-b border-secondary-200 last:border-b-0"},filled:{container:"bg-secondary-50 rounded-lg overflow-hidden",header:"bg-secondary-100 hover:bg-secondary-200 border-b border-secondary-200 last:border-b-0",headerOpen:"bg-secondary-200 border-b border-secondary-200",content:"bg-white border-b border-secondary-200 last:border-b-0"}},Pe=({className:s})=>e.jsx("svg",{className:s,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),R=u.forwardRef(({item:s,isOpen:t,onToggle:o,size:d="md",variant:r="default",toggleIcon:c,iconPosition:n="right",className:x,...g},L)=>{const h=u.useRef(null),[_,D]=u.useState(0);u.useEffect(()=>{h.current&&D(t?h.current.scrollHeight:0)},[t,s.content]);const F=()=>{s.disabled||o()},i=c||e.jsx(Pe,{className:M[d].icon});return e.jsxs("div",{ref:L,className:m("accordion-item",x),...g,children:[e.jsxs("button",{onClick:F,disabled:s.disabled,className:m("w-full flex items-center justify-between text-left font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset",M[d].header,t?V[r].headerOpen:V[r].header,s.disabled&&"opacity-50 cursor-not-allowed",n==="left"&&"flex-row-reverse"),"aria-expanded":t,"aria-controls":`accordion-content-${s.id}`,children:[e.jsx("span",{className:m(n==="left"&&"text-right flex-1"),children:s.title}),e.jsx("span",{className:m("flex-shrink-0 transition-transform duration-200",n==="left"?"mr-2":"ml-2",t&&"transform rotate-180"),children:i})]}),e.jsx("div",{style:{height:`${_}px`},className:"overflow-hidden transition-all duration-300 ease-in-out",children:e.jsx("div",{ref:h,id:`accordion-content-${s.id}`,className:m(M[d].content,V[r].content,"text-secondary-700"),children:s.content})})]})});R.displayName="AccordionItem";const a=u.forwardRef(({items:s,defaultOpen:t=[],exclusive:o=!1,size:d="md",variant:r="default",onChange:c,className:n,toggleIcon:x,iconPosition:g="right",...L},h)=>{const[_,D]=u.useState(()=>typeof t=="string"?[t]:Array.isArray(t)?t:[]),F=u.useCallback(i=>{D(p=>{let f;return o?f=p.includes(i)?[]:[i]:f=p.includes(i)?p.filter(Oe=>Oe!==i):[...p,i],c==null||c(f),f})},[o,c]);return e.jsx("div",{ref:h,className:m("accordion",V[r].container,n),...L,children:s.map((i,p)=>e.jsx(R,{item:i,isOpen:_.includes(i.id),onToggle:()=>F(i.id),size:d,variant:r,toggleIcon:x,iconPosition:g,className:m(r==="default"&&p!==s.length-1&&"border-b border-secondary-200")},i.id))})});a.displayName="Accordion";try{R.displayName="AccordionItem",R.__docgenInfo={description:"",displayName:"AccordionItem",props:{item:{defaultValue:null,description:"Data item",name:"item",required:!0,type:{name:"AccordionItemData"}},isOpen:{defaultValue:null,description:"Apakah item terbuka",name:"isOpen",required:!0,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"Callback toggle",name:"onToggle",required:!0,type:{name:"() => void"}},size:{defaultValue:{value:"md"},description:"Ukuran accordion",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"Variant styling",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"bordered"'},{value:'"filled"'}]}},toggleIcon:{defaultValue:null,description:"Custom toggle icon",name:"toggleIcon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:{value:"right"},description:"Posisi icon",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"Array data item accordion",name:"items",required:!0,type:{name:"AccordionItemData[]"}},defaultOpen:{defaultValue:{value:"[]"},description:"Item yang terbuka secara default",name:"defaultOpen",required:!1,type:{name:"string | string[]"}},exclusive:{defaultValue:{value:"false"},description:"Apakah hanya satu item yang bisa terbuka (exclusive)",name:"exclusive",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Ukuran accordion",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"Variant styling",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"bordered"'},{value:'"filled"'}]}},onChange:{defaultValue:null,description:"Callback ketika item dibuka/ditutup",name:"onChange",required:!1,type:{name:"((openItems: string[]) => void)"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},toggleIcon:{defaultValue:null,description:"Custom icon untuk toggle",name:"toggleIcon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:{value:"right"},description:"Posisi icon toggle",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const l=[{id:"item1",title:"What is React?",content:e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Facebook and the community."}),e.jsx("p",{children:"React makes it painless to create interactive UIs with a component-based architecture."})]})},{id:"item2",title:"How do you install React?",content:e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"You can install React in several ways:"}),e.jsxs("ol",{className:"list-decimal list-inside space-y-1",children:[e.jsxs("li",{children:["Using Create React App:"," ",e.jsx("code",{className:"bg-secondary-100 px-2 py-1 rounded text-sm",children:"npx create-react-app my-app"})]}),e.jsxs("li",{children:["Using Vite:"," ",e.jsx("code",{className:"bg-secondary-100 px-2 py-1 rounded text-sm",children:"npm create vite@latest my-app -- --template react"})]}),e.jsxs("li",{children:["Adding to existing project:"," ",e.jsx("code",{className:"bg-secondary-100 px-2 py-1 rounded text-sm",children:"npm install react react-dom"})]})]})]})},{id:"item3",title:"What are React Hooks?",content:e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"Hooks are functions that let you use state and other React features in functional components."}),e.jsx("p",{className:"mb-2",children:"Common hooks include:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"useState"})," - for managing state"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"useEffect"})," - for side effects"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"useContext"})," - for consuming context"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"useReducer"})," - for complex state logic"]})]})]})},{id:"item4",title:"Disabled Item",content:e.jsx("p",{children:"This content won't be visible because the item is disabled."}),disabled:!0}],ze=[{id:"features1",title:"🚀 Performance",content:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"Our application is built with performance in mind:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-1",children:"Fast Loading"}),e.jsx("p",{className:"text-green-700 text-sm",children:"Optimized bundles and lazy loading for quick page loads."})]}),e.jsxs("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-1",children:"Smooth Interactions"}),e.jsx("p",{className:"text-blue-700 text-sm",children:"60fps animations and responsive user interface."})]})]})]})},{id:"features2",title:"🔒 Security",content:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"Security is our top priority with multiple layers of protection:"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("div",{className:"w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"End-to-end Encryption"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"All data is encrypted in transit and at rest."})]})]}),e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("div",{className:"w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Multi-factor Authentication"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"Additional security layers for account protection."})]})]}),e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("div",{className:"w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Regular Security Audits"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"Third-party security assessments and vulnerability testing."})]})]})]})]})},{id:"features3",title:"🎨 Customization",content:e.jsxs("div",{children:[e.jsx("p",{className:"mb-4",children:"Customize the application to match your brand and workflow:"}),e.jsxs("div",{className:"bg-secondary-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Available Themes"}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx("div",{className:"h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded flex items-center justify-center text-white text-xs font-medium",children:"Ocean"}),e.jsx("div",{className:"h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded flex items-center justify-center text-white text-xs font-medium",children:"Sunset"}),e.jsx("div",{className:"h-16 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center text-white text-xs font-medium",children:"Forest"})]})]})]})}],Ve=[{id:"free",title:"Free Plan - $0/month",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 bg-green-50 rounded-lg",children:[e.jsx("span",{className:"text-green-800 font-medium",children:"Perfect for individuals"}),e.jsx("span",{className:"text-2xl font-bold text-green-600",children:"$0"})]}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-green-500",children:"✓"}),e.jsx("span",{children:"Up to 5 projects"})]}),e.jsxs("li",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-green-500",children:"✓"}),e.jsx("span",{children:"Basic templates"})]}),e.jsxs("li",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-green-500",children:"✓"}),e.jsx("span",{children:"Community support"})]}),e.jsxs("li",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-red-500",children:"✗"}),e.jsx("span",{children:"Advanced analytics"})]})]}),e.jsx("button",{className:"w-full py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700",children:"Get Started Free"})]})},{id:"pro",title:"Pro Plan - $19/month",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 bg-blue-50 rounded-lg",children:[e.jsx("span",{className:"text-blue-800 font-medium",children:"For growing teams"}),e.jsx("span",{className:"text-2xl font-bold text-blue-600",children:"$19"})]}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-green-500",children:"✓"}),e.jsx("span",{children:"Unlimited projects"})]}),e.jsxs("li",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-green-500",children:"✓"}),e.jsx("span",{children:"Premium templates"})]}),e.jsxs("li",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-green-500",children:"✓"}),e.jsx("span",{children:"Priority support"})]}),e.jsxs("li",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-green-500",children:"✓"}),e.jsx("span",{children:"Advanced analytics"})]}),e.jsxs("li",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-green-500",children:"✓"}),e.jsx("span",{children:"Team collaboration"})]})]}),e.jsx("button",{className:"w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Upgrade to Pro"})]})}],Me={title:"Layout/Accordion",component:a,parameters:{layout:"centered",docs:{description:{component:"Komponen Accordion untuk konten yang dapat diperluas dan dilipat. Mendukung mode eksklusif/multiple, berbagai ukuran, dan styling yang dapat dikustomisasi."}}},tags:["autodocs"],argTypes:{exclusive:{control:"boolean",description:"Apakah hanya satu item yang bisa terbuka"},size:{control:"select",options:["sm","md","lg"],description:"Ukuran accordion"},variant:{control:"select",options:["default","bordered","filled"],description:"Variant styling"},iconPosition:{control:"select",options:["left","right"],description:"Posisi icon toggle"},items:{control:!1,description:"Array data item accordion"},onChange:{action:"accordion-changed"}},args:{onChange:q("accordion-changed")}},v={render:s=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{...s})}),args:{items:l,defaultOpen:["item1"]}},b={render:s=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{...s})}),args:{items:l,exclusive:!0,defaultOpen:"item1"}},j={render:s=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{...s})}),args:{items:l,exclusive:!1,defaultOpen:["item1","item2"]}},y={render:s=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{...s})}),args:{items:l.slice(0,3),size:"sm",defaultOpen:["item1"]}},N={render:s=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{...s})}),args:{items:l.slice(0,3),size:"md",defaultOpen:["item1"]}},w={render:s=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{...s})}),args:{items:l.slice(0,3),size:"lg",defaultOpen:["item1"]}},k={render:s=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{...s})}),args:{items:l.slice(0,3),variant:"default",defaultOpen:["item1"]}},I={render:s=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{...s})}),args:{items:l.slice(0,3),variant:"bordered",defaultOpen:["item1"]}},A={render:s=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{...s})}),args:{items:l.slice(0,3),variant:"filled",defaultOpen:["item1"]}},S={render:s=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{...s})}),args:{items:l.slice(0,3),iconPosition:"left",variant:"bordered",defaultOpen:["item1"]}},C={render:s=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{...s})}),args:{items:l.slice(0,3),variant:"bordered",toggleIcon:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),defaultOpen:["item1"]}},O={render:()=>e.jsxs("div",{className:"w-full max-w-3xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-6",children:"Product Features"}),e.jsx(a,{items:ze,variant:"bordered",size:"lg",defaultOpen:["features1"],onChange:q("features-changed")})]}),parameters:{docs:{description:{story:"Accordion dengan konten kaya untuk menampilkan fitur produk dengan card, icon, dan layout yang kompleks."}}}},P={render:()=>e.jsxs("div",{className:"w-full max-w-2xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-6",children:"Pricing Plans"}),e.jsx(a,{items:Ve,variant:"filled",exclusive:!0,size:"md",onChange:q("pricing-changed")})]}),parameters:{docs:{description:{story:"Accordion mode eksklusif untuk pricing plans dengan button dan styling yang menarik."}}}},z={render:()=>{const[s,t]=E.useState({exclusive:!1,size:"md",variant:"bordered",iconPosition:"right"}),[o,d]=E.useState(["item1"]),r=(n,x)=>{t(g=>({...g,[n]:x}))},c=n=>{d(n),q("interactive-accordion-changed")(n)};return e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Interactive Accordion Demo"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-secondary-50 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Mode:"}),e.jsxs("select",{value:s.exclusive?"exclusive":"multiple",onChange:n=>r("exclusive",n.target.value==="exclusive"),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:"multiple",children:"Multiple"}),e.jsx("option",{value:"exclusive",children:"Exclusive"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Size:"}),e.jsxs("select",{value:s.size,onChange:n=>r("size",n.target.value),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:"sm",children:"Small"}),e.jsx("option",{value:"md",children:"Medium"}),e.jsx("option",{value:"lg",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Variant:"}),e.jsxs("select",{value:s.variant,onChange:n=>r("variant",n.target.value),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:"default",children:"Default"}),e.jsx("option",{value:"bordered",children:"Bordered"}),e.jsx("option",{value:"filled",children:"Filled"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Icon:"}),e.jsxs("select",{value:s.iconPosition,onChange:n=>r("iconPosition",n.target.value),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:"right",children:"Right"}),e.jsx("option",{value:"left",children:"Left"})]})]})]}),e.jsx("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:e.jsxs("p",{className:"text-blue-800 text-sm",children:[e.jsx("strong",{children:"Open Items:"})," ",o.length===0?"None":o.join(", "),s.exclusive&&o.length>0&&" (Exclusive Mode)"]})}),e.jsx(a,{items:l,exclusive:s.exclusive,size:s.size,variant:s.variant,iconPosition:s.iconPosition,defaultOpen:o,onChange:c})]})},parameters:{docs:{description:{story:"Demo interaktif dengan kontrol untuk mengubah pengaturan accordion secara real-time. Coba ubah mode, ukuran, variant, dan posisi icon!"}}}};var T,U,B;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>,
  args: {
    items: basicItems,
    defaultOpen: ["item1"]
  }
}`,...(B=(U=v.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var H,$,W;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>,
  args: {
    items: basicItems,
    exclusive: true,
    defaultOpen: "item1"
  }
}`,...(W=($=b.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var Q,G,J;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>,
  args: {
    items: basicItems,
    exclusive: false,
    defaultOpen: ["item1", "item2"]
  }
}`,...(J=(G=j.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Y,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>,
  args: {
    items: basicItems.slice(0, 3),
    size: "sm",
    defaultOpen: ["item1"]
  }
}`,...(X=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var Z,ee,se;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>,
  args: {
    items: basicItems.slice(0, 3),
    size: "md",
    defaultOpen: ["item1"]
  }
}`,...(se=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ne,ae,te;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>,
  args: {
    items: basicItems.slice(0, 3),
    size: "lg",
    defaultOpen: ["item1"]
  }
}`,...(te=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,ie,le;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>,
  args: {
    items: basicItems.slice(0, 3),
    variant: "default",
    defaultOpen: ["item1"]
  }
}`,...(le=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,ce,de;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>,
  args: {
    items: basicItems.slice(0, 3),
    variant: "bordered",
    defaultOpen: ["item1"]
  }
}`,...(de=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,pe;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>,
  args: {
    items: basicItems.slice(0, 3),
    variant: "filled",
    defaultOpen: ["item1"]
  }
}`,...(pe=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var xe,ge,he;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>,
  args: {
    items: basicItems.slice(0, 3),
    iconPosition: "left",
    variant: "bordered",
    defaultOpen: ["item1"]
  }
}`,...(he=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,ve,be;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-2xl">
      <Accordion {...args} />
    </div>,
  args: {
    items: basicItems.slice(0, 3),
    variant: "bordered",
    toggleIcon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>,
    defaultOpen: ["item1"]
  }
}`,...(be=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var je,ye,Ne;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-3xl">
      <h3 className="text-xl font-semibold mb-6">Product Features</h3>
      <Accordion items={featureItems} variant="bordered" size="lg" defaultOpen={["features1"]} onChange={action("features-changed")} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Accordion dengan konten kaya untuk menampilkan fitur produk dengan card, icon, dan layout yang kompleks."
      }
    }
  }
}`,...(Ne=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var we,ke,Ie;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl">
      <h3 className="text-xl font-semibold mb-6">Pricing Plans</h3>
      <Accordion items={pricingItems} variant="filled" exclusive={true} size="md" onChange={action("pricing-changed")} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Accordion mode eksklusif untuk pricing plans dengan button dan styling yang menarik."
      }
    }
  }
}`,...(Ie=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};var Ae,Se,Ce;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const [accordionSettings, setAccordionSettings] = useState({
      exclusive: false,
      size: "md" as const,
      variant: "bordered" as const,
      iconPosition: "right" as const
    });
    const [openItems, setOpenItems] = useState<string[]>(["item1"]);
    const handleSettingChange = (key: keyof typeof accordionSettings, value: any) => {
      setAccordionSettings(prev => ({
        ...prev,
        [key]: value
      }));
    };
    const handleAccordionChange = (items: string[]) => {
      setOpenItems(items);
      action("interactive-accordion-changed")(items);
    };
    return <div className="w-full max-w-4xl space-y-6">
        <h3 className="text-xl font-semibold">Interactive Accordion Demo</h3>

        {/* Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-secondary-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-2">Mode:</label>
            <select value={accordionSettings.exclusive ? "exclusive" : "multiple"} onChange={e => handleSettingChange("exclusive", e.target.value === "exclusive")} className="w-full p-2 border rounded text-sm">
              <option value="multiple">Multiple</option>
              <option value="exclusive">Exclusive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Size:</label>
            <select value={accordionSettings.size} onChange={e => handleSettingChange("size", e.target.value)} className="w-full p-2 border rounded text-sm">
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Variant:</label>
            <select value={accordionSettings.variant} onChange={e => handleSettingChange("variant", e.target.value)} className="w-full p-2 border rounded text-sm">
              <option value="default">Default</option>
              <option value="bordered">Bordered</option>
              <option value="filled">Filled</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Icon:</label>
            <select value={accordionSettings.iconPosition} onChange={e => handleSettingChange("iconPosition", e.target.value)} className="w-full p-2 border rounded text-sm">
              <option value="right">Right</option>
              <option value="left">Left</option>
            </select>
          </div>
        </div>

        {/* Status */}
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 text-sm">
            <strong>Open Items:</strong>{" "}
            {openItems.length === 0 ? "None" : openItems.join(", ")}
            {accordionSettings.exclusive && openItems.length > 0 && " (Exclusive Mode)"}
          </p>
        </div>

        {/* Accordion */}
        <Accordion items={basicItems} exclusive={accordionSettings.exclusive} size={accordionSettings.size} variant={accordionSettings.variant} iconPosition={accordionSettings.iconPosition} defaultOpen={openItems} onChange={handleAccordionChange} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demo interaktif dengan kontrol untuk mengubah pengaturan accordion secara real-time. Coba ubah mode, ukuran, variant, dan posisi icon!"
      }
    }
  }
}`,...(Ce=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};const Ee=["Default","Exclusive","Multiple","Small","Medium","Large","DefaultVariant","Bordered","Filled","IconLeft","CustomIcon","FeatureList","PricingFAQ","InteractiveDemo"];export{I as Bordered,C as CustomIcon,v as Default,k as DefaultVariant,b as Exclusive,O as FeatureList,A as Filled,S as IconLeft,z as InteractiveDemo,w as Large,N as Medium,j as Multiple,P as PricingFAQ,y as Small,Ee as __namedExportsOrder,Me as default};
