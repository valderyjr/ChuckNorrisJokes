import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import CardJoke from "../../components/CardJoke";
import Input from "../../components/Input";
import PageTitle from "../../components/PageTitle";
import AppLayout from "../../layouts/AppLayout";
import { getJokesFromSearch, OneJoke } from "../../services/httpService";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

const SearchOne = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [jokeList, setJokeList] = useState<OneJoke[] | null>(null);
  const [jokeSelected, setJokeSelected] = useState<OneJoke | null>(null);
  const [quantity, setQuantity] = useState(0);

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const listResponse = await getJokesFromSearch(input);
    if (!listResponse || listResponse.total === 0) {
      setJokeSelected(null);
      setQuantity(0);
      setError(true);
      return;
    }
    setError(false);
    setJokeList(listResponse.result);
    setQuantity(listResponse.total);
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
      <PageTitle title="Pesquise por uma palavra ou categoria!" />
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
          {jokeList && jokeSelected && (
            <>
              <h2 className="font-bold text-xl text-center">
                Achamos {quantity} piadas com esse tema.
              </h2>
              <div className="w-full flex justify-center items-center gap-4">
                {jokeSelected.id !== jokeList[0].id && (
                  <BsFillArrowLeftSquareFill
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
