import { SectionHeader } from '../../../shared/SectionHeader/ui/SectionHeader';
import { SECTIONS_CONFIG } from '../../../shared/SectionHeader/sections.config.ts';
import { worksData } from '../model/works.data';
import { WorkCard } from './WorkCard';
import styles from './style.module.scss';

export const WorksSection: React.FC = () => {

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.section__content}>
                    <SectionHeader
                        title={SECTIONS_CONFIG.works.title}
                        buttonText={SECTIONS_CONFIG.works.buttonText}
                    />

                    <div className={styles.grid}>
                        {worksData.map((work) => (
                            <WorkCard key={work.id} work={work} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};