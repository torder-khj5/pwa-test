import{n as r,r as s,b as n,a as p}from"./index-58dacfb9.js";const i=r.div`
  display: flex;
  justify-content: center;
  padding: 40px 16px;
`,c=r.div`
  width: ${({width:e})=>e+"px"};

  /* min-width: ${({minWidth:e})=>e+"px"}; */
`;function x({children:e,width:a=1024,minWidth:o=640,bgColor:t=p.navy_30}){return s.useEffect(()=>{document.documentElement.style.setProperty("--page-bg-color",t)},[t]),n(i,{children:n(c,{width:a,minWidth:o,children:e})})}export{x as P};
