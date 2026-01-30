import type { ReactNode } from 'react';

export interface SocialLink {
    id: number;
    name: string;
    icon: ReactNode;
    url: string;
    description: string;
}

export interface FooterLink {
    id: number;
    title: string;
    url: string;
    badge?: string;
}

export interface FooterSection {
    id: number;
    title: string;
    links: FooterLink[];
}