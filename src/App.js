// import './App.css';
import React, { useEffect, useState } from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Works from "./Components/Works";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        onClick={handleThemeSwitch}
        type="button"
        className="fixed z-10 right-4 top-2 bg-indigo-500 p-1 rounded-md"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      <div className="bg-white dark:bg-slate-900">
        <div className="max-w-5xl m-auto w-11/12">
          <HeroSection />
          <Services />
          <Works/>
          <About/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
