export interface BlogPost {
    id: number;
    title: string;
    category: string;
    date: string;
    description: string;
    image: string;
    author: {
        name: string;
        avatar: string;
    };
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Power of Content Marketing",
        category: "Marketing",
        date: "September 15, 2023",
        description: "Content marketing is not just about creating content; it's about creating value. In this blog post, we explore how a strategic content marketing approach can drive business growth.",
        image: "/images/blog_1.jpg",
        author: {
            name: "Sarah Thompson",
            avatar: "/avatars/CEO_ava.svg"
        }
    },
    {
        id: 2,
        title: "Mastering the Art of Web Design",
        category: "Design",
        date: "October 20, 2023",
        description: "Web design is more than just aesthetics; it's about creating a seamless user experience. Learn the key principles of web design that every designer should know.",
        image: "/images/blog_2.jpg",
        author: {
            name: "Wade Warren",
            avatar: "/avatars/Art_ava.svg"
        }
    },
    {
        id: 3,
        title: "The Future of Web Development",
        category: "Development",
        date: "November 5, 2023",
        description: "As technology continues to evolve, so does the landscape of web development. Discover the latest trends and technologies shaping the future of web development.",
        image: "/images/blog_3.jpg",
        author: {
            name: "Lisa Williams",
            avatar: "/avatars/CEO_ava.svg"
        }
    }
];
