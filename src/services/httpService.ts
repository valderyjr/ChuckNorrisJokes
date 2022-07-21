import { httpService } from "../config/http";

export interface IOneJoke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export interface IMultipleJokes {
  total: number;
  result: IOneJoke[];
}

export const getARandomJoke = async (): Promise<IOneJoke | null> => {
  try {
    const { data } = await httpService.get("/random");
    return data as IOneJoke;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCategoryList = async (): Promise<string[] | null> => {
  try {
    const { data } = await httpService.get("/categories");
    return data as string[];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getARandomJokeFromCategory = async (
  category: string
): Promise<IOneJoke | null> => {
  try {
    const { data } = await httpService.get(`/random?category=${category}`);
    return data as IOneJoke;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getJokesFromSearch = async (
  nameSearch: string
): Promise<IMultipleJokes | null> => {
  try {
    const { data } = await httpService.get(`/search?query=${nameSearch}`);
    return data as IMultipleJokes;
  } catch (error) {
    console.log(error);
    return null;
  }
};
