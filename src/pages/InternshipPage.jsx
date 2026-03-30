import PageWrapper from "../components/PageWrapper";
import { portfolioData } from "../data/portfolioData";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        {portfolioData.projects.map((p, i) => (
          <div key={i} className="p-5 mb-4 bg-white/10 rounded-xl">
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            {p.link ? (
              <a href={p.link} target="_blank" className="text-blue-400">View GitHub</a>
            ) : (
              <p className="text-red-400">No link attached</p>
            )}
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}