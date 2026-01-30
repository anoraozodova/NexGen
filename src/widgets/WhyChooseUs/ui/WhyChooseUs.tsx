import styles from './style.module.scss'
import { reason } from '../model/reasonData.ts'
import { ReasonCard } from './ReasonCard';

const WhyChooseUs: React.FC = () => {
    return (
        <section className={styles.main}>
            <div className="container">
                <div className={styles.main__content}>
                    <div className={styles.main__content_header}>
                        <h4 className={styles.main__content_header_title}>
                            Reasons to Choose NexGen for Your Digital Journey
                        </h4>
                    </div>

                    <div className={styles.main__content_grid}>
                        {reason.map((item) => (
                            <ReasonCard
                                key={item.id}
                                title={item.title}
                                description={item.value}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;