import React from 'react'
import './Intro.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Vector1 from '../../assets/vector1.png'
import Vector2 from '../../assets/vector2.png'
import Crown from '../../assets/crown.png'
import Thumb from '../../assets/thumbup.png'

import Boy from '../../assets/me.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';


const Intro = () => {
    const transition ={ duration: 2, type: 'spring'};

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''}}>Hi! I Am</span>
                    <span>Kimae Ngowa</span>
                    <span>Frontend Developer with experience in web designing and development, producing quality work.</span>
                </div>
                <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">

                <button className="button i-button">Hire Me!</button>
                </Link>
                <div className="i-icons">
                    <a href='https://github.com/Qimae'>
                    <FaGithub />
                    </a>
                    <a href='https://www.linkedin.com/in/kimae-ngowa-aa84328b'>
                    <FaLinkedin />
                        
                    </a>
                    <a href='https://instagram.com/Qimae'>
                    <FaInstagram />
                        
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <motion.div
                initial= {{top: '-4%', left: '74%'}}
                whileInView={{left: '68%'}}
                transition= {transition}
                className="floating-div"
                
                 style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div 
                initial={{left:'9rem', top: '18rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}
                className="floating-div"
                style={{ top: '18rem' }}>
                    <FloatingDiv image={Thumb} txt1='Best Design' txt2='Award' />
                </motion.div>
                <div className='blur' style={{ background: "rgb(238 210 255" }}></div>
                <div className='blur' style={{
                    background: "#c1f5ff",
                    top: '17rem', width: '21rem', height: '11rem', left: '-9rem'
                }}></div>
            </div>

        </div>
    )
}

export default Intro