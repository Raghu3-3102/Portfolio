import { useEffect, useRef, useState } from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [particles, setParticles] = useState([]);
  const footerRef = useRef(null);
  const gameAreaRef = useRef(null);
  const characterRef = useRef(null);

  // Mini-game: Collect floating tech icons
  useEffect(() => {
    if (!gameActive) return;

    const gameArea = gameAreaRef.current;
    const character = characterRef.current;
    let characterPosition = 50;
    let animationFrame;

    const moveCharacter = (e) => {
      if (e.type === 'mousemove') {
        characterPosition = (e.clientX / window.innerWidth) * 100;
      } else if (e.type === 'touchmove') {
        characterPosition = (e.touches[0].clientX / window.innerWidth) * 100;
      }
      
      character.style.left = `calc(${Math.min(95, Math.max(5, characterPosition))}% - 20px)`;
    };

    // Create floating tech icons
    const createParticle = () => {
      const techIcons = ['⚛️', '💻', '📱', '🖥️', '🔌', '📊', '🛠️', '⚙️'];
      const newParticle = {
        id: Date.now() + Math.random(),
        icon: techIcons[Math.floor(Math.random() * techIcons.length)],
        left: Math.random() * 90 + 5,
        speed: Math.random() * 2 + 1
      };
      setParticles(prev => [...prev, newParticle]);

      if (gameActive) {
        setTimeout(createParticle, Math.random() * 1500 + 500);
      }
    };

    // Game loop
    const gameLoop = () => {
      setParticles(prev => {
        const updated = prev.map(p => ({
          ...p,
          top: (p.top || 0) + p.speed
        })).filter(p => {
          // Check if caught by character
          const charLeft = characterPosition;
          if (p.top > 80 && p.top < 90 && 
              p.left > charLeft - 5 && p.left < charLeft + 5) {
            setScore(s => s + 10);
            return false;
          }
          return p.top < 100;
        });
        return updated;
      });
      
      if (gameActive) {
        animationFrame = requestAnimationFrame(gameLoop);
      }
    };

    // Event listeners
    window.addEventListener('mousemove', moveCharacter);
    window.addEventListener('touchmove', moveCharacter);
    
    // Start game elements
    createParticle();
    gameLoop();

    return () => {
      window.removeEventListener('mousemove', moveCharacter);
      window.removeEventListener('touchmove', moveCharacter);
      cancelAnimationFrame(animationFrame);
    };
  }, [gameActive]);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content">
        {/* Main footer content */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo">Raghu</div>
            <p>Creating digital experiences that matter</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h3>Explore</h3>
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#journey">Journey</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="link-group">
              <h3>Connect</h3>
              <a href="https://www.linkedin.com/in/raghvendra-pandey-360a63266/">LinkedIn</a>
              <a href="https://github.com/Raghu3-3102">GitHub</a>
              <a href="https://www.instagram.com/raghu_panday_970?igsh=MTV2cDVlMGVvZ3l2aw==">instagram</a>
              <a href="https://www.facebook.com/share/1AXWWhbuCf/">Facebook</a>
            </div>
            
            {/* <div className="link-group">
              <h3>Legal</h3>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div> */}
          </div>
        </div>

        {/* Interactive game section */}
        <div className="game-section">
          <div className="game-header">
            <h3>Quick Game: Catch the Tech!</h3>
            <button 
              onClick={() => setGameActive(!gameActive)}
              className="game-toggle"
            >
              {gameActive ? 'Stop Game' : 'Play Game'}
            </button>
          </div>
          
          {gameActive && (
            <div className="game-area" ref={gameAreaRef}>
              <div className="game-score">Score: {score}</div>
              <div className="game-character" ref={characterRef}>🤖</div>
              {particles.map(p => (
                <div 
                  key={p.id}
                  className="game-particle"
                  style={{
                    left: `${p.left}%`,
                    top: `${p.top || 0}%`
                  }}
                >
                  {p.icon}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} YourName. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="GitHub">💻</a>
            <a href="#" aria-label="LinkedIn">🔗</a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="footer-orb orb-1"></div>
      <div className="footer-orb orb-2"></div>
    </footer>
  );
};

export default Footer;