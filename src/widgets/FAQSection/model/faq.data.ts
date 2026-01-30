// Если вы в файле widgets/FaqSection/model/faq.data.ts
import type { FaqItem } from '../../../entities/FAQ/model/types.ts';
export const faqData: FaqItem[] = [
    {
        id: 1,
        question: 'How long does it take to complete a web development project?',
        answer: 'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'
    },
    {
        id: 2,
        question: 'Can you handle large-scale mobile app development projects?',
        answer: 'Yes, we have experience with large-scale mobile applications...'
    },
    {
        id: 3,
        question: 'Can you integrate third-party APIs into our mobile app?',
        answer: 'Absolutely! We can integrate any third-party APIs...'
    },
    {
        id: 4,
        question: 'How do you ensure cross-platform compatibility for mobile apps?',
        answer: 'We use modern frameworks like React Native...'
    },
    {
        id: 5,
        question: 'What is your approach to user experience (UX) design?',
        answer: 'We follow user-centered design principles...'
    }
];