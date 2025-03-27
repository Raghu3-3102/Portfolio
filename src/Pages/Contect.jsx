import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser'; // Add this dependency
import '../Styles/Contect.css';

// Initialize EmailJS (put these in your environment variables in production)
const SERVICE_ID = 'service_91t45k8';
const TEMPLATE_ID = 'template_o71a9oa';
const USER_ID = 'nHMAaxqiwNzXTiDNE';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = index * 0.15;
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, delay * 1000);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'raghvendrakumarpandey321@gmail.com' // Your receiving email
    }, USER_ID)
    .then((response) => {
      console.log('Email sent!', response.status, response.text);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    })
    .catch((error) => {
      console.error('Email failed:', error);
      setIsSubmitting(false);
      setSubmitError('Failed to send. Please try again later.');
    });
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Let's <span className="highlight">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to chat? Drop me a message!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form" ref={formRef}>
            {submitSuccess ? (
              <div className="success-message">
                <div className="success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>I'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="cta-button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {submitError && (
                  <div className="error-message">
                    {submitError}
                  </div>
                )}
                <div className="form-group floating">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="name">Your Name</label>
                  <div className="focus-border"></div>
                </div>

                <div className="form-group floating">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                  <div className="focus-border"></div>
                </div>

                <div className="form-group floating">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                  <div className="focus-border"></div>
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="send-icon" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info" ref={infoRef}>
            <div className="info-card email">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>Email Me</h3>
                <a href="mailto:raghvendrakumarpandey321@gmail.com">raghvendrakumarpandey321@gmail.com</a>
              </div>
              <div className="hover-effect"></div>
            </div>

            <div className="info-card phone">
              <div className="info-icon">📱</div>
              <div className="info-content">
                <h3>Call Me</h3>
                <a href="tel:+916204226533">+91 6204226533</a>
              </div>
              <div className="hover-effect"></div>
            </div>

            <div className="info-card social">
              <div className="info-icon">🌐</div>
              <div className="info-content">
                <h3>Follow Me</h3>
                <div className="social-links">
                  <a href="https://www.instagram.com/raghu_panday_970?igsh=MTV2cDVlMGVvZ3l2aw==" aria-label="Instagram">📸</a>
                  <a href="https://github.com/Raghu3-3102" aria-label="GitHub">💻</a>
                  <a href="https://www.linkedin.com/in/raghvendra-pandey-360a63266/" aria-label="LinkedIn">🔗</a>
                </div>
              </div>
              <div className="hover-effect"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${i * 0.2}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Contact;