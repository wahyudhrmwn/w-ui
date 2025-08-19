import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as ue}from"./index-B-lxVbXh.js";import{R as g,r as he}from"./index-DkvSDgFW.js";import{c as v}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const q={sm:{width:"80px",height:"16px"},md:{width:"120px",height:"20px"},lg:{width:"200px",height:"24px"},xl:{width:"300px",height:"32px"}},ge={pulse:"animate-pulse",wave:"animate-wave",none:""},ve={none:"space-y-0",sm:"space-y-1",md:"space-y-2",lg:"space-y-4"},s=g.forwardRef(({variant:a="text",width:t,height:r,size:i,animation:d="pulse",className:l,children:o,...c},h)=>{let n={};if(i&&!t&&!r?n={width:q[i].width,height:q[i].height}:(t&&(n.width=typeof t=="number"?`${t}px`:t),r&&(n.height=typeof r=="number"?`${r}px`:r)),!n.width&&!n.height)switch(a){case"text":n={width:"100%",height:"20px"};break;case"rectangle":n={width:"100%",height:"200px"};break;case"circle":n={width:"48px",height:"48px"};break;case"rounded":n={width:"100%",height:"120px"};break}return e.jsx("div",{ref:h,className:v("bg-secondary-200 bg-gradient-to-r from-secondary-200 via-secondary-300 to-secondary-200 bg-size-200 bg-pos-0",a==="text"&&"rounded",a==="rectangle"&&"rounded-none",a==="circle"&&"rounded-full",a==="rounded"&&"rounded-lg",ge[d],l),style:n,...c,children:o})});s.displayName="Skeleton";const x=g.forwardRef(({count:a=3,spacing:t="md",skeletonProps:r={},className:i,loading:d=!0,children:l,...o},c)=>!d&&l?e.jsx(e.Fragment,{children:l}):e.jsx("div",{ref:c,className:v(ve[t],i),...o,children:Array.from({length:a},(h,n)=>e.jsx(s,{...r},n))}));x.displayName="SkeletonGroup";const m=g.forwardRef(({showAvatar:a=!0,textLines:t=3,showActions:r=!0,loading:i=!0,children:d,className:l,...o},c)=>!i&&d?e.jsx(e.Fragment,{children:d}):e.jsxs("div",{ref:c,className:v("p-6 bg-white border border-secondary-200 rounded-lg",l),...o,children:[a&&e.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[e.jsx(s,{variant:"circle",width:48,height:48}),e.jsxs("div",{className:"space-y-2 flex-1",children:[e.jsx(s,{variant:"text",width:"40%",height:16}),e.jsx(s,{variant:"text",width:"60%",height:14})]})]}),e.jsx(s,{variant:"rounded",height:200,className:"mb-4"}),e.jsx("div",{className:"space-y-2 mb-4",children:Array.from({length:t},(h,n)=>e.jsx(s,{variant:"text",width:n===t-1?"70%":"100%",height:16},n))}),r&&e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(s,{variant:"rounded",width:80,height:32}),e.jsx(s,{variant:"rounded",width:80,height:32}),e.jsx(s,{variant:"rounded",width:60,height:32})]})]}));m.displayName="SkeletonCard";const u=g.forwardRef(({rows:a=5,columns:t=4,showHeader:r=!0,loading:i=!0,children:d,className:l,...o},c)=>!i&&d?e.jsx(e.Fragment,{children:d}):e.jsxs("div",{ref:c,className:v("bg-white border border-secondary-200 rounded-lg overflow-hidden",l),...o,children:[r&&e.jsx("div",{className:"bg-secondary-50 px-6 py-4 border-b border-secondary-200",children:e.jsx("div",{className:"grid gap-4",style:{gridTemplateColumns:`repeat(${t}, 1fr)`},children:Array.from({length:t},(h,n)=>e.jsx(s,{variant:"text",width:"80%",height:16},`header-${n}`))})}),e.jsx("div",{className:"divide-y divide-secondary-200",children:Array.from({length:a},(h,n)=>e.jsx("div",{className:"px-6 py-4",children:e.jsx("div",{className:"grid gap-4",style:{gridTemplateColumns:`repeat(${t}, 1fr)`},children:Array.from({length:t},(ye,T)=>e.jsx(s,{variant:"text",width:T===0?"60%":"90%",height:16},`cell-${n}-${T}`))})},`row-${n}`))})]}));u.displayName="SkeletonTable";const p=g.forwardRef(({count:a=5,showAvatar:t=!0,showSecondary:r=!0,loading:i=!0,children:d,className:l,...o},c)=>!i&&d?e.jsx(e.Fragment,{children:d}):e.jsx("div",{ref:c,className:v("bg-white border border-secondary-200 rounded-lg overflow-hidden",l),...o,children:e.jsx("div",{className:"divide-y divide-secondary-200",children:Array.from({length:a},(h,n)=>e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[t&&e.jsx(s,{variant:"circle",width:40,height:40}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(s,{variant:"text",width:"70%",height:16}),r&&e.jsx(s,{variant:"text",width:"50%",height:14})]}),e.jsx(s,{variant:"rounded",width:60,height:24})]})},`list-item-${n}`))})}));p.displayName="SkeletonList";try{s.displayName="Skeleton",s.__docgenInfo={description:"",displayName:"Skeleton",props:{variant:{defaultValue:{value:"text"},description:"Variant bentuk skeleton",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rounded"'},{value:'"text"'},{value:'"rectangle"'}]}},width:{defaultValue:null,description:"Lebar skeleton (px atau %)",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"Tinggi skeleton (px atau %)",name:"height",required:!1,type:{name:"string | number"}},size:{defaultValue:null,description:"Ukuran preset skeleton",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},animation:{defaultValue:{value:"pulse"},description:"Animasi skeleton",name:"animation",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"pulse"'},{value:'"wave"'}]}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children untuk skeleton wrapper",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{x.displayName="SkeletonGroup",x.__docgenInfo={description:"",displayName:"SkeletonGroup",props:{count:{defaultValue:{value:"5"},description:"Jumlah skeleton yang ditampilkan",name:"count",required:!1,type:{name:"number"}},spacing:{defaultValue:{value:"md"},description:"Space antara skeleton",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},skeletonProps:{defaultValue:{value:"{}"},description:"Props untuk setiap skeleton",name:"skeletonProps",required:!1,type:{name:'Omit<SkeletonProps, "children">'}},className:{defaultValue:null,description:"Custom className untuk container",name:"className",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"true"},description:"Loading state",name:"loading",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Children yang akan ditampilkan setelah loading",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{m.displayName="SkeletonCard",m.__docgenInfo={description:"",displayName:"SkeletonCard",props:{showAvatar:{defaultValue:{value:"true"},description:"Apakah menampilkan avatar",name:"showAvatar",required:!1,type:{name:"boolean"}},textLines:{defaultValue:{value:"3"},description:"Jumlah baris text",name:"textLines",required:!1,type:{name:"number"}},showActions:{defaultValue:{value:"true"},description:"Apakah menampilkan actions",name:"showActions",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"true"},description:"Loading state",name:"loading",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Children content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{u.displayName="SkeletonTable",u.__docgenInfo={description:"",displayName:"SkeletonTable",props:{rows:{defaultValue:{value:"5"},description:"Jumlah baris",name:"rows",required:!1,type:{name:"number"}},columns:{defaultValue:{value:"4"},description:"Jumlah kolom",name:"columns",required:!1,type:{name:"number"}},showHeader:{defaultValue:{value:"true"},description:"Apakah menampilkan header",name:"showHeader",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"true"},description:"Loading state",name:"loading",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Children content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{p.displayName="SkeletonList",p.__docgenInfo={description:"",displayName:"SkeletonList",props:{count:{defaultValue:{value:"5"},description:"Jumlah items",name:"count",required:!1,type:{name:"number"}},showAvatar:{defaultValue:{value:"true"},description:"Apakah menampilkan avatar",name:"showAvatar",required:!1,type:{name:"boolean"}},showSecondary:{defaultValue:{value:"true"},description:"Apakah menampilkan secondary text",name:"showSecondary",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"true"},description:"Loading state",name:"loading",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Children content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Se={title:"Data Display/Skeleton",component:s,parameters:{layout:"centered",docs:{description:{component:"Komponen Skeleton untuk loading placeholder dengan berbagai bentuk, ukuran, dan animasi. Tersedia juga pre-built patterns untuk card, table, dan list."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","rectangle","circle","rounded"],description:"Bentuk skeleton"},size:{control:"select",options:["sm","md","lg","xl"],description:"Ukuran preset"},animation:{control:"select",options:["pulse","wave","none"],description:"Animasi skeleton"},width:{control:"text",description:"Lebar custom (px atau %)"},height:{control:"text",description:"Tinggi custom (px atau %)"}},args:{animation:"pulse"}},y={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(s,{...a})}),args:{variant:"text"}},N={render:a=>e.jsxs("div",{className:"p-4 space-y-2",children:[e.jsx(s,{...a,width:"100%"}),e.jsx(s,{...a,width:"90%"}),e.jsx(s,{...a,width:"75%"})]}),args:{variant:"text"}},b={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(s,{...a})}),args:{variant:"rectangle",width:300,height:200}},f={render:a=>e.jsxs("div",{className:"p-4 flex space-x-4",children:[e.jsx(s,{...a,width:40,height:40}),e.jsx(s,{...a,width:64,height:64}),e.jsx(s,{...a,width:96,height:96})]}),args:{variant:"circle"}},j={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(s,{...a})}),args:{variant:"rounded",width:300,height:120}},w={render:()=>e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"Small"}),e.jsx(s,{variant:"text",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"Medium"}),e.jsx(s,{variant:"text",size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"Large"}),e.jsx(s,{variant:"text",size:"lg"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"Extra Large"}),e.jsx(s,{variant:"text",size:"xl"})]})]})},k={render:()=>e.jsxs("div",{className:"p-4 space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"Pulse Animation"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{variant:"text",animation:"pulse"}),e.jsx(s,{variant:"text",animation:"pulse",width:"80%"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"No Animation"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{variant:"text",animation:"none"}),e.jsx(s,{variant:"text",animation:"none",width:"80%"})]})]})]})},S={render:()=>e.jsxs("div",{className:"p-4 space-y-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"Default Group (3 items)"}),e.jsx(x,{})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"Custom Count (5 items)"}),e.jsx(x,{count:5})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"Large Spacing"}),e.jsx(x,{count:3,spacing:"lg"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"Custom Props"}),e.jsx(x,{count:4,skeletonProps:{variant:"rounded",height:60},spacing:"md"})]})]})},L={render:()=>e.jsxs("div",{className:"p-4 grid gap-6 max-w-4xl",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Basic Card"}),e.jsx(m,{})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Without Avatar"}),e.jsx(m,{showAvatar:!1})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"More Text Lines"}),e.jsx(m,{textLines:5})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Without Actions"}),e.jsx(m,{showActions:!1})]})]})},C={render:()=>e.jsxs("div",{className:"p-4 space-y-6 max-w-4xl",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Basic Table (5x4)"}),e.jsx(u,{})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Custom Size (3x6)"}),e.jsx(u,{rows:3,columns:6})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Without Header"}),e.jsx(u,{showHeader:!1})]})]})},A={render:()=>e.jsxs("div",{className:"p-4 space-y-6 max-w-2xl",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Basic List"}),e.jsx(p,{})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Without Avatar"}),e.jsx(p,{showAvatar:!1})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Without Secondary Text"}),e.jsx(p,{showSecondary:!1})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"More Items"}),e.jsx(p,{count:8})]})]})},_={render:()=>{const[a,t]=he.useState({card:!0,table:!0,list:!0}),r=i=>{t(d=>({...d,[i]:!d[i]})),ue(`${i}-loading-toggled`)()};return e.jsxs("div",{className:"p-6 space-y-8 max-w-4xl",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Interactive Loading States"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("button",{onClick:()=>r("card"),className:"px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700",children:["Toggle Card: ",a.card?"Loading":"Loaded"]}),e.jsxs("button",{onClick:()=>r("table"),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700",children:["Toggle Table: ",a.table?"Loading":"Loaded"]}),e.jsxs("button",{onClick:()=>r("list"),className:"px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700",children:["Toggle List: ",a.list?"Loading":"Loaded"]})]}),e.jsxs("div",{className:"grid gap-8 lg:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-medium mb-4",children:"Card Component"}),e.jsx(m,{loading:a.card,children:e.jsxs("div",{className:"p-6 bg-white border border-secondary-200 rounded-lg",children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"Profile",className:"w-12 h-12 rounded-full"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold",children:"John Doe"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"Software Engineer"})]})]}),e.jsx("img",{src:"https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",alt:"Content",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.jsx("p",{className:"text-secondary-700 mb-4",children:"This is the actual content that appears after loading. The skeleton provides a nice placeholder while data is being fetched."}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{className:"px-4 py-2 bg-primary-600 text-white rounded-lg text-sm",children:"Like"}),e.jsx("button",{className:"px-4 py-2 bg-secondary-200 text-secondary-700 rounded-lg text-sm",children:"Share"}),e.jsx("button",{className:"px-4 py-2 bg-secondary-200 text-secondary-700 rounded-lg text-sm",children:"Save"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-medium mb-4",children:"List Component"}),e.jsx(p,{loading:a.list,count:4,children:e.jsx("div",{className:"bg-white border border-secondary-200 rounded-lg overflow-hidden",children:e.jsxs("div",{className:"divide-y divide-secondary-200",children:[e.jsxs("div",{className:"p-4 flex items-center space-x-3",children:[e.jsx("div",{className:"w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold",children:"A"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-semibold",children:"Alice Johnson"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"Product Manager"})]}),e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full",children:"Online"})]}),e.jsxs("div",{className:"p-4 flex items-center space-x-3",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold",children:"B"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-semibold",children:"Bob Smith"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"Designer"})]}),e.jsx("span",{className:"px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full",children:"Away"})]}),e.jsxs("div",{className:"p-4 flex items-center space-x-3",children:[e.jsx("div",{className:"w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold",children:"C"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-semibold",children:"Carol Davis"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"Developer"})]}),e.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full",children:"Offline"})]})]})})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-medium mb-4",children:"Table Component"}),e.jsx(u,{loading:a.table,rows:3,columns:4,children:e.jsxs("div",{className:"bg-white border border-secondary-200 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-secondary-50 px-6 py-4 border-b border-secondary-200",children:e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsx("span",{className:"text-sm font-medium text-secondary-700",children:"Name"}),e.jsx("span",{className:"text-sm font-medium text-secondary-700",children:"Email"}),e.jsx("span",{className:"text-sm font-medium text-secondary-700",children:"Role"}),e.jsx("span",{className:"text-sm font-medium text-secondary-700",children:"Status"})]})}),e.jsxs("div",{className:"divide-y divide-secondary-200",children:[e.jsxs("div",{className:"px-6 py-4 grid grid-cols-4 gap-4",children:[e.jsx("span",{className:"text-sm",children:"John Doe"}),e.jsx("span",{className:"text-sm",children:"john@example.com"}),e.jsx("span",{className:"text-sm",children:"Admin"}),e.jsx("span",{className:"text-sm",children:"Active"})]}),e.jsxs("div",{className:"px-6 py-4 grid grid-cols-4 gap-4",children:[e.jsx("span",{className:"text-sm",children:"Jane Smith"}),e.jsx("span",{className:"text-sm",children:"jane@example.com"}),e.jsx("span",{className:"text-sm",children:"User"}),e.jsx("span",{className:"text-sm",children:"Inactive"})]}),e.jsxs("div",{className:"px-6 py-4 grid grid-cols-4 gap-4",children:[e.jsx("span",{className:"text-sm",children:"Bob Johnson"}),e.jsx("span",{className:"text-sm",children:"bob@example.com"}),e.jsx("span",{className:"text-sm",children:"Moderator"}),e.jsx("span",{className:"text-sm",children:"Active"})]})]})]})})]})]})},parameters:{docs:{description:{story:"Demo interaktif untuk melihat transisi dari skeleton ke konten sebenarnya. Klik tombol untuk toggle loading state."}}}};var V,D,R;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Skeleton {...args} />
    </div>,
  args: {
    variant: "text"
  }
}`,...(R=(D=y.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var J,z,B;N.parameters={...N.parameters,docs:{...(J=N.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <div className="p-4 space-y-2">
      <Skeleton {...args} width="100%" />
      <Skeleton {...args} width="90%" />
      <Skeleton {...args} width="75%" />
    </div>,
  args: {
    variant: "text"
  }
}`,...(B=(z=N.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var P,G,M;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Skeleton {...args} />
    </div>,
  args: {
    variant: "rectangle",
    width: 300,
    height: 200
  }
}`,...(M=(G=b.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var W,E,$;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <div className="p-4 flex space-x-4">
      <Skeleton {...args} width={40} height={40} />
      <Skeleton {...args} width={64} height={64} />
      <Skeleton {...args} width={96} height={96} />
    </div>,
  args: {
    variant: "circle"
  }
}`,...($=(E=f.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var I,H,O;j.parameters={...j.parameters,docs:{...(I=j.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Skeleton {...args} />
    </div>,
  args: {
    variant: "rounded",
    width: 300,
    height: 120
  }
}`,...(O=(H=j.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var F,U,K;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="p-4 space-y-4">
      <div>
        <p className="text-sm text-secondary-600 mb-2">Small</p>
        <Skeleton variant="text" size="sm" />
      </div>
      <div>
        <p className="text-sm text-secondary-600 mb-2">Medium</p>
        <Skeleton variant="text" size="md" />
      </div>
      <div>
        <p className="text-sm text-secondary-600 mb-2">Large</p>
        <Skeleton variant="text" size="lg" />
      </div>
      <div>
        <p className="text-sm text-secondary-600 mb-2">Extra Large</p>
        <Skeleton variant="text" size="xl" />
      </div>
    </div>
}`,...(K=(U=w.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Q,X,Y;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="p-4 space-y-6">
      <div>
        <p className="text-sm text-secondary-600 mb-2">Pulse Animation</p>
        <div className="space-y-2">
          <Skeleton variant="text" animation="pulse" />
          <Skeleton variant="text" animation="pulse" width="80%" />
        </div>
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-2">No Animation</p>
        <div className="space-y-2">
          <Skeleton variant="text" animation="none" />
          <Skeleton variant="text" animation="none" width="80%" />
        </div>
      </div>
    </div>
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="p-4 space-y-8">
      <div>
        <p className="text-sm text-secondary-600 mb-2">
          Default Group (3 items)
        </p>
        <SkeletonGroup />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-2">
          Custom Count (5 items)
        </p>
        <SkeletonGroup count={5} />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-2">Large Spacing</p>
        <SkeletonGroup count={3} spacing="lg" />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-2">Custom Props</p>
        <SkeletonGroup count={4} skeletonProps={{
        variant: "rounded",
        height: 60
      }} spacing="md" />
      </div>
    </div>
}`,...(ae=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,ne,te;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="p-4 grid gap-6 max-w-4xl">
      <div>
        <p className="text-sm text-secondary-600 mb-4">Basic Card</p>
        <SkeletonCard />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">Without Avatar</p>
        <SkeletonCard showAvatar={false} />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">More Text Lines</p>
        <SkeletonCard textLines={5} />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">Without Actions</p>
        <SkeletonCard showActions={false} />
      </div>
    </div>
}`,...(te=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,ie,de;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="p-4 space-y-6 max-w-4xl">
      <div>
        <p className="text-sm text-secondary-600 mb-4">Basic Table (5x4)</p>
        <SkeletonTable />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">Custom Size (3x6)</p>
        <SkeletonTable rows={3} columns={6} />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">Without Header</p>
        <SkeletonTable showHeader={false} />
      </div>
    </div>
}`,...(de=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,oe,ce;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="p-4 space-y-6 max-w-2xl">
      <div>
        <p className="text-sm text-secondary-600 mb-4">Basic List</p>
        <SkeletonList />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">Without Avatar</p>
        <SkeletonList showAvatar={false} />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">
          Without Secondary Text
        </p>
        <SkeletonList showSecondary={false} />
      </div>

      <div>
        <p className="text-sm text-secondary-600 mb-4">More Items</p>
        <SkeletonList count={8} />
      </div>
    </div>
}`,...(ce=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var me,pe,xe;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [loadingStates, setLoadingStates] = useState({
      card: true,
      table: true,
      list: true
    });
    const toggleLoading = (type: keyof typeof loadingStates) => {
      setLoadingStates(prev => ({
        ...prev,
        [type]: !prev[type]
      }));
      action(\`\${type}-loading-toggled\`)();
    };
    return <div className="p-6 space-y-8 max-w-4xl">
        <h3 className="text-lg font-semibold">Interactive Loading States</h3>

        <div className="flex gap-4">
          <button onClick={() => toggleLoading("card")} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            Toggle Card: {loadingStates.card ? "Loading" : "Loaded"}
          </button>
          <button onClick={() => toggleLoading("table")} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Toggle Table: {loadingStates.table ? "Loading" : "Loaded"}
          </button>
          <button onClick={() => toggleLoading("list")} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Toggle List: {loadingStates.list ? "Loading" : "Loaded"}
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Card */}
          <div>
            <h4 className="text-md font-medium mb-4">Card Component</h4>
            <SkeletonCard loading={loadingStates.card}>
              <div className="p-6 bg-white border border-secondary-200 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="w-12 h-12 rounded-full" />
                  <div>
                    <h5 className="font-semibold">John Doe</h5>
                    <p className="text-sm text-secondary-600">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80" alt="Content" className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-secondary-700 mb-4">
                  This is the actual content that appears after loading. The
                  skeleton provides a nice placeholder while data is being
                  fetched.
                </p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm">
                    Like
                  </button>
                  <button className="px-4 py-2 bg-secondary-200 text-secondary-700 rounded-lg text-sm">
                    Share
                  </button>
                  <button className="px-4 py-2 bg-secondary-200 text-secondary-700 rounded-lg text-sm">
                    Save
                  </button>
                </div>
              </div>
            </SkeletonCard>
          </div>

          {/* List */}
          <div>
            <h4 className="text-md font-medium mb-4">List Component</h4>
            <SkeletonList loading={loadingStates.list} count={4}>
              <div className="bg-white border border-secondary-200 rounded-lg overflow-hidden">
                <div className="divide-y divide-secondary-200">
                  <div className="p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
                      A
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold">Alice Johnson</h5>
                      <p className="text-sm text-secondary-600">
                        Product Manager
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Online
                    </span>
                  </div>
                  <div className="p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                      B
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold">Bob Smith</h5>
                      <p className="text-sm text-secondary-600">Designer</p>
                    </div>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      Away
                    </span>
                  </div>
                  <div className="p-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold">
                      C
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold">Carol Davis</h5>
                      <p className="text-sm text-secondary-600">Developer</p>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      Offline
                    </span>
                  </div>
                </div>
              </div>
            </SkeletonList>
          </div>
        </div>

        {/* Table */}
        <div>
          <h4 className="text-md font-medium mb-4">Table Component</h4>
          <SkeletonTable loading={loadingStates.table} rows={3} columns={4}>
            <div className="bg-white border border-secondary-200 rounded-lg overflow-hidden">
              <div className="bg-secondary-50 px-6 py-4 border-b border-secondary-200">
                <div className="grid grid-cols-4 gap-4">
                  <span className="text-sm font-medium text-secondary-700">
                    Name
                  </span>
                  <span className="text-sm font-medium text-secondary-700">
                    Email
                  </span>
                  <span className="text-sm font-medium text-secondary-700">
                    Role
                  </span>
                  <span className="text-sm font-medium text-secondary-700">
                    Status
                  </span>
                </div>
              </div>
              <div className="divide-y divide-secondary-200">
                <div className="px-6 py-4 grid grid-cols-4 gap-4">
                  <span className="text-sm">John Doe</span>
                  <span className="text-sm">john@example.com</span>
                  <span className="text-sm">Admin</span>
                  <span className="text-sm">Active</span>
                </div>
                <div className="px-6 py-4 grid grid-cols-4 gap-4">
                  <span className="text-sm">Jane Smith</span>
                  <span className="text-sm">jane@example.com</span>
                  <span className="text-sm">User</span>
                  <span className="text-sm">Inactive</span>
                </div>
                <div className="px-6 py-4 grid grid-cols-4 gap-4">
                  <span className="text-sm">Bob Johnson</span>
                  <span className="text-sm">bob@example.com</span>
                  <span className="text-sm">Moderator</span>
                  <span className="text-sm">Active</span>
                </div>
              </div>
            </div>
          </SkeletonTable>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demo interaktif untuk melihat transisi dari skeleton ke konten sebenarnya. Klik tombol untuk toggle loading state."
      }
    }
  }
}`,...(xe=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};const Le=["Default","Text","Rectangle","Circle","Rounded","Sizes","Animations","Group","Card","Table","List","LoadingStates"];export{k as Animations,L as Card,f as Circle,y as Default,S as Group,A as List,_ as LoadingStates,b as Rectangle,j as Rounded,w as Sizes,C as Table,N as Text,Le as __namedExportsOrder,Se as default};
