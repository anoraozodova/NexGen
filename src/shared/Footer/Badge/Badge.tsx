import styles from './Badge.module.scss';

interface BadgeProps {
    text: string;
}

export const Badge = ({ text }: BadgeProps) => {
    return (
        <span className={styles.badge}>
            {text}
        </span>
    );
};