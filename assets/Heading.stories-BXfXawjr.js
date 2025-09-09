import{j as t}from"./jsx-runtime-B6AsTFoj.js";import{H as s}from"./Heading-BI_7igqv.js";import"./iframe-D89UwS5i.js";const i={title:"Components/Heading",component:s,parameters:{layout:"fullscreen"},argTypes:{color:{control:"color"}}},a=n=>t.jsx("div",{style:{backgroundColor:n.color},children:t.jsx(s,{...n})}),e={render:a,args:{headingLevel:"1",type:"title",color:"rgb(0, 0, 0)"}},r={render:a,args:{headingLevel:"3",type:"post",color:"rgb(255, 255, 255)",isLink:!0}},o={render:a,args:{headingLevel:"3",type:"related",color:"rgb(255, 255, 255)"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const p=["TitleHeading","PostHeading","PostRelatedHeading"];export{r as PostHeading,o as PostRelatedHeading,e as TitleHeading,p as __namedExportsOrder,i as default};
