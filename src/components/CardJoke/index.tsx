import React from "react";

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
    <div className="w-full max-w-xs h-full min-h-[10rem] bg-gray-800 flex flex-col rounded-md ">
      <p className="flex-1 font-bold px-6 py-4">{text}</p>
      <div className="w-full bg-gray-200 text-gray-900 border-t text-sm h-auto box-border font-semibold py-1 px-6">
        Criado em: 24 de junho de 2020.
      </div>
    </div>
  );
};

export default CardJoke;
