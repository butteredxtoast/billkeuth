import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

/* const projects = [
  {
    title: "Project 1",
    description: "Description of project 1 goes here. You can edit this later with your actual project details.",
    image: "/images/project-placeholder.jpg",
    link: "#"
  },
  {
    title: "Project 2",
    description: "Description of project 2 goes here. You can edit this later with your actual project details.",
    image: "/images/project-placeholder.jpg",
    link: "#"
  },
  // Add more projects as needed
]; */

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
            At heart, I'm just someone who believes in the power of community. Whether it's through 
            technology, movement, or simply sharing space with others, I've found that genuine 
            connections make everything better.
          </p>
        </div>
      </section>

      {/* Projects Section - Uncomment when ready to add project details
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-primary mb-8 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <Link href={project.link} 
                      className="text-primary hover:text-secondary transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      */}
    </main>
  );
}
