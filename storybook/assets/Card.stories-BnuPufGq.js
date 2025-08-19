import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{R as N}from"./index-DkvSDgFW.js";import{c as y}from"./clsx-B-dksMZM.js";import{B as b}from"./Button-BPqCfLaF.js";import{B as l}from"./Badge-CI4hsQ1S.js";import"./index-Bnmt0x4K.js";const ae={default:"bg-white border border-secondary-200",outlined:"bg-white border-2 border-secondary-300",elevated:"bg-white shadow-lg border border-secondary-100"},te={none:"",sm:"p-4",md:"p-6",lg:"p-8"},a=N.forwardRef(({variant:t="default",padding:r="md",className:s,children:d,...Z},ee)=>e.jsx("div",{ref:ee,className:y("rounded-lg",ae[t],te[r],s),...Z,children:d}));a.displayName="Card";const i=N.forwardRef(({className:t,children:r,...s},d)=>e.jsx("div",{ref:d,className:y("mb-4",t),...s,children:r}));i.displayName="CardHeader";const n=N.forwardRef(({className:t,children:r,...s},d)=>e.jsx("div",{ref:d,className:y("text-secondary-600",t),...s,children:r}));n.displayName="CardContent";const C=N.forwardRef(({className:t,children:r,...s},d)=>e.jsx("div",{ref:d,className:y("mt-4 pt-4 border-t border-secondary-200",t),...s,children:r}));C.displayName="CardFooter";try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{variant:{defaultValue:{value:"default"},description:"Variant styling untuk card",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outlined"'},{value:'"elevated"'}]}},padding:{defaultValue:{value:"md"},description:"Padding size untuk card",name:"padding",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}}}}}catch{}try{i.displayName="CardHeader",i.__docgenInfo={description:"",displayName:"CardHeader",props:{}}}catch{}try{n.displayName="CardContent",n.__docgenInfo={description:"",displayName:"CardContent",props:{}}}catch{}try{C.displayName="CardFooter",C.__docgenInfo={description:"",displayName:"CardFooter",props:{}}}catch{}const oe={title:"Data Display/Card",component:a,parameters:{layout:"centered",docs:{description:{component:"Komponen Card untuk mengelompokkan konten. Tersedia dengan sub-komponen CardHeader, CardContent, dan CardFooter."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated"],description:"Variant styling untuk card"},padding:{control:"select",options:["none","sm","md","lg"],description:"Padding untuk card"},children:{control:!1,description:"Konten card"}}},o={args:{variant:"default",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Default Card"}),e.jsx("p",{className:"text-gray-600",children:"This is a default card with basic styling."})]})}},c={args:{variant:"outlined",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Outlined Card"}),e.jsx("p",{className:"text-gray-600",children:"This card has a thicker border outline."})]})}},m={args:{variant:"elevated",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Elevated Card"}),e.jsx("p",{className:"text-gray-600",children:"This card has a shadow for elevation effect."})]})}},p={args:{padding:"none",children:e.jsxs("div",{className:"p-4 bg-gray-50",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"No Padding"}),e.jsx("p",{className:"text-gray-600",children:"Card with no internal padding (content has its own padding)."})]})}},g={args:{padding:"sm",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Small Padding"}),e.jsx("p",{className:"text-gray-600",children:"Card with small internal padding."})]})}},x={args:{padding:"lg",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Large Padding"}),e.jsx("p",{className:"text-gray-600",children:"Card with large internal padding."})]})}},u={render:()=>e.jsxs(a,{variant:"elevated",className:"w-80",children:[e.jsxs(i,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Card Title"}),e.jsx(l,{variant:"primary",children:"New"})]}),e.jsx("p",{className:"text-sm text-gray-600",children:"This is a subtitle or description"})]}),e.jsx(n,{children:e.jsx("p",{className:"text-gray-700",children:"This is the main content of the card. It can contain any type of content like text, images, forms, or other components."})}),e.jsx(C,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(b,{variant:"outline",size:"sm",children:"Cancel"}),e.jsx(b,{variant:"primary",size:"sm",children:"Confirm"})]})})]}),parameters:{docs:{description:{story:"Card dengan semua sub-komponen: Header, Content, dan Footer."}},controls:{disable:!0}}},h={render:()=>e.jsx(a,{variant:"elevated",className:"w-64",children:e.jsxs(n,{padding:"none",children:[e.jsx("div",{className:"h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg"}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex items-start justify-between mb-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Product Name"}),e.jsx(l,{variant:"success",size:"sm",children:"In Stock"})]}),e.jsx("p",{className:"text-gray-600 text-sm mb-3",children:"A great product with amazing features that you'll love."}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-2xl font-bold text-gray-900",children:"$99.99"}),e.jsx(b,{size:"sm",children:"Add to Cart"})]})]})]})}),parameters:{docs:{description:{story:"Contoh penggunaan Card untuk product showcase."}},controls:{disable:!0}}},v={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsx(a,{variant:"outlined",children:e.jsx(n,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Users"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:"12,345"})]}),e.jsx(l,{variant:"success",children:"+12%"})]})})}),e.jsx(a,{variant:"outlined",children:e.jsx(n,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Revenue"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:"$45,678"})]}),e.jsx(l,{variant:"warning",children:"-3%"})]})})}),e.jsx(a,{variant:"outlined",children:e.jsx(n,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Orders"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:"1,234"})]}),e.jsx(l,{variant:"success",children:"+8%"})]})})})]}),parameters:{docs:{description:{story:"Contoh penggunaan Card untuk menampilkan statistik."}},controls:{disable:!0}}},f={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs(a,{variant:"default",children:[e.jsx(i,{children:e.jsx("h4",{className:"font-semibold",children:"Default"})}),e.jsx(n,{children:e.jsx("p",{className:"text-sm text-gray-600",children:"Default card variant"})})]}),e.jsxs(a,{variant:"outlined",children:[e.jsx(i,{children:e.jsx("h4",{className:"font-semibold",children:"Outlined"})}),e.jsx(n,{children:e.jsx("p",{className:"text-sm text-gray-600",children:"Outlined card variant"})})]}),e.jsxs(a,{variant:"elevated",children:[e.jsx(i,{children:e.jsx("h4",{className:"font-semibold",children:"Elevated"})}),e.jsx(n,{children:e.jsx("p",{className:"text-sm text-gray-600",children:"Elevated card variant"})})]})]}),parameters:{docs:{description:{story:"Semua variant card yang tersedia."}},controls:{disable:!0}}};var j,w,_;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Default Card
        </h3>
        <p className="text-gray-600">
          This is a default card with basic styling.
        </p>
      </div>
  }
}`,...(_=(w=o.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var k,S,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "outlined",
    children: <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Outlined Card
        </h3>
        <p className="text-gray-600">This card has a thicker border outline.</p>
      </div>
  }
}`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var P,T,H;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "elevated",
    children: <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Elevated Card
        </h3>
        <p className="text-gray-600">
          This card has a shadow for elevation effect.
        </p>
      </div>
  }
}`,...(H=(T=m.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var z,O,D;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    padding: "none",
    children: <div className="p-4 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Padding</h3>
        <p className="text-gray-600">
          Card with no internal padding (content has its own padding).
        </p>
      </div>
  }
}`,...(D=(O=p.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var E,F,R;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    padding: "sm",
    children: <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Small Padding
        </h3>
        <p className="text-gray-600">Card with small internal padding.</p>
      </div>
  }
}`,...(R=(F=g.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var I,V,A;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    padding: "lg",
    children: <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Large Padding
        </h3>
        <p className="text-gray-600">Card with large internal padding.</p>
      </div>
  }
}`,...(A=(V=x.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var L,$,q;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Card variant="elevated" className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Card Title</h3>
          <Badge variant="primary">New</Badge>
        </div>
        <p className="text-sm text-gray-600">
          This is a subtitle or description
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This is the main content of the card. It can contain any type of
          content like text, images, forms, or other components.
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button variant="primary" size="sm">
            Confirm
          </Button>
        </div>
      </CardFooter>
    </Card>,
  parameters: {
    docs: {
      description: {
        story: "Card dengan semua sub-komponen: Header, Content, dan Footer."
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var K,U,W;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Card variant="elevated" className="w-64">
      <CardContent padding="none">
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg"></div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Product Name
            </h3>
            <Badge variant="success" size="sm">
              In Stock
            </Badge>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            A great product with amazing features that you'll love.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">$99.99</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </CardContent>
    </Card>,
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan Card untuk product showcase."
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(W=(U=h.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var G,J,M;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card variant="outlined">
        <CardContent>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">12,345</p>
            </div>
            <Badge variant="success">+12%</Badge>
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$45,678</p>
            </div>
            <Badge variant="warning">-3%</Badge>
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">Orders</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
            <Badge variant="success">+8%</Badge>
          </div>
        </CardContent>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan Card untuk menampilkan statistik."
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(M=(J=v.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card variant="default">
        <CardHeader>
          <h4 className="font-semibold">Default</h4>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">Default card variant</p>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardHeader>
          <h4 className="font-semibold">Outlined</h4>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">Outlined card variant</p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <h4 className="font-semibold">Elevated</h4>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">Elevated card variant</p>
        </CardContent>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Semua variant card yang tersedia."
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ce=["Default","Outlined","Elevated","NoPadding","SmallPadding","LargePadding","WithSubComponents","ProductCard","StatsCard","AllVariants"];export{f as AllVariants,o as Default,m as Elevated,x as LargePadding,p as NoPadding,c as Outlined,h as ProductCard,g as SmallPadding,v as StatsCard,u as WithSubComponents,ce as __namedExportsOrder,oe as default};
