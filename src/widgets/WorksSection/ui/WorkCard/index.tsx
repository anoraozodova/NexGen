import type { WorkItem } from '../../model/works.data';
import styles from './style.module.scss';

interface WorkCardProps {
    work: WorkItem;
}

export const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
    return (
        <section className={styles.card}>
            <div className={styles.card__content}>
                <div className={styles.header}>
                    <div className={styles.header__title}>
                        <div className={styles.header__title__icon}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2082 4.26036L14.5397 4.65629C13.8053 5.09118 13.4381 5.30862 13.0337 5.35929C12.6292 5.40995 12.2332 5.28809 11.4411 5.04437L10.7201 4.82248C7.93296 3.96483 6.53941 3.536 5.70173 4.30269C4.86406 5.06939 5.13703 6.52385 5.68298 9.43277L5.82422 10.1853C5.97936 11.012 6.05694 11.4253 5.96492 11.829C5.8729 12.2328 5.62172 12.5813 5.11934 13.2784L4.66197 13.913C2.8941 16.3659 2.01017 17.5924 2.44141 18.6091C2.87264 19.6259 4.33345 19.7596 7.25508 20.027L8.01095 20.0962C8.84118 20.1722 9.25631 20.2102 9.60392 20.4091C9.95154 20.608 10.1923 20.9452 10.6738 21.6197L11.1122 22.2338C12.8067 24.6075 13.654 25.7943 14.7582 25.656C15.8624 25.5177 16.4922 24.1459 17.752 21.4022L18.0779 20.6924C18.2608 20.2939 18.397 19.9973 18.5274 19.765L23.8813 25.1189C24.223 25.4606 24.7771 25.4606 25.1188 25.1189C25.4605 24.7772 25.4605 24.2232 25.1188 23.8814L19.9484 18.711C20.0907 18.6593 20.2496 18.6036 20.4285 18.541L21.1568 18.2859C23.972 17.3 25.3795 16.807 25.6307 15.7048C25.8819 14.6025 24.8104 13.621 22.6673 11.6579L22.1128 11.15C21.5039 10.5922 21.1993 10.3132 21.0414 9.94078C20.8834 9.56832 20.8898 9.14449 20.9027 8.29685L20.9145 7.52508C20.9598 4.54211 20.9825 3.05062 20.0335 2.50769C19.0846 1.96477 17.7924 2.72997 15.2082 4.26036Z" fill="#CE7D63" />
                            </svg>

                        </div>
                        <h5 className={styles.header__title__text}>{work.title}</h5>
                    </div>
                    <div className={styles.header__box}>

                        <div className={styles.card__button}>
                            <button className={styles.card__button_circle}>
                                <svg className={styles.card__button_icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z" fill="#E7BEB1" />
                                </svg>
                            </button>
                            <p className={styles.card__button_text}>Details</p>
                        </div>

                    </div>

                </div>

                <ul className={styles.card__list}>
                    <li className={styles.card__list__text}>
                        <p >Category</p>
                        <a href="">{work.category}</a>
                    </li>
                    <li className={styles.card__list__text}>
                        <p>Time Taken</p>
                        <a href="">{work.timeTaken}</a>
                    </li>
                </ul>

                <p className={styles.description}>{work.description}</p>
            </div>

            <div className={styles.preview}>
                <img src={work.image} alt={work.title} />
            </div>

            <div className={styles.meta}>
                <div className={styles.technologies}>
                    <h4>TECHNOLOGIES USED</h4>
                    <div className={styles.techList}>
                        {work.technologies.map((tech, i) => (
                            <span key={i} className={styles.tech}>{tech}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.team}>
                    <h4>TEAM MEMBERS</h4>
                    <div className={styles.avatars}>
                        {work.teamMembers.map((avatar, i) => (
                            <img key={i} src={avatar} alt={`Team member ${i + 2}`} />
                        ))}
                    </div>
                </div>

                <button className={styles.bookBtn}>BOOK A CALL</button>
            </div>
        </section >
    );
};