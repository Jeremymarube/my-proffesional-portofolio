import Image from 'next/image';

const projects = [
  {
    title: 'Milimani-Youth',
    description: 'is a public-facing site and member portal for the youth community of Milimani Seventh-day Adventist Church in Nakuru, Kenya. It includes public ministry information, events, devotionals, a media library and photo galleries, plus authenticated member and administrator workflows.',
    website: 'https://milimani-youth.vercel.app/',
    className: 'project-1',
    image: '/images/church.png',
    technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Flask', 'Render', 'Vercel'],
  },

  {
    title: 'Pulse Music Player',
    description:
      'A web-based music player that lets users connect to their local storage, upload and play their own music.',
    website: 'https://jeremymarube.github.io/movie-browser/',
    className: 'project-2',
    image: '/images/pulse.png',
    technologies: [ 'Javascript', 'html',  'CSS'],
  },
  
  {
    title: 'Movie-browser',
    description:
      'A web-based movie browser that lets users search and explore films using an external API, with details like ratings and summaries.',
    website: 'https://jeremymarube.github.io/movie-browser/',
    className: 'project-3',
    image: '/images/movie.png',
    technologies: [ 'Javascript', 'html', 'json API', 'TMDB', 'CSS'],
  },
  {
    title: 'Petrol-Station-Tracker',
    description:
      'A collaborative project for tracking petrol stations, their locations, and key details to make station management and lookup easier.',
    website: 'https://petrol-station-tracker-hexh.vercel.app/',
    className: 'project-4',
    image: '/images/petrol.png',
    technologies: ['Next.js', 'flask', 'python', 'SQLAlchemy', 'Tailwind CSS'],
  },
  {
    title: 'SoleStreet',
    description:
      'Fast mobile sneaker store',
    website: 'https://soles-street-vaoe.vercel.app/',
    className: 'project-5',
    image: '/images/solestreet.png',
    technologies: ['Next.js', 'Postgresql', 'tailwind', 'Flask', 'render', 'Vercel'],
  },
  {
    title: 'ReGen',
    description:
      'AI-powered waste and sustainability assistant that helps communities classify waste, track carbon footprints, and form greener habits.',
    website: 'https://regen-pi.vercel.app/',
    className: 'project-6',
    image: '/images/regen.png',
    technologies: ['Next.js', 'OpenAI', 'SQLalchemy', 'tailwind', 'Vercel'],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div id="projects-list">
        {projects.map((project) => (
          <div key={project.title} className={`project-card ${project.className}`}>
            <div className="project-media">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={800}
                height={450}
                quality={70}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="project-thumb"
              />
            </div>
            <h3>{project.title}</h3>
            {project.description && <p>{project.description}</p>}
            {project.technologies?.length > 0 && (
              <ul className="project-tech-list">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}
            <div className="project-links">
              {project.website && (
                <a href={project.website} target="_blank" rel="noreferrer">
                  Check it out
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  View on Github
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

