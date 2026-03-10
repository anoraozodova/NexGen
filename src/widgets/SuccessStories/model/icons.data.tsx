import type { ReactNode } from 'react';

export interface SuccessStoryItem {
    id: number;
    company: string;
    industry: string;
    serviceUtilized: string;
    website: string;
    icon?: ReactNode;
    challenge: string;
    solution: string;
    results: string;
    title?: string;
}

export const successStoriesData: SuccessStoryItem[] = [
    {
        id: 1,
        company: "KLOTHINK",
        industry: "E-commerce",
        serviceUtilized: "Design & Development",
        website: "#",
        icon: (
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.1666 17V27.2082C31.1666 29.0269 29.2527 30.2097 27.6261 29.3964C26.3113 28.739 24.7451 28.8365 23.5221 29.6519C22.1462 30.5692 20.3537 30.5692 18.9778 29.6519L18.4782 29.3188C17.583 28.7221 16.4168 28.7221 15.5217 29.3188L15.0221 29.6519C13.6462 30.5692 11.8537 30.5692 10.4778 29.6519C9.25472 28.8365 7.68853 28.739 6.37378 29.3964C4.74714 30.2097 2.83325 29.0269 2.83325 27.2082V17C2.83325 9.17598 9.17589 2.83334 16.9999 2.83334C24.824 2.83334 31.1666 9.17598 31.1666 17ZM13.3826 20.3964C12.9112 20.047 12.2458 20.1459 11.8963 20.6173C11.5469 21.0887 11.6458 21.7542 12.1172 22.1036C13.4948 23.1247 15.1795 23.7292 16.9999 23.7292C18.8203 23.7292 20.505 23.1247 21.8826 22.1036C22.354 21.7542 22.4529 21.0887 22.1035 20.6173C21.7541 20.1459 21.0886 20.047 20.6172 20.3964C19.5854 21.1612 18.3399 21.6042 16.9999 21.6042C15.6599 21.6042 14.4144 21.1612 13.3826 20.3964ZM22.6666 13.4583C22.6666 14.6319 22.0323 15.5833 21.2499 15.5833C20.4675 15.5833 19.8333 14.6319 19.8333 13.4583C19.8333 12.2847 20.4675 11.3333 21.2499 11.3333C22.0323 11.3333 22.6666 12.2847 22.6666 13.4583ZM12.7499 15.5833C13.5323 15.5833 14.1666 14.6319 14.1666 13.4583C14.1666 12.2847 13.5323 11.3333 12.7499 11.3333C11.9675 11.3333 11.3333 12.2847 11.3333 13.4583C11.3333 14.6319 11.9675 15.5833 12.7499 15.5833Z" fill="#CE7D63" />
            </svg>
        ),
        challenge: "Klothink needed a robust e-commerce platform to handle their growing inventory and customer base. They faced issues with scalability and user experience on their legacy system.",
        solution: "Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout. Additionally, we integrated an efficient checkout process and optimized the site for search engines.",
        results: "After the launch, Klothink saw a 200% increase in mobile traffic and a 50% increase in conversion rates. The new platform easily handled the holiday rush without any downtime.",
    },
    {
        id: 2,
        title: "FITNESS TRACKER APP",
        company: "FITNESS TRACKER APP",
        industry: "Health & Fitness",
        serviceUtilized: "Mobile App Development",
        website: "#",
        icon: (
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.91675 6.84159C9.91675 9.03429 12.3618 11.3441 14.3789 12.8765C15.511 13.7366 16.077 14.1667 17.0001 14.1667C17.9232 14.1667 18.4892 13.7366 19.6213 12.8766C21.6384 11.3441 24.0834 9.03432 24.0834 6.84157C24.0834 2.88884 20.1875 1.41307 17.0001 4.46653C13.8127 1.41307 9.91675 2.88884 9.91675 6.84159Z" fill="#CE7D63" />
                <path d="M8.86832 30.3002H8.50008C7.16444 30.3002 6.49661 30.3002 6.08168 29.8853C5.66675 29.4703 5.66675 28.8025 5.66675 27.4669V25.8916C5.66675 25.1571 5.66675 24.7898 5.85542 24.4618C6.04409 24.1338 6.32872 23.9683 6.89798 23.6372C10.6457 21.4575 15.9681 20.2304 19.5204 22.3492C19.7591 22.4915 19.9737 22.6634 20.1572 22.8694C20.9478 23.7575 20.8902 25.0978 19.979 25.8931C19.7866 26.0611 19.5815 26.1884 19.3749 26.2327C19.5447 26.213 19.7073 26.1905 19.8626 26.1657C21.1537 25.9598 22.2375 25.2698 23.2298 24.5203L25.79 22.5863C26.6925 21.9045 28.0321 21.9044 28.9348 22.586C29.7475 23.1996 29.996 24.21 29.4822 25.0336C28.8831 25.994 28.0389 27.2226 27.2283 27.9734C26.4166 28.7252 25.2081 29.3964 24.2215 29.8726C23.1286 30.4001 21.9213 30.704 20.6933 30.9028C18.2026 31.306 15.6069 31.2444 13.1415 30.7365C11.7478 30.4494 10.3004 30.3002 8.86832 30.3002Z" fill="#CE7D63" />
            </svg>
        ),
        challenge: "The client wanted to enter the crowded fitness app market with a unique value proposition but lacked the technical expertise to build a real-time tracking engine.",
        solution: "Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set personalized fitness goals, track their progress, and share achievements on social media platforms. Real-time data synchronization enabled users to access their data on multiple devices.",
        results: "The app achieved 100k downloads in the first month and maintained a 4.8-star rating. User retention rates were 30% higher than the industry average.",
    }
];
