import React from 'react';
import styles from './style.module.scss';
import type { StepItem } from '../../model/steps.data';
import arrow from '../../../../assets/icons/arrow.svg';

interface HowToApplyCardProps {
    item: StepItem;
}

export const HowToApplyCard: React.FC<HowToApplyCardProps> = ({ item }) => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <span className={styles.step}>{item.step}</span>
            </div>
            <div className={styles.middle}>
                <h3 className={styles.title}>{item.title}</h3>
            </div>
            <div className={styles.bottom}>
                <p className={styles.description}>{item.description}</p>
                <button className={styles.btn}>
                    <div className={styles.iconCircle}>
                        <img src={arrow} alt="arrow" className={styles.icon} />
                    </div>
                    <span className={styles.btnText}>KNOW MORE</span>
                </button>
            </div>
        </div>
    );
};
