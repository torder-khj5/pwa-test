import { palette } from '@styles/colors_v2.ts';
import { useTableSelector } from '@store/useTableStore.ts';
import Typography from '@components/Typography';
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
          <Typography tag={'h5'} color={palette.white}>
            {selectTable}번
          </Typography>
        </S.HeaderTableName>
      </S.HeaderLogoContainer>
      <Category />
    </S.SidebarContainer>
  );
}
