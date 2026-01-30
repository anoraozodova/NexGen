import React from "react";
import styles from "./Banner.module.scss";
import { banners } from "./BannerData";
import { AnimatedButton } from "../../../shared/Button/ui/AnimatedButton";
import BannerMarquee from "../../../shared/Marquee/ui/BannerMarquee";
import CardHome from "../../../entities/BannerImgs/ui/CardHome";

interface BannerProps {
    id: number;
}

const Banner: React.FC<BannerProps> = ({ id }) => {
    const banner = banners.find((b) => b.id === id);
    if (!banner) return null;

    let card;
    switch (banner.type) {
        case 1:
        case 2:
        case 3:
            card = <CardHome {...banner} isServices={banner.id === 2} />;
            break;
        default:
            card = null;
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.hero}>
                    <div className={styles.hero__info}>
                        <div className={styles.hero__info_box}>
                            <h6 className={styles.hero__info_box_h4}>{banner.title}</h6>
                            <div className={styles.hero__info_box_btn}>
                                <AnimatedButton />
                            </div>
                        </div>
                        <div className={styles.hero__info_description}>
                            <div className={styles.hero__info_description_text}>{banner.subtitle}</div>
                            <div className={styles.hero__info_description_marquee}>
                                <BannerMarquee />
                            </div>
                        </div>
                    </div>
                    {card}
                </div>
            </div>
        </header>
    );
};

export default Banner;
