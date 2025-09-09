import{j as s}from"./jsx-runtime-B6AsTFoj.js";/* empty css              */import"./iframe-D89UwS5i.js";const a=({tags:r})=>s.jsx("div",{className:"c-tags",children:r.map((t,n)=>{const{label:o}=t;return s.jsx("a",{href:"#",children:o},n)})});a.__docgenInfo={description:"",methods:[],displayName:"Tags",props:{tags:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
}[]`},description:""}}};const m={title:"Components/Tag",component:a,argTypes:{}},p=r=>s.jsx(a,{...r}),e={render:p,args:{tags:[{label:"Wordpress Tag"},{label:"Wordpress Tag2"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    tags: [{
      label: 'Wordpress Tag'
    }, {
      label: 'Wordpress Tag2'
    }]
  }
}`,...e.parameters?.docs?.source}}};const d=["PrimaryTags"];export{e as PrimaryTags,d as __namedExportsOrder,m as default};
