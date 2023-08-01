import{n as e,c as a,a as r,I as h,r as p,j as s,b as o}from"./index-ae9a6327.js";const g=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,f=e.div`
  margin: 100px 0 50px;
  font-size: 20px;
  font-weight: bold;
`,m=e.div`
  width: 620px;
  height: max-content;
`,b=e.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;

  width: 100%;
  height: 160px;
  margin-bottom: 20px;

  background: #fff;
  border: ${({active:i})=>i?a`
          border-radius: 20px;
          border: 2px solid ${r.red_500};
          background: #fff;
          box-shadow: 3px 3px 20px 0 rgb(255 67 67 / 20%);
        `:"1px solid lightgray"};
  border-radius: 20px;
  box-shadow: 3px 3px 15px 0 rgb(48 54 68 / 5%);

  :hover {
    border: 2px solid ${({active:i})=>i?"#ff4545":"#303644"};
    box-shadow: 3px 3px 3px 20px 0 rgb(71 89 132 / 40%);
  }

  :active {
    border: 2px solid ${r.red_500};
    border-radius: 20px;
    box-shadow: 3px 3px 20px 0 rgb(255 67 67 / 20%);
  }
`,y=e.img`
  flex-shrink: 0;
  width: 90px;
  height: 90px;
  margin: 35px 0 35px 45px;
  background: ${r.navy_30};
  border: 1px solid ${r.navy_50};

  border-radius: 15px;
`,u=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 62px;
  margin-left: 30px;
`,v=e.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 28px */
  color: #000;
  letter-spacing: -1.4px;
`,w=e.div`
  margin-top: 10px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  color: #000;
  letter-spacing: -1px;
`,T=e(h)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 32px;
  height: 32px;
`,I=[{label:"개인회원",desc:"만 14세 이상 개인 회원가입",src:"img-src",href:"individual"},{label:"사업자회원",desc:"개인/법인 사업자 또는 사업자 직원 회원가입",src:"img-src",href:"business"},{label:"임직원·협력업체 회원",desc:"임직원 또는 협력업체 회원가입",src:"img-src",href:"employees"}];function _(){const[i,c]=p.useState(""),x=p.useCallback((t,n)=>{console.log(`history.push(${t})`),c(n)},[]);return s(g,{children:[o(f,{children:"가입할 회원 유형을 선택해 주세요."}),o(m,{children:I.map(({label:t,desc:n,src:d,href:l})=>s(b,{onClick:()=>x(l,t),active:i===t,children:[o(y,{src:d}),s(u,{children:[o(v,{children:t}),o(w,{children:n})]}),i===t&&o(T,{name:"체크_흰색_바탕_빨간색"})]},"type-"+t))})]})}export{_ as default};
