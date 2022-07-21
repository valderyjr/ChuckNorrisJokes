import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PageTitle from "../../components/PageTitle";
import Select from "../../components/Select";
import AppLayout from "../../layouts/AppLayout";

const SearchOne = () => {
  const mockCategories = ["animal", "dev", "career"];
  const [categories, setCategories] = useState<string[]>(mockCategories);
  const [input, setInput] = useState("");
  const [categoryChoosed, setCategoryChoosed] = useState("");

  useEffect(() => {
    console.log("mudei!");
    console.log(categoryChoosed);
  }, [categoryChoosed]);

  return (
    <AppLayout>
      <PageTitle title="Pesquise por uma palavra ou categoria!" />
      <section className="flex-1 flex mt-8 flex-col">
        <form className="flex flex-col gap-8">
          <Input
            value={input}
            handleInput={setInput}
            placeholder="Insira um nome."
          />
          <Select
            name="categories"
            optionList={categories}
            handleSelect={setCategoryChoosed}
          />
          <Button type="submit" text="Pesquisar" />
        </form>
      </section>
    </AppLayout>
  );
};

export default SearchOne;
