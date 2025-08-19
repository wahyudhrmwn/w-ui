import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as f}from"./index-B-lxVbXh.js";import{r as o}from"./index-DkvSDgFW.js";import{c as U}from"./clsx-B-dksMZM.js";import{B as g}from"./Button-BPqCfLaF.js";import{I as M}from"./Input-BL0saf5A.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const ae={skip:"Skip",previous:"Previous",next:"Next",close:"Close",finish:"Finish"},b=({steps:r=[],isOpen:n=!1,onClose:a,onStepChange:l,onFinish:p,currentStepIndex:c=0,mask:y=!0,maskClosable:C=!0,scrollSmooth:j=!0,placement:S="bottom",offset:$=8,indicatorSize:G=6,primaryColor:k="#1976d2",locale:Te=ae,className:Ae,popupClassName:Ie})=>{var X,Z,ee,te,se,ne,oe,re;const[u,H]=o.useState(c),[d,Oe]=o.useState(null),[K,Pe]=o.useState({top:0,left:0}),[w,Fe]=o.useState(S),z=o.useRef(null),Re=o.useRef(null),B={...ae,...Te},i=r[u],J=o.useCallback(()=>{if(!n||!i)return;const t=document.querySelector(i.target);Oe(t),t&&j&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},[n,i,j]),T=o.useCallback(()=>{if(!d||!z.current)return;const t=d.getBoundingClientRect(),s=z.current.getBoundingClientRect(),x=i.placement||S,v=i.offset||$;let m=0,h=0,N=x;switch(x){case"top":m=t.top-s.height-v,h=t.left+(t.width-s.width)/2;break;case"bottom":m=t.bottom+v,h=t.left+(t.width-s.width)/2;break;case"left":m=t.top+(t.height-s.height)/2,h=t.left-s.width-v;break;case"right":m=t.top+(t.height-s.height)/2,h=t.right+v;break;case"topLeft":m=t.top-s.height-v,h=t.left;break;case"topRight":m=t.top-s.height-v,h=t.right-s.width;break;case"bottomLeft":m=t.bottom+v,h=t.left;break;case"bottomRight":m=t.bottom+v,h=t.right-s.width;break}const O={width:window.innerWidth,height:window.innerHeight};h<10?(h=10,x.includes("Left")&&(N=x.replace("Left","Right"))):h+s.width>O.width-10&&(h=O.width-s.width-10,x.includes("Right")&&(N=x.replace("Right","Left"))),m<10?(m=10,x.includes("top")&&(N=x.replace("top","bottom"))):m+s.height>O.height-10&&(m=O.height-s.height-10,x.includes("bottom")&&(N=x.replace("bottom","top"))),Pe({top:m,left:h}),Fe(N)},[d,i,S,$]),I=o.useCallback(t=>{t<0||t>=r.length||(H(t),l==null||l(t,r[t]))},[r,l]),q=o.useCallback(()=>{u<r.length-1?I(u+1):(p==null||p(),a())},[u,r.length,I,p,a]),W=o.useCallback(()=>{u>0&&I(u-1)},[u,I]),Y=o.useCallback(()=>{a()},[a]),Ee=o.useCallback(()=>{C&&a()},[C,a]);o.useEffect(()=>{n&&(H(c),J())},[n,c,J]),o.useEffect(()=>{if(n&&d){T();const t=()=>T(),s=()=>T();return window.addEventListener("resize",t),window.addEventListener("scroll",s,!0),()=>{window.removeEventListener("resize",t),window.removeEventListener("scroll",s,!0)}}},[n,d,T]),o.useEffect(()=>{if(!n)return;const t=s=>{switch(s.key){case"Escape":Y();break;case"ArrowRight":case"Enter":s.preventDefault(),q();break;case"ArrowLeft":s.preventDefault(),W();break}};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[n,q,W,Y]);const Le=o.useMemo(()=>{if(!d||!y)return{};const t=d.getBoundingClientRect(),s=4;return{clipPath:`polygon(0% 0%, 0% 100%, ${t.left-s}px 100%, ${t.left-s}px ${t.top-s}px, ${t.right+s}px ${t.top-s}px, ${t.right+s}px ${t.bottom+s}px, ${t.left-s}px ${t.bottom+s}px, ${t.left-s}px 100%, 100% 100%, 100% 0%)`}},[d,y]);if(!n||r.length===0||!i)return null;const Ve=u===0,Q=u===r.length-1;return e.jsxs(e.Fragment,{children:[y&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50",style:Le,onClick:Ee}),d&&e.jsxs("div",{ref:z,className:U("fixed z-50 bg-white rounded-lg shadow-lg border border-secondary-200 p-6 max-w-sm",Ie),style:{top:K.top,left:K.left},children:[e.jsx("div",{className:U("absolute w-3 h-3 bg-white border transform rotate-45",{"border-b-0 border-r-0 -top-1.5 left-1/2 -translate-x-1/2":w.startsWith("bottom"),"border-t-0 border-l-0 -bottom-1.5 left-1/2 -translate-x-1/2":w.startsWith("top"),"border-t-0 border-r-0 -left-1.5 top-1/2 -translate-y-1/2":w.startsWith("right"),"border-b-0 border-l-0 -right-1.5 top-1/2 -translate-y-1/2":w.startsWith("left")})}),!i.hideCloseButton&&e.jsx("button",{onClick:a,className:"absolute top-2 right-2 text-secondary-400 hover:text-secondary-600 transition-colors",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 pr-6",children:i.title}),i.showProgress!==!1&&e.jsxs("div",{className:"flex items-center space-x-2 mt-2",children:[r.map((t,s)=>e.jsx("div",{className:U("rounded-full transition-colors",s===u?"bg-primary-600":s<u?"bg-primary-300":"bg-secondary-200"),style:{width:G,height:G,backgroundColor:s===u?k:void 0}},s)),e.jsxs("span",{className:"text-sm text-secondary-500 ml-2",children:[u+1," of ",r.length]})]})]}),e.jsx("p",{className:"text-secondary-600 text-sm leading-relaxed",children:i.description}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:!i.hideSkipButton&&!Q&&e.jsx("button",{onClick:Y,className:"text-sm text-secondary-500 hover:text-secondary-700 transition-colors",children:((X=i.locale)==null?void 0:X.skip)||B.skip})}),e.jsxs("div",{className:"flex items-center space-x-2",children:[!Ve&&e.jsx("button",{onClick:W,disabled:(Z=i.prevButtonProps)==null?void 0:Z.disabled,className:"px-4 py-2 text-sm border border-secondary-300 rounded hover:bg-secondary-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:((ee=i.prevButtonProps)==null?void 0:ee.children)||((te=i.locale)==null?void 0:te.previous)||B.previous}),e.jsx("button",{onClick:q,disabled:(se=i.nextButtonProps)==null?void 0:se.disabled,className:"px-4 py-2 text-sm bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",style:{backgroundColor:k},children:((ne=i.nextButtonProps)==null?void 0:ne.children)||(Q?((oe=i.locale)==null?void 0:oe.close)||B.finish:((re=i.locale)==null?void 0:re.next)||B.next)})]})]})]})]}),d&&!i.disableBeacon&&e.jsx("div",{ref:Re,className:"fixed z-40 pointer-events-none",style:{top:d.getBoundingClientRect().top+d.offsetHeight/2-6,left:d.getBoundingClientRect().left+d.offsetWidth/2-6},children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute w-3 h-3 rounded-full animate-ping",style:{backgroundColor:k,opacity:.7}}),e.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:k}})]})})]})};try{b.displayName="Tour",b.__docgenInfo={description:"",displayName:"Tour",props:{steps:{defaultValue:{value:"[]"},description:"",name:"steps",required:!1,type:{name:"TourStep[]"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onStepChange:{defaultValue:null,description:"",name:"onStepChange",required:!1,type:{name:"((stepIndex: number, step: TourStep) => void)"}},onFinish:{defaultValue:null,description:"",name:"onFinish",required:!1,type:{name:"(() => void)"}},currentStepIndex:{defaultValue:{value:"0"},description:"",name:"currentStepIndex",required:!1,type:{name:"number"}},mask:{defaultValue:{value:"true"},description:"",name:"mask",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:{value:"true"},description:"",name:"maskClosable",required:!1,type:{name:"boolean"}},scrollSmooth:{defaultValue:{value:"true"},description:"",name:"scrollSmooth",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"topRight"'}]}},offset:{defaultValue:{value:"8"},description:"",name:"offset",required:!1,type:{name:"number"}},indicatorSize:{defaultValue:{value:"6"},description:"",name:"indicatorSize",required:!1,type:{name:"number"}},primaryColor:{defaultValue:{value:"#1976d2"},description:"",name:"primaryColor",required:!1,type:{name:"string"}},locale:{defaultValue:{value:`{
  skip: "Skip",
  previous: "Previous",
  next: "Next",
  close: "Close",
  finish: "Finish",
}`},description:"",name:"locale",required:!1,type:{name:"{ skip?: string; previous?: string; next?: string | undefined; close?: string | undefined; finish?: string | undefined; } | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},popupClassName:{defaultValue:null,description:"",name:"popupClassName",required:!1,type:{name:"string"}}}}}catch{}const $e={title:"Navigation/Tour",component:b,parameters:{layout:"fullscreen",docs:{description:{component:"Komponen Tour untuk membuat walkthrough dan onboarding yang interaktif. Dilengkapi dengan spotlight mask, positioning otomatis, keyboard navigation, dan berbagai kustomisasi untuk membuat user experience yang engaging."}}},tags:["autodocs"],argTypes:{isOpen:{control:{type:"boolean"},description:"Apakah tour sedang aktif"},mask:{control:{type:"boolean"},description:"Apakah menampilkan mask overlay"},maskClosable:{control:{type:"boolean"},description:"Apakah bisa ditutup dengan click mask"},scrollSmooth:{control:{type:"boolean"},description:"Apakah menggunakan smooth scroll"},placement:{control:{type:"select"},options:["top","bottom","left","right","topLeft","topRight","bottomLeft","bottomRight"],description:"Default placement untuk popup"},primaryColor:{control:{type:"color"},description:"Warna primary untuk tour"}}},D=[{target:"#tour-step-1",title:"Welcome!",description:"Welcome to our application! This tour will guide you through the main features.",placement:"bottom"},{target:"#tour-step-2",title:"Navigation Menu",description:"Use this navigation menu to access different sections of the application.",placement:"right"},{target:"#tour-step-3",title:"Search Functionality",description:"Type here to search for anything in the application. Use filters for more precise results.",placement:"bottom"},{target:"#tour-step-4",title:"User Profile",description:"Click here to access your profile settings, notifications, and account preferences.",placement:"bottomLeft"},{target:"#tour-step-5",title:"Main Content",description:"This is where you'll spend most of your time. All your content and tools are here.",placement:"top"}],_=()=>e.jsxs("div",{className:"min-h-screen bg-secondary-50",children:[e.jsx("header",{className:"bg-white shadow-sm border-b border-secondary-200",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{id:"tour-step-1",className:"text-xl font-bold text-primary-600",children:"MyApp"}),e.jsxs("nav",{id:"tour-step-2",className:"hidden md:ml-8 md:flex md:space-x-8",children:[e.jsx("a",{href:"#",className:"text-secondary-700 hover:text-secondary-900",children:"Dashboard"}),e.jsx("a",{href:"#",className:"text-secondary-700 hover:text-secondary-900",children:"Projects"}),e.jsx("a",{href:"#",className:"text-secondary-700 hover:text-secondary-900",children:"Team"}),e.jsx("a",{href:"#",className:"text-secondary-700 hover:text-secondary-900",children:"Reports"})]})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{id:"tour-step-3",children:e.jsx(M,{placeholder:"Search...",className:"w-64"})}),e.jsx("div",{id:"tour-step-4",className:"w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-medium cursor-pointer",children:"JD"})]})]})})}),e.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{id:"tour-step-5",className:"bg-white rounded-lg shadow-sm p-8 min-h-96",children:[e.jsx("h1",{className:"text-2xl font-bold text-secondary-900 mb-4",children:"Dashboard"}),e.jsx("p",{className:"text-secondary-600 mb-8",children:"Welcome to your dashboard. Here you can manage your projects, view analytics, and collaborate with your team."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 rounded-lg p-6",children:[e.jsx("h3",{className:"font-semibold text-blue-900 mb-2",children:"Projects"}),e.jsx("p",{className:"text-blue-700 text-sm",children:"Manage your active projects and tasks."})]}),e.jsxs("div",{className:"bg-green-50 rounded-lg p-6",children:[e.jsx("h3",{className:"font-semibold text-green-900 mb-2",children:"Analytics"}),e.jsx("p",{className:"text-green-700 text-sm",children:"View performance metrics and insights."})]}),e.jsxs("div",{className:"bg-purple-50 rounded-lg p-6",children:[e.jsx("h3",{className:"font-semibold text-purple-900 mb-2",children:"Team"}),e.jsx("p",{className:"text-purple-700 text-sm",children:"Collaborate with team members."})]})]})]})})]}),P={render:()=>{const[r,n]=o.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{className:"p-4 bg-white",children:e.jsx(g,{onClick:()=>n(!0),children:"Start Tour"})}),e.jsx(_,{}),e.jsx(b,{steps:D,isOpen:r,onClose:()=>n(!1),onStepChange:f("step-changed"),onFinish:f("tour-finished")})]})}},F={render:()=>{const[r,n]=o.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{className:"p-4 bg-white",children:e.jsx(g,{onClick:()=>n(!0),children:"Start Custom Tour"})}),e.jsx(_,{}),e.jsx(b,{steps:D,isOpen:r,onClose:()=>n(!1),primaryColor:"#10B981",indicatorSize:8,onStepChange:f("custom-step-changed"),onFinish:f("custom-tour-finished")})]})}},R={render:()=>{const[r,n]=o.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{className:"p-4 bg-white",children:e.jsx(g,{onClick:()=>n(!0),children:"Start Tour (No Mask)"})}),e.jsx(_,{}),e.jsx(b,{steps:D,isOpen:r,mask:!1,onClose:()=>n(!1),onStepChange:f("no-mask-step-changed"),onFinish:f("no-mask-tour-finished")})]})}},E={render:()=>{const[r,n]=o.useState(!1),a=[{target:"#custom-step-1",title:"🎉 Getting Started",description:"This is a custom step with emoji and custom button text. Notice how we can customize each step individually.",placement:"bottom",nextButtonProps:{children:"Let's Go!"},hideSkipButton:!0},{target:"#custom-step-2",title:"⚠️ Important Feature",description:"This step has a custom previous button and shows how you can disable the beacon animation.",placement:"right",disableBeacon:!0,prevButtonProps:{children:"← Back"},nextButtonProps:{children:"Continue →"}},{target:"#custom-step-3",title:"🔍 Advanced Options",description:"This step hides the close button and progress indicators to create a more focused experience.",placement:"topRight",hideCloseButton:!0,showProgress:!1,nextButtonProps:{children:"Finish Tutorial"}}];return e.jsxs("div",{children:[e.jsxs("div",{className:"p-4 bg-white space-y-4",children:[e.jsx(g,{onClick:()=>n(!0),children:"Start Custom Steps Tour"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("div",{id:"custom-step-1",className:"p-4 bg-blue-100 rounded",children:"Custom Step 1"}),e.jsx("div",{id:"custom-step-2",className:"p-4 bg-green-100 rounded",children:"Custom Step 2"}),e.jsx("div",{id:"custom-step-3",className:"p-4 bg-purple-100 rounded",children:"Custom Step 3"})]})]}),e.jsx(b,{steps:a,isOpen:r,onClose:()=>n(!1),primaryColor:"#8B5CF6",onStepChange:f("custom-steps-changed"),onFinish:f("custom-steps-finished")})]})}},L={render:()=>{const[r,n]=o.useState(!1),[a,l]=o.useState(0),p=[{target:"#interactive-input",title:"Try the Input",description:"Type something in this input field before proceeding to the next step.",placement:"bottom",nextButtonProps:{disabled:!1}},{target:"#interactive-button",title:"Click the Button",description:"Now try clicking this button to see it in action.",placement:"top"},{target:"#interactive-result",title:"See the Result",description:"Great! You've completed the interactive tour. The result of your actions is displayed here.",placement:"left"}],[c,y]=o.useState(""),[C,j]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx(g,{onClick:()=>n(!0),children:"Start Interactive Tour"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Interactive Input"}),e.jsx(M,{id:"interactive-input",value:c,onChange:S=>y(S.target.value),placeholder:"Type something here..."})]}),e.jsx(g,{id:"interactive-button",onClick:()=>j(!0),variant:"primary",children:"Click Me!"}),e.jsxs("div",{id:"interactive-result",className:"p-4 bg-secondary-50 rounded-lg",children:[e.jsx("strong",{children:"Result:"}),e.jsxs("div",{children:["Input: ",c||"(nothing typed)"]}),e.jsxs("div",{children:["Button clicked: ",C?"Yes":"No"]})]})]})]}),e.jsx(b,{steps:p,isOpen:r,currentStepIndex:a,onClose:()=>{n(!1),l(0)},onStepChange:l,onFinish:()=>{l(0),f("interactive-tour-finished")()}})]})}},V={render:()=>{const[r,n]=o.useState(!1),[a,l]=o.useState({name:"",email:"",preferences:!1}),p=[{target:"#onboarding-welcome",title:"Welcome to MyApp! 🎉",description:"We're excited to have you here! Let's set up your account in just a few simple steps.",placement:"bottom",hideSkipButton:!0,nextButtonProps:{children:"Let's Start!"}},{target:"#onboarding-profile",title:"Set Up Your Profile",description:"First, let's add some basic information about you. This helps us personalize your experience.",placement:"right",nextButtonProps:{children:"Continue Setup"}},{target:"#onboarding-preferences",title:"Choose Your Preferences",description:"Enable notifications to stay updated with important information and updates from your team.",placement:"top"},{target:"#onboarding-complete",title:"You're All Set! ✨",description:"Congratulations! Your account is now configured. Click below to start exploring the platform.",placement:"bottom",nextButtonProps:{children:"Start Exploring!"}}];return e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"max-w-2xl mx-auto space-y-8",children:[e.jsx(g,{onClick:()=>n(!0),children:"Start Onboarding"}),e.jsxs("div",{id:"onboarding-welcome",className:"text-center py-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-secondary-900 mb-4",children:"Welcome to MyApp"}),e.jsx("p",{className:"text-secondary-600",children:"Your journey starts here"})]}),e.jsxs("div",{id:"onboarding-profile",className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Profile Information"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Full Name"}),e.jsx(M,{value:a.name,onChange:c=>l({...a,name:c.target.value}),placeholder:"Enter your full name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Email Address"}),e.jsx(M,{type:"email",value:a.email,onChange:c=>l({...a,email:c.target.value}),placeholder:"Enter your email"})]})]})]}),e.jsxs("div",{id:"onboarding-preferences",className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Preferences"}),e.jsx("div",{className:"space-y-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:a.preferences,onChange:c=>l({...a,preferences:c.target.checked}),className:"mr-3"}),e.jsx("span",{children:"Enable email notifications"})]})})]}),e.jsxs("div",{id:"onboarding-complete",className:"text-center py-8 bg-green-50 rounded-lg",children:[e.jsx("div",{className:"text-4xl mb-4",children:"🎊"}),e.jsx("h2",{className:"text-2xl font-semibold text-green-900 mb-2",children:"Setup Complete!"}),e.jsx("p",{className:"text-green-700",children:"You're ready to start using the platform"})]})]}),e.jsx(b,{steps:p,isOpen:r,onClose:()=>n(!1),maskClosable:!1,primaryColor:"#10B981",locale:{skip:"Skip Setup",finish:"Complete Onboarding"},onStepChange:f("onboarding-step-changed"),onFinish:f("onboarding-completed")})]})}},A={render:()=>{const[r,n]=o.useState(!1),[a,l]=o.useState(0),p=[{target:"#controlled-step-1",title:"Step 1",description:"This is the first step of a controlled tour. Use the external controls to navigate.",placement:"bottom"},{target:"#controlled-step-2",title:"Step 2",description:"Second step with external navigation controls. Notice how the tour state is managed externally.",placement:"right"},{target:"#controlled-step-3",title:"Step 3",description:"Final step of the controlled tour. The parent component manages all the state.",placement:"top"}];return e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(g,{onClick:()=>n(!0),children:"Start Controlled Tour"}),r&&e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(g,{size:"sm",variant:"outline",onClick:()=>l(Math.max(0,a-1)),disabled:a===0,children:"Previous"}),e.jsxs("span",{className:"text-sm",children:["Step ",a+1," of ",p.length]}),e.jsx(g,{size:"sm",variant:"outline",onClick:()=>{a<p.length-1?l(a+1):(n(!1),l(0))},children:a<p.length-1?"Next":"Finish"}),e.jsx(g,{size:"sm",variant:"ghost",onClick:()=>{n(!1),l(0)},children:"Close Tour"})]})]}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsxs("div",{id:"controlled-step-1",className:"p-6 bg-blue-100 rounded-lg",children:[e.jsx("h3",{className:"font-semibold",children:"Feature A"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"This is an important feature"})]}),e.jsxs("div",{id:"controlled-step-2",className:"p-6 bg-green-100 rounded-lg",children:[e.jsx("h3",{className:"font-semibold",children:"Feature B"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"Another key feature"})]}),e.jsxs("div",{id:"controlled-step-3",className:"p-6 bg-purple-100 rounded-lg",children:[e.jsx("h3",{className:"font-semibold",children:"Feature C"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"The final feature"})]})]})]}),e.jsx(b,{steps:p,isOpen:r,currentStepIndex:a,onClose:()=>{n(!1),l(0)},onStepChange:c=>{l(c),f("controlled-step-changed")(c)},onFinish:()=>{n(!1),l(0),f("controlled-tour-finished")()}})]})}};var ie,le,ce;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <div className="p-4 bg-white">
          <Button onClick={() => setIsOpen(true)}>Start Tour</Button>
        </div>

        <DemoUI />

        <Tour steps={basicSteps} isOpen={isOpen} onClose={() => setIsOpen(false)} onStepChange={action("step-changed")} onFinish={action("tour-finished")} />
      </div>;
  }
}`,...(ce=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,pe,ue;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <div className="p-4 bg-white">
          <Button onClick={() => setIsOpen(true)}>Start Custom Tour</Button>
        </div>

        <DemoUI />

        <Tour steps={basicSteps} isOpen={isOpen} onClose={() => setIsOpen(false)} primaryColor="#10B981" indicatorSize={8} onStepChange={action("custom-step-changed")} onFinish={action("custom-tour-finished")} />
      </div>;
  }
}`,...(ue=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,he,fe;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <div className="p-4 bg-white">
          <Button onClick={() => setIsOpen(true)}>Start Tour (No Mask)</Button>
        </div>

        <DemoUI />

        <Tour steps={basicSteps} isOpen={isOpen} mask={false} onClose={() => setIsOpen(false)} onStepChange={action("no-mask-step-changed")} onFinish={action("no-mask-tour-finished")} />
      </div>;
  }
}`,...(fe=(he=R.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ge,xe,be;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const customSteps: TourStep[] = [{
      target: "#custom-step-1",
      title: "🎉 Getting Started",
      description: "This is a custom step with emoji and custom button text. Notice how we can customize each step individually.",
      placement: "bottom",
      nextButtonProps: {
        children: "Let's Go!"
      },
      hideSkipButton: true
    }, {
      target: "#custom-step-2",
      title: "⚠️ Important Feature",
      description: "This step has a custom previous button and shows how you can disable the beacon animation.",
      placement: "right",
      disableBeacon: true,
      prevButtonProps: {
        children: "← Back"
      },
      nextButtonProps: {
        children: "Continue →"
      }
    }, {
      target: "#custom-step-3",
      title: "🔍 Advanced Options",
      description: "This step hides the close button and progress indicators to create a more focused experience.",
      placement: "topRight",
      hideCloseButton: true,
      showProgress: false,
      nextButtonProps: {
        children: "Finish Tutorial"
      }
    }];
    return <div>
        <div className="p-4 bg-white space-y-4">
          <Button onClick={() => setIsOpen(true)}>
            Start Custom Steps Tour
          </Button>

          <div className="flex space-x-4">
            <div id="custom-step-1" className="p-4 bg-blue-100 rounded">
              Custom Step 1
            </div>
            <div id="custom-step-2" className="p-4 bg-green-100 rounded">
              Custom Step 2
            </div>
            <div id="custom-step-3" className="p-4 bg-purple-100 rounded">
              Custom Step 3
            </div>
          </div>
        </div>

        <Tour steps={customSteps} isOpen={isOpen} onClose={() => setIsOpen(false)} primaryColor="#8B5CF6" onStepChange={action("custom-steps-changed")} onFinish={action("custom-steps-finished")} />
      </div>;
  }
}`,...(be=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ve,ye,Se;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const interactiveSteps: TourStep[] = [{
      target: "#interactive-input",
      title: "Try the Input",
      description: "Type something in this input field before proceeding to the next step.",
      placement: "bottom",
      nextButtonProps: {
        disabled: false // You could make this conditional based on input value
      }
    }, {
      target: "#interactive-button",
      title: "Click the Button",
      description: "Now try clicking this button to see it in action.",
      placement: "top"
    }, {
      target: "#interactive-result",
      title: "See the Result",
      description: "Great! You've completed the interactive tour. The result of your actions is displayed here.",
      placement: "left"
    }];
    const [inputValue, setInputValue] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);
    return <div className="p-8">
        <div className="space-y-6">
          <Button onClick={() => setIsOpen(true)}>
            Start Interactive Tour
          </Button>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Interactive Input
              </label>
              <Input id="interactive-input" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Type something here..." />
            </div>

            <Button id="interactive-button" onClick={() => setButtonClicked(true)} variant="primary">
              Click Me!
            </Button>

            <div id="interactive-result" className="p-4 bg-secondary-50 rounded-lg">
              <strong>Result:</strong>
              <div>Input: {inputValue || "(nothing typed)"}</div>
              <div>Button clicked: {buttonClicked ? "Yes" : "No"}</div>
            </div>
          </div>
        </div>

        <Tour steps={interactiveSteps} isOpen={isOpen} currentStepIndex={currentStep} onClose={() => {
        setIsOpen(false);
        setCurrentStep(0);
      }} onStepChange={setCurrentStep} onFinish={() => {
        setCurrentStep(0);
        action("interactive-tour-finished")();
      }} />
      </div>;
  }
}`,...(Se=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var Ne,Ce,je;V.parameters={...V.parameters,docs:{...(Ne=V.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userProfile, setUserProfile] = useState({
      name: "",
      email: "",
      preferences: false
    });
    const onboardingSteps: TourStep[] = [{
      target: "#onboarding-welcome",
      title: "Welcome to MyApp! 🎉",
      description: "We're excited to have you here! Let's set up your account in just a few simple steps.",
      placement: "bottom",
      hideSkipButton: true,
      nextButtonProps: {
        children: "Let's Start!"
      }
    }, {
      target: "#onboarding-profile",
      title: "Set Up Your Profile",
      description: "First, let's add some basic information about you. This helps us personalize your experience.",
      placement: "right",
      nextButtonProps: {
        children: "Continue Setup"
      }
    }, {
      target: "#onboarding-preferences",
      title: "Choose Your Preferences",
      description: "Enable notifications to stay updated with important information and updates from your team.",
      placement: "top"
    }, {
      target: "#onboarding-complete",
      title: "You're All Set! ✨",
      description: "Congratulations! Your account is now configured. Click below to start exploring the platform.",
      placement: "bottom",
      nextButtonProps: {
        children: "Start Exploring!"
      }
    }];
    return <div className="p-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <Button onClick={() => setIsOpen(true)}>Start Onboarding</Button>

          <div id="onboarding-welcome" className="text-center py-8">
            <h1 className="text-3xl font-bold text-secondary-900 mb-4">
              Welcome to MyApp
            </h1>
            <p className="text-secondary-600">Your journey starts here</p>
          </div>

          <div id="onboarding-profile" className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <Input value={userProfile.name} onChange={e => setUserProfile({
                ...userProfile,
                name: e.target.value
              })} placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input type="email" value={userProfile.email} onChange={e => setUserProfile({
                ...userProfile,
                email: e.target.value
              })} placeholder="Enter your email" />
              </div>
            </div>
          </div>

          <div id="onboarding-preferences" className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input type="checkbox" checked={userProfile.preferences} onChange={e => setUserProfile({
                ...userProfile,
                preferences: e.target.checked
              })} className="mr-3" />
                <span>Enable email notifications</span>
              </label>
            </div>
          </div>

          <div id="onboarding-complete" className="text-center py-8 bg-green-50 rounded-lg">
            <div className="text-4xl mb-4">🎊</div>
            <h2 className="text-2xl font-semibold text-green-900 mb-2">
              Setup Complete!
            </h2>
            <p className="text-green-700">
              You're ready to start using the platform
            </p>
          </div>
        </div>

        <Tour steps={onboardingSteps} isOpen={isOpen} onClose={() => setIsOpen(false)} maskClosable={false} primaryColor="#10B981" locale={{
        skip: "Skip Setup",
        finish: "Complete Onboarding"
      }} onStepChange={action("onboarding-step-changed")} onFinish={action("onboarding-completed")} />
      </div>;
  }
}`,...(je=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var ke,we,Be;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const controlledSteps: TourStep[] = [{
      target: "#controlled-step-1",
      title: "Step 1",
      description: "This is the first step of a controlled tour. Use the external controls to navigate.",
      placement: "bottom"
    }, {
      target: "#controlled-step-2",
      title: "Step 2",
      description: "Second step with external navigation controls. Notice how the tour state is managed externally.",
      placement: "right"
    }, {
      target: "#controlled-step-3",
      title: "Step 3",
      description: "Final step of the controlled tour. The parent component manages all the state.",
      placement: "top"
    }];
    return <div className="p-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Button onClick={() => setIsOpen(true)}>
              Start Controlled Tour
            </Button>

            {isOpen && <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
                  Previous
                </Button>
                <span className="text-sm">
                  Step {currentStep + 1} of {controlledSteps.length}
                </span>
                <Button size="sm" variant="outline" onClick={() => {
              if (currentStep < controlledSteps.length - 1) {
                setCurrentStep(currentStep + 1);
              } else {
                setIsOpen(false);
                setCurrentStep(0);
              }
            }}>
                  {currentStep < controlledSteps.length - 1 ? "Next" : "Finish"}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => {
              setIsOpen(false);
              setCurrentStep(0);
            }}>
                  Close Tour
                </Button>
              </div>}
          </div>

          <div className="flex space-x-4">
            <div id="controlled-step-1" className="p-6 bg-blue-100 rounded-lg">
              <h3 className="font-semibold">Feature A</h3>
              <p className="text-sm text-secondary-600">
                This is an important feature
              </p>
            </div>
            <div id="controlled-step-2" className="p-6 bg-green-100 rounded-lg">
              <h3 className="font-semibold">Feature B</h3>
              <p className="text-sm text-secondary-600">Another key feature</p>
            </div>
            <div id="controlled-step-3" className="p-6 bg-purple-100 rounded-lg">
              <h3 className="font-semibold">Feature C</h3>
              <p className="text-sm text-secondary-600">The final feature</p>
            </div>
          </div>
        </div>

        <Tour steps={controlledSteps} isOpen={isOpen} currentStepIndex={currentStep} onClose={() => {
        setIsOpen(false);
        setCurrentStep(0);
      }} onStepChange={stepIndex => {
        setCurrentStep(stepIndex);
        action("controlled-step-changed")(stepIndex);
      }} onFinish={() => {
        setIsOpen(false);
        setCurrentStep(0);
        action("controlled-tour-finished")();
      }} />
      </div>;
  }
}`,...(Be=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};const Ge=["BasicTour","CustomStyling","NoMask","CustomSteps","InteractiveTour","OnboardingFlow","ControlledTour"];export{P as BasicTour,A as ControlledTour,E as CustomSteps,F as CustomStyling,L as InteractiveTour,R as NoMask,V as OnboardingFlow,Ge as __namedExportsOrder,$e as default};
