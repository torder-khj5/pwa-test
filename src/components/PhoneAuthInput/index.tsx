import { CommonButton } from '@components/CommonButton';
import Icon from '@components/@shared/Icon';
import * as S from './styles';
import { type ChangeEvent, useState, useRef } from 'react';

type CountryList = { countryCode: string; countryName: string };

type PhoneAuthInputProps = {
  inputValue: string;
  inputChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCountryDropdownButton: () => void;
  selectedCountry: CountryList;
  disabled?: boolean;
  isError?: boolean;
  errorMessage?: string;
  placeholder: string;
};

export default function PhoneAuthInput({
  inputValue,
  inputChangeEvent,
  disabled = false,
  isError,
  errorMessage,
  selectedCountry,
  placeholder,
  onClickCountryDropdownButton,
}: PhoneAuthInputProps) {
  const [isPressedInput, setIsPressedInput] = useState<boolean>(false);
  const [isFilledInput, setIsFilledInput] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isCheckPressedInput = () => {
    const isRenderedInput = inputRef.current;
    const isFocusInputField = isRenderedInput && inputRef.current === document.activeElement;

    return isFocusInputField ? setIsPressedInput(true) : setIsPressedInput(false);
  };

  const isCheckFilledInput = () => {
    const isRenderedInput = inputRef.current;
    const isNotEmptyInputValue = isRenderedInput && inputRef.current.value.length > 0;

    return isNotEmptyInputValue ? setIsFilledInput(true) : setIsFilledInput(false);
  };

  return (
    <>
      <S.InputWrapper isPressed={isPressedInput} disabled={disabled}>
        <S.SuffixWrapper
          disabled={disabled}
          onClick={() => {
            !disabled && onClickCountryDropdownButton();
          }}
        >
          <S.Suffix isFilled={isFilledInput}>+{selectedCountry ? selectedCountry.countryCode : 9999}</S.Suffix>
          <Icon name="화살표_아래_회색" size={24} className="icon-resize" />
        </S.SuffixWrapper>
        <S.PhoneNumberWrapper>
          <S.PhoneNumberInput
            ref={inputRef}
            placeholder={placeholder}
            type="phone"
            value={inputValue}
            onClick={isCheckPressedInput}
            onChange={(event) => {
              inputChangeEvent(event);
              isCheckPressedInput();
            }}
            onBlur={() => {
              setIsPressedInput(false);
              isCheckFilledInput();
            }}
            disabled={disabled}
          />
        </S.PhoneNumberWrapper>
        <S.ButtonWrapper>
          <CommonButton
            label="인증 요청"
            priority="secondary"
            btnType="line"
            btnSize="xs"
            onButtonClick={() => console.log('인증 버튼 클릭')}
            isDisabled={disabled}
          />
        </S.ButtonWrapper>
      </S.InputWrapper>
    </>
  );
}
