import { colors } from '@styles/colors';
import styled from '@emotion/styled';

export const NotificationModalContainer = styled.div`
  position: absolute;
  right: 50%;
  bottom: -762px;
  z-index: 10;
  width: 400px;
  height: 760px;
  cursor: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  box-shadow: 0 0 15px 0 rgb(48 54 68 / 20%);
  transform: translate(13%, 0);
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ModalPolygonShape = styled.div`
  position: absolute;
  top: -11px;
  right: 43px;
  width: 19px;
  height: 15px;
  clip-path: polygon(50% -10%, 100% 70%, 100% 80%, 50% 80%, 0% 80%, 0% 70%);
  background-color: #fff;
`;

export const ModalTitle = styled.h6`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  color: ${colors.black};
  letter-spacing: -0.4px;
  border-bottom: 1px solid ${colors.line};
`;

export const ModalTitleButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  color: ${colors.black_900};
  text-align: center;
  letter-spacing: -0.42px;
  background: ${colors.white};
  border: 1px solid ${colors.black_900};
  border-radius: 8px;
`;

export const ModalContents = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 630px;
  padding: 15px;
  overflow-y: auto;
  background-color: ${colors.background};
`;

export const MessageList = styled.li`
  width: 370px;
  padding: 20px;
  margin-bottom: 12px;
  cursor: pointer;
  background: ${colors.white};
  border-radius: 8px;
  box-shadow: 3px 3px 10px 0 rgb(48 54 68 / 15%);
`;

export const MessageHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const MessageNewBadge = styled.span`
  width: 16px;
  height: 16px;
  background-color: #fd0202;
`;

export const MessageTitle = styled.h6<{ isRead: boolean }>`
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  color: ${colors.black};
  letter-spacing: -0.32px;
  opacity: ${({ isRead }) => isRead && 0.5};
`;

export const MessageDate = styled.span<{ isRead: boolean }>`
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  color: ${colors.black_500};
  letter-spacing: -0.28px;
  opacity: ${({ isRead }) => isRead && 0.5};
`;

export const MessageContents = styled.p<{ isRead: boolean }>`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.black};
  letter-spacing: -0.32px;
  opacity: ${({ isRead }) => isRead && 0.5};
`;

export const ModalButton = styled.button`
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: ${colors.white};
  text-align: center;
  letter-spacing: -0.4px;
  background: ${colors.black_900};
  border-radius: 0 0 16px 16px;
`;

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: unset;
  text-decoration: none;
`;
