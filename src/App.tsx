import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col text-gray-50">
      <Header />
      <main className="bg-gray-900 flex-1"></main>
    </div>
  );
};

export default App;
