import PageWrapper from "../components/PageWrapper";
import { portfolioData } from "../data/portfolioData";

export default function EducationPage() {
  return (
    <PageWrapper>
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        {portfolioData.education.map((e, i) => (
          <div key={i} className="p-5 mb-4 bg-white/10 backdrop-blur-md rounded-xl">
            <h3>{e.title}</h3>
            <p>{e.college}</p>
            <p>{e.year}</p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}