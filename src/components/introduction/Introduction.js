import styles from './Introduction.module.css';

import React from 'react'

export const Introduction = () => {
    return (
        <div className={styles.introductionContainer}>
            <div id="introduction" className={styles.introductionHeaderContainer}>
                <h2 className={styles.introductionHeaderNumber}>
                    01.
                </h2>
                <h2 className={styles.introductionHeader}>
                    Introduction
                </h2>
            </div>
            
        </div>
    )
}
