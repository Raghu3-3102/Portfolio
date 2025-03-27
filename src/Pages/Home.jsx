import React from 'react'
import { useEffect, useRef } from 'react';
import '../Styles/Home.css';
import img from '../assets/WhatsApp_Image_2025-03-26_at_12.01.27_PM-removebg-preview (1) (1).png';
import react_svg from '../assets/react.svg'
function Home() {  
   
      const textRef = useRef(null);
      const imageRef = useRef(null);
      const buttonsRef = useRef(null);
      const dynamicTextRef = useRef(null);
    
      useEffect(() => {
        // Staggered animation triggers
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              // Different delay for each element to prevent overlapping
              const delay = index * 0.2;
              setTimeout(() => {
                entry.target.classList.add('animate');
              }, delay * 1000);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
    
        if (textRef.current) observer.observe(textRef.current);
        if (imageRef.current) observer.observe(imageRef.current);
        if (buttonsRef.current) observer.observe(buttonsRef.current);
    
        // Dynamic text animation
        if (dynamicTextRef.current) {
          const dynamicText = dynamicTextRef.current;
          const items = dynamicText.querySelectorAll('li');
          
          let currentItem = 0;
          const animateText = () => {
            // Reset all items
            items.forEach(item => item.style.opacity = '0');
            
            // Show current item
            items[currentItem].style.opacity = '1';
            items[currentItem].style.animation = 'none';
            void items[currentItem].offsetWidth; // Trigger reflow
            items[currentItem].style.animation = 'typing 3s steps(15)';
            
            currentItem = (currentItem + 1) % items.length;
          };
          
          animateText();
          const interval = setInterval(animateText, 3000);
          
          return () => clearInterval(interval);
        }
      }, []);
    
      return (
        <section id="home" className="hero">
          <div className="hero-container">
            <div ref={textRef} className="hero-content">
              <h4 className="greeting">Hello, I'm</h4>
              <h1 className="name">Raghvendra</h1>
              <div className="animated-text">
                <span className="static-text">I'm a </span>
                <ul  className="dynamic-texts">
                  <div>Full Stack Devloper</div>
                </ul>
              </div>
              <p className="description">
                I craft beautiful, functional digital experiences with modern technologies.
                Passionate about solving complex problems through clean, efficient code.
              </p>
              <div ref={buttonsRef} className="hero-buttons">
                <a href="#contact" className="cta-button primary">
                  Hire Me
                  <span className="hover-effect"></span>
                </a>
                <a href="#projects" className="cta-button secondary">
                  View Work
                  <span className="hover-effect"></span>
                </a>
                <a href="https://drive.google.com/file/d/1ZandTMZVPIVS8FiGb_irTMa0CU8fYrc4/view"   className="cta-button primary">
                  Downolode Cv
                  <span className="hover-effect"></span>
                </a>
              </div>
              <div className="tech-stack">
                <span>Tech Stack</span>
                <div className="tech-icons">
                  {['react', 'node', 'python', 'aws', 'docker', 'mongodb'].map(tech => (
                    <div key={tech} className="tech-icon">
                       
                      <span>{tech}</span>
                      
                    </div>
                  ))}
                </div>
              </div>
            </div>
    
            <div ref={imageRef} className="hero-image">
              <div className="image-wrapper">
                <img 
                  src={img} 
                  alt="Profile" 
                  className="profile-image"
                  loading="eager"
                />
                <div className="glow-effect"></div>
                <div className="floating-shapes">
                  <div className="shape circle"></div>
                  <div className="shape triangle"></div>
                  <div className="shape square"></div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="scroll-indicator">
          <a href='#contact'>  <div className="mouse">
              <div className="wheel"></div>
            </div>
            </a>
            <span>Scroll Down</span>
            
          </div>
        </section>
      );
    };
    
    
    

export default Home;
