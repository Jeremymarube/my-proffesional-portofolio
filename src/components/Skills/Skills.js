const skills = [
  { icon: 'fab fa-html5', label: 'HTML' },
  { icon: 'fab fa-css3-alt', label: 'CSS' },
  { icon: 'fab fa-js-square', label: 'JavaScript' },
  { icon: 'fab fa-react', label: 'React' },
  { icon: 'fab fa-python', label: 'Python' },
  { icon: 'fas fa-flask', label: 'Flask', extraClass: 'flask-skill' },
  { icon: 'fas fa-database', label: 'SQL' },
  { icon: 'fab fa-git-alt', label: 'Git' },
  { icon: 'fas fa-layer-group', label: 'Next.js' }


];

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.label} className={skill.extraClass}>
            <i className={skill.icon} aria-hidden />
            {skill.label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

