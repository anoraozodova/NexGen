import React from 'react';
import type { BlogPost } from '../../model/blog.data';
import styles from './style.module.scss';
import { ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
    post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <article className={styles.card}>
            <div className={styles.image_container}>
                <img src={post.image} alt={post.title} className={styles.image} />
            </div>
            
            <div className={styles.content}>
                <div className={styles.header}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.date}>{post.date}</span>
                </div>
                
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.description}>{post.description}</p>
                
                <div className={styles.footer}>
                    <div className={styles.author}>
                        <img src={post.author.avatar} alt={post.author.name} className={styles.avatar} />
                        <span className={styles.name}>{post.author.name}</span>
                    </div>
                    
                    <button className={styles.button}>
                        <span className={styles.button_text}>Read More</span>
                        <div className={styles.button_icon_circle}>
                            <ArrowUpRight className={styles.button_icon} />
                        </div>
                    </button>
                </div>
            </div>
        </article>
    );
};
