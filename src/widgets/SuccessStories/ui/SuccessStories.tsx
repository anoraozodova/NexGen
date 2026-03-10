import React, { useState } from 'react';
import styles from './style.module.scss';
import { SectionHeader } from '../../../shared/SectionHeader/ui/SectionHeader';
import { SECTIONS_CONFIG } from '../../../shared/SectionHeader/sections.config';
import { successStoriesData, type SuccessStoryItem } from '../model/icons.data';
import arrow from '../../../assets/icons/arrow.svg';

const StoryCard: React.FC<{ item: SuccessStoryItem }> = ({ item }) => {
    const [activeTab, setActiveTab] = useState<'challenge' | 'solution' | 'results'>('solution');

    const renderContent = () => {
        switch (activeTab) {
            case 'challenge':
                return item.challenge;
            case 'solution':
                return item.solution;
            case 'results':
                return item.results;
            default:
                return item.solution;
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.card__content}>
                <div className={styles.header}>
                    <div className={styles.header__title}>
                        <div className={styles.header__title__icon}>
                            {item.icon ? item.icon : <img src={arrow} alt="" style={{ width: '20px', filter: 'brightness(0)' }} />}
                        </div>
                        <h3 className={styles.header__title__text}>{item.company}</h3>
                    </div>

                    <a href={item.website} className={styles.card__button}>
                        <div className={styles.card__button_circle}>
                            <img src={arrow} alt="Arrow" className={styles.card__button_icon} />
                        </div>
                        <span className={styles.card__button_text}>Visit Website</span>
                    </a>
                </div>

                <ul className={styles.card__list}>
                    <li className={styles.card__list__text}>
                        <p>Industry</p>
                        <span>{item.industry}</span>
                    </li>
                    <li className={styles.card__list__text}>
                        <p>Service Utilized</p>
                        <span>{item.serviceUtilized}</span>
                    </li>
                </ul>
            </div>

            <div className={styles.story_details}>
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab_btn} ${activeTab === 'challenge' ? styles.active : ''}`}
                        onClick={() => setActiveTab('challenge')}
                    >
                        Challenge
                    </button>
                    <button
                        className={`${styles.tab_btn} ${activeTab === 'solution' ? styles.active : ''}`}
                        onClick={() => setActiveTab('solution')}
                    >
                        Solution
                    </button>
                    <button
                        className={`${styles.tab_btn} ${activeTab === 'results' ? styles.active : ''}`}
                        onClick={() => setActiveTab('results')}
                    >
                        Results
                    </button>
                </div>
                <div className={styles.story_details__content}>

                    <h4 className={styles.content_title}>{activeTab}</h4>
                    <p className={styles.content_text}>{renderContent()}</p>

                </div>

            </div>
        </div>
    );
};

export const SuccessStories: React.FC = () => {
    const { title, buttonText } = SECTIONS_CONFIG.successStories;

    return (
        <section className={styles.section}>
            <div className="container">
                <SectionHeader title={title} buttonText={buttonText} />
                <div className={styles.grid}>
                    {successStoriesData.map(story => (
                        <StoryCard key={story.id} item={story} />
                    ))}
                </div>
            </div>
        </section>
    );
};
