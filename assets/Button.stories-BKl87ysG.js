import{j as c}from"./jsx-runtime-B6AsTFoj.js";/* empty css                */import"./iframe-D89UwS5i.js";const o=({primary:s=!1,size:n="medium",backgroundColor:l,label:i,...u})=>{const m=s?"storybook-button--primary":"storybook-button--secondary";return c.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${n}`,m].join(" "),style:{backgroundColor:l},...u,children:i})};o.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const b={title:"Components/Button",component:o,argTypes:{backgroundColor:{control:"color"}}},e={args:{primary:!0,label:"Button"}},r={args:{label:"Button"}},a={args:{size:"large",label:"Button"}},t={args:{size:"small",label:"Button"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...t.parameters?.docs?.source}}};const y=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,t as Small,y as __namedExportsOrder,b as default};
