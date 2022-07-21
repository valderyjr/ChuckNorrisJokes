import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getContext, setContext } from "../hooks/useLocalStorage";

export interface IJokeFavorite {
  id: string;
  text: string;
  createdAt: string;
}

interface IAppContext {
  myJokes: IJokeFavorite[];
  setMyJokes: Dispatch<SetStateAction<IJokeFavorite[]>>;
}

const AppContext = createContext<IAppContext>({
  myJokes: [],
  setMyJokes: () => {},
});

AppContext.displayName = "AppContext";

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const hasFavoritedJokes = () => {
    const response = getContext();
    return response ? response : [];
  };
  const [favoriteJokes, setFavoriteJokes] = useState<IJokeFavorite[]>(() =>
    hasFavoritedJokes()
  );

  useEffect(() => {
    setContext(favoriteJokes);
  }, [favoriteJokes]);

  return (
    <AppContext.Provider
      value={{ myJokes: favoriteJokes, setMyJokes: setFavoriteJokes }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
