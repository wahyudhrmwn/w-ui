import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as s}from"./index-B-lxVbXh.js";import{R as y,r as P}from"./index-DkvSDgFW.js";import{c as b}from"./clsx-B-dksMZM.js";import{B as X}from"./Button-igjKbdfR.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const E=a=>{if(a===0)return"0 Bytes";const o=1024,n=["Bytes","KB","MB","GB"],l=Math.floor(Math.log(a)/Math.log(o));return parseFloat((a/Math.pow(o,l)).toFixed(2))+" "+n[l]},tt=a=>a.type.startsWith("image/"),st=a=>new Promise(o=>{const n=new FileReader;n.onload=()=>o(n.result),n.readAsDataURL(a)}),at=()=>e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),nt=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"})}),it=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"})}),c=y.forwardRef(({accept:a,multiple:o=!1,maxSize:n,maxFiles:l,disabled:u=!1,className:m,children:Be,onFilesSelected:B,onUpload:R,onRemove:A,fileList:_,onFileListChange:I,showPreview:Re=!0,dragAndDrop:V=!0,texts:Ae={},...Ie},lt)=>{const[Ve,Oe]=y.useState([]),[h,O]=y.useState(!1),[qe,q]=y.useState(0),W=y.useRef(null),$=_!==void 0,g=$?_:Ve,{uploadText:We="Click to upload files",dragText:Ee="Drag and drop files here",selectText:Xe="or select files",maxSizeText:H=n?`Max file size: ${E(n)}`:"",typeText:J=a?`Accepted types: ${a}`:""}=Ae,v=t=>{$||Oe(t),I==null||I(t)},_e=t=>n&&t.size>n?`File size exceeds ${E(n)}`:a&&!a.split(",").map(i=>i.trim()).some(i=>i.startsWith(".")?t.name.toLowerCase().endsWith(i.toLowerCase()):t.type.match(i.replace("*",".*")))?`File type not accepted. Accepted types: ${a}`:l&&g.length>=l?`Maximum ${l} files allowed`:null,G=async t=>{if(u)return;const d=[];for(let i=0;i<t.length;i++){const p=t[i],f=_e(p);if(f){const et={id:`${Date.now()}-${i}`,file:p,status:"error",error:f};d.push(et);continue}const r={id:`${Date.now()}-${i}`,file:p,status:R?"pending":"success",progress:0};Re&&tt(p)&&(r.previewUrl=await st(p)),d.push(r)}const x=o?[...g,...d]:d;if(v(x),B==null||B(t),R){for(const i of d)if(i.status==="pending")try{const p=x.map(r=>r.id===i.id?{...r,status:"uploading"}:r);v(p),await R(i.file);const f=x.map(r=>r.id===i.id?{...r,status:"success",progress:100}:r);v(f)}catch(p){const f=x.map(r=>r.id===i.id?{...r,status:"error",error:p instanceof Error?p.message:"Upload failed"}:r);v(f)}}},$e=t=>{t.target.files&&t.target.files.length>0&&G(t.target.files)},He=t=>{const d=g.filter(x=>x.id!==t);v(d),A==null||A(t)},Je=t=>{t.preventDefault(),t.stopPropagation(),q(d=>d+1),t.dataTransfer.items&&t.dataTransfer.items.length>0&&O(!0)},Ge=t=>{t.preventDefault(),t.stopPropagation(),q(d=>d-1),qe<=1&&O(!1)},Ke=t=>{t.preventDefault(),t.stopPropagation()},Qe=t=>{t.preventDefault(),t.stopPropagation(),O(!1),q(0),t.dataTransfer.files&&t.dataTransfer.files.length>0&&(G(t.dataTransfer.files),t.dataTransfer.clearData())},Ye=()=>{W.current&&W.current.click()},Ze=V?{onDragEnter:Je,onDragLeave:Ge,onDragOver:Ke,onDrop:Qe}:{};return e.jsxs("div",{className:b("upload-container",m),children:[e.jsxs("div",{className:b("relative border-2 border-dashed rounded-lg transition-colors duration-200",h?"border-primary-500 bg-primary-50":u?"border-secondary-300 bg-secondary-50 cursor-not-allowed":"border-secondary-300 hover:border-secondary-400 cursor-pointer","p-6 text-center"),onClick:u?void 0:Ye,...Ze,children:[e.jsx("input",{ref:W,type:"file",accept:a,multiple:o,onChange:$e,disabled:u,className:"sr-only",...Ie}),Be||e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:b("mx-auto text-secondary-400",h&&"text-primary-500"),children:e.jsx(at,{})}),e.jsxs("div",{children:[e.jsx("div",{className:b("text-sm font-medium",h?"text-primary-600":"text-secondary-900"),children:h&&V?Ee:We}),!h&&V&&e.jsx("div",{className:"text-sm text-secondary-500 mt-1",children:Xe})]}),e.jsxs("div",{className:"text-xs text-secondary-500 space-y-1",children:[H&&e.jsx("div",{children:H}),J&&e.jsx("div",{children:J}),l&&e.jsxs("div",{children:["Maximum ",l," files"]})]})]})]}),g.length>0&&e.jsx("div",{className:"mt-4 space-y-2",children:g.map(t=>e.jsxs("div",{className:b("flex items-center p-3 border rounded-lg",t.status==="error"?"border-red-200 bg-red-50":t.status==="success"?"border-green-200 bg-green-50":"border-secondary-200 bg-secondary-50"),children:[e.jsx("div",{className:"flex-shrink-0 mr-3",children:t.previewUrl?e.jsx("img",{src:t.previewUrl,alt:t.file.name,className:"w-10 h-10 object-cover rounded"}):e.jsx("div",{className:"w-10 h-10 flex items-center justify-center text-secondary-400",children:e.jsx(nt,{})})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-sm font-medium text-secondary-900 truncate",children:t.file.name}),e.jsx("div",{className:"text-xs text-secondary-500",children:E(t.file.size)}),e.jsxs("div",{className:"mt-1",children:[t.status==="uploading"&&e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-24 bg-secondary-200 rounded-full h-1",children:e.jsx("div",{className:"bg-primary-600 h-1 rounded-full transition-all duration-300",style:{width:`${t.progress||0}%`}})}),e.jsxs("span",{className:"text-xs text-primary-600",children:[t.progress||0,"%"]})]}),t.status==="success"&&e.jsx("span",{className:"text-xs text-green-600",children:"✓ Uploaded"}),t.status==="error"&&e.jsxs("span",{className:"text-xs text-red-600",children:["✗ ",t.error]})]})]}),e.jsx("button",{onClick:()=>He(t.id),className:"flex-shrink-0 ml-2 p-1 text-secondary-400 hover:text-red-600 transition-colors","aria-label":"Remove file",children:e.jsx(it,{})})]},t.id))})]})});c.displayName="Upload";try{c.displayName="Upload",c.__docgenInfo={description:"",displayName:"Upload",props:{accept:{defaultValue:null,description:"File types yang diterima",name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"false"},description:"Apakah multiple files",name:"multiple",required:!1,type:{name:"boolean"}},maxSize:{defaultValue:null,description:"Maximum file size dalam bytes",name:"maxSize",required:!1,type:{name:"number"}},maxFiles:{defaultValue:null,description:"Maximum jumlah file (untuk multiple)",name:"maxFiles",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Apakah disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children untuk custom UI",name:"children",required:!1,type:{name:"ReactNode"}},onFilesSelected:{defaultValue:null,description:"Callback ketika file dipilih",name:"onFilesSelected",required:!1,type:{name:"((files: FileList) => void)"}},onUpload:{defaultValue:null,description:"Callback untuk custom upload",name:"onUpload",required:!1,type:{name:"((file: File) => Promise<void>)"}},onRemove:{defaultValue:null,description:"Callback ketika file dihapus",name:"onRemove",required:!1,type:{name:"((fileId: string) => void)"}},fileList:{defaultValue:null,description:"List file yang sudah diupload (controlled)",name:"fileList",required:!1,type:{name:"UploadFile[]"}},onFileListChange:{defaultValue:null,description:"Callback ketika file list berubah",name:"onFileListChange",required:!1,type:{name:"((files: UploadFile[]) => void)"}},showPreview:{defaultValue:{value:"true"},description:"Apakah menampilkan preview untuk gambar",name:"showPreview",required:!1,type:{name:"boolean"}},dragAndDrop:{defaultValue:{value:"true"},description:"Apakah drag and drop",name:"dragAndDrop",required:!1,type:{name:"boolean"}},texts:{defaultValue:{value:"{}"},description:"Custom text dan labels",name:"texts",required:!1,type:{name:"{ uploadText?: string; dragText?: string; selectText?: string | undefined; maxSizeText?: string | undefined; typeText?: string | undefined; } | undefined"}}}}}catch{}const xt={title:"Form Controls/Upload",component:c,parameters:{layout:"padded",docs:{description:{component:"Komponen Upload untuk file handling dengan drag & drop functionality. Mendukung validasi file, preview gambar, progress tracking, dan berbagai konfigurasi upload yang fleksibel."}}},tags:["autodocs"],argTypes:{accept:{control:{type:"text"},description:"File types yang diterima"},multiple:{control:{type:"boolean"},description:"Apakah multiple files"},maxSize:{control:{type:"number"},description:"Maximum file size dalam bytes"},maxFiles:{control:{type:"number"},description:"Maximum jumlah file"},disabled:{control:{type:"boolean"},description:"Apakah disabled"},showPreview:{control:{type:"boolean"},description:"Apakah menampilkan preview untuk gambar"},dragAndDrop:{control:{type:"boolean"},description:"Apakah drag and drop"}}},S={args:{onFilesSelected:s("files-selected"),onFileListChange:s("file-list-changed"),onRemove:s("file-removed")}},F={args:{multiple:!0,maxFiles:5,onFilesSelected:s("multiple-files-selected"),onFileListChange:s("file-list-changed"),onRemove:s("file-removed")}},j={args:{accept:"image/*",multiple:!0,maxFiles:4,maxSize:5*1024*1024,showPreview:!0,onFilesSelected:s("images-selected"),onFileListChange:s("file-list-changed"),onRemove:s("file-removed")}},w={args:{accept:".pdf,.doc,.docx,.txt",multiple:!0,maxSize:10*1024*1024,showPreview:!1,texts:{uploadText:"Upload Documents",dragText:"Drop documents here",selectText:"or browse files",typeText:"PDF, DOC, DOCX, TXT files only"},onFilesSelected:s("documents-selected"),onFileListChange:s("file-list-changed"),onRemove:s("file-removed")}},N={args:{maxSize:2*1024*1024,accept:"image/*,application/pdf",multiple:!0,onFilesSelected:s("files-with-limit-selected"),onFileListChange:s("file-list-changed"),onRemove:s("file-removed")}},T={render:()=>{var n;const[a,o]=P.useState([]);return e.jsxs("div",{className:"w-full max-w-md",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Profile Picture Upload"}),e.jsx(c,{accept:"image/*",multiple:!1,maxSize:3*1024*1024,fileList:a,onFileListChange:l=>{o(l),s("profile-file-changed")(l)},onFilesSelected:s("profile-file-selected"),onRemove:s("profile-file-removed"),texts:{uploadText:"Upload Profile Picture",dragText:"Drop your image here",selectText:"or click to select",maxSizeText:"Max size: 3MB",typeText:"Images only"}}),a.length>0&&e.jsxs("div",{className:"mt-4 text-sm text-secondary-600",children:["Selected: ",(n=a[0])==null?void 0:n.file.name]})]})}},L={render:()=>{const[a,o]=P.useState([]),n=async l=>{if(await new Promise(u=>setTimeout(u,2e3)),Math.random()>.7)throw new Error("Upload failed - server error");s("file-uploaded")(l.name)};return e.jsxs("div",{className:"w-full max-w-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Upload with Progress Tracking"}),e.jsx(c,{multiple:!0,maxFiles:3,fileList:a,onFileListChange:o,onUpload:n,onFilesSelected:s("files-with-upload-selected"),onRemove:s("file-with-upload-removed"),texts:{uploadText:"Upload Files",dragText:"Drop files for auto-upload"}})]})}},k={render:()=>e.jsxs("div",{className:"w-full max-w-md",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Custom Upload UI"}),e.jsx(c,{accept:"image/*",multiple:!0,onFilesSelected:s("custom-files-selected"),onFileListChange:s("custom-file-list-changed"),onRemove:s("custom-file-removed"),children:e.jsxs("div",{className:"py-12",children:[e.jsx("div",{className:"mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4",children:e.jsx("svg",{className:"w-8 h-8 text-primary-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg font-semibold text-secondary-900 mb-2",children:"Upload Images"}),e.jsx("div",{className:"text-sm text-secondary-500 mb-4",children:"Drag and drop your images here or click to browse"}),e.jsx(X,{variant:"primary",size:"sm",children:"Browse Files"})]})]})})]})},C={args:{disabled:!0,onFilesSelected:s("disabled-files-selected")}},D={args:{dragAndDrop:!1,multiple:!0,texts:{uploadText:"Click to select files",selectText:"(drag and drop disabled)"},onFilesSelected:s("no-drag-files-selected"),onFileListChange:s("file-list-changed"),onRemove:s("file-removed")}},U={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-medium text-secondary-900 mb-4",children:"PDF Files Only (Max 5MB)"}),e.jsx(c,{accept:"application/pdf",maxSize:5*1024*1024,multiple:!0,onFilesSelected:s("pdf-files-selected"),onFileListChange:s("pdf-file-list-changed"),texts:{uploadText:"Upload PDF Documents",typeText:"PDF files only",maxSizeText:"Max size: 5MB per file"}})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-medium text-secondary-900 mb-4",children:"Images Only (Max 2MB, Max 3 files)"}),e.jsx(c,{accept:"image/*",maxSize:2*1024*1024,maxFiles:3,multiple:!0,onFilesSelected:s("image-files-selected"),onFileListChange:s("image-file-list-changed"),texts:{uploadText:"Upload Images",typeText:"Images only",maxSizeText:"Max size: 2MB per image"}})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-medium text-secondary-900 mb-4",children:"Code Files Only"}),e.jsx(c,{accept:".js,.jsx,.ts,.tsx,.css,.html,.json",multiple:!0,onFilesSelected:s("code-files-selected"),onFileListChange:s("code-file-list-changed"),texts:{uploadText:"Upload Code Files",typeText:"JS, JSX, TS, TSX, CSS, HTML, JSON"}})]})]})},M={render:()=>{const[a,o]=P.useState([]),[n,l]=P.useState(!1),u=async()=>{l(!0),await new Promise(m=>setTimeout(m,2e3)),s("form-submitted")({attachments:a.map(m=>m.file.name)}),l(!1)};return e.jsxs("div",{className:"max-w-2xl mx-auto",children:[e.jsxs("div",{className:"bg-white border border-secondary-200 rounded-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-6",children:"Submit Support Ticket"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Subject"}),e.jsx("input",{type:"text",placeholder:"Brief description of the issue",className:"w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Description"}),e.jsx("textarea",{rows:4,placeholder:"Detailed description of the issue...",className:"w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-secondary-700 mb-2",children:"Attachments (Optional)"}),e.jsx(c,{accept:"image/*,.pdf,.doc,.docx,.txt,.log",multiple:!0,maxFiles:5,maxSize:10*1024*1024,fileList:a,onFileListChange:m=>{o(m),s("attachments-changed")(m)},onFilesSelected:s("attachments-selected"),onRemove:s("attachment-removed"),texts:{uploadText:"Attach Files",dragText:"Drop files here",selectText:"or browse",typeText:"Images, PDF, DOC, TXT, LOG files",maxSizeText:"Max 10MB per file, 5 files total"}})]}),e.jsxs("div",{className:"flex justify-end space-x-3 pt-4 border-t border-secondary-200",children:[e.jsx(X,{variant:"outline",children:"Cancel"}),e.jsx(X,{variant:"primary",disabled:n,onClick:u,children:n?"Submitting...":"Submit Ticket"})]})]})]}),a.length>0&&e.jsxs("div",{className:"mt-4 p-4 bg-secondary-50 rounded-lg",children:[e.jsx("div",{className:"text-sm text-secondary-700",children:e.jsxs("strong",{children:["Attached Files (",a.length,"):"]})}),e.jsx("div",{className:"text-sm text-secondary-600 mt-1",children:a.map(m=>m.file.name).join(", ")})]})]})}},z={args:{accept:"image/*,application/pdf",multiple:!0,maxSize:5*1024*1024,maxFiles:3,disabled:!1,showPreview:!0,dragAndDrop:!0,onFilesSelected:s("playground-files-selected"),onFileListChange:s("playground-file-list-changed"),onRemove:s("playground-file-removed")}};var K,Q,Y;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    onFilesSelected: action("files-selected"),
    onFileListChange: action("file-list-changed"),
    onRemove: action("file-removed")
  }
}`,...(Y=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    multiple: true,
    maxFiles: 5,
    onFilesSelected: action("multiple-files-selected"),
    onFileListChange: action("file-list-changed"),
    onRemove: action("file-removed")
  }
}`,...(te=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,ne;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    accept: "image/*",
    multiple: true,
    maxFiles: 4,
    maxSize: 5 * 1024 * 1024,
    // 5MB
    showPreview: true,
    onFilesSelected: action("images-selected"),
    onFileListChange: action("file-list-changed"),
    onRemove: action("file-removed")
  }
}`,...(ne=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,le,re;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    accept: ".pdf,.doc,.docx,.txt",
    multiple: true,
    maxSize: 10 * 1024 * 1024,
    // 10MB
    showPreview: false,
    texts: {
      uploadText: "Upload Documents",
      dragText: "Drop documents here",
      selectText: "or browse files",
      typeText: "PDF, DOC, DOCX, TXT files only"
    },
    onFilesSelected: action("documents-selected"),
    onFileListChange: action("file-list-changed"),
    onRemove: action("file-removed")
  }
}`,...(re=(le=w.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var oe,de,ce;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    maxSize: 2 * 1024 * 1024,
    // 2MB limit
    accept: "image/*,application/pdf",
    multiple: true,
    onFilesSelected: action("files-with-limit-selected"),
    onFileListChange: action("file-list-changed"),
    onRemove: action("file-removed")
  }
}`,...(ce=(de=N.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,pe,ue;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    return <div className="w-full max-w-md">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Profile Picture Upload
        </h3>
        <Upload accept="image/*" multiple={false} maxSize={3 * 1024 * 1024} // 3MB
      fileList={fileList} onFileListChange={files => {
        setFileList(files);
        action("profile-file-changed")(files);
      }} onFilesSelected={action("profile-file-selected")} onRemove={action("profile-file-removed")} texts={{
        uploadText: "Upload Profile Picture",
        dragText: "Drop your image here",
        selectText: "or click to select",
        maxSizeText: "Max size: 3MB",
        typeText: "Images only"
      }} />

        {fileList.length > 0 && <div className="mt-4 text-sm text-secondary-600">
            Selected: {fileList[0]?.file.name}
          </div>}
      </div>;
  }
}`,...(ue=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var xe,fe,he;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    // Simulate upload function
    const mockUpload = async (file: File) => {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate random success/failure
      if (Math.random() > 0.7) {
        throw new Error("Upload failed - server error");
      }
      action("file-uploaded")(file.name);
    };
    return <div className="w-full max-w-lg">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Upload with Progress Tracking
        </h3>
        <Upload multiple maxFiles={3} fileList={fileList} onFileListChange={setFileList} onUpload={mockUpload} onFilesSelected={action("files-with-upload-selected")} onRemove={action("file-with-upload-removed")} texts={{
        uploadText: "Upload Files",
        dragText: "Drop files for auto-upload"
      }} />
      </div>;
  }
}`,...(he=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ge,ve,ye;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-full max-w-md">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Custom Upload UI
        </h3>
        <Upload accept="image/*" multiple onFilesSelected={action("custom-files-selected")} onFileListChange={action("custom-file-list-changed")} onRemove={action("custom-file-removed")}>
          <div className="py-12">
            <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="text-center">
              <div className="text-lg font-semibold text-secondary-900 mb-2">
                Upload Images
              </div>
              <div className="text-sm text-secondary-500 mb-4">
                Drag and drop your images here or click to browse
              </div>
              <Button variant="primary" size="sm">
                Browse Files
              </Button>
            </div>
          </div>
        </Upload>
      </div>;
  }
}`,...(ye=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var be,Se,Fe;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onFilesSelected: action("disabled-files-selected")
  }
}`,...(Fe=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};var je,we,Ne;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    dragAndDrop: false,
    multiple: true,
    texts: {
      uploadText: "Click to select files",
      selectText: "(drag and drop disabled)"
    },
    onFilesSelected: action("no-drag-files-selected"),
    onFileListChange: action("file-list-changed"),
    onRemove: action("file-removed")
  }
}`,...(Ne=(we=D.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var Te,Le,ke;U.parameters={...U.parameters,docs:{...(Te=U.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    return <div className="space-y-8">
        <div>
          <h4 className="text-md font-medium text-secondary-900 mb-4">
            PDF Files Only (Max 5MB)
          </h4>
          <Upload accept="application/pdf" maxSize={5 * 1024 * 1024} multiple onFilesSelected={action("pdf-files-selected")} onFileListChange={action("pdf-file-list-changed")} texts={{
          uploadText: "Upload PDF Documents",
          typeText: "PDF files only",
          maxSizeText: "Max size: 5MB per file"
        }} />
        </div>

        <div>
          <h4 className="text-md font-medium text-secondary-900 mb-4">
            Images Only (Max 2MB, Max 3 files)
          </h4>
          <Upload accept="image/*" maxSize={2 * 1024 * 1024} maxFiles={3} multiple onFilesSelected={action("image-files-selected")} onFileListChange={action("image-file-list-changed")} texts={{
          uploadText: "Upload Images",
          typeText: "Images only",
          maxSizeText: "Max size: 2MB per image"
        }} />
        </div>

        <div>
          <h4 className="text-md font-medium text-secondary-900 mb-4">
            Code Files Only
          </h4>
          <Upload accept=".js,.jsx,.ts,.tsx,.css,.html,.json" multiple onFilesSelected={action("code-files-selected")} onFileListChange={action("code-file-list-changed")} texts={{
          uploadText: "Upload Code Files",
          typeText: "JS, JSX, TS, TSX, CSS, HTML, JSON"
        }} />
        </div>
      </div>;
  }
}`,...(ke=(Le=U.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Ce,De,Ue;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const [attachments, setAttachments] = useState<UploadFile[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async () => {
      setIsSubmitting(true);

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      action("form-submitted")({
        attachments: attachments.map(f => f.file.name)
      });
      setIsSubmitting(false);
    };
    return <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-secondary-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Submit Support Ticket
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Subject
              </label>
              <input type="text" placeholder="Brief description of the issue" className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Description
              </label>
              <textarea rows={4} placeholder="Detailed description of the issue..." className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Attachments (Optional)
              </label>
              <Upload accept="image/*,.pdf,.doc,.docx,.txt,.log" multiple maxFiles={5} maxSize={10 * 1024 * 1024} // 10MB
            fileList={attachments} onFileListChange={files => {
              setAttachments(files);
              action("attachments-changed")(files);
            }} onFilesSelected={action("attachments-selected")} onRemove={action("attachment-removed")} texts={{
              uploadText: "Attach Files",
              dragText: "Drop files here",
              selectText: "or browse",
              typeText: "Images, PDF, DOC, TXT, LOG files",
              maxSizeText: "Max 10MB per file, 5 files total"
            }} />
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-secondary-200">
              <Button variant="outline">Cancel</Button>
              <Button variant="primary" disabled={isSubmitting} onClick={handleSubmit}>
                {isSubmitting ? "Submitting..." : "Submit Ticket"}
              </Button>
            </div>
          </div>
        </div>

        {attachments.length > 0 && <div className="mt-4 p-4 bg-secondary-50 rounded-lg">
            <div className="text-sm text-secondary-700">
              <strong>Attached Files ({attachments.length}):</strong>
            </div>
            <div className="text-sm text-secondary-600 mt-1">
              {attachments.map(f => f.file.name).join(", ")}
            </div>
          </div>}
      </div>;
  }
}`,...(Ue=(De=M.parameters)==null?void 0:De.docs)==null?void 0:Ue.source}}};var Me,ze,Pe;z.parameters={...z.parameters,docs:{...(Me=z.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    accept: "image/*,application/pdf",
    multiple: true,
    maxSize: 5 * 1024 * 1024,
    maxFiles: 3,
    disabled: false,
    showPreview: true,
    dragAndDrop: true,
    onFilesSelected: action("playground-files-selected"),
    onFileListChange: action("playground-file-list-changed"),
    onRemove: action("playground-file-removed")
  }
}`,...(Pe=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:Pe.source}}};const ft=["Default","MultipleFiles","ImageUpload","DocumentUpload","WithFileSizeLimit","SingleFile","WithCustomUpload","CustomUploadArea","DisabledState","NoDragDrop","FileValidation","RealWorldExample","Playground"];export{k as CustomUploadArea,S as Default,C as DisabledState,w as DocumentUpload,U as FileValidation,j as ImageUpload,F as MultipleFiles,D as NoDragDrop,z as Playground,M as RealWorldExample,T as SingleFile,L as WithCustomUpload,N as WithFileSizeLimit,ft as __namedExportsOrder,xt as default};
