import { SocialCard } from '../../../shared/Footer/SocialCard';
import { socialLinks } from '../model/social.data';
import styles from './SocialLinks.module.scss';

export const SocialLinks = () => {
    return (
        <div className={styles.social}>
            <div className={styles.social__grid}>
                {socialLinks.map((social) => (
                    <SocialCard
                        key={social.id}
                        name={social.name}
                        icon={social.icon}
                        url={social.url}
                        description={social.description}
                    />
                ))}
            </div>
        </div>
    );
};