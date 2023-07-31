import{n as e,r as x,j as i,b as t,I as b,a as g}from"./index-e163314c.js";import{P as h}from"./index-6558a9b5.js";const f=e.div`
  display: flex;
  flex-grow: 1;
  gap: 4px;
  align-items: center;
  padding: 4px;
  border: 1px solid black;
`,y=e.input`
  box-sizing: border-box;
  flex: 1;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #999;
  border: 0 none;
  outline: none;
  caret-color: #000;

  ::placeholder {
    color: #999;
  }
`;function m({onSearch:o,placeholder:d="검색어를 입력해주세요."}){const[n,l]=x.useState("");return i(f,{children:[t(y,{placeholder:d,value:n,onChange:a=>{const{value:u}=a.target;l(u)},onKeyDown:a=>{a.key==="Enter"&&o&&o(n)}}),t(b,{name:"검색",size:16})]})}const T=e.section`
  font-size: 24px;
`,C=e.div`
  font-size: 16px;
`,E=e.section`
  display: flex;

  gap: 320px;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid black;
`,v=e.li`
  display: grid;
  grid-template-columns: 60px 1fr 100px;
  gap: 16px;
  align-items: center;
  height: 56px;
  padding: 0 8px;
  cursor: pointer;
  border-bottom: 1px solid lightgray;

  :hover {
    background-color: ${g.navy_100};
  }
`,w=e.div`
  padding: 4px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: ${({bgColor:o})=>o};
`,N=e.div`
  font-size: 14px;
  color: #999;
  text-align: center;
`,P=e.section`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  button {
    min-width: 32px;
    max-width: 32px;
    padding: 4px;
    cursor: pointer;
    border-collapse: collapse;
    background: inherit;
    border: 1px solid gray;
    border-radius: 0;
    box-shadow: none;

    :hover {
      background-color: black;
    }

    &.first-button {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &.last-button {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`,s=[{id:"0",type:"NOTICE",title:"[공지] 허브티 점검 안내",date:"2023-07-11"},{id:"1",type:"UPDATE",title:"[업데이트] 허브티 업데이트 안내",date:"2008-08-08"},{id:"2",type:"ETC",title:"[기타] 허브티 기타 안내",date:"2023-07-11"},{id:"3",type:"NOTICE",title:"[공지] 허브티 점검 안내",date:"2023-07-11"}],p={NOTICE:{text:"공지",color:"blue"},UPDATE:{text:"업데이트",color:"pink"},ETC:{text:"기타",color:"gray"}},k=15;function z(){const o=s.length,d=x.useCallback(()=>{const n=Math.ceil(o/k);return Array.from({length:n},(r,c)=>c+1).map(r=>t("button",{children:r},r))},[o]);return i(h,{bgColor:g.navy_30,children:[t(T,{children:"공지사항"}),i(E,{children:[i(C,{children:["전체(",o,")"]}),t(m,{onSearch:n=>console.log(`Search for ${n}`)})]}),t("ul",{children:s.map(n=>{const{id:l,type:r,title:c,date:a}=n;return i(v,{children:[t(w,{bgColor:p[r].color,children:p[r].text}),t("div",{children:c}),t(N,{children:a})]},l)})}),i(P,{children:[t("button",{className:"first-button",children:"<<"}),t("button",{children:"<"}),d(),t("button",{children:">"}),t("button",{className:"last-button",children:">>"})]})]})}export{z as default};
