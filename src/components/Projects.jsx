export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 px-10">
        <div className="shadow p-5  bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl">Project One</div>
        <div className="shadow p-5  bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl">Project Two</div>
        <div className="shadow p-5  bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl">Project Three</div>
      </div>
    </section>
  );
}
