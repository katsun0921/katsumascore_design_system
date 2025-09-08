import{j as t}from"./jsx-runtime-CuLFjRcc.js";import{H as s}from"./Heading-DWzLGDAL.js";import"./iframe-68OXGTmA.js";import"./preload-helper-D9Z9MdNV.js";const p={title:"Component/Heading",component:s,parameters:{layout:"fullscreen"},argTypes:{color:{control:"color"}}},a=n=>t.jsx("div",{style:{backgroundColor:n.color},children:t.jsx(s,{...n})}),e={render:a,args:{headingLevel:"1",type:"title",color:"rgb(0, 0, 0)"}},r={render:a,args:{headingLevel:"3",type:"post",color:"rgb(255, 255, 255)",isLink:!0}},o={render:a,args:{headingLevel:"3",type:"related",color:"rgb(255, 255, 255)"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    headingLevel: '1',
    type: 'title',
    color: 'rgb(0, 0, 0)'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    headingLevel: '3',
    type: 'post',
    color: 'rgb(255, 255, 255)',
    isLink: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    headingLevel: '3',
    type: 'related',
    color: 'rgb(255, 255, 255)'
  }
}`,...o.parameters?.docs?.source}}};const g=["TitleHeading","PostHeading","PostRelatedHeading"];export{r as PostHeading,o as PostRelatedHeading,e as TitleHeading,g as __namedExportsOrder,p as default};
