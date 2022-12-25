import styles from './Introduction.module.css';

import React from 'react'

export const Introduction = () => {
    return (
        <div id="introduction" className={styles.introductionContainer}>
            <div className={styles.introductionTopContainer}>
                <div className={styles.introductionTopLeftContainer}>
                    <div className={styles.introductionHeaderContainer}>
                        <h2 className={styles.introductionHeaderNumber}>
                            01.
                        </h2>
                        <h2 className={styles.introductionHeader}>
                            Introduction
                        </h2>
                    </div>
                    <p className={styles.introductionParagraph}>
                        Hi! I'm <span className={styles.highlight}>Silas</span> and I enjoy <span className={styles.highlight}>creating solutions to solve everyday issues</span>. My interest in Computer Science began back in 2017, when I explored many online courses and fell in love with programming.
                    </p>
                    <p className={styles.introductionParagraph}>
                        Today, I'm a <span className={styles.highlight}>Year 2 Computer Science student</span> in the <span className={styles.highlight}>National University of Singapore</span>, aiming to focus on Software Engineering and Artificial Intelligence.
                    </p>
                    <p className={styles.introductionParagraph}>
                        Some of the skills I've gained includes <span className={styles.highlight}>React</span>, <span className={styles.highlight}>Golang</span>, <span className={styles.highlight}>Google Cloud Platform</span> and <span className={styles.highlight}>Docker</span>.
                    </p>
                </div>
                <div className={styles.introductionTopRightContainer}>
                    <img className={styles.introductionProfilePicture} src={require("../../images/placeholder-profile-pic.jpeg")}/>
                </div>
            </div>
            <div className={styles.introductionIconRowContainer}>
                    <img className={styles.introductionIcon + " " + styles.introductionReactIcon} src={require("../../images/react.png")}/>
                    <img className={styles.introductionIcon} src={require("../../images/golang.png")}/>
                    <img className={styles.introductionIcon} src={require("../../images/gcp.png")}/>
                    <img className={styles.introductionIcon} src={require("../../images/docker.png")}/>
            </div>
        </div>
    )
}
