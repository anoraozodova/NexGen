import React from 'react';
import styles from './style.module.scss';
import { achievements } from '../model/items';
import { AchievementCard } from './AchievementCard/AchievementCard';
import { SectionHeader } from '../../../shared/SectionHeader/ui/SectionHeader';
import { SECTIONS_CONFIG } from '../../../shared/SectionHeader/sections.config';

export const Achievements: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <SectionHeader
                    title={SECTIONS_CONFIG.achievements.title}
                />
                <div className={styles.grid}>
                    {achievements.map((item) => (
                        <AchievementCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
