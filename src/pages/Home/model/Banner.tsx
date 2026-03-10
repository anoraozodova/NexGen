import React from "react";
import styles from "./Banner.module.scss";
import { banners } from "./BannerData";
import { AnimatedButton } from "../../../shared/Button/ui/AnimatedButton";
import BannerMarquee from "../../../shared/Marquee/ui/BannerMarquee";
import CardHome from "../../../entities/BannerImgs/ui/CardHome";
import BannerStatistics from "../../../entities/statistics/ui/BannerStatistics/BannerStatistics";
import BannerText from "../../../entities/BannerText/ui/BannerText";

interface BannerProps {
    id: number;
}

const Banner: React.FC<BannerProps> = ({ id }) => {
    const banner = banners.find((b) => b.id === id);
    if (!banner) return null;

    let card: React.ReactNode;

    switch (banner.type) {
        case 1:
        case 2:
            card = (
                <CardHome 
                    img={banner.img} 
                    title={banner.title} 
                    subtitle={banner.subtitle} 
                    isServices={banner.id !== 1} 
                />
            );
            break;
        case 3:
            card = <BannerStatistics />;
            break;
        case 4:
            card = <BannerText subtitle={banner.subtitle} />;
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
                        {banner.type !== 3 && banner.type !== 4 && (
                            <div className={styles.hero__info_description}>
                                <div className={styles.hero__info_description_text}>{banner.subtitle}</div>
                                <div className={styles.hero__info_description_marquee}>
                                    <BannerMarquee />
                                </div>
                            </div>
                        )}
                    </div>
                    {card}
                </div>
            </div>
        </header>
    );
};

export default Banner;
