import React from 'react';
import styles from './style.module.scss';
import { jobsData, type JobItem } from '../model/jobs.data';
import { JobCard } from './JobCard/JobCard';
import { SectionHeader } from '../../../shared/SectionHeader/ui/SectionHeader';
import { SECTIONS_CONFIG } from '../../../shared/SectionHeader/sections.config';

export const CareersSection: React.FC = () => {
    const rows: JobItem[][] = [];

    for (let i = 0; i < jobsData.length; i += 2) {
        rows.push(jobsData.slice(i, i + 2));
    }

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.section__content}>
                    <div className={styles.section__header}>
                        <SectionHeader
                            title={SECTIONS_CONFIG.careers.title}/>
                    </div>
                    <div className={styles.grid}>
                        {rows.map((row, index) => (
                            <div key={index} className={styles.row}>
                                {row.map((job) => (
                                    <JobCard key={job.id} job={job} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
