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
                    <h3 className={styles.experienceExperienceHeader} onClick={() => toggleDescription(0)}>TikTok - Data AML Engine Inference (Singapore)</h3>
                    <div className={styles.experienceExperienceBodyContainer}>
                        <h4 className={styles.experienceExperienceTimeline}><span className={styles.highlight}>Applied Machine Learning Engineer</span> from Jul 2025 – Present</h4>
                        <div className={styles.experienceExperienceDetails}>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Built and scaled <span className={styles.highlight}>MLOps Operator system</span> monitoring ~350K Kubernetes pods, automating remediation of ~4K daily anomalies</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Improved system response time by <span className={styles.highlight}>60× (3h → 3min)</span> via caching and pre-scan optimization</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Ideated, architected and deployed <span className={styles.highlight}>Self-Diagnosis system</span>, increasing auto-resolution rate by 20% and reducing on-call load</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Developed new scanners (e.g. <span className={styles.highlight}>pod memory fragmentation scanner</span>), improving anomaly detection coverage</p></div>
                        </div>
                    </div>
                </div>

                <div className={styles.experienceExperienceContainer}>
                    <h3 className={styles.experienceExperienceHeader} onClick={() => toggleDescription(1)}>Harvest Education</h3>
                    <div className={styles.experienceExperienceBodyContainer}>
                        <h4 className={styles.experienceExperienceTimeline}><span className={styles.highlight}>Co-Founder, Technical Lead</span> from Feb 2024 – Feb 2025</h4>
                        <div className={styles.experienceExperienceDetails}>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Built and launched <span className={styles.highlight}>full-stack AI-powered education platform</span> on AWS</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Led <span className={styles.highlight}>0→1 product development</span> with scalable cloud architecture and core AI features (RAG, vector search)</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Conducted user discovery with public school principals, validating product direction based on <span className={styles.highlight}>educator feedback</span></p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Managed and mentored a <span className={styles.highlight}>cross-functional team of 7</span></p></div>
                        </div>
                    </div>
                </div>

                <div className={styles.experienceExperienceContainer}>
                    <h3 className={styles.experienceExperienceHeader} onClick={() => toggleDescription(2)}>TikTok - Online Parameter Server (Singapore)</h3>
                    <div className={styles.experienceExperienceBodyContainer}>
                        <h4 className={styles.experienceExperienceTimeline}><span className={styles.highlight}>Software Engineer Intern</span> from May 2024 – Aug 2024</h4>
                        <div className={styles.experienceExperienceDetails}>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Built and launched <span className={styles.highlight}>internal full-stack monitoring platform</span>, eliminating manual log inspection</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Reduced debugging time by <span className={styles.highlight}>~5–10×</span> by replacing manual webshell-based workflows with a centralized dashboard</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Designed backend APIs with <span className={styles.highlight}>Redis caching</span>, improving query efficiency and enabling scalable filtering/pagination</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Dashboard adopted by <span className={styles.highlight}>multiple SRE teams</span> and still in production 2+ years later</p></div>
                        </div>
                    </div>
                </div>

                <div className={styles.experienceExperienceContainer}>
                    <h3 className={styles.experienceExperienceHeader} onClick={() => toggleDescription(3)}>Versiro (Trondheim, Norway)</h3>
                    <div className={styles.experienceExperienceBodyContainer}>
                        <h4 className={styles.experienceExperienceTimeline}><span className={styles.highlight}>Full-Stack and Machine Learning Engineer</span> from Aug 2023 – Jan 2024</h4>
                        <div className={styles.experienceExperienceDetails}>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Developed <span className={styles.highlight}>time-series forecasting models</span> for electricity trading at 15-minute granularity over 5+ years</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Migrated data pipelines from blob storage to <span className={styles.highlight}>SQL-based systems</span>, reducing query latency by ~3–5×</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Redesigned company website from Wix to custom <span className={styles.highlight}>React/Next.js</span> application</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Built self-serve <span className={styles.highlight}>Tutorial Hub</span>, saving ~1–3 hours/week of manual support</p></div>
                        </div>
                    </div>
                </div>

                <div className={styles.experienceExperienceContainer}>
                    <h3 className={styles.experienceExperienceHeader} onClick={() => toggleDescription(4)}>ByteDance - Global Recommendations (Singapore)</h3>
                    <div className={styles.experienceExperienceBodyContainer}>
                        <h4 className={styles.experienceExperienceTimeline}><span className={styles.highlight}>Back-End Engineer Intern</span> from May 2023 – Jul 2023</h4>
                        <div className={styles.experienceExperienceDetails}>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Built <span className={styles.highlight}>flow-capacity assessment tool</span> to monitor GPU cluster loads during model traffic changes</p></div>
                            <div className={styles.experienceExperienceDetailPointer}><img className={styles.experienceListIcon} src={require("../../images/list-icon.png")}/><p>Integrated tool into <span className={styles.highlight}>cross-cluster traffic migration</span>, supporting multi-region rollouts</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
