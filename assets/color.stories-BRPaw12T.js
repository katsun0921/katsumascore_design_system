import{j as e}from"./jsx-runtime-CuLFjRcc.js";import"./iframe-68OXGTmA.js";import"./preload-helper-D9Z9MdNV.js";const l=({className:s})=>e.jsxs("div",{style:{width:"120px",marginLeft:"10px"},children:[e.jsx("div",{className:s,style:{width:"90px",height:"90px",margin:"0 auto",boxSizing:"border-box",border:"1px solid #ccc",borderRadius:"0.25rem"}}),e.jsx("p",{children:s})]}),o=({colorList:s})=>e.jsxs("div",{children:[e.jsx("h2",{children:"color"}),s.map((r,t)=>e.jsxs("div",{children:[e.jsx("h2",{children:r.label}),e.jsx("div",{style:{display:"flex"},children:r.value.map((n,i)=>e.jsx(l,{className:n.className},i))})]},t))]});l.__docgenInfo={description:"Color component",methods:[],displayName:"Color",props:{className:{required:!0,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"Colors list",methods:[],displayName:"Colors",props:{colorList:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: {
    className: string;
  }[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  className: string;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!0}}]}}],raw:`{
  className: string;
}[]`,required:!0}}]}}],raw:`{
  label: string;
  value: {
    className: string;
  }[];
}[]`},description:""}}};const g={title:"Styles/Color",component:o,argTypes:{backgroundColor:{control:"color"}}},c=[{label:"Basic",value:[{className:"u-bg-white"},{className:"u-bg-black"}]},{label:"Slate",value:[{className:"u-bg-slate-50"},{className:"u-bg-slate-900"}]},{label:"Gray",value:[{className:"u-bg-gray-100"},{className:"u-bg-gray-300"},{className:"u-bg-gray-500"},{className:"u-bg-gray-700"}]},{label:"Blue",value:[{className:"u-bg-blue-600"},{className:"u-bg-blue-800"}]},{label:"Stone",value:[{className:"u-bg-stone-200"}]},{label:"Yellow",value:[{className:"u-bg-yellow-50"},{className:"u-bg-yellow-200"}]}],a={args:{colorList:c}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    colorList
  }
}`,...a.parameters?.docs?.source}}};const p=["ColorsList"];export{a as ColorsList,p as __namedExportsOrder,g as default};
