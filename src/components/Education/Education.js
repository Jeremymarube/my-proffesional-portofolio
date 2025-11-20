'use client';

import { useState } from 'react';
import Image from 'next/image';
import CertificateModal from '@/components/CertificateModal/CertificateModal';

const amiSoftSkills = [
  {
    title: 'Problem Solving',
    description:
      'Diagnosing blockers quickly, running root-cause analysis, and proposing pragmatic solutions.',
    image: '/images/certificates/problem-solving.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title: 'Setting goals for success',
    image: '/images/certificates/sgs.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title: 'Self-Management',
    description:
      'Owning priorities, safeguarding focus time, and keeping commitments visible with async updates.',
    image: '/images/certificates/self-management.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title: 'Emotional Intelligence',
    description:
      'Translating complex ideas into clear, actionable insights for teammates, clients, and stakeholders.',
    image: '/images/certificates/inteligence.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title: 'Project Management 101',
    description:
      'Driving initiatives end-to-end, facilitating meetings, and ensuring objectives are delivered on time.',
    image: '/images/certificates/pm 101.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title: 'Influencing Others',
    image: '/images/certificates/others.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title: 'Personal Productivity',
    image: '/images/certificates/pp.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title: 'Entrepreneurship',
    image: '/images/certificates/ee.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title: 'Communication',
    image: '/images/certificates/communication.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title: 'Perfomance Management',
    image: '/images/certificates/perfomance-management.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title: 'Project Close Out',
    description:
      'Creating inclusive spaces for feedback, pairing on tasks, and building trust across distributed teams.',
    image: '/images/certificates/close-out.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title: 'Implementing projects',
    image: '/images/certificates/implementing-projects.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title:'Project Planning 2 - Monitoring',
    image:'/images/certificates/pp2m.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title:'Project Planning 1 - Scoping',
    image:'/images/certificates/pp1s.jpg',
    issuer: 'African Managers Institute (AMI)',
  },
  {
    title:'Speak up and lead',
    image:'/images/certificates/sul.jpg'
  }
];

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCertListVisible, setIsCertListVisible] = useState(false);

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };
  return (
    <section id="education">

      <h2>Education</h2>
      <div className="education-item">
        <div className="education-media">
          <Image 
            src="/images/moringa.JPG" 
            alt="Moringa School campus" 
            width={320}
            height={220}
            className="education-photo"
            sizes="(max-width: 768px) 60vw, 320px"
            quality={75}
            loading="lazy"
          />
        </div>
        <div className="education-icon">
          <i className="fas fa-graduation-cap" aria-hidden />
        </div>
        <div className="education-content">
          <h3>Software Engineering</h3>
          <h4>Moringa School</h4>
          <p className="education-period">2025 - Present</p>
          <p className="education-description">
             Just graduated from Moringaschool where i was pursuing a comprehensive Software Engineering program focusing on full-stack development, 
                    including HTML, CSS, JavaScript, React, Python, and Flask. Learning modern development practices, 
                    version control, and collaborative software development.
          </p>
          <div className="education-skills">
            <span className="skill-tag">Full-Stack Development</span>
            <span className="skill-tag">Web Technologies</span>
            <span className="skill-tag">Software Engineering Principles</span>
            <span className="skill-tag">Version Control</span>
          </div>

        </div>
      </div>

      <div className="certifications-card">
        <div className="certifications-header">
          <h4>
            <i className="fas fa-award" aria-hidden />
            Professional Certifications · African Managers Institute (AMI)
          </h4>
          <button
            className="cert-markdown-toggle"
            onClick={() => setIsCertListVisible((prev) => !prev)}
            aria-expanded={isCertListVisible}
            aria-controls="ami-certificates"
            type="button"
          >
            <i className={`fas fa-chevron-${isCertListVisible ? 'up' : 'down'}`} aria-hidden />
            {isCertListVisible ? 'Hide certificates' : 'Show certificates'}
          </button>
        </div>
        {isCertListVisible && (
          <div id="ami-certificates" className="cert-card-grid">
            {amiSoftSkills.map((skill) => (
              <article key={skill.title} className="cert-card">
                <h5 className="cert-title">{skill.title}</h5>
                <button
                  className="cert-view-btn"
                  onClick={() => handleViewCertificate(skill)}
                  aria-label={`View ${skill.title} certificate`}
                >
                  <i className="fas fa-eye" aria-hidden />
                  View Certificate
                </button>
              </article>
            ))}
          </div>
        )}
      </div>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        certificate={selectedCertificate}
      />
    </section>
  );
};

export default Education;

