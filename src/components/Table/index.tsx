import * as S from './styles';

type Column = {
  key: string;
  title: string;
  width?: string;
  textAlign?: string;
  dataIndex: string;
  render?: (text: any, record: any) => React.ReactNode;
};

type DataSourceItem = {
  id: string;
  [key: string]: any;
};

type TableProps = {
  columns: Column[];
  dataSource: DataSourceItem[];
};

const Table = ({ columns, dataSource }: TableProps) => {
  return (
    <S.TableContainer>
      <S.TableBorder>
        <S.TableWrapper>
          <S.TableThead>
            <tr>
              {columns.map((col) => (
                <S.TableTh key={col.key} width={col.width} textAlign={col.textAlign}>
                  {col.title}
                </S.TableTh>
              ))}
            </tr>
          </S.TableThead>
          <S.TableBody>
            {dataSource.map((data) => (
              <tr key={data.id}>
                {columns.map((col) => (
                  <S.TableData key={col.key} width={col.width} textAlign={col.textAlign}>
                    <S.TableLink href={'notice/' + data.id}>
                      {col.render ? col.render(data[col.dataIndex], data) : data[col.dataIndex]}
                    </S.TableLink>
                  </S.TableData>
                ))}
              </tr>
            ))}
          </S.TableBody>
        </S.TableWrapper>
      </S.TableBorder>
    </S.TableContainer>
  );
};

export default Table;
