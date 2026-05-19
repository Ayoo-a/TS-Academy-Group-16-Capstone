import React, { useState } from 'react';
import './Footer.css';
import LegalModal from './LegalModal';

const Footer = () => {
  const [modal, setModal] = useState(null);
  return (
    <footer className="main-footer">

      <div className="footer-about">
        <h4 className="footer-heading">About</h4>
        <p className="footer-description">
          We are Group 16 of Novara Software Development — a team of
          passionate learners building a React application to explore
          and visualize planetary data from our solar system.
        </p>
        <p className="footer-names">
          Awwal, Ayomide, Olalekan, ahmdallahyy-crypto, OCHUKOME
        </p>
      </div>

      <hr className="footer-hr" />

      <div className="footer-bottom">

        <div className="footer-left">
          <p className="footer-copyright">
            ©2026 Software Development Capstone Project Group-16 Novara Cohort.
            All rights reserved.
          </p>
          <a href="https://github.com/Ayoo-a/TS-Academy-Group-16-Capstone" target="_blank" rel="noopener noreferrer" className="footer-link">
            View our GitHub Repository
          </a>
        </div>

        <div className="footer-right">
          <a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
            TS Academy
          </a>
          <button
          className="footer-link"
          onClick={() => setModal('privacy')}
        >
          Privacy & Policy
        </button>

        <button
          className="footer-link"
          onClick={() => setModal('terms')}
        >
          Terms & Condition
        </button>
        </div>

      </div>
      {modal && <LegalModal type={modal} onClose={() => setModal(null)} />}
    </footer>
  );
};

export default Footer;