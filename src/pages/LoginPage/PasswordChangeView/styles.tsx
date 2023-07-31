import { colors } from '@styles/colors.ts';
import CustomTextInput from '@components/CustomTextInput';
import styled from '@emotion/styled';

export const PasswordChangeWrapper = styled.div`
  width: 620px;
  padding: 90px 80px;
  margin: auto;
  background-color: ${colors.white_100};
  border-radius: 30px;
  box-shadow: 3px 3px 15px 0 rgb(48 54 68 / 5%);
`;
export const TitleWrapper = styled.div`
  margin-bottom: 34px;
`;

export const PasswordChangeTitle = styled.h4`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  color: #000;
  letter-spacing: -1.4px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const CustomTextInputWithMargin = styled(CustomTextInput)`
  margin-bottom: 15px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 47px;
  line-height: 50px;
  text-align: center;

  .button-resize {
    width: 100%;
    cursor: pointer;
  }
`;

export const Caption = styled.p`
  margin-top: 22px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: #444;
  text-align: center;
  letter-spacing: -0.75px;
  cursor: pointer;
`;
