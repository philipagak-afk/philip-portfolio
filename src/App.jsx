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
  sun,
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

const skills = [
  {
    number: "01",
    icon: Code2,
    title: "Development",
    description:
      "Building responsive interfaces and functional web experiences.",
    items: ["HTML & CSS", "JavaScript", "React", "Tailwind CSS", "Git & GitHub"],
  },
  {
    number: "02",
    icon: Layers3,
    title: "Product thinking",
    description:
      "Understanding problems, users and the bigger picture behind products.",
    items: ["Product strategy", "User research", "Product roadmaps", "Agile & Scrum"],
  },
  {
    number: "03",
    icon: Palette,
    title: "Visual design",
    description:
      "Creating visual identities and communicating ideas through design.",
    items: ["Graphic design", "Visual communication", "Branding", "Layout design"],
  },
];

function Navbar({isLightMode,onToggleTheme}){
  const [menuOpen, setMenuOpen] = useState(false);

  <button
  onClick={onToggleTheme}
  aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
  className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-2.5 text-sm hover:bg-white/10 transition-all"
>
  {isLightMode ? <Moon size={17} /> : <Sun size={17} />}
  <span>{isLightMode ? "Dark mode" : "Light mode"}</span>
</button>

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#101010]/90 backdrop-blur-xl border-b border-white/[0.08]">
      <nav className="container-width h-[76px] flex items-center justify-between">

        <a href="#home" className="font-heading text-2xl font-bold tracking-tight">
          PO<span className="accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#999] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 text-sm font-medium border border-white/20 rounded-full px-5 py-2.5 hover:bg-[#a8b5ff] hover:text-black hover:border-[#a8b5ff] transition-all"
        >
          Let's talk <ArrowUpRight size={15} />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#151515] border-t border-white/10"
          >
            <div className="container-width py-5 flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-gray-300 hover:text-[#a8b5ff]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Portrait() {
  return (
    <div className="relative w-full max-w-[410px] mx-auto">
      <div className="absolute -inset-5 hero-glow blur-2xl" />

      <div className="relative aspect-[4/5] rounded-t-[180px] rounded-b-2xl overflow-hidden border border-white/10 bg-[#202126]">

        {/* Add your portrait at public/images/philip.jpg */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-[140px] font-bold text-white/[0.06]">
            PO
          </span>
        </div>

        <img
          src="/images/philip.jpg"
          alt="Portrait of Philip Otieno Okoth"
          className="relative z-10 w-full h-full object-cover object-center"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-5 left-5 z-20">
          <p className="text-xs tracking-[0.2em] text-white/60">
            THE PERSON BEHIND THE PIXELS
          </p>
          <p className="font-heading text-xl font-semibold mt-1">
            Philip Okoth
          </p>
        </div>

      </div>

      <div className="absolute -right-4 top-16 bg-[#a8b5ff] text-[#101010] p-4 rounded-full shadow-xl">
        <Sparkles size={22} />
      </div>

      <div className="absolute -left-8 bottom-20 bg-[#1b1b1b] border border-white/10 rounded-xl p-4 shadow-2xl">
        <p className="text-[10px] tracking-widest text-gray-500">
          CURRENTLY
        </p>
        <p className="text-sm font-medium mt-1">
          Building & learning.
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-20 overflow-hidden grain"
    >
      <div className="container-width grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-16">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="flex items-center gap-3 mb-9">
            <span className="w-2 h-2 rounded-full bg-[#a8b5ff]" />
            <p className="text-xs sm:text-sm tracking-[0.18em] text-gray-400">
              INDEPENDENT DEVELOPER & CREATIVE
            </p>
          </div>

          <h1 className="font-heading text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.98] tracking-[-0.065em]">
            Making
            <br />
            ideas
            <br />
            <span className="accent">work.</span>
          </h1>

          <div className="mt-10 max-w-[530px]">
            <p className="text-gray-400 text-base sm:text-lg leading-[1.9]">
              I'm <span className="text-white">Philip Otieno Okoth</span>,
              a software developer interested in building useful digital
              products, understanding the people behind them and creating
              thoughtful visual experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 mt-9">
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-[#a8b5ff] text-[#101010] px-6 py-4 rounded-full text-sm font-semibold hover:bg-white transition-colors"
            >
              Explore my work <ArrowUpRight size={17} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              More about me <ArrowDown size={15} />
            </a>
          </div>

          <div className="mt-16 pt-6 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <p className="text-xs text-gray-600 tracking-widest">BASED IN</p>
              <p className="text-sm text-gray-300 mt-2">Nairobi, Kenya</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 tracking-widest">FOCUS</p>
              <p className="text-sm text-gray-300 mt-2">Digital experiences</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 tracking-widest">APPROACH</p>
              <p className="text-sm text-gray-300 mt-2">Learn. Build. Improve.</p>
            </div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Portrait />
        </motion.div>

      </div>
    </section>
  );
}

function ProjectVisual({ type }) {
  if (type === "motion") {
    return (
      <div className="project-visual h-full min-h-[270px] bg-[#181b24] p-5 sm:p-8 flex flex-col justify-between overflow-hidden">
        <div className="flex justify-between items-center">
          <span className="font-heading text-lg font-bold tracking-tight">
            motion<span className="text-[#a8b5ff]">.</span>
          </span>
          <span className="text-[10px] text-gray-500 tracking-widest">
            DISCOVER SOMETHING NEW
          </span>
        </div>

        <div className="relative grid grid-cols-3 gap-3 items-center">
          <div className="absolute inset-0 bg-[#a8b5ff]/10 blur-3xl" />
          <div className="relative aspect-[3/4] rounded-lg bg-gradient-to-br from-[#8b536e] to-[#211c36] p-3 flex items-end">
            <span className="text-xs font-bold">01</span>
          </div>
          <div className="relative aspect-[3/4] rounded-lg bg-gradient-to-br from-[#b17b43] to-[#29202c] p-3 flex items-end -translate-y-5">
            <span className="text-xs font-bold">02</span>
          </div>
          <div className="relative aspect-[3/4] rounded-lg bg-gradient-to-br from-[#497b80] to-[#202635] p-3 flex items-end">
            <span className="text-xs font-bold">03</span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] text-gray-500 tracking-widest">YOUR NEXT WATCH</p>
            <p className="text-sm font-medium mt-1">Explore. Discover. Enjoy.</p>
          </div>
          <ArrowUpRight size={22} className="text-[#a8b5ff]" />
        </div>
      </div>
    );
  }

  if (type === "trackpoint") {
    return (
      <div className="project-visual h-full min-h-[270px] bg-[#17201e] p-5 sm:p-8 flex flex-col justify-between overflow-hidden">
        <div className="flex justify-between">
          <span className="font-heading font-bold text-lg">
            Track<span className="text-[#8ac9ad]">Point</span>
          </span>
          <span className="text-[10px] text-gray-500">DEVICE OVERVIEW</span>
        </div>

        <div className="relative bg-[#1e2c28] border border-white/10 rounded-xl p-4">
          <div className="flex justify-between items-center mb-5">
            <span className="text-xs text-gray-400">Location activity</span>
            <span className="text-[10px] text-[#8ac9ad]">LIVE DEMO</span>
          </div>

          <div className="relative h-28 rounded-lg overflow-hidden bg-[#263a34]">
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(35deg, transparent 45%, #8ac9ad 46%, transparent 47%), linear-gradient(145deg, transparent 45%, #8ac9ad 46%, transparent 47%)",
                backgroundSize: "55px 55px",
              }}
            />
            <div className="absolute left-[25%] top-[35%] w-3 h-3 rounded-full bg-[#8ac9ad] ring-8 ring-[#8ac9ad]/20" />
            <div className="absolute right-[25%] bottom-[25%] w-3 h-3 rounded-full bg-white ring-8 ring-white/20" />
          </div>

          <div className="flex justify-between mt-4 text-xs">
            <span className="text-gray-400">Registered devices</span>
            <span className="text-white">Device management</span>
          </div>
        </div>

        <p className="text-xs text-gray-500">A connected world, made manageable.</p>
      </div>
    );
  }

  if (type === "cleaners") {
  return (
    <div className="project-visual h-full min-h-[270px] bg-[#101c2b] p-5 sm:p-8 flex flex-col justify-between overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="font-heading text-lg font-bold">
          NAIROBI <span className="text-[#60a5fa]">ELITE</span>
        </span>

        <span className="text-[10px] tracking-widest text-gray-400">
          CLEANING SERVICES
        </span>
      </div>

      {/* Main content */}
      <div className="relative bg-[#172b42] border border-white/10 rounded-xl p-6 sm:p-8">

        <p className="text-xs text-blue-300 tracking-widest">
          PROFESSIONAL CLEANING
        </p>

        <h3 className="font-heading text-3xl sm:text-4xl font-semibold mt-3">
          A cleaner space.
          <br />
          A better feeling.
        </h3>

        <p className="text-xs text-gray-400 mt-4">
          Reliable cleaning solutions for your space.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 bg-blue-500 text-white text-xs font-semibold px-4 py-3 rounded-full">
          Get in touch
          <ArrowUpRight size={15} />
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between text-xs text-gray-400">
        <span>Nairobi · Kiambu · Thika</span>
        <span>ELITE CLEANING</span>
      </div>

        </div>
  );
  }
} // Closes ProjectVisual

