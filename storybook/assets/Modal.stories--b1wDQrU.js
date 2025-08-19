import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as v}from"./index-B-lxVbXh.js";import{r as i,R as I}from"./index-DkvSDgFW.js";import{c as f}from"./clsx-B-dksMZM.js";import{B as s}from"./Button-BPqCfLaF.js";import{I as O}from"./Input-BL0saf5A.js";import{C as B}from"./Checkbox-Ri1x73G2.js";import{B as te}from"./Badge-DzRphB-M.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const D={sm:"max-w-md",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl",full:"max-w-full mx-4"},m=({open:t,onClose:n,size:a="md",closeOnOverlayClick:o=!0,closeOnEscape:u=!0,children:l,className:p,inline:x=!1})=>(i.useEffect(()=>{if(x||!u)return;const h=ne=>{ne.key==="Escape"&&t&&n()};let g=!1;return t&&(document.addEventListener("keydown",h),document.body.style.overflow="hidden",g=!0),()=>{document.removeEventListener("keydown",h),g&&(document.body.style.overflow="unset")}},[t,n,u,x]),t?x?e.jsx("div",{className:"relative",children:e.jsx("div",{className:f("relative w-full transform rounded-lg bg-white shadow-xl border",D[a],p),children:l})}):e.jsxs("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:[e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 transition-opacity",onClick:o?n:void 0}),e.jsx("div",{className:"flex min-h-full items-center justify-center p-4",children:e.jsx("div",{className:f("relative w-full transform rounded-lg bg-white shadow-xl transition-all",D[a],p),onClick:h=>h.stopPropagation(),children:l})})]}):null),d=I.forwardRef(({showCloseButton:t=!0,onClose:n,className:a,children:o,...u},l)=>e.jsxs("div",{ref:l,className:f("flex items-center justify-between p-6 border-b border-secondary-200",a),...u,children:[e.jsx("div",{className:"flex-1",children:o}),t&&n&&e.jsx("button",{onClick:n,className:"ml-4 text-secondary-400 hover:text-secondary-600 transition-colors",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}));d.displayName="ModalHeader";const r=I.forwardRef(({className:t,children:n,...a},o)=>e.jsx("div",{ref:o,className:f("p-6",t),...a,children:n}));r.displayName="ModalContent";const c=I.forwardRef(({className:t,children:n,...a},o)=>e.jsx("div",{ref:o,className:f("flex items-center justify-end gap-3 p-6 border-t border-secondary-200",t),...a,children:n}));c.displayName="ModalFooter";try{d.displayName="ModalHeader",d.__docgenInfo={description:"",displayName:"ModalHeader",props:{open:{defaultValue:null,description:"Apakah modal terbuka",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback ketika modal ditutup",name:"onClose",required:!0,type:{name:"() => void"}},size:{defaultValue:{value:"md"},description:"Ukuran modal",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"Apakah modal bisa ditutup dengan klik overlay",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"Apakah modal bisa ditutup dengan ESC key",name:"closeOnEscape",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Konten modal",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Custom className untuk modal content",name:"className",required:!1,type:{name:"string"}},inline:{defaultValue:{value:"false"},description:"Render modal inline (untuk Storybook docs)",name:"inline",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="ModalContent",r.__docgenInfo={description:"",displayName:"ModalContent",props:{}}}catch{}try{c.displayName="ModalFooter",c.__docgenInfo={description:"",displayName:"ModalFooter",props:{}}}catch{}const pe={title:"Feedback/Modal",component:m,parameters:{layout:"centered",docs:{description:{component:"Komponen Modal untuk menampilkan konten overlay. Mendukung berbagai ukuran, keyboard navigation, dan click outside untuk close."}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Apakah modal terbuka"},size:{control:"select",options:["sm","md","lg","xl","full"],description:"Ukuran modal"},closeOnOverlayClick:{control:"boolean",description:"Modal bisa ditutup dengan klik overlay"},closeOnEscape:{control:"boolean",description:"Modal bisa ditutup dengan ESC key"},onClose:{action:"closed"}},args:{onClose:v("closed")}},y={render:()=>{const[t,n]=i.useState(!1);return e.jsxs("div",{className:"w-full max-w-lg mx-auto",children:[e.jsx(s,{variant:"primary",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(m,{open:t,onClose:()=>n(!1),size:"md",children:[e.jsxs(d,{onClose:()=>n(!1),children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Interactive Modal"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Opened from Docs button"})]}),e.jsx(r,{children:e.jsx("p",{className:"text-gray-700",children:"This example lives in the Docs tab. Click Cancel or the close button to dismiss the modal."})}),e.jsxs(c,{children:[e.jsx(s,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{variant:"primary",onClick:v("docs-confirmed"),children:"Confirm"})]})]})]})}},C={render:()=>{const[t,n]=i.useState(!1);return e.jsxs("div",{className:"w-full max-w-lg mx-auto",children:[e.jsx(s,{variant:"primary",onClick:()=>n(!0),children:"Open Basic Modal"}),e.jsxs(m,{open:t,onClose:()=>n(!1),size:"md",children:[e.jsxs(d,{onClose:()=>n(!1),children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Modal Title"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This is a basic modal with interactive close functionality"})]}),e.jsxs(r,{children:[e.jsx("p",{className:"text-gray-700",children:"This is a basic modal with default settings. You can close it by:"}),e.jsxs("ul",{className:"mt-2 list-disc list-inside space-y-1 text-gray-600",children:[e.jsx("li",{children:"Clicking the X button in the header"}),e.jsx("li",{children:"Pressing the ESC key"}),e.jsx("li",{children:"Clicking outside the modal"}),e.jsx("li",{children:"Clicking the Cancel button"})]})]}),e.jsxs(c,{children:[e.jsx(s,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{variant:"primary",onClick:v("confirmed"),children:"Confirm"})]})]})]})}},j={render:()=>{const[t,n]=i.useState(!1);return e.jsxs("div",{className:"w-full max-w-md mx-auto",children:[e.jsx(s,{variant:"primary",onClick:()=>n(!0),children:"Open Small Modal"}),e.jsxs(m,{open:t,onClose:()=>n(!1),size:"sm",children:[e.jsx(d,{onClose:()=>n(!1),children:e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Small Modal"})}),e.jsx(r,{children:e.jsx("p",{className:"text-gray-700",children:"This is a small modal."})}),e.jsx(c,{children:e.jsx(s,{variant:"outline",onClick:()=>n(!1),children:"Close"})})]})]})}},b={render:()=>{const[t,n]=i.useState(!1);return e.jsxs("div",{className:"w-full max-w-2xl mx-auto",children:[e.jsx(s,{variant:"primary",onClick:()=>n(!0),children:"Open Large Modal"}),e.jsxs(m,{open:t,onClose:()=>n(!1),size:"lg",children:[e.jsx(d,{onClose:()=>n(!1),children:e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Large Modal"})}),e.jsxs(r,{children:[e.jsx("p",{className:"text-gray-700",children:"This is a large modal with more space for content. It's perfect for forms, detailed information, or complex layouts that need more room."}),e.jsxs("div",{className:"mt-4 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Additional Content"}),e.jsx("p",{className:"text-sm text-gray-600",children:"You can add more complex content here like forms, tables, or other components."})]})]}),e.jsxs(c,{children:[e.jsx(s,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{variant:"primary",children:"Save Changes"})]})]})]})}},k={render:()=>{const[t,n]=i.useState(!1),[a,o]=i.useState({fullName:"",email:"",password:"",acceptTerms:!1,newsletter:!1}),u=()=>{v("form-submitted")(a),n(!1)};return e.jsxs("div",{className:"p-4",children:[e.jsx(s,{onClick:()=>n(!0),children:"Create Account"}),e.jsxs(m,{open:t,onClose:()=>n(!1),size:"md",children:[e.jsxs(d,{onClose:()=>n(!1),children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Create Account"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Fill in your information to create a new account"})]}),e.jsx(r,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(O,{label:"Full Name",placeholder:"Enter your full name",value:a.fullName,onChange:l=>o({...a,fullName:l.target.value})}),e.jsx(O,{label:"Email",type:"email",placeholder:"your@email.com",value:a.email,onChange:l=>o({...a,email:l.target.value})}),e.jsx(O,{label:"Password",type:"password",placeholder:"Create a password",helperText:"Password must be at least 8 characters",value:a.password,onChange:l=>o({...a,password:l.target.value})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(B,{label:"I agree to the Terms and Conditions",checked:a.acceptTerms,onChange:l=>o({...a,acceptTerms:l.target.checked})}),e.jsx(B,{label:"Subscribe to newsletter",helperText:"Get updates about new features",checked:a.newsletter,onChange:l=>o({...a,newsletter:l.target.checked})})]})]})}),e.jsxs(c,{children:[e.jsx(s,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{variant:"primary",onClick:u,disabled:!a.fullName||!a.email||!a.password||!a.acceptTerms,children:"Create Account"})]})]})]})}},N={render:(t,n)=>{if((n==null?void 0:n.viewMode)==="docs")return e.jsx("div",{className:"w-full max-w-sm mx-auto",children:e.jsxs(m,{open:!0,inline:!0,size:"sm",children:[e.jsx(d,{showCloseButton:!1,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-red-100 rounded-full flex items-center justify-center",children:e.jsx("svg",{className:"w-6 h-6 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Delete Item"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This action cannot be undone"})]})]})}),e.jsx(r,{children:e.jsx("p",{className:"text-gray-700",children:"Are you sure you want to delete this item? This action cannot be undone and the item will be permanently removed from your account."})}),e.jsxs(c,{children:[e.jsx(s,{variant:"outline",children:"Cancel"}),e.jsx(s,{variant:"destructive",children:"Delete"})]})]})});const o=()=>{const[u,l]=i.useState(!1),[p,x]=i.useState(!1),h=async()=>{x(!0),await new Promise(g=>setTimeout(g,1e3)),v("item-deleted")(),x(!1),l(!1)};return e.jsxs("div",{className:"p-4",children:[e.jsx(s,{variant:"destructive",onClick:()=>l(!0),children:"Delete Item"}),e.jsxs(m,{open:u,onClose:()=>l(!1),size:"sm",closeOnOverlayClick:!1,children:[e.jsx(d,{showCloseButton:!1,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-red-100 rounded-full flex items-center justify-center",children:e.jsx("svg",{className:"w-6 h-6 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Delete Item"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This action cannot be undone"})]})]})}),e.jsx(r,{children:e.jsx("p",{className:"text-gray-700",children:"Are you sure you want to delete this item? This action cannot be undone and the item will be permanently removed from your account."})}),e.jsxs(c,{children:[e.jsx(s,{variant:"outline",onClick:()=>l(!1),disabled:p,children:"Cancel"}),e.jsx(s,{variant:"destructive",onClick:h,loading:p,children:p?"Deleting...":"Delete"})]})]})]})};return e.jsx(o,{})},parameters:{docs:{disable:!0},controls:{disable:!0}}},M={render:()=>{const[t,n]=i.useState(!1);return e.jsxs("div",{className:"w-full max-w-lg mx-auto",children:[e.jsx(s,{variant:"primary",onClick:()=>n(!0),children:"Open Info Modal"}),e.jsxs(m,{open:t,onClose:()=>n(!1),size:"md",children:[e.jsx(d,{onClose:()=>n(!1),children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(te,{variant:"primary",size:"sm",children:"Info"}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Important Information"})]})}),e.jsx(r,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"This modal cannot be closed by clicking outside. You must use the close button or press ESC to close it."}),e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"Features:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm text-blue-800",children:[e.jsx("li",{children:"closeOnOverlayClick disabled"}),e.jsx("li",{children:"ESC key still works"}),e.jsx("li",{children:"Must use close button"})]})]})]})}),e.jsx(c,{children:e.jsx(s,{variant:"primary",onClick:()=>n(!1),children:"Got it"})})]})]})}},w={render:()=>{const[t,n]=i.useState(!1);return e.jsxs("div",{className:"w-full max-w-lg mx-auto",children:[e.jsx(s,{variant:"primary",onClick:()=>n(!0),children:"Open Content-only Modal"}),e.jsx(m,{open:t,onClose:()=>n(!1),size:"md",children:e.jsx(r,{children:e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",children:e.jsx("svg",{className:"w-8 h-8 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Success!"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"Your action has been completed successfully."}),e.jsx(s,{variant:"primary",onClick:()=>n(!1),children:"Continue"})]})})})]})}};var S,T,F;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="w-full max-w-lg mx-auto">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader onClose={() => setIsOpen(false)}>
            <h3 className="text-lg font-semibold text-gray-900">
              Interactive Modal
            </h3>
            <p className="text-sm text-gray-600">Opened from Docs button</p>
          </ModalHeader>
          <ModalContent>
            <p className="text-gray-700">
              This example lives in the Docs tab. Click Cancel or the close
              button to dismiss the modal.
            </p>
          </ModalContent>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={action("docs-confirmed")}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}`,...(F=(T=y.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var L,z,_;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="w-full max-w-lg mx-auto">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Basic Modal
        </Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader onClose={() => setIsOpen(false)}>
            <h3 className="text-lg font-semibold text-gray-900">Modal Title</h3>
            <p className="text-sm text-gray-600">
              This is a basic modal with interactive close functionality
            </p>
          </ModalHeader>
          <ModalContent>
            <p className="text-gray-700">
              This is a basic modal with default settings. You can close it by:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-600">
              <li>Clicking the X button in the header</li>
              <li>Pressing the ESC key</li>
              <li>Clicking outside the modal</li>
              <li>Clicking the Cancel button</li>
            </ul>
          </ModalContent>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={action("confirmed")}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}`,...(_=(z=C.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var E,H,A;j.parameters={...j.parameters,docs:{...(E=j.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="w-full max-w-md mx-auto">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Small Modal
        </Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="sm">
          <ModalHeader onClose={() => setIsOpen(false)}>
            <h3 className="text-lg font-semibold text-gray-900">Small Modal</h3>
          </ModalHeader>
          <ModalContent>
            <p className="text-gray-700">This is a small modal.</p>
          </ModalContent>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}`,...(A=(H=j.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var P,W,q;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="w-full max-w-2xl mx-auto">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Large Modal
        </Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="lg">
          <ModalHeader onClose={() => setIsOpen(false)}>
            <h3 className="text-lg font-semibold text-gray-900">Large Modal</h3>
          </ModalHeader>
          <ModalContent>
            <p className="text-gray-700">
              This is a large modal with more space for content. It's perfect
              for forms, detailed information, or complex layouts that need more
              room.
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">
                Additional Content
              </h4>
              <p className="text-sm text-gray-600">
                You can add more complex content here like forms, tables, or
                other components.
              </p>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary">Save Changes</Button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}`,...(q=(W=b.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var R,V,Y;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      password: "",
      acceptTerms: false,
      newsletter: false
    });
    const handleSubmit = () => {
      action("form-submitted")(formData);
      setIsOpen(false);
    };
    return <div className="p-4">
        <Button onClick={() => setIsOpen(true)}>Create Account</Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader onClose={() => setIsOpen(false)}>
            <h3 className="text-lg font-semibold text-gray-900">
              Create Account
            </h3>
            <p className="text-sm text-gray-600">
              Fill in your information to create a new account
            </p>
          </ModalHeader>
          <ModalContent>
            <div className="space-y-4">
              <Input label="Full Name" placeholder="Enter your full name" value={formData.fullName} onChange={e => setFormData({
              ...formData,
              fullName: e.target.value
            })} />
              <Input label="Email" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} />
              <Input label="Password" type="password" placeholder="Create a password" helperText="Password must be at least 8 characters" value={formData.password} onChange={e => setFormData({
              ...formData,
              password: e.target.value
            })} />
              <div className="space-y-2">
                <Checkbox label="I agree to the Terms and Conditions" checked={formData.acceptTerms} onChange={e => setFormData({
                ...formData,
                acceptTerms: e.target.checked
              })} />
                <Checkbox label="Subscribe to newsletter" helperText="Get updates about new features" checked={formData.newsletter} onChange={e => setFormData({
                ...formData,
                newsletter: e.target.checked
              })} />
              </div>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit} disabled={!formData.fullName || !formData.email || !formData.password || !formData.acceptTerms}>
              Create Account
            </Button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}`,...(Y=(V=k.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var G,K,U;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (_args, context) => {
    const isDocs = (context as any)?.viewMode === "docs";
    if (isDocs) {
      return <div className="w-full max-w-sm mx-auto">
          <Modal open inline size="sm">
            <ModalHeader showCloseButton={false}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Delete Item
                  </h3>
                  <p className="text-sm text-gray-600">
                    This action cannot be undone
                  </p>
                </div>
              </div>
            </ModalHeader>
            <ModalContent>
              <p className="text-gray-700">
                Are you sure you want to delete this item? This action cannot be
                undone and the item will be permanently removed from your
                account.
              </p>
            </ModalContent>
            <ModalFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive">Delete</Button>
            </ModalFooter>
          </Modal>
        </div>;
    }
    const ConfirmationModalWrapper = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);
      const handleDelete = async () => {
        setIsDeleting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        action("item-deleted")();
        setIsDeleting(false);
        setIsOpen(false);
      };
      return <div className="p-4">
          <Button variant="destructive" onClick={() => setIsOpen(true)}>
            Delete Item
          </Button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)} size="sm" closeOnOverlayClick={false}>
            <ModalHeader showCloseButton={false}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Delete Item
                  </h3>
                  <p className="text-sm text-gray-600">
                    This action cannot be undone
                  </p>
                </div>
              </div>
            </ModalHeader>
            <ModalContent>
              <p className="text-gray-700">
                Are you sure you want to delete this item? This action cannot be
                undone and the item will be permanently removed from your
                account.
              </p>
            </ModalContent>
            <ModalFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)} disabled={isDeleting}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDelete} loading={isDeleting}>
                {isDeleting ? "Deleting..." : "Delete"}
              </Button>
            </ModalFooter>
          </Modal>
        </div>;
    };
    return <ConfirmationModalWrapper />;
  },
  parameters: {
    docs: {
      disable: true
    },
    controls: {
      disable: true
    }
  }
}`,...(U=(K=N.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,J,Q;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="w-full max-w-lg mx-auto">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Info Modal
        </Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader onClose={() => setIsOpen(false)}>
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="sm">
                Info
              </Badge>
              <h3 className="text-lg font-semibold text-gray-900">
                Important Information
              </h3>
            </div>
          </ModalHeader>
          <ModalContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                This modal cannot be closed by clicking outside. You must use
                the close button or press ESC to close it.
              </p>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                  <li>closeOnOverlayClick disabled</li>
                  <li>ESC key still works</li>
                  <li>Must use close button</li>
                </ul>
              </div>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Got it
            </Button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}`,...(Q=(J=M.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,$,ee;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="w-full max-w-lg mx-auto">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Content-only Modal
        </Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalContent>
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Success!
              </h3>
              <p className="text-gray-600 mb-6">
                Your action has been completed successfully.
              </p>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Continue
              </Button>
            </div>
          </ModalContent>
        </Modal>
      </div>;
  }
}`,...(ee=($=w.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const xe=["Default","BasicInline","SmallModal","LargeModal","FormModal","ConfirmationModal","InfoModal","ContentOnly"];export{C as BasicInline,N as ConfirmationModal,w as ContentOnly,y as Default,k as FormModal,M as InfoModal,b as LargeModal,j as SmallModal,xe as __namedExportsOrder,pe as default};
