import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as u}from"./index-B-lxVbXh.js";import{R as m,r as D}from"./index-DkvSDgFW.js";import{c as I}from"./clsx-B-dksMZM.js";import{B as n}from"./Button-BPqCfLaF.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const Ie={top:{transform:"translate(-50%, calc(-100% - 8px))",left:"50%",bottom:"100%"},bottom:{transform:"translate(-50%, 8px)",left:"50%",top:"100%"},left:{transform:"translate(calc(-100% - 8px), -50%)",right:"100%",top:"50%"},right:{transform:"translate(8px, -50%)",left:"100%",top:"50%"},topLeft:{transform:"translate(0%, calc(-100% - 8px))",left:"0%",bottom:"100%"},topRight:{transform:"translate(-100%, calc(-100% - 8px))",right:"0%",bottom:"100%"},bottomLeft:{transform:"translate(0%, 8px)",left:"0%",top:"100%"},bottomRight:{transform:"translate(-100%, 8px)",right:"0%",top:"100%"}},Ee={top:{bottom:"-6px",left:"50%",transform:"translateX(-50%) rotate(45deg)",zIndex:1},bottom:{top:"-6px",left:"50%",transform:"translateX(-50%) rotate(45deg)",zIndex:1},left:{right:"-6px",top:"50%",transform:"translateY(-50%) rotate(45deg)",zIndex:1},right:{left:"-6px",top:"50%",transform:"translateY(-50%) rotate(45deg)",zIndex:1},topLeft:{bottom:"-6px",left:"16px",transform:"rotate(45deg)",zIndex:1},topRight:{bottom:"-6px",right:"16px",transform:"rotate(45deg)",zIndex:1},bottomLeft:{top:"-6px",left:"16px",transform:"rotate(45deg)",zIndex:1},bottomRight:{top:"-6px",right:"16px",transform:"rotate(45deg)",zIndex:1}},Me=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),r=m.forwardRef(({children:t,content:s,title:o,placement:a="top",trigger:l="click",visible:E,defaultVisible:ge=!1,onVisibleChange:S,showArrow:be=!0,showCloseButton:T=!1,width:M="auto",overlayClassName:ye,zIndex:V=1e3,disabled:p=!1,mouseEnterDelay:Ne=100,mouseLeaveDelay:je=100,onClose:R,...we},Fe)=>{const[Ce,ke]=m.useState(ge),[x,Be]=m.useState({x:0,y:0}),L=m.useRef(null),z=m.useRef(null),v=m.useRef(null),A=E!==void 0,d=A?E:Ce,c=i=>{A||ke(i),S==null||S(i)};m.useEffect(()=>{const i=h=>{d&&l==="click"&&L.current&&z.current&&!L.current.contains(h.target)&&!z.current.contains(h.target)&&c(!1)};if(d)return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[d,l]),m.useEffect(()=>{const i=h=>{h.key==="Escape"&&d&&c(!1)};if(d)return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[d]);const Pe=()=>{p||l!=="hover"||(v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{c(!0)},Ne))},De=()=>{p||l!=="hover"||(v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{c(!1)},je))},Se=i=>{p||l==="click"&&(i.preventDefault(),c(!d))},Te=i=>{p||l!=="contextMenu"||(i.preventDefault(),Be({x:i.clientX,y:i.clientY}),c(!0))},Ve=()=>{p||l!=="focus"||c(!0)},Re=()=>{p||l!=="focus"||c(!1)},Le=()=>{c(!1),R==null||R()},ze=()=>l==="contextMenu"&&x.x&&x.y?{position:"fixed",left:x.x,top:x.y,zIndex:V,width:M}:{...Ie[a],zIndex:V,width:M};return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:L,className:"inline-block",onClick:Se,onMouseEnter:Pe,onMouseLeave:De,onFocus:Ve,onBlur:Re,onContextMenu:Te,children:t}),d&&!p&&e.jsx("div",{className:"relative",children:e.jsxs("div",{ref:z,className:I("absolute bg-white border border-secondary-200/80 rounded-lg","shadow-lg shadow-secondary-900/10","animate-in fade-in-0 zoom-in-95 duration-200 ease-out","min-w-32 max-w-sm","z-50",l==="contextMenu"?"fixed":"absolute",ye),style:{...ze(),zIndex:V},...we,children:[be&&l!=="contextMenu"&&e.jsx("div",{className:"absolute w-3 h-3 bg-white border border-secondary-200/80",style:{...Ee[a],borderWidth:a.includes("top")?"0 1px 1px 0":a.includes("bottom")?"1px 0 0 1px":a.includes("left")?"1px 1px 0 0":"0 0 1px 1px",filter:"drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05))"}}),(o||T)&&e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-secondary-100 bg-secondary-50/40 rounded-t-lg backdrop-blur-sm",children:[o&&e.jsx("div",{className:"text-sm font-semibold text-secondary-900 truncate",children:o}),T&&e.jsx("button",{onClick:Le,className:"text-secondary-400 hover:text-secondary-600 transition-all duration-150 p-1.5 ml-2 rounded hover:bg-secondary-100 flex-shrink-0 hover:scale-105","aria-label":"Close popover",children:e.jsx(Me,{})})]}),e.jsx("div",{className:I("p-4",o||T?"rounded-b-lg":"rounded-lg","text-sm text-secondary-700 leading-relaxed","relative z-10"),children:s})]})})]})});r.displayName="Popover";try{r.displayName="Popover",r.__docgenInfo={description:"",displayName:"Popover",props:{children:{defaultValue:null,description:"Konten yang akan di-trigger popover",name:"children",required:!0,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Konten popover",name:"content",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Title popover (opsional)",name:"title",required:!1,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:"Posisi popover",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"top"'},{value:'"topLeft"'},{value:'"topRight"'},{value:'"left"'},{value:'"right"'}]}},trigger:{defaultValue:{value:"click"},description:"Trigger event",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"contextMenu"'},{value:'"click"'},{value:'"hover"'},{value:'"focus"'}]}},visible:{defaultValue:null,description:"Apakah popover visible (controlled)",name:"visible",required:!1,type:{name:"boolean"}},defaultVisible:{defaultValue:{value:"false"},description:"Default visible state (uncontrolled)",name:"defaultVisible",required:!1,type:{name:"boolean"}},onVisibleChange:{defaultValue:null,description:"Callback ketika visibility berubah",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}},showArrow:{defaultValue:{value:"true"},description:"Apakah menampilkan arrow",name:"showArrow",required:!1,type:{name:"boolean"}},showCloseButton:{defaultValue:{value:"false"},description:"Apakah menampilkan close button",name:"showCloseButton",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"auto"},description:"Lebar popover",name:"width",required:!1,type:{name:"string | number"}},overlayClassName:{defaultValue:null,description:"Custom className untuk popover",name:"overlayClassName",required:!1,type:{name:"string"}},zIndex:{defaultValue:{value:"1000"},description:"Z-index untuk popover",name:"zIndex",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Apakah disabled",name:"disabled",required:!1,type:{name:"boolean"}},mouseEnterDelay:{defaultValue:{value:"100"},description:"Delay untuk show/hide (ms)",name:"mouseEnterDelay",required:!1,type:{name:"number"}},mouseLeaveDelay:{defaultValue:{value:"100"},description:"",name:"mouseLeaveDelay",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"Callback ketika popover ditutup dengan tombol close",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const Ue={title:"Feedback/Popover",component:r,parameters:{layout:"centered",docs:{description:{component:"Komponen Popover untuk menampilkan contextual information yang lebih kaya dari tooltip. Mendukung berbagai trigger (click, hover, focus) dan positioning yang fleksibel dengan konten yang dapat berupa forms, buttons, atau rich content lainnya."}}},tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["top","bottom","left","right","topLeft","topRight","bottomLeft","bottomRight"],description:"Posisi popover"},trigger:{control:{type:"select"},options:["click","hover","focus","contextMenu"],description:"Trigger event"},visible:{control:{type:"boolean"},description:"Apakah popover visible (controlled)"},showArrow:{control:{type:"boolean"},description:"Apakah menampilkan arrow"},showCloseButton:{control:{type:"boolean"},description:"Apakah menampilkan close button"},disabled:{control:{type:"boolean"},description:"Apakah disabled"},mouseEnterDelay:{control:{type:"number",min:0,max:1e3},description:"Delay untuk show (ms)"},mouseLeaveDelay:{control:{type:"number",min:0,max:1e3},description:"Delay untuk hide (ms)"}}},Ae=()=>e.jsx("div",{children:e.jsx("p",{className:"text-sm text-secondary-600",children:"This is a simple popover content with some information that helps users understand the feature."})}),f={args:{content:e.jsx(Ae,{}),placement:"top",trigger:"click",showArrow:!0,onVisibleChange:u("visibility-changed"),children:e.jsx(n,{children:"Click me"})}},g={render:()=>{const t=[{placement:"top",label:"Top"},{placement:"bottom",label:"Bottom"},{placement:"left",label:"Left"},{placement:"right",label:"Right"},{placement:"topLeft",label:"Top Left"},{placement:"topRight",label:"Top Right"},{placement:"bottomLeft",label:"Bottom Left"},{placement:"bottomRight",label:"Bottom Right"}],s=e.jsx("div",{children:e.jsx("p",{className:"text-sm text-secondary-600",children:"Popover content positioned accordingly."})});return e.jsx("div",{className:"grid grid-cols-4 gap-8 p-20",children:t.map(o=>e.jsx(r,{content:s,placement:o.placement,trigger:"click",children:e.jsx(n,{variant:"outline",className:"w-full",children:o.label})},o.placement))})}},b={render:()=>{const t=s=>e.jsx("div",{children:e.jsxs("p",{className:"text-sm text-secondary-600",children:["This popover was triggered by ",e.jsx("strong",{children:s}),"."]})});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(r,{content:t("click"),trigger:"click",placement:"top",children:e.jsx(n,{children:"Click Trigger"})}),e.jsx(r,{content:t("hover"),trigger:"hover",placement:"top",mouseEnterDelay:0,mouseLeaveDelay:200,children:e.jsx(n,{variant:"outline",children:"Hover Trigger"})}),e.jsx(r,{content:t("focus"),trigger:"focus",placement:"top",children:e.jsx(n,{variant:"secondary",children:"Focus Trigger"})}),e.jsx(r,{content:t("right-click"),trigger:"contextMenu",placement:"top",children:e.jsx(n,{variant:"ghost",children:"Right Click"})})]}),e.jsxs("div",{className:"text-sm text-secondary-500 space-y-1",children:[e.jsx("p",{children:"• Click: Click the button to toggle popover"}),e.jsx("p",{children:"• Hover: Hover over the button to show popover"}),e.jsx("p",{children:"• Focus: Focus the button (tab or click) to show popover"}),e.jsx("p",{children:"• Right Click: Right click the button to show popover"})]})]})}},y={render:()=>{const t=e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-sm text-secondary-600",children:"This popover has a title in the header and demonstrates how you can structure content with proper hierarchy."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{size:"sm",variant:"primary",children:"Action"}),e.jsx(n,{size:"sm",variant:"outline",children:"Cancel"})]})]});return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{content:t,title:"Information",placement:"bottom",trigger:"click",width:280,children:e.jsx(n,{children:"With Title"})}),e.jsx(r,{content:t,title:"Confirm Action",showCloseButton:!0,placement:"bottom",trigger:"click",width:280,onClose:u("popover-closed"),children:e.jsx(n,{variant:"outline",children:"With Close Button"})})]})})}},N={render:()=>{const[t,s]=D.useState({name:"",email:"",message:""}),o=e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-1",children:"Name"}),e.jsx("input",{type:"text",value:t.name,onChange:a=>s({...t,name:a.target.value}),className:"w-full px-3 py-2 text-sm border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-1",children:"Email"}),e.jsx("input",{type:"email",value:t.email,onChange:a=>s({...t,email:a.target.value}),className:"w-full px-3 py-2 text-sm border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-1",children:"Message"}),e.jsx("textarea",{value:t.message,onChange:a=>s({...t,message:a.target.value}),rows:3,className:"w-full px-3 py-2 text-sm border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{size:"sm",variant:"primary",className:"flex-1",onClick:()=>{u("form-submitted")(t),s({name:"",email:"",message:""})},children:"Submit"}),e.jsx(n,{size:"sm",variant:"outline",className:"flex-1",children:"Cancel"})]})]});return e.jsx(r,{content:o,title:"Quick Contact",showCloseButton:!0,placement:"bottomLeft",trigger:"click",width:320,onVisibleChange:u("form-visibility-changed"),children:e.jsx(n,{children:"Open Contact Form"})})}},j={render:()=>{const t=e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold",children:"JD"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-secondary-900",children:"John Doe"}),e.jsx("div",{className:"text-xs text-secondary-500",children:"Software Engineer"})]})]}),e.jsxs("div",{className:"text-xs text-secondary-600 space-y-1",children:[e.jsx("div",{children:"📧 john.doe@company.com"}),e.jsx("div",{children:"📱 +1 (555) 123-4567"}),e.jsx("div",{children:"🏢 Tech Department"})]}),e.jsx("div",{className:"pt-2 border-t border-secondary-200",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{size:"sm",variant:"primary",className:"flex-1",children:"Message"}),e.jsx(n,{size:"sm",variant:"outline",className:"flex-1",children:"Call"})]})})]});return e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-secondary-600 mb-4",children:"Hover over the avatar to see user details"}),e.jsx(r,{content:t,trigger:"hover",placement:"bottom",width:280,mouseEnterDelay:200,mouseLeaveDelay:300,children:e.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-2 border border-secondary-200 rounded-lg hover:border-secondary-300 cursor-pointer",children:[e.jsx("div",{className:"w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold",children:"JD"}),e.jsx("span",{className:"text-sm text-secondary-700",children:"John Doe"})]})})]})}},w={render:()=>{const[t,s]=D.useState(!1),[o,a]=D.useState(!1),l=e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-sm text-secondary-600",children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{size:"sm",variant:"destructive",className:"flex-1",disabled:t,onClick:()=>{s(!0),u("delete-confirmed")(),setTimeout(()=>{s(!1),a(!1)},1e3)},children:t?"Deleting...":"Yes, Delete"}),e.jsx(n,{size:"sm",variant:"outline",className:"flex-1",onClick:()=>a(!1),children:"Cancel"})]})]});return e.jsx(r,{content:l,title:"Confirm Delete",visible:o,onVisibleChange:a,placement:"top",trigger:"click",width:250,children:e.jsx(n,{variant:"destructive",children:"Delete Item"})})}},C={render:()=>{const t=[{icon:"👤",label:"Profile",action:"profile"},{icon:"⚙️",label:"Settings",action:"settings"},{icon:"❓",label:"Help",action:"help"},{type:"divider"},{icon:"🚪",label:"Sign Out",action:"signout",variant:"danger"}],s=e.jsx("div",{className:"py-1",children:t.map((o,a)=>o.type==="divider"?e.jsx("div",{className:"my-1 border-t border-secondary-200"},a):e.jsxs("button",{className:I("w-full flex items-center px-3 py-2 text-sm text-left hover:bg-secondary-100 transition-colors",o.variant==="danger"?"text-red-600 hover:bg-red-50":"text-secondary-700"),onClick:()=>{u("menu-item-clicked")(o.action)},children:[e.jsx("span",{className:"mr-3",children:o.icon}),o.label]},a))});return e.jsx(r,{content:s,placement:"bottomRight",trigger:"click",width:180,showArrow:!1,children:e.jsx(n,{variant:"outline",children:"Menu ⋮"})})}},k={render:()=>{const[t,s]=D.useState(!1),o=e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-sm text-secondary-600",children:"This is a controlled popover. Its visibility is managed externally."}),e.jsx(n,{size:"sm",variant:"outline",className:"w-full",onClick:()=>s(!1),children:"Close from Inside"})]});return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{onClick:()=>s(!0),children:"Show Popover"}),e.jsx(n,{variant:"outline",onClick:()=>s(!1),children:"Hide Popover"})]}),e.jsx(r,{content:o,visible:t,onVisibleChange:s,placement:"bottom",title:"Controlled Popover",showCloseButton:!0,width:250,children:e.jsx(n,{variant:"secondary",disabled:t,children:t?"Popover is Open":"Target Element"})}),e.jsxs("div",{className:"text-sm text-secondary-500",children:["Current state: ",e.jsx("strong",{children:t?"Visible":"Hidden"})]})]})}},B={render:()=>{const t=e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm font-medium text-secondary-900",children:"System Status: Online"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-secondary-600",children:"CPU Usage"}),e.jsx("span",{className:"font-medium",children:"45%"})]}),e.jsx("div",{className:"w-full bg-secondary-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-600 h-2 rounded-full",style:{width:"45%"}})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-secondary-600",children:"Memory"}),e.jsx("span",{className:"font-medium",children:"67%"})]}),e.jsx("div",{className:"w-full bg-secondary-200 rounded-full h-2",children:e.jsx("div",{className:"bg-yellow-500 h-2 rounded-full",style:{width:"67%"}})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-secondary-600",children:"Storage"}),e.jsx("span",{className:"font-medium",children:"23%"})]}),e.jsx("div",{className:"w-full bg-secondary-200 rounded-full h-2",children:e.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:"23%"}})})]})]});return e.jsx(r,{content:t,title:"Server Status",showCloseButton:!0,placement:"bottom",trigger:"click",width:280,overlayClassName:"border-2 border-blue-200 shadow-xl",onClose:u("status-popover-closed"),children:e.jsx(n,{children:"🖥️ Server Status"})})}},P={args:{content:e.jsx("div",{children:e.jsx("p",{className:"text-sm text-secondary-600",children:"This is playground popover content. You can customize all the properties using the controls."})}),title:"Playground Popover",placement:"top",trigger:"click",showArrow:!0,showCloseButton:!1,disabled:!1,width:250,mouseEnterDelay:100,mouseLeaveDelay:100,onVisibleChange:u("visibility-changed"),children:e.jsx(n,{children:"Playground Trigger"})}};var F,q,H;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    content: <SimpleContent />,
    placement: "top",
    trigger: "click",
    showArrow: true,
    onVisibleChange: action("visibility-changed"),
    children: <Button>Click me</Button>
  }
}`,...(H=(q=f.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var O,_,J;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const placements = [{
      placement: "top" as const,
      label: "Top"
    }, {
      placement: "bottom" as const,
      label: "Bottom"
    }, {
      placement: "left" as const,
      label: "Left"
    }, {
      placement: "right" as const,
      label: "Right"
    }, {
      placement: "topLeft" as const,
      label: "Top Left"
    }, {
      placement: "topRight" as const,
      label: "Top Right"
    }, {
      placement: "bottomLeft" as const,
      label: "Bottom Left"
    }, {
      placement: "bottomRight" as const,
      label: "Bottom Right"
    }];
    const content = <div>
        <p className="text-sm text-secondary-600">
          Popover content positioned accordingly.
        </p>
      </div>;
    return <div className="grid grid-cols-4 gap-8 p-20">
        {placements.map(item => <Popover key={item.placement} content={content} placement={item.placement} trigger="click">
            <Button variant="outline" className="w-full">
              {item.label}
            </Button>
          </Popover>)}
      </div>;
  }
}`,...(J=(_=g.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var W,Y,U;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const content = (placement: string) => <div>
        <p className="text-sm text-secondary-600">
          This popover was triggered by <strong>{placement}</strong>.
        </p>
      </div>;
    return <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Popover content={content("click")} trigger="click" placement="top">
            <Button>Click Trigger</Button>
          </Popover>

          <Popover content={content("hover")} trigger="hover" placement="top" mouseEnterDelay={0} mouseLeaveDelay={200}>
            <Button variant="outline">Hover Trigger</Button>
          </Popover>

          <Popover content={content("focus")} trigger="focus" placement="top">
            <Button variant="secondary">Focus Trigger</Button>
          </Popover>

          <Popover content={content("right-click")} trigger="contextMenu" placement="top">
            <Button variant="ghost">Right Click</Button>
          </Popover>
        </div>

        <div className="text-sm text-secondary-500 space-y-1">
          <p>• Click: Click the button to toggle popover</p>
          <p>• Hover: Hover over the button to show popover</p>
          <p>• Focus: Focus the button (tab or click) to show popover</p>
          <p>• Right Click: Right click the button to show popover</p>
        </div>
      </div>;
  }
}`,...(U=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var K,X,Q;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const content = <div className="space-y-3">
        <p className="text-sm text-secondary-600">
          This popover has a title in the header and demonstrates how you can
          structure content with proper hierarchy.
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="primary">
            Action
          </Button>
          <Button size="sm" variant="outline">
            Cancel
          </Button>
        </div>
      </div>;
    return <div className="space-y-4">
        <div className="flex gap-4">
          <Popover content={content} title="Information" placement="bottom" trigger="click" width={280}>
            <Button>With Title</Button>
          </Popover>

          <Popover content={content} title="Confirm Action" showCloseButton placement="bottom" trigger="click" width={280} onClose={action("popover-closed")}>
            <Button variant="outline">With Close Button</Button>
          </Popover>
        </div>
      </div>;
  }
}`,...(Q=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Z,G,$;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    });
    const formContent = <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-1">
            Name
          </label>
          <input type="text" value={formData.name} onChange={e => setFormData({
          ...formData,
          name: e.target.value
        })} className="w-full px-3 py-2 text-sm border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-1">
            Email
          </label>
          <input type="email" value={formData.email} onChange={e => setFormData({
          ...formData,
          email: e.target.value
        })} className="w-full px-3 py-2 text-sm border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-1">
            Message
          </label>
          <textarea value={formData.message} onChange={e => setFormData({
          ...formData,
          message: e.target.value
        })} rows={3} className="w-full px-3 py-2 text-sm border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="primary" className="flex-1" onClick={() => {
          action("form-submitted")(formData);
          // Reset form
          setFormData({
            name: "",
            email: "",
            message: ""
          });
        }}>
            Submit
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            Cancel
          </Button>
        </div>
      </div>;
    return <Popover content={formContent} title="Quick Contact" showCloseButton placement="bottomLeft" trigger="click" width={320} onVisibleChange={action("form-visibility-changed")}>
        <Button>Open Contact Form</Button>
      </Popover>;
  }
}`,...($=(G=N.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var ee,te,ne;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const userContent = <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
            JD
          </div>
          <div>
            <div className="text-sm font-semibold text-secondary-900">
              John Doe
            </div>
            <div className="text-xs text-secondary-500">Software Engineer</div>
          </div>
        </div>

        <div className="text-xs text-secondary-600 space-y-1">
          <div>📧 john.doe@company.com</div>
          <div>📱 +1 (555) 123-4567</div>
          <div>🏢 Tech Department</div>
        </div>

        <div className="pt-2 border-t border-secondary-200">
          <div className="flex gap-2">
            <Button size="sm" variant="primary" className="flex-1">
              Message
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              Call
            </Button>
          </div>
        </div>
      </div>;
    return <div className="text-center">
        <p className="text-secondary-600 mb-4">
          Hover over the avatar to see user details
        </p>

        <Popover content={userContent} trigger="hover" placement="bottom" width={280} mouseEnterDelay={200} mouseLeaveDelay={300}>
          <div className="inline-flex items-center space-x-2 px-3 py-2 border border-secondary-200 rounded-lg hover:border-secondary-300 cursor-pointer">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              JD
            </div>
            <span className="text-sm text-secondary-700">John Doe</span>
          </div>
        </Popover>
      </div>;
  }
}`,...(ne=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,oe,ae;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const confirmContent = <div className="space-y-3">
        <div className="text-sm text-secondary-600">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="destructive" className="flex-1" disabled={isDeleting} onClick={() => {
          setIsDeleting(true);
          action("delete-confirmed")();
          setTimeout(() => {
            setIsDeleting(false);
            setIsVisible(false);
          }, 1000);
        }}>
            {isDeleting ? "Deleting..." : "Yes, Delete"}
          </Button>
          <Button size="sm" variant="outline" className="flex-1" onClick={() => setIsVisible(false)}>
            Cancel
          </Button>
        </div>
      </div>;
    return <Popover content={confirmContent} title="Confirm Delete" visible={isVisible} onVisibleChange={setIsVisible} placement="top" trigger="click" width={250}>
        <Button variant="destructive">Delete Item</Button>
      </Popover>;
  }
}`,...(ae=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,ie,le;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const menuItems = [{
      icon: "👤",
      label: "Profile",
      action: "profile"
    }, {
      icon: "⚙️",
      label: "Settings",
      action: "settings"
    }, {
      icon: "❓",
      label: "Help",
      action: "help"
    }, {
      type: "divider"
    }, {
      icon: "🚪",
      label: "Sign Out",
      action: "signout",
      variant: "danger"
    }];
    const menuContent = <div className="py-1">
        {menuItems.map((item, index) => {
        if (item.type === "divider") {
          return <div key={index} className="my-1 border-t border-secondary-200" />;
        }
        return <button key={index} className={clsx("w-full flex items-center px-3 py-2 text-sm text-left hover:bg-secondary-100 transition-colors", item.variant === "danger" ? "text-red-600 hover:bg-red-50" : "text-secondary-700")} onClick={() => {
          action("menu-item-clicked")(item.action);
        }}>
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>;
      })}
      </div>;
    return <Popover content={menuContent} placement="bottomRight" trigger="click" width={180} showArrow={false}>
        <Button variant="outline">Menu ⋮</Button>
      </Popover>;
  }
}`,...(le=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,me;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(false);
    const content = <div className="space-y-3">
        <p className="text-sm text-secondary-600">
          This is a controlled popover. Its visibility is managed externally.
        </p>
        <Button size="sm" variant="outline" className="w-full" onClick={() => setVisible(false)}>
          Close from Inside
        </Button>
      </div>;
    return <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => setVisible(true)}>Show Popover</Button>
          <Button variant="outline" onClick={() => setVisible(false)}>
            Hide Popover
          </Button>
        </div>

        <Popover content={content} visible={visible} onVisibleChange={setVisible} placement="bottom" title="Controlled Popover" showCloseButton width={250}>
          <Button variant="secondary" disabled={visible}>
            {visible ? "Popover is Open" : "Target Element"}
          </Button>
        </Popover>

        <div className="text-sm text-secondary-500">
          Current state: <strong>{visible ? "Visible" : "Hidden"}</strong>
        </div>
      </div>;
  }
}`,...(me=(de=k.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,pe,ve;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const richContent = <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-secondary-900">
            System Status: Online
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-secondary-600">CPU Usage</span>
            <span className="font-medium">45%</span>
          </div>
          <div className="w-full bg-secondary-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{
            width: "45%"
          }}></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-secondary-600">Memory</span>
            <span className="font-medium">67%</span>
          </div>
          <div className="w-full bg-secondary-200 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{
            width: "67%"
          }}></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-secondary-600">Storage</span>
            <span className="font-medium">23%</span>
          </div>
          <div className="w-full bg-secondary-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{
            width: "23%"
          }}></div>
          </div>
        </div>
      </div>;
    return <Popover content={richContent} title="Server Status" showCloseButton placement="bottom" trigger="click" width={280} overlayClassName="border-2 border-blue-200 shadow-xl" onClose={action("status-popover-closed")}>
        <Button>🖥️ Server Status</Button>
      </Popover>;
  }
}`,...(ve=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var xe,he,fe;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    content: <div>
        <p className="text-sm text-secondary-600">
          This is playground popover content. You can customize all the
          properties using the controls.
        </p>
      </div>,
    title: "Playground Popover",
    placement: "top",
    trigger: "click",
    showArrow: true,
    showCloseButton: false,
    disabled: false,
    width: 250,
    mouseEnterDelay: 100,
    mouseLeaveDelay: 100,
    onVisibleChange: action("visibility-changed"),
    children: <Button>Playground Trigger</Button>
  }
}`,...(fe=(he=P.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};const Ke=["Default","Placements","TriggerTypes","WithTitle","FormContent","UserProfileCard","ConfirmationPopover","MenuPopover","ControlledPopover","CustomStyling","Playground"];export{w as ConfirmationPopover,k as ControlledPopover,B as CustomStyling,f as Default,N as FormContent,C as MenuPopover,g as Placements,P as Playground,b as TriggerTypes,j as UserProfileCard,y as WithTitle,Ke as __namedExportsOrder,Ue as default};
