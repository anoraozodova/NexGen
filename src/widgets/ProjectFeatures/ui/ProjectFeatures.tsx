import React from 'react';
import styles from './style.module.scss';
import { featuresData } from '../model/features.data';
import { FeatureCard } from './FeatureCard';

export const ProjectFeatures: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.container_box}>
                    <div className={styles.header}>
                        <h2 className={styles.header__title}>Key Features of Our Projects</h2>
                    </div>
                    <div className={styles.grid}>
                        {featuresData.map((feature) => (
                            <FeatureCard key={feature.id} item={feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
