import styles from'./Footer.module.css';

import React from 'react'

export const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <p className={styles.footerText}>Built with React by Silas Tay.</p>
        </div>
    )
}
