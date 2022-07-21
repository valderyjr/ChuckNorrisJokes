import React from "react";

interface ISelect {
  name: string;
  handleSelect: (value: string) => void;
  optionList: string[];
}

const Select = ({ name, handleSelect, optionList }: ISelect) => {
  return (
    <select
      name={name}
      id={name}
      className="bg-transparent w-full font-bold first-letter:uppercase"
      onChange={(option) => handleSelect(option.target.value)}
    >
      <option value="" className="bg-gray-900 font-bold">
        Selecione uma opção.
      </option>
      {optionList.map((option) => (
        <option key={option} className="bg-gray-900 font-bold">
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
