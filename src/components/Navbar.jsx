import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import Logo from "../assets/company_logo.png";
import ResponsiveMenu from "./ResponsiveMenu";

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Services",
    link: "/#services",
  },
  {
    id: 4,
    name: "Portfolio",
    link: "/#portfolio",
  },
  {
    id: 5,
    name: "Careers",
    link: "/#careers",
  },
  {
    id: 6,
    name: "Contact",
    link: "/#contact",
  },
  {
    id: 7,
    name: "FAQs",
    link: "/#faqs",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="container mx-auto mt-5 px-4 md:px-8 w-full">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "backdrop-blur-lg bg-white/50" : "bg-gray-100"
          } rounded-full px-4 py-2 w-full`}
        >
          {/* Logo section */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2">
              <img src={Logo} alt="Saas Logo" className="w-[60px] h-[60px]" />
              <div className="hidden md:block">
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-[#F3C709]">
                    Make Engineers
                  </span>
                  <span className="text-lg font-semibold text-black">
                    Life Easy
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Navigation in the center */}
          <nav className="hidden md:flex justify-center flex-1">
            <ul className="flex items-center gap-6">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-2">
                  <a
                    href={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Button and dark mode on the right */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-[#001E80]  transition-all duration-150"
              onClick={() => window.open("", "_blank")}
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 md:hidden">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggle={toggleMenu} />
    </div>
  );
};

export default Navbar;
