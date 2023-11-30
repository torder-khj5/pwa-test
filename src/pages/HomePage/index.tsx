import { type ProductType } from '@type/categoryType.ts';
import { colors } from '@styles/colors.ts';
import { useTableAction, useTableSelector } from '@store/useTableStore.ts';
import { initProduct } from '@pages/HomePage/ProductList.tsx';
import Typography from '@components/Typography';
import { CommonButton } from '@components/CommonButton';
import ModalContent from '@components/@headless/Modal/Content.tsx';
import { CloseButton } from '@components/@headless/Modal/CloseButton.tsx';
import Modal from '@components/@headless/Modal';
import Button from '@components/@headless/ListBox/Button.tsx';
import * as S from './styles.tsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function genNewDoc() {
  return {
    _id: new Date().toISOString(),
    time: Date.now(),
    storeCode: '65372c3c0df256000102683b',
    tableId: '101',
    tableName: '21',
    orderInfo: [
      {
        pos_code: 'C00005',
        good_qty: 1,
        order_options: [
          {
            pos_code: 'C00003',
            good_qty: 1,
          },
        ],
      },
      {
        pos_code: 'C00005',
        good_qty: 1,
        order_options: [
          {
            pos_code: 'C00003',
            good_qty: 1,
          },
        ],
      },
    ],
  };
}

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

  function handleClickEvent() {
    console.log('handleClick!');
  }

  return (
    <S.HomeContainer>
      테이블을 선택해주세요.
      <div style={{ display: 'flex' }}>{renderTables()}</div>
    </S.HomeContainer>
  );
}
