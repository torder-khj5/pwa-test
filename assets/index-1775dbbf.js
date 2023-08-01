import{n,a as t,c as a,I as $,r as k,j as x,b as r,F as v}from"./index-ae9a6327.js";const C=n.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: ${({fontSize:e})=>(e??"16")+"px"};
  font-weight: ${({fontWeight:e})=>e??500};
  color: ${({fontColor:e})=>e??t.black_100};
  letter-spacing: -0.8px;
  background: ${({backGroundColor:e})=>e??t.navy_0};
  border: ${({borderColor:e})=>`1px solid ${e??t.line}`};
  border-radius: 10px;
  outline: none;
  caret-color: ${({fontColor:e})=>e??"#777"};

  :focus {
    color: ${t.black_100};
    border: 1px solid ${t.navy_900};
  }

  ::placeholder {
    color: #777;
  }

  :disabled {
    font-weight: 500;
    color: #babcc2;
    background-color: #f5f6f8;
    border: 1px solid ${t.navy_50};
  }

  ${({isError:e})=>e&&a`
      border: 1px solid ${t.error};
    `}
`,z=C,I=n.div`
  position: relative;
  width: 100%;
  height: 56px;
  margin-bottom: 15px;
`,H=n.label`
  margin-bottom: 15px;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  color: ${t.black_100};
  letter-spacing: -0.75px;
`,S=n.div`
  position: absolute;
  top: 50%;
  right: 18px;
  display: flex;
  align-items: center;
  transform: translate(0, -50%);
`,b=n($)`
  margin-left: 14px;
  cursor: pointer;

  object-fit: fit;
`;n.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: ${t.red_500};
  text-align: right;
  letter-spacing: -0.8px;
`;const F=n.span`
  margin-bottom: 21px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  color: ${t.error};
  letter-spacing: -0.75px;
`;function M({inputType:e,inputValue:i,inputChangeEvent:o,placeholder:s,isShowHideIcon:l,isShowDeleteIcon:c,innerComponent:d,disabled:h,textLabel:g,isError:u,errorMessage:m,..._}){const[p,f]=k.useState(e!=="password"),w=()=>{f(!p)},y=()=>{o({target:{value:""}})};return x(v,{children:[g&&r(H,{htmlFor:"custom-input",children:g}),x(I,{children:[r(z,{type:p?"text":"password",placeholder:s,value:i,onChange:o,disabled:h,isError:u,..._}),x(S,{children:[c&&r(b,{onClick:y,name:"삭제_회색",size:24,"data-testid":"delete-icon"}),l&&r(b,{onClick:w,name:p?"보이기_회색":"가리기_회색",size:26,"data-testid":"show-icon"}),d]})]}),u&&r(F,{children:m})]})}const j={buttons:{size:{lg:{width:"90px",height:"60px",fontSize:"20px",lineHeight:"20px"},md:{width:"79px",height:"44px",fontSize:"16px",lineHeight:"16px"},sm:{width:"76px",height:"39px",fontSize:"15px",lineHeight:"15px"},xs:{width:"73px",height:"34px",fontSize:"14px",lineHeight:"14px"}}},modal:{font:{lg:{lineHeight:"27px"},md:{lineHeight:"24px"}},size:{lg:{width:"400px",height:"318px",margin:"40px"},md:{width:"300px",height:"180px",margin:"30px"}},contents:{lg:{height:"54px"},md:{height:"48px"}},button:{lg:{width:"320px",height:"60px"},md:{width:"240px",height:"44px"}}}},T=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: ${({priority:e})=>e==="primary"?t.red_500:t.navy_900};
  text-align: center;
  letter-spacing: -1px;
  border-radius: 10px;

  ${({btnSize:e})=>e&&j.buttons.size[e]}

  ${({btnType:e,priority:i})=>e&&B(e,i)}
`,B=(e,i)=>{const o=i==="primary";switch(e){case"default":return a({backgroundColor:o?t.red_500:t.navy_900,color:t.white_100,":active":{background:o?t.red_500:t.black_100},":disabled":{background:o?t.red_100:t.navy_30,color:o?t.white_100:t.black_10}});case"line":return a({border:`1px solid ${o?t.red_500:t.navy_30}`,background:t.white_100,":active":{border:`1px solid ${o?t.red_500:t.navy_900}`,background:o?t.red_50:t.navy_30},":disabled":{border:`1px solid ${o?t.red_100:t.navy_50}`,background:o?t.red_50:"#F5F6F8",color:o?t.red_200:"#C2C5CC"}});case"bg":return a({background:o?t.red_50:t.navy_30,":active":{background:o?t.red_100:t.navy_50}})}},P=({label:e,onButtonClick:i,isDisabled:o,className:s,priority:l="primary",btnSize:c="md",btnType:d="default"})=>r(T,{type:"button",onClick:()=>{i()},disabled:o,priority:l,btnSize:c,btnType:d,className:s,children:e});export{M as C,P as a,j as t};
