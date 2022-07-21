import { useContext } from "react";
import { AppContext, IJokeFavorite } from "../context/AppContext";

export const useAppContext = () => {
  const { myJokes, setMyJokes } = useContext(AppContext);

  const addToFavorites = (data: IJokeFavorite) => {
    setMyJokes((prevJokes) => [...prevJokes, data]);
  };

  const removeFromFavorites = (id: string) => {
    const newJokes = myJokes.filter((joke) => joke.id !== id);
    setMyJokes([...newJokes]);
  };

  return { myJokes, addToFavorites, removeFromFavorites };
};
