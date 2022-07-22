import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import CardJoke from "../../components/CardJoke";
import PageTitle from "../../components/PageTitle";
import Select from "../../components/Select";
import AppLayout from "../../layouts/AppLayout";
import {
  getARandomJoke,
  getARandomJokeFromCategory,
  getCategoryList,
  IOneJoke,
} from "../../services/httpService";

const HomePage = () => {
  const [joke, setJoke] = useState<IOneJoke | null>(null);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryChoosed, setCategoryChoosed] = useState("");
  const [loading, setLoading] = useState(false);

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
    setJoke(null);
    setLoading(true);
    setError(false);
    let randomJoke;
    if (!categoryChoosed) {
      randomJoke = await getARandomJoke();
    } else {
      randomJoke = await getARandomJokeFromCategory(categoryChoosed);
    }
    setError(randomJoke ? false : true);
    setLoading(false);
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
          {loading && (
            <div
              className="animate-spin w-8 h-8 border-4 border-r-gray-700 border-l-gray-700 border-b-gray-700 border-t-gray-100 rounded-full"
              role="status"
            ></div>
          )}
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
