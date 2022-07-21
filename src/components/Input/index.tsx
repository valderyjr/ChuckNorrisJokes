import React, { InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleInput: (value: string) => void;
}

const Input = ({ value, handleInput, ...rest }: IInput) => {
  return (
    <input
      value={value}
      onChange={({ target }) => handleInput(target.value)}
      {...rest}
      className="text-gray-200 w-full font-semibold pl-2 py-2 bg-transparent border-b border-gray-50 outline-none"
    />
  );
};

export default Input;
