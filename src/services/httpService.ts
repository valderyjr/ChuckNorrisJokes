import { httpService } from "../config/http";

export interface OneJoke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export const getARandomJoke = async (): Promise<OneJoke | null> => {
  try {
    const { data } = await httpService.get("/jokes/random");
    return data as OneJoke;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCategoryList = async (): Promise<string[] | null> => {
  try {
    const { data } = await httpService.get("/jokes/categories");
    return data as string[];
  } catch (error) {
    console.log(error);
    return null;
  }
};
