import { portfolioData } from "../data/portfolioData";

function Internship() {
  return (
    <div id="internship" className="p-10 bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">Internship Experience</h2>

      {portfolioData.internships.map((item, i) => (
        <div key={i} className="mb-6 p-6 border border-gray-700 rounded-xl bg-white/5">
          <h3 className="text-xl font-semibold">
            {item.company} – {item.role}
          </h3>
          <p className="text-gray-400 mt-3">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Internship;