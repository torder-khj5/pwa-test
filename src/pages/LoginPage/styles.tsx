import { colors } from '@styles/colors.ts';
import CustomTextInput from '@components/CustomTextInput';
import styled from '@emotion/styled';

export const LoginContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${colors.navy_30};
`;

export const LoginWrapper = styled.div`
  width: 620px;
  padding: 100px 80px;
  margin: auto;
  background-color: ${colors.white_100};
  border-radius: 30px;
  box-shadow: 3px 3px 15px 0 rgb(48 54 68 / 5%);
`;

export const LogoWrapper = styled.div`
  margin-bottom: 34px;
`;

export const CustomTextInputWithMargin = styled(CustomTextInput)`
  margin-bottom: 15px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 36px;
  line-height: 50px;
  text-align: center;

  .button-resize {
    width: 100%;
    cursor: pointer;
  }
`;

export const ExternalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 93px;
  margin-top: 32px;
`;

export const ExternalSpan = styled.span`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.75px;
  cursor: pointer;
`;

export const ExternalSpanDivider = styled.span`
  color: ${colors.line};
`;
export const SocialLoginWrapper = styled.div`
  margin-top: 76px;
`;

export const SocialLoginTitle = styled.div`
  position: relative;
  text-align: center;
`;

export const SocialLoginTitleSpan = styled.span`
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
  background-color: ${colors.white_100};
`;

export const HorizontalBar = styled.hr`
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 100%;
  transform: translate(0, -50%);
`;

export const SocialLoginIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 35px;
`;
