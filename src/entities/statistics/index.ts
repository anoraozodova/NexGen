export type StatisticData = {
    id: number;
    title: string;
    value: string;
    isLink?: boolean; // добавляем флаг для ссылки
}

export const statistics: StatisticData[] = [
    {
        id: 1,
        title: "Clients",
        value: "200+"
    },
    {
        id: 2,
        title: "Projects",
        value: "280+"
    },
    {
        id: 3,
        title: "Happy clients",
        value: "100%"
    },
    {
        id: 4,
        title: "Follower",
        value: "420K"
    },
    {
        id: 5,
        title: "Years of Experience",
        value: "10+"
    },
    {
        id: 6,
        title: "Know more",
        value: "→",
        isLink: true
    }
]