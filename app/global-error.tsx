'use client';

import { Button } from '@/components/ui/Button';
import { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <html lang="en">
            <body className="bg-white text-slate-900 antialiased font-sans flex items-center justify-center min-h-screen flex-col text-center p-4">
                <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
                <p className="text-slate-600 mb-8 max-w-md">
                    A critical error occurred. Our engineering team has been notified.
                </p>
                <Button onClick={() => reset()} variant="default">
                    Try again
                </Button>
            </body>
        </html>
    );
}
