import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as s}from"./index-B-lxVbXh.js";import{R as N,r as A}from"./index-DkvSDgFW.js";import{c as m}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const j={sm:{icon:"w-4 h-4",gap:"gap-0.5",text:"text-sm"},md:{icon:"w-5 h-5",gap:"gap-1",text:"text-base"},lg:{icon:"w-6 h-6",gap:"gap-1.5",text:"text-lg"}},b={yellow:{filled:"text-yellow-400",empty:"text-secondary-300",hover:"text-yellow-300"},red:{filled:"text-red-500",empty:"text-secondary-300",hover:"text-red-400"},blue:{filled:"text-blue-500",empty:"text-secondary-300",hover:"text-blue-400"},green:{filled:"text-green-500",empty:"text-secondary-300",hover:"text-green-400"},purple:{filled:"text-purple-500",empty:"text-secondary-300",hover:"text-purple-400"}},W=({filled:t=!1})=>e.jsx("svg",{className:"w-full h-full",fill:t?"currentColor":"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})}),a=N.forwardRef(({value:t,defaultValue:c=0,count:r=5,allowHalf:u=!1,allowClear:d=!0,disabled:g=!1,size:f="md",color:v="yellow",className:He,onChange:h,onHover:q,character:M,tooltips:p,showTooltip:Le=!1,showText:_=!1,texts:i=["Terrible","Bad","Normal","Good","Excellent"],...Be},Ie)=>{const[ze,E]=N.useState(c),[x,U]=N.useState(null),[Ae,G]=N.useState(null),D=t!==void 0,P=D?t:ze,y=x!==null?x:P,K=(n,o=!1)=>{if(g)return;const l=o?n+.5:n+1;if(d&&l===P){D||E(0),h==null||h(0);return}D||E(l),h==null||h(l)},O=(n,o=!1)=>{if(g)return;const l=o?n+.5:n+1;U(l),G(n),q==null||q(l)},qe=()=>{g||(U(null),G(null))},Me=n=>{const o=n+1,l=n+.5;return y>=o?"full":u&&y>=l?"half":"empty"},De=n=>{const o=Me(n),l=x!==null;return e.jsxs("div",{className:m("relative inline-flex cursor-pointer transition-colors duration-200",j[f].icon,g&&"cursor-not-allowed opacity-50"),onMouseEnter:()=>O(n),onMouseLeave:qe,children:[e.jsx("div",{className:m("absolute inset-0",l?b[v].hover:b[v].empty),children:M||e.jsx(W,{filled:!1})}),u&&e.jsx("div",{className:m("absolute inset-0 overflow-hidden cursor-pointer",o==="half"||l&&x===n+.5?b[v].filled:"opacity-0"),style:{width:"50%"},onMouseEnter:()=>O(n,!0),onClick:()=>K(n,!0),children:M||e.jsx(W,{filled:!0})}),e.jsx("div",{className:m("absolute inset-0 cursor-pointer transition-opacity duration-200",o==="full"||l&&x>=n+1?b[v].filled:"opacity-0"),onClick:()=>K(n),children:M||e.jsx(W,{filled:!0})}),Le&&Ae===n&&((p==null?void 0:p[n])||(i==null?void 0:i[n]))&&e.jsxs("div",{className:"absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-10",children:[e.jsx("div",{className:"px-2 py-1 text-xs text-white bg-secondary-800 rounded whitespace-nowrap",children:(p==null?void 0:p[n])||(i==null?void 0:i[n])}),e.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-secondary-800"})]})]},n)},J=()=>{if(!_)return null;const n=Math.ceil(y)-1;return(i==null?void 0:i[n])||y.toString()};return e.jsxs("div",{ref:Ie,className:m("inline-flex items-center",j[f].gap,He),...Be,children:[e.jsx("div",{className:m("inline-flex items-center",j[f].gap),children:Array.from({length:r},(n,o)=>De(o))}),_&&J()&&e.jsx("span",{className:m("ml-2 text-secondary-600",j[f].text),children:J()})]})});a.displayName="Rating";try{a.displayName="Rating",a.__docgenInfo={description:"",displayName:"Rating",props:{value:{defaultValue:null,description:"Nilai rating saat ini",name:"value",required:!1,type:{name:"number"}},defaultValue:{defaultValue:{value:"0"},description:"Nilai default rating",name:"defaultValue",required:!1,type:{name:"number"}},count:{defaultValue:{value:"5"},description:"Jumlah total star/icon",name:"count",required:!1,type:{name:"number"}},allowHalf:{defaultValue:{value:"false"},description:"Apakah mendukung half rating",name:"allowHalf",required:!1,type:{name:"boolean"}},allowClear:{defaultValue:{value:"true"},description:"Apakah rating bisa diubah (interactive)",name:"allowClear",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Apakah dalam mode read-only",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Ukuran rating",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"yellow"},description:"Warna rating",name:"color",required:!1,type:{name:"enum",value:[{value:'"yellow"'},{value:'"red"'},{value:'"blue"'},{value:'"green"'},{value:'"purple"'}]}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback ketika rating berubah",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},onHover:{defaultValue:null,description:"Callback ketika rating di-hover",name:"onHover",required:!1,type:{name:"((value: number) => void)"}},character:{defaultValue:null,description:"Custom icon untuk rating",name:"character",required:!1,type:{name:"ReactNode"}},tooltips:{defaultValue:null,description:"Array tooltip untuk setiap rating level",name:"tooltips",required:!1,type:{name:"string[]"}},showTooltip:{defaultValue:{value:"false"},description:"Apakah menampilkan tooltip",name:"showTooltip",required:!1,type:{name:"boolean"}},showText:{defaultValue:{value:"false"},description:"Apakah menampilkan nilai rating sebagai text",name:"showText",required:!1,type:{name:"boolean"}},texts:{defaultValue:{value:'["Terrible", "Bad", "Normal", "Good", "Excellent"]'},description:"Custom text untuk rating levels",name:"texts",required:!1,type:{name:"string[]"}}}}}catch{}const Oe={title:"Form Controls/Rating",component:a,parameters:{layout:"centered",docs:{description:{component:"Komponen Rating untuk menampilkan dan mengumpulkan rating dari user. Mendukung star rating dengan berbagai kustomisasi termasuk half rating, custom icons, dan berbagai ukuran."}}},tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0,max:5,step:.5},description:"Nilai rating saat ini"},defaultValue:{control:{type:"number",min:0,max:5,step:.5},description:"Nilai default rating"},count:{control:{type:"number",min:3,max:10},description:"Jumlah total star/icon"},allowHalf:{control:{type:"boolean"},description:"Apakah mendukung half rating"},allowClear:{control:{type:"boolean"},description:"Apakah rating bisa diubah (interactive)"},disabled:{control:{type:"boolean"},description:"Apakah dalam mode read-only"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran rating"},color:{control:{type:"select"},options:["yellow","red","blue","green","purple"],description:"Warna rating"},showTooltip:{control:{type:"boolean"},description:"Apakah menampilkan tooltip"},showText:{control:{type:"boolean"},description:"Apakah menampilkan nilai rating sebagai text"}}},w={args:{defaultValue:3,count:5,onChange:s("rating-changed"),onHover:s("rating-hovered")}},C={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700",children:"Small"}),e.jsx(a,{defaultValue:3,size:"sm",onChange:s("small-changed")})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700",children:"Medium (Default)"}),e.jsx(a,{defaultValue:3,size:"md",onChange:s("medium-changed")})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700",children:"Large"}),e.jsx(a,{defaultValue:3,size:"lg",onChange:s("large-changed")})]})]})},V={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm text-secondary-600",children:"Yellow:"}),e.jsx(a,{defaultValue:4,color:"yellow",onChange:s("yellow-changed")})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm text-secondary-600",children:"Red:"}),e.jsx(a,{defaultValue:4,color:"red",onChange:s("red-changed")})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm text-secondary-600",children:"Blue:"}),e.jsx(a,{defaultValue:4,color:"blue",onChange:s("blue-changed")})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm text-secondary-600",children:"Green:"}),e.jsx(a,{defaultValue:4,color:"green",onChange:s("green-changed")})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm text-secondary-600",children:"Purple:"}),e.jsx(a,{defaultValue:4,color:"purple",onChange:s("purple-changed")})]})]})},R={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Half Rating Enabled"}),e.jsx(a,{defaultValue:3.5,allowHalf:!0,onChange:s("half-rating-changed")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Different Half Values"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{value:1.5,allowHalf:!0,disabled:!0}),e.jsx(a,{value:2.5,allowHalf:!0,disabled:!0}),e.jsx(a,{value:4.5,allowHalf:!0,disabled:!0})]})]})]})},k={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Default Text Labels"}),e.jsx(a,{defaultValue:3,showText:!0,onChange:s("text-rating-changed")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Custom Text Labels"}),e.jsx(a,{defaultValue:2,showText:!0,texts:["😢 Buruk","😐 Kurang","🙂 Cukup","😊 Bagus","🤩 Sangat Bagus"],onChange:s("custom-text-changed")})]})]})},S={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Hover to see tooltips"}),e.jsx(a,{defaultValue:0,showTooltip:!0,tooltips:["Sangat Buruk","Buruk","Biasa Saja","Bagus","Luar Biasa"],onChange:s("tooltip-rating-changed"),onHover:s("tooltip-hovered")})]})})},T={render:()=>{const t=({filled:r})=>e.jsx("svg",{className:"w-full h-full",fill:r?"currentColor":"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),c=({filled:r})=>e.jsx("svg",{className:"w-full h-full",fill:r?"currentColor":"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"})});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Heart Icons"}),e.jsx(a,{defaultValue:4,character:e.jsx(t,{}),color:"red",onChange:s("heart-rating-changed")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Thumbs Up Icons"}),e.jsx(a,{defaultValue:3,character:e.jsx(c,{}),color:"blue",onChange:s("thumbs-rating-changed")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Text Characters"}),e.jsx(a,{defaultValue:2,character:"👍",size:"lg",onChange:s("emoji-rating-changed")})]})]})}},H={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Read-only Ratings"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-12 text-sm text-secondary-600",children:"1.0:"}),e.jsx(a,{value:1,disabled:!0})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-12 text-sm text-secondary-600",children:"2.5:"}),e.jsx(a,{value:2.5,allowHalf:!0,disabled:!0})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-12 text-sm text-secondary-600",children:"4.0:"}),e.jsx(a,{value:4,disabled:!0})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-12 text-sm text-secondary-600",children:"4.8:"}),e.jsx(a,{value:4.8,allowHalf:!0,disabled:!0,showText:!0})]})]})]})})},L={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm text-secondary-600",children:"3 Stars:"}),e.jsx(a,{defaultValue:2,count:3,onChange:s("3-star-changed")})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm text-secondary-600",children:"7 Stars:"}),e.jsx(a,{defaultValue:4,count:7,onChange:s("7-star-changed")})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-16 text-sm text-secondary-600",children:"10 Stars:"}),e.jsx(a,{defaultValue:8,count:10,size:"sm",onChange:s("10-star-changed")})]})]})},B={render:()=>{const[t,c]=A.useState(0),[r,u]=A.useState(0);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium text-secondary-700",children:"Interactive Rating Demo"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-sm text-secondary-600",children:["Current Rating: ",e.jsx("span",{className:"font-semibold",children:t})]}),e.jsx(a,{value:t,onChange:d=>{c(d),s("interactive-rating-changed")(d)},showText:!0,size:"lg"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-sm text-secondary-600",children:["Half Rating: ",e.jsx("span",{className:"font-semibold",children:r})]}),e.jsx(a,{value:r,onChange:d=>{u(d),s("interactive-half-rating-changed")(d)},allowHalf:!0,showText:!0,texts:["😢","😔","😐","🙂","😊"]})]})]})})}},I={render:()=>{const[t,c]=A.useState(3),[r,u]=A.useState(3);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700 mb-2",children:"Allow Clear (click same star to clear)"}),e.jsxs("p",{className:"text-sm text-secondary-600 mb-2",children:["Current: ",t," - Click the same star to clear"]}),e.jsx(a,{value:t,onChange:c,allowClear:!0,showText:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-secondary-700 mb-2",children:"No Clear (normal behavior)"}),e.jsxs("p",{className:"text-sm text-secondary-600 mb-2",children:["Current: ",r]}),e.jsx(a,{value:r,onChange:u,allowClear:!1,showText:!0})]})]})}},z={args:{defaultValue:3,count:5,allowHalf:!1,allowClear:!0,disabled:!1,size:"md",color:"yellow",showTooltip:!1,showText:!1,onChange:s("rating-changed"),onHover:s("rating-hovered")}};var Y,F,Q;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    defaultValue: 3,
    count: 5,
    onChange: action("rating-changed"),
    onHover: action("rating-hovered")
  }
}`,...(Q=(F=w.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var X,Z,$;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-secondary-700">Small</h3>
        <Rating defaultValue={3} size="sm" onChange={action("small-changed")} />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-secondary-700">
          Medium (Default)
        </h3>
        <Rating defaultValue={3} size="md" onChange={action("medium-changed")} />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-secondary-700">Large</h3>
        <Rating defaultValue={3} size="lg" onChange={action("large-changed")} />
      </div>
    </div>
}`,...($=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,ne;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">Yellow:</span>
        <Rating defaultValue={4} color="yellow" onChange={action("yellow-changed")} />
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">Red:</span>
        <Rating defaultValue={4} color="red" onChange={action("red-changed")} />
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">Blue:</span>
        <Rating defaultValue={4} color="blue" onChange={action("blue-changed")} />
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">Green:</span>
        <Rating defaultValue={4} color="green" onChange={action("green-changed")} />
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">Purple:</span>
        <Rating defaultValue={4} color="purple" onChange={action("purple-changed")} />
      </div>
    </div>
}`,...(ne=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,te,le;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-secondary-700 mb-2">
          Half Rating Enabled
        </h3>
        <Rating defaultValue={3.5} allowHalf onChange={action("half-rating-changed")} />
      </div>

      <div>
        <h3 className="text-sm font-medium text-secondary-700 mb-2">
          Different Half Values
        </h3>
        <div className="space-y-2">
          <Rating value={1.5} allowHalf disabled />
          <Rating value={2.5} allowHalf disabled />
          <Rating value={4.5} allowHalf disabled />
        </div>
      </div>
    </div>
}`,...(le=(te=R.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var re,oe,ie;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-secondary-700 mb-2">
          Default Text Labels
        </h3>
        <Rating defaultValue={3} showText onChange={action("text-rating-changed")} />
      </div>

      <div>
        <h3 className="text-sm font-medium text-secondary-700 mb-2">
          Custom Text Labels
        </h3>
        <Rating defaultValue={2} showText texts={["😢 Buruk", "😐 Kurang", "🙂 Cukup", "😊 Bagus", "🤩 Sangat Bagus"]} onChange={action("custom-text-changed")} />
      </div>
    </div>
}`,...(ie=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,de,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-secondary-700 mb-2">
          Hover to see tooltips
        </h3>
        <Rating defaultValue={0} showTooltip tooltips={["Sangat Buruk", "Buruk", "Biasa Saja", "Bagus", "Luar Biasa"]} onChange={action("tooltip-rating-changed")} onHover={action("tooltip-hovered")} />
      </div>
    </div>
}`,...(me=(de=S.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,he,pe;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const HeartIcon = ({
      filled
    }: {
      filled?: boolean;
    }) => <svg className="w-full h-full" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>;
    const ThumbsUpIcon = ({
      filled
    }: {
      filled?: boolean;
    }) => <svg className="w-full h-full" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>;
    return <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-secondary-700 mb-2">
            Heart Icons
          </h3>
          <Rating defaultValue={4} character={<HeartIcon />} color="red" onChange={action("heart-rating-changed")} />
        </div>

        <div>
          <h3 className="text-sm font-medium text-secondary-700 mb-2">
            Thumbs Up Icons
          </h3>
          <Rating defaultValue={3} character={<ThumbsUpIcon />} color="blue" onChange={action("thumbs-rating-changed")} />
        </div>

        <div>
          <h3 className="text-sm font-medium text-secondary-700 mb-2">
            Text Characters
          </h3>
          <Rating defaultValue={2} character="👍" size="lg" onChange={action("emoji-rating-changed")} />
        </div>
      </div>;
  }
}`,...(pe=(he=T.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var xe,ge,fe;H.parameters={...H.parameters,docs:{...(xe=H.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-secondary-700 mb-2">
          Read-only Ratings
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="w-12 text-sm text-secondary-600">1.0:</span>
            <Rating value={1} disabled />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-12 text-sm text-secondary-600">2.5:</span>
            <Rating value={2.5} allowHalf disabled />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-12 text-sm text-secondary-600">4.0:</span>
            <Rating value={4} disabled />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-12 text-sm text-secondary-600">4.8:</span>
            <Rating value={4.8} allowHalf disabled showText />
          </div>
        </div>
      </div>
    </div>
}`,...(fe=(ge=H.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ve,ye,Ne;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">3 Stars:</span>
        <Rating defaultValue={2} count={3} onChange={action("3-star-changed")} />
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">7 Stars:</span>
        <Rating defaultValue={4} count={7} onChange={action("7-star-changed")} />
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-sm text-secondary-600">10 Stars:</span>
        <Rating defaultValue={8} count={10} size="sm" onChange={action("10-star-changed")} />
      </div>
    </div>
}`,...(Ne=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var je,be,we;B.parameters={...B.parameters,docs:{...(je=B.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const [rating, setRating] = useState(0);
    const [halfRating, setHalfRating] = useState(0);
    return <div className="space-y-6">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-medium text-secondary-700">
            Interactive Rating Demo
          </h3>

          <div className="space-y-2">
            <p className="text-sm text-secondary-600">
              Current Rating: <span className="font-semibold">{rating}</span>
            </p>
            <Rating value={rating} onChange={value => {
            setRating(value);
            action("interactive-rating-changed")(value);
          }} showText size="lg" />
          </div>

          <div className="space-y-2">
            <p className="text-sm text-secondary-600">
              Half Rating: <span className="font-semibold">{halfRating}</span>
            </p>
            <Rating value={halfRating} onChange={value => {
            setHalfRating(value);
            action("interactive-half-rating-changed")(value);
          }} allowHalf showText texts={["😢", "😔", "😐", "🙂", "😊"]} />
          </div>
        </div>
      </div>;
  }
}`,...(we=(be=B.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var Ce,Ve,Re;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const [rating1, setRating1] = useState(3);
    const [rating2, setRating2] = useState(3);
    return <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-secondary-700 mb-2">
            Allow Clear (click same star to clear)
          </h3>
          <p className="text-sm text-secondary-600 mb-2">
            Current: {rating1} - Click the same star to clear
          </p>
          <Rating value={rating1} onChange={setRating1} allowClear showText />
        </div>

        <div>
          <h3 className="text-sm font-medium text-secondary-700 mb-2">
            No Clear (normal behavior)
          </h3>
          <p className="text-sm text-secondary-600 mb-2">Current: {rating2}</p>
          <Rating value={rating2} onChange={setRating2} allowClear={false} showText />
        </div>
      </div>;
  }
}`,...(Re=(Ve=I.parameters)==null?void 0:Ve.docs)==null?void 0:Re.source}}};var ke,Se,Te;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    defaultValue: 3,
    count: 5,
    allowHalf: false,
    allowClear: true,
    disabled: false,
    size: "md",
    color: "yellow",
    showTooltip: false,
    showText: false,
    onChange: action("rating-changed"),
    onHover: action("rating-hovered")
  }
}`,...(Te=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};const Je=["Default","Sizes","Colors","HalfRating","WithText","WithTooltips","CustomIcon","ReadOnlyStates","CustomCounts","InteractiveDemo","AllowClear","Playground"];export{I as AllowClear,V as Colors,L as CustomCounts,T as CustomIcon,w as Default,R as HalfRating,B as InteractiveDemo,z as Playground,H as ReadOnlyStates,C as Sizes,k as WithText,S as WithTooltips,Je as __namedExportsOrder,Oe as default};
