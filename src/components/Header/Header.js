import React from 'react';
import style from './Header.module.css';
import resumeSvg from '../../assets/resume.svg';

function Header  () {
    return (
        <div className={style.container}>
            <p className={style.heading}> A <span>Resume</span> that stands out
            Make your own resume. <span>It's free</span></p>
            
            <div class={style.right}>
                <img src={resumeSvg} alt="Resume"/>
            </div>
        </div>
    )
}

export default Header;