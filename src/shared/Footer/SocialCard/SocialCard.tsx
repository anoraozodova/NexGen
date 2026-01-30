import styles from './SocialCard.module.scss';
import arrow from '../../../assets/icons/arrow.svg';
interface SocialCardProps {
    name: string;
    icon: React.ReactNode;
    url: string;
    description: string;
}

export const SocialCard = ({ name, icon, url, description }: SocialCardProps) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.card__header}>
                <div className={styles.card__icon}>
                    {icon}
                </div>

                <img src={arrow} className={styles.card__arrow} />
            </div>

            <h4 className={styles.card__title}>{name}</h4>
            <p className={styles.card__description}>{description}</p>
        </a>
    );
};