
import { SectionHeader } from '../../../shared/SectionHeader/ui/SectionHeader.tsx';
import { SECTIONS_CONFIG } from '../../../shared/SectionHeader/sections.config.ts';
import { testimonialsData } from '../model/testimonials.data.ts';
import { TestimonialCard } from './TestimonialsCards/index.tsx';
import styles from './style.module.scss';

export const TestimonialsSection: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.section__content}>
                    <div className={styles.section__content__title}>
                        <SectionHeader
                            title={SECTIONS_CONFIG.testimonials.title}
                            buttonText={SECTIONS_CONFIG.testimonials.buttonText}
                        />

                        <div className={styles.grid}>
                            {testimonialsData.map((testimonial) => (
                                <TestimonialCard
                                    key={testimonial.id}
                                    testimonial={testimonial}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
