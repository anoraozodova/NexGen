import React, { useState } from 'react';
import styles from './style.module.scss';
import arrow from '../../../assets/icons/arrow.svg';

interface ReasonCardProps {
    title: string;
    description: string;
}

export const ReasonCard: React.FC<ReasonCardProps> = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.card__content}>
                <h3 className={styles.card__title}>
                    {title}
                </h3>
                <p className={`${styles.card__description} ${!isExpanded ? styles.collapsed : ''}`}>
                    {description}
                </p>
            </div>
            <button className={styles.card__button} onClick={toggleExpand}>
                <div className={styles.card__button_circle}>
                    <img src={arrow} alt="arrow" className={styles.card__button_icon} />
                </div>
                <span className={styles.card__button_text}>
                    {isExpanded ? 'Show Less' : 'Learn More'}
                </span>
            </button>
        </div>
    );
};
