import { portfolioData } from "../data/portfolioData";

function Projects() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {portfolioData.projects.map((p, i) => (
          <div key={i} className="p-6 bg-gray-900 rounded-xl">

            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>

            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                className="text-blue-400 mt-3 block"
              >
                View on GitHub →
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
  );
}

export default Projects;