import React from "react";
import Header from "../components/Header";

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IAppLayout) => {
  return (
    <div className="w-full h-screen flex flex-col text-gray-200">
      <Header />
      <main className="bg-gray-900 flex-1 py-4 px-4 md:px-8 flex flex-col">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
