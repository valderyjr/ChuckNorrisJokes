import { useContext } from "react";
import { AppContext, IJokeFavorite } from "../context/AppContext";

export const useAppContext = () => {
  const { myJokes, setMyJokes } = useContext(AppContext);

  const addToFavorites = (data: IJokeFavorite) => {
    const isFavorited = isAFavoritedJoke(data.id);
    return isFavorited ? "" : setMyJokes((prevJokes) => [...prevJokes, data]);
  };

  const removeFromFavorites = (id: string) => {
    const newJokes = myJokes.filter((joke) => joke.id !== id);
    setMyJokes([...newJokes]);
  };

  const isAFavoritedJoke = (id: string) => {
    const isFavorited = myJokes.find((item) => item.id === id);
    return isFavorited ? true : false;
  };

  return { myJokes, addToFavorites, removeFromFavorites, isAFavoritedJoke };
};
