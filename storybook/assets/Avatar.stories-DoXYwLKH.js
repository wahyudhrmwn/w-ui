import{j as a}from"./jsx-runtime-LnmZrwv1.js";import{R as s}from"./index-DkvSDgFW.js";import{c}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";const Ya={xs:"w-6 h-6 text-xs",sm:"w-8 h-8 text-sm",md:"w-10 h-10 text-base",lg:"w-12 h-12 text-lg",xl:"w-16 h-16 text-xl","2xl":"w-20 h-20 text-2xl"},Za={circle:"rounded-full",rounded:"rounded-lg",square:"rounded-none"},_={primary:"bg-primary-500 text-white",secondary:"bg-secondary-500 text-white",success:"bg-green-500 text-white",warning:"bg-yellow-500 text-white",error:"bg-red-500 text-white"},e=s.forwardRef(({variant:t="circle",size:i="md",src:r,alt:d,placeholder:W,bgColor:p="secondary",className:L,...m},N)=>{const[n,o]=s.useState(!1),[u,G]=s.useState(!1);s.useEffect(()=>{r&&(o(!1),G(!1))},[r]);const Ta=()=>{o(!0)},Ka=()=>{G(!0)},H=r&&!n,O=!r||n,$a=Q=>Q?Q.split(" ").map(Fa=>Fa.charAt(0)).join("").substring(0,2).toUpperCase():"";return a.jsxs("div",{ref:N,className:c("relative inline-flex items-center justify-center font-medium overflow-hidden","bg-cover bg-center bg-no-repeat",Ya[i],Za[t],O&&_[p],L),...m,children:[H&&a.jsx("img",{src:r,alt:d||"Avatar",className:c("w-full h-full object-cover transition-opacity duration-200",u?"opacity-100":"opacity-0"),onError:Ta,onLoad:Ka}),O&&a.jsx("span",{className:"select-none",children:$a(W||d)||"?"}),H&&!u&&a.jsx("div",{className:c("absolute inset-0 flex items-center justify-center",_[p]),children:a.jsxs("svg",{className:"animate-spin w-1/2 h-1/2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})]})});e.displayName="Avatar";const l=s.forwardRef(({max:t=4,size:i="md",variant:r="circle",className:d,children:W,...p},L)=>{const m=s.Children.toArray(W),N=m.slice(0,t),n=Math.max(0,m.length-t);return a.jsxs("div",{ref:L,className:c("flex -space-x-2",d),...p,children:[N.map((o,u)=>s.isValidElement(o)?s.cloneElement(o,{key:u,size:i,variant:r,className:c("ring-2 ring-white",o.props.className)}):o),n>0&&a.jsx(e,{size:i,variant:r,placeholder:`+${n}`,bgColor:"secondary",className:"ring-2 ring-white"})]})});l.displayName="AvatarGroup";try{e.displayName="Avatar",e.__docgenInfo={description:"",displayName:"Avatar",props:{variant:{defaultValue:{value:"circle"},description:"Variant styling untuk avatar",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rounded"'},{value:'"square"'}]}},size:{defaultValue:{value:"md"},description:"Ukuran avatar",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},src:{defaultValue:null,description:"Source URL gambar",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"Alt text untuk gambar",name:"alt",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Placeholder text ketika tidak ada gambar",name:"placeholder",required:!1,type:{name:"string"}},bgColor:{defaultValue:{value:"secondary"},description:"Warna background untuk placeholder",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}try{l.displayName="AvatarGroup",l.__docgenInfo={description:"",displayName:"AvatarGroup",props:{max:{defaultValue:{value:"4"},description:"Maksimal avatar yang ditampilkan",name:"max",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"Size untuk semua avatar dalam group",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},variant:{defaultValue:{value:"circle"},description:"Variant untuk semua avatar dalam group",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rounded"'},{value:'"square"'}]}}}}}catch{}const oe={title:"Data Display/Avatar",component:e,parameters:{layout:"centered",docs:{description:{component:"Komponen Avatar untuk menampilkan foto profil pengguna dengan berbagai ukuran, bentuk, dan state placeholder. Mendukung loading state dan Avatar Group untuk menampilkan multiple avatar."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["circle","rounded","square"],description:"Bentuk avatar"},size:{control:"select",options:["xs","sm","md","lg","xl","2xl"],description:"Ukuran avatar"},src:{control:"text",description:"URL gambar avatar"},alt:{control:"text",description:"Alt text untuk gambar"},placeholder:{control:"text",description:"Text placeholder ketika tidak ada gambar"},bgColor:{control:"select",options:["primary","secondary","success","warning","error"],description:"Warna background placeholder"}},args:{placeholder:"John Doe"}},h={args:{placeholder:"John Doe"}},g={args:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"John Doe",placeholder:"John Doe"}},f={args:{src:"https://broken-image-url.jpg",alt:"John Doe",placeholder:"John Doe"}},x={args:{size:"xs",placeholder:"JD"}},v={args:{size:"sm",placeholder:"JD"}},b={args:{size:"md",placeholder:"JD"}},y={args:{size:"lg",placeholder:"JD"}},D={args:{size:"xl",placeholder:"JD"}},J={args:{size:"2xl",placeholder:"JD"}},j={args:{variant:"circle",placeholder:"JD"}},A={args:{variant:"rounded",placeholder:"JD"}},k={args:{variant:"square",placeholder:"JD"}},S={args:{placeholder:"JD",bgColor:"primary"}},w={args:{placeholder:"JD",bgColor:"success"}},q={args:{placeholder:"JD",bgColor:"warning"}},z={args:{placeholder:"JD",bgColor:"error"}},B={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(e,{size:"xs",placeholder:"XS"}),a.jsx(e,{size:"sm",placeholder:"SM"}),a.jsx(e,{size:"md",placeholder:"MD"}),a.jsx(e,{size:"lg",placeholder:"LG"}),a.jsx(e,{size:"xl",placeholder:"XL"}),a.jsx(e,{size:"2xl",placeholder:"2XL"})]}),parameters:{docs:{description:{story:"Semua ukuran avatar yang tersedia dari XS hingga 2XL."}}}},E={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(e,{variant:"circle",placeholder:"Circle",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),a.jsx(e,{variant:"rounded",placeholder:"Rounded",src:"https://images.unsplash.com/photo-1494790108755-2616b612b5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),a.jsx(e,{variant:"square",placeholder:"Square",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"})]}),parameters:{docs:{description:{story:"Semua bentuk avatar: circle (bulat), rounded (sudut membulat), dan square (kotak)."}}}},C={render:()=>a.jsxs(l,{max:3,children:[a.jsx(e,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"John Doe"}),a.jsx(e,{src:"https://images.unsplash.com/photo-1494790108755-2616b612b5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"Jane Smith"}),a.jsx(e,{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"Mike Johnson"}),a.jsx(e,{placeholder:"Alex Brown",bgColor:"primary"}),a.jsx(e,{placeholder:"Sarah Davis",bgColor:"success"})]}),parameters:{docs:{description:{story:"Avatar Group untuk menampilkan beberapa avatar secara bersamaan dengan batasan maksimal dan indikator jumlah tersisa."}}}},M={render:()=>a.jsxs(l,{max:4,size:"lg",children:[a.jsx(e,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"John Doe"}),a.jsx(e,{src:"https://images.unsplash.com/photo-1494790108755-2616b612b5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"Jane Smith"}),a.jsx(e,{placeholder:"Mike Johnson",bgColor:"primary"}),a.jsx(e,{placeholder:"Alex Brown",bgColor:"success"}),a.jsx(e,{placeholder:"Sarah Davis",bgColor:"warning"}),a.jsx(e,{placeholder:"Tom Wilson",bgColor:"error"})]}),parameters:{docs:{description:{story:"Avatar Group dengan ukuran large dan lebih banyak avatar."}}}};var V,I,R;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placeholder: "John Doe"
  }
}`,...(R=(I=h.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var X,U,P;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "John Doe",
    placeholder: "John Doe"
  }
}`,...(P=(U=g.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var T,K,$;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    src: "https://broken-image-url.jpg",
    alt: "John Doe",
    placeholder: "John Doe"
  }
}`,...($=(K=f.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var F,Y,Z;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: "xs",
    placeholder: "JD"
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var aa,ea,ra;v.parameters={...v.parameters,docs:{...(aa=v.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    size: "sm",
    placeholder: "JD"
  }
}`,...(ra=(ea=v.parameters)==null?void 0:ea.docs)==null?void 0:ra.source}}};var sa,oa,ta;b.parameters={...b.parameters,docs:{...(sa=b.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    size: "md",
    placeholder: "JD"
  }
}`,...(ta=(oa=b.parameters)==null?void 0:oa.docs)==null?void 0:ta.source}}};var na,ca,la;y.parameters={...y.parameters,docs:{...(na=y.parameters)==null?void 0:na.docs,source:{originalSource:`{
  args: {
    size: "lg",
    placeholder: "JD"
  }
}`,...(la=(ca=y.parameters)==null?void 0:ca.docs)==null?void 0:la.source}}};var ia,da,pa;D.parameters={...D.parameters,docs:{...(ia=D.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  args: {
    size: "xl",
    placeholder: "JD"
  }
}`,...(pa=(da=D.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var ma,ua,ha;J.parameters={...J.parameters,docs:{...(ma=J.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  args: {
    size: "2xl",
    placeholder: "JD"
  }
}`,...(ha=(ua=J.parameters)==null?void 0:ua.docs)==null?void 0:ha.source}}};var ga,fa,xa;j.parameters={...j.parameters,docs:{...(ga=j.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  args: {
    variant: "circle",
    placeholder: "JD"
  }
}`,...(xa=(fa=j.parameters)==null?void 0:fa.docs)==null?void 0:xa.source}}};var va,ba,ya;A.parameters={...A.parameters,docs:{...(va=A.parameters)==null?void 0:va.docs,source:{originalSource:`{
  args: {
    variant: "rounded",
    placeholder: "JD"
  }
}`,...(ya=(ba=A.parameters)==null?void 0:ba.docs)==null?void 0:ya.source}}};var Da,Ja,ja;k.parameters={...k.parameters,docs:{...(Da=k.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  args: {
    variant: "square",
    placeholder: "JD"
  }
}`,...(ja=(Ja=k.parameters)==null?void 0:Ja.docs)==null?void 0:ja.source}}};var Aa,ka,Sa;S.parameters={...S.parameters,docs:{...(Aa=S.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  args: {
    placeholder: "JD",
    bgColor: "primary"
  }
}`,...(Sa=(ka=S.parameters)==null?void 0:ka.docs)==null?void 0:Sa.source}}};var wa,qa,za;w.parameters={...w.parameters,docs:{...(wa=w.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  args: {
    placeholder: "JD",
    bgColor: "success"
  }
}`,...(za=(qa=w.parameters)==null?void 0:qa.docs)==null?void 0:za.source}}};var Ba,Ea,Ca;q.parameters={...q.parameters,docs:{...(Ba=q.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  args: {
    placeholder: "JD",
    bgColor: "warning"
  }
}`,...(Ca=(Ea=q.parameters)==null?void 0:Ea.docs)==null?void 0:Ca.source}}};var Ma,Wa,La;z.parameters={...z.parameters,docs:{...(Ma=z.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  args: {
    placeholder: "JD",
    bgColor: "error"
  }
}`,...(La=(Wa=z.parameters)==null?void 0:Wa.docs)==null?void 0:La.source}}};var Na,Ga,Ha;B.parameters={...B.parameters,docs:{...(Na=B.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar size="xs" placeholder="XS" />
      <Avatar size="sm" placeholder="SM" />
      <Avatar size="md" placeholder="MD" />
      <Avatar size="lg" placeholder="LG" />
      <Avatar size="xl" placeholder="XL" />
      <Avatar size="2xl" placeholder="2XL" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran avatar yang tersedia dari XS hingga 2XL."
      }
    }
  }
}`,...(Ha=(Ga=B.parameters)==null?void 0:Ga.docs)==null?void 0:Ha.source}}};var Oa,Qa,_a;E.parameters={...E.parameters,docs:{...(Oa=E.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar variant="circle" placeholder="Circle" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      <Avatar variant="rounded" placeholder="Rounded" src="https://images.unsplash.com/photo-1494790108755-2616b612b5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      <Avatar variant="square" placeholder="Square" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua bentuk avatar: circle (bulat), rounded (sudut membulat), dan square (kotak)."
      }
    }
  }
}`,...(_a=(Qa=E.parameters)==null?void 0:Qa.docs)==null?void 0:_a.source}}};var Va,Ia,Ra;C.parameters={...C.parameters,docs:{...(Va=C.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={3}>
      <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="John Doe" />
      <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Jane Smith" />
      <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Mike Johnson" />
      <Avatar placeholder="Alex Brown" bgColor="primary" />
      <Avatar placeholder="Sarah Davis" bgColor="success" />
    </AvatarGroup>,
  parameters: {
    docs: {
      description: {
        story: "Avatar Group untuk menampilkan beberapa avatar secara bersamaan dengan batasan maksimal dan indikator jumlah tersisa."
      }
    }
  }
}`,...(Ra=(Ia=C.parameters)==null?void 0:Ia.docs)==null?void 0:Ra.source}}};var Xa,Ua,Pa;M.parameters={...M.parameters,docs:{...(Xa=M.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={4} size="lg">
      <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="John Doe" />
      <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Jane Smith" />
      <Avatar placeholder="Mike Johnson" bgColor="primary" />
      <Avatar placeholder="Alex Brown" bgColor="success" />
      <Avatar placeholder="Sarah Davis" bgColor="warning" />
      <Avatar placeholder="Tom Wilson" bgColor="error" />
    </AvatarGroup>,
  parameters: {
    docs: {
      description: {
        story: "Avatar Group dengan ukuran large dan lebih banyak avatar."
      }
    }
  }
}`,...(Pa=(Ua=M.parameters)==null?void 0:Ua.docs)==null?void 0:Pa.source}}};const te=["Default","WithImage","WithBrokenImage","ExtraSmall","Small","Medium","Large","ExtraLarge","ExtraLarge2","Circle","Rounded","Square","PrimaryBg","SuccessBg","WarningBg","ErrorBg","AllSizes","AllVariants","AvatarGroupStory","AvatarGroupLarge"];export{B as AllSizes,E as AllVariants,M as AvatarGroupLarge,C as AvatarGroupStory,j as Circle,h as Default,z as ErrorBg,D as ExtraLarge,J as ExtraLarge2,x as ExtraSmall,y as Large,b as Medium,S as PrimaryBg,A as Rounded,v as Small,k as Square,w as SuccessBg,q as WarningBg,f as WithBrokenImage,g as WithImage,te as __namedExportsOrder,oe as default};
