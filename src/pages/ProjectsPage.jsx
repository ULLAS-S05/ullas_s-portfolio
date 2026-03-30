import Header from "../components/Header";
import { portfolioData } from "../data/portfolioData";

function ProjectsPage() {
  return (
    <div>
      <Header />

      <div className="p-10 mt-20">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.projects.map((p, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>

              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  className="text-blue-400 mt-3 block"
                >
                  View GitHub →
                </a>
              ) : (
                <p className="text-red-400 mt-3">
                  ⚠ No link attached
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProjectsPage;