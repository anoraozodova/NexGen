import React from 'react';
import styles from './style.module.scss';

interface BannerTextProps {
    subtitle: string;
}

const BannerText: React.FC<BannerTextProps> = ({ subtitle }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>AT NEXGEN</h3>
            <p className={styles.description}>{subtitle}</p>

            <div className={styles.button}>
                <div className={styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 13.5L12 21M12 21L4.5 13.5M12 21L12 3" stroke="#E7BEB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <span className={styles.buttonText}>KNOW MORE</span>
            </div>
        </div>
    );
};

export default BannerText;
