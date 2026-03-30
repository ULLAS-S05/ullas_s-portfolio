function Resume() {
  return (
    <div className="p-10 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <a
        href="/resume.pdf"
        download
        className="bg-blue-500 px-6 py-2 rounded"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;