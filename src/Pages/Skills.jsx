import { useEffect, useRef } from 'react';
import '../Styles/Skills.css';

const Skills = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  // Skill categories with icons (using emojis, replace with actual icons)
  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript", level: 98 },
        { name: "HTML/CSS", level: 100 }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express", level: 88 },
        { name: "Python", level: 85 },
        { name: "Django", level: 80 }
      ]
    },
    {
      title: "Mobile",
      icon: "📱",
      skills: [
        { name: "React Native", level: 90 },
        { name: "Flutter", level: 75 },
        { name: "iOS/Swift", level: 70 }
      ]
    },
    {
      title: "DevOps",
      icon: "🛠️",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 88 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = index * 0.15;
          setTimeout(() => {
            entry.target.classList.add('animate');
            // Animate skill bars after card appears
            if (entry.target.querySelector('.skill-bar-fill')) {
              entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                bar.style.width = bar.parentElement.getAttribute('data-level') + '%';
              });
            }
          }, delay * 1000);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    Array.from(skillsRef.current.children).forEach(child => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies I've mastered and regularly work with
          </p>
        </div>

        <div className="skills-grid" ref={skillsRef}>
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar" data-level={skill.level}>
                      <div className="skill-bar-fill"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech bubbles */}
        <div className="tech-bubbles">
          {['TypeScript', 'GraphQL', 'Redux', 'MongoDB', 'Firebase', 'Git', 'SASS', 'Jest'].map((tech, index) => (
            <div 
              key={index} 
              className="tech-bubble"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;