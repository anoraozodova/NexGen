import styles from './style.module.scss';
import { statistics } from '../index';

const Statistic: React.FC = () => {
    const handleKnowMoreClick = () => {
        // Временно, пока нет about me секции
        console.log('Navigate to About Me');
        // Позже можно использовать:
        // document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        // или router.push('/about')
    };

    return (
        <div className={styles.cards}>
            <div className="container">
                <div className={styles.cards__content}>
                    <ul className={styles.cards__content_grid}>
                        {statistics.map(item => (
                            <li key={item.id} 
                                className={`${styles.card} ${item.isLink ? styles.card__link : ''}`}
                                onClick={item.isLink ? handleKnowMoreClick : undefined}
                            >
                                <h4 className={styles.card__title}>{item.title}</h4>
                                <p className={styles.card__value}>{item.value}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Statistic;