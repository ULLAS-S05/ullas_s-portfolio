import { useEffect, useState } from "react";

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ transform: `translate(${pos.x - 100}px, ${pos.y - 100}px)` }}
    >
      <div className="w-52 h-52 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
    </div>
  );
}

export default CursorGlow;