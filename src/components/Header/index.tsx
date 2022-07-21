import React from "react";
import logoChuck from "../../assets/chucknorris.png";
import { Link } from "react-router-dom";

interface ILinksHeaderNav {
  name: string;
  slug: string;
  to: string;
}

const Header = () => {
  const linksNav: ILinksHeaderNav[] = [
    {
      name: "Buscar uma",
      slug: "search-one",
      to: "/search",
    },
    {
      name: "Ver minhas piadas",
      slug: "see-my-jokes",
      to: "/me",
    },
  ];
  return (
    <header className="w-full bg-gray-800 h-32 flex flex-col justify-center gap-4 px-4 md:px-8 md:flex-row md:justify-between md:items-center">
      <Link to="/" className="h-1/2 w-fit mx-auto md:h-full md:mx-0">
        <img
          src={logoChuck}
          alt="Logo do Chuck Norris."
          className="w-full h-full"
        />
      </Link>
      <nav>
        <ul className="flex gap-5 justify-center">
          {linksNav.map((link) => (
            <li className="font-semibold hover:text-gray-50" key={link.slug}>
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
