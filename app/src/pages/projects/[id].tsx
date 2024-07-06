import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/Layout";
import { contents } from "../../data/contents";
import Image from "next/image";

interface ProjectDetailProps {
  project: (typeof contents.projects)[0];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  if (!project) return <div>Project not found</div>;

  return (
    <Layout title={`${project.title} | ${contents.siteName}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 animate-fade-in">
          {project.title}
        </h1>
        <div className="mb-8 relative h-64 md:h-96 bg-gray-200 rounded-lg">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <p className="text-xl mb-6 animate-slide-in">
          {project.fullDescription}
        </p>

        {project.youtubeVideoId && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Project Demo</h2>
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside mb-6">
          {project.features.map((feature, index) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Challenges and Solutions
        </h2>
        <p className="mb-6">{project.challenges}</p>

        <div className="flex gap-4">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
            >
              View Live Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = contents.projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = contents.projects.find((p) => p.id.toString() === params?.id);
  return { props: { project } };
};

export default ProjectDetail;
