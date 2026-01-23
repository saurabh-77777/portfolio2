export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 px-10">
        <div className="shadow p-5  bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl"><a href="https://myntra-clone-bay-six.vercel.app">Myntra Clone</a></div>
        <div className="shadow p-5  bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl"><a href="https://doctor-appointment-coral-eta.vercel.app">Doctor Appointment</a></div>
        <div className="shadow p-5  bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl">Coming soon</div>
      </div>
    </section>
  );
}
