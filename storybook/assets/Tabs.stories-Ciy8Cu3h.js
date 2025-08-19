import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as m}from"./index-B-lxVbXh.js";import{R as z,r as c}from"./index-DkvSDgFW.js";import{c as x}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const k={default:{tab:"px-4 py-2 text-sm font-medium text-secondary-600 hover:text-secondary-800 hover:bg-secondary-50 rounded-md transition-colors duration-200",activeTab:"bg-primary-100 text-primary-700 hover:bg-primary-200",indicator:""},pills:{tab:"px-4 py-2 text-sm font-medium text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100 rounded-full transition-colors duration-200",activeTab:"bg-primary-600 text-white hover:bg-primary-700",indicator:""},underline:{tab:"px-4 py-3 text-sm font-medium text-secondary-600 hover:text-secondary-800 border-b-2 border-transparent transition-colors duration-200",activeTab:"text-primary-600 border-primary-600",indicator:""},bordered:{tab:"px-4 py-2 text-sm font-medium text-secondary-600 hover:text-secondary-800 border border-secondary-300 bg-secondary-50 transition-colors duration-200",activeTab:"bg-white text-primary-600 border-primary-300 relative",indicator:""}},C={sm:"px-3 py-1.5 text-xs",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"},r=z.forwardRef(({items:s,activeTab:n,defaultTab:t,onChange:a,variant:d="default",size:b="md",orientation:l="horizontal",contentPosition:ue="below",className:xe,tabListClassName:he,tabContentClassName:pe,scrollable:A=!1,...ve},ge)=>{var V,D;const[fe,Ne]=z.useState(n||t||((V=s[0])==null?void 0:V.id)||""),S=n||fe,ye=i=>{const u=s.find(ke=>ke.id===i);u!=null&&u.disabled||(n===void 0&&Ne(i),a&&a(i))},I=(D=s.find(i=>i.id===S))==null?void 0:D.content,je=i=>{const u=i.id===S;return e.jsxs("button",{onClick:()=>ye(i.id),disabled:i.disabled,className:x("relative inline-flex items-center justify-center whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",b==="sm"?C.sm:b==="md"?C.md:C.lg,u?x(k[d].tab,k[d].activeTab):k[d].tab,i.disabled&&"opacity-50 cursor-not-allowed",d==="bordered"&&!u&&"first:rounded-l-md last:rounded-r-md",d==="bordered"&&!u&&"-ml-px first:ml-0",d==="bordered"&&u&&"z-10"),children:[i.icon&&e.jsx("span",{className:x("mr-2",b==="sm"?"w-3 h-3":"w-4 h-4"),children:i.icon}),e.jsx("span",{children:i.label}),i.badge&&e.jsx("span",{className:x("ml-2 px-1.5 py-0.5 text-xs rounded-full",u&&d==="pills"?"bg-white/20 text-white":"bg-secondary-200 text-secondary-700"),children:i.badge})]},i.id)},Te=e.jsx("div",{className:x("flex",l==="horizontal"?"flex-row":"flex-col",A&&l==="horizontal"&&"overflow-x-auto",A&&l==="vertical"&&"overflow-y-auto",d==="underline"&&l==="horizontal"&&"border-b border-secondary-200",d==="bordered"&&"rounded-md",he),role:"tablist","aria-orientation":l,children:s.map(je)}),we=I&&e.jsx("div",{className:x("mt-4",l==="vertical"&&ue==="right"&&"ml-4 mt-0",pe),role:"tabpanel",tabIndex:0,children:I});return e.jsxs("div",{ref:ge,className:x("w-full",l==="vertical"&&"flex",xe),...ve,children:[Te,we]})});r.displayName="Tabs";try{r.displayName="Tabs",r.__docgenInfo={description:"",displayName:"Tabs",props:{items:{defaultValue:null,description:"Array tab items",name:"items",required:!0,type:{name:"TabItem[]"}},activeTab:{defaultValue:null,description:"Tab yang aktif saat ini",name:"activeTab",required:!1,type:{name:"string"}},defaultTab:{defaultValue:null,description:"Default tab yang aktif",name:"defaultTab",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback ketika tab berubah",name:"onChange",required:!1,type:{name:"((tabId: string) => void)"}},variant:{defaultValue:{value:"default"},description:"Variant styling untuk tabs",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"bordered"'},{value:'"pills"'},{value:'"underline"'}]}},size:{defaultValue:{value:"md"},description:"Ukuran tabs",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},orientation:{defaultValue:{value:"horizontal"},description:"Orientasi tabs",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},contentPosition:{defaultValue:{value:"below"},description:"Posisi konten tabs",name:"contentPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"below"'}]}},className:{defaultValue:null,description:"Custom className untuk container",name:"className",required:!1,type:{name:"string"}},tabListClassName:{defaultValue:null,description:"Custom className untuk tab list",name:"tabListClassName",required:!1,type:{name:"string"}},tabContentClassName:{defaultValue:null,description:"Custom className untuk tab content",name:"tabContentClassName",required:!1,type:{name:"string"}},scrollable:{defaultValue:{value:"false"},description:"Apakah tabs bisa di-scroll",name:"scrollable",required:!1,type:{name:"boolean"}}}}}catch{}const oe=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),ce=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),Ce=()=>e.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),me=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),o=[{id:"home",label:"Home",content:e.jsx("div",{className:"p-4 bg-secondary-50 rounded",children:"Welcome to the home page! This is where you'll find an overview of everything."})},{id:"profile",label:"Profile",content:e.jsx("div",{className:"p-4 bg-secondary-50 rounded",children:"Manage your profile information, avatar, and personal settings here."})},{id:"settings",label:"Settings",content:e.jsx("div",{className:"p-4 bg-secondary-50 rounded",children:"Configure your application preferences and account settings."})}],be=[{id:"dashboard",label:"Dashboard",icon:e.jsx(oe,{}),content:e.jsxs("div",{className:"p-6 bg-blue-50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-900 mb-2",children:"Dashboard"}),e.jsx("p",{className:"text-blue-700",children:"Monitor your key metrics and recent activity here."})]})},{id:"users",label:"Users",icon:e.jsx(ce,{}),badge:"23",content:e.jsxs("div",{className:"p-6 bg-green-50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-green-900 mb-2",children:"Users Management"}),e.jsx("p",{className:"text-green-700",children:"Manage user accounts and permissions."})]})},{id:"analytics",label:"Analytics",icon:e.jsx(me,{}),content:e.jsxs("div",{className:"p-6 bg-purple-50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-purple-900 mb-2",children:"Analytics"}),e.jsx("p",{className:"text-purple-700",children:"View detailed analytics and reports."})]})},{id:"settings",label:"Settings",icon:e.jsx(Ce,{}),disabled:!0,content:e.jsxs("div",{className:"p-6 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Settings"}),e.jsx("p",{className:"text-gray-700",children:"Configure application settings."})]})}],Ue={title:"Navigation/Tabs",component:r,parameters:{layout:"centered",docs:{description:{component:"Komponen Tabs untuk navigasi tab dengan berbagai variant, ukuran, dan orientasi. Mendukung icons, badges, disabled state, dan konten yang dapat dikustomisasi."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","pills","underline","bordered"],description:"Variant styling untuk tabs"},size:{control:"select",options:["sm","md","lg"],description:"Ukuran tabs"},orientation:{control:"select",options:["horizontal","vertical"],description:"Orientasi tabs"},contentPosition:{control:"select",options:["below","right"],description:"Posisi konten tabs"},scrollable:{control:"boolean",description:"Apakah tabs dapat di-scroll"},items:{control:!1,description:"Array tab items"},onChange:{action:"tab-changed"}},args:{onChange:m("tab-changed"),items:o}},h={render:s=>{const[n,t]=c.useState("home");return e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(r,{...s,activeTab:n,onChange:a=>{t(a),m("tab-changed")(a)}})})},args:{items:o,variant:"default"}},p={render:s=>{const[n,t]=c.useState("home");return e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(r,{...s,activeTab:n,onChange:a=>{t(a),m("pills-tab-changed")(a)}})})},args:{items:o,variant:"pills"}},v={render:s=>{const[n,t]=c.useState("home");return e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(r,{...s,activeTab:n,onChange:a=>{t(a),m("underline-tab-changed")(a)}})})},args:{items:o,variant:"underline"}},g={render:s=>{const[n,t]=c.useState("home");return e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(r,{...s,activeTab:n,onChange:a=>{t(a),m("bordered-tab-changed")(a)}})})},args:{items:o,variant:"bordered"}},f={render:s=>{const[n,t]=c.useState("dashboard");return e.jsx("div",{className:"w-full max-w-3xl",children:e.jsx(r,{...s,activeTab:n,onChange:a=>{t(a),m("icon-tab-changed")(a)}})})},args:{items:be,variant:"underline"}},N={render:s=>{const[n,t]=c.useState("home");return e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(r,{...s,activeTab:n,onChange:a=>{t(a),m("small-tab-changed")(a)}})})},args:{items:o,size:"sm"}},y={render:s=>{const[n,t]=c.useState("home");return e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(r,{...s,activeTab:n,onChange:a=>{t(a),m("large-tab-changed")(a)}})})},args:{items:o,size:"lg"}},j={render:s=>{const[n,t]=c.useState("dashboard");return e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(r,{...s,activeTab:n,onChange:a=>{t(a),m("vertical-tab-changed")(a)}})})},args:{items:be,orientation:"vertical",contentPosition:"right",variant:"pills"}},T={render:()=>{const[s,n]=c.useState({default:"home",pills:"home",underline:"home",bordered:"home"}),t=a=>d=>{n(b=>({...b,[a]:d})),m(`${a}-tab-changed`)(d)};return e.jsxs("div",{className:"space-y-8 w-full max-w-4xl",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Default"}),e.jsx(r,{items:o,activeTab:s.default,onChange:t("default"),variant:"default"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Pills"}),e.jsx(r,{items:o,activeTab:s.pills,onChange:t("pills"),variant:"pills"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Underline"}),e.jsx(r,{items:o,activeTab:s.underline,onChange:t("underline"),variant:"underline"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Bordered"}),e.jsx(r,{items:o,activeTab:s.bordered,onChange:t("bordered"),variant:"bordered"})]})]})},parameters:{docs:{description:{story:"Perbandingan semua variant tabs yang tersedia. Setiap variant memiliki state independent."}}}},w={render:()=>{const[s,n]=c.useState("dashboard"),[t,a]=c.useState(5),d=[{id:"dashboard",label:"Dashboard",icon:e.jsx(oe,{}),content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border",children:[e.jsx("h4",{className:"font-semibold text-blue-900",children:"Total Users"}),e.jsx("p",{className:"text-2xl font-bold text-blue-600",children:"1,234"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg border",children:[e.jsx("h4",{className:"font-semibold text-green-900",children:"Revenue"}),e.jsx("p",{className:"text-2xl font-bold text-green-600",children:"$12,345"})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg border",children:[e.jsx("h4",{className:"font-semibold text-purple-900",children:"Orders"}),e.jsx("p",{className:"text-2xl font-bold text-purple-600",children:"567"})]})]}),e.jsxs("div",{className:"p-4 bg-white rounded-lg border",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Recent Activity"}),e.jsxs("ul",{className:"space-y-2 text-sm text-secondary-600",children:[e.jsx("li",{children:"• User John Doe registered"}),e.jsx("li",{children:"• Order #1234 was processed"}),e.jsx("li",{children:"• Payment received from customer"})]})]})]})},{id:"users",label:"Users",icon:e.jsx(ce,{}),badge:"23",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"font-semibold",children:"User Management"}),e.jsx("button",{className:"px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700",children:"Add User"})]}),e.jsx("div",{className:"bg-white rounded-lg border overflow-hidden",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-secondary-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-sm font-medium text-secondary-700",children:"Name"}),e.jsx("th",{className:"px-4 py-3 text-left text-sm font-medium text-secondary-700",children:"Email"}),e.jsx("th",{className:"px-4 py-3 text-left text-sm font-medium text-secondary-700",children:"Status"})]})}),e.jsxs("tbody",{className:"divide-y",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-3 text-sm",children:"John Doe"}),e.jsx("td",{className:"px-4 py-3 text-sm",children:"john@example.com"}),e.jsx("td",{className:"px-4 py-3 text-sm",children:e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs",children:"Active"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-3 text-sm",children:"Jane Smith"}),e.jsx("td",{className:"px-4 py-3 text-sm",children:"jane@example.com"}),e.jsx("td",{className:"px-4 py-3 text-sm",children:e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs",children:"Active"})})]})]})]})})]})},{id:"analytics",label:"Analytics",icon:e.jsx(me,{}),content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-semibold",children:"Analytics Overview"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-white rounded-lg border",children:[e.jsx("h5",{className:"font-medium text-secondary-900 mb-2",children:"Page Views"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"/dashboard"}),e.jsx("span",{children:"1,234"})]}),e.jsx("div",{className:"w-full bg-secondary-200 rounded-full h-2",children:e.jsx("div",{className:"bg-primary-600 h-2 rounded-full",style:{width:"75%"}})})]})]}),e.jsxs("div",{className:"p-4 bg-white rounded-lg border",children:[e.jsx("h5",{className:"font-medium text-secondary-900 mb-2",children:"Conversion Rate"}),e.jsx("div",{className:"text-3xl font-bold text-green-600",children:"3.2%"}),e.jsx("div",{className:"text-sm text-secondary-600",children:"+0.5% from last month"})]})]})]})},{id:"notifications",label:"Notifications",badge:t,content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"font-semibold",children:"Recent Notifications"}),e.jsx("button",{onClick:()=>a(0),className:"text-sm text-primary-600 hover:text-primary-700",children:"Mark all as read"})]}),e.jsxs("div",{className:"space-y-3",children:[Array.from({length:t},(b,l)=>e.jsxs("div",{className:"p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400",children:[e.jsxs("p",{className:"text-sm font-medium text-blue-900",children:["New notification #",l+1]}),e.jsx("p",{className:"text-xs text-blue-700 mt-1",children:new Date(Date.now()-l*36e5).toLocaleTimeString()})]},l)),t===0&&e.jsx("p",{className:"text-center text-secondary-500 py-8",children:"All caught up! No new notifications."})]})]})}];return e.jsxs("div",{className:"w-full max-w-6xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-6",children:"Interactive Dashboard"}),e.jsx(r,{items:d,activeTab:s,onChange:b=>{n(b),m("dashboard-tab-changed")(b)},variant:"underline",size:"md"})]})},parameters:{docs:{description:{story:"Demo dashboard interaktif dengan tabs yang menampilkan konten dinamis. Coba klik tab Notifications dan gunakan tombol 'Mark all as read'."}}}};var U,M,P;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState("home");
    return <div className="w-full max-w-2xl">
        <Tabs {...args} activeTab={activeTab} onChange={tabId => {
        setActiveTab(tabId);
        action("tab-changed")(tabId);
      }} />
      </div>;
  },
  args: {
    items: basicTabs,
    variant: "default"
  }
}`,...(P=(M=h.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var L,q,R;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState("home");
    return <div className="w-full max-w-2xl">
        <Tabs {...args} activeTab={activeTab} onChange={tabId => {
        setActiveTab(tabId);
        action("pills-tab-changed")(tabId);
      }} />
      </div>;
  },
  args: {
    items: basicTabs,
    variant: "pills"
  }
}`,...(R=(q=p.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var _,W,O;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState("home");
    return <div className="w-full max-w-2xl">
        <Tabs {...args} activeTab={activeTab} onChange={tabId => {
        setActiveTab(tabId);
        action("underline-tab-changed")(tabId);
      }} />
      </div>;
  },
  args: {
    items: basicTabs,
    variant: "underline"
  }
}`,...(O=(W=v.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var B,J,E;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState("home");
    return <div className="w-full max-w-2xl">
        <Tabs {...args} activeTab={activeTab} onChange={tabId => {
        setActiveTab(tabId);
        action("bordered-tab-changed")(tabId);
      }} />
      </div>;
  },
  args: {
    items: basicTabs,
    variant: "bordered"
  }
}`,...(E=(J=g.parameters)==null?void 0:J.docs)==null?void 0:E.source}}};var H,$,K;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState("dashboard");
    return <div className="w-full max-w-3xl">
        <Tabs {...args} activeTab={activeTab} onChange={tabId => {
        setActiveTab(tabId);
        action("icon-tab-changed")(tabId);
      }} />
      </div>;
  },
  args: {
    items: tabsWithIcons,
    variant: "underline"
  }
}`,...(K=($=f.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var F,G,Q;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState("home");
    return <div className="w-full max-w-2xl">
        <Tabs {...args} activeTab={activeTab} onChange={tabId => {
        setActiveTab(tabId);
        action("small-tab-changed")(tabId);
      }} />
      </div>;
  },
  args: {
    items: basicTabs,
    size: "sm"
  }
}`,...(Q=(G=N.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState("home");
    return <div className="w-full max-w-2xl">
        <Tabs {...args} activeTab={activeTab} onChange={tabId => {
        setActiveTab(tabId);
        action("large-tab-changed")(tabId);
      }} />
      </div>;
  },
  args: {
    items: basicTabs,
    size: "lg"
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,se;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState("dashboard");
    return <div className="w-full max-w-4xl">
        <Tabs {...args} activeTab={activeTab} onChange={tabId => {
        setActiveTab(tabId);
        action("vertical-tab-changed")(tabId);
      }} />
      </div>;
  },
  args: {
    items: tabsWithIcons,
    orientation: "vertical",
    contentPosition: "right",
    variant: "pills"
  }
}`,...(se=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,ne,re;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [tabs, setTabs] = useState({
      default: "home",
      pills: "home",
      underline: "home",
      bordered: "home"
    });
    const handleTabChange = (variant: keyof typeof tabs) => (tabId: string) => {
      setTabs(prev => ({
        ...prev,
        [variant]: tabId
      }));
      action(\`\${variant}-tab-changed\`)(tabId);
    };
    return <div className="space-y-8 w-full max-w-4xl">
        <div>
          <h3 className="text-lg font-medium mb-4">Default</h3>
          <Tabs items={basicTabs} activeTab={tabs.default} onChange={handleTabChange("default")} variant="default" />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Pills</h3>
          <Tabs items={basicTabs} activeTab={tabs.pills} onChange={handleTabChange("pills")} variant="pills" />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Underline</h3>
          <Tabs items={basicTabs} activeTab={tabs.underline} onChange={handleTabChange("underline")} variant="underline" />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Bordered</h3>
          <Tabs items={basicTabs} activeTab={tabs.bordered} onChange={handleTabChange("bordered")} variant="bordered" />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Perbandingan semua variant tabs yang tersedia. Setiap variant memiliki state independent."
      }
    }
  }
}`,...(re=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,de,le;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [notifications, setNotifications] = useState(5);
    const dashboardTabs = [{
      id: "dashboard",
      label: "Dashboard",
      icon: <HomeIcon />,
      content: <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border">
                <h4 className="font-semibold text-blue-900">Total Users</h4>
                <p className="text-2xl font-bold text-blue-600">1,234</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border">
                <h4 className="font-semibold text-green-900">Revenue</h4>
                <p className="text-2xl font-bold text-green-600">$12,345</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border">
                <h4 className="font-semibold text-purple-900">Orders</h4>
                <p className="text-2xl font-bold text-purple-600">567</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <h4 className="font-semibold mb-2">Recent Activity</h4>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• User John Doe registered</li>
                <li>• Order #1234 was processed</li>
                <li>• Payment received from customer</li>
              </ul>
            </div>
          </div>
    }, {
      id: "users",
      label: "Users",
      icon: <UserIcon />,
      badge: "23",
      content: <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">User Management</h4>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                Add User
              </button>
            </div>
            <div className="bg-white rounded-lg border overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-secondary-700">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-secondary-700">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-secondary-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3 text-sm">John Doe</td>
                    <td className="px-4 py-3 text-sm">john@example.com</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Jane Smith</td>
                    <td className="px-4 py-3 text-sm">jane@example.com</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        Active
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    }, {
      id: "analytics",
      label: "Analytics",
      icon: <ChartIcon />,
      content: <div className="space-y-4">
            <h4 className="font-semibold">Analytics Overview</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border">
                <h5 className="font-medium text-secondary-900 mb-2">
                  Page Views
                </h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>/dashboard</span>
                    <span>1,234</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{
                  width: "75%"
                }}></div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h5 className="font-medium text-secondary-900 mb-2">
                  Conversion Rate
                </h5>
                <div className="text-3xl font-bold text-green-600">3.2%</div>
                <div className="text-sm text-secondary-600">
                  +0.5% from last month
                </div>
              </div>
            </div>
          </div>
    }, {
      id: "notifications",
      label: "Notifications",
      badge: notifications,
      content: <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Recent Notifications</h4>
              <button onClick={() => setNotifications(0)} className="text-sm text-primary-600 hover:text-primary-700">
                Mark all as read
              </button>
            </div>
            <div className="space-y-3">
              {Array.from({
            length: notifications
          }, (_, i) => <div key={i} className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm font-medium text-blue-900">
                    New notification #{i + 1}
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    {new Date(Date.now() - i * 3600000).toLocaleTimeString()}
                  </p>
                </div>)}
              {notifications === 0 && <p className="text-center text-secondary-500 py-8">
                  All caught up! No new notifications.
                </p>}
            </div>
          </div>
    }];
    return <div className="w-full max-w-6xl">
        <h3 className="text-xl font-semibold mb-6">Interactive Dashboard</h3>
        <Tabs items={dashboardTabs} activeTab={activeTab} onChange={tabId => {
        setActiveTab(tabId);
        action("dashboard-tab-changed")(tabId);
      }} variant="underline" size="md" />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demo dashboard interaktif dengan tabs yang menampilkan konten dinamis. Coba klik tab Notifications dan gunakan tombol 'Mark all as read'."
      }
    }
  }
}`,...(le=(de=w.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};const Me=["Default","Pills","Underline","Bordered","WithIcons","Small","Large","Vertical","AllVariants","InteractiveDashboard"];export{T as AllVariants,g as Bordered,h as Default,w as InteractiveDashboard,y as Large,p as Pills,N as Small,v as Underline,j as Vertical,f as WithIcons,Me as __namedExportsOrder,Ue as default};
