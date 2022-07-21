import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import CardJoke from "../../components/CardJoke";
import Input from "../../components/Input";
import PageTitle from "../../components/PageTitle";
import Select from "../../components/Select";
import AppLayout from "../../layouts/AppLayout";
import {
  getARandomJokeFromCategory,
  getCategoryList,
  OneJoke,
} from "../../services/httpService";

const SearchOne = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [joke, setJoke] = useState<OneJoke | null>(null);

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          />
          <Button type="submit" text="Pesquisar" />
        </form>
        <div className="flex items-center justify-center w-full mt-8">
          {joke && (
            <CardJoke
              text={joke.value}
              createdAt={joke.created_at}
              id={joke.id}
            />
          )}
        </div>
      </section>
    </AppLayout>
  );
};

export default SearchOne;
