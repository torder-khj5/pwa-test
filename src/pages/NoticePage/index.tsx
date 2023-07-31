import { colors } from '@styles/colors';
import SearchInput from '@components/SearchInput';
import PageWrapper from '@components/PageWrapper';
import * as S from './styles';
import React, { useCallback } from 'react';

const NOTICE_DATA = [
  {
    id: '0',
    type: 'NOTICE',
    title: '[공지] 허브티 점검 안내',
    date: '2023-07-11',
  },
  {
    id: '1',
    type: 'UPDATE',
    title: '[업데이트] 허브티 업데이트 안내',
    date: '2008-08-08',
  },
  {
    id: '2',
    type: 'ETC',
    title: '[기타] 허브티 기타 안내',
    date: '2023-07-11',
  },
  {
    id: '3',
    type: 'NOTICE',
    title: '[공지] 허브티 점검 안내',
    date: '2023-07-11',
  },
];
const NOTICE_TYPE_TEXT: Record<string, { text: string; color: string }> = {
  NOTICE: { text: '공지', color: 'blue' },
  UPDATE: { text: '업데이트', color: 'pink' },
  ETC: { text: '기타', color: 'gray' },
};

const PAGE_SIZE = 15;

export default function NoticePage() {
  // 전체 notice 개수
  const totalPosts = NOTICE_DATA.length;

  const renderPageButton = useCallback(() => {
    const btnCount = Math.ceil(totalPosts / PAGE_SIZE);
    const pageNumArray = Array.from({ length: btnCount }, (_, index) => index + 1);

    return pageNumArray.map((pageNum) => <button key={pageNum}>{pageNum}</button>);
  }, [totalPosts]);

  return (
    <PageWrapper bgColor={colors.navy_30}>
      <S.PageTitle>공지사항</S.PageTitle>
      <S.TopSection>
        <S.Text88>전체({totalPosts})</S.Text88>
        <SearchInput onSearch={(text) => console.log(`Search for ${text}`)} />
      </S.TopSection>
      <ul>
        {NOTICE_DATA.map((notice) => {
          const { id, type, title, date } = notice;
          return (
            <S.Row key={id}>
              <S.NoticeType bgColor={NOTICE_TYPE_TEXT[type].color}>{NOTICE_TYPE_TEXT[type].text}</S.NoticeType>
              <div>{title}</div>
              <S.NoticeDate>{date}</S.NoticeDate>
            </S.Row>
          );
        })}
      </ul>
      <S.PaginationWrap>
        <button className="first-button">{'<<'}</button>
        <button>{'<'}</button>
        {renderPageButton()}
        <button>{'>'}</button>
        <button className="last-button">{'>>'}</button>
      </S.PaginationWrap>
    </PageWrapper>
  );
}
