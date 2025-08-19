import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as n}from"./index-B-lxVbXh.js";import{R as De,r as Te}from"./index-DkvSDgFW.js";import{c as z}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const We={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-3 text-base"},Pe=()=>e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),a=De.forwardRef(({label:r,helperText:i,error:l,size:d="md",options:I=[],placeholder:t,leftIcon:s,className:Ne,id:Le,children:Ie,...we},ze)=>{const T=Le||`select-${Math.random().toString(36).substr(2,9)}`,w=!!l;return e.jsxs("div",{className:"w-full",children:[r&&e.jsx("label",{htmlFor:T,className:"block text-sm font-medium text-secondary-700 mb-1",children:r}),e.jsxs("div",{className:"relative",children:[s&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx("span",{className:"text-secondary-400",children:s})}),e.jsxs("select",{ref:ze,id:T,className:z("block w-full rounded-lg border transition-colors duration-200 appearance-none bg-white","focus:outline-none focus:ring-2 focus:ring-offset-0","disabled:opacity-50 disabled:cursor-not-allowed",We[d],s&&"pl-10","pr-10",w?"border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500":"border-secondary-300 text-secondary-900 focus:ring-primary-500 focus:border-primary-500",Ne),...we,children:[t&&e.jsx("option",{value:"",disabled:!0,children:t}),I.map(p=>e.jsx("option",{value:p.value,disabled:p.disabled,children:p.label},p.value)),Ie]}),e.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:e.jsx("span",{className:z(w?"text-red-400":"text-secondary-400"),children:e.jsx(Pe,{})})})]}),(i||l)&&e.jsx("p",{className:z("mt-1 text-sm",w?"text-red-600":"text-secondary-500"),children:l||i})]})});a.displayName="Select";try{a.displayName="Select",a.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"Label untuk select",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text di bawah select",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Ukuran select",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},options:{defaultValue:{value:"[]"},description:"Options untuk select",name:"options",required:!1,type:{name:"SelectOption[]"}},placeholder:{defaultValue:null,description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},leftIcon:{defaultValue:null,description:"Icon di sebelah kiri select",name:"leftIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const Ce=()=>e.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),ke=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),D=[{value:"id",label:"Indonesia"},{value:"us",label:"United States"},{value:"sg",label:"Singapore"},{value:"my",label:"Malaysia"},{value:"th",label:"Thailand"},{value:"ph",label:"Philippines"}],c=[{value:"admin",label:"Administrator"},{value:"editor",label:"Editor"},{value:"viewer",label:"Viewer"},{value:"guest",label:"Guest",disabled:!0}],o=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"strawberry",label:"Strawberry"}],Ge={title:"Form Controls/Select",component:a,parameters:{layout:"centered",docs:{description:{component:"Komponen Select untuk memilih satu opsi dari daftar pilihan yang tersedia. Mendukung berbagai ukuran, icon, dan state error. Dapat menggunakan options prop atau children untuk menampilkan pilihan."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Ukuran select"},label:{control:"text",description:"Label untuk select"},placeholder:{control:"text",description:"Placeholder text"},helperText:{control:"text",description:"Helper text di bawah select"},error:{control:"text",description:"Error message"},disabled:{control:"boolean",description:"Disable select"},options:{control:!1,description:"Array options untuk select"},leftIcon:{control:!1,description:"Icon di sebelah kiri select"},onChange:{action:"changed"}},args:{onChange:n("changed"),label:"Select an option",options:o}},u={args:{label:"Choose a fruit",options:o,placeholder:"Select a fruit..."}},m={args:{label:"Choose a country",options:D,placeholder:"Select your country..."}},h={args:{options:o,placeholder:"Select a fruit..."}},g={args:{label:"Disabled select",options:o,placeholder:"Cannot select...",disabled:!0}},b={args:{size:"sm",label:"Small select",options:o,placeholder:"Select..."}},x={args:{size:"md",label:"Medium select",options:o,placeholder:"Select..."}},f={args:{size:"lg",label:"Large select",options:o,placeholder:"Select..."}},v={args:{label:"Choose location",leftIcon:e.jsx(Ce,{}),options:D,placeholder:"Select country..."}},S={args:{label:"User role",leftIcon:e.jsx(ke,{}),options:c,placeholder:"Select role..."}},y={args:{label:"User role",options:c,placeholder:"Select role...",helperText:"Choose the appropriate role for this user"}},j={args:{label:"User role",options:c,placeholder:"Select role...",error:"Please select a valid role"}},C={args:{label:"User role",options:c,placeholder:"Select role...",helperText:"Note: Guest role is currently disabled"}},k={render:r=>e.jsxs(a,{...r,children:[e.jsx("option",{value:"js",children:"JavaScript"}),e.jsx("option",{value:"ts",children:"TypeScript"}),e.jsx("option",{value:"py",children:"Python"}),e.jsx("option",{value:"java",children:"Java"}),e.jsx("option",{value:"go",disabled:!0,children:"Go (Coming Soon)"})]}),args:{label:"Programming Language",placeholder:"Select language...",onChange:n("language-changed")}},N={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsx(a,{size:"sm",label:"Small select",options:o,placeholder:"Select...",onChange:n("small-changed")}),e.jsx(a,{size:"md",label:"Medium select",options:o,placeholder:"Select...",onChange:n("medium-changed")}),e.jsx(a,{size:"lg",label:"Large select",options:o,placeholder:"Select...",onChange:n("large-changed")})]}),parameters:{docs:{description:{story:"Semua ukuran select yang tersedia dari small hingga large."}}}},L={render:()=>{const[r,i]=Te.useState({country:"",role:"",language:""}),l=d=>I=>{const t=I.target.value;i(s=>({...s,[d]:t})),n(`${d}-changed`)(t)};return e.jsxs("div",{className:"space-y-4 p-6 bg-secondary-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-medium text-secondary-900 mb-4",children:"User Profile"}),e.jsx(a,{label:"Country",leftIcon:e.jsx(Ce,{}),options:D,placeholder:"Select your country...",value:r.country,onChange:l("country"),helperText:"Choose your current location"}),e.jsx(a,{label:"Role",leftIcon:e.jsx(ke,{}),options:c,placeholder:"Select your role...",value:r.role,onChange:l("role"),helperText:"This determines your access level"}),e.jsxs(a,{label:"Preferred Language",placeholder:"Select programming language...",value:r.language,onChange:l("language"),children:[e.jsx("option",{value:"js",children:"JavaScript"}),e.jsx("option",{value:"ts",children:"TypeScript"}),e.jsx("option",{value:"py",children:"Python"}),e.jsx("option",{value:"java",children:"Java"}),e.jsx("option",{value:"go",children:"Go"})]}),e.jsxs("div",{className:"mt-6 p-4 bg-white rounded border",children:[e.jsx("h4",{className:"font-medium text-secondary-800 mb-2",children:"Selected Values:"}),e.jsx("pre",{className:"text-sm text-secondary-600",children:JSON.stringify(r,null,2)})]})]})},parameters:{docs:{description:{story:"Contoh interaktif penggunaan Select dalam form. Pilih opsi untuk melihat perubahan dan check Actions panel."}}}};var W,P,U;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Choose a fruit",
    options: fruits,
    placeholder: "Select a fruit..."
  }
}`,...(U=(P=u.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var M,E,J;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Choose a country",
    options: countries,
    placeholder: "Select your country..."
  }
}`,...(J=(E=m.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var V,_,G;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    options: fruits,
    placeholder: "Select a fruit..."
  }
}`,...(G=(_=h.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var O,R,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Disabled select",
    options: fruits,
    placeholder: "Cannot select...",
    disabled: true
  }
}`,...(q=(R=g.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var A,F,B;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: "sm",
    label: "Small select",
    options: fruits,
    placeholder: "Select..."
  }
}`,...(B=(F=b.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var H,$,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: "md",
    label: "Medium select",
    options: fruits,
    placeholder: "Select..."
  }
}`,...(K=($=x.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: "lg",
    label: "Large select",
    options: fruits,
    placeholder: "Select..."
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: "Choose location",
    leftIcon: <LocationIcon />,
    options: countries,
    placeholder: "Select country..."
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,oe,le;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: "User role",
    leftIcon: <UserIcon />,
    options: roles,
    placeholder: "Select role..."
  }
}`,...(le=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ne,te,se;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: "User role",
    options: roles,
    placeholder: "Select role...",
    helperText: "Choose the appropriate role for this user"
  }
}`,...(se=(te=y.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ce,ie,de;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: "User role",
    options: roles,
    placeholder: "Select role...",
    error: "Please select a valid role"
  }
}`,...(de=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var pe,ue,me;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    label: "User role",
    options: roles,
    placeholder: "Select role...",
    helperText: "Note: Guest role is currently disabled"
  }
}`,...(me=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,ge,be;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <Select {...args}>
      <option value="js">JavaScript</option>
      <option value="ts">TypeScript</option>
      <option value="py">Python</option>
      <option value="java">Java</option>
      <option value="go" disabled>
        Go (Coming Soon)
      </option>
    </Select>,
  args: {
    label: "Programming Language",
    placeholder: "Select language...",
    onChange: action("language-changed")
  }
}`,...(be=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var xe,fe,ve;N.parameters={...N.parameters,docs:{...(xe=N.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
      <Select size="sm" label="Small select" options={fruits} placeholder="Select..." onChange={action("small-changed")} />
      <Select size="md" label="Medium select" options={fruits} placeholder="Select..." onChange={action("medium-changed")} />
      <Select size="lg" label="Large select" options={fruits} placeholder="Select..." onChange={action("large-changed")} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran select yang tersedia dari small hingga large."
      }
    }
  }
}`,...(ve=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Se,ye,je;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      country: "",
      role: "",
      language: ""
    });
    const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
      action(\`\${field}-changed\`)(value);
    };
    return <div className="space-y-4 p-6 bg-secondary-50 rounded-lg">
        <h3 className="text-lg font-medium text-secondary-900 mb-4">
          User Profile
        </h3>

        <Select label="Country" leftIcon={<LocationIcon />} options={countries} placeholder="Select your country..." value={formData.country} onChange={handleChange("country")} helperText="Choose your current location" />

        <Select label="Role" leftIcon={<UserIcon />} options={roles} placeholder="Select your role..." value={formData.role} onChange={handleChange("role")} helperText="This determines your access level" />

        <Select label="Preferred Language" placeholder="Select programming language..." value={formData.language} onChange={handleChange("language")}>
          <option value="js">JavaScript</option>
          <option value="ts">TypeScript</option>
          <option value="py">Python</option>
          <option value="java">Java</option>
          <option value="go">Go</option>
        </Select>

        <div className="mt-6 p-4 bg-white rounded border">
          <h4 className="font-medium text-secondary-800 mb-2">
            Selected Values:
          </h4>
          <pre className="text-sm text-secondary-600">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Contoh interaktif penggunaan Select dalam form. Pilih opsi untuk melihat perubahan dan check Actions panel."
      }
    }
  }
}`,...(je=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:je.source}}};const Oe=["Default","WithPlaceholder","WithoutLabel","Disabled","Small","Medium","Large","WithLeftIcon","WithUserIcon","WithHelperText","WithError","WithDisabledOptions","WithChildren","AllSizes","InteractiveForm"];export{N as AllSizes,u as Default,g as Disabled,L as InteractiveForm,f as Large,x as Medium,b as Small,k as WithChildren,C as WithDisabledOptions,j as WithError,y as WithHelperText,v as WithLeftIcon,m as WithPlaceholder,S as WithUserIcon,h as WithoutLabel,Oe as __namedExportsOrder,Ge as default};
