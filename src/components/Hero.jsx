import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Robot3D from "./Robot3D";
import { portfolioData } from "../data/portfolioData";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-16 gap-10">

      {/* LEFT SIDE (TEXT) */}
      <div className="flex-1 text-center md:text-left">

        {/* NAME */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Hi, I'm {portfolioData.name}
        </h1>

        {/* ROLE */}
        <p className="text-gray-300 mt-3 text-sm md:text-lg">
          {portfolioData.role}
        </p>

        {/* ABOUT */}
        <p className="mt-4 text-gray-200 max-w-lg text-sm md:text-base">
          {portfolioData.about}
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
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
            Download
          </a>
        </div>

        {/* SOCIAL */}
        <div className="flex justify-center md:justify-start gap-5 mt-6 text-xl md:text-2xl">
          <a href="https://github.com/ULLAS-S05" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ullas-s-2848u" target="_blank"><FaLinkedin /></a>
          <a href="mailto:ullasgowda1917@gmail.com"><MdEmail /></a>
          <a href="https://www.instagram.com/ullas_s___/" target="_blank"><FaInstagram /></a>
          <a href="https://wa.me/916363862848" target="_blank"><FaWhatsapp /></a>
        </div>

        {/* NAV BOXES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <div onClick={() => navigate("/education")} className="p-3 bg-white/10 rounded-xl text-center cursor-pointer hover:bg-blue-500">
            Education
          </div>
          <div onClick={() => navigate("/internship")} className="p-3 bg-white/10 rounded-xl text-center cursor-pointer hover:bg-blue-500">
            Internship
          </div>
          <div onClick={() => navigate("/skills")} className="p-3 bg-white/10 rounded-xl text-center cursor-pointer hover:bg-blue-500">
            Skills
          </div>
          <div onClick={() => navigate("/projects")} className="p-3 bg-white/10 rounded-xl text-center cursor-pointer hover:bg-blue-500">
            Projects
          </div>
        </div>

      </div>

      {/* RIGHT SIDE (IMAGE + ROBOT) */}
      <div className="flex-1 flex flex-col items-center">

        {/* ROBOT */}
        <div className="w-48 h-48 md:w-72 md:h-72">
          <Robot3D />
        </div>

        {/* IMAGE */}
        <motion.img
          src="/profile.jpg"
          alt="profile"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-48 md:w-64 rounded-xl mt-4 border border-white/20"
        />

      </div>

    </div>
  );
}

export default Hero;
