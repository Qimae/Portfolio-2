import React from 'react';
import './Works.css';
import Skillz from '../../assets/Skillz.png';
import Plaza from '../../assets/Plaza.png';
import Buildit from '../../assets/Buildit.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';



const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Worked for All these</span>
                <span>Brands & Clients</span>
                <span>I esteem basic substance structure, clean
                    plan designs, <br />and smart
                    communications.</span>
                <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">

                <button className="button s-button">Hire Me</button>
                </Link>
                <div className='blur s-blur1' style={{ background: "#abf1ff94" }}></div>
            </div>
            {/* right side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3, type: 'spring' }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Skillz} alt='' />
                    </div>
                    <div className="w-secCircle">
                        <img src={Plaza} alt='' />
                    </div>
                    <div className="w-secCircle">
                        <img src={Buildit} alt='' />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works