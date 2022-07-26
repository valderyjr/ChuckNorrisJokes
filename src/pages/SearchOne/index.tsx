import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import CardJoke from "../../components/CardJoke";
import Input from "../../components/Input";
import PageTitle from "../../components/PageTitle";
import AppLayout from "../../layouts/AppLayout";
import { getJokesFromSearch, IOneJoke } from "../../services/httpService";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

const SearchOne = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [jokeList, setJokeList] = useState<IOneJoke[] | null>(null);
  const [jokeSelected, setJokeSelected] = useState<IOneJoke | null>(null);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setJokeSelected(null);
    setLoading(true);
    const listResponse = await getJokesFromSearch(input);
    if (!listResponse || listResponse.total === 0) {
      setJokeSelected(null);
      setLoading(false);
      setQuantity(0);
      setError(true);
      return;
    }
    setError(false);
    setJokeList(listResponse.result);
    setQuantity(listResponse.total);
    setLoading(false);
    setJokeSelected(listResponse.result[0]);
  };

  const getPreviousJoke = (id: string) => {
    if (!jokeList) {
      throw new Error();
    }
    const indexCurrentJoke = jokeList.findIndex(
      (jokeItem) => jokeItem.id === id
    );
    const previousJoke = jokeList[indexCurrentJoke - 1];
    setJokeSelected(previousJoke);
  };

  const getNextJoke = (id: string) => {
    if (!jokeList) {
      throw new Error();
    }
    const indexCurrentJoke = jokeList.findIndex(
      (jokeItem) => jokeItem.id === id
    );
    const nextJoke = jokeList[indexCurrentJoke + 1];
    setJokeSelected(nextJoke);
  };

  return (
    <AppLayout>
      <PageTitle title="Pesquise por uma palavra!" />
      <section className="flex-1 flex mt-8 flex-col gap-8">
        <form
          className="flex flex-col md:flex-row gap-8 items-center justify-center"
          onSubmit={handleSubmitForm}
        >
          <Input
            value={input}
            handleInput={setInput}
            placeholder="Insira um nome."
            required
            minLength={3}
          />
          <Button type="submit" text="Pesquisar" />
        </form>
        <main className="flex items-center justify-center w-full flex-col gap-4">
          {loading && (
            <div
              className="animate-spin w-8 h-8 border-4 border-r-gray-700 border-l-gray-700 border-b-gray-700 border-t-gray-100 rounded-full"
              role="status"
            ></div>
          )}
          {jokeList && jokeSelected && (
            <>
              <h2 className="font-bold text-xl text-center">
                Achamos {quantity} {quantity > 1 ? "piadas" : "piada"} com sua
                palavra.
              </h2>
              <div className="w-full flex justify-center items-center gap-4">
                {jokeSelected.id !== jokeList[0].id && (
                  <BsFillArrowLeftSquareFill
                    id="icon-previous"
                    cursor={"pointer"}
                    fontSize={32}
                    onClick={() => getPreviousJoke(jokeSelected.id)}
                  />
                )}
                <CardJoke
                  text={jokeSelected.value}
                  createdAt={jokeSelected.created_at}
                  id={jokeSelected.id}
                />
                {jokeSelected.id !== jokeList[quantity - 1].id && (
                  <BsFillArrowRightSquareFill
                    id="icon-next"
                    cursor={"pointer"}
                    fontSize={32}
                    onClick={() => getNextJoke(jokeSelected.id)}
                  />
                )}
              </div>
            </>
          )}
          {error && (
            <p className="text-2xl text-red-600 font-bold">
              Infelizmente não encontramos nenhuma piada com este nome.
            </p>
          )}
        </main>
      </section>
    </AppLayout>
  );
};

export default SearchOne;
