import { useTableSelector } from '@store/useTableStore.ts';
import Icon from '@components/@shared/Icon';
import Category from '@components/@shared/Category';
import * as S from './styles.tsx';

export default function Sidebar() {
  const { selectTable } = useTableSelector(['selectTable']);
  return (
    <S.SidebarContainer>
      <S.HeaderLogoContainer>
        <Icon name="로고_티오더_이름_흰색" width={80} height={60} />
        <S.HeaderTableName>
          <div style={{ color: 'white', fontSize: '20px' }}>{selectTable}번</div>
        </S.HeaderTableName>
      </S.HeaderLogoContainer>
      <Category />
    </S.SidebarContainer>
  );
}
