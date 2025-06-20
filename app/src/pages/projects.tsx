import Layout from "../components/Layout";
import { contents } from "../data/contents";
import Image from "next/image";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <Layout title={`Projects | ${contents.siteName}`}>
      <h1 className="text-4xl font-bold mb-8 animate-fade-in">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contents.projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-48 bg-gray-200">
              {project.imageUrl && (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="contain"
                  blurDataURL={project.imageUrl}
                  placeholder="blur"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.shortDescription}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.id}`}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
