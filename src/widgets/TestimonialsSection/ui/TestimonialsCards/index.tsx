
import { ArrowUpRight } from 'lucide-react';
import type { TestimonialItem } from '../../model/testimonials.data';
import styles from './style.module.scss';

interface TestimonialCardProps {
    testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <article className={styles.card}>
            <div className={styles.card__content}>
                <h3 className={styles.card__content__title}>{testimonial.title}</h3>
                <p className={styles.card__content__description}>{testimonial.description}</p>
            </div>

            <div className={styles.author}>
                <img
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    className={styles.author__avatar}
                />
                <div className={styles.author__info}>
                    <h4 className={styles.author__info__name}>{testimonial.author.name}</h4>
                    <p className={styles.author__info__position}>{testimonial.author.position}</p>
                </div>
                <button className={styles.author__button}>
                    <ArrowUpRight className={styles.author__button__icon} />
                </button>
            </div>
        </article>
    );
};