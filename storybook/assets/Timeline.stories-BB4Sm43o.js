import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{R as ue}from"./index-DkvSDgFW.js";import{c as n}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";const o={sm:{dot:"w-2 h-2",icon:"w-4 h-4 p-0.5",title:"text-sm",description:"text-xs",timestamp:"text-xs",spacing:"pb-4",connector:"w-0.5"},md:{dot:"w-3 h-3",icon:"w-6 h-6 p-1",title:"text-base",description:"text-sm",timestamp:"text-sm",spacing:"pb-6",connector:"w-0.5"},lg:{dot:"w-4 h-4",icon:"w-8 h-8 p-1.5",title:"text-lg",description:"text-base",timestamp:"text-base",spacing:"pb-8",connector:"w-1"}},M={default:{dot:"bg-secondary-400 border-secondary-300",line:"bg-secondary-300",icon:"bg-secondary-100 text-secondary-600 border-secondary-300"},primary:{dot:"bg-primary-600 border-primary-500",line:"bg-primary-300",icon:"bg-primary-100 text-primary-600 border-primary-500"},success:{dot:"bg-green-600 border-green-500",line:"bg-green-300",icon:"bg-green-100 text-green-600 border-green-500"},warning:{dot:"bg-yellow-500 border-yellow-400",line:"bg-yellow-300",icon:"bg-yellow-100 text-yellow-600 border-yellow-400"},error:{dot:"bg-red-600 border-red-500",line:"bg-red-300",icon:"bg-red-100 text-red-600 border-red-500"},info:{dot:"bg-blue-600 border-blue-500",line:"bg-blue-300",icon:"bg-blue-100 text-blue-600 border-blue-500"}},pe=(t,k)=>{const l=typeof t=="string"?new Date(t):t;switch(k){case"relative":const T=new Date().getTime()-l.getTime(),m=Math.floor(T/(1e3*60)),d=Math.floor(m/60),u=Math.floor(d/24);return m<1?"Just now":m<60?`${m}m ago`:d<24?`${d}h ago`:u<30?`${u}d ago`:l.toLocaleDateString();case"date":return l.toLocaleDateString();case"time":return l.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});case"absolute":default:return l.toLocaleString()}},s=ue.forwardRef(({items:t,mode:k="left",showConnector:l=!0,size:r="md",className:T,showTimestamp:m=!0,timestampFormat:d="relative",...u},de)=>{const ce=(a,p,C)=>{const S=a.status||"default",c=k==="alternate",v=c&&p%2===1;return e.jsxs("div",{className:n("flex",c&&v?"flex-row-reverse":"flex-row",!C&&o[r].spacing),children:[e.jsxs("div",{className:"flex flex-col items-center mr-4",children:[e.jsx("div",{className:n("relative flex items-center justify-center rounded-full border-2 z-10",a.icon?n(o[r].icon,M[S].icon):n(o[r].dot,M[S].dot),a.active&&"ring-2 ring-primary-200"),children:a.icon||null}),l&&!C&&e.jsx("div",{className:n("flex-1 mt-2",o[r].connector,M[S].line,"min-h-8")})]}),e.jsxs("div",{className:n("flex-1",c&&v&&"text-right"),children:[e.jsxs("div",{className:n("flex items-start",c&&v?"flex-row-reverse":"flex-row"),children:[e.jsx("h3",{className:n("font-medium text-secondary-900",o[r].title,a.active&&"text-primary-600"),children:a.title}),m&&a.timestamp&&e.jsx("span",{className:n("text-secondary-500 ml-2",o[r].timestamp,c&&v&&"ml-0 mr-2"),children:pe(a.timestamp,d)})]}),a.description&&e.jsx("p",{className:n("text-secondary-600 mt-1",o[r].description),children:a.description}),a.content&&e.jsx("div",{className:"mt-2",children:a.content})]})]},a.key)};return e.jsx("div",{ref:de,className:n("timeline",T),...u,children:t.map((a,p)=>ce(a,p,p===t.length-1))})});s.displayName="Timeline";try{s.displayName="Timeline",s.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"Array timeline items",name:"items",required:!0,type:{name:"TimelineItem[]"}},mode:{defaultValue:{value:"left"},description:"Mode timeline",name:"mode",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"alternate"'}]}},showConnector:{defaultValue:{value:"true"},description:"Apakah menampilkan connector line",name:"showConnector",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Ukuran timeline",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},showTimestamp:{defaultValue:{value:"true"},description:"Apakah menampilkan timestamp",name:"showTimestamp",required:!1,type:{name:"boolean"}},timestampFormat:{defaultValue:{value:"relative"},description:"Format timestamp",name:"timestampFormat",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"time"'},{value:'"relative"'},{value:'"absolute"'}]}}}}}catch{}const we={title:"Data Display/Timeline",component:s,parameters:{layout:"padded",docs:{description:{component:"Komponen Timeline untuk menampilkan chronological events atau progress dengan visual yang menarik. Mendukung berbagai mode layout, status warna, dan custom content untuk setiap timeline item."}}},tags:["autodocs"],argTypes:{mode:{control:{type:"select"},options:["left","right","alternate"],description:"Mode timeline"},showConnector:{control:{type:"boolean"},description:"Apakah menampilkan connector line"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran timeline"},showTimestamp:{control:{type:"boolean"},description:"Apakah menampilkan timestamp"},timestampFormat:{control:{type:"select"},options:["relative","absolute","date","time"],description:"Format timestamp"}}},i=[{key:"1",title:"Project Started",description:"Initial project setup and planning phase completed",timestamp:new Date(Date.now()-10080*60*1e3),status:"success"},{key:"2",title:"Design Phase",description:"UI/UX design mockups and wireframes created",timestamp:new Date(Date.now()-7200*60*1e3),status:"primary"},{key:"3",title:"Development Started",description:"Backend and frontend development in progress",timestamp:new Date(Date.now()-4320*60*1e3),status:"warning",active:!0},{key:"4",title:"Testing Phase",description:"Quality assurance and testing scheduled",timestamp:new Date(Date.now()+2880*60*1e3),status:"default"}],ve=[{key:"1",title:"Project Kickoff",description:"Team meeting and requirements gathering",timestamp:"2024-01-15T09:00:00",status:"success",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})},{key:"2",title:"Design Review",description:"Stakeholder feedback and design approval",timestamp:"2024-01-20T14:30:00",status:"primary",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4 2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3 2h2v5L7 7l-2 2V4z",clipRule:"evenodd"})})},{key:"3",title:"Development Sprint 1",description:"Core functionality implementation",timestamp:"2024-01-25T10:00:00",status:"info",active:!0,icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})})},{key:"4",title:"Bug Fixes",description:"Addressing QA feedback and issues",timestamp:"2024-02-01T16:00:00",status:"error",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})},{key:"5",title:"Release",description:"Production deployment and monitoring",timestamp:"2024-02-10T12:00:00",status:"default",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"})})}],h={args:{items:i,mode:"left",showConnector:!0,size:"md",showTimestamp:!0,timestampFormat:"relative"}},x={render:()=>e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-6",children:"Left Mode (Default)"}),e.jsx(s,{items:i,mode:"left",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-6",children:"Right Mode"}),e.jsx(s,{items:i,mode:"right",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-6",children:"Alternate Mode"}),e.jsx(s,{items:i,mode:"alternate",size:"sm"})]})]})},f={render:()=>e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Small Size"}),e.jsx(s,{items:i.slice(0,3),size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Medium Size (Default)"}),e.jsx(s,{items:i.slice(0,3),size:"md"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Large Size"}),e.jsx(s,{items:i.slice(0,3),size:"lg"})]})]})},g={args:{items:ve,mode:"left",size:"md",showTimestamp:!0,timestampFormat:"absolute"}},w={render:()=>{const t=[{key:"1",title:"Default Status",description:"Standard timeline item",timestamp:new Date,status:"default"},{key:"2",title:"Primary Status",description:"Important or featured item",timestamp:new Date,status:"primary"},{key:"3",title:"Success Status",description:"Completed or successful action",timestamp:new Date,status:"success"},{key:"4",title:"Warning Status",description:"Attention needed or in progress",timestamp:new Date,status:"warning"},{key:"5",title:"Error Status",description:"Failed or error state",timestamp:new Date,status:"error"},{key:"6",title:"Info Status",description:"Informational or note item",timestamp:new Date,status:"info"}];return e.jsx(s,{items:t,showTimestamp:!1,size:"md"})}},y={render:()=>{const t=new Date(Date.now()-72e5);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-4",children:'Relative Format ("2h ago")'}),e.jsx(s,{items:[{key:"1",title:"Recent Event",description:"Shows relative time",timestamp:t,status:"primary"}],timestampFormat:"relative",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-4",children:"Absolute Format (Full date and time)"}),e.jsx(s,{items:[{key:"1",title:"Absolute Event",description:"Shows full timestamp",timestamp:t,status:"success"}],timestampFormat:"absolute",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-4",children:"Date Only Format"}),e.jsx(s,{items:[{key:"1",title:"Date Event",description:"Shows date only",timestamp:t,status:"info"}],timestampFormat:"date",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-4",children:"Time Only Format"}),e.jsx(s,{items:[{key:"1",title:"Time Event",description:"Shows time only",timestamp:t,status:"warning"}],timestampFormat:"time",size:"sm"})]})]})}},b={render:()=>{const t=[{key:"1",title:"Order Placed",description:"Your order has been successfully placed",timestamp:new Date(Date.now()-864e5),status:"success",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})}),content:e.jsxs("div",{className:"mt-3 p-3 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("div",{className:"text-sm text-green-800",children:e.jsx("strong",{children:"Order #12345"})}),e.jsx("div",{className:"text-sm text-green-600 mt-1",children:"Items: MacBook Pro, Magic Mouse"}),e.jsx("div",{className:"text-sm text-green-600",children:"Total: $2,499.00"})]})},{key:"2",title:"Payment Processed",description:"Payment has been successfully charged",timestamp:new Date(Date.now()-828e5),status:"primary",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"})}),content:e.jsxs("div",{className:"mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("div",{className:"text-sm text-blue-800",children:"Card ending in ****4532"}),e.jsx("div",{className:"text-sm text-blue-600 mt-1",children:"Transaction ID: TXN789012345"})]})},{key:"3",title:"Order Shipped",description:"Your order is on its way!",timestamp:new Date(Date.now()-432e5),status:"info",active:!0,icon:e.jsxs("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:[e.jsx("path",{d:"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}),e.jsx("path",{d:"M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"})]}),content:e.jsxs("div",{className:"mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsxs("div",{className:"text-sm text-blue-800",children:[e.jsx("strong",{children:"Tracking Number:"})," 1Z999AA1234567890"]}),e.jsx("div",{className:"text-sm text-blue-600 mt-1",children:"Carrier: UPS Ground"}),e.jsx("div",{className:"text-sm text-blue-600",children:"Estimated Delivery: Tomorrow"}),e.jsx("button",{className:"mt-2 text-sm text-blue-600 hover:text-blue-700 underline",children:"Track Package"})]})},{key:"4",title:"Delivered",description:"Order delivered successfully",timestamp:new Date(Date.now()+864e5),status:"default",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}];return e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-6",children:"Order Tracking Timeline"}),e.jsx(s,{items:t,size:"md",timestampFormat:"relative"})]})}},j={render:()=>{const t=[{key:"1",title:"John commented on your post",description:"Great work on the new design! I love the color scheme.",timestamp:new Date(Date.now()-18e5),status:"primary",icon:e.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:"J"})},{key:"2",title:"Sarah liked your photo",timestamp:new Date(Date.now()-72e5),status:"error",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})})},{key:"3",title:"You uploaded a new document",description:"Project_Proposal_v2.pdf",timestamp:new Date(Date.now()-216e5),status:"success",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z",clipRule:"evenodd"})})},{key:"4",title:"Team meeting scheduled",description:"Weekly standup - Tomorrow at 10:00 AM",timestamp:new Date(Date.now()-864e5),status:"warning",icon:e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"})})}];return e.jsxs("div",{className:"max-w-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-6",children:"Recent Activity"}),e.jsx(s,{items:t,size:"sm",timestampFormat:"relative"})]})}},N={args:{items:i,showConnector:!1,size:"md"}},D={args:{items:i,showTimestamp:!1,size:"md"}},z={args:{items:i,mode:"left",showConnector:!0,size:"md",showTimestamp:!0,timestampFormat:"relative"}};var I,R,F;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    mode: "left",
    showConnector: true,
    size: "md",
    showTimestamp: true,
    timestampFormat: "relative"
  }
}`,...(F=(R=h.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var A,H,P;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-12">
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Left Mode (Default)
        </h3>
        <Timeline items={basicItems} mode="left" size="sm" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Right Mode
        </h3>
        <Timeline items={basicItems} mode="right" size="sm" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Alternate Mode
        </h3>
        <Timeline items={basicItems} mode="alternate" size="sm" />
      </div>
    </div>
}`,...(P=(H=x.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var V,B,L;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-12">
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Small Size
        </h3>
        <Timeline items={basicItems.slice(0, 3)} size="sm" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Medium Size (Default)
        </h3>
        <Timeline items={basicItems.slice(0, 3)} size="md" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Large Size
        </h3>
        <Timeline items={basicItems.slice(0, 3)} size="lg" />
      </div>
    </div>
}`,...(L=(B=f.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var O,E,_;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: projectItems,
    mode: "left",
    size: "md",
    showTimestamp: true,
    timestampFormat: "absolute"
  }
}`,...(_=(E=g.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var W,q,U;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const statusItems: TimelineItem[] = [{
      key: "1",
      title: "Default Status",
      description: "Standard timeline item",
      timestamp: new Date(),
      status: "default"
    }, {
      key: "2",
      title: "Primary Status",
      description: "Important or featured item",
      timestamp: new Date(),
      status: "primary"
    }, {
      key: "3",
      title: "Success Status",
      description: "Completed or successful action",
      timestamp: new Date(),
      status: "success"
    }, {
      key: "4",
      title: "Warning Status",
      description: "Attention needed or in progress",
      timestamp: new Date(),
      status: "warning"
    }, {
      key: "5",
      title: "Error Status",
      description: "Failed or error state",
      timestamp: new Date(),
      status: "error"
    }, {
      key: "6",
      title: "Info Status",
      description: "Informational or note item",
      timestamp: new Date(),
      status: "info"
    }];
    return <Timeline items={statusItems} showTimestamp={false} size="md" />;
  }
}`,...(U=(q=w.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var Y,J,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const sampleDate = new Date(Date.now() - 2 * 60 * 60 * 1000); // 2 hours ago

    return <div className="space-y-8">
        <div>
          <h4 className="text-sm font-medium text-secondary-700 mb-4">
            Relative Format ("2h ago")
          </h4>
          <Timeline items={[{
          key: "1",
          title: "Recent Event",
          description: "Shows relative time",
          timestamp: sampleDate,
          status: "primary"
        }]} timestampFormat="relative" size="sm" />
        </div>

        <div>
          <h4 className="text-sm font-medium text-secondary-700 mb-4">
            Absolute Format (Full date and time)
          </h4>
          <Timeline items={[{
          key: "1",
          title: "Absolute Event",
          description: "Shows full timestamp",
          timestamp: sampleDate,
          status: "success"
        }]} timestampFormat="absolute" size="sm" />
        </div>

        <div>
          <h4 className="text-sm font-medium text-secondary-700 mb-4">
            Date Only Format
          </h4>
          <Timeline items={[{
          key: "1",
          title: "Date Event",
          description: "Shows date only",
          timestamp: sampleDate,
          status: "info"
        }]} timestampFormat="date" size="sm" />
        </div>

        <div>
          <h4 className="text-sm font-medium text-secondary-700 mb-4">
            Time Only Format
          </h4>
          <Timeline items={[{
          key: "1",
          title: "Time Event",
          description: "Shows time only",
          timestamp: sampleDate,
          status: "warning"
        }]} timestampFormat="time" size="sm" />
        </div>
      </div>;
  }
}`,...($=(J=y.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var G,X,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const contentItems: TimelineItem[] = [{
      key: "1",
      title: "Order Placed",
      description: "Your order has been successfully placed",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      status: "success",
      icon: <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>,
      content: <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="text-sm text-green-800">
              <strong>Order #12345</strong>
            </div>
            <div className="text-sm text-green-600 mt-1">
              Items: MacBook Pro, Magic Mouse
            </div>
            <div className="text-sm text-green-600">Total: $2,499.00</div>
          </div>
    }, {
      key: "2",
      title: "Payment Processed",
      description: "Payment has been successfully charged",
      timestamp: new Date(Date.now() - 23 * 60 * 60 * 1000),
      status: "primary",
      icon: <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>,
      content: <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-sm text-blue-800">Card ending in ****4532</div>
            <div className="text-sm text-blue-600 mt-1">
              Transaction ID: TXN789012345
            </div>
          </div>
    }, {
      key: "3",
      title: "Order Shipped",
      description: "Your order is on its way!",
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
      status: "info",
      active: true,
      icon: <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
          </svg>,
      content: <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-sm text-blue-800">
              <strong>Tracking Number:</strong> 1Z999AA1234567890
            </div>
            <div className="text-sm text-blue-600 mt-1">
              Carrier: UPS Ground
            </div>
            <div className="text-sm text-blue-600">
              Estimated Delivery: Tomorrow
            </div>
            <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 underline">
              Track Package
            </button>
          </div>
    }, {
      key: "4",
      title: "Delivered",
      description: "Order delivered successfully",
      timestamp: new Date(Date.now() + 24 * 60 * 60 * 1000),
      status: "default",
      icon: <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
    }];
    return <div className="max-w-2xl">
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Order Tracking Timeline
        </h3>
        <Timeline items={contentItems} size="md" timestampFormat="relative" />
      </div>;
  }
}`,...(K=(X=b.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Q,Z,ee;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const activityItems: TimelineItem[] = [{
      key: "1",
      title: "John commented on your post",
      description: "Great work on the new design! I love the color scheme.",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      // 30 minutes ago
      status: "primary",
      icon: <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            J
          </div>
    }, {
      key: "2",
      title: "Sarah liked your photo",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      // 2 hours ago
      status: "error",
      icon: <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
    }, {
      key: "3",
      title: "You uploaded a new document",
      description: "Project_Proposal_v2.pdf",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      // 6 hours ago
      status: "success",
      icon: <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
          </svg>
    }, {
      key: "4",
      title: "Team meeting scheduled",
      description: "Weekly standup - Tomorrow at 10:00 AM",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      // 1 day ago
      status: "warning",
      icon: <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
    }];
    return <div className="max-w-lg">
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Recent Activity
        </h3>
        <Timeline items={activityItems} size="sm" timestampFormat="relative" />
      </div>;
  }
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,ae;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    showConnector: false,
    size: "md"
  }
}`,...(ae=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ne,ie,re;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    showTimestamp: false,
    size: "md"
  }
}`,...(re=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var le,oe,me;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    mode: "left",
    showConnector: true,
    size: "md",
    showTimestamp: true,
    timestampFormat: "relative"
  }
}`,...(me=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:me.source}}};const ye=["Default","Modes","Sizes","WithIcons","StatusColors","TimestampFormats","WithCustomContent","ActivityFeed","WithoutConnector","WithoutTimestamp","Playground"];export{j as ActivityFeed,h as Default,x as Modes,z as Playground,f as Sizes,w as StatusColors,y as TimestampFormats,b as WithCustomContent,g as WithIcons,N as WithoutConnector,D as WithoutTimestamp,ye as __namedExportsOrder,we as default};
