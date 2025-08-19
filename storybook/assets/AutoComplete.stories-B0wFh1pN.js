import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as t}from"./index-B-lxVbXh.js";import{r as n}from"./index-DkvSDgFW.js";import{c as k}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const pa={sm:{input:"px-2 py-1 text-xs",option:"px-2 py-1 text-xs",icon:"w-3 h-3"},md:{input:"px-3 py-2 text-sm",option:"px-3 py-2 text-sm",icon:"w-4 h-4"},lg:{input:"px-4 py-3 text-base",option:"px-4 py-3 text-base",icon:"w-5 h-5"}},ha=(s,i)=>(i.label||i.value).toLowerCase().includes(s.toLowerCase()),m=({value:s,defaultValue:i="",dataSource:g=[],onChange:o,onSelect:p,onSearch:r,onFocus:c,onBlur:w,placeholder:Ze="Input here",disabled:N=!1,allowClear:Qe=!1,autoFocus:X=!1,backfill:G=!1,defaultActiveFirstOption:j=!0,filterOption:E=!0,notFoundContent:Xe="Not Found",size:Ye="md",status:z,prefix:Y,suffix:ee,className:ea,popupClassName:aa,style:ta,dropdownStyle:na,dropdownMatchSelectWidth:ae=!0,...oa})=>{const[ra,la]=n.useState(i),[f,b]=n.useState(!1),[x,u]=n.useState(-1),[te,ne]=n.useState(!1),y=n.useRef(null),J=n.useRef(null),Z=n.useRef(null),S=s!==void 0?s:ra,V=pa[Ye],L=n.useMemo(()=>g.map(a=>typeof a=="string"?{value:a,label:a}:a),[g]),d=n.useMemo(()=>!S.trim()||E===!1?L:typeof E=="function"?L.filter(a=>E(S,a)):L.filter(a=>ha(S,a)),[L,S,E]),v=n.useCallback(a=>{s===void 0&&la(a),o==null||o(a),r==null||r(a)},[s,o,r]),Q=n.useCallback(a=>{if(a.disabled)return;const l=a.value;v(l),p==null||p(l,a),b(!1),u(-1),y.current&&y.current.focus()},[v,p]),sa=n.useCallback(a=>{if(!f){(a.key==="ArrowDown"||a.key==="Enter")&&(b(!0),j&&d.length>0&&u(0));return}switch(a.key){case"ArrowDown":a.preventDefault(),u(l=>{const C=l<d.length-1?l+1:l;if(G&&C>=0){const A=d[C];A&&v(A.value)}return C});break;case"ArrowUp":a.preventDefault(),u(l=>{const C=l>0?l-1:-1;if(G&&C>=0){const A=d[C];A&&v(A.value)}return C});break;case"Enter":a.preventDefault(),x>=0&&d[x]&&Q(d[x]);break;case"Escape":b(!1),u(-1),y.current&&y.current.blur();break;case"Tab":b(!1),u(-1);break}},[f,x,d,j,G,v,Q]),ia=n.useCallback(a=>{const l=a.target.value;v(l),!f&&l&&b(!0),j&&d.length>0?u(0):u(-1)},[v,f,j,d.length]),ca=n.useCallback(a=>{ne(!0),(S||d.length>0)&&(b(!0),j&&d.length>0&&u(0)),c==null||c(a)},[S,d.length,j,c]),da=n.useCallback(a=>{ne(!1),setTimeout(()=>{b(!1),u(-1)},200),w==null||w(a)},[w]),ua=n.useCallback(()=>{N||(v(""),b(!1),u(-1),y.current&&y.current.focus())},[N,v]);n.useEffect(()=>{if(f&&x>=0&&Z.current){const a=Z.current.children[x];a&&a.scrollIntoView({block:"nearest",behavior:"smooth"})}},[f,x]),n.useEffect(()=>{const a=l=>{J.current&&!J.current.contains(l.target)&&(b(!1),u(-1))};if(f)return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[f]),n.useEffect(()=>{X&&y.current&&y.current.focus()},[X]);const ma=()=>e.jsx("div",{ref:Z,className:k("absolute z-50 mt-1 bg-white border border-secondary-300 rounded-md shadow-lg max-h-64 overflow-auto",V.option.replace("px-","").replace("py-","").replace("text-",""),{"w-full":ae},aa),style:{minWidth:ae?"100%":"200px",...na},children:d.length===0?e.jsx("div",{className:k("text-center text-secondary-500 py-4",V.option),children:Xe}):d.map((a,l)=>e.jsx("div",{className:k("cursor-pointer transition-colors border-l-2 border-transparent",V.option,{"bg-primary-50 text-primary-700 border-primary-500":l===x,"hover:bg-secondary-50":!a.disabled&&l!==x,"opacity-50 cursor-not-allowed":a.disabled}),onClick:()=>Q(a),onMouseEnter:()=>u(l),children:e.jsx("div",{className:"truncate",children:a.label||a.value})},a.value))});return e.jsxs("div",{ref:J,className:k("relative",ea),style:ta,...oa,children:[e.jsxs("div",{className:k("flex items-center border border-secondary-300 rounded-md bg-white transition-colors",V.input,{"border-primary-500 ring-2 ring-primary-500 ring-opacity-20":te&&!z,"border-red-500 ring-2 ring-red-500 ring-opacity-20":z==="error","border-yellow-500 ring-2 ring-yellow-500 ring-opacity-20":z==="warning","hover:border-secondary-400":!N&&!te&&!z,"opacity-50 cursor-not-allowed":N}),children:[Y&&e.jsx("div",{className:"flex items-center mr-2 text-secondary-500",children:Y}),e.jsx("input",{ref:y,type:"text",value:S,onChange:ia,onKeyDown:sa,onFocus:ca,onBlur:da,placeholder:Ze,disabled:N,className:"flex-1 bg-transparent outline-none"}),e.jsxs("div",{className:"flex items-center ml-2 space-x-1",children:[Qe&&S&&!N&&e.jsx("button",{onClick:ua,className:"text-secondary-400 hover:text-secondary-600 transition-colors",children:e.jsx("svg",{className:k(V.icon),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),ee&&e.jsx("div",{className:"flex items-center text-secondary-500",children:ee}),e.jsx("svg",{className:k("text-secondary-400 transition-transform",V.icon,{"rotate-180":f}),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),f&&ma()]})};try{m.displayName="AutoComplete",m.__docgenInfo={description:"",displayName:"AutoComplete",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string"}},dataSource:{defaultValue:{value:"[]"},description:"",name:"dataSource",required:!1,type:{name:"AutoCompleteDataSource"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((value: string, option: string | AutoCompleteOption) => void)"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},placeholder:{defaultValue:{value:"Input here"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},allowClear:{defaultValue:{value:"false"},description:"",name:"allowClear",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"false"},description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},backfill:{defaultValue:{value:"false"},description:"",name:"backfill",required:!1,type:{name:"boolean"}},defaultActiveFirstOption:{defaultValue:{value:"true"},description:"",name:"defaultActiveFirstOption",required:!1,type:{name:"boolean"}},filterOption:{defaultValue:{value:"true"},description:"",name:"filterOption",required:!1,type:{name:"boolean | ((inputValue: string, option: AutoCompleteOption) => boolean)"}},notFoundContent:{defaultValue:{value:"Not Found"},description:"",name:"notFoundContent",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'}]}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},popupClassName:{defaultValue:null,description:"",name:"popupClassName",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},dropdownStyle:{defaultValue:null,description:"",name:"dropdownStyle",required:!1,type:{name:"CSSProperties"}},dropdownMatchSelectWidth:{defaultValue:{value:"true"},description:"",name:"dropdownMatchSelectWidth",required:!1,type:{name:"boolean"}}}}}catch{}const Sa={title:"Form Controls/AutoComplete",component:m,parameters:{layout:"centered",docs:{description:{component:"Komponen AutoComplete untuk input dengan intelligent suggestions. Mendukung keyboard navigation, custom filtering, dan berbagai konfigurasi untuk pengalaman user yang optimal dalam pencarian dan pemilihan data."}}},tags:["autodocs"],argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Apakah disabled"},allowClear:{control:{type:"boolean"},description:"Apakah menampilkan tombol clear"},autoFocus:{control:{type:"boolean"},description:"Apakah auto focus saat mount"},backfill:{control:{type:"boolean"},description:"Apakah mengisi input saat navigasi keyboard"},defaultActiveFirstOption:{control:{type:"boolean"},description:"Apakah default active first option"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran autocomplete"},status:{control:{type:"select"},options:[void 0,"error","warning"],description:"Status validation"},dropdownMatchSelectWidth:{control:{type:"boolean"},description:"Apakah lebar dropdown sama dengan input"}}},h=["Afghanistan","Albania","Algeria","Argentina","Australia","Austria","Bangladesh","Belgium","Brazil","Canada","Chile","China","Colombia","Denmark","Egypt","Finland","France","Germany","Greece","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Japan","Jordan","Kazakhstan","Kenya","Malaysia","Mexico","Netherlands","New Zealand","Norway","Pakistan","Philippines","Poland","Portugal","Russia","Saudi Arabia","Singapore","South Africa","South Korea","Spain","Sri Lanka","Sweden","Switzerland","Thailand","Turkey","Ukraine","United Kingdom","United States","Vietnam"],oe=["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","zoho.com","aol.com"],I=[{value:"javascript",label:"JavaScript",data:{type:"interpreted",year:1995}},{value:"typescript",label:"TypeScript",data:{type:"compiled",year:2012}},{value:"python",label:"Python",data:{type:"interpreted",year:1991}},{value:"java",label:"Java",data:{type:"compiled",year:1995}},{value:"cpp",label:"C++",data:{type:"compiled",year:1985}},{value:"csharp",label:"C#",data:{type:"compiled",year:2e3}},{value:"go",label:"Go",data:{type:"compiled",year:2009}},{value:"rust",label:"Rust",data:{type:"compiled",year:2010}},{value:"php",label:"PHP",data:{type:"interpreted",year:1995}},{value:"ruby",label:"Ruby",data:{type:"interpreted",year:1995}},{value:"swift",label:"Swift",data:{type:"compiled",year:2014}},{value:"kotlin",label:"Kotlin",data:{type:"compiled",year:2011}},{value:"scala",label:"Scala",data:{type:"compiled",year:2003}},{value:"r",label:"R",data:{type:"interpreted",year:1993}},{value:"matlab",label:"MATLAB",disabled:!0,data:{type:"interpreted",year:1984}}],D={args:{dataSource:h,placeholder:"Select a country",onChange:t("value-changed"),onSelect:t("option-selected"),onSearch:t("search-performed")}},M={args:{dataSource:h,defaultValue:"Indonesia",placeholder:"Select a country",onChange:t("value-changed"),onSelect:t("option-selected")}},q={args:{dataSource:I,allowClear:!0,placeholder:"Type programming language",onChange:t("value-changed"),onSelect:t("language-selected")}},O={render:()=>{const[s,i]=n.useState(""),g=o=>{if(!o.includes("@"))return oe.map(c=>`${o}@${c}`);const[p,r]=o.split("@");return r?oe.filter(c=>c.toLowerCase().includes(r.toLowerCase())).map(c=>`${p}@${c}`):[]};return e.jsxs("div",{className:"w-80",children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Email Address"}),e.jsx(m,{value:s,dataSource:g(s),placeholder:"Enter your email",allowClear:!0,onChange:o=>{i(o),t("email-changed")(o)},onSelect:o=>{i(o),t("email-selected")(o)},prefix:e.jsx("svg",{className:"w-4 h-4 text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})})})]})}},F={args:{dataSource:h,backfill:!0,placeholder:"Type and use arrows (backfill enabled)",onChange:t("backfill-changed"),onSelect:t("backfill-selected")}},W={args:{dataSource:I,filterOption:(s,i)=>{var p,r;const g=i.label||i.value,o=((r=(p=i.data)==null?void 0:p.year)==null?void 0:r.toString())||"";return g.toLowerCase().includes(s.toLowerCase())||o.includes(s)},placeholder:"Search by name or year (e.g., '1995', 'java')",onChange:t("custom-filter-changed"),onSelect:t("custom-filter-selected")}},T={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Small"}),e.jsx(m,{dataSource:h.slice(0,10),size:"sm",placeholder:"Small size",onChange:t("small-changed")})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Medium (Default)"}),e.jsx(m,{dataSource:h.slice(0,10),size:"md",placeholder:"Medium size",onChange:t("medium-changed")})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Large"}),e.jsx(m,{dataSource:h.slice(0,10),size:"lg",placeholder:"Large size",onChange:t("large-changed")})]})]})},B={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Normal"}),e.jsx(m,{dataSource:h.slice(0,8),placeholder:"Normal state",onChange:t("normal-changed")})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1 text-yellow-700",children:"Warning"}),e.jsx(m,{dataSource:h.slice(0,8),status:"warning",placeholder:"Warning state",onChange:t("warning-changed")}),e.jsx("p",{className:"text-xs text-yellow-600 mt-1",children:"Please verify your selection"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1 text-red-700",children:"Error"}),e.jsx(m,{dataSource:h.slice(0,8),status:"error",placeholder:"Error state",onChange:t("error-changed")}),e.jsx("p",{className:"text-xs text-red-600 mt-1",children:"This field is required"})]})]})},R={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Search with Icon"}),e.jsx(m,{dataSource:I,placeholder:"Search programming languages",allowClear:!0,prefix:e.jsx("svg",{className:"w-4 h-4 text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),onChange:t("search-changed"),onSelect:t("search-selected")})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"URL Input"}),e.jsx(m,{dataSource:["https://google.com","https://github.com","https://stackoverflow.com","https://developer.mozilla.org"],placeholder:"Enter URL",prefix:"🌐",suffix:e.jsx("svg",{className:"w-4 h-4 text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),onChange:t("url-changed")})]})]})},P={render:()=>{const[s,i]=n.useState(""),[g,o]=n.useState([]),p=r=>{if(r){const c=h.filter(w=>w.toLowerCase().includes(r.toLowerCase()));o(c.slice(0,10))}else o([]);t("controlled-search")(r)};return e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Controlled AutoComplete"}),e.jsx(m,{value:s,dataSource:g,placeholder:"Start typing country name",allowClear:!0,onChange:r=>{i(r),t("controlled-change")(r)},onSearch:p,onSelect:(r,c)=>{i(r),t("controlled-select")({selectedValue:r,option:c})}})]}),e.jsxs("div",{className:"text-sm text-secondary-600 space-y-1",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Value:"}),' "',s,'"']}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Suggestions:"})," ",g.length," items"]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>{i("Indonesia"),o(["Indonesia"])},className:"px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded hover:bg-primary-200",children:"Set Indonesia"}),e.jsx("button",{onClick:()=>{i(""),o([])},className:"px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200",children:"Clear"})]})]})}},_={args:{dataSource:I,placeholder:"Some options are disabled",onChange:t("disabled-options-changed"),onSelect:t("disabled-options-selected")}},U={args:{dataSource:["Option 1","Option 2","Option 3","Option 4","Option 5"],filterOption:!1,placeholder:"Shows all options (no filtering)",onChange:t("no-filter-changed"),onSelect:t("no-filter-selected")}},K={args:{dataSource:I,autoFocus:!0,placeholder:"Auto focused on mount",onChange:t("autofocus-changed"),onSelect:t("autofocus-selected")}},$={args:{dataSource:["Apple","Banana","Cherry"],placeholder:"Try typing 'orange'",notFoundContent:e.jsxs("div",{className:"text-center py-4",children:[e.jsx("div",{className:"text-secondary-400 mb-2",children:"🤷‍♂️"}),e.jsx("div",{className:"text-sm text-secondary-500",children:"No fruits found"}),e.jsx("div",{className:"text-xs text-secondary-400",children:"Try: apple, banana, or cherry"})]}),onChange:t("not-found-changed"),onSelect:t("not-found-selected")}},H={args:{dataSource:h,disabled:!0,defaultValue:"Indonesia",placeholder:"Disabled autocomplete"}};var re,le,se;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    dataSource: countriesList,
    placeholder: "Select a country",
    onChange: action("value-changed"),
    onSelect: action("option-selected"),
    onSearch: action("search-performed")
  }
}`,...(se=(le=D.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ie,ce,de;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    dataSource: countriesList,
    defaultValue: "Indonesia",
    placeholder: "Select a country",
    onChange: action("value-changed"),
    onSelect: action("option-selected")
  }
}`,...(de=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;q.parameters={...q.parameters,docs:{...(ue=q.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    dataSource: programmingLanguages,
    allowClear: true,
    placeholder: "Type programming language",
    onChange: action("value-changed"),
    onSelect: action("language-selected")
  }
}`,...(pe=(me=q.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,ge,fe;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");

    // Generate email suggestions based on input
    const getEmailSuggestions = (inputValue: string) => {
      if (!inputValue.includes("@")) {
        return emailSuggestions.map(domain => \`\${inputValue}@\${domain}\`);
      }
      const [username, partialDomain] = inputValue.split("@");
      if (!partialDomain) return [];
      return emailSuggestions.filter(domain => domain.toLowerCase().includes(partialDomain.toLowerCase())).map(domain => \`\${username}@\${domain}\`);
    };
    return <div className="w-80">
        <label className="block text-sm font-medium mb-2">Email Address</label>
        <AutoComplete value={value} dataSource={getEmailSuggestions(value)} placeholder="Enter your email" allowClear onChange={newValue => {
        setValue(newValue);
        action("email-changed")(newValue);
      }} onSelect={selectedValue => {
        setValue(selectedValue);
        action("email-selected")(selectedValue);
      }} prefix={<svg className="w-4 h-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>} />
      </div>;
  }
}`,...(fe=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var be,xe,ye;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    dataSource: countriesList,
    backfill: true,
    placeholder: "Type and use arrows (backfill enabled)",
    onChange: action("backfill-changed"),
    onSelect: action("backfill-selected")
  }
}`,...(ye=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var ve,Se,Ce;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    dataSource: programmingLanguages,
    filterOption: (inputValue: string, option: AutoCompleteOption) => {
      // Custom filter: match both label and creation year
      const label = option.label || option.value;
      const year = option.data?.year?.toString() || "";
      return label.toLowerCase().includes(inputValue.toLowerCase()) || year.includes(inputValue);
    },
    placeholder: "Search by name or year (e.g., '1995', 'java')",
    onChange: action("custom-filter-changed"),
    onSelect: action("custom-filter-selected")
  }
}`,...(Ce=(Se=W.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var ke,we,Ne;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">Small</label>
        <AutoComplete dataSource={countriesList.slice(0, 10)} size="sm" placeholder="Small size" onChange={action("small-changed")} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Medium (Default)
        </label>
        <AutoComplete dataSource={countriesList.slice(0, 10)} size="md" placeholder="Medium size" onChange={action("medium-changed")} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Large</label>
        <AutoComplete dataSource={countriesList.slice(0, 10)} size="lg" placeholder="Large size" onChange={action("large-changed")} />
      </div>
    </div>
}`,...(Ne=(we=T.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var je,Ve,Le;B.parameters={...B.parameters,docs:{...(je=B.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">Normal</label>
        <AutoComplete dataSource={countriesList.slice(0, 8)} placeholder="Normal state" onChange={action("normal-changed")} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-yellow-700">
          Warning
        </label>
        <AutoComplete dataSource={countriesList.slice(0, 8)} status="warning" placeholder="Warning state" onChange={action("warning-changed")} />
        <p className="text-xs text-yellow-600 mt-1">
          Please verify your selection
        </p>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-red-700">
          Error
        </label>
        <AutoComplete dataSource={countriesList.slice(0, 8)} status="error" placeholder="Error state" onChange={action("error-changed")} />
        <p className="text-xs text-red-600 mt-1">This field is required</p>
      </div>
    </div>
}`,...(Le=(Ve=B.parameters)==null?void 0:Ve.docs)==null?void 0:Le.source}}};var Ae,Ie,Ee;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">
          Search with Icon
        </label>
        <AutoComplete dataSource={programmingLanguages} placeholder="Search programming languages" allowClear prefix={<svg className="w-4 h-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>} onChange={action("search-changed")} onSelect={action("search-selected")} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">URL Input</label>
        <AutoComplete dataSource={["https://google.com", "https://github.com", "https://stackoverflow.com", "https://developer.mozilla.org"]} placeholder="Enter URL" prefix="🌐" suffix={<svg className="w-4 h-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>} onChange={action("url-changed")} />
      </div>
    </div>
}`,...(Ee=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:Ee.source}}};var ze,De,Me;P.parameters={...P.parameters,docs:{...(ze=P.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const [dataSource, setDataSource] = useState<string[]>([]);
    const handleSearch = (searchValue: string) => {
      // Simulate API call
      if (searchValue) {
        const filtered = countriesList.filter(country => country.toLowerCase().includes(searchValue.toLowerCase()));
        setDataSource(filtered.slice(0, 10)); // Limit results
      } else {
        setDataSource([]);
      }
      action("controlled-search")(searchValue);
    };
    return <div className="space-y-4 w-80">
        <div>
          <label className="block text-sm font-medium mb-1">
            Controlled AutoComplete
          </label>
          <AutoComplete value={value} dataSource={dataSource} placeholder="Start typing country name" allowClear onChange={newValue => {
          setValue(newValue);
          action("controlled-change")(newValue);
        }} onSearch={handleSearch} onSelect={(selectedValue, option) => {
          setValue(selectedValue);
          action("controlled-select")({
            selectedValue,
            option
          });
        }} />
        </div>

        <div className="text-sm text-secondary-600 space-y-1">
          <div>
            <span className="font-medium">Value:</span> "{value}"
          </div>
          <div>
            <span className="font-medium">Suggestions:</span>{" "}
            {dataSource.length} items
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={() => {
          setValue("Indonesia");
          setDataSource(["Indonesia"]);
        }} className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded hover:bg-primary-200">
            Set Indonesia
          </button>
          <button onClick={() => {
          setValue("");
          setDataSource([]);
        }} className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200">
            Clear
          </button>
        </div>
      </div>;
  }
}`,...(Me=(De=P.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}};var qe,Oe,Fe;_.parameters={..._.parameters,docs:{...(qe=_.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    dataSource: programmingLanguages,
    // Contains disabled MATLAB option
    placeholder: "Some options are disabled",
    onChange: action("disabled-options-changed"),
    onSelect: action("disabled-options-selected")
  }
}`,...(Fe=(Oe=_.parameters)==null?void 0:Oe.docs)==null?void 0:Fe.source}}};var We,Te,Be;U.parameters={...U.parameters,docs:{...(We=U.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    dataSource: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    filterOption: false,
    placeholder: "Shows all options (no filtering)",
    onChange: action("no-filter-changed"),
    onSelect: action("no-filter-selected")
  }
}`,...(Be=(Te=U.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};var Re,Pe,_e;K.parameters={...K.parameters,docs:{...(Re=K.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    dataSource: programmingLanguages,
    autoFocus: true,
    placeholder: "Auto focused on mount",
    onChange: action("autofocus-changed"),
    onSelect: action("autofocus-selected")
  }
}`,...(_e=(Pe=K.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var Ue,Ke,$e;$.parameters={...$.parameters,docs:{...(Ue=$.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    dataSource: ["Apple", "Banana", "Cherry"],
    placeholder: "Try typing 'orange'",
    notFoundContent: <div className="text-center py-4">
        <div className="text-secondary-400 mb-2">🤷‍♂️</div>
        <div className="text-sm text-secondary-500">No fruits found</div>
        <div className="text-xs text-secondary-400">
          Try: apple, banana, or cherry
        </div>
      </div>,
    onChange: action("not-found-changed"),
    onSelect: action("not-found-selected")
  }
}`,...($e=(Ke=$.parameters)==null?void 0:Ke.docs)==null?void 0:$e.source}}};var He,Ge,Je;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    dataSource: countriesList,
    disabled: true,
    defaultValue: "Indonesia",
    placeholder: "Disabled autocomplete"
  }
}`,...(Je=(Ge=H.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};const Ca=["Default","WithDefaultValue","WithClearButton","EmailAutoComplete","WithBackfill","CustomFilter","Sizes","ValidationStates","WithPrefixSuffix","ControlledAutoComplete","DisabledOptions","NoFilterMode","AutoFocus","CustomNotFound","DisabledState"];export{K as AutoFocus,P as ControlledAutoComplete,W as CustomFilter,$ as CustomNotFound,D as Default,_ as DisabledOptions,H as DisabledState,O as EmailAutoComplete,U as NoFilterMode,T as Sizes,B as ValidationStates,F as WithBackfill,q as WithClearButton,M as WithDefaultValue,R as WithPrefixSuffix,Ca as __namedExportsOrder,Sa as default};
