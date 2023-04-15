import React from "react";
import Link from "next/link";
import "./Navigation.scss";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "dashboard",
    route: "/dashboard",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.route}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
