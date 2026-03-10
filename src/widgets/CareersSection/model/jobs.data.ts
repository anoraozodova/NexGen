export interface JobItem {
    id: number;
    title: string;
    salary: string;
    experience: string;
    deadline: string;
    skills: string;
}

export const jobsData: JobItem[] = [
    {
        id: 1,
        title: 'Web Designer',
        salary: '$45,000 - $60,000 per year',
        experience: '1+ years',
        deadline: '30/09/2025',
        skills: 'Proficiency in Adobe Creative Suite, strong understanding of UI/UX design principles, responsive design expertise.',
    },
    {
        id: 2,
        title: 'Mobile App Developer',
        salary: '$55,000 - $75,000 per year',
        experience: '2+ years',
        deadline: '15/10/2025',
        skills: 'Experience in iOS or Android development, knowledge of mobile app design patterns, experience with mobile testing and debugging.',
    },
    {
        id: 3,
        title: 'Digital Marketing Specialist',
        salary: '$50,000 - $65,000 per year',
        experience: '2+ years',
        deadline: '20/11/2025',
        skills: 'Proficiency in SEO, SEM, and social media marketing, experience with analytics tools and content marketing expertise.',
    },
    {
        id: 4,
        title: 'Project Manager',
        salary: '$60,000 - $80,000 per year',
        experience: '5+ years',
        deadline: '05/12/2025',
        skills: 'Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile methodologies.',
    },
];
