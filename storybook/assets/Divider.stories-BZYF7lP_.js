import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{R as xe}from"./index-DkvSDgFW.js";import{c as a}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";const k={xs:"border-t",sm:"border-t-2",md:"border-t-4",lg:"border-t-8"},pe={xs:"border-l",sm:"border-l-2",md:"border-l-4",lg:"border-l-8"},c={default:"border-secondary-300",light:"border-secondary-200",dark:"border-secondary-500",primary:"border-primary-300"},o={solid:"",dashed:"border-dashed",dotted:"border-dotted"},A={none:"",sm:"my-2",md:"my-4",lg:"my-6",xl:"my-8"},ve={none:"",sm:"mx-2",md:"mx-4",lg:"mx-6",xl:"mx-8"},s=xe.forwardRef(({orientation:z="horizontal",type:t="solid",size:i="xs",variant:n="default",children:C,textAlign:r="center",className:b,fullWidth:d=!0,spacing:D="md",...S},w)=>z==="vertical"?e.jsx("div",{ref:w,className:a("inline-block",pe[i],c[n],o[t],ve[D],!d&&"h-6",d&&"self-stretch",b),...S}):C?e.jsxs("div",{ref:w,className:a("flex items-center",d&&"w-full",A[D],b),...S,children:[e.jsx("div",{className:a("flex-1",k[i],c[n],o[t],r==="left"&&"flex-none w-8",r==="right"&&"flex-auto")}),e.jsx("div",{className:a("px-3 text-sm text-secondary-600 font-medium whitespace-nowrap",n==="primary"&&"text-primary-600",n==="dark"&&"text-secondary-700"),children:C}),e.jsx("div",{className:a("flex-1",k[i],c[n],o[t],r==="left"&&"flex-auto",r==="right"&&"flex-none w-8")})]}):e.jsx("div",{ref:w,className:a(k[i],c[n],o[t],A[D],d&&"w-full",b),...S}));s.displayName="Divider";try{s.displayName="Divider",s.__docgenInfo={description:"",displayName:"Divider",props:{orientation:{defaultValue:{value:"horizontal"},description:"Orientasi divider",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},type:{defaultValue:{value:"solid"},description:"Tipe garis divider",name:"type",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'}]}},size:{defaultValue:{value:"xs"},description:"Ukuran thickness divider",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},variant:{defaultValue:{value:"default"},description:"Warna divider",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"light"'},{value:'"dark"'},{value:'"primary"'}]}},children:{defaultValue:null,description:"Text atau content di tengah divider (hanya untuk horizontal)",name:"children",required:!1,type:{name:"ReactNode"}},textAlign:{defaultValue:{value:"center"},description:"Posisi text/content",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"true"},description:"Apakah divider mengambil full width/height",name:"fullWidth",required:!1,type:{name:"boolean"}},spacing:{defaultValue:{value:"md"},description:"Margin/spacing di sekitar divider",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"xl"'}]}}}}}catch{}const ge={title:"Layout/Divider",component:s,parameters:{layout:"padded",docs:{description:{component:"Komponen Divider untuk memisahkan content dengan garis pemisah. Mendukung orientasi horizontal dan vertikal, berbagai style garis, ukuran, dan dapat menampilkan text atau content di tengahnya."}}},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Orientasi divider"},type:{control:{type:"select"},options:["solid","dashed","dotted"],description:"Tipe garis divider"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Ukuran thickness divider"},variant:{control:{type:"select"},options:["default","light","dark","primary"],description:"Warna divider"},textAlign:{control:{type:"select"},options:["left","center","right"],description:"Posisi text/content"},fullWidth:{control:{type:"boolean"},description:"Apakah divider mengambil full width/height"},spacing:{control:{type:"select"},options:["none","sm","md","lg","xl"],description:"Margin/spacing di sekitar divider"}}},l={render:()=>e.jsxs("div",{className:"w-full max-w-2xl",children:[e.jsx("p",{className:"text-secondary-600 mb-4",children:"This is some content above the divider."}),e.jsx(s,{}),e.jsx("p",{className:"text-secondary-600 mt-4",children:"This is some content below the divider."})]})},m={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Horizontal Dividers"}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary-600",children:"Content above"}),e.jsx(s,{}),e.jsx("p",{className:"text-secondary-600",children:"Content below"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900 mb-4",children:"Vertical Dividers"}),e.jsxs("div",{className:"flex items-center space-x-4 h-16",children:[e.jsx("span",{className:"text-secondary-600",children:"Left content"}),e.jsx(s,{orientation:"vertical"}),e.jsx("span",{className:"text-secondary-600",children:"Middle content"}),e.jsx(s,{orientation:"vertical"}),e.jsx("span",{className:"text-secondary-600",children:"Right content"})]})]})]})},x={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Extra Small (xs)"}),e.jsx(s,{size:"xs"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Small (sm)"}),e.jsx(s,{size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Medium (md)"}),e.jsx(s,{size:"md"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Large (lg)"}),e.jsx(s,{size:"lg"})]})]})},p={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Solid (default)"}),e.jsx(s,{type:"solid"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Dashed"}),e.jsx(s,{type:"dashed"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Dotted"}),e.jsx(s,{type:"dotted"})]})]})},v={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Default"}),e.jsx(s,{variant:"default"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Light"}),e.jsx(s,{variant:"light"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Dark"}),e.jsx(s,{variant:"dark"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Primary"}),e.jsx(s,{variant:"primary"})]})]})},h={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-4",children:"Center Aligned (default)"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary-600 mb-4",children:"Some content above the divider with centered text."}),e.jsx(s,{textAlign:"center",children:"OR"}),e.jsx("p",{className:"text-secondary-600 mt-4",children:"Some content below the divider."})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-4",children:"Left Aligned"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary-600 mb-4",children:"Some content above the divider with left-aligned text."}),e.jsx(s,{textAlign:"left",children:"Section 1"}),e.jsx("p",{className:"text-secondary-600 mt-4",children:"Some content below the divider."})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-4",children:"Right Aligned"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary-600 mb-4",children:"Some content above the divider with right-aligned text."}),e.jsx(s,{textAlign:"right",children:"End of Section"}),e.jsx("p",{className:"text-secondary-600 mt-4",children:"Some content below the divider."})]})]})]})},u={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary-600 mb-4",children:"User profile information section"}),e.jsx(s,{children:e.jsxs("span",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),"Personal Info"]})}),e.jsx("p",{className:"text-secondary-600 mt-4",children:"Name, email, phone number, etc."})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary-600 mb-4",children:"Account settings and preferences"}),e.jsx(s,{variant:"primary",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})}),"Settings"]})}),e.jsx("p",{className:"text-secondary-600 mt-4",children:"Privacy, notifications, security, etc."})]})]})},y={render:()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700 mb-4",children:"Different Spacing Options"}),e.jsxs("div",{className:"bg-secondary-50 p-4 rounded",children:[e.jsx("p",{className:"text-secondary-600",children:"Content above"}),e.jsx(s,{spacing:"none",children:"No Spacing"}),e.jsx("p",{className:"text-secondary-600",children:"Content below"})]}),e.jsxs("div",{className:"bg-secondary-50 p-4 rounded",children:[e.jsx("p",{className:"text-secondary-600",children:"Content above"}),e.jsx(s,{spacing:"sm",children:"Small Spacing"}),e.jsx("p",{className:"text-secondary-600",children:"Content below"})]}),e.jsxs("div",{className:"bg-secondary-50 p-4 rounded",children:[e.jsx("p",{className:"text-secondary-600",children:"Content above"}),e.jsx(s,{spacing:"md",children:"Medium Spacing"}),e.jsx("p",{className:"text-secondary-600",children:"Content below"})]}),e.jsxs("div",{className:"bg-secondary-50 p-4 rounded",children:[e.jsx("p",{className:"text-secondary-600",children:"Content above"}),e.jsx(s,{spacing:"lg",children:"Large Spacing"}),e.jsx("p",{className:"text-secondary-600",children:"Content below"})]}),e.jsxs("div",{className:"bg-secondary-50 p-4 rounded",children:[e.jsx("p",{className:"text-secondary-600",children:"Content above"}),e.jsx(s,{spacing:"xl",children:"Extra Large Spacing"}),e.jsx("p",{className:"text-secondary-600",children:"Content below"})]})]})})},N={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("h4",{className:"text-sm font-medium text-secondary-700",children:"Vertical Divider Sizes"}),e.jsxs("div",{className:"flex items-center space-x-4 h-20",children:[e.jsx("span",{className:"text-secondary-600",children:"Content"}),e.jsx(s,{orientation:"vertical",size:"xs",fullWidth:!0}),e.jsx("span",{className:"text-secondary-600",children:"XS"}),e.jsx(s,{orientation:"vertical",size:"sm",fullWidth:!0}),e.jsx("span",{className:"text-secondary-600",children:"SM"}),e.jsx(s,{orientation:"vertical",size:"md",fullWidth:!0}),e.jsx("span",{className:"text-secondary-600",children:"MD"}),e.jsx(s,{orientation:"vertical",size:"lg",fullWidth:!0}),e.jsx("span",{className:"text-secondary-600",children:"LG"})]})]})},g={render:()=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsxs("div",{className:"bg-white border border-secondary-200 rounded-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary-900",children:"User Profile"}),e.jsx("p",{className:"text-sm text-secondary-600 mt-1",children:"Manage your account settings"}),e.jsx(s,{className:"my-4"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-secondary-700",children:"Name"}),e.jsx("span",{className:"text-sm font-medium text-secondary-900",children:"John Doe"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-secondary-700",children:"Email"}),e.jsx("span",{className:"text-sm font-medium text-secondary-900",children:"john@example.com"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm text-secondary-700",children:"Role"}),e.jsx("span",{className:"text-sm font-medium text-secondary-900",children:"Administrator"})]})]}),e.jsx(s,{children:"Account Settings"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm text-secondary-700",children:"Notifications"}),e.jsx("input",{type:"checkbox",defaultChecked:!0,className:"rounded"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm text-secondary-700",children:"Two-factor Auth"}),e.jsx("input",{type:"checkbox",className:"rounded"})]})]}),e.jsx(s,{variant:"light",spacing:"lg"}),e.jsx("button",{className:"w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors",children:"Save Changes"})]})})},f={render:()=>e.jsx("div",{className:"max-w-xs",children:e.jsxs("nav",{className:"bg-white border border-secondary-200 rounded-lg p-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("a",{href:"#",className:"block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded",children:"Dashboard"}),e.jsx("a",{href:"#",className:"block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded",children:"Projects"}),e.jsx("a",{href:"#",className:"block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded",children:"Tasks"})]}),e.jsx(s,{spacing:"sm"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("a",{href:"#",className:"block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded",children:"Settings"}),e.jsx("a",{href:"#",className:"block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded",children:"Profile"})]}),e.jsx(s,{spacing:"sm"}),e.jsx("div",{className:"space-y-1",children:e.jsx("a",{href:"#",className:"block px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded",children:"Sign Out"})})]})})},j={args:{orientation:"horizontal",type:"solid",size:"xs",variant:"default",textAlign:"center",fullWidth:!0,spacing:"md",children:"Divider Text"}};var M,R,V;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl">
      <p className="text-secondary-600 mb-4">
        This is some content above the divider.
      </p>

      <Divider />

      <p className="text-secondary-600 mt-4">
        This is some content below the divider.
      </p>
    </div>
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var T,P,W;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Horizontal Dividers
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-secondary-600">Content above</p>
            <Divider />
            <p className="text-secondary-600">Content below</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Vertical Dividers
        </h3>
        <div className="flex items-center space-x-4 h-16">
          <span className="text-secondary-600">Left content</span>
          <Divider orientation="vertical" />
          <span className="text-secondary-600">Middle content</span>
          <Divider orientation="vertical" />
          <span className="text-secondary-600">Right content</span>
        </div>
      </div>
    </div>
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var L,O,E;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">
          Extra Small (xs)
        </h4>
        <Divider size="xs" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">
          Small (sm)
        </h4>
        <Divider size="sm" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">
          Medium (md)
        </h4>
        <Divider size="md" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">
          Large (lg)
        </h4>
        <Divider size="lg" />
      </div>
    </div>
}`,...(E=(O=x.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var _,q,I;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">
          Solid (default)
        </h4>
        <Divider type="solid" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Dashed</h4>
        <Divider type="dashed" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Dotted</h4>
        <Divider type="dotted" />
      </div>
    </div>
}`,...(I=(q=p.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var U,B,H;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Default</h4>
        <Divider variant="default" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Light</h4>
        <Divider variant="light" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Dark</h4>
        <Divider variant="dark" />
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-2">Primary</h4>
        <Divider variant="primary" />
      </div>
    </div>
}`,...(H=(B=v.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var G,J,X;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-4">
          Center Aligned (default)
        </h4>
        <div>
          <p className="text-secondary-600 mb-4">
            Some content above the divider with centered text.
          </p>
          <Divider textAlign="center">OR</Divider>
          <p className="text-secondary-600 mt-4">
            Some content below the divider.
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-4">
          Left Aligned
        </h4>
        <div>
          <p className="text-secondary-600 mb-4">
            Some content above the divider with left-aligned text.
          </p>
          <Divider textAlign="left">Section 1</Divider>
          <p className="text-secondary-600 mt-4">
            Some content below the divider.
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-4">
          Right Aligned
        </h4>
        <div>
          <p className="text-secondary-600 mb-4">
            Some content above the divider with right-aligned text.
          </p>
          <Divider textAlign="right">End of Section</Divider>
          <p className="text-secondary-600 mt-4">
            Some content below the divider.
          </p>
        </div>
      </div>
    </div>
}`,...(X=(J=h.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var K,F,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <p className="text-secondary-600 mb-4">
          User profile information section
        </p>
        <Divider>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            Personal Info
          </span>
        </Divider>
        <p className="text-secondary-600 mt-4">
          Name, email, phone number, etc.
        </p>
      </div>

      <div>
        <p className="text-secondary-600 mb-4">
          Account settings and preferences
        </p>
        <Divider variant="primary">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Settings
          </span>
        </Divider>
        <p className="text-secondary-600 mt-4">
          Privacy, notifications, security, etc.
        </p>
      </div>
    </div>
}`,...(Q=(F=u.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var Y,Z,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h4 className="text-sm font-medium text-secondary-700 mb-4">
          Different Spacing Options
        </h4>

        <div className="bg-secondary-50 p-4 rounded">
          <p className="text-secondary-600">Content above</p>
          <Divider spacing="none">No Spacing</Divider>
          <p className="text-secondary-600">Content below</p>
        </div>

        <div className="bg-secondary-50 p-4 rounded">
          <p className="text-secondary-600">Content above</p>
          <Divider spacing="sm">Small Spacing</Divider>
          <p className="text-secondary-600">Content below</p>
        </div>

        <div className="bg-secondary-50 p-4 rounded">
          <p className="text-secondary-600">Content above</p>
          <Divider spacing="md">Medium Spacing</Divider>
          <p className="text-secondary-600">Content below</p>
        </div>

        <div className="bg-secondary-50 p-4 rounded">
          <p className="text-secondary-600">Content above</p>
          <Divider spacing="lg">Large Spacing</Divider>
          <p className="text-secondary-600">Content below</p>
        </div>

        <div className="bg-secondary-50 p-4 rounded">
          <p className="text-secondary-600">Content above</p>
          <Divider spacing="xl">Extra Large Spacing</Divider>
          <p className="text-secondary-600">Content below</p>
        </div>
      </div>
    </div>
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,se,ne;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <h4 className="text-sm font-medium text-secondary-700">
        Vertical Divider Sizes
      </h4>

      <div className="flex items-center space-x-4 h-20">
        <span className="text-secondary-600">Content</span>
        <Divider orientation="vertical" size="xs" fullWidth />
        <span className="text-secondary-600">XS</span>
        <Divider orientation="vertical" size="sm" fullWidth />
        <span className="text-secondary-600">SM</span>
        <Divider orientation="vertical" size="md" fullWidth />
        <span className="text-secondary-600">MD</span>
        <Divider orientation="vertical" size="lg" fullWidth />
        <span className="text-secondary-600">LG</span>
      </div>
    </div>
}`,...(ne=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ae,te,ie;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="max-w-md mx-auto">
      <div className="bg-white border border-secondary-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-secondary-900">
          User Profile
        </h3>
        <p className="text-sm text-secondary-600 mt-1">
          Manage your account settings
        </p>

        <Divider className="my-4" />

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-secondary-700">Name</span>
            <span className="text-sm font-medium text-secondary-900">
              John Doe
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-secondary-700">Email</span>
            <span className="text-sm font-medium text-secondary-900">
              john@example.com
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-secondary-700">Role</span>
            <span className="text-sm font-medium text-secondary-900">
              Administrator
            </span>
          </div>
        </div>

        <Divider>Account Settings</Divider>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary-700">Notifications</span>
            <input type="checkbox" defaultChecked className="rounded" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary-700">Two-factor Auth</span>
            <input type="checkbox" className="rounded" />
          </div>
        </div>

        <Divider variant="light" spacing="lg" />

        <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
}`,...(ie=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var re,de,ce;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="max-w-xs">
      <nav className="bg-white border border-secondary-200 rounded-lg p-4">
        <div className="space-y-1">
          <a href="#" className="block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded">
            Dashboard
          </a>
          <a href="#" className="block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded">
            Projects
          </a>
          <a href="#" className="block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded">
            Tasks
          </a>
        </div>

        <Divider spacing="sm" />

        <div className="space-y-1">
          <a href="#" className="block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded">
            Settings
          </a>
          <a href="#" className="block px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded">
            Profile
          </a>
        </div>

        <Divider spacing="sm" />

        <div className="space-y-1">
          <a href="#" className="block px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded">
            Sign Out
          </a>
        </div>
      </nav>
    </div>
}`,...(ce=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var oe,le,me;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    type: "solid",
    size: "xs",
    variant: "default",
    textAlign: "center",
    fullWidth: true,
    spacing: "md",
    children: "Divider Text"
  }
}`,...(me=(le=j.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};const fe=["Default","Orientations","Sizes","Types","Variants","WithText","WithIcons","Spacing","VerticalSizes","InCard","InNavigation","Playground"];export{l as Default,g as InCard,f as InNavigation,m as Orientations,j as Playground,x as Sizes,y as Spacing,p as Types,v as Variants,N as VerticalSizes,u as WithIcons,h as WithText,fe as __namedExportsOrder,ge as default};
