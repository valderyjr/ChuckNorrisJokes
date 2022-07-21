import React, { useState } from "react";
import Button from "../../components/Button";
import CardJoke from "../../components/CardJoke";
import PageTitle from "../../components/PageTitle";
import AppLayout from "../../layouts/AppLayout";
import { getARandomJoke, OneJoke } from "../../services/httpService";

const HomePage = () => {
  const [joke, setJoke] = useState<OneJoke | null>(null);
  const [error, setError] = useState(false);

  const handleRandomJoke = async () => {
    const randomJoke = await getARandomJoke();
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
      {/* <h1 className="text-center font-bold text-2xl">
        Brinque com piadas aleatórias sobre o Chuck Norris!
	</h1> */}
      <PageTitle title="Brinque com piadas aleatórias sobre o Chuck Norris!" />
      <section className="flex-1 mt-8 flex flex-col gap-8 items-center">
        <Button text="Gere uma piada aleatória" onClick={handleRandomJoke} />
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
