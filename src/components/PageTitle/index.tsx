import React from "react";

interface IPageTitle {
  title: string;
}

const PageTitle = ({ title }: IPageTitle) => {
  return <h1 className="text-center font-bold text-2xl">{title}</h1>;
};

export default PageTitle;
