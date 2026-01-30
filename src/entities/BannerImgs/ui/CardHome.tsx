import React from "react";
import styles from "./style.module.scss";
import btn from '../../../assets/icons/button.svg'

interface CardHomeProps {
    img: string;
    title?: string;
    subtitle?: string;
    isServices?: boolean;
}

const CardHome: React.FC<CardHomeProps> = ({ img, isServices }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__images}>
                <img className={styles.card__images_img} src={img} alt="" />
                {!isServices && (
                    <a href=""><img src={btn} alt="" /></a>
                )}
            </div>
            {!isServices && (
                <div className={styles.card__descr}>
                    <p>Estatein Real Estate</p>
                    <span>Web Development</span>
                </div>
            )}
        </div>
    );
};

export default CardHome;
