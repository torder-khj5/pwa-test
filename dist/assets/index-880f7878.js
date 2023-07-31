import{n,a as i,r as u,u as $,b as e,j as d,F as _,d as C,I as g}from"./index-e163314c.js";import{C as p,a as z}from"./index-eda1ff70.js";const W=n.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${i.navy_30};
`;n.div`
  width: 620px;
  padding: 100px 80px;
  margin: auto;
  background-color: ${i.white_100};
  border-radius: 30px;
  box-shadow: 3px 3px 15px 0 rgb(48 54 68 / 5%);
`;n.div`
  margin-bottom: 34px;
`;n(p)`
  margin-bottom: 15px;
`;n.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;n.div`
  width: 100%;
  height: 60px;
  margin-top: 36px;
  line-height: 50px;
  text-align: center;

  .button-resize {
    width: 100%;
    cursor: pointer;
  }
`;n.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 93px;
  margin-top: 32px;
`;n.span`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.75px;
  cursor: pointer;
`;n.span`
  color: ${i.line};
`;n.div`
  margin-top: 76px;
`;n.div`
  position: relative;
  text-align: center;
`;n.span`
  position: relative;
  z-index: 2;
  display: inline-block;
  width: 232px;
  padding: 2px;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  color: #777;
  letter-spacing: -0.8px;
  background-color: ${i.white_100};
`;n.hr`
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 100%;
  transform: translate(0, -50%);
`;n.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 35px;
`;const x=(o,r)=>{const[a,l]=u.useState(o);return{value:a,onChange:s=>{const{target:{value:t}}=s;let h=!0;typeof r=="function"&&(h=r(t)),h&&l(t)}}},E=n.div`
  width: 620px;
  padding: 90px 80px;
  margin: auto;
  background-color: ${i.white_100};
  border-radius: 30px;
  box-shadow: 3px 3px 15px 0 rgb(48 54 68 / 5%);
`,H=n.div`
  margin-bottom: 34px;
`,O=n.h4`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  color: #000;
  letter-spacing: -1.4px;
`,T=n.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;n(p)`
  margin-bottom: 15px;
`;const V=n.div`
  width: 100%;
  height: 60px;
  margin-top: 47px;
  line-height: 50px;
  text-align: center;

  .button-resize {
    width: 100%;
    cursor: pointer;
  }
`,G=n.p`
  margin-top: 22px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: #444;
  text-align: center;
  letter-spacing: -0.75px;
  cursor: pointer;
`;function j(){const{value:o,onChange:r}=x(""),{value:a,onChange:l}=x(""),{value:c,onChange:s}=x(""),[t,h]=u.useState("에러메세지 노출."),{signIn:m}=C(),v=$(),k=()=>{m(),v("/notice")};return e(_,{children:d(E,{children:[e(H,{children:e(O,{children:"비밀번호 변경"})}),d(T,{children:[e(p,{inputType:"password",inputValue:o,inputChangeEvent:r,isShowHideIcon:!0,placeholder:"현재 비밀번호",isError:(t==null?void 0:t.length)>0,errorMessage:t}),e(p,{inputType:"password",inputValue:a,inputChangeEvent:l,placeholder:"새 비밀번호(영문 소문자/숫자/특수문자 조합 8~16자)",isShowHideIcon:!0,isError:(t==null?void 0:t.length)>0,errorMessage:t}),e(p,{inputType:"password",inputValue:c,inputChangeEvent:s,placeholder:"새 비밀번호 확인",isShowHideIcon:!0,isError:(t==null?void 0:t.length)>0,errorMessage:t})]}),e(V,{children:e(z,{label:"비밀번호 변경",onButtonClick:k,priority:"secondary",btnType:"default",btnSize:"lg",className:"button-resize"})}),e(G,{children:"다음에 변경 (3개월 뒤 알림)"})]})})}const b="",w="",A=`${b}/auth/oauth2/authorize/kakao?redirect_uri=${w}?code=21`,B=`${b}/auth/oauth2/authorize/naver?redirect_uri=${w}?code=21`,M=`${b}/auth/oauth2/authorize/google?redirect_uri=${w}?code=21`,U=`${b}/auth/oauth2/authorize/apple?redirect_uri=${w}?code=21`,F=n.input`
  box-sizing: border-box;
  display: inline-block;
  flex-shrink: 0;
  width: ${({size:o})=>(o??22)+"px"};
  height: ${({size:o})=>(o??22)+"px"};
  margin: 0;
  vertical-align: middle;
  cursor: pointer;
  background-color: ${i.white_100};
  background-repeat: no-repeat;
  background-position: center;
  background-clip: content-box;
  border: 1px solid ${i.line};
  border-radius: ${({type:o})=>o==="checkbox"?"5px":"50%"};
  appearance: none;

  :checked {
    background-color: ${i.navy_900};
    background-image: url('src/assets/react.svg');
    border: 1px solid ${i.navy_900};
  }

  :not(:checked, :disabled):hover {
    background-color: #fff;
    background-image: url('src/assets/react.svg');
    border: 1px solid ${i.navy_900};
  }

  :disabled {
    cursor: unset;
    background-color: #f5f6f8;
    background-image: url('src/assets/react.svg');
    border: 1px solid ${i.navy_50};
  }

  & + label {
    color: #777;
  }

  &:hover + label {
    color: ${i.black_100};
  }

  &:disabled + label {
    color: ${i.navy_100};
  }

  &:checked + label {
    color: ${i.black_100};
  }
