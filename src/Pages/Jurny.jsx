import { useEffect, useRef, useState } from 'react';
import '../Styles/Jurny.css';

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const milestones = [
    {
      title: "First Internship",
      company: "ZikraByte Solution.",
      period: "Feb 2024 - May 2024",
      description: "Developed React components for their SaaS platform. Improved load times by 30% through code optimization.",
      icon: "👨‍💻",
      tags: ["React", "Node.js", "MongoDB"],
      type: "internship"
    },
    {
      title: "Second Internship",
      company: "North Star Matrix.",
      period: "June 2024 - sept 2024",
      description: "Led Frontend devlopment. Implemented Redux and  authentication and real-time database features in backend.",
      icon: "🚀",
      tags: ["React Native", "Firebase", "UI/UX"],
      type: "internship"
    },
    {
      title: "Full-time Position",
      company: "Innovatech Solutions",
      period: "Oct 2024 - Present",
      description: "Promoted to Juniur Full Stack Developer. Architecting microservices and mentoring junior developers.",
      icon: "🎯",
      tags: ["Next.js", "AWS", "Docker", "Team Lead"],
      type: "job"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // Animate each milestone sequentially
          const items = entry.target.querySelectorAll('.milestone');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate');
            }, index * 300);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="journey" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Career Journey</span>
          </h2>
          <p className="section-subtitle">
            From internships to professional growth - the path that shaped me
          </p>
        </div>

        <div className="timeline-container">
          {/* Animated progress bar */}
          <div className="timeline-progress">
            <div 
              className="progress-bar" 
              style={{ width: `${(activeIndex + 1) * 33.33}%` }}
            ></div>
          </div>

          {/* Interactive timeline */}
          <div className="timeline" ref={timelineRef}>
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`milestone ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="milestone-icon">{milestone.icon}</div>
                <div className="milestone-dot"></div>
                <div className="milestone-date">{milestone.period}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone cards */}
        <div className="milestone-cards">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`milestone-card ${index === activeIndex ? 'active' : ''}`}
              data-type={milestone.type}
            >
              <div className="card-header">
                <div className="card-icon">{milestone.icon}</div>
                <div>
                  <h3>{milestone.title}</h3>
                  <p className="company">{milestone.company}</p>
                  <p className="period">{milestone.period}</p>
                </div>
              </div>
              <p className="description">{milestone.description}</p>
              <div className="tags">
                {milestone.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <div className="glow-effect"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="particles">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animationDelay: `${i * 0.3}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Journey;