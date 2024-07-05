import Layout from "../components/Layout";
import Image from "next/image";
import { contents } from "../data/contents";
import * as Icons from "react-icons/fa6";

const Home: React.FC = () => {
  const { home } = contents;

  return (
    <Layout title={`Home | ${contents.siteName}`}>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-80 h-80 rounded-2xl overflow-hidden">
          <Image
            src={home.profilePicture}
            alt={`${home.name}'s profile picture`}
            width={320}
            height={320}
            className="object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">
            {home.name}
          </h1>
          <p className="text-xl mb-6 animate-slide-in">{home.title}</p>
          <p className="text-gray-600 max-w-md mb-2">{home.description}</p>
          <p className="text-gray-600 max-w-md mb-2">{home.subDescription}</p>
          <div className="text-xl text-gray-600 mb-2 animate-slide-in">
            {home.positions.map((position, index) => (
              <div key={index}>
                <span className="font-semibold text-sm">{position.title}</span>
                <span className="text-sm"> : </span>
                <span className="text-sm">{position.date}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            {home.socialLinks.map((social, index) => {
              const IconComponent = Icons[social.icon as keyof typeof Icons];
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                  title={social.name}
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>
          <a
            href={home.ctaLink}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
          >
            {home.ctaText}
          </a>
          <div className="mt-6"></div>
          <a
            href={home.subCtaLink}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
          >
            {home.subCtaText}
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
