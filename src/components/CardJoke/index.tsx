import React from "react";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";

const test = ` Captain Planet once told Chuck Norris that he had control over all the
        elements - earth, water, wind and fire. Chuck Norris then drowned him in
        fire and blew him six feet under, thereby utilizing all four elements to
        move the good captain asunder. (It should be noted here that Chuck
        Norris, for the first time ever, deviated from using his signature
        roundhouse kick.)`;
interface ICardJoke {
  createdAt?: string;
  text: string;
}

const CardJoke = ({ createdAt, text }: ICardJoke) => {
  return (
    <div className="w-full max-w-xs h-full min-h-[10rem] bg-gray-800 flex flex-col rounded-md overflow-hidden relative">
      <BsFillChatLeftQuoteFill
        className="absolute right-2 top-2"
        fontSize={20}
      />
      <p className="flex-1 font-bold pl-4 pr-8 py-4">{text}</p>
      <div className="w-full bg-gray-800 text-gray-200 border-t text-sm h-auto box-border border-gray-900 font-semibold py-1 pl-4">
        Criado em: 24 de junho de 2020.
      </div>
    </div>
  );
};

export default CardJoke;
