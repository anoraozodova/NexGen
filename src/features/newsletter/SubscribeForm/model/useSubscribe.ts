import { useState } from 'react';

export const useSubscribe = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const subscribe = async (email: string) => {
        setIsLoading(true);
        setError(null);

        try {
            // TODO: Замени на реальный API
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log('Subscribed:', email);
            setIsSuccess(true);

            setTimeout(() => setIsSuccess(false), 3000);
        } catch (err) {
            setError('Failed to subscribe. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        subscribe,
        isLoading,
        isSuccess,
        error
    };
};