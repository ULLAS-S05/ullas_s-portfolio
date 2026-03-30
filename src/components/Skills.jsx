import { portfolioData } from "../data/portfolioData";

function Skills() {
  return (
    <div id="skills" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {portfolioData.skills.map((s, i) => (
          <span key={i} className="bg-gray-800 px-4 py-2 rounded">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;