import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useAppContext = () => {
  const { myJokes, setMyJokes } = useContext(AppContext);

  const populateMyJokes = () => {
    const newData = [
      {
        id: "1",
        text: "2",
        createdAt: "22022",
      },
    ];
    setMyJokes([...newData]);
  };

  return { myJokes, populateMyJokes };
};
