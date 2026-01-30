import React from 'react';
import styles from './Marquee.module.scss';

interface MarqueeProps {
    className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ className }) => {
    const services = [
        "FOLLOW US ON SOCIAL MEDIA",
        "FOLLOW US ON SOCIAL MEDIA",
        "FOLLOW US ON SOCIAL MEDIA",
        "FOLLOW US ON SOCIAL MEDIA",
        "FOLLOW US ON SOCIAL MEDIA",
        "FOLLOW US ON SOCIAL MEDIA"
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