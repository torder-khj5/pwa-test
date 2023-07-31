import { colors } from '@styles/colors.ts';
import Icon from '@components/@shared/Icon';
import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 15px;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  color: ${colors.black_100};
  letter-spacing: -0.75px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 18px;
  display: flex;
  align-items: center;
  transform: translate(0, -50%);
`;

export const IconAdditionalMargin = styled(Icon)`
  margin-left: 14px;
  cursor: pointer;

  object-fit: fit;
`;

export const TimerSpan = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: ${colors.red_500};
  text-align: right;
  letter-spacing: -0.8px;
`;

export const ErrorSpan = styled.span`
  margin-bottom: 21px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  color: ${colors.error};
  letter-spacing: -0.75px;
`;
