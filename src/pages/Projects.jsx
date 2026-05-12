import { ScrollAnimation } from "@/components/ScrollAnimation";
import { FolderOpen } from "lucide-react";

const projects = [];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>

      {projects.length === 0 ? (
        <div className="text-center py-20">
          <FolderOpen className="w-16 h-16 text-gray-500 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-gray-400 mb-2">
            No projects yet
          </h3>
          <p className="text-gray-500">
            Projects coming soon. Check back later!
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ScrollAnimation key={project.title}>
              <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <FolderOpen className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <FolderOpen className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
