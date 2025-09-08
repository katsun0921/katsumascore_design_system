import{j as s}from"./jsx-runtime-CuLFjRcc.js";/* empty css              */import"./iframe-68OXGTmA.js";import"./preload-helper-D9Z9MdNV.js";const a=({tags:r})=>s.jsx("div",{className:"c-tags",children:r.map((t,n)=>{const{label:o}=t;return s.jsx("a",{href:"#",children:o},n)})});a.__docgenInfo={description:"",methods:[],displayName:"Tags",props:{tags:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
}[]`},description:""}}};const d={title:"Component/Tag",component:a,argTypes:{}},p=r=>s.jsx(a,{...r}),e={render:p,args:{tags:[{label:"Wordpress Tag"},{label:"Wordpress Tag2"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    tags: [{
      label: 'Wordpress Tag'
    }, {
      label: 'Wordpress Tag2'
    }]
  }
}`,...e.parameters?.docs?.source}}};const c=["PrimaryTags"];export{e as PrimaryTags,c as __namedExportsOrder,d as default};
