import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiPhp, SiLaravel, SiDocker, SiRedis } from 'react-icons/si';
import { IconType } from 'react-icons';

// Define tech icons mapping
const techIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Upstash Redis": SiRedis,
  "NextAuth": SiReact,
  "PHP": SiPhp,
  "Laravel": SiLaravel,
  "Docker": SiDocker,
  "Slack API": SiReact
};

const projects = [
  {
    title: "NPSF Info",
    description: "A centralized resource hub for fitness group captains, solving the problem of scattered materials across different platforms with an integrated admin panel for content management.",
    image: "/images/npsf-info.png",
    liveUrl: "https://npsf.info",
    githubUrl: "https://github.com/butteredxtoast/npsf",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Upstash Redis", "NextAuth"],
    featured: true
  },
  {
    title: "Coffee Chat",
    description: "A custom Slack bot that automates coffee chat matchmaking with intelligent pairing algorithms, replacing manual workflow with automated matching, reminders, and follow-up tracking.",
    image: "/images/coffee-chat.png",
    liveUrl: "",
    githubUrl: "https://github.com/butteredxtoast/coffee-chat",
    techStack: ["PHP", "Laravel", "Tailwind CSS", "Docker", "Slack API"],
    featured: false
  }
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-background font-[Quicksand] relative overflow-hidden">
      {/* SVG leafy background pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 600">
        <g stroke="#386641" strokeWidth="1.5">
          <path d="M100 500 Q200 300 400 400 T700 200" />
          <path d="M200 600 Q300 400 500 500 T800 300" />
          <path d="M0 400 Q100 200 300 300 T600 100" />
        </g>
      </svg>
      {/* Header Section */}
      <section className="mb-8 glass-card rounded-xl p-8 md:p-12 font-[Quicksand]">
        <div className="flex justify-center mb-8">
          <Image
            src="https://www.gravatar.com/avatar/247fb1877eab599bc00263e85e9777d3?s=200"
            alt="Bill Keuth"
            width={150}
            height={150}
            className="rounded-full border-4 border-primary"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text font-[Quicksand]">
          Bill Keuth
        </h1>
        <div className="flex items-center gap-2 text-secondary mb-4">
          <FaMapMarkerAlt size={16} />
          <span>San Francisco, CA</span>
        </div>
        <p className="text-xl md:text-2xl text-secondary mb-8 font-[Quicksand]">
          Community Builder | Software Developer
        </p>
        {/* Social Links */}
        <div className="flex gap-6 mb-8">
          <Link href="https://github.com/butteredxtoast" target="_blank" 
                className="text-primary hover:text-secondary transition-colors">
            <FaGithub size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/billkeuth/" target="_blank"
                className="text-primary hover:text-secondary transition-colors">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://instagram.com/butteredxtoast" target="_blank"
                className="text-primary hover:text-secondary transition-colors">
            <FaInstagram size={24} />
          </Link>
          <Link href="mailto:bill@hey.com"
                className="text-primary hover:text-secondary transition-colors">
            <FaEnvelope size={24} />
          </Link>
        </div>
        <div className="prose max-w-none text-foreground font-[Quicksand]">
          <p className="text-lg space-y-6 font-[Quicksand]">
            I&apos;m a software engineer who finds patterns everywhere - whether I&apos;m architecting fault-tolerant systems or growing November Project SF from a small group to 40+ weekly runners. I build things that scale: microservices, communities, and solutions to everyday problems. Whether debugging distributed systems during the week or coaching fellow runners on Bay Area trails, I&apos;m energized by creating connections. When not coding or running, you&apos;ll find me on meandering city walks with my wife, collecting stories and snacks in equal measure.
          </p>
        </div>
      </section>
      {/* Down Arrow Indicator */}
      <div className="flex justify-center mb-8">
        <FaChevronDown className="text-primary animate-bounce" size={32} />
      </div>
      {/* Projects Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-primary mb-8 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text font-[Quicksand]">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card rounded-lg overflow-hidden font-[Quicksand]">
              <div className="relative w-full aspect-[3/2] bg-white/90">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain rounded-t-lg"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 font-[Quicksand]">{project.title}</h3>
                <p className="text-secondary mb-4 text-sm leading-relaxed font-[Quicksand]">{project.description}</p>
                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => {
                      const IconComponent = techIcons[tech];
                      return (
                        <span
                          key={techIndex}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-background text-foreground rounded-md text-xs font-medium font-[Quicksand] border border-foreground/10"
                        >
                          {IconComponent && <IconComponent size={12} />}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors text-sm font-medium font-[Quicksand]"
                    >
                      <FaExternalLinkAlt size={12} />
                      View Live
                    </Link>
                  )}
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors text-sm font-medium font-[Quicksand]"
                  >
                    <FaGithub size={12} />
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}