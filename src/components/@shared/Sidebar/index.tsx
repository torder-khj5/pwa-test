import { useTableSelector } from '@store/useTableStore.ts';
import Icon from '@components/@shared/Icon';
import Category from '@components/@shared/Category';
import * as S from './styles.tsx';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const { selectTable } = useTableSelector(['selectTable']);
  const navigate = useNavigate();

  return (
    <S.SidebarContainer>
      <S.HeaderLogoContainer>
        <Icon name="로고_티오더_이름_흰색" width={80} height={60} />
        <S.HeaderTableName onClick={() => navigate('/')}>
          <div style={{ color: 'white', fontSize: '20px' }}>{selectTable}번</div>
        </S.HeaderTableName>
      </S.HeaderLogoContainer>
      <Category />
    </S.SidebarContainer>
  );
}
