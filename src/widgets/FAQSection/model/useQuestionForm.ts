import { useState } from 'react';
import type { QuestionFormData } from '../../../entities/FAQ/model/types';
// import type { QuestionFormData } from '@/entities/FAQ/model/types.tsx';

export const useQuestionForm = () => {
    const [formData, setFormData] = useState<QuestionFormData>({
        name: '',
        email: '',
        question: ''
    });

    const [errors, setErrors] = useState<Partial<QuestionFormData>>({});

    const updateField = (field: keyof QuestionFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Очищаем ошибку при вводе
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<QuestionFormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.question.trim()) {
            newErrors.question = 'Question is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) return;

        try {
            // Здесь отправка на сервер
            console.log('Submitting:', formData);

            // Очищаем форму после успешной отправки
            setFormData({ name: '', email: '', question: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return {
        formData,
        errors,
        updateField,
        handleSubmit
    };
};