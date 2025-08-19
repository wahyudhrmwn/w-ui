import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a}from"./index-B-lxVbXh.js";import{R as b,r as _}from"./index-DkvSDgFW.js";import{c as j}from"./clsx-B-dksMZM.js";import{B as n}from"./Button-BPqCfLaF.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const R={sm:{menu:"min-w-32 text-sm",item:"px-2 py-1.5 text-sm",divider:"my-1"},md:{menu:"min-w-40 text-base",item:"px-3 py-2 text-base",divider:"my-1.5"},lg:{menu:"min-w-48 text-lg",item:"px-4 py-3 text-lg",divider:"my-2"}},Be={"bottom-start":"top-full left-0 mt-1","bottom-end":"top-full right-0 mt-1","bottom-center":"top-full left-1/2 transform -translate-x-1/2 mt-1","top-start":"bottom-full left-0 mb-1","top-end":"bottom-full right-0 mb-1","top-center":"bottom-full left-1/2 transform -translate-x-1/2 mb-1"},s=b.forwardRef(({items:i,trigger:c,placement:L="bottom-start",size:v="md",disabled:x=!1,className:ke,triggerClassName:we,onToggle:r,isOpen:m,closeOnClick:f=!0,...je},ye)=>{const[Ce,h]=b.useState(!1),[M,k]=b.useState(-1),F=b.useRef(null),De=b.useRef(null),p=m!==void 0?m:Ce;b.useEffect(()=>{const t=d=>{F.current&&!F.current.contains(d.target)&&(m===void 0&&h(!1),r==null||r(!1))};if(p)return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[p,m,r]),b.useEffect(()=>{const t=d=>{var V;if(p)switch(d.key){case"Escape":d.preventDefault(),m===void 0&&h(!1),r==null||r(!1),k(-1);break;case"ArrowDown":d.preventDefault(),k(u=>{const q=i.filter(w=>!w.disabled&&!w.divider);return u<q.length-1?u+1:0});break;case"ArrowUp":d.preventDefault(),k(u=>{const q=i.filter(w=>!w.disabled&&!w.divider);return u>0?u-1:q.length-1});break;case"Enter":case" ":d.preventDefault();const g=i.filter(u=>!u.disabled&&!u.divider)[M];g&&((V=g.onClick)==null||V.call(g),f&&m===void 0&&h(!1),f&&(r==null||r(!1)));break}};if(p)return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[p,M,i,f,m,r]);const W=()=>{if(x)return;const t=!p;m===void 0&&h(t),r==null||r(t),t||k(-1)},Ie=t=>{var d;t.disabled||((d=t.onClick)==null||d.call(t),f&&m===void 0&&h(!1),f&&(r==null||r(!1)),k(-1))},Se=i.filter(t=>!t.disabled&&!t.divider);return e.jsxs("div",{ref:ye,className:j("dropdown relative inline-block",ke),...je,children:[e.jsx("div",{ref:F,className:j("dropdown-trigger cursor-pointer",x&&"cursor-not-allowed opacity-50",we),onClick:W,onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),W())},tabIndex:x?-1:0,role:"button","aria-expanded":p,"aria-haspopup":"true",children:c}),p&&e.jsx("div",{ref:De,className:j("absolute z-50 bg-white border border-secondary-200 rounded-lg shadow-lg py-1","transition-all duration-200 ease-out","animate-in fade-in-0 zoom-in-95 slide-in-from-top-2",R[v].menu,Be[L]),role:"menu","aria-orientation":"vertical",children:i.map((t,d)=>{if(t.divider)return e.jsx("div",{className:j("border-t border-secondary-200",R[v].divider),role:"separator"},t.id);const U=Se.findIndex(g=>g.id===t.id)===M;return e.jsxs("div",{className:j("flex items-center gap-2 cursor-pointer transition-colors duration-150",R[v].item,t.disabled?"text-secondary-400 cursor-not-allowed":"text-secondary-700 hover:bg-secondary-50 hover:text-secondary-900",U&&!t.disabled&&"bg-secondary-100 text-secondary-900"),onClick:()=>Ie(t),role:"menuitem",tabIndex:-1,"aria-disabled":t.disabled,children:[t.icon&&e.jsx("span",{className:"flex-shrink-0 w-4 h-4",children:t.icon}),e.jsx("span",{className:"flex-1 truncate",children:t.label})]},t.id)})})]})});s.displayName="Dropdown";try{s.displayName="Dropdown",s.__docgenInfo={description:"",displayName:"Dropdown",props:{items:{defaultValue:null,description:"Items dropdown",name:"items",required:!0,type:{name:"DropdownItem[]"}},trigger:{defaultValue:null,description:"Trigger element",name:"trigger",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"bottom-start"},description:"Placement dropdown",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-center"'},{value:'"top-center"'}]}},size:{defaultValue:{value:"md"},description:"Ukuran dropdown",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},disabled:{defaultValue:{value:"false"},description:"Apakah dropdown disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom className untuk dropdown",name:"className",required:!1,type:{name:"string"}},triggerClassName:{defaultValue:null,description:"Custom className untuk trigger",name:"triggerClassName",required:!1,type:{name:"string"}},onToggle:{defaultValue:null,description:"Callback ketika dropdown dibuka/ditutup",name:"onToggle",required:!1,type:{name:"((isOpen: boolean) => void)"}},isOpen:{defaultValue:null,description:"Apakah dropdown terbuka secara controlled",name:"isOpen",required:!1,type:{name:"boolean"}},closeOnClick:{defaultValue:{value:"true"},description:"Apakah close on click item",name:"closeOnClick",required:!1,type:{name:"boolean"}}}}}catch{}const Re={title:"Navigation/Dropdown",component:s,parameters:{layout:"centered",docs:{description:{component:"Komponen Dropdown yang fleksibel untuk menampilkan menu pilihan. Mendukung keyboard navigation, berbagai ukuran, dan placement yang dapat dikustomisasi."}}},tags:["autodocs"],argTypes:{items:{description:"Array items untuk dropdown menu",control:!1},trigger:{description:"Element yang akan men-trigger dropdown",control:!1},placement:{control:{type:"select"},options:["bottom-start","bottom-end","bottom-center","top-start","top-end","top-center"],description:"Posisi dropdown relatif terhadap trigger"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran dropdown"},disabled:{control:{type:"boolean"},description:"Apakah dropdown disabled"},closeOnClick:{control:{type:"boolean"},description:"Apakah dropdown tertutup ketika item diklik"}}},l=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),P=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),A=()=>e.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),Ne=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),o=[{id:"profile",label:"Profile",icon:e.jsx(P,{}),onClick:a("profile-clicked")},{id:"settings",label:"Settings",icon:e.jsx(A,{}),onClick:a("settings-clicked")},{id:"divider-1",label:"",divider:!0},{id:"logout",label:"Logout",icon:e.jsx(Ne,{}),onClick:a("logout-clicked")}],ze=[{id:"recent",label:"Recent Files",onClick:a("recent-clicked")},{id:"starred",label:"Starred",onClick:a("starred-clicked")},{id:"shared",label:"Shared with me",onClick:a("shared-clicked")},{id:"divider-1",label:"",divider:!0},{id:"upload",label:"Upload",onClick:a("upload-clicked")},{id:"create-folder",label:"Create Folder",onClick:a("create-folder-clicked")},{id:"divider-2",label:"",divider:!0},{id:"settings",label:"Settings",icon:e.jsx(A,{}),onClick:a("settings-clicked")},{id:"help",label:"Help",onClick:a("help-clicked")},{id:"feedback",label:"Send Feedback",onClick:a("feedback-clicked")}],Ee=[{id:"copy",label:"Copy",onClick:a("copy-clicked")},{id:"cut",label:"Cut",disabled:!0,onClick:a("cut-clicked")},{id:"paste",label:"Paste",onClick:a("paste-clicked")},{id:"divider-1",label:"",divider:!0},{id:"delete",label:"Delete",disabled:!0,onClick:a("delete-clicked")}],y={args:{items:o,trigger:e.jsxs(n,{variant:"outline",size:"md",children:["Actions ",e.jsx(l,{})]}),placement:"bottom-start",size:"md"}},C={render:()=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(s,{items:o,trigger:e.jsxs(n,{variant:"outline",size:"sm",children:["Small ",e.jsx(l,{})]}),size:"sm",placement:"bottom-start"}),e.jsx(s,{items:o,trigger:e.jsxs(n,{variant:"outline",size:"md",children:["Medium ",e.jsx(l,{})]}),size:"md",placement:"bottom-start"}),e.jsx(s,{items:o,trigger:e.jsxs(n,{variant:"outline",size:"lg",children:["Large ",e.jsx(l,{})]}),size:"lg",placement:"bottom-start"})]})},D={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-8 p-16",children:[e.jsx(s,{items:o,trigger:e.jsx(n,{variant:"outline",children:"Top Start"}),placement:"top-start"}),e.jsx(s,{items:o,trigger:e.jsx(n,{variant:"outline",children:"Top Center"}),placement:"top-center"}),e.jsx(s,{items:o,trigger:e.jsx(n,{variant:"outline",children:"Top End"}),placement:"top-end"}),e.jsx(s,{items:o,trigger:e.jsx(n,{variant:"outline",children:"Bottom Start"}),placement:"bottom-start"}),e.jsx(s,{items:o,trigger:e.jsx(n,{variant:"outline",children:"Bottom Center"}),placement:"bottom-center"}),e.jsx(s,{items:o,trigger:e.jsx(n,{variant:"outline",children:"Bottom End"}),placement:"bottom-end"})]}),parameters:{layout:"fullscreen"}},I={args:{items:Ee,trigger:e.jsxs(n,{variant:"outline",children:["Edit ",e.jsx(l,{})]}),placement:"bottom-start"}},S={args:{items:ze,trigger:e.jsxs(n,{variant:"primary",children:["File ",e.jsx(l,{})]}),placement:"bottom-start"}},B={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{items:o,trigger:e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-md border border-secondary-300 hover:bg-secondary-50 cursor-pointer",children:[e.jsx(P,{}),e.jsx("span",{children:"John Doe"}),e.jsx(l,{})]}),placement:"bottom-start"}),e.jsx(s,{items:o,trigger:e.jsx("button",{className:"p-2 rounded-full hover:bg-secondary-100",children:e.jsx(A,{})}),placement:"bottom-end"})]})},N={args:{items:o,trigger:e.jsxs(n,{variant:"outline",disabled:!0,children:["Disabled ",e.jsx(l,{})]}),disabled:!0}},z={render:()=>{const[i,c]=_.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{onClick:()=>c(!i),children:"Toggle Dropdown"}),e.jsx(n,{variant:"outline",onClick:()=>c(!1),disabled:!i,children:"Close Dropdown"})]}),e.jsx(s,{items:o,trigger:e.jsxs(n,{variant:"outline",children:["Controlled Menu ",e.jsx(l,{})]}),isOpen:i,onToggle:c,closeOnClick:!1})]})}},E={render:()=>{const[i,c]=_.useState("None"),[L,v]=_.useState(!1),x=[{id:"save",label:"Save File",icon:e.jsx(P,{}),onClick:()=>c("Save File")},{id:"export",label:"Export",icon:e.jsx(A,{}),onClick:()=>c("Export")},{id:"divider-1",label:"",divider:!0},{id:"share",label:"Share",onClick:()=>c("Share")},{id:"delete",label:"Delete",onClick:()=>c("Delete")}];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-sm text-secondary-600",children:["Status: Dropdown is ",L?"open":"closed"]}),e.jsxs("div",{className:"text-sm text-secondary-600",children:["Last action: ",i]}),e.jsx(s,{items:x,trigger:e.jsxs(n,{variant:"primary",children:["File Actions ",e.jsx(l,{})]}),onToggle:v,placement:"bottom-start"})]})}},O={args:{items:o,trigger:e.jsxs(n,{variant:"outline",children:["Menu ",e.jsx(l,{})]}),placement:"bottom-start",size:"md",disabled:!1,closeOnClick:!0}};var H,K,J;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    trigger: <Button variant="outline" size="md">
        Actions <ChevronDownIcon />
      </Button>,
    placement: "bottom-start",
    size: "md"
  }
}`,...(J=(K=y.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var G,Q,X;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center">
      <Dropdown items={basicItems} trigger={<Button variant="outline" size="sm">
            Small <ChevronDownIcon />
          </Button>} size="sm" placement="bottom-start" />
      <Dropdown items={basicItems} trigger={<Button variant="outline" size="md">
            Medium <ChevronDownIcon />
          </Button>} size="md" placement="bottom-start" />
      <Dropdown items={basicItems} trigger={<Button variant="outline" size="lg">
            Large <ChevronDownIcon />
          </Button>} size="lg" placement="bottom-start" />
    </div>
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-8 p-16">
      <Dropdown items={basicItems} trigger={<Button variant="outline">Top Start</Button>} placement="top-start" />
      <Dropdown items={basicItems} trigger={<Button variant="outline">Top Center</Button>} placement="top-center" />
      <Dropdown items={basicItems} trigger={<Button variant="outline">Top End</Button>} placement="top-end" />
      <Dropdown items={basicItems} trigger={<Button variant="outline">Bottom Start</Button>} placement="bottom-start" />
      <Dropdown items={basicItems} trigger={<Button variant="outline">Bottom Center</Button>} placement="bottom-center" />
      <Dropdown items={basicItems} trigger={<Button variant="outline">Bottom End</Button>} placement="bottom-end" />
    </div>,
  parameters: {
    layout: "fullscreen"
  }
}`,...($=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var T,ee,te;I.parameters={...I.parameters,docs:{...(T=I.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: itemsWithDisabled,
    trigger: <Button variant="outline">
        Edit <ChevronDownIcon />
      </Button>,
    placement: "bottom-start"
  }
}`,...(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,se;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items: manyItems,
    trigger: <Button variant="primary">
        File <ChevronDownIcon />
      </Button>,
    placement: "bottom-start"
  }
}`,...(se=(re=S.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,oe,ie;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Dropdown items={basicItems} trigger={<div className="flex items-center gap-2 px-3 py-2 rounded-md border border-secondary-300 hover:bg-secondary-50 cursor-pointer">
            <UserIcon />
            <span>John Doe</span>
            <ChevronDownIcon />
          </div>} placement="bottom-start" />

      <Dropdown items={basicItems} trigger={<button className="p-2 rounded-full hover:bg-secondary-100">
            <SettingsIcon />
          </button>} placement="bottom-end" />
    </div>
}`,...(ie=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var de,le,ce;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    trigger: <Button variant="outline" disabled>
        Disabled <ChevronDownIcon />
      </Button>,
    disabled: true
  }
}`,...(ce=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,pe,ue;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</Button>
          <Button variant="outline" onClick={() => setIsOpen(false)} disabled={!isOpen}>
            Close Dropdown
          </Button>
        </div>

        <Dropdown items={basicItems} trigger={<Button variant="outline">
              Controlled Menu <ChevronDownIcon />
            </Button>} isOpen={isOpen} onToggle={setIsOpen} closeOnClick={false} />
      </div>;
  }
}`,...(ue=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var be,ge,ve;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const [selectedAction, setSelectedAction] = useState("None");
    const [isOpen, setIsOpen] = useState(false);
    const demoItems: DropdownItem[] = [{
      id: "save",
      label: "Save File",
      icon: <UserIcon />,
      onClick: () => setSelectedAction("Save File")
    }, {
      id: "export",
      label: "Export",
      icon: <SettingsIcon />,
      onClick: () => setSelectedAction("Export")
    }, {
      id: "divider-1",
      label: "",
      divider: true
    }, {
      id: "share",
      label: "Share",
      onClick: () => setSelectedAction("Share")
    }, {
      id: "delete",
      label: "Delete",
      onClick: () => setSelectedAction("Delete")
    }];
    return <div className="space-y-4">
        <div className="text-sm text-secondary-600">
          Status: Dropdown is {isOpen ? "open" : "closed"}
        </div>
        <div className="text-sm text-secondary-600">
          Last action: {selectedAction}
        </div>

        <Dropdown items={demoItems} trigger={<Button variant="primary">
              File Actions <ChevronDownIcon />
            </Button>} onToggle={setIsOpen} placement="bottom-start" />
      </div>;
  }
}`,...(ve=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var xe,fe,he;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    trigger: <Button variant="outline">
        Menu <ChevronDownIcon />
      </Button>,
    placement: "bottom-start",
    size: "md",
    disabled: false,
    closeOnClick: true
  }
}`,...(he=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const _e=["Default","Sizes","Placements","WithDisabledItems","ManyItems","CustomTrigger","Disabled","ControlledDropdown","InteractiveDemo","Playground"];export{z as ControlledDropdown,B as CustomTrigger,y as Default,N as Disabled,E as InteractiveDemo,S as ManyItems,D as Placements,O as Playground,C as Sizes,I as WithDisabledItems,_e as __namedExportsOrder,Re as default};
