import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{c as F}from"./clsx-B-dksMZM.js";import{R as a}from"./index-DkvSDgFW.js";import"./index-Bnmt0x4K.js";const $={dark:{tooltip:"bg-gray-900 text-white border-gray-900",arrow:"border-gray-900"},light:{tooltip:"bg-white text-gray-900 border-gray-300 shadow-lg",arrow:"border-gray-300"}},st={sm:"px-2 py-1 text-xs max-w-xs",md:"px-3 py-2 text-sm max-w-sm",lg:"px-4 py-3 text-base max-w-md"},it={top:{tooltip:"bottom-full left-1/2 transform -translate-x-1/2",arrow:"top-full left-1/2 transform -translate-x-1/2 border-t-4 border-l-4 border-r-4 border-transparent"},bottom:{tooltip:"top-full left-1/2 transform -translate-x-1/2",arrow:"bottom-full left-1/2 transform -translate-x-1/2 border-b-4 border-l-4 border-r-4 border-transparent"},left:{tooltip:"right-full top-1/2 transform -translate-y-1/2",arrow:"left-full top-1/2 transform -translate-y-1/2 border-l-4 border-t-4 border-b-4 border-transparent"},right:{tooltip:"left-full top-1/2 transform -translate-y-1/2",arrow:"right-full top-1/2 transform -translate-y-1/2 border-r-4 border-t-4 border-b-4 border-transparent"}},o=a.forwardRef(({content:t,children:c,placement:s="top",size:q="md",variant:g="dark",showDelay:Ke=100,hideDelay:Oe=0,disabled:Ye=!1,className:We,arrowClassName:Ge,trigger:d="hover",showArrow:Je=!0,offset:p=8,...Qe},lt)=>{const[m,I]=a.useState(!1),[U,Xe]=a.useState({x:0,y:0}),u=a.useRef(),E=a.useRef(null),M=a.useRef(null),A=()=>{u.current&&clearTimeout(u.current)},H=()=>{Ye||(A(),u.current=setTimeout(()=>{I(!0)},Ke))},_=()=>{A(),u.current=setTimeout(()=>{I(!1)},Oe)},Ze=()=>{d==="hover"&&H()},et=()=>{d==="hover"&&_()},tt=()=>{d==="click"&&(m?_():H())},ot=()=>{d==="focus"&&H()},rt=()=>{d==="focus"&&_()},h=a.useCallback(()=>{if(!M.current||!E.current)return;const r=M.current.getBoundingClientRect(),n=E.current.getBoundingClientRect();let i=0,l=0;switch(s){case"top":i=r.left+r.width/2-n.width/2,l=r.top-n.height-p;break;case"bottom":i=r.left+r.width/2-n.width/2,l=r.bottom+p;break;case"left":i=r.left-n.width-p,l=r.top+r.height/2-n.height/2;break;case"right":i=r.right+p,l=r.top+r.height/2-n.height/2;break}const b=8;i=Math.max(b,Math.min(i,window.innerWidth-n.width-b)),l=Math.max(b,Math.min(l,window.innerHeight-n.height-b)),Xe({x:i,y:l})},[s,p]);a.useEffect(()=>{if(m){h();const r=()=>h(),n=()=>h();return window.addEventListener("resize",r),window.addEventListener("scroll",n),()=>{window.removeEventListener("resize",r),window.removeEventListener("scroll",n)}}},[m,h]),a.useEffect(()=>()=>{A()},[]);const nt=a.useCallback(r=>{M.current=r;const n=c.ref;typeof n=="function"?n(r):n&&typeof n=="object"&&n!==null&&(n.current=r)},[c]),at=a.cloneElement(c,{ref:nt,onMouseEnter:Ze,onMouseLeave:et,onClick:tt,onFocus:ot,onBlur:rt,"aria-describedby":m?"tooltip":void 0});return e.jsxs(e.Fragment,{children:[at,m&&e.jsxs("div",{ref:E,id:"tooltip",role:"tooltip",className:F("fixed z-50 rounded border transition-opacity duration-200 pointer-events-none",st[q],$[g].tooltip,We),style:{left:`${U.x}px`,top:`${U.y}px`},...Qe,children:[t,Je&&e.jsx("div",{className:F("absolute w-0 h-0",it[s].arrow,$[g].arrow,Ge)})]})]})});o.displayName="Tooltip";try{o.displayName="Tooltip",o.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"Konten tooltip",name:"content",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Children element yang akan memicu tooltip",name:"children",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:"Posisi tooltip",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},size:{defaultValue:{value:"md"},description:"Ukuran tooltip",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"dark"},description:"Variant styling",name:"variant",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},showDelay:{defaultValue:{value:"100"},description:"Delay sebelum tooltip muncul (ms)",name:"showDelay",required:!1,type:{name:"number"}},hideDelay:{defaultValue:{value:"0"},description:"Delay sebelum tooltip hilang (ms)",name:"hideDelay",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Apakah tooltip disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom className untuk tooltip",name:"className",required:!1,type:{name:"string"}},arrowClassName:{defaultValue:null,description:"Custom className untuk arrow",name:"arrowClassName",required:!1,type:{name:"string"}},trigger:{defaultValue:{value:"hover"},description:"Trigger event",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'},{value:'"focus"'}]}},showArrow:{defaultValue:{value:"true"},description:"Apakah menampilkan arrow",name:"showArrow",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"8"},description:"Offset dari target element (px)",name:"offset",required:!1,type:{name:"number"}}}}}catch{}const gt={title:"Feedback/Tooltip",component:o,parameters:{layout:"centered",docs:{description:{component:"Komponen Tooltip untuk menampilkan informasi tambahan saat hover, click, atau focus. Mendukung berbagai posisi, ukuran, dan styling dengan positioning yang otomatis menyesuaikan viewport."}}},tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","bottom","left","right"],description:"Posisi tooltip"},size:{control:"select",options:["sm","md","lg"],description:"Ukuran tooltip"},variant:{control:"select",options:["dark","light"],description:"Variant styling"},trigger:{control:"select",options:["hover","click","focus"],description:"Event trigger"},showDelay:{control:"number",description:"Delay sebelum muncul (ms)"},hideDelay:{control:"number",description:"Delay sebelum hilang (ms)"},showArrow:{control:"boolean",description:"Tampilkan arrow"},disabled:{control:"boolean",description:"Disable tooltip"},content:{control:"text",description:"Konten tooltip"}},args:{content:"This is a helpful tooltip!",showArrow:!0}},x={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700",children:"Hover me"})})}),args:{content:"This is a helpful tooltip!",placement:"top"}},v={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Top tooltip"})})}),args:{content:"Tooltip positioned at the top",placement:"top"}},y={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700",children:"Bottom tooltip"})})}),args:{content:"Tooltip positioned at the bottom",placement:"bottom"}},f={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700",children:"Left tooltip"})})}),args:{content:"Tooltip positioned on the left",placement:"left"}},w={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",children:"Right tooltip"})})}),args:{content:"Tooltip positioned on the right",placement:"right"}},N={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-3 py-1.5 text-sm bg-primary-600 text-white rounded hover:bg-primary-700",children:"Small tooltip"})})}),args:{content:"Small tooltip",size:"sm"}},T={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700",children:"Medium tooltip"})})}),args:{content:"This is a medium sized tooltip with more content",size:"md"}},k={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-6 py-3 text-lg bg-primary-600 text-white rounded-lg hover:bg-primary-700",children:"Large tooltip"})})}),args:{content:"This is a large tooltip that can contain more detailed information and longer text content.",size:"lg"}},j={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300",children:"Dark tooltip"})})}),args:{content:"Dark themed tooltip",variant:"dark"}},C={render:t=>e.jsx("div",{className:"p-8 bg-gray-800",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100",children:"Light tooltip"})})}),args:{content:"Light themed tooltip",variant:"light"}},S={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Hover trigger"})})}),args:{content:"Triggered by hover",trigger:"hover"}},L={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700",children:"Click trigger"})})}),args:{content:"Triggered by click (click again to hide)",trigger:"click"}},D={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("input",{type:"text",placeholder:"Focus trigger",className:"px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"})})}),args:{content:"Triggered by focus (tab to this input)",trigger:"focus"}},R={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700",children:"No arrow"})})}),args:{content:"Tooltip without arrow",showArrow:!1}},z={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed",children:"Disabled tooltip"})})}),args:{content:"This tooltip is disabled",disabled:!0}},V={render:t=>e.jsx("div",{className:"p-8",children:e.jsx(o,{...t,children:e.jsx("button",{className:"px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700",children:"Rich content"})})}),args:{content:e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-1",children:"User Profile"}),e.jsx("p",{className:"text-sm opacity-90",children:"Click to view detailed information"}),e.jsx("div",{className:"mt-2 text-xs opacity-75",children:"Last updated: 2 hours ago"})]}),size:"lg"}},P={render:()=>e.jsxs("div",{className:"flex flex-col items-center justify-center space-y-16 p-16",children:[e.jsx(o,{content:"Top tooltip",placement:"top",children:e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Top"})}),e.jsxs("div",{className:"flex items-center space-x-16",children:[e.jsx(o,{content:"Left tooltip",placement:"left",children:e.jsx("button",{className:"px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700",children:"Left"})}),e.jsx("div",{className:"px-8 py-4 bg-secondary-100 rounded-lg text-secondary-600",children:"Hover buttons around me"}),e.jsx(o,{content:"Right tooltip",placement:"right",children:e.jsx("button",{className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",children:"Right"})})]}),e.jsx(o,{content:"Bottom tooltip",placement:"bottom",children:e.jsx("button",{className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700",children:"Bottom"})})]}),parameters:{docs:{description:{story:"Demonstrasi semua posisi tooltip yang tersedia. Hover pada setiap button untuk melihat tooltip."}}}},B={render:()=>{const[t,c]=useState(0),[s,q]=useState(!1);return e.jsxs("div",{className:"p-8 space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Interactive Tooltip Demo"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(o,{content:`Button clicked ${t} times`,trigger:"hover",children:e.jsxs("button",{onClick:()=>c(g=>g+1),className:"px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700",children:["Counter: ",t]})}),e.jsx(o,{content:s?"Click to unlike":"Click to like",placement:"bottom",children:e.jsx("button",{onClick:()=>q(!s),className:F("px-4 py-2 rounded-lg transition-colors",s?"bg-red-600 text-white hover:bg-red-700":"bg-gray-200 text-gray-700 hover:bg-gray-300"),children:s?"❤️ Liked":"🤍 Like"})}),e.jsx(o,{content:"This tooltip has a longer delay",showDelay:500,placement:"right",children:e.jsx("button",{className:"px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600",children:"Slow tooltip"})}),e.jsx(o,{content:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg mb-1",children:"🎉"}),e.jsx("div",{className:"font-semibold",children:"Congratulations!"}),e.jsx("div",{className:"text-sm opacity-90 mt-1",children:"You found the special button!"})]}),variant:"light",size:"lg",trigger:"click",placement:"left",children:e.jsx("button",{className:"px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600",children:"Special ✨"})})]}),e.jsx("div",{className:"p-4 bg-secondary-50 rounded-lg",children:e.jsx("p",{className:"text-sm text-secondary-600",children:"Try different interactions: hover, click, and see how tooltips behave with different triggers and content!"})})]})},parameters:{docs:{description:{story:"Demo interaktif dengan berbagai trigger, konten dinamis, dan styling. Coba hover, click, dan lihat berbagai jenis tooltip!"}}}};var K,O,Y;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          Hover me
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "This is a helpful tooltip!",
    placement: "top"
  }
}`,...(Y=(O=x.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var W,G,J;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Top tooltip
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "Tooltip positioned at the top",
    placement: "top"
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Bottom tooltip
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "Tooltip positioned at the bottom",
    placement: "bottom"
  }
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,oe;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Left tooltip
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "Tooltip positioned on the left",
    placement: "left"
  }
}`,...(oe=(te=f.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ne,ae;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Right tooltip
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "Tooltip positioned on the right",
    placement: "right"
  }
}`,...(ae=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,ie,le;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-3 py-1.5 text-sm bg-primary-600 text-white rounded hover:bg-primary-700">
          Small tooltip
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "Small tooltip",
    size: "sm"
  }
}`,...(le=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          Medium tooltip
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "This is a medium sized tooltip with more content",
    size: "md"
  }
}`,...(pe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ge,ue;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-6 py-3 text-lg bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          Large tooltip
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "This is a large tooltip that can contain more detailed information and longer text content.",
    size: "lg"
  }
}`,...(ue=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var he,be,xe;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
          Dark tooltip
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "Dark themed tooltip",
    variant: "dark"
  }
}`,...(xe=(be=j.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var ve,ye,fe;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => <div className="p-8 bg-gray-800">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100">
          Light tooltip
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "Light themed tooltip",
    variant: "light"
  }
}`,...(fe=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var we,Ne,Te;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Hover trigger
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "Triggered by hover",
    trigger: "hover"
  }
}`,...(Te=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:Te.source}}};var ke,je,Ce;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Click trigger
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "Triggered by click (click again to hide)",
    trigger: "click"
  }
}`,...(Ce=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Se,Le,De;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <input type="text" placeholder="Focus trigger" className="px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
      </Tooltip>
    </div>,
  args: {
    content: "Triggered by focus (tab to this input)",
    trigger: "focus"
  }
}`,...(De=(Le=D.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Re,ze,Ve;R.parameters={...R.parameters,docs:{...(Re=R.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          No arrow
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "Tooltip without arrow",
    showArrow: false
  }
}`,...(Ve=(ze=R.parameters)==null?void 0:ze.docs)==null?void 0:Ve.source}}};var Pe,Be,qe;z.parameters={...z.parameters,docs:{...(Pe=z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed">
          Disabled tooltip
        </button>
      </Tooltip>
    </div>,
  args: {
    content: "This tooltip is disabled",
    disabled: true
  }
}`,...(qe=(Be=z.parameters)==null?void 0:Be.docs)==null?void 0:qe.source}}};var Ee,Me,Ae;V.parameters={...V.parameters,docs:{...(Ee=V.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: args => <div className="p-8">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Rich content
        </button>
      </Tooltip>
    </div>,
  args: {
    content: <div>
        <h4 className="font-semibold mb-1">User Profile</h4>
        <p className="text-sm opacity-90">Click to view detailed information</p>
        <div className="mt-2 text-xs opacity-75">Last updated: 2 hours ago</div>
      </div>,
    size: "lg"
  }
}`,...(Ae=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:Ae.source}}};var He,_e,Fe;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center justify-center space-y-16 p-16">
      {/* Top */}
      <Tooltip content="Top tooltip" placement="top">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Top
        </button>
      </Tooltip>

      <div className="flex items-center space-x-16">
        {/* Left */}
        <Tooltip content="Left tooltip" placement="left">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Left
          </button>
        </Tooltip>

        <div className="px-8 py-4 bg-secondary-100 rounded-lg text-secondary-600">
          Hover buttons around me
        </div>

        {/* Right */}
        <Tooltip content="Right tooltip" placement="right">
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Right
          </button>
        </Tooltip>
      </div>

      {/* Bottom */}
      <Tooltip content="Bottom tooltip" placement="bottom">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Bottom
        </button>
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Demonstrasi semua posisi tooltip yang tersedia. Hover pada setiap button untuk melihat tooltip."
      }
    }
  }
}`,...(Fe=(_e=P.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};var Ie,Ue,$e;B.parameters={...B.parameters,docs:{...(Ie=B.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(0);
    const [liked, setLiked] = useState(false);
    return <div className="p-8 space-y-6">
        <h3 className="text-lg font-semibold mb-4">Interactive Tooltip Demo</h3>

        <div className="flex flex-wrap gap-4">
          <Tooltip content={\`Button clicked \${count} times\`} trigger="hover">
            <button onClick={() => setCount(c => c + 1)} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              Counter: {count}
            </button>
          </Tooltip>

          <Tooltip content={liked ? "Click to unlike" : "Click to like"} placement="bottom">
            <button onClick={() => setLiked(!liked)} className={clsx("px-4 py-2 rounded-lg transition-colors", liked ? "bg-red-600 text-white hover:bg-red-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300")}>
              {liked ? "❤️ Liked" : "🤍 Like"}
            </button>
          </Tooltip>

          <Tooltip content="This tooltip has a longer delay" showDelay={500} placement="right">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              Slow tooltip
            </button>
          </Tooltip>

          <Tooltip content={<div className="text-center">
                <div className="text-lg mb-1">🎉</div>
                <div className="font-semibold">Congratulations!</div>
                <div className="text-sm opacity-90 mt-1">
                  You found the special button!
                </div>
              </div>} variant="light" size="lg" trigger="click" placement="left">
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600">
              Special ✨
            </button>
          </Tooltip>
        </div>

        <div className="p-4 bg-secondary-50 rounded-lg">
          <p className="text-sm text-secondary-600">
            Try different interactions: hover, click, and see how tooltips
            behave with different triggers and content!
          </p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demo interaktif dengan berbagai trigger, konten dinamis, dan styling. Coba hover, click, dan lihat berbagai jenis tooltip!"
      }
    }
  }
}`,...($e=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};const ut=["Default","TopPlacement","BottomPlacement","LeftPlacement","RightPlacement","Small","Medium","Large","Dark","Light","HoverTrigger","ClickTrigger","FocusTrigger","NoArrow","Disabled","RichContent","AllPlacements","InteractiveDemo"];export{P as AllPlacements,y as BottomPlacement,L as ClickTrigger,j as Dark,x as Default,z as Disabled,D as FocusTrigger,S as HoverTrigger,B as InteractiveDemo,k as Large,f as LeftPlacement,C as Light,T as Medium,R as NoArrow,V as RichContent,w as RightPlacement,N as Small,v as TopPlacement,ut as __namedExportsOrder,gt as default};
