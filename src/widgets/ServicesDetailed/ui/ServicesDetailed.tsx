import React from "react";
import { services } from "../../../entities/Services/index";
import { servicesDetailedData } from "../model/data";
import styles from "./style.module.scss";
import arrow from "../../../assets/icons/arrow.svg";

const ServicesDetailed: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.section__content}>
                    <h2 className={styles.title_main}>Our Services</h2>

                    <div className={styles.grid}>
                        {services.map((item) => {
                            const detail = servicesDetailedData.find(d => d.id === item.id) || servicesDetailedData[0];

                            return (
                                <div key={item.id} className={styles.card}>

                                    {/* Левая колонка - Инфо */}
                                    <div className={styles.info}>
                                        <div className={styles.info__header}>
                                            <div className={styles.info__title_box}>
                                                <div className={styles.info__icon}>
                                                    <item.icon />
                                                </div>
                                                <h3 className={styles.info__title}>{item.title}</h3>
                                            </div>
                                            <div className={styles.info__book}>
                                                <span className={styles.info__book_text}>Book A Call</span>
                                                <div className={styles.info__book_icon}>
                                                    <img src={arrow} alt="Arrow" width="18" height="18" />
                                                </div>
                                            </div>
                                        </div>

                                        <p className={styles.info__description}>{item.description}</p>

                                        <div className={styles.info__price}>
                                            Starts from {item.price}
                                        </div>
                                    </div>

                                    {/* Правая колонка - Проекты */}
                                    <div className={styles.projects}>
                                        <div className={styles.projects__header}>
                                            <h4 className={styles.projects__title}>{item.title} Projects</h4>
                                            <div className={styles.projects__view_all}>
                                                <span>View All</span>
                                                <img src={arrow} alt="Arrow" width="14" height="14" />
                                            </div>
                                        </div>

                                        <div className={styles.projects__list}>
                                            {detail.projects.map((project, i) => (
                                                <div key={i} className={styles.project_card}>
                                                    <img src={project.img} alt={project.title} className={styles.project_card__img} />
                                                    <div className={styles.project_card__overlay}>
                                                        <div className={styles.project_card__icon_circle}>
                                                            <img src={arrow} alt="Arrow icon" />
                                                        </div>
                                                        <span>{project.title}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesDetailed;
