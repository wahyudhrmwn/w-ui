import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as C}from"./index-B-lxVbXh.js";import{r as j}from"./index-DkvSDgFW.js";import{I as l}from"./Input-BL0saf5A.js";import{B as Ve}from"./Button-BPqCfLaF.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";import"./clsx-B-dksMZM.js";const Pe=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),je=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),Ce=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})}),c=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),He={title:"Form Controls/Input",component:l,parameters:{layout:"centered",docs:{description:{component:"Komponen Input untuk form dengan label, helper text, error state, dan icons. Mendukung semua tipe HTML input."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label untuk input"},placeholder:{control:"text",description:"Placeholder text"},helperText:{control:"text",description:"Helper text di bawah input"},error:{control:"text",description:"Error message"},size:{control:"select",options:["sm","md","lg"],description:"Ukuran input"},type:{control:"select",options:["text","email","password","number","tel","url"],description:"Tipe input"},disabled:{control:"boolean",description:"Disable input"},leftIcon:{control:!1,description:"Icon di sebelah kiri input"},rightIcon:{control:!1,description:"Icon di sebelah kanan input"},onChange:{action:"changed"}},args:{onChange:C("changed")}},d={args:{placeholder:"Enter text..."}},m={args:{label:"Full Name",placeholder:"Enter your full name"}},p={args:{label:"Email",placeholder:"Enter your email",helperText:"We will never share your email with anyone."}},u={args:{label:"Email",placeholder:"Enter your email",error:"Please enter a valid email address",defaultValue:"invalid-email"}},h={args:{size:"sm",label:"Small Input",placeholder:"Small size"}},g={args:{size:"md",label:"Medium Input",placeholder:"Medium size"}},w={args:{size:"lg",label:"Large Input",placeholder:"Large size"}},b={args:{type:"email",label:"Email Address",placeholder:"your@email.com",leftIcon:e.jsx(Ce,{})}},f={args:{type:"password",label:"Password",placeholder:"Enter your password",leftIcon:e.jsx(je,{}),helperText:"Password must be at least 8 characters"}},I={args:{type:"number",label:"Age",placeholder:"25"}},E={args:{label:"Username",placeholder:"Enter username",leftIcon:e.jsx(Pe,{})}},x={args:{label:"Verified Email",placeholder:"Enter email",rightIcon:e.jsx(c,{}),defaultValue:"user@example.com"}},y={args:{label:"Search User",placeholder:"Search...",leftIcon:e.jsx(Pe,{}),rightIcon:e.jsx(c,{})}},v={args:{label:"Disabled Input",placeholder:"This is disabled",disabled:!0,defaultValue:"Cannot edit this"}},k={args:{label:"Read Only",defaultValue:"This is read only",readOnly:!0}},S={render:()=>e.jsxs("div",{className:"w-80 space-y-4",children:[e.jsx(l,{type:"email",label:"Email",placeholder:"your@email.com",leftIcon:e.jsx(Ce,{}),helperText:"Use your work email"}),e.jsx(l,{type:"password",label:"Password",placeholder:"Enter password",leftIcon:e.jsx(je,{}),helperText:"Must be at least 8 characters"})]}),parameters:{docs:{description:{story:"Contoh penggunaan Input dalam form login."}}}},P={render:()=>{const Le=()=>{const[a,Te]=j.useState(""),[r,We]=j.useState(""),[s,ze]=j.useState(""),o=a&&!a.includes("@")?"Please enter a valid email address":"",n=r&&r.length<8?"Password must be at least 8 characters":"",t=s&&r!==s?"Passwords do not match":"",Me=()=>{!o&&!n&&!t&&a&&r&&s?C("form-valid-submitted")({email:a,password:r}):C("form-invalid-submitted")({emailError:o,passwordError:n,confirmError:t})};return e.jsxs("div",{className:"w-80 space-y-4",children:[e.jsx(l,{label:"Email Address",type:"email",placeholder:"your@email.com",value:a,onChange:i=>Te(i.target.value),error:o,helperText:o||"Enter a valid email address",rightIcon:a&&!o?e.jsx(c,{}):void 0}),e.jsx(l,{label:"Password",type:"password",placeholder:"Enter password",value:r,onChange:i=>We(i.target.value),error:n,helperText:n||"Must be at least 8 characters",rightIcon:r&&!n?e.jsx(c,{}):void 0}),e.jsx(l,{label:"Confirm Password",type:"password",placeholder:"Confirm password",value:s,onChange:i=>ze(i.target.value),error:t,helperText:t||"Re-enter your password",rightIcon:s&&!t?e.jsx(c,{}):void 0}),e.jsx(Ve,{variant:"primary",onClick:Me,disabled:!a||!r||!s||!!o||!!n||!!t,className:"w-full",children:"Submit"})]})};return e.jsx(Le,{})},parameters:{docs:{description:{story:"Contoh interaktif validasi form dengan real-time feedback. Input akan menampilkan error dan success states berdasarkan nilai yang dimasukkan."}},controls:{disable:!0}}};var L,T,W;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var z,M,V;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Full Name",
    placeholder: "Enter your full name"
  }
}`,...(V=(M=m.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var N,B,U;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter your email",
    helperText: "We will never share your email with anyone."
  }
}`,...(U=(B=p.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var R,D,O;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
    defaultValue: "invalid-email"
  }
}`,...(O=(D=u.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var A,F,H;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: "sm",
    label: "Small Input",
    placeholder: "Small size"
  }
}`,...(H=(F=h.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var _,K,q;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: "md",
    label: "Medium Input",
    placeholder: "Medium size"
  }
}`,...(q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var G,J,Q;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: "lg",
    label: "Large Input",
    placeholder: "Large size"
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: "email",
    label: "Email Address",
    placeholder: "your@email.com",
    leftIcon: <EmailIcon />
  }
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    leftIcon: <LockIcon />,
    helperText: "Password must be at least 8 characters"
  }
}`,...(re=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,oe;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    type: "number",
    label: "Age",
    placeholder: "25"
  }
}`,...(oe=(se=I.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,te,le;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username",
    leftIcon: <UserIcon />
  }
}`,...(le=(te=E.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ie,ce,de;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: "Verified Email",
    placeholder: "Enter email",
    rightIcon: <CheckIcon />,
    defaultValue: "user@example.com"
  }
}`,...(de=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ue;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: "Search User",
    placeholder: "Search...",
    leftIcon: <UserIcon />,
    rightIcon: <CheckIcon />
  }
}`,...(ue=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var he,ge,we;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    label: "Disabled Input",
    placeholder: "This is disabled",
    disabled: true,
    defaultValue: "Cannot edit this"
  }
}`,...(we=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var be,fe,Ie;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    label: "Read Only",
    defaultValue: "This is read only",
    readOnly: true
  }
}`,...(Ie=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:Ie.source}}};var Ee,xe,ye;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4">
      <Input type="email" label="Email" placeholder="your@email.com" leftIcon={<EmailIcon />} helperText="Use your work email" />
      <Input type="password" label="Password" placeholder="Enter password" leftIcon={<LockIcon />} helperText="Must be at least 8 characters" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Contoh penggunaan Input dalam form login."
      }
    }
  }
}`,...(ye=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var ve,ke,Se;P.parameters={...P.parameters,docs:{...(ve=P.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const ValidationWrapper = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const emailError = email && !email.includes("@") ? "Please enter a valid email address" : "";
      const passwordError = password && password.length < 8 ? "Password must be at least 8 characters" : "";
      const confirmError = confirmPassword && password !== confirmPassword ? "Passwords do not match" : "";
      const handleSubmit = () => {
        if (!emailError && !passwordError && !confirmError && email && password && confirmPassword) {
          action("form-valid-submitted")({
            email,
            password
          });
        } else {
          action("form-invalid-submitted")({
            emailError,
            passwordError,
            confirmError
          });
        }
      };
      return <div className="w-80 space-y-4">
          <Input label="Email Address" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} error={emailError} helperText={emailError || "Enter a valid email address"} rightIcon={email && !emailError ? <CheckIcon /> : undefined} />
          <Input label="Password" type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} error={passwordError} helperText={passwordError || "Must be at least 8 characters"} rightIcon={password && !passwordError ? <CheckIcon /> : undefined} />
          <Input label="Confirm Password" type="password" placeholder="Confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} error={confirmError} helperText={confirmError || "Re-enter your password"} rightIcon={confirmPassword && !confirmError ? <CheckIcon /> : undefined} />
          <Button variant="primary" onClick={handleSubmit} disabled={!email || !password || !confirmPassword || !!emailError || !!passwordError || !!confirmError} className="w-full">
            Submit
          </Button>
        </div>;
    };
    return <ValidationWrapper />;
  },
  parameters: {
    docs: {
      description: {
        story: "Contoh interaktif validasi form dengan real-time feedback. Input akan menampilkan error dan success states berdasarkan nilai yang dimasukkan."
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(Se=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};const _e=["Default","WithLabel","WithHelperText","WithError","Small","Medium","Large","EmailInput","PasswordInput","NumberInput","WithLeftIcon","WithRightIcon","WithBothIcons","Disabled","ReadOnly","LoginForm","ValidationStates"];export{d as Default,v as Disabled,b as EmailInput,w as Large,S as LoginForm,g as Medium,I as NumberInput,f as PasswordInput,k as ReadOnly,h as Small,P as ValidationStates,y as WithBothIcons,u as WithError,p as WithHelperText,m as WithLabel,E as WithLeftIcon,x as WithRightIcon,_e as __namedExportsOrder,He as default};
