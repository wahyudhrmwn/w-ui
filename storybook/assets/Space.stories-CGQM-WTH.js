import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{R as w}from"./index-DkvSDgFW.js";import{c as ne}from"./clsx-B-dksMZM.js";import{B as r}from"./Button-BPqCfLaF.js";import"./index-Bnmt0x4K.js";const A={xs:4,sm:8,md:12,lg:16,xl:24},o=a=>typeof a=="number"?a:A[a]||A.md,de=(a,s)=>s==="horizontal"?{start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline"}[a]||"":{start:"justify-start",end:"justify-end",center:"justify-center",baseline:"justify-start"}[a]||"",me=(a,s)=>s==="horizontal"?{start:"justify-start",end:"justify-end",center:"justify-center","space-around":"justify-around","space-between":"justify-between","space-evenly":"justify-evenly"}[a]||"":{start:"items-start",end:"items-end",center:"items-center","space-around":"items-around","space-between":"items-between","space-evenly":"items-evenly"}[a]||"",t=({children:a,direction:s="horizontal",size:l="md",align:g="center",justify:j="start",wrap:B=!1,split:c,compact:q=!1,className:se,style:te,...le})=>{const[d,b]=Array.isArray(l)?[o(l[0]),o(l[1])]:[o(l),o(l)],N=w.Children.toArray(a).filter(m=>m!=null);if(N.length===0)return null;const re=de(g,s),ie=me(j,s),oe=ne("flex",{"flex-row":s==="horizontal","flex-col":s==="vertical","flex-wrap":B},re,ie,se),ce=()=>N.map((m,C)=>{const z=C===N.length-1;let i={};return z||(s==="horizontal"?i.marginRight=`${d}px`:i.marginBottom=`${b}px`),q&&!z&&(s==="horizontal"?i.marginRight=`${Math.max(2,d/2)}px`:i.marginBottom=`${Math.max(2,b/2)}px`),e.jsxs(w.Fragment,{children:[e.jsx("div",{style:i,children:m}),c&&!z&&e.jsx("div",{style:{[s==="horizontal"?"marginRight":"marginBottom"]:`${q?Math.max(2,d/2):s==="horizontal"?d:b}px`},children:c})]},C)});return e.jsx("div",{className:oe,style:te,...le,children:ce()})},D=a=>e.jsx(t,{...a,direction:"horizontal"}),V=a=>e.jsx(t,{...a,direction:"vertical"}),_=a=>e.jsx(t,{...a,compact:!0}),I=a=>e.jsx(t,{...a,direction:"horizontal",compact:!0}),M=a=>e.jsx(t,{...a,direction:"vertical",compact:!0}),S=({size:a="md",direction:s="horizontal",className:l,style:g,...j})=>{const B=o(a),c={[s==="horizontal"?"width":"height"]:`${B}px`,[s==="horizontal"?"height":"width"]:"1px",...g};return e.jsx("div",{className:ne("flex-shrink-0",l),style:c,...j})};try{t.displayName="Space",t.__docgenInfo={description:"",displayName:"Space",props:{direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"SpaceSize | [SpaceSize, SpaceSize]"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"baseline"'}]}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'}]}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},split:{defaultValue:null,description:"",name:"split",required:!1,type:{name:"ReactNode"}},compact:{defaultValue:{value:"false"},description:"",name:"compact",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{D.displayName="HSpace",D.__docgenInfo={description:"",displayName:"HSpace",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"SpaceSize | [SpaceSize, SpaceSize]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"baseline"'}]}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},split:{defaultValue:null,description:"",name:"split",required:!1,type:{name:"ReactNode"}},compact:{defaultValue:{value:"false"},description:"",name:"compact",required:!1,type:{name:"boolean"}}}}}catch{}try{V.displayName="VSpace",V.__docgenInfo={description:"",displayName:"VSpace",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"SpaceSize | [SpaceSize, SpaceSize]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"baseline"'}]}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},split:{defaultValue:null,description:"",name:"split",required:!1,type:{name:"ReactNode"}},compact:{defaultValue:{value:"false"},description:"",name:"compact",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="CompactSpace",_.__docgenInfo={description:"",displayName:"CompactSpace",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"SpaceSize | [SpaceSize, SpaceSize]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"baseline"'}]}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},split:{defaultValue:null,description:"",name:"split",required:!1,type:{name:"ReactNode"}}}}}catch{}try{I.displayName="CompactHSpace",I.__docgenInfo={description:"",displayName:"CompactHSpace",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"SpaceSize | [SpaceSize, SpaceSize]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"baseline"'}]}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},split:{defaultValue:null,description:"",name:"split",required:!1,type:{name:"ReactNode"}}}}}catch{}try{M.displayName="CompactVSpace",M.__docgenInfo={description:"",displayName:"CompactVSpace",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"SpaceSize | [SpaceSize, SpaceSize]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},justify:{defaultValue:{value:"start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"baseline"'}]}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},split:{defaultValue:null,description:"",name:"split",required:!1,type:{name:"ReactNode"}}}}}catch{}try{S.displayName="Spacer",S.__docgenInfo={description:"",displayName:"Spacer",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"SpaceSize"}},direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const he={title:"Layout & Utility/Space",component:t,parameters:{layout:"padded",docs:{description:{component:"Komponen Space untuk mengatur spacing yang konsisten antar elemen. Mendukung horizontal/vertical direction, berbagai ukuran spacing, alignment, dan fitur split untuk separator."}}},tags:["autodocs"],argTypes:{direction:{control:{type:"select"},options:["horizontal","vertical"],description:"Arah spacing"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Ukuran spacing"},align:{control:{type:"select"},options:["start","end","center","baseline"],description:"Alignment elemen"},wrap:{control:{type:"boolean"},description:"Apakah elemen bisa wrap"},compact:{control:{type:"boolean"},description:"Mode compact (spacing lebih kecil)"}}},n=({children:a,className:s=""})=>e.jsx("div",{className:`px-4 py-2 bg-primary-100 border border-primary-300 rounded text-primary-800 font-medium ${s}`,children:a}),u={args:{children:[e.jsx(r,{children:"Button 1"},"1"),e.jsx(r,{children:"Button 2"},"2"),e.jsx(r,{children:"Button 3"},"3")]}},p={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Horizontal Spacing"}),e.jsxs(t,{children:[e.jsx(r,{children:"First"}),e.jsx(r,{children:"Second"}),e.jsx(r,{children:"Third"}),e.jsx(r,{children:"Fourth"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Vertical Spacing"}),e.jsxs(t,{direction:"vertical",children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]})]})]})},x={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"XS Size"}),e.jsxs(t,{size:"xs",children:[e.jsx(n,{children:"A"}),e.jsx(n,{children:"B"}),e.jsx(n,{children:"C"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"SM Size"}),e.jsxs(t,{size:"sm",children:[e.jsx(n,{children:"A"}),e.jsx(n,{children:"B"}),e.jsx(n,{children:"C"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"MD Size (Default)"}),e.jsxs(t,{size:"md",children:[e.jsx(n,{children:"A"}),e.jsx(n,{children:"B"}),e.jsx(n,{children:"C"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"LG Size"}),e.jsxs(t,{size:"lg",children:[e.jsx(n,{children:"A"}),e.jsx(n,{children:"B"}),e.jsx(n,{children:"C"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"XL Size"}),e.jsxs(t,{size:"xl",children:[e.jsx(n,{children:"A"}),e.jsx(n,{children:"B"}),e.jsx(n,{children:"C"})]})]})]})},v={render:()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Align Center"}),e.jsx("div",{className:"bg-secondary-50 p-4 rounded",children:e.jsxs(t,{align:"center",children:[e.jsx(n,{className:"h-8",children:"Short"}),e.jsx(n,{className:"h-16",children:"Tall"}),e.jsx(n,{className:"h-12",children:"Medium"})]})})]})})},f={render:()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"With Wrap"}),e.jsx("div",{className:"bg-secondary-50 p-4 rounded w-80",children:e.jsxs(t,{wrap:!0,children:[e.jsx(n,{children:"Long Item 1"}),e.jsx(n,{children:"Long Item 2"}),e.jsx(n,{children:"Long Item 3"}),e.jsx(n,{children:"Long Item 4"})]})})]})})},h={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"HSpace (Horizontal)"}),e.jsxs(D,{children:[e.jsx(n,{children:"A"}),e.jsx(n,{children:"B"}),e.jsx(n,{children:"C"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"VSpace (Vertical)"}),e.jsxs(V,{children:[e.jsx(n,{children:"A"}),e.jsx(n,{children:"B"}),e.jsx(n,{children:"C"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"CompactSpace"}),e.jsxs(_,{children:[e.jsx(r,{children:"Save"}),e.jsx(r,{variant:"outline",children:"Cancel"}),e.jsx(r,{variant:"ghost",children:"Help"})]})]})]})},y={render:()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Spacer in Flex Layout"}),e.jsxs("div",{className:"flex items-center p-4 bg-secondary-50 rounded",children:[e.jsx("div",{className:"text-lg font-semibold",children:"Title"}),e.jsx(S,{size:"lg"}),e.jsx("div",{className:"text-sm text-secondary-600",children:"Subtitle"}),e.jsx(S,{size:8}),e.jsx(r,{size:"sm",children:"Action"})]})]})})};var H,L,k;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: [<Button key="1">Button 1</Button>, <Button key="2">Button 2</Button>, <Button key="3">Button 3</Button>]
  }
}`,...(k=(L=u.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var R,P,T;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Horizontal Spacing</h3>
        <Space>
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
          <Button>Fourth</Button>
        </Space>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Vertical Spacing</h3>
        <Space direction="vertical">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </Space>
      </div>
    </div>
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var W,F,$;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">XS Size</h3>
        <Space size="xs">
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Space>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">SM Size</h3>
        <Space size="sm">
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Space>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">MD Size (Default)</h3>
        <Space size="md">
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Space>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">LG Size</h3>
        <Space size="lg">
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Space>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">XL Size</h3>
        <Space size="xl">
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Space>
      </div>
    </div>
}`,...($=(F=x.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var U,X,E;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Align Center</h3>
        <div className="bg-secondary-50 p-4 rounded">
          <Space align="center">
            <DemoBox className="h-8">Short</DemoBox>
            <DemoBox className="h-16">Tall</DemoBox>
            <DemoBox className="h-12">Medium</DemoBox>
          </Space>
        </div>
      </div>
    </div>
}`,...(E=(X=v.parameters)==null?void 0:X.docs)==null?void 0:E.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">With Wrap</h3>
        <div className="bg-secondary-50 p-4 rounded w-80">
          <Space wrap>
            <DemoBox>Long Item 1</DemoBox>
            <DemoBox>Long Item 2</DemoBox>
            <DemoBox>Long Item 3</DemoBox>
            <DemoBox>Long Item 4</DemoBox>
          </Space>
        </div>
      </div>
    </div>
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var O,Q,Y;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">HSpace (Horizontal)</h3>
        <HSpace>
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </HSpace>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">VSpace (Vertical)</h3>
        <VSpace>
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </VSpace>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">CompactSpace</h3>
        <CompactSpace>
          <Button>Save</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="ghost">Help</Button>
        </CompactSpace>
      </div>
    </div>
}`,...(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ae;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Spacer in Flex Layout</h3>
        <div className="flex items-center p-4 bg-secondary-50 rounded">
          <div className="text-lg font-semibold">Title</div>
          <Spacer size="lg" />
          <div className="text-sm text-secondary-600">Subtitle</div>
          <Spacer size={8} />
          <Button size="sm">Action</Button>
        </div>
      </div>
    </div>
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const ye=["Default","BasicUsage","DifferentSizes","Alignment","WithWrap","PresetComponents","SpacerComponent"];export{v as Alignment,p as BasicUsage,u as Default,x as DifferentSizes,h as PresetComponents,y as SpacerComponent,f as WithWrap,ye as __namedExportsOrder,he as default};
