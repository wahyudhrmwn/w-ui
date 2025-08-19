import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as i}from"./index-B-lxVbXh.js";import{R as nn,r as o}from"./index-DkvSDgFW.js";import{c as d}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const u={sm:{track:"w-9 h-5",thumb:"w-4 h-4",translate:"translate-x-4",thumbPosition:"top-0.5 left-0.5"},md:{track:"w-11 h-6",thumb:"w-5 h-5",translate:"translate-x-5",thumbPosition:"top-0.5 left-0.5"},lg:{track:"w-14 h-8",thumb:"w-7 h-7",translate:"translate-x-6",thumbPosition:"top-0.5 left-0.5"}},an={primary:"bg-primary-600",secondary:"bg-secondary-600",success:"bg-green-600",warning:"bg-yellow-600",error:"bg-red-600"},rn={primary:"focus:ring-primary-500",secondary:"focus:ring-secondary-500",success:"focus:ring-green-500",warning:"focus:ring-yellow-500",error:"focus:ring-red-500"},tn={sm:"text-sm",md:"text-sm",lg:"text-base"},s=nn.forwardRef(({label:n,helperText:t,error:r,size:a="md",color:c="primary",labelPosition:l="right",className:h,id:Xe,checked:O,...$},Ze)=>{const W=Xe||`switch-${Math.random().toString(36).substr(2,9)}`,A=!!r,en=e.jsxs("label",{htmlFor:W,className:d("relative inline-flex cursor-pointer",$.disabled&&"opacity-50 cursor-not-allowed"),children:[e.jsx("input",{ref:Ze,id:W,type:"checkbox",checked:O,className:"sr-only",...$}),e.jsx("div",{className:d("relative rounded-full transition-colors duration-200 ease-in-out","focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2",u[a].track,O?an[c]:"bg-secondary-300",rn[c],A&&"ring-2 ring-red-500 ring-offset-2",h),children:e.jsx("span",{className:d("absolute bg-white rounded-full shadow-sm transform transition-transform duration-200 ease-in-out","ring-0",u[a].thumb,u[a].thumbPosition,O?u[a].translate:"translate-x-0")})})]}),g=n&&e.jsx("label",{htmlFor:W,className:d("font-medium cursor-pointer",tn[a],A?"text-red-700":"text-secondary-700",$.disabled&&"opacity-50 cursor-not-allowed"),children:n});return e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:d("flex items-center",l==="left"?"flex-row-reverse":"flex-row",n&&(l==="left"?"justify-end":"justify-start")),children:[l==="left"&&g&&e.jsx("div",{className:"mr-3",children:g}),en,l==="right"&&g&&e.jsx("div",{className:"ml-3",children:g})]}),(t||r)&&e.jsx("div",{className:d("mt-1",n&&l==="left"?"text-right":"text-left"),children:e.jsx("p",{className:d("text-sm",A?"text-red-600":"text-secondary-500"),children:r||t})})]})});s.displayName="Switch";try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{label:{defaultValue:null,description:"Label untuk switch",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text di bawah switch",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Ukuran switch",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"primary"},description:"Warna switch ketika aktif",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},labelPosition:{defaultValue:{value:"right"},description:"Posisi label",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const gn={title:"Form Controls/Switch",component:s,parameters:{layout:"centered",docs:{description:{component:"Komponen Switch untuk toggle on/off state. Alternatif yang lebih visual untuk checkbox dalam konteks pengaturan dan preferensi. Mendukung berbagai ukuran, warna, dan posisi label."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Ukuran switch"},color:{control:"select",options:["primary","secondary","success","warning","error"],description:"Warna switch ketika aktif"},labelPosition:{control:"select",options:["left","right"],description:"Posisi label relatif terhadap switch"},checked:{control:"boolean",description:"State aktif/tidak aktif"},disabled:{control:"boolean",description:"Disable switch"},label:{control:"text",description:"Label untuk switch"},helperText:{control:"text",description:"Helper text di bawah switch"},error:{control:"text",description:"Error message"},onChange:{action:"changed"}},args:{onChange:i("changed"),label:"Enable notifications"}},m={render:n=>{const[t,r]=o.useState(!1);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("default-changed")(a.target.checked)}})},args:{label:"Enable notifications"}},p={render:n=>{const[t,r]=o.useState(!0);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("checked-changed")(a.target.checked)}})},args:{label:"Enable notifications"}},k={render:n=>{const[t,r]=o.useState(!1);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("no-label-changed")(a.target.checked)}})},args:{}},b={args:{label:"Disabled switch",disabled:!0,checked:!1}},f={args:{label:"Disabled checked switch",disabled:!0,checked:!0}},x={render:n=>{const[t,r]=o.useState(!1);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("small-changed")(a.target.checked)}})},args:{size:"sm",label:"Small switch"}},C={render:n=>{const[t,r]=o.useState(!1);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("medium-changed")(a.target.checked)}})},args:{size:"md",label:"Medium switch"}},v={render:n=>{const[t,r]=o.useState(!1);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("large-changed")(a.target.checked)}})},args:{size:"lg",label:"Large switch"}},w={render:n=>{const[t,r]=o.useState(!0);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("primary-changed")(a.target.checked)}})},args:{color:"primary",label:"Primary switch"}},S={render:n=>{const[t,r]=o.useState(!0);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("secondary-changed")(a.target.checked)}})},args:{color:"secondary",label:"Secondary switch"}},y={render:n=>{const[t,r]=o.useState(!0);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("success-changed")(a.target.checked)}})},args:{color:"success",label:"Success switch"}},j={render:n=>{const[t,r]=o.useState(!0);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("warning-changed")(a.target.checked)}})},args:{color:"warning",label:"Warning switch"}},N={render:n=>{const[t,r]=o.useState(!0);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("error-changed")(a.target.checked)}})},args:{color:"error",label:"Error switch"}},E={render:n=>{const[t,r]=o.useState(!0);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("label-left-changed")(a.target.checked)}})},args:{label:"Label on left",labelPosition:"left"}},T={render:n=>{const[t,r]=o.useState(!0);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("label-right-changed")(a.target.checked)}})},args:{label:"Label on right",labelPosition:"right"}},P={render:n=>{const[t,r]=o.useState(!1);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("helper-text-changed")(a.target.checked)}})},args:{label:"Enable notifications",helperText:"You will receive email notifications for important updates"}},L={render:n=>{const[t,r]=o.useState(!1);return e.jsx(s,{...n,checked:t,onChange:a=>{r(a.target.checked),i("error-changed")(a.target.checked)}})},args:{label:"Enable notifications",error:"This setting is required for your account type"}},z={render:()=>{const[n,t]=o.useState({small:!1,medium:!1,large:!1}),r=a=>c=>{t(l=>({...l,[a]:c.target.checked})),i(`${a}-changed`)(c.target.checked)};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{size:"sm",label:"Small switch",checked:n.small,onChange:r("small")}),e.jsx(s,{size:"md",label:"Medium switch",checked:n.medium,onChange:r("medium")}),e.jsx(s,{size:"lg",label:"Large switch",checked:n.large,onChange:r("large")})]})},parameters:{docs:{description:{story:"Semua ukuran switch yang tersedia dari small hingga large. Klik untuk mencoba!"}}}},I={render:()=>{const[n,t]=o.useState({primary:!0,secondary:!0,success:!0,warning:!0,error:!0}),r=a=>c=>{t(l=>({...l,[a]:c.target.checked})),i(`${a}-color-changed`)(c.target.checked)};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{color:"primary",label:"Primary",checked:n.primary,onChange:r("primary")}),e.jsx(s,{color:"secondary",label:"Secondary",checked:n.secondary,onChange:r("secondary")}),e.jsx(s,{color:"success",label:"Success",checked:n.success,onChange:r("success")}),e.jsx(s,{color:"warning",label:"Warning",checked:n.warning,onChange:r("warning")}),e.jsx(s,{color:"error",label:"Error",checked:n.error,onChange:r("error")})]})},parameters:{docs:{description:{story:"Semua warna switch yang tersedia. Klik untuk mencoba toggle dan melihat perbedaan warna!"}}}},M={render:()=>{const[n,t]=o.useState({notifications:!0,darkMode:!1,autoSave:!0,soundEffects:!1}),r=a=>c=>{t(l=>({...l,[a]:c.target.checked})),i(`${a}-changed`)(c.target.checked)};return e.jsxs("div",{className:"space-y-4 p-6 bg-secondary-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-medium text-secondary-900 mb-4",children:"Settings"}),e.jsx(s,{label:"Push Notifications",helperText:"Receive notifications on your device",checked:n.notifications,onChange:r("notifications")}),e.jsx(s,{label:"Dark Mode",helperText:"Use dark theme for better night reading",checked:n.darkMode,onChange:r("darkMode"),color:"secondary"}),e.jsx(s,{label:"Auto Save",helperText:"Automatically save your work",checked:n.autoSave,onChange:r("autoSave"),color:"success"}),e.jsx(s,{label:"Sound Effects",helperText:"Play sounds for actions and notifications",checked:n.soundEffects,onChange:r("soundEffects"),color:"warning"}),e.jsxs("div",{className:"mt-6 p-4 bg-white rounded border",children:[e.jsx("h4",{className:"font-medium text-secondary-800 mb-2",children:"Current Settings:"}),e.jsx("pre",{className:"text-sm text-secondary-600",children:JSON.stringify(n,null,2)})]})]})},parameters:{docs:{description:{story:"Contoh interaktif penggunaan Switch dalam form pengaturan. Klik switch untuk melihat perubahan dan check Actions panel."}}}},H={render:()=>{const[n,t]=o.useState(!1),[r,a]=o.useState(0),c=l=>{t(l.target.checked),a(h=>h+1),i("demo-toggled")(l.target.checked)};return e.jsxs("div",{className:"p-6 bg-secondary-50 rounded-lg text-center",children:[e.jsx("h3",{className:"text-lg font-medium text-secondary-900 mb-4",children:"🎯 Coba Klik Switch Ini!"}),e.jsx("div",{className:"mb-6",children:e.jsx(s,{size:"lg",label:`Switch is ${n?"ON":"OFF"}`,checked:n,onChange:c,color:n?"success":"secondary"})}),e.jsxs("div",{className:"space-y-2 text-sm text-secondary-600",children:[e.jsxs("p",{children:["Status:"," ",e.jsx("span",{className:`font-bold ${n?"text-green-600":"text-red-600"}`,children:n?"✅ AKTIF":"❌ NONAKTIF"})]}),e.jsxs("p",{children:["Total klik:"," ",e.jsx("span",{className:"font-bold text-blue-600",children:r})]})]})]})},parameters:{docs:{description:{story:"Demo sederhana untuk mencoba klik switch. Klik untuk toggle dan lihat perubahan status!"}}}},D={render:()=>{const[n,t]=o.useState({size:"md",color:"primary",labelPosition:"right",checked:!1,disabled:!1,hasHelperText:!1,hasError:!1}),r=(c,l)=>{t(h=>({...h,[c]:l}))},a=c=>{t(l=>({...l,checked:c.target.checked})),i("playground-changed")(c.target.checked)};return e.jsxs("div",{className:"space-y-6 p-6 bg-secondary-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-medium text-secondary-900 mb-4",children:"Interactive Switch Playground"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 p-4 bg-white rounded border",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Size:"}),e.jsxs("select",{value:n.size,onChange:c=>r("size",c.target.value),className:"w-full p-2 border rounded",children:[e.jsx("option",{value:"sm",children:"Small"}),e.jsx("option",{value:"md",children:"Medium"}),e.jsx("option",{value:"lg",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Color:"}),e.jsxs("select",{value:n.color,onChange:c=>r("color",c.target.value),className:"w-full p-2 border rounded",children:[e.jsx("option",{value:"primary",children:"Primary"}),e.jsx("option",{value:"secondary",children:"Secondary"}),e.jsx("option",{value:"success",children:"Success"}),e.jsx("option",{value:"warning",children:"Warning"}),e.jsx("option",{value:"error",children:"Error"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Label Position:"}),e.jsxs("select",{value:n.labelPosition,onChange:c=>r("labelPosition",c.target.value),className:"w-full p-2 border rounded",children:[e.jsx("option",{value:"left",children:"Left"}),e.jsx("option",{value:"right",children:"Right"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:n.disabled,onChange:c=>r("disabled",c.target.checked),className:"mr-2"}),"Disabled"]}),e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:n.hasHelperText,onChange:c=>r("hasHelperText",c.target.checked),className:"mr-2"}),"Helper Text"]}),e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",checked:n.hasError,onChange:c=>r("hasError",c.target.checked),className:"mr-2"}),"Error State"]})]})]}),e.jsxs("div",{className:"p-6 bg-white rounded border",children:[e.jsx("h4",{className:"font-medium mb-4",children:"Preview:"}),e.jsx(s,{size:n.size,color:n.color,labelPosition:n.labelPosition,label:"Interactive Switch",checked:n.checked,disabled:n.disabled,helperText:n.hasHelperText?"This is a helper text":void 0,error:n.hasError?"This is an error message":void 0,onChange:a})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded text-green-400 font-mono text-sm overflow-auto",children:[e.jsx("div",{className:"text-gray-400 mb-2",children:"// Generated code:"}),e.jsx("div",{children:"<Switch"}),e.jsx("div",{children:`  size="${n.size}"`}),e.jsx("div",{children:`  color="${n.color}"`}),e.jsx("div",{children:`  labelPosition="${n.labelPosition}"`}),e.jsx("div",{children:'  label="Interactive Switch"'}),e.jsx("div",{children:`  checked={${n.checked}}`}),n.disabled&&e.jsx("div",{children:"  disabled={true}"}),n.hasHelperText&&e.jsx("div",{children:'  helperText="This is a helper text"'}),n.hasError&&e.jsx("div",{children:'  error="This is an error message"'}),e.jsx("div",{children:"  onChange={handleChange}"}),e.jsx("div",{children:"/>"})]})]})},parameters:{docs:{description:{story:"Playground interaktif untuk mencoba berbagai konfigurasi Switch. Ubah settings dan lihat hasilnya secara real-time!"}}}};var K,R,F;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("default-changed")(e.target.checked);
    }} />;
  },
  args: {
    label: "Enable notifications"
  }
}`,...(F=(R=m.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var _,q,U;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("checked-changed")(e.target.checked);
    }} />;
  },
  args: {
    label: "Enable notifications"
  }
}`,...(U=(q=p.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var V,G,J;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("no-label-changed")(e.target.checked);
    }} />;
  },
  args: {}
}`,...(J=(G=k.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Y,B,Q;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: "Disabled switch",
    disabled: true,
    checked: false
  }
}`,...(Q=(B=b.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};var X,Z,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: "Disabled checked switch",
    disabled: true,
    checked: true
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,re;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("small-changed")(e.target.checked);
    }} />;
  },
  args: {
    size: "sm",
    label: "Small switch"
  }
}`,...(re=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,se,ce;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("medium-changed")(e.target.checked);
    }} />;
  },
  args: {
    size: "md",
    label: "Medium switch"
  }
}`,...(ce=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var oe,ie,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("large-changed")(e.target.checked);
    }} />;
  },
  args: {
    size: "lg",
    label: "Large switch"
  }
}`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,he,ge;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("primary-changed")(e.target.checked);
    }} />;
  },
  args: {
    color: "primary",
    label: "Primary switch"
  }
}`,...(ge=(he=w.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ue,me,pe;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("secondary-changed")(e.target.checked);
    }} />;
  },
  args: {
    color: "secondary",
    label: "Secondary switch"
  }
}`,...(pe=(me=S.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ke,be,fe;y.parameters={...y.parameters,docs:{...(ke=y.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("success-changed")(e.target.checked);
    }} />;
  },
  args: {
    color: "success",
    label: "Success switch"
  }
}`,...(fe=(be=y.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var xe,Ce,ve;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("warning-changed")(e.target.checked);
    }} />;
  },
  args: {
    color: "warning",
    label: "Warning switch"
  }
}`,...(ve=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var we,Se,ye;N.parameters={...N.parameters,docs:{...(we=N.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("error-changed")(e.target.checked);
    }} />;
  },
  args: {
    color: "error",
    label: "Error switch"
  }
}`,...(ye=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var je,Ne,Ee;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("label-left-changed")(e.target.checked);
    }} />;
  },
  args: {
    label: "Label on left",
    labelPosition: "left"
  }
}`,...(Ee=(Ne=E.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var Te,Pe,Le;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("label-right-changed")(e.target.checked);
    }} />;
  },
  args: {
    label: "Label on right",
    labelPosition: "right"
  }
}`,...(Le=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var ze,Ie,Me;P.parameters={...P.parameters,docs:{...(ze=P.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("helper-text-changed")(e.target.checked);
    }} />;
  },
  args: {
    label: "Enable notifications",
    helperText: "You will receive email notifications for important updates"
  }
}`,...(Me=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:Me.source}}};var He,De,Oe;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      action("error-changed")(e.target.checked);
    }} />;
  },
  args: {
    label: "Enable notifications",
    error: "This setting is required for your account type"
  }
}`,...(Oe=(De=L.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var $e,We,Ae;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => {
    const [switches, setSwitches] = useState({
      small: false,
      medium: false,
      large: false
    });
    const handleChange = (key: keyof typeof switches) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSwitches(prev => ({
        ...prev,
        [key]: e.target.checked
      }));
      action(\`\${key}-changed\`)(e.target.checked);
    };
    return <div className="flex flex-col gap-4">
        <Switch size="sm" label="Small switch" checked={switches.small} onChange={handleChange("small")} />
        <Switch size="md" label="Medium switch" checked={switches.medium} onChange={handleChange("medium")} />
        <Switch size="lg" label="Large switch" checked={switches.large} onChange={handleChange("large")} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran switch yang tersedia dari small hingga large. Klik untuk mencoba!"
      }
    }
  }
}`,...(Ae=(We=z.parameters)==null?void 0:We.docs)==null?void 0:Ae.source}}};var Ke,Re,Fe;I.parameters={...I.parameters,docs:{...(Ke=I.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    const [switches, setSwitches] = useState({
      primary: true,
      secondary: true,
      success: true,
      warning: true,
      error: true
    });
    const handleChange = (key: keyof typeof switches) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSwitches(prev => ({
        ...prev,
        [key]: e.target.checked
      }));
      action(\`\${key}-color-changed\`)(e.target.checked);
    };
    return <div className="flex flex-col gap-4">
        <Switch color="primary" label="Primary" checked={switches.primary} onChange={handleChange("primary")} />
        <Switch color="secondary" label="Secondary" checked={switches.secondary} onChange={handleChange("secondary")} />
        <Switch color="success" label="Success" checked={switches.success} onChange={handleChange("success")} />
        <Switch color="warning" label="Warning" checked={switches.warning} onChange={handleChange("warning")} />
        <Switch color="error" label="Error" checked={switches.error} onChange={handleChange("error")} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Semua warna switch yang tersedia. Klik untuk mencoba toggle dan melihat perbedaan warna!"
      }
    }
  }
}`,...(Fe=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:Fe.source}}};var _e,qe,Ue;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      soundEffects: false
    });
    const handleChange = (key: keyof typeof settings) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSettings(prev => ({
        ...prev,
        [key]: e.target.checked
      }));
      action(\`\${key}-changed\`)(e.target.checked);
    };
    return <div className="space-y-4 p-6 bg-secondary-50 rounded-lg">
        <h3 className="text-lg font-medium text-secondary-900 mb-4">
          Settings
        </h3>

        <Switch label="Push Notifications" helperText="Receive notifications on your device" checked={settings.notifications} onChange={handleChange("notifications")} />

        <Switch label="Dark Mode" helperText="Use dark theme for better night reading" checked={settings.darkMode} onChange={handleChange("darkMode")} color="secondary" />

        <Switch label="Auto Save" helperText="Automatically save your work" checked={settings.autoSave} onChange={handleChange("autoSave")} color="success" />

        <Switch label="Sound Effects" helperText="Play sounds for actions and notifications" checked={settings.soundEffects} onChange={handleChange("soundEffects")} color="warning" />

        <div className="mt-6 p-4 bg-white rounded border">
          <h4 className="font-medium text-secondary-800 mb-2">
            Current Settings:
          </h4>
          <pre className="text-sm text-secondary-600">
            {JSON.stringify(settings, null, 2)}
          </pre>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Contoh interaktif penggunaan Switch dalam form pengaturan. Klik switch untuk melihat perubahan dan check Actions panel."
      }
    }
  }
}`,...(Ue=(qe=M.parameters)==null?void 0:qe.docs)==null?void 0:Ue.source}}};var Ve,Ge,Je;H.parameters={...H.parameters,docs:{...(Ve=H.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => {
    const [isOn, setIsOn] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsOn(e.target.checked);
      setClickCount(prev => prev + 1);
      action("demo-toggled")(e.target.checked);
    };
    return <div className="p-6 bg-secondary-50 rounded-lg text-center">
        <h3 className="text-lg font-medium text-secondary-900 mb-4">
          🎯 Coba Klik Switch Ini!
        </h3>

        <div className="mb-6">
          <Switch size="lg" label={\`Switch is \${isOn ? "ON" : "OFF"}\`} checked={isOn} onChange={handleToggle} color={isOn ? "success" : "secondary"} />
        </div>

        <div className="space-y-2 text-sm text-secondary-600">
          <p>
            Status:{" "}
            <span className={\`font-bold \${isOn ? "text-green-600" : "text-red-600"}\`}>
              {isOn ? "✅ AKTIF" : "❌ NONAKTIF"}
            </span>
          </p>
          <p>
            Total klik:{" "}
            <span className="font-bold text-blue-600">{clickCount}</span>
          </p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demo sederhana untuk mencoba klik switch. Klik untuk toggle dan lihat perubahan status!"
      }
    }
  }
}`,...(Je=(Ge=H.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Ye,Be,Qe;D.parameters={...D.parameters,docs:{...(Ye=D.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => {
    const [config, setConfig] = useState({
      size: "md" as const,
      color: "primary" as const,
      labelPosition: "right" as const,
      checked: false,
      disabled: false,
      hasHelperText: false,
      hasError: false
    });
    const handleConfigChange = (key: keyof typeof config, value: any) => {
      setConfig(prev => ({
        ...prev,
        [key]: value
      }));
    };
    const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfig(prev => ({
        ...prev,
        checked: e.target.checked
      }));
      action("playground-changed")(e.target.checked);
    };
    return <div className="space-y-6 p-6 bg-secondary-50 rounded-lg">
        <h3 className="text-lg font-medium text-secondary-900 mb-4">
          Interactive Switch Playground
        </h3>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded border">
          <div>
            <label className="block text-sm font-medium mb-2">Size:</label>
            <select value={config.size} onChange={e => handleConfigChange("size", e.target.value)} className="w-full p-2 border rounded">
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Color:</label>
            <select value={config.color} onChange={e => handleConfigChange("color", e.target.value)} className="w-full p-2 border rounded">
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Label Position:
            </label>
            <select value={config.labelPosition} onChange={e => handleConfigChange("labelPosition", e.target.value)} className="w-full p-2 border rounded">
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" checked={config.disabled} onChange={e => handleConfigChange("disabled", e.target.checked)} className="mr-2" />
              Disabled
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={config.hasHelperText} onChange={e => handleConfigChange("hasHelperText", e.target.checked)} className="mr-2" />
              Helper Text
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={config.hasError} onChange={e => handleConfigChange("hasError", e.target.checked)} className="mr-2" />
              Error State
            </label>
          </div>
        </div>

        {/* Preview */}
        <div className="p-6 bg-white rounded border">
          <h4 className="font-medium mb-4">Preview:</h4>
          <Switch size={config.size} color={config.color} labelPosition={config.labelPosition} label="Interactive Switch" checked={config.checked} disabled={config.disabled} helperText={config.hasHelperText ? "This is a helper text" : undefined} error={config.hasError ? "This is an error message" : undefined} onChange={handleSwitchChange} />
        </div>

        {/* Code preview */}
        <div className="p-4 bg-gray-900 rounded text-green-400 font-mono text-sm overflow-auto">
          <div className="text-gray-400 mb-2">// Generated code:</div>
          <div>{\`<Switch\`}</div>
          <div>{\`  size="\${config.size}"\`}</div>
          <div>{\`  color="\${config.color}"\`}</div>
          <div>{\`  labelPosition="\${config.labelPosition}"\`}</div>
          <div>{\`  label="Interactive Switch"\`}</div>
          <div>{\`  checked={\${config.checked}}\`}</div>
          {config.disabled && <div>{\`  disabled={true}\`}</div>}
          {config.hasHelperText && <div>{\`  helperText="This is a helper text"\`}</div>}
          {config.hasError && <div>{\`  error="This is an error message"\`}</div>}
          <div>{\`  onChange={handleChange}\`}</div>
          <div>{\`/>\`}</div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Playground interaktif untuk mencoba berbagai konfigurasi Switch. Ubah settings dan lihat hasilnya secara real-time!"
      }
    }
  }
}`,...(Qe=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:Qe.source}}};const un=["Default","Checked","WithoutLabel","Disabled","DisabledChecked","Small","Medium","Large","Primary","Secondary","Success","Warning","Error","LabelLeft","LabelRight","WithHelperText","WithError","AllSizes","AllColors","Interactive","ClickDemo","LivePlayground"];export{I as AllColors,z as AllSizes,p as Checked,H as ClickDemo,m as Default,b as Disabled,f as DisabledChecked,N as Error,M as Interactive,E as LabelLeft,T as LabelRight,v as Large,D as LivePlayground,C as Medium,w as Primary,S as Secondary,x as Small,y as Success,j as Warning,L as WithError,P as WithHelperText,k as WithoutLabel,un as __namedExportsOrder,gn as default};
