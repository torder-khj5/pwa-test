import { colors } from '@styles/colors';
import PageWrapper from '@components/PageWrapper';
import Icon from '@components/@shared/Icon';
import chicken_900 from '@assets/items/chicken_900.jpg';
import chicken_800 from '@assets/items/chicken_800.jpg';
import chicken_700 from '@assets/items/chicken_700.jpg';
import chicken_600 from '@assets/items/chicken_600.jpg';
import chicken_500 from '@assets/items/chicken_500.jpg';
import chicken_400 from '@assets/items/chicken_400.jpg';
import chicken_300 from '@assets/items/chicken_300.jpg';
import chicken_200 from '@assets/items/chicken_200.jpg';
import chicken_1100 from '@assets/items/chicken_1100.jpg';
import chicken_1000 from '@assets/items/chicken_1000.jpg';
import chicken_100 from '@assets/items/chicken_100.jpg';
import * as S from './styles';
import { useState } from 'react';

const IMAGES = [
  {
    img: chicken_1100,
    size: 1100,
  },
  {
    img: chicken_1000,
    size: 1000,
  },
  {
    img: chicken_900,
    size: 900,
  },
  {
    img: chicken_800,
    size: 800,
  },
  {
    img: chicken_700,
    size: 700,
  },
  {
    img: chicken_600,
    size: 600,
  },
  {
    img: chicken_500,
    size: 500,
  },
  {
    img: chicken_400,
    size: 400,
  },

  {
    img: chicken_300,
    size: 300,
  },
  {
    img: chicken_200,
    size: 200,
  },
  {
    img: chicken_100,
    size: 100,
  },
];

export default function ItemsPage() {
  console.log('------------------');
  console.log('브라우저 전체의 너비', window.outerWidth);
  console.log('브라우저 전체의 높이', window.outerHeight);
  console.log('브라우저 화면의 너비', window.innerWidth);
  console.log('브라우저 화면의 높이', window.innerHeight);
  console.log('------------------');

  const size = IMAGES.length;
  const [page, setPage] = useState(0);

  const pageUp = () => {
    if (page + 1 === size) return;
    setPage((prev) => prev + 1);
  };

  const pageDown = () => {
    if (page < 0) return;
    setPage((prev) => prev - 1);
  };

  return (
    <PageWrapper bgColor={colors.navy_30}>
      <S.Section>
        <S.ItemImg src={IMAGES[page].img} />
        <S.Title>사이즈 - {IMAGES[page].size}</S.Title>
      </S.Section>
      <S.PaginationSection>
        <S.Button onClick={pageDown} disabled={page === 0}>
          <Icon name={page === 0 ? '화살표_왼쪽_회색' : '화살표_왼쪽_검정색'} size={35} />
        </S.Button>
        <S.Text>{page + 1}</S.Text>
        <S.Button onClick={pageUp} disabled={page + 1 === size}>
          <Icon name={page + 1 === size ? '화살표_오른쪽_회색' : '화살표_오른쪽_검정색'} size={35} />
        </S.Button>
      </S.PaginationSection>
    </PageWrapper>
  );
}
