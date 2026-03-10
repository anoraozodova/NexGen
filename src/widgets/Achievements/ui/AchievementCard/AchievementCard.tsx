import React from 'react';
import styles from './style.module.scss';
import type { Achievement } from '../../model/items';

interface AchievementCardProps {
    item: Achievement;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ item }) => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <span className={styles.date}>{item.date}</span>
            </div>
            <div className={styles.middle}>
                <h3 className={styles.title}>{item.title}</h3>
            </div>
            <div className={styles.bottom}>
                <p className={styles.description}>{item.description}</p>
            </div>
        </div>
    );
};
