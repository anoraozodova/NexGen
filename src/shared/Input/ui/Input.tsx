import styles from './style.module.scss';

interface InputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export const Input = ({ label, placeholder, value, onChange }: InputProps) => {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};