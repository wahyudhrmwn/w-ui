import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as o}from"./index-B-lxVbXh.js";import{R as V,r as R}from"./index-DkvSDgFW.js";import{c as l}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const h={sm:{text:"text-xs",spacing:"space-x-1",padding:"px-2 py-1",icon:"w-3 h-3"},md:{text:"text-sm",spacing:"space-x-2",padding:"px-3 py-1.5",icon:"w-4 h-4"},lg:{text:"text-base",spacing:"space-x-3",padding:"px-4 py-2",icon:"w-5 h-5"}},Pe=({className:a})=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),He=({className:a})=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),ze=({className:a})=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"})}),s=V.forwardRef(({items:a,separator:H,size:r="md",maxItems:m,className:p,itemClassName:z,showHomeIcon:W=!1,...D},t)=>{const c=V.useMemo(()=>{if(!m||a.length<=m)return a;const n=a[0],i=a.slice(-(m-2));return[n,{label:"...",current:!1,icon:e.jsx(ze,{className:h[r].icon})},...i]},[a,m,r]),u=e.jsx(Pe,{className:l(h[r].icon,"text-secondary-400")}),A=(n,i)=>{const Se=i===c.length-1,Me=i===0,Be=n.label==="...";let v=n.icon;W&&Me&&!n.icon&&(v=e.jsx(He,{className:h[r].icon}));const x=e.jsxs(e.Fragment,{children:[v&&e.jsx("span",{className:"flex-shrink-0",children:v}),e.jsx("span",{className:l(v&&"ml-1"),children:n.label})]}),g=l("inline-flex items-center transition-colors duration-200",h[r].text,h[r].padding,"rounded-md",z);return Be?e.jsx("span",{className:l(g,"text-secondary-400 cursor-default"),children:x},`collapsed-${i}`):n.current||Se?e.jsx("span",{className:l(g,"text-secondary-900 font-medium cursor-default","bg-secondary-100"),"aria-current":n.current?"page":void 0,children:x},n.label):n.href?e.jsx("a",{href:n.href,onClick:n.onClick,className:l(g,"text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50","focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"),children:x},n.label):n.onClick?e.jsx("button",{onClick:n.onClick,className:l(g,"text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50","focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"),children:x},n.label):e.jsx("span",{className:l(g,"text-secondary-600"),children:x},n.label)};return e.jsx("nav",{ref:t,className:l("breadcrumb",p),"aria-label":"Breadcrumb",...D,children:e.jsx("ol",{className:l("flex items-center",h[r].spacing),children:c.map((n,i)=>e.jsxs("li",{className:"flex items-center",children:[A(n,i),i<c.length-1&&e.jsx("span",{className:l("flex items-center justify-center",h[r].spacing.replace("space-x-","mx-")),"aria-hidden":"true",children:H||u})]},`${n.label}-${i}`))})})});s.displayName="Breadcrumb";try{s.displayName="Breadcrumb",s.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"Array item breadcrumb",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},separator:{defaultValue:null,description:"Custom separator",name:"separator",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:"Ukuran breadcrumb",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},maxItems:{defaultValue:null,description:"Maksimal item yang ditampilkan sebelum collapse",name:"maxItems",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Custom className untuk container",name:"className",required:!1,type:{name:"string"}},itemClassName:{defaultValue:null,description:"Custom className untuk item",name:"itemClassName",required:!1,type:{name:"string"}},showHomeIcon:{defaultValue:{value:"false"},description:"Apakah menampilkan icon home untuk item pertama",name:"showHomeIcon",required:!1,type:{name:"boolean"}}}}}catch{}const d=[{label:"Home",href:"/",onClick:o("navigate-home")},{label:"Products",href:"/products",onClick:o("navigate-products")},{label:"Electronics",href:"/products/electronics",onClick:o("navigate-electronics")},{label:"Smartphones",current:!0}],Le=[{label:"Home",href:"/"},{label:"Dashboard",href:"/dashboard"},{label:"Analytics",href:"/dashboard/analytics"},{label:"Reports",href:"/dashboard/analytics/reports"},{label:"Monthly",href:"/dashboard/analytics/reports/monthly"},{label:"2024",href:"/dashboard/analytics/reports/monthly/2024"},{label:"March",href:"/dashboard/analytics/reports/monthly/2024/march"},{label:"Sales Data",current:!0}],We=[{label:"Dashboard",href:"/dashboard",icon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),onClick:o("navigate-dashboard")},{label:"Users",href:"/users",icon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a4 4 0 11-8-4c.546 0 1.067.095 1.55.263"})}),onClick:o("navigate-users")},{label:"Profile Settings",current:!0,icon:e.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}],_e={title:"Navigation/Breadcrumb",component:s,parameters:{layout:"centered",docs:{description:{component:"Komponen Breadcrumb untuk navigasi path dengan support untuk collapsing, icon, berbagai ukuran, dan custom separator. Membantu user memahami lokasi mereka dalam hierarki aplikasi."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Ukuran breadcrumb"},maxItems:{control:{type:"number",min:3,max:10},description:"Maksimal item yang ditampilkan"},showHomeIcon:{control:"boolean",description:"Tampilkan icon home untuk item pertama"},items:{control:!1,description:"Array item breadcrumb"},separator:{control:!1,description:"Custom separator"}},args:{items:d}},b={render:a=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...a})}),args:{items:d}},f={render:a=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...a})}),args:{items:d,showHomeIcon:!0}},k={render:a=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...a})}),args:{items:We}},j={render:a=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...a})}),args:{items:d,size:"sm"}},w={render:a=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...a})}),args:{items:d,size:"md"}},N={render:a=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...a})}),args:{items:d,size:"lg",showHomeIcon:!0}},y={render:a=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...a})}),args:{items:Le,maxItems:4}},C={render:a=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...a})}),args:{items:Le,maxItems:3}},I={render:a=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...a})}),args:{items:d,separator:e.jsx("svg",{className:"w-4 h-4 text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})}},L={render:a=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...a})}),args:{items:d,separator:e.jsx("span",{className:"text-secondary-400 font-medium",children:"/"})}},S={render:a=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{...a})}),args:{items:d,separator:e.jsx("span",{className:"text-secondary-400 text-lg",children:"•"})}},M={render:()=>{const a=[{label:"Home",href:"/",icon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),onClick:o("home-clicked")},{label:"Electronics",href:"/electronics",onClick:o("electronics-clicked")},{label:"Smartphones",href:"/electronics/smartphones",onClick:o("smartphones-clicked")},{label:"Apple",href:"/electronics/smartphones/apple",onClick:o("apple-clicked")},{label:"iPhone 15 Pro Max",current:!0}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"E-commerce Product Page"}),e.jsx(s,{items:a,size:"md"})]}),e.jsxs("div",{className:"p-4 bg-secondary-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-secondary-900 mb-2",children:"iPhone 15 Pro Max"}),e.jsx("p",{className:"text-secondary-600 text-sm",children:"Navigate through the product hierarchy to understand where this product belongs."})]})]})},parameters:{docs:{description:{story:"Contoh penggunaan breadcrumb untuk halaman produk e-commerce dengan navigasi hierarki yang jelas."}}}},B={render:()=>{const a=[{label:"Dashboard",href:"/admin",icon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),onClick:o("dashboard-clicked")},{label:"User Management",href:"/admin/users",icon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a4 4 0 11-8-4c.546 0 1.067.095 1.55.263"})}),onClick:o("users-clicked")},{label:"Roles & Permissions",current:!0,icon:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Admin Panel Navigation"}),e.jsx(s,{items:a,size:"md",variant:"filled"})]}),e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"Roles & Permissions Management"}),e.jsx("p",{className:"text-blue-700 text-sm",children:"Configure user roles and manage access permissions across the system."})]})]})},parameters:{docs:{description:{story:"Contoh penggunaan breadcrumb untuk panel admin dengan ikon yang menunjukkan konteks setiap halaman."}}}},P={render:()=>{const[a,H]=R.useState({size:"md",maxItems:5,showHomeIcon:!1,separatorType:"chevron"}),[r,m]=R.useState([{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",current:!0}]),p=(t,c)=>{H(u=>({...u,[t]:c}))},z=()=>{const t={label:`Level ${r.length+1}`,href:`/level-${r.length+1}`,onClick:o(`level-${r.length+1}-clicked`)};m(c=>[...c.map(u=>({...u,current:!1})),{...t,current:!0}])},W=()=>{r.length>1&&m(t=>{const c=t.slice(0,-1);return c.map((u,A)=>({...u,current:A===c.length-1}))})},D=()=>{switch(a.separatorType){case"slash":return e.jsx("span",{className:"text-secondary-400 font-medium",children:"/"});case"dot":return e.jsx("span",{className:"text-secondary-400 text-lg",children:"•"});case"arrow":return e.jsx("svg",{className:"w-4 h-4 text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})});default:return}};return e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Interactive Breadcrumb Demo"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-secondary-50 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Size:"}),e.jsxs("select",{value:a.size,onChange:t=>p("size",t.target.value),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:"sm",children:"Small"}),e.jsx("option",{value:"md",children:"Medium"}),e.jsx("option",{value:"lg",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Max Items:"}),e.jsxs("select",{value:a.maxItems,onChange:t=>p("maxItems",parseInt(t.target.value)),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:3,children:"3"}),e.jsx("option",{value:4,children:"4"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"No limit"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Separator:"}),e.jsxs("select",{value:a.separatorType,onChange:t=>p("separatorType",t.target.value),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:"chevron",children:"Chevron"}),e.jsx("option",{value:"slash",children:"Slash"}),e.jsx("option",{value:"dot",children:"Dot"}),e.jsx("option",{value:"arrow",children:"Arrow"})]})]}),e.jsx("div",{className:"flex flex-col justify-center space-y-2",children:e.jsxs("label",{className:"flex items-center text-sm",children:[e.jsx("input",{type:"checkbox",checked:a.showHomeIcon,onChange:t=>p("showHomeIcon",t.target.checked),className:"mr-2"}),"Home Icon"]})})]}),e.jsxs("div",{className:"flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("button",{onClick:z,className:"px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",children:"Add Level"}),e.jsx("button",{onClick:W,disabled:r.length<=1,className:"px-3 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"Remove Level"}),e.jsxs("span",{className:"flex items-center text-sm text-blue-700",children:["Current depth:"," ",e.jsx("strong",{className:"ml-1",children:r.length})]})]}),e.jsx("div",{className:"p-4 border border-secondary-200 rounded-lg bg-white",children:e.jsx(s,{items:r,size:a.size,maxItems:a.maxItems===10?void 0:a.maxItems,showHomeIcon:a.showHomeIcon,separator:D()})})]})},parameters:{docs:{description:{story:"Demo interaktif untuk mencoba berbagai pengaturan breadcrumb. Tambah/kurangi level, ubah separator, dan lihat efek collapsing!"}}}};var E,T,_;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>,
  args: {
    items: basicItems
  }
}`,...(_=(T=b.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var $,q,U;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>,
  args: {
    items: basicItems,
    showHomeIcon: true
  }
}`,...(U=(q=f.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var F,K,O;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>,
  args: {
    items: itemsWithIcons
  }
}`,...(O=(K=k.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var G,J,Q;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>,
  args: {
    items: basicItems,
    size: "sm"
  }
}`,...(Q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>,
  args: {
    items: basicItems,
    size: "md"
  }
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>,
  args: {
    items: basicItems,
    size: "lg",
    showHomeIcon: true
  }
}`,...(ne=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,re,te;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>,
  args: {
    items: longItems,
    maxItems: 4
  }
}`,...(te=(re=y.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,le,ce;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>,
  args: {
    items: longItems,
    maxItems: 3
  }
}`,...(ce=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,de,me;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>,
  args: {
    items: basicItems,
    separator: <svg className="w-4 h-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
  }
}`,...(me=(de=I.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,he,pe;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>,
  args: {
    items: basicItems,
    separator: <span className="text-secondary-400 font-medium">/</span>
  }
}`,...(pe=(he=L.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var xe,ge,ve;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-4xl">
      <Breadcrumb {...args} />
    </div>,
  args: {
    items: basicItems,
    separator: <span className="text-secondary-400 text-lg">•</span>
  }
}`,...(ve=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,fe,ke;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const ecommerceItems: BreadcrumbItem[] = [{
      label: "Home",
      href: "/",
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>,
      onClick: action("home-clicked")
    }, {
      label: "Electronics",
      href: "/electronics",
      onClick: action("electronics-clicked")
    }, {
      label: "Smartphones",
      href: "/electronics/smartphones",
      onClick: action("smartphones-clicked")
    }, {
      label: "Apple",
      href: "/electronics/smartphones/apple",
      onClick: action("apple-clicked")
    }, {
      label: "iPhone 15 Pro Max",
      current: true
    }];
    return <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            E-commerce Product Page
          </h3>
          <Breadcrumb items={ecommerceItems} size="md" />
        </div>

        <div className="p-4 bg-secondary-50 rounded-lg">
          <h4 className="font-medium text-secondary-900 mb-2">
            iPhone 15 Pro Max
          </h4>
          <p className="text-secondary-600 text-sm">
            Navigate through the product hierarchy to understand where this
            product belongs.
          </p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan breadcrumb untuk halaman produk e-commerce dengan navigasi hierarki yang jelas."
      }
    }
  }
}`,...(ke=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var je,we,Ne;B.parameters={...B.parameters,docs:{...(je=B.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const adminItems: BreadcrumbItem[] = [{
      label: "Dashboard",
      href: "/admin",
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>,
      onClick: action("dashboard-clicked")
    }, {
      label: "User Management",
      href: "/admin/users",
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a4 4 0 11-8-4c.546 0 1.067.095 1.55.263" />
          </svg>,
      onClick: action("users-clicked")
    }, {
      label: "Roles & Permissions",
      current: true,
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
    }];
    return <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Admin Panel Navigation</h3>
          <Breadcrumb items={adminItems} size="md" variant="filled" />
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-900 mb-2">
            Roles & Permissions Management
          </h4>
          <p className="text-blue-700 text-sm">
            Configure user roles and manage access permissions across the
            system.
          </p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan breadcrumb untuk panel admin dengan ikon yang menunjukkan konteks setiap halaman."
      }
    }
  }
}`,...(Ne=(we=B.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var ye,Ce,Ie;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      size: "md" as const,
      maxItems: 5,
      showHomeIcon: false,
      separatorType: "chevron" as const
    });
    const [currentPath, setCurrentPath] = useState<BreadcrumbItem[]>([{
      label: "Home",
      href: "/"
    }, {
      label: "Products",
      href: "/products"
    }, {
      label: "Electronics",
      current: true
    }]);
    const handleSettingChange = (key: keyof typeof settings, value: any) => {
      setSettings(prev => ({
        ...prev,
        [key]: value
      }));
    };
    const addLevel = () => {
      const newItem = {
        label: \`Level \${currentPath.length + 1}\`,
        href: \`/level-\${currentPath.length + 1}\`,
        onClick: action(\`level-\${currentPath.length + 1}-clicked\`)
      };
      setCurrentPath(prev => [...prev.map(item => ({
        ...item,
        current: false
      })), {
        ...newItem,
        current: true
      }]);
    };
    const removeLevel = () => {
      if (currentPath.length > 1) {
        setCurrentPath(prev => {
          const newPath = prev.slice(0, -1);
          return newPath.map((item, index) => ({
            ...item,
            current: index === newPath.length - 1
          }));
        });
      }
    };
    const getSeparator = () => {
      switch (settings.separatorType) {
        case "slash":
          return <span className="text-secondary-400 font-medium">/</span>;
        case "dot":
          return <span className="text-secondary-400 text-lg">•</span>;
        case "arrow":
          return <svg className="w-4 h-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>;
        default:
          return undefined;
      }
    };
    return <div className="w-full max-w-4xl space-y-6">
        <h3 className="text-xl font-semibold">Interactive Breadcrumb Demo</h3>

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
            <label className="block text-sm font-medium mb-2">Max Items:</label>
            <select value={settings.maxItems} onChange={e => handleSettingChange("maxItems", parseInt(e.target.value))} className="w-full p-2 border rounded text-sm">
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={10}>No limit</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Separator:</label>
            <select value={settings.separatorType} onChange={e => handleSettingChange("separatorType", e.target.value)} className="w-full p-2 border rounded text-sm">
              <option value="chevron">Chevron</option>
              <option value="slash">Slash</option>
              <option value="dot">Dot</option>
              <option value="arrow">Arrow</option>
            </select>
          </div>

          <div className="flex flex-col justify-center space-y-2">
            <label className="flex items-center text-sm">
              <input type="checkbox" checked={settings.showHomeIcon} onChange={e => handleSettingChange("showHomeIcon", e.target.checked)} className="mr-2" />
              Home Icon
            </label>
          </div>
        </div>

        {/* Path controls */}
        <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <button onClick={addLevel} className="px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
            Add Level
          </button>
          <button onClick={removeLevel} disabled={currentPath.length <= 1} className="px-3 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed">
            Remove Level
          </button>
          <span className="flex items-center text-sm text-blue-700">
            Current depth:{" "}
            <strong className="ml-1">{currentPath.length}</strong>
          </span>
        </div>

        {/* Breadcrumb */}
        <div className="p-4 border border-secondary-200 rounded-lg bg-white">
          <Breadcrumb items={currentPath} size={settings.size} maxItems={settings.maxItems === 10 ? undefined : settings.maxItems} showHomeIcon={settings.showHomeIcon} separator={getSeparator()} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demo interaktif untuk mencoba berbagai pengaturan breadcrumb. Tambah/kurangi level, ubah separator, dan lihat efek collapsing!"
      }
    }
  }
}`,...(Ie=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};const $e=["Default","WithHomeIcon","WithIcons","Small","Medium","Large","Collapsed","VeryCollapsed","CustomSeparator","SlashSeparator","DotSeparator","EcommercePath","AdminDashboard","InteractiveDemo"];export{B as AdminDashboard,y as Collapsed,I as CustomSeparator,b as Default,S as DotSeparator,M as EcommercePath,P as InteractiveDemo,N as Large,w as Medium,L as SlashSeparator,j as Small,C as VeryCollapsed,f as WithHomeIcon,k as WithIcons,$e as __namedExportsOrder,_e as default};
