import styles from './OrangeBanner.module.scss';
import arrow from '../../../assets/icons/arrow.svg';

export const OrangeBanner = () => {
    return (
        <div className={styles.banner}>
            <div className="container">
                <div className={styles.banner__content}>
                    <div className={styles.banner__content__text}>

                        <h2 className={styles.banner__title}>
                            READY TO TRANSFORM YOUR DIGITAL PRESENCE?
                        </h2>
                        <p className={styles.banner__description}>
                            Take the first step towards digital success with NexGen by your side.
                            Our team of experts is eager to craft tailored solutions that drive growth for your business.
                        </p>
                    </div>
                    <div className={styles.banner__content__button}>
                        <a href="" className={styles.banner__button}>
                            GET IN TOUCH


                            <img className={styles.banner__arrow} src={arrow} alt="" />
                        </a>
                    </div>
                </div>
            </div>

        </div >
    );
};