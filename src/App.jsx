import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaReact,
  FaAws,
  FaDownload,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import { SiPostgresql } from "react-icons/si";

import profile from "./assets/profile.jpeg";
import Anshul_Resume from "./assets/Anshul_Resume.pdf";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LEFT */}
          <h1 className="text-3xl font-bold text-cyan-400 tracking-wide">
            Anshul Gupta
          </h1>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 duration-300">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 duration-300">
              Skills
            </a>

            <a href="#experience" className="hover:text-cyan-400 duration-300">
              Experience
            </a>

            <a href="#projects" className="hover:text-cyan-400 duration-300">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 duration-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-5">
              Full Stack Software Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm <br />
              <span className="text-cyan-400">Anshul Gupta</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
              Java Spring Boot • ReactJS • AWS • Microservices
            </h2>

            <p className="text-slate-400 text-lg leading-8 max-w-2xl">
              Full Stack Software Engineer with 3 years of experience building
              scalable enterprise applications using Java, Spring Boot, ReactJS,
              PostgreSQL, AWS, and Microservices architecture.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={Anshul_Resume}
                download
                className="flex items-center gap-2 bg-cyan-400 text-slate-950 px-7 py-4 rounded-2xl font-semibold hover:bg-white duration-300 hover:scale-105"
              >
                <FaDownload />
                Resume
              </a>

              <a
                href="https://github.com/HiAnshulGupta"
                target="_blank"
                className="border border-cyan-400 px-7 py-4 rounded-2xl font-semibold hover:bg-cyan-400 hover:text-slate-950 duration-300"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/anshul-gupta-6846411b9/"
                target="_blank"
                className="border border-cyan-400 px-7 py-4 rounded-2xl font-semibold hover:bg-cyan-400 hover:text-slate-950 duration-300"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center relative"
          >
            {/* Glow */}
            <div className="absolute w-[320px] h-[320px] bg-cyan-400/20 blur-3xl rounded-full"></div>

            {/* Image */}
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              src={profile}
              alt="Anshul Gupta"
              className="
                relative
                w-[280px]
                h-[280px]
                md:w-[400px]
                md:h-[500px]
                object-cover
                rounded-full
                border-4
                border-cyan-400
                shadow-2xl
                shadow-cyan-500/30
              "
            />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-14 text-cyan-400 text-center"
          >
            About Me
          </motion.h2>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-slate-900/70 backdrop-blur-lg p-10 rounded-3xl border border-slate-800 shadow-xl"
          >
            <p className="text-slate-300 leading-9 text-lg text-center">
              I am currently working as a Senior Java Full Stack Software
              Developer at PurpleGrad Technologies Pvt. Ltd., Pune. I specialize
              in backend development using Spring Boot microservices and
              frontend development using ReactJS and React Native.
              <br />
              <br />I have hands-on experience building ERP and EMR systems with
              JWT security, AWS integrations, PostgreSQL optimization, CI/CD
              pipelines, and responsive dashboards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
            Skills
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Backend */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 duration-300"
            >
              <FaJava className="text-6xl text-orange-400 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">Backend</h3>

              <p className="text-slate-400 leading-8">
                Java <br />
                Spring Boot <br />
                Spring Cloud <br />
                Hibernate <br />
                REST APIs <br />
                Microservices
              </p>
            </motion.div>

            {/* Frontend */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 duration-300"
            >
              <FaReact className="text-6xl text-cyan-400 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">Frontend</h3>

              <p className="text-slate-400 leading-8">
                ReactJS <br />
                React Native <br />
                Tailwind CSS <br />
                Redux <br />
                AG-Grid
              </p>
            </motion.div>

            {/* Database */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 duration-300"
            >
              <SiPostgresql className="text-6xl text-blue-400 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">Database</h3>

              <p className="text-slate-400 leading-8">
                PostgreSQL <br />
                MySQL <br />
                JDBC <br />
                Query Optimization
              </p>
            </motion.div>

            {/* DevOps */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 duration-300"
            >
              <FaAws className="text-6xl text-yellow-400 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">Cloud & DevOps</h3>

              <p className="text-slate-400 leading-8">
                AWS S3 <br />
                CI/CD <br />
                Docker <br />
                Maven <br />
                GitHub Actions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
            Experience
          </h2>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-slate-900 p-10 rounded-3xl border border-slate-800"
          >
            <h3 className="text-3xl font-bold mb-3">
              Senior Java Full Stack Software Developer
            </h3>

            <h4 className="text-cyan-400 text-xl mb-2">
              PurpleGrad Technologies Pvt. Ltd. | Pune
            </h4>

            <p className="text-slate-400 mb-8">May 2023 – Present</p>

            <ul className="space-y-4 text-slate-300">
              <li>
                • Built scalable Spring Boot microservices using Spring Cloud
                and Eureka Discovery.
              </li>

              <li>• Developed secure REST APIs using JWT authentication.</li>

              <li>
                • Optimized PostgreSQL queries and indexing for ERP
                applications.
              </li>

              <li>
                • Integrated AWS S3 workflows for secure document management.
              </li>

              <li>
                • Built responsive ReactJS dashboards and React Native mobile
                apps.
              </li>

              <li>• Automated CI/CD deployment pipelines.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ERP */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 duration-300"
            >
              <h3 className="text-3xl font-bold mb-4">ERP System</h3>

              <p className="text-slate-300 leading-8">
                Enterprise Resource Planning platform developed using Spring
                Boot microservices, ReactJS, PostgreSQL, AWS S3, JWT
                authentication, React Native, and CI/CD pipelines.
              </p>
            </motion.div>

            {/* EMR */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 duration-300"
            >
              <h3 className="text-3xl font-bold mb-4">EMR System</h3>

              <p className="text-slate-300 leading-8">
                Electronic Medical Record system with patient management,
                appointment scheduling, Firebase notifications, and secure REST
                APIs.
              </p>
            </motion.div>

            {/* Asset */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400 duration-300"
            >
              <h3 className="text-3xl font-bold mb-4">
                Asset Management System
              </h3>

              <p className="text-slate-300 leading-8">
                Web-based PoC for Bank of Maharashtra to manage asset tracking
                and depreciation workflows using Spring Boot and ReactJS.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10 text-cyan-400">Contact Me</h2>

          <p className="text-slate-300 text-lg mb-12">
            Open for Full Stack Software Engineer opportunities.
          </p>

          <div className="space-y-5 text-lg text-slate-300">
            <p className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              guptaanshul2903@gmail.com
            </p>

            <p className="flex items-center justify-center gap-3">
              <FaPhone className="text-cyan-400" />
              +91 7566573279
            </p>

            <p className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" />
              Pune, Maharashtra
            </p>
          </div>

          <div className="flex justify-center gap-8 text-5xl mt-12">
            <a href="https://github.com/HiAnshulGupta" target="_blank">
              <FaGithub className="hover:text-cyan-400 duration-300 hover:scale-110" />
            </a>

            <a
              href="https://www.linkedin.com/in/anshul-gupta-6846411b9/"
              target="_blank"
            >
              <FaLinkedin className="hover:text-cyan-400 duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 Anshul Gupta | Full Stack Software Engineer
      </footer>
    </div>
  );
}

export default App;
