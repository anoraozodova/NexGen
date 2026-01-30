import styles from './FooterBottom.module.scss';

export const FooterBottom = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.bottom}>
            <div className={styles.bottom__container}>
                <p className={styles.bottom__copyright}>
                    © {currentYear} NexGen. All rights reserved.
                </p>

                <div className={styles.bottom__links}>
                    <a href="/terms" className={styles.bottom__link}>
                        Terms & Conditions
                    </a>
                    <a href="/privacy" className={styles.bottom__link}>
                        Privacy Policy
                    </a>
                </div>
            </div>
        </div>
    );
};