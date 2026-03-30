import Header from "../components/Header";
import { portfolioData } from "../data/portfolioData";

function SkillsPage() {
  return (
    <div>
      <Header />

      <div className="p-10 mt-20">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {portfolioData.skills.map((s, i) => (
            <span key={i} className="bg-gray-800 px-4 py-2 rounded">
              {s}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default SkillsPage;