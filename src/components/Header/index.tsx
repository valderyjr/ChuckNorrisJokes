import React from "react";
import logoChuck from "../../assets/chucknorris.png";

interface ILinksHeaderNav {
  name: string;
  slug: string;
  to: string;
}

const Header = () => {
  const linksNav: ILinksHeaderNav[] = [
    {
      name: "Search one",
      slug: "search-one",
      to: "/search",
    },
    {
      name: "See my facts",
      slug: "see-my-facts",
      to: "/me",
    },
  ];
  return (
    <header className="w-full bg-gray-800 h-32 flex flex-col justify-center gap-4 px-4 md:px-8 md:flex-row md:justify-between md:items-center">
      <a href="#" className="h-1/2 w-fit mx-auto md:h-full md:mx-0">
        <img
          src={logoChuck}
          alt="Logo do Chuck Norris."
          className="w-full h-full"
        />
      </a>
      <nav>
        <ul className="flex gap-5 justify-center">
          {linksNav.map((link) => (
            <li className="font-semibold hover:text-gray-50" key={link.slug}>
              <a href={link.to}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
