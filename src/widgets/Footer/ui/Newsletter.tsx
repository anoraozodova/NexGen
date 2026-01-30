import { NewsletterInput } from '../../../shared/Footer/NewsletterInput';
import { useSubscribe } from '../../../features/newsletter/SubscribeForm';
import styles from './Newsletter.module.scss';

export const Newsletter = () => {
    const { subscribe, isSuccess } = useSubscribe();

    return (
        <div className={styles.newsletter}>
            <div className={styles.newsletter__header}>
                <span className={styles.newsletter__label}>NEWSLETTER</span>
                <h3 className={styles.newsletter__title}>SUBSCRIBE TO OUR NEWSLETTER</h3>
            </div>

            <NewsletterInput
                onSubmit={subscribe}
                placeholder="Enter your email"
            />

            {isSuccess && (
                <p className={styles.newsletter__success}>
                    ✓ Successfully subscribed!
                </p>
            )}
        </div>
    );
};