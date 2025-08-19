import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{c as r}from"./clsx-B-dksMZM.js";import{B as a}from"./Button-igjKbdfR.js";import"./index-Bnmt0x4K.js";import"./index-DkvSDgFW.js";const oe={sm:{container:"p-6",icon:"w-12 h-12",title:"text-lg font-semibold",subtitle:"text-sm",spacing:"space-y-3"},md:{container:"p-12",icon:"w-16 h-16",title:"text-2xl font-bold",subtitle:"text-base",spacing:"space-y-6"},lg:{container:"p-16",icon:"w-20 h-20",title:"text-3xl font-bold",subtitle:"text-lg",spacing:"space-y-8"}},ce={success:s=>e.jsx("div",{className:r("bg-green-100 rounded-full flex items-center justify-center",s),children:e.jsx("svg",{className:"w-1/2 h-1/2 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),error:s=>e.jsx("div",{className:r("bg-red-100 rounded-full flex items-center justify-center",s),children:e.jsx("svg",{className:"w-1/2 h-1/2 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),info:s=>e.jsx("div",{className:r("bg-blue-100 rounded-full flex items-center justify-center",s),children:e.jsx("svg",{className:"w-1/2 h-1/2 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),warning:s=>e.jsx("div",{className:r("bg-yellow-100 rounded-full flex items-center justify-center",s),children:e.jsx("svg",{className:"w-1/2 h-1/2 text-yellow-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.634 0L4.18 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),404:s=>e.jsx("div",{className:r("bg-secondary-100 rounded-full flex items-center justify-center",s),children:e.jsx("div",{className:"text-center",children:e.jsx("div",{className:"text-3xl font-bold text-secondary-600",children:"404"})})}),403:s=>e.jsx("div",{className:r("bg-red-100 rounded-full flex items-center justify-center",s),children:e.jsx("svg",{className:"w-1/2 h-1/2 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),500:s=>e.jsx("div",{className:r("bg-red-100 rounded-full flex items-center justify-center",s),children:e.jsx("div",{className:"text-center",children:e.jsx("div",{className:"text-2xl font-bold text-red-600",children:"500"})})})},k={success:{title:"Success!",subTitle:"Your action was completed successfully."},error:{title:"Something went wrong",subTitle:"An error occurred while processing your request."},info:{title:"Information",subTitle:"Here's some important information for you."},warning:{title:"Warning",subTitle:"Please pay attention to this important notice."},404:{title:"404 - Page Not Found",subTitle:"Sorry, the page you visited does not exist."},403:{title:"403 - Forbidden",subTitle:"Sorry, you don't have permission to access this resource."},500:{title:"500 - Internal Server Error",subTitle:"Something went wrong on our end. Please try again later."}},ue={success:"text-green-700",error:"text-red-700",info:"text-blue-700",warning:"text-yellow-700",404:"text-secondary-700",403:"text-red-700",500:"text-red-700"},t=({status:s="info",title:ee,subTitle:se,icon:ae,extra:j,size:te="md",className:re,style:ie,...ne})=>{const i=oe[te],R=ee??k[s].title,S=se??k[s].subTitle,w=ae??ce[s](i.icon),le=r("flex flex-col items-center justify-center text-center",i.container,i.spacing,re),de=ue[s];return e.jsxs("div",{className:le,style:ie,...ne,children:[w&&e.jsx("div",{className:"flex-shrink-0",children:w}),R&&e.jsx("h1",{className:r(i.title,de,"m-0"),children:R}),S&&e.jsx("p",{className:r(i.subtitle,"text-secondary-600 m-0 max-w-md"),children:S}),j&&e.jsx("div",{className:"mt-6",children:j})]})},x=s=>e.jsx(t,{...s,status:"success"}),h=s=>e.jsx(t,{...s,status:"error"}),y=s=>e.jsx(t,{...s,status:"info"}),f=s=>e.jsx(t,{...s,status:"warning"}),g=s=>e.jsx(t,{...s,status:"404"}),b=s=>e.jsx(t,{...s,status:"403"}),N=s=>e.jsx(t,{...s,status:"500"}),me={ResultSuccess:x};try{t.displayName="Result",t.__docgenInfo={description:"",displayName:"Result",props:{status:{defaultValue:{value:"info"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"404"'},{value:'"403"'},{value:'"500"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{x.displayName="ResultSuccess",x.__docgenInfo={description:"",displayName:"ResultSuccess",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}}}}}catch{}try{h.displayName="ResultError",h.__docgenInfo={description:"",displayName:"ResultError",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}}}}}catch{}try{y.displayName="ResultInfo",y.__docgenInfo={description:"",displayName:"ResultInfo",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}}}}}catch{}try{f.displayName="ResultWarning",f.__docgenInfo={description:"",displayName:"ResultWarning",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}}}}}catch{}try{g.displayName="Result404",g.__docgenInfo={description:"",displayName:"Result404",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}}}}}catch{}try{b.displayName="Result403",b.__docgenInfo={description:"",displayName:"Result403",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}}}}}catch{}try{N.displayName="Result500",N.__docgenInfo={description:"",displayName:"Result500",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}}}}}catch{}const fe={title:"Feedback/Result",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"Komponen Result untuk menampilkan feedback setelah user melakukan action atau ketika terjadi error/status tertentu. Dilengkapi dengan berbagai preset untuk success, error, warning, info, dan HTTP status codes seperti 404, 403, 500."}}},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:["success","error","info","warning","404","403","500"],description:"Status result"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran result"},title:{control:{type:"text"},description:"Custom title"},subTitle:{control:{type:"text"},description:"Custom subtitle/description"}}},n={args:{status:"info"}},l={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-8",children:[e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{status:"success",size:"sm"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{status:"error",size:"sm"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{status:"info",size:"sm"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{status:"warning",size:"sm"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{status:"404",size:"sm"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{status:"403",size:"sm"})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{status:"500",size:"sm"})})]})},d={render:()=>e.jsxs("div",{className:"space-y-12 p-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"Small"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{size:"sm",status:"success"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"Medium (Default)"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{size:"md",status:"success"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"Large"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{size:"lg",status:"success"})})]})]})},o={render:()=>e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 p-8",children:[e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{status:"success",title:"Payment Successful!",subTitle:"Your order has been confirmed and will be shipped soon.",extra:e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"primary",size:"lg",children:"Track Your Order"}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx(a,{variant:"outline",children:"View Receipt"}),e.jsx(a,{variant:"ghost",children:"Continue Shopping"})]})]})})}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{status:"error",title:"Payment Failed",subTitle:"We couldn't process your payment. Please try again or use a different payment method.",extra:e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"primary",children:"Try Again"}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx(a,{variant:"outline",children:"Change Payment Method"}),e.jsx(a,{variant:"ghost",children:"Contact Support"})]})]})})})]})},c={render:()=>e.jsx("div",{className:"space-y-8 p-8",children:e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{title:"Welcome to Our Platform!",subTitle:"Your account has been created successfully. Let's get you started with some quick setup steps.",icon:e.jsx("div",{className:"w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center",children:e.jsx("svg",{className:"w-10 h-10 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),extra:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"primary",size:"lg",children:"Start Setup"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"This will only take a few minutes to complete"})]})})})})},u={render:()=>e.jsxs("div",{className:"space-y-12 p-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"404 - Page Not Found"}),e.jsx("div",{className:"min-h-96 bg-secondary-50 rounded-lg",children:e.jsx(g,{title:"Oops! Page not found",subTitle:"The page you're looking for doesn't exist or has been moved.",extra:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"primary",size:"lg",children:"Go Home"}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx(a,{variant:"outline",children:"Go Back"}),e.jsx(a,{variant:"ghost",children:"Contact Support"})]})]})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"403 - Access Forbidden"}),e.jsx("div",{className:"min-h-96 bg-secondary-50 rounded-lg",children:e.jsx(b,{title:"Access Denied",subTitle:"You don't have permission to access this resource. Contact your administrator if you think this is a mistake.",extra:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"primary",children:"Request Access"}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx(a,{variant:"outline",children:"Go Back"}),e.jsx(a,{variant:"ghost",children:"Login with Different Account"})]})]})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"500 - Server Error"}),e.jsx("div",{className:"min-h-96 bg-secondary-50 rounded-lg",children:e.jsx(N,{title:"Server Error",subTitle:"Something went wrong on our end. Our team has been notified and is working to fix this issue.",extra:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"primary",children:"Try Again"}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx(a,{variant:"outline",children:"Report Issue"}),e.jsx(a,{variant:"ghost",children:"Check Status"})]}),e.jsxs("p",{className:"text-xs text-secondary-500",children:["Error ID: ERR_2024_001234 • ",new Date().toLocaleString()]})]})})})]})]})},m={render:()=>e.jsx("div",{className:"space-y-8 p-8",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"ResultSuccess"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(x,{size:"sm",extra:e.jsx(a,{size:"sm",variant:"primary",children:"Continue"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"ResultError"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(h,{size:"sm",extra:e.jsx(a,{size:"sm",variant:"primary",children:"Try Again"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"ResultInfo"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(y,{size:"sm",extra:e.jsx(a,{size:"sm",variant:"outline",children:"Learn More"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"ResultWarning"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(f,{size:"sm",extra:e.jsx(a,{size:"sm",variant:"primary",children:"Acknowledge"})})})]})]})})},p={render:()=>e.jsxs("div",{className:"space-y-12 p-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"E-commerce Checkout Success"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{status:"success",title:"Order Placed Successfully!",subTitle:"Thank you for your purchase. We've sent a confirmation email with your order details.",extra:e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"bg-secondary-50 rounded-lg p-4 max-w-md mx-auto",children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsx("div",{className:"font-medium",children:"Order Number:"}),e.jsx("div",{children:"#ORD-2024-001234"}),e.jsx("div",{className:"font-medium",children:"Total Amount:"}),e.jsx("div",{children:"$149.99"}),e.jsx("div",{className:"font-medium",children:"Estimated Delivery:"}),e.jsx("div",{children:"3-5 business days"})]})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"primary",size:"lg",children:"Track Your Order"}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx(a,{variant:"outline",children:"Download Receipt"}),e.jsx(a,{variant:"ghost",children:"Continue Shopping"})]})]})]})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"Form Submission Error"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{status:"error",title:"Submission Failed",subTitle:"We encountered some issues while processing your form. Please review the errors below and try again.",extra:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto text-left",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-2",children:"Issues found:"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• Email address is already in use"}),e.jsx("li",{children:"• Password must be at least 8 characters"}),e.jsx("li",{children:"• Phone number format is invalid"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"primary",children:"Fix Issues and Retry"}),e.jsx(a,{variant:"ghost",children:"Contact Support"})]})]})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"Maintenance Mode"}),e.jsx("div",{className:"min-h-96 bg-yellow-50 rounded-lg",children:e.jsx(t,{status:"warning",title:"Scheduled Maintenance",subTitle:"We're currently performing scheduled maintenance to improve our service. We'll be back online soon.",extra:e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"bg-yellow-100 border border-yellow-300 rounded-lg p-4 max-w-md mx-auto",children:e.jsxs("div",{className:"text-sm text-yellow-800",children:[e.jsx("div",{className:"font-medium mb-1",children:"Expected Duration:"}),e.jsx("div",{children:"2 hours (until 3:00 AM PST)"}),e.jsx("div",{className:"font-medium mt-3 mb-1",children:"Status Updates:"}),e.jsx("div",{children:"Follow @status for real-time updates"})]})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"primary",children:"Check Status Page"}),e.jsx(a,{variant:"outline",children:"Subscribe to Updates"})]})]})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"Account Verification"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(t,{status:"info",title:"Verify Your Email",subTitle:"We've sent a verification link to your email address. Please click the link to activate your account.",extra:e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto text-sm",children:e.jsxs("div",{className:"text-blue-800",children:[e.jsx("div",{className:"font-medium mb-1",children:"Sent to:"}),e.jsx("div",{className:"font-mono bg-blue-100 px-2 py-1 rounded",children:"user@example.com"}),e.jsx("div",{className:"font-medium mt-3 mb-1",children:"Didn't receive the email?"}),e.jsx("div",{children:"Check your spam folder or try resending"})]})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"primary",children:"Resend Verification Email"}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx(a,{variant:"outline",children:"Change Email Address"}),e.jsx(a,{variant:"ghost",children:"Contact Support"})]})]})]})})})]})]})},v={render:()=>e.jsxs("div",{className:"space-y-4 p-8",children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Using ResultComponents namespace for all result-related components"}),e.jsx("div",{className:"border border-secondary-200 rounded-lg",children:e.jsx(me.ResultSuccess,{size:"sm",extra:e.jsx(a,{variant:"primary",size:"sm",children:"Continue"})})})]})};var B,z,C;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    status: "info"
  }
}`,...(C=(z=n.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var T,_,V;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-8">
      <div className="border border-secondary-200 rounded-lg">
        <Result status="success" size="sm" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="error" size="sm" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="info" size="sm" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="warning" size="sm" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="404" size="sm" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="403" size="sm" />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="500" size="sm" />
      </div>
    </div>
}`,...(V=(_=l.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var q,P,E;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="space-y-12 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-6">Small</h3>
        <div className="border border-secondary-200 rounded-lg">
          <Result size="sm" status="success" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">Medium (Default)</h3>
        <div className="border border-secondary-200 rounded-lg">
          <Result size="md" status="success" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">Large</h3>
        <div className="border border-secondary-200 rounded-lg">
          <Result size="lg" status="success" />
        </div>
      </div>
    </div>
}`,...(E=(P=d.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var W,A,L;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
      <div className="border border-secondary-200 rounded-lg">
        <Result status="success" title="Payment Successful!" subTitle="Your order has been confirmed and will be shipped soon." extra={<div className="space-y-3">
              <Button variant="primary" size="lg">
                Track Your Order
              </Button>
              <div className="flex space-x-3">
                <Button variant="outline">View Receipt</Button>
                <Button variant="ghost">Continue Shopping</Button>
              </div>
            </div>} />
      </div>

      <div className="border border-secondary-200 rounded-lg">
        <Result status="error" title="Payment Failed" subTitle="We couldn't process your payment. Please try again or use a different payment method." extra={<div className="space-y-3">
              <Button variant="primary">Try Again</Button>
              <div className="flex space-x-3">
                <Button variant="outline">Change Payment Method</Button>
                <Button variant="ghost">Contact Support</Button>
              </div>
            </div>} />
      </div>
    </div>
}`,...(L=(A=o.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var I,D,M;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 p-8">
      <div className="border border-secondary-200 rounded-lg">
        <Result title="Welcome to Our Platform!" subTitle="Your account has been created successfully. Let's get you started with some quick setup steps." icon={<div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>} extra={<div className="space-y-4">
              <Button variant="primary" size="lg">
                Start Setup
              </Button>
              <p className="text-sm text-secondary-600">
                This will only take a few minutes to complete
              </p>
            </div>} />
      </div>
    </div>
}`,...(M=(D=c.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var F,O,Y;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-12 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-6">404 - Page Not Found</h3>
        <div className="min-h-96 bg-secondary-50 rounded-lg">
          <Result404 title="Oops! Page not found" subTitle="The page you're looking for doesn't exist or has been moved." extra={<div className="space-y-4">
                <Button variant="primary" size="lg">
                  Go Home
                </Button>
                <div className="flex space-x-3">
                  <Button variant="outline">Go Back</Button>
                  <Button variant="ghost">Contact Support</Button>
                </div>
              </div>} />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">403 - Access Forbidden</h3>
        <div className="min-h-96 bg-secondary-50 rounded-lg">
          <Result403 title="Access Denied" subTitle="You don't have permission to access this resource. Contact your administrator if you think this is a mistake." extra={<div className="space-y-4">
                <Button variant="primary">Request Access</Button>
                <div className="flex space-x-3">
                  <Button variant="outline">Go Back</Button>
                  <Button variant="ghost">Login with Different Account</Button>
                </div>
              </div>} />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">500 - Server Error</h3>
        <div className="min-h-96 bg-secondary-50 rounded-lg">
          <Result500 title="Server Error" subTitle="Something went wrong on our end. Our team has been notified and is working to fix this issue." extra={<div className="space-y-4">
                <Button variant="primary">Try Again</Button>
                <div className="flex space-x-3">
                  <Button variant="outline">Report Issue</Button>
                  <Button variant="ghost">Check Status</Button>
                </div>
                <p className="text-xs text-secondary-500">
                  Error ID: ERR_2024_001234 • {new Date().toLocaleString()}
                </p>
              </div>} />
        </div>
      </div>
    </div>
}`,...(Y=(O=u.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var U,G,H;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-3">ResultSuccess</h4>
          <div className="border border-secondary-200 rounded-lg">
            <ResultSuccess size="sm" extra={<Button size="sm" variant="primary">
                  Continue
                </Button>} />
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">ResultError</h4>
          <div className="border border-secondary-200 rounded-lg">
            <ResultError size="sm" extra={<Button size="sm" variant="primary">
                  Try Again
                </Button>} />
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">ResultInfo</h4>
          <div className="border border-secondary-200 rounded-lg">
            <ResultInfo size="sm" extra={<Button size="sm" variant="outline">
                  Learn More
                </Button>} />
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">ResultWarning</h4>
          <div className="border border-secondary-200 rounded-lg">
            <ResultWarning size="sm" extra={<Button size="sm" variant="primary">
                  Acknowledge
                </Button>} />
          </div>
        </div>
      </div>
    </div>
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var $,K,J;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="space-y-12 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-6">
          E-commerce Checkout Success
        </h3>
        <div className="border border-secondary-200 rounded-lg">
          <Result status="success" title="Order Placed Successfully!" subTitle="Thank you for your purchase. We've sent a confirmation email with your order details." extra={<div className="space-y-6">
                <div className="bg-secondary-50 rounded-lg p-4 max-w-md mx-auto">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-medium">Order Number:</div>
                    <div>#ORD-2024-001234</div>
                    <div className="font-medium">Total Amount:</div>
                    <div>$149.99</div>
                    <div className="font-medium">Estimated Delivery:</div>
                    <div>3-5 business days</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button variant="primary" size="lg">
                    Track Your Order
                  </Button>
                  <div className="flex space-x-3">
                    <Button variant="outline">Download Receipt</Button>
                    <Button variant="ghost">Continue Shopping</Button>
                  </div>
                </div>
              </div>} />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">Form Submission Error</h3>
        <div className="border border-secondary-200 rounded-lg">
          <Result status="error" title="Submission Failed" subTitle="We encountered some issues while processing your form. Please review the errors below and try again." extra={<div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto text-left">
                  <h4 className="font-medium text-red-800 mb-2">
                    Issues found:
                  </h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Email address is already in use</li>
                    <li>• Password must be at least 8 characters</li>
                    <li>• Phone number format is invalid</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <Button variant="primary">Fix Issues and Retry</Button>
                  <Button variant="ghost">Contact Support</Button>
                </div>
              </div>} />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">Maintenance Mode</h3>
        <div className="min-h-96 bg-yellow-50 rounded-lg">
          <Result status="warning" title="Scheduled Maintenance" subTitle="We're currently performing scheduled maintenance to improve our service. We'll be back online soon." extra={<div className="space-y-6">
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 max-w-md mx-auto">
                  <div className="text-sm text-yellow-800">
                    <div className="font-medium mb-1">Expected Duration:</div>
                    <div>2 hours (until 3:00 AM PST)</div>
                    <div className="font-medium mt-3 mb-1">Status Updates:</div>
                    <div>Follow @status for real-time updates</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button variant="primary">Check Status Page</Button>
                  <Button variant="outline">Subscribe to Updates</Button>
                </div>
              </div>} />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-6">Account Verification</h3>
        <div className="border border-secondary-200 rounded-lg">
          <Result status="info" title="Verify Your Email" subTitle="We've sent a verification link to your email address. Please click the link to activate your account." extra={<div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto text-sm">
                  <div className="text-blue-800">
                    <div className="font-medium mb-1">Sent to:</div>
                    <div className="font-mono bg-blue-100 px-2 py-1 rounded">
                      user@example.com
                    </div>
                    <div className="font-medium mt-3 mb-1">
                      Didn't receive the email?
                    </div>
                    <div>Check your spam folder or try resending</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button variant="primary">Resend Verification Email</Button>
                  <div className="flex space-x-3">
                    <Button variant="outline">Change Email Address</Button>
                    <Button variant="ghost">Contact Support</Button>
                  </div>
                </div>
              </div>} />
        </div>
      </div>
    </div>
}`,...(J=(K=p.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,X,Z;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-8">
      <p className="text-sm text-secondary-600 mb-4">
        Using ResultComponents namespace for all result-related components
      </p>

      <div className="border border-secondary-200 rounded-lg">
        <ResultComponents.ResultSuccess size="sm" extra={<Button variant="primary" size="sm">
              Continue
            </Button>} />
      </div>
    </div>
}`,...(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ge=["Default","AllStatuses","DifferentSizes","WithActions","CustomContent","ErrorPages","PresetComponents","RealWorldExamples","NamespaceUsage"];export{l as AllStatuses,c as CustomContent,n as Default,d as DifferentSizes,u as ErrorPages,v as NamespaceUsage,m as PresetComponents,p as RealWorldExamples,o as WithActions,ge as __namedExportsOrder,fe as default};
