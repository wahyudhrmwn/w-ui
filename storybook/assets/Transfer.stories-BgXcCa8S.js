import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as o}from"./index-B-lxVbXh.js";import{r as i}from"./index-DkvSDgFW.js";import{c as b}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const Ge=(l,n)=>!!(n.title.toLowerCase().includes(l.toLowerCase())||n.description&&n.description.toLowerCase().includes(l.toLowerCase())),w=({dataSource:l=[],targetKeys:n=[],selectedKeys:d=[],onChange:g,onSelectChange:m,onScroll:j,render:T,titles:O=["Source","Target"],operations:u=["→","←"],showSearch:v=!1,searchPlaceholder:G=["Search source","Search target"],filterOption:A=Ge,disabled:c=!1,showSelectAll:Me=!0,selectAllLabels:Je=["Select all","Select all"],oneWay:Pe=!1,pagination:C,listStyle:Ve,operationStyle:We,className:Ie,style:qe,...Re})=>{const[K,Ee]=i.useState(""),[M,Be]=i.useState(""),[p,$]=i.useState([]),[h,J]=i.useState([]),[S,te]=i.useState(1),[k,re]=i.useState(1),{sourceData:Q,targetData:X}=i.useMemo(()=>{const r=l.filter(a=>!n.includes(a.key)),s=l.filter(a=>n.includes(a.key));return{sourceData:r,targetData:s}},[l,n]),y=i.useMemo(()=>K?Q.filter(r=>A(K,r)):Q,[Q,K,A]),f=i.useMemo(()=>M?X.filter(r=>A(M,r)):X,[X,M,A]),Ue=i.useMemo(()=>{const r=(C==null?void 0:C.pageSize)||10,s=C&&(y.length>r||f.length>r),a=s?y.slice((S-1)*r,S*r):y,x=s?f.slice((k-1)*r,k*r):f;return{pageSize:r,showPagination:s,paginatedSourceData:a,paginatedTargetData:x}},[C,y,f,S,k]),{pageSize:N,showPagination:ze,paginatedSourceData:Y,paginatedTargetData:Z}=Ue;i.useEffect(()=>{const r=d.filter(a=>!n.includes(a)),s=d.filter(a=>n.includes(a));$(r),J(s)},[d,n]);const se=i.useCallback(r=>{const s=r==="right"?p:h;if(s.length===0)return;const a=r==="right"?[...n,...s]:n.filter(x=>!s.includes(x));g==null||g(a,r,s),r==="right"?$([]):J([]),m==null||m([],[])},[p,h,n,g,m]),P=i.useCallback((r,s)=>{s==="left"?$(r):J(r),m==null||m(s==="left"?r:p,s==="right"?r:h)},[p,h,m]),He=i.useCallback((r,s)=>{const x=(r==="left"?Y:Z).filter(D=>!D.disabled).map(D=>D.key);P(s?x:[],r)},[Y,Z,P]),ae=(r,s,a,x,D)=>{const V=r.filter(t=>!t.disabled).map(t=>t.key),W=V.length>0&&V.every(t=>a.includes(t)),I=a.length>0&&a.length<V.length;return e.jsxs("div",{className:"flex flex-col h-80 border border-secondary-200 rounded-xl bg-white shadow-sm",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-secondary-150 bg-secondary-25 rounded-t-xl",children:[e.jsxs("div",{className:"flex items-center",children:[Me&&e.jsxs("label",{className:"flex items-center mr-3 cursor-pointer group",children:[e.jsx("input",{type:"checkbox",className:"sr-only",checked:W,ref:t=>{t&&(t.indeterminate=I)},onChange:t=>He(s,t.target.checked),disabled:c||V.length===0}),e.jsxs("div",{className:b("w-4 h-4 border-2 rounded-sm transition-all duration-200 flex items-center justify-center mr-2","group-hover:border-primary-400 group-hover:shadow-sm",{"border-primary-500 bg-primary-500 shadow-primary-100 shadow-sm":W,"border-secondary-300 bg-white":!W&&!I,"border-primary-500 bg-primary-50":I,"opacity-50 cursor-not-allowed":c}),children:[W&&e.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})}),I&&e.jsx("div",{className:"w-2.5 h-0.5 bg-primary-500 rounded-full"})]})]}),e.jsx("h3",{className:"font-semibold text-secondary-900 text-sm",children:O[s==="left"?0:1]})]}),e.jsxs("div",{className:"text-xs text-secondary-600 bg-white border border-secondary-200 px-2.5 py-1 rounded-full shadow-sm",children:[e.jsx("span",{className:"font-semibold text-primary-600",children:a.length}),e.jsx("span",{className:"mx-1 text-secondary-400",children:"/"}),e.jsx("span",{className:"font-medium",children:r.length})]})]}),v&&e.jsx("div",{className:"p-3 border-b border-secondary-100 bg-secondary-50/30",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx("svg",{className:"h-4 w-4 text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e.jsx("input",{type:"text",value:x,onChange:t=>D(t.target.value),placeholder:G[s==="left"?0:1],className:"w-full pl-10 pr-4 py-2.5 text-sm border border-secondary-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all",disabled:c})]})}),e.jsx("div",{className:"flex-1 overflow-auto",style:Ve,onScroll:t=>j==null?void 0:j(s,t),children:r.length===0?e.jsx("div",{className:"flex items-center justify-center h-full text-secondary-500",children:e.jsxs("div",{className:"text-center",children:[e.jsx("svg",{className:"w-12 h-12 mx-auto mb-2 text-secondary-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-3a2 2 0 00-2 2v1M7 13h10v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2z"})}),e.jsx("p",{className:"text-sm",children:"No data"})]})}):e.jsx("div",{className:"p-2 space-y-1",children:r.map(t=>e.jsxs("label",{className:b("flex items-center p-2 rounded cursor-pointer transition-colors group",{"hover:bg-secondary-50":!t.disabled&&!c,"bg-primary-50":a.includes(t.key),"opacity-50 cursor-not-allowed":t.disabled||c}),children:[e.jsx("input",{type:"checkbox",className:"sr-only",checked:a.includes(t.key),onChange:_e=>{const Fe=_e.target.checked?[...a,t.key]:a.filter(Oe=>Oe!==t.key);P(Fe,s)},disabled:t.disabled||c}),e.jsx("div",{className:b("w-4 h-4 border-2 rounded transition-colors flex items-center justify-center mr-3 flex-shrink-0",{"border-primary-500 bg-primary-500":a.includes(t.key),"border-secondary-300":!a.includes(t.key),"opacity-50":t.disabled||c}),children:a.includes(t.key)&&e.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 13l4 4L19 7"})})}),t.icon&&e.jsx("div",{className:"w-4 h-4 mr-3 flex-shrink-0",children:t.icon}),e.jsx("div",{className:"flex-1 min-w-0",children:T?T(t):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-sm font-medium text-secondary-900 truncate",children:t.title}),t.description&&e.jsx("div",{className:"text-xs text-secondary-500 truncate mt-1",children:t.description})]})})]},t.key))})}),ze&&e.jsxs("div",{className:"flex items-center justify-between p-3 border-t border-secondary-100 bg-secondary-25 rounded-b-xl",children:[e.jsxs("span",{className:"text-xs text-secondary-600 font-medium",children:["Page ",e.jsx("span",{className:"text-primary-600",children:s==="left"?S:k})," of ",Math.ceil((s==="left"?y.length:f.length)/N)]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("button",{onClick:()=>{s==="left"?te(t=>Math.max(1,t-1)):re(t=>Math.max(1,t-1))},disabled:s==="left"?S===1:k===1,className:"w-7 h-7 rounded-md bg-white border border-secondary-200 text-secondary-600 hover:text-primary-600 hover:border-primary-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center text-sm",title:"Previous page",children:"←"}),e.jsx("button",{onClick:()=>{s==="left"?te(t=>Math.min(Math.ceil(y.length/N),t+1)):re(t=>Math.min(Math.ceil(f.length/N),t+1))},disabled:s==="left"?S>=Math.ceil(y.length/N):k>=Math.ceil(f.length/N),className:"w-7 h-7 rounded-md bg-white border border-secondary-200 text-secondary-600 hover:text-primary-600 hover:border-primary-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center text-sm",title:"Next page",children:"→"})]})]})]})};return e.jsxs("div",{className:b("flex items-center gap-4",Ie),style:qe,...Re,children:[e.jsx("div",{className:"flex-1",children:ae(Y,"left",p,K,Ee)}),e.jsx("div",{className:"flex flex-col gap-3 items-center",style:We,children:e.jsxs("div",{className:"bg-white border border-secondary-200 rounded-xl p-3 shadow-sm",children:[e.jsx("button",{onClick:()=>se("right"),disabled:c||p.length===0,className:b("w-12 h-10 text-lg font-bold rounded-lg border-2 transition-all duration-200 flex items-center justify-center","hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",{"bg-primary-600 text-white border-primary-600 hover:bg-primary-700 hover:border-primary-700 shadow-primary-200":!c&&p.length>0,"bg-secondary-50 text-secondary-400 border-secondary-200 cursor-not-allowed shadow-none":c||p.length===0}),title:`Move ${p.length} items to target`,children:u[0]}),!Pe&&e.jsx("button",{onClick:()=>se("left"),disabled:c||h.length===0,className:b("w-12 h-10 text-lg font-bold rounded-lg border-2 transition-all duration-200 flex items-center justify-center mt-2","hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",{"bg-primary-600 text-white border-primary-600 hover:bg-primary-700 hover:border-primary-700 shadow-primary-200":!c&&h.length>0,"bg-secondary-50 text-secondary-400 border-secondary-200 cursor-not-allowed shadow-none":c||h.length===0}),title:`Move ${h.length} items to source`,children:u[1]})]})}),e.jsx("div",{className:"flex-1",children:ae(Z,"right",h,M,Be)})]})};try{w.displayName="Transfer",w.__docgenInfo={description:"",displayName:"Transfer",props:{dataSource:{defaultValue:{value:"[]"},description:"",name:"dataSource",required:!1,type:{name:"TransferItem[]"}},targetKeys:{defaultValue:{value:"[]"},description:"",name:"targetKeys",required:!1,type:{name:"string[]"}},selectedKeys:{defaultValue:{value:"[]"},description:"",name:"selectedKeys",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'((targetKeys: string[], direction: "left" | "right", moveKeys: string[]) => void)'}},onSelectChange:{defaultValue:null,description:"",name:"onSelectChange",required:!1,type:{name:"((sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void)"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:'((direction: "left" | "right", e: UIEvent<HTMLDivElement, UIEvent>) => void)'}},render:{defaultValue:null,description:"",name:"render",required:!1,type:{name:"((item: TransferItem) => ReactNode)"}},titles:{defaultValue:{value:'["Source", "Target"]'},description:"",name:"titles",required:!1,type:{name:"[string, string]"}},operations:{defaultValue:{value:'["→", "←"]'},description:"",name:"operations",required:!1,type:{name:"[string, string]"}},showSearch:{defaultValue:{value:"false"},description:"",name:"showSearch",required:!1,type:{name:"boolean"}},searchPlaceholder:{defaultValue:{value:'["Search source", "Search target"]'},description:"",name:"searchPlaceholder",required:!1,type:{name:"[string, string]"}},filterOption:{defaultValue:{value:`(
  inputValue: string,
  item: TransferItem
): boolean => {
  return Boolean(
    item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
    (item.description &&
      item.description.toLowerCase().includes(inputValue.toLowerCase()))
  );
}`},description:"",name:"filterOption",required:!1,type:{name:"((inputValue: string, item: TransferItem) => boolean)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},showSelectAll:{defaultValue:{value:"true"},description:"",name:"showSelectAll",required:!1,type:{name:"boolean"}},selectAllLabels:{defaultValue:{value:'["Select all", "Select all"]'},description:"",name:"selectAllLabels",required:!1,type:{name:"[ReactNode, ReactNode]"}},oneWay:{defaultValue:{value:"false"},description:"",name:"oneWay",required:!1,type:{name:"boolean"}},pagination:{defaultValue:null,description:"",name:"pagination",required:!1,type:{name:"{ pageSize?: number; simple?: boolean; } | undefined"}},listStyle:{defaultValue:null,description:"",name:"listStyle",required:!1,type:{name:"CSSProperties"}},operationStyle:{defaultValue:null,description:"",name:"operationStyle",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const rt={title:"Data Display/Transfer",component:w,parameters:{layout:"padded",docs:{description:{component:"Komponen Transfer untuk memindahkan item antar dua list. Ideal untuk scenarios seperti pemilihan permissions, assignment users ke groups, atau konfigurasi data yang memerlukan seleksi dari sumber ke target."}}},tags:["autodocs"],argTypes:{showSearch:{control:{type:"boolean"},description:"Apakah menampilkan search box"},disabled:{control:{type:"boolean"},description:"Apakah disabled"},showSelectAll:{control:{type:"boolean"},description:"Apakah menampilkan select all checkbox"},oneWay:{control:{type:"boolean"},description:"Apakah one-way transfer (tanpa tombol kembali)"}}},L=[{key:"user1",title:"John Smith",description:"Senior Developer"},{key:"user2",title:"Jane Doe",description:"Product Manager"},{key:"user3",title:"Mike Johnson",description:"UI/UX Designer"},{key:"user4",title:"Sarah Wilson",description:"QA Engineer"},{key:"user5",title:"David Brown",description:"DevOps Engineer"},{key:"user6",title:"Lisa Davis",description:"Marketing Specialist"},{key:"user7",title:"Tom Anderson",description:"Business Analyst"},{key:"user8",title:"Emily Chen",description:"Frontend Developer"},{key:"user9",title:"Robert Taylor",description:"Backend Developer"},{key:"user10",title:"Maria Garcia",description:"Data Scientist"},{key:"user11",title:"Chris Wilson",description:"Mobile Developer",disabled:!0},{key:"user12",title:"Amy Johnson",description:"Technical Writer"}],ee=[{key:"read",title:"Read",description:"View data and content",icon:e.jsxs("svg",{className:"w-4 h-4 text-blue-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})},{key:"write",title:"Write",description:"Create and edit content",icon:e.jsx("svg",{className:"w-4 h-4 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})},{key:"delete",title:"Delete",description:"Remove data and content",icon:e.jsx("svg",{className:"w-4 h-4 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})},{key:"admin",title:"Admin",description:"Full administrative access",icon:e.jsx("svg",{className:"w-4 h-4 text-purple-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})},{key:"export",title:"Export",description:"Export data to external formats",icon:e.jsx("svg",{className:"w-4 h-4 text-indigo-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})},{key:"import",title:"Import",description:"Import data from external sources",disabled:!0,icon:e.jsx("svg",{className:"w-4 h-4 text-orange-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"})})}],q={args:{dataSource:L,targetKeys:["user2","user4"],titles:["Available Users","Selected Users"],onChange:o("transfer-changed"),onSelectChange:o("selection-changed")}},R={args:{dataSource:L,targetKeys:["user1","user3"],titles:["All Users","Team Members"],showSearch:!0,searchPlaceholder:["Search available users","Search team members"],onChange:o("transfer-changed"),onSelectChange:o("selection-changed")}},E={args:{dataSource:ee,targetKeys:["read"],titles:["Available Permissions","Granted Permissions"],showSearch:!0,onChange:o("permissions-changed"),onSelectChange:o("selection-changed")}},B={args:{dataSource:ee,targetKeys:[],titles:["Available Features","Enabled Features"],oneWay:!0,showSearch:!0,operations:["Enable →",""],onChange:o("features-enabled"),onSelectChange:o("selection-changed")}},$e=Array.from({length:20},(l,n)=>({key:`item${n+1}`,title:`Item ${n+1}`,description:`Description for item ${n+1}`})),U={render:()=>e.jsx(w,{dataSource:$e,targetKeys:["item2","item5","item8","item12","item15"],titles:["Available Items","Selected Items"],showSearch:!0,operations:["Transfer →","← Return"],pagination:{pageSize:5},onChange:o("paginated-transfer"),onSelectChange:o("paginated-selection")})},z={render:()=>{const l=[{key:"task1",title:"Setup Development Environment",description:"High Priority"},{key:"task2",title:"Design System Components",description:"Medium Priority"},{key:"task3",title:"API Integration",description:"High Priority"},{key:"task4",title:"Testing Framework",description:"Low Priority"},{key:"task5",title:"Documentation",description:"Medium Priority"}],n=d=>e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-medium text-secondary-900",children:d.title}),e.jsx("span",{className:b("px-2 py-1 text-xs rounded-full",{"bg-red-100 text-red-800":d.description==="High Priority","bg-yellow-100 text-yellow-800":d.description==="Medium Priority","bg-green-100 text-green-800":d.description==="Low Priority"}),children:d.description})]})});return e.jsx(w,{dataSource:l,targetKeys:["task1","task3"],titles:["Backlog","Sprint Tasks"],render:n,showSearch:!0,onChange:o("tasks-moved"),onSelectChange:o("task-selection")})}},H={render:()=>{const[l,n]=i.useState(["user2","user4"]),[d,g]=i.useState([]),m=(u,v,G)=>{n(u),o("controlled-change")({newTargetKeys:u,direction:v,moveKeys:G})},j=(u,v)=>{g([...u,...v]),o("controlled-select")({sourceSelectedKeys:u,targetSelectedKeys:v})},T=()=>{n([]),g([])},O=()=>{n(L.filter(u=>!u.disabled).map(u=>u.key)),g([])};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:T,className:"px-4 py-2 text-sm bg-secondary-100 text-secondary-700 rounded hover:bg-secondary-200 transition-colors",children:"Reset All"}),e.jsx("button",{onClick:O,className:"px-4 py-2 text-sm bg-primary-100 text-primary-700 rounded hover:bg-primary-200 transition-colors",children:"Move All to Target"})]}),e.jsx(w,{dataSource:L,targetKeys:l,selectedKeys:d,titles:["Source List","Target List"],showSearch:!0,showSelectAll:!0,onChange:m,onSelectChange:j}),e.jsxs("div",{className:"text-sm text-secondary-600 space-y-1",children:[e.jsxs("div",{children:["Target Keys: ",l.join(", ")||"none"]}),e.jsxs("div",{children:["Selected Keys: ",d.join(", ")||"none"]})]})]})}},_={args:{dataSource:L.slice(0,6),targetKeys:["user2","user4"],titles:["Available Users","Selected Users"],disabled:!0,showSearch:!0,onChange:o("disabled-transfer")}},F={args:{dataSource:ee,targetKeys:["read","write"],titles:["Available Permissions","User Permissions"],operations:["Grant →","← Revoke"],showSearch:!0,selectAllLabels:["Select all permissions","Select all granted"],onChange:o("permissions-transfer"),onSelectChange:o("permissions-select")}};var ne,oe,ie;q.parameters={...q.parameters,docs:{...(ne=q.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    dataSource: sampleData,
    targetKeys: ["user2", "user4"],
    titles: ["Available Users", "Selected Users"],
    onChange: action("transfer-changed"),
    onSelectChange: action("selection-changed")
  }
}`,...(ie=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    dataSource: sampleData,
    targetKeys: ["user1", "user3"],
    titles: ["All Users", "Team Members"],
    showSearch: true,
    searchPlaceholder: ["Search available users", "Search team members"],
    onChange: action("transfer-changed"),
    onSelectChange: action("selection-changed")
  }
}`,...(de=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    dataSource: permissionsData,
    targetKeys: ["read"],
    titles: ["Available Permissions", "Granted Permissions"],
    showSearch: true,
    onChange: action("permissions-changed"),
    onSelectChange: action("selection-changed")
  }
}`,...(pe=(me=E.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,ge,ye;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    dataSource: permissionsData,
    targetKeys: [],
    titles: ["Available Features", "Enabled Features"],
    oneWay: true,
    showSearch: true,
    operations: ["Enable →", ""],
    onChange: action("features-enabled"),
    onSelectChange: action("selection-changed")
  }
}`,...(ye=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var fe,xe,be;U.parameters={...U.parameters,docs:{...(fe=U.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    return <Transfer dataSource={bigData} targetKeys={["item2", "item5", "item8", "item12", "item15"]} titles={["Available Items", "Selected Items"]} showSearch operations={["Transfer →", "← Return"]} pagination={{
      pageSize: 5
    }} onChange={action("paginated-transfer")} onSelectChange={action("paginated-selection")} />;
  }
}`,...(be=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ve,Se,ke;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const customData: TransferItem[] = [{
      key: "task1",
      title: "Setup Development Environment",
      description: "High Priority"
    }, {
      key: "task2",
      title: "Design System Components",
      description: "Medium Priority"
    }, {
      key: "task3",
      title: "API Integration",
      description: "High Priority"
    }, {
      key: "task4",
      title: "Testing Framework",
      description: "Low Priority"
    }, {
      key: "task5",
      title: "Documentation",
      description: "Medium Priority"
    }];
    const customRender = (item: TransferItem) => <div className="w-full">
        <div className="flex items-center justify-between">
          <span className="font-medium text-secondary-900">{item.title}</span>
          <span className={clsx("px-2 py-1 text-xs rounded-full", {
          "bg-red-100 text-red-800": item.description === "High Priority",
          "bg-yellow-100 text-yellow-800": item.description === "Medium Priority",
          "bg-green-100 text-green-800": item.description === "Low Priority"
        })}>
            {item.description}
          </span>
        </div>
      </div>;
    return <Transfer dataSource={customData} targetKeys={["task1", "task3"]} titles={["Backlog", "Sprint Tasks"]} render={customRender} showSearch onChange={action("tasks-moved")} onSelectChange={action("task-selection")} />;
  }
}`,...(ke=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var we,je,Ce;H.parameters={...H.parameters,docs:{...(we=H.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>(["user2", "user4"]);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const handleChange = (newTargetKeys: string[], direction: "left" | "right", moveKeys: string[]) => {
      setTargetKeys(newTargetKeys);
      action("controlled-change")({
        newTargetKeys,
        direction,
        moveKeys
      });
    };
    const handleSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
      setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
      action("controlled-select")({
        sourceSelectedKeys,
        targetSelectedKeys
      });
    };
    const resetTransfer = () => {
      setTargetKeys([]);
      setSelectedKeys([]);
    };
    const selectAll = () => {
      setTargetKeys(sampleData.filter(item => !item.disabled).map(item => item.key));
      setSelectedKeys([]);
    };
    return <div className="space-y-4">
        <div className="flex gap-2">
          <button onClick={resetTransfer} className="px-4 py-2 text-sm bg-secondary-100 text-secondary-700 rounded hover:bg-secondary-200 transition-colors">
            Reset All
          </button>
          <button onClick={selectAll} className="px-4 py-2 text-sm bg-primary-100 text-primary-700 rounded hover:bg-primary-200 transition-colors">
            Move All to Target
          </button>
        </div>

        <Transfer dataSource={sampleData} targetKeys={targetKeys} selectedKeys={selectedKeys} titles={["Source List", "Target List"]} showSearch showSelectAll onChange={handleChange} onSelectChange={handleSelectChange} />

        <div className="text-sm text-secondary-600 space-y-1">
          <div>Target Keys: {targetKeys.join(", ") || "none"}</div>
          <div>Selected Keys: {selectedKeys.join(", ") || "none"}</div>
        </div>
      </div>;
  }
}`,...(Ce=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Ne,De,Le;_.parameters={..._.parameters,docs:{...(Ne=_.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    dataSource: sampleData.slice(0, 6),
    targetKeys: ["user2", "user4"],
    titles: ["Available Users", "Selected Users"],
    disabled: true,
    showSearch: true,
    onChange: action("disabled-transfer")
  }
}`,...(Le=(De=_.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};var Te,Ae,Ke;F.parameters={...F.parameters,docs:{...(Te=F.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    dataSource: permissionsData,
    targetKeys: ["read", "write"],
    titles: ["Available Permissions", "User Permissions"],
    operations: ["Grant →", "← Revoke"],
    showSearch: true,
    selectAllLabels: ["Select all permissions", "Select all granted"],
    onChange: action("permissions-transfer"),
    onSelectChange: action("permissions-select")
  }
}`,...(Ke=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:Ke.source}}};const st=["Default","WithSearch","WithIcons","OneWayTransfer","WithPagination","CustomRender","ControlledTransfer","DisabledState","CustomOperations"];export{H as ControlledTransfer,F as CustomOperations,z as CustomRender,q as Default,_ as DisabledState,B as OneWayTransfer,E as WithIcons,U as WithPagination,R as WithSearch,st as __namedExportsOrder,rt as default};
