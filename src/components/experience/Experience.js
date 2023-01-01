import styles from './Experience.module.css';

import React from 'react'

export const Experience = () => {
    const toggleDescription = (experienceIndex) => {
        const element = document.getElementsByClassName(styles.experienceExperienceBodyContainer)[experienceIndex];
        element.classList.toggle(styles.show);
        element.classList.toggle(styles.active);
    }

    return (
        <div id="experience" className={styles.experienceContainer}>
            <div className={styles.experienceHeaderContainer}>
                <h2 className={styles.experienceHeaderNumber}>
                    02.
                </h2>
                <h2 className={styles.experienceHeader}>
                    Experience
                </h2>
            </div>
            <div className={styles.experienceBodyContainer}>
                <div className={styles.experienceExperienceContainer}>
                    <h3 className={styles.experienceExperienceHeader} onClick={() => toggleDescription(0)}>Ohmyhome</h3>
                    <div className={styles.experienceExperienceBodyContainer}>
                        <h4 className={styles.experienceExperienceTimeline}><span className={styles.highlight}>Data Intern</span> from 2021 April - August</h4>
                        <div className={styles.experienceExperienceDetails}>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Built programs to scrape dynamic and static websites (<span className={styles.highlight}>Python</span>, <span className={styles.highlight}>&nbsp;BeautifulSoup</span>, <span className={styles.highlight}>&nbsp;Selenium</span>, <span className={styles.highlight}>&nbsp;Docker</span>)</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Built robust data collection pipelines to feed company databases (<span className={styles.highlight}>GCP</span>, <span className={styles.highlight}>&nbsp;PostgreSQL</span>)</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Organised databases to meet client’s requirements</p></div>
                        </div>
                    </div>
                </div>

                <div className={styles.experienceExperienceContainer}>
                    <h3 className={styles.experienceExperienceHeader} onClick={() => toggleDescription(1)}>NUS SoC Orbital</h3>
                    <div className={styles.experienceExperienceBodyContainer}>
                        <h4 className={styles.experienceExperienceTimeline}><span className={styles.highlight}>Project Striker</span> from 2022 May - August</h4>
                        <div className={styles.experienceExperienceDetails}>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Built Striker, a task-managing application driven with data analytics</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Clean and Seamless UI build with <span className={styles.highlight}>&nbsp;React</span></p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Backend with <span className={styles.highlight}>&nbsp;Golang</span></p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Login Authentication with <span className={styles.highlight}>&nbsp;Firebase</span></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
