import { modalFont } from '@styles/mixin.ts';
import { colors } from '@styles/colors.ts';
import styled from '@emotion/styled';

interface ModalFrameProps {
  width: string;
  height: string;
}

export const ModalFrame = styled.div<ModalFrameProps>`
  position: relative;
  top: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 0 auto;

  background-color: ${colors.white_100};
  border-radius: 25px;

  box-shadow: 0 0 15px 0 rgb(48 54 68 / 20%);
  transform: translateY(-50%);
`;

export const ModalContainer = styled.div<{ margin: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  margin: ${({ margin }) => margin};
  overflow: auto;
`;

export const ModalTitle = styled.div`
  margin-bottom: 33px;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  color: #000;
  text-align: center;
  letter-spacing: -1.1px;
`;

export const ModalLabel = styled.div`
  margin-bottom: 21px;
  ${modalFont}
`;

export const ModalContents = styled.div<{ height: string }>`
  display: flex;
  align-items: center;
  height: ${({ height }) => height};
  margin-bottom: 32px;

  ${modalFont}
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .btn-lg {
    width: 320px;
    height: 60px;
  }

  .btn-md {
    width: 240px;
    height: 44px;
  }

  .btn-lg-confirm {
    width: 156px;
    height: 60px;
  }

  .btn-lg-confirm:first-of-type {
    margin-right: 8px;
  }

  .btn-md-confirm {
    width: 116px;
    height: 44px;
  }

  .btn-md-confirm:first-of-type {
    margin-right: 8px;
  }
`;
