import React from 'react';
import styles from './style.module.scss';
import { howToApplyData } from '../model/steps.data';
import { HowToApplyCard } from './HowToApplyCard/HowToApplyCard';
import { SectionHeader } from '../../../shared/SectionHeader/ui/SectionHeader';
import { SECTIONS_CONFIG } from '../../../shared/SectionHeader/sections.config';

export const HowToApply: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.section__content}>
                    <div className={styles.section__header}>
                        <SectionHeader
                            title={SECTIONS_CONFIG.howToApply.title}
                            buttonText={SECTIONS_CONFIG.howToApply.buttonText}
                        />
                    </div>
                    <div className={styles.grid}>
                        {howToApplyData.map((item) => (
                            <HowToApplyCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
