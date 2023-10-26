import { colors } from '@styles/colors';
import styled from '@emotion/styled';

export const NotificationContainer = styled.section`
  width: 100%;
  padding: 0 30px;
`;

export const MessageListContainer = styled.div`
  margin-bottom: 16px;
`;
export const MessageListHeader = styled.div`
  padding: 18px 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  color: ${colors.black};
  letter-spacing: -0.28px;
  background: ${colors.background};
  border: 1px solid ${colors.line};
  border-radius: 8px 8px 0 0;
`;

export const MessageWrapper = styled.ul`
  li:last-of-type {
    border-radius: 0 0 8px 8px;
  }
`;

export const MessageList = styled.li`
  padding: 22px 20px;
  cursor: pointer;
  background: ${colors.white};
  border: 1px solid ${colors.line};
  border-top: none;
`;

export const MessageTitleWrapper = styled.div<{ isRead: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  opacity: ${({ isRead }) => isRead && 0.5};
`;

export const MessageNewBadge = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  background-color: #fd0202;
`;

export const MessageTitle = styled.h6<{ isNew: boolean }>`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  color: ${({ isNew }) => (isNew ? colors.key_500 : colors.black)};
  letter-spacing: -0.32px;
`;

export const MessageListDate = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  color: ${colors.black_500};
  letter-spacing: -0.28px;
`;

export const MessageContents = styled.p<{ isRead: boolean }>`
  margin-top: 11px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.black};
  letter-spacing: -0.32px;
  word-break: break-all;
  word-wrap: break-word;
  opacity: ${({ isRead }) => isRead && 0.5};
`;
