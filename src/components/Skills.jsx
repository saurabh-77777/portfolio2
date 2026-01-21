export default function Skills() {
  const skills = ["React", "Node", "MongoDB", "Express", "Tailwind"];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 bg-indigo-600 text-white rounded">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
