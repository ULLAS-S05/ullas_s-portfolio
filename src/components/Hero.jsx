import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { portfolioData } from "../data/portfolioData";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center text-white px-4">

      {/* PROFILE IMAGE */}
      <motion.img
        src="/profile.jpg"
        alt="profile"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-64 md:w-72 rounded-xl shadow-xl"
      />

      {/* NAME */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-bold mt-6"
      >
        Hi, I'm {portfolioData.name}
      </motion.h1>

      {/* ROLE */}
      <p className="mt-3 text-gray-300">{portfolioData.role}</p>

      {/* ABOUT */}
      <p className="mt-5 max-w-xl text-gray-200">
        {portfolioData.about}
      </p>

      {/* RESUME */}
      <div className="mt-6 flex gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          View Resume
        </a>

        <a
          href="/resume.pdf"
          download
          className="bg-blue-500 px-6 py-2 rounded-full hover:scale-105 transition"
        >
          Download Resume
        </a>
      </div>

      {/* SOCIAL ICONS */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-6 mt-6 text-2xl"
      >
        <a href="https://github.com/ULLAS-S05" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ullas-s-2848u" target="_blank"><FaLinkedin /></a>
        <a href="mailto:ullasgowda1917@gmail.com"><MdEmail /></a>
        <a href="https://www.instagram.com/ullas_s___/" target="_blank"><FaInstagram /></a>
        <a href="https://wa.me/916363862848" target="_blank"><FaWhatsapp /></a>
      </motion.div>

      {/* 🔥 BOX NAVIGATION */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
      >
        <div
          onClick={() => navigate("/education")}
          className="cursor-pointer px-6 py-3 bg-white/10 rounded-xl hover:bg-blue-500 transition"
        >
          Education
        </div>

        <div
          onClick={() => navigate("/internship")}
          className="cursor-pointer px-6 py-3 bg-white/10 rounded-xl hover:bg-blue-500 transition"
        >
          Internship
        </div>

        <div
          onClick={() => navigate("/skills")}
          className="cursor-pointer px-6 py-3 bg-white/10 rounded-xl hover:bg-blue-500 transition"
        >
          Skills
        </div>

        <div
          onClick={() => navigate("/projects")}
          className="cursor-pointer px-6 py-3 bg-white/10 rounded-xl hover:bg-blue-500 transition"
        >
          Projects
        </div>
      </motion.div>

    </div>
  );
}

export default Hero;