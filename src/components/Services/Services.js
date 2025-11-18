const services = [
  {
    title: 'Frontend Development',
    description: 'Responsive, accessible interfaces built with React and modern CSS.',
    icon: 'fas fa-paint-brush',
  },
  {
    title: 'Backend Development',
    description: 'RESTful APIs and server logic using Node.js, Python, and Flask.',
    icon: 'fas fa-database',
  },
  {
    title: 'Full-Stack Solutions',
    description: 'End-to-end product development from ideation to deployment.',
    icon: 'fas fa-layer-group',
  },
  {
    title: 'Mobile-First Design',
    description: 'Designing websites that work perfectly on all devices. Responsive layouts and optimized user experiences for mobile and desktop.',
    icon: 'fas fa-chalkboard-teacher',
  }
];

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <div className="service-icon">
              <i className={service.icon} aria-hidden />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

