import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PageTitle from "../../components/PageTitle";
import Select from "../../components/Select";
import AppLayout from "../../layouts/AppLayout";
import { getCategoryList } from "../../services/httpService";

const SearchOne = () => {
  const mockCategories = ["animal", "dev", "career"];
  const [categories, setCategories] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [categoryChoosed, setCategoryChoosed] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const getAllCategories = async () => {
      const categoryList = await getCategoryList();
      if (!categoryList) {
        setCategories([]);
        setError(true);
        return;
      }
      setError(false);
      setCategories([...categoryList]);
    };
    getAllCategories();
  }, []);

  return (
    <AppLayout>
      <PageTitle title="Pesquise por uma palavra ou categoria!" />
      <section className="flex-1 flex mt-8 flex-col">
        <form className="flex flex-col gap-8 items-center">
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
