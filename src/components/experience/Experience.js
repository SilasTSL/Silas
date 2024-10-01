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
                    <h3 className={styles.experienceExperienceHeader} onClick={() => toggleDescription(0)}>Versiro</h3>
                    <div className={styles.experienceExperienceBodyContainer}>
                        <h4 className={styles.experienceExperienceTimeline}><span className={styles.highlight}>Machine Learning and Full-stack Engineer</span> from 2023 Sep - 2024 Jan</h4>
                        <div className={styles.experienceExperienceDetails}>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>In-depth analysis and exploration of <span className={styles.highlight}>Sequence-to-Sequence Time Series machine learning models</span></p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Explored and implemented overhaul of data collection processes with <span className={styles.highlight}>Azure Databricks</span> and <span className={styles.highlight}>Azure SQL database</span></p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Optimization of <span className={styles.highlight}>Azure Machine Learning Pipeline</span> for real-time inferencing and training</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Designed and developed <span className={styles.highlight}>Company’s Landing Page</span> and <span className={styles.highlight}>Customer-Facing Tutorial Hub</span> for company’s API services</p></div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.experienceExperienceContainer}>
                    <h3 className={styles.experienceExperienceHeader} onClick={() => toggleDescription(1)}>TikTok - Applied Machine Learning Infrastructure (Singapore)</h3>
                    <div className={styles.experienceExperienceBodyContainer}>
                        <h4 className={styles.experienceExperienceTimeline}><span className={styles.highlight}>Backend Engineer Intern</span> from 2023 May - August</h4>
                        <div className={styles.experienceExperienceDetails}>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Assisted with securing data APIs under <span className={styles.highlight}>&nbsp;Project Clover</span></p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Built <span className={styles.highlight}>&nbsp;Flow Capacity Assessment Service</span> to simulate performance of compute clusters under heavy traffic</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Helped with development of <span className={styles.highlight}>&nbsp;Internal Traffic Monitoring Interface</span></p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Worked daily with <span className={styles.highlight}>&nbsp;Internal Cloud Services</span></p></div>
                        </div>
                    </div>
                </div>

                <div className={styles.experienceExperienceContainer}>
                    <h3 className={styles.experienceExperienceHeader} onClick={() => toggleDescription(2)}>NUS SoC Orbital</h3>
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

                <div className={styles.experienceExperienceContainer}>
                    <h3 className={styles.experienceExperienceHeader} onClick={() => toggleDescription(3)}>Ohmyhome</h3>
                    <div className={styles.experienceExperienceBodyContainer}>
                        <h4 className={styles.experienceExperienceTimeline}><span className={styles.highlight}>Data Intern</span> from 2021 April - August</h4>
                        <div className={styles.experienceExperienceDetails}>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Built programs to scrape dynamic and static websites (<span className={styles.highlight}>Python</span>, <span className={styles.highlight}>&nbsp;BeautifulSoup</span>, <span className={styles.highlight}>&nbsp;Selenium</span>, <span className={styles.highlight}>&nbsp;Docker</span>)</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Built robust data collection pipelines to feed company databases (<span className={styles.highlight}>GCP</span>, <span className={styles.highlight}>&nbsp;PostgreSQL</span>)</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Organised databases to meet client’s requirements</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
