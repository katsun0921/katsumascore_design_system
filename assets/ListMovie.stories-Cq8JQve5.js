import{j as r}from"./jsx-runtime-B6AsTFoj.js";import{L as a,a as c,b as l,c as n}from"./ListMovie-CKZ7kde3.js";import"./iframe-D89UwS5i.js";/* empty css              */const f={title:"Components/List",component:n,subcomponents:{ListMovieSingleInfo:l,ListMovieMultipleInfo:c,ListMovieCharacterInfo:a},parameters:{layout:"fullscreen"}},p=e=>r.jsx(n,{...e,children:r.jsx(l,{...e})}),m=e=>r.jsx(n,{...e,children:r.jsx(c,{...e})}),M=e=>r.jsx(n,{...e,children:r.jsx(a,{...e})}),s=p.bind({});s.args={label:"Title",text:"Movie Information"};const o=p.bind({});o.args={label:"Title",text:"Movie Information",link:"#"};const i=m.bind({});i.args={label:"Directors",lists:[{text:"Director 1",link:"#"},{text:"Director 2",link:"#"}]};const v=[{name:"オーガスティン・ロフトハウス",actor:"ジョージ・クルーニー",description:"末期癌を患い、輸血と投薬なしでは生きることのできない孤独の科学者。 家族と別れ、天文台に残って仕事を続けることを決意する。"},{name:'アイリス・"サリー"・サリヴァン',actor:"フェリシティ・ジョーンズ",description:"地球に帰還しようとする宇宙船の乗組員で、同じ乗組員のアドウォールとの間の子をお腹に宿している。 地球との交信が途絶えてしまい不安ながら、地球が人類滅亡の危機に直面していることを知らぬまま帰還を試みる。"},{name:"アイリス / 若い頃のサリー",actor:"カイリン・スプリンガル",description:"北極圏のハーバー天文台に取り残された謎の少女。"}],t=M.bind({});t.args={characters:v};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  return <ListsMovie {...args}>
      <ListMovieSingleInfo {...args} />
    </ListsMovie>;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <ListsMovie {...args}>
      <ListMovieSingleInfo {...args} />
    </ListsMovie>;
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  return <ListsMovie {...args}>
      <ListMovieMultipleInfo {...args} />
    </ListsMovie>;
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <ListsMovie {...args}>
      <ListMovieCharacterInfo {...args} />
    </ListsMovie>;
}`,...t.parameters?.docs?.source}}};const I=["MovieSingleInfo","MovieLinkSingleInfo","MovieLinkMultipleInfo","MovieCharacterInfo"];export{t as MovieCharacterInfo,i as MovieLinkMultipleInfo,o as MovieLinkSingleInfo,s as MovieSingleInfo,I as __namedExportsOrder,f as default};
