import styles from './style.module.scss';

interface TextareaProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export const Textarea = ({ label, placeholder, value, onChange }: TextareaProps) => {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>{label}</label>
            <textarea
                className={styles.textarea}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};