'use client';

import { useEffect } from 'react';
import Image from 'next/image';

const CertificateModal = ({ isOpen, onClose, certificate }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="cert-modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times" />
        </button>
        <div className="cert-modal-image-wrapper">
          <Image
            src={certificate.image}
            alt={`${certificate.title} Certificate`}
            width={800}
            height={600}
            className="cert-modal-image"
            priority
          />
        </div>
        <div className="cert-modal-info">
          <h3>{certificate.title}</h3>
          <p className="cert-modal-issuer">{certificate.issuer}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;

