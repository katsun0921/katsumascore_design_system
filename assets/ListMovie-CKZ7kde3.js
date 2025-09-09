import{j as e}from"./jsx-runtime-B6AsTFoj.js";import{r as s}from"./iframe-D89UwS5i.js";/* empty css              */const a=({children:t})=>e.jsx("dl",{children:t}),d=({label:t,text:r,link:n})=>e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"u-font-bold u-text-lg",children:t}),e.jsx("dd",{className:"u-pl-4",children:n?e.jsx("a",{href:n,children:r}):r})]}),l=({label:t,lists:r})=>e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"u-font-bold u-text-lg",children:t}),e.jsx("dd",{className:"u-pl-4",children:e.jsx("ul",{className:"c-listMovie__multiple",children:r.map((n,i)=>e.jsx("li",{children:e.jsx("a",{href:n.link,children:n.text})},i))})})]}),o=({characters:t})=>e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"u-font-bold u-text-lg",children:"登場人物"}),e.jsx("dd",{className:"u-pl-4",children:e.jsx("dl",{children:t.map((r,n)=>e.jsxs(s.Fragment,{children:[e.jsx("dt",{className:"u-font-bold",children:r.name}),e.jsxs("dd",{className:"u-pl-4",children:[e.jsxs("p",{children:["演:",e.jsx("a",{href:"#",children:r.actor})]}),e.jsx("p",{children:r.description})]})]},n))})})]});a.__docgenInfo={description:"",methods:[],displayName:"ListsMovie",props:{label:{required:!0,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},lists:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  text: string;
  link: string;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"link",value:{name:"string",required:!0}}]}}],raw:`{
  text: string;
  link: string;
}[]`},description:""},characters:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  actor: string;
  description: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"actor",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}}],raw:"TCharacter[]"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"ListMovieSingleInfo",props:{label:{required:!0,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"ListMovieMultipleInfo",props:{label:{required:!0,tsType:{name:"string"},description:""},lists:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  text: string;
  link: string;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"link",value:{name:"string",required:!0}}]}}],raw:`{
  text: string;
  link: string;
}[]`},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"ListMovieCharacterInfo",props:{characters:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  actor: string;
  description: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"actor",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}}],raw:"TCharacter[]"},description:""}}};export{o as L,l as a,d as b,a as c};
