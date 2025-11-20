const Footer = () => {
  return (
    <footer>
      <h2 className="sr-only">Site footer</h2>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#hero">
                <i className="fas fa-home" aria-hidden /> Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="fas fa-user" aria-hidden /> About
              </a>
            </li>
            <li>
              <a href="#skills">
                <i className="fas fa-code" aria-hidden /> Skills
              </a>
            </li>
            <li>
              <a href="#education">
                <i className="fas fa-graduation-cap" aria-hidden /> Education
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>More</h3>
          <ul className="footer-links">
            <li>
              <a href="#projects">
                <i className="fas fa-folder-open" aria-hidden /> Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="fas fa-envelope" aria-hidden /> Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/jeremy-marube-b0a648357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" aria-hidden /> LinkedIn
            </a>
            <a href="https://github.com/Jeremymarube" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github" aria-hidden /> GitHub
            </a>
            <a
              href="https://www.instagram.com/jeremmycodes/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" aria-hidden /> Instagram
            </a>
            <a
              href="https://x.com/JeremyRioba3912?t=YiS9_dPC_C9fsbe07jZhjw&s=08"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <i className="fab fa-twitter" aria-hidden /> Twitter
            </a>
            <a href="https://www.tiktok.com/@jeremycodes22" target="_blank" rel="noreferrer" aria-label="TikTok">
              <i className="fab fa-tiktok" aria-hidden /> TikTok
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Jeremy Marube. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

