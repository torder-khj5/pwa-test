import * as S from './styles';

type Notification = {
  id: number;
  title: string;
  date: string;
  contents: string;
  new: boolean;
  read: boolean;
};

const NotificationModal = () => {
  const MESSAGE_LIST: Notification[] = [
    {
      id: 1,
      title: '알림제목',
      date: '2023-01-01',
      contents: '알림설명이 노출됩니다. 최대 두줄까지 노출됩니다. 두 줄 노출 설명이 길어질 시 말줄임표로 노출됩니다...',
      new: true,
      read: false,
    },
    {
      id: 2,
      title: '알림제목',
      date: '2023-01-01',
      contents: '알림설명이 노출됩니다. 최대 두줄까지 노출됩니다. 두 줄 노출 설명이 길어질 시 말줄임표로 노출됩니다...',
      new: true,
      read: false,
    },
    {
      id: 3,
      title: '알림제목',
      date: '2023-01-01',
      contents: '알림설명이 노출됩니다. 최대 두줄까지 노출됩니다. 두 줄 노출 설명이 길어질 시 말줄임표로 노출됩니다...',
      new: false,
      read: true,
    },
    {
      id: 4,
      title: '알림제목',
      date: '2023-01-01',
      contents: '알림설명이 노출됩니다. 최대 두줄까지 노출됩니다. 두 줄 노출 설명이 길어질 시 말줄임표로 노출됩니다...',
      new: false,
      read: true,
    },
    {
      id: 5,
      title: '알림제목',
      date: '2023-01-01',
      contents: '알림설명이 노출됩니다. 최대 두줄까지 노출됩니다. 두 줄 노출 설명이 길어질 시 말줄임표로 노출됩니다...',
      new: false,
      read: true,
    },
    {
      id: 6,
      title: '알림제목',
      date: '2023-01-01',
      contents: '알림설명이 노출됩니다. 최대 두줄까지 노출됩니다. 두 줄 노출 설명이 길어질 시 말줄임표로 노출됩니다...',
      new: false,
      read: true,
    },
  ];
  return (
    <S.NotificationModalContainer>
      <S.ModalWrapper>
        <S.ModalPolygonShape></S.ModalPolygonShape>
        <S.ModalTitle>
          알림
          <S.ModalTitleButton>알림 모두 읽기</S.ModalTitleButton>
        </S.ModalTitle>
        <S.ModalContents>
          {MESSAGE_LIST.map((list) => (
            <S.MessageList key={list.id}>
              <S.MessageHeader>
                {list.new && <S.MessageNewBadge></S.MessageNewBadge>}
                <S.MessageTitle isRead={list.read}>{list.title}</S.MessageTitle>
                <S.MessageDate isRead={list.read}>{list.date}</S.MessageDate>
              </S.MessageHeader>
              <S.MessageContents isRead={list.read}>{list.contents}</S.MessageContents>
            </S.MessageList>
          ))}
        </S.ModalContents>
        <S.ModalButton>
          <S.ButtonLink href="/notificationMessage">알림 전체보기</S.ButtonLink>
        </S.ModalButton>
      </S.ModalWrapper>
    </S.NotificationModalContainer>
  );
};

export default NotificationModal;
