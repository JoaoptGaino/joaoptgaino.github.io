import Link from "next/link";
import { useEffect, useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import SocialMediaComponent from "./items/SocialMediaComponent";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(storedTheme === "dark" || (!storedTheme && prefersDark) ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-white/95 backdrop-blur dark:bg-[#0b0f14]/95 dark:shadow-black/40"
          : "fixed w-full h-20 z-[100] bg-white/90 backdrop-blur dark:bg-[#0b0f14]/90"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link
          href="/"
          className="flex flex-col leading-none text-slate-900 dark:text-white"
          aria-label="Go to home"
        >
          <span className="text-lg font-extrabold tracking-normal">
            João Gaino
          </span>
          <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-green-400">
            Backend Engineer
          </span>
        </Link>
        <div>
          <ul className="hidden md:flex items-center text-slate-800 dark:text-slate-100">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#experience">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Experience
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <li className="ml-8 cursor-default">
              <button
                type="button"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                className="p-3 rounded-full surface-card text-slate-800 dark:text-slate-100"
                onClick={toggleTheme}
              >
                {theme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
              </button>
            </li>
          </ul>
          <div className="md:hidden flex items-center gap-3 text-slate-900 dark:text-white">
            <button
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="p-3 rounded-full surface-card text-slate-800 dark:text-slate-100"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
            </button>
            <button
              type="button"
              aria-label="Open navigation menu"
              className="bg-transparent text-slate-900 dark:text-white"
              onClick={handleNav}
            >
              <AiOutlineMenu size={25} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500 dark:bg-slate-950 dark:text-white"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link
                href="/"
                className="flex flex-col leading-none text-slate-900 dark:text-white"
                aria-label="Go to home"
                onClick={handleNav}
              >
                <span className="text-lg font-extrabold tracking-normal">
                  João Gaino
                </span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-green-400">
                  Backend Engineer
                </span>
              </Link>
              <button
                type="button"
                aria-label="Close navigation menu"
                className="rounded-full surface-card p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something useful
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#experience">
                <li className="py-4 text-sm">Experience</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-emerald-600 font-bold dark:text-green-400">
                Let&apos;s connect
              </p>
              <SocialMediaComponent
                containerStyle="flex items-center justify-between my-4 w-full sm:w-[80%]"
                iconStyle="rounded-full surface-card p-3 cursor-pointer hover:scale-105 ease-in duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
