import styles from './Portfolio.module.css';

import React from 'react'

export const Portfolio = () => {
    return (
        <div id="portfolio" className={styles.portfolioContainer}>
            <div className={styles.portfolioHeaderContainer}>
                <h2 className={styles.portfolioHeaderNumber}>
                    03.
                </h2>
                <h2 className={styles.portfolioHeader}>
                    Portfolio
                </h2>
            </div>
            <div className={styles.portfolioPieceContainer}>
                <div className={styles.portfolioPieceLeftContainer}>
                    <a className={styles.portfolioPieceName} href="https://www.codingcucumbers.com/" target="_blank">Coding Cucumbers</a>
                    <div className={styles.portfolioPieceDescriptionContainer}>
                        <p className={styles.portfolioPieceDescription}><span className={styles.highlight}>Educational blog</span> built with native <span className={styles.highlight}>HTML</span>, <span className={styles.highlight}>CSS</span> and <span className={styles.highlight}>JavaScript</span>. Blog articles content mainly revolve around general coding topics and NUS Computer Science modules.</p>
                        <br></br>
                        <p className={styles.portfolioPieceDescription}>Built in <span className={styles.highlight}>May 2021</span></p>
                    </div>
                </div>
                <a className={styles.portfolioPieceImageLink} href="https://www.codingcucumbers.com/" target="_blank">
                    <img className={styles.portfolioPieceImage} src={require("../../images/codingcucumbers-ss.png")}/>
                </a>
            </div>

            <div className={styles.portfolioPieceContainer}>
                <a className={styles.portfolioPieceImageLink} href="https://striker-frontend.herokuapp.com/" target="_blank">
                    <img className={styles.portfolioPieceImage} src={require("../../images/striker-ss.png")}/>
                </a>
                <div className={styles.portfolioPieceRightContainer}>
                    <a className={styles.portfolioPieceName} href="https://striker-frontend.herokuapp.com/" target="_blank">STRIKER</a>
                    <div className={styles.portfolioPieceDescriptionContainer}>
                        <p className={styles.portfolioPieceDescription}><span className={styles.highlight}>Task Manager application</span> grounded in the principles of simplicity and intentionality. Frontend built with <span className={styles.highlight}>React</span>, Backend built with <span className={styles.highlight}>Golang</span>.</p>
                        <br></br>
                        <p className={styles.portfolioPieceDescription}>Built in <span className={styles.highlight}>August 2022</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
