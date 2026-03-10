import React from 'react';
import styles from './style.module.scss';
import { statistics } from '../../index';

const BannerStatistics: React.FC = () => {
    // Filter stats for the grid (IDs 1-4)
    const displayStats = statistics.filter(stat => [1, 2, 3, 4].includes(stat.id));
    // Find the link item (ID 6)
    const knowMoreStat = statistics.find(stat => stat.id === 6);

    return (
        <div className={styles.container}>
            <div className={styles.statsGrid}>
                {displayStats.map(stat => (
                    <div key={stat.id} className={styles.statCard}>
                        <span className={styles.statTitle}>{stat.title}</span>
                        <span className={styles.statValue}>{stat.value}</span>
                    </div>
                ))}
            </div>
            
            {knowMoreStat && (
                <div className={styles.knowMoreWrapper}>
                    <div className={styles.knowMoreIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className={styles.knowMoreText}>{knowMoreStat.title}</span>
                </div>
            )}
        </div>
    );
};

export default BannerStatistics;
