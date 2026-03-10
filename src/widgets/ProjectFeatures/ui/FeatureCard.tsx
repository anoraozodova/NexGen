import React from 'react';
import styles from './style.module.scss';
import type { FeatureItem } from '../model/features.data';

interface FeatureCardProps {
    item: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ item }) => {
    const Icon = item.icon;
    
    return (
        <div className={styles.card}>
            <div className={styles.card__icon}>
                <Icon />
            </div>
            <div className={styles.card__content}>
                <h3 className={styles.card__title}>{item.title}</h3>
                <p className={styles.card__description}>{item.description}</p>
            </div>
        </div>
    );
};
