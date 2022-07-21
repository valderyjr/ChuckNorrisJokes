export const setContext = (favoriteList: any[]) => {
  localStorage.setItem("favorite", JSON.stringify(favoriteList));
};

export const getContext = () => {
  const myFavorites = localStorage.getItem("favorite");
  return myFavorites !== null ? JSON.parse(myFavorites) : null;
};
