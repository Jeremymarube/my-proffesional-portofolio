import Image from 'next/image';
const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-image">
        <Image
          src="/images/IMG-20230219-WA0009~2[1].jpg"
          alt="Jeremy Marube"
          width={400}
          height={600}
          quality={70}
          sizes="(max-width: 1024px) 80vw, 400px"
          priority
        />
      </div>
      <div className="hero-content">
        <h1>Welcome to my professional portfolio</h1>
        <p>Hello, am Jeremy Marube Rioba,a full-stack developer, with experience in HTML, CSS, REACT, JAVASCRIPT,PYTHON and FLASK.</p>
        <div className="hero-buttons">
          <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
             View Resume
          </a>

          <a href="#about" className="btn">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;