import{j as s}from"./jsx-runtime-B6AsTFoj.js";import{W as g,a as d,b as n,c as o}from"./Widget-D2IuoEcZ.js";import"./iframe-D89UwS5i.js";/* empty css              */const T={title:"Components/Widget",component:o,subcomponents:{WidgetCategories:n,WidgetHeading:d,WidgetText:g},parameters:{layout:"fullscreen"},argTypes:{}},c=e=>s.jsx(o,{...e,children:s.jsx(n,{})}),m=e=>s.jsx(o,{...e,children:s.jsx(d,{props:e})}),p=e=>s.jsx(o,{...e,children:s.jsx(g,{props:e})}),r=c.bind({});r.args={};const t=m.bind({});t.args={headingLevel:"2",label:"heading"};const a=p.bind({});a.args={isLink:!1,label:"お問い合わせはこちら"};const i=p.bind({});i.args={isLink:!0,label:"お問い合わせはこちら"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Widgets {...args}>
    <WidgetCategories />
  </Widgets>`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Widgets {...args}>
    <WidgetHeading props={args} />
  </Widgets>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Widgets {...args}>
    <WidgetText props={args} />
  </Widgets>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <Widgets {...args}>
    <WidgetText props={args} />
  </Widgets>`,...i.parameters?.docs?.source}}};const b=["PartWidgetCategories","PartWidgetHeading","PartWidgetText","PartWidgetLinkText"];export{r as PartWidgetCategories,t as PartWidgetHeading,i as PartWidgetLinkText,a as PartWidgetText,b as __namedExportsOrder,T as default};
