import React, { useState } from 'react';
import { SectionHeader } from '../../../shared/SectionHeader/ui/SectionHeader';
import { SECTIONS_CONFIG } from '../../../shared/SectionHeader/sections.config.ts';
import { worksData } from '../model/works.data';
import { WorkCard } from './WorkCard';
import styles from './style.module.scss';

interface WorksSectionProps {
    title?: string;
    showTabs?: boolean;
}

const TABS = ['Web Design', 'Web Development', 'Marketing'];

export const WorksSection: React.FC<WorksSectionProps> = ({ title, showTabs = false }) => {
    const [activeTab, setActiveTab] = useState('Web Development');

    const filteredWorks = showTabs 
        ? worksData.filter(work => work.category === activeTab)
        : worksData;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.section__content}>
                    <SectionHeader
                        title={title || SECTIONS_CONFIG.works.title}
                        buttonText={!showTabs ? SECTIONS_CONFIG.works.buttonText : undefined}
                    >
                        {showTabs && (
                            <div className={styles.tabs_desktop}>
                                {TABS.map(tab => (
                                    <button
                                        key={tab}
                                        className={`${styles.tab_btn} ${activeTab === tab ? styles.active : ''}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        )}
                    </SectionHeader>

                    {showTabs && (
                        <div className={styles.tabs_mobile}>
                            {TABS.map(tab => (
                                <button
                                    key={tab}
                                    className={`${styles.tab_btn} ${activeTab === tab ? styles.active : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className={styles.grid}>
                        {filteredWorks.map((work) => (
                            <WorkCard key={work.id} work={work} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};