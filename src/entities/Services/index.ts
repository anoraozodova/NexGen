import { Pencil, TabletSmartphone, CodeXml, Grid2x2Check } from "lucide-react";

export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    price: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const services: ServiceItem[] = [
    {
        id: 1,
        title: "WEB DESIGN",
        description:
            "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
        price: "$1,500",
        icon: Pencil,
    },
    {
        id: 2,
        title: "MOBILE APP DEVELOPMENT",
        description:
            "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
        price: "$2,500",
        icon: TabletSmartphone,
    },
    {
        id: 3,
        title: "WEB DEVELOPMENT",
        description:
            "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
        price: "$1,800",
        icon: CodeXml,
    },
    {
        id: 4,
        title: "DIGITAL MARKETING",
        description:
            "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility.",
        price: "$1,200",
        icon: Grid2x2Check,
    },
];
