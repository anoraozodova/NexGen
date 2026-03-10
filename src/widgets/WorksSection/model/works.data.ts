export interface WorkItem {
    id: number;
    title: string;
    category: string;
    timeTaken: string;
    description: string;
    image: string;
    technologies: string[];
    teamMembers: string[]; 
    
}

export const worksData: WorkItem[] = [
    {
        id: 1,
        title: "ZENITH FITNESS APP",
        category: "Web Development",
        timeTaken: "6 months",
        description: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance",
        image: "/images/Image.jpg",
        technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
        teamMembers: ["/avatars/ava.svg", "/avatars/ava.svg"],
    },
    {
        id: 2,
        title: "A-AURA ECOMMERCE",
        category: "Web Design",
        timeTaken: "3 months",
        description: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
        image: "/images/Image.png",
        technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
        teamMembers: ["/avatars/ava.svg", "/avatars/ava.svg"],
    },
    {
        id: 3,
        title: "NEXGEN MARKETING",
        category: "Marketing",
        timeTaken: "2 months",
        description: "Strategic marketing campaign to boost brand awareness and engagement.",
        image: "/images/Image.png",
        technologies: ["SEO", "Google Ads", "Content Marketing", "Analytics"],
        teamMembers: ["/avatars/ava.svg", "/avatars/ava.svg"],
    },
];