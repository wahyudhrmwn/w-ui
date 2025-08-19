import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{a as l}from"./index-B-lxVbXh.js";import{r as t}from"./index-DkvSDgFW.js";import{c as N}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./v4-CtRu48qb.js";const We=({src:i,alt:h,isOpen:d,onClose:r})=>{const[o,m]=t.useState(1),[w,g]=t.useState({x:0,y:0}),[p,v]=t.useState(!1),[x,b]=t.useState({x:0,y:0}),I=t.useCallback(n=>{n.preventDefault();const f=n.deltaY>0?-.1:.1;m(c=>Math.max(.1,Math.min(3,c+f)))},[]),H=t.useCallback(n=>{n.button===0&&(v(!0),b({x:n.clientX,y:n.clientY}))},[]),D=t.useCallback(n=>{if(p){const f=n.clientX-x.x,c=n.clientY-x.y;g(j=>({x:j.x+f,y:j.y+c})),b({x:n.clientX,y:n.clientY})}},[p,x]),k=t.useCallback(()=>{v(!1)},[]),y=t.useCallback(n=>{n.key==="Escape"&&r()},[r]),B=t.useCallback(()=>{m(1),g({x:0,y:0})},[]);return t.useEffect(()=>{if(d)return document.addEventListener("keydown",y),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",y),document.body.style.overflow=""}},[d,y]),d?e.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50",children:[e.jsxs("div",{className:"absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 rounded-lg px-4 py-2 flex items-center space-x-2 z-10",children:[e.jsx("button",{onClick:()=>m(n=>Math.max(.1,n-.2)),className:"text-white hover:text-secondary-300 transition-colors p-1",title:"Zoom Out",children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"})})}),e.jsxs("span",{className:"text-white text-sm font-medium min-w-16 text-center",children:[Math.round(o*100),"%"]}),e.jsx("button",{onClick:()=>m(n=>Math.min(3,n+.2)),className:"text-white hover:text-secondary-300 transition-colors p-1",title:"Zoom In",children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"})})}),e.jsx("div",{className:"w-px h-6 bg-secondary-600"}),e.jsx("button",{onClick:B,className:"text-white hover:text-secondary-300 transition-colors p-1",title:"Reset",children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})})]}),e.jsx("button",{onClick:r,className:"absolute top-4 right-4 text-white hover:text-secondary-300 transition-colors z-10",title:"Close (Esc)",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("div",{className:"relative cursor-grab active:cursor-grabbing",onWheel:I,onMouseDown:H,onMouseMove:D,onMouseUp:k,onMouseLeave:k,children:e.jsx("img",{src:i,alt:h,draggable:!1,className:"max-w-none select-none",style:{transform:`scale(${o}) translate(${w.x/o}px, ${w.y/o}px)`,transition:p?"none":"transform 0.1s ease-out"}})}),e.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 rounded-lg px-4 py-2 text-white text-sm text-center",children:e.jsx("div",{children:"Mouse wheel to zoom • Click and drag to move • ESC to close"})})]}):null},a=({src:i,alt:h,placeholder:d,fallback:r,loading:o="lazy",preview:m=!1,previewSrc:w,onError:g,onLoad:p,rootMargin:v="50px",threshold:x=.01,width:b,height:I,objectFit:H="cover",objectPosition:D="center",wrapperClassName:k,wrapperStyle:y,className:B,style:n,...f})=>{const[c,j]=t.useState("loading"),[_,ke]=t.useState(o==="eager"),[Le,A]=t.useState(!1),Ce=t.useRef(null),O=t.useRef(null);t.useEffect(()=>{if(o==="eager")return;const u=new IntersectionObserver(([Re])=>{Re.isIntersecting&&(ke(!0),u.disconnect())},{rootMargin:v,threshold:x});return O.current&&u.observe(O.current),()=>u.disconnect()},[o,v,x]);const Se=t.useCallback(u=>{j("loaded"),p==null||p(u)},[p]),ze=t.useCallback(u=>{j("error"),g==null||g(u)},[g]),Me=t.useCallback(()=>{m&&c==="loaded"&&A(!0)},[m,c]),L=o==="eager"||_,qe=L?i:"",Fe=!L||c==="loading",Pe=c==="error",$=L&&c==="loaded",T={width:b,height:I,objectFit:H,objectPosition:D,...n},Ee={width:b||"auto",height:I||"auto",...y};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:O,className:N("relative inline-block overflow-hidden",{"cursor-pointer":m&&c==="loaded"},k),style:Ee,onClick:Me,children:[Fe&&e.jsx("div",{className:N("absolute inset-0 flex items-center justify-center bg-secondary-100",typeof d=="string"?"text-secondary-500 text-sm":""),style:T,children:d||e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx("svg",{className:"w-8 h-8 text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),o==="lazy"&&!_&&e.jsx("div",{className:"text-xs text-secondary-400",children:"Loading..."})]})}),Pe&&e.jsx("div",{className:N("absolute inset-0 flex items-center justify-center bg-secondary-100",typeof r=="string"?"text-secondary-500 text-sm":""),style:T,children:r||e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx("svg",{className:"w-8 h-8 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.634 0L4.18 16.5c-.77.833.192 2.5 1.732 2.5z"})}),e.jsx("div",{className:"text-xs text-red-500",children:"Failed to load"})]})}),L&&e.jsx("img",{ref:Ce,src:qe,alt:h,onLoad:Se,onError:ze,className:N("transition-opacity duration-300",{"opacity-0":!$,"opacity-100":$},B),style:T,...f}),m&&c==="loaded"&&e.jsx("div",{className:"absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black bg-opacity-50 flex items-center justify-center",children:e.jsx("div",{className:"bg-white bg-opacity-90 rounded-full p-2",children:e.jsx("svg",{className:"w-6 h-6 text-secondary-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"})})})})]}),m&&e.jsx(We,{src:w||i,alt:h,isOpen:Le,onClose:()=>A(!1)})]})};try{a.displayName="Image",a.__docgenInfo={description:"",displayName:"Image",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"ReactNode"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"lazy"},description:"",name:"loading",required:!1,type:{name:"enum",value:[{value:'"lazy"'},{value:'"eager"'}]}},preview:{defaultValue:{value:"false"},description:"",name:"preview",required:!1,type:{name:"boolean"}},previewSrc:{defaultValue:null,description:"",name:"previewSrc",required:!1,type:{name:"string"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((error: SyntheticEvent<HTMLImageElement, Event>) => void)"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"((event: SyntheticEvent<HTMLImageElement, Event>) => void)"}},rootMargin:{defaultValue:{value:"50px"},description:"",name:"rootMargin",required:!1,type:{name:"string"}},threshold:{defaultValue:{value:"0.01"},description:"",name:"threshold",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},objectFit:{defaultValue:{value:"cover"},description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"fill"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},objectPosition:{defaultValue:{value:"center"},description:"",name:"objectPosition",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:null,description:"",name:"wrapperClassName",required:!1,type:{name:"string"}},wrapperStyle:{defaultValue:null,description:"",name:"wrapperStyle",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const _e={title:"Data Display/Image",component:a,parameters:{layout:"padded",docs:{description:{component:"Komponen Image yang canggih dengan lazy loading, error handling, placeholder, fallback, dan preview modal dengan zoom/pan functionality. Optimized untuk performance dan user experience dengan berbagai opsi kustomisasi."}}},tags:["autodocs"],argTypes:{src:{control:{type:"text"},description:"URL gambar"},alt:{control:{type:"text"},description:"Alt text untuk accessibility"},loading:{control:{type:"select"},options:["lazy","eager"],description:"Loading strategy"},preview:{control:{type:"boolean"},description:"Apakah menampilkan preview modal"},width:{control:{type:"text"},description:"Width gambar"},height:{control:{type:"text"},description:"Height gambar"},objectFit:{control:{type:"select"},options:["contain","cover","fill","none","scale-down"],description:"CSS object-fit property"},objectPosition:{control:{type:"text"},description:"CSS object-position property"}}},s={landscape:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",portrait:"https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400&h=600&fit=crop",square:"https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",small:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop",large:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",cat:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",city:"https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=600&h=400&fit=crop",nature:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop"},C={args:{src:s.landscape,alt:"Beautiful landscape",width:300,height:200,onLoad:l("image-loaded"),onError:l("image-error")}},S={args:{src:s.large,alt:"Large landscape image",width:300,height:200,preview:!0,onLoad:l("image-loaded")}},z={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-secondary-600",children:"Scroll down to see lazy loading in action. Images will load when they come into view."}),e.jsx("div",{className:"h-96 bg-secondary-50 flex items-center justify-center",children:e.jsx("p",{className:"text-secondary-500",children:"Scroll down to see lazy loaded images"})}),e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Lazy Loaded Images"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(a,{src:s.cat,alt:"Cat",width:300,height:200,loading:"lazy",onLoad:l("lazy-cat-loaded")}),e.jsx(a,{src:s.city,alt:"City",width:300,height:200,loading:"lazy",onLoad:l("lazy-city-loaded")}),e.jsx(a,{src:s.nature,alt:"Nature",width:300,height:200,loading:"lazy",onLoad:l("lazy-nature-loaded")}),e.jsx(a,{src:s.landscape,alt:"Landscape",width:300,height:200,loading:"lazy",onLoad:l("lazy-landscape-loaded")})]})]})})]})},M={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Text Placeholder"}),e.jsx(a,{src:s.landscape,alt:"Landscape with text placeholder",width:300,height:200,placeholder:"Loading image...",onLoad:l("placeholder-loaded")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Custom Placeholder Component"}),e.jsx(a,{src:s.portrait,alt:"Portrait with custom placeholder",width:300,height:400,placeholder:e.jsxs("div",{className:"flex flex-col items-center space-y-2 text-secondary-500",children:[e.jsx("div",{className:"animate-spin",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),e.jsx("div",{className:"text-sm",children:"Loading beautiful image..."})]}),onLoad:l("custom-placeholder-loaded")})]})]})},q={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Default Error State"}),e.jsx(a,{src:"https://invalid-url-that-will-fail.com/image.jpg",alt:"This image will fail to load",width:300,height:200,onError:l("default-error")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Custom Fallback"}),e.jsx(a,{src:"https://another-invalid-url.com/image.jpg",alt:"This image will also fail",width:300,height:200,fallback:e.jsxs("div",{className:"flex flex-col items-center space-y-2 text-red-500",children:[e.jsx("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 1.846-.5 3.578-1.374 5.06"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-medium",children:"Oops! Image not found"}),e.jsx("div",{className:"text-sm",children:"Please check the URL and try again"})]})]}),onError:l("custom-fallback-error")})]})]})},F={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Fixed Sizes"}),e.jsxs("div",{className:"flex items-end space-x-4",children:[e.jsx(a,{src:s.square,alt:"Small square",width:100,height:100}),e.jsx(a,{src:s.square,alt:"Medium square",width:150,height:150}),e.jsx(a,{src:s.square,alt:"Large square",width:200,height:200})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Responsive Width"}),e.jsx(a,{src:s.landscape,alt:"Responsive landscape",width:"100%",height:200,className:"max-w-md"})]})]})},P={render:()=>e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Cover (Default)"}),e.jsx(a,{src:s.landscape,alt:"Cover fit",width:200,height:150,objectFit:"cover",className:"border border-secondary-200"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Contain"}),e.jsx(a,{src:s.landscape,alt:"Contain fit",width:200,height:150,objectFit:"contain",className:"border border-secondary-200 bg-secondary-50"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Fill"}),e.jsx(a,{src:s.landscape,alt:"Fill fit",width:200,height:150,objectFit:"fill",className:"border border-secondary-200"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Scale Down"}),e.jsx(a,{src:s.small,alt:"Scale down fit",width:200,height:150,objectFit:"scale-down",className:"border border-secondary-200 bg-secondary-50"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-medium mb-2",children:"None"}),e.jsx(a,{src:s.landscape,alt:"None fit",width:200,height:150,objectFit:"none",className:"border border-secondary-200"})]})]})})},E={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-secondary-600",children:"Object position controls where the image is positioned within its container when using object-fit."}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Left"}),e.jsx(a,{src:s.landscape,alt:"Left positioned",width:150,height:200,objectFit:"cover",objectPosition:"left",className:"border border-secondary-200"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Center"}),e.jsx(a,{src:s.landscape,alt:"Center positioned",width:150,height:200,objectFit:"cover",objectPosition:"center",className:"border border-secondary-200"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Right"}),e.jsx(a,{src:s.landscape,alt:"Right positioned",width:150,height:200,objectFit:"cover",objectPosition:"right",className:"border border-secondary-200"})]})]})]})},R={render:()=>{const[i,h]=t.useState(s.landscape),d=[{src:s.landscape,alt:"Landscape",name:"Landscape"},{src:s.cat,alt:"Cat",name:"Cat"},{src:s.city,alt:"City",name:"City"},{src:s.nature,alt:"Nature",name:"Nature"}];return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Interactive Gallery with Preview"}),e.jsx("div",{className:"mb-4",children:e.jsx(a,{src:i,alt:"Selected image",width:500,height:300,preview:!0,objectFit:"cover",className:"rounded-lg"})}),e.jsx("div",{className:"flex space-x-2",children:d.map(r=>e.jsxs("button",{onClick:()=>h(r.src),className:N("relative overflow-hidden rounded border-2 transition-colors",i===r.src?"border-primary-500":"border-secondary-200 hover:border-secondary-300"),children:[e.jsx(a,{src:r.src,alt:r.alt,width:80,height:60,objectFit:"cover"}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-1 text-center",children:r.name})]},r.src))})]})})}},W={render:()=>{const[i,h]=t.useState("lazy"),[d,r]=t.useState(!0);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Loading Strategy"}),e.jsxs("select",{value:i,onChange:o=>h(o.target.value),className:"px-3 py-1 border border-secondary-300 rounded text-sm",children:[e.jsx("option",{value:"lazy",children:"Lazy"}),e.jsx("option",{value:"eager",children:"Eager"})]})]}),e.jsx("button",{onClick:()=>{r(!1),setTimeout(()=>r(!0),100)},className:"px-4 py-2 bg-primary-600 text-white rounded text-sm hover:bg-primary-700",children:"Reload Images"})]}),d&&e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(a,{src:s.cat,alt:"Cat",width:250,height:200,loading:i,onLoad:l(`${i}-cat-loaded`)}),e.jsx(a,{src:s.city,alt:"City",width:250,height:200,loading:i,onLoad:l(`${i}-city-loaded`)})]})]})}},V={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Rounded Images"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(a,{src:s.square,alt:"Rounded small",width:100,height:100,className:"rounded-lg"}),e.jsx(a,{src:s.square,alt:"Rounded full",width:100,height:100,className:"rounded-full"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"With Shadow and Border"}),e.jsx(a,{src:s.landscape,alt:"Styled image",width:300,height:200,className:"rounded-xl shadow-lg border-4 border-white",wrapperClassName:"inline-block shadow-xl"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Grayscale Hover Effect"}),e.jsx(a,{src:s.nature,alt:"Hover effect",width:300,height:200,className:"grayscale hover:grayscale-0 transition-all duration-300 rounded-lg"})]})]})};var G,U,Y;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    src: sampleImages.landscape,
    alt: "Beautiful landscape",
    width: 300,
    height: 200,
    onLoad: action("image-loaded"),
    onError: action("image-error")
  }
}`,...(Y=(U=C.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var X,K,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    src: sampleImages.large,
    alt: "Large landscape image",
    width: 300,
    height: 200,
    preview: true,
    onLoad: action("image-loaded")
  }
}`,...(Z=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var J,Q,ee;z.parameters={...z.parameters,docs:{...(J=z.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm text-secondary-600">
        Scroll down to see lazy loading in action. Images will load when they
        come into view.
      </p>

      {/* Some spacing to require scrolling */}
      <div className="h-96 bg-secondary-50 flex items-center justify-center">
        <p className="text-secondary-500">
          Scroll down to see lazy loaded images
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Lazy Loaded Images</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image src={sampleImages.cat} alt="Cat" width={300} height={200} loading="lazy" onLoad={action("lazy-cat-loaded")} />
            <Image src={sampleImages.city} alt="City" width={300} height={200} loading="lazy" onLoad={action("lazy-city-loaded")} />
            <Image src={sampleImages.nature} alt="Nature" width={300} height={200} loading="lazy" onLoad={action("lazy-nature-loaded")} />
            <Image src={sampleImages.landscape} alt="Landscape" width={300} height={200} loading="lazy" onLoad={action("lazy-landscape-loaded")} />
          </div>
        </div>
      </div>
    </div>
}`,...(ee=(Q=z.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ae,se,te;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Text Placeholder</h3>
        <Image src={sampleImages.landscape} alt="Landscape with text placeholder" width={300} height={200} placeholder="Loading image..." onLoad={action("placeholder-loaded")} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Custom Placeholder Component
        </h3>
        <Image src={sampleImages.portrait} alt="Portrait with custom placeholder" width={300} height={400} placeholder={<div className="flex flex-col items-center space-y-2 text-secondary-500">
              <div className="animate-spin">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div className="text-sm">Loading beautiful image...</div>
            </div>} onLoad={action("custom-placeholder-loaded")} />
      </div>
    </div>
}`,...(te=(se=M.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ne,re,ie;q.parameters={...q.parameters,docs:{...(ne=q.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Default Error State</h3>
        <Image src="https://invalid-url-that-will-fail.com/image.jpg" alt="This image will fail to load" width={300} height={200} onError={action("default-error")} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Custom Fallback</h3>
        <Image src="https://another-invalid-url.com/image.jpg" alt="This image will also fail" width={300} height={200} fallback={<div className="flex flex-col items-center space-y-2 text-red-500">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 1.846-.5 3.578-1.374 5.06" />
              </svg>
              <div className="text-center">
                <div className="font-medium">Oops! Image not found</div>
                <div className="text-sm">
                  Please check the URL and try again
                </div>
              </div>
            </div>} onError={action("custom-fallback-error")} />
      </div>
    </div>
}`,...(ie=(re=q.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,oe,ce;F.parameters={...F.parameters,docs:{...(le=F.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Fixed Sizes</h3>
        <div className="flex items-end space-x-4">
          <Image src={sampleImages.square} alt="Small square" width={100} height={100} />
          <Image src={sampleImages.square} alt="Medium square" width={150} height={150} />
          <Image src={sampleImages.square} alt="Large square" width={200} height={200} />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Responsive Width</h3>
        <Image src={sampleImages.landscape} alt="Responsive landscape" width="100%" height={200} className="max-w-md" />
      </div>
    </div>
}`,...(ce=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,me,he;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-center">
          <h4 className="font-medium mb-2">Cover (Default)</h4>
          <Image src={sampleImages.landscape} alt="Cover fit" width={200} height={150} objectFit="cover" className="border border-secondary-200" />
        </div>

        <div className="text-center">
          <h4 className="font-medium mb-2">Contain</h4>
          <Image src={sampleImages.landscape} alt="Contain fit" width={200} height={150} objectFit="contain" className="border border-secondary-200 bg-secondary-50" />
        </div>

        <div className="text-center">
          <h4 className="font-medium mb-2">Fill</h4>
          <Image src={sampleImages.landscape} alt="Fill fit" width={200} height={150} objectFit="fill" className="border border-secondary-200" />
        </div>

        <div className="text-center">
          <h4 className="font-medium mb-2">Scale Down</h4>
          <Image src={sampleImages.small} alt="Scale down fit" width={200} height={150} objectFit="scale-down" className="border border-secondary-200 bg-secondary-50" />
        </div>

        <div className="text-center">
          <h4 className="font-medium mb-2">None</h4>
          <Image src={sampleImages.landscape} alt="None fit" width={200} height={150} objectFit="none" className="border border-secondary-200" />
        </div>
      </div>
    </div>
}`,...(he=(me=P.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var pe,ge,ue;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm text-secondary-600">
        Object position controls where the image is positioned within its
        container when using object-fit.
      </p>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <h4 className="font-medium mb-2">Left</h4>
          <Image src={sampleImages.landscape} alt="Left positioned" width={150} height={200} objectFit="cover" objectPosition="left" className="border border-secondary-200" />
        </div>

        <div className="text-center">
          <h4 className="font-medium mb-2">Center</h4>
          <Image src={sampleImages.landscape} alt="Center positioned" width={150} height={200} objectFit="cover" objectPosition="center" className="border border-secondary-200" />
        </div>

        <div className="text-center">
          <h4 className="font-medium mb-2">Right</h4>
          <Image src={sampleImages.landscape} alt="Right positioned" width={150} height={200} objectFit="cover" objectPosition="right" className="border border-secondary-200" />
        </div>
      </div>
    </div>
}`,...(ue=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var xe,ve,be;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const [selectedImage, setSelectedImage] = useState(sampleImages.landscape);
    const images = [{
      src: sampleImages.landscape,
      alt: "Landscape",
      name: "Landscape"
    }, {
      src: sampleImages.cat,
      alt: "Cat",
      name: "Cat"
    }, {
      src: sampleImages.city,
      alt: "City",
      name: "City"
    }, {
      src: sampleImages.nature,
      alt: "Nature",
      name: "Nature"
    }];
    return <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Interactive Gallery with Preview
          </h3>

          {/* Main image */}
          <div className="mb-4">
            <Image src={selectedImage} alt="Selected image" width={500} height={300} preview objectFit="cover" className="rounded-lg" />
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-2">
            {images.map(image => <button key={image.src} onClick={() => setSelectedImage(image.src)} className={clsx("relative overflow-hidden rounded border-2 transition-colors", selectedImage === image.src ? "border-primary-500" : "border-secondary-200 hover:border-secondary-300")}>
                <Image src={image.src} alt={image.alt} width={80} height={60} objectFit="cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-1 text-center">
                  {image.name}
                </div>
              </button>)}
          </div>
        </div>
      </div>;
  }
}`,...(be=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ye,fe,je;W.parameters={...W.parameters,docs:{...(ye=W.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState<"lazy" | "eager">("lazy");
    const [showImages, setShowImages] = useState(true);
    return <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Loading Strategy
            </label>
            <select value={loading} onChange={e => setLoading(e.target.value as "lazy" | "eager")} className="px-3 py-1 border border-secondary-300 rounded text-sm">
              <option value="lazy">Lazy</option>
              <option value="eager">Eager</option>
            </select>
          </div>

          <button onClick={() => {
          setShowImages(false);
          setTimeout(() => setShowImages(true), 100);
        }} className="px-4 py-2 bg-primary-600 text-white rounded text-sm hover:bg-primary-700">
            Reload Images
          </button>
        </div>

        {showImages && <div className="grid grid-cols-2 gap-4">
            <Image src={sampleImages.cat} alt="Cat" width={250} height={200} loading={loading} onLoad={action(\`\${loading}-cat-loaded\`)} />
            <Image src={sampleImages.city} alt="City" width={250} height={200} loading={loading} onLoad={action(\`\${loading}-city-loaded\`)} />
          </div>}
      </div>;
  }
}`,...(je=(fe=W.parameters)==null?void 0:fe.docs)==null?void 0:je.source}}};var Ne,we,Ie;V.parameters={...V.parameters,docs:{...(Ne=V.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Rounded Images</h3>
        <div className="flex space-x-4">
          <Image src={sampleImages.square} alt="Rounded small" width={100} height={100} className="rounded-lg" />
          <Image src={sampleImages.square} alt="Rounded full" width={100} height={100} className="rounded-full" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">With Shadow and Border</h3>
        <Image src={sampleImages.landscape} alt="Styled image" width={300} height={200} className="rounded-xl shadow-lg border-4 border-white" wrapperClassName="inline-block shadow-xl" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Grayscale Hover Effect</h3>
        <Image src={sampleImages.nature} alt="Hover effect" width={300} height={200} className="grayscale hover:grayscale-0 transition-all duration-300 rounded-lg" />
      </div>
    </div>
}`,...(Ie=(we=V.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};const Ae=["Default","WithPreview","LazyLoading","WithPlaceholder","ErrorHandling","DifferentSizes","ObjectFitModes","ObjectPosition","InteractiveGallery","ControlledLoading","CustomStyling"];export{W as ControlledLoading,V as CustomStyling,C as Default,F as DifferentSizes,q as ErrorHandling,R as InteractiveGallery,z as LazyLoading,P as ObjectFitModes,E as ObjectPosition,M as WithPlaceholder,S as WithPreview,Ae as __namedExportsOrder,_e as default};
