import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import CardJoke from "../../components/CardJoke";
import PageTitle from "../../components/PageTitle";
import Select from "../../components/Select";
import { useAppContext } from "../../hooks/useAppContext";
import AppLayout from "../../layouts/AppLayout";
import {
  getARandomJoke,
  getARandomJokeFromCategory,
  getCategoryList,
  OneJoke,
} from "../../services/httpService";

const HomePage = () => {
  const useContext = useAppContext();
  const [joke, setJoke] = useState<OneJoke | null>(null);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryChoosed, setCategoryChoosed] = useState("");

  useEffect(() => {
    const getAllCategories = async () => {
      const categoryList = await getCategoryList();
      if (!categoryList) {
        setCategories([]);
        setError(true);
        return;
      }
      setError(false);
      setCategories([...categoryList]);
    };
    getAllCategories();
  }, []);

  const handleRandomJoke = async () => {
    let randomJoke;
    if (!categoryChoosed) {
      randomJoke = await getARandomJoke();
    } else {
      randomJoke = await getARandomJokeFromCategory(categoryChoosed);
    }
    if (!randomJoke) {
      setJoke(null);
      setError(true);
      return;
    }
    setError(false);
    setJoke(randomJoke);
    return;
  };
  return (
    <AppLayout>
      <PageTitle title="Gere uma piada aleatória ou a partir de uma categoria!" />
      <section className="flex-1 mt-8 flex flex-col gap-8 items-center">
        <Select
          name="categories"
          optionList={categories}
          handleSelect={setCategoryChoosed}
        />
        <Button text="Gerar piada aleatória" onClick={handleRandomJoke} />
        <div className="flex items-center justify-center w-full">
          {joke && (
            <CardJoke
              text={joke.value}
              createdAt={joke.created_at}
              id={joke.id}
            />
          )}
          {error && (
            <p className="text-2xl text-red-600 font-bold">
              Ocorreu um erro interno.
            </p>
          )}
        </div>
      </section>
    </AppLayout>
  );
};

export default HomePage;
