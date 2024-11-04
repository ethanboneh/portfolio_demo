// data/projects.ts
export interface Project {
    id: number;
    name: string;
    image: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      name: "Project One",
      image: "/images/project1.jpg",
      link: "www.youtube.com",
    },
    {
      id: 2,
      name: "Project Two",
      image: "/images/project2.jpg",
      link: "www.youtube.com",
    },
    // Add more projects as needed
  ];
  

// components/ProjectsSection.tsx
import Link from 'next/link';
import Image from 'next/image';

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project: Project) => (
          <Link href={project.link} key={project.id}>
            <div className="group">
              <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={200}
                  layout="responsive"
                  className="object-cover"
                />
                <div className="p-4 bg-white text-center">
                  <h3 className="text-lg font-semibold group-hover:text-blue-600">
                    {project.name}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
