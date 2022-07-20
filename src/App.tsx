import React from "react";
import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col text-gray-200">
      <Header />
      <main className="bg-gray-900 flex-1 py-4 px-4 md:px-8 flex flex-col">
        <h1 className="text-center font-bold text-2xl">
          Brinque com piadas sobre o Chuck Norris!
        </h1>
        <section className="flex-1 mt-4 flex flex-col items-center">
          <Button
            text="Gere uma piada aleatória"
            onClick={() => console.log("cliquei!")}
          />
          <p>valdery</p>
        </section>
      </main>
    </div>
  );
};

export default App;
