import{j as t}from"./jsx-runtime-LnmZrwv1.js";import{a as r}from"./index-B-lxVbXh.js";import{r as s}from"./index-DkvSDgFW.js";import{c as b}from"./clsx-B-dksMZM.js";import{B as F}from"./Button-igjKbdfR.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const Ze={sm:{node:"py-1 px-2 text-xs",icon:"w-3 h-3",indent:"ml-4",expander:"w-3 h-3"},md:{node:"py-1.5 px-3 text-sm",icon:"w-4 h-4",indent:"ml-5",expander:"w-4 h-4"},lg:{node:"py-2 px-4 text-base",icon:"w-5 h-5",indent:"ml-6",expander:"w-5 h-5"}},k=({treeData:o,defaultExpandedKeys:y=[],defaultSelectedKeys:f=[],defaultCheckedKeys:d=[],expandedKeys:g,selectedKeys:x,checkedKeys:i,onExpand:D,onSelect:C,onCheck:h,checkable:Y=!1,selectable:Z=!0,multiple:X=!1,showLine:Ve=!1,showIcon:ze=!1,size:S="md",disabled:Ie=!1,draggable:w=!1,onDragStart:T,onDragEnd:L,onDrop:E,filterTreeNode:ee,loadData:U,className:qe,style:Ae,...Fe})=>{const[Me,Be]=s.useState(y),[$e,Pe]=s.useState(f),[We,_e]=s.useState(d),[Oe,G]=s.useState(null),[V,Q]=s.useState(null),j=g!==void 0?g:Me,N=x!==void 0?x:$e,z=i!==void 0?i:We,I=Ze[S],q=s.useMemo(()=>{const e=new Map,n=l=>{l.forEach(a=>{e.set(a.key,a),a.children&&n(a.children)})};return n(o),e},[o]),A=s.useCallback(e=>{if(!e.children||e.children.length===0)return{checked:z.includes(e.key),indeterminate:!1};const n=e.children.map(c=>A(c)),l=n.filter(c=>c.checked).length,a=n.filter(c=>c.indeterminate).length;return l===0&&a===0?{checked:!1,indeterminate:!1}:l===e.children.length?{checked:!0,indeterminate:!1}:{checked:!1,indeterminate:!0}},[z]),He=s.useCallback(e=>{if(e.disabled)return;const n=j.includes(e.key)?j.filter(l=>l!==e.key):[...j,e.key];g===void 0&&Be(n),D==null||D(n,{node:e,expanded:!j.includes(e.key)}),!j.includes(e.key)&&U&&!e.children&&U(e)},[j,g,D,U]),Je=s.useCallback(e=>{if(e.disabled||!Z||e.selectable===!1)return;let n;X?n=N.includes(e.key)?N.filter(l=>l!==e.key):[...N,e.key]:n=N.includes(e.key)?[]:[e.key],x===void 0&&Pe(n),C==null||C(n,{node:e,selected:!N.includes(e.key)})},[N,x,C,Z,X]),Re=s.useCallback(e=>{if(e.disabled||e.disableCheckbox)return;const n=p=>p.children?p.children.reduce((u,K)=>[...u,K.key,...n(K)],[]):[],{checked:l}=A(e);let a=[...z];if(l){a=a.filter(u=>u!==e.key);const p=n(e);a=a.filter(u=>!p.includes(u))}else a.push(e.key),n(e).forEach(u=>{a.includes(u)||a.push(u)});i===void 0&&_e(a);const c=a.map(p=>q.get(p)).filter(Boolean);h==null||h(a,{node:e,checked:!l,checkedNodes:c})},[z,i,h,A,q]),Ue=s.useCallback((e,n)=>{if(!w||n.disabled){e.preventDefault();return}e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",n.key),T==null||T({node:n,event:e})},[w,T]),Ge=s.useCallback((e,n)=>{G(null),Q(null),L==null||L({node:n,event:e})},[L]),Qe=s.useCallback((e,n)=>{if(!w)return;e.preventDefault(),e.dataTransfer.dropEffect="move";const l=e.currentTarget.getBoundingClientRect(),c=e.clientY-l.top<l.height/2?0:1;G(n.key),Q(c)},[w]),Ye=s.useCallback((e,n)=>{if(!w)return;e.preventDefault();const l=e.dataTransfer.getData("text/plain"),a=q.get(l);a&&a.key!==n.key&&(E==null||E({node:n,dragNode:a,dropToGap:V!==null})),G(null),Q(null)},[w,E,q,V]),te=(e,n=0)=>{if(ee&&!ee(e))return null;const l=j.includes(e.key),a=N.includes(e.key),c=e.children&&e.children.length>0,{checked:p,indeterminate:u}=Y?A(e):{checked:!1,indeterminate:!1},K=Oe===e.key;return t.jsxs("div",{children:[t.jsxs("div",{className:b("flex items-center cursor-pointer transition-colors group",I.node,{"bg-primary-50 text-primary-700":a&&!e.disabled,"opacity-50 cursor-not-allowed":e.disabled,"bg-primary-100":K,"border-t-2 border-primary-500":K&&V===0,"border-b-2 border-primary-500":K&&V===1},!e.disabled&&"hover:bg-secondary-50"),style:{paddingLeft:`${n*(S==="sm"?16:S==="md"?20:24)}px`},draggable:w&&!e.disabled,onDragStart:m=>Ue(m,e),onDragEnd:m=>Ge(m,e),onDragOver:m=>Qe(m,e),onDrop:m=>Ye(m,e),children:[c||!e.isLeaf?t.jsx("button",{className:b("flex items-center justify-center mr-2 rounded transition-colors",I.expander,e.disabled?"cursor-not-allowed":"hover:bg-secondary-200"),onClick:()=>He(e),disabled:e.disabled,children:t.jsx("svg",{className:b("w-3 h-3 transition-transform",l&&"rotate-90"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}):t.jsx("div",{className:b("mr-2",I.expander)}),Y&&t.jsxs("label",{className:b("flex items-center mr-2 cursor-pointer",e.disabled&&"cursor-not-allowed"),children:[t.jsx("input",{type:"checkbox",className:"sr-only",checked:p,ref:m=>{m&&(m.indeterminate=u)},onChange:()=>Re(e),disabled:e.disabled||e.disableCheckbox}),t.jsxs("div",{className:b("w-4 h-4 border-2 rounded transition-colors flex items-center justify-center",{"border-primary-500 bg-primary-500":p,"border-secondary-300":!p&&!u,"border-primary-500 bg-primary-100":u,"opacity-50":e.disabled||e.disableCheckbox}),children:[p&&t.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 13l4 4L19 7"})}),u&&t.jsx("div",{className:"w-2 h-0.5 bg-primary-500 rounded"})]})]}),(ze||e.icon)&&t.jsx("div",{className:b("mr-2 flex-shrink-0",I.icon),children:e.icon||t.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:c?t.jsx("path",{d:"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"}):t.jsx("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"})})}),t.jsx("span",{className:b("flex-1 truncate",{"font-medium":a}),onClick:()=>Je(e),children:e.title}),Ve&&n>0&&t.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-px bg-secondary-200",style:{left:`${(n-1)*(S==="sm"?16:S==="md"?20:24)+8}px`}})]}),c&&l&&t.jsx("div",{children:e.children.map(m=>te(m,n+1))})]},e.key)};return t.jsx("div",{className:b("tree-container select-none",{"opacity-50 pointer-events-none":Ie},qe),style:Ae,...Fe,children:o.map(e=>te(e))})};try{k.displayName="Tree",k.__docgenInfo={description:"",displayName:"Tree",props:{treeData:{defaultValue:null,description:"",name:"treeData",required:!0,type:{name:"TreeNode[]"}},defaultExpandedKeys:{defaultValue:{value:"[]"},description:"",name:"defaultExpandedKeys",required:!1,type:{name:"string[]"}},defaultSelectedKeys:{defaultValue:{value:"[]"},description:"",name:"defaultSelectedKeys",required:!1,type:{name:"string[]"}},defaultCheckedKeys:{defaultValue:{value:"[]"},description:"",name:"defaultCheckedKeys",required:!1,type:{name:"string[]"}},expandedKeys:{defaultValue:null,description:"",name:"expandedKeys",required:!1,type:{name:"string[]"}},selectedKeys:{defaultValue:null,description:"",name:"selectedKeys",required:!1,type:{name:"string[]"}},checkedKeys:{defaultValue:null,description:"",name:"checkedKeys",required:!1,type:{name:"string[]"}},onExpand:{defaultValue:null,description:"",name:"onExpand",required:!1,type:{name:"((expandedKeys: string[], info: { node: TreeNode; expanded: boolean; }) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedKeys: string[], info: { node: TreeNode; selected: boolean; }) => void)"}},onCheck:{defaultValue:null,description:"",name:"onCheck",required:!1,type:{name:"((checkedKeys: string[], info: { node: TreeNode; checked: boolean; checkedNodes: TreeNode[]; }) => void)"}},checkable:{defaultValue:{value:"false"},description:"",name:"checkable",required:!1,type:{name:"boolean"}},selectable:{defaultValue:{value:"true"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},showLine:{defaultValue:{value:"false"},description:"",name:"showLine",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:{value:"false"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},draggable:{defaultValue:{value:"false"},description:"",name:"draggable",required:!1,type:{name:"boolean"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"((info: { node: TreeNode; event: DragEvent<Element>; }) => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((info: { node: TreeNode; event: DragEvent<Element>; }) => void)"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"((info: { node: TreeNode; dragNode: TreeNode; dropToGap: boolean; }) => void)"}},filterTreeNode:{defaultValue:null,description:"",name:"filterTreeNode",required:!1,type:{name:"((node: TreeNode) => boolean)"}},loadData:{defaultValue:null,description:"",name:"loadData",required:!1,type:{name:"((node: TreeNode) => Promise<void>)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const dt={title:"Data Display/Tree",component:k,parameters:{layout:"padded",docs:{description:{component:"Komponen Tree untuk menampilkan data hierarkis seperti folder structure, organization chart, atau menu navigasi. Mendukung selection, checkbox, drag & drop, dan lazy loading dengan berbagai kustomisasi tampilan."}}},tags:["autodocs"],argTypes:{checkable:{control:{type:"boolean"},description:"Apakah menampilkan checkbox"},selectable:{control:{type:"boolean"},description:"Apakah node bisa diselect"},multiple:{control:{type:"boolean"},description:"Apakah multiple selection"},showLine:{control:{type:"boolean"},description:"Apakah menampilkan connector line"},showIcon:{control:{type:"boolean"},description:"Apakah menampilkan default icon"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran tree"},disabled:{control:{type:"boolean"},description:"Apakah disabled"},draggable:{control:{type:"boolean"},description:"Apakah bisa drag and drop"}}},v=[{key:"documents",title:"Documents",children:[{key:"work",title:"Work",children:[{key:"project1",title:"Project 1.docx",isLeaf:!0},{key:"project2",title:"Project 2.pdf",isLeaf:!0},{key:"presentation",title:"Presentation.pptx",isLeaf:!0}]},{key:"personal",title:"Personal",children:[{key:"resume",title:"Resume.pdf",isLeaf:!0},{key:"photos",title:"Photos",children:[{key:"vacation",title:"Vacation 2023",isLeaf:!0},{key:"family",title:"Family",isLeaf:!0}]}]}]},{key:"downloads",title:"Downloads",children:[{key:"software",title:"Software",children:[]},{key:"music",title:"Music",isLeaf:!0},{key:"videos",title:"Videos",isLeaf:!0}]},{key:"desktop",title:"Desktop",disabled:!0,children:[{key:"shortcut1",title:"Shortcut 1",isLeaf:!0}]}],Xe=[{key:"ceo",title:"CEO - John Smith",icon:t.jsx("div",{className:"w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center",children:t.jsx("span",{className:"text-xs text-white font-bold",children:"C"})}),children:[{key:"cto",title:"CTO - Jane Doe",icon:t.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full flex items-center justify-center",children:t.jsx("span",{className:"text-xs text-white font-bold",children:"T"})}),children:[{key:"dev1",title:"Senior Developer - Alice Johnson",isLeaf:!0},{key:"dev2",title:"Junior Developer - Bob Wilson",isLeaf:!0},{key:"qa",title:"QA Engineer - Carol Brown",isLeaf:!0}]},{key:"cmo",title:"CMO - Mike Davis",icon:t.jsx("div",{className:"w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center",children:t.jsx("span",{className:"text-xs text-white font-bold",children:"M"})}),children:[{key:"marketing1",title:"Marketing Specialist - Eva Martinez",isLeaf:!0},{key:"marketing2",title:"Content Creator - David Lee",isLeaf:!0}]},{key:"hr",title:"HR Manager - Sarah Wilson",icon:t.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center",children:t.jsx("span",{className:"text-xs text-white font-bold",children:"H"})}),isLeaf:!0}]}],M={args:{treeData:v,defaultExpandedKeys:["documents"],onExpand:r("node-expanded"),onSelect:r("node-selected")}},B={args:{treeData:v,checkable:!0,defaultExpandedKeys:["documents","work"],defaultCheckedKeys:["project1","resume"],onCheck:r("node-checked"),onExpand:r("node-expanded")}},$={args:{treeData:Xe,showIcon:!0,defaultExpandedKeys:["ceo"],onExpand:r("node-expanded"),onSelect:r("node-selected")}},P={args:{treeData:v,multiple:!0,defaultExpandedKeys:["documents","downloads"],defaultSelectedKeys:["project1","music"],onSelect:r("nodes-selected"),onExpand:r("node-expanded")}},W={args:{treeData:v,showLine:!0,showIcon:!0,defaultExpandedKeys:["documents","work","personal"],onExpand:r("node-expanded"),onSelect:r("node-selected")}},_={render:()=>t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Small"}),t.jsx(k,{treeData:v,size:"sm",showIcon:!0,defaultExpandedKeys:["documents"],onExpand:r("expand-sm")})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Medium (Default)"}),t.jsx(k,{treeData:v,size:"md",showIcon:!0,defaultExpandedKeys:["documents"],onExpand:r("expand-md")})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Large"}),t.jsx(k,{treeData:v,size:"lg",showIcon:!0,defaultExpandedKeys:["documents"],onExpand:r("expand-lg")})]})]})},O={render:()=>{const[o,y]=s.useState([{key:"folder1",title:"Folder 1",children:[{key:"file1",title:"File 1.txt",isLeaf:!0},{key:"file2",title:"File 2.txt",isLeaf:!0}]},{key:"folder2",title:"Folder 2",children:[{key:"file3",title:"File 3.txt",isLeaf:!0}]},{key:"file4",title:"File 4.txt",isLeaf:!0}]),f=d=>{console.log("Drop:",d),r("node-dropped")(d)};return t.jsxs("div",{children:[t.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:"Drag and drop nodes to reorganize the tree structure."}),t.jsx(k,{treeData:o,draggable:!0,showIcon:!0,defaultExpandedKeys:["folder1","folder2"],onDrop:f,onDragStart:r("drag-start"),onDragEnd:r("drag-end")})]})}},H={render:()=>{const[o,y]=s.useState(["documents"]),[f,d]=s.useState([]),[g,x]=s.useState([]);return t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex gap-2",children:[t.jsx(F,{size:"sm",variant:"outline",onClick:()=>y(["documents","work","personal","downloads"]),children:"Expand All"}),t.jsx(F,{size:"sm",variant:"outline",onClick:()=>y([]),children:"Collapse All"}),t.jsx(F,{size:"sm",variant:"outline",onClick:()=>x(["project1","project2","resume"]),children:"Check Some"}),t.jsx(F,{size:"sm",variant:"outline",onClick:()=>x([]),children:"Uncheck All"})]}),t.jsx(k,{treeData:v,checkable:!0,showIcon:!0,expandedKeys:o,selectedKeys:f,checkedKeys:g,onExpand:i=>{y(i),r("controlled-expand")(i)},onSelect:i=>{d(i),r("controlled-select")(i)},onCheck:i=>{x(i),r("controlled-check")(i)}}),t.jsxs("div",{className:"text-xs text-secondary-600 space-y-1",children:[t.jsxs("div",{children:["Expanded: ",o.join(", ")||"none"]}),t.jsxs("div",{children:["Selected: ",f.join(", ")||"none"]}),t.jsxs("div",{children:["Checked: ",g.join(", ")||"none"]})]})]})}},J={render:()=>{const[o,y]=s.useState([{key:"root1",title:"Lazy Load Folder 1"},{key:"root2",title:"Lazy Load Folder 2"},{key:"root3",title:"Normal Folder",children:[{key:"child1",title:"Child 1",isLeaf:!0},{key:"child2",title:"Child 2",isLeaf:!0}]}]),f=d=>new Promise(g=>{setTimeout(()=>{const x=[{key:`${d.key}-child1`,title:`${d.title} - Child 1`,isLeaf:!0},{key:`${d.key}-child2`,title:`${d.title} - Child 2`,isLeaf:!0},{key:`${d.key}-child3`,title:`${d.title} - Child 3`}];y(i=>{const D=C=>C.map(h=>h.key===d.key?{...h,children:x}:h.children?{...h,children:D(h.children)}:h);return D(i)}),g()},1e3)});return t.jsxs("div",{children:[t.jsx("p",{className:"text-sm text-secondary-600 mb-4",children:'Click on "Lazy Load Folder" nodes to load their children dynamically.'}),t.jsx(k,{treeData:o,showIcon:!0,loadData:f,onExpand:r("lazy-expand")})]})}},R={render:()=>{const[o,y]=s.useState(""),f=d=>o?d.title.toLowerCase().includes(o.toLowerCase()):!0;return t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Search Tree"}),t.jsx("input",{type:"text",value:o,onChange:d=>y(d.target.value),placeholder:"Type to filter nodes...",className:"w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"})]}),t.jsx(k,{treeData:v,showIcon:!0,filterTreeNode:f,defaultExpandedKeys:o?["documents","work","personal","downloads"]:["documents"],onSelect:r("search-select")})]})}};var ne,ae,re;M.parameters={...M.parameters,docs:{...(ne=M.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    defaultExpandedKeys: ["documents"],
    onExpand: action("node-expanded"),
    onSelect: action("node-selected")
  }
}`,...(re=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,le,de;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    checkable: true,
    defaultExpandedKeys: ["documents", "work"],
    defaultCheckedKeys: ["project1", "resume"],
    onCheck: action("node-checked"),
    onExpand: action("node-expanded")
  }
}`,...(de=(le=B.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var oe,ie,ce;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    treeData: organizationData,
    showIcon: true,
    defaultExpandedKeys: ["ceo"],
    onExpand: action("node-expanded"),
    onSelect: action("node-selected")
  }
}`,...(ce=(ie=$.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,pe,me;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    multiple: true,
    defaultExpandedKeys: ["documents", "downloads"],
    defaultSelectedKeys: ["project1", "music"],
    onSelect: action("nodes-selected"),
    onExpand: action("node-expanded")
  }
}`,...(me=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,ye,fe;W.parameters={...W.parameters,docs:{...(he=W.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    showLine: true,
    showIcon: true,
    defaultExpandedKeys: ["documents", "work", "personal"],
    onExpand: action("node-expanded"),
    onSelect: action("node-selected")
  }
}`,...(fe=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var xe,ke,ge;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <Tree treeData={sampleTreeData} size="sm" showIcon defaultExpandedKeys={["documents"]} onExpand={action("expand-sm")} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (Default)</h3>
        <Tree treeData={sampleTreeData} size="md" showIcon defaultExpandedKeys={["documents"]} onExpand={action("expand-md")} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <Tree treeData={sampleTreeData} size="lg" showIcon defaultExpandedKeys={["documents"]} onExpand={action("expand-lg")} />
      </div>
    </div>
}`,...(ge=(ke=_.parameters)==null?void 0:ke.docs)==null?void 0:ge.source}}};var be,ve,De;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const [treeData, setTreeData] = useState<TreeNode[]>([{
      key: "folder1",
      title: "Folder 1",
      children: [{
        key: "file1",
        title: "File 1.txt",
        isLeaf: true
      }, {
        key: "file2",
        title: "File 2.txt",
        isLeaf: true
      }]
    }, {
      key: "folder2",
      title: "Folder 2",
      children: [{
        key: "file3",
        title: "File 3.txt",
        isLeaf: true
      }]
    }, {
      key: "file4",
      title: "File 4.txt",
      isLeaf: true
    }]);
    const handleDrop = (info: {
      node: TreeNode;
      dragNode: TreeNode;
    }) => {
      console.log("Drop:", info);
      // In a real app, you would update the tree structure here
      action("node-dropped")(info);
    };
    return <div>
        <p className="text-sm text-secondary-600 mb-4">
          Drag and drop nodes to reorganize the tree structure.
        </p>
        <Tree treeData={treeData} draggable showIcon defaultExpandedKeys={["folder1", "folder2"]} onDrop={handleDrop} onDragStart={action("drag-start")} onDragEnd={action("drag-end")} />
      </div>;
  }
}`,...(De=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:De.source}}};var we,je,Ne;H.parameters={...H.parameters,docs:{...(we=H.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<string[]>(["documents"]);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
    return <div className="space-y-4">
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setExpandedKeys(["documents", "work", "personal", "downloads"])}>
            Expand All
          </Button>
          <Button size="sm" variant="outline" onClick={() => setExpandedKeys([])}>
            Collapse All
          </Button>
          <Button size="sm" variant="outline" onClick={() => setCheckedKeys(["project1", "project2", "resume"])}>
            Check Some
          </Button>
          <Button size="sm" variant="outline" onClick={() => setCheckedKeys([])}>
            Uncheck All
          </Button>
        </div>

        <Tree treeData={sampleTreeData} checkable showIcon expandedKeys={expandedKeys} selectedKeys={selectedKeys} checkedKeys={checkedKeys} onExpand={keys => {
        setExpandedKeys(keys);
        action("controlled-expand")(keys);
      }} onSelect={keys => {
        setSelectedKeys(keys);
        action("controlled-select")(keys);
      }} onCheck={keys => {
        setCheckedKeys(keys);
        action("controlled-check")(keys);
      }} />

        <div className="text-xs text-secondary-600 space-y-1">
          <div>Expanded: {expandedKeys.join(", ") || "none"}</div>
          <div>Selected: {selectedKeys.join(", ") || "none"}</div>
          <div>Checked: {checkedKeys.join(", ") || "none"}</div>
        </div>
      </div>;
  }
}`,...(Ne=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};var Ce,Ke,Se;J.parameters={...J.parameters,docs:{...(Ce=J.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const [treeData, setTreeData] = useState<TreeNode[]>([{
      key: "root1",
      title: "Lazy Load Folder 1"
    }, {
      key: "root2",
      title: "Lazy Load Folder 2"
    }, {
      key: "root3",
      title: "Normal Folder",
      children: [{
        key: "child1",
        title: "Child 1",
        isLeaf: true
      }, {
        key: "child2",
        title: "Child 2",
        isLeaf: true
      }]
    }]);
    const loadData = (node: TreeNode): Promise<void> => {
      return new Promise(resolve => {
        setTimeout(() => {
          // Simulate API call
          const newChildren = [{
            key: \`\${node.key}-child1\`,
            title: \`\${node.title} - Child 1\`,
            isLeaf: true
          }, {
            key: \`\${node.key}-child2\`,
            title: \`\${node.title} - Child 2\`,
            isLeaf: true
          }, {
            key: \`\${node.key}-child3\`,
            title: \`\${node.title} - Child 3\`
          } // This one can also be lazy loaded
          ];
          setTreeData(prevData => {
            const updateNode = (nodes: TreeNode[]): TreeNode[] => {
              return nodes.map(n => {
                if (n.key === node.key) {
                  return {
                    ...n,
                    children: newChildren
                  };
                }
                if (n.children) {
                  return {
                    ...n,
                    children: updateNode(n.children)
                  };
                }
                return n;
              });
            };
            return updateNode(prevData);
          });
          resolve();
        }, 1000);
      });
    };
    return <div>
        <p className="text-sm text-secondary-600 mb-4">
          Click on "Lazy Load Folder" nodes to load their children dynamically.
        </p>
        <Tree treeData={treeData} showIcon loadData={loadData} onExpand={action("lazy-expand")} />
      </div>;
  }
}`,...(Se=(Ke=J.parameters)==null?void 0:Ke.docs)==null?void 0:Se.source}}};var Te,Le,Ee;R.parameters={...R.parameters,docs:{...(Te=R.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const [searchValue, setSearchValue] = useState("");
    const filterTreeNode = (node: TreeNode): boolean => {
      if (!searchValue) return true;
      return node.title.toLowerCase().includes(searchValue.toLowerCase());
    };
    return <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Search Tree</label>
          <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Type to filter nodes..." className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
        </div>

        <Tree treeData={sampleTreeData} showIcon filterTreeNode={filterTreeNode} defaultExpandedKeys={searchValue ? ["documents", "work", "personal", "downloads"] : ["documents"]} onSelect={action("search-select")} />
      </div>;
  }
}`,...(Ee=(Le=R.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};const ot=["Default","WithCheckbox","WithIcons","MultipleSelection","WithLines","Sizes","DragAndDrop","ControlledTree","LazyLoading","SearchableTree"];export{H as ControlledTree,M as Default,O as DragAndDrop,J as LazyLoading,P as MultipleSelection,R as SearchableTree,_ as Sizes,B as WithCheckbox,$ as WithIcons,W as WithLines,ot as __namedExportsOrder,dt as default};
