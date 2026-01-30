import { useState } from 'react';
import { IconButton } from '../../../../shared/Button/ui/IconButton/IconButton';
import styles from './style.module.scss';

interface AccordionItemProps {
    question: string;
    answer: string;
}

export const AccordionItem = ({ question, answer }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.item}>
            <div
                className={styles.item__header}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className={styles.item__question}>{question}</h3>
                <IconButton
                    isOpen={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            {isOpen && (

                <div className={styles.item__answer}>
                    <hr className={styles.line} />
                    <p className={styles.item__answer__text}>{answer}</p>
                </div>
            )}
        </div>
    );
};