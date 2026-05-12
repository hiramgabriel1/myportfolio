import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Building2,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const experiences = [
  {
    title: "Fullstack Software Engineer",
    company: "Atrato Pago (YC W21)",
    location: "Remote",
    period: "Agosto 2024 – Marzo 2026",
    type: "Full-time",
    description: [
      "Construcción y mantenimiento de APIs REST con Node.js y TypeScript",
      "Desarrollo y mantenimiento de servicios backend conectados a bases de datos (MySQL)",
      "Implementación de pruebas automatizadas para asegurar calidad y escalabilidad",
      "Desarrollo de interfaces a partir de diseños en Figma usando React, TypeScript y Styled Components",
      "Implementación de nuevas funcionalidades para sistemas internos y externos",
    ],
    stack: "Node.js, TypeScript, MySQL, PostgreSQL, Redis",
  },
  {
    title: "Desarrollador Fullstack",
    company: "Vopper",
    location: "Remote",
    period: "Diciembre 2024 – Julio 2025",
    type: "Full-time",
    description: [
      "Participé en el desarrollo y mantenimiento de servicios backend enfocados en rendimiento, escalabilidad y manejo eficiente de datos",
      "Diseño de lógica de negocio, gestión de bases de datos y optimización de APIs para soportar aplicaciones modernas",
      "Colaboré en la toma de decisiones técnicas y coordinación de tareas dentro del equipo de desarrollo",
    ],
    stack: "NestJS, TypeScript, Node.js, PostgreSQL",
  },
  {
    title: "Web Developer",
    company: "LinkTIC",
    location: "Remote",
    period: "Abril 2023 – Enero 2024",
    type: "Full-time",
    description: [
      "Fullstack Developer responsable del desarrollo e implementación de soluciones web modernas",
      "Participé en la creación de productos escalables y orientados a mejorar la experiencia del usuario",
      "Desarrollo de aplicaciones fullstack, colaborando en la implementación de nuevas funcionalidades, optimización de interfaces y conexión eficiente entre frontend y backend",
    ],
    stack: "SvelteKit, TypeScript, Node.js, Supabase",
  },
  {
    title: "Voluntariado — Docente",
    company: "TecNM",
    location: "Remote",
    period: "Febrero 2023 – Diciembre 2023",
    type: "Volunteer",
    description: [
      "Enseñé a los alumnos a desarrollar aplicaciones web completas con Node.js, ExpressJS, FastifyJS, Svelte y MongoDB",
      "Adapté mis métodos de enseñanza a las necesidades individuales de los alumnos",
      "Colaboré en el desarrollo e implementación de aplicaciones para medianas empresas de la localidad",
    ],
    stack: "Node.js, ExpressJS, FastifyJS, Svelte, MongoDB",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.title}>
            <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                    <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 text-base sm:text-lg">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>

                <ul className="space-y-3 sm:space-y-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                    >
                      <ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
