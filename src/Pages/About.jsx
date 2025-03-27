import { useEffect, useRef } from 'react';
import '../Styles/About.css';
import img from '../assets/WhatsApp_Image_2025-03-26_at_12.01.27_PM-removebg-preview (1) (1).png';

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = index * 0.2;
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, delay * 1000);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  const skills = [
    // { name: "Frontend", techs: ["React", "Next.js", "Tailwind"] },
    // { name: "Backend", techs: ["Node.js", "Express", "Django"] },
    // { name: "Mobile", techs: ["React Native", "Flutter"] }
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        {/* Text Content */}
        <div ref={textRef} className="about-content">
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <h3 className="section-subtitle">
            Full Stack Developer & UI/UX Designer
          </h3>
          <p className="about-text">
            I specialize in crafting seamless digital experiences with clean, 
            efficient code. With 1+ years in the industry, I bridge the gap between 
            beautiful design to Actual product also robust functionality.
          </p>
          <p className="about-text">
            My passion lies in solving complex problems through innovative 
            solutions that delight users and drive business results.
          </p>

          {/* Skills Grid */}
          <div ref={skillsRef} className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <h4 className="skill-title">{skill.name}</h4>
                <div className="tech-tags">
                  {skill.techs.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image with Floating Elements */}
        <div ref={imageRef} className="about-image">
          <div className="image-wrapper">
            <img 
              src={img} 
              alt="About Me" 
              className="profile-illustration"
            />
            <div className="floating-shapes">
              <div className="shape circle"></div>
              <div className="shape triangle"></div>
              <div className="shape square"></div>
            </div>
            <div className="experience-badge">
              <span className="years">5+</span>
              <span className="label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;