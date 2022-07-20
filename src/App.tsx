import React, { useState } from "react";
import Button from "./components/Button";
import CardJoke from "./components/CardJoke";
import Header from "./components/Header";
import { getARandomJoke } from "./services/httpService";

const App = () => {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState("");
  const handleAxios = async () => {
    const randomJoke = await getARandomJoke();
    if (!randomJoke) {
      setJoke("");
      setError("Ocorreu um erro interno.");
      return;
    }
    setError("");
    setJoke(randomJoke.value);
    return;
  };
  return (
    <div className="w-full h-screen flex flex-col text-gray-200">
      <Header />
      <main className="bg-gray-900 flex-1 py-4 px-4 md:px-8 flex flex-col">
        <h1 className="text-center font-bold text-2xl">
          Brinque com piadas sobre o Chuck Norris!
        </h1>
        <section className="flex-1 mt-4 flex flex-col gap-8 items-center">
          <Button text="Gere uma piada aleatória" onClick={handleAxios} />
          <div className="flex items-center justify-center w-full">
            {joke && <CardJoke text={joke} />}
            {error && <p className="my-4 text-red-600">{error}</p>}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
