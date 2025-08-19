import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{c as P}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";const De=["xs","sm","md","lg","xl","2xl"],g=(o,r,a)=>{if(typeof o=="object"&&o!==null){const c=[];return De.forEach(m=>{const p=o[m];if(p!==void 0){const j=m==="xs"?"":`${m}:`,h=a?a(p):p.toString();Array.isArray(h)?h.forEach(y=>c.push(`${j}${r}${y}`)):c.push(`${j}${r}${h}`)}}),c}const i=a?a(o):o.toString();return Array.isArray(i)?i.map(c=>`${r}${c}`):[`${r}${i}`]},ve=o=>({start:"justify-start",end:"justify-end",center:"justify-center","space-around":"justify-around","space-between":"justify-between","space-evenly":"justify-evenly"})[o]||o,Ne=o=>({top:"items-start",middle:"items-center",bottom:"items-end",stretch:"items-stretch"})[o]||o,H=o=>{if(typeof o=="number")return{0:"gap-0",4:"gap-1",8:"gap-2",12:"gap-3",16:"gap-4",20:"gap-5",24:"gap-6",32:"gap-8",40:"gap-10",48:"gap-12"}[o]||`gap-[${o}px]`;const[r,a]=o;if(r===a)return H(r);const i={0:"gap-x-0",4:"gap-x-1",8:"gap-x-2",12:"gap-x-3",16:"gap-x-4",20:"gap-x-5",24:"gap-x-6",32:"gap-x-8"},c={0:"gap-y-0",4:"gap-y-1",8:"gap-y-2",12:"gap-y-3",16:"gap-y-4",20:"gap-y-5",24:"gap-y-6",32:"gap-y-8"};return`${i[r]||`gap-x-[${r}px]`} ${c[a]||`gap-y-[${a}px]`}`},l=({gutter:o,justify:r="start",align:a="top",wrap:i=!0,children:c,className:m,style:p,...j})=>{const h=g(r,"",ve),y=g(a,"",Ne);let B="";if(o)if(typeof o=="object"&&o!==null){const D=o,f=D.xs||D.sm||D.md||0;B=H(typeof f=="number"?f:Array.isArray(f)?f[0]:0)}else B=H(o);const x=P("flex",{"flex-wrap":i!==!1,"flex-nowrap":i===!1},B,h,y,"w-full",m);return e.jsx("div",{className:x,style:p,...j,children:c})},n=({span:o=24,offset:r,order:a,push:i,pull:c,xs:m,sm:p,md:j,lg:h,xl:y,"2xl":B,flex:x,children:D,className:f,style:be,...ye})=>{const d=[],E={xs:m,sm:p,md:j,lg:h,xl:y,"2xl":B};if(Object.entries(E).forEach(([t,C])=>{if(C!==void 0){const u=t==="xs"?"":`${t}:`;if(typeof C=="number")d.push(`${u}w-${Math.round(C/24*100)}`);else if(typeof C=="object"&&C!==null){const{span:N,offset:O,order:k,push:z,pull:W}=C;N!==void 0&&typeof N=="number"&&(N===0?d.push(`${u}hidden`):d.push(`${u}w-${Math.round(N/24*100)}`)),O!==void 0&&typeof O=="number"&&d.push(`${u}ml-[${O/24*100}%]`),k!==void 0&&typeof k=="number"&&d.push(`${u}order-${k}`),z!==void 0&&typeof z=="number"&&d.push(`${u}left-[${z/24*100}%]`),W!==void 0&&typeof W=="number"&&d.push(`${u}right-[${W/24*100}%]`)}}}),!Object.values(E).some(t=>t!==void 0&&(typeof t=="number"||typeof t=="object"&&t.span!==void 0))&&o!==void 0&&typeof o=="number")if(o===0)d.push("hidden");else{const t={1:"w-[4.166667%]",2:"w-[8.333333%]",3:"w-1/8",4:"w-1/6",6:"w-1/4",8:"w-1/3",9:"w-[37.5%]",12:"w-1/2",16:"w-2/3",18:"w-3/4",20:"w-5/6",24:"w-full"};d.push(t[o]||`w-[${Math.round(o/24*1e4)/100}%]`)}r!==void 0&&(typeof r=="object"?d.push(...g(r,"ml-[",t=>`${Math.round(t/24*1e4)/100}%]`)):typeof r=="number"&&d.push(`ml-[${Math.round(r/24*1e4)/100}%]`)),a!==void 0&&(typeof a=="object"?d.push(...g(a,"order-")):typeof a=="number"&&d.push(`order-${a}`)),i!==void 0&&(typeof i=="object"?d.push(...g(i,"left-[",t=>`${t/24*100}%]`)):typeof i=="number"&&d.push(`left-[${i/24*100}%]`)),c!==void 0&&(typeof c=="object"?d.push(...g(c,"right-[",t=>`${t/24*100}%]`)):typeof c=="number"&&d.push(`right-[${c/24*100}%]`));let M={};if(x!==void 0)if(typeof x=="object"){const t=x.xs||x.sm||x.md||x.lg||x.xl||x["2xl"]||"1";M.flex=t}else M.flex=x;const Be=P("relative","min-w-0",d,f);return e.jsx("div",{className:Be,style:{...M,...be},...ye,children:D})},b=({fluid:o=!1,children:r,className:a,style:i,...c})=>{const m=P("mx-auto px-4",{"max-w-none":o,"max-w-screen-2xl":!o},a);return e.jsx("div",{className:m,style:i,...c,children:r})},v={Row:l,Col:n,Container:b};try{l.displayName="Row",l.__docgenInfo={description:"",displayName:"Row",props:{gutter:{defaultValue:null,description:"",name:"gutter",required:!1,type:{name:"ResponsiveValue<number | [number, number]>"}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:'ResponsiveValue<"center" | "start" | "end" | "space-around" | "space-between" | "space-evenly">'}},align:{defaultValue:{value:"top"},description:"",name:"align",required:!1,type:{name:'ResponsiveValue<"bottom" | "top" | "middle" | "stretch">'}},wrap:{defaultValue:{value:"true"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{n.displayName="Col",n.__docgenInfo={description:"",displayName:"Col",props:{span:{defaultValue:{value:"24"},description:"",name:"span",required:!1,type:{name:"ResponsiveValue<number>"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"ResponsiveValue<number>"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveValue<number>"}},push:{defaultValue:null,description:"",name:"push",required:!1,type:{name:"ResponsiveValue<number>"}},pull:{defaultValue:null,description:"",name:"pull",required:!1,type:{name:"ResponsiveValue<number>"}},xs:{defaultValue:null,description:"",name:"xs",required:!1,type:{name:"number | ColSize"}},sm:{defaultValue:null,description:"",name:"sm",required:!1,type:{name:"number | ColSize"}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:"number | ColSize"}},lg:{defaultValue:null,description:"",name:"lg",required:!1,type:{name:"number | ColSize"}},xl:{defaultValue:null,description:"",name:"xl",required:!1,type:{name:"number | ColSize"}},"2xl":{defaultValue:null,description:"",name:"2xl",required:!1,type:{name:"number | ColSize"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"ResponsiveValue<string | number>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{b.displayName="Container",b.__docgenInfo={description:"",displayName:"Container",props:{fluid:{defaultValue:{value:"false"},description:"",name:"fluid",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Ve={title:"Layout/Grid",component:l,parameters:{layout:"padded",docs:{description:{component:"Sistem Grid yang powerful dengan Row, Col, dan Container untuk membuat layout responsive. Menggunakan sistem 24-kolom dengan dukungan breakpoint dan flex properties yang fleksibel untuk berbagai kebutuhan layout modern."}}},tags:["autodocs"],argTypes:{gutter:{control:{type:"number"},description:"Spacing antar kolom"},justify:{control:{type:"select"},options:["start","end","center","space-around","space-between","space-evenly"],description:"Horizontal alignment"},align:{control:{type:"select"},options:["top","middle","bottom","stretch"],description:"Vertical alignment"},wrap:{control:{type:"boolean"},description:"Apakah columns dapat wrap ke baris baru"}}},s=({children:o,className:r="",height:a="h-12",style:i})=>e.jsx("div",{className:`${a} bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 rounded-lg shadow-sm flex items-center justify-center font-medium text-primary-700 text-sm transition-all hover:shadow-md ${r}`,style:i,children:o}),w={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{children:e.jsx(n,{span:24,children:e.jsx(s,{children:"col-24"})})}),e.jsxs(l,{children:[e.jsx(n,{span:12,children:e.jsx(s,{children:"col-12"})}),e.jsx(n,{span:12,children:e.jsx(s,{children:"col-12"})})]}),e.jsxs(l,{children:[e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})})]}),e.jsxs(l,{children:[e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})})]})]})},R={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"No Gutter (Default)"}),e.jsxs(l,{children:[e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Small Gutter (8px)"}),e.jsxs(l,{gutter:8,children:[e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Medium Gutter (16px)"}),e.jsxs(l,{gutter:16,children:[e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Large Gutter (24px)"}),e.jsxs(l,{gutter:24,children:[e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Different Gutter [H:16px, V:24px] (with wrap)"}),e.jsxs(l,{gutter:[16,24],className:"max-w-2xl",children:[e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:6,children:e.jsx(s,{children:"col-6"})}),e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})})]})]})]})},G={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(l,{children:[e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})}),e.jsx(n,{span:8,offset:8,children:e.jsx(s,{children:"col-8 offset-8"})})]}),e.jsxs(l,{children:[e.jsx(n,{span:6,offset:6,children:e.jsx(s,{children:"col-6 offset-6"})}),e.jsx(n,{span:6,offset:6,children:e.jsx(s,{children:"col-6 offset-6"})})]}),e.jsx(l,{children:e.jsx(n,{span:12,offset:6,children:e.jsx(s,{children:"col-12 offset-6"})})})]})},$={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-secondary-50 rounded",children:[e.jsxs("p",{className:"text-sm text-secondary-700 mb-2",children:[e.jsx("strong",{children:"Responsive behavior:"})," Resize your screen to see changes"]}),e.jsxs("ul",{className:"text-xs text-secondary-600 space-y-1",children:[e.jsx("li",{children:"• xs (default): 1 column (24 span each)"}),e.jsx("li",{children:"• sm (640px+): 2 columns (12 span each)"}),e.jsx("li",{children:"• md (768px+): 3 columns (8 span each)"}),e.jsx("li",{children:"• lg (1024px+): 4 columns (6 span each)"}),e.jsx("li",{children:"• xl (1280px+): 6 columns (4 span each)"})]})]}),e.jsxs(l,{gutter:[16,16],children:[e.jsx(n,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsx(s,{children:"Responsive"})}),e.jsx(n,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsx(s,{children:"Responsive"})}),e.jsx(n,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsx(s,{children:"Responsive"})}),e.jsx(n,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsx(s,{children:"Responsive"})}),e.jsx(n,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsx(s,{children:"Responsive"})}),e.jsx(n,{xs:24,sm:12,md:8,lg:6,xl:4,children:e.jsx(s,{children:"Responsive"})})]})]})},V={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Horizontal Alignment (justify)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:'justify="start"'}),e.jsxs(l,{justify:"start",className:"bg-secondary-50 p-2 rounded",children:[e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})}),e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})}),e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:'justify="center"'}),e.jsxs(l,{justify:"center",className:"bg-secondary-50 p-2 rounded",children:[e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})}),e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})}),e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:'justify="end"'}),e.jsxs(l,{justify:"end",className:"bg-secondary-50 p-2 rounded",children:[e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})}),e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})}),e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:'justify="space-between"'}),e.jsxs(l,{justify:"space-between",className:"bg-secondary-50 p-2 rounded",children:[e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})}),e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})}),e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:'justify="space-around"'}),e.jsxs(l,{justify:"space-around",className:"bg-secondary-50 p-2 rounded",children:[e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})}),e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})}),e.jsx(n,{span:4,children:e.jsx(s,{children:"col-4"})})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Vertical Alignment (align)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:'align="top"'}),e.jsxs(l,{align:"top",className:"bg-secondary-50 p-2 rounded",children:[e.jsx(n,{span:8,children:e.jsx(s,{height:"h-8",children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{height:"h-16",children:"col-8 (tall)"})}),e.jsx(n,{span:8,children:e.jsx(s,{height:"h-12",children:"col-8"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:'align="middle"'}),e.jsxs(l,{align:"middle",className:"bg-secondary-50 p-2 rounded",children:[e.jsx(n,{span:8,children:e.jsx(s,{height:"h-8",children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{height:"h-16",children:"col-8 (tall)"})}),e.jsx(n,{span:8,children:e.jsx(s,{height:"h-12",children:"col-8"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:'align="bottom"'}),e.jsxs(l,{align:"bottom",className:"bg-secondary-50 p-2 rounded",children:[e.jsx(n,{span:8,children:e.jsx(s,{height:"h-8",children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{height:"h-16",children:"col-8 (tall)"})}),e.jsx(n,{span:8,children:e.jsx(s,{height:"h-12",children:"col-8"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:'align="stretch"'}),e.jsxs(l,{align:"stretch",className:"bg-secondary-50 p-2 rounded",children:[e.jsx(n,{span:8,children:e.jsx(s,{className:"h-full",children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{height:"h-16",children:"col-8 (tall)"})}),e.jsx(n,{span:8,children:e.jsx(s,{className:"h-full",children:"col-8"})})]})]})]})]})]})},S={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Column Order"}),e.jsxs(l,{children:[e.jsx(n,{span:6,order:4,children:e.jsx(s,{children:"1 (order-4)"})}),e.jsx(n,{span:6,order:3,children:e.jsx(s,{children:"2 (order-3)"})}),e.jsx(n,{span:6,order:2,children:e.jsx(s,{children:"3 (order-2)"})}),e.jsx(n,{span:6,order:1,children:e.jsx(s,{children:"4 (order-1)"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Responsive Order"}),e.jsx("p",{className:"text-sm text-secondary-600 mb-3",children:"On mobile: 1,2,3,4 order. On desktop: 4,3,2,1 order."}),e.jsxs(l,{children:[e.jsx(n,{span:6,xs:{order:1},lg:{order:4},children:e.jsx(s,{children:"First"})}),e.jsx(n,{span:6,xs:{order:2},lg:{order:3},children:e.jsx(s,{children:"Second"})}),e.jsx(n,{span:6,xs:{order:3},lg:{order:2},children:e.jsx(s,{children:"Third"})}),e.jsx(n,{span:6,xs:{order:4},lg:{order:1},children:e.jsx(s,{children:"Fourth"})})]})]})]})},_={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Flex Auto"}),e.jsxs(l,{children:[e.jsx(n,{flex:"100px",children:e.jsx(s,{children:"100px"})}),e.jsx(n,{flex:"auto",children:e.jsx(s,{children:"flex: auto"})}),e.jsx(n,{flex:"100px",children:e.jsx(s,{children:"100px"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Flex Ratio"}),e.jsxs(l,{children:[e.jsx(n,{flex:2,children:e.jsx(s,{children:"flex: 2"})}),e.jsx(n,{flex:3,children:e.jsx(s,{children:"flex: 3"})}),e.jsx(n,{flex:1,children:e.jsx(s,{children:"flex: 1"})})]})]})]})},q={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Container (Fixed Width)"}),e.jsx("div",{className:"bg-secondary-100 p-4",children:e.jsx(b,{children:e.jsxs(l,{gutter:16,children:[e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})})]})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Container Fluid (Full Width)"}),e.jsx("div",{className:"bg-secondary-100 p-4",children:e.jsx(b,{fluid:!0,children:e.jsxs(l,{gutter:16,children:[e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})}),e.jsx(n,{span:8,children:e.jsx(s,{children:"col-8"})})]})})})]})]})},F={render:()=>e.jsx(b,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{children:e.jsx(n,{span:24,children:e.jsx(s,{className:"bg-blue-100 border-blue-300 text-blue-800",children:"Header"})})}),e.jsxs(l,{gutter:16,children:[e.jsx(n,{xs:24,lg:4,children:e.jsx(s,{className:"bg-green-100 border-green-300 text-green-800",height:"h-24",children:"Navigation"})}),e.jsx(n,{xs:24,lg:16,children:e.jsxs(l,{gutter:[0,16],children:[e.jsx(n,{span:24,children:e.jsx(s,{className:"bg-yellow-100 border-yellow-300 text-yellow-800",children:"Main Content"})}),e.jsx(n,{xs:24,md:12,children:e.jsx(s,{className:"bg-purple-100 border-purple-300 text-purple-800",children:"Article 1"})}),e.jsx(n,{xs:24,md:12,children:e.jsx(s,{className:"bg-purple-100 border-purple-300 text-purple-800",children:"Article 2"})})]})}),e.jsx(n,{xs:24,lg:4,children:e.jsx(s,{className:"bg-red-100 border-red-300 text-red-800",height:"h-40",children:"Sidebar"})})]}),e.jsx(l,{children:e.jsx(n,{span:24,children:e.jsx(s,{className:"bg-secondary-200 border-secondary-400 text-secondary-700",children:"Footer"})})})]})})},A={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Using the Grid namespace for cleaner imports: Grid.Row, Grid.Col, Grid.Container"}),e.jsx(v.Container,{children:e.jsxs(v.Row,{gutter:16,children:[e.jsx(v.Col,{span:8,children:e.jsxs(s,{children:["Grid.Col span=",8]})}),e.jsx(v.Col,{span:8,children:e.jsxs(s,{children:["Grid.Col span=",8]})}),e.jsx(v.Col,{span:8,children:e.jsxs(s,{children:["Grid.Col span=",8]})})]})})]})};var L,U,I;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Row>
        <Col span={24}>
          <DemoBox>col-24</DemoBox>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <DemoBox>col-12</DemoBox>
        </Col>
        <Col span={12}>
          <DemoBox>col-12</DemoBox>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <DemoBox>col-8</DemoBox>
        </Col>
        <Col span={8}>
          <DemoBox>col-8</DemoBox>
        </Col>
        <Col span={8}>
          <DemoBox>col-8</DemoBox>
        </Col>
      </Row>

      <Row>
        <Col span={6}>
          <DemoBox>col-6</DemoBox>
        </Col>
        <Col span={6}>
          <DemoBox>col-6</DemoBox>
        </Col>
        <Col span={6}>
          <DemoBox>col-6</DemoBox>
        </Col>
        <Col span={6}>
          <DemoBox>col-6</DemoBox>
        </Col>
      </Row>
    </div>
}`,...(I=(U=w.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var T,J,K;R.parameters={...R.parameters,docs:{...(T=R.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">No Gutter (Default)</h3>
        <Row>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Small Gutter (8px)</h3>
        <Row gutter={8}>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium Gutter (16px)</h3>
        <Row gutter={16}>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large Gutter (24px)</h3>
        <Row gutter={24}>
          <Col span={8}>
            <DemoBox>col-8</DemoBox>
          </Col>
          <Col span={8}>
            <DemoBox>col-8</DemoBox>
          </Col>
          <Col span={8}>
            <DemoBox>col-8</DemoBox>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Different Gutter [H:16px, V:24px] (with wrap)
        </h3>
        <Row gutter={[16, 24]} className="max-w-2xl">
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={6}>
            <DemoBox>col-6</DemoBox>
          </Col>
          <Col span={8}>
            <DemoBox>col-8</DemoBox>
          </Col>
          <Col span={8}>
            <DemoBox>col-8</DemoBox>
          </Col>
          <Col span={8}>
            <DemoBox>col-8</DemoBox>
          </Col>
        </Row>
      </div>
    </div>
}`,...(K=(J=R.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;G.parameters={...G.parameters,docs:{...(Q=G.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Row>
        <Col span={8}>
          <DemoBox>col-8</DemoBox>
        </Col>
        <Col span={8} offset={8}>
          <DemoBox>col-8 offset-8</DemoBox>
        </Col>
      </Row>

      <Row>
        <Col span={6} offset={6}>
          <DemoBox>col-6 offset-6</DemoBox>
        </Col>
        <Col span={6} offset={6}>
          <DemoBox>col-6 offset-6</DemoBox>
        </Col>
      </Row>

      <Row>
        <Col span={12} offset={6}>
          <DemoBox>col-12 offset-6</DemoBox>
        </Col>
      </Row>
    </div>
}`,...(Y=(X=G.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;$.parameters={...$.parameters,docs:{...(Z=$.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="p-4 bg-secondary-50 rounded">
        <p className="text-sm text-secondary-700 mb-2">
          <strong>Responsive behavior:</strong> Resize your screen to see
          changes
        </p>
        <ul className="text-xs text-secondary-600 space-y-1">
          <li>• xs (default): 1 column (24 span each)</li>
          <li>• sm (640px+): 2 columns (12 span each)</li>
          <li>• md (768px+): 3 columns (8 span each)</li>
          <li>• lg (1024px+): 4 columns (6 span each)</li>
          <li>• xl (1280px+): 6 columns (4 span each)</li>
        </ul>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DemoBox>Responsive</DemoBox>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DemoBox>Responsive</DemoBox>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DemoBox>Responsive</DemoBox>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DemoBox>Responsive</DemoBox>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DemoBox>Responsive</DemoBox>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DemoBox>Responsive</DemoBox>
        </Col>
      </Row>
    </div>
}`,...(ne=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var se,oe,le;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Horizontal Alignment (justify)
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">justify="start"</p>
            <Row justify="start" className="bg-secondary-50 p-2 rounded">
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">justify="center"</p>
            <Row justify="center" className="bg-secondary-50 p-2 rounded">
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">justify="end"</p>
            <Row justify="end" className="bg-secondary-50 p-2 rounded">
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">justify="space-between"</p>
            <Row justify="space-between" className="bg-secondary-50 p-2 rounded">
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">justify="space-around"</p>
            <Row justify="space-around" className="bg-secondary-50 p-2 rounded">
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox>col-4</DemoBox>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Vertical Alignment (align)
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">align="top"</p>
            <Row align="top" className="bg-secondary-50 p-2 rounded">
              <Col span={8}>
                <DemoBox height="h-8">col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-16">col-8 (tall)</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-12">col-8</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">align="middle"</p>
            <Row align="middle" className="bg-secondary-50 p-2 rounded">
              <Col span={8}>
                <DemoBox height="h-8">col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-16">col-8 (tall)</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-12">col-8</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">align="bottom"</p>
            <Row align="bottom" className="bg-secondary-50 p-2 rounded">
              <Col span={8}>
                <DemoBox height="h-8">col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-16">col-8 (tall)</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-12">col-8</DemoBox>
              </Col>
            </Row>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">align="stretch"</p>
            <Row align="stretch" className="bg-secondary-50 p-2 rounded">
              <Col span={8}>
                <DemoBox className="h-full">col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox height="h-16">col-8 (tall)</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox className="h-full">col-8</DemoBox>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
}`,...(le=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var re,ae,ie;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Column Order</h3>
        <Row>
          <Col span={6} order={4}>
            <DemoBox>1 (order-4)</DemoBox>
          </Col>
          <Col span={6} order={3}>
            <DemoBox>2 (order-3)</DemoBox>
          </Col>
          <Col span={6} order={2}>
            <DemoBox>3 (order-2)</DemoBox>
          </Col>
          <Col span={6} order={1}>
            <DemoBox>4 (order-1)</DemoBox>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Responsive Order</h3>
        <p className="text-sm text-secondary-600 mb-3">
          On mobile: 1,2,3,4 order. On desktop: 4,3,2,1 order.
        </p>
        <Row>
          <Col span={6} xs={{
          order: 1
        }} lg={{
          order: 4
        }}>
            <DemoBox>First</DemoBox>
          </Col>
          <Col span={6} xs={{
          order: 2
        }} lg={{
          order: 3
        }}>
            <DemoBox>Second</DemoBox>
          </Col>
          <Col span={6} xs={{
          order: 3
        }} lg={{
          order: 2
        }}>
            <DemoBox>Third</DemoBox>
          </Col>
          <Col span={6} xs={{
          order: 4
        }} lg={{
          order: 1
        }}>
            <DemoBox>Fourth</DemoBox>
          </Col>
        </Row>
      </div>
    </div>
}`,...(ie=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var de,ce,te;_.parameters={..._.parameters,docs:{...(de=_.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Flex Auto</h3>
        <Row>
          <Col flex="100px">
            <DemoBox>100px</DemoBox>
          </Col>
          <Col flex="auto">
            <DemoBox>flex: auto</DemoBox>
          </Col>
          <Col flex="100px">
            <DemoBox>100px</DemoBox>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Flex Ratio</h3>
        <Row>
          <Col flex={2}>
            <DemoBox>flex: 2</DemoBox>
          </Col>
          <Col flex={3}>
            <DemoBox>flex: 3</DemoBox>
          </Col>
          <Col flex={1}>
            <DemoBox>flex: 1</DemoBox>
          </Col>
        </Row>
      </div>
    </div>
}`,...(te=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:te.source}}};var xe,me,pe;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Container (Fixed Width)</h3>
        <div className="bg-secondary-100 p-4">
          <Container>
            <Row gutter={16}>
              <Col span={8}>
                <DemoBox>col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox>col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox>col-8</DemoBox>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Container Fluid (Full Width)
        </h3>
        <div className="bg-secondary-100 p-4">
          <Container fluid>
            <Row gutter={16}>
              <Col span={8}>
                <DemoBox>col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox>col-8</DemoBox>
              </Col>
              <Col span={8}>
                <DemoBox>col-8</DemoBox>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
}`,...(pe=(me=q.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,ue,je;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <Container>
      <div className="space-y-4">
        {/* Header */}
        <Row>
          <Col span={24}>
            <DemoBox className="bg-blue-100 border-blue-300 text-blue-800">
              Header
            </DemoBox>
          </Col>
        </Row>

        {/* Navigation */}
        <Row gutter={16}>
          <Col xs={24} lg={4}>
            <DemoBox className="bg-green-100 border-green-300 text-green-800" height="h-24">
              Navigation
            </DemoBox>
          </Col>

          <Col xs={24} lg={16}>
            <Row gutter={[0, 16]}>
              <Col span={24}>
                <DemoBox className="bg-yellow-100 border-yellow-300 text-yellow-800">
                  Main Content
                </DemoBox>
              </Col>

              <Col xs={24} md={12}>
                <DemoBox className="bg-purple-100 border-purple-300 text-purple-800">
                  Article 1
                </DemoBox>
              </Col>

              <Col xs={24} md={12}>
                <DemoBox className="bg-purple-100 border-purple-300 text-purple-800">
                  Article 2
                </DemoBox>
              </Col>
            </Row>
          </Col>

          <Col xs={24} lg={4}>
            <DemoBox className="bg-red-100 border-red-300 text-red-800" height="h-40">
              Sidebar
            </DemoBox>
          </Col>
        </Row>

        {/* Footer */}
        <Row>
          <Col span={24}>
            <DemoBox className="bg-secondary-200 border-secondary-400 text-secondary-700">
              Footer
            </DemoBox>
          </Col>
        </Row>
      </div>
    </Container>
}`,...(je=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:je.source}}};var fe,Ce,ge;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm text-secondary-600 mb-4">
        Using the Grid namespace for cleaner imports: Grid.Row, Grid.Col,
        Grid.Container
      </p>

      <Grid.Container>
        <Grid.Row gutter={16}>
          <Grid.Col span={8}>
            <DemoBox>Grid.Col span={8}</DemoBox>
          </Grid.Col>
          <Grid.Col span={8}>
            <DemoBox>Grid.Col span={8}</DemoBox>
          </Grid.Col>
          <Grid.Col span={8}>
            <DemoBox>Grid.Col span={8}</DemoBox>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </div>
}`,...(ge=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}};const Se=["BasicGrid","WithGutter","WithOffset","ResponsiveGrid","FlexAlignment","ColumnOrder","FlexColumns","WithContainer","ComplexLayout","GridNamespaceUsage"];export{w as BasicGrid,S as ColumnOrder,F as ComplexLayout,V as FlexAlignment,_ as FlexColumns,A as GridNamespaceUsage,$ as ResponsiveGrid,q as WithContainer,R as WithGutter,G as WithOffset,Se as __namedExportsOrder,Ve as default};
