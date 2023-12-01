import { useTableAction, useTableSelector } from '@store/useTableStore.ts';
import Typography from '@components/Typography';
import { CommonButton } from '@components/CommonButton';
import * as S from './styles.tsx';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const { tableList } = useTableSelector(['tableList', 'selectTable']);
  const { setSelectTable } = useTableAction();
  const navigator = useNavigate();

  const handleClickTable = (selectTable: string) => {
    setSelectTable(selectTable);
    navigator('/order');
  };

  const renderTables = () => {
    return tableList.map((selectTable, index) => {
      return (
        <div style={{ margin: '5px' }} key={'table' + index}>
          <CommonButton
            key={`btn` + index}
            onButtonClick={() => handleClickTable(selectTable)}
            label={selectTable}
            btnSize={'md'}
          />
        </div>
      );
    });
  };

  return (
    <S.HomeContainer>
      <Typography tag="h2" style={{ marginBottom: '20px', textAlign: 'center' }}>
        테이블을 선택해주세요.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>{renderTables()}</div>
    </S.HomeContainer>
  );
}
