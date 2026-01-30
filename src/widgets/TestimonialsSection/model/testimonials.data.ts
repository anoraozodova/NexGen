
export interface TestimonialItem {
    id: number;
    title: string;
    description: string;
    author: {
        name: string;
        position: string;
        avatar: string;
    };
}

export const testimonialsData: TestimonialItem[] = [
    {
        id: 1,
        title: "NEXGEN TURNED OUR BUSINESS AROUND!",
        description: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
        author: {
            name: "Sarah Thompson",
            position: "CEO of BlueBloom",
            avatar: "/avatars/CEO_ava.svg"
        }
    },
    {
        id: 2,
        title: "NEXGEN TURNED OUR BUSINESS AROUND!",
        description: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
        author: {
            name: "Wade Warren",
            position: "Art Director",
            avatar: "/avatars/Art_ava.svg"
        }
    },
    {
        id: 3,
        title: "WORKING WITH NEXGEN WAS A PLEASURE.",
        description: "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
        author: {
            name: "Lisa Williams",
            position: "CEO Of HealthTech",
            avatar: "/avatars/CEO_ava.svg"

        }
    },
    {
        id: 4,
        title: "NEXGEN'S WEB DESIGN BROUGHT OUR VISION",
        description: "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
        author: {
            name: "Jennifer Lee",
            position: "COO of Foodie Haven",
            avatar: "/avatars/Art_ava.svg"
        }
    }
];