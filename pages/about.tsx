import React, { FC } from 'react'
import aboutStyles from '../styles/About.module.css'

const About: FC = () => {
    return (
        <div>
            <p className={aboutStyles.description}>Stay up to date with all things entrepreneurial.</p>
        </div>
    )
}

export default About