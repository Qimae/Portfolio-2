import React from 'react';
import './Footer.css';
import Wave from '../../assets/wave.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt='' style={{width: '100%'}}/>
        <div className="f-content">
            <span>Kimaekahindi@yahoo.com</span>
            <div className="f-icons">
            <a href='https://www.instagram.com/Qimae'>
                <FaInstagram />
                </a>
                <a href='https://www.linkedin.com/in/kimae-ngowa-aa84328b'>
                <FaLinkedin />
                </a>
                <a href='https://github.com/Qimae'>
                <FaGithub />
                </a>
            </div>
        </div>
    </div>
  );
}

export default Footer