import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Replace with your actual resume URL
  const resumeLink = "https://drive.google.com/file/d/1l8afgxSJ35Z8h-h7bQgunuFwh6mGNW43/view?usp=sharing";

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Prashant Kushwaha&nbsp;
            <span className='sm:block hidden'> | Flutter Developer</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              {nav.id === "resume" ? (
                <a
                  href={resumeLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                </a>
              ) : (
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                >
                  {nav.id === "resume" ? (
                    <a
                      href={resumeLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      onClick={() => {
                        setActive(nav.title);
                        setToggle(false);
                      }}
                    >
                      {nav.title}
                    </a>
                  ) : (
                    <a
                      href={`#${nav.id}`}
                      onClick={() => {
                        setActive(nav.title);
                        setToggle(false);
                      }}
                    >
                      {nav.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
