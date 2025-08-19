import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{c as i}from"./clsx-B-dksMZM.js";import{B as s}from"./Button-igjKbdfR.js";import"./index-Bnmt0x4K.js";import"./index-DkvSDgFW.js";const se={sm:{container:"p-4",image:"w-16 h-16",title:"text-sm font-medium",description:"text-xs",spacing:"space-y-2"},md:{container:"p-8",image:"w-24 h-24",title:"text-lg font-semibold",description:"text-sm",spacing:"space-y-4"},lg:{container:"p-12",image:"w-32 h-32",title:"text-xl font-bold",description:"text-base",spacing:"space-y-6"}},ne={default:a=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-3a2 2 0 00-2 2v1M7 13h10v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2z"})}),search:a=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),network:a=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"})}),file:a=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 1.846-.5 3.578-1.374 5.06"})}),data:a=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),cart:a=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13a2 2 0 100 4 2 2 0 000-4zM9 17a2 2 0 11-4 0 2 2 0 014 0z"})}),notification:a=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),user:a=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"})}),message:a=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})},V={default:{title:"No Data",description:"There is no data available at the moment."},search:{title:"No Results Found",description:"Try adjusting your search terms or filters."},network:{title:"Connection Error",description:"Please check your internet connection and try again."},file:{title:"No Files",description:"Upload files to get started."},data:{title:"No Data Available",description:"Data will appear here once available."},cart:{title:"Your Cart is Empty",description:"Add some items to your cart to continue shopping."},notification:{title:"No Notifications",description:"You're all caught up! No new notifications."},user:{title:"No Users Found",description:"Invite team members to get started."},message:{title:"No Messages",description:"Start a conversation to see messages here."}},r=({title:a,description:Q,image:X,children:v,imageType:h="default",size:d="md",direction:n="vertical",className:Z,style:$,...ee})=>{const t=se[d],g=a??V[h].title,f=Q??V[h].description,_=X??ne[h](i(t.image,"text-secondary-300")),ae=i("flex items-center justify-center text-center",t.container,{"flex-col":n==="vertical","flex-row space-x-6":n==="horizontal",[t.spacing]:n==="vertical"},Z),re=i({"space-y-2":n==="vertical"&&d==="sm","space-y-3":n==="vertical"&&d==="md","space-y-4":n==="vertical"&&d==="lg"});return e.jsxs("div",{className:ae,style:$,...ee,children:[_&&e.jsx("div",{className:"flex-shrink-0",children:_}),(g||f||v)&&e.jsxs("div",{className:re,children:[g&&e.jsx("h3",{className:i(t.title,"text-secondary-900 m-0"),children:g}),f&&e.jsx("p",{className:i(t.description,"text-secondary-500 m-0"),children:f}),v&&e.jsx("div",{className:"mt-4",children:v})]})]})},x=a=>e.jsx(r,{...a,imageType:"search"}),N=a=>e.jsx(r,{...a,imageType:"data"}),b=a=>e.jsx(r,{...a,imageType:"cart"}),k=a=>e.jsx(r,{...a,imageType:"notification"}),j=a=>e.jsx(r,{...a,imageType:"file"}),z=a=>e.jsx(r,{...a,imageType:"message"}),E=a=>e.jsx(r,{...a,imageType:"user"}),q=a=>e.jsx(r,{...a,imageType:"network"});try{r.displayName="Empty",r.__docgenInfo={description:"",displayName:"Empty",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},imageType:{defaultValue:{value:"default"},description:"",name:"imageType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"file"'},{value:'"search"'},{value:'"user"'},{value:'"network"'},{value:'"data"'},{value:'"cart"'},{value:'"notification"'},{value:'"message"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{x.displayName="EmptySearch",x.__docgenInfo={description:"",displayName:"EmptySearch",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{N.displayName="EmptyData",N.__docgenInfo={description:"",displayName:"EmptyData",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{b.displayName="EmptyCart",b.__docgenInfo={description:"",displayName:"EmptyCart",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{k.displayName="EmptyNotification",k.__docgenInfo={description:"",displayName:"EmptyNotification",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{j.displayName="EmptyFile",j.__docgenInfo={description:"",displayName:"EmptyFile",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{z.displayName="EmptyMessage",z.__docgenInfo={description:"",displayName:"EmptyMessage",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{E.displayName="EmptyUser",E.__docgenInfo={description:"",displayName:"EmptyUser",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{q.displayName="EmptyNetwork",q.__docgenInfo={description:"",displayName:"EmptyNetwork",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const ce={title:"Layout & Utility/Empty",component:r,parameters:{layout:"padded",docs:{description:{component:"Komponen Empty untuk menampilkan state kosong yang informatif dan menarik. Dilengkapi dengan berbagai preset untuk use case yang umum seperti no search results, empty cart, no notifications."}}},tags:["autodocs"],argTypes:{imageType:{control:{type:"select"},options:["default","search","network","file","data","cart","notification","user","message"],description:"Tipe built-in empty state"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran empty state"},direction:{control:{type:"select"},options:["vertical","horizontal"],description:"Layout direction"},title:{control:{type:"text"},description:"Custom title"},description:{control:{type:"text"},description:"Custom description"}}},l={args:{}},o={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(r,{imageType:"default"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(r,{imageType:"search"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(r,{imageType:"data"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(r,{imageType:"file"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(r,{imageType:"cart"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(r,{imageType:"notification"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(r,{imageType:"user"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(r,{imageType:"message"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(r,{imageType:"network"})})]})},c={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Small"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg max-w-md",children:e.jsx(r,{size:"sm",imageType:"search"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Medium (Default)"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg max-w-md",children:e.jsx(r,{size:"md",imageType:"search"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Large"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg max-w-md",children:e.jsx(r,{size:"lg",imageType:"search"})})]})]})},m={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Custom Title and Description"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg max-w-lg",children:e.jsx(r,{imageType:"data",title:"Welcome to Your Dashboard!",description:"Connect your data sources to see beautiful analytics and insights here."})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Custom Icon"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg max-w-lg",children:e.jsx(r,{title:"Coming Soon",description:"This feature is under development and will be available soon.",image:e.jsx("div",{className:"w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center",children:e.jsx("svg",{className:"w-12 h-12 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})})})})]})]})},u={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Empty Cart with Actions"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg max-w-lg",children:e.jsx(r,{imageType:"cart",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{variant:"primary",children:"Browse Products"}),e.jsx(s,{variant:"ghost",children:"View Wishlist"})]})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"No Search Results"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg max-w-lg",children:e.jsx(r,{imageType:"search",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-center space-x-3",children:[e.jsx(s,{size:"sm",children:"Clear Filters"}),e.jsx(s,{size:"sm",variant:"outline",children:"Browse All"})]}),e.jsx("p",{className:"text-xs text-secondary-500",children:"Or try searching for something else"})]})})})]})]})},p={render:()=>e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Horizontal Layout"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg max-w-2xl",children:e.jsx(r,{direction:"horizontal",imageType:"network",title:"Connection Failed",description:"Unable to connect to the server. Please check your internet connection and try again.",children:e.jsxs("div",{className:"flex space-x-3",children:[e.jsx(s,{size:"sm",variant:"primary",children:"Retry"}),e.jsx(s,{size:"sm",variant:"outline",children:"Go Offline"})]})})})]})})},y={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"EmptySearch"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(x,{size:"sm",children:e.jsx(s,{size:"sm",variant:"outline",children:"Clear Search"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"EmptyData"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(N,{size:"sm",children:e.jsx(s,{size:"sm",variant:"primary",children:"Import Data"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"EmptyCart"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(b,{size:"sm",children:e.jsx(s,{size:"sm",variant:"primary",children:"Start Shopping"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"EmptyFile"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(j,{size:"sm",children:e.jsx(s,{size:"sm",variant:"primary",children:"Upload Files"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"EmptyUser"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(E,{size:"sm",children:e.jsx(s,{size:"sm",variant:"primary",children:"Invite Users"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"EmptyMessage"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(z,{size:"sm",children:e.jsx(s,{size:"sm",variant:"primary",children:"Send Message"})})})]})]})};var w,C,T;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {}
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var S,B,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="default" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="search" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="data" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="file" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="cart" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="notification" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="user" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="message" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Empty imageType="network" />
      </div>
    </div>
}`,...(L=(B=o.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var R,M,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <div className="border border-secondary-200 rounded-lg max-w-md">
          <Empty size="sm" imageType="search" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (Default)</h3>
        <div className="border border-secondary-200 rounded-lg max-w-md">
          <Empty size="md" imageType="search" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <div className="border border-secondary-200 rounded-lg max-w-md">
          <Empty size="lg" imageType="search" />
        </div>
      </div>
    </div>
}`,...(D=(M=c.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var I,U,W;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Custom Title and Description
        </h3>
        <div className="border border-secondary-200 rounded-lg max-w-lg">
          <Empty imageType="data" title="Welcome to Your Dashboard!" description="Connect your data sources to see beautiful analytics and insights here." />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Icon</h3>
        <div className="border border-secondary-200 rounded-lg max-w-lg">
          <Empty title="Coming Soon" description="This feature is under development and will be available soon." image={<div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>} />
        </div>
      </div>
    </div>
}`,...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var F,P,A;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Empty Cart with Actions</h3>
        <div className="border border-secondary-200 rounded-lg max-w-lg">
          <Empty imageType="cart">
            <div className="space-y-3">
              <Button variant="primary">Browse Products</Button>
              <Button variant="ghost">View Wishlist</Button>
            </div>
          </Empty>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">No Search Results</h3>
        <div className="border border-secondary-200 rounded-lg max-w-lg">
          <Empty imageType="search">
            <div className="space-y-3">
              <div className="flex justify-center space-x-3">
                <Button size="sm">Clear Filters</Button>
                <Button size="sm" variant="outline">
                  Browse All
                </Button>
              </div>
              <p className="text-xs text-secondary-500">
                Or try searching for something else
              </p>
            </div>
          </Empty>
        </div>
      </div>
    </div>
}`,...(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var H,O,Y;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Horizontal Layout</h3>
        <div className="border border-secondary-200 rounded-lg max-w-2xl">
          <Empty direction="horizontal" imageType="network" title="Connection Failed" description="Unable to connect to the server. Please check your internet connection and try again.">
            <div className="flex space-x-3">
              <Button size="sm" variant="primary">
                Retry
              </Button>
              <Button size="sm" variant="outline">
                Go Offline
              </Button>
            </div>
          </Empty>
        </div>
      </div>
    </div>
}`,...(Y=(O=p.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var G,K,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-medium mb-3">EmptySearch</h4>
        <div className="border border-secondary-200 rounded-lg">
          <EmptySearch size="sm">
            <Button size="sm" variant="outline">
              Clear Search
            </Button>
          </EmptySearch>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">EmptyData</h4>
        <div className="border border-secondary-200 rounded-lg">
          <EmptyData size="sm">
            <Button size="sm" variant="primary">
              Import Data
            </Button>
          </EmptyData>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">EmptyCart</h4>
        <div className="border border-secondary-200 rounded-lg">
          <EmptyCart size="sm">
            <Button size="sm" variant="primary">
              Start Shopping
            </Button>
          </EmptyCart>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">EmptyFile</h4>
        <div className="border border-secondary-200 rounded-lg">
          <EmptyFile size="sm">
            <Button size="sm" variant="primary">
              Upload Files
            </Button>
          </EmptyFile>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">EmptyUser</h4>
        <div className="border border-secondary-200 rounded-lg">
          <EmptyUser size="sm">
            <Button size="sm" variant="primary">
              Invite Users
            </Button>
          </EmptyUser>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">EmptyMessage</h4>
        <div className="border border-secondary-200 rounded-lg">
          <EmptyMessage size="sm">
            <Button size="sm" variant="primary">
              Send Message
            </Button>
          </EmptyMessage>
        </div>
      </div>
    </div>
}`,...(J=(K=y.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};const me=["Default","AllBuiltInTypes","DifferentSizes","CustomContent","WithActions","HorizontalLayout","PresetComponents"];export{o as AllBuiltInTypes,m as CustomContent,l as Default,c as DifferentSizes,p as HorizontalLayout,y as PresetComponents,u as WithActions,me as __namedExportsOrder,ce as default};
