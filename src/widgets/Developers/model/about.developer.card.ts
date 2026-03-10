import dev1 from '../../../assets/images/devCard_1.jpg';
import dev2 from '../../../assets/images/devCard_2.jpg';
import dev3 from '../../../assets/images/devCard_3.jpg';
import dev4 from '../../../assets/images/devCard_4.jpg';

export interface Developer {
    id: number;
    name: string;
    position: string;
    image: string;
}

export const developers: Developer[] = [
    {
        id: 1,
        name: "anora ozodova",
        position: "Co-Founder & CEO",
        image: dev1
    },
    {
        id: 2,
        name: "Kamola ozodova",
        position: "Head of Design",
        image: dev2
    },
    {
        id: 3,
        name: "Пак Чимини",
        position: "Lead Web Developer",
        image: dev3
    },
    {
        id: 4,
        name: "картинка из пинтереста",
        position: "Lead Backend Developer",
        image: dev4
    }
];
