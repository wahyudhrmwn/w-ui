import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as o}from"./index-B-lxVbXh.js";import{R as T,r as A}from"./index-DkvSDgFW.js";import{c as w}from"./clsx-B-dksMZM.js";import{B as Pe}from"./Badge-ZhQ0DxHi.js";import{B as K}from"./Button-igjKbdfR.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const ne={sm:{cell:"px-3 py-2 text-sm",header:"px-3 py-3 text-sm font-medium"},md:{cell:"px-4 py-3 text-base",header:"px-4 py-4 text-base font-medium"},lg:{cell:"px-6 py-4 text-lg",header:"px-6 py-5 text-lg font-medium"}},Oe=({direction:t})=>e.jsxs("span",{className:"inline-flex flex-col ml-1",children:[e.jsx("svg",{className:w("w-3 h-3 -mb-0.5",t==="asc"?"text-primary-600":"text-secondary-400"),fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})}),e.jsx("svg",{className:w("w-3 h-3",t==="desc"?"text-primary-600":"text-secondary-400"),fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),Qe=({columns:t,rows:s=5})=>e.jsx(e.Fragment,{children:Array.from({length:s}).map((d,l)=>e.jsx("tr",{className:"border-b border-secondary-200",children:Array.from({length:t}).map((y,v)=>e.jsx("td",{className:"px-4 py-3",children:e.jsx("div",{className:"h-4 bg-secondary-200 rounded animate-pulse"})},v))},l))}),c=({data:t,columns:s,loading:d=!1,emptyText:l="No data available",bordered:y=!1,striped:v=!1,hoverable:O=!0,size:L="md",rowKey:D="id",rowSelection:n,onRowClick:f,rowClassName:h,className:j,scroll:C,caption:X,...Je})=>{const[z,Y]=T.useState(null),[S,Q]=T.useState(null),[N,Z]=T.useState((n==null?void 0:n.selectedRowKeys)||[]),R=T.useCallback((a,r)=>typeof D=="function"?D(a,r):String(a[D]||r),[D]),k=T.useMemo(()=>{if(!z||!S)return t;const a=s.find(r=>r.key===z);return a?[...t].sort((r,p)=>{if(a.sorter){const b=a.sorter(r,p);return S==="asc"?b:-b}const g=a.dataIndex?r[a.dataIndex]:r,i=a.dataIndex?p[a.dataIndex]:p;return g<i?S==="asc"?-1:1:g>i?S==="asc"?1:-1:0}):t},[t,s,z,S]),He=a=>{a.sortable&&(z===a.key?S==="asc"?Q("desc"):S==="desc"&&(Y(null),Q(null)):(Y(a.key),Q("asc")))},Fe=(a,r)=>{var b,x;const p=R(a,0);let g;(n==null?void 0:n.type)==="radio"?g=r?[p]:[]:g=r?[...N,p]:N.filter(B=>B!==p),Z(g);const i=k.filter(B=>g.includes(R(B,0)));(b=n==null?void 0:n.onChange)==null||b.call(n,g,i),(x=n==null?void 0:n.onSelect)==null||x.call(n,a,r,i)},Ge=a=>{var i,b;const r=a?k.map((x,B)=>R(x,B)):[];Z(r);const p=a?k:[],g=a?k:k.filter(x=>N.includes(R(x,0)));(i=n==null?void 0:n.onChange)==null||i.call(n,r,p),(b=n==null?void 0:n.onSelectAll)==null||b.call(n,a,p,g)},ee=k.length>0&&N.length===k.length,ae=N.length>0&&N.length<k.length,I=T.useMemo(()=>{const a=[...s];return n&&a.unshift({key:"selection",title:n.type==="checkbox"?e.jsx("input",{type:"checkbox",checked:ee,ref:r=>{r&&(r.indeterminate=ae)},onChange:r=>Ge(r.target.checked),className:"rounded border-secondary-300 text-primary-600 focus:ring-primary-500"}):"",width:50,fixed:n.fixed?"left":void 0,render:(r,p,g)=>{const i=R(p,g),b=N.includes(i);return e.jsx("input",{type:n.type||"checkbox",name:n.type==="radio"?"table-radio":void 0,checked:b,onChange:x=>Fe(p,x.target.checked),className:"rounded border-secondary-300 text-primary-600 focus:ring-primary-500",onClick:x=>x.stopPropagation()})}}),a},[s,n,ee,ae,N,R]),te=e.jsxs("table",{className:w("w-full",j),...Je,children:[X&&e.jsx("caption",{className:"text-left mb-4 text-secondary-600",children:X}),e.jsx("thead",{className:"bg-secondary-50",children:e.jsx("tr",{children:I.map(a=>e.jsx("th",{className:w("text-left font-medium text-secondary-900 border-b border-secondary-200",ne[L].header,a.align==="center"&&"text-center",a.align==="right"&&"text-right",a.sortable&&"cursor-pointer select-none hover:bg-secondary-100",y&&"border-r border-secondary-200 last:border-r-0",a.headerClassName),style:{width:a.width},onClick:()=>He(a),children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:a.title}),a.sortable&&e.jsx(Oe,{direction:z===a.key?S:null})]})},a.key))})}),e.jsx("tbody",{className:"bg-white",children:d?e.jsx(Qe,{columns:I.length}):k.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:I.length,className:"px-4 py-8 text-center text-secondary-500",children:l})}):k.map((a,r)=>{const p=R(a,r),g=N.includes(p);return e.jsx("tr",{className:w("border-b border-secondary-200 transition-colors",v&&r%2===1&&"bg-secondary-50",O&&"hover:bg-secondary-50",g&&"bg-primary-50",f&&"cursor-pointer",h==null?void 0:h(a,r)),onClick:()=>f==null?void 0:f(a,r),children:I.map(i=>{const b=i.dataIndex?a[i.dataIndex]:a,x=i.render?i.render(b,a,r):String(b??"");return e.jsx("td",{className:w("text-secondary-900",ne[L].cell,i.align==="center"&&"text-center",i.align==="right"&&"text-right",y&&"border-r border-secondary-200 last:border-r-0",i.cellClassName),children:x},i.key)})},p)})})]});return C!=null&&C.x||C!=null&&C.y?e.jsx("div",{className:w("overflow-auto",y&&"border border-secondary-200 rounded-lg"),style:{maxWidth:C.x,maxHeight:C.y},children:te}):e.jsx("div",{className:w(y&&"border border-secondary-200 rounded-lg overflow-hidden"),children:te})};c.displayName="Table";try{c.displayName="Table",c.__docgenInfo={description:"",displayName:"Table",props:{data:{defaultValue:null,description:"Data untuk table",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"Konfigurasi kolom",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},loading:{defaultValue:{value:"false"},description:"Loading state",name:"loading",required:!1,type:{name:"boolean"}},emptyText:{defaultValue:{value:"No data available"},description:"Empty state message",name:"emptyText",required:!1,type:{name:"string"}},bordered:{defaultValue:{value:"false"},description:"Apakah menampilkan border",name:"bordered",required:!1,type:{name:"boolean"}},striped:{defaultValue:{value:"false"},description:"Apakah menampilkan zebra stripes",name:"striped",required:!1,type:{name:"boolean"}},hoverable:{defaultValue:{value:"true"},description:"Apakah hover effect aktif",name:"hoverable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Ukuran table",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},rowKey:{defaultValue:{value:"id"},description:"Row key untuk identifikasi unique row",name:"rowKey",required:!1,type:{name:"string | number | symbol | ((record: T, index: number) => string)"}},rowSelection:{defaultValue:null,description:"Row selection configuration",name:"rowSelection",required:!1,type:{name:'{ selectedRowKeys?: string[]; onChange?: ((selectedRowKeys: string[], selectedRows: T[]) => void); onSelectAll?: ((selected: boolean, selectedRows: T[], changeRows: T[]) => void) | undefined; onSelect?: ((record: T, selected: boolean, selectedRows: T[]) => void) | undefined; type?: "checkbox"...'}},onRowClick:{defaultValue:null,description:"Callback ketika row diklik",name:"onRowClick",required:!1,type:{name:"((record: T, index: number) => void)"}},rowClassName:{defaultValue:null,description:"Custom row className",name:"rowClassName",required:!1,type:{name:"((record: T, index: number) => string)"}},className:{defaultValue:null,description:"Custom className untuk table",name:"className",required:!1,type:{name:"string"}},scroll:{defaultValue:null,description:"Scroll configuration",name:"scroll",required:!1,type:{name:"{ x?: string | number; y?: string | number; } | undefined"}},caption:{defaultValue:null,description:"Caption untuk table",name:"caption",required:!1,type:{name:"ReactNode"}}}}}catch{}const ra={title:"Data Display/Table",component:c,parameters:{layout:"padded",docs:{description:{component:"Komponen Table yang powerful untuk menampilkan data dalam bentuk tabel. Mendukung sorting, selection, paging, dan berbagai kustomisasi tampilan."}}},tags:["autodocs"],argTypes:{data:{description:"Data untuk table",control:!1},columns:{description:"Konfigurasi kolom",control:!1},loading:{control:{type:"boolean"},description:"Loading state"},bordered:{control:{type:"boolean"},description:"Apakah menampilkan border"},striped:{control:{type:"boolean"},description:"Apakah menampilkan zebra stripes"},hoverable:{control:{type:"boolean"},description:"Apakah hover effect aktif"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran table"},emptyText:{control:{type:"text"},description:"Empty state message"}}},m=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",age:32,joinDate:"2023-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"active",age:28,joinDate:"2023-02-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Moderator",status:"inactive",age:35,joinDate:"2023-03-10"},{id:4,name:"Alice Wilson",email:"alice@example.com",role:"User",status:"pending",age:24,joinDate:"2023-04-05"},{id:5,name:"Charlie Brown",email:"charlie@example.com",role:"Admin",status:"active",age:29,joinDate:"2023-01-25"}],u=[{key:"name",title:"Name",dataIndex:"name",sortable:!0},{key:"email",title:"Email",dataIndex:"email",sortable:!0},{key:"role",title:"Role",dataIndex:"role",sortable:!0},{key:"status",title:"Status",dataIndex:"status",render:t=>{const s={active:"success",inactive:"secondary",pending:"warning"};return e.jsx(Pe,{variant:s[t],children:t})}},{key:"age",title:"Age",dataIndex:"age",sortable:!0,align:"center"}],We=[{key:"name",title:"Name",dataIndex:"name",sortable:!0,width:200},{key:"email",title:"Email",dataIndex:"email",sortable:!0,width:250},{key:"role",title:"Role",dataIndex:"role",sortable:!0,width:120,render:t=>e.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${t==="Admin"?"bg-red-100 text-red-800":t==="Moderator"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:t})},{key:"status",title:"Status",dataIndex:"status",width:100,render:t=>{const s={active:"success",inactive:"secondary",pending:"warning"};return e.jsx(Pe,{variant:s[t],children:t})}},{key:"joinDate",title:"Join Date",dataIndex:"joinDate",sortable:!0,width:120,render:t=>new Date(t).toLocaleDateString()},{key:"actions",title:"Actions",width:120,align:"center",render:(t,s)=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(K,{size:"sm",variant:"outline",onClick:d=>{d.stopPropagation(),o("edit-clicked")(s)},children:"Edit"}),e.jsx(K,{size:"sm",variant:"destructive",onClick:d=>{d.stopPropagation(),o("delete-clicked")(s)},children:"Delete"})]})}],V={args:{data:m,columns:u,bordered:!1,striped:!1,hoverable:!0,size:"md",onRowClick:o("row-clicked")}},_={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Small"}),e.jsx(c,{data:m.slice(0,3),columns:u.slice(0,4),size:"sm",bordered:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Medium (Default)"}),e.jsx(c,{data:m.slice(0,3),columns:u.slice(0,4),size:"md",bordered:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Large"}),e.jsx(c,{data:m.slice(0,3),columns:u.slice(0,4),size:"lg",bordered:!0})]})]})},q={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Basic"}),e.jsx(c,{data:m,columns:u})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Bordered"}),e.jsx(c,{data:m,columns:u,bordered:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Striped"}),e.jsx(c,{data:m,columns:u,striped:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Bordered + Striped"}),e.jsx(c,{data:m,columns:u,bordered:!0,striped:!0})]})]})},M={render:()=>{const[t,s]=A.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-sm text-secondary-600",children:["Selected: ",t.join(", ")]}),e.jsx(c,{data:m,columns:u,bordered:!0,rowSelection:{selectedRowKeys:t,onChange:(d,l)=>{s(d),o("selection-changed")(d,l)},onSelect:o("row-selected"),onSelectAll:o("select-all")},onRowClick:o("row-clicked")})]})}},U={render:()=>{const[t,s]=A.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-sm text-secondary-600",children:["Selected: ",t.join(", ")]}),e.jsx(c,{data:m,columns:u,bordered:!0,rowSelection:{type:"radio",selectedRowKeys:t,onChange:(d,l)=>{s(d),o("radio-selection-changed")(d,l)},onSelect:o("radio-selected")}})]})}},E={args:{data:m,columns:u,bordered:!0,onRowClick:o("row-clicked")}},$={args:{data:[],columns:u,loading:!0,bordered:!0}},P={args:{data:[],columns:u,bordered:!0,emptyText:"No users found"}},W={render:()=>{const[t,s]=A.useState(["1","3"]);return e.jsx(c,{data:m,columns:We,bordered:!0,striped:!0,caption:"User Management Table",rowSelection:{selectedRowKeys:t,onChange:s,onSelect:o("row-selected"),onSelectAll:o("select-all")},onRowClick:o("row-clicked"),rowClassName:(d,l)=>d.status==="inactive"?"opacity-60":""})}},J={render:()=>{const t=Array.from({length:50},(d,l)=>({id:l+1,name:`User ${l+1}`,email:`user${l+1}@example.com`,role:["Admin","User","Moderator"][l%3],status:["active","inactive","pending"][l%3],age:20+l%40,joinDate:`2023-${String(Math.floor(l/12)+1).padStart(2,"0")}-${String(l%12+1).padStart(2,"0")}`})),s=[...We,{key:"description",title:"Description",width:300,render:()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."},{key:"location",title:"Location",width:200,render:(d,l)=>`City ${l.id}`}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Horizontal Scroll"}),e.jsx(c,{data:m,columns:s,bordered:!0,scroll:{x:1200}})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Vertical Scroll"}),e.jsx(c,{data:t,columns:u,bordered:!0,scroll:{y:300}})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Both Scrolls"}),e.jsx(c,{data:t,columns:s,bordered:!0,scroll:{x:1200,y:400}})]})]})}},H={args:{data:m,columns:u,bordered:!0,rowClassName:(t,s)=>t.status==="inactive"?"bg-red-50":t.status==="pending"?"bg-yellow-50":s%2===1?"bg-blue-50":""}},F={render:()=>{const[t,s]=A.useState(m),[d,l]=A.useState([]),[y,v]=A.useState(!1),O=f=>{v(!0),setTimeout(()=>{s(h=>h.filter(j=>j.id!==f.id)),l(h=>h.filter(j=>j!==String(f.id))),v(!1),o("deleted")(f)},1e3)},L=()=>{d.length!==0&&(v(!0),setTimeout(()=>{s(f=>f.filter(h=>!d.includes(String(h.id)))),l([]),v(!1),o("bulk-deleted")(d)},1e3))},D=()=>{v(!0),setTimeout(()=>{s(m),l([]),v(!1),o("refreshed")()},1e3)},n=[...u.slice(0,-1),{key:"actions",title:"Actions",align:"center",render:(f,h)=>e.jsxs("div",{className:"flex gap-1",children:[e.jsx(K,{size:"sm",variant:"outline",onClick:j=>{j.stopPropagation(),o("edit-clicked")(h)},children:"Edit"}),e.jsx(K,{size:"sm",variant:"destructive",onClick:j=>{j.stopPropagation(),O(h)},disabled:y,children:"Delete"})]})}];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"text-sm text-secondary-600",children:["Selected: ",d.length," items"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(K,{variant:"destructive",disabled:d.length===0||y,onClick:L,children:"Delete Selected"}),e.jsx(K,{variant:"outline",onClick:D,disabled:y,children:"Refresh"})]})]}),e.jsx(c,{data:t,columns:n,bordered:!0,loading:y,rowSelection:{selectedRowKeys:d,onChange:l,onSelect:o("row-selected"),onSelectAll:o("select-all")},onRowClick:o("row-clicked"),emptyText:y?"Loading...":"No data available"})]})}},G={args:{data:m,columns:u,loading:!1,bordered:!0,striped:!1,hoverable:!0,size:"md",emptyText:"No data available",onRowClick:o("row-clicked")}};var se,re,le;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    bordered: false,
    striped: false,
    hoverable: true,
    size: "md",
    onRowClick: action("row-clicked")
  }
}`,...(le=(re=V.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var de,oe,ie;_.parameters={..._.parameters,docs:{...(de=_.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Small</h3>
        <Table data={sampleData.slice(0, 3)} columns={basicColumns.slice(0, 4)} size="sm" bordered />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Medium (Default)</h3>
        <Table data={sampleData.slice(0, 3)} columns={basicColumns.slice(0, 4)} size="md" bordered />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Large</h3>
        <Table data={sampleData.slice(0, 3)} columns={basicColumns.slice(0, 4)} size="lg" bordered />
      </div>
    </div>
}`,...(ie=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,me,ue;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Basic</h3>
        <Table data={sampleData} columns={basicColumns} />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Bordered</h3>
        <Table data={sampleData} columns={basicColumns} bordered />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Striped</h3>
        <Table data={sampleData} columns={basicColumns} striped />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Bordered + Striped</h3>
        <Table data={sampleData} columns={basicColumns} bordered striped />
      </div>
    </div>
}`,...(ue=(me=q.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,ge,be;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
    return <div className="space-y-4">
        <div className="text-sm text-secondary-600">
          Selected: {selectedRowKeys.join(", ")}
        </div>

        <Table data={sampleData} columns={basicColumns} bordered rowSelection={{
        selectedRowKeys,
        onChange: (keys, rows) => {
          setSelectedRowKeys(keys);
          action("selection-changed")(keys, rows);
        },
        onSelect: action("row-selected"),
        onSelectAll: action("select-all")
      }} onRowClick={action("row-clicked")} />
      </div>;
  }
}`,...(be=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,xe,ye;U.parameters={...U.parameters,docs:{...(he=U.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
    return <div className="space-y-4">
        <div className="text-sm text-secondary-600">
          Selected: {selectedRowKeys.join(", ")}
        </div>

        <Table data={sampleData} columns={basicColumns} bordered rowSelection={{
        type: "radio",
        selectedRowKeys,
        onChange: (keys, rows) => {
          setSelectedRowKeys(keys);
          action("radio-selection-changed")(keys, rows);
        },
        onSelect: action("radio-selected")
      }} />
      </div>;
  }
}`,...(ye=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var fe,ve,ke;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    bordered: true,
    onRowClick: action("row-clicked")
  }
}`,...(ke=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var je,Ne,Ce;$.parameters={...$.parameters,docs:{...(je=$.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: basicColumns,
    loading: true,
    bordered: true
  }
}`,...(Ce=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:Ce.source}}};var Se,we,Re;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: basicColumns,
    bordered: true,
    emptyText: "No users found"
  }
}`,...(Re=(we=P.parameters)==null?void 0:we.docs)==null?void 0:Re.source}}};var De,Te,Ke;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>(["1", "3"]);
    return <Table data={sampleData} columns={advancedColumns} bordered striped caption="User Management Table" rowSelection={{
      selectedRowKeys,
      onChange: setSelectedRowKeys,
      onSelect: action("row-selected"),
      onSelectAll: action("select-all")
    }} onRowClick={action("row-clicked")} rowClassName={(record, index) => record.status === "inactive" ? "opacity-60" : ""} />;
  }
}`,...(Ke=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ke.source}}};var Ae,ze,Be;J.parameters={...J.parameters,docs:{...(Ae=J.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    // Generate more data for scrolling
    const largeData = Array.from({
      length: 50
    }, (_, i) => ({
      id: i + 1,
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: ["Admin", "User", "Moderator"][i % 3],
      status: ["active", "inactive", "pending"][i % 3] as "active" | "inactive" | "pending",
      age: 20 + i % 40,
      joinDate: \`2023-\${String(Math.floor(i / 12) + 1).padStart(2, "0")}-\${String(i % 12 + 1).padStart(2, "0")}\`
    }));
    const wideColumns: TableColumn[] = [...advancedColumns, {
      key: "description",
      title: "Description",
      width: 300,
      render: () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
    }, {
      key: "location",
      title: "Location",
      width: 200,
      render: (_, record) => \`City \${record.id}\`
    }];
    return <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Horizontal Scroll</h3>
          <Table data={sampleData} columns={wideColumns} bordered scroll={{
          x: 1200
        }} />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Vertical Scroll</h3>
          <Table data={largeData} columns={basicColumns} bordered scroll={{
          y: 300
        }} />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Both Scrolls</h3>
          <Table data={largeData} columns={wideColumns} bordered scroll={{
          x: 1200,
          y: 400
        }} />
        </div>
      </div>;
  }
}`,...(Be=(ze=J.parameters)==null?void 0:ze.docs)==null?void 0:Be.source}}};var Le,Ie,Ve;H.parameters={...H.parameters,docs:{...(Le=H.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    bordered: true,
    rowClassName: (record: User, index: number) => {
      if (record.status === "inactive") return "bg-red-50";
      if (record.status === "pending") return "bg-yellow-50";
      if (index % 2 === 1) return "bg-blue-50";
      return "";
    }
  }
}`,...(Ve=(Ie=H.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var _e,qe,Me;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(sampleData);
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const handleDelete = (record: User) => {
      setLoading(true);
      setTimeout(() => {
        setData(prev => prev.filter(item => item.id !== record.id));
        setSelectedRowKeys(prev => prev.filter(key => key !== String(record.id)));
        setLoading(false);
        action("deleted")(record);
      }, 1000);
    };
    const handleBulkDelete = () => {
      if (selectedRowKeys.length === 0) return;
      setLoading(true);
      setTimeout(() => {
        setData(prev => prev.filter(item => !selectedRowKeys.includes(String(item.id))));
        setSelectedRowKeys([]);
        setLoading(false);
        action("bulk-deleted")(selectedRowKeys);
      }, 1000);
    };
    const handleRefresh = () => {
      setLoading(true);
      setTimeout(() => {
        setData(sampleData);
        setSelectedRowKeys([]);
        setLoading(false);
        action("refreshed")();
      }, 1000);
    };
    const interactiveColumns: TableColumn<User>[] = [...basicColumns.slice(0, -1),
    // Remove age column to make room
    {
      key: "actions",
      title: "Actions",
      align: "center",
      render: (_, record: User) => <div className="flex gap-1">
            <Button size="sm" variant="outline" onClick={e => {
          e.stopPropagation();
          action("edit-clicked")(record);
        }}>
              Edit
            </Button>
            <Button size="sm" variant="destructive" onClick={e => {
          e.stopPropagation();
          handleDelete(record);
        }} disabled={loading}>
              Delete
            </Button>
          </div>
    }];
    return <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-secondary-600">
            Selected: {selectedRowKeys.length} items
          </div>
          <div className="flex gap-2">
            <Button variant="destructive" disabled={selectedRowKeys.length === 0 || loading} onClick={handleBulkDelete}>
              Delete Selected
            </Button>
            <Button variant="outline" onClick={handleRefresh} disabled={loading}>
              Refresh
            </Button>
          </div>
        </div>

        <Table data={data} columns={interactiveColumns} bordered loading={loading} rowSelection={{
        selectedRowKeys,
        onChange: setSelectedRowKeys,
        onSelect: action("row-selected"),
        onSelectAll: action("select-all")
      }} onRowClick={action("row-clicked")} emptyText={loading ? "Loading..." : "No data available"} />
      </div>;
  }
}`,...(Me=(qe=F.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var Ue,Ee,$e;G.parameters={...G.parameters,docs:{...(Ue=G.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    loading: false,
    bordered: true,
    striped: false,
    hoverable: true,
    size: "md",
    emptyText: "No data available",
    onRowClick: action("row-clicked")
  }
}`,...($e=(Ee=G.parameters)==null?void 0:Ee.docs)==null?void 0:$e.source}}};const la=["Default","Sizes","Variants","WithSelection","WithRadioSelection","Sortable","Loading","Empty","Advanced","ScrollableTable","CustomRowClassName","InteractiveDemo","Playground"];export{W as Advanced,H as CustomRowClassName,V as Default,P as Empty,F as InteractiveDemo,$ as Loading,G as Playground,J as ScrollableTable,_ as Sizes,E as Sortable,q as Variants,U as WithRadioSelection,M as WithSelection,la as __namedExportsOrder,ra as default};
