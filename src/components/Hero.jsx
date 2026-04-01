import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4 md:px-10">

      {/* PROFILE IMAGE */}
      <motion.img
        src="/profile.jpg"
        alt="profile"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-40 md:w-56 rounded-xl mb-6 border border-white/20 shadow-lg mx-auto"
      />

      {/* NAME */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Hi, I'm {portfolioData.name}
      </h1>

      {/* ROLE */}
      <p className="text-gray-300 mt-2 text-sm md:text-lg">
        {portfolioData.role}
      </p>

      {/* ABOUT */}
      <p className="mt-4 max-w-2xl text-gray-200 text-sm md:text-base px-2">
        {portfolioData.about}
      </p>

      {/* BUTTONS */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          className="border px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          View Resume
        </a>

        <a
          href="/resume.pdf"
          download
          className="bg-blue-500 px-5 py-2 rounded-full hover:scale-105 transition"
        >
          Download Resume
        </a>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-6 mt-6 text-xl md:text-2xl">
        <a href="https://github.com/ULLAS-S05" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ullas-s-2848u" target="_blank"><FaLinkedin /></a>
        <a href="mailto:ullasgowda1917@gmail.com"><MdEmail /></a>
        <a href="https://www.instagram.com/ullas_s___/" target="_blank"><FaInstagram /></a>
        <a href="https://wa.me/916363862848" target="_blank"><FaWhatsapp /></a>
      </div>

      {/* NAVIGATION BOXES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 w-full max-w-xl mx-auto">
        
        <div
          onClick={() => navigate("/education")}
          className="p-3 bg-white/10 rounded-xl cursor-pointer hover:bg-blue-500 transition"
        >
          Education
        </div>

        <div
          onClick={() => navigate("/internship")}
          className="p-3 bg-white/10 rounded-xl cursor-pointer hover:bg-blue-500 transition"
        >
          Internship
        </div>

        <div
          onClick={() => navigate("/skills")}
          className="p-3 bg-white/10 rounded-xl cursor-pointer hover:bg-blue-500 transition"
        >
          Skills
        </div>

        <div
          onClick={() => navigate("/projects")}
          className="p-3 bg-white/10 rounded-xl cursor-pointer hover:bg-blue-500 transition"
        >
          Projects
        </div>

      </div>

    </div>
  );
}

export default Hero;
