import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as u}from"./index-B-lxVbXh.js";import{R as aa,r as g}from"./index-DkvSDgFW.js";import{c as p}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const ta={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},la={sm:"text-sm",md:"text-sm",lg:"text-base"},ia={sm:"text-xs",md:"text-sm",lg:"text-sm"},da={primary:"text-primary-600 focus:ring-primary-500 focus:border-primary-500",secondary:"text-secondary-600 focus:ring-secondary-500 focus:border-secondary-500",success:"text-green-600 focus:ring-green-500 focus:border-green-500",warning:"text-yellow-600 focus:ring-yellow-500 focus:border-yellow-500",error:"text-red-600 focus:ring-red-500 focus:border-red-500"},t=aa.forwardRef(({label:a,description:n,helperText:r,error:s,size:i="md",color:d="primary",className:m,id:h,...b},V)=>{const y=h||`radio-${Math.random().toString(36).substr(2,9)}`,c=!!s;return e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex items-center h-5",children:e.jsx("input",{ref:V,id:y,type:"radio",className:p("border transition-colors duration-200","focus:outline-none focus:ring-2 focus:ring-offset-0","disabled:opacity-50 disabled:cursor-not-allowed",ta[i],c?"border-red-300 text-red-600 focus:ring-red-500 focus:border-red-500":da[d],!b.checked&&!c&&"border-secondary-300",m),...b})}),(a||n)&&e.jsxs("div",{className:"ml-3 flex-1",children:[a&&e.jsx("label",{htmlFor:y,className:p("font-medium cursor-pointer block",la[i],c?"text-red-700":"text-secondary-700"),children:a}),n&&e.jsx("p",{className:p("mt-0.5",ia[i],c?"text-red-600":"text-secondary-500"),children:n})]})]}),(r||s)&&e.jsx("div",{className:p("mt-1",a||n?"ml-8":""),children:e.jsx("p",{className:p("text-sm",c?"text-red-600":"text-secondary-500"),children:s||r})})]})});t.displayName="Radio";const o=aa.forwardRef(({name:a,label:n,helperText:r,error:s,value:i,onChange:d,options:m,size:h="md",color:b="primary",direction:V="vertical",disabled:y=!1,...c},na)=>{const B=!!s,oa=l=>{d&&d(l)};return e.jsxs("div",{ref:na,...c,children:[n&&e.jsx("legend",{className:"block text-sm font-medium text-secondary-700 mb-2",children:n}),e.jsx("div",{className:p(V==="horizontal"?"flex flex-wrap gap-4":"space-y-3"),children:m.map((l,sa)=>e.jsx(t,{id:`${a}-${l.value}`,name:a,value:l.value,checked:i===l.value,onChange:()=>oa(l.value),disabled:y||l.disabled,label:l.label,description:l.description,size:h,color:b,error:B&&sa===0?s:void 0},l.value))}),r&&!B&&e.jsx("p",{className:"mt-2 text-sm text-secondary-500",children:r})]})});o.displayName="RadioGroup";try{t.displayName="Radio",t.__docgenInfo={description:"",displayName:"Radio",props:{label:{defaultValue:null,description:"Label untuk radio",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Deskripsi tambahan",name:"description",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text di bawah radio",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Ukuran radio",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"primary"},description:"Warna radio ketika active",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}}}}}catch{}try{o.displayName="RadioGroup",o.__docgenInfo={description:"",displayName:"RadioGroup",props:{name:{defaultValue:null,description:"Nama grup radio",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Label untuk grup",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text di bawah grup",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message untuk grup",name:"error",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Nilai yang dipilih",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback ketika nilai berubah",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Options untuk radio group",name:"options",required:!0,type:{name:"RadioOption[]"}},size:{defaultValue:{value:"md"},description:"Ukuran radio",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"primary"},description:"Warna radio",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},direction:{defaultValue:{value:"vertical"},description:"Layout direction",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},disabled:{defaultValue:{value:"false"},description:"Disabled state untuk seluruh grup",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const ra=[{value:"credit_card",label:"Credit Card",description:"Pay with your credit or debit card"},{value:"bank_transfer",label:"Bank Transfer",description:"Transfer directly from your bank account"},{value:"digital_wallet",label:"Digital Wallet",description:"Use PayPal, GoPay, or other digital wallets"},{value:"cash",label:"Cash on Delivery",description:"Pay when your order arrives",disabled:!0}],Y=[{value:"basic",label:"Basic Plan",description:"Perfect for individuals just getting started"},{value:"pro",label:"Pro Plan",description:"Best for growing teams and businesses"},{value:"enterprise",label:"Enterprise Plan",description:"Advanced features for large organizations"}],ca=[{value:"xs",label:"Extra Small"},{value:"s",label:"Small"},{value:"m",label:"Medium"},{value:"l",label:"Large"},{value:"xl",label:"Extra Large"}],ya={title:"Form Controls/Radio",component:t,parameters:{layout:"centered",docs:{description:{component:"Komponen Radio untuk pilihan eksklusif dalam sebuah grup. Tersedia sebagai Radio individual atau RadioGroup untuk mengelola multiple options. Mendukung berbagai ukuran, warna, layout direction, dan descriptions."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Ukuran radio"},color:{control:"select",options:["primary","secondary","success","warning","error"],description:"Warna radio ketika aktif"},label:{control:"text",description:"Label untuk radio"},description:{control:"text",description:"Deskripsi tambahan"},helperText:{control:"text",description:"Helper text di bawah radio"},error:{control:"text",description:"Error message"},checked:{control:"boolean",description:"State checked"},disabled:{control:"boolean",description:"Disable radio"},onChange:{action:"changed"}},args:{onChange:u("changed"),label:"Option 1",name:"example",value:"option1"}},v={args:{label:"Default radio option",name:"default",value:"option"}},f={args:{label:"Checked radio option",name:"checked",value:"option",checked:!0}},x={args:{label:"Premium Plan",description:"Get access to all premium features and priority support",name:"plan",value:"premium",checked:!0}},S={args:{label:"Disabled option",description:"This option is currently not available",name:"disabled",value:"option",disabled:!0}},k={args:{label:"Disabled checked option",description:"This option is selected but disabled",name:"disabled-checked",value:"option",checked:!0,disabled:!0}},C={args:{size:"sm",label:"Small radio",description:"Small sized radio button",name:"small",value:"small"}},z={args:{size:"md",label:"Medium radio",description:"Medium sized radio button (default)",name:"medium",value:"medium"}},w={args:{size:"lg",label:"Large radio",description:"Large sized radio button",name:"large",value:"large"}},R={args:{color:"primary",label:"Primary radio",name:"primary",value:"primary",checked:!0}},N={args:{color:"secondary",label:"Secondary radio",name:"secondary",value:"secondary",checked:!0}},P={args:{color:"success",label:"Success radio",name:"success",value:"success",checked:!0}},j={args:{color:"warning",label:"Warning radio",name:"warning",value:"warning",checked:!0}},G={args:{color:"error",label:"Error radio",name:"error",value:"error",checked:!0}},D={args:{label:"Subscribe to newsletter",description:"Get the latest updates and offers",helperText:"We'll never spam your inbox",name:"newsletter",value:"subscribe"}},M={args:{label:"Terms and conditions",description:"I agree to the terms and conditions",error:"You must accept the terms to continue",name:"terms",value:"accept"}},T={render:()=>{const[a,n]=g.useState("basic");return e.jsx(o,{name:"plan",label:"Choose your plan",value:a,onChange:r=>{n(r),u("plan-changed")(r)},options:Y,helperText:"You can upgrade or downgrade at any time"})},parameters:{docs:{description:{story:"RadioGroup dasar dengan beberapa opsi dan descriptions."}}}},O={render:()=>{const[a,n]=g.useState("m");return e.jsx(o,{name:"size",label:"Select size",value:a,onChange:r=>{n(r),u("size-changed")(r)},options:ca,direction:"horizontal",helperText:"Choose the size that fits you best"})},parameters:{docs:{description:{story:"RadioGroup dengan layout horizontal untuk opsi yang lebih sederhana."}}}},_={render:()=>{const[a,n]=g.useState("credit_card");return e.jsx(o,{name:"payment",label:"Payment Method",value:a,onChange:r=>{n(r),u("payment-changed")(r)},options:ra,size:"lg",helperText:"Select your preferred payment method"})},parameters:{docs:{description:{story:"RadioGroup dengan ukuran large untuk payment method selection dengan disabled option."}}}},E={render:()=>{const[a,n]=g.useState("primary"),r=[{value:"primary",label:"Primary Color"},{value:"secondary",label:"Secondary Color"},{value:"success",label:"Success Color"},{value:"warning",label:"Warning Color"},{value:"error",label:"Error Color"}];return e.jsx(o,{name:"colors",label:"Select Color Theme",value:a,onChange:s=>{n(s),u("color-changed")(s)},options:r,color:a,direction:"horizontal"})},parameters:{docs:{description:{story:"RadioGroup yang mendemonstrasikan berbagai warna dengan color yang berubah dynamically."}}}},W={render:()=>{const[a,n]=g.useState("");return e.jsx(o,{name:"plan-error",label:"Choose your plan",value:a,onChange:r=>{n(r),u("plan-error-changed")(r)},options:Y,error:a?void 0:"Please select a plan to continue"})},parameters:{docs:{description:{story:"RadioGroup dengan error state ketika tidak ada pilihan yang dipilih."}}}},L={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-900 mb-3",children:"Small Size"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{size:"sm",label:"Small option 1",name:"small-group",value:"1"}),e.jsx(t,{size:"sm",label:"Small option 2",name:"small-group",value:"2",checked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-900 mb-3",children:"Medium Size"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{size:"md",label:"Medium option 1",name:"medium-group",value:"1"}),e.jsx(t,{size:"md",label:"Medium option 2",name:"medium-group",value:"2",checked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-900 mb-3",children:"Large Size"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{size:"lg",label:"Large option 1",name:"large-group",value:"1"}),e.jsx(t,{size:"lg",label:"Large option 2",name:"large-group",value:"2",checked:!0})]})]})]}),parameters:{docs:{description:{story:"Perbandingan semua ukuran radio yang tersedia."}}}},q={render:()=>{const[a,n]=g.useState({plan:"basic",payment:"credit_card",newsletter:"yes",notifications:"email"}),r=d=>m=>{n(h=>({...h,[d]:m})),u(`${d}-changed`)(m)},s=[{value:"yes",label:"Yes, send me updates",description:"Get the latest news and offers"},{value:"no",label:"No, thanks",description:"I prefer not to receive emails"}],i=[{value:"email",label:"Email notifications"},{value:"sms",label:"SMS notifications"},{value:"push",label:"Push notifications"},{value:"none",label:"No notifications"}];return e.jsxs("div",{className:"max-w-2xl space-y-8 p-6 bg-secondary-50 rounded-lg",children:[e.jsx("h2",{className:"text-xl font-semibold text-secondary-900",children:"Account Setup"}),e.jsx(o,{name:"plan",label:"Subscription Plan",value:a.plan,onChange:r("plan"),options:Y,helperText:"You can change your plan anytime"}),e.jsx(o,{name:"payment",label:"Payment Method",value:a.payment,onChange:r("payment"),options:ra,color:"success"}),e.jsx(o,{name:"newsletter",label:"Newsletter Subscription",value:a.newsletter,onChange:r("newsletter"),options:s,size:"lg"}),e.jsx(o,{name:"notifications",label:"Notification Preferences",value:a.notifications,onChange:r("notifications"),options:i,direction:"horizontal",color:"warning"}),e.jsxs("div",{className:"mt-8 p-4 bg-white rounded border",children:[e.jsx("h3",{className:"font-medium text-secondary-800 mb-2",children:"Selected Options:"}),e.jsx("pre",{className:"text-sm text-secondary-600",children:JSON.stringify(a,null,2)})]})]})},parameters:{docs:{description:{story:"Contoh form kompleks dengan multiple RadioGroup dan berbagai konfigurasi."}}}};var F,H,I;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "Default radio option",
    name: "default",
    value: "option"
  }
}`,...(I=(H=v.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var A,$,U;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Checked radio option",
    name: "checked",
    value: "option",
    checked: true
  }
}`,...(U=($=f.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: "Premium Plan",
    description: "Get access to all premium features and priority support",
    name: "plan",
    value: "premium",
    checked: true
  }
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: "Disabled option",
    description: "This option is currently not available",
    name: "disabled",
    value: "option",
    disabled: true
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,ne;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: "Disabled checked option",
    description: "This option is selected but disabled",
    name: "disabled-checked",
    value: "option",
    checked: true,
    disabled: true
  }
}`,...(ne=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,se,te;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    size: "sm",
    label: "Small radio",
    description: "Small sized radio button",
    name: "small",
    value: "small"
  }
}`,...(te=(se=C.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,ie,de;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    size: "md",
    label: "Medium radio",
    description: "Medium sized radio button (default)",
    name: "medium",
    value: "medium"
  }
}`,...(de=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,ue,me;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    size: "lg",
    label: "Large radio",
    description: "Large sized radio button",
    name: "large",
    value: "large"
  }
}`,...(me=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,he;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    color: "primary",
    label: "Primary radio",
    name: "primary",
    value: "primary",
    checked: true
  }
}`,...(he=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var be,ye,ve;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    color: "secondary",
    label: "Secondary radio",
    name: "secondary",
    value: "secondary",
    checked: true
  }
}`,...(ve=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,xe,Se;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    color: "success",
    label: "Success radio",
    name: "success",
    value: "success",
    checked: true
  }
}`,...(Se=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var ke,Ce,ze;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    color: "warning",
    label: "Warning radio",
    name: "warning",
    value: "warning",
    checked: true
  }
}`,...(ze=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source}}};var we,Re,Ne;G.parameters={...G.parameters,docs:{...(we=G.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    color: "error",
    label: "Error radio",
    name: "error",
    value: "error",
    checked: true
  }
}`,...(Ne=(Re=G.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};var Pe,je,Ge;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    label: "Subscribe to newsletter",
    description: "Get the latest updates and offers",
    helperText: "We'll never spam your inbox",
    name: "newsletter",
    value: "subscribe"
  }
}`,...(Ge=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Ge.source}}};var De,Me,Te;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    label: "Terms and conditions",
    description: "I agree to the terms and conditions",
    error: "You must accept the terms to continue",
    name: "terms",
    value: "accept"
  }
}`,...(Te=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var Oe,_e,Ee;T.parameters={...T.parameters,docs:{...(Oe=T.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState("basic");
    return <RadioGroup name="plan" label="Choose your plan" value={selectedPlan} onChange={value => {
      setSelectedPlan(value);
      action("plan-changed")(value);
    }} options={planOptions} helperText="You can upgrade or downgrade at any time" />;
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup dasar dengan beberapa opsi dan descriptions."
      }
    }
  }
}`,...(Ee=(_e=T.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var We,Le,qe;O.parameters={...O.parameters,docs:{...(We=O.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    const [selectedSize, setSelectedSize] = useState("m");
    return <RadioGroup name="size" label="Select size" value={selectedSize} onChange={value => {
      setSelectedSize(value);
      action("size-changed")(value);
    }} options={sizeOptions} direction="horizontal" helperText="Choose the size that fits you best" />;
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup dengan layout horizontal untuk opsi yang lebih sederhana."
      }
    }
  }
}`,...(qe=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var Ve,Ye,Be;_.parameters={..._.parameters,docs:{...(Ve=_.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState("credit_card");
    return <RadioGroup name="payment" label="Payment Method" value={paymentMethod} onChange={value => {
      setPaymentMethod(value);
      action("payment-changed")(value);
    }} options={paymentOptions} size="lg" helperText="Select your preferred payment method" />;
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup dengan ukuran large untuk payment method selection dengan disabled option."
      }
    }
  }
}`,...(Be=(Ye=_.parameters)==null?void 0:Ye.docs)==null?void 0:Be.source}}};var Fe,He,Ie;E.parameters={...E.parameters,docs:{...(Fe=E.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const [selectedColor, setSelectedColor] = useState("primary");
    const colorOptions = [{
      value: "primary",
      label: "Primary Color"
    }, {
      value: "secondary",
      label: "Secondary Color"
    }, {
      value: "success",
      label: "Success Color"
    }, {
      value: "warning",
      label: "Warning Color"
    }, {
      value: "error",
      label: "Error Color"
    }];
    return <RadioGroup name="colors" label="Select Color Theme" value={selectedColor} onChange={value => {
      setSelectedColor(value);
      action("color-changed")(value);
    }} options={colorOptions} color={selectedColor as any} direction="horizontal" />;
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup yang mendemonstrasikan berbagai warna dengan color yang berubah dynamically."
      }
    }
  }
}`,...(Ie=(He=E.parameters)==null?void 0:He.docs)==null?void 0:Ie.source}}};var Ae,$e,Ue;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState("");
    return <RadioGroup name="plan-error" label="Choose your plan" value={selectedPlan} onChange={value => {
      setSelectedPlan(value);
      action("plan-error-changed")(value);
    }} options={planOptions} error={!selectedPlan ? "Please select a plan to continue" : undefined} />;
  },
  parameters: {
    docs: {
      description: {
        story: "RadioGroup dengan error state ketika tidak ada pilihan yang dipilih."
      }
    }
  }
}`,...(Ue=($e=W.parameters)==null?void 0:$e.docs)==null?void 0:Ue.source}}};var Je,Ke,Qe;L.parameters={...L.parameters,docs:{...(Je=L.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-secondary-900 mb-3">
          Small Size
        </h3>
        <div className="space-y-2">
          <Radio size="sm" label="Small option 1" name="small-group" value="1" />
          <Radio size="sm" label="Small option 2" name="small-group" value="2" checked />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-secondary-900 mb-3">
          Medium Size
        </h3>
        <div className="space-y-2">
          <Radio size="md" label="Medium option 1" name="medium-group" value="1" />
          <Radio size="md" label="Medium option 2" name="medium-group" value="2" checked />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-secondary-900 mb-3">
          Large Size
        </h3>
        <div className="space-y-2">
          <Radio size="lg" label="Large option 1" name="large-group" value="1" />
          <Radio size="lg" label="Large option 2" name="large-group" value="2" checked />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Perbandingan semua ukuran radio yang tersedia."
      }
    }
  }
}`,...(Qe=(Ke=L.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Xe,Ze,ea;q.parameters={...q.parameters,docs:{...(Xe=q.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      plan: "basic",
      payment: "credit_card",
      newsletter: "yes",
      notifications: "email"
    });
    const handleChange = (field: keyof typeof formData) => (value: string) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
      action(\`\${field}-changed\`)(value);
    };
    const newsletterOptions = [{
      value: "yes",
      label: "Yes, send me updates",
      description: "Get the latest news and offers"
    }, {
      value: "no",
      label: "No, thanks",
      description: "I prefer not to receive emails"
    }];
    const notificationOptions = [{
      value: "email",
      label: "Email notifications"
    }, {
      value: "sms",
      label: "SMS notifications"
    }, {
      value: "push",
      label: "Push notifications"
    }, {
      value: "none",
      label: "No notifications"
    }];
    return <div className="max-w-2xl space-y-8 p-6 bg-secondary-50 rounded-lg">
        <h2 className="text-xl font-semibold text-secondary-900">
          Account Setup
        </h2>

        <RadioGroup name="plan" label="Subscription Plan" value={formData.plan} onChange={handleChange("plan")} options={planOptions} helperText="You can change your plan anytime" />

        <RadioGroup name="payment" label="Payment Method" value={formData.payment} onChange={handleChange("payment")} options={paymentOptions} color="success" />

        <RadioGroup name="newsletter" label="Newsletter Subscription" value={formData.newsletter} onChange={handleChange("newsletter")} options={newsletterOptions} size="lg" />

        <RadioGroup name="notifications" label="Notification Preferences" value={formData.notifications} onChange={handleChange("notifications")} options={notificationOptions} direction="horizontal" color="warning" />

        <div className="mt-8 p-4 bg-white rounded border">
          <h3 className="font-medium text-secondary-800 mb-2">
            Selected Options:
          </h3>
          <pre className="text-sm text-secondary-600">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Contoh form kompleks dengan multiple RadioGroup dan berbagai konfigurasi."
      }
    }
  }
}`,...(ea=(Ze=q.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};const va=["Default","Checked","WithDescription","Disabled","DisabledChecked","Small","Medium","Large","Primary","Secondary","Success","Warning","Error","WithHelperText","WithError","RadioGroupBasic","RadioGroupHorizontal","RadioGroupPayment","RadioGroupColors","RadioGroupWithError","AllSizes","ComplexForm"];export{L as AllSizes,f as Checked,q as ComplexForm,v as Default,S as Disabled,k as DisabledChecked,G as Error,w as Large,z as Medium,R as Primary,T as RadioGroupBasic,E as RadioGroupColors,O as RadioGroupHorizontal,_ as RadioGroupPayment,W as RadioGroupWithError,N as Secondary,C as Small,P as Success,j as Warning,x as WithDescription,M as WithError,D as WithHelperText,va as __namedExportsOrder,ya as default};
