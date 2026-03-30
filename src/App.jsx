import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import EducationPage from "./pages/EducationPage";
import InternshipPage from "./pages/InternshipPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";

import CursorGlow from "./components/CursorGlow";

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* 🌿 GLOBAL VIDEO */}
      <video
        autoPlay
        loop
        muted
        className="fixed w-full h-full object-cover opacity-50 -z-10"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* 🖱️ CURSOR GLOW */}
      <CursorGlow />

      {/* 🎬 PAGE TRANSITIONS */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;