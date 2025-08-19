import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as n}from"./index-B-lxVbXh.js";import{R as m,r as Pe}from"./index-DkvSDgFW.js";import{c as l}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const p={info:{container:"bg-blue-50 border-blue-200 text-blue-800",icon:"text-blue-400",title:"text-blue-800",button:"text-blue-500 hover:bg-blue-100 focus:ring-blue-600"},success:{container:"bg-green-50 border-green-200 text-green-800",icon:"text-green-400",title:"text-green-800",button:"text-green-500 hover:bg-green-100 focus:ring-green-600"},warning:{container:"bg-yellow-50 border-yellow-200 text-yellow-800",icon:"text-yellow-400",title:"text-yellow-800",button:"text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600"},error:{container:"bg-red-50 border-red-200 text-red-800",icon:"text-red-400",title:"text-red-800",button:"text-red-500 hover:bg-red-100 focus:ring-red-600"}},_e={sm:"p-3 text-sm",md:"p-4 text-sm",lg:"p-4 text-base"},Be=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),He=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),qe=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),Oe=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),Ue=()=>e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),Ke={info:Be,success:He,warning:qe,error:Oe},r=m.forwardRef(({variant:a="info",size:d="md",title:t,dismissible:L=!1,onDismiss:s,icon:c,hideIcon:o=!1,children:u,className:Me,...Ve},We)=>{const[Ee,Re]=m.useState(!0),Ye=()=>{Re(!1),s&&s()};if(!Ee)return null;const i=c||!o&&Ke[a];return e.jsx("div",{ref:We,className:l("rounded-lg border",p[a].container,_e[d],Me),...Ve,children:e.jsxs("div",{className:"flex",children:[i&&e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:l("mt-0.5",p[a].icon),children:m.isValidElement(i)?i:typeof i=="function"?m.createElement(i):i})}),e.jsxs("div",{className:l("flex-1",i&&"ml-3"),children:[t&&e.jsx("h3",{className:l("font-medium mb-1",p[a].title),children:t}),u&&e.jsx("div",{className:l(!t&&"mt-0"),children:u})]}),L&&e.jsx("div",{className:"flex-shrink-0 ml-4",children:e.jsxs("button",{type:"button",onClick:Ye,className:l("inline-flex rounded-md p-1.5 transition-colors duration-200","focus:outline-none focus:ring-2 focus:ring-offset-2",p[a].button),children:[e.jsx("span",{className:"sr-only",children:"Dismiss"}),e.jsx(Ue,{})]})})]})})});r.displayName="Alert";try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:{value:"info"},description:"Variant styling untuk alert",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},size:{defaultValue:{value:"md"},description:"Ukuran alert",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},title:{defaultValue:null,description:"Judul alert",name:"title",required:!1,type:{name:"string"}},dismissible:{defaultValue:{value:"false"},description:"Apakah alert dapat ditutup",name:"dismissible",required:!1,type:{name:"boolean"}},onDismiss:{defaultValue:null,description:"Callback ketika alert ditutup",name:"onDismiss",required:!1,type:{name:"(() => void)"}},icon:{defaultValue:null,description:"Icon custom (override icon default)",name:"icon",required:!1,type:{name:"ReactNode"}},hideIcon:{defaultValue:{value:"false"},description:"Sembunyikan icon default",name:"hideIcon",required:!1,type:{name:"boolean"}}}}}catch{}const Xe=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})}),Je=()=>e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),ss={title:"Feedback/Alert",component:r,parameters:{layout:"centered",docs:{description:{component:"Komponen Alert untuk menampilkan pesan penting, notifikasi, atau feedback kepada pengguna. Mendukung berbagai variant (info, success, warning, error), ukuran, dan opsi dismissible."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"],description:"Variant styling untuk alert"},size:{control:"select",options:["sm","md","lg"],description:"Ukuran alert"},title:{control:"text",description:"Judul alert"},dismissible:{control:"boolean",description:"Apakah alert dapat ditutup"},hideIcon:{control:"boolean",description:"Sembunyikan icon default"},children:{control:"text",description:"Konten alert"},onDismiss:{action:"dismissed"}},args:{onDismiss:n("dismissed"),children:"This is an alert message."}},g={args:{variant:"info",title:"Information",children:"Here's some helpful information for you to consider."}},h={args:{variant:"success",title:"Success!",children:"Your changes have been saved successfully."}},f={args:{variant:"warning",title:"Warning",children:"Please review your input before proceeding."}},v={args:{variant:"error",title:"Error",children:"Something went wrong. Please try again."}},b={args:{variant:"info",children:"This is an informational message without a title."}},y={args:{variant:"success",children:"Operation completed successfully!"}},x={args:{variant:"info",title:"Dismissible Alert",children:"You can close this alert by clicking the X button.",dismissible:!0}},w={args:{variant:"success",title:"Task Completed",children:"Your task has been completed successfully. You can dismiss this notification.",dismissible:!0}},A={args:{size:"sm",variant:"info",title:"Small Alert",children:"This is a small sized alert."}},k={args:{size:"md",variant:"info",title:"Medium Alert",children:"This is a medium sized alert (default size)."}},N={args:{size:"lg",variant:"info",title:"Large Alert",children:"This is a large sized alert with more prominent styling."}},S={args:{variant:"info",title:"No Icon Alert",children:"This alert doesn't display an icon.",hideIcon:!0}},j={args:{variant:"success",title:"Custom Icon",children:"This alert uses a custom heart icon instead of the default success icon.",icon:e.jsx(Xe,{})}},I={args:{variant:"info",title:"Notification",children:"You have new messages waiting in your inbox.",icon:e.jsx(Je,{})}},z={args:{variant:"warning",title:"Important Security Notice",children:"We've detected some unusual activity on your account. As a precautionary measure, please review your recent transactions and update your password. If you notice any unauthorized activities, please contact our support team immediately. Your account security is our top priority.",dismissible:!0}},D={render:()=>e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsx(r,{variant:"info",title:"Information",onDismiss:n("info-dismissed"),children:"This is an informational message."}),e.jsx(r,{variant:"success",title:"Success",onDismiss:n("success-dismissed"),children:"Operation completed successfully!"}),e.jsx(r,{variant:"warning",title:"Warning",onDismiss:n("warning-dismissed"),children:"Please review before continuing."}),e.jsx(r,{variant:"error",title:"Error",onDismiss:n("error-dismissed"),children:"Something went wrong."})]}),parameters:{docs:{description:{story:"Semua variant alert yang tersedia: info, success, warning, dan error."}}}},C={render:()=>e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsx(r,{size:"sm",variant:"info",title:"Small Alert",onDismiss:n("small-dismissed"),children:"Small sized alert message."}),e.jsx(r,{size:"md",variant:"success",title:"Medium Alert",onDismiss:n("medium-dismissed"),children:"Medium sized alert message."}),e.jsx(r,{size:"lg",variant:"warning",title:"Large Alert",onDismiss:n("large-dismissed"),children:"Large sized alert message with more prominent styling."})]}),parameters:{docs:{description:{story:"Semua ukuran alert yang tersedia dari small hingga large."}}}},T={render:()=>{const[a,d]=Pe.useState([{id:1,variant:"info",title:"Welcome!",message:"Welcome to our application. Explore the features!"},{id:2,variant:"success",title:"Profile Updated",message:"Your profile has been updated successfully."}]),t=s=>{const c={info:"Here's some information for you.",success:"Operation completed successfully!",warning:"Please be cautious with this action.",error:"An error occurred. Please try again."},o={id:Date.now(),variant:s,title:s.charAt(0).toUpperCase()+s.slice(1),message:c[s]};d(u=>[...u,o]),n(`${s}-alert-added`)(o)},L=s=>{d(c=>c.filter(o=>o.id!==s)),n("alert-removed")(s)};return e.jsxs("div",{className:"space-y-6 w-96",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:()=>t("info"),className:"px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200",children:"Add Info"}),e.jsx("button",{onClick:()=>t("success"),className:"px-3 py-1.5 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200",children:"Add Success"}),e.jsx("button",{onClick:()=>t("warning"),className:"px-3 py-1.5 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200",children:"Add Warning"}),e.jsx("button",{onClick:()=>t("error"),className:"px-3 py-1.5 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200",children:"Add Error"})]}),e.jsxs("div",{className:"space-y-3",children:[a.length===0&&e.jsx("p",{className:"text-secondary-500 text-sm italic",children:"No alerts. Try adding some using the buttons above!"}),a.map(s=>e.jsx(r,{variant:s.variant,title:s.title,dismissible:!0,onDismiss:()=>L(s.id),children:s.message},s.id))]})]})},parameters:{docs:{description:{story:"Demo interaktif untuk menambah dan menghapus alert. Klik tombol untuk menambah alert dan X untuk menghapusnya."}}}};var M,V,W;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Information",
    children: "Here's some helpful information for you to consider."
  }
}`,...(W=(V=g.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var E,R,Y;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success!",
    children: "Your changes have been saved successfully."
  }
}`,...(Y=(R=h.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var P,_,B;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning",
    children: "Please review your input before proceeding."
  }
}`,...(B=(_=f.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var H,q,O;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Error",
    children: "Something went wrong. Please try again."
  }
}`,...(O=(q=v.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var U,K,X;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "This is an informational message without a title."
  }
}`,...(X=(K=b.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var J,$,F;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "Operation completed successfully!"
  }
}`,...(F=($=y.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var G,Q,Z;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Dismissible Alert",
    children: "You can close this alert by clicking the X button.",
    dismissible: true
  }
}`,...(Z=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,se,re;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Task Completed",
    children: "Your task has been completed successfully. You can dismiss this notification.",
    dismissible: true
  }
}`,...(re=(se=w.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ne,ae,te;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    size: "sm",
    variant: "info",
    title: "Small Alert",
    children: "This is a small sized alert."
  }
}`,...(te=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ie,oe,le;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    size: "md",
    variant: "info",
    title: "Medium Alert",
    children: "This is a medium sized alert (default size)."
  }
}`,...(le=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,de,ue;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    size: "lg",
    variant: "info",
    title: "Large Alert",
    children: "This is a large sized alert with more prominent styling."
  }
}`,...(ue=(de=N.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ge;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "No Icon Alert",
    children: "This alert doesn't display an icon.",
    hideIcon: true
  }
}`,...(ge=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,fe,ve;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Custom Icon",
    children: "This alert uses a custom heart icon instead of the default success icon.",
    icon: <HeartIcon />
  }
}`,...(ve=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var be,ye,xe;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Notification",
    children: "You have new messages waiting in your inbox.",
    icon: <BellIcon />
  }
}`,...(xe=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var we,Ae,ke;z.parameters={...z.parameters,docs:{...(we=z.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Important Security Notice",
    children: "We've detected some unusual activity on your account. As a precautionary measure, please review your recent transactions and update your password. If you notice any unauthorized activities, please contact our support team immediately. Your account security is our top priority.",
    dismissible: true
  }
}`,...(ke=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};var Ne,Se,je;D.parameters={...D.parameters,docs:{...(Ne=D.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-96">
      <Alert variant="info" title="Information" onDismiss={action("info-dismissed")}>
        This is an informational message.
      </Alert>

      <Alert variant="success" title="Success" onDismiss={action("success-dismissed")}>
        Operation completed successfully!
      </Alert>

      <Alert variant="warning" title="Warning" onDismiss={action("warning-dismissed")}>
        Please review before continuing.
      </Alert>

      <Alert variant="error" title="Error" onDismiss={action("error-dismissed")}>
        Something went wrong.
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua variant alert yang tersedia: info, success, warning, dan error."
      }
    }
  }
}`,...(je=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var Ie,ze,De;C.parameters={...C.parameters,docs:{...(Ie=C.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-96">
      <Alert size="sm" variant="info" title="Small Alert" onDismiss={action("small-dismissed")}>
        Small sized alert message.
      </Alert>

      <Alert size="md" variant="success" title="Medium Alert" onDismiss={action("medium-dismissed")}>
        Medium sized alert message.
      </Alert>

      <Alert size="lg" variant="warning" title="Large Alert" onDismiss={action("large-dismissed")}>
        Large sized alert message with more prominent styling.
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran alert yang tersedia dari small hingga large."
      }
    }
  }
}`,...(De=(ze=C.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var Ce,Te,Le;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const [alerts, setAlerts] = useState([{
      id: 1,
      variant: "info" as const,
      title: "Welcome!",
      message: "Welcome to our application. Explore the features!"
    }, {
      id: 2,
      variant: "success" as const,
      title: "Profile Updated",
      message: "Your profile has been updated successfully."
    }]);
    const addAlert = (variant: "info" | "success" | "warning" | "error") => {
      const messages = {
        info: "Here's some information for you.",
        success: "Operation completed successfully!",
        warning: "Please be cautious with this action.",
        error: "An error occurred. Please try again."
      };
      const newAlert = {
        id: Date.now(),
        variant,
        title: variant.charAt(0).toUpperCase() + variant.slice(1),
        message: messages[variant]
      };
      setAlerts(prev => [...prev, newAlert]);
      action(\`\${variant}-alert-added\`)(newAlert);
    };
    const removeAlert = (id: number) => {
      setAlerts(prev => prev.filter(alert => alert.id !== id));
      action("alert-removed")(id);
    };
    return <div className="space-y-6 w-96">
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => addAlert("info")} className="px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
            Add Info
          </button>
          <button onClick={() => addAlert("success")} className="px-3 py-1.5 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
            Add Success
          </button>
          <button onClick={() => addAlert("warning")} className="px-3 py-1.5 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
            Add Warning
          </button>
          <button onClick={() => addAlert("error")} className="px-3 py-1.5 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200">
            Add Error
          </button>
        </div>

        <div className="space-y-3">
          {alerts.length === 0 && <p className="text-secondary-500 text-sm italic">
              No alerts. Try adding some using the buttons above!
            </p>}

          {alerts.map(alert => <Alert key={alert.id} variant={alert.variant} title={alert.title} dismissible onDismiss={() => removeAlert(alert.id)}>
              {alert.message}
            </Alert>)}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demo interaktif untuk menambah dan menghapus alert. Klik tombol untuk menambah alert dan X untuk menghapusnya."
      }
    }
  }
}`,...(Le=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:Le.source}}};const rs=["Info","Success","Warning","Error","InfoNoTitle","SuccessNoTitle","Dismissible","DismissibleSuccess","Small","Medium","Large","NoIcon","CustomIcon","NotificationIcon","LongContent","AllVariants","AllSizes","InteractiveDemo"];export{C as AllSizes,D as AllVariants,j as CustomIcon,x as Dismissible,w as DismissibleSuccess,v as Error,g as Info,b as InfoNoTitle,T as InteractiveDemo,N as Large,z as LongContent,k as Medium,S as NoIcon,I as NotificationIcon,A as Small,h as Success,y as SuccessNoTitle,f as Warning,rs as __namedExportsOrder,ss as default};
