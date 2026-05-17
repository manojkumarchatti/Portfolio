import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code2,
  Server,
  Cloud,
  BrainCircuit,
  Database,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const profile = {
  name: "Manoj Kumar Chatti",
  role: "Software Engineer",
  headline: "Building scalable software, cloud systems, and AI-powered applications.",
  location: "Tampa, FL",
  phone: "+1 6562056856",
  email: "manojkchatti@gmail.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  leetcode: "https://leetcode.com/u/manojchatti/",
};

const experiences = [
  {
    company: "Environmental Protection Commission",
    title: "Software Engineer Intern",
    location: "Tampa, FL",
    period: "Aug 2025 - Present",
    points: [
      "Developed internal engineering tools and scalable UI modules using React and Node.js, improving team delivery efficiency by 20%.",
      "Designed secure backend services with Express and FastAPI, integrating JWT-based authentication and access control.",
      "Refactored legacy Java-based systems into Dockerized microservices deployed on AWS ECS, improving service responsiveness by 25%.",
    ],
  },
  {
    company: "Fat Dog Spirits",
    title: "Software Engineer Intern",
    location: "Tampa, FL",
    period: "May 2025 - Aug 2025",
    points: [
      "Created customer-facing dashboards using React and Flask for real-time business insights.",
      "Integrated REDCap survey exports with SQL and NoSQL stores to support analytics workflows.",
      "Containerized development setups using Docker to reduce environment configuration issues for new contributors.",
    ],
  },
  {
    company: "Cognizant",
    title: "Software Engineer",
    location: "Mumbai, India",
    period: "Mar 2022 - Aug 2024",
    points: [
      "Modernized legacy Struts platforms into React, TypeScript, and Spring Boot microservices.",
      "Delivered 12+ production-grade REST and GraphQL APIs supporting 5,000+ daily transactions with sub-100 ms latency.",
      "Built event-driven microservices using AWS SNS/SQS and improved CI/CD automation with Jenkins, Git, Maven, and Terraform.",
    ],
  },
];

const projects = [
  {
    name: "CiteRAG",
    subtitle: "Production Retrieval-Augmented Generation System",
    description:
      "A production-grade RAG platform built with React, FastAPI, LangChain, FAISS, Redis, and Docker. It delivers source-grounded responses across 5K+ documents with improved retrieval quality and lower latency.",
    metrics: ["5K+ documents", "35% fewer hallucinations", "40% lower latency"],
    stack: ["React", "FastAPI", "LangChain", "FAISS", "Redis", "Docker", "MMR Search"],
    github: "https://github.com/manojkumarchatti/citerag",
    live: "",
  },
  {
    name: "Microservices API Platform",
    subtitle: "Distributed Backend System",
    description:
      "A scalable backend architecture using Java, Spring Boot, REST/GraphQL APIs, AWS messaging services, Docker, and CI/CD pipelines for reliable production deployments.",
    metrics: ["12+ APIs", "5,000+ daily transactions", "Sub-100 ms latency"],
    stack: ["Java", "Spring Boot", "GraphQL", "AWS SNS/SQS", "Docker", "Jenkins"],
    github: "https://github.com/manojkumarchatti",
    live: "",
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    title: "Frontend",
    icon: Sparkles,
    skills: ["React.js", "HTML5", "CSS3", "Dash", "REST API Integration"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "Spring Boot", "GraphQL"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "Oracle", "Snowflake", "BigQuery", "Amazon Redshift", "NoSQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS ECS", "AWS SNS/SQS", "Docker", "Terraform", "GitHub Actions", "Jenkins"],
  },
  {
    title: "AI & Engineering",
    icon: BrainCircuit,
    skills: ["LangChain", "FAISS", "RAG Systems", "Caching", "Distributed Systems", "System Design"],
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#ff6b1a]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[#111111] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#73736d]">
          {description}
        </p>
      )}
    </div>
  );
}

