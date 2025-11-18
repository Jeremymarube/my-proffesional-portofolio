import Image from 'next/image';

const projects = [
  {
    title: 'School-management-system',
    description: 'A command-line application for tracking income and expenses, helping users manage their budget directly from the terminal.',
    link: 'https://github.com/Jeremymarube/school-management-system',
    className: 'project-1',
    image: '/images/school.png',
  },
  {
    title: 'Movie-browser',
    description: 'A web-based movie browser that lets users search and explore films using an external API, with details like ratings and summaries.',
    link: 'https://github.com/Jeremymarube/movie-browser',
    className: 'project-2',
    image: '/images/movie.png',
  },
  {
    title: 'Petrol-Station-Tracker',
    description: 'A collaborative project for tracking petrol stations, their locations, and key details to make station management and lookup easier.',
    link: 'https://github.com/Gideon-Kipserem/Petrol-Station-Tracker',
    className: 'project-3',
    image: '/images/petrol.png',
  },
  {
    title: 'regen',
    description: 'An application focused on practicing and showcasing modern web development skills, including responsive layouts and clean UI.',
    link: 'https://github.com/Jeremymarube/regen',
    className: 'project-4',
    image: '/images/regen.png',
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
                className="project-thumb"
              />
            </div>
            <h3>{project.title}</h3>
            {project.description && <p>{project.description}</p>}
            <a href={project.link} target="_blank" rel="noreferrer">
              View on Github
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

