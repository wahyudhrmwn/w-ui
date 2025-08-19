import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as y}from"./index-B-lxVbXh.js";import{r as fe}from"./index-DkvSDgFW.js";import{C as a}from"./Checkbox-Ri1x73G2.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";import"./clsx-B-dksMZM.js";const Ae={title:"Form Controls/Checkbox",component:a,parameters:{layout:"centered",docs:{description:{component:"Komponen Checkbox untuk pilihan boolean dan multiple selection. Mendukung label, helper text, error state, dan indeterminate state."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label untuk checkbox"},helperText:{control:"text",description:"Helper text di bawah checkbox"},error:{control:"text",description:"Error message"},size:{control:"select",options:["sm","md","lg"],description:"Ukuran checkbox"},checked:{control:"boolean",description:"Checked state"},indeterminate:{control:"boolean",description:"Indeterminate state"},disabled:{control:"boolean",description:"Disable checkbox"},onChange:{action:"changed"}},args:{onChange:y("changed")}},c={args:{label:"Default Checkbox"}},l={args:{label:"Checked Checkbox",defaultChecked:!0}},o={args:{label:"Accept Terms and Conditions",helperText:"By checking this box, you agree to our terms and conditions."}},i={args:{label:"Required Checkbox",error:"You must accept the terms to continue",helperText:"This field is required"}},d={args:{size:"sm",label:"Small Checkbox",defaultChecked:!0}},m={args:{size:"md",label:"Medium Checkbox",defaultChecked:!0}},h={args:{size:"lg",label:"Large Checkbox",defaultChecked:!0}},u={args:{label:"Disabled Checkbox",disabled:!0}},p={args:{label:"Disabled Checked",disabled:!0,defaultChecked:!0}},b={args:{label:"Indeterminate State",indeterminate:!0,helperText:"This represents a partially selected state"}},k={args:{helperText:"Checkbox without label"}},x={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{size:"sm",label:"Small checkbox",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium checkbox",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large checkbox",defaultChecked:!0})]}),parameters:{docs:{description:{story:"Semua ukuran checkbox yang tersedia."}},controls:{disable:!0}}},g={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Unchecked"}),e.jsx(a,{label:"Checked",defaultChecked:!0}),e.jsx(a,{label:"Indeterminate",indeterminate:!0}),e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled Checked",disabled:!0,defaultChecked:!0}),e.jsx(a,{label:"With Error",error:"This is an error message"})]}),parameters:{docs:{description:{story:"Semua state checkbox yang tersedia."}},controls:{disable:!0}}},C={render:()=>e.jsx("div",{className:"w-80 space-y-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-3",children:"Notification Preferences"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{label:"Email Notifications",helperText:"Receive notifications via email",defaultChecked:!0}),e.jsx(a,{label:"Push Notifications",helperText:"Receive push notifications on your device"}),e.jsx(a,{label:"SMS Notifications",helperText:"Receive notifications via SMS"}),e.jsx(a,{label:"Marketing Emails",helperText:"Receive promotional emails and updates",defaultChecked:!0})]})]})}),parameters:{docs:{description:{story:"Contoh penggunaan Checkbox dalam form preferences."}},controls:{disable:!0}}},f={render:()=>{const be=()=>{const[r,v]=fe.useState([{id:1,label:"Item 1",checked:!0},{id:2,label:"Item 2",checked:!0},{id:3,label:"Item 3",checked:!1},{id:4,label:"Item 4",checked:!1}]),n=r.filter(t=>t.checked).length,ke=n===r.length,xe=n>0&&n<r.length,ge=t=>{v(r.map(s=>({...s,checked:t}))),y("select-all")(t)},Ce=(t,s)=>{v(r.map(S=>S.id===t?{...S,checked:s}:S)),y("item-changed")({id:t,checked:s})};return e.jsxs("div",{className:"w-80 space-y-3",children:[e.jsx(a,{label:"Select All",checked:ke,indeterminate:xe,helperText:`${n} of ${r.length} items selected`,onChange:t=>ge(t.target.checked)}),e.jsx("div",{className:"ml-6 space-y-2 border-l-2 border-gray-200 pl-4",children:r.map(t=>e.jsx(a,{label:t.label,checked:t.checked,onChange:s=>Ce(t.id,s.target.checked)},t.id))})]})};return e.jsx(be,{})},parameters:{docs:{description:{story:'Contoh interaktif "Select All" functionality dengan state management yang benar. Checkbox parent akan menunjukkan indeterminate state ketika sebagian item dipilih.'}},controls:{disable:!0}}};var T,j,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Default Checkbox"
  }
}`,...(I=(j=c.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var N,A,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Checked Checkbox",
    defaultChecked: true
  }
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var z,E,M;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Accept Terms and Conditions",
    helperText: "By checking this box, you agree to our terms and conditions."
  }
}`,...(M=(E=o.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var R,W,L;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Required Checkbox",
    error: "You must accept the terms to continue",
    helperText: "This field is required"
  }
}`,...(L=(W=i.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var w,P,q;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "sm",
    label: "Small Checkbox",
    defaultChecked: true
  }
}`,...(q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var $,F,H;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: "md",
    label: "Medium Checkbox",
    defaultChecked: true
  }
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var U,B,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: "lg",
    label: "Large Checkbox",
    defaultChecked: true
  }
}`,...(Y=(B=h.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};var _,K,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Disabled Checkbox",
    disabled: true
  }
}`,...(O=(K=u.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var G,J,Q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: "Disabled Checked",
    disabled: true,
    defaultChecked: true
  }
}`,...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,X,Z;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "Indeterminate State",
    indeterminate: true,
    helperText: "This represents a partially selected state"
  }
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,te;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    helperText: "Checkbox without label"
  }
}`,...(te=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,se,ne;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox size="sm" label="Small checkbox" defaultChecked />
      <Checkbox size="md" label="Medium checkbox" defaultChecked />
      <Checkbox size="lg" label="Large checkbox" defaultChecked />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran checkbox yang tersedia."
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(ne=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ce,le,oe;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" disabled defaultChecked />
      <Checkbox label="With Error" error="This is an error message" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua state checkbox yang tersedia."
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(oe=(le=g.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ie,de,me;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">
          Notification Preferences
        </h3>
        <div className="space-y-3">
          <Checkbox label="Email Notifications" helperText="Receive notifications via email" defaultChecked />
          <Checkbox label="Push Notifications" helperText="Receive push notifications on your device" />
          <Checkbox label="SMS Notifications" helperText="Receive notifications via SMS" />
          <Checkbox label="Marketing Emails" helperText="Receive promotional emails and updates" defaultChecked />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan Checkbox dalam form preferences."
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(me=(de=C.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var he,ue,pe;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const SelectAllWrapper = () => {
      const [items, setItems] = useState([{
        id: 1,
        label: "Item 1",
        checked: true
      }, {
        id: 2,
        label: "Item 2",
        checked: true
      }, {
        id: 3,
        label: "Item 3",
        checked: false
      }, {
        id: 4,
        label: "Item 4",
        checked: false
      }]);
      const checkedCount = items.filter(item => item.checked).length;
      const isAllChecked = checkedCount === items.length;
      const isIndeterminate = checkedCount > 0 && checkedCount < items.length;
      const handleSelectAll = (checked: boolean) => {
        setItems(items.map(item => ({
          ...item,
          checked
        })));
        action("select-all")(checked);
      };
      const handleItemChange = (id: number, checked: boolean) => {
        setItems(items.map(item => item.id === id ? {
          ...item,
          checked
        } : item));
        action("item-changed")({
          id,
          checked
        });
      };
      return <div className="w-80 space-y-3">
          <Checkbox label="Select All" checked={isAllChecked} indeterminate={isIndeterminate} helperText={\`\${checkedCount} of \${items.length} items selected\`} onChange={e => handleSelectAll(e.target.checked)} />
          <div className="ml-6 space-y-2 border-l-2 border-gray-200 pl-4">
            {items.map(item => <Checkbox key={item.id} label={item.label} checked={item.checked} onChange={e => handleItemChange(item.id, e.target.checked)} />)}
          </div>
        </div>;
    };
    return <SelectAllWrapper />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Contoh interaktif "Select All" functionality dengan state management yang benar. Checkbox parent akan menunjukkan indeterminate state ketika sebagian item dipilih.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(pe=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const De=["Default","Checked","WithHelperText","WithError","Small","Medium","Large","Disabled","DisabledChecked","Indeterminate","WithoutLabel","AllSizes","AllStates","PreferencesForm","SelectAllExample"];export{x as AllSizes,g as AllStates,l as Checked,c as Default,u as Disabled,p as DisabledChecked,b as Indeterminate,h as Large,m as Medium,C as PreferencesForm,f as SelectAllExample,d as Small,i as WithError,o as WithHelperText,k as WithoutLabel,De as __namedExportsOrder,Ae as default};
