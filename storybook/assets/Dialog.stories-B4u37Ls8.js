import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as i}from"./index-B-lxVbXh.js";import{R as z,r as c}from"./index-DkvSDgFW.js";import{c as u}from"./clsx-B-dksMZM.js";import{B as p}from"./Button-igjKbdfR.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const ke={xs:"max-w-xs",sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl"},h={default:{container:"bg-white border-secondary-200",icon:"text-secondary-600",title:"text-secondary-900",description:"text-secondary-600"},success:{container:"bg-white border-green-200",icon:"text-green-600",title:"text-secondary-900",description:"text-secondary-600"},warning:{container:"bg-white border-yellow-200",icon:"text-yellow-600",title:"text-secondary-900",description:"text-secondary-600"},error:{container:"bg-white border-red-200",icon:"text-red-600",title:"text-secondary-900",description:"text-secondary-600"},info:{container:"bg-white border-blue-200",icon:"text-blue-600",title:"text-secondary-900",description:"text-secondary-600"}},xe={default:()=>e.jsx("svg",{className:"w-full h-full",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4c0-4.418 3.582-8 8-8s8 3.582 8 8z"})}),success:()=>e.jsx("svg",{className:"w-full h-full",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),warning:()=>e.jsx("svg",{className:"w-full h-full",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-1.732-.833-2.464 0L4.348 16.5c-.77.833.192 2.5 1.732 2.5z"})}),error:()=>e.jsx("svg",{className:"w-full h-full",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),info:()=>e.jsx("svg",{className:"w-full h-full",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})},we=()=>e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),L=({variant:a="primary",onClick:o,disabled:s,children:n})=>{const r={primary:"bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 text-white",secondary:"bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500 text-white",success:"bg-green-600 hover:bg-green-700 focus:ring-green-500 text-white",warning:"bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500 text-white",destructive:"bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white",outline:"bg-white hover:bg-secondary-50 focus:ring-secondary-500 text-secondary-700 border border-secondary-300"};return e.jsx("button",{onClick:o,disabled:s,className:u("px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",r[a],s&&"opacity-50 cursor-not-allowed"),children:n})},l=z.forwardRef(({isOpen:a,onClose:o,title:s,description:n,children:r,type:t="default",size:f="md",showCloseButton:pe=!0,closeOnOverlayClick:me=!0,closeOnEscapeKey:B=!0,className:fe,overlayClassName:ge,confirmButton:m,cancelButton:d,icon:I,showIcon:g=!0,...ye},he)=>{if(z.useEffect(()=>{const y=Ce=>{Ce.key==="Escape"&&B&&a&&o()};if(a)return document.addEventListener("keydown",y),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",y),document.body.style.overflow="unset"}},[a,B,o]),!a)return null;const be=xe[t],ve=()=>{d!=null&&d.onClick?d.onClick():o()};return e.jsxs("div",{className:"fixed inset-0 z-50",children:[e.jsx("div",{className:u("fixed inset-0 bg-black bg-opacity-50 transition-opacity",ge),onClick:me?o:void 0}),e.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-4",children:e.jsxs("div",{ref:he,className:u("relative w-full rounded-xl shadow-2xl border-0 transition-all",ke[f],h[t].container,"animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-300",fe),onClick:y=>y.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":s?"dialog-title":void 0,"aria-describedby":n?"dialog-description":void 0,...ye,children:[pe&&e.jsx("button",{onClick:o,className:"absolute top-4 right-4 text-secondary-400 hover:text-secondary-600 transition-colors","aria-label":"Close dialog",children:e.jsx(we,{})}),e.jsxs("div",{className:"p-6",children:[(s||g)&&e.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[(g||I)&&e.jsx("div",{className:u("flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",{"bg-secondary-100":t==="default","bg-green-100":t==="success","bg-yellow-100":t==="warning","bg-red-100":t==="error","bg-blue-100":t==="info"},h[t].icon),children:I||e.jsx(be,{})}),s&&e.jsx("div",{className:"flex-1 min-w-0",children:e.jsx("h2",{id:"dialog-title",className:u("text-xl font-semibold leading-7 tracking-tight",h[t].title),children:s})})]}),n&&e.jsx("div",{id:"dialog-description",className:u("text-sm leading-relaxed",h[t].description,(s||g)&&"pl-16",r?"mb-4":"mb-6"),children:n}),r&&e.jsx("div",{className:u("mb-6",(s||g)&&!n&&"pl-16"),children:r})]}),(m||d)&&e.jsx("div",{className:"px-6 py-4 bg-secondary-25 border-t border-secondary-100 rounded-b-xl",children:e.jsxs("div",{className:"flex justify-end gap-3",children:[d&&e.jsx(L,{variant:d.variant||"outline",onClick:ve,children:d.label}),m&&e.jsx(L,{variant:m.variant||"primary",onClick:m.onClick,disabled:m.disabled,children:m.label})]})})]})})]})});l.displayName="Dialog";try{l.displayName="Dialog",l.__docgenInfo={description:"",displayName:"Dialog",props:{isOpen:{defaultValue:null,description:"Apakah dialog terbuka",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback ketika dialog ditutup",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"Title dialog",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Deskripsi/konten dialog",name:"description",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children content",name:"children",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:"default"},description:"Tipe dialog",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},size:{defaultValue:{value:"md"},description:"Ukuran dialog",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'}]}},showCloseButton:{defaultValue:{value:"true"},description:"Apakah menampilkan close button (X)",name:"showCloseButton",required:!1,type:{name:"boolean"}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"Apakah dialog bisa ditutup dengan overlay click",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscapeKey:{defaultValue:{value:"true"},description:"Apakah dialog bisa ditutup dengan ESC key",name:"closeOnEscapeKey",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom className untuk dialog",name:"className",required:!1,type:{name:"string"}},overlayClassName:{defaultValue:null,description:"Custom className untuk overlay",name:"overlayClassName",required:!1,type:{name:"string"}},confirmButton:{defaultValue:null,description:"Confirm button props",name:"confirmButton",required:!1,type:{name:'{ label: string; onClick: () => void; variant?: "success" | "warning" | "primary" | "destructive" | "outline"; disabled?: boolean; } | undefined'}},cancelButton:{defaultValue:null,description:"Cancel button props",name:"cancelButton",required:!1,type:{name:'{ label: string; onClick?: (() => void); variant?: "primary" | "outline" | "secondary"; } | undefined'}},icon:{defaultValue:null,description:"Icon untuk dialog",name:"icon",required:!1,type:{name:"ReactNode"}},showIcon:{defaultValue:{value:"true"},description:"Apakah menampilkan default icon sesuai tipe",name:"showIcon",required:!1,type:{name:"boolean"}}}}}catch{}const Le={title:"Feedback/Dialog",component:l,parameters:{layout:"centered",docs:{description:{component:"Komponen Dialog untuk konfirmasi, alerts, dan interaksi sederhana. Berbeda dari Modal, Dialog biasanya lebih kecil dan fokus pada aksi spesifik."}}},tags:["autodocs"],argTypes:{isOpen:{control:{type:"boolean"},description:"Apakah dialog terbuka"},title:{control:{type:"text"},description:"Title dialog"},description:{control:{type:"text"},description:"Deskripsi/konten dialog"},type:{control:{type:"select"},options:["default","success","warning","error","info"],description:"Tipe dialog"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Ukuran dialog"},showCloseButton:{control:{type:"boolean"},description:"Apakah menampilkan close button (X)"},closeOnOverlayClick:{control:{type:"boolean"},description:"Apakah dialog bisa ditutup dengan overlay click"},closeOnEscapeKey:{control:{type:"boolean"},description:"Apakah dialog bisa ditutup dengan ESC key"},showIcon:{control:{type:"boolean"},description:"Apakah menampilkan default icon sesuai tipe"}}},b={args:{isOpen:!0,title:"Confirm Action",description:"Are you sure you want to proceed with this action? This cannot be undone.",type:"default",size:"md",showCloseButton:!0,closeOnOverlayClick:!0,closeOnEscapeKey:!0,showIcon:!0,confirmButton:{label:"Confirm",onClick:i("confirmed"),variant:"primary"},cancelButton:{label:"Cancel",onClick:i("cancelled")},onClose:i("dialog-closed")}},v={render:()=>{const[a,o]=c.useState(null),s=[{id:"success",type:"success",title:"Success",description:"Your changes have been saved successfully!",confirmLabel:"Continue"},{id:"warning",type:"warning",title:"Warning",description:"This action may have unintended consequences. Please review before continuing.",confirmLabel:"Proceed"},{id:"error",type:"error",title:"Error",description:"Something went wrong. Please try again or contact support if the problem persists.",confirmLabel:"Retry"},{id:"info",type:"info",title:"Information",description:"Here's some important information you should know before proceeding.",confirmLabel:"Got it"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"grid grid-cols-2 gap-4",children:s.map(n=>e.jsxs(p,{onClick:()=>o(n.id),variant:"outline",className:"capitalize",children:["Show ",n.type," Dialog"]},n.id))}),s.map(n=>e.jsx(l,{isOpen:a===n.id,onClose:()=>o(null),type:n.type,title:n.title,description:n.description,confirmButton:{label:n.confirmLabel,onClick:()=>{i(`${n.id}-confirmed`)(),o(null)},variant:n.type==="error"?"destructive":"primary"},cancelButton:{label:"Cancel",onClick:()=>o(null)}},n.id))]})}},C={render:()=>{const[a,o]=c.useState(null),s=[{id:"xs",label:"Extra Small",size:"xs"},{id:"sm",label:"Small",size:"sm"},{id:"md",label:"Medium",size:"md"},{id:"lg",label:"Large",size:"lg"},{id:"xl",label:"Extra Large",size:"xl"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-4",children:s.map(n=>e.jsx(p,{onClick:()=>o(n.id),variant:"outline",children:n.label},n.id))}),s.map(n=>e.jsx(l,{isOpen:a===n.id,onClose:()=>o(null),size:n.size,title:`${n.label} Dialog`,description:`This is a ${n.label.toLowerCase()} dialog example with different content length to show how the dialog adapts to different sizes.`,confirmButton:{label:"Confirm",onClick:()=>o(null)},cancelButton:{label:"Cancel",onClick:()=>o(null)}},n.id))]})}},k={render:()=>{const[a,o]=c.useState(!1),[s,n]=c.useState(!1),r=()=>{n(!0),setTimeout(()=>{n(!1),o(!1),i("item-deleted")()},2e3)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{onClick:()=>o(!0),variant:"destructive",children:"Delete Item"}),e.jsx(l,{isOpen:a,onClose:()=>o(!1),type:"error",title:"Delete Item",description:"Are you sure you want to delete this item? This action cannot be undone.",confirmButton:{label:s?"Deleting...":"Delete",onClick:r,variant:"destructive",disabled:s},cancelButton:{label:"Cancel",onClick:()=>o(!1)},closeOnOverlayClick:!s,closeOnEscapeKey:!s})]})}},x={render:()=>{const[a,o]=c.useState(!1),[s,n]=c.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{onClick:()=>o(!0),variant:"primary",children:"Subscribe to Newsletter"}),e.jsx(l,{isOpen:a,onClose:()=>o(!1),type:"info",title:"Subscribe to Newsletter",description:"Get the latest updates and news delivered to your inbox.",confirmButton:{label:"Subscribe",onClick:()=>{i("subscribed")(s),o(!1),n("")},disabled:!s},cancelButton:{label:"Maybe Later",onClick:()=>o(!1)},children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-secondary-700",children:"Email Address"}),e.jsx("input",{type:"email",id:"email",value:s,onChange:r=>n(r.target.value),className:"block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500",placeholder:"your@email.com"})]})})]})}},w={args:{isOpen:!0,title:"Simple Dialog",description:"This dialog doesn't have an icon.",showIcon:!1,confirmButton:{label:"OK",onClick:i("ok-clicked")},onClose:i("dialog-closed")}},O={render:()=>{const[a,o]=c.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{onClick:()=>o(!0),variant:"outline",children:"Show Alert"}),e.jsx(l,{isOpen:a,onClose:()=>o(!1),type:"warning",title:"Low Storage Space",description:"Your device is running low on storage space. Please free up some space to continue.",confirmButton:{label:"Free Up Space",onClick:()=>{i("free-space-clicked")(),o(!1)},variant:"warning"},showCloseButton:!1,closeOnOverlayClick:!1,closeOnEscapeKey:!1})]})}},Oe=()=>e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})}),D={args:{isOpen:!0,title:"Thank You!",description:"We appreciate your feedback and support.",type:"success",icon:e.jsx(Oe,{}),confirmButton:{label:"You're Welcome",onClick:i("welcome-clicked")},onClose:i("dialog-closed")}},S={render:()=>{const[a,o]=c.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{onClick:()=>o(!0),variant:"outline",children:"Show Choice Dialog"}),e.jsx(l,{isOpen:a,onClose:()=>o(!1),confirmButton:{label:"Yes, I'm sure",onClick:()=>{i("confirmed")(),o(!1)},variant:"primary"},cancelButton:{label:"No, cancel",onClick:()=>o(!1),variant:"outline"},showIcon:!1,children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-lg font-medium text-secondary-900 mb-2",children:"Are you absolutely sure?"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]})})]})}},j={render:()=>{const[a,o]=c.useState({confirm:!1,success:!1,error:!1}),s=t=>{o(f=>({...f,[t]:!0}))},n=t=>{o(f=>({...f,[t]:!1}))},r=()=>{n("confirm");const t=Math.random()>.5;setTimeout(()=>{s(t?"success":"error")},300)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-center",children:e.jsx(p,{onClick:()=>s("confirm"),variant:"primary",children:"Start Process"})}),e.jsx(l,{isOpen:a.confirm,onClose:()=>n("confirm"),type:"warning",title:"Confirm Process",description:"Do you want to start the process? This will take a few seconds.",confirmButton:{label:"Start Process",onClick:r,variant:"primary"},cancelButton:{label:"Cancel",onClick:()=>n("confirm")}}),e.jsx(l,{isOpen:a.success,onClose:()=>n("success"),type:"success",title:"Process Completed",description:"The process has been completed successfully!",confirmButton:{label:"Great!",onClick:()=>n("success"),variant:"success"}}),e.jsx(l,{isOpen:a.error,onClose:()=>n("error"),type:"error",title:"Process Failed",description:"Something went wrong during the process. Please try again.",confirmButton:{label:"Try Again",onClick:()=>{n("error"),s("confirm")},variant:"destructive"},cancelButton:{label:"Cancel",onClick:()=>n("error")}})]})}},N={args:{isOpen:!0,title:"Playground Dialog",description:"This is a playground dialog for testing all the different props and configurations.",type:"default",size:"md",showCloseButton:!0,closeOnOverlayClick:!0,closeOnEscapeKey:!0,showIcon:!0,confirmButton:{label:"Confirm",onClick:i("playground-confirmed"),variant:"primary",disabled:!1},cancelButton:{label:"Cancel",onClick:i("playground-cancelled")},onClose:i("playground-closed")}};var T,E,A;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Confirm Action",
    description: "Are you sure you want to proceed with this action? This cannot be undone.",
    type: "default",
    size: "md",
    showCloseButton: true,
    closeOnOverlayClick: true,
    closeOnEscapeKey: true,
    showIcon: true,
    confirmButton: {
      label: "Confirm",
      onClick: action("confirmed"),
      variant: "primary"
    },
    cancelButton: {
      label: "Cancel",
      onClick: action("cancelled")
    },
    onClose: action("dialog-closed")
  }
}`,...(A=(E=b.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var P,M,q;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [openDialog, setOpenDialog] = useState<string | null>(null);
    const dialogs = [{
      id: "success",
      type: "success" as const,
      title: "Success",
      description: "Your changes have been saved successfully!",
      confirmLabel: "Continue"
    }, {
      id: "warning",
      type: "warning" as const,
      title: "Warning",
      description: "This action may have unintended consequences. Please review before continuing.",
      confirmLabel: "Proceed"
    }, {
      id: "error",
      type: "error" as const,
      title: "Error",
      description: "Something went wrong. Please try again or contact support if the problem persists.",
      confirmLabel: "Retry"
    }, {
      id: "info",
      type: "info" as const,
      title: "Information",
      description: "Here's some important information you should know before proceeding.",
      confirmLabel: "Got it"
    }];
    return <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {dialogs.map(dialog => <Button key={dialog.id} onClick={() => setOpenDialog(dialog.id)} variant="outline" className="capitalize">
              Show {dialog.type} Dialog
            </Button>)}
        </div>

        {dialogs.map(dialog => <Dialog key={dialog.id} isOpen={openDialog === dialog.id} onClose={() => setOpenDialog(null)} type={dialog.type} title={dialog.title} description={dialog.description} confirmButton={{
        label: dialog.confirmLabel,
        onClick: () => {
          action(\`\${dialog.id}-confirmed\`)();
          setOpenDialog(null);
        },
        variant: dialog.type === "error" ? "destructive" : "primary"
      }} cancelButton={{
        label: "Cancel",
        onClick: () => setOpenDialog(null)
      }} />)}
      </div>;
  }
}`,...(q=(M=v.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var V,W,K;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    const sizes = [{
      id: "xs",
      label: "Extra Small",
      size: "xs" as const
    }, {
      id: "sm",
      label: "Small",
      size: "sm" as const
    }, {
      id: "md",
      label: "Medium",
      size: "md" as const
    }, {
      id: "lg",
      label: "Large",
      size: "lg" as const
    }, {
      id: "xl",
      label: "Extra Large",
      size: "xl" as const
    }];
    return <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          {sizes.map(sizeOption => <Button key={sizeOption.id} onClick={() => setOpenSize(sizeOption.id)} variant="outline">
              {sizeOption.label}
            </Button>)}
        </div>

        {sizes.map(sizeOption => <Dialog key={sizeOption.id} isOpen={openSize === sizeOption.id} onClose={() => setOpenSize(null)} size={sizeOption.size} title={\`\${sizeOption.label} Dialog\`} description={\`This is a \${sizeOption.label.toLowerCase()} dialog example with different content length to show how the dialog adapts to different sizes.\`} confirmButton={{
        label: "Confirm",
        onClick: () => setOpenSize(null)
      }} cancelButton={{
        label: "Cancel",
        onClick: () => setOpenSize(null)
      }} />)}
      </div>;
  }
}`,...(K=(W=C.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var R,Y,_;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleConfirm = () => {
      setIsLoading(true);
      // Simulate async operation
      setTimeout(() => {
        setIsLoading(false);
        setIsOpen(false);
        action("item-deleted")();
      }, 2000);
    };
    return <div className="space-y-4">
        <Button onClick={() => setIsOpen(true)} variant="destructive">
          Delete Item
        </Button>

        <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} type="error" title="Delete Item" description="Are you sure you want to delete this item? This action cannot be undone." confirmButton={{
        label: isLoading ? "Deleting..." : "Delete",
        onClick: handleConfirm,
        variant: "destructive",
        disabled: isLoading
      }} cancelButton={{
        label: "Cancel",
        onClick: () => setIsOpen(false)
      }} closeOnOverlayClick={!isLoading} closeOnEscapeKey={!isLoading} />
      </div>;
  }
}`,...(_=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var F,G,$;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    return <div className="space-y-4">
        <Button onClick={() => setIsOpen(true)} variant="primary">
          Subscribe to Newsletter
        </Button>

        <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} type="info" title="Subscribe to Newsletter" description="Get the latest updates and news delivered to your inbox." confirmButton={{
        label: "Subscribe",
        onClick: () => {
          action("subscribed")(email);
          setIsOpen(false);
          setEmail("");
        },
        disabled: !email
      }} cancelButton={{
        label: "Maybe Later",
        onClick: () => setIsOpen(false)
      }}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
              Email Address
            </label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="block w-full px-3 py-2 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" placeholder="your@email.com" />
          </div>
        </Dialog>
      </div>;
  }
}`,...($=(G=x.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var H,U,X;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Simple Dialog",
    description: "This dialog doesn't have an icon.",
    showIcon: false,
    confirmButton: {
      label: "OK",
      onClick: action("ok-clicked")
    },
    onClose: action("dialog-closed")
  }
}`,...(X=(U=w.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var J,Q,Z;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="space-y-4">
        <Button onClick={() => setIsOpen(true)} variant="outline">
          Show Alert
        </Button>

        <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} type="warning" title="Low Storage Space" description="Your device is running low on storage space. Please free up some space to continue." confirmButton={{
        label: "Free Up Space",
        onClick: () => {
          action("free-space-clicked")();
          setIsOpen(false);
        },
        variant: "warning"
      }} showCloseButton={false} closeOnOverlayClick={false} closeOnEscapeKey={false} />
      </div>;
  }
}`,...(Z=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ne,oe;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Thank You!",
    description: "We appreciate your feedback and support.",
    type: "success",
    icon: <HeartIcon />,
    confirmButton: {
      label: "You're Welcome",
      onClick: action("welcome-clicked")
    },
    onClose: action("dialog-closed")
  }
}`,...(oe=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ae,te;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="space-y-4">
        <Button onClick={() => setIsOpen(true)} variant="outline">
          Show Choice Dialog
        </Button>

        <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} confirmButton={{
        label: "Yes, I'm sure",
        onClick: () => {
          action("confirmed")();
          setIsOpen(false);
        },
        variant: "primary"
      }} cancelButton={{
        label: "No, cancel",
        onClick: () => setIsOpen(false),
        variant: "outline"
      }} showIcon={false}>
          <div className="text-center">
            <p className="text-lg font-medium text-secondary-900 mb-2">
              Are you absolutely sure?
            </p>
            <p className="text-sm text-secondary-600">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </p>
          </div>
        </Dialog>
      </div>;
  }
}`,...(te=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ie,le,re;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [dialogs, setDialogs] = useState({
      confirm: false,
      success: false,
      error: false
    });
    const openDialog = (type: keyof typeof dialogs) => {
      setDialogs(prev => ({
        ...prev,
        [type]: true
      }));
    };
    const closeDialog = (type: keyof typeof dialogs) => {
      setDialogs(prev => ({
        ...prev,
        [type]: false
      }));
    };
    const handleAction = () => {
      closeDialog("confirm");
      // Simulate random success/error
      const isSuccess = Math.random() > 0.5;
      setTimeout(() => {
        openDialog(isSuccess ? "success" : "error");
      }, 300);
    };
    return <div className="space-y-4">
        <div className="text-center">
          <Button onClick={() => openDialog("confirm")} variant="primary">
            Start Process
          </Button>
        </div>

        {/* Confirmation Dialog */}
        <Dialog isOpen={dialogs.confirm} onClose={() => closeDialog("confirm")} type="warning" title="Confirm Process" description="Do you want to start the process? This will take a few seconds." confirmButton={{
        label: "Start Process",
        onClick: handleAction,
        variant: "primary"
      }} cancelButton={{
        label: "Cancel",
        onClick: () => closeDialog("confirm")
      }} />

        {/* Success Dialog */}
        <Dialog isOpen={dialogs.success} onClose={() => closeDialog("success")} type="success" title="Process Completed" description="The process has been completed successfully!" confirmButton={{
        label: "Great!",
        onClick: () => closeDialog("success"),
        variant: "success"
      }} />

        {/* Error Dialog */}
        <Dialog isOpen={dialogs.error} onClose={() => closeDialog("error")} type="error" title="Process Failed" description="Something went wrong during the process. Please try again." confirmButton={{
        label: "Try Again",
        onClick: () => {
          closeDialog("error");
          openDialog("confirm");
        },
        variant: "destructive"
      }} cancelButton={{
        label: "Cancel",
        onClick: () => closeDialog("error")
      }} />
      </div>;
  }
}`,...(re=(le=j.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ce,de,ue;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Playground Dialog",
    description: "This is a playground dialog for testing all the different props and configurations.",
    type: "default",
    size: "md",
    showCloseButton: true,
    closeOnOverlayClick: true,
    closeOnEscapeKey: true,
    showIcon: true,
    confirmButton: {
      label: "Confirm",
      onClick: action("playground-confirmed"),
      variant: "primary",
      disabled: false
    },
    cancelButton: {
      label: "Cancel",
      onClick: action("playground-cancelled")
    },
    onClose: action("playground-closed")
  }
}`,...(ue=(de=N.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Te=["Default","Types","Sizes","ConfirmationDialog","WithCustomContent","WithoutIcon","AlertDialog","CustomIcon","OnlyButtons","InteractiveDemo","Playground"];export{O as AlertDialog,k as ConfirmationDialog,D as CustomIcon,b as Default,j as InteractiveDemo,S as OnlyButtons,N as Playground,C as Sizes,v as Types,x as WithCustomContent,w as WithoutIcon,Te as __namedExportsOrder,Le as default};
