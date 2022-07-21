import React, { useEffect, useState } from "react";
import CardJoke from "../../components/CardJoke";
import PageTitle from "../../components/PageTitle";
import { useAppContext } from "../../hooks/useAppContext";
import AppLayout from "../../layouts/AppLayout";

const MyFavorites = () => {
  const [error, setError] = useState(false);
  const { myJokes } = useAppContext();
  useEffect(() => {
    myJokes.length > 0 ? "" : setError(true);
  }, []);
  return (
    <AppLayout>
      <PageTitle title="Estas são suas piadas favoritas" />
      {error && (
        <>
          <p className="text-2xl mt-8 text-red-600 font-bold text-center">
            Infelizmente você ainda não escolheu nenhuma piada.
          </p>
          <p className="text-xl mt-2 text-red-600 font-bold text-center">
            Chuck Norris disapproved!
          </p>
        </>
      )}
      <div className="grid grid-cols-3 gap-y-8 p-2 justify-items-center">
        {myJokes.length > 0 &&
          myJokes.map((joke) => (
            <CardJoke
              key={joke.id}
              id={joke.id}
              createdAt={joke.createdAt}
              text={joke.text}
            />
          ))}
      </div>
    </AppLayout>
  );
};

export default MyFavorites;
