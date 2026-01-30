import { services, type ServiceItem } from "../index";
import styles from "./style.module.scss";

const Services: React.FC = () => {
    return (
        <section className={styles.main}>
            <div className="container">
                <div className={styles.main__content}>
                    <div className={styles.main__content_header}>
                        <h2 className={styles.main__content_header_title}>
                            Our Services
                        </h2>
                    </div>

                    <div className={styles.main__content_grid}>
                        {services.map((item: ServiceItem) => (
                            <div key={item.id} className={styles.card}>
                                <div className={styles.card__content}>
                                    <div className={styles.card__content_top}>
                                        <div className={styles.card__content_top_btn}>
                                            <div className={styles.card__icon}><item.icon /></div>
                                            <h5 className={styles.card__title}>{item.title}</h5>
                                        </div>
                                    </div>
                                    <div className={styles.card__price}>STARTS FROM {item.price}</div>
                                    <p className={styles.card__description}>
                                        {item.description}
                                    </p>

                                    <button className={styles.card__button}>
                                        <div className={styles.card__button_circle}>
                                            <svg className={styles.card__button_icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z" fill="#E7BEB1" />
                                            </svg>
                                        </div>
                                        <p className={styles.card__button_text}>Book A Call</p>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
