import React from 'react';
import './Experience.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="experience" id='Experience'>
            <div className="archievement">
                <div className="circle" style={{color: darkMode?'var(--clr-blue)':''}}>2+</div>
                <span>years</span>
                <span>Experience</span>
            </div>
            <div className="archievement">
                <div className="circle" style={{color: darkMode?'var(--clr-blue)':''}}>2+</div>
                <span>completed</span>
                <span>Projects</span>
            </div>
            <div className="archievement">
                <div className="circle" style={{color: darkMode?'var(--clr-blue)':''}}>2+</div>
                <span>company</span>
                <span>Work</span>

            </div>

        </div>
    )
}

export default Experience