import styles from './Sidebar.module.css';

import React from 'react'

export const Sidebar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <a className={styles.sidebarIcon} href="https://www.instagram.com/silas.tsl/">
                <img className={styles.sidebarIconImage} src={require("../../images/instagram.png")} />
            </a>
            <a className={styles.sidebarIcon} href="https://github.com/SilasTSL">
                <img className={styles.sidebarIconImage} src={require("../../images/github.png")} />
            </a>
            <a className={styles.sidebarIcon} href="https://sg.linkedin.com/in/silas-tay-97a523208">
                <img className={styles.sidebarIconImage} src={require("../../images/linkedin.png")} />
            </a>
            <a className={styles.sidebarIcon} href="#">
                <img className={styles.sidebarIconImage} src={require("../../images/telegram.png")} />
            </a>
        </div>
    )
}
