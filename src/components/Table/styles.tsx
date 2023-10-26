import { colors } from '@styles/colors';
import styled from '@emotion/styled';

export const TableContainer = styled.div`
  width: 100%;
`;
export const TableWrapper = styled.table`
  box-sizing: border-box;
  width: 100%;
  min-width: 400px;
  overflow: hidden;
  font-size: 16px;
  border-radius: 8px;
`;

export const TableBorder = styled.div`
  width: 100%;
  border: 1px solid ${colors.line};
  border-radius: 8px;
`;

export const TableThead = styled.thead`
  color: ${colors.black};
  text-align: center;
  background-color: ${colors.background};
`;

export const TableTh = styled.th<{ width?: string; textAlign?: string }>`
  width: ${({ width }) => width ?? 'auto'};
  padding: 16px;
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  letter-spacing: -0.48px;
  vertical-align: middle;
`;

export const TableBody = styled.tbody`
  letter-spacing: -0.48px;
`;

export const TableLink = styled.a`
  color: unset;
  text-decoration: none;
`;

export const TableData = styled.td<{ width?: string; textAlign?: string }>`
  width: ${({ width }) => width ?? 'auto'};
  padding: 16px;
  font-weight: 600;
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  letter-spacing: -0.48px;
  vertical-align: middle;
  cursor: pointer;
  border-top: 1px solid ${colors.line};
`;
