import React from 'react';
import { SectionHeader } from '../../../shared/SectionHeader/ui/SectionHeader';
import { SECTIONS_CONFIG } from '../../../shared/SectionHeader/sections.config';
import { developers } from '../model/about.developer.card';
import { DeveloperCard } from './DeveloperCard/DeveloperCard';
import styles from './style.module.scss';

export const Developers: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    <SectionHeader
                        title={SECTIONS_CONFIG.developers.title}
                        buttonText={SECTIONS_CONFIG.developers.buttonText}
                    />
                    <div className={styles.grid}>
                        {developers.map((dev) => (
                            <DeveloperCard key={dev.id} developer={dev} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
