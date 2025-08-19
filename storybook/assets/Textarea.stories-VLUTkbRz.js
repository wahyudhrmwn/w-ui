import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as d}from"./index-B-lxVbXh.js";import{R as c,r as W}from"./index-DkvSDgFW.js";import{c as E}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const ea={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-3 text-base"},aa={none:"resize-none",vertical:"resize-y",horizontal:"resize-x",both:"resize"},t=c.forwardRef(({label:a,helperText:l,error:s,size:i="md",resize:u="vertical",autoResize:r=!1,showCounter:n=!1,maxLength:m,className:$e,id:Ke,value:h,onChange:H,rows:Oe=3,...Ue},Je)=>{const q=Ke||`textarea-${Math.random().toString(36).substr(2,9)}`,I=!!s,[Ge,Qe]=c.useState(h||""),F=h!==void 0?h:Ge,_=String(F).length,V=c.useRef(null);c.useImperativeHandle(Je,()=>V.current);const A=c.useCallback(()=>{const o=V.current;o&&r&&(o.style.height="auto",o.style.height=`${o.scrollHeight}px`)},[r]);c.useEffect(()=>{r&&A()},[F,A]);const Xe=o=>{const Ze=o.target.value;h===void 0&&Qe(Ze),r&&setTimeout(A,0),H&&H(o)};return e.jsxs("div",{className:"w-full",children:[a&&e.jsx("label",{htmlFor:q,className:"block text-sm font-medium text-secondary-700 mb-1",children:a}),e.jsx("div",{className:"relative",children:e.jsx("textarea",{ref:V,id:q,rows:r?1:Oe,maxLength:m,className:E("block w-full rounded-lg border transition-colors duration-200","focus:outline-none focus:ring-2 focus:ring-offset-0","disabled:opacity-50 disabled:cursor-not-allowed",ea[i],aa[u],r&&"overflow-hidden",I?"border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500":"border-secondary-300 text-secondary-900 placeholder-secondary-400 focus:ring-primary-500 focus:border-primary-500",$e),value:F,onChange:Xe,...Ue})}),e.jsxs("div",{className:"flex items-center justify-between mt-1",children:[e.jsx("div",{className:"flex-1",children:(l||s)&&e.jsx("p",{className:E("text-sm",I?"text-red-600":"text-secondary-500"),children:s||l})}),n&&e.jsx("div",{className:"flex-shrink-0 ml-2",children:e.jsxs("p",{className:E("text-sm",m&&_>m*.9?"text-red-600":"text-secondary-500"),children:[_,m&&`/${m}`]})})]})]})});t.displayName="Textarea";try{t.displayName="Textarea",t.__docgenInfo={description:"",displayName:"Textarea",props:{label:{defaultValue:null,description:"Label untuk textarea",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text di bawah textarea",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Ukuran textarea",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},resize:{defaultValue:{value:"vertical"},description:"Resize behavior",name:"resize",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'},{value:'"none"'},{value:'"both"'}]}},autoResize:{defaultValue:{value:"false"},description:"Auto resize berdasarkan konten",name:"autoResize",required:!1,type:{name:"boolean"}},showCounter:{defaultValue:{value:"false"},description:"Menampilkan character counter",name:"showCounter",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Maximum characters (untuk counter)",name:"maxLength",required:!1,type:{name:"number"}}}}}catch{}const ia={title:"Form Controls/Textarea",component:t,parameters:{layout:"centered",docs:{description:{component:"Komponen Textarea untuk input teks multiline. Mendukung auto-resize, character counter, berbagai ukuran, dan resize behavior. Cocok untuk input seperti komentar, deskripsi, atau pesan panjang."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Ukuran textarea"},resize:{control:"select",options:["none","vertical","horizontal","both"],description:"Behavior resize textarea"},label:{control:"text",description:"Label untuk textarea"},placeholder:{control:"text",description:"Placeholder text"},helperText:{control:"text",description:"Helper text di bawah textarea"},error:{control:"text",description:"Error message"},autoResize:{control:"boolean",description:"Auto resize berdasarkan konten"},showCounter:{control:"boolean",description:"Tampilkan character counter"},maxLength:{control:"number",description:"Maximum characters"},rows:{control:"number",description:"Jumlah baris default"},disabled:{control:"boolean",description:"Disable textarea"},onChange:{action:"changed"}},args:{onChange:d("changed"),label:"Message",placeholder:"Enter your message..."}},p={args:{label:"Message",placeholder:"Enter your message..."}},g={args:{label:"Description",placeholder:"Describe your project in detail...",rows:4}},x={args:{placeholder:"What's on your mind?",rows:3}},b={args:{label:"Disabled textarea",placeholder:"Cannot edit...",disabled:!0,value:"This content cannot be edited"}},v={args:{size:"sm",label:"Small textarea",placeholder:"Small sized textarea..."}},f={args:{size:"md",label:"Medium textarea",placeholder:"Medium sized textarea..."}},z={args:{size:"lg",label:"Large textarea",placeholder:"Large sized textarea..."}},y={args:{label:"No resize",placeholder:"This textarea cannot be resized...",resize:"none",rows:4}},k={args:{label:"Vertical resize",placeholder:"This textarea can be resized vertically...",resize:"vertical",rows:4}},C={args:{label:"Horizontal resize",placeholder:"This textarea can be resized horizontally...",resize:"horizontal",rows:4}},w={args:{label:"Resize both",placeholder:"This textarea can be resized in both directions...",resize:"both",rows:4}},T={args:{label:"Auto resize",placeholder:"Start typing and watch this textarea grow automatically...",autoResize:!0}},S={args:{label:"Comment",placeholder:"Leave a comment...",showCounter:!0,maxLength:200,helperText:"Share your thoughts (max 200 characters)"}},j={args:{label:"Feedback",placeholder:"Your feedback...",showCounter:!0,helperText:"We value your feedback"}},N={args:{label:"Product Description",placeholder:"Describe your product...",helperText:"Provide a detailed description to attract more customers",rows:5}},D={args:{label:"Message",placeholder:"Your message...",error:"Message is required and must be at least 10 characters",value:"Too short"}},R={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(t,{size:"sm",label:"Small textarea",placeholder:"Small sized...",onChange:d("small-changed")}),e.jsx(t,{size:"md",label:"Medium textarea",placeholder:"Medium sized...",onChange:d("medium-changed")}),e.jsx(t,{size:"lg",label:"Large textarea",placeholder:"Large sized...",onChange:d("large-changed")})]}),parameters:{docs:{description:{story:"Semua ukuran textarea yang tersedia dari small hingga large."}}}},L={render:()=>{const[a,l]=W.useState({feedback:"",description:"",notes:""}),s=i=>u=>{const r=u.target.value;l(n=>({...n,[i]:r})),d(`${i}-changed`)(r)};return e.jsxs("div",{className:"space-y-6 p-6 bg-secondary-50 rounded-lg w-96",children:[e.jsx("h3",{className:"text-lg font-medium text-secondary-900 mb-4",children:"Feedback Form"}),e.jsx(t,{label:"Product Feedback",placeholder:"Tell us what you think about our product...",value:a.feedback,onChange:s("feedback"),showCounter:!0,maxLength:500,helperText:"Your feedback helps us improve",rows:4}),e.jsx(t,{label:"Issue Description",placeholder:"Describe the issue you're experiencing...",value:a.description,onChange:s("description"),autoResize:!0,helperText:"Be as detailed as possible"}),e.jsx(t,{label:"Additional Notes",placeholder:"Any additional information...",value:a.notes,onChange:s("notes"),showCounter:!0,resize:"none",rows:3,helperText:"Optional field"}),e.jsxs("div",{className:"mt-6 p-4 bg-white rounded border",children:[e.jsx("h4",{className:"font-medium text-secondary-800 mb-2",children:"Form Data:"}),e.jsxs("div",{className:"space-y-2 text-sm text-secondary-600",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Feedback:"})," ",a.feedback.length," chars"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Description:"})," ",a.description.length," chars"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Notes:"})," ",a.notes.length," chars"]})]})]})]})},parameters:{docs:{description:{story:"Contoh interaktif penggunaan Textarea dalam form feedback. Ketik untuk melihat auto-resize dan character counter bekerja."}}}},M={render:()=>{const[a,l]=W.useState(""),[s,i]=W.useState(!0),u=r=>{const n=r.target.value;l(n),i(n.length>=10),d("content-changed")(n)};return e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsx(t,{label:"Smart Textarea",placeholder:"This textarea has validation, auto-resize, and smart counter...",value:a,onChange:u,autoResize:!0,showCounter:!0,maxLength:300,error:!s&&a.length>0?"Minimum 10 characters required":void 0,helperText:s?"Looking good!":void 0}),e.jsxs("div",{className:"p-3 bg-secondary-100 rounded text-sm",children:[e.jsx("p",{children:e.jsx("strong",{children:"Features:"})}),e.jsxs("ul",{className:"list-disc list-inside mt-1 space-y-1",children:[e.jsx("li",{children:"Auto-resize as you type"}),e.jsx("li",{children:"Character counter with limit"}),e.jsx("li",{children:"Real-time validation"}),e.jsx("li",{children:"Dynamic helper text/error"})]})]})]})},parameters:{docs:{description:{story:"Demo fitur-fitur advanced textarea termasuk validasi real-time dan smart feedback."}}}};var P,B,Y;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Enter your message..."
  }
}`,...(Y=(B=p.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};var $,K,O;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "Describe your project in detail...",
    rows: 4
  }
}`,...(O=(K=g.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var U,J,G;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: "What's on your mind?",
    rows: 3
  }
}`,...(G=(J=x.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var Q,X,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: "Disabled textarea",
    placeholder: "Cannot edit...",
    disabled: true,
    value: "This content cannot be edited"
  }
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    size: "sm",
    label: "Small textarea",
    placeholder: "Small sized textarea..."
  }
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,se,ne;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    size: "md",
    label: "Medium textarea",
    placeholder: "Medium sized textarea..."
  }
}`,...(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,le,ie;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    size: "lg",
    label: "Large textarea",
    placeholder: "Large sized textarea..."
  }
}`,...(ie=(le=z.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: "No resize",
    placeholder: "This textarea cannot be resized...",
    resize: "none",
    rows: 4
  }
}`,...(ue=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,he,pe;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: "Vertical resize",
    placeholder: "This textarea can be resized vertically...",
    resize: "vertical",
    rows: 4
  }
}`,...(pe=(he=k.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var ge,xe,be;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: "Horizontal resize",
    placeholder: "This textarea can be resized horizontally...",
    resize: "horizontal",
    rows: 4
  }
}`,...(be=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ve,fe,ze;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: "Resize both",
    placeholder: "This textarea can be resized in both directions...",
    resize: "both",
    rows: 4
  }
}`,...(ze=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:ze.source}}};var ye,ke,Ce;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: "Auto resize",
    placeholder: "Start typing and watch this textarea grow automatically...",
    autoResize: true
  }
}`,...(Ce=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var we,Te,Se;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    label: "Comment",
    placeholder: "Leave a comment...",
    showCounter: true,
    maxLength: 200,
    helperText: "Share your thoughts (max 200 characters)"
  }
}`,...(Se=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var je,Ne,De;j.parameters={...j.parameters,docs:{...(je=j.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    label: "Feedback",
    placeholder: "Your feedback...",
    showCounter: true,
    helperText: "We value your feedback"
  }
}`,...(De=(Ne=j.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var Re,Le,Me;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    label: "Product Description",
    placeholder: "Describe your product...",
    helperText: "Provide a detailed description to attract more customers",
    rows: 5
  }
}`,...(Me=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Fe,Ve,Ae;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Your message...",
    error: "Message is required and must be at least 10 characters",
    value: "Too short"
  }
}`,...(Ae=(Ve=D.parameters)==null?void 0:Ve.docs)==null?void 0:Ae.source}}};var Ee,We,He;R.parameters={...R.parameters,docs:{...(Ee=R.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Textarea size="sm" label="Small textarea" placeholder="Small sized..." onChange={action("small-changed")} />
      <Textarea size="md" label="Medium textarea" placeholder="Medium sized..." onChange={action("medium-changed")} />
      <Textarea size="lg" label="Large textarea" placeholder="Large sized..." onChange={action("large-changed")} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran textarea yang tersedia dari small hingga large."
      }
    }
  }
}`,...(He=(We=R.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var qe,Ie,_e;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      feedback: "",
      description: "",
      notes: ""
    });
    const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
      action(\`\${field}-changed\`)(value);
    };
    return <div className="space-y-6 p-6 bg-secondary-50 rounded-lg w-96">
        <h3 className="text-lg font-medium text-secondary-900 mb-4">
          Feedback Form
        </h3>

        <Textarea label="Product Feedback" placeholder="Tell us what you think about our product..." value={formData.feedback} onChange={handleChange("feedback")} showCounter maxLength={500} helperText="Your feedback helps us improve" rows={4} />

        <Textarea label="Issue Description" placeholder="Describe the issue you're experiencing..." value={formData.description} onChange={handleChange("description")} autoResize helperText="Be as detailed as possible" />

        <Textarea label="Additional Notes" placeholder="Any additional information..." value={formData.notes} onChange={handleChange("notes")} showCounter resize="none" rows={3} helperText="Optional field" />

        <div className="mt-6 p-4 bg-white rounded border">
          <h4 className="font-medium text-secondary-800 mb-2">Form Data:</h4>
          <div className="space-y-2 text-sm text-secondary-600">
            <div>
              <strong>Feedback:</strong> {formData.feedback.length} chars
            </div>
            <div>
              <strong>Description:</strong> {formData.description.length} chars
            </div>
            <div>
              <strong>Notes:</strong> {formData.notes.length} chars
            </div>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Contoh interaktif penggunaan Textarea dalam form feedback. Ketik untuk melihat auto-resize dan character counter bekerja."
      }
    }
  }
}`,...(_e=(Ie=L.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};var Pe,Be,Ye;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => {
    const [content, setContent] = useState("");
    const [isValid, setIsValid] = useState(true);
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setContent(value);
      setIsValid(value.length >= 10);
      action("content-changed")(value);
    };
    return <div className="space-y-4 w-96">
        <Textarea label="Smart Textarea" placeholder="This textarea has validation, auto-resize, and smart counter..." value={content} onChange={handleChange} autoResize showCounter maxLength={300} error={!isValid && content.length > 0 ? "Minimum 10 characters required" : undefined} helperText={isValid ? "Looking good!" : undefined} />

        <div className="p-3 bg-secondary-100 rounded text-sm">
          <p>
            <strong>Features:</strong>
          </p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Auto-resize as you type</li>
            <li>Character counter with limit</li>
            <li>Real-time validation</li>
            <li>Dynamic helper text/error</li>
          </ul>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demo fitur-fitur advanced textarea termasuk validasi real-time dan smart feedback."
      }
    }
  }
}`,...(Ye=(Be=M.parameters)==null?void 0:Be.docs)==null?void 0:Ye.source}}};const ca=["Default","WithPlaceholder","WithoutLabel","Disabled","Small","Medium","Large","ResizeNone","ResizeVertical","ResizeHorizontal","ResizeBoth","AutoResize","WithCounter","CounterNoLimit","WithHelperText","WithError","AllSizes","InteractiveForm","AdvancedFeatures"];export{M as AdvancedFeatures,R as AllSizes,T as AutoResize,j as CounterNoLimit,p as Default,b as Disabled,L as InteractiveForm,z as Large,f as Medium,w as ResizeBoth,C as ResizeHorizontal,y as ResizeNone,k as ResizeVertical,v as Small,S as WithCounter,D as WithError,N as WithHelperText,g as WithPlaceholder,x as WithoutLabel,ca as __namedExportsOrder,ia as default};
