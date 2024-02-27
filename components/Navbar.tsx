// Navbar Component
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";
import { Link } from "react-scroll/modules";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "اكتشف الفرص",
    page: "ProjectsSection",
  },
  {
    label: "تواصل معنا",
    page: "about",
  },
  {
    label: "اشترك",
    page: "SubmitPage",
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(currentTheme || "dark");
  }, [currentTheme]);

  const handleNavigate = (page: string) => {
    if (page === "ProjectsSection") {
      // Scroll to the "projects" section when clicking "اكتشف الفرص"
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Redirect to the specified page for other menu items
      window.location.href = `/${page}`;
      setNavbar(false);
    }
  };

  return (
    <header
      className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow ${
        currentTheme === "dark"
          ? "bg-stone-900 dark:border-b dark:border-stone-600"
          : "bg-white"
      }`}
    >
      <div className="h-16 md:h-20 justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="container flex items-center space-x-2 mt-10">
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`${
                    currentTheme === "dark" ? "text-white" : "text-neutral-900"
                  } block lg:inline-block hover:text-neutral-500 cursor-pointer`}
                  onClick={() => handleNavigate(item.page)}
                >
                  {item.label}
                </Link>
              ))}

              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
