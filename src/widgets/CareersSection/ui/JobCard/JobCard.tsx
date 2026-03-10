import React from 'react';
import type { JobItem } from '../../model/jobs.data';
import styles from './style.module.scss';
import { Pipette, Smartphone, PencilRuler, BriefcaseBusiness, type LucideIcon } from 'lucide-react';
import arrow from '../../../../assets/icons/arrow.svg';

const iconById: Record<number, LucideIcon> = {
    1: Pipette,
    2: Smartphone,
    3: PencilRuler,
    4: BriefcaseBusiness
};

interface JobCardProps {
    job: JobItem;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
    const Icon = iconById[job.id] ?? Pipette;

    return (
        <article className={styles.card}>
            <div className={styles.card__header}>
                <div className={styles.card__titleBox}>
                    <div className={styles.card__icon}>
                        <Icon />
                    </div>
                    <h3 className={styles.card__title}>{job.title}</h3>
                </div>
                <button className={styles.card__details}>
                    <img src={arrow} className={styles.card__arrow} />
                    <span className={styles.card__details_text}>View Details</span>
                </button>
            </div>

            <div className={styles.card__meta}>
                <div className={styles.metaPill}>
                    <span className={styles.metaLabel}>Salary</span>
                    <span className={styles.metaDot}>•</span>
                    <span className={styles.metaValue}>{job.salary}</span>
                </div>
                <div className={styles.metaPill}>
                    <span className={styles.metaLabel}>Experience</span>
                    <span className={styles.metaDot}>•</span>
                    <span className={styles.metaValue}>{job.experience}</span>
                </div>
                <div className={styles.metaPill}>
                    <span className={styles.metaLabel}>Deadline</span>
                    <span className={styles.metaDot}>•</span>
                    <span className={styles.metaValue}>{job.deadline}</span>
                </div>
            </div>

            <div className={styles.card__skills}>
                <span className={styles.skillsLabel}>Skills</span>
                <p className={styles.skillsText}>{job.skills}</p>
            </div>

            <button className={styles.card__apply}>Apply Now</button>
        </article>
    );
};
