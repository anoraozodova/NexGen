import styles from './style.module.scss';
import { SectionHeader } from '../../../shared/SectionHeader/ui/SectionHeader';
import { SECTIONS_CONFIG } from '../../../shared/SectionHeader/sections.config';
import { AccordionItem } from '../../../features/FAQ/AccordionItem/ui/AccordionItem';
import { AskQuestionForm } from './AskQuestionForm';
import { faqData } from '../model/faq.data';

export const FAQSection: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                {/* Заголовок на всю ширину */}
                <div className={styles.section__header}>
                    <SectionHeader
                        title={SECTIONS_CONFIG.faq.title}
                        buttonText={SECTIONS_CONFIG.faq.buttonText}
                    />
                </div>

                {/* Две колонки: вопросы и форма */}
                <div className={styles.section__wrapper}>
                    {/* Левая колонка - вопросы */}
                    <div className={styles.section__content}>
                        <div className={styles.section__list}>
                            {faqData.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Правая колонка - форма */}
                    <div className={styles.section__aside}>
                        <AskQuestionForm />
                    </div>
                </div>
            </div>
        </section>
    );
};