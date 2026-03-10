import { services, type ServiceItem } from "../index";
import styles from "./style.module.scss";
import { ServiceCard } from "./ServiceCard/ServiceCard";

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
                            <ServiceCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
