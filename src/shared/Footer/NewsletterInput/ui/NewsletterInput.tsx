import { useState } from 'react';
import styles from './NewsletterInput.module.scss';

interface NewsletterInputProps {
    onSubmit: (email: string) => void;
    placeholder?: string;
}

export const NewsletterInput = ({
    onSubmit,
    placeholder = "Enter your email"
}: NewsletterInputProps) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            onSubmit(email);
        }
    };

    return (
        <form className={styles.input} onSubmit={handleSubmit}>
            <input
                type="email"
                className={styles.input__field}
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit" className={styles.input__button}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            </button>
        </form>
    );
};