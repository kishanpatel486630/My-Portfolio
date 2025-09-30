import { useEffect, useState } from "react";
// Removed Link import to prevent router navigation for logo

import { navLinks } from "../../constants";
import ResumeModal from "../sections/ResumeModal";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

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

  // Track active section for highlighting
  const [activeSection, setActiveSection] = useState<string>(navLinks[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((nav) => document.getElementById(nav.id));
      const scrollY = window.scrollY + 120; // Offset for navbar height
      let currentSection = navLinks[0].id;
      for (const section of sections) {
        if (section && section.offsetTop <= scrollY) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`green-pink-gradient shadow-card fixed top-5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-between p-[2px] w-[1150px] h-[80px] rounded-[40px] transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-32"
        }`}
        style={{ pointerEvents: showNavbar ? "auto" : "none" }}
      >
        <div className="bg-tertiary flex w-full items-center justify-end gap-8 rounded-[36px] px-8 py-4 h-full">
          <a
            href="#about"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("about");
              if (section) {
                window.scrollTo({
                  top: section.offsetTop - 120,
                  behavior: "smooth",
                });
                setActiveSection("about");
              }
            }}
          >
            <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
            <p className="cursor-pointer text-[20px] font-extrabold text-white tracking-wide whitespace-nowrap">
              {config.html.title}
            </p>
          </a>

          <ul className="hidden list-none flex-row gap-6 sm:flex justify-end items-center w-full">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  activeSection === nav.id ? "text-white" : "text-secondary"
                } cursor-pointer text-[16px] font-bold transition-all duration-200 hover:text-white hover:scale-105 px-2 py-1 rounded-lg`}
              >
                <a
                  href={`#${nav.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById(nav.id);
                    if (section) {
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      setTimeout(() => setActiveSection(nav.id), 400);
                    }
                  }}
                >
                  {nav.title}
                </a>
              </li>
            ))}
            {/* Resume Button */}
            <li>
              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="green-pink-gradient shadow-card rounded-[16px] p-[2px] cursor-pointer ml-4"
                style={{ display: "inline-block" }}
              >
                <div className="bg-tertiary flex items-center justify-center rounded-[16px] px-6 py-2">
                  <span className="text-white font-bold text-[16px]">
                    Resume
                  </span>
                </div>
              </button>
            </li>
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
                    className={`${
                      activeSection === nav.id ? "text-white" : "text-secondary"
                    } font-poppins cursor-pointer text-[20px] font-bold transition-all duration-200 hover:text-white hover:scale-105 px-2 py-1 rounded-lg`}
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById(nav.id);
                      if (section) {
                        window.scrollTo({
                          top: section.offsetTop - 120,
                          behavior: "smooth",
                        });
                        setActiveSection(nav.id);
                      }
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                {/* Resume Button for mobile */}
                <li>
                  <button
                    type="button"
                    onClick={() => setResumeOpen(true)}
                    className="green-pink-gradient shadow-card rounded-[20px] p-[2px] border-2 border-transparent bg-clip-padding cursor-pointer"
                    style={{
                      display: "inline-block",
                      border: "none",
                      background: "none",
                      width: "180px",
                      height: "56px",
                    }}
                  >
                    <div className="bg-tertiary flex items-center justify-center rounded-[18px] w-full h-full">
                      <span className="text-white font-bold text-[18px]">
                        Resume
                      </span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Resume Modal Popup */}
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
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
