import { ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const projects = [
  {
    title: "Devshub Community",
    description:
      "Comunidad de desarrolladores para compartir posts, discusiones, hackatones y retos. Un espacio para conectar con otros desarrolladores, aprender y crecer profesionalmente.",
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    live: "https://devshub.dev",
  },
  {
    title: "GlowShot",
    description:
      "App de escritorio para macOS que transforma screenshots en imágenes listas para compartir en segundos. Edición rápida, eliminación de elementos y estilos automáticos para creadores y devs.",
    tags: ["Rust", "Tauri", "SvelteKit", "TypeScript", "PostgreSQL", "Docker", "AWS S3"],
  },
  {
    title: "Hireflow",
    description:
      "Plataforma de reclutamiento que automatiza el matching entre talento y empresas con flujos optimizados. Matching inteligente para reducir fricción al aplicar y mejorar velocidad/calidad en contratación.",
    tags: ["Next.js", "TypeScript", "Express", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    title: "PerceptMe",
    description:
      "Feedback anónimo vía enlace personal, transformado en insights claros sobre tu percepción. Integra moderación y análisis para convertir opiniones en información útil.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "AWS S3"],
  },
  {
    title: "Papermind",
    description:
      "Automatiza resúmenes de archivos grandes y habilita colaboración sincronizada sobre el mismo documento. Resúmenes rápidos + colaboración en tiempo real.",
    tags: ["TypeScript", "React", "NestJS", "PostgreSQL", "Cloudinary"],
  },
  {
    title: "KnowerYou",
    description:
      "Herramienta (Python + Node.js) que analiza señales públicas de Instagram para proponer un perfil de personalidad e ideas de interacción usando IA.",
    tags: ["Python", "Express"],
  },
  {
    title: "Learnflow",
    description:
      "Aprendizaje para exámenes con flashcards interactivas + IA, adaptando contenido y motivación con dinámicas competitivas entre usuarios.",
    tags: ["SvelteKit", "TypeScript", "Supabase", "MySQL"],
  },
  {
    title: "Dev Genius",
    description:
      "Ideas diarias de proyectos (frontend, backend y fullstack) generadas por IA + asistente HiramGPT para guiar tu carrera. Envío diario por correo. Gratis.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI"],
    live: "https://www.devgeniushub.site/",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col border border-white/5 hover:bg-gray-800/70 transition-all">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
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
                {project.live && (
                  <div className="flex space-x-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
