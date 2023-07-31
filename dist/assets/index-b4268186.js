import{n as d,v as h,x,r as s,a as p,b as e,j as r,c,H as t}from"./index-e163314c.js";import{P as O}from"./index-6558a9b5.js";const f=d.div`
  display: flex;
  justify-content: ${({justifyContent:i})=>i};
  width: 38px;
  padding: 2px;
  background-color: ${({backgroundColor:i})=>i};
  transition: all 0.3s;

  ${h}
`,k=d.div`
  width: 16px;
  height: 16px;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 30%);

  ${h}
`;function C({checked:i,onChange:l,defaultValue:m}){const[a,o]=x({value:i,onChange:l,defaultValue:m}),u=s.useCallback(()=>{o(!a)},[o,a]),g=s.useMemo(()=>a?"flex-end":"flex-start",[a]),b=s.useMemo(()=>a?p.navy_900:"#e1e1e1",[a]);return e(f,{justifyContent:g,backgroundColor:b,onClick:u,children:e(k,{})})}function y(){const[i,l]=s.useState(!1);return r(O,{bgColor:p.navy_30,children:[e("h1",{children:"FAQPage"}),e(C,{checked:i,onChange:()=>l(!i)}),r("div",{css:c`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: max-content;
          margin-top: 80px;
        `,children:[e(t,{placement:"top-start",initialOpen:!0,message:"툴팁",theme:"dark",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e(t,{placement:"top",initialOpen:!0,message:"툴팁",theme:"dark",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e(t,{placement:"top-end",initialOpen:!0,message:"툴팁",theme:"dark",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e(t,{placement:"left",initialOpen:!0,message:"툴팁",theme:"dark",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e("div",{}),e(t,{placement:"right",initialOpen:!0,message:"툴팁",theme:"dark",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e(t,{placement:"bottom-start",initialOpen:!0,message:"툴팁",theme:"dark",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e(t,{placement:"bottom",initialOpen:!0,message:"툴팁",theme:"dark",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e(t,{placement:"bottom-end",initialOpen:!0,message:"툴팁",theme:"dark",children:e("button",{css:n,children:"호버 시 툴팁 노출"})})]}),r("div",{css:c`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: max-content;
          margin-top: 80px;
        `,children:[e(t,{placement:"top-start",initialOpen:!0,message:"툴팁",theme:"light",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e(t,{placement:"top",initialOpen:!0,message:"툴팁",theme:"light",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e(t,{placement:"top-end",initialOpen:!0,message:"툴팁",theme:"light",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e(t,{placement:"left",initialOpen:!0,message:"툴팁",theme:"light",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e("div",{}),e(t,{placement:"right",initialOpen:!0,message:"툴팁",theme:"light",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e(t,{placement:"bottom-start",initialOpen:!0,message:"툴팁",theme:"light",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e(t,{placement:"bottom",initialOpen:!0,message:"툴팁",theme:"light",children:e("button",{css:n,children:"호버 시 툴팁 노출"})}),e(t,{placement:"bottom-end",initialOpen:!0,message:"툴팁",theme:"light",children:e("button",{css:n,children:"호버 시 툴팁 노출"})})]})]})}const n=c`
  padding: 10px;
  background-color: aqua;
  border-radius: 8px;
`;export{y as default};
