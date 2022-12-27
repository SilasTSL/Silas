import styles from './ContactMe.module.css';
import { ContactMeButton } from '../home/ContactMeButton';

import React from 'react'

export const ContactMe = () => {
    return (
        <div id="contactme" className={styles.contactMeContainer}>
            <div className={styles.contactMeHeaderContainer}>
                <h2 className={styles.contactMeHeaderNumber}>
                    04.
                </h2>
                <h2 className={styles.contactMeHeader}>
                    Contact Me
                </h2>
            </div>
            <div className={styles.contactMeBody}>
                <h2 className={styles.contactMeBodyHeader}>
                    Feel free to Reach Out!
                </h2>
                <p className={styles.contactMeBodySubtext}>
                    I'm always open to talk about any enquiries or just simply chat about any of my past experiences and projects, so feel free to contact me on any of my social media platforms!
                </p>
                <ContactMeButton />
            </div>
        </div>
    )
}
