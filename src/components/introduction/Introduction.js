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
                        I graduated from the <span className={styles.highlight}>National University of Singapore</span> with a <span className={styles.highlight}>Bachelor of Computing (Computer Science) with Honours (Distinction)</span>, specialising in Artificial Intelligence and Software Engineering.
                    </p>
                    <p className={styles.introductionParagraph}>
                        I'm currently an <span className={styles.highlight}>Applied Machine Learning Engineer at TikTok</span>, working on MLOps infrastructure at scale. I'm passionate about <span className={styles.highlight}>distributed systems</span>, <span className={styles.highlight}>machine learning infrastructure</span>, and <span className={styles.highlight}>full-stack development</span>.
                    </p>
                </div>
                <div className={styles.introductionTopRightContainer}>
                    <img className={styles.introductionProfilePicture} src={require("../../images/silas.jpeg")}/>
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
