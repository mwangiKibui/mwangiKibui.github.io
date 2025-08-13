import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/chamasoft.jpg';
import project2 from '@/assets/websacco.jpg';
import project3 from '@/assets/beyondrent.jpg';

const projects = [
  {
    title: "Chamasoft",
    description: "A solution for digitizing small scale saving groups financial operations",
    image: project1,
    technologies: ["React", "NodeJs","Socket.io", "PostgreSQL","AWS","Third-party API Integrations"],
    liveUrl: "https://chamasoft.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Websacco",
    description: "A solution for digitizing financial operations of small sized to medium sized Saccos.",
    image: project2,
    technologies: ["React", "NodeJs", "Socket.io", "PostgreSQL","Akamai","Third-party API Integrations"],
    liveUrl: "https://websacco.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Beyond Rent",
    description: "A solution for managing rent collection and communication for property owners.",
    image: project3,
    technologies: ["ASP.NET", "React", "MSSQL", "Azure","Third-party API Integrations"],
    liveUrl: "https://beyondrent.co",
    githubUrl: "https://github.com"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent worked on projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};