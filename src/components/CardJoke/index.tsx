import React, { useEffect, useState } from "react";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { transformData } from "../../helpers/transformData";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useAppContext } from "../../hooks/useAppContext";

interface ICardJoke {
  text: string;
  createdAt: string;
  id: string;
}

const CardJoke = ({ createdAt, text, id }: ICardJoke) => {
  const { addToFavorites, removeFromFavorites, isAFavoritedJoke } =
    useAppContext();
  const [isLiked, setIsLiked] = useState(isAFavoritedJoke(id));

  useEffect(() => {
    setIsLiked(isAFavoritedJoke(id));
  }, [id]);

  const handleLike = () => {
    setIsLiked((prevLike) => !prevLike);
  };

  useEffect(() => {
    if (isLiked) {
      addToFavorites({ createdAt, id, text });
      return;
    }
    return removeFromFavorites(id);
  }, [isLiked]);

  return (
    <div className="w-full max-w-xs h-auto min-h-[10rem] bg-gray-800 flex flex-col rounded-md overflow-hidden relative drop-shadow-[2px_2px_5px_#000000] break-words">
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
