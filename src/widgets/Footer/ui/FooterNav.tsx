import { Badge } from '../../../shared/Footer/Badge';
import { footerSections } from '../model/footer.data';
import styles from './FooterNav.module.scss';

export const FooterNav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__grid}>
                {footerSections.map((section) => (
                    <div key={section.id} className={styles.nav__column}>
                        <h4 className={styles.nav__title}>{section.title}</h4>
                        <ul className={styles.nav__list}>
                            {section.links.map((link) => (
                                <li key={link.id} className={styles.nav__item}>
                                    <a href={link.url} className={styles.nav__link}>
                                        {link.title}
                                        {link.badge && <Badge text={link.badge} />}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </nav>
    );
};