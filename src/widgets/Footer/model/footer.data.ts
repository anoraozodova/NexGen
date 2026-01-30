import type { FooterSection } from '../../../entities/footer/model/types';

export const footerSections: FooterSection[] = [
    {
        id: 1,
        title: 'Home',
        links: [
            { id: 1, title: 'Why Us', url: '/why-us' },
            { id: 2, title: 'About Us', url: '/about' },
            { id: 3, title: 'Testimonials', url: '/testimonials' },
            { id: 4, title: "FAQ's", url: '/faq' }
        ]
    },
    {
        id: 2,
        title: 'Services',
        links: [
            { id: 1, title: 'Web Development', url: '/services/web' },
            { id: 2, title: 'App Development', url: '/services/app' },
            { id: 3, title: 'Web Design', url: '/services/design' },
            { id: 4, title: 'Digital Marketing', url: '/services/marketing' }
        ]
    },
    {
        id: 3,
        title: 'Projects',
        links: [
            { id: 1, title: 'Klothink', url: '/projects/klothink' },
            { id: 2, title: 'Zenith', url: '/projects/zenith' },
            { id: 3, title: 'Novus', url: '/projects/novus' },
            { id: 4, title: 'Apex', url: '/projects/apex' }
        ]
    },
    {
        id: 4,
        title: 'Blogs',
        links: [
            { id: 1, title: 'Business', url: '/blog/business' },
            { id: 2, title: 'Design', url: '/blog/design', badge: 'Soon' },
            { id: 3, title: 'Development', url: '/blog/development', badge: 'Soon' }
        ]
    }
];