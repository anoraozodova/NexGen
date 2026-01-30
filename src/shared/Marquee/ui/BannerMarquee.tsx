import React from 'react';
import styles from './style.module.scss';

interface BannerMarqueeProps {
    className?: string;
}

const BannerMarquee: React.FC<BannerMarqueeProps> = ({ className }) => {
    const services = [
        "MARKETING",
        "WEBSITE DESIGN",
        "BRANDING",
        "WEBSITE DEVELOPMENT",
        "MOBILE APP DEVELOPMENT",
        "DIGITAL"
    ];

    const duplicatedServices = [...services, ...services];

    return (
        <div className={`${styles.marqueeContainer} ${className || ''}`}>
            <div className={styles.marqueeTrack}>
                {duplicatedServices.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                        {service}
                        <span className={styles.separator}>•</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default BannerMarquee;