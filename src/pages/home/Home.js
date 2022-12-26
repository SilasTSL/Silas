import styles from './Home.module.css';

import React from 'react'
import { ContactMeButton } from '../../components/home/ContactMeButton';
import { Introduction } from '../../components/introduction/Introduction';
import { Experience } from '../../components/experience/Experience';

export const Home = () => {
    return (
        <div id="home" className={styles.homeContainer}>
            <h2 className={styles.homeIntro}>Nice to meet you, I'm</h2>
            <h1 className={styles.homeName}>Silas Tay</h1>
            <h3 className={styles.homeSubtitle}>Computer Scientist <span className={styles.homeSubtitleDivider}>.</span> Software Engineer <span className={styles.homeSubtitleDivider}>.</span> Passionate Entrepreneur</h3>
            <p className={styles.homeDescription}>I'm a Year 2 student studying Computer Science in the National University of Singapore. I am deeply interested in fields such as Software Engineering, Web Development and Artificial Intelligence, while also being an Aspiring Entrepreneur looking to change the lives of people around the globe.</p>
            <ContactMeButton />
            <Introduction />
            <Experience />
        </div>
    )
}
