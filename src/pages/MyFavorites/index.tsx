import React from "react";
import CardJoke from "../../components/CardJoke";
import PageTitle from "../../components/PageTitle";
import { useAppContext } from "../../hooks/useAppContext";
import AppLayout from "../../layouts/AppLayout";

const MyFavorites = () => {
  const { myJokes } = useAppContext();
  return (
    <AppLayout>
      <PageTitle title="Estas são suas piadas favoritas" />
      <div className="mt-8 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 gap-y-8 p-2 justify-items-center">
        {myJokes.length > 0 ? (
          myJokes.map((joke) => (
            <CardJoke
              key={joke.id}
              id={joke.id}
              createdAt={joke.createdAt}
              text={joke.text}
            />
          ))
        ) : (
          <div className="flex flex-col sm:col-span-2 md:col-span-3 gap-8">
            <h4 className="text-xl sm:text-2xl text-red-600 font-bold text-center">
              Infelizmente você ainda não escolheu nenhuma piada.
            </h4>
            <h6 className="block text-base sm:text-xl text-red-600 font-bold text-center">
              Chuck Norris disapproved!
            </h6>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default MyFavorites;
