import Layout from "../components/Layout";
import { contents } from "../data/contents";
import Link from "next/link";

const About: React.FC = () => {
  const { about } = contents;

  return (
    <Layout title={`About | ${contents.siteName}`}>
      <h1 className="text-4xl font-bold mb-6 animate-fade-in">{about.title}</h1>
      <p className="text-xl mb-8 animate-slide-in">{about.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
      <ul className="list-disc list-inside mb-8">
        {about.certificates.map((certificate, index) => (
          <li
            key={index}
            className="mb-2 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="font-semibold">{certificate.name}</span> -{" "}
            {certificate.issuer} ({certificate.date})
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">My Skill Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {about.skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-md animate-fade-in hover:shadow-lg transition-shadow duration-300 border-l-4"
              style={{
                animationDelay: `${index * 0.1}s`,
                borderLeftColor: skill.color || "#3B82F6",
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4 flex items-center justify-center">
                  <IconComponent
                    size={32}
                    style={{ color: skill.color || "#3B82F6" }}
                  />
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              {skill.projects.length > 0 && (
                <div>
                  <p className="text-sm font-semibold mb-2">
                    Related Projects:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.projects.map((projectId) => {
                      const project = contents.projects.find(
                        (p) => p.id === projectId,
                      );
                      return project ? (
                        <Link
                          key={projectId}
                          href={`/projects/${project.id}`}
                          className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                        >
                          {project.title}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {skill.categories.map((category) => (
                    <span
                      key={category}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default About;
