import styles from './Experience.module.css';

import React from 'react'

export const Experience = () => {
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
                    <h3 className={styles.experienceExperienceHeader}>Ohmyhome</h3>
                    <h4 className={styles.experienceExperienceTimeline}><span className={styles.highlight}>Data Intern</span> from 2021 April - August</h4>
                    <div className={styles.experienceExperienceDetails}>
                        <p className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/>Built programs to scrape dynamic and static websites (<span className={styles.highlight}>Python</span>, <span className={styles.highlight}>&nbsp;BeautifulSoup</span>, <span className={styles.highlight}>&nbsp;Selenium</span>, <span className={styles.highlight}>&nbsp;Docker</span>)</p>
                        <p className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/>Built robust data collection pipelines to feed company databases (<span className={styles.highlight}>GCP</span>, <span className={styles.highlight}>&nbsp;PostgreSQL</span>)</p>
                        <p className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/>Organised databases to meet client’s requirements</p>
                    </div>
                </div>

                <div className={styles.experienceExperienceContainer}>
                    <h3 className={styles.experienceExperienceHeader}>NUS SoC Orbital</h3>
                    <h4 className={styles.experienceExperienceTimeline}><span className={styles.highlight}>Project Striker</span> from 2022 May - August</h4>
                    <div className={styles.experienceExperienceDetails}>
                        <p className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/>Built Striker, a task-managing application driven with data analytics</p>
                        <p className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/>Clean and Seamless UI build with <span className={styles.highlight}>&nbsp;React</span></p>
                        <p className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/>Backend with <span className={styles.highlight}>&nbsp;Golang</span></p>
                        <p className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/>Login Authentication with <span className={styles.highlight}>&nbsp;Firebase</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
