import HubtTooltip from '@components/HubtTooltip';
import { useToggleMenuContext } from '@components/@shared/ToggleMenu/useToggleMenu';
import ToggleMenu from '@components/@shared/ToggleMenu';
import Icon from '@components/@shared/Icon';
import * as S from './styles';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { css } from '@emotion/react';

const MENU_LIST = [
  {
    icon: <Icon name="유저_흰색" size={24} />,
    id: '계정관리',
    name: '계정관리',
    subCategories: [
      { id: '계정관리1', name: '계정관리1', to: '/notice' },
      { id: '계정관리2', name: '계정관리2', to: '/faq' },
      { id: '계정관리3', name: '계정관리3', to: '/cert' },
    ],
  },
  {
    icon: <Icon name="가방_흰색" size={24} />,
    id: '비즈니스 관리',
    name: '비즈니스 관리',
    subCategories: [
      { id: '사업자 관리', name: '사업자 관리', to: '/notice' },
      { id: '임직원 · 협력업체 정보 설정', name: '임직원 · 협력업체 정보 설정', to: '/faq' },
    ],
  },
  {
    icon: <Icon name="깃발_흰색" size={24} />,
    id: '서비스 현황',
    name: '서비스 현황',
    subCategories: [
      { id: '서비스1', name: '서비스1', to: '/cert' },
      { id: '서비스2', name: '서비스2', to: '/notice' },
    ],
  },
  {
    icon: <Icon name="설정_흰색" size={24} />,
    id: '기타 설정',
    name: '기타 설정',
    subCategories: [
      { id: '기타1', name: '기타1', to: '/faq' },
      { id: '기타2', name: '기타2', to: '/cert' },
    ],
  },
];

// TODO) collapse, expand 분리하여 내부 Side메뉴 개발 예정
export default function SideBar() {
  const [collapse, setCollapse] = useState(false);

  return (
    <S.SideBarContainer width={collapse ? 74 : 240}>
      {collapse && (
        <S.ExpandButton onClick={() => setCollapse(false)}>
          <Icon name="열기_네이비" size={24} />
        </S.ExpandButton>
      )}
      {collapse && (
        <Icon
          css={css`
            margin: 30px 25px 0 27px;
          `}
          name="로고_티오더_흰색"
          size={22}
        />
      )}
      {!collapse && (
        <S.SideTop>
          <Icon name="로고_허브티_흰색" size={87.54} />
          <HubtTooltip placement="right" message="사이드바 접기" theme="light">
            <button onClick={() => setCollapse(true)}>
              <Icon name="닫기_흰색" size={24} />
            </button>
          </HubtTooltip>
        </S.SideTop>
      )}

      <S.SideNav>
        {!collapse && (
          <ul>
            {MENU_LIST.map((menu, index) => (
              <li key={String(menu.id)}>
                <ToggleMenu>
                  <ToggleMenu.Trigger>
                    <S.MainCategoryWrap>
                      <div className="main-category-left">
                        {menu.icon}
                        <span>{menu.name}</span>
                      </div>
                      <MainCategoryArrow />
                    </S.MainCategoryWrap>
                  </ToggleMenu.Trigger>
                  <ToggleMenu.Content>
                    <S.SubCategoryList>
                      {menu.subCategories.map((subCategory) => (
                        <S.SubCategoryWrap key={subCategory.id}>
                          <NavLink to={subCategory.to}>{subCategory.name}</NavLink>
                        </S.SubCategoryWrap>
                      ))}
                    </S.SubCategoryList>
                  </ToggleMenu.Content>
                </ToggleMenu>
              </li>
            ))}
          </ul>
        )}
      </S.SideNav>
    </S.SideBarContainer>
  );
}

function MainCategoryArrow() {
  const { open } = useToggleMenuContext();
  const iconName = open ? '화살표_위_흰색' : '화살표_오른쪽_회색';
  return <Icon name={iconName} size={24} />;
}
