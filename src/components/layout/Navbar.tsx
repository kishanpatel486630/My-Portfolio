import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollY && scrollTop > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`green-pink-gradient shadow-card fixed top-5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-between p-[2px] w-[1000px] h-[80px] rounded-[40px] transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-32"
        }`}
        style={{ pointerEvents: showNavbar ? "auto" : "none" }}
      >
        <div className="bg-tertiary flex w-full items-center justify-between rounded-[36px] px-8 py-4 h-full">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
            <p className="flex cursor-pointer text-[20px] font-extrabold text-white tracking-wide">
              {config.html.title}
            </p>
          </Link>

          <ul className="hidden list-none flex-row gap-6 sm:flex">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`$
                  active === nav.id ? "text-white" : "text-secondary"
                } cursor-pointer text-[16px] font-bold transition-all duration-200 hover:text-white hover:scale-105 px-2 py-1 rounded-lg`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="flex flex-1 items-center justify-end sm:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-[28px] w-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`$
                !toggle ? "hidden" : "flex"
              } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
            >
              <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins cursor-pointer text-[20px] font-bold transition-all duration-200 $
                      active === nav.id ? "text-white" : "text-secondary"
                    } hover:text-white hover:scale-105 px-2 py-1 rounded-lg`}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Scroll to top button */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          right: "2rem",
          bottom: "2rem",
          zIndex: 100,
          background: "#151030cc",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          cursor: "pointer",
          fontSize: "1.3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s",
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
};

export default Navbar;
