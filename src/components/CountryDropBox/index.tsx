// import Dropdown from '@components/Dropdown';
import { colors } from '@styles/colors';
import * as S from './styles';

type CountryList = { countryCode: string; countryName: string };
interface CountryDropBoxProps {
  contents: CountryList[];
  onClickHandler: (country: CountryList) => void;
  selectedCountry?: CountryList;
}

export default function CountryDropBox({ contents, onClickHandler, selectedCountry }: CountryDropBoxProps) {
  const isSelectedCountry = (countryCode: string) => {
    return selectedCountry?.countryCode === countryCode;
  };

  return (
    <S.DropBoxWrapper>
      <S.DropBoxListWrapper>
        {contents.map(({ countryCode, countryName }: CountryList) => (
          <S.DropBoxList key={countryCode} onClick={() => onClickHandler({ countryCode, countryName })}>
            <S.DropBoxSpan colors={isSelectedCountry(countryCode) ? colors.black_100 : '#777'}>
              +{countryCode}
            </S.DropBoxSpan>
            <S.DropBoxSpan colors={isSelectedCountry(countryCode) ? colors.black_100 : '#777'}>
              {countryName}
            </S.DropBoxSpan>
            {isSelectedCountry(countryCode) && <S.IconAdditionalPosition name="체크_빨간색" size={15} />}
          </S.DropBoxList>
        ))}
      </S.DropBoxListWrapper>
    </S.DropBoxWrapper>
  );
}
