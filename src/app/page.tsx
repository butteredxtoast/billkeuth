import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
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
    liveUrl: "https://match-chat.social",
    githubUrl: "https://github.com/butteredxtoast/coffee-chat",
    techStack: ["PHP", "Laravel", "Tailwind CSS", "Docker", "Slack API"],
    featured: false
  }
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto">
      {/* Header Section */}
      <section className="mb-16 glass-card rounded-xl p-8 md:p-12">
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
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
          Bill Keuth
        </h1>
        <div className="flex items-center gap-2 text-secondary mb-4">
          <FaMapMarkerAlt size={16} />
          <span>San Francisco, CA</span>
        </div>
        <p className="text-xl md:text-2xl text-secondary mb-8">
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

        <div className="prose max-w-none text-secondary">
          <p className="text-lg space-y-6">
            Howdy! I spend my days writing code and my early mornings co-leading the November Project SF 
            community.
          </p>
          
          <div className="mt-6 space-y-2">
            <p className="text-lg">
              Outside of work, I find joy in:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li className="flex items-center gap-2">
                <span className="text-accent">→</span> 
                Supporting fellow runners (I am an RRCA certified running coach)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">→</span>
                Finding peace on Bay Area trails
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">→</span>
                Creating music and building small, meaningful projects
              </li>
            </ul>
          </div>

          <p className="text-lg mt-6">
            At heart, I&apos;m just someone who believes in the power of community. Whether it&apos;s through 
            technology, movement, or simply sharing space with others, I&apos;ve found that genuine 
            connections make everything better.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-primary mb-8 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full aspect-[3/2] bg-gray-50">
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
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-secondary mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-600 mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => {
                      const IconComponent = techIcons[tech];
                      return (
                        <span
                          key={techIndex}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
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
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors text-sm font-medium"
                  >
                    <FaExternalLinkAlt size={12} />
                    View Live
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors text-sm font-medium"
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