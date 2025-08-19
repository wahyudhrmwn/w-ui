import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as d}from"./index-B-lxVbXh.js";import{r as t}from"./index-DkvSDgFW.js";import{c as k}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const fa={sm:{input:"px-2 py-1 text-xs",popup:"text-xs",option:"px-2 py-1 text-xs",icon:"w-3 h-3"},md:{input:"px-3 py-2 text-sm",popup:"text-sm",option:"px-3 py-2 text-sm",icon:"w-4 h-4"},lg:{input:"px-4 py-3 text-base",popup:"text-base",option:"px-4 py-3 text-base",icon:"w-5 h-5"}},O=({options:r=[],value:o,defaultValue:M,onChange:m,onSelect:i,placeholder:L="Please select",disabled:b=!1,allowClear:A=!0,showSearch:f=!1,searchValue:y,onSearch:u,expandTrigger:B="click",changeOnSelect:z=!1,displayRender:x,fieldNames:ne={label:"label",value:"value",children:"children"},separator:F=" / ",size:Ze="md",popupPlacement:de="bottomLeft",notFoundContent:ea="Not Found",loadData:le,className:aa,popupClassName:na,style:la,...ta})=>{const[sa,ue]=t.useState(M||[]),[v,q]=t.useState(!1),[j,T]=t.useState([]),[ra,oa]=t.useState(""),[ya,pe]=t.useState([]),te=t.useRef(null),se=t.useRef(null),C=o!==void 0?o:sa,E=y!==void 0?y:ra,V=fa[Ze],N=ne.label||"label",h=ne.value||"value",c=ne.children||"children",ia=t.useCallback((a,l)=>{if(l.length===0)return null;for(const n of a)if(n[h]===l[0]){if(l.length===1)return n;const s=n[c];if(s)return ia(s,l.slice(1))}return null},[h,c]),P=t.useMemo(()=>{const a=[];let l=r;for(const n of C){const s=l.find(p=>p[h]===n);if(s)a.push(s),l=s[c]||[];else break}return a},[C,r,h,c]),me=t.useMemo(()=>x?x(P.map(a=>a[N]),P):P.map(a=>a[N]).join(F),[P,x,N,F]),ca=t.useMemo(()=>P.map(a=>a[N]).join(F),[P,N,F]),da=t.useCallback((a,l)=>{if(!l.trim())return a;const n=s=>s.filter(p=>{const S=p[N].toLowerCase().includes(l.toLowerCase()),D=p[c],R=D?n(D):[];return S||R.length>0}).map(p=>{const g=p[c];return g?{...p,[c]:n(g)}:p});return n(a)},[N,c]),re=f?da(r,E):r,ua=t.useMemo(()=>{const a=[re];let l=re;for(let n=0;n<j.length;n++){const s=j[n];if(!s)break;const p=l.find(g=>g[h]===s);if(p){const g=p[c];g&&g.length>0&&(a.push(g),l=g)}}return a},[re,j,h,c]),pa=t.useCallback((a,l)=>{if(a.disabled)return;const n=[...C.slice(0,l),a[h]],s=[...j];if(s[l]=a[h],T(s.slice(0,l+1)),le&&!a.isLeaf&&!a[c]){const R=[];let W=r;for(const ie of n){const ce=W.find(va=>va[h]===ie);ce&&(R.push(ce),W=ce[c]||[])}le(R)}const p=a[c],g=a.isLeaf||!p||p.length===0,S=[];let D=r;for(const R of n){const W=D.find(ie=>ie[h]===R);W&&(S.push(W),D=W[c]||[])}(g||z)&&(o===void 0&&ue(n),m==null||m(n,S),g&&(q(!1),T([]))),i==null||i(n,S)},[C,j,le,r,h,c,z,o,m,i]),ma=t.useCallback((a,l)=>{if(B!=="hover"||a.disabled)return;const n=[...C.slice(0,l),a[h]];pe(n);const s=[...j];s[l]=a[h],T(s.slice(0,l+1))},[B,C,j,h]),oe=t.useCallback(()=>{if(b)return;const a=[];o===void 0&&ue(a),T([]),pe([]),m==null||m(a,[])},[b,o,m]),ha=t.useCallback(a=>{const l=a.target.value;y===void 0&&oa(l),u==null||u(l)},[y,u]);t.useEffect(()=>{const a=l=>{te.current&&!te.current.contains(l.target)&&(q(!1),T([]))};if(v)return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[v]);const ga=t.useCallback(a=>{if(!b)switch(a.key){case"Escape":q(!1),T([]);break;case"Enter":v||q(!0);break;case"ArrowDown":a.preventDefault(),v||q(!0);break;case"Backspace":f&&E||A&&C.length>0&&oe();break}},[b,v,f,E,A,C.length,oe]),ba=()=>e.jsx("div",{className:k("absolute z-50 mt-1 bg-white border border-secondary-300 rounded-md shadow-lg max-h-64 overflow-hidden",V.popup,{"top-full":de.startsWith("bottom"),"bottom-full mb-1 mt-0":de.startsWith("top")},na),style:{minWidth:"100%"},children:e.jsx("div",{className:"flex",children:ua.map((a,l)=>e.jsx("div",{className:"flex-1 min-w-32 border-r border-secondary-200 last:border-r-0",children:e.jsx("div",{className:"max-h-64 overflow-y-auto",children:a.length===0?e.jsx("div",{className:k("text-center text-secondary-500 py-4",V.option),children:ea}):a.map(n=>{const s=n[h],p=n[N],g=n[c]&&n[c].length>0,S=j[l]===s,D=C[l]===s;return e.jsxs("div",{className:k("flex items-center justify-between cursor-pointer transition-colors",V.option,{"bg-primary-50 text-primary-700":S,"bg-secondary-50":D&&!S,"hover:bg-secondary-50":!n.disabled&&!S,"opacity-50 cursor-not-allowed":n.disabled,"text-secondary-400":n.loading}),onClick:()=>pa(n,l),onMouseEnter:()=>ma(n,l),children:[e.jsx("span",{className:"flex-1 truncate",children:p}),n.loading?e.jsxs("svg",{className:k("animate-spin",V.icon),fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):g&&!n.isLeaf&&e.jsx("svg",{className:k(V.icon,"text-secondary-400"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]},String(s))})})},l))})});return e.jsxs("div",{ref:te,className:k("relative",aa),style:la,...ta,children:[e.jsxs("div",{className:k("flex items-center border border-secondary-300 rounded-md bg-white cursor-pointer transition-colors",V.input,{"border-primary-500 ring-2 ring-primary-500 ring-opacity-20":v,"hover:border-secondary-400":!b&&!v,"opacity-50 cursor-not-allowed":b}),onClick:()=>{b||(q(!v),f&&se.current&&se.current.focus())},onKeyDown:ga,tabIndex:b?-1:0,children:[f?e.jsx("input",{ref:se,type:"text",value:v?E:ca||"",onChange:ha,placeholder:L,className:"flex-1 bg-transparent outline-none",disabled:b,readOnly:!v}):e.jsx("span",{className:k("flex-1 truncate",{"text-secondary-500":!me&&L}),children:me||L}),e.jsxs("div",{className:"flex items-center ml-2 space-x-1",children:[A&&C.length>0&&!b&&e.jsx("button",{onClick:a=>{a.stopPropagation(),oe()},className:"text-secondary-400 hover:text-secondary-600 transition-colors",children:e.jsx("svg",{className:k(V.icon),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("svg",{className:k("transition-transform text-secondary-400",V.icon,{"rotate-180":v}),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),v&&ba()]})};try{O.displayName="Cascader",O.__docgenInfo={description:"",displayName:"Cascader",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"CascaderOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"CascaderValue"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"CascaderValue"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: CascaderValue, selectedOptions: CascaderOption[]) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((value: CascaderValue, selectedOptions: CascaderOption[]) => void)"}},placeholder:{defaultValue:{value:"Please select"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},allowClear:{defaultValue:{value:"true"},description:"",name:"allowClear",required:!1,type:{name:"boolean"}},showSearch:{defaultValue:{value:"false"},description:"",name:"showSearch",required:!1,type:{name:"boolean"}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((value: string) => void)"}},expandTrigger:{defaultValue:{value:"click"},description:"",name:"expandTrigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},changeOnSelect:{defaultValue:{value:"false"},description:"",name:"changeOnSelect",required:!1,type:{name:"boolean"}},displayRender:{defaultValue:null,description:"",name:"displayRender",required:!1,type:{name:"((labels: string[], selectedOptions?: CascaderOption[]) => ReactNode)"}},fieldNames:{defaultValue:{value:'{ label: "label", value: "value", children: "children" }'},description:"",name:"fieldNames",required:!1,type:{name:"{ label?: string; value?: string; children?: string | undefined; } | undefined"}},separator:{defaultValue:{value:"/"},description:"",name:"separator",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},popupPlacement:{defaultValue:{value:"bottomLeft"},description:"",name:"popupPlacement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"top"'},{value:'"topLeft"'},{value:'"topRight"'}]}},notFoundContent:{defaultValue:{value:"Not Found"},description:"",name:"notFoundContent",required:!1,type:{name:"ReactNode"}},loadData:{defaultValue:null,description:"",name:"loadData",required:!1,type:{name:"((selectedOptions: CascaderOption[]) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},popupClassName:{defaultValue:null,description:"",name:"popupClassName",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Va={title:"Form Controls/Cascader",component:O,parameters:{layout:"centered",docs:{description:{component:"Komponen Cascader untuk memilih nilai dari data hierarkis bertingkat. Sangat berguna untuk kasus seperti pemilihan lokasi (negara → provinsi → kota), kategori produk, atau struktur organisasi dengan navigasi yang intuitif."}}},tags:["autodocs"],argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Apakah disabled"},allowClear:{control:{type:"boolean"},description:"Apakah menampilkan tombol clear"},showSearch:{control:{type:"boolean"},description:"Apakah menampilkan search functionality"},expandTrigger:{control:{type:"select"},options:["click","hover"],description:"Trigger untuk expand menu"},changeOnSelect:{control:{type:"boolean"},description:"Apakah trigger onChange saat memilih parent option"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran cascader"},separator:{control:{type:"text"},description:"Separator untuk display label"}}},w=[{value:"indonesia",label:"Indonesia",children:[{value:"jakarta",label:"DKI Jakarta",children:[{value:"jaksel",label:"Jakarta Selatan"},{value:"jakpus",label:"Jakarta Pusat"},{value:"jakut",label:"Jakarta Utara"},{value:"jakbar",label:"Jakarta Barat"},{value:"jaktim",label:"Jakarta Timur"}]},{value:"jabar",label:"Jawa Barat",children:[{value:"bandung",label:"Bandung"},{value:"bekasi",label:"Bekasi"},{value:"depok",label:"Depok"},{value:"bogor",label:"Bogor"}]},{value:"jateng",label:"Jawa Tengah",children:[{value:"semarang",label:"Semarang"},{value:"solo",label:"Surakarta"},{value:"yogya",label:"Yogyakarta"}]},{value:"jatim",label:"Jawa Timur",children:[{value:"surabaya",label:"Surabaya"},{value:"malang",label:"Malang"},{value:"sidoarjo",label:"Sidoarjo"}]}]},{value:"singapore",label:"Singapore",children:[{value:"central",label:"Central Region",children:[{value:"orchard",label:"Orchard"},{value:"marina",label:"Marina Bay"}]},{value:"north",label:"North Region",children:[{value:"woodlands",label:"Woodlands"},{value:"yishun",label:"Yishun"}]}]},{value:"malaysia",label:"Malaysia",children:[{value:"kl",label:"Kuala Lumpur",children:[{value:"klcc",label:"KLCC"},{value:"bukit-bintang",label:"Bukit Bintang"}]},{value:"selangor",label:"Selangor",children:[{value:"shah-alam",label:"Shah Alam"},{value:"petaling-jaya",label:"Petaling Jaya"}]}]}],ae=[{value:"tech",label:"Technology",children:[{value:"engineering",label:"Engineering",children:[{value:"frontend",label:"Frontend Team"},{value:"backend",label:"Backend Team"},{value:"mobile",label:"Mobile Team"},{value:"devops",label:"DevOps Team"}]},{value:"product",label:"Product",children:[{value:"pm",label:"Product Manager"},{value:"ux",label:"UX Designer"},{value:"ui",label:"UI Designer"}]},{value:"qa",label:"Quality Assurance",children:[{value:"manual",label:"Manual Testing"},{value:"automation",label:"Automation Testing"}]}]},{value:"business",label:"Business",children:[{value:"sales",label:"Sales",children:[{value:"inside-sales",label:"Inside Sales"},{value:"field-sales",label:"Field Sales"},{value:"enterprise",label:"Enterprise Sales"}]},{value:"marketing",label:"Marketing",children:[{value:"digital",label:"Digital Marketing"},{value:"content",label:"Content Marketing"},{value:"growth",label:"Growth Marketing"}]},{value:"bd",label:"Business Development",children:[{value:"partnerships",label:"Partnerships"},{value:"strategy",label:"Strategic Planning"}]}]},{value:"operations",label:"Operations",children:[{value:"hr",label:"Human Resources",children:[{value:"recruitment",label:"Recruitment"},{value:"learning",label:"Learning & Development"},{value:"compensation",label:"Compensation & Benefits"}]},{value:"finance",label:"Finance",children:[{value:"accounting",label:"Accounting"},{value:"fp&a",label:"Financial Planning & Analysis"},{value:"treasury",label:"Treasury"}]},{value:"legal",label:"Legal",children:[{value:"contracts",label:"Contracts"},{value:"compliance",label:"Compliance"}]}]}],J={args:{options:w,placeholder:"Select location",onChange:d("location-changed"),onSelect:d("location-selected")}},$={args:{options:w,defaultValue:["indonesia","jakarta","jaksel"],placeholder:"Select location",onChange:d("location-changed")}},I={args:{options:ae,showSearch:!0,placeholder:"Search departments",onChange:d("department-changed"),onSearch:d("search-changed")}},_={args:{options:w,expandTrigger:"hover",placeholder:"Hover to expand",onChange:d("hover-changed")}},H={args:{options:ae,changeOnSelect:!0,placeholder:"Select department (change on any level)",onChange:d("change-on-select")}},K={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Small"}),e.jsx(O,{options:w,size:"sm",placeholder:"Small size",onChange:d("small-changed")})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Medium (Default)"}),e.jsx(O,{options:w,size:"md",placeholder:"Medium size",onChange:d("medium-changed")})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Large"}),e.jsx(O,{options:w,size:"lg",placeholder:"Large size",onChange:d("large-changed")})]})]})},U={args:{options:ae,separator:" > ",defaultValue:["tech","engineering","frontend"],placeholder:"Custom separator",onChange:d("separator-changed")}},Y={args:{options:w,displayRender:(r,o)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"text-primary-600 font-medium",children:"📍"}),e.jsx("span",{className:"ml-1",children:r.join(" → ")}),o&&o.length>0&&e.jsxs("span",{className:"ml-2 px-2 py-0.5 bg-primary-100 text-primary-700 text-xs rounded",children:["Level ",o.length]})]}),defaultValue:["indonesia","jakarta","jakpus"],placeholder:"Custom display render",onChange:d("custom-display-changed")}},G={render:()=>{const r=[{value:"available",label:"Available Regions",children:[{value:"asia",label:"Asia Pacific"},{value:"europe",label:"Europe"}]},{value:"maintenance",label:"Under Maintenance",disabled:!0,children:[{value:"americas",label:"Americas"},{value:"africa",label:"Africa"}]},{value:"coming-soon",label:"Coming Soon",children:[{value:"oceania",label:"Oceania",disabled:!0},{value:"middle-east",label:"Middle East"}]}];return e.jsx(O,{options:r,placeholder:"Select region (some disabled)",onChange:d("disabled-changed")})}},Q={render:()=>{const[r,o]=t.useState([]),[M,m]=t.useState("");return e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Controlled Cascader"}),e.jsx(O,{options:ae,value:r,searchValue:M,showSearch:!0,placeholder:"Controlled cascader",onChange:(i,L)=>{o(i),d("controlled-change")({newValue:i,selectedOptions:L})},onSearch:i=>{m(i),d("controlled-search")(i)}})]}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Value:"})," ",JSON.stringify(r)]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Search:"}),' "',M,'"']})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>o(["tech","engineering","frontend"]),className:"px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded hover:bg-primary-200",children:"Set Frontend"}),e.jsx("button",{onClick:()=>o(["business","marketing","digital"]),className:"px-3 py-1 text-sm bg-secondary-100 text-secondary-700 rounded hover:bg-secondary-200",children:"Set Marketing"}),e.jsx("button",{onClick:()=>{o([]),m("")},className:"px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200",children:"Clear All"})]})]})}},X={render:()=>{const[r,o]=t.useState([{value:"countries",label:"Countries",children:[{value:"indonesia",label:"Indonesia"},{value:"singapore",label:"Singapore"},{value:"malaysia",label:"Malaysia"}]}]),M=m=>{const i=m[m.length-1],L=[...r],b=(f,y)=>f.map(u=>y.length===1&&u.value===y[0]?{...u,loading:!0,children:u.children||[]}:u.children&&y[0]===u.value?{...u,children:b(u.children,y.slice(1))}:u),A=m.map(f=>f.value);o(b(L,A)),setTimeout(()=>{const f=[{value:`${i.value}-city1`,label:`${i.label} City 1`},{value:`${i.value}-city2`,label:`${i.label} City 2`},{value:`${i.value}-city3`,label:`${i.label} City 3`}],y=[...r],u=(B,z)=>B.map(x=>z.length===1&&x.value===z[0]?{...x,loading:!1,children:f}:x.children&&z[0]===x.value?{...x,children:u(x.children,z.slice(1))}:x);o(u(y,A))},1500)};return e.jsxs("div",{className:"w-80",children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Click on country names to load cities dynamically."}),e.jsx(O,{options:r,loadData:M,placeholder:"Select location (lazy loading)",onChange:d("lazy-changed")})]})}},Z={args:{options:w,disabled:!0,defaultValue:["indonesia","jakarta","jaksel"],placeholder:"Disabled cascader"}},ee={args:{options:[],placeholder:"No options available",notFoundContent:"No data found",onChange:d("no-data-changed")}};var he,ge,be;J.parameters={...J.parameters,docs:{...(he=J.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    options: locationOptions,
    placeholder: "Select location",
    onChange: action("location-changed"),
    onSelect: action("location-selected")
  }
}`,...(be=(ge=J.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ve,fe,ye;$.parameters={...$.parameters,docs:{...(ve=$.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    options: locationOptions,
    defaultValue: ["indonesia", "jakarta", "jaksel"],
    placeholder: "Select location",
    onChange: action("location-changed")
  }
}`,...(ye=(fe=$.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var xe,Ce,ke;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    options: companyOptions,
    showSearch: true,
    placeholder: "Search departments",
    onChange: action("department-changed"),
    onSearch: action("search-changed")
  }
}`,...(ke=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var Se,Oe,je;_.parameters={..._.parameters,docs:{...(Se=_.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    options: locationOptions,
    expandTrigger: "hover",
    placeholder: "Hover to expand",
    onChange: action("hover-changed")
  }
}`,...(je=(Oe=_.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};var Ve,Ne,we;H.parameters={...H.parameters,docs:{...(Ve=H.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    options: companyOptions,
    changeOnSelect: true,
    placeholder: "Select department (change on any level)",
    onChange: action("change-on-select")
  }
}`,...(we=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var Le,ze,De;K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">Small</label>
        <Cascader options={locationOptions} size="sm" placeholder="Small size" onChange={action("small-changed")} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Medium (Default)
        </label>
        <Cascader options={locationOptions} size="md" placeholder="Medium size" onChange={action("medium-changed")} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Large</label>
        <Cascader options={locationOptions} size="lg" placeholder="Large size" onChange={action("large-changed")} />
      </div>
    </div>
}`,...(De=(ze=K.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var Me,Ae,qe;U.parameters={...U.parameters,docs:{...(Me=U.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    options: companyOptions,
    separator: " > ",
    defaultValue: ["tech", "engineering", "frontend"],
    placeholder: "Custom separator",
    onChange: action("separator-changed")
  }
}`,...(qe=(Ae=U.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Te,Pe,Re;Y.parameters={...Y.parameters,docs:{...(Te=Y.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    options: locationOptions,
    displayRender: (labels, selectedOptions) => <div className="flex items-center">
        <span className="text-primary-600 font-medium">📍</span>
        <span className="ml-1">{labels.join(" → ")}</span>
        {selectedOptions && selectedOptions.length > 0 && <span className="ml-2 px-2 py-0.5 bg-primary-100 text-primary-700 text-xs rounded">
            Level {selectedOptions.length}
          </span>}
      </div>,
    defaultValue: ["indonesia", "jakarta", "jakpus"],
    placeholder: "Custom display render",
    onChange: action("custom-display-changed")
  }
}`,...(Re=(Pe=Y.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var We,Be,Fe;G.parameters={...G.parameters,docs:{...(We=G.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    const disabledOptions: CascaderOption[] = [{
      value: "available",
      label: "Available Regions",
      children: [{
        value: "asia",
        label: "Asia Pacific"
      }, {
        value: "europe",
        label: "Europe"
      }]
    }, {
      value: "maintenance",
      label: "Under Maintenance",
      disabled: true,
      children: [{
        value: "americas",
        label: "Americas"
      }, {
        value: "africa",
        label: "Africa"
      }]
    }, {
      value: "coming-soon",
      label: "Coming Soon",
      children: [{
        value: "oceania",
        label: "Oceania",
        disabled: true
      }, {
        value: "middle-east",
        label: "Middle East"
      }]
    }];
    return <Cascader options={disabledOptions} placeholder="Select region (some disabled)" onChange={action("disabled-changed")} />;
  }
}`,...(Fe=(Be=G.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var Ee,Je,$e;Q.parameters={...Q.parameters,docs:{...(Ee=Q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<(string | number)[]>([]);
    const [searchValue, setSearchValue] = useState("");
    return <div className="space-y-4 w-80">
        <div>
          <label className="block text-sm font-medium mb-1">
            Controlled Cascader
          </label>
          <Cascader options={companyOptions} value={value} searchValue={searchValue} showSearch placeholder="Controlled cascader" onChange={(newValue, selectedOptions) => {
          setValue(newValue);
          action("controlled-change")({
            newValue,
            selectedOptions
          });
        }} onSearch={searchVal => {
          setSearchValue(searchVal);
          action("controlled-search")(searchVal);
        }} />
        </div>

        <div className="text-sm space-y-1">
          <div>
            <span className="font-medium">Value:</span> {JSON.stringify(value)}
          </div>
          <div>
            <span className="font-medium">Search:</span> "{searchValue}"
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={() => setValue(["tech", "engineering", "frontend"])} className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded hover:bg-primary-200">
            Set Frontend
          </button>
          <button onClick={() => setValue(["business", "marketing", "digital"])} className="px-3 py-1 text-sm bg-secondary-100 text-secondary-700 rounded hover:bg-secondary-200">
            Set Marketing
          </button>
          <button onClick={() => {
          setValue([]);
          setSearchValue("");
        }} className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200">
            Clear All
          </button>
        </div>
      </div>;
  }
}`,...($e=(Je=Q.parameters)==null?void 0:Je.docs)==null?void 0:$e.source}}};var Ie,_e,He;X.parameters={...X.parameters,docs:{...(Ie=X.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => {
    const [lazyOptions, setLazyOptions] = useState<CascaderOption[]>([{
      value: "countries",
      label: "Countries",
      children: [{
        value: "indonesia",
        label: "Indonesia"
      }, {
        value: "singapore",
        label: "Singapore"
      }, {
        value: "malaysia",
        label: "Malaysia"
      }]
    }]);
    const loadData = (selectedOptions: CascaderOption[]) => {
      const targetOption = selectedOptions[selectedOptions.length - 1];

      // Simulate loading
      const newOptions = [...lazyOptions];
      const updateOptions = (options: CascaderOption[], path: (string | number)[]): CascaderOption[] => {
        return options.map(option => {
          if (path.length === 1 && option.value === path[0]) {
            return {
              ...option,
              loading: true,
              children: option.children || []
            };
          } else if (option.children && path[0] === option.value) {
            return {
              ...option,
              children: updateOptions(option.children, path.slice(1))
            };
          }
          return option;
        });
      };
      const valuePath = selectedOptions.map(opt => opt.value);
      setLazyOptions(updateOptions(newOptions, valuePath));

      // Simulate API call
      setTimeout(() => {
        const mockChildren = [{
          value: \`\${targetOption.value}-city1\`,
          label: \`\${targetOption.label} City 1\`
        }, {
          value: \`\${targetOption.value}-city2\`,
          label: \`\${targetOption.label} City 2\`
        }, {
          value: \`\${targetOption.value}-city3\`,
          label: \`\${targetOption.label} City 3\`
        }];
        const finalOptions = [...lazyOptions];
        const updateWithData = (options: CascaderOption[], path: (string | number)[]): CascaderOption[] => {
          return options.map(option => {
            if (path.length === 1 && option.value === path[0]) {
              return {
                ...option,
                loading: false,
                children: mockChildren
              };
            } else if (option.children && path[0] === option.value) {
              return {
                ...option,
                children: updateWithData(option.children, path.slice(1))
              };
            }
            return option;
          });
        };
        setLazyOptions(updateWithData(finalOptions, valuePath));
      }, 1500);
    };
    return <div className="w-80">
        <p className="text-sm text-secondary-600 mb-4">
          Click on country names to load cities dynamically.
        </p>
        <Cascader options={lazyOptions} loadData={loadData} placeholder="Select location (lazy loading)" onChange={action("lazy-changed")} />
      </div>;
  }
}`,...(He=(_e=X.parameters)==null?void 0:_e.docs)==null?void 0:He.source}}};var Ke,Ue,Ye;Z.parameters={...Z.parameters,docs:{...(Ke=Z.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    options: locationOptions,
    disabled: true,
    defaultValue: ["indonesia", "jakarta", "jaksel"],
    placeholder: "Disabled cascader"
  }
}`,...(Ye=(Ue=Z.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var Ge,Qe,Xe;ee.parameters={...ee.parameters,docs:{...(Ge=ee.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    options: [],
    placeholder: "No options available",
    notFoundContent: "No data found",
    onChange: action("no-data-changed")
  }
}`,...(Xe=(Qe=ee.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};const Na=["Default","WithDefaultValue","WithSearch","HoverTrigger","ChangeOnSelect","Sizes","CustomSeparator","CustomDisplay","WithDisabledOptions","ControlledCascader","LazyLoading","DisabledState","NoData"];export{H as ChangeOnSelect,Q as ControlledCascader,Y as CustomDisplay,U as CustomSeparator,J as Default,Z as DisabledState,_ as HoverTrigger,X as LazyLoading,ee as NoData,K as Sizes,$ as WithDefaultValue,G as WithDisabledOptions,I as WithSearch,Na as __namedExportsOrder,Va as default};
