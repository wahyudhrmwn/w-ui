import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as x}from"./index-B-lxVbXh.js";import{R as W,r as C}from"./index-DkvSDgFW.js";import{c as p}from"./clsx-B-dksMZM.js";import{B as N}from"./Button-BPqCfLaF.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const y={sm:{icon:"w-6 h-6 text-xs",title:"text-sm",description:"text-xs",spacing:"gap-2"},md:{icon:"w-8 h-8 text-sm",title:"text-base",description:"text-sm",spacing:"gap-3"},lg:{icon:"w-10 h-10 text-base",title:"text-lg",description:"text-base",spacing:"gap-4"}},f={wait:{icon:"bg-secondary-100 text-secondary-400 border-secondary-300",title:"text-secondary-600",description:"text-secondary-400",connector:"bg-secondary-300"},process:{icon:"bg-primary-600 text-white border-primary-600",title:"text-primary-600 font-medium",description:"text-secondary-600",connector:"bg-secondary-300"},finish:{icon:"bg-green-600 text-white border-green-600",title:"text-green-600 font-medium",description:"text-secondary-600",connector:"bg-green-600"},error:{icon:"bg-red-600 text-white border-red-600",title:"text-red-600 font-medium",description:"text-red-400",connector:"bg-secondary-300"}},ye=()=>e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),fe=()=>e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),i=W.forwardRef(({steps:n,current:c=0,status:s="process",direction:m="horizontal",size:d="md",clickable:v=!1,onChange:b,className:l,showNumbers:a=!0,connectorType:S="solid",...A},E)=>{const M=(t,r)=>r.status?r.status:t<c?"finish":t===c?s:"wait",T=(t,r)=>{v&&!r.disabled&&b&&b(t)},H=(t,r,o)=>{let u;return r.icon?u=r.icon:o==="finish"?u=e.jsx(ye,{}):o==="error"?u=e.jsx(fe,{}):a?u=t+1:u=null,e.jsx("div",{className:p("flex items-center justify-center rounded-full border-2 transition-colors duration-200 flex-shrink-0",y[d].icon,f[o].icon,v&&!r.disabled&&"cursor-pointer hover:scale-105",r.disabled&&"opacity-50 cursor-not-allowed"),children:u})},F=(t,r)=>{if(t===n.length-1)return null;const o={solid:"",dashed:"border-dashed",dotted:"border-dotted"};M(t+1,n[t+1]);const u=r==="finish"?f.finish.connector:f.wait.connector;return m==="horizontal"?e.jsx("div",{className:"flex-1 flex items-center px-2",children:e.jsx("div",{className:p("h-0.5 w-full transition-colors duration-200",S==="solid"?u:`border-t-2 ${o[S]} ${u.replace("bg-","border-")}`)})}):e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:p("w-0.5 h-8 transition-colors duration-200",S==="solid"?u:`border-l-2 ${o[S]} ${u.replace("bg-","border-")}`)})})};return m==="vertical"?e.jsx("div",{ref:E,className:p("stepper-vertical",l),...A,children:n.map((t,r)=>{const o=M(r,t),u=r===n.length-1;return e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{onClick:()=>T(r,t),className:p(t.className),children:H(r,t,o)}),!u&&F(r,o)]}),e.jsx("div",{className:p("flex-1 pb-8",y[d].spacing),children:e.jsxs("div",{className:p("cursor-pointer",!v&&"cursor-default"),onClick:()=>T(r,t),children:[e.jsx("div",{className:p(y[d].title,f[o].title),children:t.title}),t.description&&e.jsx("div",{className:p("mt-1",y[d].description,f[o].description),children:t.description})]})})]},t.key)})}):e.jsx("div",{ref:E,className:p("stepper-horizontal flex items-center w-full",l),...A,children:n.map((t,r)=>{const o=M(r,t);return e.jsxs(W.Fragment,{children:[e.jsxs("div",{className:p("flex flex-col items-center text-center flex-shrink-0",y[d].spacing,t.className),children:[e.jsx("div",{onClick:()=>T(r,t),className:p(!v&&"cursor-default"),children:H(r,t,o)}),e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:p(y[d].title,f[o].title),children:t.title}),t.description&&e.jsx("div",{className:p("mt-1",y[d].description,f[o].description),children:t.description})]})]}),F(r,o)]},t.key)})})});i.displayName="Stepper";try{i.displayName="Stepper",i.__docgenInfo={description:"",displayName:"Stepper",props:{steps:{defaultValue:null,description:"Array step items",name:"steps",required:!0,type:{name:"StepItem[]"}},current:{defaultValue:{value:"0"},description:"Current active step (0-based index)",name:"current",required:!1,type:{name:"number"}},status:{defaultValue:{value:"process"},description:"Status untuk current step",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"wait"'},{value:'"process"'},{value:'"finish"'}]}},direction:{defaultValue:{value:"horizontal"},description:"Orientasi stepper",name:"direction",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},size:{defaultValue:{value:"md"},description:"Ukuran stepper",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},clickable:{defaultValue:{value:"false"},description:"Apakah step bisa diklik untuk navigasi",name:"clickable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Callback ketika step diklik",name:"onChange",required:!1,type:{name:"((current: number) => void)"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},showNumbers:{defaultValue:{value:"true"},description:"Apakah menampilkan nomor step",name:"showNumbers",required:!1,type:{name:"boolean"}},connectorType:{defaultValue:{value:"solid"},description:"Type connector line",name:"connectorType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'}]}}}}}catch{}const we={title:"Navigation/Stepper",component:i,parameters:{layout:"padded",docs:{description:{component:"Komponen Stepper untuk menampilkan progress dalam multi-step processes seperti form wizard, checkout process, dan setup wizard. Mendukung orientasi horizontal dan vertikal dengan berbagai status step."}}},tags:["autodocs"],argTypes:{current:{control:{type:"number",min:0,max:4},description:"Current active step (0-based index)"},status:{control:{type:"select"},options:["wait","process","finish","error"],description:"Status untuk current step"},direction:{control:{type:"select"},options:["horizontal","vertical"],description:"Orientasi stepper"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran stepper"},clickable:{control:{type:"boolean"},description:"Apakah step bisa diklik untuk navigasi"},showNumbers:{control:{type:"boolean"},description:"Apakah menampilkan nomor step"},connectorType:{control:{type:"select"},options:["solid","dashed","dotted"],description:"Type connector line"}}},h=[{key:"step1",title:"Personal Info",description:"Enter your personal information"},{key:"step2",title:"Account Details",description:"Set up your account"},{key:"step3",title:"Payment",description:"Choose payment method"},{key:"step4",title:"Confirmation",description:"Review and confirm"}],g=[{key:"cart",title:"Shopping Cart",description:"Review items"},{key:"shipping",title:"Shipping",description:"Delivery information"},{key:"payment",title:"Payment",description:"Payment details"},{key:"review",title:"Review Order",description:"Final review"},{key:"complete",title:"Order Complete",description:"Order confirmation"}],j={args:{steps:h,current:1,status:"process",direction:"horizontal",size:"md",clickable:!1,showNumbers:!0,connectorType:"solid",onChange:x("step-changed")}},k={render:()=>e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-6",children:"Horizontal Stepper"}),e.jsx(i,{steps:h,current:2,direction:"horizontal",onChange:x("horizontal-step-changed")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-6",children:"Vertical Stepper"}),e.jsx("div",{className:"max-w-md",children:e.jsx(i,{steps:h,current:2,direction:"vertical",onChange:x("vertical-step-changed")})})]})]})},w={render:()=>e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Small"}),e.jsx(i,{steps:h.slice(0,3),current:1,size:"sm",onChange:x("small-step-changed")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Medium"}),e.jsx(i,{steps:h.slice(0,3),current:1,size:"md",onChange:x("medium-step-changed")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Large"}),e.jsx(i,{steps:h.slice(0,3),current:1,size:"lg",onChange:x("large-step-changed")})]})]})},z={render:()=>{const n=[{key:"wait",title:"Waiting",status:"wait"},{key:"process",title:"In Progress",status:"process"},{key:"finish",title:"Completed",status:"finish"},{key:"error",title:"Error",status:"error"}];return e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Different Step Statuses"}),e.jsx(i,{steps:n,current:1,onChange:x("status-step-changed")})]})})}},D={render:()=>{const n=()=>e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),c=()=>e.jsxs("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:[e.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),e.jsx("path",{fillRule:"evenodd",d:"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",clipRule:"evenodd"})]}),s=()=>e.jsx("svg",{className:"w-full h-full",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),m=[{key:"profile",title:"Profile Setup",description:"Basic information",icon:e.jsx(n,{})},{key:"payment",title:"Payment Setup",description:"Payment method",icon:e.jsx(c,{})},{key:"complete",title:"All Set!",description:"Setup complete",icon:e.jsx(s,{})}];return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Custom Icons - Horizontal"}),e.jsx(i,{steps:m,current:1,showNumbers:!1,onChange:x("icon-horizontal-changed")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Custom Icons - Vertical"}),e.jsx("div",{className:"max-w-md",children:e.jsx(i,{steps:m,current:1,direction:"vertical",showNumbers:!1,onChange:x("icon-vertical-changed")})})]})]})}},P={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Solid Connector"}),e.jsx(i,{steps:h.slice(0,3),current:1,connectorType:"solid"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Dashed Connector"}),e.jsx(i,{steps:h.slice(0,3),current:1,connectorType:"dashed"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Dotted Connector"}),e.jsx(i,{steps:h.slice(0,3),current:1,connectorType:"dotted"})]})]})},I={render:()=>{const[n,c]=C.useState(1);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Clickable Navigation"}),e.jsx("p",{className:"text-secondary-600 mb-4",children:"Click on any step to navigate directly to it."})]}),e.jsx(i,{steps:h,current:n,clickable:!0,onChange:s=>{c(s),x("navigation-changed")(s)}}),e.jsxs("div",{className:"flex gap-2 pt-4",children:[e.jsx(N,{variant:"outline",onClick:()=>c(Math.max(0,n-1)),disabled:n===0,children:"Previous"}),e.jsx(N,{variant:"primary",onClick:()=>c(Math.min(h.length-1,n+1)),disabled:n===h.length-1,children:"Next"})]})]})}},R={render:()=>{const[n,c]=C.useState(2),[s,m]=C.useState({0:"finish",1:"finish",2:"process"}),d=()=>{if(n<g.length-1){const l=n+1;m(a=>({...a,[n]:"finish",[l]:"process"})),c(l)}},v=()=>{if(n>0){const l=n-1;m(a=>({...a,[n]:"wait",[l]:"process"})),c(l)}},b=g.map((l,a)=>({...l,status:s[a]||"wait"}));return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-2",children:"E-commerce Checkout Process"}),e.jsxs("p",{className:"text-secondary-600 mb-6",children:["Current Step: ",g[n].title]})]}),e.jsx(i,{steps:b,current:n,onChange:l=>{c(l),x("checkout-step-changed")(l)}}),e.jsxs("div",{className:"bg-secondary-50 p-6 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-secondary-900 mb-2",children:g[n].title}),e.jsx("p",{className:"text-secondary-600 mb-4",children:g[n].description}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(N,{variant:"outline",onClick:v,disabled:n===0,children:"Previous"}),e.jsx(N,{variant:"primary",onClick:d,disabled:n===g.length-1,children:n===g.length-1?"Complete Order":"Next"})]})]})]})}},B={render:()=>{const[n,c]=C.useState(0),[s,m]=C.useState({name:"",email:"",company:"",plan:"basic"}),d=[{key:"personal",title:"Personal Info",description:"Your basic information"},{key:"company",title:"Company Details",description:"About your company"},{key:"plan",title:"Choose Plan",description:"Select subscription plan"},{key:"review",title:"Review & Submit",description:"Confirm your information"}],v=a=>{switch(a){case 0:return s.name&&s.email;case 1:return s.company;case 2:return s.plan;case 3:return!0;default:return!1}},b=()=>{n<d.length-1&&v(n)&&c(n+1)},l=()=>{switch(n){case 0:return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-1",children:"Full Name *"}),e.jsx("input",{type:"text",value:s.name,onChange:a=>m({...s,name:a.target.value}),className:"w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-1",children:"Email Address *"}),e.jsx("input",{type:"email",value:s.email,onChange:a=>m({...s,email:a.target.value}),className:"w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})]})]});case 1:return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-1",children:"Company Name *"}),e.jsx("input",{type:"text",value:s.company,onChange:a=>m({...s,company:a.target.value}),className:"w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})]})});case 2:return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-3",children:"Choose Your Plan"}),e.jsx("div",{className:"space-y-2",children:[{id:"basic",name:"Basic - $9/month"},{id:"pro",name:"Pro - $29/month"},{id:"enterprise",name:"Enterprise - $99/month"}].map(a=>e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"radio",name:"plan",value:a.id,checked:s.plan===a.id,onChange:S=>m({...s,plan:S.target.value}),className:"rounded border-secondary-300 text-primary-600 focus:ring-primary-500"}),e.jsx("span",{className:"ml-2 text-sm text-secondary-600",children:a.name})]},a.id))})]})});case 3:return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium text-secondary-900",children:"Review Your Information"}),e.jsxs("div",{className:"bg-secondary-50 p-4 rounded-lg space-y-2",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Name:"})," ",s.name]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Email:"})," ",s.email]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Company:"})," ",s.company]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Plan:"})," ",s.plan]})]})]});default:return null}};return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{children:e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-6",children:"Account Setup Wizard"})}),e.jsx(i,{steps:d,current:n}),e.jsxs("div",{className:"bg-white border border-secondary-200 rounded-lg p-6",children:[e.jsx("h4",{className:"font-medium text-secondary-900 mb-4",children:d[n].title}),l(),e.jsxs("div",{className:"flex gap-2 mt-6 pt-4 border-t border-secondary-200",children:[e.jsx(N,{variant:"outline",onClick:()=>c(Math.max(0,n-1)),disabled:n===0,children:"Previous"}),e.jsx(N,{variant:"primary",onClick:b,disabled:!v(n),children:n===d.length-1?"Submit":"Next"})]})]})]})}},V={args:{steps:h,current:1,status:"process",direction:"horizontal",size:"md",clickable:!0,showNumbers:!0,connectorType:"solid",onChange:x("step-changed")}};var q,L,_;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    status: "process",
    direction: "horizontal",
    size: "md",
    clickable: false,
    showNumbers: true,
    connectorType: "solid",
    onChange: action("step-changed")
  }
}`,...(_=(L=j.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var $,O,Y;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="space-y-12">
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Horizontal Stepper
        </h3>
        <Stepper steps={basicSteps} current={2} direction="horizontal" onChange={action("horizontal-step-changed")} />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Vertical Stepper
        </h3>
        <div className="max-w-md">
          <Stepper steps={basicSteps} current={2} direction="vertical" onChange={action("vertical-step-changed")} />
        </div>
      </div>
    </div>
}`,...(Y=(O=k.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var U,K,X;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-12">
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Small</h3>
        <Stepper steps={basicSteps.slice(0, 3)} current={1} size="sm" onChange={action("small-step-changed")} />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Medium
        </h3>
        <Stepper steps={basicSteps.slice(0, 3)} current={1} size="md" onChange={action("medium-step-changed")} />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Large</h3>
        <Stepper steps={basicSteps.slice(0, 3)} current={1} size="lg" onChange={action("large-step-changed")} />
      </div>
    </div>
}`,...(X=(K=w.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var G,J,Q;z.parameters={...z.parameters,docs:{...(G=z.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const statusSteps: StepItem[] = [{
      key: "wait",
      title: "Waiting",
      status: "wait"
    }, {
      key: "process",
      title: "In Progress",
      status: "process"
    }, {
      key: "finish",
      title: "Completed",
      status: "finish"
    }, {
      key: "error",
      title: "Error",
      status: "error"
    }];
    return <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Different Step Statuses
          </h3>
          <Stepper steps={statusSteps} current={1} onChange={action("status-step-changed")} />
        </div>
      </div>;
  }
}`,...(Q=(J=z.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,ne;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const UserIcon = () => <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>;
    const CreditCardIcon = () => <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
      </svg>;
    const CheckCircleIcon = () => <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>;
    const iconSteps: StepItem[] = [{
      key: "profile",
      title: "Profile Setup",
      description: "Basic information",
      icon: <UserIcon />
    }, {
      key: "payment",
      title: "Payment Setup",
      description: "Payment method",
      icon: <CreditCardIcon />
    }, {
      key: "complete",
      title: "All Set!",
      description: "Setup complete",
      icon: <CheckCircleIcon />
    }];
    return <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Custom Icons - Horizontal
          </h3>
          <Stepper steps={iconSteps} current={1} showNumbers={false} onChange={action("icon-horizontal-changed")} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Custom Icons - Vertical
          </h3>
          <div className="max-w-md">
            <Stepper steps={iconSteps} current={1} direction="vertical" showNumbers={false} onChange={action("icon-vertical-changed")} />
          </div>
        </div>
      </div>;
  }
}`,...(ne=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,se,re;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Solid Connector
        </h3>
        <Stepper steps={basicSteps.slice(0, 3)} current={1} connectorType="solid" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Dashed Connector
        </h3>
        <Stepper steps={basicSteps.slice(0, 3)} current={1} connectorType="dashed" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Dotted Connector
        </h3>
        <Stepper steps={basicSteps.slice(0, 3)} current={1} connectorType="dotted" />
      </div>
    </div>
}`,...(re=(se=P.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ae,ie,oe;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    return <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Clickable Navigation
          </h3>
          <p className="text-secondary-600 mb-4">
            Click on any step to navigate directly to it.
          </p>
        </div>

        <Stepper steps={basicSteps} current={currentStep} clickable onChange={step => {
        setCurrentStep(step);
        action("navigation-changed")(step);
      }} />

        <div className="flex gap-2 pt-4">
          <Button variant="outline" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
            Previous
          </Button>
          <Button variant="primary" onClick={() => setCurrentStep(Math.min(basicSteps.length - 1, currentStep + 1))} disabled={currentStep === basicSteps.length - 1}>
            Next
          </Button>
        </div>
      </div>;
  }
}`,...(oe=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ce,le,de;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(2);
    const [stepStatuses, setStepStatuses] = useState<{
      [key: number]: "wait" | "process" | "finish" | "error";
    }>({
      0: "finish",
      1: "finish",
      2: "process"
    });
    const handleNext = () => {
      if (currentStep < checkoutSteps.length - 1) {
        const nextStep = currentStep + 1;
        setStepStatuses(prev => ({
          ...prev,
          [currentStep]: "finish",
          [nextStep]: "process"
        }));
        setCurrentStep(nextStep);
      }
    };
    const handlePrevious = () => {
      if (currentStep > 0) {
        const prevStep = currentStep - 1;
        setStepStatuses(prev => ({
          ...prev,
          [currentStep]: "wait",
          [prevStep]: "process"
        }));
        setCurrentStep(prevStep);
      }
    };
    const stepsWithStatus = checkoutSteps.map((step, index) => ({
      ...step,
      status: stepStatuses[index] || "wait"
    }));
    return <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-2">
            E-commerce Checkout Process
          </h3>
          <p className="text-secondary-600 mb-6">
            Current Step: {checkoutSteps[currentStep].title}
          </p>
        </div>

        <Stepper steps={stepsWithStatus} current={currentStep} onChange={step => {
        setCurrentStep(step);
        action("checkout-step-changed")(step);
      }} />

        <div className="bg-secondary-50 p-6 rounded-lg">
          <h4 className="font-medium text-secondary-900 mb-2">
            {checkoutSteps[currentStep].title}
          </h4>
          <p className="text-secondary-600 mb-4">
            {checkoutSteps[currentStep].description}
          </p>

          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
              Previous
            </Button>
            <Button variant="primary" onClick={handleNext} disabled={currentStep === checkoutSteps.length - 1}>
              {currentStep === checkoutSteps.length - 1 ? "Complete Order" : "Next"}
            </Button>
          </div>
        </div>
      </div>;
  }
}`,...(de=(le=R.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,me,ue;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      company: "",
      plan: "basic"
    });
    const wizardSteps: StepItem[] = [{
      key: "personal",
      title: "Personal Info",
      description: "Your basic information"
    }, {
      key: "company",
      title: "Company Details",
      description: "About your company"
    }, {
      key: "plan",
      title: "Choose Plan",
      description: "Select subscription plan"
    }, {
      key: "review",
      title: "Review & Submit",
      description: "Confirm your information"
    }];
    const isStepValid = (step: number) => {
      switch (step) {
        case 0:
          return formData.name && formData.email;
        case 1:
          return formData.company;
        case 2:
          return formData.plan;
        case 3:
          return true;
        default:
          return false;
      }
    };
    const handleNext = () => {
      if (currentStep < wizardSteps.length - 1 && isStepValid(currentStep)) {
        setCurrentStep(currentStep + 1);
      }
    };
    const renderStepContent = () => {
      switch (currentStep) {
        case 0:
          return <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Full Name *
                </label>
                <input type="text" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Email Address *
                </label>
                <input type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
            </div>;
        case 1:
          return <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Company Name *
                </label>
                <input type="text" value={formData.company} onChange={e => setFormData({
                ...formData,
                company: e.target.value
              })} className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
            </div>;
        case 2:
          return <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-3">
                  Choose Your Plan
                </label>
                <div className="space-y-2">
                  {[{
                  id: "basic",
                  name: "Basic - $9/month"
                }, {
                  id: "pro",
                  name: "Pro - $29/month"
                }, {
                  id: "enterprise",
                  name: "Enterprise - $99/month"
                }].map(plan => <label key={plan.id} className="flex items-center">
                      <input type="radio" name="plan" value={plan.id} checked={formData.plan === plan.id} onChange={e => setFormData({
                    ...formData,
                    plan: e.target.value
                  })} className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-secondary-600">
                        {plan.name}
                      </span>
                    </label>)}
                </div>
              </div>
            </div>;
        case 3:
          return <div className="space-y-4">
              <h4 className="font-medium text-secondary-900">
                Review Your Information
              </h4>
              <div className="bg-secondary-50 p-4 rounded-lg space-y-2">
                <div>
                  <strong>Name:</strong> {formData.name}
                </div>
                <div>
                  <strong>Email:</strong> {formData.email}
                </div>
                <div>
                  <strong>Company:</strong> {formData.company}
                </div>
                <div>
                  <strong>Plan:</strong> {formData.plan}
                </div>
              </div>
            </div>;
        default:
          return null;
      }
    };
    return <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Account Setup Wizard
          </h3>
        </div>

        <Stepper steps={wizardSteps} current={currentStep} />

        <div className="bg-white border border-secondary-200 rounded-lg p-6">
          <h4 className="font-medium text-secondary-900 mb-4">
            {wizardSteps[currentStep].title}
          </h4>

          {renderStepContent()}

          <div className="flex gap-2 mt-6 pt-4 border-t border-secondary-200">
            <Button variant="outline" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
              Previous
            </Button>
            <Button variant="primary" onClick={handleNext} disabled={!isStepValid(currentStep)}>
              {currentStep === wizardSteps.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>;
  }
}`,...(ue=(me=B.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var he,xe,ve;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    status: "process",
    direction: "horizontal",
    size: "md",
    clickable: true,
    showNumbers: true,
    connectorType: "solid",
    onChange: action("step-changed")
  }
}`,...(ve=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};const ze=["Default","Directions","Sizes","StepStatuses","WithCustomIcons","ConnectorTypes","ClickableNavigation","CheckoutProcess","FormWizard","Playground"];export{R as CheckoutProcess,I as ClickableNavigation,P as ConnectorTypes,j as Default,k as Directions,B as FormWizard,V as Playground,w as Sizes,z as StepStatuses,D as WithCustomIcons,ze as __namedExportsOrder,we as default};
