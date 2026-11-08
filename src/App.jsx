import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {

  ArrowDown,

  ArrowUpRight,

  Menu,

  X,

  Code2,

  Layers3,

  Palette,

  Sparkles,

  Sun,

  Moon,

} from "lucide-react";



const projects = [

  {

    number: "01",

    name: "Motion",

    category: "MOVIE DISCOVERY PLATFORM",

    description:

      "A movie discovery platform designed to make exploring films and television more intuitive.",

    technologies: ["React", "Tailwind CSS", "TMDB API"],

    type: "motion",

    year: "2026",

  },

  {

    number: "02",

    name: "TrackPoint",

    category: "DEVICE TRACKING PLATFORM",

    description:

      "A location-sharing platform for registering devices and managing opted-in location updates.",

    technologies: ["React", "Leaflet", "JavaScript"],

    type: "trackpoint",

    year: "2026",

  },

 {

  number: "03",

  name: "Nairobi Elite Cleaners",

  category: "CLEANING SERVICES WEBSITE",

  description:

    "A responsive business website showcasing professional cleaning services and making it easier for customers to send enquiries through WhatsApp.",

  technologies: ["HTML", "CSS", "JavaScript"],

  type: "cleaners",

  year: "2026",

},

];


function Footer() {

  return (

    <footer className="py-8 border-t border-white/10">

      <div className="container-width flex flex-col sm:flex-row justify-between items-center gap-6">



        <a href="#home" className="font-heading font-bold text-xl">

          PO<span className="accent">.</span>

        </a>



        <p className="text-xs text-gray-500">

          © {new Date().getFullYear()} Philip Otieno Okoth.

        </p>



        <div className="flex items-center gap-5 text-gray-400">

          <a

            href="https://github.com/philipagak-afk"

            target="_blank"

            rel="noreferrer"

            aria-label="GitHub"

            className="hover:text-[#a8b5ff] transition"

          >

            GitHub

          </a>



          <a

            href="https://www.linkedin.com/in/philip-okoth-513411355"

            target="_blank"

            rel="noreferrer"

            aria-label="LinkedIn"

            className="hover:text-[#a8b5ff] transition"

          >

            LinkedIn

          </a>



          <a

            href="mailto:philipagak@gmail.com"

            aria-label="Email"

            className="hover:text-[#a8b5ff] transition"

          >

            Email

          </a>

        </div>



      </div>

    </footer>

  );

}



function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode((currentMode) => !currentMode);
  };

  return (
    <div className={isLightMode ? "light-mode" : "dark-mode"}>
      <Navbar
        isLightMode={isLightMode}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <Projects />
        <About />
        <Expertise />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
