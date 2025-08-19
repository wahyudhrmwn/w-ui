import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as h}from"./index-B-lxVbXh.js";import{R as Ze,r as f}from"./index-DkvSDgFW.js";import{c as p}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const u={sm:{button:"px-2 py-1 text-xs min-w-[28px] h-7",icon:"w-3 h-3"},md:{button:"px-3 py-2 text-sm min-w-[36px] h-9",icon:"w-4 h-4"},lg:{button:"px-4 py-3 text-base min-w-[44px] h-11",icon:"w-5 h-5"}},E={default:{button:"bg-white border border-secondary-300 text-secondary-700 hover:bg-secondary-50 hover:border-secondary-400",active:"bg-primary-600 border-primary-600 text-white hover:bg-primary-700 hover:border-primary-700",disabled:"bg-secondary-100 border-secondary-200 text-secondary-400 cursor-not-allowed"},outlined:{button:"bg-transparent border border-secondary-300 text-secondary-700 hover:bg-secondary-50 hover:border-secondary-400",active:"bg-transparent border-primary-600 text-primary-600 hover:bg-primary-50",disabled:"bg-transparent border-secondary-200 text-secondary-400 cursor-not-allowed"},minimal:{button:"bg-transparent border-none text-secondary-700 hover:bg-secondary-100",active:"bg-primary-100 text-primary-700 font-medium",disabled:"bg-transparent text-secondary-400 cursor-not-allowed"}},ea=({className:a})=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),aa=({className:a})=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),ma=({className:a})=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})}),ga=({className:a})=>e.jsx("svg",{className:a,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 5l7 7-7 7M5 5l7 7-7 7"})}),ua=(a,i,s)=>{const l=s*2+5;if(i<=l)return Array.from({length:i},(t,m)=>m+1);const r=Math.max(a-s,1),c=Math.min(a+s,i),n=r>2,d=c<i-1;if(!n&&d){const t=3+2*s;return[...Array.from({length:t},(x,v)=>v+1),"ellipsis",i]}if(n&&!d){const t=3+2*s;return[1,"ellipsis",...Array.from({length:t},(x,v)=>i-t+v+1)]}return n&&d?[1,"ellipsis",...Array.from({length:c-r+1},(m,x)=>r+x),"ellipsis",i]:[]},o=Ze.forwardRef(({currentPage:a,totalPages:i,onPageChange:s,siblingCount:l=1,size:r="md",variant:c="default",showPrevNext:n=!0,showFirstLast:d=!1,labels:t={},className:m,disabled:x=!1,...v},na)=>{const{previous:ta="Previous",next:sa="Next",first:ra="First",last:ia="Last"}=t,oa=ua(a,i,l),G=a>1,$=a<i,la=g=>{!x&&g!==a&&g>=1&&g<=i&&s(g)},P=(g,N,y=!1,da=!1,ca)=>{const O=x||da;return e.jsx("button",{onClick:()=>N&&la(N),disabled:O,"aria-label":ca,"aria-current":y?"page":void 0,className:p("inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 rounded",u[r].button,O?E[c].disabled:y?E[c].active:E[c].button),children:g})};return e.jsxs("nav",{ref:na,className:p("pagination flex items-center space-x-1",m),"aria-label":"Pagination Navigation",...v,children:[d&&P(e.jsxs("span",{className:"flex items-center",children:[e.jsx(ma,{className:u[r].icon}),e.jsx("span",{className:"ml-1 hidden sm:inline",children:ra})]}),1,!1,!G,"Go to first page"),n&&P(e.jsxs("span",{className:"flex items-center",children:[e.jsx(ea,{className:u[r].icon}),e.jsx("span",{className:"ml-1 hidden sm:inline",children:ta})]}),a-1,!1,!G,"Go to previous page"),oa.map((g,N)=>{if(g==="ellipsis")return e.jsx("span",{className:p("inline-flex items-center justify-center text-secondary-400",u[r].button),"aria-hidden":"true",children:"..."},`ellipsis-${N}`);const y=g===a;return e.jsx("span",{children:P(g,g,y,!1,`Go to page ${g}`)},g)}),n&&P(e.jsxs("span",{className:"flex items-center",children:[e.jsx("span",{className:"mr-1 hidden sm:inline",children:sa}),e.jsx(aa,{className:u[r].icon})]}),a+1,!1,!$,"Go to next page"),d&&P(e.jsxs("span",{className:"flex items-center",children:[e.jsx("span",{className:"mr-1 hidden sm:inline",children:ia}),e.jsx(ga,{className:u[r].icon})]}),i,!1,!$,"Go to last page")]})});o.displayName="Pagination";const b=Ze.forwardRef(({currentPage:a,totalPages:i,onPageChange:s,size:l="md",className:r,disabled:c=!1,...n},d)=>{const t=a>1,m=a<i,x=()=>{!c&&t&&s(a-1)},v=()=>{!c&&m&&s(a+1)};return e.jsxs("nav",{ref:d,className:p("flex items-center justify-between px-4 py-3 bg-white border border-secondary-200 rounded-lg",r),...n,children:[e.jsxs("button",{onClick:x,disabled:c||!t,className:p("inline-flex items-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 rounded",u[l].button,c||!t?"text-secondary-400 cursor-not-allowed":"text-secondary-700 hover:text-secondary-900"),children:[e.jsx(ea,{className:p(u[l].icon,"mr-1")}),"Previous"]}),e.jsxs("span",{className:p("font-medium text-secondary-700",u[l].button.split(" ")[2]),children:["Page ",a," of ",i]}),e.jsxs("button",{onClick:v,disabled:c||!m,className:p("inline-flex items-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 rounded",u[l].button,c||!m?"text-secondary-400 cursor-not-allowed":"text-secondary-700 hover:text-secondary-900"),children:["Next",e.jsx(aa,{className:p(u[l].icon,"ml-1")})]})]})});b.displayName="SimplePagination";try{o.displayName="Pagination",o.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"Halaman saat ini (1-based)",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"Total halaman",name:"totalPages",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"Callback ketika halaman berubah",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},siblingCount:{defaultValue:{value:"1"},description:"Jumlah halaman yang ditampilkan di sekitar halaman aktif",name:"siblingCount",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"Ukuran pagination",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"Variant styling",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outlined"'},{value:'"minimal"'}]}},showPrevNext:{defaultValue:{value:"true"},description:"Apakah menampilkan tombol Previous/Next",name:"showPrevNext",required:!1,type:{name:"boolean"}},showFirstLast:{defaultValue:{value:"false"},description:"Apakah menampilkan tombol First/Last",name:"showFirstLast",required:!1,type:{name:"boolean"}},labels:{defaultValue:{value:"{}"},description:"Label untuk tombol navigasi",name:"labels",required:!1,type:{name:"{ previous?: string; next?: string; first?: string | undefined; last?: string | undefined; } | undefined"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Apakah pagination disabled",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{b.displayName="SimplePagination",b.__docgenInfo={description:"",displayName:"SimplePagination",props:{currentPage:{defaultValue:null,description:"Halaman saat ini",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"Total halaman",name:"totalPages",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"Callback ketika halaman berubah",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},size:{defaultValue:{value:"md"},description:"Ukuran",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Apakah disabled",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const fa={title:"Navigation/Pagination",component:o,parameters:{layout:"centered",docs:{description:{component:"Komponen Pagination untuk navigasi data dalam halaman. Tersedia dalam 2 variant: Pagination lengkap dengan nomor halaman dan SimplePagination untuk navigasi sederhana previous/next."}}},tags:["autodocs"],argTypes:{currentPage:{control:{type:"number",min:1,max:20},description:"Halaman saat ini (1-based)"},totalPages:{control:{type:"number",min:1,max:100},description:"Total halaman"},siblingCount:{control:{type:"number",min:0,max:5},description:"Jumlah halaman di sekitar halaman aktif"},size:{control:"select",options:["sm","md","lg"],description:"Ukuran pagination"},variant:{control:"select",options:["default","outlined","minimal"],description:"Variant styling"},showPrevNext:{control:"boolean",description:"Tampilkan tombol Previous/Next"},showFirstLast:{control:"boolean",description:"Tampilkan tombol First/Last"},disabled:{control:"boolean",description:"Disable pagination"},onPageChange:{action:"page-changed"}},args:{onPageChange:h("page-changed")}},j={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:1,totalPages:10,siblingCount:1}},w={render:a=>{const[i,s]=f.useState(5);return e.jsx("div",{className:"p-4",children:e.jsx(o,{...a,currentPage:i,onPageChange:l=>{s(l),h("page-changed")(l)}})})},args:{totalPages:15,siblingCount:2}},C={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:3,totalPages:10,size:"sm"}},k={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:3,totalPages:10,size:"md"}},S={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:3,totalPages:10,size:"lg"}},L={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:3,totalPages:10,variant:"default"}},F={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:3,totalPages:10,variant:"outlined"}},I={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:3,totalPages:10,variant:"minimal"}},D={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:5,totalPages:20,showPrevNext:!0,showFirstLast:!0,siblingCount:2}},M={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:10,totalPages:20,siblingCount:0}},V={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:10,totalPages:20,siblingCount:2}},_={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:1,totalPages:10,showFirstLast:!0}},z={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:10,totalPages:10,showFirstLast:!0}},A={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:1,totalPages:1}},q={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:2,totalPages:3,showFirstLast:!0}},R={render:a=>e.jsx("div",{className:"p-4",children:e.jsx(o,{...a})}),args:{currentPage:3,totalPages:10,disabled:!0,showFirstLast:!0}},T={render:()=>{const[a,i]=f.useState(1);return e.jsx("div",{className:"p-4 max-w-md",children:e.jsx(b,{currentPage:a,totalPages:10,onPageChange:s=>{i(s),h("simple-page-changed")(s)}})})},parameters:{docs:{description:{story:"SimplePagination untuk navigasi sederhana dengan hanya tombol Previous/Next dan info halaman."}}}},U={render:()=>e.jsxs("div",{className:"p-4 space-y-4 max-w-md",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"Small"}),e.jsx(b,{currentPage:2,totalPages:10,onPageChange:h("simple-sm-page-changed"),size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"Medium"}),e.jsx(b,{currentPage:2,totalPages:10,onPageChange:h("simple-md-page-changed"),size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-secondary-600 mb-2",children:"Large"}),e.jsx(b,{currentPage:2,totalPages:10,onPageChange:h("simple-lg-page-changed"),size:"lg"})]})]}),parameters:{docs:{description:{story:"SimplePagination dalam berbagai ukuran."}}}},W={render:()=>{const[a,i]=f.useState(1),s=5,l=47,r=Math.ceil(l/s),c=Array.from({length:l},(t,m)=>({id:m+1,name:`User ${m+1}`,email:`user${m+1}@example.com`,role:["Admin","User","Moderator"][m%3],status:["Active","Inactive"][m%2]})),n=(a-1)*s,d=c.slice(n,n+s);return e.jsxs("div",{className:"p-6 max-w-4xl",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"User Management"}),e.jsxs("p",{className:"text-secondary-600 text-sm",children:["Total ",l," users • Page ",a," of ",r]})]}),e.jsx("div",{className:"bg-white rounded-lg border border-secondary-200 overflow-hidden mb-6",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-secondary-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider",children:"Name"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider",children:"Email"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider",children:"Role"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-secondary-200",children:d.map(t=>e.jsxs("tr",{className:"hover:bg-secondary-50",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900",children:t.name}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-secondary-500",children:t.email}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-secondary-500",children:t.role}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:p("px-2 inline-flex text-xs leading-5 font-semibold rounded-full",t.status==="Active"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"),children:t.status})})]},t.id))})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(o,{currentPage:a,totalPages:r,onPageChange:t=>{i(t),h("table-page-changed")(t)},showFirstLast:r>7,siblingCount:1})})]})},parameters:{docs:{description:{story:"Contoh penggunaan pagination dengan tabel data. Menampilkan 5 item per halaman dari total 47 item."}}}},B={render:()=>{const[a,i]=f.useState({totalPages:20,size:"md",variant:"default",siblingCount:1,showPrevNext:!0,showFirstLast:!1,disabled:!1}),[s,l]=f.useState(5),r=(n,d)=>{i(t=>({...t,[n]:d})),n==="totalPages"&&s>d&&l(Math.max(1,d))},c=n=>{l(n),h("interactive-page-changed")(n)};return e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Interactive Pagination Demo"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-secondary-50 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Total Pages:"}),e.jsxs("select",{value:a.totalPages,onChange:n=>r("totalPages",parseInt(n.target.value)),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"}),e.jsx("option",{value:50,children:"50"}),e.jsx("option",{value:100,children:"100"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Size:"}),e.jsxs("select",{value:a.size,onChange:n=>r("size",n.target.value),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:"sm",children:"Small"}),e.jsx("option",{value:"md",children:"Medium"}),e.jsx("option",{value:"lg",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Variant:"}),e.jsxs("select",{value:a.variant,onChange:n=>r("variant",n.target.value),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:"default",children:"Default"}),e.jsx("option",{value:"outlined",children:"Outlined"}),e.jsx("option",{value:"minimal",children:"Minimal"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Sibling Count:"}),e.jsxs("select",{value:a.siblingCount,onChange:n=>r("siblingCount",parseInt(n.target.value)),className:"w-full p-2 border rounded text-sm",children:[e.jsx("option",{value:0,children:"0"}),e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:3,children:"3"})]})]}),e.jsxs("div",{className:"flex flex-col justify-center space-y-2",children:[e.jsxs("label",{className:"flex items-center text-sm",children:[e.jsx("input",{type:"checkbox",checked:a.showPrevNext,onChange:n=>r("showPrevNext",n.target.checked),className:"mr-2"}),"Show Prev/Next"]}),e.jsxs("label",{className:"flex items-center text-sm",children:[e.jsx("input",{type:"checkbox",checked:a.showFirstLast,onChange:n=>r("showFirstLast",n.target.checked),className:"mr-2"}),"Show First/Last"]}),e.jsxs("label",{className:"flex items-center text-sm",children:[e.jsx("input",{type:"checkbox",checked:a.disabled,onChange:n=>r("disabled",n.target.checked),className:"mr-2"}),"Disabled"]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Current Page:"}),e.jsx("input",{type:"number",min:1,max:a.totalPages,value:s,onChange:n=>{const d=parseInt(n.target.value);d>=1&&d<=a.totalPages&&l(d)},className:"w-full p-2 border rounded text-sm"})]})]}),e.jsx("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:e.jsxs("p",{className:"text-blue-800 text-sm",children:[e.jsx("strong",{children:"Current:"})," Page ",s," of"," ",a.totalPages," •",e.jsx("strong",{children:" Buttons visible:"})," ",a.showPrevNext?"Prev/Next":""," ",a.showFirstLast?"First/Last":""," •",e.jsx("strong",{children:" State:"})," ",a.disabled?"Disabled":"Enabled"]})}),e.jsx("div",{className:"flex justify-center p-6 bg-white rounded-lg border border-secondary-200",children:e.jsx(o,{currentPage:s,totalPages:a.totalPages,onPageChange:c,size:a.size,variant:a.variant,siblingCount:a.siblingCount,showPrevNext:a.showPrevNext,showFirstLast:a.showFirstLast,disabled:a.disabled})})]})},parameters:{docs:{description:{story:"Demo interaktif untuk mencoba semua pengaturan pagination. Ubah total halaman, ukuran, variant, dan lihat bagaimana ellipsis bekerja!"}}}};var H,J,K;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 1,
    totalPages: 10,
    siblingCount: 1
  }
}`,...(K=(J=j.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(5);
    return <div className="p-4">
        <Pagination {...args} currentPage={currentPage} onPageChange={page => {
        setCurrentPage(page);
        action("page-changed")(page);
      }} />
      </div>;
  },
  args: {
    totalPages: 15,
    siblingCount: 2
  }
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 3,
    totalPages: 10,
    size: "sm"
  }
}`,...(ae=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,se;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 3,
    totalPages: 10,
    size: "md"
  }
}`,...(se=(te=k.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,ie,oe;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 3,
    totalPages: 10,
    size: "lg"
  }
}`,...(oe=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,de,ce;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "default"
  }
}`,...(ce=(de=L.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,ge,ue;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "outlined"
  }
}`,...(ue=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var pe,xe,he;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "minimal"
  }
}`,...(he=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var ve,be,Pe;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 5,
    totalPages: 20,
    showPrevNext: true,
    showFirstLast: true,
    siblingCount: 2
  }
}`,...(Pe=(be=D.parameters)==null?void 0:be.docs)==null?void 0:Pe.source}}};var fe,Ne,ye;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 0
  }
}`,...(ye=(Ne=M.parameters)==null?void 0:Ne.docs)==null?void 0:ye.source}}};var je,we,Ce;V.parameters={...V.parameters,docs:{...(je=V.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 2
  }
}`,...(Ce=(we=V.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var ke,Se,Le;_.parameters={..._.parameters,docs:{...(ke=_.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 1,
    totalPages: 10,
    showFirstLast: true
  }
}`,...(Le=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:Le.source}}};var Fe,Ie,De;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 10,
    totalPages: 10,
    showFirstLast: true
  }
}`,...(De=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var Me,Ve,_e;A.parameters={...A.parameters,docs:{...(Me=A.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 1,
    totalPages: 1
  }
}`,...(_e=(Ve=A.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source}}};var ze,Ae,qe;q.parameters={...q.parameters,docs:{...(ze=q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 2,
    totalPages: 3,
    showFirstLast: true
  }
}`,...(qe=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Re,Te,Ue;R.parameters={...R.parameters,docs:{...(Re=R.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: args => <div className="p-4">
      <Pagination {...args} />
    </div>,
  args: {
    currentPage: 3,
    totalPages: 10,
    disabled: true,
    showFirstLast: true
  }
}`,...(Ue=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:Ue.source}}};var We,Be,Ee;T.parameters={...T.parameters,docs:{...(We=T.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return <div className="p-4 max-w-md">
        <SimplePagination currentPage={currentPage} totalPages={10} onPageChange={page => {
        setCurrentPage(page);
        action("simple-page-changed")(page);
      }} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "SimplePagination untuk navigasi sederhana dengan hanya tombol Previous/Next dan info halaman."
      }
    }
  }
}`,...(Ee=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var Ge,$e,Oe;U.parameters={...U.parameters,docs:{...(Ge=U.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div className="p-4 space-y-4 max-w-md">
      <div>
        <p className="text-sm text-secondary-600 mb-2">Small</p>
        <SimplePagination currentPage={2} totalPages={10} onPageChange={action("simple-sm-page-changed")} size="sm" />
      </div>
      <div>
        <p className="text-sm text-secondary-600 mb-2">Medium</p>
        <SimplePagination currentPage={2} totalPages={10} onPageChange={action("simple-md-page-changed")} size="md" />
      </div>
      <div>
        <p className="text-sm text-secondary-600 mb-2">Large</p>
        <SimplePagination currentPage={2} totalPages={10} onPageChange={action("simple-lg-page-changed")} size="lg" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "SimplePagination dalam berbagai ukuran."
      }
    }
  }
}`,...(Oe=($e=U.parameters)==null?void 0:$e.docs)==null?void 0:Oe.source}}};var He,Je,Ke;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 47;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Sample data
    const allData = Array.from({
      length: totalItems
    }, (_, i) => ({
      id: i + 1,
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: ["Admin", "User", "Moderator"][i % 3],
      status: ["Active", "Inactive"][i % 2]
    }));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = allData.slice(startIndex, startIndex + itemsPerPage);
    return <div className="p-6 max-w-4xl">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">User Management</h3>
          <p className="text-secondary-600 text-sm">
            Total {totalItems} users • Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-secondary-200 overflow-hidden mb-6">
          <table className="w-full">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-200">
              {currentData.map(user => <tr key={user.id} className="hover:bg-secondary-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={clsx("px-2 inline-flex text-xs leading-5 font-semibold rounded-full", user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800")}>
                      {user.status}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={page => {
          setCurrentPage(page);
          action("table-page-changed")(page);
        }} showFirstLast={totalPages > 7} siblingCount={1} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan pagination dengan tabel data. Menampilkan 5 item per halaman dari total 47 item."
      }
    }
  }
}`,...(Ke=(Je=W.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Xe,Ye;B.parameters={...B.parameters,docs:{...(Qe=B.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      totalPages: 20,
      size: "md" as const,
      variant: "default" as const,
      siblingCount: 1,
      showPrevNext: true,
      showFirstLast: false,
      disabled: false
    });
    const [currentPage, setCurrentPage] = useState(5);
    const handleSettingChange = (key: keyof typeof settings, value: any) => {
      setSettings(prev => ({
        ...prev,
        [key]: value
      }));

      // Reset to valid page if needed
      if (key === "totalPages" && currentPage > value) {
        setCurrentPage(Math.max(1, value));
      }
    };
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      action("interactive-page-changed")(page);
    };
    return <div className="w-full max-w-4xl space-y-6">
        <h3 className="text-xl font-semibold">Interactive Pagination Demo</h3>

        {/* Controls */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-secondary-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-2">
              Total Pages:
            </label>
            <select value={settings.totalPages} onChange={e => handleSettingChange("totalPages", parseInt(e.target.value))} className="w-full p-2 border rounded text-sm">
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Size:</label>
            <select value={settings.size} onChange={e => handleSettingChange("size", e.target.value)} className="w-full p-2 border rounded text-sm">
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Variant:</label>
            <select value={settings.variant} onChange={e => handleSettingChange("variant", e.target.value)} className="w-full p-2 border rounded text-sm">
              <option value="default">Default</option>
              <option value="outlined">Outlined</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Sibling Count:
            </label>
            <select value={settings.siblingCount} onChange={e => handleSettingChange("siblingCount", parseInt(e.target.value))} className="w-full p-2 border rounded text-sm">
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>

          <div className="flex flex-col justify-center space-y-2">
            <label className="flex items-center text-sm">
              <input type="checkbox" checked={settings.showPrevNext} onChange={e => handleSettingChange("showPrevNext", e.target.checked)} className="mr-2" />
              Show Prev/Next
            </label>
            <label className="flex items-center text-sm">
              <input type="checkbox" checked={settings.showFirstLast} onChange={e => handleSettingChange("showFirstLast", e.target.checked)} className="mr-2" />
              Show First/Last
            </label>
            <label className="flex items-center text-sm">
              <input type="checkbox" checked={settings.disabled} onChange={e => handleSettingChange("disabled", e.target.checked)} className="mr-2" />
              Disabled
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Current Page:
            </label>
            <input type="number" min={1} max={settings.totalPages} value={currentPage} onChange={e => {
            const page = parseInt(e.target.value);
            if (page >= 1 && page <= settings.totalPages) {
              setCurrentPage(page);
            }
          }} className="w-full p-2 border rounded text-sm" />
          </div>
        </div>

        {/* Status */}
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 text-sm">
            <strong>Current:</strong> Page {currentPage} of{" "}
            {settings.totalPages} •<strong> Buttons visible:</strong>{" "}
            {settings.showPrevNext ? "Prev/Next" : ""}{" "}
            {settings.showFirstLast ? "First/Last" : ""} •
            <strong> State:</strong>{" "}
            {settings.disabled ? "Disabled" : "Enabled"}
          </p>
        </div>

        {/* Pagination */}
        <div className="flex justify-center p-6 bg-white rounded-lg border border-secondary-200">
          <Pagination currentPage={currentPage} totalPages={settings.totalPages} onPageChange={handlePageChange} size={settings.size} variant={settings.variant} siblingCount={settings.siblingCount} showPrevNext={settings.showPrevNext} showFirstLast={settings.showFirstLast} disabled={settings.disabled} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demo interaktif untuk mencoba semua pengaturan pagination. Ubah total halaman, ukuran, variant, dan lihat bagaimana ellipsis bekerja!"
      }
    }
  }
}`,...(Ye=(Xe=B.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};const Na=["Default","WithCurrentPage","Small","Medium","Large","DefaultVariant","Outlined","Minimal","WithAllButtons","SiblingCount0","SiblingCount2","FirstPage","LastPage","SinglePage","FewPages","Disabled","SimplePaginationDefault","SimplePaginationSizes","TableWithPagination","InteractiveDemo"];export{j as Default,L as DefaultVariant,R as Disabled,q as FewPages,_ as FirstPage,B as InteractiveDemo,S as Large,z as LastPage,k as Medium,I as Minimal,F as Outlined,M as SiblingCount0,V as SiblingCount2,T as SimplePaginationDefault,U as SimplePaginationSizes,A as SinglePage,C as Small,W as TableWithPagination,D as WithAllButtons,w as WithCurrentPage,Na as __namedExportsOrder,fa as default};
