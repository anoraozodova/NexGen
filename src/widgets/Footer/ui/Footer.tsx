import { OrangeBanner } from './OrangeBanner';
import { Marquee } from './Marquee';
import { SocialLinks } from './SocialLinks';
import { FooterNav } from './FooterNav';
import { Newsletter } from './Newsletter';
import { FooterBottom } from './FooterBottom';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <OrangeBanner />
                <Marquee />

                <div className={styles.footer__content}>
                    <SocialLinks />

                    <div className={styles.footer__main}>
                        <FooterNav />
                        <Newsletter />
                    </div>
                </div>
                <FooterBottom />

            </div>

        </footer>
    );
};