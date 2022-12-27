import styles from './ContactMeButton.module.css';

import React from 'react'

export const ContactMeButton = () => {
    return (
        <a className={styles.contactMeButtonContainer} href="mailto:silastaysl@gmail.com" target="_blank">
            <p className={styles.contactMeButtonText}>
                Contact Me
            </p>
        </a>
    )
}
