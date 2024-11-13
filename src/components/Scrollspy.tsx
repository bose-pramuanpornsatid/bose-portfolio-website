import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const sections = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Tech", id: "tech" },
  { name: "Contact", id: "contact" },
];

const Scrollspy = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = 100 - (scrollPosition / windowHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-24 right-4 z-50 bg-opacity-50 bg-slate-700 p-4 rounded">
      <div className="flex flex-col items-center">
        {sections.map((section) => (
          <div className="relative group mb-2" key={section.id}>
            {/* Section indicator line */}
            <div
              className={`h-1 bg-gray-400 group-hover:bg-blue-500 transition-all duration-300 ${
                activeSection === section.id ? "w-12 bg-blue-500" : "w-8"
              }`}
            ></div>
            {/* Section text (hidden by default, visible on hover) */}
            <Link
              activeClass="active"
              to={section.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-blue-500 text-right absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onSetActive={() => setActiveSection(section.id)}
            >
              {section.name}
            </Link>
          </div>
        ))}
        {/* <div className="w-1 bg-gray-300 h-48 relative mt-2">
          <div
            className="bg-blue-500 w-1 absolute bottom-0"
            style={{ height: `${scrollProgress}%` }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Scrollspy;
