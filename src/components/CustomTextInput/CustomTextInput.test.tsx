import CustomTextInput from './index';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('커스텀 인풋 테스트 시작', () => {
  test('커스텀 텍스트 인풋이 에러없이 렌더링 된다. ', () => {
    const inputChangeEvent = jest.fn();

    render(<CustomTextInput inputValue={'test'} inputChangeEvent={inputChangeEvent} placeholder="test" />);
  });

  test('Delete icon을 클릭 시 인풋의 벨류가 모두 지워진다.', () => {
    const inputChangeEvent = jest.fn();

    const { getByTestId } = render(
      <CustomTextInput
        inputValue="test value"
        inputChangeEvent={inputChangeEvent}
        placeholder="Enter value"
        isShowDeleteIcon
      />
    );

    const deleteIcon = getByTestId('delete-icon');

    fireEvent.click(deleteIcon);

    expect(inputChangeEvent).toHaveBeenCalledTimes(1);
    expect(inputChangeEvent).toHaveBeenCalledWith(expect.objectContaining({ target: { value: '' } }));
  });

  test('show icon을 클릭 시 인풋의 타입이 password로 바뀐다', () => {
    const inputChangeEvent = jest.fn();

    const { queryAllByTestId, getAllByTestId } = render(
      <CustomTextInput
        inputValue="test value"
        inputChangeEvent={inputChangeEvent}
        placeholder="Enter value"
        isShowHideIcon
        data-testid="custom-input"
      />
    );

    const showIcons = queryAllByTestId('show-icon');
    const inputElements = getAllByTestId('custom-input') as HTMLInputElement[];

    fireEvent.click(showIcons[0]);

    expect(inputChangeEvent).not.toHaveBeenCalled();
    expect(inputElements[0].type).toBe('password');
  });

  test('textLabel을 입력시 라벨이 생긴다', () => {
    const inputChangeEvent = jest.fn();
    const TEXTLAVEL = 'INPUT LABEL';

    const { getByText } = render(
      <CustomTextInput
        inputValue=""
        inputChangeEvent={inputChangeEvent}
        placeholder="Enter value"
        textLabel={TEXTLAVEL}
      />
    );

    const inputTitle = getByText(TEXTLAVEL);
    expect(inputTitle.textContent).toBe(TEXTLAVEL);
  });

  test('에러발생 시 span 태그로 에러 메세지가 출력된다.', () => {
    const errorMessage = 'Invalid value';
    const inputChangeEvent = jest.fn();

    const { getByText } = render(
      <CustomTextInput
        inputValue=""
        inputChangeEvent={inputChangeEvent}
        placeholder="Enter value"
        isError
        errorMessage={errorMessage}
      />
    );

    const errorSpan = getByText(errorMessage);
    expect(errorSpan.tagName.toLowerCase()).toBe('span');
    expect(errorSpan.textContent).toBe(errorMessage);
  });
});
