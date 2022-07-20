import React, { useState } from "react";
import Button from "../../components/Button";
import CardJoke from "../../components/CardJoke";
import AppLayout from "../../layouts/AppLayout";
import { getARandomJoke } from "../../services/httpService";

const HomePage = () => {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(false);
  const handleAxios = async () => {
    const randomJoke = await getARandomJoke();
    if (!randomJoke) {
      setJoke("");
      setError(true);
      return;
    }
    setError(false);
    setJoke(randomJoke.value);
    return;
  };
  return (
    <AppLayout>
      <h1 className="text-center font-bold text-2xl">
        Brinque com piadas aleatórias sobre o Chuck Norris!
      </h1>
      <section className="flex-1 mt-8 flex flex-col gap-8 items-center">
        <Button text="Gere uma piada aleatória" onClick={handleAxios} />
        <div className="flex items-center justify-center w-full">
          {joke && <CardJoke text={joke} />}
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