function Projects() {
  return (
    <section id="work" className="py-28 section-line">
      <div className="container-width">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-14">
          <div>
            <p className="text-xs tracking-[0.2em] text-gray-500 mb-4">
              01 / SELECTED WORK
            </p>
            <h2 className="font-heading text-5xl sm:text-6xl font-semibold tracking-tight">
              Things I've <span className="accent">built.</span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            A selection of projects, experiments and ideas brought to life
            through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`project-card border border-white/10 rounded-2xl overflow-hidden bg-[#151515] ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden ${
                index === 0 ? "h-[300px] sm:h-[390px]" : "h-[280px]"
              }`}>
                <ProjectVisual type={project.type} />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-xs tracking-widest text-gray-500">
                    {project.number} / {project.category}
                  </span>
                  <span className="text-xs text-gray-600">{project.year}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5">
                  <div className="max-w-xl">
                    <h3 className="font-heading text-3xl sm:text-4xl font-semibold">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mt-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] text-gray-300 border border-white/10 rounded-full px-3 py-1.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="w-11 h-11 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-[#a8b5ff]">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 section-line">
      <div className="container-width grid lg:grid-cols-[0.7fr_1.3fr] gap-14">

        <div>
          <p className="text-xs tracking-[0.2em] text-gray-500 mb-5">
            02 / THE PERSON
          </p>
          <h2 className="font-heading text-5xl font-semibold tracking-tight">
            Beyond the <span className="accent">code.</span>
          </h2>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-heading leading-relaxed text-gray-200">
            I enjoy the process of turning an idea into something people can
            actually use.
          </p>

          <p className="text-gray-400 leading-[2] mt-7">
            My journey sits at the intersection of software development,
            product thinking and graphic design. I enjoy understanding how
            things work, exploring how people interact with digital products
            and finding better ways to bring ideas to life.
          </p>

          <p className="text-gray-400 leading-[2] mt-5">
            I'm continuously improving my technical skills, experimenting
            with new ideas and building projects that challenge me to think
            beyond just writing code.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-7 mt-12 pt-8 border-t border-white/10">
            <div>
              <p className="font-heading text-xl font-semibold">Curious</p>
              <p className="text-xs text-gray-500 mt-2">Always exploring</p>
            </div>
            <div>
              <p className="font-heading text-xl font-semibold">Creative</p>
              <p className="text-xs text-gray-500 mt-2">Thinking visually</p>
            </div>
            <div>
              <p className="font-heading text-xl font-semibold">Practical</p>
              <p className="text-xs text-gray-500 mt-2">Building with purpose</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="py-28 section-line">
      <div className="container-width">

        <div className="mb-14">
          <p className="text-xs tracking-[0.2em] text-gray-500 mb-4">
            03 / WHAT I BRING
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl font-semibold tracking-tight">
            Areas of <span className="accent">focus.</span>
          </h2>
        </div>

        <div>
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.number}
                className="grid md:grid-cols-[80px_1fr_1fr] gap-6 py-9 border-t border-white/10"
              >
                <span className="text-sm text-gray-600">{skill.number}</span>

                <div>
                  <Icon size={25} className="text-[#a8b5ff] mb-5" />
                  <h3 className="font-heading text-3xl font-medium">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-sm mt-3">
                    {skill.description}
                  </p>
                </div>

                <div className="flex flex-wrap content-start gap-2 md:justify-end">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="h-fit text-xs text-gray-300 border border-white/10 rounded-full px-4 py-2.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 section-line">
      <div className="container-width">

        <p className="text-xs tracking-[0.2em] text-gray-500 mb-7">
          04 / LET'S CONNECT
        </p>

        <h2 className="font-heading text-[clamp(3.5rem,9vw,8rem)] leading-[0.98] tracking-[-0.06em] font-semibold">
          Have an idea?
          <br />
          <span className="accent">Let's build it.</span>
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-10 mt-12">
          <p className="text-gray-400 leading-relaxed max-w-md">
            Interested in collaborating, discussing an opportunity or
            building something meaningful? I'd be glad to hear from you.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center justify-center gap-3 bg-[#a8b5ff] text-[#101010] rounded-full px-7 py-4 font-semibold text-sm hover:bg-white transition-colors"
          >
            Get in touch <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}



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
            href="www.linkedin.com/in/philip-okoth-513411355"
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
  return (
     <div className={isLightMode ? "light-mode" : "dark-mode"}></div>
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
    </>
  );
}

export default App;
