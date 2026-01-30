export type BannerData = {
    id: number;
    title: string;
    subtitle: string;
    type: number;
    img: string;
};

export const banners: BannerData[] = [
    {
        id: 1,
        title: 'Digital Solutions That Drive Success',
        subtitle: "At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.",
        type: 1,
        img: 'src/assets/images/hero_1.png',
    },
    {
        id: 2,
        title: "Our Comprehensive Digital Solutions",
        subtitle: "At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.",
        type: 2,
        img: 'src/assets/images/BG_2.jpg',
    },
    {
        id: 3,
        title: "Empowering Your Digital Vision",
        subtitle: "At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.",
        type: 2,
        img: '',
    },
    {
        id: 4,
        title: "Elevating Brands in the Digital Age",
        subtitle: "At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.",
        type: 3,
        img: '',
    },
];
