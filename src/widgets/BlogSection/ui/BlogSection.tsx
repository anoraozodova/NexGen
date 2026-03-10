import React from 'react';
import styles from './style.module.scss';
import { blogPosts } from '../model/blog.data';
import { BlogCard } from './BlogCard/BlogCard';
import { SectionHeader } from '../../../shared/SectionHeader/ui/SectionHeader';

import { SECTIONS_CONFIG } from '../../../shared/SectionHeader/sections.config';

export const BlogSection: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.section__content}>
                    <div className={styles.section__header}>
                        <SectionHeader
                            title={SECTIONS_CONFIG.blog.title}
                            buttonText={SECTIONS_CONFIG.blog.buttonText}
                        />
                    </div>
                    <div className={styles.grid}>
                        {blogPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
