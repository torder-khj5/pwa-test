import { NewlineText } from '@components/@shared/NewLineText';
import * as S from './styles';

type Notification = {
  id: number;
  date: string;
  title: string;
  contents: string;
  read: boolean;
  new: boolean;
};

type Message = {
  id: number;
  date: string;
  notificationList: Notification[];
};

type NotificationListProps = {
  messageList: Message[];
};

const NotificationList = ({ messageList }: NotificationListProps) => {
  return (
    <S.NotificationContainer>
      {messageList.map((message) => (
        <S.MessageListContainer key={message.id}>
          <S.MessageListHeader>{message.date}</S.MessageListHeader>
          <S.MessageWrapper>
            {message.notificationList.map((list) => (
              <S.MessageList key={list.id}>
                <S.MessageTitleWrapper isRead={list.read}>
                  {list.new && <S.MessageNewBadge></S.MessageNewBadge>}
                  <S.MessageTitle isNew={list.new}>{list.title}</S.MessageTitle>
                  <S.MessageListDate>{list.date}</S.MessageListDate>
                </S.MessageTitleWrapper>
                <S.MessageContents isRead={list.read}>
                  <NewlineText text={list.contents} />
                </S.MessageContents>
              </S.MessageList>
            ))}
          </S.MessageWrapper>
        </S.MessageListContainer>
      ))}
    </S.NotificationContainer>
  );
};

export default NotificationList;
