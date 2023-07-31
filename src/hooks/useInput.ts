import { useState, type ChangeEvent } from 'react';

type ValidatorFn = (value: string) => boolean;

interface UseInputResult {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = (initialValue: string, validator?: ValidatorFn): UseInputResult => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};
