import { useEffect, useRef } from 'react';
import '../Styles/Project.css';
import project1 from '../assets/Screenshot (423).png';
import project2 from '../assets/Screenshot (424).png'
import project3 from '../assets/Screenshot (425).png'
import project4 from '../assets/Screenshot (8).png'
import project5 from '../assets/Screenshot (121).png'
import project6 from '../assets/Screenshot (164).png'

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);

  // Sample project data (replace with your actual projects)
  const projects = [
    {
      id: 1,
      title: "KC(Know Connectiom)",
      description: "I developed the backend of this application, focusing primarily on networking. I was responsible for building a robust and scalable backend.",
      tags: ["Express", "Node.js", "MongoDB","API","AWS"],
      image: `${project1}`,
      link: "#"
    },
    {
      id: 2,
      title: "RFH(Relince Foundation Hospital)",
      description: "I was one of the developers who built the backend of this application, and it is now nearing completion.This Project Own by Relince Group",
      tags: ["React.js", "Tailwind", "NODE.js","MongoDB","API"],
      image: `${project2}`,
      link: "#"
    },
    {
      id: 3,
      title: "Health Fitness App",
      description: "I was responsible for developing the Backend of this application, This Application is also in Devloping phase.",
      tags:  ["React.js", "Tailwind", "NODE.js","MongoDB","API","AWS"],
      image: `${project3}`,
      link: "#"
    },
    {
      id: 4,
      title: "RMS(Restaurent Management System)",
      description: "This application primarily focuses on minimizing the burden on restaurants by analyzing sales weekly, monthly, and yearly. It also allows users to order food online and reserve seats.",
      tags: ["React.js", "Mongo.Db", "Express","API","Redux","git"],
      image: `${project4}`,
      link: `${'https://github.com/Raghu3-3102/Restaurant-Management-Software'}`
    },
    {
      id: 5,
      title: "DMS(Docter Management System)",
      description: "This application primarily focuses on minimizing the burden on doctors by booking slot. It also allows patents to change and reshedule slot.",
      tags: ["React", "Express", "OAuth","API","Redux","git","MongoDB"],
      image: `${project5}`,
      link: "https://github.com/Raghu3-3102/Doctor-Management-System-"
    },
    {
      id: 6,
      title: "Clubwize",
      description: "This Project was given by ZikraByte Solution in Oder to see My Frontend Potentials . this Project have Complex Ui.",
      tags: ["next.js", "Tailwind","API","Redux","git"],
      image: `${project6}`,
      link: "https://clubwize-ui.vercel.app/modules"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = Math.floor(index / 3) * 0.2; // Stagger by rows
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, delay * 1000);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    Array.from(projectsRef.current.children).forEach(child => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            Here are some of my recent works. Each project represents unique challenges and solutions.
          </p>
        </div>

        <div className="projects-grid" ref={projectsRef}>
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                />
                <div className="project-overlay">
                  <a 
                    href={project.link} 
                    className="view-button"
                    aria-label={`View ${project.title} project`}
                  >
                  
                  {project.link == "#" ? "Locked Repo" : "View  Repo"}
                    
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;