import React from 'react';
import './Services.css';
import Design from '../../assets/layers.png';
import Developer from '../../assets/code.png';
import { Card } from '../Cards/Card';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';


export const Services = () => {
    const transition ={ duration: 2, type: 'spring'};
    
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
                <span>services</span>
                <span>I esteem basic substance structure, clean
                    plan designs, <br />and smart
                    communications.</span>
                    <a download="" href="https://drive.google.com/file/d/1u1396Pw4vHorijZ72AOo7QOdxP2mObAx/view?usp=sharing">
                <button className="button s-button">Download CV</button>
                </a>
                <div className='blur s-blur1' style={{ background: "#abf1ff94" }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <motion.div
                initial= {{left: '28rem'}}
                whileInView= {{left: '24rem'}}
                transition= {transition}
                >
                    <Card image={Design} heading={'Design'} details={'Figma, Pen & Paper, Font Awesome, Sketch'} />
                </motion.div>
                <motion.div 
                initial= {{left: '-11rem', top: '12rem'}}
                whileInView= {{left: '2rem'}}
                transition= {transition}
                >
                    <Card image={Developer} heading={'Developer'} details={'Bootstrap, Github, CodePen, jQuery, Chrome Dev Tools'} />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--clr-purple)" }}></div>
            </div>

        </div>
    )
}