function Navbar() {
  const links = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#ded9cc] bg-[#f3f0e8]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-black tracking-tight text-[#111111]">
          Manoj Kumar Chatti<span className="gradient-text">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-[#73736d] transition hover:text-[#ff6b1a]"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-[#111111] px-5 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,26,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(17,17,17,0.07),_transparent_35%)]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ff6b1a]/10 blur-3xl" />

      <div className="section-container relative flex min-h-[calc(100vh-96px)] items-center">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff6b1a]/30 bg-[#ff6b1a]/10 px-4 py-2 text-sm font-medium text-[#ff6b1a]">
              <Sparkles size={16} />
              Open to Software Engineer roles
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-[#111111] md:text-7xl">
              Hi, I&apos;m <span className="gradient-text">Manoj</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#111111] md:text-2xl">
              {profile.headline}
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-[#73736d]">
              I am a Software Engineer based in Tampa with experience building full-stack
              applications, microservices, high-performance APIs, cloud deployments, CI/CD
              pipelines, and AI-powered RAG systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="primary-button rounded-full px-6 py-3 font-semibold transition"
              >
                View Projects
              </a>

              <a
                href="/Manoj_Kumar_Chatti_Resume.pdf"
                className="outline-button inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[#73736d]">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} /> {profile.location}
              </span>

              <a
                className="inline-flex items-center gap-2 transition hover:text-[#ff6b1a]"
                href={`mailto:${profile.email}`}
              >
                <Mail size={16} /> {profile.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass-card rounded-[2rem] p-6"
          >
            <div className="rounded-[1.5rem] border border-[#ded9cc] bg-[#ebe7dc] p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <pre className="overflow-x-auto text-sm leading-7 text-[#333333]">
                <code>{`const engineer = {
  name: "Manoj Kumar Chatti",
  role: "Software Engineer",
  focus: [
    "Full-Stack Development",
    "Microservices",
    "Cloud Systems",
    "AI/RAG Applications"
  ],
  stack: {
    frontend: "React + TypeScript",
    backend: "Spring Boot + FastAPI",
    cloud: "AWS + Docker + CI/CD"
  }
};`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-container">
      <SectionTitle
        eyebrow="About"
        title="Software engineer with a product and systems mindset."
        description="I enjoy turning real-world problems into reliable, scalable, and user-friendly software."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {[
          ["3+", "Years of software engineering experience"],
          ["12+", "Production REST/GraphQL APIs delivered"],
          ["5K+", "Documents handled in RAG project"],
        ].map(([value, label]) => (
          <div key={label} className="glass-card rounded-3xl p-6">
            <p className="gradient-text text-4xl font-black">{value}</p>
            <p className="mt-2 text-[#73736d]">{label}</p>
          </div>
        ))}
      </div>

      <div className="soft-card mt-8 rounded-3xl p-8">
        <p className="text-lg leading-8 text-[#333333]">
          I specialize in building scalable full-stack applications, backend services,
          distributed microservices, and cloud-based systems. My experience spans React,
          TypeScript, Node.js, FastAPI, Spring Boot, AWS, Docker, Terraform, Jenkins,
          GitHub Actions, SQL/NoSQL databases, and AI-powered retrieval systems. I care
          about clean architecture, performance, automation, and building software that
          is easy to maintain.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-container">
      <SectionTitle
        eyebrow="Experience"
        title="Professional experience"
        description="A mix of full-stack development, backend engineering, cloud systems, and production software delivery."
      />

      <div className="relative space-y-6">
        <div className="timeline-line absolute left-6 top-8 hidden h-[calc(100%-64px)] w-px md:block" />

        {experiences.map((job) => (
          <div key={job.company} className="glass-card relative rounded-3xl p-7 md:ml-14">
            <div className="absolute -left-[4.3rem] top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-[#ded9cc] bg-[#f8f5ee] text-[#ff6b1a] md:flex">
              <BriefcaseBusiness size={20} />
            </div>

            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <h3 className="text-2xl font-bold text-[#111111]">{job.title}</h3>
                <p className="mt-1 text-lg font-semibold text-[#ff6b1a]">{job.company}</p>
                <p className="mt-1 text-sm text-[#73736d]">{job.location}</p>
              </div>

              <p className="h-fit rounded-full border border-[#ded9cc] px-4 py-2 text-sm text-[#73736d]">
                {job.period}
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-[#333333]">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#ff6b1a]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-container">
      <SectionTitle
        eyebrow="Projects"
        title="Featured projects"
        description="Projects that show my experience with scalable systems, AI applications, APIs, and production engineering."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="glass-card flex flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-[#ff6b1a]/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-[#111111]">{project.name}</h3>
                <p className="mt-1 font-semibold text-[#ff6b1a]">{project.subtitle}</p>
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#ded9cc] p-2 text-[#73736d] transition hover:border-[#ff6b1a] hover:text-[#ff6b1a]"
                  aria-label={`${project.name} GitHub link`}
                >
                  <ExternalLink size={22} />
                </a>
              )}
            </div>

            <p className="mt-5 leading-7 text-[#333333]">{project.description}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-2xl border border-[#ded9cc] bg-[#ebe7dc] p-3 text-center text-sm text-[#333333]"
                >
                  {metric}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="skill-badge rounded-full px-3 py-1 text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff6b1a]"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#111111] px-5 py-2.5 text-sm font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-container">
      <SectionTitle
        eyebrow="Skills"
        title="Technical toolkit"
        description="Technologies and engineering concepts I use to build reliable, scalable software."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <div
              key={group.title}
              className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff6b1a]/40"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl bg-[#ff6b1a]/10 p-3 text-[#ff6b1a]">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-bold text-[#111111]">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge rounded-full px-3 py-1 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section-container">
      <SectionTitle eyebrow="Education" title="Academic background" />

      <div className="glass-card rounded-3xl p-7">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div className="flex gap-4">
            <div className="h-fit rounded-2xl bg-[#ff6b1a]/10 p-3 text-[#ff6b1a]">
              <GraduationCap size={28} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#111111]">
                University of South Florida
              </h3>
              <p className="mt-1 font-semibold text-[#ff6b1a]">
                Master of Science in Computer Science
              </p>
              <p className="mt-1 text-[#73736d]">Tampa, FL, USA</p>
            </div>
          </div>

          <p className="h-fit rounded-full border border-[#ded9cc] px-4 py-2 text-sm text-[#73736d]">
            Aug 2024 - May 2026
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="rounded-[2rem] bg-[#111111] p-8 text-center md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#ff6b1a]">
          Contact
        </p>

        <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
          Let&apos;s build something impactful.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#c9c9c2]">
          I am actively looking for Software Engineer, Full-Stack Developer, Backend Engineer,
          and Cloud Software Engineer roles. Feel free to reach out for opportunities,
          collaborations, or project discussions.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#111111] transition hover:bg-[#ff6b1a] hover:text-white"
          >
            <Mail size={18} /> Email Me
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#111111]"
          >
            <Github size={18} /> GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#111111]"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={profile.leetcode}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-[#ff6b1a] hover:border-[#ff6b1a]"
  >
     LeetCode
  </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-[#c9c9c2]">
          <span className="inline-flex items-center gap-2">
            <Phone size={16} /> {profile.phone}
          </span>

          <span className="inline-flex items-center gap-2">
            <MapPin size={16} /> {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#ded9cc] px-6 py-8 text-center text-sm font-semibold text-[#73736d]">
      © {new Date().getFullYear()} Manoj Kumar Chatti. Built with React, Vite, and Tailwind CSS.
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}