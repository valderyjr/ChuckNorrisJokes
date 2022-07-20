import React from "react";
interface IButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  width?: string;
}
const Button = ({ text, type = "button", onClick, width }: IButtonProps) => {
  return (
    <button
      className={`${
        width ? `${width}` : "w-fit"
      } bg-gray-200 hover:bg-gray-100 text-gray-900 font-semibold px-4 py-3 rounded-md transition-colors`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
