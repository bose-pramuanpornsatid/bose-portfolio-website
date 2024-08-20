// Scrollspy.js
import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const sections = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Tech", id: "tech" },
  { name: "Contact", id: "contact" },
];

const Scrollspy = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = 100 - (scrollPosition / windowHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-24 right-4 z-50 bg-opacity-50 bg-slate-700">
      <div className="flex flex-row items-center">
        <div className="flex flex-col px-2">
            {sections.map((section) => (
            <Link
                key={section.id}
                activeClass="active text-red-500"
                to={section.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer text-gray-700 hover:text-blue-500 text-right"
            >
                {section.name}
            </Link>
            ))}
        </div>
        <div className="w-1 bg-gray-300 h-48 relative">
          <div
            className="bg-blue-500 w-1 absolute bottom-0"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Scrollspy;
