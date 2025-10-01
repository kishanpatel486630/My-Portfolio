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
  // const [activeSection, setActiveSection] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionElements = navLinks
      .map((nav) => document.getElementById(nav.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sectionElements.length === 0) return;

    let observer: IntersectionObserver | null = null;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries
        .filter(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0.3
        )
        .map((entry) => entry.target.id);
      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[visibleSections.length - 1]);
      } else {
        setActiveSection(""); // No section in view
      }
    };

    observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-100px 0px 0px 0px", // Offset for navbar height
      threshold: [0.3],
    });
    sectionElements.forEach((el) => observer!.observe(el));

    return () => {
      if (observer) {
        sectionElements.forEach((el) => observer!.unobserve(el));
        observer.disconnect();
      }
    };
  }, [navLinks]);
  return (
    <>
      <nav
        className={`green-pink-gradient shadow-card fixed top-5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-between p-[2px] w-full max-w-[1150px] h-[80px] rounded-[40px] transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-32"
        }`}
        style={{ pointerEvents: showNavbar ? "auto" : "none" }}
      >
        <div className="bg-tertiary flex w-full items-center justify-end gap-4 sm:gap-8 rounded-[36px] px-4 sm:px-8 py-4 h-full">
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
              if (toggle) setToggle(false);
            }}
          >
            <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
            <p className="cursor-pointer text-[20px] font-extrabold text-white tracking-wide whitespace-nowrap">
              {config.html.title}
            </p>
          </a>

          <ul className="hidden sm:flex list-none flex-row gap-4 sm:gap-6 justify-end items-center w-full">
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
                      // Wait for scroll to finish before highlighting
                      setTimeout(() => {
                        const rect = section.getBoundingClientRect();
                        if (
                          rect.top >= 0 &&
                          rect.bottom <= window.innerHeight
                        ) {
                          setActiveSection(nav.id);
                        }
                      }, 500);
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
              className="h-[32px] w-[32px] object-contain cursor-pointer"
              onClick={() => setToggle(true)}
            />

            {/* Side Drawer Menu */}
            <div
              className={`fixed top-0 right-0 h-screen w-[80vw] max-w-[350px] z-50 bg-tertiary shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
                toggle ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                borderTopLeftRadius: "2rem",
                borderBottomLeftRadius: "2rem",
              }}
            >
              {/* Close Button */}
              <button
                className="self-end m-4 text-white text-3xl font-bold focus:outline-none"
                aria-label="Close menu"
                onClick={() => setToggle(false)}
              >
                &times;
              </button>
              <ul className="flex flex-col flex-1 items-center justify-center gap-6 mt-2">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`w-full text-center ${
                      activeSection === nav.id ? "text-white" : "text-secondary"
                    } font-poppins cursor-pointer text-[2rem] font-bold transition-all duration-200 hover:text-white hover:scale-105 py-3 rounded-lg`}
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById(nav.id);
                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                        setActiveSection(nav.id);
                      }
                      setToggle(false);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                {/* Resume Button for mobile */}
                <li className="w-full mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setResumeOpen(true);
                      setToggle(false);
                    }}
                    className="green-pink-gradient shadow-card rounded-[20px] p-[2px] w-full cursor-pointer"
                  >
                    <div className="bg-tertiary flex items-center justify-center rounded-[18px] w-full h-full px-6 py-3">
                      <span className="text-white font-bold text-[1.3rem]">
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
