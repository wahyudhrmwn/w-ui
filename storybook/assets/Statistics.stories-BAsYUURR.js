import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{R as we,r as d}from"./index-DkvSDgFW.js";import{c as g}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";const Me={sm:{value:"text-lg font-semibold",title:"text-xs font-medium",description:"text-xs",trend:"text-xs",container:"p-3"},md:{value:"text-2xl font-bold",title:"text-sm font-medium",description:"text-sm",trend:"text-sm",container:"p-4"},lg:{value:"text-4xl font-bold",title:"text-base font-semibold",description:"text-base",trend:"text-base",container:"p-6"}},De={default:{value:"text-secondary-900",title:"text-secondary-600",description:"text-secondary-500",container:"bg-white border-secondary-200"},primary:{value:"text-primary-700",title:"text-primary-600",description:"text-primary-500",container:"bg-primary-50 border-primary-200"},success:{value:"text-green-700",title:"text-green-600",description:"text-green-500",container:"bg-green-50 border-green-200"},warning:{value:"text-yellow-700",title:"text-yellow-600",description:"text-yellow-500",container:"bg-yellow-50 border-yellow-200"},error:{value:"text-red-700",title:"text-red-600",description:"text-red-500",container:"bg-red-50 border-red-200"},info:{value:"text-blue-700",title:"text-blue-600",description:"text-blue-500",container:"bg-blue-50 border-blue-200"}},ke={up:"text-green-600",down:"text-red-600",stable:"text-secondary-500"},ze=({trend:a,className:r})=>({up:e.jsx("svg",{className:r,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),down:e.jsx("svg",{className:r,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"})}),stable:e.jsx("svg",{className:r,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 12H4"})})})[a],Te=(a,r,s,n)=>{const[u,c]=d.useState(n?0:a),i=d.useRef(),l=d.useRef(),m=d.useRef(n?0:a);return d.useEffect(()=>{if(!n){c(a);return}const p=o=>{if(l.current||(l.current=o+s,m.current=u),o<l.current){i.current=requestAnimationFrame(p);return}const h=o-l.current,v=Math.min(h/r,1),x=1-Math.pow(1-v,3),R=m.current+(a-m.current)*x;c(R),v<1&&(i.current=requestAnimationFrame(p))};return c(n?0:a),i.current=requestAnimationFrame(p),()=>{i.current&&cancelAnimationFrame(i.current)}},[a,r,s,n]),d.useEffect(()=>{l.current=void 0},[a]),u},Ce=(a,r=0)=>Math.abs(a)>=1e9?(a/1e9).toFixed(r)+"B":Math.abs(a)>=1e6?(a/1e6).toFixed(r)+"M":Math.abs(a)>=1e3?(a/1e3).toFixed(r)+"K":a.toFixed(r),t=({value:a,title:r,prefix:s,suffix:n,description:u,precision:c=0,formatter:i,animated:l=!1,animationDuration:m=2e3,animationDelay:p=0,trend:o,trendValue:h,trendText:v,size:x="md",color:R="default",layout:$="vertical",extra:y,className:xe,style:fe,...ge})=>{const he=Te(a,m,p,l),q=l?he:a,f=Me[x],b=De[R],ye=we.useMemo(()=>i?i(q):Ce(q,c),[q,i,c]),be=g("rounded-lg border transition-all duration-200 hover:shadow-md",f.container,b.container,{"flex items-center space-x-4":$==="horizontal","space-y-2":$==="vertical"},xe),je=()=>{if(!o)return null;const Ne=ke[o],Ve=x==="sm"?"w-3 h-3":x==="md"?"w-4 h-4":"w-5 h-5";return e.jsxs("div",{className:g("flex items-center space-x-1",f.trend,Ne),children:[e.jsx(ze,{trend:o,className:Ve}),h!==void 0&&e.jsxs("span",{children:[o==="up"?"+":o==="down"?"-":"",Math.abs(h),"%"]}),v&&e.jsx("span",{children:v})]})},Se=()=>e.jsxs("div",{className:g("flex items-baseline space-x-1",f.value,b.value),children:[s&&e.jsx("span",{className:"flex-shrink-0",children:s}),e.jsx("span",{className:"font-mono tabular-nums",children:ye}),n&&e.jsx("span",{className:"flex-shrink-0",children:n})]}),L=()=>e.jsxs(e.Fragment,{children:[r&&e.jsx("div",{className:g(f.title,b.title,"leading-tight"),children:r}),Se(),je(),u&&e.jsx("div",{className:g(f.description,b.description,"leading-relaxed"),children:u})]});return e.jsx("div",{className:be,style:fe,...ge,children:$==="horizontal"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex-1 space-y-1",children:L()}),y&&e.jsx("div",{className:"flex-shrink-0",children:y})]}):e.jsxs(e.Fragment,{children:[L(),y&&e.jsx("div",{className:"mt-4",children:y})]})})};try{t.displayName="Statistics",t.__docgenInfo={description:"",displayName:"Statistics",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},precision:{defaultValue:{value:"0"},description:"",name:"precision",required:!1,type:{name:"number"}},formatter:{defaultValue:null,description:"",name:"formatter",required:!1,type:{name:"((value: number) => string)"}},animated:{defaultValue:{value:"false"},description:"",name:"animated",required:!1,type:{name:"boolean"}},animationDuration:{defaultValue:{value:"2000"},description:"",name:"animationDuration",required:!1,type:{name:"number"}},animationDelay:{defaultValue:{value:"0"},description:"",name:"animationDelay",required:!1,type:{name:"number"}},trend:{defaultValue:null,description:"",name:"trend",required:!1,type:{name:"enum",value:[{value:'"up"'},{value:'"down"'},{value:'"stable"'}]}},trendValue:{defaultValue:null,description:"",name:"trendValue",required:!1,type:{name:"number"}},trendText:{defaultValue:null,description:"",name:"trendText",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},layout:{defaultValue:{value:"vertical"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Fe={title:"Data Display/Statistics",component:t,parameters:{layout:"padded",docs:{description:{component:"Komponen Statistics untuk menampilkan angka dan metrics dengan visualisasi yang menarik. Dilengkapi dengan animated counting, trend indicators, berbagai format angka, dan kustomisasi styling yang fleksibel untuk dashboard dan analytics."}}},tags:["autodocs"],argTypes:{value:{control:{type:"number"},description:"Nilai angka yang akan ditampilkan"},title:{control:{type:"text"},description:"Judul/label untuk statistik"},animated:{control:{type:"boolean"},description:"Apakah menggunakan animasi counting"},trend:{control:{type:"select"},options:[void 0,"up","down","stable"],description:"Indikator trend"},trendValue:{control:{type:"number"},description:"Nilai persentase trend"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Ukuran komponen"},color:{control:{type:"select"},options:["default","primary","success","warning","error","info"],description:"Tema warna"},layout:{control:{type:"select"},options:["vertical","horizontal"],description:"Layout komponen"},precision:{control:{type:"number",min:0,max:4},description:"Jumlah digit desimal"}}},j={args:{value:1234,title:"Total Users"}},S={args:{value:5678,title:"Revenue",prefix:"$",animated:!0,animationDuration:2e3}},N={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsx(t,{value:1234,title:"Sales",trend:"up",trendValue:12.5,trendText:"vs last month",color:"success"}),e.jsx(t,{value:987,title:"Orders",trend:"down",trendValue:8.2,trendText:"vs last week",color:"error"}),e.jsx(t,{value:456,title:"Customers",trend:"stable",trendText:"no change",color:"info"})]})},V={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Small"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsx(t,{size:"sm",value:123,title:"Users",animated:!0}),e.jsx(t,{size:"sm",value:456,title:"Sales",prefix:"$",trend:"up",trendValue:5.2}),e.jsx(t,{size:"sm",value:789,title:"Orders",trend:"down",trendValue:2.1}),e.jsx(t,{size:"sm",value:321,title:"Reviews",suffix:"/5",precision:1})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Medium (Default)"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsx(t,{value:12345,title:"Revenue",prefix:"$",trend:"up",trendValue:15.8,color:"success",animated:!0}),e.jsx(t,{value:6789,title:"Visitors",trend:"up",trendValue:8.4,color:"primary",animated:!0}),e.jsx(t,{value:2468,title:"Conversions",trend:"stable",color:"info",animated:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Large"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsx(t,{size:"lg",value:98765,title:"Total Revenue",prefix:"$",description:"Accumulated since launch",trend:"up",trendValue:23.7,trendText:"vs last quarter",color:"success",animated:!0}),e.jsx(t,{size:"lg",value:54321,title:"Active Users",description:"Monthly active users",trend:"up",trendValue:11.2,trendText:"growth rate",color:"primary",animated:!0})]})]})]})},w={render:()=>e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-6",children:[e.jsx(t,{value:1234,title:"Default",color:"default",animated:!0}),e.jsx(t,{value:2345,title:"Primary",color:"primary",trend:"up",trendValue:5.2,animated:!0}),e.jsx(t,{value:3456,title:"Success",color:"success",prefix:"$",trend:"up",trendValue:12.8,animated:!0}),e.jsx(t,{value:4567,title:"Warning",color:"warning",trend:"stable",animated:!0}),e.jsx(t,{value:5678,title:"Error",color:"error",trend:"down",trendValue:3.4,animated:!0}),e.jsx(t,{value:6789,title:"Info",color:"info",suffix:"%",precision:1,animated:!0})]})},M={render:()=>e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[e.jsx(t,{value:1234567,title:"Large Number",description:"Auto-formatted to M/K",animated:!0}),e.jsx(t,{value:98.567,title:"Percentage",suffix:"%",precision:2,color:"success",animated:!0}),e.jsx(t,{value:1234.56,title:"Currency",prefix:"$",precision:2,color:"primary",animated:!0}),e.jsx(t,{value:4.8,title:"Rating",suffix:" ★",precision:1,color:"warning",formatter:a=>a.toFixed(1),animated:!0})]})},D={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsx(t,{value:150,title:"Time Spent",formatter:a=>{const r=Math.floor(a/60),s=a%60;return`${r}h ${s}m`},color:"info",animated:!0}),e.jsx(t,{value:2048e3,title:"File Size",formatter:a=>a>=1024*1024?`${(a/(1024*1024)).toFixed(1)} MB`:a>=1024?`${(a/1024).toFixed(1)} KB`:`${a} B`,color:"primary",animated:!0}),e.jsx(t,{value:7,title:"Days Left",formatter:a=>`${Math.floor(a)} ${a===1?"day":"days"}`,color:"warning",animated:!0})]})},k={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{layout:"horizontal",value:12345,title:"Total Revenue",prefix:"$",description:"This month",trend:"up",trendValue:15.2,color:"success",animated:!0,extra:e.jsx("div",{className:"w-12 h-12 bg-green-100 rounded-full flex items-center justify-center",children:e.jsx("svg",{className:"w-6 h-6 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})})})}),e.jsx(t,{layout:"horizontal",value:6789,title:"Active Users",description:"Online now",trend:"up",trendValue:8.4,color:"primary",animated:!0,extra:e.jsx("div",{className:"w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center",children:e.jsx("svg",{className:"w-6 h-6 text-primary-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})})})]})},z={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(t,{value:8547,title:"Downloads",trend:"up",trendValue:23.1,color:"primary",animated:!0,extra:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{className:"px-3 py-1 text-xs bg-primary-100 text-primary-700 rounded hover:bg-primary-200",children:"View Details"}),e.jsx("button",{className:"px-3 py-1 text-xs bg-secondary-100 text-secondary-700 rounded hover:bg-secondary-200",children:"Export"})]})}),e.jsx(t,{value:92.5,title:"Satisfaction Score",suffix:"%",precision:1,description:"Customer feedback",color:"success",animated:!0,extra:e.jsx("div",{className:"w-full bg-secondary-200 rounded-full h-2",children:e.jsx("div",{className:"bg-green-500 h-2 rounded-full transition-all duration-1000",style:{width:"92.5%"}})})})]})},T={render:()=>{const[a,r]=d.useState({visitors:1234,sales:5678,revenue:12345,orders:987});return d.useEffect(()=>{const s=setInterval(()=>{r(n=>({visitors:n.visitors+Math.floor(Math.random()*10)-3,sales:n.sales+Math.floor(Math.random()*20)-8,revenue:n.revenue+Math.floor(Math.random()*100)-30,orders:n.orders+Math.floor(Math.random()*5)-2}))},3e3);return()=>clearInterval(s)},[]),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Real-time Dashboard"}),e.jsx("p",{className:"text-sm text-secondary-600",children:"Data updates every 3 seconds"})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsx(t,{value:a.visitors,title:"Visitors",color:"info",animated:!0,animationDuration:1500,trend:"up",trendValue:Math.round(Math.random()*10+2)}),e.jsx(t,{value:a.sales,title:"Sales",color:"success",animated:!0,animationDuration:1500,trend:Math.random()>.3?"up":"down",trendValue:Math.round(Math.random()*15+5)}),e.jsx(t,{value:a.revenue,title:"Revenue",prefix:"$",color:"primary",animated:!0,animationDuration:1500,trend:"up",trendValue:Math.round(Math.random()*20+10)}),e.jsx(t,{value:a.orders,title:"Orders",color:"warning",animated:!0,animationDuration:1500,trend:Math.random()>.5?"up":"stable",trendValue:Math.round(Math.random()*8+1)})]})]})}},C={render:()=>e.jsxs("div",{className:"space-y-8 bg-secondary-50 p-8 rounded-lg",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-2xl font-bold text-secondary-900 mb-2",children:"Analytics Dashboard"}),e.jsx("p",{className:"text-secondary-600",children:"Key performance indicators"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[e.jsx(t,{value:125678,title:"Total Revenue",prefix:"$",description:"This quarter",trend:"up",trendValue:18.2,trendText:"vs last quarter",color:"success",animated:!0,animationDelay:100}),e.jsx(t,{value:45123,title:"New Customers",description:"This month",trend:"up",trendValue:12.5,trendText:"growth",color:"primary",animated:!0,animationDelay:200}),e.jsx(t,{value:8567,title:"Orders",description:"Last 30 days",trend:"up",trendValue:6.8,color:"info",animated:!0,animationDelay:300}),e.jsx(t,{value:94.2,title:"Satisfaction",suffix:"%",precision:1,description:"Customer rating",trend:"stable",color:"success",animated:!0,animationDelay:400})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-6 gap-4",children:[e.jsx(t,{size:"sm",value:1234,title:"Page Views",trend:"up",trendValue:5.2,animated:!0,animationDelay:500}),e.jsx(t,{size:"sm",value:456,title:"Conversions",suffix:"%",precision:1,trend:"up",trendValue:2.1,color:"success",animated:!0,animationDelay:600}),e.jsx(t,{size:"sm",value:78,title:"Bounce Rate",suffix:"%",precision:0,trend:"down",trendValue:1.8,color:"warning",animated:!0,animationDelay:700}),e.jsx(t,{size:"sm",value:234,title:"Support Tickets",trend:"down",trendValue:12.3,color:"error",animated:!0,animationDelay:800}),e.jsx(t,{size:"sm",value:567,title:"Newsletter",description:"Subscribers",trend:"up",trendValue:8.9,color:"info",animated:!0,animationDelay:900}),e.jsx(t,{size:"sm",value:89,title:"Load Time",suffix:"ms",trend:"stable",color:"success",animated:!0,animationDelay:1e3})]})]})};var F,A,W;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: 1234,
    title: "Total Users"
  }
}`,...(W=(A=j.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var B,E,O;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: 5678,
    title: "Revenue",
    prefix: "$",
    animated: true,
    animationDuration: 2000
  }
}`,...(O=(E=S.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var U,_,I;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Statistics value={1234} title="Sales" trend="up" trendValue={12.5} trendText="vs last month" color="success" />

      <Statistics value={987} title="Orders" trend="down" trendValue={8.2} trendText="vs last week" color="error" />

      <Statistics value={456} title="Customers" trend="stable" trendText="no change" color="info" />
    </div>
}`,...(I=(_=N.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var K,P,H;V.parameters={...V.parameters,docs:{...(K=V.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Statistics size="sm" value={123} title="Users" animated />
          <Statistics size="sm" value={456} title="Sales" prefix="$" trend="up" trendValue={5.2} />
          <Statistics size="sm" value={789} title="Orders" trend="down" trendValue={2.1} />
          <Statistics size="sm" value={321} title="Reviews" suffix="/5" precision={1} />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (Default)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Statistics value={12345} title="Revenue" prefix="$" trend="up" trendValue={15.8} color="success" animated />
          <Statistics value={6789} title="Visitors" trend="up" trendValue={8.4} color="primary" animated />
          <Statistics value={2468} title="Conversions" trend="stable" color="info" animated />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Statistics size="lg" value={98765} title="Total Revenue" prefix="$" description="Accumulated since launch" trend="up" trendValue={23.7} trendText="vs last quarter" color="success" animated />
          <Statistics size="lg" value={54321} title="Active Users" description="Monthly active users" trend="up" trendValue={11.2} trendText="growth rate" color="primary" animated />
        </div>
      </div>
    </div>
}`,...(H=(P=V.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var J,G,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <Statistics value={1234} title="Default" color="default" animated />

      <Statistics value={2345} title="Primary" color="primary" trend="up" trendValue={5.2} animated />

      <Statistics value={3456} title="Success" color="success" prefix="$" trend="up" trendValue={12.8} animated />

      <Statistics value={4567} title="Warning" color="warning" trend="stable" animated />

      <Statistics value={5678} title="Error" color="error" trend="down" trendValue={3.4} animated />

      <Statistics value={6789} title="Info" color="info" suffix="%" precision={1} animated />
    </div>
}`,...(Q=(G=w.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Y,Z;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <Statistics value={1234567} title="Large Number" description="Auto-formatted to M/K" animated />

      <Statistics value={98.567} title="Percentage" suffix="%" precision={2} color="success" animated />

      <Statistics value={1234.56} title="Currency" prefix="$" precision={2} color="primary" animated />

      <Statistics value={4.8} title="Rating" suffix=" ★" precision={1} color="warning" formatter={value => value.toFixed(1)} animated />
    </div>
}`,...(Z=(Y=M.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:'{\n  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-6">\n      <Statistics value={150} title="Time Spent" formatter={value => {\n      const hours = Math.floor(value / 60);\n      const minutes = value % 60;\n      return `${hours}h ${minutes}m`;\n    }} color="info" animated />\n\n      <Statistics value={2048000} title="File Size" formatter={value => {\n      if (value >= 1024 * 1024) return `${(value / (1024 * 1024)).toFixed(1)} MB`;\n      if (value >= 1024) return `${(value / 1024).toFixed(1)} KB`;\n      return `${value} B`;\n    }} color="primary" animated />\n\n      <Statistics value={7} title="Days Left" formatter={value => `${Math.floor(value)} ${value === 1 ? "day" : "days"}`} color="warning" animated />\n    </div>\n}',...(ae=(te=D.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,ne,se;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Statistics layout="horizontal" value={12345} title="Total Revenue" prefix="$" description="This month" trend="up" trendValue={15.2} color="success" animated extra={<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>} />

      <Statistics layout="horizontal" value={6789} title="Active Users" description="Online now" trend="up" trendValue={8.4} color="primary" animated extra={<div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>} />
    </div>
}`,...(se=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,oe,le;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Statistics value={8547} title="Downloads" trend="up" trendValue={23.1} color="primary" animated extra={<div className="flex space-x-2">
            <button className="px-3 py-1 text-xs bg-primary-100 text-primary-700 rounded hover:bg-primary-200">
              View Details
            </button>
            <button className="px-3 py-1 text-xs bg-secondary-100 text-secondary-700 rounded hover:bg-secondary-200">
              Export
            </button>
          </div>} />

      <Statistics value={92.5} title="Satisfaction Score" suffix="%" precision={1} description="Customer feedback" color="success" animated extra={<div className="w-full bg-secondary-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full transition-all duration-1000" style={{
        width: "92.5%"
      }} />
          </div>} />
    </div>
}`,...(le=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var de,ce,ue;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [stats, setStats] = useState({
      visitors: 1234,
      sales: 5678,
      revenue: 12345,
      orders: 987
    });
    useEffect(() => {
      const interval = setInterval(() => {
        setStats(prev => ({
          visitors: prev.visitors + Math.floor(Math.random() * 10) - 3,
          sales: prev.sales + Math.floor(Math.random() * 20) - 8,
          revenue: prev.revenue + Math.floor(Math.random() * 100) - 30,
          orders: prev.orders + Math.floor(Math.random() * 5) - 2
        }));
      }, 3000);
      return () => clearInterval(interval);
    }, []);
    return <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Real-time Dashboard</h3>
          <p className="text-sm text-secondary-600">
            Data updates every 3 seconds
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Statistics value={stats.visitors} title="Visitors" color="info" animated animationDuration={1500} trend="up" trendValue={Math.round(Math.random() * 10 + 2)} />

          <Statistics value={stats.sales} title="Sales" color="success" animated animationDuration={1500} trend={Math.random() > 0.3 ? "up" : "down"} trendValue={Math.round(Math.random() * 15 + 5)} />

          <Statistics value={stats.revenue} title="Revenue" prefix="$" color="primary" animated animationDuration={1500} trend="up" trendValue={Math.round(Math.random() * 20 + 10)} />

          <Statistics value={stats.orders} title="Orders" color="warning" animated animationDuration={1500} trend={Math.random() > 0.5 ? "up" : "stable"} trendValue={Math.round(Math.random() * 8 + 1)} />
        </div>
      </div>;
  }
}`,...(ue=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,pe,ve;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 bg-secondary-50 p-8 rounded-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-secondary-900 mb-2">
          Analytics Dashboard
        </h2>
        <p className="text-secondary-600">Key performance indicators</p>
      </div>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Statistics value={125678} title="Total Revenue" prefix="$" description="This quarter" trend="up" trendValue={18.2} trendText="vs last quarter" color="success" animated animationDelay={100} />

        <Statistics value={45123} title="New Customers" description="This month" trend="up" trendValue={12.5} trendText="growth" color="primary" animated animationDelay={200} />

        <Statistics value={8567} title="Orders" description="Last 30 days" trend="up" trendValue={6.8} color="info" animated animationDelay={300} />

        <Statistics value={94.2} title="Satisfaction" suffix="%" precision={1} description="Customer rating" trend="stable" color="success" animated animationDelay={400} />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <Statistics size="sm" value={1234} title="Page Views" trend="up" trendValue={5.2} animated animationDelay={500} />

        <Statistics size="sm" value={456} title="Conversions" suffix="%" precision={1} trend="up" trendValue={2.1} color="success" animated animationDelay={600} />

        <Statistics size="sm" value={78} title="Bounce Rate" suffix="%" precision={0} trend="down" trendValue={1.8} color="warning" animated animationDelay={700} />

        <Statistics size="sm" value={234} title="Support Tickets" trend="down" trendValue={12.3} color="error" animated animationDelay={800} />

        <Statistics size="sm" value={567} title="Newsletter" description="Subscribers" trend="up" trendValue={8.9} color="info" animated animationDelay={900} />

        <Statistics size="sm" value={89} title="Load Time" suffix="ms" trend="stable" color="success" animated animationDelay={1000} />
      </div>
    </div>
}`,...(ve=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};const Ae=["Default","WithAnimation","WithTrend","DifferentSizes","DifferentColors","WithFormatting","CustomFormatter","HorizontalLayout","WithExtraContent","RealTimeData","DashboardExample"];export{D as CustomFormatter,C as DashboardExample,j as Default,w as DifferentColors,V as DifferentSizes,k as HorizontalLayout,T as RealTimeData,S as WithAnimation,z as WithExtraContent,M as WithFormatting,N as WithTrend,Ae as __namedExportsOrder,Fe as default};
