import { Map as MapIcon, Star, Shield, Clock, type LucideIcon } from 'lucide-react';

export type FeatureItem = {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
};

export const featuresData: FeatureItem[] = [
    {
        id: 1,
        title: 'Strategic Planning',
        description: 'Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients\' objectives.',
        icon: MapIcon,
    },
    {
        id: 2,
        title: 'Customized Solutions',
        description: 'We believe in tailoring our services to suit each project\'s unique requirements, resulting in solutions.',
        icon: Star,
    },
    {
        id: 3,
        title: 'User-Centric Approach',
        description: 'Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.',
        icon: Shield,
    },
    {
        id: 4,
        title: 'Timely Delivery',
        description: 'We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.',
        icon: Clock,
    },
];
