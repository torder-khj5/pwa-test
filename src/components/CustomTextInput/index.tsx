import Input from '@components/@shared/Input';
import * as S from './styles';
import React, { type ChangeEvent, type ReactNode, useState } from 'react';

type CustomTextInputProps = {
  inputType?: string;
  inputValue: string;
  inputChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isShowHideIcon?: boolean;
  isShowDeleteIcon?: boolean;
  innerComponent?: ReactNode;
  isShowTimer?: boolean;
  textLabel?: string;
  disabled?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

export default function CustomTextInput({
  inputType,
  inputValue,
  inputChangeEvent,
  placeholder,
  isShowHideIcon,
  isShowDeleteIcon,
  innerComponent,
  disabled,
  textLabel,
  isError,
  errorMessage,
  ...rest
}: CustomTextInputProps) {
  const [showInputText, setShowInputText] = useState(inputType !== 'password');

  const toggleShowInputText = () => {
    setShowInputText(!showInputText);
  };

  const onClickClearIcon = () => {
    const event = {
      target: {
        value: '',
      },
    };
    inputChangeEvent(event as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <>
      {textLabel && <S.Label htmlFor="custom-input">{textLabel}</S.Label>}
      <S.InputWrapper>
        <Input
          type={showInputText ? 'text' : 'password'}
          placeholder={placeholder}
          value={inputValue}
          onChange={inputChangeEvent}
          disabled={disabled}
          isError={isError}
          {...rest}
        />
        <S.IconWrapper>
          {isShowDeleteIcon && (
            <S.IconAdditionalMargin onClick={onClickClearIcon} name="삭제_회색" size={24} data-testid="delete-icon" />
          )}
          {isShowHideIcon && (
            <S.IconAdditionalMargin
              onClick={toggleShowInputText}
              name={showInputText ? '보이기_회색' : '가리기_회색'}
              size={26}
              data-testid="show-icon"
            />
          )}
          {innerComponent}
        </S.IconWrapper>
      </S.InputWrapper>
      {isError && <S.ErrorSpan>{errorMessage}</S.ErrorSpan>}
    </>
  );
}
