import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as r}from"./index-B-lxVbXh.js";import{B as n}from"./Button-BPqCfLaF.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";import"./index-DkvSDgFW.js";import"./clsx-B-dksMZM.js";const pe=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),ge=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})}),Ie={title:"Form Controls/Button",component:n,parameters:{layout:"centered",docs:{description:{component:"Komponen Button yang fleksibel dengan berbagai variant, ukuran, dan state. Mendukung icons dan loading state."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","destructive"],description:"Variant styling untuk button"},size:{control:"select",options:["sm","md","lg","xl"],description:"Ukuran button"},loading:{control:"boolean",description:"Menampilkan loading state"},disabled:{control:"boolean",description:"Disable button"},children:{control:"text",description:"Konten button"},leftIcon:{control:!1,description:"Icon di sebelah kiri text"},rightIcon:{control:!1,description:"Icon di sebelah kanan text"},onClick:{action:"clicked"}},args:{onClick:r("clicked"),children:"Button"}},t={args:{variant:"primary",children:"Primary Button"}},a={args:{variant:"secondary",children:"Secondary Button"}},o={args:{variant:"outline",children:"Outline Button"}},s={args:{variant:"ghost",children:"Ghost Button"}},i={args:{variant:"destructive",children:"Destructive Button"}},c={args:{size:"sm",children:"Small Button"}},l={args:{size:"md",children:"Medium Button"}},d={args:{size:"lg",children:"Large Button"}},u={args:{size:"xl",children:"Extra Large Button"}},m={args:{loading:!0,children:"Loading..."}},p={args:{disabled:!0,children:"Disabled Button"}},g={args:{leftIcon:e.jsx(pe,{}),children:"With Left Icon"}},h={args:{rightIcon:e.jsx(ge,{}),children:"With Right Icon"}},k={args:{leftIcon:e.jsx(pe,{}),rightIcon:e.jsx(ge,{}),children:"Both Icons"}},x={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(n,{variant:"primary",onClick:r("primary-clicked"),children:"Primary"}),e.jsx(n,{variant:"secondary",onClick:r("secondary-clicked"),children:"Secondary"}),e.jsx(n,{variant:"outline",onClick:r("outline-clicked"),children:"Outline"}),e.jsx(n,{variant:"ghost",onClick:r("ghost-clicked"),children:"Ghost"}),e.jsx(n,{variant:"destructive",onClick:r("destructive-clicked"),children:"Destructive"})]}),parameters:{docs:{description:{story:"Semua variant button yang tersedia. Klik setiap button untuk melihat action di Actions panel."}}}},B={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(n,{size:"sm",onClick:r("small-clicked"),children:"Small"}),e.jsx(n,{size:"md",onClick:r("medium-clicked"),children:"Medium"}),e.jsx(n,{size:"lg",onClick:r("large-clicked"),children:"Large"}),e.jsx(n,{size:"xl",onClick:r("xl-clicked"),children:"Extra Large"})]}),parameters:{docs:{description:{story:"Semua ukuran button yang tersedia. Klik untuk melihat action di Actions panel."}}}};var v,y,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary Button"
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var I,f,b;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary Button"
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var L,j,C;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline Button"
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var z,W,w;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost Button"
  }
}`,...(w=(W=s.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var A,D,M;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Destructive Button"
  }
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var E,R,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: "Small Button"
  }
}`,...(O=(R=c.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var G,K,N;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: "md",
    children: "Medium Button"
  }
}`,...(N=(K=l.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var P,U,V;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: "Large Button"
  }
}`,...(V=(U=d.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var _,F,H;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: "xl",
    children: "Extra Large Button"
  }
}`,...(H=(F=u.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var T,q,J;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: "Loading..."
  }
}`,...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled Button"
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    leftIcon: <UserIcon />,
    children: "With Left Icon"
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,te;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    rightIcon: <ArrowRightIcon />,
    children: "With Right Icon"
  }
}`,...(te=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,oe,se;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    leftIcon: <UserIcon />,
    rightIcon: <ArrowRightIcon />,
    children: "Both Icons"
  }
}`,...(se=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,le;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <Button variant="primary" onClick={action("primary-clicked")}>
        Primary
      </Button>
      <Button variant="secondary" onClick={action("secondary-clicked")}>
        Secondary
      </Button>
      <Button variant="outline" onClick={action("outline-clicked")}>
        Outline
      </Button>
      <Button variant="ghost" onClick={action("ghost-clicked")}>
        Ghost
      </Button>
      <Button variant="destructive" onClick={action("destructive-clicked")}>
        Destructive
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua variant button yang tersedia. Klik setiap button untuk melihat action di Actions panel."
      }
    }
  }
}`,...(le=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,me;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button size="sm" onClick={action("small-clicked")}>
        Small
      </Button>
      <Button size="md" onClick={action("medium-clicked")}>
        Medium
      </Button>
      <Button size="lg" onClick={action("large-clicked")}>
        Large
      </Button>
      <Button size="xl" onClick={action("xl-clicked")}>
        Extra Large
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua ukuran button yang tersedia. Klik untuk melihat action di Actions panel."
      }
    }
  }
}`,...(me=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const fe=["Primary","Secondary","Outline","Ghost","Destructive","Small","Medium","Large","ExtraLarge","Loading","Disabled","WithLeftIcon","WithRightIcon","WithBothIcons","AllVariants","AllSizes"];export{B as AllSizes,x as AllVariants,i as Destructive,p as Disabled,u as ExtraLarge,s as Ghost,d as Large,m as Loading,l as Medium,o as Outline,t as Primary,a as Secondary,c as Small,k as WithBothIcons,g as WithLeftIcon,h as WithRightIcon,fe as __namedExportsOrder,Ie as default};
