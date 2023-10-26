import { type ChangeEvent } from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  id?: string;
  name: string;
  options: Option[];
  value?: string;
  placeholder?: string;
  onChange: (value: string, name: string) => void;
};

// TODO) 헤드리스 컴포넌트 패턴으로 개선 예정
function Select({ id, name, options, value, placeholder, onChange }: SelectProps) {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value, e.target.name);
  };

  return (
    <select name={name} id={id} value={value} onChange={handleSelect}>
      {placeholder && (
        <option style={{ color: 'red' }} hidden>
          {placeholder}
        </option>
      )}
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
export default Select;
