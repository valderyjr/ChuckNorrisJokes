import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { OneJoke } from "../services/httpService";

interface IJokeFavorite {
  id: string;
  text: string;
  createdAt: string;
}

interface IAppContext {
  myJokes?: IJokeFavorite[];
  setMyJokes: Dispatch<SetStateAction<IJokeFavorite[] | undefined>>;
}

const AppContext = createContext<IAppContext>({
  myJokes: undefined,
  setMyJokes: () => {},
});

AppContext.displayName = "AppContext";

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [favoriteJokes, setFavoriteJokes] = useState<IJokeFavorite[]>();

  return (
    <AppContext.Provider
      value={{ myJokes: favoriteJokes, setMyJokes: setFavoriteJokes }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
