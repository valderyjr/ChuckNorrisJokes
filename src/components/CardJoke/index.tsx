import React, { useState } from "react";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { transformData } from "../../helpers/transformData";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface ICardJoke {
  text: string;
  createdAt?: string;
  id?: string;
}

const CardJoke = ({ createdAt, text }: ICardJoke) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prevLike) => !prevLike);
    console.log(isLiked);
  };
  return (
    <div className="w-full max-w-xs h-full min-h-[10rem] bg-gray-800 flex flex-col rounded-md overflow-hidden relative">
      <span className="absolute right-2 top-2">
        <BsFillChatLeftQuoteFill fontSize={20} />
      </span>
      <p className="flex-1 font-bold pl-4 pr-8 py-4">{text}</p>
      <div className="w-full bg-gray-800 text-gray-200 border-t h-auto min-h-[30px] border-gray-900 font-semibold py-2 pl-4 relative">
        <p className="text-xs inline-block">
          Criado em: {createdAt ? transformData(createdAt) : "Data indefinida."}
          {isLiked ? (
            <AiFillHeart
              className="inline-block absolute right-2 top-3 cursor-pointer"
              fontSize={20}
              onClick={handleLike}
            />
          ) : (
            <AiOutlineHeart
              className="inline-block absolute right-2 top-3 cursor-pointer"
              fontSize={20}
              onClick={handleLike}
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default CardJoke;
