import { portfolioData } from "../data/portfolioData";

function Education() {
  return (
    <div id="education" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Education</h2>

      {portfolioData.education.map((e, i) => (
        <div key={i} className="mb-4">
          <h3 className="text-xl">{e.title}</h3>
          <p className="text-gray-400">{e.college}</p>
          <p className="text-sm text-gray-500">{e.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;