`,S=u.forwardRef(({id:o,checked:r,handler:a,size:l,disabled:c,type:s="radio"},t)=>e(_,{children:e(F,{id:o,onClick:a,checked:r,type:s,size:l,disabled:c,ref:t,className:s,readOnly:!0})}));S.displayName="Radio";const q=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,D=n.label`
  margin-left: 10px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.75px;
  cursor: unset;
`,L=u.forwardRef(({label:o,checked:r,id:a,handler:l,type:c,...s},t)=>d(q,{children:[e(S,{id:a,type:c,ref:t,checked:r,handler:l,...s}),e(D,{htmlFor:a,children:o})]}));L.displayName="RadioWithLabel";const K=n.div`
  width: 620px;
  padding: 100px 80px;
  margin: auto;
  background-color: ${i.white_100};
  border-radius: 30px;
  box-shadow: 3px 3px 15px 0 rgb(48 54 68 / 5%);
`,J=n.div`
  margin-bottom: 34px;
`;n(p)`
  margin-bottom: 15px;
`;const Q=n.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,X=n.div`
  width: 100%;
  height: 60px;
  margin-top: 36px;
  line-height: 50px;
  text-align: center;

  .button-resize {
    width: 100%;
    cursor: pointer;
  }
`,Y=n.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 93px;
  margin-top: 32px;
`,I=n.span`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.75px;
  cursor: pointer;
`,y=n.span`
  color: ${i.line};
`,Z=n.div`
  margin-top: 76px;
`,ee=n.div`
  position: relative;
  text-align: center;
`,ne=n.span`
  position: relative;
  z-index: 2;
  display: inline-block;
  width: 232px;
  padding: 2px;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  color: #777;
  letter-spacing: -0.8px;
  background-color: ${i.white_100};
`,te=n.hr`
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 100%;
  transform: translate(0, -50%);
`,oe=n.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 35px;
`,f=n.a`
  text-decoration: none;
`;function ie(){const{value:o,onChange:r}=x(""),{value:a,onChange:l}=x(""),[c,s]=u.useState(!1),[t,h]=u.useState(""),{signIn:m}=C(),v=$(),k=()=>{N(a),m(),v("/notice")},R=()=>{s(!c)};function N(P){/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:<>?~-])[a-z0-9!@#$%^&*()_+{}|:<>?~-]{8,16}$/.test(P)||h("에러메세지 노출.")}return e(_,{children:d(K,{children:[e(J,{children:e(g,{name:"로고_허브티_검정색",size:107})}),d(Q,{children:[e(p,{errorMessage:"에러 메세지 노출.",inputValue:o,inputChangeEvent:r,isShowDeleteIcon:o.length>0,placeholder:"아이디(영문 소문자/숫자 조합 5~2자, 휴대폰 번호, 이메일)"}),e(p,{inputType:"password",inputValue:a,inputChangeEvent:l,placeholder:"비밀번호(영문 소문자/숫자/특수문자 조합 8~16자)",isShowHideIcon:!0,isError:(t==null?void 0:t.length)>0,errorMessage:t}),e(L,{id:"1",type:"checkbox",label:"아이디 저장",checked:c,handler:R})]}),e(X,{children:e(z,{label:"로그인",onButtonClick:k,btnSize:"lg",className:"button-resize"})}),d(Y,{children:[e(I,{children:"아이디 찾기"}),e(y,{children:"|"}),e(I,{children:"비밀번호 찾기"}),e(y,{children:"|"}),e(I,{children:"회원가입"})]}),d(Z,{children:[d(ee,{children:[e(ne,{children:"SNS 계정으로 로그인할 수 있어요"}),e(te,{})]}),d(oe,{children:[e(f,{href:A,children:e(g,{name:"로고_카카오톡",size:48})}),e(f,{href:B,children:e(g,{name:"로고_네이버",size:48})}),e(f,{href:M,children:e(g,{name:"로고_구글",size:48})}),e(f,{href:U,children:e(g,{name:"로고_애플",size:48})})]})]})]})})}function le(){const[o,r]=u.useState(!1);return u.useState(""),e(W,{children:o?e(j,{}):e(ie,{})})}export{le as default};
