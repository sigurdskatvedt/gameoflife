import Image from "next/image";
import { Navbar } from "flowbite-react";
import logo from "./images/icon.png";

export const UiNavbar = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand>
        <Image
          src={logo}
          className="mr-3 h-12 w-12 sm:h-12 sm:w-12"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Game of Life
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
