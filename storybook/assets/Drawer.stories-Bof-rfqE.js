import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as h}from"./index-B-lxVbXh.js";import{R as B,r as d}from"./index-DkvSDgFW.js";import{c}from"./clsx-B-dksMZM.js";import{B as r}from"./Button-igjKbdfR.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const de={xs:"256px",sm:"320px",md:"384px",lg:"512px",xl:"768px",full:"100%"},I={xs:"160px",sm:"240px",md:"320px",lg:"480px",xl:"640px",full:"100%"},ge=(t,s)=>{const n="fixed bg-white shadow-xl transition-transform duration-300 ease-in-out";switch(t){case"left":return c(n,"top-0 left-0 h-full border-r border-secondary-200",s?"transform translate-x-0":"transform -translate-x-full");case"right":return c(n,"top-0 right-0 h-full border-l border-secondary-200",s?"transform translate-x-0":"transform translate-x-full");case"top":return c(n,"top-0 left-0 w-full border-b border-secondary-200",s?"transform translate-y-0":"transform -translate-y-full");case"bottom":return c(n,"bottom-0 left-0 w-full border-t border-secondary-200",s?"transform translate-y-0":"transform translate-y-full");default:return n}},we=(t,s,n,a)=>t==="top"||t==="bottom"?a?{height:typeof a=="number"?`${a}px`:a}:{height:I[s]}:n?{width:typeof n=="number"?`${n}px`:n}:{width:de[s]},Ne=()=>e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),i=B.forwardRef(({isOpen:t,onClose:s,placement:n="right",size:a="md",width:u,height:l,title:m,children:z,footer:f,showCloseButton:x=!0,closeOnOverlayClick:me=!0,closeOnEscapeKey:P=!0,mode:p="overlay",className:pe,overlayClassName:ue,headerClassName:he,bodyClassName:fe,footerClassName:xe,zIndex:E=1e3,...ye},ve)=>{if(B.useEffect(()=>{const o=y=>{y.key==="Escape"&&P&&t&&s()};if(t)return document.addEventListener("keydown",o),p==="overlay"&&(document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",o),p==="overlay"&&(document.body.style.overflow="unset")}},[t,P,s,p]),B.useEffect(()=>{if(p==="push"&&t){const o=document.body,y=de[a];return n==="left"?o.style.transform=`translateX(${y})`:n==="right"?o.style.transform=`translateX(-${y})`:n==="top"?o.style.transform=`translateY(${I[a]})`:n==="bottom"&&(o.style.transform=`translateY(-${I[a]})`),o.style.transition="transform 300ms ease-in-out",()=>{o.style.transform="",o.style.transition=""}}},[t,p,a,n]),!t&&p==="overlay")return null;const be={...we(n,a,u,l),zIndex:E};return e.jsxs("div",{className:"fixed inset-0",style:{zIndex:E},children:[p==="overlay"&&e.jsx("div",{className:c("fixed inset-0 bg-black transition-opacity duration-300",t?"bg-opacity-50":"bg-opacity-0 pointer-events-none",ue),onClick:me?s:void 0}),e.jsxs("div",{ref:ve,className:c(ge(n,t),pe),style:be,...ye,children:[(m||x)&&e.jsxs("div",{className:c("flex items-center justify-between px-6 py-4 border-b border-secondary-200",he),children:[m&&e.jsx("h2",{className:"text-lg font-semibold text-secondary-900",children:m}),x&&e.jsx("button",{onClick:s,className:"text-secondary-400 hover:text-secondary-600 transition-colors p-1","aria-label":"Close drawer",children:e.jsx(Ne,{})})]}),e.jsx("div",{className:c("flex-1 overflow-auto",(m||x)&&f?"h-[calc(100%-8rem)]":m||x||f?"h-[calc(100%-4rem)]":"h-full",fe),children:e.jsx("div",{className:"p-6",children:z})}),f&&e.jsx("div",{className:c("px-6 py-4 border-t border-secondary-200 bg-secondary-50",xe),children:f})]})]})});i.displayName="Drawer";try{i.displayName="Drawer",i.__docgenInfo={description:"",displayName:"Drawer",props:{isOpen:{defaultValue:null,description:"Apakah drawer terbuka",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback ketika drawer ditutup",name:"onClose",required:!0,type:{name:"() => void"}},placement:{defaultValue:{value:"right"},description:"Posisi drawer",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}},size:{defaultValue:{value:"md"},description:"Ukuran drawer",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"full"'}]}},width:{defaultValue:null,description:"Custom width/height (override size)",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"Custom height (untuk top/bottom placement)",name:"height",required:!1,type:{name:"string | number"}},title:{defaultValue:null,description:"Title drawer",name:"title",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children content",name:"children",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"Footer content",name:"footer",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"Apakah menampilkan close button (X)",name:"showCloseButton",required:!1,type:{name:"boolean"}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"Apakah drawer bisa ditutup dengan overlay click",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscapeKey:{defaultValue:{value:"true"},description:"Apakah drawer bisa ditutup dengan ESC key",name:"closeOnEscapeKey",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"overlay"},description:"Mode drawer (overlay atau push content)",name:"mode",required:!1,type:{name:"enum",value:[{value:'"push"'},{value:'"overlay"'}]}},className:{defaultValue:null,description:"Custom className untuk drawer",name:"className",required:!1,type:{name:"string"}},overlayClassName:{defaultValue:null,description:"Custom className untuk overlay",name:"overlayClassName",required:!1,type:{name:"string"}},headerClassName:{defaultValue:null,description:"Custom className untuk header",name:"headerClassName",required:!1,type:{name:"string"}},bodyClassName:{defaultValue:null,description:"Custom className untuk body",name:"bodyClassName",required:!1,type:{name:"string"}},footerClassName:{defaultValue:null,description:"Custom className untuk footer",name:"footerClassName",required:!1,type:{name:"string"}},zIndex:{defaultValue:{value:"1000"},description:"Z-index untuk drawer",name:"zIndex",required:!1,type:{name:"number"}}}}}catch{}const Be={title:"Layout/Drawer",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"Komponen Drawer untuk menampilkan panel yang slide dari sisi layar. Cocok untuk navigation menu, detail panel, settings, dan filters. Mendukung berbagai posisi dan mode tampilan."}}},tags:["autodocs"],argTypes:{isOpen:{control:{type:"boolean"},description:"Apakah drawer terbuka"},placement:{control:{type:"select"},options:["left","right","top","bottom"],description:"Posisi drawer"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","full"],description:"Ukuran drawer"},title:{control:{type:"text"},description:"Title drawer"},showCloseButton:{control:{type:"boolean"},description:"Apakah menampilkan close button (X)"},closeOnOverlayClick:{control:{type:"boolean"},description:"Apakah drawer bisa ditutup dengan overlay click"},closeOnEscapeKey:{control:{type:"boolean"},description:"Apakah drawer bisa ditutup dengan ESC key"},mode:{control:{type:"select"},options:["overlay","push"],description:"Mode drawer (overlay atau push content)"}}},S=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900",children:"Drawer Content"}),e.jsx("p",{className:"text-secondary-600",children:"This is sample content inside the drawer. You can put any content here including forms, navigation menus, settings panels, or detailed information."}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{variant:"primary",className:"w-full",children:"Primary Action"}),e.jsx(r,{variant:"outline",className:"w-full",children:"Secondary Action"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium text-secondary-700",children:"List Items:"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{className:"flex items-center p-2 hover:bg-secondary-100 rounded",children:[e.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full mr-2"}),"Active item"]}),e.jsxs("li",{className:"flex items-center p-2 hover:bg-secondary-100 rounded",children:[e.jsx("span",{className:"w-2 h-2 bg-yellow-500 rounded-full mr-2"}),"Pending item"]}),e.jsxs("li",{className:"flex items-center p-2 hover:bg-secondary-100 rounded",children:[e.jsx("span",{className:"w-2 h-2 bg-red-500 rounded-full mr-2"}),"Inactive item"]})]})]})]}),v={args:{isOpen:!0,title:"Default Drawer",placement:"right",size:"md",children:e.jsx(S,{}),onClose:h("drawer-closed")}},b={render:()=>{const[t,s]=d.useState(null),n=[{id:"left",label:"Left",placement:"left"},{id:"right",label:"Right",placement:"right"},{id:"top",label:"Top",placement:"top"},{id:"bottom",label:"Bottom",placement:"bottom"}];return e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Different Placements"}),e.jsx("div",{className:"grid grid-cols-2 gap-4 max-w-md",children:n.map(a=>e.jsxs(r,{onClick:()=>s(a.id),variant:"outline",children:["Open ",a.label," Drawer"]},a.id))}),n.map(a=>e.jsx(i,{isOpen:t===a.id,onClose:()=>s(null),placement:a.placement,title:`${a.label} Drawer`,children:e.jsx(S,{})},a.id))]})}},g={render:()=>{const[t,s]=d.useState(null),n=[{id:"xs",label:"Extra Small",size:"xs"},{id:"sm",label:"Small",size:"sm"},{id:"md",label:"Medium",size:"md"},{id:"lg",label:"Large",size:"lg"},{id:"xl",label:"Extra Large",size:"xl"},{id:"full",label:"Full Width",size:"full"}];return e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Different Sizes"}),e.jsx("div",{className:"grid grid-cols-2 gap-4 max-w-md",children:n.map(a=>e.jsx(r,{onClick:()=>s(a.id),variant:"outline",children:a.label},a.id))}),n.map(a=>e.jsx(i,{isOpen:t===a.id,onClose:()=>s(null),size:a.size,title:`${a.label} Drawer`,children:e.jsx(S,{})},a.id))]})}},w={render:()=>{const[t,s]=d.useState(!1),n=e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx(r,{variant:"outline",onClick:()=>s(!1),children:"Cancel"}),e.jsx(r,{variant:"primary",onClick:()=>{h("save-clicked")(),s(!1)},children:"Save Changes"})]});return e.jsxs("div",{className:"p-6",children:[e.jsx(r,{onClick:()=>s(!0),variant:"primary",children:"Open Drawer with Footer"}),e.jsx(i,{isOpen:t,onClose:()=>s(!1),title:"Settings",footer:n,children:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-secondary-900 mb-4",children:"User Preferences"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-1",children:"Display Name"}),e.jsx("input",{type:"text",defaultValue:"John Doe",className:"w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-1",children:"Email"}),e.jsx("input",{type:"email",defaultValue:"john@example.com",className:"w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:"notifications",className:"rounded border-secondary-300 text-primary-600 focus:ring-primary-500"}),e.jsx("label",{htmlFor:"notifications",className:"ml-2 text-sm text-secondary-600",children:"Enable email notifications"})]})]})]})})})]})}},N={render:()=>{const[t,s]=d.useState(!1),n=[{icon:"🏠",label:"Dashboard",active:!0},{icon:"📊",label:"Analytics",active:!1},{icon:"👥",label:"Users",active:!1},{icon:"⚙️",label:"Settings",active:!1},{icon:"💼",label:"Projects",active:!1},{icon:"📝",label:"Documentation",active:!1}];return e.jsxs("div",{className:"p-6",children:[e.jsx(r,{onClick:()=>s(!0),variant:"primary",children:"☰ Open Navigation"}),e.jsxs(i,{isOpen:t,onClose:()=>s(!1),placement:"left",title:"Navigation",size:"sm",children:[e.jsx("nav",{className:"space-y-1",children:n.map((a,u)=>e.jsxs("a",{href:"#",className:c("flex items-center px-3 py-2 text-sm rounded-md transition-colors",a.active?"bg-primary-100 text-primary-700 font-medium":"text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900"),onClick:l=>{l.preventDefault(),h("nav-clicked")(a.label)},children:[e.jsx("span",{className:"mr-3 text-lg",children:a.icon}),a.label]},u))}),e.jsx("div",{className:"mt-8 pt-4 border-t border-secondary-200",children:e.jsxs("div",{className:"flex items-center px-3 py-2",children:[e.jsx("div",{className:"w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3",children:"JD"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-secondary-900",children:"John Doe"}),e.jsx("div",{className:"text-xs text-secondary-500",children:"john@example.com"})]})]})})]})]})}},j={render:()=>{const[t,s]=d.useState(!1),[n,a]=d.useState({category:"",priceRange:[0,1e3],brand:[],inStock:!1}),u=e.jsxs("div",{className:"flex gap-3",children:[e.jsx(r,{variant:"outline",className:"flex-1",onClick:()=>{a({category:"",priceRange:[0,1e3],brand:[],inStock:!1})},children:"Clear All"}),e.jsx(r,{variant:"primary",className:"flex-1",onClick:()=>{h("apply-filters")(n),s(!1)},children:"Apply Filters"})]});return e.jsxs("div",{className:"p-6",children:[e.jsx(r,{onClick:()=>s(!0),variant:"outline",children:"🔽 Open Filters"}),e.jsx(i,{isOpen:t,onClose:()=>s(!1),placement:"right",title:"Filters",footer:u,size:"sm",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Category"}),e.jsxs("select",{value:n.category,onChange:l=>a({...n,category:l.target.value}),className:"w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",children:[e.jsx("option",{value:"",children:"All Categories"}),e.jsx("option",{value:"electronics",children:"Electronics"}),e.jsx("option",{value:"clothing",children:"Clothing"}),e.jsx("option",{value:"books",children:"Books"}),e.jsx("option",{value:"home",children:"Home & Garden"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Price Range"}),e.jsx("input",{type:"range",min:"0",max:"1000",value:n.priceRange[1],onChange:l=>a({...n,priceRange:[n.priceRange[0],parseInt(l.target.value)]}),className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-secondary-500 mt-1",children:[e.jsxs("span",{children:["$",n.priceRange[0]]}),e.jsxs("span",{children:["$",n.priceRange[1]]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Brands"}),e.jsx("div",{className:"space-y-2",children:["Apple","Samsung","Sony","Nike","Adidas"].map(l=>e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:n.brand.includes(l),onChange:m=>{m.target.checked?a({...n,brand:[...n.brand,l]}):a({...n,brand:n.brand.filter(z=>z!==l)})},className:"rounded border-secondary-300 text-primary-600 focus:ring-primary-500"}),e.jsx("span",{className:"ml-2 text-sm text-secondary-600",children:l})]},l))})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:"inStock",checked:n.inStock,onChange:l=>a({...n,inStock:l.target.checked}),className:"rounded border-secondary-300 text-primary-600 focus:ring-primary-500"}),e.jsx("label",{htmlFor:"inStock",className:"ml-2 text-sm text-secondary-600",children:"In Stock Only"})]})]})})]})}},C={render:()=>{const[t,s]=d.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-2",children:"Push Mode Demo"}),e.jsx("p",{className:"text-secondary-600 mb-4",children:"Push mode will push the page content aside instead of showing an overlay."}),e.jsx(r,{onClick:()=>s(!0),variant:"primary",children:"Open Push Drawer"})]}),e.jsxs("div",{className:"bg-secondary-100 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-secondary-900 mb-2",children:"Page Content"}),e.jsx("p",{className:"text-secondary-600",children:"This content will be pushed aside when the drawer opens in push mode. Watch how the entire page content moves to accommodate the drawer."})]}),e.jsx(i,{isOpen:t,onClose:()=>s(!1),placement:"left",title:"Push Mode Drawer",mode:"push",size:"sm",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-secondary-600",children:"This drawer uses push mode, so it pushes the main content aside instead of overlaying it."}),e.jsx(r,{variant:"primary",onClick:()=>s(!1),className:"w-full",children:"Close Drawer"})]})})]})}},k={render:()=>{const[t,s]=d.useState(null);return e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Custom Sizes"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{onClick:()=>s("custom-width"),variant:"outline",className:"mr-2",children:"Custom Width (600px)"}),e.jsx(r,{onClick:()=>s("custom-height"),variant:"outline",children:"Custom Height (300px)"})]}),e.jsx(i,{isOpen:t==="custom-width",onClose:()=>s(null),title:"Custom Width Drawer",width:600,children:e.jsx("p",{children:"This drawer has a custom width of 600px."})}),e.jsx(i,{isOpen:t==="custom-height",onClose:()=>s(null),placement:"bottom",title:"Custom Height Drawer",height:300,children:e.jsx("p",{children:"This drawer has a custom height of 300px."})})]})}},O={render:()=>{const[t,s]=d.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(r,{onClick:()=>s(!0),variant:"primary",children:"Open Modal Drawer"}),e.jsx(i,{isOpen:t,onClose:()=>s(!1),title:"Modal Drawer",showCloseButton:!1,closeOnOverlayClick:!1,closeOnEscapeKey:!1,footer:e.jsx(r,{variant:"primary",onClick:()=>s(!1),className:"w-full",children:"Close with Button Only"}),children:e.jsx("div",{className:"space-y-4",children:e.jsx("p",{className:"text-secondary-600",children:"This drawer can only be closed using the button in the footer. Clicking outside or pressing ESC won't close it."})})})]})}},D={args:{isOpen:!0,title:"Playground Drawer",placement:"right",size:"md",showCloseButton:!0,closeOnOverlayClick:!0,closeOnEscapeKey:!0,mode:"overlay",children:e.jsx(S,{}),onClose:h("drawer-closed")}};var F,R,A;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Default Drawer",
    placement: "right",
    size: "md",
    children: <SampleContent />,
    onClose: action("drawer-closed")
  }
}`,...(A=(R=v.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var V,q,M;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [openDrawer, setOpenDrawer] = useState<string | null>(null);
    const placements = [{
      id: "left",
      label: "Left",
      placement: "left" as const
    }, {
      id: "right",
      label: "Right",
      placement: "right" as const
    }, {
      id: "top",
      label: "Top",
      placement: "top" as const
    }, {
      id: "bottom",
      label: "Bottom",
      placement: "bottom" as const
    }];
    return <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Different Placements
        </h3>

        <div className="grid grid-cols-2 gap-4 max-w-md">
          {placements.map(item => <Button key={item.id} onClick={() => setOpenDrawer(item.id)} variant="outline">
              Open {item.label} Drawer
            </Button>)}
        </div>

        {placements.map(item => <Drawer key={item.id} isOpen={openDrawer === item.id} onClose={() => setOpenDrawer(null)} placement={item.placement} title={\`\${item.label} Drawer\`} children={<SampleContent />} />)}
      </div>;
  }
}`,...(M=(q=b.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var T,$,L;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    }, {
      id: "full",
      label: "Full Width",
      size: "full" as const
    }];
    return <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Different Sizes
        </h3>

        <div className="grid grid-cols-2 gap-4 max-w-md">
          {sizes.map(item => <Button key={item.id} onClick={() => setOpenSize(item.id)} variant="outline">
              {item.label}
            </Button>)}
        </div>

        {sizes.map(item => <Drawer key={item.id} isOpen={openSize === item.id} onClose={() => setOpenSize(null)} size={item.size} title={\`\${item.label} Drawer\`} children={<SampleContent />} />)}
      </div>;
  }
}`,...(L=($=g.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var _,K,W;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const footer = <div className="flex gap-3 justify-end">
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {
        action("save-clicked")();
        setIsOpen(false);
      }}>
          Save Changes
        </Button>
      </div>;
    return <div className="p-6">
        <Button onClick={() => setIsOpen(true)} variant="primary">
          Open Drawer with Footer
        </Button>

        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Settings" footer={footer}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-secondary-900 mb-4">
                User Preferences
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Display Name
                  </label>
                  <input type="text" defaultValue="John Doe" className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Email
                  </label>
                  <input type="email" defaultValue="john@example.com" className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="notifications" className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500" />
                  <label htmlFor="notifications" className="ml-2 text-sm text-secondary-600">
                    Enable email notifications
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>;
  }
}`,...(W=(K=w.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var J,U,H;N.parameters={...N.parameters,docs:{...(J=N.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigationItems = [{
      icon: "🏠",
      label: "Dashboard",
      active: true
    }, {
      icon: "📊",
      label: "Analytics",
      active: false
    }, {
      icon: "👥",
      label: "Users",
      active: false
    }, {
      icon: "⚙️",
      label: "Settings",
      active: false
    }, {
      icon: "💼",
      label: "Projects",
      active: false
    }, {
      icon: "📝",
      label: "Documentation",
      active: false
    }];
    return <div className="p-6">
        <Button onClick={() => setIsOpen(true)} variant="primary">
          ☰ Open Navigation
        </Button>

        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} placement="left" title="Navigation" size="sm">
          <nav className="space-y-1">
            {navigationItems.map((item, index) => <a key={index} href="#" className={clsx("flex items-center px-3 py-2 text-sm rounded-md transition-colors", item.active ? "bg-primary-100 text-primary-700 font-medium" : "text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900")} onClick={e => {
            e.preventDefault();
            action("nav-clicked")(item.label);
          }}>
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.label}
              </a>)}
          </nav>

          <div className="mt-8 pt-4 border-t border-secondary-200">
            <div className="flex items-center px-3 py-2">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                JD
              </div>
              <div>
                <div className="text-sm font-medium text-secondary-900">
                  John Doe
                </div>
                <div className="text-xs text-secondary-500">
                  john@example.com
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>;
  }
}`,...(H=(U=N.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var X,Y,G;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
      category: "",
      priceRange: [0, 1000],
      brand: [] as string[],
      inStock: false
    });
    const footer = <div className="flex gap-3">
        <Button variant="outline" className="flex-1" onClick={() => {
        setFilters({
          category: "",
          priceRange: [0, 1000],
          brand: [],
          inStock: false
        });
      }}>
          Clear All
        </Button>
        <Button variant="primary" className="flex-1" onClick={() => {
        action("apply-filters")(filters);
        setIsOpen(false);
      }}>
          Apply Filters
        </Button>
      </div>;
    return <div className="p-6">
        <Button onClick={() => setIsOpen(true)} variant="outline">
          🔽 Open Filters
        </Button>

        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} placement="right" title="Filters" footer={footer} size="sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Category
              </label>
              <select value={filters.category} onChange={e => setFilters({
              ...filters,
              category: e.target.value
            })} className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="home">Home & Garden</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Price Range
              </label>
              <input type="range" min="0" max="1000" value={filters.priceRange[1]} onChange={e => setFilters({
              ...filters,
              priceRange: [filters.priceRange[0], parseInt(e.target.value)]
            })} className="w-full" />
              <div className="flex justify-between text-xs text-secondary-500 mt-1">
                <span>\${filters.priceRange[0]}</span>
                <span>\${filters.priceRange[1]}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Brands
              </label>
              <div className="space-y-2">
                {["Apple", "Samsung", "Sony", "Nike", "Adidas"].map(brand => <label key={brand} className="flex items-center">
                    <input type="checkbox" checked={filters.brand.includes(brand)} onChange={e => {
                  if (e.target.checked) {
                    setFilters({
                      ...filters,
                      brand: [...filters.brand, brand]
                    });
                  } else {
                    setFilters({
                      ...filters,
                      brand: filters.brand.filter(b => b !== brand)
                    });
                  }
                }} className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500" />
                    <span className="ml-2 text-sm text-secondary-600">
                      {brand}
                    </span>
                  </label>)}
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="inStock" checked={filters.inStock} onChange={e => setFilters({
              ...filters,
              inStock: e.target.checked
            })} className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500" />
              <label htmlFor="inStock" className="ml-2 text-sm text-secondary-600">
                In Stock Only
              </label>
            </div>
          </div>
        </Drawer>
      </div>;
  }
}`,...(G=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var Z,Q,ee;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-secondary-900 mb-2">
            Push Mode Demo
          </h3>
          <p className="text-secondary-600 mb-4">
            Push mode will push the page content aside instead of showing an
            overlay.
          </p>
          <Button onClick={() => setIsOpen(true)} variant="primary">
            Open Push Drawer
          </Button>
        </div>

        <div className="bg-secondary-100 p-4 rounded-lg">
          <h4 className="font-medium text-secondary-900 mb-2">Page Content</h4>
          <p className="text-secondary-600">
            This content will be pushed aside when the drawer opens in push
            mode. Watch how the entire page content moves to accommodate the
            drawer.
          </p>
        </div>

        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} placement="left" title="Push Mode Drawer" mode="push" size="sm">
          <div className="space-y-4">
            <p className="text-secondary-600">
              This drawer uses push mode, so it pushes the main content aside
              instead of overlaying it.
            </p>
            <Button variant="primary" onClick={() => setIsOpen(false)} className="w-full">
              Close Drawer
            </Button>
          </div>
        </Drawer>
      </div>;
  }
}`,...(ee=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ne,se,ae;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [openDrawer, setOpenDrawer] = useState<string | null>(null);
    return <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Custom Sizes
        </h3>

        <div className="space-y-2">
          <Button onClick={() => setOpenDrawer("custom-width")} variant="outline" className="mr-2">
            Custom Width (600px)
          </Button>

          <Button onClick={() => setOpenDrawer("custom-height")} variant="outline">
            Custom Height (300px)
          </Button>
        </div>

        <Drawer isOpen={openDrawer === "custom-width"} onClose={() => setOpenDrawer(null)} title="Custom Width Drawer" width={600}>
          <p>This drawer has a custom width of 600px.</p>
        </Drawer>

        <Drawer isOpen={openDrawer === "custom-height"} onClose={() => setOpenDrawer(null)} placement="bottom" title="Custom Height Drawer" height={300}>
          <p>This drawer has a custom height of 300px.</p>
        </Drawer>
      </div>;
  }
}`,...(ae=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var te,re,le;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-6">
        <Button onClick={() => setIsOpen(true)} variant="primary">
          Open Modal Drawer
        </Button>

        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Drawer" showCloseButton={false} closeOnOverlayClick={false} closeOnEscapeKey={false} footer={<Button variant="primary" onClick={() => setIsOpen(false)} className="w-full">
              Close with Button Only
            </Button>}>
          <div className="space-y-4">
            <p className="text-secondary-600">
              This drawer can only be closed using the button in the footer.
              Clicking outside or pressing ESC won't close it.
            </p>
          </div>
        </Drawer>
      </div>;
  }
}`,...(le=(re=O.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ie,oe,ce;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Playground Drawer",
    placement: "right",
    size: "md",
    showCloseButton: true,
    closeOnOverlayClick: true,
    closeOnEscapeKey: true,
    mode: "overlay",
    children: <SampleContent />,
    onClose: action("drawer-closed")
  }
}`,...(ce=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};const Ie=["Default","Placements","Sizes","WithFooter","NavigationDrawer","FilterDrawer","PushMode","CustomSizes","NoCloseOptions","Playground"];export{k as CustomSizes,v as Default,j as FilterDrawer,N as NavigationDrawer,O as NoCloseOptions,b as Placements,D as Playground,C as PushMode,g as Sizes,w as WithFooter,Ie as __namedExportsOrder,Be as default};
