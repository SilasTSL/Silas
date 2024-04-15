import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import React from 'react'

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <a href="/Silas" className={styles.logoImageContainer}>
                <img className={styles.logoImage} src={require("../../images/silas-logo.png")} />   
            </a>
            <div className={styles.headerLinkContainer}>
                <a href="#introduction" className={styles.headerLink}>
                    <div className={styles.headerLinkNumber}>01.</div>
                    <div className={styles.headerLinkName}>Introduction</div>
                </a>    
                <a href="#experience" className={styles.headerLink}>
                    <div className={styles.headerLinkNumber}>02.</div>
                    <div className={styles.headerLinkName}>Experience</div>
                </a>    
                <a href="#portfolio" className={styles.headerLink}>
                    <div className={styles.headerLinkNumber}>03.</div>
                    <div className={styles.headerLinkName}>Portfolio</div>
                </a>    
                <a href="#contactme" className={styles.headerLink}>
                    <div className={styles.headerLinkNumber}>04.</div>
                    <div className={styles.headerLinkName}>Contact me</div>
                </a>
            </div>
        </div>
    )
}
